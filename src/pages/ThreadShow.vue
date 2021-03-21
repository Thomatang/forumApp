<template>
    <div class="col-large push-top">
        <h1>{{thread.title}}</h1>

          <PostList :posts="threadPosts"/>

      </div>
</template>
<script>
import sourceData from '@/data.json'
import PostList from '@/components/PostList'

export default {
  props: {
    id: {
      required: true,
      type: String
    }
  },
  components: {
    PostList
  },
  data () {
    return {
      threads: sourceData.threads,
      posts: sourceData.posts
    }
  },
  computed: {
    thread () {
      return this.threads.find(thread => thread.id === this.id) // also available under this.$route.params.id
    },
    threadPosts () {
      return this.posts.filter(post => post.threadId === this.id)
    }
  },
  setup () {

  }
}
</script>
<style scoped>

</style>
