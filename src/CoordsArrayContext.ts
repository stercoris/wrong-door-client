import { createContext, useContext } from "react";

export interface Point {
    x: number;
    y: number;
}

type CoordsArrayType = {
    coords: Point[];
    setCoords: (Coords: Point[]) => void;
};

export const CoordsArrayContext = createContext<CoordsArrayType>({ coords: [], setCoords: () => console.warn('no coords provider') });
export const useCoords = () => useContext(CoordsArrayContext);
