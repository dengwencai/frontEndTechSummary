<script>
  import Router, { push, replace } from "svelte-spa-router";
  import routes from "./routes/index.js";

  function btnClick1() {
    push("/about");
  }
  function btnClick2() {
    push("/base");
  }
  function btnClick3() {
    push("/home");
  }
</script>

<button on:click={btnClick1}>about</button>
<button on:click={btnClick2}>base</button>
<button on:click={btnClick3}>home</button>
<Router {routes} />

<style></style>
