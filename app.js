

function la(src){
    window.location=src;
}

('input').search(function(){
    // execute after filtering
});

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDY1z8QepuczOe54bwzNgGYB1L5CXje7ZA",
    authDomain: "student-learning-managment-app.firebaseapp.com",
    projectId: "student-learning-managment-app",
    storageBucket: "student-learning-managment-app.appspot.com",
    messagingSenderId: "321628964827",
    appId: "1:321628964827:web:a85789d9e1f7a88d2189fe"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

document.querySelector('#login').addEventListener('click',function(){

    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then((result) => {

        window.localStorage.setItem("name",result.additionalUserInfo.profile.name);
        window.localStorage.setItem("picture",result.additionalUserInfo.profile.picture);

        window.location.href='Dashboard.html';



    }).catch((error) => {
        console.log("failed");

    });

})



