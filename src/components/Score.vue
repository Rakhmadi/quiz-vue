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
import { getDatabase, ref, child, get } from "firebase/database";
import app from '../firebase'
export default {
    async mounted(){
        app

const dbRef = ref(getDatabase());
get(child(dbRef, `/Lboard/mII49Hggpkp2aSgiVZ8u`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log("No data available");
  }
}).catch((error) => {
  console.error(error);
});
    }
}
</script>