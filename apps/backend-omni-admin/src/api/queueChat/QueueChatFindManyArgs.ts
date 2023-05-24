import { QueueChatWhereInput } from "./QueueChatWhereInput";
import { QueueChatOrderByInput } from "./QueueChatOrderByInput";

export type QueueChatFindManyArgs = {
  where?: QueueChatWhereInput;
  orderBy?: Array<QueueChatOrderByInput>;
  skip?: number;
  take?: number;
};
