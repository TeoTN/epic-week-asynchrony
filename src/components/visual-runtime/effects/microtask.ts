import { BaseSideEffect, SideEffectType } from './types';
import { SideEffect } from './index';

export interface MicroTaskEffect extends BaseSideEffect {
  type: SideEffectType.MICROTASK;
}

interface Options {
  sideEffects: SideEffect[];
}

export const microTask = (name: string, options: Options): MicroTaskEffect => ({
  type: SideEffectType.MICROTASK,
  name,
  delay: 500,
  ...options,
});
