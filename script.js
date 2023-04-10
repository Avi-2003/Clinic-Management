let menu = document.querySelector('#menu-btn');
let navabr = document.querySelector('.navbar');

menu.onclick = ()=>{
    menu.classList.toggle('fa-times');
    navabr.classList.toggle('active');
}
window.onscroll = ()=>{
    menu.classList.remove('fa-times');
    navabr.classList.remove('active');
}

const firebaseConfig = {
    apiKey: "AIzaSyA2sCYvdLUWzeyRLfJ-r0DiwNzrx9cIZzY",
    authDomain: "infinitycare-ed665.firebaseapp.com",
    databaseURL: "https://infinitycare-ed665-default-rtdb.firebaseio.com",
    projectId: "infinitycare-ed665",
    storageBucket: "infinitycare-ed665.appspot.com",
    messagingSenderId: "835556139113",
    appId: "1:835556139113:web:89b9097f9c3cbd527d82f8"
  };

  //initialise firebase
  firebase.initializeApp(firebaseConfig);

  //refrence your database
  var InfinityCareDB = firebase.database().ref('InfinityCare');

  document.getElementById('InfinityCare').addEventListener('submit', bookNow);

  function bookNow(e){
    e.preventDefault();
    var name = getElementByVal("name");
    var number = getElementByVal("number");
    var email = getElementByVal("email");
    var date = getElementByVal("date");

    saveDetail(name, number, email, date);

    //enable alert

    document.querySelector('.alert').style.display = "block";

    //remove alert
    setTimeout(() => {
    document.querySelector('.alert').style.display = "none";
        
    }, 3000);
  }
  const saveDetail = (name, number, email, date) =>{
    var newAppointment = InfinityCareDB.push();
    
    newAppointment.set({
        name: name,
        number: number,
        email: email,
        date: date
    })
  }


  const getElementByVal =(id)=>{
    return document.getElementById(id).value
  }