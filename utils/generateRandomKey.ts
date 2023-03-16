import { v4 as uuid } from 'uuid';
import { assoc } from 'ramda';

export function generateRandomId() {
  return Math.random().toString(36).substring(2, 15);
}

export function assignRandomId<O extends Object>(obj: O) {
  return assoc('id', uuid(), obj);
}

export function createListObject<T>(item: T) {
  return assignRandomId({ value: item });
}
