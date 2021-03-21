<template>
    <div class="col-large push-top">
        <h1>{{thread.title}}</h1>

          <PostList :posts="threadPosts"/>
          <form @submit.prevent="addPost">
              <div class="form-group">
                <label for="thread_title">Title:</label>
                <input type="text" id="thread_title" class="form-input" name="title" >
              </div>

              <div class="form-group">
                <label for="thread_content">Content:</label>
                <textarea v-model="newPostText" id="thread_content" class="form-input" name="content" rows="8" cols="140"></textarea>
              </div>

              <div class="btn-group">
                <button class="btn btn-ghost">Cancel</button>
                <button class="btn btn-blue" type="submit" name="Publish">Publish </button>
              </div>
          </form>
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
      posts: sourceData.posts,
      newPostText: ''
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
  methods: {
    addPost () {
      const postId = 'gggg' + Math.random()

      const post = {
        text: this.newPostText,
        publishedAt: Math.floor(Date.now() / 1000),
        threadId: this.id,
        userId: '7uVPJS9GHoftN58Z2MXCYDqmNAh2'
      }
      this.posts.push(post)
      this.thread.posts.push(postId)

      this.newPostText = ''
    }
  },
  setup () {

  }
}
</script>
<style scoped>

</style>
