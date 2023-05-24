import * as graphql from "@nestjs/graphql";
import { QueueAnexoResolverBase } from "./base/queueAnexo.resolver.base";
import { QueueAnexo } from "./base/QueueAnexo";
import { QueueAnexoService } from "./queueAnexo.service";

@graphql.Resolver(() => QueueAnexo)
export class QueueAnexoResolver extends QueueAnexoResolverBase {
  constructor(protected readonly service: QueueAnexoService) {
    super(service);
  }
}
