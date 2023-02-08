import React from 'react';
import {
    Typography,
    Button,
    Link,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@mui/material/';
import ApertPolitica from './AlertPolitica';

const Ventana = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>          
            <Typography variant='div'>
                Acepto los <Link variant="outlined" onClick={handleClickOpen}> Terminos y condiciones</Link>
            </Typography>
            
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                {"¿Aceptas los terminos y condiciones?"}
                </DialogTitle>
                <DialogContent dividers>
                    <DialogContentText id="alert-dialog-description" component={'div'}>
                        <ApertPolitica/>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color="error" onClick={handleClose}>Rechazar</Button>
                    <Button onClick={handleClose} autoFocus>
                        Aceptar
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Ventana;