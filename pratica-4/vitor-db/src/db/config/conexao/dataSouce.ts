import { DataSource, DataSourceOptions } from "typeorm"
import { cliente } from "../../entidades"

const config: DataSourceOptions ={
/*  host: "localhost",
    port: 5432,
    username: "root",
    password: "admin", */
    database: "test",
    entities: [cliente],
    synchronize: true,
    logging: true,
    type: 'expo',
    driver: require('expo-sqlite'),
}

class DBConnet {
  
  private datasource: DataSource;
  private _connected: boolean;
  
  constructor(){
    
    this.datasource = new DataSource(config);    
    this._connected = false;
  
  }
 
   connect(){

    if (!this._connected) {

     this.datasource.initialize()
      .then ( ()=> { this._connected = true; console.log("Banco de dados conectado");} )
        .catch( (err)=>{alert("Banco de dados indisponivel");console.log("Erro ao conectar ao Banco de dados");console.log(err)});
    }
    return this._connected;   
  }

  get connectado() { return this._connected }
  get ds() { return this.datasource }
}


const db = new DBConnet();

export {DBConnet,db};