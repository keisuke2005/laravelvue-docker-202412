<template>
    <div>
        <h1>Welcome to the Sample Page</h1>
        <p>{{ message }}</p>
        <button @click="checkType">Check Type</button>
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
            const value: number = 123; // 型アサーション
            console.log(value); // 正常にログが表示されればTSが動作している
        },
    },
});
</script>



<style scoped>
h1 {
    color: #4CAF50;
    font-size: 24px;
}
p {
    color: #555;
}
</style>
