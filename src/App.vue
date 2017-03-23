<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <router-view name="blogroll" entries="entries"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>
