export default function debounce(callback, delay) {
  // initializing timer variable
  let timer = null;

  // args === parameters passed into debounced function => 'function(...params)'
  return function (...args) {
    // capturing value of 'this' from the outer scope
    let context = this;

    // clearing any previously set 'setTimeout()'
    if (timer) {
      clearTimeout(timer);
    }

    // handling 'callback' asynchronously using 'setTimeout()'
    timer = setTimeout(() => {
      callback.apply(context, args);
    }, delay);
  };
}
