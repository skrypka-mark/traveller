<template>
    <div :class='$style.dackdrop' />
</template>

<style lang='scss' module>
.dackdrop {
    position: fixed;
    inset: 0;

    background: rgba(0, 0, 0, .2);
    backdrop-filter: blur(10px);
}
</style>
