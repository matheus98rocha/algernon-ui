import getMe from './services/get-me';
export default async function Home() {

  const me = await getMe()

  return (
    <main>
    </main>
  );
}
