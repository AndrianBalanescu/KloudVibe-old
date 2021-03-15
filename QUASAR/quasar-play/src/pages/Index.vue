<template>
  <q-page class="flex flex-center column">

{{dayjs()}}
<q-btn
  label="Notify Me"
  no-caps
  icon="message"
  color='grey-9'
  class="text-green-2"
  size="xl"
  @click="handleButtonClicked"
  ></q-btn>
<q-input
  v-model="name"
  label="name"
  outlined
  color="green"
  ></q-input>
  </q-page>
</template>

<script>



export default  ( {
  name: 'PageIndex',
  methods: {
    handleButtonClicked() {
      this.$q.notify({
        message:'Quasar will blow your mind!',
        color:'green',
        position:'bottom-left'
      })
    }
  },

  data() {
    return {
      name:''
    }
  }
})

</script>
