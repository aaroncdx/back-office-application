import { getStorage, ref, uploadString ,getDownloadURL} from "firebase/storage";


export const FireStorage = () => {
const storage = getStorage();
const storageRef = ref(storage);


const uploadImg = (fileName:string,base64Data:string) =>{
    const storageRef = ref(storage, fileName);
    try{
      uploadString(storageRef, base64Data, 'data_url').then((snapshot) => {
        console.log('Uploaded a base64 string!');
      });
    }
    catch(err){
      console.log('fireStorage - uploadImg error', err);
      
    }
}

return {
    uploadImg
}

}