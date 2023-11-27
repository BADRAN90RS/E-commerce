
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    // apiKey: "AIzaSyBn8tdAPMRUf9vUF8UDbGNdwDzbSIARPbQ",
    // authDomain: "bader-4624f.firebaseapp.com",
    // databaseURL:"https://bader-4624f-default-rtdb.europe-west1.firebasedatabase.app",
    // projectId: "bader-4624f",
    // storageBucket: "bader-4624f.appspot.com",
    // messagingSenderId: "928271127739",
    // appId: "1:928271127739:web:f8de92984319b9ab6d459e"
    apiKey: "AIzaSyDieyK7G_aME-Un9qZL7K8L7-U4gGcfnAw",
  authDomain: "art-e-commerce-c0096.firebaseapp.com",
  databaseURL: "https://art-e-commerce-c0096-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "art-e-commerce-c0096",
  storageBucket: "art-e-commerce-c0096.appspot.com",
  messagingSenderId: "116215480901",
  appId: "1:116215480901:web:e5a52fbeb0fd60b871192c"
  };
  

 const app = initializeApp(firebaseConfig);

 const auth = getAuth(app);

 export default auth;
