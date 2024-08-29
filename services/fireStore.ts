import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc , getDocs, getDoc, doc, query, where,setDoc,deleteDoc,updateDoc, deleteField} from "firebase/firestore";



export const FireStore = () => {

    const config = useRuntimeConfig();

    const firebaseConfig = {
        apiKey: `${config.public.firebaseApiKey}`,
        authDomain: `${config.public.firebaseAuthDomain}`,
        projectId: `${config.public.firebaseProjectId}`,
        storageBucket: `${config.public.firebaseStorageBucket}`,
        messagingSenderId: `${config.public.firebaseMessagingSenderId}`,
        appId: `${config.public.firebaseAppId}`,
    };

    
    const app = initializeApp(firebaseConfig);

    const db = getFirestore(app);

    const add = async (collectionName:string, fieldData:object) => {
        try {
            const response = await addDoc(collection(db, collectionName), fieldData);
            return response;
        }
        catch (e) {
            console.error("Error adding document: ", e);
            return ;
        }
    }

    const query = async () =>{
        const companyRef = collection(db, "company");
        // const q = await getDoc(companyRef,where('employees',"==",'wKLDJ011oM0tQsuLBXmn'));
        // console.log('q',q);
    }


    const read = async (collection:string, document:string) => {
        const docRef = doc(db, collection, document);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          return docSnap.data();
        } else {
          console.log("No such document!");
          return 
        }

    }

    const update = async (collection:string, document:string, updateFields:object)=> {
        try{
            const docRef = doc(db,collection, document);
            let response = await updateDoc(docRef, updateFields);
            return response;
        }
        catch(err){
            return 
        }
    }

    const getUsers = async () => {
        const querySnapshot = await getDocs(collection(db, "users"));
        let array: object[] = [];
        querySnapshot.forEach((doc) => {
            array.push({
                id:doc.id,
                ...doc.data()
            });
        });
        
        return array;
    }

    const deleteDocument = async (collection:string, document:string) => {
        try{
            let response = await deleteDoc(doc(db,collection, document));
            return response;
        }
        catch(err){
            return 
        }       
    }

    const deleteFields = async (collection:string, document:string) => {
        try{
            const docRef = doc(db,collection, document);
            let response = await updateDoc(docRef, {
                capital: deleteField()
            });
            return response;
        }
        catch(err){

        }
    }

    return {
        add,
        read,
        update,
        getUsers,
        query,
        deleteDocument,
        deleteFields,
    }
    
}