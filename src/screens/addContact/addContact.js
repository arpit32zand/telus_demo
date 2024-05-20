import React, { useState } from 'react';
import styles from './addContact.module.css'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

import { IoIosArrowRoundBack } from "react-icons/io";

const AddContact = () => {

    const [method, setMethod] = useState('sms')
    const [phNo, setPhNo] = useState({ value: '', error: false })

    const handleContinue = () => {
        if (validate()) {
            console.log({
                "phone-no": phNo.value,
                "method": method
            })
        }
    }

    const validate = () => {
        const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;

        const isPhNoValid = phoneRegex.test(phNo.value);

        setPhNo(prevState => ({ ...prevState, error: !isPhNoValid }));

        return isPhNoValid;
    }

    const handleMethod = e => {
        setMethod(e.target.value)
    }

    return (
        <Box className={styles.layoutContainer} >
            <Box className={styles.header}>
                <IoIosArrowRoundBack style={{ "scale": "1.4" }} />
                <Typography className={styles.backText}>
                    Back to Verify your profile
                </Typography>
            </Box>
            <Box className={styles.mainContainer}>
                <Box className={styles.mainHeader}>
                    <Box className={styles.mainHeading}>
                        Add your contact phone number
                    </Box>
                    <Box className={styles.subHead}>
                        We'll conatct you by text message or phone call about account updates for your home products and services, fro verification when calling in and for exclusive offers or surveys.
                    </Box>
                </Box>
                <Box className={styles.contactDetailContainer}>
                    <Typography className={styles.queryText}>
                        Enter your contact phone number
                    </Typography>
                    <Typography className={styles.subQueryText}>
                        Mobile phone number prefered
                    </Typography>
                    <TextField
                        id="outlined-required"
                        placeholder="Phone number"
                        onChange={(e) => setPhNo({ value: e.target.value.trim(), error: false })}
                        error={phNo.error}
                        helperText={phNo.error ? 'Please enter a valid phone number (e.g., 423-822-7896)' : ''}
                    />
                </Box>
                <Box className={styles.methodDetailContainer}>
                    <Typography className={styles.queryText}>
                        We'll send you a code to confirm this phone number. Where should we send it?
                    </Typography>
                    <FormControl component="fieldset">
                        <RadioGroup
                            aria-label="contactMethod"
                            name="contactMethod"
                            value={method}
                            onChange={handleMethod}
                        >
                            <FormControlLabel
                                value="sms"
                                control={<Radio size='small' />}
                                className={styles.subQueryText}
                                label="Text Message"
                            />
                            <FormControlLabel
                                value="phone"
                                control={<Radio size='small' />}
                                className={styles.subQueryText}
                                label="Phone Call"
                            />
                        </RadioGroup>
                    </FormControl>
                    <Button
                        className={styles.contButton}
                        onClick={handleContinue}
                        variant="contained"
                    >
                        Continue
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default AddContact;