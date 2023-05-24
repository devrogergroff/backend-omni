import { Module } from "@nestjs/common";
import { QueueChatModuleBase } from "./base/queueChat.module.base";
import { QueueChatService } from "./queueChat.service";
import { QueueChatController } from "./queueChat.controller";
import { QueueChatResolver } from "./queueChat.resolver";

@Module({
  imports: [QueueChatModuleBase],
  controllers: [QueueChatController],
  providers: [QueueChatService, QueueChatResolver],
  exports: [QueueChatService],
})
export class QueueChatModule {}
