<template>
  <q-page padding>
<q-card
  class="q-mb-xl"
  style="max-width:300px">
  <q-card-section><q-input v-model="text"></q-input> </q-card-section>
  </q-card>



     <q-card class="q-mb-xl" style="max-width:300px">
  <q-card-section><q-select v-model="text"></q-select></q-card-section>
    </q-card>

     <q-card class="q-mb-xl" style="max-width:300px">
      <q-card-section><q-file v-model="file"></q-file> Q-input</q-card-section>
    </q-card>

    <!-- content -->
  </q-page>
</template>

<script>
export default {

  data()
  {
    return {
      text:null,
      file:null
    }
  }
  // name: 'PageName',
}
</script>

<style>
</style>
