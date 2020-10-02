<template>
  <div class="app">
    <div class="title">
      <span class="title__main">Auckland</span>
      A minimalist UI library for Vue 3 applications
    </div>

    <div class="description">
      Auckland is a <i>minimalist</i> and <i>mobile friendly</i> UI library for Vue 3 applications,
      written in Vue 3, Typescript and SASS, with a focus on <i>accessiblity</i>.
    </div>

    <div class="component">
      <div class="component__name">
        <hr-label>AKLInput</hr-label>
      </div>

      <div class="component__description">
        AKLInput is the input component of Auckland Library
      </div>

      <div class="component__playground">
        <div class="playground__title">
          <hr-label type="secondary">
            default
          </hr-label>
        </div>
        <div class="playground__content">
          <AKLInput
            v-model="defaultVersion"
            type="text"
            placeholder="type something awesome"
          />
          <MarkdownDiv
            class="documentation"
            :text="defaultVersionDocumentation"
          />
        </div>
      </div>

      <div class="component__playground">
        <div class="playground__title">
          <hr-label type="secondary">
            with a label
          </hr-label>
        </div>
        <div class="playground__content">
          <AKLInput
            v-model="labelVersion"
            type="text"
            label="Email"
            placeholder="your.awesome@email.com"
          />
          <MarkdownDiv
            class="documentation"
            :text="labelVersionDocumentation"
          />
        </div>
      </div>

      <div class="component__playground">
        <div class="playground__title">
          <hr-label type="secondary">
            with a default message
          </hr-label>
        </div>
        <div class="playground__content">
          <AKLInput
            v-model="defaultMessageVersion"
            type="text"
            label="Email"
            placeholder="your.awesome@email.com"
            message="we will send you a link!"
          />
          <MarkdownDiv
            class="documentation"
            :text="defaultMessageVersionDocumentation"
          />
        </div>
      </div>

      <div class="component__playground">
        <div class="playground__title">
          <hr-label type="secondary">
            with a success message
          </hr-label>
        </div>
        <div class="playground__content">
          <AKLInput
            v-model="successMessageVersion"
            type="text"
            label="Email"
            placeholder="your.awesome@email.com"
            status="success"
            message="congrats, you just signed up!"
          />
          <MarkdownDiv
            class="documentation"
            :text="successMessageVersionDocumentation"
          />
        </div>
      </div>

      <div class="component__playground">
        <div class="playground__title">
          <hr-label type="secondary">
            with an error message
          </hr-label>
        </div>
        <div class="playground__content">
          <AKLInput
            v-model="errorMessageVersion"
            type="text"
            label="Email"
            placeholder="your.awesome@email.com"
            status="error"
            message="this is not a valid email!"
          />
          <MarkdownDiv
            class="documentation"
            :text="errorMessageVersionDocumentation"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, computed } from 'vue';
  import HrLabel from './components/HrLabel.vue';
  import MarkdownDiv from './components/MarkdownDiv.vue';

  export default defineComponent({
    components: {
      HrLabel,
      MarkdownDiv,
    },
    setup() {
      const defaultVersion = ref('');
      const labelVersion = ref('');
      const defaultMessageVersion = ref('');
      const successMessageVersion = ref('bruce.wayne@wayneenteprise.com');
      const errorMessageVersion = ref('bane@league.of.shadow');

      const defaultVersionDocumentation = computed(() => `
    // in your template

    <AKLInput
      v-model="defaultVersion"
      type="text"
      placeholder="type something awesome"
    />
      `);

      const labelVersionDocumentation = computed(() => `
    // in your template

    <AKLInput
      v-model="labelVersion"
      type="text"
      label="Email"
      placeholder="your.awesome@email.com"
    />
      `);

      const defaultMessageVersionDocumentation = computed(() => `
    // in your template

    <AKLInput
      v-model="defaultMessageVersion"
      type="text"
      label="Email"
      placeholder="your.awesome@email.com"
      message="we will send you a link!"
    />
      `);

      const successMessageVersionDocumentation = computed(() => `
    // in your template

    <AKLInput
      v-model="successMessageVersion"
      type="text"
      label="Email"
      placeholder="your.awesome@email.com"
      status="success"
      message="congrats, you just signed up!"
    />
      `);

      const errorMessageVersionDocumentation = computed(() => `
    // in your template

    <AKLInput
      v-model="errorMessageVersion"
      type="text"
      label="Email"
      placeholder="your.awesome@email.com"
      status="error"
      message="this is not a valid email!"
    />
      `);

      return {
        defaultVersion,
        labelVersion,
        defaultMessageVersion,
        successMessageVersion,
        errorMessageVersion,
        defaultVersionDocumentation,
        labelVersionDocumentation,
        defaultMessageVersionDocumentation,
        successMessageVersionDocumentation,
        errorMessageVersionDocumentation,
      };
    },
  });
</script>

<style lang="scss" scoped>
  @import '../src/styles/_includes';

  .app {
    .title {
      font-size: $text-2xl;
      margin-bottom: $size-16;
      font-weight: bold;
      color: $font-color;
      display: grid;
      place-items: center;

      &__main {
        color: $primary-color;
        font-size: $text-4xl;
      }
    }

    .description {
      font-size: $text-lg;
      margin-bottom: $size-16;
    }

    .component {
      &__name {
        font-size: $text-xl;
        font-weight: bold;
        margin-bottom: $size-4;
      }

      &__description {
        margin-bottom: $size-4;
      }

      &__playground {
        padding: $size-4 0;

        .playground__title {
          margin-bottom: $size-4;
          font-weight: bold;
        }
        .playground__content {
          padding: $size-2 $size-4;
          .documentation {
            margin-top: $size-8;
          }
        }
      }
    }
  }
</style>
