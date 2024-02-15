<template>
  <i :class="ns.b()" :style="style" v-bind="$attrs">
    <slot />
  </i>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { addUnit, isUndefined, useNamespace } from '@vue-basic-kit/utils';
import { iconProps } from './icon';
import type { CSSProperties } from 'vue';
import '../style';

defineOptions({
  name: 'BasicIcon',
  inheritAttrs: false,
});
const props = defineProps(iconProps);
const ns = useNamespace('icon');

const style = computed<CSSProperties>(() => {
  const { size, color, strokeWidth } = props;
  if (!size && !color) return {};

  return {
    fontSize: isUndefined(size) ? undefined : addUnit(size),
    '--color': color,
    strokeWidth,
  };
});
</script>

<style scoped>
i {
  color: var(--color);

  svg {
    height: 1em;
    width: 1em;
    stroke-width: inherit;
  }
}
</style>
