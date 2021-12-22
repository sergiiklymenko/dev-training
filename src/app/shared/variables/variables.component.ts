import {Component, OnInit} from '@angular/core';
import {element} from 'protractor';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.css']
})
export class VariablesComponent implements OnInit {

  constructor() {
    function setMake() {
      let make = 'Volvo';

      function changeMake() {
        make = 'VW';
      }

      changeMake();
      console.log('This is make: ' + make);
    }

    setMake();

    function setModel() {
      let model = 'S40';

      function setNewModel(newModel) {
        model = newModel;
        console.log('This is newModel: ' + newModel);
      };
      setNewModel('CC');
      console.log('This is model: ' + model);
    }

    setModel();

    function setYear() {
      let year = 2000;
      (function changeYear() {
        year = 2013;
      })();
      console.log('Setting year ' + year);
    }

    setYear();


    (function() {
      let interior = 'gray';

      function resetInterior() {
        interior = 'black';
      }

      resetInterior();
      console.log('This is interior: ' + interior);
    })();

    const arr = [];
    console.log('Array is here: ', arr);

    arr.push(1, 'num', 3, 4, 5);
    console.log(typeof arr);

    arr.forEach(element => console.log('Here is an element', element));

    const cars = {
      first: 'BMW',
      second: 'VW',
      third: 'Audi',
      fourth: 'Volvo',
      fifth: 'Toyota'
    };

    for (var field in cars) {
      console.log(field + ': ' + cars[field]);
    }

    function calc(num, per) {
      return (num) => {
        (num / 100) * per;
        console.log(num);
      };
    }

    calc(500, 30);

    const test = {
      name: 'test object',
      createAnonFunction: function() {
        return function() {
          console.log(this.name);
          console.log(arguments);
        };
      },

      createArrowFunction: function() {
        return () => {
          console.log(this.name);
          console.log(arguments);
        };
      }
    };

  }



  ngOnInit() {
  }


}
