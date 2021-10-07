<template>
    <v-app>
        <Toolbar title="Alteração"/>
        <FormUpdate />
    </v-app>
</template>

<script>
import Toolbar from '@/components/Toolbar'
import FormUpdate from '@/components/Form-Update'

export default {
    name: 'Update',
    components: {
        Toolbar,
        FormUpdate
    }
}
</script>

<style>

</style>