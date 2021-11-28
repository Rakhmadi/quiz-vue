<template>
        <div class="p-3 bg-white rounded-md h-full m-6" data-aos="fade">
                <button @click="$router.push({path:'/'})">
                <i class="text-2xl text-gray-600">
                    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
                    </svg>
                </i>
                </button>
                <div class="flex item-center justify-center mt-7">
                    <div>
                        <img class="w-32 h-32 rounded-full " :src="img"  alt="" srcset="">
                    </div>
                </div>
                <div class="flex item-center justify-center ">
                    <div class="w-3/4 flex item-center justify-center mt-2">
                        <p class="truncate text-2xl text-gray-600">{{name}}</p>
                    </div>
                </div>
                <div class="flex flex-col px-3">
                    <div class=" rounded-full h-20 w-20 flex justify-center" 
                         :class="{
                             'bg-green-100':ScoreComp >= 70,
                             'text-green-500':ScoreComp >= 70,
                             'bg-yellow-100':ScoreComp < 70 && ScoreComp >= 50,
                             'text-yellow-500':ScoreComp < 70 && ScoreComp >= 50,
                             'bg-red-100':ScoreComp < 50,
                             'text-red-500':ScoreComp < 50,
                             }" >
                        <font  class="text-2xl self-center">{{ScoreComp}}</font>
                    </div>
                    <div class="">
                        <font class="text-xl ml-2 text-gray-600">Your Score</font>
                    </div>
                </div>
                <div class="flex flex-col h-full p-3">
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
                                    <div v-if="item.correct" class="text-green-500">
                                        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                                        </svg>
                                    </div>
                                    <div v-if="!item.correct" class="text-red-500">
                                        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                                        </svg>
                                    </div>
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
        },
        ScoreComp(){
            return (this.score / 10) * 100;
        }
    },
    data(){
        return{
            lv:[],
            name:localStorage.getItem('name'),
            score:0,
            img:localStorage.getItem('img')
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