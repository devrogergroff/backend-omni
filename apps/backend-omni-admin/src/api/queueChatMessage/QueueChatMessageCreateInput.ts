import { InputJsonValue } from "../../types";
import { QueueChatWhereUniqueInput } from "../queueChat/QueueChatWhereUniqueInput";
import { QueueAnexoCreateNestedManyWithoutQueueChatMessagesInput } from "./QueueAnexoCreateNestedManyWithoutQueueChatMessagesInput";

export type QueueChatMessageCreateInput = {
  agente?: string | null;
  dadosAdicionais?: InputJsonValue;
  dataHora?: Date | null;
  idQueueChat: QueueChatWhereUniqueInput;
  inOut?: number | null;
  mailMessageId?: number | null;
  queueAnexosMesssage?: QueueAnexoCreateNestedManyWithoutQueueChatMessagesInput;
  quotedMsg?: InputJsonValue;
  repliedIdMsg?: number | null;
  status?: "Option1" | null;
  texto?: string | null;
};
