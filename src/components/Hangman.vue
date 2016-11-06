<template>
  <section class="hangman">
    <div class="bar" v-if="shouldDraw(1)"></div>
    <div class="head" v-if="shouldDraw(2)">
      <div class="eye"></div>
      <div class="eye"></div>
      <div class="mouth"></div>
    </div>
    <div class="neck" v-if="shouldDraw(3)"></div>
    <div class="body" v-if="shouldDraw(4)">
      <div class="arm arm--left" v-if="shouldDraw(5)"></div>
      <div class="arm arm--right" v-if="shouldDraw(6)"></div>
      <div class="corpus" v-if="shouldDraw(4)"></div>
      <div class="leg leg--left" v-if="shouldDraw(7)"></div>
      <div class="leg leg--right" v-if="shouldDraw(8)"></div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'hangman',
  props: ['mistakes'],
  methods: {
    shouldDraw (mistake) {
      return this.mistakes >= mistake
    }
  }
}
</script>
<style lang="scss" scoped>

$bar-color: #363331;
$skin-color: #E3CC8E;
$arm-color: #007AB2;
$leg-color: #543214;
$foot-color: #0F0904;

.centered {
  position: relative;
  left: 50%;
}

.hangman {
  width: 50%;
  margin-top: 35px;
}

.bar {
  width: calc(50% + 5px);
  border-top: 10px solid $bar-color;
  border-right: 10px solid $bar-color;
  box-sizing: border-box;
  height: 25px;
}

.head {
  @extend .centered;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-left: -40px;
  background: $skin-color;
  text-align: center;
  font-size: 0;
  line-height: 0;
}

.eye {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: black;
  margin: 25px 9px 0;
  position: relative;

  &:after {
    display: block;
    content: '';
    position: absolute;
    top: 2px;
    right: 2px;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: white;
  }
}

.mouth {
  height: 12px;
  width: 30px;
  background: white;
  margin-top: 12px;
  display: inline-block;
  border-radius: 12px 12px 0 0;
}

.neck {
  @extend .centered;
  width: 30px;
  height: 15px;
  background: $skin-color;
  margin-left: -15px;
  margin-top: -3px;
}

.body {
  @extend .centered;
  margin-left: -30px;
  width: 60px;
  height: 80px;
}

.corpus {
  background: $arm-color;
  width: inherit;
  height: inherit;
  border-radius: 6px 6px 0 0;
  position: relative;
  z-index: 3;
}

.arm {
  width: 20px;
  height: 80px;
  background: $arm-color;
  border-radius: 4px 4px 0 0;
  position: absolute;
  z-index: 2;

  &:after {
    width: 16px;
    height: 16px;
    border-radius: 0 0 8px 8px;
    position: absolute;
    display: block;
    content: '';
    background: $skin-color;
    bottom: -16px;
    left: 2px;
    z-index: 1;
  }
}

.arm--left {
  left: -20px;
  transform: rotate(30deg);

  &:after {
  }
}

.arm--right {
  right: -20px;
  transform: rotate(-30deg);
}

.leg {
  width: 25px;
  height: 70px;
  background: $leg-color;
  position: absolute;
  margin-top: -3px;
  z-index: 1;

  &:after {
    display: block;
    content: '';
    background: $foot-color;
    width: 32px;
    height: 15px;
    position: absolute;
    bottom: -15px;
    border-radius: 0 5px 0 0;
  }
}

.leg--left {
  transform: rotate(10deg);
  left: -5px;
}

.leg--right {
  transform: rotate(-10deg);
  right: -5px;
}

</style>