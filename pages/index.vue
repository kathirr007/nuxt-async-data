<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        nuxt-async
      </h1>
      <h2 class="subtitle">
        My gnarly Nuxt.js project
      </h2>
      <div class="links">
        <nuxt-link
          v-for="post in posts"
          :to="{name: 'posts-id', params: {id: post.mission_id}}"
          :key="post.mission_id"
          class="button--grey"
          v-html="post.mission_name"
        >
          <!-- {{post.title.capitalize(true)}} -->
          <!-- {{post.mission_name}} -->
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import missionsList from '~/static/missions-list.json'
import Logo from '~/components/Logo.vue'
import axios from 'axios'

export default {
  components: {
    Logo
  },
  head () {
    return {
      title: 'Home Page 🍕',
      meta: [
        { name: 'twitter:title', content: 'Nuxt Async by Vue School'},
        { name: 'twitter:description', content: 'Nuxt + Vue School = 🍕'},
        { name: 'twitter:image', content: 'https://i.imgur.com/UYP2umJ.png'},
        { name: 'twitter:card', content: 'summary_large_image'}
      ]
    }
  },
  /* async fetch ({store}) {
    // dispatch action fetchAllPosts
    await store.dispatch('posts/fetchAllPosts')
  }, */
  data(){
    return {
      posts : []
    }
  },
  async asyncData({$axios}) {
    // console.log(context)
    /* let posts = await $axios.$get('https://jsonplaceholder.typicode.com/posts')
    return {posts} */
    /* let posts = await $axios.$get('http://contentplace.x1.fr/missions?mission_status=draft&client_secret=$2y$10$r1u8S82qpoLo.ASFBnUQCe6MGJhOyuGYderz5fA64asogQ3LFpJIi')
    console.log(posts)
    return {posts} */
    let posts = await missionsList.data.prodMission
    // console.log(posts)
    return {posts}
  },
/*   asyncData() {
    return axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        return {posts: response.data}
      })
  }, */
  /* computed: {
    posts () {
      return this.$store.state.posts.all
    }
  }, */
  mounted () {
      /* this.$axios.$get('http://localhost:3300/static/missions-list.json')
        .then(response => {
          this.posts = response
      }) */
      /* this.$axios.$get('/posts')
        .then(response => {
          this.posts = response
      }) */
      /* axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          this.posts = response.data
        }) */
    /* fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        response.json().then(posts => {
          // console.log(posts)
          this.posts = posts
        })
      }) */
  },
  transition(to, from) {
    if (!from) {
      return 'slide-left'
    }
    return 'slide-right'
  },
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
  'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  letter-spacing: 1px;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
}
.links {
  padding-top: 15px;
}
.links > .button--grey {
  margin: 5px;
}
</style>
