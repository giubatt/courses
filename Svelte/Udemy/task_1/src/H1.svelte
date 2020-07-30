<script>
  export let text = "";

  $: isRed = text.includes("!");
</script>

<style>
  .red {
    color: crimson;
  }
</style>

<h1 class:red={isRed}>{text}</h1>
