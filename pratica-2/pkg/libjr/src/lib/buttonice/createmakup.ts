
import { TButtoniceKind, TFgBgHg, TPaletteColor } from "./buttonice.types";

const createColor = (c:string,bg:string,a:number=1.0):TPaletteColor => {
    return({ fg: c, bg: bg, alpha: a});  
}

const createButtonColor = (c:TFgBgHg) => {
    const hout = createColor(c.fg,c.bg,0.8);
    const hover = createColor(c.fg,c.hg,0.5);
    return ({
        hout: hout,
        hover: hover,
    })

}

const createButtonMakup = (c:TFgBgHg={fg:'#CBD3D4',bg:'#5C5853',hg:'#B4B2B0'},k:TButtoniceKind='square')  => {
    return ({                                     
        item: createButtonColor(c),
        kind: k
        })
}

export {createButtonMakup,createButtonColor}