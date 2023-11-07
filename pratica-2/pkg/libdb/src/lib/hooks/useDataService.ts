import { DataRadix } from "../db/dataradix";
import { DataRadixService } from "../db/dataservice";
import { useState } from "react";

function useDataService<D> (nameDB:string,nameService:string) {
    
    const db = new DataRadix(nameDB);
    const ds = db.addSupplier(nameService);
    const [service] = useState(new DataRadixService<D>(ds));

    return {db,ds,service}
}

export {useDataService}