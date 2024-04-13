import { NextRequest, NextResponse } from 'next/server';

import pokeData from '@/assets/data/pokemon.json';
import Fuse from 'fuse.js';

// const fuseOptions = {
//   keys: ['name'],
// };
// const fuseIndex = Fuse.createIndex(fuseOptions.keys, pokeData.data);
// const pokemons = new Fuse(pokeData.data, fuseOptions, fuseIndex);
const pokemons = new Fuse(pokeData.data, {
  keys: ['name'],
});

export async function GET(request: NextRequest) {
  const name = request.nextUrl.searchParams.get('name');

  if (!name) {
    return NextResponse.json(
      {
        message: '`name` param is required',
      },
      {
        status: 400,
      },
    );
  }

  return NextResponse.json({ data: pokemons.search(name || '') });
}
