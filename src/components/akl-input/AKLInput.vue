<template>
  <div
    class="akl-input"
    :class="{'error': status === 'error', 'success': status === 'success'}"
  >
    <span
      v-if="label && label.length"
      class="akl-input__label"
    >
      {{ label }}
    </span>
    <input
      class="akl-input__content"
      :value="modelValue"
      :name="name"
      :placeholder="placeholder"
      :type="type"
      @input="$emit('update:modelValue', $event.target.value)"
    >
    <span
      v-if="message"
      class="akl-input__message"
    >
      {{ message }}
    </span>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    props: {
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

    &__label {
      display: block;
      font-weight: 500;
      padding-bottom: $size-2;
    }

    &__content {
      border-radius: $border-radius / 2;
      border: $size-1 solid $border-color;
      display: block;
      outline: 0;
      padding: ($size-8 / 2) ($size-8 / 2);

      &:focus { border-color: $blue; }
    }

    &__message {
      padding-top: $size-2;
      font-size: $text-sm;
    }

    &.success {
      .akl-input__content {
        border-color: $dark-green;
      }
      .akl-input__message {
        color: $dark-green;
      }
    }

    &.error {
      .akl-input__content {
        border-color: $dark-red;
      }
      .akl-input__message {
        color: $dark-red;
      }
    }
  }
</style>
