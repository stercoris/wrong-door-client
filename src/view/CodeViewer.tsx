import { createStyles, Grid, makeStyles, TextField, Theme } from "@material-ui/core";
import React from "react";
import { Line, Point, useCoords } from "../CoordsArrayContext";

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
    const { coords } = useCoords();

    const renderCodes = (coords: Line[]) =>
        coords.map((point) => (
            <div className={classes.codeFragment}>
                line({point.from.x}, {point.from.y},{point.to.x}, {point.to.y});
            </div>
        ));

    return (
        <Grid container style={{ height: "100%" }}>
            <Grid xl={6} item style={{ height: "100%", overflowY: "scroll" }}>
                <div className={classes.container}>
                    {renderCodes(coords)}
                </div>
            </Grid>
            <Grid xl={6} item className={classes.setupMenu}>
                <TextField id="standard-basic" label="Ширина" type="number" />
                <TextField id="standard-basic" label="Высота" type="number" />
            </Grid>

        </Grid>

    );
};
