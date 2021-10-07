<template>
  <div class="main">
        <v-col class="group-search" cols="12">
            <v-text-field cols="8" label="Buscar pelo CPF" v-model="form.cpf" maxlength="11" counter="11" outlined clearable></v-text-field>
            <v-btn cols="2" color="success" x-large @click="search">
                Buscar
            </v-btn>
        </v-col>
        <v-form ref="form" lazy-validation>
        <v-col class="d-flex" cols="12" sm="12" v-model="form.estado">
            <v-select label="Estado" v-model="form.estado" :items="items" outlined disabled></v-select>
        </v-col>
        <v-col cols="12">
            <v-text-field label="Nome" v-model="form.nome" outlined clearable disabled></v-text-field>
        </v-col>
        <v-col cols="12">
            <v-text-field label="CPF" v-model="form.cpf" maxlength="11" counter="11" outlined clearable disabled></v-text-field>
        </v-col>
        <v-col cols="12">
            <v-text-field label="Cidade" v-model="form.cidade" outlined clearable disabled></v-text-field>
        </v-col>
        <v-col>
            <v-alert dense outlined type="error" :value="alert">
                {{ error }}
            </v-alert>
        </v-col>
        <div class="btn-group">
            <v-btn color="error" @click="$router.push('/')">
                Voltar
            </v-btn>
        </div>
    </v-form>
  </div>
</template>

<script>
var form = {
    'estado':   '',
    'nome':     '',
    'cpf':      '',
    'cidade':   '',
    'id':       ''
}
export default {
    name:'Form-Consult',
    data:() => ({
        alert: false,
        form: form,
        items: [],
        error:'',
    }),
    mounted(){
        this.$http.get('http://desafiodev.fsbr.com.br/api/estados?id=0&estado')
        .then((response) => {
            let states = JSON.parse(JSON.stringify(response.data))
            states.forEach((item) => {
                this.items.push({
                    'value':item.id,
                    'text': item.estado
                })
            })
        })
        .catch((response) => {
            this.message = response
            this.$swal("Falha", "Não foi possível carregar a lista de estados, tentar novamente.!", "error");
        })
    },
    methods:{
        send(){
            this.$http.delete('http://desafiodev.fsbr.com.br/api/cadastramentos/' + form.id)
            .then((response) => {
                this.message = response
                this.$swal("Falha", "Dados não localizado, tente novamente.!", "error");
                this.form = []
            })
            .catch((response) => {
                this.message = response
                this.$swal("Falha", "Dados não localizado, tente novamente.!", "error");
                this.form.cpf = []
            })
        },
        search(){
            this.$http.get('http://desafiodev.fsbr.com.br/api/cadastramentos/', {params: { cpf: form.cpf }})
            .then((response) => {
                let items = JSON.parse(JSON.stringify(this.items))
                items.forEach((item) => {
                    if(item.value == response.data[0].estado){
                        this.form.estado = {
                            'value': item.value,
                            'text': item.text
                        }
                    }
                })

                form.cidade = response.data[0].cidade
                form.nome = response.data[0].nome
                form.cpf = response.data[0].cpf
                form.id = response.data[0].id
            })
            .catch((response) => {
                this.message = response
                this.$swal("Falha", "Dados não localizado, tente novamente.!", "error");
                this.form.cpf = ''
            })
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
    margin: 0 auto;
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