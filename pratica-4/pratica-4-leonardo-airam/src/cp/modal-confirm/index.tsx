import { Modal } from "react-native";
import { ModalConfirmProps } from "./types";
import { Botao, Mensagem, ModalContainer, ModalContent, TextoBotao } from "./styles";

const ModalConfirm: React.FC<ModalConfirmProps> = ({
  visible,
  onConfirmar,
  onCancelar,
}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={visible} onRequestClose={onCancelar}>
      <ModalContainer>
        <ModalContent>
          <Mensagem>Tem certeza de que deseja excluir este livro?</Mensagem>
          <Botao confirmar onPress={onConfirmar}>
            <TextoBotao>Confirmar</TextoBotao>
          </Botao>
          <Botao onPress={onCancelar}>
            <TextoBotao>Cancelar</TextoBotao>
          </Botao>
        </ModalContent>
      </ModalContainer>
    </Modal>
  );
};

export {
  ModalConfirm
};