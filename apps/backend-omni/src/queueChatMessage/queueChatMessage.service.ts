import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QueueChatMessageServiceBase } from "./base/queueChatMessage.service.base";

@Injectable()
export class QueueChatMessageService extends QueueChatMessageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
