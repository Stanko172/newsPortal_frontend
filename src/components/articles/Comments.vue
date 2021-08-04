<template>
<div>
    <el-row justify="center">
        <el-col :span="20">
            <h1>Komentari</h1>
        </el-col>
        <el-col :span="20" class="write-comment-section">
            <h4>Napiši komentar</h4>
            <textarea name="comment" id="" cols="40" rows="4"></textarea>
        </el-col>
            <el-col :span="20">
              <el-row>

                <el-col v-for="comment in getComments" :key="comment.id">
                    <div class="comment-container">
                        <div class="comment-first-row">
                            <h4>{{ comment.author }}</h4>
                            <span >{{ comment.created_at }}</span>
                        </div>
                        <p>{{ comment.content }}</p>
                        <div class="actions-container">
                            <div class="react-container">
                            <div>
                                <i class="far fa-thumbs-up"></i>
                                <span>{{ comment.likes }}</span>
                            </div>
                            <div>
                                <i class="far fa-thumbs-down"></i>
                                <span>{{ comment.dislikes }}</span>
                            </div>
                            </div>
                            <div class="comment-section">
                                <div>
                                    <i class="fas fa-comments"></i>
                                    <span>{{ comment.replies_num }}</span>
                                </div>
                                <router-link to="/"><i class="fas fa-reply"></i></router-link>
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-row>

            <Pagination />

        </el-col>
    </el-row>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Pagination from './Pagination.vue'
export default {
    components:{
        Pagination
    },
    computed:{
        ...mapGetters('comments', ['getComments'])
    },
    methods:{
        ...mapActions('comments', ['fetchComments'])
    },
    mounted(){
        this.fetchComments(this.$route.params.id)
    }
}
</script>

<style scoped>
.comment-container{
    background: rgb(224, 224, 224);
    opacity: .8;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1em;
    border-radius: 0.8em;
}

.actions-container{
    display: flex;
    justify-content: space-between;
    width: 100%;
}

.comment-container p{
    text-align: justify;
}

.comment-first-row{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.react-container{
    display: flex;
    gap: 1em;
}

.react-container div{
    display: flex;
    gap: 0.3em;
}

.el-col{
    margin-bottom: 1.5em;
}

.comment-section{
    display: flex;
    gap: 1em;
    justify-content: space-between;
}

.comment-section div{
    display: flex;
    gap: 0.3em;
}

.comment-section a{
    font-weight: 700;
    text-decoration: none;
}

.comment-section a:hover{
    text-decoration: underline;
}

.write-comment-section{
    text-align: start;
}

textarea {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    width: 100%;
}
</style>