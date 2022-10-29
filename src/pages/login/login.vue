<template>
  <div id="login-container">
    <LoginFrom />
  </div>
</template>

<script lang="ts" setup>
import LoginFrom from './form.vue';
</script>

<style lang="scss" scoped>
#login-container {
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
