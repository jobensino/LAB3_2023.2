

type InputElement = HTMLInputElement | HTMLTextAreaElement;
type InputChangeEvent = React.ChangeEvent<InputElement>;


interface DropdownProps {
  items: string[];
  initialValue: string;
  
  // Open to up or to down flag
  dropUp?: boolean;

  // Small or big size, big is default
  small?: boolean;

  // witdh
  sz?: string;

  onSelect?: (selected: string)=> void;
}

export type {DropdownProps,InputChangeEvent,InputElement}