import React, { useState } from "react";
import Layout from "/src/components/layout";
import Head from "next/head";
import { inject, observer } from "mobx-react";

function Projects(props) {
  const { store } = props;
  const { loginModel } = store;
  const [detailPageId, setDetailPageId] = useState("list");
  s;
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen px-3 mb-10">
        <Head>
          <title>JuneProject</title>
          <meta name="description" content="만들자" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className="text-2xl font-bold sm:text-4xl mt-10">
          총 프로젝트 :
          <span className="pl-4 text-blue-500" />
        </h1>
      </div>
    </Layout>
  );
}

export default inject(({ store }) => ({
  store: store.mainModel,
}))(observer(Projects));
