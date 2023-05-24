import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  BooleanField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const QueueChatList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"queueChats"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
