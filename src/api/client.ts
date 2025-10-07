import * as grpc from "@grpc/grpc-js";
import path from "path";
import type { GetServerSideProps } from "next";
import { loadProto } from "@/client/loadProto";
import type { Props } from "@/interfaces/application";
import type { Application } from "@/interfaces/application";

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const GREETER_PROTO_PATH = path.resolve(
    process.cwd(),
    "src/proto/helloworld.proto",
  );
  const APP_QUERY_PROTO_PATH = path.resolve(
    process.cwd(),
    "src/proto/applicationQuery.proto",
  );

  const greeterDef = loadProto(GREETER_PROTO_PATH);
  const appQueryDef = loadProto(APP_QUERY_PROTO_PATH);

  const greeterProto = grpc.loadPackageDefinition(greeterDef) as unknown as {
    helloworld: {
      Greeter: new (
        address: string,
        creds: grpc.ChannelCredentials,
      ) => {
        SayHello(
          req: { name: string },
          cb: (err: grpc.ServiceError | null, res: { message: string }) => void,
        ): void;
        SayGoodbye(
          req: { name: string; replyFormat: number },
          cb: (err: grpc.ServiceError | null, res: { message: string }) => void,
        ): void;
      };
    };
  };

  const appProto = grpc.loadPackageDefinition(appQueryDef) as unknown as {
    application: {
      ApplicationQueryService: new (
        address: string,
        creds: grpc.ChannelCredentials,
      ) => {
        FetchAllApplicationsFromDatabase: (
          req: object,
          cb: (
            err: grpc.ServiceError | null,
            res: { applications: Application[] },
          ) => void,
        ) => void;
      };
    };
  };

  const greeterClient = new greeterProto.helloworld.Greeter(
    "localhost:15001",
    grpc.credentials.createInsecure(),
  );

  const appQueryClient = new appProto.application.ApplicationQueryService(
    "localhost:15001",
    grpc.credentials.createInsecure(),
  );

  const fetchApplications = new Promise<Application[]>((resolve, reject) => {
    appQueryClient.FetchAllApplicationsFromDatabase({}, (err, res) => {
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
