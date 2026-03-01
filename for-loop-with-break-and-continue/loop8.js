for (let i = 1; i <= 20; i++) {
  if (i === 5) {
    console.log("Detected 5");
    continue;
  }
  console.log(`value of i is ${i}`);
}