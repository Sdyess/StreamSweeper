<template>
        <a :href="streamData.channel.url"><img :src="streamData.preview.medium"></a>
</template>

<script>
export default {
    name: 'TopStream',
    props: ['streamData'],
}
</script>

<style scoped>

</style>

