<template>
    <div>
        <div class="p-3 bg-white w-full rounded-md" data-aos="fade-up">
            a
        </div>
        <div class="p-3 bg-white w-full rounded-md mt-2">
            <h1 class="text-2xl text-gray-600 mb-4 mt-2 text-center">1. Hai Klik untuk memulai</h1>
        </div>
    </div>
</template>
<script>
export default {
    mounted() {
        this.countDownTimer()
        clearInterval(this.interval);
        this.countDownTimer()
 
        var countdownNum = localStorage.getItem('countdownNum');
        if(!countdownNum){
            localStorage.setItem('countdownNum',this.countDown)
        }else{
            this.countDown = localStorage.getItem('countdownNum')
        }
    },
    data() {
        return {
            countDown : 20,
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
    },
}
</script>