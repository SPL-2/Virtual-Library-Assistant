<template>
  <div id="app" v-if="!loadingInit">
    <transition mode="out-in" name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'app',

  methods: {
    ...mapActions({
      doInit: 'auth/doInit',
      resize: 'layout/resize',
    }),

    handleResize() {
      this.resize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    },
  },

  computed: {
    ...mapGetters({
      loadingInit: 'auth/loadingInit',
    }),
  },
};
</script>


<style>

</style>