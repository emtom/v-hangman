<template>

  <section class="hidden-letters">
    <div class="hidden-letter" v-for="letter in letters">{{ letter }}</div>
  </section>

</template>

<script>
export default {
  name: 'hiddenLetters',
  props: ['letters'],
  mounted () {}
}
</script>

<style lang="scss" scoped>

$letter-background: #39393B;
$letter-color: #E0E3E8;

.hidden-letter {
  display: inline-block;
  margin: 0 4px;
  font-size: 32px;
  background: $letter-background;
  width: 48px;
  height: 58px;
  line-height: 58px;
  color: $letter-color;
  font-weight: bold;
  border-radius: 3px;
  text-transform: uppercase;
  vertical-align: top;
}
</style>
