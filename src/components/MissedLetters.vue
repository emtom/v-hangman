<template>
  <section class="missed-letters" v-if="letters.length">
    <p>missed: </p>
    <span v-for="letter in letters">{{ letter }}</span>
  </section>
</template>

<script>
export default {
  name: 'missedLetters',
  props: ['letters']
}
</script>
<style lang="scss" scoped>
</style>