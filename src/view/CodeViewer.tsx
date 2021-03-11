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
  })
);

interface CodeViewerProps {}

export const CodeViewer: React.FC<CodeViewerProps> = () => {
  const classes = useStyles();
  const { coords, setCoords } = useCoords();

  const updateCoords = () => {
    const newCoords = [{ x: 20, y: 20 }, ...coords];
    setCoords(newCoords);
  };

  console.log("RERENDER");

  const renderCodes = (coords: Point[]) =>
    coords.map((point) => (
      <p>
        X - {point.x} ||| Y - {point.y}
      </p>
    ));

  return (
    <div className={classes.container}>
      {renderCodes(coords)}
      <button onClick={updateCoords}>Update Coords</button>
    </div>
  );
};
