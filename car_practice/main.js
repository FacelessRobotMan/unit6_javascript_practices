var details = {
    wheelSize: 16,
    color: 'red',
    isNew: true,
    options: ['ac','bluetooth','push to start']
}

class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.mileage = 0;
        this.state = 'PARKED';
        this.carDetails = Object.assign({}, details)
                          // JSON.parse(JSON.stringify(details))
                          // use this ^ if object contains another object
    }

    changeWheelSize(n) {
        this.carDetails.wheelSize = n;
    }

    changeIsNew(obj) {
        (obj['isNew'] === true ? obj['isNew'] = false : obj['isNew'] = true)
    }

    changeColor(obj, str) {
        obj['color'] = str;
    }

    changeIgnitionType(obj, type) {
        obj['options'].splice(2,1,type)
    }

    drive(miles) {
        this.mileage += miles;
        this.state = 'DRIVING';
    }

    brake() {
        if (this.state === 'DRIVING') {
            this.state = 'STOPPED'
        }
    }

    park() {
        if (this.state === "STOPPED") {
            this.state = "PARKED"
        }
    }
}
var newCar = new Car('Ford','Taurus')

console.log(newCar.carDetails['wheelSize'])
newCar.changeWheelSize(14)
console.log(details.wheelSize)
console.log(newCar.carDetails['wheelSize'])