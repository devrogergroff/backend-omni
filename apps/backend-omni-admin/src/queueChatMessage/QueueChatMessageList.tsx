import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { QUEUECHAT_TITLE_FIELD } from "../queueChat/QueueChatTitle";

export const QueueChatMessageList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"queueChatMessages"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
