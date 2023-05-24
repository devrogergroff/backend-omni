import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QueueChatMessageService } from "./queueChatMessage.service";
import { QueueChatMessageControllerBase } from "./base/queueChatMessage.controller.base";

@swagger.ApiTags("queueChatMessages")
@common.Controller("queueChatMessages")
export class QueueChatMessageController extends QueueChatMessageControllerBase {
  constructor(protected readonly service: QueueChatMessageService) {
    super(service);
  }
}
