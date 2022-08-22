<script>

import { ref } from 'vue'

export default {
    
    setup () {
        return {
            text: ref(''),
            model: ref(null),
            options: [
                '카테고리1', '카테고리2', '카테고리3', '카테고리4'
            ]
        }

    },
    name: '',
    components: {},
    data() {
        return {
            title: '',
            category: '',
            price: 0,
            content: '',
            negoYN: ''
    }
},
    beforeCreate() {},
    created() {},
    beforeMount() {},
    mounted() {},
    beforeUpdate() {},
    updated() {},
    beforeUnmount() {},
    unmounted() {},
    methods: {}
}

</script>
<template>
    <div class="q-pa-md">
        <div class="text-h4">
            🌱 식물거래 글쓰기
        </div>
        <q-separator style="margin-bottom: 5px;" />
        <div class="q-gutter-md" >
            <form>      
                <div>
                    <q-input v-model="title" label="글제목" />
                </div>
                <div>
                <q-select v-model="category" :options="options" label="카네고리 선택" />
                </div>
                <div>
                    <q-input v-model.number="price" type="number" style=""  label="가격"/>
                    <q-checkbox left-label label="네고받기" type="checkbox" value="nego" v-model="negoYN" />
                </div>
                
                <q-file bottom-slots v-model="photos" label="사진 첨부" counter max-files="10">
                    <template v-slot:before>
                        <q-icon name="folder_open" />
                    </template>

                    <template v-slot:hint>
                        첨부할 사진 선택
                    </template>

                    <template v-slot:append>
                        <q-btn round dense flat icon="add" @click.stop.prevent />
                    </template>
                </q-file>
                <div>
                    <div> 
                        <q-input type="textarea" v-model="content" label="내용" />
                    </div>
                </div>
            </form>
        </div>
    </div>
        
</template>
<style scoped>
.photo_list{
    height: 150px;
    width: 80%;
}
.x_scroll{
    overflow-x: scroll;
}
.photo_add{
    border: 1px solid black;
    text-align: center;
    padding: 20px;
    height: 130px;
    width: 150px;
}
</style>