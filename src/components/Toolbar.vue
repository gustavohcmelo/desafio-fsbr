<template>
  <div>
    <v-system-bar dark color="primary" height="50">
      <v-img max-height="55" max-width="55" src="../../src/assets/fsbr_logo.svg"></v-img>
      <v-spacer id='title'>
        <h1>{{ title }}</h1>
      </v-spacer>
      <v-avatar  color="red" size="35">
         <span class="white--text text-h6">GM</span>
      </v-avatar>
    </v-system-bar>
    <div class="text-center">
      <h1 class="text--secondary">Gustavo Melo</h1>
    </div>
  </div>
</template>

<script>

export default {
    name: 'Toolbar',
    props: ['title'],
    image:'',
}
</script>

<style>
#title{
  text-align:center !important;
}
</style>