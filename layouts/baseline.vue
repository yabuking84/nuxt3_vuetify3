<template>
  <div class="baseline">
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer">
        <!--  -->
      </v-navigation-drawer>

      <v-app-bar class="baseline-header">
        <v-app-bar-nav-icon
          :icon="'fa-solid fa-bars'"
          @click="drawer = !drawer"
        ></v-app-bar-nav-icon>
        <v-toolbar-title>Application</v-toolbar-title>
      </v-app-bar>

      <v-main class="baseline-main-content">
        <!--  -->
        <slot />
      </v-main>
    </v-app>
  </div>
</template>
<script lang="ts" setup>
const drawer = ref(false);
</script>

<style lang="scss">
.baseline-header {
  width: 100%;
}

.baseline {
  width: 100vw;
  height: 100vh;
  &-main-content {
    width: 100%;
    background-color: $light-color;
  }
}
</style>
