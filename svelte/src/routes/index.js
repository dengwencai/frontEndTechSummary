import base from "../lib/BaseIntroduce.svelte";
import home from "../lib/Home.svelte";
import about from "../lib/About.svelte";
import error from "../lib/error.svelte";

export default {
  "/base": base,
  "/about": about,
  "/home": home,
  "*": error,
};
