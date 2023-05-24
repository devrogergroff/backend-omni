import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AgenteService } from "./agente.service";
import { AgenteControllerBase } from "./base/agente.controller.base";

@swagger.ApiTags("agentes")
@common.Controller("agentes")
export class AgenteController extends AgenteControllerBase {
  constructor(protected readonly service: AgenteService) {
    super(service);
  }
}
