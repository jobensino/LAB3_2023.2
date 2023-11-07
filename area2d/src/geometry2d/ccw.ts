/*
    Given three points a, b, and c, determine whether they form a counterclockwise.

                      | ax  ay  1 |
    2 x area(a,b,c) = | bx  by  1 | = (bx-ax)(cy-ay)-(cx-ax)(by-ay)
                      | cx  cy  1 |

    If area > 0 then a-b-c is counterclockwise. 
    If area < 0, then a-b-c is clockwise. 
    If area = 0, then a-b-c are collinear.

    Fonte: 
        https://algs4.cs.princeton.edu/91primitives/#:~:text=The%20function%20ccw%20takes%20three,b%2D%3Ec%20are%20collinear.
        https://stackoverflow.com/questions/7009548/determining-ordering-of-vertices-to-form-a-quadrilateral
        https://mundoeducacao.uol.com.br/matematica/area-um-quadrilatero-na-geometria-analitica.htm.
*/

import { Point2D } from "./point2d";

function detABC(a:Point2D,b:Point2D,c:Point2D){

    if (!a) throw new Error("Point [a] undefined. ")
    if (!b) throw new Error("Point [b] undefined. ")
    if (!c) throw new Error("Point [c] undefined. ")

    return (b.x-a.x)*(c.y-a.y)-(c.x-a.x)*(b.y-a.y);
}
    

function ccw(a:Point2D,b:Point2D,c:Point2D){

    const d = detABC(a,b,c);

    return d == 0 ? 0 : Math.sign(d);
}

function area3Points(a:Point2D,b:Point2D,c:Point2D){

    const d = detABC(a,b,c);

    return d != 0 ? d/2.0 : 0;
}

export {ccw,area3Points}