import React from 'react';
import { styles as sy } from './toolbar.styles';
import { TToolbarProps } from './toolbar.types';

const Toolbar:React.FC<TToolbarProps> = ({align,makup,head,midst,tail}) => {
    
    const Empty = () => <> </>

    const Head = () =>  head ? head : <Empty/>;
    const Midst = () =>  midst ? midst : <Empty/>;
    const Tail = () =>  tail ? tail : <Empty/>;

    return (
        <sy.container $align={align} $makup={makup} >
           <sy.head $align={align} >
                <Head />
           </sy.head>
           <sy.midst $align={align} >
               <Midst />
           </sy.midst>
           <sy.tail $align={align} >
               <Tail />
           </sy.tail>  
        </sy.container>
    );
}

export {Toolbar};