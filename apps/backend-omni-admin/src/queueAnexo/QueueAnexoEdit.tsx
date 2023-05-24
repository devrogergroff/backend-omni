import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { QueueChatMessageTitle } from "../queueChatMessage/QueueChatMessageTitle";

export const QueueAnexoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
