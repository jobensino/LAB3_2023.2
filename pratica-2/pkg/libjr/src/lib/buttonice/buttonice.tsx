import React from 'react'
import { styles as sy } from './buttonice.styles';
import { ButtoniceProps } from './buttonice.types';


const Buttonice : React.FC<ButtoniceProps> = ({sz,makup,onClick,children}) => {

    const handleClick = () => {
        if (onClick) onClick();
    }
    
    return (
        <sy.container $sz={sz} $makup={makup} onClick={()=>handleClick()} >
            {children}
        </sy.container>
    )
}

export {Buttonice}