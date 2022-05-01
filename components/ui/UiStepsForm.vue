<template>
  <form class="ui-form" @submit.prevent>
    <header class="ui-form__header" v-if="steps">
      <nav>
        <ol>
          <a v-for="(step, index) in steps" :key="index" :href="step.hash" :class="index == (progression - 1) ? 'active' : ''"><li>{{ step.text }}</li></a>
        </ol>
      </nav>
      <div class="ui-form__progress" :style="progressStyle"></div>
    </header>
    <div class="ui-form__content">
      <slot />
    </div>
    <div class="ui-form__footer">
      <UiButton
        v-if="progression > 1"
        :to="steps[progression - 2].hash"
        secondary
        native
        :icon="{ name: 'chevron_left' }"
      />
      <UiButton
        v-if="progression != steps.length"
        :to="steps[progression].hash"
        label="Suivant"
        :disabled="btnNextDisabled"
        native
      />
      <div v-else @click="$emit('submit')">
        <UiButton
          label="Valider"
          :disabled="btnNextDisabled"
          native
        />
      </div>
    </div>
  </form>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  props: {
    steps: {
      type: Array,
      required: true,
    },
    progression: {
      type: Number,
      required: true,
    },
    progressionMax: {
      type: Number,
      required: true,
    },
    btnNextDisabled: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      progressStyle: {},
    };
  },
  methods: {
    progress() {
      this.progressStyle = {
        "--width": `calc(100% / ${this.progressionMax / this.progression})`,
      };
    },
  },
  mounted() {
    this.progress();
  },
  watch: {
    progression: function () {
      this.progress();
    },
  },
});
</script>

<style lang="scss" scoped>
.ui-form {
  &__progress {
    width: 100%;
    position: relative;
    &:before {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      width: 100%;
      height: 2px;
      background-color: $gray;
    }
    &:after {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      width: var(--width);
      height: 7px;
      background-color: $r-primary;
      transition: 200ms ease-in-out;
    }
  }
  &__header {
    ol {
      @include d-flex-center;
      a {
        width: 33.3%;
        @include d-flex-center;
        @include font-size(14);
        font-weight: $semi-bold-font-weight;
        padding: 15px 0;
        &:focus,
        &:hover {
          background-color: $r-secondary;
          box-shadow: none;
        }
        &.active {
          li {
            color: $r-primary;
          }
        }
      }
    }
  }
  &__footer {
    display: flex;
    justify-content: flex-end;
    .ui-button {
      margin-left: 1rem;
    }
  }
}
</style>