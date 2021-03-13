import { createStyles, Grid, makeStyles, TextField, Theme } from "@material-ui/core";
import React from "react";
import { Point, useCoords } from "../CoordsArrayContext";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: "flex",
            flexDirection: "column",
            alignSelf: "flex-start",
            margin: "0 20px",
        },
        codeFragment: {
            margin: 0,
            padding: 0,
        },
        setupMenu: {
            display: "flex",
            flexDirection: "column",
            alignSelf: "flex-center",
            boxSizing: "border-box",
            padding: 40,
        }
    })
);

interface CodeViewerProps { }

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
            <p className={classes.codeFragment}>
                lineTo({point.x}, {point.y});
            </p>
        ));

    return (
        <Grid container style={{ height: "100%" }}>
            <Grid xl={6} item style={{ height: "100%", overflowY: "scroll" }}>
                <div className={classes.container}>
                    {renderCodes(coords)}
                    <button onClick={updateCoords}>Update Coords</button>
                </div>
            </Grid>
            <Grid xl={6} item className={classes.setupMenu}>
                <TextField id="standard-basic" label="Ширина" type="number" />
                <TextField id="standard-basic" label="Высота" type="number" />
            </Grid>

        </Grid>

    );
};
