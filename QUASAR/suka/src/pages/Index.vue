<template>
  <q-page padding>

    <button
    style="position: absolute; right: 10px"
    @click="counter++"
    >

      {{counter}}

      </button>

    <input
    v-model="message"
     @keyup.esc="clearMessage"
     @keyup.enter="alertMessage"
     v-autofocus
     :class="{ 'error' : message.length > 22}"
     ref='messageInput'
   />
    <button @click="clearMessage">Clear</button>
    <div>{{ message.length }}</div>
    <h5
    v-if="message.length"
    class="border-grey"
    >{{ message }} </h5>
    <h6 v-else>
      No Message Entered
    </h6>

    <p>Upper Case Message: {{messageUppercase }}</p>
     <p>Loweer Message: {{message | messageLowercase}}</p>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      message: 'I Love VUE Sasa',
      counter: 0
    }
  },
  computed: {
    messageUppercase () {
      console.log('messageUppercase was fired')
      return this.message.toUpperCase()
    }

  },
  methods: {
    clearMessage () {
      this.message = ''
    },
    handleKeyup (e) {
      console.log(e)
      if (e.keyCode === 27) {
        this.clearMessage()
      } else if (e.keycode === 13) {
        this.alertMessage()
      }
    },
    alertMessage () {
      alert(this.message)
    }

  },
  filters: {
    messageLowercase (value) {
      return value.toLowerCase()
    }
  },
  directives: {
    autofocus: {
      inserted (el) {
        el.focus()
      }
    }
  },

  mounted () {
    console.log(this.$refs)
    this.$refs.messageInput.className = 'bg-green'
  }

}
</script>
<style>
  .border-grey {
    border: 1px solid grey;
  }
  input , button {
    font-size: 23px;
  }
  .error {
    color: red;
    background: pink;
  }
</style>
