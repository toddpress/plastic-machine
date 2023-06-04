import { user, pb } from '$lib/pocketbase';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	pb.authStore.loadFromCookie(event.request.headers.get('cookie') || '');

	if (pb.authStore.isValid) {
		try {
			await pb.collection('users').authRefresh();
		} catch (_) {
			pb.authStore.clear();
		}
	}

  event.locals.user = JSON.parse(JSON.stringify(pb.authStore.model));
  event.locals.pb = pb;

	const response = await resolve(event);
	response.headers.set('set-cookie', pb.authStore.exportToCookie({ httpOnly: false }));

	return response;
};
