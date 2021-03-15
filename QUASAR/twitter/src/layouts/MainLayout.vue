<template>
  <q-layout view="lhr lpR fFf">

    <q-header bordered class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>

         <span class="gt-sm"> {{$route.name}}</span>
        </q-toolbar-title class='text-weight-bold'>


      </q-toolbar>
    </q-header>
<q-drawer
  show-if-above
  v-model="left"
  side="left"
  :width="283"
  bordered>
   <q-icon
        name="fas fa-dove"
       size="lg"
       color="primary"
       class="q-pa-md" />
<q-list
  bordered>
  <q-item
  to="/"
  clickable
  exact
  v-ripple>
        <q-item-section avatar>
       <q-icon
            color="primary"
            name="home"
            size="md" />
        </q-item-section>

        <q-item-section class="text-h6 text-weight-bold">Home</q-item-section>
      </q-item>
        <q-item
  to="/about"
  clickable
  exact
  v-ripple>
        <q-item-section avatar>
       <q-icon
            color="primary"
            name="help"
            size="md" />
        </q-item-section>

        <q-item-section class="text-h6 text-weight-bold">Home</q-item-section>
      </q-item>

    </q-list>
    </q-drawer>

<q-drawer
  show-if-above
  v-model="right"
  side="right"
  bordered>
  <!--
  drawer
  content
  -->
  <q-input
  class="q-pa-md"
  placeholder="Search Qwitter"
  outlined
  rounded
  dense
  v-model="text">


        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>
        <q-list separator bordered padding>
      <q-item class="q-pa-md">
        <q-item-section>
          <q-item-label class="text-grey" overline>Education</q-item-label>
          <q-item-label class="text-weight-bold">Yep bro</q-item-label>
          <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>5 min ago</q-item-label>
        </q-item-section>
      </q-item>


      <q-item class="q-pa-md">
        <q-item-section>
          <q-item-label class="text-grey" overline>Education</q-item-label>
          <q-item-label class="text-weight-bold">Yep bro</q-item-label>
          <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>5 min ago</q-item-label>
        </q-item-section>
      </q-item>


      <q-item class="q-pa-md">
        <q-item-section>
          <q-item-label class="text-grey" overline>Education</q-item-label>
          <q-item-label class="text-weight-bold">Yep bro</q-item-label>
          <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>5 min ago</q-item-label>
        </q-item-section>
      </q-item>


      <q-item class="q-pa-md">
        <q-item-section>
          <q-item-label class="text-grey" overline>Education</q-item-label>
          <q-item-label class="text-weight-bold">Yep bro</q-item-label>
          <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>5 min ago</q-item-label>
        </q-item-section>
      </q-item>



      <q-item class="q-pa-md">
        <q-item-section>
          <q-item-label class="text-grey" overline>Education</q-item-label>
          <q-item-label class="text-weight-bold">Yep bro</q-item-label>
          <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>5 min ago</q-item-label>
        </q-item-section>
      </q-item>

        </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      left: false,
      right: false
    }
  }
}
</script>
