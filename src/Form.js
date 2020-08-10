import React, { Component } from 'react'
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import {LanguageContext} from './contexts/LanguageContext'

import withStyles from "@material-ui/core/styles/withStyles";
import styles from './styles/FormStyles';

const words = {
    english: {
        email: "Email",
    },
    french:{
        email : "Adresse Electronique"
    },
    spanish: {
        email: "Correo Electronico"
    }
}
class Form extends Component {
    static contextType = LanguageContext
    render() {
        const {language} = this.context;
        const {classes} = this.props;
        const {email} = words[language]
        return (
            <main className={classes.main}>
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography variant='h5'>
                        Sign In
                    </Typography>
                    <Select value='English'>
                        <MenuItem value='English'>English</MenuItem>
                        <MenuItem value='French'>French</MenuItem>
                        <MenuItem value='Spanish'>Spanish</MenuItem>
                    </Select>
                    <form className={classes.form}>
                        <FormControl margin='normal' required fullWidth>
                            <InputLabel htmlFor='email'>{email}</InputLabel>
                            <Input id='email' name='email' autoFocus />
                        </FormControl>
                        <FormControl margin='normal' required fullWidth>
                            <InputLabel htmlFor='password'>Password</InputLabel>
                            <Input id='password' name='password' autoFocus />
                        </FormControl>
                        <FormControlLabel control={<Checkbox color='primary' />} label='Remember Me'/>
                        <Button 
                            variant='contained' 
                            type='submit' 
                            fullWidth 
                            color='primary' 
                            className={classes.submit}
                        >
                            Sign In
                        </Button>
                    </form>
                </Paper>
            </main>
        )
    }
}

export default withStyles(styles)(Form);
