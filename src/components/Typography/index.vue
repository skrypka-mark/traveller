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

<style lang='scss' module src='./styles.module.scss' />
