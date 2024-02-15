import { Text, computed, ref, useSlots } from 'vue';

import type { SetupContext } from 'vue';
import type { ButtonEmits, ButtonProps } from './button';

export const useButton = (
  props: ButtonProps,
  emit: SetupContext<ButtonEmits>['emit']
) => {
  const _size = computed(() => props.size);
  const _disabled = computed(() => props.disabled);
  const _type = computed(() => props.type);
  const _ref = ref<HTMLButtonElement>();
  const slots = useSlots();

  const autoInsertSpace = computed(() => props.autoInsertSpace ?? false);

  const _props = computed(() => {
    if (props.tag === 'button') {
      return {
        ariaDisabled: _disabled.value || props.loading,
        disabled: _disabled.value || props.loading,
        autofocus: props.autofocus,
        type: props.nativeType,
      };
    }
    return {};
  });

  // add space between two characters in Chinese
  const shouldAddSpace = computed(() => {
    const defaultSlot = slots.default?.();
    if (autoInsertSpace.value && defaultSlot?.length === 1) {
      const slot = defaultSlot[0];
      if (slot?.type === Text) {
        const text = slot.children as string;
        return /^\p{Unified_Ideograph}{2}$/u.test(text.trim());
      }
    }
    return false;
  });

  const handleClick = (evt: MouseEvent) => {
    emit('click', evt);
  };

  return {
    _disabled,
    _size,
    _type,
    _ref,
    _props,
    shouldAddSpace,
    handleClick,
  };
};
