<template>
  <div class="main">
        <v-row  class="buttons-central">
            <div class="btn-group">
                <v-btn @click="$router.push('register')" class="ma-2" outlined large fab color="indigo">
                    <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <h5>INCLUIR</h5>
            </div>

            <div class="btn-group">
                <v-btn class="ma-2" outlined large fab color="indigo">
                    <v-icon>mdi-archive-refresh</v-icon>
                </v-btn>
                <h5>ALTERAR</h5>
            </div>

            <div class="btn-group">
                <v-btn class="ma-2" outlined large fab color="indigo">
                    <v-icon>mdi-delete</v-icon>
                </v-btn>
                <h5>EXCLUIR</h5>
            </div>
        </v-row>
        <v-row  class="buttons-central">
            <div class="btn-group">
                <v-btn class="ma-2" outlined large fab color="indigo">
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>
                <h5>CONSULTAR</h5>
            </div>

            <div class="btn-group">
                <v-btn class="ma-2" outlined large fab color="indigo">
                    <v-icon>mdi-format-list-bulleted-square</v-icon>
                </v-btn>
                <h5>LISTAR</h5>
            </div>  
        </v-row>
        <v-row  class="buttons-central last-child">
            <div class="btn-group">
                <v-btn color="error" dark large> Sair </v-btn>
            </div>
        </v-row>
  </div>
</template>

<script>
export default {
    name: 'Control-Painel'

}
</script>

<style>
.main{
    width: 90%;
    margin: 10vh auto;
}
.buttons-central{
    display: flex;
    justify-content: center;
    column-gap: 10%;
    margin-bottom: 50px;
}
.btn-group h5{
    text-align: center;
    color: #3f51b5;
}
.last-child{
    margin-top: 100px !important;
}
</style>