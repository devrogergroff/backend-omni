import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QueueAnexoService } from "./queueAnexo.service";
import { QueueAnexoControllerBase } from "./base/queueAnexo.controller.base";

@swagger.ApiTags("queueAnexos")
@common.Controller("queueAnexos")
export class QueueAnexoController extends QueueAnexoControllerBase {
  constructor(protected readonly service: QueueAnexoService) {
    super(service);
  }
}
