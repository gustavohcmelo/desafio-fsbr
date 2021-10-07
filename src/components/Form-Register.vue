<template>
  <div class="main">
      <v-form id="formData" ref="form" lazy-validation>
        <v-col class="d-flex" cols="12" sm="12" v-model="form.estado">
            <v-select label="Estado" v-model="form.estado" :items="items" outlined ></v-select>
        </v-col>
        <v-col cols="12">
            <v-text-field label="Nome" v-model="form.nome" maxlength="100" counter="100" outlined clearable ></v-text-field>
        </v-col>
        <v-col cols="12">
            <v-text-field label="CPF" v-model.number="form.cpf" maxlength="11" counter="11" outlined clearable></v-text-field>
        </v-col>
        <v-col cols="12">
            <v-text-field label="Cidade" v-model="form.cidade" maxlength="50" counter="50"  outlined clearable></v-text-field>
        </v-col>
        <div class="btn-group">
            <v-btn color="error" class="mr-4" @click="$router.push('/');">
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
    'estado':   '',
    'nome':     '',
    'cpf':      '',
    'cidade':   ''
}
export default {
    name:'Form-Register',
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

            let selected = states.shift()
            this.form.estado = {
                'value': selected.id,
                'text': selected.estado
            }
        })
        .catch((response) => {
            this.message = response
            this.$swal("Falha", "Não foi possível carregar a lista de estados, tentar novamente.!", "error");
        })
    },
    methods:{
        send(){
            if(this.form.estado == '' || this.form.nome == '' || this.form.cpf == '' || this.form.cidade == ''){
                this.$swal("Atenção", "Por favor, preencha todos os campos!", "error");
                return false;
            }

            if(this.form.cpf.length < 11){
                this.$swal("Atenção", "O CPF deve conter 11 caracteres!", "error");
                return false;
            }

            form.estado = form.estado.value

            form = {'estado':'','nome':'','cpf':'','cidade':''}
            this.form = {'estado':'','nome':'','cpf':'','cidade':''}
            
            this.$http.post('http://desafiodev.fsbr.com.br/api/cadastramentos', form)
            .then((response) => {
                this.form = {'estado':'','nome':'','cpf':'','cidade':''}
                this.message = response
                this.$swal("Sucesso", "Cadastro Realizado com Sucesso!", "success");
            })
            .catch((response) => {
                this.error = response
                this.$swal("Falha", "}Houve algum problema na inclusão, tentar novamente!", "error");
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