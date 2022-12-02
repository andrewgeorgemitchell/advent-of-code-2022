import { useEffect, useState } from "react";

const uuid = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

const generateSnowflake = () => {
  const snowflake = {
    id: uuid(),
    style: {
      position: "absolute",
      left: `${Math.floor(Math.random() * 100)}%`,
    },
  };
  return snowflake;
};

const generateXSnowflakes = (x: number) => {
  const snowflakes = [];
  for (let i = 0; i < x; i++) {
    snowflakes.push(generateSnowflake());
  }
  return snowflakes;
};

const Snowflake = ({ style }: { style?: any }) => (
  <p style={style} className="animate-snowFall text-white">
    *
  </p>
);

export const SnowFall = () => {
  const [snowflakes, setSnowflakes] = useState<
    Array<{ id: string; style: any }>
  >(generateXSnowflakes(10));

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSnowflakes((snowflakes) => [
        ...snowflakes.slice(-500),
        ...generateXSnowflakes(5),
      ]);
    }, 1000);
    return () => clearTimeout(timeout);
  });

  return (
    <div className="absolute bottom-0 left-0 flex h-full w-full items-end">
      {snowflakes.map(({ id, style }) => (
        <Snowflake key={id} style={style} />
      ))}
    </div>
  );
};
