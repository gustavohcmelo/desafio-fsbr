<template>
  <div class="main">
      <v-form
        ref="form"
        lazy-validation
    >
          <v-col
        class="d-flex"
        cols="12"
        sm="12"
        v-model="form.estado"
      >
        <v-select
          label="Estado"
          :items="items"
          outlined
        ></v-select>
      </v-col>

        <v-col
          cols="12"
        >
          <v-text-field
           
            label="Nome"
            v-model="form.nome"
            outlined
            clearable
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
        >
          <v-text-field
           
            label="CPF"
            v-model="form.cpf"
            maxlength="11"
            counter="11"
            outlined
            clearable
          ></v-text-field>
        </v-col>

                <v-col
          cols="12"
        >
          <v-text-field
           
            label="Cidade"
            v-model="form.cidade"
            outlined
            clearable
          ></v-text-field>
        </v-col>

        <div class="btn-group">
            <v-btn
            color="error"
            class="mr-4"
            >
            Voltar
            </v-btn>

            <v-btn
            color="success"
            @click="send"
            >
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
        form: form,
        items: []
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
            this.$http.post('http://desafiodev.fsbr.com.br/api/cadastramentos', form, { crossdomain: true })
            .then((response) => {
                console.log(response)
            })
            .catch((response) => {
                console.log(response)
            })
        }
    }
}
</script>

<style>
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