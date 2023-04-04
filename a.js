class Quadratic {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getDiscriminant() {
        return this.b * this.b - 4 * this.a * this.c;
    }

    getRoot1() {
        return (-this.b + Math.pow(this.getDiscriminant(), 0.5)) / (2 * this.a)
    }

    getRoot2() {
        return (-this.b - Math.sqrt(this.getDiscriminant())) / (2 * this.a)
    }
}

let pt1 = new Quadratic(1, 3, 1)

console.log(pt1.getRoot1())
console.log(pt1.getRoot2())