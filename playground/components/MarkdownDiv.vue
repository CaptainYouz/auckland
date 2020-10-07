<template>
  <!-- eslint-disable vue/no-v-html -->
  <div
    v-once
    class="markdown-div"
    v-html="content"
  />
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import marked from '../../node_modules/marked/lib/marked.esm';

  export default defineComponent({
    props: {
      text: {
        type: String,
        required: true,
      },
    },
    setup(props) {
      const content: string = marked(props.text);

      return { content };
    },
  });
</script>

<style lang="scss" scoped>
  @import '../src/styles/_includes';

  .markdown-div {
    background-color: $light-grey;
    border-radius: $size-2;
    font-family: 'Monaco';
    padding: $size-4;
    text-align: left;
  }
</style>
