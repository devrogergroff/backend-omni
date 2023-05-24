import * as graphql from "@nestjs/graphql";
import { QueueChatResolverBase } from "./base/queueChat.resolver.base";
import { QueueChat } from "./base/QueueChat";
import { QueueChatService } from "./queueChat.service";

@graphql.Resolver(() => QueueChat)
export class QueueChatResolver extends QueueChatResolverBase {
  constructor(protected readonly service: QueueChatService) {
    super(service);
  }
}
