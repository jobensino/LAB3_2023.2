import { DataStub } from "./datastub";
import { DataSupplier } from "./datasupplier";

class DataRadix extends DataStub {

    protected _suppliers: DataSupplier[];
    protected _curr: DataSupplier|null;

    constructor (name:string){

        super(name)

        this._suppliers = [];
        this._curr = null;
    }

    get curr() { return this._curr; }
    get suppliers() { return this._suppliers; }

    addSupplier(name:string) : DataSupplier {

        const ds = new DataSupplier(this.dbname,name);

        this.suppliers.push(ds);
        this._curr = ds;

        return ds;
    }

    set activeSupplier(name:string) {
        const i = this.suppliers.findIndex((item)=>item.storename===name);
        if (i>=0){
            this._curr = this.suppliers[i];
        }
    }
 
}

export {DataRadix}