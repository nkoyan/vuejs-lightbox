<template>
    <div>
        <div v-if="loading" class="lightbox__loading"></div>

        <transition name="fade">
            <img @click.stop @load="onLoaded" v-show="!loading" :src="src" alt="" :style="style" :key="src" class="lightbox__image">
        </transition>
    </div>
</template>

<script>
    export default {
        props: {
            image: String
        },
        data () {
            return {
                loading: true,
                src: false,
                style: {}
            }
        },
        methods: {
            resizeImage (image) {
                let width = image.width
                let height = image.height
                if (width > window.innerWidth || height > window.innerHeight) {
                    let ratio = width / height
                    let windowRatio = window.innerWidth / window.innerHeight
                    if (ratio > windowRatio) {
                        width = window.innerWidth
                        height = width / ratio
                    } else {
                        height = window.innerHeight
                        width = height * ratio
                    }
                }
                this.style = {
                    width: width + 'px',
                    height: height + 'px',
                    top: ((window.innerHeight - height) / 2) + 'px',
                    left: ((window.innerWidth - width) / 2) + 'px'
                }
            },
            onLoaded () {
                this.loading = false
            }
        },
        mounted () {
            let image = new Image()
            image.onload = () => {
                this.src = this.image
                this.resizeImage(image)
                //this.loading = false
            }
            image.src = this.image
            window.addEventListener('resize', () => this.resizeImage(image))
        }
    }
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity 0.3s;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>