import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';

export const actions: Actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const email = formData.get('email') as string;

        const emailRegex = /^[^\s]+@[^\s]+\.[^\s]+$/;
        if (!emailRegex.test(email)) {
            return fail(400, { error: 'Whoops, make sure it\'s an email' });
        }

        return { success: true };
    }
}