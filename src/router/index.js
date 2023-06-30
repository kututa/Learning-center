import vue from "vue";
import VueRouter from "vue-router";
import Home from "./App.vue";
import Login from "../views/Login.vue"
import Register from "../views/Register.vue"


vue .useAttrs(VueRouter);

const router = [
{
path: "/",
name: "login",
component: Login
},

{
path: "/",
name: "Register",
component: Register

},

{
path:"/",
name:"App.vue",
component:Home
},
] 



















