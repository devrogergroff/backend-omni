import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { QUEUECHATMESSAGE_TITLE_FIELD } from "../queueChatMessage/QueueChatMessageTitle";

export const QueueAnexoList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"queueAnexos"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="caminho" source="caminho" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="id_message"
          source="queuechatmessage.id"
          reference="QueueChatMessage"
        >
          <TextField source={QUEUECHATMESSAGE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="mimeType" source="mimeType" />
      </Datagrid>
    </List>
  );
};
