<template>
    <v-app>
        <Toolbar title="Consultar"/>
        <FormConsult />
    </v-app>
</template>

<script>
import Toolbar from '@/components/Toolbar'
import FormConsult from '@/components/Form-Consult'

export default {
    name: 'Consult',
    components: {
        Toolbar,
        FormConsult
    }
}
</script>

<style>

</style>