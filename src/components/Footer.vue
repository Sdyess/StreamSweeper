<template>
    <footer class="footer">
      <div class="container">
        <span>TwitchFlix 2019</span>
        <span style="float:right;"><i class="fab fa-vuejs fa-lg"></i> Built with VueJS</span>
      </div>
    </footer>
</template>

<script>
export default {
  name: 'Footer',
};
</script>

<style scoped>
.footer {
    bottom: 0;
    width: 100%;
    height: 60px;
    line-height: 60px;
    background-color: #392e5c;
    color:white;
    overflow:hidden;
    position:absolute;
  }
</style>
