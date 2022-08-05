<template>
    <div>
        <div>
            <h1>식물거래 글쓰기</h1>
        </div>
        <div>
            <form>
                <div :class="{'photo_list': true, 'x_scroll': true}">
                    <button :class="{'photo_add': true}" type="button">
                        사진
                        +
                    </button>
                </div>
                <div>글 제목 : 
                    <input type="text" v-model="title">
                </div>
                <div>카네고리 선택
                    <select v-model="category">
                        <option value="">-</option>
                    </select>
                </div>
                <div>가격 : 
                    <input type="number" v-model="price" >
                    네고받기<input type="checkbox" value="nego" v-model="negoYN">
                </div>
                <div>
                    <div>게시글 내용</div>
                    <div> 
                        <textarea cols="30" rows="10" v-model="content"></textarea>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    name: '',
    components: {},
    data() {
        return {
            title: '',
            categoy: '',
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