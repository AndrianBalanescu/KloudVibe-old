<template>
  <q-page padding>
    <!-- content -->
    AjaxBar
  <q-ajax-bar color="green" ></q-ajax-bar>

  <q-btn label="FakeReq" @click="fakeAjaxRequest"></q-btn>
    <pre>{{ result }}</pre>
    <p>{{ result }} </p>
  </q-page>
</template>

<script>
import axios from 'axios'
export default {
  methods: {
    fakAjaxRequest () {
      this.$axios.get('http://jsonplaceholder.typicode.com/posts')
        .then(response => {
          this.result = response.data
        })
    }
  },
  data () {
    return {
      result: null
    }
  }
  // name: 'PageName',
}
</script>
