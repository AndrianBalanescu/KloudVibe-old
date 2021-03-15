<template>
  <q-page class="flex">

<div>
  
</div>

    <div style="width: 500px; max-width: 90vw;">
      <q-list>
        <q-list-header inset>Articles {{this.profile.name}} </q-list-header>
        <q-item v-for="item in article" :key="item.id">
          <q-item-side icon="book" inverted color="grey-6" />
          <q-item-main>
            <q-item-tile label>{{ item.title }}</q-item-tile>
          </q-item-main>
      </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import gql from 'graphql-tag'
const articles = gql`
 query {
  profiles {
    id
    name
  }
}
  }`
export default {
  data () {
    return {
      name: this.$route.params.name
    }
  },
  name: 'Articles',
  apollo: {
    // Simple query that will update the 'article' vue property
    article: {
      query: articles,
      prefetch: false,
      variables () {
        return { name: this.name }
      }
    }
  },
  watch: {
    '$route.params.name': {
      handler: function (name) {
        if (this.$apollo.queries.article) { this.$apollo.queries.article.refetch({ name: name }) }
      },
      deep: true,
      immediate: true
    }
  }
}
</script>
