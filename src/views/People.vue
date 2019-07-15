<template>
    <div class="people">
      <el-input v-model="count"/>
      <el-button @click="handleIncrement">+1</el-button>
      <el-button @click="handleDecrease">-1</el-button>
      <el-button @click="handleIncrementMore">+5</el-button>
      <div>{{ list }}</div>
      <div>{{ listCount }}</div>
      <el-button @click="handleActionIncrement">action +1</el-button>
      <el-button @click="handleAsyncIncrement">async +1</el-button>
    </div>
</template>

<script>
  export default {
    name: 'People',
    data () {
      return {}
    },
    computed: {
      count () {
        return this.$store.state.count;
      },
      list () {
        return this.$store.getters.filteredList;
      },
      listCount () {
        return this.$store.getters.listCount;
      }
    },
    methods: {
      handleIncrement () {
        this.$store.commit('increment');
      },
      handleDecrease () {
        this.$store.commit('decrease');
      },
      handleIncrementMore () {
        this.$store.commit('increment', 5);
      },
      handleActionIncrement () {
        this.$store.dispatch('increment')
      },
      handleAsyncIncrement () {
        this.$store.dispatch('asyncIncrement')
          .then(() => {
          console.log(this.$store.state.count);
        });
      }
    }
  }
</script>

<style scoped>

</style>
