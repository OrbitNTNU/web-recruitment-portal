import type { NextApiRequest, NextApiResponse } from 'next';
import * as grpc from '@grpc/grpc-js';
import path from 'path';
import { loadProto } from "@/client/loadProto";
import { type ApplicationRequestBody } from "@/interfaces/ApplicationRequestBody";


const PROTO_PATH = path.resolve(process.cwd(), 'src/proto/helloworld.proto');
const packageDefinition = loadProto(PROTO_PATH);
const proto = grpc.loadPackageDefinition(packageDefinition) as unknown as {
  helloworld: {
    Greeter: new (
      address: string,
      credentials: grpc.ChannelCredentials
    ) => {
      SubmitApplication: (
        req: {
          name: string;
          personalEmail: string;
          ntnuUsername: string;
          phoneNumber: string;
          fieldOfStudy: string;
          yearOfStudy: number;
          experience: string;
          description: string;
          submissionDate: string;
          saveApplication: number;
        },
        callback: (
          error: grpc.ServiceError | null,
          response: { message: string }
        ) => void
      ) => void;
    };
  };
};

const client = new proto.helloworld.Greeter(
  'localhost:15001',
  grpc.credentials.createInsecure()
);

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end('Method Not Allowed');
  }
  const body = req.body as ApplicationRequestBody;

  const {
    name,
    personalEmail,
    ntnuUsername,
    phoneNumber,
    fieldOfStudy,
    yearOfStudy,
    experience,
    description,
    submissionDate,
    saveApplication,
  } = body;

  client.SubmitApplication(
    {
      name,
      personalEmail,
      ntnuUsername,
      phoneNumber,
      fieldOfStudy,
      yearOfStudy: Number(yearOfStudy),
      experience,
      description,
      submissionDate,
      saveApplication,
    },
    (err, grpcRes) => {
      if (err) {
        console.error('gRPC Error:', err);
        return res.status(500).json({ error: err.message });
      }

      return res.status(200).json({ message: grpcRes.message });
    }
  );
}
