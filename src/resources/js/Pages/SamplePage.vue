<template>
    <div class="container mt-5">
        <h1 class="text-primary">コンテナ php8.4+nginx/node(vite)/mysql</h1>
        <h1 class="text-primary">アプリケーション Laravel11/Inertia/Vue3/TypeScript/Bootstrap5</h1>
        <button class="btn btn-success" @click="checkType">Click Me</button>
    </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
    name: 'SamplePage',
    props: {
        message: {
            type: String as PropType<string>,
            required: true,
        },
    },
    methods: {
        checkType() {
            const value: number = 1;
            console.log(value);
        },
    },
});
</script>



<style scoped>

</style>
