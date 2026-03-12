import { Stack, Typography } from "@mui/material"

export const Login = () => {
    return (
        <Stack sx={{
            maxWidth: '1200px',
            width: '100%',
            margin: '0, auto',
            padding: '2rem'
        }}>
            <div className="modal-content">
                <Typography className="modal-title">Авторизация</Typography>
                <form className="modal-form" id="profileForm" noValidate>
                    <div className="form-group">
                        <label></label>
                        <input 
                            type='text'
                            id='login' 
                            value=''
                            className="form-input" 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label></label>
                        <input 
                            type='email' 
                            id='login-email' 
                            value=''
                            className="form-input" 
                        />
                    </div>
                    <div className="modal-buttons">
                        <button type="submit" className="modal-button">Войти</button>
                    </div>
                </form>
            </div>
        </Stack>
    )
}