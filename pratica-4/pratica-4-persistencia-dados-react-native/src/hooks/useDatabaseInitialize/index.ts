import { useEffect, useState } from "react";
import { AppDataSource } from "stored/db";

export function useDatabaseInitialize() {
  
  const [connected, setConnected] = useState(false);

  useEffect(() => {

    if (AppDataSource.isInitialized) {
      setConnected(true);
    } else {
      AppDataSource.initialize()
        .then(() => {
          console.log("Database conectada com sucesso!");
          setConnected(true);
        })
        .catch((e) => {
          console.log("Erro ao inicializar a Database", e);
          setConnected(false);
        })
    }
  }, []);

  return [connected];
}