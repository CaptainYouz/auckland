<template>
  <div class="app">
    <header class="banner">
      <a
        class="banner__github"
        href="https://github.com/CaptainYouz/auckland"
        alt="github icon"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <!-- eslint-disable-next-line max-len -->
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      </a>
      <div class="banner__version">
        v{{ appVersion }}
      </div>
    </header>

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
          <div class="documentation">
            <MarkdownDiv :text="defaultVersionDocumentation" />
          </div>
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
          <div class="documentation">
            <MarkdownDiv :text="labelVersionDocumentation" />
          </div>
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
          <div class="documentation">
            <MarkdownDiv :text="defaultMessageVersionDocumentation" />
          </div>
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
          <div class="documentation">
            <MarkdownDiv :text="successMessageVersionDocumentation" />
          </div>
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
          <div class="documentation">
            <MarkdownDiv :text="errorMessageVersionDocumentation" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, computed } from 'vue';
  import packageJson from '../package.json';
  import HrLabel from './components/HrLabel.vue';
  import MarkdownDiv from './components/MarkdownDiv.vue';

  export default defineComponent({
    components: {
      HrLabel,
      MarkdownDiv,
    },
    setup() {
      const appVersion = ref(packageJson.version);
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
        appVersion,
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
    .banner {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      padding: $size-4 $size-8;
      display: flex;
      align-items: center;

      &__github {
        flex: 1;
        svg { fill: $font-color; }

        &:hover {
          svg { fill: black; }
        }
      }
      &__version {
        font-size: $text-xs;
        padding: $size-1 $size-2;
        border-radius: $border-radius;
        background-color: $green;
        color: white;
      }
    }

    .title {
      font-size: $text-2xl;
      margin-bottom: $size-16;
      font-weight: bold;
      color: $font-color;
      text-align: center;

      &__main {
        display: block;
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

            @include is-mobile {
              display: none;
            }
          }
        }
      }
    }
  }

</style>
