import React from 'react';

export function useStateful<T = any>(initial: T): UseStateful<T> {
  const [value, setValue] = React.useState(initial);

  return React.useMemo(() => ({ value, setValue }), [value]);
}

export type UseStateful<T = any> = {
  value: T;
  setValue: React.Dispatch<React.SetStateAction<T>>;
};
