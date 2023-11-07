import { DataSupplier } from "./datasupplier";

class DataRadixService<D> { 

    protected _supplier: DataSupplier;

    constructor(ds:DataSupplier){
        this._supplier = ds;
    }

    get supplier() { return this._supplier }

    load = async () => {

        const items:D[]=[];
    
        try {
            await this.supplier.store.iterate((value: D) => {
                items.push(value)
            })
        } catch (e) {
            console.error(e);     
        }
        
        return items;
    }

    insert = async (key:string,value: D) => {
        try {
            await this.supplier.store.setItem(key, value);
        } catch ( e ) {
            console.error(e)
        }
    }
    
}

export {DataRadixService}