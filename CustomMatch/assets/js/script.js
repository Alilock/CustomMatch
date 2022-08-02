class CustomMatch {

    constructor(num) {
        this.number = num

    }

    plus(val) {
        return new CustomMatch(this.number += val)
    }
    minus(val) {
        return new CustomMatch(this.number -= val)
    }
    multiple(val) {
        return new CustomMatch(this.number *= val)

    }
    divide(val) {
        return new CustomMatch(this.number /= val)
    }


}
var result = new CustomMatch(50).plus(6).minus(30).multiple(3).divide(2)
console.log(result);