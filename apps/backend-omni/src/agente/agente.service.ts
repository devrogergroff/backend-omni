import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AgenteServiceBase } from "./base/agente.service.base";

@Injectable()
export class AgenteService extends AgenteServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
