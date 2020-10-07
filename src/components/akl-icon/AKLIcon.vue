<template>
  <svg
    :aria-labelledby="name"
    :data-icon="$props.name"
    class="akl-icon"
    :class="[animate, 'size-' + $props.size]"
    role="img"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title :id="'icon-' + name">{{ name }}</title>
    <path
      fill="currentColor"
      :d="pathContent"
    />
  </svg>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import Icons from './icons';

  export default defineComponent({
    props: {
      animate: {
        type: String,
        default: '',
      },
      name: {
        type: String,
        required: true,
      },
      size: {
        type: String,
        default: 'm',
        validator: (size: string) => ['s', 'm', 'l'].indexOf(size) !== -1,
      },
    },
    setup(props) {
      const pathContent = Icons[props.name];

      return { pathContent };
    },
  });
</script>

<style lang="scss" scoped>
  @import '../../styles/_includes';

  .akl-icon {
    &.size-s {
      width: $size-4;
    }
    &.size-m {
      width: $size-6;
    }
    &.size-l {
      width: $size-8;
    }

    &.spin {
      animation: spin 1s infinite;
    }

    @keyframes spin {
      100% {
        -webkit-transform: rotate(360deg);
        transform:rotate(360deg);
      }
    }
  }
</style>
