<template>
    <div>
        <div class="p-3 bg-white w-full rounded-md" data-aos="fade">
                <div class="flex item-center justify-center ">
                    <div>
                        <img class="w-32 h-32 rounded-full " src="https://avatarfiles.alphacoders.com/110/thumb-1920-110248.png"  alt="" srcset="">
                    </div>
                </div>
                <div class="flex item-center justify-center ">
                    <div class="w-3/4 flex item-center justify-center m-2">
                        <font class="truncate text-2xl text-gray-600">Rakhamdi walker sdf</font>
                    </div>
                </div>
                <div class="flex flex-col mt-1 p-3">
                    <div class=" rounded-full h-16 w-16 flex justify-center bg-green-100 text-green-500" >
                        <font  class="text-2xl self-center">50</font>
                    </div>
                    <div class="">
                        <font class="text-xl ml-2 text-gray-600">Your Score</font>
                    </div>
                </div>
            <div>
                <div class="flex flex-col">
                    <font class="text-lg text-gray-600 m-0 p-0 "></font>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { addDoc, collection , getFirestore, getDocs } from "firebase/firestore";

import app from '../firebase'
export default {
    async mounted(){
        
    }
}
</script>
<!-- app
const db = getFirestore();
const querySnapshot = await getDocs(collection(db, "mII49Hggpkp2aSgiVZ8u"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${JSON.parse(doc.data())}`);
}); -->
 <!-- try {
  const docRef = await addDoc(collection(db, "mII49Hggpkp2aSgiVZ8u"), {
      name:'asdf',
      score:77
  });

  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
} -->