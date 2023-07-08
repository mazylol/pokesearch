import Search from "../components/search";

async function getData() {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=99999');

  if (!res.ok) {
    throw new Error('Falied to fetch data');
  }

  return res.json();
}

export default async function Home() {
  const data = await getData();

  return (
     <main>
      <Search pokemon={data.results} />
    </main>
  )
}
