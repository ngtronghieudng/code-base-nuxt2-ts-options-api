<template>
  <v-dialog
    v-model="bindingData"
    content-class="the-dialog"
    v-bind="$attrs"
    :max-width="$attrs['max-width'] || '920'"
    scrollable
    eager
    v-on="$listeners"
  >
    <v-card class="the-dialog__main" elevation="0">
      <v-card-title
        v-if="!hiddenTitle"
        :class="{ lg: isLarge, justify: isJustify }"
        >{{ title }}</v-card-title
      >
      <v-card-title
        v-if="hiddenTitle"
        :class="{ lg: isLarge, justify: isJustify }"
        >{{ title }}
        <p class="tw-pl-3 tw-font-normal tw-text-sm tw-text-primary">
          {{ label }}
        </p></v-card-title
      >
      <v-card-text ref="dialogBody">
        <slot />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TheDialog',

  props: {
    title: {
      type: String,
      required: false,
      default: () => '',
    },

    value: {
      type: [String, Number, Boolean],
      required: false,
      default: () => '',
    },

    label: {
      type: String,
      required: false,
      default: () => '',
    },

    hiddenTitle: Boolean,
    isLarge: Boolean,
    isJustify: Boolean,
  },

  computed: {
    bindingData: {
      get(): string | number | boolean {
        return this.value
      },

      set(val: string | number | boolean) {
        this.$emit('input', val)
      },
    },
  },
})
</script>

<style lang="scss">
@import '@/assets/styles/components/the-dialog.scss';
</style>
