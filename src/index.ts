import * as Components from './components';

export default {
  install(Vue: any) {
    const componentNames: string[] = Object.keys(Components);

    Object.values(Components).forEach((component: any, index: number) => {
      Vue.component(componentNames[index], component);
    });
  },
};

export * from './components';
