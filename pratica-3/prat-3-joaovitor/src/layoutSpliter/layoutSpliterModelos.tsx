export default function Modelos(tipo: string,medida: string){
    let valores:string[]=[];

    if(tipo == "row"){

        switch(medida){

            case "10%":

            valores = ["row","10%","100%","90%","100%"];
            return valores;
            break;
            
            case "25%":

                valores = ["row","25%","100%","75%","100%"];
                return valores;
                break;

            case "50%":

                valores = ["row","50%","100%","50%","100%"];
                return valores;
                break;
            case "75%":

                valores = ["row","75%","100%","25%","100%"];
                return valores;
                break;

            case "90%":

                valores = ["row","90%","100%","10%","100%"];
                return valores;
                break;

            default:
                valores = ["-1","Entrada invalida !! Modelo de entrada: tipo = row/column layout = 10%/25%/50%/75%/90%"];
                return valores;
                break;

        }

    }else if(tipo == "column"){

        switch(medida){

            case "10%":

                valores = ["column","100%","10%","100%","90%"];
                return valores;
                break;

            case "25%":

                valores = ["column","100%","25%","100%","75%"];
                return valores;
                break;

            case "50%":

                valores = ["column","100%","50%","100%","50%"];
                return valores;
                break;
                
            case "75%":

                valores = ["column","100%","75%","100%","25%"];
                return valores;
                break;

            case "90%":

                valores = ["column","100%","90%","100%","10%"];
                return valores;
                break;
                
            default:
                valores = ["-1","Entrada invalida !! Modelo de entrada: tipo = row/column layout = 10%/25%/50%/75%/90%"];
                return valores;
                break;
        }
           
    }else{
        valores = ["-1","Entrada invalida !! Modelo de entrada: tipo = row/column layout = 10%/25%/50%/75%/90%"];
        return valores;
    }
}