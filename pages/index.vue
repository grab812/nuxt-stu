<template>
  <div>
    <input type="button" @click="store.increment()" value="increment" />
    <input type="button" @click="store.countReset()" value="reset" />
    {{ store.count }}
    {{ store.doubleCount }}
  </div>
  <Like></Like>
  <AppAlert>This is an auto-imported component</AppAlert>
</template>

<script setup lang="ts">
import { useCounterStore } from "../stores/counter";

const store = useCounterStore();
</script>

<style></style>
