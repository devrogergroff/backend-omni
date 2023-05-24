import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { QueueChatMessageWhereUniqueInput } from "../queueChatMessage/QueueChatMessageWhereUniqueInput";

export type QueueAnexoWhereInput = {
  caminho?: StringNullableFilter;
  id?: StringFilter;
  idMessage?: QueueChatMessageWhereUniqueInput;
  mimeType?: StringNullableFilter;
};
