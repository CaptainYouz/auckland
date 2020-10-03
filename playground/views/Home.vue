<template>
  <div class="hello">
    {{ message }}
  </div>
</template>

<script lang="ts">
  import { ref } from 'vue';

  export default {
    setup() {
      const message = ref('Hello World!');

      return { message };
    },
  };
</script>
