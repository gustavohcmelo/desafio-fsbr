<template>
    <v-system-bar dark color="primary" height="50">
      <v-img max-height="55" max-width="55" src="../../src/assets/fsbr_logo.svg"></v-img>
      <v-spacer id='title'>
        <h1>{{ title }}</h1>
      </v-spacer>
      <v-avatar color="#fff" size="35"></v-avatar>
    </v-system-bar>
</template>

<script>

export default {
    name: 'Toolbar',
    props: ['title'],
}
</script>

<style>
#title{
  text-align:center !important;
}
</style>