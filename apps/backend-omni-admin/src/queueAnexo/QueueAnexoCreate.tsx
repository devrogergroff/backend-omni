import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { QueueChatMessageTitle } from "../queueChatMessage/QueueChatMessageTitle";

export const QueueAnexoCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="caminho" source="caminho" />
        <ReferenceInput
          source="idMessage.id"
          reference="QueueChatMessage"
          label="id_message"
        >
          <SelectInput optionText={QueueChatMessageTitle} />
        </ReferenceInput>
        <TextInput label="mimeType" source="mimeType" />
      </SimpleForm>
    </Create>
  );
};
