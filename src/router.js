import { createRouter,createWebHashHistory } from "vue-router";
import Home from './components/Home.vue'
import StartView from './components/StartView.vue'
const router = createRouter({
    history:createWebHashHistory(),
    routes:[
        { path: '/', component: Home },
        { path: '/StartView', component: StartView },
    ]
})

export default router;