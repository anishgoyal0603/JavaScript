const otherNumber = 123.8966;
  console.log(otherNumber.toPrecision(3)); // "124" (Rounds off)// Number of significant digits. Must be in the range 1 - 21, inclusive.
  console.log(otherNumber.toPrecision(4)); // "123.9"

  const hundreds = 1000000;
  console.log(hundreds.toLocaleString()); // "1,000,000" US system
  console.log(hundreds.toLocaleString('en-IN')); // "10,00,000"

  console.log(Number.MAX_VALUE);
  
  