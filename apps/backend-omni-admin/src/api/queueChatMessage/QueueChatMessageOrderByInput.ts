import { SortOrder } from "../../util/SortOrder";

export type QueueChatMessageOrderByInput = {
  agente?: SortOrder;
  dadosAdicionais?: SortOrder;
  dataHora?: SortOrder;
  id?: SortOrder;
  idQueueChatId?: SortOrder;
  inOut?: SortOrder;
  mailMessageId?: SortOrder;
  quotedMsg?: SortOrder;
  repliedIdMsg?: SortOrder;
  status?: SortOrder;
  texto?: SortOrder;
};
