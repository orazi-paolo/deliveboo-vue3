<script>
export default {
    name: "AppLoader",
    data() {
        return {

        };
    },
    components: {

    },
    methods: {

    },
};
</script>

<template>
    <section class="loader-section d-flex align-items-center justify-content-center">
        <span>deliveb</span>
        <div class="loader"></div>
    </section>
</template>

<style lang="scss" scoped>
@use '../style/_variables.scss' as *;

.loader-section {
    height: 500px;
}

.loader-section span {
    font-size: 3.7rem;
    font-weight: 700;
    color: #a3e9e6;
}

// Credits: https://css-loaders.com/wobbling/
/* HTML: <div class="loader"></div> */
.loader {
    position: relative;
    top: 7.2px;
    width: calc(65px - 6px);
    height: 35px;
    border-radius: 50px;
    background:
        radial-gradient(farthest-side, #0000 calc(100% - 11px), #a3e9e6 calc(100% - 14px) 99%, #0000) left,
        radial-gradient(farthest-side, #0000 calc(100% - 11px), #a3e9e6 calc(100% - 14px) 99%, #0000) right;
    background-size: calc(50% + 5px) 100%;
    background-repeat: no-repeat;
    position: relative;
    animation: l10-0 1s infinite linear;
}

.loader:before {
    content: "";
    position: absolute;
    inset: 0;
    margin: auto;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #fff;
    transform-origin: -6px 50%;
    animation: l10-1 0.5s infinite linear;
}

@keyframes l10-0 {

    0%,
    49.99% {
        transform: scaleX(1)
    }

    50%,
    100% {
        transform: scaleX(-1)
    }
}

@keyframes l10-1 {
    100% {
        transform: rotate(1turn)
    }
}
</style>