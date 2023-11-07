import { addNumbers } from "./exemplo2";
import { professor } from "./exemplo3";
import { ElectricCar, Truck, accelerate } from "./exemplo4";

console.log(addNumbers(3, 6));

console.log(professor.fullName());  

let myElectricCar = new ElectricCar;
accelerate<ElectricCar>(myElectricCar);
let myTruck = new Truck;
accelerate<Truck>(myTruck);