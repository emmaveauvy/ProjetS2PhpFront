<template>
  <div class="row sign-up">
    <div class="col-5 sign-up__image-wrapper"></div>
    <div class="col-7 sign-up__form-wrapper align-self-center">
      <div class="row justify-content-center">
        <div class="col-5">
          <UiStepsForm
          class="form"
          @submit.native.prevent="submitForm(form.progression)"
          :steps="steps"
          :progression="progression"
          :progressionMax="3"
          :btnNextDisabled="buttonDisabled"
          >
            <div class="form__wrapper">
              <transition name="slide-fade">
                <div v-if="progression == 1 && show" class="form__content">
                  <h1>Informations</h1>
                  <div class="double">
                    <UiTextInput name="name" label="Name" required v-model="form[0].name.value" @input="checkButtonDisabled" />
                    <UiTextInput name="lastname" label="Last name" required v-model="form[0].lastname.value" @input="checkButtonDisabled" />
                  </div> 
                  <UiTextInput type="email" name="email" label="Email" required v-model="form[0].email.value" placeholder="something@nice.com" @input="checkButtonDisabled" :icon="{ name: 'email', theme: 'outlined' }" />
                  <UiCheckbox name="rgpd" label="Rgpd" required v-model="form[0].rgpd.value" text="Texte sur le rgpd" @input="checkButtonDisabled" />
                </div>
              </transition>
              <transition name="slide-fade">
                <div v-if="progression == 2 && show" class="form__content">
                  <h1>Profile</h1>
                  <UiTextInput name="pseudo" label="Pseudo" required v-model="form[1].pseudo.value"  @input="checkButtonDisabled" />
                  <UiTextInput name="password" label="Password" type="password" required v-model="form[1].password.value"  @input="checkButtonDisabled" :icon="{ name: 'lock', theme: 'outlined' }" />
                </div>
              </transition>
              <transition name="slide-fade">
                <div v-if="progression == 3 && show" class="form__content">
                  <div class="avatar">
                    <UiAvatar name="Wi"/>
                  </div>
                </div>
              </transition>
            </div>
          </UiStepsForm>
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
      steps: [
        {
          hash: '#informations',
          text: 'Informations'
        },
        {
          hash: '#profile',
          text: 'Profile'
        },
        {
          hash: '#validate',
          text: 'Validate'
        }
      ],
      progression: 1,
      show: true,
      buttonDisabled: true,
      form: [
        {
          name: {
            value: ""
          },
          lastname: {
            value: ""
          },
          email: {
            value: "",
            regexp: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          },
          rgpd: {
            value: false,
            expected: true
          }
        },
        {
          pseudo: {
            value: "",
          },
          password: {
            value: "",
          }
        },
        {}
      ]
    }
  },
  methods: {
    updateProgress(watch) {
      for (const [index, step] of this.steps.entries()) {
        if (this.$route.hash === step.hash) {
          if(watch) {
            this.show = false;
            setTimeout(() => {
              this.progression = index + 1;
              this.show = true;
              this.checkButtonDisabled();
            }, 300);
          }else {
            this.progression = index + 1;
            this.checkButtonDisabled();
          }
        }
      }
    },
    checkButtonDisabled() {
      let valid = true;
      const inputs = this.form[this.progression - 1];
      for (const [key, data] of Object.entries(inputs)) {
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
      // console.log(valid);
      this.buttonDisabled = !valid;
    }
  },
  mounted() {
    this.updateProgress(false);
  },
  watch: {
    $route() {
      this.updateProgress(true);
    }
  }
});
</script>

<style lang="scss" scoped>
.sign-up {
  height: 100vh;
  // &__image-wrapper {
  //   @include background-img('imgs/sign-up.png');
  // }
}
.form {
  &__wrapper {
    height: 325px;
  }
  &__content {
    margin: 3rem 0;
    .double {
      display: flex;
      justify-content: space-between;
      >div {
        width: 45%;
      }
    }
    .avatar {
      @include d-flex-center;
    }
  }
}
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: 150ms opacity, 300ms transform ease-out;
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}
</style>