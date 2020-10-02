<template>
  <button
    class="akl-text-button"
    :class="[type, size, { 'is-loading': loading }, additionalClass]"
    :disabled="loading || disabled"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<script lang="ts">
  export default {
    props: {
      type: {
        type: String,
        default: '',
      },
      size: {
        type: String,
        default: '',
      },
      loading: Boolean,
      disabled: Boolean,
      additionalClass: {
        type: String,
        default: '',
      },
    },
  };
</script>

<style lang="scss" >
  @import '../styles/_includes';

  .akl-text-button {
    @include akl-box-shadow-1-light;
    background-color: $primary-color;
    border-radius: $border-radius / 3;
    border: 0;
    color: $white;
    cursor: pointer;
    display: inline-block;
    outline: 0;
    padding: ($size-8 / 3) ($size-8 / 2);
    position: relative;
    text-transform: uppercase;

    svg {
      margin-right: 5px;
      path { color: white; }
    }

    &:disabled {
      background-color: rgba(0,0,0,0.15) !important;
      cursor: default;
      &:hover { background-color: rgba(0,0,0,0.15); }
    }
    &:hover {
      background-color: $dark-primary-color;
      color: white;
    }
    &.selected {
      background-color: $dark-primary-color;
      color: white;
    }
    &.outlined {
      background-color: white;
      font-weight: 500;
      color: $font-color;
      text-transform: uppercase;
      background-color: white;
      svg { path { color: $font-color; } }
      &.selected, &:hover {
        background-color: $primary-color;
        color: white;
      }
    }
    &.medium {
      padding: ($size-8 / 2) ($size-8 / 1.5);
      font-size: $size-5;
    }
    &.large {
      padding: ($size-8 / 1.5) ($size-8);
      font-size: $size-6;
      svg { margin-right: 10px; }
    }

    @include is-mobile {
      &.medium {
        padding: ($size-8 / 2) ($size-8 / 1.5);
        font-size: $size-5;
      }
      &.large {
        padding: ($size-8 / 1.5) ($size-8);
        font-size: $size-6;
        svg { margin-right: 10px; }
      }
    }
  }
</style>
