import { QueueChatMessage as TQueueChatMessage } from "../api/queueChatMessage/QueueChatMessage";

export const QUEUECHATMESSAGE_TITLE_FIELD = "agente";

export const QueueChatMessageTitle = (record: TQueueChatMessage): string => {
  return record.agente || String(record.id);
};
