import { redirect, fail } from '@sveltejs/kit'
import { z } from 'zod'
import { superValidate } from 'sveltekit-superforms/server'
import type { Actions, RequestEvent } from './$types'

const superValidateSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
})

export const load = async (event) => {
  const form = await superValidate(event, superValidateSchema);
  return {
    form,
  }
}
export const actions: Actions = {
  default: async (event: RequestEvent) => {
    const { locals } = event
    const form = await superValidate(event, superValidateSchema)

    if (!form.valid)
      return fail(400, { form });

    try {
      await locals.pb.collection('users')
        .authWithPassword(form.data.email, form.data.password)
    } catch (error) {
      console.error(error)
      throw error;
    }

    throw redirect(303, '/');
  },
}