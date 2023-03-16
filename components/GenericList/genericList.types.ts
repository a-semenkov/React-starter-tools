import React, { ComponentProps, ElementType } from 'react';

interface IListProps {
  value: React.ReactNode;
  id: string;
  image?: string;
  link?: string | string[];
}

interface IListOwnProps<E extends ElementType = ElementType> {
  list: Array<IListProps>;
  onClick?: (id: string) => void;
  As?: E;
}

export type IListGenericProps<E extends ElementType> = IListOwnProps<E> &
  Omit<ComponentProps<E>, keyof IListOwnProps>;
