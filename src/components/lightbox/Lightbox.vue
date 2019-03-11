<template>
    <div class="lightbox" v-if="image" @click="close">
        <lightbox-image :image="image"></lightbox-image>
    </div>
</template>

<script>
    import './LightboxDirective'
    import store from './LightboxStore'
    import LightboxImage from './LightboxImage'

    export default {
        components: { LightboxImage },
        data () {
            return {
                state: store.state
            }
        },
        computed: {
            image () {
                if (this.state.index !== false) {
                    return this.state.images[this.state.index]
                }
            }
        },
        methods: {
            close () {
                store.close()
            }
        }
    }
</script>

<style lang="scss" src="./lightbox.scss"></style>