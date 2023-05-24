import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { QueueChatTitle } from "../queueChat/QueueChatTitle";
import { QueueAnexoTitle } from "../queueAnexo/QueueAnexoTitle";

export const QueueChatMessageEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="agente" source="agente" />
        <div />
        <DateTimeInput label="dataHora" source="dataHora" />
        <ReferenceInput
          source="idQueueChat.id"
          reference="QueueChat"
          label="idQueueChat"
        >
          <SelectInput optionText={QueueChatTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="inOut" source="inOut" />
        <NumberInput step={1} label="mailMessageID" source="mailMessageId" />
        <ReferenceArrayInput
          source="queueAnexosMesssage"
          reference="QueueAnexo"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={QueueAnexoTitle} />
        </ReferenceArrayInput>
        <div />
        <NumberInput step={1} label="repliedIdMsg" source="repliedIdMsg" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="texto" multiline source="texto" />
      </SimpleForm>
    </Edit>
  );
};
