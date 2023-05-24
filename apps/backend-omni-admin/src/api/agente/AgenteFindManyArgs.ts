import { AgenteWhereInput } from "./AgenteWhereInput";
import { AgenteOrderByInput } from "./AgenteOrderByInput";

export type AgenteFindManyArgs = {
  where?: AgenteWhereInput;
  orderBy?: Array<AgenteOrderByInput>;
  skip?: number;
  take?: number;
};
