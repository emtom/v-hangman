<template>
  <div class="hangman-container">

    <transition name="fade">
      <div class="overlay" v-show="state.error || state.success" v-bind:class="{ 'overlay--error': state.error, 'overlay--success': state.success}">
        <div class="overlay__center">
          <h3>{{ overlayMessage }}</h3>
          <a href="javascript:location.reload()">reload</a>
        </div>
      </div>
    </transition>

    <div v-bind:class="{ blurred: state.error || state.success }">
      <h1>v-hangman game</h1>

      <hiddenLetters v-bind:letters="hiddenWord"></hiddenLetters>
      <missedLetters :letters="missedLetters"></missedLetters>

      <hangman :mistakes="mistakes"></hangman>

    </div>

  </div>

</template>

<script>
import HiddenLetters from './HiddenLetters'
import MissedLetters from './MissedLetters'
import Hangman from './Hangman'
import store from '../vuex/store.js'

const LETTER_KEYS = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90]
const WORDS = [
  'biblioteka',
  'towarzystwo',
  'drzewo',
  'kozak',
  'manufaktura',
  'telefonia',
  'mechanika',
  'argentyna',
  'abdominalny',
  'zdystansowany',
  'zegarmistrz',
  'kulturoznawstwo',
  'szpiegowanie',
  'interpolacja',
  'prognozowanie',
  'amatorszczyzna'
]
const MAX_CHANCES = 8

export default {
  store,
  name: 'hangmanGame',
  components: {
    hiddenLetters: HiddenLetters,
    missedLetters: MissedLetters,
    hangman: Hangman
  },
  data () {
    return {
      word: null,
      missedLetters: [],
      state: { error: false, success: false },
      overlayMessage: null,
      mistakes: 0,
      hiddenWord: []
    }
  },
  created () {
    window.addEventListener('keyup', this.handleKeyPress)
    this.resetState()
    this.setWord()
    this.setHiddenWord()
    console.log(this.$store.getters.gameState)
  },
  methods: {

    setWord () {
      this.word = WORDS[Math.floor(Math.random() * WORDS.length)]
    },

    setHiddenWord () {
      this.word.split('').map((letter) => {
        this.hiddenWord.push('')
      })
    },

    handleKeyPress (event) {
      if (LETTER_KEYS.indexOf(event.keyCode) !== -1) {
        this.handleLetter(event.key.toLowerCase())
      }
    },

    handleLetter (letter) {
      if (this.hiddenWord.indexOf(letter) !== -1 || this.missedLetters.indexOf(letter) !== -1) {
        return
      }
      if (this.word.indexOf(letter) === -1) {
        this.missedLetters.push(letter)
        this.checkMistakes()
        return
      }

      for (var i = 0; i < this.word.length; i++) {
        if (this.word[i] === letter) {
          this.hiddenWord.splice(i, 1, letter)
          this.checkWordProgress()
        }
      }
    },

    checkWordProgress () {
      if (this.hiddenWord.indexOf('') === -1) {
        this.state.success = true
        this.overlayMessage = 'success'
      }
    },

    checkMistakes () {
      this.mistakes++
      if (this.mistakes >= MAX_CHANCES) {
        this.state.error = true
        this.overlayMessage = 'failure'
      }
    },

    resetState () {
      this.state.error = false
      this.state.success = false
    }

  }
}
</script>

<style lang="scss" scroped>

.hidden-word {}
.hidden-word__letter {
  margin: 0 4px;
  font-size: 28px;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(80, 80, 80, 0.3);
}

.overlay__center {
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
}

.overlay--error {
  background: rgba(255, 0, 0, 0.7);
  color: white;
}

.overlay--success {
  background: rgba(0, 255, 0, 0.7);
  color: white;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}

.blurred {
  filter: blur(3px);
}
</style>