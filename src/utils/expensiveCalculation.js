export function expensiveCalculation(seconds, expensiveValue = 1000) {
  const time = seconds * Math.random() + 0.5;
  var start = new Date();
  while ((new Date() - start) / expensiveValue < time);
  return `It was expensive! ${seconds}`
}