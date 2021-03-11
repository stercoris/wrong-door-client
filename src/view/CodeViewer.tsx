import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { stringify } from "querystring";
import React, { useEffect, useRef, useState } from "react";
import { Point, useCoords } from "../CoordsArrayContext";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: "flex",
            flexDirection: "column",
        },
    }),
);


interface CodeViewerProps { }

export const CodeViewer: React.FC<CodeViewerProps> = () => {
    const classes = useStyles();
    const { coords, setCoords } = useCoords();

    const points = coords;

    const updateCoords = () => {
        const newPoints = [{ x: 20, y: 20 }, ...points]
        setCoords(newPoints);
    }

    console.log("RERENDER");

    function renderCodes(points: Point[]) {
        points.map((point, i) => {
            return (<p>X - {point.x} ||| Y - {point.y}</p>)
        })
    }

    return (
        <div className={classes.container} >
            {renderCodes(points)}a
            <button onClick={updateCoords}>qfqwfq</button>
        </div>
    );
}