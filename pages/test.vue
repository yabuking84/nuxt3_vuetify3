<template>
  <div>
    <h1>Test</h1>
  </div>
</template>

<script setup lang="ts">
// const h = "sdsd";
// h = "dd";

const { hey, go } = useTest();

hey(go.gogo);
</script>

<style scoped></style>
