<template>
        <div class="p-3 bg-white rounded-md box-content " data-aos="fade">
                <div class="flex item-center justify-center mt-7">
                    <div>
                        <img class="w-32 h-32 rounded-full " src="https://avatarfiles.alphacoders.com/110/thumb-1920-110248.png"  alt="" srcset="">
                    </div>
                </div>
                <div class="flex item-center justify-center ">
                    <div class="w-3/4 flex item-center justify-center mt-2">
                        <p class="truncate text-2xl text-gray-600">{{name}}</p>
                    </div>
                </div>
                <div class="flex flex-col px-3">
                    <div class=" rounded-full h-20 w-20 flex justify-center bg-green-100 text-green-500" >
                        <font  class="text-2xl self-center">{{(score / 10) * 100}}</font>
                    </div>
                    <div class="">
                        <font class="text-xl ml-2 text-gray-600">Your Score</font>
                    </div>
                </div>
                <div class="flex flex-col p-3">
                        <div v-for="(item,index) in lv" :key="index" class="p-2 mt-2 bg-white w-full shadow-md rounded-md border-2 border-purple-500 " data-aos="fade">
                            <p class="m-2">{{item.soal}}</p>
                            <div class="flex flex-row justify-between border-2 p-2 rounded-md shadow-md" 
                            :class="{'border-green-500':item.correct,'bg-green-100':item.correct,
                            'border-red-500':!item.correct,'bg-red-100':!item.correct}">
                                <div class="truncate">
                                    <p class="p-0 m-0">{{item.jawaban}}</p>
                                </div>
                                <div class="">
                                    <i class="mdi" :class="{'mdi-check':item.correct,'mdi-close':!item.correct}"></i>
                                </div>
                            </div>
                        </div>
                </div>
            <div>
                <div class="flex flex-col">
                    <font class="text-lg text-gray-600 m-0 p-0 "></font>
                </div>
            </div>
        </div>
</template>
<script>
import { addDoc, collection , getFirestore, getDocs } from "firebase/firestore";
import listSoal from '../dataSoal'
import app from '../firebase'
export default {
    async mounted(){
        let storageJawaban = JSON.parse(localStorage.getItem('dataJawabanSv'))
        this.lv = []
            for(let x = 0; x < listSoal.length ; x++){
              this.lv.push({
                  soal:listSoal[x].soal,
                  jawaban:storageJawaban[x].text,
                  correct:storageJawaban[x].correct
              })
            }
            for (let x = 0; x < storageJawaban.length; x++) {
                if (storageJawaban[x].correct) {
                    this.score++
                }
            }
    },computed:{
        iconC(i){
            return (i?'mdi mdi-check':'mdi mdi-close')
        }
    },
    data(){
        return{
            lv:[],
            name:localStorage.getItem('name'),
            score:0
        }
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