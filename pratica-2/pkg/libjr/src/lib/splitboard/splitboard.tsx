import React from "react";
import { TSplitBoardProps } from "./splitboard.types";
import {styles as sy} from './splitboard.styles';

const SplitBoard:React.FC<TSplitBoardProps> = ({sz,dir,one,two}) => {
  
    return (
      <sy.container $dir={dir}>

        { dir=="col" && 
            <>
              <sy.col $sz={sz} $bg='#454545'>{one}</sy.col>
              <sy.col $sz={`calc(100% - ${sz})`} $bg='#0A9729'>{two}</sy.col>
            </>
        }
        { dir=="row" && 
            <>
              <sy.row $sz={sz} $bg='#454545'>{one}</sy.row>
              <sy.row $sz={`calc(100% - ${sz})`} $bg='#0A9729'>{two}</sy.row>
            </>
        }

      </sy.container>
    );
  };

  export {SplitBoard}