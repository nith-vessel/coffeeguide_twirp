import type { PageServerLoad } from './$types';
import { client } from 'twirpscript';
import { GetCoffee } from '../../../../../resources/proto/coffeeguide.pb';

client.baseURL = 'http://localhost:8080';
export const load = (async ({ params }) => {
	return await GetCoffee({ id: params.id });
}) satisfies PageServerLoad;
