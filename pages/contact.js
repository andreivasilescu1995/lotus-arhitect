import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Image from 'next/future/image';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import styles from '../styles/Contact.module.css';

export default function contact() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();

    const sendEmail = () => {
        console.log(name, email, message);
    }

    return (
        <div className={styles.contactContainer}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <div className={styles.addressContainer}>
                        <Image
                            src="/address.png"
                            alt="Lotus Arhitect address"
                            objectFit="cover"
                            fill
                        />
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Grid item xs={12}>
                        <TextField value={name} onChange={e => setName(e.target.value)} fullWidth className={styles.input} label="Name" variant="filled" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField value={email} onChange={e => setEmail(e.target.value)} fullWidth className={styles.input} label="Email" variant="filled" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextareaAutosize
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            className={styles.textarea}
                            maxRows={4}
                            aria-label="message-box"
                            placeholder="Message"
                            style={{ width: "100%", height: 220, marginBottom: 5, resize: 'none' }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            onClick={sendEmail}
                            fullWidth
                            variant="outlined">Submit</Button>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
