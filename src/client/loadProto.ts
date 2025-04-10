import * as protoLoader from '@grpc/proto-loader';
import type { PackageDefinition } from '@grpc/proto-loader';

export function loadProto(protoPath: string): PackageDefinition {
  return protoLoader.loadSync(protoPath, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
  });
}