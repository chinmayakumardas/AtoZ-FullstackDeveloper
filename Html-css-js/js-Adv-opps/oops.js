class room {
    constructor(no, size, price) {
        this.no = no;
        this.size = size;
        this.price = price;
    }

    print() {
        console.log("room no: " + this.no);
        console.log("room size: " + this.size);
        console.log("room price: " + this.price);
    }
}

let R1 = new room(100, 4, 12000);
console.log(R1);
R1.print();

class hotel extends room {
    constructor(no, size, price, stat, location) {
        super(no, size, price); // Call the parent constructor with super()
        this.stat = stat;
        this.location = location;
    }
}

let mayfair = new hotel(101, 5, 25000, "vacant", "Bhubaneswar");

console.log(mayfair);
mayfair.print(); // Inherits print method from room
