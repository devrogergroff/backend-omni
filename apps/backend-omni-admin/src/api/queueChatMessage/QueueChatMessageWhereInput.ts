import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { QueueChatWhereUniqueInput } from "../queueChat/QueueChatWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { QueueAnexoListRelationFilter } from "../queueAnexo/QueueAnexoListRelationFilter";

export type QueueChatMessageWhereInput = {
  agente?: StringNullableFilter;
  dadosAdicionais?: JsonFilter;
  dataHora?: DateTimeNullableFilter;
  id?: StringFilter;
  idQueueChat?: QueueChatWhereUniqueInput;
  inOut?: IntNullableFilter;
  mailMessageId?: IntNullableFilter;
  queueAnexosMesssage?: QueueAnexoListRelationFilter;
  quotedMsg?: JsonFilter;
  repliedIdMsg?: IntNullableFilter;
  status?: "Option1";
  texto?: StringNullableFilter;
};
