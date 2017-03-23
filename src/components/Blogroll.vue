<template>
    <div class="entries">
        <p>Blogroll</p>
        <div v-for="entry in entries.items">
            <p>hej</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'blogroll',
  props: ['entries'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
