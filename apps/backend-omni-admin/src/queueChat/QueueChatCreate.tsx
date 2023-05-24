import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  DateInput,
  DateTimeInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  SelectInput,
} from "react-admin";

import { QueueChatMessageTitle } from "../queueChatMessage/QueueChatMessageTitle";

export const QueueChatCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="action" source="action" />
        <TextInput label="assunto" source="assunto" />
        <BooleanInput label="ativo" source="ativo" />
        <div />
        <DateInput label="dataFim" source="dataFim" />
        <DateTimeInput label="data_hora_last_msg" source="dataHoraLastMsg" />
        <DateTimeInput label="dataIni" source="dataIni" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="FromAgente" source="fromAgente" />
        <TextInput label="FromFila" source="fromFila" />
        <TextInput label="fromID" source="fromId" />
        <TextInput label="FromMotivo" source="fromMotivo" />
        <TextInput label="fromName" source="fromName" />
        <NumberInput step={1} label="idCliente" source="idCliente" />
        <TextInput label="linkedid	" source="linkedid" />
        <BooleanInput label="newstate" source="newstate" />
        <NumberInput step={1} label="PaiId" source="paiId" />
        <NumberInput step={1} label="qtd_msg" source="qtdMsg" />
        <NumberInput
          step={1}
          label="qtd_msg_nao_lidas"
          source="qtdMsgNaoLidas"
        />
        <TextInput label="queue" source="queue" />
        <ReferenceArrayInput
          source="queueChatMessages"
          reference="QueueChatMessage"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={QueueChatMessageTitle} />
        </ReferenceArrayInput>
        <TextInput label="queueFrom" source="queueFrom" />
        <NumberInput step={1} label="queueTypeID" source="queueTypeId" />
        <TextInput label="sentido" source="sentido" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="ultimoAgente" source="ultimoAgente" />
      </SimpleForm>
    </Create>
  );
};
