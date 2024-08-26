// Implement a JavaScript function to calculate the Fibonacci sequence up to a given number.
const fibonacci = (num) => {
    if (num <= 0) return [];
    if (num === 1) return [0];
    return Array.from({ length: num }).reduce(
      (acc,curr, index) => {
         acc.push( index <= 1 ?  index : acc[ index - 1] + acc[ index - 2]);
        return acc;
      },
      []
    );
  };
  