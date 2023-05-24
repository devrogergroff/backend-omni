import { QueueAnexoWhereInput } from "./QueueAnexoWhereInput";
import { QueueAnexoOrderByInput } from "./QueueAnexoOrderByInput";

export type QueueAnexoFindManyArgs = {
  where?: QueueAnexoWhereInput;
  orderBy?: Array<QueueAnexoOrderByInput>;
  skip?: number;
  take?: number;
};
