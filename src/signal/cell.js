import { useSignal, useSignalEffect } from "@preact/signals-react";
import { useEffect } from "react";
import "../App.css";

export const Cell = ({ value }) => {
  const clazz = useSignal("");

  useEffect(() => {
    if (value > 0) {
      clazz.value = "green";
      setTimeout(() => {
        clazz.value = "";
      }, 500);
    } else {
      clazz.value = "red";
      setTimeout(() => {
        clazz.value = "";
      }, 500);
    }
  }, [value]);

  return <td className={clazz.value}>{value}</td>;
};
