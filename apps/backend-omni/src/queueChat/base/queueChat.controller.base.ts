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
import { QueueChatService } from "../queueChat.service";
import { QueueChatCreateInput } from "./QueueChatCreateInput";
import { QueueChatWhereInput } from "./QueueChatWhereInput";
import { QueueChatWhereUniqueInput } from "./QueueChatWhereUniqueInput";
import { QueueChatFindManyArgs } from "./QueueChatFindManyArgs";
import { QueueChatUpdateInput } from "./QueueChatUpdateInput";
import { QueueChat } from "./QueueChat";
import { QueueChatMessageFindManyArgs } from "../../queueChatMessage/base/QueueChatMessageFindManyArgs";
import { QueueChatMessage } from "../../queueChatMessage/base/QueueChatMessage";
import { QueueChatMessageWhereUniqueInput } from "../../queueChatMessage/base/QueueChatMessageWhereUniqueInput";

export class QueueChatControllerBase {
  constructor(protected readonly service: QueueChatService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: QueueChat })
  async create(@common.Body() data: QueueChatCreateInput): Promise<QueueChat> {
    return await this.service.create({
      data: data,
      select: {
        action: true,
        assunto: true,
        ativo: true,
        createdAt: true,
        dadosAdicionais: true,
        dataFim: true,
        dataHoraLastMsg: true,
        dataIni: true,
        email: true,
        fromAgente: true,
        fromFila: true,
        fromId: true,
        fromMotivo: true,
        fromName: true,
        id: true,
        idCliente: true,
        linkedid: true,
        newstate: true,
        paiId: true,
        qtdMsg: true,
        qtdMsgNaoLidas: true,
        queue: true,
        queueFrom: true,
        queueTypeId: true,
        sentido: true,
        status: true,
        ultimoAgente: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [QueueChat] })
  @ApiNestedQuery(QueueChatFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<QueueChat[]> {
    const args = plainToClass(QueueChatFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        action: true,
        assunto: true,
        ativo: true,
        createdAt: true,
        dadosAdicionais: true,
        dataFim: true,
        dataHoraLastMsg: true,
        dataIni: true,
        email: true,
        fromAgente: true,
        fromFila: true,
        fromId: true,
        fromMotivo: true,
        fromName: true,
        id: true,
        idCliente: true,
        linkedid: true,
        newstate: true,
        paiId: true,
        qtdMsg: true,
        qtdMsgNaoLidas: true,
        queue: true,
        queueFrom: true,
        queueTypeId: true,
        sentido: true,
        status: true,
        ultimoAgente: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: QueueChat })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: QueueChatWhereUniqueInput
  ): Promise<QueueChat | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        action: true,
        assunto: true,
        ativo: true,
        createdAt: true,
        dadosAdicionais: true,
        dataFim: true,
        dataHoraLastMsg: true,
        dataIni: true,
        email: true,
        fromAgente: true,
        fromFila: true,
        fromId: true,
        fromMotivo: true,
        fromName: true,
        id: true,
        idCliente: true,
        linkedid: true,
        newstate: true,
        paiId: true,
        qtdMsg: true,
        qtdMsgNaoLidas: true,
        queue: true,
        queueFrom: true,
        queueTypeId: true,
        sentido: true,
        status: true,
        ultimoAgente: true,
        updatedAt: true,
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
  @swagger.ApiOkResponse({ type: QueueChat })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: QueueChatWhereUniqueInput,
    @common.Body() data: QueueChatUpdateInput
  ): Promise<QueueChat | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          action: true,
          assunto: true,
          ativo: true,
          createdAt: true,
          dadosAdicionais: true,
          dataFim: true,
          dataHoraLastMsg: true,
          dataIni: true,
          email: true,
          fromAgente: true,
          fromFila: true,
          fromId: true,
          fromMotivo: true,
          fromName: true,
          id: true,
          idCliente: true,
          linkedid: true,
          newstate: true,
          paiId: true,
          qtdMsg: true,
          qtdMsgNaoLidas: true,
          queue: true,
          queueFrom: true,
          queueTypeId: true,
          sentido: true,
          status: true,
          ultimoAgente: true,
          updatedAt: true,
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
  @swagger.ApiOkResponse({ type: QueueChat })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: QueueChatWhereUniqueInput
  ): Promise<QueueChat | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          action: true,
          assunto: true,
          ativo: true,
          createdAt: true,
          dadosAdicionais: true,
          dataFim: true,
          dataHoraLastMsg: true,
          dataIni: true,
          email: true,
          fromAgente: true,
          fromFila: true,
          fromId: true,
          fromMotivo: true,
          fromName: true,
          id: true,
          idCliente: true,
          linkedid: true,
          newstate: true,
          paiId: true,
          qtdMsg: true,
          qtdMsgNaoLidas: true,
          queue: true,
          queueFrom: true,
          queueTypeId: true,
          sentido: true,
          status: true,
          ultimoAgente: true,
          updatedAt: true,
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

  @common.Get("/:id/queueChatMessages")
  @ApiNestedQuery(QueueChatMessageFindManyArgs)
  async findManyQueueChatMessages(
    @common.Req() request: Request,
    @common.Param() params: QueueChatWhereUniqueInput
  ): Promise<QueueChatMessage[]> {
    const query = plainToClass(QueueChatMessageFindManyArgs, request.query);
    const results = await this.service.findQueueChatMessages(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/queueChatMessages")
  async connectQueueChatMessages(
    @common.Param() params: QueueChatWhereUniqueInput,
    @common.Body() body: QueueChatMessageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      queueChatMessages: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/queueChatMessages")
  async updateQueueChatMessages(
    @common.Param() params: QueueChatWhereUniqueInput,
    @common.Body() body: QueueChatMessageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      queueChatMessages: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/queueChatMessages")
  async disconnectQueueChatMessages(
    @common.Param() params: QueueChatWhereUniqueInput,
    @common.Body() body: QueueChatMessageWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      queueChatMessages: {
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
