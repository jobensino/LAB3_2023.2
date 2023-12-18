import { StackNavigationProp } from "@react-navigation/stack";

interface ModalConfirmProps {
    visible: boolean;
    onConfirmar: () => void;
    onCancelar: () => void;
  }

export {
    ModalConfirmProps
}