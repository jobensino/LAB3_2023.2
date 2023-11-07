import localForage from "localforage";

class DataStub {

    protected _name : string;
    protected _storename: string;
    protected _store: LocalForage;
    
    constructor (name:string,storename?:string) {
        this._name = name;
        this._storename = "";

        if (storename) {
            this._store = localForage.createInstance({name: name,storeName:storename});
            this._storename = storename;
        }
        else {
            this._store = localForage.createInstance({name: name})
        }

    }

    get dbname() { return this._name; }
    set dbname(n:string) { this._name = n; }

    get store() { return this._store; }
    get storename() { return this._storename; }
}

export {DataStub}