import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GoogleLogin from 'react-google-login';
import { loginWithGoogle } from '../../redux/login/login-action';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useHistory } from 'react-router-dom';
import { googleClientId } from '../../config';
let tokenId = '';
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const Login = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [state, setOpen] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'right',
  });
  const { vertical, horizontal, open } = state;
  const responseSuccessGoogle = (response) => {
    tokenId = response.tokenObj.id_token;
    dispatch(loginWithGoogle(tokenId));
  };

  const responseFailureGoogle = () => {
    setOpen({ open: true, vertical: 'top', horizontal: 'right' });
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  const login = useSelector((state) => state.loginReducer);
  if (login.login === true) {
    history.push('/menu-items');
  }

  return (
    <div className="background show-spinner no-footer">
      <div className="fixed-background"></div>
      <div className="container">
        <div className="row h-100 google-card">
          <div className="col-12 col-md-10 mx-auto my-auto">
            <div className="card auth-card">
              <div className="position-relative image-side">
                <p className=" text-dark h2">Food APP</p>
                <div className="dark mb-0">Please sign in with google.</div>
                <div className="login-btn">
                  <GoogleLogin
                    clientId={googleClientId}
                    buttonText="Sign in With Google"
                    onSuccess={responseSuccessGoogle}
                    onFailure={responseFailureGoogle}
                    cookiePolicy={'single_host_origin'}
                  />
                </div>
              </div>
              <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                onClose={handleClose}
                autoHideDuration={3000}
                key={vertical + horizontal}>
                <Alert severity="error">Login failed. Try again !!</Alert>
              </Snackbar>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
