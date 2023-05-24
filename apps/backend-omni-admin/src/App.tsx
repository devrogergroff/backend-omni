import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { QueueChatList } from "./queueChat/QueueChatList";
import { QueueChatCreate } from "./queueChat/QueueChatCreate";
import { QueueChatEdit } from "./queueChat/QueueChatEdit";
import { QueueChatShow } from "./queueChat/QueueChatShow";
import { AgenteList } from "./agente/AgenteList";
import { AgenteCreate } from "./agente/AgenteCreate";
import { AgenteEdit } from "./agente/AgenteEdit";
import { AgenteShow } from "./agente/AgenteShow";
import { QueueChatMessageList } from "./queueChatMessage/QueueChatMessageList";
import { QueueChatMessageCreate } from "./queueChatMessage/QueueChatMessageCreate";
import { QueueChatMessageEdit } from "./queueChatMessage/QueueChatMessageEdit";
import { QueueChatMessageShow } from "./queueChatMessage/QueueChatMessageShow";
import { QueueAnexoList } from "./queueAnexo/QueueAnexoList";
import { QueueAnexoCreate } from "./queueAnexo/QueueAnexoCreate";
import { QueueAnexoEdit } from "./queueAnexo/QueueAnexoEdit";
import { QueueAnexoShow } from "./queueAnexo/QueueAnexoShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"backend-omni"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="QueueChat"
          list={QueueChatList}
          edit={QueueChatEdit}
          create={QueueChatCreate}
          show={QueueChatShow}
        />
        <Resource
          name="Agente"
          list={AgenteList}
          edit={AgenteEdit}
          create={AgenteCreate}
          show={AgenteShow}
        />
        <Resource
          name="QueueChatMessage"
          list={QueueChatMessageList}
          edit={QueueChatMessageEdit}
          create={QueueChatMessageCreate}
          show={QueueChatMessageShow}
        />
        <Resource
          name="QueueAnexo"
          list={QueueAnexoList}
          edit={QueueAnexoEdit}
          create={QueueAnexoCreate}
          show={QueueAnexoShow}
        />
      </Admin>
    </div>
  );
};

export default App;
