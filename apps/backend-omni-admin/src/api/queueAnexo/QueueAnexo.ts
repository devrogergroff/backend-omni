import { QueueChatMessage } from "../queueChatMessage/QueueChatMessage";

export type QueueAnexo = {
  caminho: string | null;
  id: string;
  idMessage?: QueueChatMessage | null;
  mimeType: string | null;
};
