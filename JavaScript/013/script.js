var TimeLimitedCache = function () {
    this.cache = new Map();
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
    const exists = this.cache.has(key);
    if (exists) {
        clearTimeout(this.cache.get(key).timeout);
    }
    const timeout = setTimeout(() => {
        this.cache.delete(key);
    }, duration);
    const expired = exists && this.cache.get(key).expire > Date.now();
    this.cache.set(key, { value, timeout, expire: Date.now() + duration });
    return expired;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
    const entry = this.cache.get(key);
    if (!entry) return -1;
    if (entry.expire > Date.now()) return entry.value;
    this.cache.delete(key);
    return -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
    let cnt = 0;
    const now = Date.now();
    for (const [key, entry] of this.cache) {
        if (entry.expire > now) cnt++;
        else this.cache.delete(key);
    }
    return cnt;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */