'use client'

import { useState } from "react";

export default function Search(props: any) {
    const [name, setName] = useState('');

    const pokemon = props.pokemon;

    return (
        <div className="pt-16 justify-center mx-16">
            <input type="text" placeholder="Pokemon..." className="h-12 w-full rounded-md px-2" onChange={(e) => setName(e.target.value)} />

            <div className="mt-8 flex flex-col w-full bg-white rounded-md max-h-[80vh] overflow-scroll">
                {pokemon.map((species: any, key: number) => {
                    if (species.name.includes(name) && name !== '') {
                        return (
                            <div key={key} className="mx-auto text-xl first-letter:uppercase hover:text-blue-500 transition-color duration-100">
                                <a href={species.url}>{species.name}</a>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}