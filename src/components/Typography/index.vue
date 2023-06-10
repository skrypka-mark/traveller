<script setup lang='ts'>
type VariantMapping = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    body: 'p',
    button: 'span',
    caption: 'span'
};
type Variant = keyof VariantMapping;

interface TypographyProps {
    variant: Variant;
}

const props = defineProps<TypographyProps>();

const variantMapping: Readonly<VariantMapping> = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    body: 'p',
    button: 'span',
    caption: 'span'
};

const Component = variantMapping[props.variant] ?? 'span';
</script>

<template>
    <component :is=Component :class='{ [$style[variant]]: !!variant }'>
        <slot />
    </component>
</template>

<style lang='scss' module>
.h1 {
    font-family: 'Montserrat-Medium';
    font-weight: 500;
    font-size: 180px;
    line-height: 219px;
    letter-spacing: 0.05em;
}
.h2 {
    font-family: 'Montserrat-Bold';
    font-size: 40px;
    line-height: 49px;
    letter-spacing: 0.05em;
}
.h3 {
    font-family: 'Montserrat-ExtraBold';
    font-size: 32px;
    line-height: 39px;
}
.h4 {
    font-family: 'Montserrat-ExtraBold';
    font-size: 22px;
    line-height: 27px;
}
.h5 {
    font-family: 'Montserrat-ExtraBold';
    font-size: 16px;
    line-height: 20px;
}
.p {
    font-family: 'Montserrat-Regular';
    font-size: 16px;
    line-height: 150%;
    letter-spacing: 0.05em;
}
.button {
    font-family: 'Montserrat-Bold';
    font-size: 20px;
    line-height: 160%;
}
.label {
    font-family: 'Montserrat-ExtraBold';
    font-size: 24px;
    line-height: 29px;
    text-transform: uppercase;
}
</style>
