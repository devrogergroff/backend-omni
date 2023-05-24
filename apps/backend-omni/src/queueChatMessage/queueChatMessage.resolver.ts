import * as graphql from "@nestjs/graphql";
import { QueueChatMessageResolverBase } from "./base/queueChatMessage.resolver.base";
import { QueueChatMessage } from "./base/QueueChatMessage";
import { QueueChatMessageService } from "./queueChatMessage.service";

@graphql.Resolver(() => QueueChatMessage)
export class QueueChatMessageResolver extends QueueChatMessageResolverBase {
  constructor(protected readonly service: QueueChatMessageService) {
    super(service);
  }
}
