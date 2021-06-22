import { Condition } from '../condition/condition';

export interface PC {
    name: string,
    hp?: number,
    reaction: boolean,
    initiative?: number,
    isTurn: boolean,
    conditions: Condition[]
  }