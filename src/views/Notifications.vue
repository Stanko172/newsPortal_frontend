<template>
<Navigation />
<h2>Obavijesti</h2>
    <el-row justify="center">
        <el-col :span="20" >
            <div class="header-row">
                <el-button @click="saveData">Spremi</el-button>
                <el-select v-model="value" placeholder="Filtriraj">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
            </div>
        </el-col>
    </el-row>
    <el-row justify="center">
        <el-col :span="20">
            <el-table
                :data="getNotifications"
                @selection-change="handleSelectionChange"
                style="width: 100%"
                >
                <el-table-column
                type="selection"
                width="55">
                </el-table-column>
                <el-table-column
                prop="created_at"
                label="Datum">
                </el-table-column>
                <el-table-column
                prop="data.message"
                label="Poruka"
                >
                </el-table-column>
                <el-table-column
                prop="data.comment.content"
                label="Komentar">
                </el-table-column>
                <el-table-column>
                    <template #default="scope">
                        <el-button @click="handleClick(scope.$index)" type="text" size="small">Više</el-button>
                        <el-button @click="handleDelete(scope.$index)" type="text" size="small">Izbriši</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-col>
    </el-row>
</template>

<script>
import Navigation from '../components/Navigation.vue'
import { mapActions, mapGetters } from 'vuex'
  export default {
    components:{
        Navigation
    },
    data() {
      return {
          changeStatusNotifications: [],
          options: [{
          value: 'all',
          label: 'Sve'
        }, {
          value: 'read',
          label: 'Pročitano'
        }, {
          value: 'unread',
          label: 'Nepročitano'
        }],
        value: 'all'
      }
    },
    watch:{
        value: function(val){
            this.fetchNotifications(val)
        }
    },
    computed:{
        ...mapGetters('notifications', ['getNotifications'])
    },
    methods: {
        ...mapActions('notifications', ['fetchNotifications', 'changeStatus', 'deleteNotification']),
        handleDelete(index) {
            this.deleteNotification({ notification_id: this.getNotifications[index].id, filter: this.value })
        },
        handleSelectionChange(val){
            this.changeStatusNotifications = []
            for(var i = 0; i < val.length; i++){
                const target_copy = Object.assign({}, val[i]);
                this.changeStatusNotifications.push(target_copy.id)
            }
        },
        saveData(){
            this.changeStatus({ notifications: this.changeStatusNotifications, filter: this.value })
        }
    },
    created(){
        this.fetchNotifications('all')
    }
  }
</script>

<style scoped>
.el-button{
    color: white;
    padding: 0.4em;
    width: 50px;
}

.el-button:first-child{
    background: #004379;
    margin-left: 10px;
}

.el-button:nth-child(2){
    background: #ED1C24;
}

.header-row{
    display: flex;
    justify-content: space-between;
    margin-bottom: 1em;
}

.header-row .el-button{
    width: 100px;
}
</style>