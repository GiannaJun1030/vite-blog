<template>
  <div id="login-from">
    <el-form :model="form" label-width="120px">
      <el-form-item label="Activity name">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="Activity zone">
        <el-select
          v-model="form.password"
          placeholder="please select your zone">
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
const form = reactive({
  name: '',
  password: '',
});
</script>

<style lang="scss" scoped>
#login-from {
  width: 300px;
  height: 300px;
  box-shadow: var(--el-box-shadow-light);
}
</style>
