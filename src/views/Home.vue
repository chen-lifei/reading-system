<template>
    <div class="home-wrapper">
        <div class="top-wrapper">
            <div class="sentence">Good Evening, yanyanhuahua! It is time to have a rest.</div>
            <div class="calendar-wrapper">
                <i class="iconfont icon-calendar"></i>
                <span class="time">{{ date }}</span>
            </div>
        </div>
        <div class="recommend-wrapper">
            <div class="name-wrapper">
                <div class="name">每日推荐</div>
                <div class="change-page">
                    <div class="left" @click="prePage()">
                        <i class="iconfont icon-arrowRight"></i>
                    </div>
                    <div class="right" @click="nextPage()">
                        <i class="iconfont icon-arrowRight"></i>
                    </div>
                </div>
            </div>
            <div class="book-wrapper">
                <div class="book-item" v-for="(item, index) in currentBookList" :key="index">
                    <div class="book">
                        <img src="@/assets/image/bookCover.png" alt=""/>
                        <div class="bottom">
                            <div class="author">作者：{{ item.author }}</div>
                            <div class="name">{{ item.name }}</div>
                            <div class="desc">{{ item.desc }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';

    @Component
    export default class Home extends Vue {
        date = '';
        currentPage: number = 1;
        currentBookList: any = [];
        bookList: any = [
            { name: '爱丽丝梦游仙境', author: '小猪佩奇', desc: '这是一段介绍文字这是一段介绍文字这是一段介绍文字这是一段介绍文字这是一段介绍文字' },
            { name: '爱丽丝梦游仙境', author: '小猪佩奇', desc: '这是一段介绍文字这是一段介绍文字这是一段介绍文字这是一段介绍文字这是一段介绍文字' },
            { name: '爱丽丝梦游仙境', author: '小猪佩奇', desc: '这是一段介绍文字这是一段介绍文字这是一段介绍文字这是一段介绍文字这是一段介绍文字' },
            { name: '爱丽丝梦游仙境', author: '小猪佩奇', desc: '这是一段介绍文字这是一段介绍文字这是一段介绍文字这是一段介绍文字这是一段介绍文字' },
            { name: '白雪公主', author: '安徒生', desc: '这是一段介绍文字这是一段介绍文字这是一段介绍文字这是一段介绍文字这是一段介绍文字' },
            { name: '白雪公主', author: '安徒生', desc: '这是一段介绍文字这是一段介绍文字这是一段介绍文字这是一段介绍文字这是一段介绍文字' },
            { name: '白雪公主', author: '安徒生', desc: '这是一段介绍文字这是一段介绍文字这是一段介绍文字这是一段介绍文字这是一段介绍文字' },
            { name: '白雪公主', author: '安徒生', desc: '这是一段介绍文字这是一段介绍文字这是一段介绍文字这是一段介绍文字这是一段介绍文字' },
            { name: '灰姑娘', author: '小猪佩奇', desc: '这是一段介绍文字这是一段介绍文字这是一段介绍文字这是一段介绍文字这是一段介绍文字' },
        ];

        prePage() {}
        
        nextPage() {
            this.currentBookList = this.bookList.slice(4, 8);
        }

        mounted() {
            let date = new Date();
            this.date = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}  ${date.getHours()}: ${date.getMinutes()}`;
            this.currentBookList = this.bookList.slice(0, 4);
        }
    };
</script>

<style lang="less" scoped>
    .home-wrapper {
        .top-wrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;

            .sentence {
                width: 70%;
                color: var(--textColor);
            }

            .calendar-wrapper {
                height: 40px;
                line-height: 40px;
                border-radius: 10px;
                background: #FFFFFF;
                padding: 0 16px;

                .iconfont {
                    margin-right: 6px;
                    font-size: 20px;
                }
            }
        }

        .recommend-wrapper {
            .name-wrapper {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin: 20px 0;
    
                .change-page {
                    .left,
                    .right {
                        display: inline-block;
                        position: relative;
                        width: 20px;
                        height: 20px;
                        border-radius: 50%;
                        background: #FFFFFF;
                        cursor: pointer;

                        .iconfont {
                            position: absolute;
                            top: 3px;
                            left: 4px;
                            font-size: 12px;
                        }
                    }
    
                    .left {
                        margin-right: 8px;

                        .iconfont {
                            top: 4px;
                            left: 3px;
                            transform: rotate(180deg);
                        }
                    }
                }
            }

            .book-wrapper {
                display: flex;
                flex-wrap: nowrap;
                width: 100%;
                overflow: hidden;

                .book-item {
                    display: flex;
                    flex-wrap: wrap;
                    width: 25%;
                    margin-right: 25px;
                    cursor: pointer;

                    .book {
                        position: relative;
                        width: 100%;
                        height: 100%;
                        padding-top: 120%;

                        img {
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                            border-radius: 20px;
                        }

                        .bottom {
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            width: 100%;
                            padding: 5% 8%;
                            border-top-color: transparent;
                            background: #FFFFFF;
                            border-radius: 20px;

                            .author {
                                color: var(--textColor);
                                font-size: 12px;
                            }

                            .name {
                                margin: 8px 0;
                            }

                            .desc {
                                width: 100%;
                                color: var(--textColor);
                                font-size: 14px;
                                text-overflow: ellipsis;
                                overflow: hidden;
                                display: -webkit-box;
                                -webkit-line-clamp: 2;
                                -webkit-box-orient: vertical;
                            }
                        }
                    }

                    &:nth-child(4n) {
                        margin-right: 0;
                    }
                }
            }
        }
    }
</style>
