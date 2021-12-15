const { readFile } = require("fs/promises");

const run1 = async () => {
  const input = await readFile(`${__dirname}/input.txt`, {
    encoding: "utf-8",
  });
  const counts = input.split("\n").reduce((counts, nxt) => {
    const nums = nxt.split("");
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      const currentCounts = counts[i] || {
        zero: 0,
        one: 0,
      };
      if (num === "0") {
        counts[i] = {
          ...currentCounts,
          zero: currentCounts.zero + 1,
        };
      } else {
        counts[i] = {
          ...currentCounts,
          one: currentCounts.one + 1,
        };
      }
    }
    return counts;
  }, []);
  const gammaBin = counts
    .map(({ zero, one }) => (zero > one ? "0" : "1"))
    .join("");
  //could bitflip gamma
  const epsilonBin = counts
    .map(({ zero, one }) => (zero < one ? "0" : "1"))
    .join("");
  const gamma = parseInt(gammaBin, 2);
  const epsilon = parseInt(epsilonBin, 2);
  const power = gamma * epsilon;
  console.log(power, gamma, epsilon);
};

run1();
