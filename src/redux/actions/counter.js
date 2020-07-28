export const INCREMENT = "counter/INCREMENT";
export const DECREMRNT = "counter/DECREMRNT";
export const RESET = "counter/RESET";

export function increment() {
  return { type: INCREMENT };
}
export function decrement() {
  return { type: DECREMRNT };
}
export function reset() {
  return { type: RESET };
}
