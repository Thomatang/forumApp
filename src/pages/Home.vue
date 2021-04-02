<template>
<h1 class="push-top">Welcome to the Forum</h1>
<Categorylist :categories="categories"/>
</template>
<script>
import Categorylist from '@/components/CategoryList'

export default {
  components: {
    Categorylist
  },
  computed: {
    categories () {
      return this.$store.state.categories
    }
  },
  setup () {

  }
}
</script>
<style scoped>

</style>
