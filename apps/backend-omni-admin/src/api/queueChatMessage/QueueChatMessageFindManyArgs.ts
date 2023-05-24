import { QueueChatMessageWhereInput } from "./QueueChatMessageWhereInput";
import { QueueChatMessageOrderByInput } from "./QueueChatMessageOrderByInput";

export type QueueChatMessageFindManyArgs = {
  where?: QueueChatMessageWhereInput;
  orderBy?: Array<QueueChatMessageOrderByInput>;
  skip?: number;
  take?: number;
};
