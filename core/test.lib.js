export const assertEqual = (expected, test) => {
  const result = expected === test;
  result
    ? console.log("SUCCESS")
    : console.error(`ERROR | expected=${expected} | received=${test}`);
};

export const assertTrue = (result) => {
  result ? console.log("SUCCESS") : console.error("ERROR");
};

export const assertFalse = (result) => {
  assertTrue(!result);
};
