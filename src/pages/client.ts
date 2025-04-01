import * as grpc from '@grpc/grpc-js';
import path from 'path';
import type { GetServerSideProps } from 'next';
import { loadProto } from "@/client/loadProto";
import type { Props } from "@/interfaces/Application";
import type { Application } from "@/interfaces/Application";

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const PROTO_PATH = path.resolve(process.cwd(), 'src/proto/helloworld.proto');

  const packageDef = loadProto(PROTO_PATH);
  const proto = grpc.loadPackageDefinition(packageDef) as unknown as {
    helloworld: {
      Greeter: new (address: string, creds: grpc.ChannelCredentials) => {
        SayHello(
          req: { name: string },
          cb: (err: grpc.ServiceError | null, res: { message: string }) => void
        ): void;
        SayGoodbye(
          req: { name: string; replyFormat: number },
          cb: (err: grpc.ServiceError | null, res: { message: string }) => void
        ): void;
        FetchAllApplicationsFromDatabase(
          req: unknown,
          cb: (err: grpc.ServiceError | null, res: { applications: Application[] }) => void // Use `Application[]` here
        ): void;
      };
    };
  };

  const client = new proto.helloworld.Greeter(
    'localhost:15001',
    grpc.credentials.createInsecure()
  );

  const fetchApplications = new Promise<Application[]>((resolve, reject) => {
    client.FetchAllApplicationsFromDatabase({}, (err, res) => {
      if (err) return reject(err);
      resolve(res.applications);
    });
  });

  const applications = await fetchApplications;

  return {
    props: {
      applications,
    },
  };
};
