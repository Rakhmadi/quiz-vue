<template>
    <div>
        <div class="p-3 bg-white w-full rounded-md" data-aos="fade">
                <div class="flex item-center justify-between">
                    <div>
                        <img class="w-14 h-14 rounded-full " src="https://avatarfiles.alphacoders.com/457/45744.png" alt="" srcset="">
                    </div>
                    <div class="self-center">
                         <div class="rounded-full bg-green-100 h-14 w-14 flex justify-center">
                             <font class="text-xl text-green-500 self-center">{{countDown}}s</font>
                         </div>
                    </div>
                </div>
            <div>
                <div class="flex flex-col">
                    <font class="text-lg text-gray-600 m-0 p-0 ">Rakhmadiwalker</font>
                </div>
            </div>
            <div>
                  <font class="rounded-full bg-purple-200 py-1 px-2 text-purple-500 w-auto text-xs">{{percent}}% complete</font>
                  <div class="overflow-hidden h-2 mt-2 text-xs flex rounded bg-purple-200">
                    <div :style="{'width':`${percent}%`}" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"></div>
                  </div>
            </div>
        </div>
        <div class="p-3 bg-white w-full rounded-md mt-2">
            <p class="text-xl text-gray-600 mb-2 mt-2 text-center">{{this.soalSinggle.soal}}</p>
            <div class="flex flex-col p-2">
                <div :class="{'border-purple-600':this.indexJawaban === index ,'text-purple-600':this.indexJawaban === index}" @click="selectOptions(index)" v-for="(item,index) in this.soalSinggle.jawaban" :key="index"  class="rounded-full w-full my-1 bg-purple-200 transition py-1 px-2 border-2 border-purple-300 text-purple-400 cursor-pointer">
                    <font>{{item.text}}</font>
                </div>
            </div>
            <div class="flex p-2 justify-end">
                <button @click="goNext(),goPercent()" class="rounded-full bg-purple-300 py-1 px-2 border-2 border-purple-800 text-purple-800"><i class=" mdi mdi-arrow-right"></i> Next</button>
            </div>

        </div>
    </div>
</template>
<script>
export default {
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
    data() {
        return {
            
            page:localStorage.getItem('page'),
            countDown : 20,
            alphabets:["a","b","c","d","e"],
            indexJawaban:'',
            soalSinggle : [],
            percent : 0,
            listSoal:[
                {
                    soal:'lorem ipsum dolor sit amet',
                    jawaban:[
                        {
                            text:'ulour',
                            correct:false
                        },{
                            text:'flax',
                            correct:false
                        },{
                            text:'dolor',
                            correct:true
                        },{
                            text:'falnks',
                            correct:false
                        }
                    ]
                },{
                    soal:'lorem ipsum sscs',
                    jawaban:[
                        {
                            text:'cccc',
                            correct:false
                        },{
                            text:'sdfe',
                            correct:true
                        },{
                            text:'werd',
                            correct:false
                        },{
                            text:'sdxd',
                            correct:false
                        }
                    ]
                }
            ]
        }
    },
    methods: {
            goPercent(){
                let n =localStorage.getItem('page')
                let kali =  (localStorage.getItem('page')) * 100
                this.percent = ((n <= 1)?n*100:n*100) / this.listSoal.length
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
            selectOptions(index){
                this.indexJawaban = index 
            },
            goNext(){
                if(localStorage.getItem('page') >= this.listSoal.length){
                        localStorage.removeItem('countdownNum');
                        localStorage.removeItem('page');
                        clearInterval(this.interval);
                        this.countDown = 20
                }else{
                        localStorage.setItem('page',Number(localStorage.getItem('page'))+1)
                        clearInterval(this.interval);
                        this.soalSinggle = this.listSoal[localStorage.getItem('page')-1]
                        this.countDown = 20
                        this.countDownTimer()
                }
            }
    },
}
</script>