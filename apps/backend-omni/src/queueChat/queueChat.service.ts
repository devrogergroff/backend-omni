import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QueueChatServiceBase } from "./base/queueChat.service.base";

@Injectable()
export class QueueChatService extends QueueChatServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
