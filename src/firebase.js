import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword, signOut} from "firebase/auth";
import { addDoc,
     collection,
      getFirestore } from "firebase/firestore/lite";
import { toast } from "react-toastify";


const firebaseConfig = {
  apiKey: "AIzaSyCL2Z8H-tJYee2JSIDXMMURbj85yBBhi2o",
  authDomain: "netflix-clone-47f2b.firebaseapp.com",
  projectId: "netflix-clone-47f2b",
  storageBucket: "netflix-clone-47f2b.firebasestorage.app",
  messagingSenderId: "808441206203",
  appId: "1:808441206203:web:c525c24970b50108bde09e"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db=getFirestore(app)

const signup=async(name,email,password)=>
{
    try{
       const res= await createUserWithEmailAndPassword(auth, email, password);
       const user=res.user
        await addDoc(collection(db,"user"),{
            uid:user.uid,
            name,
            authProvider:"local",
            email,
        })
    }
    
    catch(error)
    {
        console.log(error)
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
    
}

const login=async(email,password)=>
{
    try
    {
       await signInWithEmailAndPassword(auth,email,password);
    }
    catch(error)
    {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}

const logout=()=>
{
    signOut(auth)
}

export {auth,db,login,signup,logout}