<template>
    <div>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: "demo"
};
</script>
<style scoped>
div {
    width: 100px;
    border: 1px solid #41a259;
    background-color: #41a259;
    display: inline-block;
    border-radius: 2px;
    height: 14px;
    line-height: 14px;
    color: #fff;
    padding: 10px 19px;
    cursor: pointer;
    white-space: nowrap;
}
</style>