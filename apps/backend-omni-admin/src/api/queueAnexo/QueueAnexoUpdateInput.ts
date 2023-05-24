import { QueueChatMessageWhereUniqueInput } from "../queueChatMessage/QueueChatMessageWhereUniqueInput";

export type QueueAnexoUpdateInput = {
  caminho?: string | null;
  idMessage?: QueueChatMessageWhereUniqueInput | null;
  mimeType?: string | null;
};
