import React from 'react';
import { useBoolean as useBooleanArray, UseBooleanActions } from 'array/useBoolean';

import type { UseStateful } from 'useStateful';

export type UseBoolean = UseStateful<boolean> & UseBooleanActions; // intersection of two types

// export function useBoolean(initial: boolean): UseBoolean

export function useBoolean(initial: boolean): UseBoolean {
  const [value, actions] = useBooleanArray(initial);
  return React.useMemo(() => ({ value, ...actions }), [actions, value]);
}
