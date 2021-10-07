<template>
  <div class="main">
        <v-row>
            <v-col cols="5">
                <v-text-field :rules="rules.nome" label="Digite o nome" v-model="form.nome" outlined clearable></v-text-field>
            </v-col>
            <v-col cols="5">
                <v-text-field :rules="rules.cpf" v-model="form.cpf" label="CPF: exemplo 45300560031" maxlength="11" counter="11" outlined clearable></v-text-field>
            </v-col>
            <v-col cols="2">
                <v-btn color="success" @click="search" x-large>
                    Buscar
                </v-btn>
            </v-col>
        </v-row>
        <v-data-table
            :headers="headers"
            :items="desserts"
            :items-per-page="5"
            class="elevation-1"
        ></v-data-table>

        <div class="btn-group">
            <v-btn color="error" class="mr-4" @click="$router.push('/')">
                Voltar
            </v-btn>
            <v-btn color="success">
                Limpar
            </v-btn>
        </div>
  </div>
</template>

<script>
var form = {
    nome: '',
    cpf: ''
}
  export default {
    data () {
      return {
        headers: [
          { text: 'ID', value: 'id' },
          { text: 'Nome', value: 'nome' },
          { text: 'CPF', value: 'cpf' },
          { text: 'Cidade', value: 'cidade' },
        ],
        desserts: [],
        form: form,
        rules: {
          nome: [val => (val || '').length > 0 || 'Este campo é obrigatório'],
          cpf: [val => val == 11 || 'Este campo é obrigatório'],
        }
      }
    },
    mounted(){
        this.$http.get('http://desafiodev.fsbr.com.br/api/cadastramentos')
        .then((response) => {
            let data = JSON.parse(JSON.stringify(response.data))
            this.desserts = data
        })
        .catch((response) => {
            console.log(response)
        })
    },
    methods: {
        search(){
            this.$http.get('http://desafiodev.fsbr.com.br/api/cadastramentos/', {params: { cpf: form.cpf, nome: form.nome }})
            .then((response) => {
                let data = JSON.parse(JSON.stringify(response.data))
                this.desserts = data
            })
            .catch((response) => {
                console.log(response)
            })
        }
    }
  }
</script>

<style scoped>
.main{
    width: 50%;
    margin: 10vh auto;
}
.btn-group{
    text-align: center;
    padding: 10px;
    margin: 50px auto;
}
@media (max-width: 991px){
    .main{
        width: 100%;
        padding: 10px;
    }
    .btn-group .v-btn{
        width: 100%;
        margin-bottom: 10px;
    }
}
</style>