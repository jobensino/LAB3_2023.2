import { Point2D, Quadrilateral } from "../geometry2d";

let quadri = new Quadrilateral();

quadri.A = new Point2D(1,5);
quadri.B = new Point2D(6,5);
quadri.C = new Point2D(6,1);
quadri.D = new Point2D(1,1);

console.log(quadri.print())
console.log(quadri.area())