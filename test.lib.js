export const assertEqual = (expected, test) => {
  const result = expected === test;
  result
    ? console.log("SUCCESS")
    : console.error(`ERROR | expected=${expected} | result=${result}`);
};

export const assertTrue = (result) => {
  result ? console.log("SUCCESS") : console.error("ERROR");
};
