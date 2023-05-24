import * as graphql from "@nestjs/graphql";
import { AgenteResolverBase } from "./base/agente.resolver.base";
import { Agente } from "./base/Agente";
import { AgenteService } from "./agente.service";

@graphql.Resolver(() => Agente)
export class AgenteResolver extends AgenteResolverBase {
  constructor(protected readonly service: AgenteService) {
    super(service);
  }
}
