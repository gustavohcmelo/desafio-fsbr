<template>
    <v-app>
        <Toolbar title="Listagem"/>
        <ListItems />
    </v-app>
</template>

<script>
import Toolbar from '@/components/Toolbar'
import ListItems from '@/components/List-Items'

export default {
    name: 'List',
    components: {
        Toolbar,
        ListItems
    }
}
</script>

<style>

</style>