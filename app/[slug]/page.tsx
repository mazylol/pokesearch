import Image from "next/image";

async function getData(name: string): Promise<any> {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

  if (!res.ok) {
    throw new Error("Falied to fetch data");
  }

  return res.json();
}

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await getData(params.slug);

  return (
    <main>
      <div className="grid grid-cols-4 grid-rows-3 h-[100vh]">
        <div className="items-center justify-center bg-white rounded-md p-4 w-64 align-middle inline-block row-span-full my-4 ml-4">
          <Image
            src={data.sprites.front_default}
            width={200}
            height={200}
            alt="Front Sprite"
            className="mx-auto"
          />
          <h1 className="text-4xl text-center first-letter:uppercase">
            {data.name} <span className="text-gray-400">#{data.id}</span>
          </h1>
          <hr className="mt-4" />
          <div className="flex flex-col justify-center items-center mt-4">
            <h2 className="text-2xl">Games</h2>
            <ul className="list-disc text-md">
              {data.game_indices.map((game: any, key: number) => {
                return (
                  <li key={key}>
                    {game.version.name}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div className="mt-4 bg-white rounded-md col-start-2 col-span-full -ml-48 mr-4 h-32">
          <h2 className="text-2xl text-center">Weight</h2>
          <p className="text-xl text-center mt-4">{data.weight}</p>
        </div>
      </div>
    </main>
  );
}
