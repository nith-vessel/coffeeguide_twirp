import type { PageServerLoad } from './$types';
import { client } from 'twirpscript';
import { GetCoffeeList } from '../../../resources/proto/coffeeguide.pb';

client.baseURL = 'http://localhost:8080';
export const load = (async () => {
	return await GetCoffeeList({});
}) satisfies PageServerLoad;
