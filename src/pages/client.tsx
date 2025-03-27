import * as grpc from '@grpc/grpc-js';
import path from 'path';
import type { GetServerSideProps } from 'next';
import { loadProto } from "@/client/loadProto";
import type { Props } from "@/interfaces/clientProps";

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
      };
    };
  };

  const client = new proto.helloworld.Greeter(
    'localhost:15001',
    grpc.credentials.createInsecure()
  );

  const helloMessage = await new Promise<string>((resolve, reject) => {
    client.SayHello({ name: 'John' }, (err, res) => {
      if (err) return reject(err);
      resolve(res.message);
    });
  });

  const goodbyeMessage = await new Promise<string>((resolve, reject) => {
    client.SayGoodbye({ name: 'John', replyFormat: 1 }, (err, res) => {
      if (err) return reject(err);
      resolve(res.message);
    });
  });

  return {
    props: {
      helloMessage,
      goodbyeMessage,
    },
  };
};


