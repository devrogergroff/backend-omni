import { QueueChatMessageWhereUniqueInput } from "../queueChatMessage/QueueChatMessageWhereUniqueInput";

export type QueueAnexoCreateInput = {
  caminho?: string | null;
  idMessage?: QueueChatMessageWhereUniqueInput | null;
  mimeType?: string | null;
};
