/**
 * @param {Array<Function>} functions
 * @return {Promise<any[]>}
 */
var promiseAll = function (functions) {
  return new Promise((resolve, reject) => {
    const n = functions.length;
    if (n === 0) return resolve([]);
    const results = new Array(n);
    let finished = 0;
    let done = false;

    for (let i = 0; i < n; i++) {
      try {
        const p = functions[i]();
        Promise.resolve(p).then(
          val => {
            if (done) return;
            results[i] = val;
            finished++;
            if (finished === n) {
              done = true;
              resolve(results);
            }
          },
          err => {
            if (!done) {
              done = true;
              reject(err);
            }
          }
        );
      } catch (err) {
        if (!done) {
          done = true;
          reject(err);
        }
      }
    }
  });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */