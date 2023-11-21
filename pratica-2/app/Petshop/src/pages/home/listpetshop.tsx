import { useDataService } from "libdb";
import { PetshopCadastro } from "model/petshop.model";
import { useState, useEffect } from "react";
import { useGlobalContext } from "state/global.context";
import { Video, styles as sy } from './home.styles'
import videoEscolhido from 'videos/10_coisas_sobre_seu_gato.mp4'

const ListPetshopScore: React.FC = () => {
  const { petshop } = useGlobalContext();
  const { service } = useDataService<PetshopCadastro>("petshopDB", "petshopStore")
  const [_, forceUpdade] = useState(false)

  useEffect(() => {
    petshop.load("petshopscore", service, () => forceUpdade((prev) => !prev));
  }, [])

  return (
    <sy.column>
      {petshop.state.items &&
      petshop.state.items.map((item, index) => {
        return (
          <div key={index}>
            <sy.box>Nome Animal: {item.nome}</sy.box>
            <sy.box>Idade do Animal: {item.idade}</sy.box>
            <sy.box>Cor do Animal: {item.cor}</sy.box>
            <sy.box>Raça do Animal: {item.raca}</sy.box>
          </div>
        );
      })}
      <Video src={videoEscolhido} loop autoPlay muted></Video>
    </sy.column>
  )
}

export { ListPetshopScore }