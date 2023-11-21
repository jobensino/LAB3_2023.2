import React, { useRef } from 'react';
import {Modal, ModalReply, TDialogProps, TextEdit} from 'libjr';
import { useGlobalContext } from 'state/global.context';
import { PetshopCadastro } from 'model/petshop.model';
import { useDataService } from 'libdb';
import { Box, Container } from './dlgnew.styles';
import imgagemEscolhida from 'imagens/logo_-semfundo-rnefii.webp'

const Dlg: React.FC<TDialogProps> = ({open,toggle}) => {

  const {petshop} = useGlobalContext();
  const {service} = useDataService<PetshopCadastro>("PetshopDB","PetshopStore")

  const nomeRef  = useRef("")
  const idadeRef = useRef("")
  const corRef   = useRef("")
  const racaRef  = useRef("")

  const onConfirm = () => {

    const item:PetshopCadastro = {id:petshop.state.items.length+1,nome:nomeRef.current,idade:idadeRef.current,cor:corRef.current,raca:racaRef.current};
    
    petshop.add("dlgnew",item,service);
    
    toggle();
  }

  const onCancel = () => toggle();
  const focusItems = ["petshopnome","petshopidade","petshopcor","petshopraca"];
  
  return (
      <Modal open={open} hide={toggle} title='WebCão Cadastramento' focusitems={focusItems}>
          <Container>
            <Box>
                <TextEdit  label={'Nome do animal'}
                        name={focusItems[0]}
                        placehorlder='Informe nome:'                         
                        handleChange={(s: string)=> nomeRef.current = s} />
            </Box>
            <Box>
                <TextEdit  label={'Idade do animal'}
                        name={focusItems[1]}
                        placehorlder='Informe idade:'                         
                        handleChange={(s: string)=> idadeRef.current = s} />
            </Box>
            <Box>
                <TextEdit  label={'Cor da pelagem do animal'}
                        name={focusItems[2]}
                        placehorlder='Informe a cor:'                         
                        handleChange={(s: string)=> corRef.current = s} />
            </Box>
            <Box>
                <TextEdit  label={'Raça do animal'}
                        name={focusItems[3]}
                        placehorlder='Informe a raça:'                         
                        handleChange={(s: string)=> racaRef.current = s} />
            </Box>
            <ModalReply onConfirm={onConfirm} onCancel={onCancel}/>
            <img src={imgagemEscolhida}/>
            {/*Referencia da imagem: WEBCAO PET SHOP DISTRIBUIDORA DE PRODUTOS LTDA - CNPJ: 47.807.587/0001-09 © Todos os direitos reservados. 2023. Link de acesso
            https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.webcaopetshop.com.br%2F&psig=AOvVaw0STDeJEHLzkrvHqKxWR69o&ust=1699893093416000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNjq17HxvoIDFQAAAAAdAAAAABAE*/}
          </Container>
      </Modal>
  )
}


export {Dlg}
