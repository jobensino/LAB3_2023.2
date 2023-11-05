interface ModalProps {
    open: boolean;
    hide: () => void;
    children: React.ReactNode;
    title: string;
    focusitems?: string[];
    freeze?: boolean;
}


type TDialogProps = {
    open:boolean,
    toggle:()=>void
  }

export type {ModalProps,TDialogProps}
  