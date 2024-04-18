<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  function btnclick() {
    dispatch("printPhone", "13288888888");
  }
</script>

<button on:click={btnclick}>输出手机号</button>

<div class="box">
	<slot>默认值</slot>
</div>