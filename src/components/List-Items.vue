<template>
  <div class="main">
        <v-col cols="12" class="group-search">
            <v-text-field label="Digite o nome" v-model="form.nome" outlined clearable></v-text-field>
            <v-text-field v-model="form.cpf" label="CPF. ex:45300560031" maxlength="11" counter="11" outlined clearable></v-text-field>
            <v-btn color="success" @click="search" x-large>
                Buscar
            </v-btn>
        </v-col>
        <v-data-table :headers="headers" :items="desserts" :items-per-page="5" class="elevation-1"></v-data-table>
        <div class="btn-group">
            <v-btn color="error" class="mr-4" @click="$router.push('/')">
                Voltar
            </v-btn>
            <v-btn color="success" @click="clearData">
                Limpar
            </v-btn>
        </div>
  </div>
</template>

<script>
var form = {
    nome:   '',
    cpf:    ''
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
        form: form
      }
    },
    mounted(){
        this.$http.get('http://desafiodev.fsbr.com.br/api/cadastramentos')
        .then((response) => {
            let data = JSON.parse(JSON.stringify(response.data))
            this.desserts = data
        })
        .catch((response) => {
            this.message = response
            this.$swal("Falha", "Não foi possível carregar a lista de estados, tentar novamente.!", "error");
        })
    },
    methods: {
        search(){
            if(this.form.nome == '' || this.form.cpf == ''){
                this.$swal("Atenção", "Por favor, preencha todos os campos!", "error");
                return false;
            }

            this.$http.get('http://desafiodev.fsbr.com.br/api/cadastramentos/', {params: { cpf: form.cpf, nome: form.nome }})
            .then((response) => {
                let data = JSON.parse(JSON.stringify(response.data))
                if(data == ''){
                    this.message = response
                    this.$swal("Falha", "Dados não localizado, tente novamente.!", "error");
                    this.form = []
                }
                this.desserts = data
            })
            .catch((response) => {
                this.message = response
                this.$swal("Atenção", "Por favor, preencha todos os campos!", "error");
            })
        },
        clearData(){
            this.desserts = []
        }
    }
  }
</script>

<style scoped>
.group-search{
    display: flex;
    column-gap: 10px;
    padding: 20px;
    background-color: #f1f1f1;
    border-radius: 5px;
}
.main{
    width: 50%;
    margin: 10vh auto;
    box-shadow: 1px 1px 3px #bbb;
}
.btn-group{
    text-align: center;
    padding: 10px;
    margin: 50px auto;
}
@media (max-width: 991px){
    .main{
        width: 98%;
        padding: 10px;
        margin: 5px auto;
    }
    .group-search{
        display: grid;
        width: 100%;
    }
    .btn-group .v-btn{
        width: 100%;
        margin-bottom: 10px;
    }
}
</style>