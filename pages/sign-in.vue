<template>
  <div class="row sign-up">
    <div class="col-5 sign-up__image-wrapper"></div>
    <div class="col-7 sign-up__form-wrapper align-self-center">
      <div class="row justify-content-center">
        <div class="col-5">
          <form class="form">
            <div class="form__wrapper">
              <div class="form__content">
                <h1>Re<br>Bonjour</h1>
                <p>Nouveau ici ? <UiLink text="Créer un compte" to="/sign-up" /></p>
                <UiTextInput type="email" name="email" label="Email" required v-model="form.email.value" placeholder="something@nice.com" @input="checkButtonDisabled" :icon="{ name: 'email', theme: 'outlined' }" />
                <UiTextInput type="password" name="password" label="Mot de passe" required v-model="form.password.value" @input="checkButtonDisabled" :icon="{ name: 'lock' }" />
              </div>
              <div class="form__footer" @click="userLogin">
                <UiButton label="Valider" :disabled="buttonDisabled" />
              </div>
            </div>
          </form>
          <p class="error" v-if="error">{{error}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  layout: "app-fluid",
  data() {
    return {
      buttonDisabled: true,
      form: {
        email: {
          value: "",
          regexp:
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        },
        password: {
          value: "",
        },
      },
      error: ''
    };
  },
  methods: {
    checkButtonDisabled() {
      let valid = true;
      for (const [key, data] of Object.entries(this.form)) {
        if(data) {
          switch (typeof data.value) {
            case 'string':
              if(data.value === "") {
                valid = false;
              }
              if(data.hasOwnProperty('regexp')) {
                let re = new RegExp(data.regexp);
                if(!re.test(data.value)) {
                  valid = false;
                }
              }
              break;
            case 'boolean':
              if(data.value !== data.expected) {
                valid = false;
              }
              break;
          }
        }
      }
      this.buttonDisabled = !valid;
    },
    async userLogin() {
      try {
        await this.$axios.$post(`/api/login`, {'mail': this.form.email.value, 'password': this.form.password.value });
        this.$router.push('/');
      } catch (err) {
        this.error = err?.response?.data?.error;
      }
    }
  },
  mounted() {
    this.checkButtonDisabled();
  }
});
</script>

<style lang="scss" scoped>
.sign-up {
  height: 100vh;
  &__image-wrapper {
    @include background-img('imgs/backH.png');
  }
}
.form {
  &__content {
    margin: 3rem 0;
    h1 {
      @include font-size(40);
      margin-bottom: 1rem;
    }
    p {
      @include font-size(14);
      font-weight: $semi-bold-font-weight;
    }
  }
  &__footer {
    display: flex;
    justify-content: flex-end;
  }
}
</style>