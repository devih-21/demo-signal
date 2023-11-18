// import { effect, signal, useSignal } from "@preact/signals";
import { useEffect } from "react";
import {
  useSignal,
  useComputed,
  signal,
  useSignalEffect,
} from "@preact/signals-react";
import { Cell } from "./cell";
import { Nav } from "../nav";

// const matrix = signal([]);

function Signal() {
  const matrix = useSignal([]);
  const width = useSignal(Array(50).fill(0));
  const height = useSignal(Array(30).fill(0));

  useEffect(() => {
    const interval = setInterval(() => {
      const newMatrix = [];
      for (let i = 0; i < 50; i++) {
        const row = [];
        for (let j = 0; j < 30; j++) {
          let randomValue;
          const random = Math.floor(Math.random() * 2);
          if (!!random) {
            randomValue = Math.floor(Math.random() * 21) - 10;
          } else {
            randomValue = matrix.value?.[i]?.[j];
          }
          row.push(randomValue);
        }
        newMatrix.push(row);
      }
      matrix.value = newMatrix;
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Nav />
      <table>
        <tbody>
          {width.value.map((_, rowIndex) => (
            <tr key={rowIndex}>
              {height.value.map((_, colIndex) => (
                <Cell
                  key={colIndex}
                  value={matrix.value?.[rowIndex]?.[colIndex]}
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Signal;
