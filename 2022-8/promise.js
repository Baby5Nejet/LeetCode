class myPromise {
  static PENDING = "pending";
  static FULFILLED = "fulfilled";
  static REJECTED = "rejected";

  static resolve(value) {
    if (value && value.then) {
      return value;
    }
    return new myPromise((resolve) => resolve(value));
  }

  static reject(value) {
    return new myPromise((_, reject) => reject(value));
  }

  constructor(fn) {
    this.status = myPromise.PENDING;
    this.result = null;

    this.resFns = [];
    this.rejFns = [];

    const resolve = (value) => {
      if (this.status === myPromise.PENDING) {
        setTimeout(() => {
          this.status = myPromise.FULFILLED;
          this.result = value;
          this.resFns.forEach(({ fn, resolve, reject }) => resolve(fn(value)));
        });
      }
    };

    const reject = (reason) => {
      if (this.status === myPromise.PENDING) {
        setTimeout(() => {
          this.status = myPromise.REJECTED;
          this.result = reason;
          this.rejFns.forEach(({ fn, resolve, reject }) => reject(fn(reason)));
        });
      }
    };

    try {
      fn(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  then(resFn, rejFn) {
    resFn = typeof resFn === "function" ? resFn : (value) => value;
    rejFn = typeof rejFn === "function" ? rejFn : (reason) => reason;

    const _promise = {
      [myPromise.PENDING]: () => {
        return new myPromise((resolve, reject) => {
          this.resFns.push({ fn: resFn, resolve, reject });
          this.rejFns.push({ fn: rejFn, resolve, reject });
        });
      },
      [myPromise.FULFILLED]: () => myPromise.resolve(resFn(this.result)),
      [myPromise.REJECTED]: () => myPromise.reject(rejFn(this.result)),
    }[this.status];

    return _promise();
  }

  catch(fn) {
    return this.then(undefined, fn);
  }

  finally(cb) {
    return this.then(cb, cb);
  }
}