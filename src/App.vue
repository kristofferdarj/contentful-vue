<template>
  <div id="app">
    <ul>
      <li><router-link to="/blogroll">Go to Blogroll</router-link></li>
      <li><router-link to="/test">Go to Test</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>
