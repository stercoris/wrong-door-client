import { createStyles, makeStyles, Theme } from "@material-ui/core";
import React, { useEffect, useRef, useState } from "react";
import ImageUploader from "react-images-upload";
import { Point, useCoords } from "../CoordsArrayContext";

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

interface ImageRedactorProps {}

export const ImageRedactor: React.FC<ImageRedactorProps> = () => {
  const classes = useStyles();
  const { coords, setCoords } = useCoords();

  const [myimg, changeImage] = useState(new Image());
  const canvas = useRef<HTMLCanvasElement>(null);

  console.log("RERENDER");

  function onDrop(files: File[], pictures: string[]) {
    const new_image = new Image();
    new_image.src = pictures[pictures.length - 1];
    console.log(pictures.length);
    changeImage(new_image);
  }

  useEffect(() => {
    if (myimg) {
      canvas!.current!.getContext("2d")!.drawImage(myimg, 0, 0, 800, 700);
    }

    /* canvas!.current!.addEventListener("mousedown", handleCanvasClick, false); */
    /* return () => { */
    /*   canvas!.current!.removeEventListener("mousedown", handleCanvasClick); */
    /* }; */
  }, [myimg]);

  const handleCanvasClick = (e: any) => {
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
    console.log(x);
    console.log(y);
    const newCoords = [
      ...coords,
      {
        x: x,
        y: y,
      },
    ];
    console.log(coords);
    setCoords(newCoords);
  };

  return (
    <div className={classes.container}>
      <canvas
        ref={canvas}
        className={classes.canvas}
        onMouseDown={handleCanvasClick}
        width={800}
        height={700}
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
