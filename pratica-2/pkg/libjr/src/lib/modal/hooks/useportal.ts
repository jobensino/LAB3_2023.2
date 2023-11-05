import { useEffect, useState } from "react";

const usePortal = (wrapperId:string="portal") => {

    const [wrapperElement, setWrapperElement] = useState<HTMLDivElement|null>(null);
    
    useEffect(() => {
      let element = document.getElementById(wrapperId) as HTMLDivElement;
      let systemCreated = false;
      // if element is not found with wrapperId or wrapperId is not provided,
      // create and append to body
      if (!element) {
        systemCreated = true;
        element = createWrapperAndAppendToBody(wrapperId);
      }

      setWrapperElement(element);
    
      return () => {
        // delete the programatically created element
        if (systemCreated && element.parentNode) {
          element.parentNode.removeChild(element);
        }
      }
    }, [wrapperId]);

    return wrapperElement;
};

function createWrapperAndAppendToBody(wrapperId:string) {

  const wrapperElement = document.createElement('div');

  wrapperElement.setAttribute("id", wrapperId);

  document.body.appendChild(wrapperElement);

  return wrapperElement;
}

export {usePortal};