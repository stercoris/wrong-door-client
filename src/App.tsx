import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { ImageRedactor } from './view/ImageRedactor';
import { CoordsArrayContext } from './CoordsArrayContext';
import { CodeViewer } from './view/CodeViewer';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            background: '#616161',
            height: window.innerHeight + "px",
            width: window.screen.width + "px",
            padding: "20px",
            boxSizing: "border-box",
            margin: 0,
        },
        paper: {
            padding: theme.spacing(2),
            display: 'flex',
            alignItems: 'center',
            flexDirection: "column",
            justifyContent: 'center',
            color: theme.palette.text.secondary,
            height: (window.innerHeight - 80) + "px",
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
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper}>
                            <ImageRedactor />
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper}>
                            <CodeViewer />
                        </Paper>
                    </Grid>
                </Grid>
            </CoordsArrayContext.Provider>
        </div>
    );
}
