import { mount } from '@vue/test-utils';
import AKLInput from './AKLInput.vue';

const testData: Record<string, string> = {
  label: 'i am a label',
  message: 'i am a message',
  modelValue: 'i am groot',
  name: 'i am a mocked input',
  placeholder: 'i am a placeholder',
  type: 'text',
};
let wrapper;

describe('AKLInput', () => {
  describe('> rendering', () => {
    beforeEach(() => {
      wrapper = mount(AKLInput as any, {
        props: {
          modelValue: '',
          placeholder: testData.placeholder,
          type: testData.type,
        },
      });
    });

    describe('> general', () => {
      it('should have the good placeholder attribute', () => {
        expect(wrapper.props('placeholder')).toBe(testData.placeholder);
        expect(wrapper.find('.akl-input__content').attributes('placeholder')).toBe(testData.placeholder);
      });

      it('should have the good type attribute', () => {
        expect(wrapper.props('type')).toBe(testData.type);
        expect(wrapper.find('.akl-input__content').attributes('type')).toBe(testData.type);
      });

      it('should have the good name attribute', async () => {
        await wrapper.setProps({
          name: testData.name,
        });
        expect(wrapper.props('name')).toBe(testData.name);
        expect(wrapper.find('.akl-input__content').attributes('name')).toBe(testData.name);
      });

      it('should have a default value', async () => {
        await wrapper.setProps({
          modelValue: testData.modelValue,
        });

        expect(wrapper.props('modelValue')).toBe(testData.modelValue);
        expect(wrapper.find('.akl-input__content').element.value).toBe(testData.modelValue);
      });
    });

    describe('> without label', () => {
      it('should not have a label', () => {
        expect(wrapper.props('label')).toBe('');
        expect(wrapper.find('.akl-input__label').exists()).toBe(false);
      });
    });

    describe('> with a label label', () => {
      it('should have a label', async () => {
        await wrapper.setProps({
          label: testData.label,
        });

        expect(wrapper.props('label')).toBe(testData.label);
        expect(wrapper.find('.akl-input__label').exists()).toBe(true);
      });
    });

    describe('> with messages', () => {
      it('should have a default message', async () => {
        await wrapper.setProps({
          message: testData.message,
        });

        expect(wrapper.props('message')).toBe(testData.message);
        expect(wrapper.props('status')).toBe('');
        expect(wrapper.find('.akl-input__message').exists()).toBe(true);
        expect(wrapper.find('.akl-input__message').text()).toBe(testData.message);
      });

      it('should have a success message and the success class applied', async () => {
        await wrapper.setProps({
          message: testData.message,
          status: 'success',
        });

        expect(wrapper.props('message')).toBe(testData.message);
        expect(wrapper.props('status')).toBe('success');
        expect(wrapper.find('.akl-input.success').exists()).toBe(true);
        expect(wrapper.find('.akl-input__message').exists()).toBe(true);
        expect(wrapper.find('.akl-input__message').text()).toBe(testData.message);
      });

      it('should have an error message and the error class applied', async () => {
        await wrapper.setProps({
          message: testData.message,
          status: 'error',
        });

        expect(wrapper.props('message')).toBe(testData.message);
        expect(wrapper.props('status')).toBe('error');
        expect(wrapper.find('.akl-input.error').exists()).toBe(true);
        expect(wrapper.find('.akl-input__message').exists()).toBe(true);
        expect(wrapper.find('.akl-input__message').text()).toBe(testData.message);
      });

      it('should not accept other type of status besides "error" and "succes" or empty value', async () => {
        const { validator } = AKLInput.props.status;

        expect(validator('')).toBe(true);
        expect(validator('success')).toBe(true);
        expect(validator('error')).toBe(true);
        expect(validator('wrong')).toBe(false);
      });
    });

    describe('> emits', () => {
      it('should emit event "update:modelValue" on input value change', async () => {
        await wrapper.find('.akl-input__content').setValue(testData.modelValue);

        expect(wrapper.emitted()).toHaveProperty('update:modelValue');
      });
    });
  });
});
