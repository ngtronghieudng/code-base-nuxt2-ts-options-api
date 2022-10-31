<template>
  <v-select
    outlined
    hide-details="auto"
    dense
    v-bind="$attrs"
    solo
    flat
    v-on="$listeners"
  />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TheSelect',
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/components/the-select.scss';
</style>
