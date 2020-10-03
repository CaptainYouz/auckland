<template>
  <div class="hr-label">
    <span class="label"><slot /></span>
    <span
      class="hr"
      :class="{'secondary': $props.type === 'secondary'}"
    />
  </div>
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        default: '',
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import '../src/styles/_includes';

  .hr-label {
    display: flex;
    align-items: center;

    .label {
      padding-right: $size-4;
    }
    .hr {
      display: block;
      border-bottom: $size-2 solid $primary-color;
      flex: 1;

      &.secondary {
        border-bottom: $size-1 dashed $border-color;
      }
    }
  }
</style>
