import LoginForm from "components/LoginForm/LoginForm";
// import { Redirect } from 'react-router-dom';
// import { useSelector } from 'react-redux';

const Login = () => {

  // const userState = useSelector((state) => state.users);

  return (
    <>
      <div className="backgroundLogin">
        <div className="help-recize-background">
          <div class="container-fluid main-content-login">
            <div class="row">
              <div class="col-sm">
                <div className="container subContent-login">
                  <div class="row">
                    <div class="col-sm">
                      <div className="box-dark-login">
                      <LoginForm />
                      {/* { userState.login !== "" ? ( <Redirect to={{ pathname: '/profile' }} /> ) : ( <LoginForm /> )  } */}
                      {/* { userState.login == "" ? ( <LoginForm /> ) : ( <Redirect to={{ pathname: '/profile' }} /> )  } */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default Login;