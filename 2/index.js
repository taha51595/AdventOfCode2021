const { readFile } = require("fs/promises");

const run1 = async () => {
  const input = await readFile(`${__dirname}/input.txt`, {
    encoding: "utf-8",
  });
  const parseLine = (s) => {
    const [direction, numS] = s.split(" ");
    const num = parseInt(numS, 10);
    if (direction === "forward") {
      return {
        h: num,
        v: 0,
      };
    }
    if (direction === "down") {
      return {
        h: 0,
        v: num,
      };
    }
    if (direction === "up") {
      return {
        h: 0,
        v: num * -1,
      };
    }
  };
  const increaseCount = input
    .split("\n")
    .map(parseLine)
    .reduce(
      ({ horizontal, vertical }, { h, v }) => {
        return {
          horizontal: horizontal + h,
          vertical: vertical + v,
        };
      },
      { horizontal: 0, vertical: 0 }
    );
  console.log(increaseCount, increaseCount.horizontal * increaseCount.vertical);
};

const run2 = async () => {
  const input = await readFile(`${__dirname}/input.txt`, {
    encoding: "utf-8",
  });
  const parseLine = (s) => {
    const [direction, numS] = s.split(" ");
    const num = parseInt(numS, 10);
    if (direction === "forward") {
      return {
        h: num,
        a: 0,
      };
    }
    if (direction === "down") {
      return {
        h: 0,
        a: num,
      };
    }
    if (direction === "up") {
      return {
        h: 0,
        a: num * -1,
      };
    }
  };
  const tmp = [
    "forward 5",
    "down 5",
    "forward 8",
    "up 3",
    "down 8",
    "forward 2",
  ];
  const increaseCount = input
    .split("\n")
    .map(parseLine)
    .reduce(
      ({ horizontal, vertical, aim }, { h, a }) => {
        return {
          aim: aim + a,
          horizontal: horizontal + h,
          vertical: vertical + h * aim,
        };
      },
      { horizontal: 0, vertical: 0, aim: 0 }
    );
  console.log(increaseCount, increaseCount.horizontal * increaseCount.vertical);
};

run1();
run2();
