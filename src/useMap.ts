import React from 'react';
import type { UseStateful } from './useStateful';
import { useMap as useMapArray, UseMapActions, MapOrEntries } from './array/useMap';

export type UseMap<K, V> = UseStateful<Map<K, V>> & UseMapActions<K, V>; // intersection

export function useMap<K, V>(initialState: MapOrEntries<K, V> = new Map()): UseMap<K, V> {
  const [map, actions] = useMapArray(initialState);

  return React.useMemo(() => ({ value: map, ...actions }), [map, actions]);
}
