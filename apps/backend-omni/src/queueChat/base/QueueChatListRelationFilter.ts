/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { QueueChatWhereInput } from "./QueueChatWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class QueueChatListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => QueueChatWhereInput,
  })
  @ValidateNested()
  @Type(() => QueueChatWhereInput)
  @IsOptional()
  @Field(() => QueueChatWhereInput, {
    nullable: true,
  })
  every?: QueueChatWhereInput;

  @ApiProperty({
    required: false,
    type: () => QueueChatWhereInput,
  })
  @ValidateNested()
  @Type(() => QueueChatWhereInput)
  @IsOptional()
  @Field(() => QueueChatWhereInput, {
    nullable: true,
  })
  some?: QueueChatWhereInput;

  @ApiProperty({
    required: false,
    type: () => QueueChatWhereInput,
  })
  @ValidateNested()
  @Type(() => QueueChatWhereInput)
  @IsOptional()
  @Field(() => QueueChatWhereInput, {
    nullable: true,
  })
  none?: QueueChatWhereInput;
}
export { QueueChatListRelationFilter as QueueChatListRelationFilter };
