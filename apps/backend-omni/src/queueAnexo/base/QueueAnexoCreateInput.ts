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
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { QueueChatMessageWhereUniqueInput } from "../../queueChatMessage/base/QueueChatMessageWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class QueueAnexoCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  caminho?: string | null;

  @ApiProperty({
    required: false,
    type: () => QueueChatMessageWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => QueueChatMessageWhereUniqueInput)
  @IsOptional()
  @Field(() => QueueChatMessageWhereUniqueInput, {
    nullable: true,
  })
  idMessage?: QueueChatMessageWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  mimeType?: string | null;
}

export { QueueAnexoCreateInput as QueueAnexoCreateInput };
