class AirTrafficControl {
    requestTakeoff(plane) {
        console.log(`Air Traffic Control grants takeoff clearance for ${plane.getName()}.`);
    }

    requestLanding(plane) {
        console.log(`Air Traffic Control clears ${plane.getName()} for landing.`);
    }
}

class Plane {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    requestTakeoff() {
        console.log(`${this.name} requests takeoff clearance.`);
        airTrafficControl.requestTakeoff(this);
    }

    requestLanding() {
        console.log(`${this.name} requests landing clearance.`);
        airTrafficControl.requestLanding(this);
    }
}

const airTrafficControl = new AirTrafficControl();

const plane1 = new Plane('Flight 123');
const plane2 = new Plane('Flight 456');

plane1.requestTakeoff();
plane2.requestLanding();