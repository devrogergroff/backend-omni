/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { QueueAnexoWhereUniqueInput } from "../../queueAnexo/base/QueueAnexoWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class QueueAnexoUpdateManyWithoutQueueChatMessagesInput {
  @Field(() => [QueueAnexoWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [QueueAnexoWhereUniqueInput],
  })
  connect?: Array<QueueAnexoWhereUniqueInput>;

  @Field(() => [QueueAnexoWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [QueueAnexoWhereUniqueInput],
  })
  disconnect?: Array<QueueAnexoWhereUniqueInput>;

  @Field(() => [QueueAnexoWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [QueueAnexoWhereUniqueInput],
  })
  set?: Array<QueueAnexoWhereUniqueInput>;
}

export { QueueAnexoUpdateManyWithoutQueueChatMessagesInput as QueueAnexoUpdateManyWithoutQueueChatMessagesInput };
