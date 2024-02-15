import type Icon from './icon.vue';
import type { ExtractPropTypes, PropType } from 'vue';

export const iconProps = {
  color: String,
  size: [Number, String] as PropType<number | string>,
  strokeWidth: Number,
} as const;

export type IconProps = ExtractPropTypes<typeof iconProps>;
export type IconInstance = InstanceType<typeof Icon>;
