import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          padding: 10,
        }}
      >
        <Link to={"/signal"}>Signal</Link>
      </div>
      <div
        style={{
          padding: 10,
        }}
      >
        <Link to={"/hook"}>Hook</Link>
      </div>
    </div>
  );
};
