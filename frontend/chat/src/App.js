import React from 'react';
import MountGlobal from "@jansora/global/lib/mount";

import Layout from "./layout";
import MaterialApp from "@jansora/material/es/MaterialApp";
import MaterialHeader from "./layout/header";
import MaterialLayout from "@jansora/material/es/layout/MaterialLayout";

const App = () => {
  return (
    <MaterialApp>
        <MountGlobal />
        <MaterialHeader />
        <MaterialLayout>
                <Layout/>
        </MaterialLayout>


    </MaterialApp>
  );

}

export default App;
