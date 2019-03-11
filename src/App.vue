<template>
    <div id="app">
        <a
            :href="`https://lorempixel.com/800/600/cats/${n}`"
            v-lightbox
            v-for="n in 9"
            :key="n"
        >
            <img :src="`https://lorempixel.com/150/150/cats/${n}`" alt="">
        </a>
        <lightbox></lightbox>
    </div>
</template>

<script>
    import Lightbox from './components/lightbox/Lightbox'

    export default {
        name: 'app',
        components: { Lightbox }
    }
</script>

<style>
</style>
