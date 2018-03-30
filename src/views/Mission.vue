<template>
  <div>
    The mission id is {{missionID}}
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Mission',
  props: {
    msg: String,
    missionID: String
  }
});
</script>