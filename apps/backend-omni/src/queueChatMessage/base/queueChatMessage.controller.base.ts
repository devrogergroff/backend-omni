/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { QueueChatMessageService } from "../queueChatMessage.service";
import { QueueChatMessageCreateInput } from "./QueueChatMessageCreateInput";
import { QueueChatMessageWhereInput } from "./QueueChatMessageWhereInput";
import { QueueChatMessageWhereUniqueInput } from "./QueueChatMessageWhereUniqueInput";
import { QueueChatMessageFindManyArgs } from "./QueueChatMessageFindManyArgs";
import { QueueChatMessageUpdateInput } from "./QueueChatMessageUpdateInput";
import { QueueChatMessage } from "./QueueChatMessage";
import { QueueAnexoFindManyArgs } from "../../queueAnexo/base/QueueAnexoFindManyArgs";
import { QueueAnexo } from "../../queueAnexo/base/QueueAnexo";
import { QueueAnexoWhereUniqueInput } from "../../queueAnexo/base/QueueAnexoWhereUniqueInput";

export class QueueChatMessageControllerBase {
  constructor(protected readonly service: QueueChatMessageService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: QueueChatMessage })
  async create(
    @common.Body() data: QueueChatMessageCreateInput
  ): Promise<QueueChatMessage> {
    return await this.service.create({
      data: {
        ...data,

        idQueueChat: {
          connect: data.idQueueChat,
        },
      },
      select: {
        agente: true,
        dadosAdicionais: true,
        dataHora: true,
        id: true,

        idQueueChat: {
          select: {
            id: true,
          },
        },

        inOut: true,
        mailMessageId: true,
        quotedMsg: true,
        repliedIdMsg: true,
        status: true,
        texto: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [QueueChatMessage] })
  @ApiNestedQuery(QueueChatMessageFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<QueueChatMessage[]> {
    const args = plainToClass(QueueChatMessageFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        agente: true,
        dadosAdicionais: true,
        dataHora: true,
        id: true,

        idQueueChat: {
          select: {
            id: true,
          },
        },

        inOut: true,
        mailMessageId: true,
        quotedMsg: true,
        repliedIdMsg: true,
        status: true,
        texto: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: QueueChatMessage })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: QueueChatMessageWhereUniqueInput
  ): Promise<QueueChatMessage | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        agente: true,
        dadosAdicionais: true,
        dataHora: true,
        id: true,

        idQueueChat: {
          select: {
            id: true,
          },
        },

        inOut: true,
        mailMessageId: true,
        quotedMsg: true,
        repliedIdMsg: true,
        status: true,
        texto: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: QueueChatMessage })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: QueueChatMessageWhereUniqueInput,
    @common.Body() data: QueueChatMessageUpdateInput
  ): Promise<QueueChatMessage | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          idQueueChat: {
            connect: data.idQueueChat,
          },
        },
        select: {
          agente: true,
          dadosAdicionais: true,
          dataHora: true,
          id: true,

          idQueueChat: {
            select: {
              id: true,
            },
          },

          inOut: true,
          mailMessageId: true,
          quotedMsg: true,
          repliedIdMsg: true,
          status: true,
          texto: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: QueueChatMessage })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: QueueChatMessageWhereUniqueInput
  ): Promise<QueueChatMessage | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          agente: true,
          dadosAdicionais: true,
          dataHora: true,
          id: true,

          idQueueChat: {
            select: {
              id: true,
            },
          },

          inOut: true,
          mailMessageId: true,
          quotedMsg: true,
          repliedIdMsg: true,
          status: true,
          texto: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/queueAnexosMesssage")
  @ApiNestedQuery(QueueAnexoFindManyArgs)
  async findManyQueueAnexosMesssage(
    @common.Req() request: Request,
    @common.Param() params: QueueChatMessageWhereUniqueInput
  ): Promise<QueueAnexo[]> {
    const query = plainToClass(QueueAnexoFindManyArgs, request.query);
    const results = await this.service.findQueueAnexosMesssage(params.id, {
      ...query,
      select: {
        caminho: true,
        id: true,

        idMessage: {
          select: {
            id: true,
          },
        },

        mimeType: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/queueAnexosMesssage")
  async connectQueueAnexosMesssage(
    @common.Param() params: QueueChatMessageWhereUniqueInput,
    @common.Body() body: QueueAnexoWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      queueAnexosMesssage: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/queueAnexosMesssage")
  async updateQueueAnexosMesssage(
    @common.Param() params: QueueChatMessageWhereUniqueInput,
    @common.Body() body: QueueAnexoWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      queueAnexosMesssage: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/queueAnexosMesssage")
  async disconnectQueueAnexosMesssage(
    @common.Param() params: QueueChatMessageWhereUniqueInput,
    @common.Body() body: QueueAnexoWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      queueAnexosMesssage: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}
