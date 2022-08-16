import React, { useEffect, useState } from 'react';
import Layout from '/src/components/layout';
import Head from 'next/head';
import ProjectItem from '/src/components/projects/project-item';
import DetailItem from '/src/components/projects/detailItem';
import { inject, observer } from 'mobx-react';

function Projects(props) {
  const { store } = props;
  const { loginModel } = store;
  const [detailPageId, setDetailPageId] = useState('list');

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen px-3 mb-10">
        <Head>
          <title>JuneProject</title>
          <meta name="description" content="만들자" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className="text-2xl font-bold sm:text-4xl mt-10">
          총 프로젝트 :<span className="pl-4 text-blue-500"></span>
        </h1>
        {/* {detailPageId !== 'list' ? (
          <div className="grid grid-cols-1 gap-8 p-12 m-4 md:grid-cols-1">
            <DetailItem
              data={projects.results}
              detailPageId={detailPageId}
              setDetailPageId={setDetailPageId}
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 p-12 m-4 md:grid-cols-2">
            {projects.results.map((aProject) => (
              <ProjectItem
                key={aProject.id}
                data={aProject}
                setDetailPageId={setDetailPageId}
              />
            ))}
          </div>
        )} */}
      </div>
    </Layout>
  );
}

export default inject(({ store }) => ({
  store: store.mainModel,
}))(observer(Projects));
