<template>
    <div>
        <h1>Posts</h1>
        <div class="row">
            <div class="col-md-10"></div>
            <div class="col-md-2">
                <router-link :to="{ name: 'create' }" class="btn btn-primary">Create Post</router-link>
            </div>
        </div><br />

        <table class="table table-hover">
            <thead>
            <tr>
                <th>ID</th>
                <th>Item Name</th>
                <th>Item Price</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>

            <Modal :showmodal="show" :errorModal="error" :titleModal="titleModal"></Modal>


            <tr v-if="!show" v-for="post in posts" :key="post.id">
                <td>{{ post.id }}</td>
                <td>{{ post.title }}</td>
                <td>{{ post.body }}</td>
                <td><router-link :to="{name: 'edit', params: { id: post.id }}" class="btn btn-primary">Edit</router-link></td>
                <td><button @click="deletePost(post.id)" class="btn btn-danger">Delete</button></td>
            </tr>
            </tbody>
        </table>


    </div>
</template>

<script>

    import Spinner from 'vue-spinkit'
    import Modal from './modal'
    import axiosRetry from 'axios-retry';
    var axios = require('axios')
    import {EventBus} from '../eventBus'
    axiosRetry(axios, { retries: 2 });

    export default {
        data(){

            return{

                posts:[],
                show:'',
                titleModal:'Cargando.....',
                error:''
            }

        },
        components:{

           'Spinner':Spinner,
            'Modal':Modal

        },

        mounted() {

             this.getPosts() ,

             EventBus.$on('reintent-api', () => {
             console.log('LLego el emit')
             this.error = false
             this.getPosts()

             })
        },

        methods:{

            getPosts(){
                this.show = true
                this.axios.get('api/posts').then(response => {
                    this.posts = response.data.data;
                    this.show = false
                    this.error = false

                }).catch((err) => {
                    this.error = true
                    this.show = false
                })

            },

            deletePost(id){

                this.axios.delete('api/post/delete/'+ id +'').then(response => {

                    this.posts.splice(this.posts.indexOf(id), 1);
                });

            }

        }
    }
</script>

<style scoped>

</style>