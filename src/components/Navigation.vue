<template>
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
    background-color="#409EFF"
    text-color="#fff"
    active-text-color="#fff">
        <el-menu-item index="1" class="custom-menu-title-class">NewsPortal</el-menu-item>
        <el-menu-item index="2" class="custom-menu-item-class"><router-link to="/">Naslovnica</router-link></el-menu-item>
        <el-menu-item index="3" class="custom-menu-item-class"><a>Vijesti</a></el-menu-item>
        <el-menu-item index="4" class="custom-menu-item-class"><a>Sport</a></el-menu-item>
        <el-menu-item index="5" class="custom-menu-item-class"><a>Sci/Tech</a></el-menu-item>
        <el-menu-item index="6" class="custom-menu-item-class"><a>Lifestyle</a></el-menu-item>
        <el-menu-item index="7" class="custom-menu-item-class"><a>Viral</a></el-menu-item>

        <el-menu-item v-if="!isLoggedIn" index="7" class="custom-menu-item-class hidden-lg-and-down" style="float: right"><el-button>Sign up</el-button></el-menu-item>
        <el-menu-item v-if="!isLoggedIn" index="7" class="custom-menu-item-class hidden-lg-and-down" style="float: right"><a>Login</a></el-menu-item>

        <el-submenu v-if="isLoggedIn" index="2" style="float: right;">
            <template #title><i class="el-icon-user"></i></template>
            <el-menu-item index="2-1">Profile</el-menu-item>
            <el-menu-item index="2-2">Obavijesti</el-menu-item>
            <el-menu-item index="2-3" @click="handleLogout">Odjava</el-menu-item>
        </el-submenu>
        <el-menu-item v-if="isLoggedIn" index="7" class="custom-menu-item-class " style="float: right"><i class="el-icon-search"></i></el-menu-item>
    </el-menu>

    <!--NavMenu for small and extra small screens-->
    <el-menu
    class="el-menu-demo hidden-md-and-up"
    mode="horizontal"
    background-color="#409EFF"
    text-color="#fff"
    active-text-color="#fff">
        <el-menu-item class="menu-icon-item"><el-button type="primary" @click="drawer = true"><i class="el-icon-menu"></i></el-button></el-menu-item>
        <el-menu-item index="1" class="custom-menu-title-class">NewsPortal</el-menu-item>
    </el-menu>

    <!--Drawer for small and extra small screens-->

    <el-drawer
    size="50%"
    title="NewsPortal"
    v-model="drawer"
    :direction="direction"
    :before-close="handleClose">
        <router-link to="/">Naslovnica</router-link>
    </el-drawer>
       

</template>

<script>
import { mapActions } from 'vuex'
export default {
    data(){
        return{
            drawer: false,
            direction: 'ltr',
        }
    },
    methods:{
        ...mapActions('auth', ['logout']),
        handleClose(done) {
            done();
        },
        isLoggedIn(){
            if(localStorage.getItem('auth')) return true
        },
        handleLogout(){
            this.logout()
        }
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
}

.el-icon-menu{
    font-size: 32px !important;
    color: white !important;
}

.el-icon-search, .el-icon-user{
    color: white !important;
}
</style>