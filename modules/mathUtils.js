export function add(a, b) {
  return a + b;
}

export function substraction(a, b) {
  return a - b;
}

export function division(a, b) {
  return a / b;
}

// Named export
export function multiply(a, b) {
  return a * b;
}

// Default export
export default function greet(name) {
  return `Hello, ${name}!`;
}