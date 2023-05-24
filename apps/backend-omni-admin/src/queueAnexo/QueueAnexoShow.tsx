import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
} from "react-admin";
import { QUEUECHATMESSAGE_TITLE_FIELD } from "../queueChatMessage/QueueChatMessageTitle";

export const QueueAnexoShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
