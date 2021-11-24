<template>
    <div class="h-full overflow-hidden p-6">
        <div class="p-3 bg-white w-full rounded-md" data-aos="fade-up">
            <h1 class="text-2xl mb-4 mt-2 text-gray-600 text-center">Masukan Nama</h1>
            <label v-show="shw" for="" class="text-xs text-red-500">Nama tidak boleh kosong</label>
            <input type="text" v-model="nameInput" placeholder="Masukan namamu di sini" class="px-2 py-2 border-purple-50 transition border-2 rounded-md w-full mb-2 focus:border-purple-300 focus:outline-none">
            <button @click="go()" class="font-medium w-full px-4 py-2 rounded-md text-sm font-medium border-0 transition text-purple-600 bg-purple-50 hover:text-purple-800 hover:bg-purple-100 active:bg-purple-200  focus:outline-none " type="submit">Lanjut</button> 
        </div>
        <div class="p-3 bg-white w-full h-full rounded-md mt-6" data-aos="fade-up">
            <h2 class="text-3xl text-gray-600 mx-2 my-4">Papan Nilai</h2>
            <div v-for="(item) in lData" :key="item.__id" class="rounded-xl shadow my-2 p-2 flex flex-row justify-between " data-aos="fade-up">
                <div class="flex flex-row">
                    <img class="w-16 h-16 rounded-full" :src="item.data.image" alt="" srcset="">
                    <div class="self-center">
                        <div class=" w-full">
                            <p class="overflow-ellipsis overflow-hidden text-xl text-gray-600 ml-3">{{item.data.name}}</p>
                        </div>
                    </div>
                </div>
                <div class="self-center">
                    <div class="rounded-full h-14 w-14 flex justify-center"
                         :class="{
                             'bg-green-100':item.data.score >= 70,
                             'text-green-500':item.data.score >= 70,
                             'bg-yellow-100':item.data.score < 70 && item.data.score >= 50,
                             'text-yellow-500':item.data.score < 70 && item.data.score >= 50,
                             'bg-red-100':item.data.score < 50,
                             'text-red-500':item.data.score < 50,
                             }" >
                        <font  class="text-xl self-center">{{item.data.score}}</font>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import { addDoc, collection , getFirestore, getDocs , query, orderBy, limit} from "firebase/firestore";
import app from '../firebase'
export default {
    async mounted() {
        localStorage.removeItem('dataSoal');
        const db = getFirestore();
        let q = query(collection(db, "Lboard"), orderBy("timestamp","desc"), limit(30))
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            this.lData.push({
                __id:doc.id,
                data:doc.data()
            })
        });
        console.log(this.lData)
    },
    data(){
        return{
            nameInput:'',
            shw:false,
            lData:[]
        }
    },
    methods: {
        go(){
            if(this.nameInput === ""){
                this.shw = true
            }else{
                this.$router.push({
                path:`/StartView`,
                    query:{
                        name:this.nameInput
                    }
                })
            }
        }
    },
}
</script>