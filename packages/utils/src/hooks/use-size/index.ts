import { computed, inject, unref } from 'vue';
import { componentSizes } from '@vue-basic-kit/constant';
import type { ComponentSize } from '@vue-basic-kit/constant';

import type { InjectionKey, Ref } from 'vue';

export const useSizeProp = {
  type: String,
  values: componentSizes,
  required: false,
} as const;

export const useSizeProps = {
  size: useSizeProp,
};

export interface SizeContext {
  size: Ref<ComponentSize>;
}

export const SIZE_INJECTION_KEY: InjectionKey<SizeContext> = Symbol('size');

export const useGlobalSize = () => {
  const injectedSize = inject(SIZE_INJECTION_KEY, {} as SizeContext);

  return computed<ComponentSize>(() => {
    return unref(injectedSize.size) || '';
  });
};
