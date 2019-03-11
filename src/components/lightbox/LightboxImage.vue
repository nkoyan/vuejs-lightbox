<template>
    <div>
        <div v-if="image" class="lightbox__loading"></div>
        <img @click.stop :src="src" alt="" :style="style" class="lightbox__image">
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
            }
        },
        mounted () {
            let image = new Image()
            image.onload = () => {
                this.loading = false
                this.src = this.image
                this.resizeImage(image)
            }
            image.src = this.image
            window.addEventListener('resize', () => this.resizeImage(image))
        }
    }
</script>

<style scoped>

</style>