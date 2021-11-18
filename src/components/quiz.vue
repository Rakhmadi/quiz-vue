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
                  <font class="rounded-full bg-purple-200 py-1 px-2 text-purple-500 w-auto text-xs">30% complete</font>
                  <div class="overflow-hidden h-2 mt-2 text-xs flex rounded bg-purple-200">
                    <div style="width:30%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"></div>
                  </div>
            </div>
        </div>
        <div class="p-3 bg-white w-full rounded-md mt-2">
            <p class="text-xl text-gray-600 mb-2 mt-2 text-center">{{this.listSoal[this.page-1].soal}}</p>
            <div class="flex flex-col p-2">
                <div :class="{'border-purple-600':this.indexJawaban === index ,'text-purple-600':this.indexJawaban === index}" @click="selectOptions(index)" v-for="(item,index) in this.listSoal[this.page-1].jawaban" :key="index"  class="rounded-full w-full my-1 bg-purple-200 transition py-1 px-2 border-2 border-purple-300 text-purple-400 cursor-pointer">
                    <font>{{item.text}}</font>
                </div>
            </div>
            <div class="flex p-2 justify-end">
                <button class="rounded-full bg-purple-300 py-1 px-2 border-2 border-purple-800 text-purple-800"><i class=" mdi mdi-arrow-right"></i> Next</button>
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
 
        var countdownNum = localStorage.getItem('countdownNum');
        if(!countdownNum){
            localStorage.setItem('countdownNum',this.countDown)
        }else{
            this.countDown = localStorage.getItem('countdownNum')
        }
        console.log('asd');
    },
    data() {
        return {
            page:localStorage.getItem('page'),
            countDown : 20,
            alphabets:["a","b","c","d","e"],
            indexJawaban:'',
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
                }
            ]
        }
    },
    methods: {
            countDownTimer() {
                this.interval = setInterval(() => {
                    if (this.countDown > 0) {
                        this.countDown = this.countDown - 1;
                        localStorage.setItem('countdownNum',this.countDown)
                    } else {
                        clearInterval(this.interval);
                    }
                }, 1000);
            },
            selectOptions(index){
                this.indexJawaban = index 
            }
    },
}
</script>