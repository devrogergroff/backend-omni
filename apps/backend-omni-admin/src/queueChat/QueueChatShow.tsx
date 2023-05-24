import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { QUEUECHAT_TITLE_FIELD } from "./QueueChatTitle";

export const QueueChatShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="action" source="action" />
        <TextField label="assunto" source="assunto" />
        <BooleanField label="ativo" source="ativo" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="dadosAdicionais" source="dadosAdicionais" />
        <TextField label="dataFim" source="dataFim" />
        <TextField label="data_hora_last_msg" source="dataHoraLastMsg" />
        <TextField label="dataIni" source="dataIni" />
        <TextField label="email" source="email" />
        <TextField label="FromAgente" source="fromAgente" />
        <TextField label="FromFila" source="fromFila" />
        <TextField label="fromID" source="fromId" />
        <TextField label="FromMotivo" source="fromMotivo" />
        <TextField label="fromName" source="fromName" />
        <TextField label="ID" source="id" />
        <TextField label="idCliente" source="idCliente" />
        <TextField label="linkedid	" source="linkedid" />
        <BooleanField label="newstate" source="newstate" />
        <TextField label="PaiId" source="paiId" />
        <TextField label="qtd_msg" source="qtdMsg" />
        <TextField label="qtd_msg_nao_lidas" source="qtdMsgNaoLidas" />
        <TextField label="queue" source="queue" />
        <TextField label="queueFrom" source="queueFrom" />
        <TextField label="queueTypeID" source="queueTypeId" />
        <TextField label="sentido" source="sentido" />
        <TextField label="status" source="status" />
        <TextField label="ultimoAgente" source="ultimoAgente" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="QueueChatMessage"
          target="QueueChatId"
          label="queueChatMessages"
        >
          <Datagrid rowClick="show">
            <TextField label="agente" source="agente" />
            <TextField label="dados_adicionais" source="dadosAdicionais" />
            <TextField label="dataHora" source="dataHora" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="idQueueChat"
              source="queuechat.id"
              reference="QueueChat"
            >
              <TextField source={QUEUECHAT_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="inOut" source="inOut" />
            <TextField label="mailMessageID" source="mailMessageId" />
            <TextField label="quotedMsg" source="quotedMsg" />
            <TextField label="repliedIdMsg" source="repliedIdMsg" />
            <TextField label="status" source="status" />
            <TextField label="texto" source="texto" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
