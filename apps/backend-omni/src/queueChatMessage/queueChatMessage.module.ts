import { Module } from "@nestjs/common";
import { QueueChatMessageModuleBase } from "./base/queueChatMessage.module.base";
import { QueueChatMessageService } from "./queueChatMessage.service";
import { QueueChatMessageController } from "./queueChatMessage.controller";
import { QueueChatMessageResolver } from "./queueChatMessage.resolver";

@Module({
  imports: [QueueChatMessageModuleBase],
  controllers: [QueueChatMessageController],
  providers: [QueueChatMessageService, QueueChatMessageResolver],
  exports: [QueueChatMessageService],
})
export class QueueChatMessageModule {}
