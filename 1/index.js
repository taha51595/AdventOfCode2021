const { readFile } = require("fs/promises");

const run1 = async () => {
  const input = await readFile(`${__dirname}/input.txt`, {
    encoding: "utf-8",
  });
  const increaseCount = input
    .split("\n")
    .map((x) => parseInt(x, 10))
    .reduce(
      ({ count, prev }, nxt) => {
        const isIncrease = prev && nxt > prev;
        return {
          count: count + (isIncrease ? 1 : 0),
          prev: nxt,
        };
      },
      { count: 0, prev: 0 }
    );
  console.log(increaseCount);
};

const run2 = async () => {
  const input = await readFile(`${__dirname}/input.txt`, {
    encoding: "utf-8",
  });
  const increaseCount = input
    .split("\n")
    // .slice(0, 10)
    .map((x) => parseInt(x, 10))
    .reduce(
      ({ count, prev1, prev2, prev3 }, nxt) => {
        const isIncrease = prev1 && prev2 && prev3 && nxt > prev1;
        return {
          count: count + (isIncrease ? 1 : 0),
          prev1: prev2,
          prev2: prev3,
          prev3: nxt,
        };
      },
      {
        count: 0,
        prev1: null,
        prev2: null,
        prev3: null,
      }
    );
  console.log(increaseCount);
};

run1();
run2();
