
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCKftP3afZgRkNsZeY8Ru5ZmxcL39lTkJY",
      authDomain: "social-website-fe91d.firebaseapp.com",
      projectId: "social-website-fe91d",
      storageBucket: "social-website-fe91d.appspot.com",
      messagingSenderId: "295615331920",
      appId: "1:295615331920:web:5b9e3788e25e99f58d5b55"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    user_name= localStorage.getItem("user_name");
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML; snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       row= "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names + <div></div> 
       document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();
