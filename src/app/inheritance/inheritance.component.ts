import { Component, OnInit } from '@angular/core';

class RepairShop {

  mechanicName: string;

  findRepairShop(repairShopName: string) {
    return console.log('Repair shop is found here ' + repairShopName)
  }
}


class Cars implements Vehicles {
  environment: string;
  make: string;
  speed: number;

  constructor () {

  }


  private setMake(newMake: string) {
    this.make = newMake;
  }

  protected setCarsEnvironment(newEnvironment: string) {
    this.setMake('Volvo')
   return this.environment = newEnvironment;

  }

  setCarsMake(newMake: string) {
    this.make = newMake;
  }

}

class Boats implements Vehicles {
  environment: string = 'Water';
  make: string;
  speed: number;

  private setMake(newMake: string) {
    this.make = newMake;
  }

  repair = new RepairShop();


  protected setEnvironment(newEnvironment: string) {
    this.environment = newEnvironment;
  }

  getSpeed(): void {
    this.repair.findRepairShop('')
    return console.log('This is current speed ' + this.speed);
  }

  setSpeed(startSpeed: number) {
    this.speed = startSpeed;
    console.log('Speed is set to ' + startSpeed);
  }
}

class Planes extends Cars implements Vehicles {
  environmentPlane: string = this.setCarsEnvironment('Air')
  make: string;
  speed: number;

  private setPlaneMake(newMake: string) {
    this.make = newMake;
  }

  constructor() {
    super();
   this.setCarsEnvironment('Lands');
  }

  setEnv() {
    super.setCarsEnvironment('Lands')
    this.environmentPlane = this.setCarsEnvironment('Land');
  }



  protected setPlaneEnvironment(newEnvironment: string) {
    this.environment = newEnvironment;
  }

  setPlaneSpeed(newSpeed: number) {
    this.speed = newSpeed;
  }
}

interface Vehicles {
  make: string;
  speed: number;
  environment: string;

  getSpeed?(speed: number);
  setSpeed?(speed: number);
}

@Component({
  selector: 'app-inheritance',
  templateUrl: './inheritance.component.html',
  styleUrls: ['./inheritance.component.css']
})
export class InheritanceComponent extends Planes {

  constructor() {
    super();
    const bayliner = new Boats();
    const vw = new Cars();
    const cesna = new Planes();

    bayliner.setSpeed(100);
    bayliner.getSpeed();

    cesna.setPlaneSpeed(190);
    cesna.environmentPlane = 'Wild Air';
    this.setPlaneEnvironment('Real wild space')
    vw.setCarsMake('Ford');
  }

}
