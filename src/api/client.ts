import * as grpc from "@grpc/grpc-js";
import path from "path";
import type { GetServerSideProps } from "next";
import { loadProto } from "@/server/grpc/loadProto";
import type { Application, Props } from "@/types/application";

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const APP_QUERY_PROTO_PATH = path.resolve(
    process.cwd(),
    "src/server/grpc/protos/applicationQuery.proto",
  );

  const appQueryDef = loadProto(APP_QUERY_PROTO_PATH);
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
