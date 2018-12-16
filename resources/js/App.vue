<template>
    <div class="container">

        <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link to="/" class="nav-link">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/create" class="nav-link">Create Post</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/posts" class="nav-link">Posts</router-link>
                </li>
            </ul>
        </nav><br />

            <router-view></router-view>



    </div>
</template>



<script>
    export default {

        mounted() {
            console.log('Component mounted. app')
        }

    }
</script>
<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
        opacity: 0
    }

    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active below version 2.1.8 */ {
        transform: translateX(10px);
        opacity: 0;
    }
</style>