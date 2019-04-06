document.addEventListener("DOMContentLoaded" , () => {
    const app = /*html*/ `
        <div class="container-fluid" id="body"></div>
    `;
    document.getElementById("app").innerHTML = app;
    bodyContent();
});

const bodyContent = () => {
    const body = /*html*/ `
        <div class = "row">
            <div class="col-3"  id="form-sidebar"></div>
            <div class="col-9 form-input" id="form-input">
            </div>
        </div>    
    `; 
    document.getElementById("body").innerHTML = body;
    formSidebar();
    formInput();
};

const formSidebar = () => {
    const sidebar = /*html*/ `
        <div class="brief-info"></div>
        <div id="left-info" class="accordion"></div>
    `;
    document.getElementById("form-sidebar").innerHTML = sidebar;
    leftInfo();
};
const leftInfo = () => {
    const leftInfo = /*html*/ `
        <nav class="nav flex-column bg-white text-dark shadow row">
            <div class="logo ">
                <img src="/resources/website/enjoycoffeelogo.png">
            </div>
            <div class="logo">
                <div class="row">
                    <i class="fas fa-coffee signal col-3"></i>
                    <p class="col-9 text">Coffee is a drink that helps people be alert and creative . An indispensable drink in life.</p>
                </div>
                <div class="row">
                    <i class="fas fa-compact-disc signal col-3"></i>
                    <p class="col-9 text">Music is a part of life. But it would be nice to listen to music while enjoying drinking water</p>
                </div>
                <div class="row">
                    <i class="fas fa-binoculars signal col-3"></i>
                    <p class="col-9 text">What's even better when drinking a cup of coffee and listening to music is a beautiful sight</p>
                </div>
            </div>
        </nav>
    `;
    document.getElementById("left-info").innerHTML = leftInfo;
}; 

const formInput = () => {
    const input = /*html*/ `
        <nav class="row">
            <a href="#login" class="btn col-6 mt-4 nav-link" role="button" aria-disabled="true" id="login-form-btn" >Login</a>
            <a href="#register" class="btn col-6 mt-4 nav-link" role="button" aria-disabled="true" id="register-form-btn" >Register</a>
        </nav>
        <div id="content" class="py-4"></div>  
    `;
    document.getElementById("form-input").innerHTML = input;

    document.getElementById("login-form-btn").onclick = () => {
        document.getElementById("form-input").style.display="block";
		document.getElementById("login-form-btn").classList.add("active");
		document.getElementById("register-form-btn").classList.remove("active");
		loginForm();
    };

    document.getElementById("register-form-btn").onclick = () => {
        document.getElementById("form-input").style.display="block";
		document.getElementById("register-form-btn").classList.add("active");
		document.getElementById("login-form-btn").classList.remove("active");
		registerForm();
    };
};
const registerForm = () => {
    const form = /*html*/`
        <div class="container">
            <form id="register-form">
                <div class="row">
                    <div class="form-group col-md-6">
                        <label for="firstname">First Name</label>
                        <input type="text" name="firstname" class="form-control" id="firstname" placeholder="Enter Your First Name" onkeyup="validateFirstName()">
                        <small id="firstname-help-text"></small>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="lastname ">Last Name</label>
                        <input type="text" name="lastname" class="form-control" id="lastname" placeholder="Enter Your Last Name" onkeyup="validateLastName()">
                        <small id="lastname-help-text"></small>
                    </div>
                    <div class="form-group col-md-12">
                        <label for="email">Email Address</label>
                        <input type="email" name="email" class="form-control" id="email" placeholder="Enter Your Email" onkeyup="validateEmail('user')">
                        <small id="email-help-text"></small>
                    </div>
                    <div class="form-group col-md-12">
                        <label for="phonenumber">Phone Number</label>
                        <input type="text" name="phonenumber" class="form-control" id="phonenumber" placeholder="Enter Your Phone Number" onkeyup="validatePhoneNumber()">
                        <small id="phonenumber-help-text"></small>
                    </div>
                    <div class="form-group col-md-12">
                        <label for="password">Password</label>
                        <input type="password" name="password" class="form-control" id="password" placeholder="Enter Your Password" onkeyup="validatePassword()">
                        <small id="password-help-text"></small>
                    </div>
                    <div class="note-register col-md-12">  
                        By clicking “Sign up for Enjoy Coffee”, you agree to our<a href="#" > terms of service </a> and <a href="#" >privacy statement.</a> We’ll occasionally send you account related emails.
                    </div>
                    <div class="create-account col-md-12 pt-3">
                        <button id="register-btn" class="btn btn-lg btn-block" type="submit">Sign Up</button>           
                    </div> 
                <div>
            </form>
        <div>    
    `;
    document.getElementById("content").innerHTML= form;
};

const loginForm = () => {
    const form = /*html*/`
        <div class="container">
            <form >
                <div class="form-group col-md-12">
                    <label for="email">Email Address</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter Your Email" >
                </div>
                <div class="form-group col-md-12">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="Enter Your Password">
                </div>
                <div class="custom-control custom-checkbox ml-3">
                    <input type="checkbox" class="custom-control-input" id="remember">
                    <label class="custom-control-label" for="remember">Remember Me</label>
                </div>
                <div class="create-account col-md-12 pt-2 py-3">
                    <button class="btn btn-lg btn-block" type="submit" onclick="validate(event)">Sign Up</button>           
                </div> 
            </form>
        </div>
    `;
    document.getElementById("content").innerHTML= form;
};



