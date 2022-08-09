<template>
    <div class="bookcase-view">
        <SelectBar class="left-bar hidden-scrollbar" topNav="书柜文件夹" :navList="navList"></SelectBar>
        <div class="right-content">
            <div class="filter-wrapper">
                <div class="read-button button-wrapper">
                    <i class="iconfont icon-read"></i>
                </div>
                <div class="hot-button button-wrapper selected">
                    <i class="iconfont icon-hot"></i>
                </div>
                <div class="like-button button-wrapper">
                    <i class="iconfont icon-like"></i>
                </div>
                <div class="filter-button button-wrapper selected">
                    <i class="iconfont icon-up"></i>
                </div>
            </div>
            <div class="book-wrapper">
                <div class="book-item" v-for="(item, index) in bookList" :key="index">
                    <BookCard :bookInfo="item"></BookCard>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import BookCard from '@/components/BookCard.vue';
    import SelectBar from '@/components/Navbar/SelectNavbar.vue';

    import { Vue, Component, Watch } from 'vue-property-decorator';

    @Component({
        components: {
            BookCard,
            SelectBar
        }
    })
    export default class Bookcase extends Vue {
        bookList: any = [
            { name: '星汉灿烂', author: '小猪佩奇', desc: '这是一段介绍文字这是一段介绍文字这是一段介绍文字这是一段介绍文字这是一段介绍文字' },
            { name: '星汉灿烂', author: '小猪佩奇', desc: '这是一段介绍文字这是一段介绍文字这是一段介绍文字这是一段介绍文字这是一段介绍文字' },
            { name: '我和我的祖国', author: '小猪佩奇', desc: '这是一段介绍文字这是一段介绍文字这是一段介绍文字这是一段介绍文字这是一段介绍文字' },
            { name: '我和我的祖国', author: '小猪佩奇', desc: '这是一段介绍文字这是一段介绍文字这是一段介绍文字这是一段介绍文字这是一段介绍文字' },
            { name: '阳光下的一粒坚强的尘埃', author: '无名', desc: '这是一段介绍文字这是一段介绍文字这是一段介绍文字这是一段介绍文字这是一段介绍文字' },
            { name: '阳光下的一粒坚强的尘埃', author: '无名', desc: '这是一段介绍文字这是一段介绍文字这是一段介绍文字这是一段介绍文字这是一段介绍文字' },
            { name: '阳光下的一粒坚强的尘埃', author: '无名', desc: '这是一段介绍文字这是一段介绍文字这是一段介绍文字这是一段介绍文字这是一段介绍文字' },
            { name: '阳光下的一粒坚强的尘埃', author: '无名', desc: '这是一段介绍文字这是一段介绍文字这是一段介绍文字这是一段介绍文字这是一段介绍文字' }
        ];
        navList = [
            { id: 2, name: '推荐', number: '3', createDate: '2022/04/23' },
            { id: 4, name: '文学相关', number: '4', createDate: '2022/04/23' },
            { id: 6, name: '学习相关', number: '5', createDate: '2022/04/23' },
            { id: 7, name: '科普读物', number: '6', createDate: '2022/02/28' },
            { id: 11, name: '诗歌', number: '7', createDate: '2021/05/07' }
        ]
    }
</script>

<style lang="less" scoped>
    .bookcase-view {
        display: flex;
        width: 100%;
        height: 100%;

        .left-bar {
            height: calc(100% - 30px);
        }
        
        .right-content {
            margin-left: 30px;
            width: calc(100% - 250px);

            .filter-wrapper {
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 48px;
                margin: 0 30px 20px 0;

                .button-wrapper {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 36px;
                    height: 36px;
                    border-radius: 10px;
                    margin-right: 10px;
                    background: #FFFFFF;
                    border: 1px solid transparent;
                    cursor: pointer;

                    .iconfont {
                        color: #0B172A;
                    }

                    &:hover,
                    &.selected {
                        border-color: var(--mainColor);
                        .iconfont {
                            color: var(--mainColor);
                        }
                    }

                    &:last-child {
                        margin-right: 0;
                    }
                }
            }

            .book-wrapper {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                width: 100%;
                height: calc(100% - 58px);
                padding: 0 30px 30px 0;
                overflow: auto;

                .book-item {
                    width: 32%;
                    margin-bottom: 20px;
                }
            }
        }
    }
</style>