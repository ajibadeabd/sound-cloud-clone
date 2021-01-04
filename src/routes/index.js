import {createRouter,createWebHistory} from 'vue-router'
// import store from '../store'
import Upload from '../components/pages/upload'

import Library from '../components/pages/Library'
import Home from '../components/pages/Header'
import Album from '../components/you/album.vue'
import Following from '../components/you/following'
import Likes from '../components/you/likes'
import History from '../components/you/history'
import Station from '../components/you/station'
import Playlist from '../components/you/playlist'
const routes=[
    {path:"/",name:"Home",component:Home},
    {path:"/upload",name:"Upload",component:Upload},
    { path:"/you/library",name:"Library", component: Library,
      children: [
        {path: 'likes',component: Likes},
        {path: 'album',component: Album},
        {path: 'following',component: Following},
        {path: 'history',component: History},
        {path: 'station',component: Station},
        {path: 'playlist',component: Playlist},
      ]
    }
]

const router = createRouter({
    history:createWebHistory(process.env.BASE_URL),routes
})


export default router;