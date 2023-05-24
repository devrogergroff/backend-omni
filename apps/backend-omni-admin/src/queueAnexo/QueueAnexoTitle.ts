import { QueueAnexo as TQueueAnexo } from "../api/queueAnexo/QueueAnexo";

export const QUEUEANEXO_TITLE_FIELD = "caminho";

export const QueueAnexoTitle = (record: TQueueAnexo): string => {
  return record.caminho || String(record.id);
};
