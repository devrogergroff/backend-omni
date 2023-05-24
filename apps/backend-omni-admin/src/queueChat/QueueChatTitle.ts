import { QueueChat as TQueueChat } from "../api/queueChat/QueueChat";

export const QUEUECHAT_TITLE_FIELD = "fromName";

export const QueueChatTitle = (record: TQueueChat): string => {
  return record.fromName || String(record.id);
};
