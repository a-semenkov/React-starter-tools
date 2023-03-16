import React, { ElementType } from 'react';

import { IListGenericProps } from './genericList.types';

const NOOP = () => {};

function GenericList<E extends ElementType = 'div'>({
  list,
  As,
  onClick = NOOP,
  ...other
}: IListGenericProps<E>) {
  const TagName = As || 'div';

  return (
    <>
      {list.map((item) => (
        <TagName key={item.id} onClick={() => onClick(item.id)} {...other}>
          {item.value}
        </TagName>
      ))}
    </>
  );
}

export default GenericList;
