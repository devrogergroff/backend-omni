import { InputJsonValue } from "../../types";
import { QueueChatWhereUniqueInput } from "../queueChat/QueueChatWhereUniqueInput";
import { QueueAnexoUpdateManyWithoutQueueChatMessagesInput } from "./QueueAnexoUpdateManyWithoutQueueChatMessagesInput";

export type QueueChatMessageUpdateInput = {
  agente?: string | null;
  dadosAdicionais?: InputJsonValue;
  dataHora?: Date | null;
  idQueueChat?: QueueChatWhereUniqueInput;
  inOut?: number | null;
  mailMessageId?: number | null;
  queueAnexosMesssage?: QueueAnexoUpdateManyWithoutQueueChatMessagesInput;
  quotedMsg?: InputJsonValue;
  repliedIdMsg?: number | null;
  status?: "Option1" | null;
  texto?: string | null;
};
