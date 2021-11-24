<template>
    <div class="h-screen p-6">
                <div class="p-3 bg-white w-full rounded-md" data-aos="fade">
                <div class="flex item-center justify-between">
                    <div>
                        <img class="w-14 h-14 rounded-full " :src="randImage" alt="" srcset="">
                    </div>
                    <div class="self-center">
                         <div class=" rounded-full h-14 w-14 flex justify-center "   :class="{
                             'text-green-500':countDown > 10,
                             'bg-green-100':countDown > 10 ,
                             'text-yellow-500':countDown > 5 && countDown <= 10,
                             'bg-yellow-100':countDown > 5 && countDown <= 10,
                             'text-red-500':countDown <= 5,
                             'bg-red-100':countDown <= 5 ,
                             }" >
                             <font  class="text-xl self-center">{{countDown}}s</font>
                         </div>
                    </div>
                </div>
            <div>
                <div class="flex flex-col">
                    <font class="text-lg text-gray-600 m-0 p-0 ">{{name}}</font>
                </div>
            </div>
            <div>
                  <font class="rounded-full bg-purple-200 py-1 px-2 text-purple-500 w-auto text-xs">{{this.page}} Dari {{this.listSoal.length}} Soal</font>
                  <div class="overflow-hidden h-2 mt-2 text-xs flex rounded bg-purple-200">
                    <div :style="{'width':`${percent}%`}" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"></div>
                  </div>
            </div>
        </div>
        <div class="p-3 bg-white w-full rounded-md mt-2" data-aos="fade">
            <div data-aos="fade">
                 <p class="text-xl text-gray-600 mb-2 mt-2 text-center" data-aos="fade">{{this.soalSinggle.soal}}</p>
                 <div class="flex flex-col p-2">
                     <div :class="{'border-purple-600':this.indexJawaban === index ,'text-purple-600':this.indexJawaban === index}" 
                        @click="selectOptions(index, [this.soalSinggle.jawaban[index]])" 
                        v-for="(item,index) in this.soalSinggle.jawaban" 
                        :key="index"  
                        class="rounded-full w-full my-1 bg-purple-200 transition py-1 px-2 border-2 border-purple-300 text-purple-400 cursor-pointer" >
                         <font>{{item.text}}</font>
                     </div>
                 </div>
            </div>
 
            <div class="flex p-2 justify-end" v-show="this.indexJawaban != '' || this.indexJawaban === 0">
                <button @click="goNext(),goPercent()" class="rounded-full bg-purple-300 py-1 px-2 border-2 border-purple-800 text-purple-800"><i class=" mdi mdi-arrow-right"></i> Next</button>
            </div>

        </div>
    </div>
</template>
<script>
import avatarArr from '../avatarArr.js'
import listSoal from '../dataSoal.js';

import { addDoc, collection , getFirestore, getDocs ,Timestamp} from "firebase/firestore";
export default {
    created(){
    this.xc()
        if (localStorage.getItem('isDone') === 'true') {
            this.$router.push({path:'/'})
        }
    },
    mounted() {
 
        this.countDownTimer()
        clearInterval(this.interval);
        this.countDownTimer()


        if (!localStorage.getItem('page')){
             localStorage.setItem('page',1)
             this.page = 1
        }
        this.goPercent() 
        var countdownNum = localStorage.getItem('countdownNum');
        if(!countdownNum){
            localStorage.setItem('countdownNum',this.countDown)
        }else{
            this.countDown = localStorage.getItem('countdownNum')
        }
        this.soalSinggle = this.listSoal[localStorage.getItem('page')-1]

    },
    computed:{
        randImage(){
            return localStorage.getItem('img')
        }
    },
    data() {
        return {
            page:localStorage.getItem('page'),
            countDown : 15,
            alphabets:["a","b","c","d","e"],
            indexJawaban:'',
            jawabanSoal:[{"text":"tidak di jawab","correct":false}],
            soalSinggle : [],
            percent : 0,
            name:localStorage.getItem('name'),
            listSoal: listSoal,
            score:0
        }
    },
    methods: {
            goPercent(){

                let kali =  (localStorage.getItem('page')) * 100
                this.percent = (kali) / this.listSoal.length
            },
            countDownTimer() {
                this.interval = setInterval(() => {
                    if (this.countDown > 0) {
                        this.countDown = this.countDown - 1;
                        localStorage.setItem('countdownNum',this.countDown)
                    } else {
                        clearInterval(this.interval);
                        this.goNext()
                        this.goPercent()
                    }
                }, 1000);
            },
            selectOptions(index,jawaban){
                this.indexJawaban = index
                this.jawabanSoal = jawaban 
                console.log(this.indexJawaban);
            },
            async svData(){
                        const db = getFirestore();
                        try {
                            const docRef = await addDoc(collection(db, "Lboard"), {
                                name:this.name,
                                score:(this.score / 10) * 100,
                                image:localStorage.getItem('img'),
                                timestamp:Timestamp.now()
                            });
                                 console.log("Document written with ID: ", docRef.id);
                        } catch (e) {
                                 console.error("Error adding document: ", e);
                        }
            },
            goNext(){
                
                if(localStorage.getItem('page') >= this.listSoal.length){
                        localStorage.removeItem('countdownNum');
                        localStorage.removeItem('page');
                        this.countDown = 15
                        this.saverLocalstorage()
                        this.jawabanSoal = []
                        this.indexJawaban = ''
                        this.page = localStorage.getItem('page');
                        localStorage.setItem('dataJawabanSv',localStorage.getItem('dataSoal'))
                        clearInterval(this.interval);
                        localStorage.removeItem('dataSoal');
                        localStorage.setItem('isDone',true)
                        this.$router.push({path:'/Score'});
                        ////////////////
                        let dXX = JSON.parse(localStorage.getItem('dataJawabanSv'));
                        for(let x = 0 ; x < dXX.length ;x++){
                            if(dXX[x].correct){
                                this.score++
                            }
                        }
                        console.log(this.score);
                        this.svData();

                }else{
                        localStorage.setItem('page',Number(localStorage.getItem('page'))+1)
                        clearInterval(this.interval);
                        this.soalSinggle = this.listSoal[localStorage.getItem('page')-1]
                        this.countDown = 15
                        this.countDownTimer()
                        this.saverLocalstorage()
                        this.indexJawaban = ''
                        this.page = localStorage.getItem('page');

                }
            },saverLocalstorage(){
                let getDataSoal = localStorage.getItem('dataSoal');

                if(getDataSoal === null){
                    localStorage.setItem('dataSoal',JSON.stringify([...this.jawabanSoal]))
                  }else{
                    let xN = JSON.parse(getDataSoal);
                    localStorage.setItem('dataSoal',JSON.stringify([...xN,...this.jawabanSoal]));
                  }
                this.jawabanSoal = [{"text":"tidak di jawab","correct":false}]
            },xc(){
                let x = avatarArr[Math.floor(Math.random() * avatarArr.length)];
                localStorage.setItem('img',x);
            }
    },
}
</script>