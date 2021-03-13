import { createStyles, makeStyles, Theme } from "@material-ui/core";
import React, { useRef } from "react";
import { useCoords } from "../CoordsArrayContext";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: "flex",
            flexDirection: "column",
        },
        canvas: {
            background: "#616161",
            margin: 0,
            border: "solid",
            borderWidth: "2px",
            borderColor: "red",
        },
    })
);

interface DrawPreviewProps { }

export const DrawPreview: React.FC<DrawPreviewProps> = () => {
    const classes = useStyles();
    const { coords, setCoords } = useCoords();

    const canvas = useRef<HTMLCanvasElement>(null);

    console.log("RERENDER");


    return (
        <div className={classes.container}>
            <canvas
                ref={canvas}
                className={classes.canvas}
                width={400}
                height={400}
            />
        </div>
    );
};
