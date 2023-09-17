function toggleClass(){
    let element = document.getElementById('navitems');
    element.classList.toggle('activate')
}
window.addEventListener("scroll", function() {
    if (window.pageYOffset >= 50) {
      document.querySelector("nav").classList.add("sticky");
    } else {
      document.querySelector("nav").classList.remove("sticky");
    }
  });

  const wrapper = document.querySelector('.wrapper');
const registerLink = document.querySelector('.register-link');
const loginLink = document.querySelector('.login-link');


registerLink.onclick = () =>{
    wrapper.classList.add('active');
}
loginLink.onclick = () =>{
    wrapper.classList.remove('active');
}

let username = document.getElementById('usernameinp');
let username_regex = `/^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/`;
let password = document.getElementById('passwordinp');
let password_regex = `^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$`;

function verify(){
  let users_1 = username.value;
  let users_2 = password.value;
  if(users_1.match(username_regex)){
    console.log('User Name'+ users_1);
    alert('valit username')
  }
  else{
    alert('not valid')
  }
  if(users_2.match(password_regex)){
    console.log('User Name : '+ users_2);
    alert('valit username');
  }
  else('not valid pass')

}