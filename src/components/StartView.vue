<template>
    <div class="h-screen p-6">
        <div class="p-3 bg-white w-full rounded-md" data-aos="fade-up">
            <button @click="$router.push({path:'/'})">
                <i class="text-2xl text-gray-600">
                    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
                    </svg>
                </i>
            </button>
            <h1 class="text-2xl text-gray-600 mb-4 mt-2 text-center">Hai, <span class="text-purple-600">{{$route.query.name}}</span> Klik untuk memulai</h1>
            <button @click="$router.push({path:'/quiz'}),name()" class="font-medium w-full px-4 py-2 rounded-md text-sm font-medium border-0 transition text-purple-600 bg-purple-50 hover:text-purple-800 hover:bg-purple-100 active:bg-purple-200  focus:outline-none " type="submit">Mulai</button> 
        </div>
    </div>
</template>
<script>
export default {
    mounted() {
        localStorage.setItem('page',1)
        localStorage.removeItem('dataSoal');
        localStorage.setItem('isDone',false)
    },
    methods: {
        name(){
            localStorage.setItem('name',this.$route.query.name);
        }
    },
}
</script>