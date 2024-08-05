class SubsystemA {
    method() {
        console.log('This is a method of Subsystem-A');
    }
}

class SubsystemB {
    method() {
        console.log('This is a method of Subsystem-B');
    }
}

class SubsystemC {
    method() {
        console.log('This is a method of Subsystem-C');
    }
}



class Facade {
    constructor() {
      this.subsystemA = new SubsystemA();
      this.subsystemB = new SubsystemB();
      this.subsystemC = new SubsystemC();
    }
   
    commonInterface() {
      this.subsystemA.method();
      this.subsystemB.method();
      this.subsystemC.method();
    }
  }