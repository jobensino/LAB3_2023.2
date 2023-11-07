import { area3Points } from "./ccw";
import { Figure2D } from "./figure2d";
import { Point2D } from "./point2d";

class Quadrilateral extends Figure2D {

    constructor () {
        super(4)
    }

    get A() { return super.points[0] }
    set A(xy:Point2D){
        super.setPoint(0,xy)
    }

    get B() { return super.points[1] }
    set B(xy:Point2D){
        super.setPoint(1,xy)
    }

    get C() { return super.points[2] }
    set C(xy:Point2D){
        super.setPoint(2,xy)
    }

    get D() { return super.points[3] }
    set D(xy:Point2D){
        super.setPoint(3,xy)
    }

    print():string {
        return( "A: "+super.print(0)+"\n"+
                "B: "+super.print(1)+"\n"+
                "C: "+super.print(2)+"\n"+
                "D: "+super.print(3))
    }

    area(): number {
        
        // Computing area for all triangles ABC, ABD, ACD, BCD

        const ABC = area3Points(this.A,this.B,this.C);
        const ABD = area3Points(this.A,this.B,this.D);
        const ACD = area3Points(this.A,this.C,this.D);
        const BCD = area3Points(this.B,this.C,this.D);

        console.log("ABC = ",ABC)
        console.log("ABD = ",ABD)
        console.log("ACD = ",ACD)
        console.log("BCD = ",BCD)

        if (!ABC || !ABD || !ACD || !BCD) 
            throw new Error("exists three collinear points")

        const a1 = ABC*ABD;
        const a2 = ABC*ACD;
        const a3 = ABC*BCD;

        //const b1 = ABD*ABC;
        const b2 = ABD*ACD;
        const b3 = ABD*BCD;

        //const c1 = ACD*ABC;
        //const c2 = ACD*ABD;
        //const c3 = ACD*BCD;

        //const d1 = BCD*ABC;
        //const d2 = BCD*ABD;
        const d3 = BCD*ACD;

        console.log("ABC*ABD = ",a1)
        console.log("ABC*ACD = ",a2)
        console.log("ABC*BCD = ",a3)
        console.log("ABD*ACD = ",b2)
        console.log("ABD*BCD = ",b3)
        console.log("BCD*ACD = ",d3)

        if (a1<0 || a2<0 || a3<0 || b2<0 || b3<0 || d3<0)
            throw new Error("Quadrilateral does self-intersect.");

        const p = Math.abs(Math.min(ABC,ABD,ACD,BCD));
        const q = Math.abs(Math.max(ABC,ABD,ACD,BCD));

        return p+q;
    }
}

export {Quadrilateral}