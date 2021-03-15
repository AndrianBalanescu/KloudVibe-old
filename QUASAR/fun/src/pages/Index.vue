<template>
  <q-page class="flex flex-center" v-slot:prepend>>

<q-input v-model="name" label="name" class="q-mr-lg"

>

  <q-icon name="person"/>

</q-input>
<q-btn
  color='red'
  label="Buy Me!!!"
  push
  icon="flag"
  rounded
  @click="$q.notify({
  message:  'yoyooyyo',
  color:'blue',
  position:'center',
  icon:'thumb_up' })"/>
  </q-page>
</template>

<script>

export default {
  name: 'PageIndex'

}
</script>
