<template>
    <div class="lightbox" v-if="image" @click="close">
        <transition :name="transition">
            <lightbox-image :image="image" :key="image"></lightbox-image>
        </transition>

        <div class="lightbox__close" @click="close"></div>
        <div class="lightbox__btn lightbox__prev" @click.stop.prevent="prev"></div>
        <div class="lightbox__btn lightbox__next" @click.stop.prevent="next"></div>
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
                state: store.state,
                direction: 'next'
            }
        },
        computed: {
            image () {
                if (this.state.index !== false) {
                    return this.state.images[this.state.index]
                }
            },
            transition () {
                return `lightbox-${this.direction}`
            }
        },
        methods: {
            close () {
                store.close()
            },
            prev () {
                this.direction = 'prev'
                store.prev()
            },
            next () {
                this.direction = 'next'
                store.next()
            }
        }
    }
</script>

<style lang="scss" src="./lightbox.scss"></style>