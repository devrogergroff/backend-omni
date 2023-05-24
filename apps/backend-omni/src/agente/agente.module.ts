import { Module } from "@nestjs/common";
import { AgenteModuleBase } from "./base/agente.module.base";
import { AgenteService } from "./agente.service";
import { AgenteController } from "./agente.controller";
import { AgenteResolver } from "./agente.resolver";

@Module({
  imports: [AgenteModuleBase],
  controllers: [AgenteController],
  providers: [AgenteService, AgenteResolver],
  exports: [AgenteService],
})
export class AgenteModule {}
