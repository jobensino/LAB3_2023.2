import { ReactElement, ReactNode } from "react";

class ReactNodeUtil {

    static findElement(children: ReactNode, type: any): ReactNode | null {
        if (Array.isArray(children)) {
            return children.find((value: React.ReactNode, index: number, array: React.ReactNode[]) => {
                const child = value as ReactElement;
                return child.type == type ? value : null;
            })
        } else {
            return (children as ReactElement).type == type ? children : null;
        }
    }

    static mapElement(children: ReactNode, type: any): ReactNode | null {
        if (Array.isArray(children)) {
            return children.map((value: React.ReactNode, index: number, array: React.ReactNode[]) => {
                const child = value as ReactElement;
                return child.type == type ? value : null;
            })
        } else {
            return (children as ReactElement).type == type ? children : null;
        }
    }

}

export {ReactNodeUtil};