const formOpenBtn = document.querySelector("#form-open"),
  home = document.querySelector(".home"),
  formContainer = document.querySelector(".form_container"),
  formCloseBtn = document.querySelector(".form_close"),
  signupBtn = document.querySelector("#signup"),
  loginBtn = document.querySelector("#login"),
   btnsingn = document.querySelector(".btn2");
  pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
});
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
});
btnsingn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
});














// userDetails = {}

// function saveData(){
//     if (userDetails) {
//         localStorage.setItem("database",JSON.stringify(userDetails))
//     }
// }


// function getData(){
//     userDetails = JSON.parse(localStorage.getItem('database'))
// }



// function register(){
//     let uName =regUname.value;
//     let pswd = regPswd.value;
//     let pswd1 = regPswd1.value;

//     if (uName && pswd && pswd1 ) {
//         //verify username is in userDetails
//         if (uName in userDetails) {
//             //present
//             output.innerHTML = "USer already exist.. please log in "
//         } else {
//             //not present
//             userDetails[uName] = {username:uName,password:pswd,conformpassword:pswd1}
//             saveData()
//             alert("Register successfully")
//             //redirect to login page
//             // window.location ="index.html"
//         }
//     } else {
//         output.innerHTML = "please enter valid input"
//     }
// }


// function login(){
//     let username = loginUname.value
//     let pswd = loginPswd.value
//     getData();
//     if (username && pswd) {
//         if (username in userDetails) {
//             if (pswd == userDetails[username].password) {
//                 //store username in local storage
//                 localStorage.setItem('user',username)
//                 alert('login success')
//                 window.location = "index.html"
//             } else {
//                 output.innerHTML = "incorrect password"
//             }
//         } else {
//             output.innerHTML = "incorrect username"
//         }
//     } else {
//         output.innerHTML = "please enter valid input"       
//     }
// }



// username.innerHTML = localStorage.getItem('user')



// function logout(){
//     localStorage.removeItem('user')

//     window.location = 'index.html'
// }