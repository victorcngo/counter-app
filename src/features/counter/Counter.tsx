import React from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import {
  decrement,
  increment,
  selectCount,
  selectIsPrime,
} from "./counterSlice";
import styles from "./Counter.module.css";

export function Counter() {
  const count = useAppSelector(selectCount);
  const isPrime = useAppSelector(selectIsPrime);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() =>
            dispatch(
              decrement({
                number: Math.floor(Math.random() * 10) + 1,
                isPrime: false,
              })
            )
          }
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() =>
            dispatch(
              increment({
                number: Math.floor(Math.random() * 10) + 1,
                isPrime: false,
              })
            )
          }
        >
          +
        </button>
      </div>
      <span>{isPrime && "*"}</span>
    </div>
  );
}
