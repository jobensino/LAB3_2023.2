import { DataStub } from "./datastub";

class DataSupplier extends DataStub {

    constructor (dbname:string,storename:string){
        super(dbname,storename)
    }
}

export {DataSupplier}