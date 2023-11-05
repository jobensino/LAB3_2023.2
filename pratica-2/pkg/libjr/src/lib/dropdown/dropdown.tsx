import React,{ useEffect, useRef, useState } from "react";
import { DropdownProps } from "./dropdown.types";
import { SelectCurrent, SelectListItem, SelectListWrapper, SelectWrapper } from "./dropdown.styles";

const Dropdown : React.FC<DropdownProps> = ({ items, onSelect, initialValue, sz='64px', small=false, dropUp=false }) => {

    const node = useRef<HTMLDivElement>(null);
  
    const [open, setOpen] = useState(false);
    const [value,setValue] = useState(initialValue)

    const handleClick = (e: { target: unknown; }) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      if (node.current.contains(e.target)) {
        // inside click
        return;
      }
      // outside click
      setOpen(false);
    };
  
    const handleChange = (selectedValue: string) => {
        
      setOpen(false);
      setValue(selectedValue);

      if (onSelect) onSelect(selectedValue);

    };
  
    useEffect(() => {
      document.addEventListener("mousedown", handleClick);
  
      return () => {
        document.removeEventListener("mousedown", handleClick);
      };
    }, []);
  
    return (
      <SelectWrapper ref={node} open={open} $small={small} $dropUp={dropUp} $sz={sz}>

        <SelectCurrent open={open} $small={small} $sz={sz} onClick={() => setOpen(!open)}>
          {value}
        </SelectCurrent>
  
        {
          <SelectListWrapper $dropUp={dropUp} $small={small} $sz={sz}>
            {open &&
              items
                .filter(item => item !== value)
                .map((item,index,arr) => (
                  <SelectListItem
                    key={`select-item-${index}`}
                    $small={small}
                    $last={index === arr.length - 1}
                    $dropUp={dropUp}
                    onClick={() => handleChange(item)}
                  >
                    {item}
                  </SelectListItem>
                ))}
          </SelectListWrapper>
        }
      </SelectWrapper>
    );
  };

  export {Dropdown}