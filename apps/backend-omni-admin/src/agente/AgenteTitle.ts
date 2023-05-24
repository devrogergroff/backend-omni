import { Agente as TAgente } from "../api/agente/Agente";

export const AGENTE_TITLE_FIELD = "id";

export const AgenteTitle = (record: TAgente): string => {
  return record.id || String(record.id);
};
