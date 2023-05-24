import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QueueChatService } from "./queueChat.service";
import { QueueChatControllerBase } from "./base/queueChat.controller.base";

@swagger.ApiTags("queueChats")
@common.Controller("queueChats")
export class QueueChatController extends QueueChatControllerBase {
  constructor(protected readonly service: QueueChatService) {
    super(service);
  }
}
