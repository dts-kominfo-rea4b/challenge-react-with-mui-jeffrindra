import { Button, TextField } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { useState } from 'react';
// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

const ContactForm = ({ handleClick }) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    const [newContact, setNewContact] = useState('');

    return (
        <div >
            <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                    <TextField label="Name*" variant="filled" value={newContact.name} onChange={(e) => setNewContact({
                        name: e.target.value,
                        phone: newContact.phone,
                        email: newContact.email,
                        photo: newContact.photo
                    }) }></TextField>
                </CardContent>
                <CardContent>
                    <TextField label="Phone*" variant="filled" value={newContact.phone} onChange={(e) => setNewContact({ name: newContact.name,
                    phone: e.target.value,
                    email: newContact.email,                       photo: newContact.photo
                    })}></TextField>
                </CardContent>
                <CardContent>
                    <TextField label="Email*" variant="filled" value={newContact.email} onChange={(e) => setNewContact({ name: newContact.name,
                    phone: newContact.phone,
                    email: e.target.value,                       photo: newContact.photo})}></TextField>
                </CardContent>
                <CardContent>
                    <TextField label="Photo URL*" variant="filled" value={newContact.photo} onChange={(e) => setNewContact({ 
                        name: newContact.name,
                        phone: newContact.phone,
                        email: newContact.email,                       photo: e.target.value})}></TextField>
                </CardContent>
                <CardActions>
                    <Button sx={{ borderStyle: 'none' }} onClick={() => {
                        handleClick(newContact);
                        setNewContact({
                            name: '',
                            phone: '',
                            email: '',
                            photo: ''});
                        
                    }}>ADD NEW</Button>
                </CardActions>
            </Card>
        </div>
    );
}

export default ContactForm;