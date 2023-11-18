// import { effect, signal, useSignal } from "@preact/signals";
import { useEffect, useState } from "react";
import { useSignal, useComputed, signal } from "@preact/signals-react";
import { Cell } from "./cell";
import { Link } from "react-router-dom";
import { Nav } from "../nav";

// const matrix = signal([]);

function Hook() {
  const [matrix, setMatrix] = useState([]);
  const [width] = useState(Array(50).fill(0));
  const [height] = useState(Array(30).fill(0));

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
            randomValue = matrix?.[i]?.[j];
          }
          row.push(randomValue);
        }
        newMatrix.push(row);
      }
      setMatrix(newMatrix);
      // console.log("internal", matrix.value);
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Nav />
      <table>
        <tbody>
          {width.map((_, rowIndex) => (
            <tr key={rowIndex}>
              {height.map((_, colIndex) => (
                <Cell key={colIndex} value={matrix?.[rowIndex]?.[colIndex]} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Hook;
