type TPaletteColor = {
    fg: string,
    bg: string,
    alpha: number,
}

type TPaletteMotion = {
    hout: TPaletteColor,
    hover: TPaletteColor
}

type TFgBgHg = {
    fg:string,
    bg:string,
    hg:string,
}

type TButtoniceKind = 'circle'|'rounded'|'square';

type TButtonicePalette = {
    item: TPaletteMotion
    kind: TButtoniceKind
};

interface ButtonicePropsEx{
    $sz: string,
    $makup: TButtonicePalette,
}

interface ButtoniceProps {
    sz:string,
    makup: TButtonicePalette,
    onClick?: ()=>void,
    children: React.ReactNode
}


export type {TButtonicePalette,ButtonicePropsEx,TFgBgHg,TButtoniceKind,TPaletteColor,TPaletteMotion,ButtoniceProps}