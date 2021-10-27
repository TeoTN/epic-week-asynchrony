import {
  ApiCallEffect,
  SideEffect,
  StackFrameEffect,
  TaskEffect,
} from './effects';

export interface RuntimeManager {
  linePointer: number;
  stack: StackFrameEffect[];
  tasks: TaskEffect[];
  apiCalls: ApiCallEffect[];
  pushEffect: (effect: SideEffect) => void;
  revertEffect: (effect: SideEffect) => void;
  findEffect: (handler: string) => SideEffect | undefined;
  pushLinePtr: (ptr?: number) => void;
  reset: () => void;
}