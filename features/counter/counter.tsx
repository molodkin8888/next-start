'use client';
import React from 'react';
import type { RootState } from '@/lib/store';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from './counterSlice';

function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="w-full ">
      <div className="flex justify-center gap-5">
        <button
          aria-label="Increment value"
          className="border-1px"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <p>Count is: {count}</p>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

        <button
          aria-label="Add 22"
          onClick={() => dispatch(incrementByAmount(22))}
        >
          Add 22
        </button>
      </div>
    </div>
  );
}

export default Counter;
