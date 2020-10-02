/* eslint-disable import/prefer-default-export */
export const darkModeMixin = {
  computed: {
    isDarkMode(): boolean {
      return (this as any).$store ? (this as any).$store.getters['Auckland/isDarkMode'] : false;
    },
  },
};
