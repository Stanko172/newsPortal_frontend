<template v-if="categories">
<!--
    <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/dashboard">Dashboard</router-link> |
        <router-link to="/posts">Posts</router-link> |
        <router-link to="/contact">Contact</router-link>
    </div>
--> 

    <!--NavMenu for medium and large screens-->
    <el-menu
    class="el-menu-demo hidden-sm-and-down"
    mode="horizontal"
    background-color="#004379"
    text-color="#fff"
    active-text-color="#fff">
        <el-menu-item index="1" class="custom-menu-title-class">NewsPortal</el-menu-item>
        <el-menu-item v-for="(category, index) in categories" :key="index" :index="(index + 1).toString()" class="custom-menu-item-class"><router-link :to="category === 'naslovnica'? '/' : '/vijesti/' + category">{{ category }}</router-link></el-menu-item>

        <el-menu-item v-if="!isLoggedIn" index="100" class="custom-menu-item-class hidden-lg-and-down" style="float: right"><el-button>Sign up</el-button></el-menu-item>
        <el-menu-item v-if="!isLoggedIn" index="101" class="custom-menu-item-class hidden-lg-and-down" style="float: right"><a>Login</a></el-menu-item>

        <el-submenu v-if="isLoggedIn" index="102" style="float: right;">
            <template #title><i class="el-icon-user"></i></template>
            <el-menu-item index="103-1">Profil</el-menu-item>
            <el-menu-item index="104-2">Obavijesti</el-menu-item>
            <el-menu-item index="105-3" @click="handleLogout">Odjava</el-menu-item>
        </el-submenu>
        <el-menu-item v-if="isLoggedIn" index="106" class="custom-menu-item-class " style="float: right"><i class="el-icon-search"></i></el-menu-item>
    </el-menu>

    <!--NavMenu for small and extra small screens-->
    <el-menu
    class="el-menu-demo hidden-md-and-up"
    mode="horizontal"
    background-color="#004379"
    text-color="#fff"
    active-text-color="#fff">
        <el-menu-item class="menu-icon-item"><el-button @click="drawer = true"><i class="el-icon-menu"></i></el-button></el-menu-item>
        <el-menu-item index="1" class="custom-menu-title-class">NewsPortal</el-menu-item>
    </el-menu>

    <!--Drawer for small and extra small screens-->

    <el-drawer
    size="50%"
    title="NewsPortal"
    v-model="drawer"
    :direction="direction"
    :before-close="handleClose">
        <div v-for="(category, index) in categories" :key="index" class="link-mobile">
            <router-link  :to="category === 'naslovnica'? '/' : '/vijesti/' + category">{{ category }}</router-link> <br />
        </div>
        <el-button v-if="isLoggedIn" class="mobile-logout-button" @click="logout">Odjava</el-button>
    </el-drawer>
       

</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    data(){
        return{
            drawer: false,
            direction: 'ltr',
        }
    },
    computed:{
        ...mapState('navigation', ['categories'])
    },
    methods:{
        ...mapActions('auth', ['logout',]),
        ...mapActions('navigation', ['fetchCategories']),
        handleClose(done) {
            done();
        },
        isLoggedIn(){
            if(localStorage.getItem('auth')) return true
        },
        handleLogout(){
            this.logout()
        }
    },
    created(){
        this.fetchCategories()
    }

}
</script>

<style scoped>
.el-menu-item a{
    text-decoration: none;
}

.menu-icon-item{
    position: relative;
    border-bottom: none !important;
}

.custom-menu-title-class{
    font-size: 22px !important;
    font-weight: 600;
    letter-spacing: 1.2px;
    border-bottom: none !important;
}

.custom-menu-item-class{
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.6px;
    border-bottom: none !important;
}

.el-icon-menu{
    font-size: 32px !important;
    color: white !important;
}

.el-icon-search, .el-icon-user{
    color: white !important;
}

.el-button{
    background: #004379;
    border: none;
}

.el-menu.el-menu--horizontal{
    border-bottom: none;
}

.link-mobile{
    padding: 0.55em;
}

.link-mobile a{
    color:#004379;
    font-size: 18px;
    font-weight: 600;
    text-decoration: none;
}

.mobile-logout-button{
    margin-top: 1.8em;
    background: #ED1C24;
    color: white;
}
</style>