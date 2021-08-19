<template v-if="categories">

    <!--NavMenu for medium and large screens-->
    <el-menu
    class="el-menu-demo hidden-sm-and-down"
    mode="horizontal"
    background-color="#004379"
    text-color="#fff"
    active-text-color="#fff">
        <el-menu-item index="1" class="custom-menu-title-class">newsPortal</el-menu-item>
        <el-menu-item v-for="(category, index) in categories" :key="index" :index="(index + 1).toString()" class="custom-menu-item-class"><router-link :to="category === 'naslovnica'? '/' : '/vijesti/' + category">{{ category }}</router-link></el-menu-item>

        <el-menu-item v-if="!isLoggedIn" index="100" class="custom-menu-item-class" style="float: right"><router-link to="/register">Sign up</router-link></el-menu-item>
        <el-menu-item v-if="!isLoggedIn" index="101" class="custom-menu-item-class" style="float: right"><router-link to="/login">Login</router-link></el-menu-item>

        <el-submenu v-if="isLoggedIn" index="102" style="float: right;">
            <template #title><i class="el-icon-user"><el-badge is-dot class="top-badge" v-if="getUnreadNotificationsNum > 0"></el-badge></i></template>
            <el-menu-item index="103-1">Profil</el-menu-item>
            <el-menu-item index="104-2"><router-link to="/obavijesti" class="notifications-link">Obavijesti</router-link><el-badge v-if="getUnreadNotificationsNum" class="nested-badge" :value="getUnreadNotificationsNum" :max="99"></el-badge></el-menu-item>
            <el-menu-item index="105-3" @click="handleLogout">Odjava</el-menu-item>
        </el-submenu>
        <el-menu-item v-if="isLoggedIn" index="106" class="custom-menu-item-class " style="float: right"><router-link to="/pretrazivanje"><i class="el-icon-search"></i></router-link></el-menu-item>
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
import { mapActions, mapGetters, mapState } from 'vuex'
export default {
    data(){
        return{
            drawer: false,
            direction: 'ltr',
        }
    },
    watch: {
        $route: {
        handler() {
            this.fetchCategories()
        },
        immediate: true
        }
    },
    computed:{
        ...mapState('navigation', ['categories']),
        ...mapGetters('notifications', ['getUnreadNotificationsNum']),
        isLoggedIn(){
            if(localStorage.getItem('auth') != null){
                return true
            }else{
                return false
            }
        },
    },
    methods:{
        ...mapActions('auth', ['logout',]),
        ...mapActions('navigation', ['fetchCategories']),
        ...mapActions('articles', ['fetchCategoryArticles']),
        ...mapActions('notifications', ['fetchUnreadNotifications']),
        handleClose(done) {
            done();
        },
        handleLogout(){
            this.logout()
        }
    },
    created(){
        if(this.isLoggedIn){
            this.fetchUnreadNotifications()
        }
    }

}
</script>

<style scoped>
.top-badge{
    right: 0px;
    top: -20px;
}

.nested-badge{
    top: -15px;
    left: 5px;
}

.notifications-link{
    color: white;
}

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