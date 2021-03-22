<template>
<h1>Welcome to the Forum</h1>
<Categorylist :categories="categories"/>
</template>
<script>
import sourceData from '@/data.json'
import Categorylist from '@/components/CategoryList'

export default {
  components: {
    Categorylist
  },
  data () {
    return {
      categories: sourceData.categories
    }
  },
  setup () {

  }
}
</script>
<style scoped>

</style>
