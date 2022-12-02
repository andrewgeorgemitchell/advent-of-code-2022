import { useEffect, useState } from "react";

export interface TypewriterProps {
  children: string;
  delay?: number;
  charStart?: number;
}

export const Typewriter = ({
  children,
  charStart = 20,
  delay = 60,
}: TypewriterProps) => {
  const [text, setText] = useState(children.slice(0, charStart));

  useEffect(() => {
    const textTimeout = setTimeout(() => {
      if (text.length < children.length) {
        setText((text) => text + children[text.length]);
      }
    }, delay);
    return () => clearTimeout(textTimeout);
  }, [text]);

  return <>{text}</>;
};
