<template>
    <div :class='$style.blur' />
</template>

<style module>
.blur {
    position: absolute;
    inset: 0;

    backdrop-filter: blur(5px);
}
</style>
