<template>
  <div class="main">
      <v-form ref="form" lazy-validation>
        <v-col class="d-flex" cols="12" sm="12" v-model="form.estado">
            <v-select label="Estado" v-model="form.estado" :rules="rules.estado" :items="items" outlined></v-select>
        </v-col>
        <v-col cols="12">
            <v-text-field label="Nome" v-model="form.nome" :rules="rules.nome" maxlength="100" counter="100" outlined clearable></v-text-field>
        </v-col>
        <v-col cols="12">
            <v-text-field label="CPF" v-model="form.cpf" :rules="rules.cpf" maxlength="11" counter="11" outlined clearable></v-text-field>
        </v-col>
        <v-col cols="12">
            <v-text-field label="Cidade" v-model="form.cidade"  :rules="rules.cidade" maxlength="50" counter="50"  outlined clearable></v-text-field>
        </v-col>
        <v-col>
            <v-alert dense outlined type="error" :value="alert">
                {{ error }}
            </v-alert>
        </v-col>
        <div class="btn-group">
            <v-btn color="error" class="mr-4" @click="$router.push('/')">
                Voltar
            </v-btn>
            <v-btn color="success" @click="send">
                Salvar
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
    'cidade': ''
}
export default {
    name:'Form-Register',
    data:() => ({
        alert: false,
        form: form,
        items: [],
        error:'',
        rules: {
          nome: ['Este campo é obrigatório'],
          cidade: ['Este campo é obrigatório'],
          estado: ['Este campo é obrigatório'],
          cpf: ['Este campo é obrigatório'],
        }
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
            this.$http.post('http://desafiodev.fsbr.com.br/api/cadastramentos', form)
            .then((response) => {
                console.log(response)
            })
            .catch((response) => {
                this.alert = true
                this.error = response
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
    }
    .btn-group .v-btn{
        width: 100%;
        margin-bottom: 10px;
    }
}
</style>