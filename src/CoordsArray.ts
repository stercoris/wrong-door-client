import { createContext, useContext } from "react";

export interface Point {
    x: number;
    y: number;
}

export interface Coords {
    points: Point[]
}


type CoordsArrayType = {
    coords: Coords;
    setCoords: (Coords: Coords) => void;
};

export const CoordsArrayContext = createContext<CoordsArrayType>({ coords: { points: [] }, setCoords: coords => console.warn('no coords provider') });
export const useCoords = () => useContext(CoordsArrayContext);

