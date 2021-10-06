<template>
    <v-app>
        <Toolbar title="Inclusão"/>
        <FormRegister />
    </v-app>
</template>

<script>
import Toolbar from '@/components/Toolbar'
import FormRegister from '@/components/Form-Register'

export default {
    name: 'Register',
    components: {
        Toolbar,
        FormRegister
    }
}
</script>

<style>

</style>