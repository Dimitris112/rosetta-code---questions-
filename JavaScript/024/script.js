class EventEmitter {
    constructor() {
        this.events = {};
    }

    /**
     * @param {string} eventName
     * @param {Function} callback
     * @return {Object}
     */
    subscribe(eventName, callback) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        const listeners = this.events[eventName];
        listeners.push(callback);

        let unsubscribed = false;
        return {
            unsubscribe: () => {
                if (unsubscribed) return;
                const idx = listeners.indexOf(callback);
                if (idx !== -1) listeners.splice(idx, 1);
                unsubscribed = true;
            }
        };
    }

    /**
     * @param {string} eventName
     * @param {Array} args
     * @return {Array}
     */
    emit(eventName, args = []) {
        if (!this.events[eventName]) return [];
        return this.events[eventName].map(cb => cb(...args));
    }
}

/**
 * const emitter = new EventEmitter();
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */