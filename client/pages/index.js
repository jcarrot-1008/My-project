import Head from 'next/head'
import Layout from '/src/components/layout';
import Hero from '/src/components/home/hero';
import dbConnect from '/src/lib/dbConnect';
import User from '/src/models/User';

 const Home = ({ users }) => {
console.log(window.innerHeight)
  return (
    <Layout style={{height: window.innerHeight}}>
        <Head>
            <title>ONEJUNE</title>
            <meta name="description" content="만들자" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
         {users ? (
          <h2 className="subtitle">DB연결됨 User정보:{users[0]._id}</h2>
        ) : (
          <h2 className="subtitle">
            DB연결실패
          </h2>
        )}
        <section className="flex flex-col items-center justify-center text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <Hero/>
            </div>
        </section>
    </Layout>
  );
}

export async function getServerSideProps() {
  await dbConnect()

  const result = await User.find({})
  const users = result.map((item) => {
    const user = item.toObject()
    user._id = user._id.toString()
    return user
  })

  return { props: { users: users } }
}


export default Home