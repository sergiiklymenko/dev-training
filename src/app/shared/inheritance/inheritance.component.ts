import {Component, OnInit} from '@angular/core';

class RepairShop {

  constructor() {
  }

  mechanicName: string;
  protected shopManager: string;

  findRepairShop(repairShopName: string) {
    return console.log('Repair shop is found here ' + repairShopName);
  }

  protected findMechanic(mecName) {
    this.mechanicName = mecName;
    console.log('Mechanic is found')
  }
}

class Cars extends RepairShop implements Vehicles {
  environment: string;
  make: string;
  speed: number;
  private interior: string

  constructor() {
    super();
    this.mechanicName = 'Paul';
  }

  findBetterMechanic() {
    this.findMechanic('Greg');
  }
  newTech = this.findMechanic('Greg');

  private setMake(newMake: string) {
    this.make = newMake;
  }

  setupCar(car: string) {
    this.setMake(car);
  }

  setShop(mech, manager, inter) {
    this.shopManager = mech;
    this.mechanicName = manager;
    this.interior = inter;
  }

   static setCarsEnvironment() {
    return 123;
  }

  setCarsMake(newMake: string) {
    this.make = newMake;

  }

  getSpeed() {
    return this.speed;
  }

  setSpeed(startSpeed: number) {
    this.speed = startSpeed;
  }

}

interface Vehicles {
  make: string;
  speed: number;
  environment: string;

  getSpeed(speed: number);

  setSpeed(speed: number);
}

@Component({
  selector: 'app-inheritance',
  templateUrl: './inheritance.component.html',
  styleUrls: ['./inheritance.component.css']
})
export class InheritanceComponent {
  currentSpeed: number;

  constructor() {
    Cars.setCarsEnvironment();

    const vw = new Cars();
    vw.setCarsMake('VW');
    vw.setSpeed(100);
    this.currentSpeed = vw.getSpeed();

    const repair = new RepairShop();
    repair.mechanicName = 'Luke';
    repair.findRepairShop('Peters shop');

    const volvo = new Cars();
    volvo.setCarsMake('Volvo');

    console.log(vw.newTech)

    const lincoln = new Cars();
    // encapsulation here
    lincoln.setupCar('Lincoln')

    // encapsulation here
    const autoShop = new Cars();
    autoShop.setShop('Steve', 'John', 'Grey')

    autoShop.findBetterMechanic();
  }


}
