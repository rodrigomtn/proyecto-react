import React, {useState, Fragment} from 'react'
import { Drawer, Divider, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { Home, Room, Bed, Info, PersonAddAlt ,Login } from '@mui/icons-material';

import { NavLink as RouterLink } from 'react-router-dom';

const DrawerComp = () => {
    const [openDrawer, setOpenDrawer] = useState(false)
  return (
    <Fragment>
        <Drawer open={openDrawer} 
        onClose={()=>setOpenDrawer(false)}>
            <List>
                <ListItemButton onClick={()=> setOpenDrawer(false)}
                    component={RouterLink}
                    to='/'>
                    <ListItemIcon><Home/></ListItemIcon>
                    <ListItemText>INICIO</ListItemText>
                </ListItemButton>
                <Divider/>
                <ListItemButton onClick={()=> setOpenDrawer(false)}
                    component={RouterLink}
                    to='cuartos'>
                    <ListItemIcon><Bed/></ListItemIcon>
                    <ListItemText>CUARTOS</ListItemText>
                </ListItemButton>
                <ListItemButton onClick={()=> setOpenDrawer(false)} 
                    component={RouterLink}
                    to='zonas'>
                    <ListItemIcon><Room/></ListItemIcon>
                    <ListItemText>ZONAS</ListItemText>
                </ListItemButton>
                <ListItemButton onClick={()=> setOpenDrawer(false)} 
                    component={RouterLink}
                    to='acercade'>
                    <ListItemIcon><Info/></ListItemIcon>
                    <ListItemText>ACERCA DE</ListItemText>
                </ListItemButton>
                <ListItemButton onClick={()=> setOpenDrawer(false)} 
                    component={RouterLink}
                    to='registrarme'>
                    <ListItemIcon><PersonAddAlt/></ListItemIcon>
                    <ListItemText>REGISTRARME</ListItemText>
                </ListItemButton>
                <ListItemButton onClick={()=> setOpenDrawer(false)} 
                    component={RouterLink}
                    to='iniciarsesion'>
                    <ListItemIcon><Login/></ListItemIcon>
                    <ListItemText>INICIAR SESION</ListItemText>
                </ListItemButton>
                <Divider/>
            </List>
        </Drawer>
        <IconButton sx={{color:'white', marginLeft: 'auto'}} onClick={()=> setOpenDrawer(!openDrawer)}>
            <MenuIcon/>
        </IconButton>
    </Fragment>
  )
}
export default DrawerComp