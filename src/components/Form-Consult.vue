<template>
  <div class="main">
        <v-row>
            <v-col cols="10">
                <v-text-field label="Buscar pelo CPF" v-model="form.cpf" maxlength="11" counter="11" outlined clearable></v-text-field>
            </v-col>
            <v-col cols="2">
                <v-btn color="success" x-large @click="search">
                    Buscar
                </v-btn>
            </v-col>
        </v-row>
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
    'estado': '',
    'nome': '',
    'cpf': '',
    'cidade': '',
    'id': ''
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
            console.log(response)
        })
    },
    methods:{
        send(){
            console.log(form)
            this.$http.delete('http://desafiodev.fsbr.com.br/api/cadastramentos/' + form.id)
            .then((response) => {
                console.log(response)
            })
            .catch((response) => {
                this.alert = true
                this.error = response
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
    margin: 0 auto;
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