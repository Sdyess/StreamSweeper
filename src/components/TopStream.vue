<template>
<div class="col-md-4 d-flex align-items-stretch">
        <div class="card " style="width: 18rem;margin:20px;">
            <img class="card-img-top" :src="streamData.preview.medium">
            <h5 class="card-title">{{streamData.channel.display_name}}</h5>
            <p class="card-text">{{streamData.channel.status}}</p>
            <a :href="streamData.channel.url" target="_blank" class="btn btn-primary">Watch Me</a>
        </div>
</div>
</template>

<script>
export default {
  name: 'TopStream',
  props: ['streamData'],
};
</script>

<style scoped>
.btn-primary {
    bottom: 0;
    position: absolute;
    width: 100%;
}

</style>
