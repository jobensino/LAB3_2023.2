type TDirectiontSplitBoard = 'row'|'col';

type TSplitBoardProps = {
    dir: TDirectiontSplitBoard
    sz: string,
    one: React.ReactNode,
    two: React.ReactNode
}

export type {TSplitBoardProps,TDirectiontSplitBoard}