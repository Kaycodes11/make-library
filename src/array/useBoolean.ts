import React, { useState, useMemo, SetStateAction, useCallback } from 'react';

type UseBooleanFunction = (initial: boolean) => [boolean, UseBooleanActions];

export type UseBooleanActions = {
  setValue: React.Dispatch<SetStateAction<boolean>>;
  toggle: () => void;
  setTrue: () => void;
  setFalse: () => void;
};

export type UseBoolean = [boolean, UseBooleanActions];

// custom hook (i.e. useBoolean) what parameter it will and what it will return, that's determined by "UseBooleanFunction"

// useBoolean does satisy that 1) single parameter 2) returning array [first value is boolean , second is an object as per UseBooleanActions]
export const useBoolean: UseBooleanFunction = (initial) => {
  const [value, setValue] = useState<boolean>(initial);
  const toggle = useCallback(() => setValue((v) => !v), []);
  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);

  // since it has some methods so its return value could be memorized or not (here did)
  const actions = useMemo(() => ({ setValue, toggle, setTrue, setFalse }), [setFalse, setTrue, toggle]);
  return [value, actions];
};

// consumer (below component where useBoolean hook imported)

/*

Lesson 11

const Dummy = React.memo(() => {
  return <div>{new Date().getTime()}></div>
})

const OpenClosedSign = () => {
  // name could be whatever when destructing since hook return an array (not object)
  const [isOpen, isOpenActions] = useBoolean(true);
  return (
    <div>
    <Dummy/>
    <Dummy onClick={isOpenActions.toggle} />
    <button onClick={isOpenActions.toggle}>Toggle</button>
    {isOpen ? "Open" : "Closed"}
    </div>
  )
};

*/
