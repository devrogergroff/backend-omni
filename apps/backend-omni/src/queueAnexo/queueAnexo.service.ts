import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { QueueAnexoServiceBase } from "./base/queueAnexo.service.base";

@Injectable()
export class QueueAnexoService extends QueueAnexoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
