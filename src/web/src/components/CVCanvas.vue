<template>
    <div>
        <h1>CV Canvas</h1>
        <div v-if="loading">Loading...</div>
        <div v-else>
            <ul>
                <li v-for="cv in cvs" :key="cv.id">
                    {{ cv.title }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import { useQuery } from '@apollo/client';
import { CVLists } from '@/graphql/queries';

export default {
    name: 'CVCanvas',
    setup() {
        const { loading, error, data } = useQuery(CVLists);

        const cvs = ref([]);

        if (data) {
            cvs.value = data.cvLists;
        }

        return {
            loading,
            cvs,
        };
    },
};
</script>

<style scoped>
/* Add your component styles here */
</style>