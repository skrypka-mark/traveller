<template>
    <button class='btn'>
        <slot />
    </button>
</template>

<style scoped>
.btn {
    max-width: 300px;
    height: 70px;

    border: none;
    outline: none;

    background-color: #33363D;
    padding-inline: 45px;
    border-radius: 5px;

    font-family: 'Montserrat-Bold';
    font-size: 20px;
    font-weight: 700;
    color: white;
}
</style>
