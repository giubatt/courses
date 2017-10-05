<template>
<div class="card">
  <div class="card-block quote">
    <slot></slot>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped>
.card {
    font-family: 'Arizonia', cursive;
    font-size: 24px;
    color: #6e6e6e;
    margin-bottom: 30px;
}

.quote {
    cursor: pointer;
}
.quote:hover {
    background-color: #ffa1a1;
}
</style>
