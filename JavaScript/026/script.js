class Calculator {
    constructor(num) {
        this.result = num;
    }
    add(num) { this.result += num; return this; }
    subtract(num) { this.result -= num; return this; }
    multiply(num) { this.result *= num; return this; }
    divide(num) { if (!num) throw Error("Division by zero is not allowed"); this.result /= num; return this; }
    power(num) { this.result **= num; return this; }
    getResult() { return this.result; }
}

// class Calculator {

//     /**
//      * @param {number} value
//      */
//     constructor(value) {
//         this.value = value;
//     }

//     /**
//      * @param {number} value
//      * @return {Calculator}
//      */
//     add(value) {
//         this.value += value;
//         return this;
//     }

//     /**
//      * @param {number} value
//      * @return {Calculator}
//      */
//     subtract(value) {
//         this.value -= value;
//         return this;
//     }

//     /**
//      * @param {number} value
//      * @return {Calculator}
//      */
//     multiply(value) {
//         this.value *= value;
//         return this;
//     }

//     /**
//      * @param {number} value
//      * @return {Calculator}
//      */
//     divide(value) {
//         if (value === 0) {
//             this.value = 'Division by zero is not allowed';
//             return this;
//         }

//         this.value /= value;
//         return this;
//     }

//     /**
//      * @param {number} value
//      * @return {Calculator}
//      */
//     power(value) {
//         this.value = this.value ** value;
//         return this;
//     }

//     /**
//      * @return {number}
//      */
//     getResult() {
//         return this.value;
//     }
// }