<template>
  <div>
      <Navigation />

      <div v-if="getComment && getReplies">
              <el-row justify="center" style="margin-top: 1em;">
                <!--Komentar-->
                <el-col :xs="20" :sm="20" :md="16" :lg="14" :xl="14">
                    <div class="comment-container">
                        <div class="comment-first-row">
                            <h4>{{ getComment.author }}</h4>
                            <div>
                                <span>{{  moment(getComment.created_at).format("YYYY-MM-DD HH:mm:ss")  }}</span>
                                <el-button v-if="getComment.can_delete" size="small" icon="el-icon-delete" @click="handleDeleteComment()"></el-button>
                            </div>
                        </div>
                        <p>{{ getComment.content }}</p>
                        <div class="actions-container">
                            <div class="react-container">
                            <div>
                                <i :class="[logginStatus ? 'clickable' : '', getComment.is_liked  == 1 ? 'liked' : '', 'far fa-thumbs-up']" @click="logginStatus ? toggleLikeComment(getComment.id) : ''"></i>
                                <span>{{ getComment.likes_num }}</span>
                            </div>
                            <div>
                                <i :class="[logginStatus ? 'clickable' : '', getComment.is_disliked  == 1 ? 'disliked' : '', 'far fa-thumbs-down']" @click="logginStatus ? toggleDislikeComment(getComment.id) : ''"></i>
                                <span>{{ getComment.dislikes_num }}</span>
                            </div>
                            </div>
                        </div>
                    </div>

                    <el-divider>Odgovori</el-divider>

                </el-col>

                <el-col :xs="20" :sm="20" :md="16" :lg="14" :xl="14" class="write-comment-section" v-if="logginStatus">
                    <div class="write-comment-info">
                        <h4>Odgovori na komentar</h4>
                        <el-button size="medium" @click="handleCreateComment">Pošalji odgovor</el-button>
                    </div>
                    <textarea name="comment" id="" cols="40" rows="4" v-model="content"></textarea>
                </el-col>

                <!--Odgovori-->

                <el-col :xs="20" :sm="20" :md="16" :lg="14" :xl="14" v-for="reply in getReplies" :key="reply.id">
                    <div class="comment-container">
                        <div class="comment-first-row">
                            <h4>{{ reply.author }}</h4>
                            <div>
                                <span>{{ moment(reply.created_at).format("YYYY-MM-DD HH:mm:ss") }}</span>
                                <el-button v-if="reply.can_delete" size="small" icon="el-icon-delete" @click="deleteReply({reply_id: reply.id, comment_id: getComment.id})"></el-button>
                            </div>
                        </div>
                        <p>{{ reply.content }}</p>
                        <div class="actions-container">
                            <div class="react-container">
                            <div>
                                <i :class="[logginStatus ? 'clickable' : '', reply.is_liked  == 1 ? 'liked' : '', 'far fa-thumbs-up']" @click="logginStatus ? toggleLikeReply(reply.id) : ''"></i>
                                <span>{{ reply.likes_num }}</span>
                            </div>
                            <div>
                                <i :class="[logginStatus ? 'clickable' : '', reply.is_disliked  == 1 ? 'disliked' : '', 'far fa-thumbs-down']" @click="logginStatus ? toggleDislikeReply(reply.id) : ''"></i>
                                <span>{{ reply.dislikes_num }}</span>
                            </div>
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-row>
        </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Navigation from '../components/Navigation.vue'
import moment from 'moment'
export default {
    components:{
        Navigation
    },
    data(){
        return{
            content: ""
        }
    },
    computed:{
        ...mapGetters('replies', ['getComment', 'getReplies']),
    },
    methods:{
        ...mapActions('replies', ['fetchReplies', 'deleteReply', 'createReply', 'toggleLikeComment', 'toggleDislikeComment', 'deleteComment', 'toggleLikeReply', 'toggleDislikeReply']),
        ...mapActions('auth', ['logginStatus']),
        handleCreateComment(){
            let payload = {
                comment_id : this.getComment.id,
                content: this.content
            }
            this.createReply(payload)
            this.content = ""
        },
        handleDeleteComment(){
            this.deleteComment()
            this.$router.push({path: `/vijesti/${this.$route.params.category}/${this.$route.params.id}`})
        },
        convertDate(old_date){
            let date = new Date(old_date)
            date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate()

            return date
        }
    },
    created(){
        this.moment = moment
    },
    mounted(){
        this.fetchReplies(this.$route.params.comment_id)
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

.comment-first-row div{
    display: flex;
    align-items: center;
    gap: 1em;
}

.comment-first-row div .el-button{
    color: white;
    background:#ED1C24;
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

.write-comment-info{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.5em;
}

.write-comment-info .el-button{
    color: white;
    background:#004379;
}

textarea {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    width: 100%;
}

.clickable{
    cursor:pointer;
}

.liked{
    color: #004379;
    font-weight: bold;
}

.disliked{
    color: #ED1C24;
    font-weight: bold;
}
</style>