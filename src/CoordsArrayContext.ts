import { createContext, useContext } from "react";

export interface Point {
    x: number;
    y: number;
}

export interface Line {
    from: Point,
    to: Point,
}

type CoordsArrayType = {
    coords: Line[];
    setCoords: (Coords: Line[]) => void;
};

export const CoordsArrayContext = createContext<CoordsArrayType>({ coords: [], setCoords: () => console.warn('no coords provider') });
export const useCoords = () => useContext(CoordsArrayContext);
