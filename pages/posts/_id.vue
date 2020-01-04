<template>
  <div class="container">
    <article>
      <h1 class="title">{{post[0].mission_name.capitalize(true)}}</h1>
      <p>{{post[0].contract_name}}</p>
    </article>
  </div>
</template>

<script>
  import axios from 'axios'
  import missionsList from '~/static/missions-list.json'
  export default {
    transition(to, from) {
      if (!from) {
        return 'slide-left'
      }
      return 'slide-right'
    },
    head () {
      return {
        title: this.post[0].mission_name.capitalize(true),
        meta: [
          { name: 'twitter:title', content: this.post[0].mission_title},
          { name: 'twitter:description', content: this.post[0].contract_name},
          { name: 'twitter:image', content: 'https://i.imgur.com/UYP2umJ.png'},
          { name: 'twitter:card', content: 'summary_large_image'}
        ]
      }
    },
    data () {
      return {
        id: this.$route.params.id,
        // post: {}
      }
    },
    /* async fetch ({store, params}) {
      await store.dispatch('posts/fetchPost', params.id)
    }, */
    /* computed: {
      post () {
        return this.$store.state.posts.all.find(post => post.id === Number(this.id))
      }
    }, */
    /* async asyncData({params}) {
      // console.log(context)
      let response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      return {post: response.data}
    }, */
    async asyncData({$axios, params}) {
      // console.log(context)
      // let post = await $axios.$get(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      let post = await missionsList.data.prodMission.filter((post) => {
        return post.mission_id === params.id
      })
      console.log(post)
      return {post}
    },
    mounted() {
      /* this.$axios.$get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
        .then(response => {
          this.post = response
        }) */
      /* axios.get(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
        .then(response => {
          this.post = response.data
        }) */
      /* fetch(`https://jsonplaceholder.typicode.com/posts/${this.id}`)
        .then(response => {
          response.json().then(post => {
            this.post = post
          })
        }) */
    }
  }
</script>

<style scoped>
  .container {
    display: flex;
    justify-content: space-between;
    line-height: 1.5;
  }
  article * {
    margin-bottom: 1rem;
  }
  aside {
    min-width: 280px;
    max-width: 280px;
    padding-left: 2rem;
  }
  .title {
    font-size: 2rem;
  }
</style>
