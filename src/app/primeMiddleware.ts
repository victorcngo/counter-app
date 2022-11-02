import { Dispatch, Middleware, MiddlewareAPI } from 'redux';

// Return true if n is prime
function isPrime(n: number) 
{
    // Check if n is less than 2 => not prime
    if (n<2) return false;

    // Loop from 2 to square root of n
    for (let i = 2; i <= Math.sqrt(n); i++) 
        // If i is a divisor of n, n is not prime
        if (n % i == 0) return false;

    return true;
}

export const primeMiddleware = (_: MiddlewareAPI) => (next: Dispatch) => (action: any) => {
  // Here you have access to `action.type` and `action.payload`
  console.log('Logging action with type', action.type);
  console.log('Number : ', action.payload);
  console.log('isPrime : ', isPrime(action.payload));

  // You should always do this at the end of your middleware
  return next(action)
}
