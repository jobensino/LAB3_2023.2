import React from "react";
import { SplitProps } from "./split.types";
import { ViewColuna, ViewLinha, ViewPrincipal} from './split.styles';

const SplitBoard:React.ElementType<SplitProps> = ({size,direcao,zona1,zona2}) => {
  
    return (
      <ViewPrincipal $direcao = {direcao}>

        { direcao == "coluna" && 
            <>
              <ViewColuna $size={size} $background='#454545'>{zona1}</ViewColuna>
              <ViewColuna $size={`calc(100% - ${size})`} $background='#0A9729'>{zona2}</ViewColuna>
            </>
        }
        { direcao == "linha" &&
            <>
              <ViewLinha $size={size} $background='#f31616'>{zona1}</ViewLinha>
              <ViewLinha $size={`calc(100% - ${size})`} $background='#e6e5e5'>{zona2}</ViewLinha>
            </>
        }

      </ViewPrincipal>
    );
  };

  export {SplitBoard}