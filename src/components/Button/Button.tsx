import { useState } from "react";
import { ButtonProps } from "./Button.types";

export function Button({text}: ButtonProps) {
  const [title, setTitle] = useState(text)

  return (
    <button onClick={() => setTitle('vai ti fudê mlk')}>{title}</button>
  )
}
