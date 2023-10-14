interface ButtonProps {
  text?: string;
}

export function Button({text}: ButtonProps) {
  return (
    <p>{text}</p>
  )
}
