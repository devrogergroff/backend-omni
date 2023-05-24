import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { QUEUECHATMESSAGE_TITLE_FIELD } from "./QueueChatMessageTitle";
import { QUEUECHAT_TITLE_FIELD } from "../queueChat/QueueChatTitle";

export const QueueChatMessageShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="QueueAnexo"
          target="QueueChatMessageId"
          label="queueAnexos"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
