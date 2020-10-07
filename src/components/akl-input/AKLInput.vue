<template>
  <div
    class="akl-input"
    :class="{'is-loading': isLoading, 'error': status === 'error', 'success': status === 'success'}"
  >
    <label
      v-if="label && label.length"
      class="label"
    >
      {{ label }}
    </label>
    <div class="wrapper">
      <input
        class="wrapper__content"
        :value="modelValue"
        :name="name"
        :placeholder="placeholder"
        :type="type"
        @input="$emit('update:modelValue', $event.target.value)"
      >
      <AKLIcon
        v-if="isLoading"
        animate="spin"
        class="loading"
        name="spinner"
      />
    </div>
    <span
      v-if="message"
      class="message"
    >
      {{ message }}
    </span>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import AKLIcon from '../akl-icon/AKLIcon.vue';

  export default defineComponent({
    components: {
      AKLIcon,
    },
    props: {
      isLoading: {
        type: Boolean,
      },
      label: {
        default: '',
        type: String,
      },
      message: {
        default: '',
        type: String,
      },
      modelValue: {
        required: true,
        type: String,
      },
      name: {
        default: '',
        type: String,
      },
      placeholder: {
        required: true,
        type: String,
      },
      status: {
        default: '',
        type: String,
        validator: (value: string) => ['', 'error', 'success'].indexOf(value) !== -1,
      },
      type: {
        required: true,
        type: String,
      },
    },
    emits: {
      'update:modelValue': null,
    },
  });
</script>

<style lang="scss" scoped>
  @import '../../styles/_includes';

  .akl-input {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;

    .label {
      display: block;
      font-weight: 500;
      padding-bottom: $size-2;
      font-size: $text-base;
    }

    .wrapper {
      position: relative;

      &__content {
        -moz-appearance: none;
        -webkit-appearance: none;
        appearance: none;
        border-radius: $border-radius / 2;
        border: $size-1 solid $border-color;
        display: block;
        outline: 0;
        padding: ($size-8 / 2) ($size-8 / 2);
        width: 100%;

        &:focus { border-color: $blue; }
      }
    }

    .loading {
      position: absolute;
      right: $size-4;
      top: $size-4;
      color: $dark-blue;
      bottom: 0;
    }

    .message {
      padding-top: $size-2;
      font-size: $text-sm;
    }

    &.is-loading {
      .wrapper__content {
        animation-name: border-animation;
        animation-duration: 2s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
      }
    }

    &.success {
      .wrapper__content {
        border-color: $dark-green;
      }
      .message {
        color: $dark-green;
      }
    }

    &.error {
      .wrapper__content {
        border-color: $dark-red;
      }
      .message {
        color: $dark-red;
      }
    }

    @keyframes border-animation {
      0% {
        border-color: $blue;
      }
      50% {
        border-color: $dark-blue;
      }
      100% {
        border-color: $blue;
      }
    }
  }
</style>
