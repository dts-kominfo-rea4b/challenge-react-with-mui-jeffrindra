// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data, index }) => {
    // Contact berisi foto, nama, telepon, dan email
    return (
    <div>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem key={index} disablePadding>
                <ListItemAvatar>
                <Avatar>
                    <img src={data.photo} alt="new"/>
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary={data.name} secondary={
                <div>
                    <div><span>{data.phone}</span></div>
                    <div><span>{data.email}</span></div>
                </div>
                } />
            </ListItem>

        </List>
    </div>
    );
};

export default Contact;
