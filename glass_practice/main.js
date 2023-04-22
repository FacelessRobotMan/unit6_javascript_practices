class Glass {
    constructor(capacity) {
        this.amount = 0;
        this.capacity = capacity;
    }

    addWater(water) {
        (this.amount + water > this.capacity ? this.amount = this.capacity : this.amount += water)
    }

    removeWater(water) {
        (this.amount - water <= 0 ? this.amount = 0 : this.amount -= water)
    }

    emptyGlass() {
        this.amount = 0;
    }
    fillErUp() {
        this.amount = this.capacity;
    }
}