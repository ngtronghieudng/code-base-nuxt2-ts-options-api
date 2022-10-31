<!-- eslint-disable @intlify/vue-i18n/no-raw-text -->
<template>
  <div
    :class="[
      'tw-mb-0 tw-font-bold tw-text-[#000000DE] tw-text-base tw-tracking-[0.5px]',
      {
        'tw-font-black': isFont,
      },
    ]"
    class=""
  >
    {{ labelText }}{{ required ? $t('common.required2') : '' }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'TheLabel',

  props: {
    isFont: Boolean,
    labelText: {
      type: String,
      default: '',
    },

    required: Boolean,
  },
})
</script>
