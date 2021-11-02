<template>
  <h1>{{ msg }}</h1>

  <p>
    See
    <a href="https://element-plus.org" target="_blank">element-plus</a> for more
    information.
  </p>

  <!-- example components -->
  <el-button-group>
    <el-button type="primary" @click="countRef++"
      >count is: {{ countRef }}</el-button
    >
    <el-button type="success" @click="countRef++"
      >count is: {{ countRef }}</el-button
    >
    <el-button type="info" @click="countRef++"
      >count is: {{ countRef }}</el-button
    >
    <el-button type="warning" @click="countRef++"
      >count is: {{ countRef }}</el-button
    >
    <el-button type="danger" @click="countRef++"
      >count is: {{ countRef }}</el-button
    >
  </el-button-group>

  <br />
  <el-input v-model="inputRef" style="width: 200px; margin: 20px" />

  <br />
  <el-tag>Tag 1</el-tag>

  <br />
  <el-date-picker v-model="dateRef" />

  <p>For example, we can custom primary color to 'green'.</p>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test components.
  </p>
  <p>
    Edit
    <code>styles/element/var.scss</code> to test scss variables.
  </p>

  <p>
    Full Example:
    <a
      href="https://github.com/element-plus/element-plus-vite-starter"
      target="_blank"
      >element-plus-vite-starter</a
    >
    | On demand Example:
    <a
      href="https://github.com/element-plus/unplugin-element-plus"
      target="_blank"
      >unplugin-element-plus/examples/vite</a
    >
  </p>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const countRef = ref(0);
const inputRef = ref("element-plus");
const dateRef = ref("");
</script>
