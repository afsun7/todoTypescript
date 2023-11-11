import { ReactNode } from "react";

type countAliases = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  children: ReactNode;
};
export default function Counter({ children, setCount }: countAliases) {
  return (
    <>
      <h1>count is {children}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      <button onClick={() => setCount((prev) => prev - 1)}>-</button>
    </>
  );
}
