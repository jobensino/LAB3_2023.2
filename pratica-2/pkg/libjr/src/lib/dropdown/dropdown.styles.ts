import styled from "styled-components";

const itemHeightBig = "36px";
const itemHeightSmall = "22px";

const getItemHightSize = (small: boolean) => small ? itemHeightSmall : itemHeightBig;

// ${({ dropUp }) => getSelectListItemBorderRadius(dropUp)}

// border-bottom-left-radius: ${props => (props.last ? "10px" : "0px")};
// border-bottom-right-radius: ${props => (props.last ? "10px" : "0px")};

interface SelectListItemProps {
  $small: boolean;
  $last: boolean;
  $dropUp: boolean;
}

interface SelectListWrapperProps {
  $small: boolean;
  $dropUp: boolean;
  $sz: string;
}

interface SelectCurrentProps {
  $small: boolean; 
  open: boolean 
}

interface SelectWrapperProps {
  $small: boolean;
  $dropUp: boolean;
  $sz: string;
  open: boolean;
  ref: React.RefObject<HTMLDivElement>;
}

const padleft = '13px';

const SelectListItem = styled.div<SelectListItemProps>`
  display: flex;
  min-height: ${props => getItemHightSize(props.$small)};
  max-height: ${props => getItemHightSize(props.$small)};
  align-items: center;
  padding-left: ${padleft};
  justify-content: flex-start;
  
  &:hover {
    background: #282831;
  }
`;

const SelectListWrapper = styled.div<SelectListWrapperProps>`
  
  position: absolute;

  width: calc( ${p=>p.$sz} + ${padleft} );
  white-space: nowrap;

  background: #454550;
  list-style: none;
  white-space: nowrap;
  border-top-left-radius: ${({ $dropUp }) => ($dropUp ? "10px" : "0px")};
  border-top-right-radius: ${({ $dropUp }) => ($dropUp ? "10px" : "0px")};
  border-bottom-left-radius: ${({ $dropUp }) => ($dropUp ? "0px" : "10px")};
  border-bottom-right-radius: ${({ $dropUp }) => ($dropUp ? "0px" : "10px")};

  & > div:first-child {
    &:hover {
      border-top-left-radius: ${({ $dropUp }) => ($dropUp ? "10px" : "0px")};
      border-top-right-radius: ${({ $dropUp }) => ($dropUp ? "10px" : "0px")};
    }
  }

  & > div:last-child {
    &:hover {
      border-bottom-left-radius: ${({ $dropUp }) => ($dropUp ? "0px" : "10px")};
      border-bottom-right-radius: ${({ $dropUp }) => ($dropUp ? "0px" : "10px")};
    }
  }

  top: ${({ $dropUp, $small }) => {
    const size = getItemHightSize($small);
    if ($dropUp) {
      return "calc((" + size + " * 2) * -1)";
    }

    return size;
  }};
  left: 0;
`;

const ItemStyled = styled.div<{$sz:string}>`
  display: flex;
  align-items: center;
  padding-left: ${padleft};
  justify-content: flex-start;
  width: calc( ${p=>p.$sz} + ${padleft} );
  white-space: nowrap;
`;

const SelectCurrent = styled(ItemStyled)<SelectCurrentProps>`
  min-height: ${props => getItemHightSize(props.$small)};
  max-height: ${props => getItemHightSize(props.$small)};
  
  & > div {
    width: 100%;
    height: 100%;
    padding-left: ${padleft};
  }

  &:hover {
    background-color: ${props => (props.open ? "" : "#50505B")};
    border-radius: ${props => (props.open ? "" : "10px")};
  }

  &::after {
    content: "";
    top: ${props => {
      if (props.$small) {
        return props.open ? "10px" : "6px";
      }

      return props.open ? "15px" : "8px";
    }};
    right: ${props => (props.$small ? "10px" : "25px")};
    border: solid #fff;
    padding: ${props => (props.$small ? "3px" : "5px")};
    display: inline-block;
    position: absolute;
    border-width: 0 2px 2px 0;

    transform: rotate(${props => (props.open ? "225deg" : "45deg")});
    -webkit-transform: rotate(${props => (props.open ? "225deg" : "45deg")});

    transition: 0.5s;
  }
`;

const getSelectWrapperBorderRaius = (dropUp: boolean, open: boolean) => {
  if (dropUp) {
    return `
      border-top-left-radius: ${open ? "0px" : "10px"};
      border-top-right-radius: ${open ? "0px" : "10px"};
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
    `;
  }

  return `
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      border-bottom-left-radius: ${open ? "0px" : "10px"};
      border-bottom-right-radius: ${open ? "0px" : "10px"};
  `;
};

const SelectWrapper = styled.div<SelectWrapperProps>`
  cursor: pointer;
  width: calc( ${p=>p.$sz} + ${padleft} );
  color: #99999f;
  z-index: 1;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  position: relative;
  min-width: ${props => (props.$small ? "60px" : "80px")};
  min-height: ${props => getItemHightSize(props.$small)};
  max-height: ${props => getItemHightSize(props.$small)};
  background: #454550;

  ${props => getSelectWrapperBorderRaius(props.$dropUp, props.open)}

  /* border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: ${props => (props.open ? "0px" : "10px")};
  border-bottom-right-radius: ${props => (props.open ? "0px" : "10px")}; */
`;


export {SelectWrapper,SelectCurrent,SelectListWrapper,SelectListItem}