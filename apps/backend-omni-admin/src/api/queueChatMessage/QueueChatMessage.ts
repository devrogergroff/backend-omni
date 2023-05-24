import { JsonValue } from "type-fest";
import { QueueChat } from "../queueChat/QueueChat";
import { QueueAnexo } from "../queueAnexo/QueueAnexo";

export type QueueChatMessage = {
  agente: string | null;
  dadosAdicionais: JsonValue;
  dataHora: Date | null;
  id: string;
  idQueueChat?: QueueChat;
  inOut: number | null;
  mailMessageId: number | null;
  queueAnexosMesssage?: Array<QueueAnexo>;
  quotedMsg: JsonValue;
  repliedIdMsg: number | null;
  status?: "Option1" | null;
  texto: string | null;
};
