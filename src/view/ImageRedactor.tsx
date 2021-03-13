import { createStyles, makeStyles, Theme } from "@material-ui/core";
import React, { MouseEvent, useEffect, useRef, useState } from "react";
import ImageUploader from "react-images-upload";
import { Line, Point, useCoords } from "../CoordsArrayContext";

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

interface ImageRedactorProps { }

export const ImageRedactor: React.FC<ImageRedactorProps> = () => {
    const classes = useStyles();
    const { coords, setCoords } = useCoords();

    const [myimg, changeImage] = useState(new Image());
    const [from, setFrom] = useState({} as Point);
    const canvas = useRef<HTMLCanvasElement>(null);

    function onDrop(files: File[], pictures: string[]) {
        const new_image = new Image();
        new_image.src = pictures[pictures.length - 1];
        changeImage(new_image);
    }

    useEffect(() => {
        const context = canvas!.current!.getContext("2d")!;
        context.beginPath();

        coords.forEach(line => {
            context.moveTo(line.from.x, line.from.y);
            context.lineTo(line.to.x, line.to.y);
        });
        context.strokeStyle = '#ff0000';
        context.stroke();
    }, [coords]);

    useEffect(() => {
        if (myimg) {
            canvas!.current!.getContext("2d")!.drawImage(myimg, 0, 0, 637, 848);
        }
    }, [myimg]);

    const handleCanvasClick = (e: MouseEvent) => {
        var x;
        var y;
        if (e.pageX || e.pageY) {
            x = e.pageX;
            y = e.pageY;
        } else {
            x =
                e.nativeEvent.clientX +
                document.body.scrollLeft +
                document.documentElement.scrollLeft;
            y =
                e.nativeEvent.clientY +
                document.body.scrollTop +
                document.documentElement.scrollTop;
        }
        x -= canvas!.current!.offsetLeft;
        y -= canvas!.current!.offsetTop;
        if (e.type === "mouseup") {
            const newCoords = [
                ...coords,
                {
                    from,
                    to: {
                        x: x,
                        y: y,
                    }
                } as Line,
            ];
            console.log(coords);
            setCoords(newCoords);
        }
        setFrom({ x, y } as Point);

    };

    return (
        <div className={classes.container}>
            <canvas
                ref={canvas}
                className={classes.canvas}
                onMouseDown={handleCanvasClick}
                onMouseUp={handleCanvasClick}
                width={637}
                height={848}
            />
            <ImageUploader
                withIcon={true}
                buttonText="Choose images"
                onChange={onDrop}
                imgExtension={[".jpg", ".gif", ".png", ".gif"]}
                maxFileSize={5242880}
            />
        </div>
    );
};
