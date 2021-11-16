<template>
    <div class="p-3 bg-white w-full rounded-md" data-aos="fade-up">
        <h1 class="text-2xl mb-4 mt-2 text-gray-600 text-center">Masukan Nama</h1>
        <input type="text" v-model="nameInput" placeholder="Masukan namamu di sini" class="px-2 py-2 border-purple-50 transition border-2 rounded-md w-full mb-2 focus:border-purple-300 focus:outline-none">
        <button @click="go()" class="font-medium w-full px-4 py-2 rounded-md text-sm font-medium border-0 transition text-purple-600 bg-purple-50 hover:text-purple-800 hover:bg-purple-100 active:bg-purple-200  focus:outline-none " type="submit">Lanjut</button> 
    </div>
</template>
<script>
export default {
    data(){
        return{
            nameInput:'',
        }
    },
    methods: {
        go(){
            this.$router.push({
                path:`/StartView`,
                    query:{
                        name:this.nameInput
                    }
                })
        }
    },
}
</script>