type TAlignToolbar = "vertical"|"horizontal";
type TMakupToolbar = {fg:string,bg:string,alpha:number,sz:string};

type TToolbarProps = {
    align:TAlignToolbar,
    makup: TMakupToolbar,
    head?: React.ReactNode,
    midst?: React.ReactNode,
    tail?: React.ReactNode,
}

// for transient propertie styled-component 
type TToolbarPropsEx = {
    $align:TAlignToolbar,
    $makup: TMakupToolbar
}

export type {TToolbarProps,TAlignToolbar,TToolbarPropsEx};