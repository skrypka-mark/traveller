<template>
    <button :class='$style.btn'>
        <slot />
    </button>
</template>

<style lang='scss' module>
.btn {
    max-width: 300px;
    height: 70px;

    border: none;
    outline: none;

    background-color: #33363D;
    padding-inline: 45px;
    border-radius: 5px;
    transition: background-color .2s ease-in-out;

    font-family: 'Montserrat-Bold';
    font-size: 20px;
    font-weight: 700;
    color: white;

    &:hover {
        cursor: pointer;
        background-color: #26272C;
    }
}
</style>
