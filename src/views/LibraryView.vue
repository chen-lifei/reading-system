<template>
    <div class="library-view">
        <SelectBar class="left-bar hidden-scrollbar" :topNav="topNav" :navList="navList"></SelectBar>
        <div class="right-content">
            <div class="filter-wrapper">
                <div class="text">搜素结果：</div>
                <div class="filter-bar">
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
            </div>
            <div class="explain-wrapper">
                根据 <span class="strong">热度</span> <span class="strong">升序</span> 显示
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
    export default class LibraryView extends Vue {
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
        topNav = [
            { key: 'qingchun', name: '青春' },
            { key: 'story', name: '小说' },
            { key: 'wenxue', name: '文学' },
        ];
        navList = [
            { key: 'school', name: '校园', number: '3', clickNumber: 16 },
            { key: 'love', name: '爱情', number: '4', clickNumber: 16 },
            { key: 'panni', name: '叛逆', number: '5', clickNumber: 16 },
            { key: 'xuanyi', name: '悬疑惊悚', number: '6', clickNumber: 6 },
            { key: 'mohuan', name: '魔幻奇幻', number: '7', clickNumber: 10 },

            // { key: 'yanqing', name: '言情', number: '6', clickNumber: 6 },
            // { key: 'modern', name: '现代', number: '6', clickNumber: 6 },
            // { key: 'urban', name: '都市', number: '6', clickNumber: 6 },
            // { key: 'historical', name: '历史', number: '6', clickNumber: 6 },
            // { key: 'classical', name: '古典', number: '6', clickNumber: 6 },
            // { key: 'wuxia', name: '武侠', number: '6', clickNumber: 6 },
            // { key: 'zuopinji', name: '作品集', number: '6', clickNumber: 6 },
            // { key: 'masterpiece', name: '世界名著', number: '6', clickNumber: 6 },
            // { key: 'xuanyi', name: '悬疑推理', number: '6', clickNumber: 6 },
            // { key: 'kongbu', name: '恐怖惊悚', number: '6', clickNumber: 6 },

            // { key: 'wenji', name: '文集', number: '6', clickNumber: 6 },
            // { key: 'jishi', name: '纪实文学', number: '6', clickNumber: 6 },
            // { key: 'poem', name: '古诗词', number: '6', clickNumber: 6 },
            // { key: 'shige', name: '现当代诗歌', number: '6', clickNumber: 6 },
        ]
    }
</script>

<style lang="less" scoped>
    .library-view {
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
                margin-right: 30px;

                .text {
                    position: absolute;
                    left: 0;
                    font-weight: bold;
                }

                .filter-bar {
                    display: flex;

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
            }

            .explain-wrapper {
                height: 40px;
                line-height: 40px;
                border-radius: 12px;
                margin: 15px 30px 20px 0;
                text-align: center;
                background: var(--activeColor);

                .strong {
                    color: var(--mainColor);
                }
            }

            .book-wrapper {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                width: 100%;
                height: calc(100% - 123px);
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