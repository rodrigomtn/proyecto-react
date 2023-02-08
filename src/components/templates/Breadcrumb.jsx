import React from 'react';
import {useLocation} from 'react-router-dom';
import {Container} from '@mui/material';
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor =
      theme.palette.mode === 'light'
        ? theme.palette.grey[100]
        : theme.palette.grey[800];
    return {
      backgroundColor,
      height: theme.spacing(3),
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightRegular,
      '&:hover, &:focus': {
        backgroundColor: emphasize(backgroundColor, 0.06),
      },
      '&:active': {
        boxShadow: theme.shadows[1],
        backgroundColor: emphasize(backgroundColor, 0.12),
      },
    };
});

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

const Breadcrumb = () => {
    const location = useLocation()   
    let currenLink = ''

    const crumbs = location.pathname.split('/')      
        .filter(crumb => crumb !== '')
        .map( crumb => {
            currenLink = currenLink + "/" + crumb;
            return (
                <div className="crumb" key={crumb} underline='none'>
                    <StyledBreadcrumb component="a" href={currenLink} label={crumb}/>
                </div>
            )
        })
    return (
        <Container maxWidth='lg' sx={{maxWidht: 800, mt:12}}>
            <div role="presentation" onClick={handleClick}>
                <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />}>
                    <StyledBreadcrumb
                        component="a"
                        href="/"
                        label="Inicio"
                        icon={<HomeIcon fontSize="small" />}
                    />
                    {crumbs}                 
                </Breadcrumbs>
            </div>
        </Container>
    );
};

export default Breadcrumb;