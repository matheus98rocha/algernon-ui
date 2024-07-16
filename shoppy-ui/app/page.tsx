import getMe from './services/get-me';
export default async function Home() {

  const me = await getMe()

  // console.log(me)

  return (
    <main>
      <h1>In development</h1>
    </main>
  );
}
