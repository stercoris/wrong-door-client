import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { ImageRedactor } from './view/ImageRedactor';
import { CoordsArrayContext } from './CoordsArrayContext';
import { CodeViewer } from './view/CodeViewer';
import { DrawPreview } from './view/DrawPreview';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            background: '#616161',
            height: "100vh",
            width: "100vw",
            padding: "20px",
            boxSizing: "border-box",
            margin: 0,
        },
        paper: {
            padding: "2vh",
            display: 'flex',
            alignItems: 'center',
            overflow: "hidden",
            flexDirection: "column",
            justifyContent: 'center',
            color: theme.palette.text.secondary,
            height: "90vh",
        },

        halfPapper: {
            padding: "2vh",
            display: 'flex',
            alignItems: 'center',
            overflow: "hidden",
            flexDirection: "column",
            justifyContent: 'center',
            color: theme.palette.text.secondary,
            height: "40vh",
            marginTop: "2vh",
        },
    }),
);


export default function App() {
    const classes = useStyles();
    const [coords, setCoords] = React.useState([{ x: 0, y: 0 }]);

    return (
        <div className={classes.root}>
            <CoordsArrayContext.Provider value={{ coords, setCoords }} >
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <ImageRedactor />
                        </Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper className={classes.halfPapper}>
                            <CodeViewer />
                        </Paper>
                        <Paper className={classes.halfPapper}>
                            <DrawPreview />
                        </Paper>
                    </Grid>
                </Grid>
            </CoordsArrayContext.Provider>
        </div>
    );
}
