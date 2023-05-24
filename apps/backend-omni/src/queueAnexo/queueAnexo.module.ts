import { Module } from "@nestjs/common";
import { QueueAnexoModuleBase } from "./base/queueAnexo.module.base";
import { QueueAnexoService } from "./queueAnexo.service";
import { QueueAnexoController } from "./queueAnexo.controller";
import { QueueAnexoResolver } from "./queueAnexo.resolver";

@Module({
  imports: [QueueAnexoModuleBase],
  controllers: [QueueAnexoController],
  providers: [QueueAnexoService, QueueAnexoResolver],
  exports: [QueueAnexoService],
})
export class QueueAnexoModule {}
