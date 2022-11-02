import { Dispatch, Middleware, MiddlewareAPI } from "redux";

function isPrime(n: number) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false;
  return true;
}

export const primeMiddleware =
  (_: MiddlewareAPI) => (next: Dispatch) => (action: any) => {
    action.payload.isPrime = isPrime(action.payload.number);
    return next(action);
  };
