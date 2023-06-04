import { PUBLIC_POCKETHOST_URL } from "$env/static/public";
import PocketBase from "pocketbase";
import { writable } from "svelte/store";

export const pb = new PocketBase(PUBLIC_POCKETHOST_URL);

export const user = writable(pb.authStore.model);
