<template>
<div>
    <a :href="url">Baidu link<slot write="vue"></slot></a>
    <!-- 具名插槽 -->
    <!-- <slot name="slot1"></slot> -->

    <!-- 插槽作用域 -->
    <slot say="hello"></slot>

    <ul>
        <li v-for="prop in nameList" :key="prop.name"><slot :ab="prop"></slot></li>
    </ul>
</div>
</template>

<script>
export default {
    name: "SlotExample",
    data() {
        return {
            url: "https://baidu.com",
            nameList: {
                1: "Champion",
                2: "Joy"
            }
        }
    }
}
</script>

<style scoped>

</style>