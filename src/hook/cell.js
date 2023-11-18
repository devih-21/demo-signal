import { useSignal, useSignalEffect } from "@preact/signals-react";
import { useEffect, useState } from "react";
import "../App.css";

export const Cell = ({ value }) => {
  const [clazz, setClass] = useState("");

  useEffect(() => {
    if (value > 0) {
      setClass("green");
      setTimeout(() => {
        setClass("");
      }, 500);
    } else {
      setClass("red");
      setTimeout(() => {
        setClass("");
      }, 500);
    }
  }, [value]);

  return <td className={clazz}>{value}</td>;
};
