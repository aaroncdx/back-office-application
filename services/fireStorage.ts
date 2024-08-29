import { getStorage, ref, uploadString ,getDownloadURL} from "firebase/storage";


export const FireStorage = () => {
const storage = getStorage();
const storageRef = ref(storage);


const uploadImg = (base64Data:string) =>{
    // const storageRef = ref(storage, 'some-child');
    // const message2 = '5b6p5Y+344GX44G+44GX44Gf77yB44GK44KB44Gn44Go44GG77yB';
    uploadString(storageRef, base64Data, 'base64').then((snapshot) => {
      console.log('Uploaded a base64 string!');
    });
}

return {
    uploadImg
}

}