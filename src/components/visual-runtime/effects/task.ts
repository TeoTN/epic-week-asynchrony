import { BaseSideEffect, SideEffectType } from './types';

export interface TaskEffect extends BaseSideEffect {
  type: SideEffectType.TASK;
}

export const task = (name: string, delay = 500): TaskEffect => ({
  type: SideEffectType.TASK,
  name,
  delay,
});
