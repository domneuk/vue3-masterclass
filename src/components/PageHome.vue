<template>
  <div>Hello page home</div>
  <div v-for="thread in threads" :key="thread.id">
    <h2>{{ thread.title }}</h2>
  </div>
</template>

<script>
import sourceData from '@/data.json';

export default {
  data() {
    return {
      threads: sourceData.threads,
    };
  },
};
</script>

<style scoped>
body {
  color: 999;
}
</style>
