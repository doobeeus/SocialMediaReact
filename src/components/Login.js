import React, {useState} from "react";
import { useNavigate, Link} from "react-router-dom";

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    async function handleLogin() {
        
        const url = 'http://localhost:5089/api/Registration/Login'
        const data = {
            "email": email,
            "password": password
        }
        console.log(JSON.stringify(data))
        try {
        const res = await fetch(url, {
            method: 'post',
            cache: 'no-cache',
            headers: {'Content-Type': 'application/json',
            'Accept': 'application/json', 
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization'},
            body: JSON.stringify(data)
        });
        const response = await res.json();
        console.log(response);
        if (response.statusCode == 200) {
            localStorage.setItem("ID", response.registration.id);
            localStorage.setItem("email", email);
            localStorage.setItem("name", response.registration.name);
            navigate("/userDashboard");
        }
    } catch (e) {
        console.log(e);
    }
    }
    return(
      <section class="vh-100" style={{backgroundColor: '#eee'}}>
      <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-lg-12 col-xl-11">
          <div class="card text-black" style={{borderRadius: '25px'}}>
              <div class="card-body p-md-5">
              <div class="row justify-content-center">
                  <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                  <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Login</p>

                  <form class="mx-1 mx-md-4">

                      <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                          <input type="email" id="form3Example3c" class="form-control" 
                          onChange = {(e) => setEmail(e.target.value)} 
                          value = {email}/>
                          <label class="form-label" for="form3Example3c">Email</label>
                      </div>
                      </div>

                      <div class="d-flex flex-row align-items-center mb-4">
                      <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                      <div class="form-outline flex-fill mb-0">
                          <input type="password" id="form3Example4c" class="form-control" 
                          onChange = {(e) => setPassword(e.target.value)}
                          value = {password}
                          />
                          <label class="form-label" for="form3Example4c">Password</label>
                      </div>
                      </div>

                      <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button type="button" class="btn btn-primary btn-lg"
                      onClick = {handleLogin} >Login</button>
                      </div>
                      <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <Link to="/Registration">
                      <button type="button" class="btn btn-primary btn-lg">
                        Sign Up Here</button>
                        </Link>
                      </div>

                  </form>

                  </div>
                  <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      class="img-fluid" alt="Sample image"/>

                  </div>
              </div>
              </div>
          </div>
          </div>
      </div>
      </div>
      </section>
  );
}

export default Login;