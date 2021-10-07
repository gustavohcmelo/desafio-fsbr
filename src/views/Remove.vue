<template>
    <v-app>
        <Toolbar title="Inclusão"/>
        <FormRemove />
    </v-app>
</template>

<script>
import Toolbar from '@/components/Toolbar'
import FormRemove from '@/components/Form-Remove'
export default {
    name: 'Remove',
    components: {
        Toolbar,
        FormRemove
    }
}
</script>

<style>

</style>