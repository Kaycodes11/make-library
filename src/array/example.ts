type UseStateful<T> = {
  state: T;
  setState: (newValue: T) => void;
};

type UseMapActions<K, V> = {
  setMapEntry: (key: K, value: V) => void;
  removeMapEntry: (key: K) => void;
};

export type UseMap<K, V> = UseStateful<Map<K, V>> & UseMapActions<K, V>;

// Example usage of UseMap
const myUseMap: UseMap<string, number> = {
  state: new Map([
    ['one', 1],
    ['two', 2],
  ]),
  setState: (newMap) => {
    // Logic to set the state
  },
  setMapEntry: (key, value) => {
    // Logic to add a key-value pair to the map
  },
  removeMapEntry: (key) => {
    // Logic to remove a key-value pair from the map
  },
};
