import { ComponentProps, ElementType } from 'react';

interface IDropdownOwnProps<E extends ElementType = ElementType> {
  As?: E;
  triggerElementContent: React.ReactNode;
  children: React.ReactNode;
  nested?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

export type DropdownProps<E extends ElementType> = IDropdownOwnProps<E> &
  Omit<ComponentProps<E>, keyof IDropdownOwnProps>;
