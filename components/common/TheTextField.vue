<template>
  <div>
    <h4 v-if="labelText" class="tw-mb-0.5 tw-font-bold tw-text-base">
      {{ labelText }}
    </h4>
    <v-text-field
      outlined
      hide-details="auto"
      dense
      v-bind="$attrs"
      v-on="$listeners"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TheTextField',

  props: {
    labelText: {
      type: String,
      default: '',
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/components/the-text-field.scss';
</style>
