<template>
<v-app>
  <Toolbar title="Cadastramento"/>
  <ControlPainel />
</v-app>
</template>

<script>
import Toolbar from '@/components/Toolbar'
import ControlPainel from '@/components/Control-Painel'

export default {
  name: 'App',
  components: {
    Toolbar,
    ControlPainel
  },

  data: () => ({
    title: 'Cadastramento'
  }),
};
</script>

<style scoped>
#title{
  text-align:center !important;
}
</style>