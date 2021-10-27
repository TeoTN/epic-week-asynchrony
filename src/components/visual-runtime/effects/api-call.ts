import { BaseSideEffect, SideEffectType } from './types';
import { SideEffect } from './index';

export interface ApiCallEffect extends BaseSideEffect {
  type: SideEffectType.API_CALL;
}

interface Options {
  sideEffects: SideEffect[];
}

export const apiCall = (name: string, options: Options): ApiCallEffect => ({
  type: SideEffectType.API_CALL,
  name,
  delay: 500,
  ...options,
});
