import { initializeApp } from "firebase/app";
import { getFirestore,collection, addDoc , getDocs, getDoc, doc, setDoc,deleteDoc,updateDoc, deleteField} from "firebase/firestore";



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


    const Add =async () => {
        try {
            const docRef = await addDoc(collection(db, "users"), {
              first: "Ada",
              last: "Lovelace",
              born: 1815
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
        console.error("Error adding document: ", e);
        }
    }

    const Read = async () => {
        try{

            const docRef = doc(db, "users");
            const docSnap = await getDoc(docRef);
    
            if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
            }
            return docSnap.data();
        }
        catch(error){
            return error;
        }

    }

    const DeleteDoc = async () => {
        await deleteDoc(doc(db, "cities", "DC"));
    }

    const deleteFields = async () => {
        const cityRef = doc(db, 'cities', 'BJ');

        // Remove the 'capital' field from the document
        await updateDoc(cityRef, {
            capital: deleteField()
        });
    }


    const test = async () => {
        const citiesRef = collection(db, "cities");

await setDoc(doc(citiesRef, "SF"), {
    name: "San Francisco", state: "CA", country: "USA",
    capital: false, population: 860000,
    regions: ["west_coast", "norcal"] });
await setDoc(doc(citiesRef, "LA"), {
    name: "Los Angeles", state: "CA", country: "USA",
    capital: false, population: 3900000,
    regions: ["west_coast", "socal"] });
await setDoc(doc(citiesRef, "DC"), {
    name: "Washington, D.C.", state: null, country: "USA",
    capital: true, population: 680000,
    regions: ["east_coast"] });
await setDoc(doc(citiesRef, "TOK"), {
    name: "Tokyo", state: null, country: "Japan",
    capital: true, population: 9000000,
    regions: ["kanto", "honshu"] });
await setDoc(doc(citiesRef, "BJ"), {
    name: "Beijing", state: null, country: "China",
    capital: true, population: 21500000,
    regions: ["jingjinji", "hebei"] });
    }

    return {
        Add,
        Read,
        test
    }
    
}