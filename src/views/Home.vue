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
                    <div class="left">&lt;</div>
                    <div class="right">&gt;</div>
                </div>
            </div>
            <div class="book-wrapper">
                <div class="book" v-for="(item, index) in bookList" :key="index">
                    <img src="@/assets/image/bookCover.png" alt="">
                    <div class="bottom">
                        <div class="author">作者：{{ item.author }}</div>
                        <div class="name">{{ item.name }}</div>
                        <div class="desc">{{ item.desc }}</div>
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
        bookList = [
            { name: '爱丽丝梦游仙境', author: '小猪佩奇', desc: '这是一段介绍文字这是一段介绍文字这是一段介绍文字这是一段介绍文字这是一段介绍文字' },
            { name: '爱丽丝梦游仙境', author: '小猪佩奇', desc: '这是一段介绍文字这是一段介绍文字这是一段介绍文字这是一段介绍文字这是一段介绍文字' },
            { name: '爱丽丝梦游仙境', author: '小猪佩奇', desc: '这是一段介绍文字这是一段介绍文字这是一段介绍文字这是一段介绍文字这是一段介绍文字' },
            { name: '爱丽丝梦游仙境', author: '小猪佩奇', desc: '这是一段介绍文字这是一段介绍文字这是一段介绍文字这是一段介绍文字这是一段介绍文字' }
        ];

        mounted() {
            let date = new Date();
            this.date = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}  ${date.getHours()}: ${date.getMinutes()}`;
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
                color: #818995;
            }

            .calendar-wrapper {
                height: 40px;
                line-height: 40px;
                border-radius: 10px;
                background: #d8e3d9;
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
                        width: 16px;
                        height: 16px;
                        line-height: 16px;
                        font-size: 12px;
                        text-align: center;
                        border-radius: 50%;
                        background: #d8e3d9;
                        cursor: pointer;
                    }
    
                    .left {
                        margin-right: 8px;
                    }
                }
            }

            .book-wrapper {
                display: flex;
                flex-wrap: nowrap;
                width: 100%;
                overflow: hidden;

                .book {
                    display: flex;
                    flex-wrap: wrap;
                    width: 25%;
                    margin-right: 25px;

                    img {
                        width: 100%;
                        height: 240px;
                        object-fit: cover;
                    }

                    .bottom {
                        width: 100%;
                        padding: 8px;
                        border: 1px solid #8cab91;
                        border-top-color: transparent;

                        .author {
                            color: #818995;
                            font-size: 12px;
                        }

                        .name {
                            color: #8cab91;
                            margin: 8px 0;
                        }

                        .desc {
                            width: 100%;
                            color: #818995;
                            font-size: 14px;
                            text-overflow: ellipsis;
                            overflow: hidden;
                            display: -webkit-box;
                            -webkit-line-clamp: 2;
                            -webkit-box-orient: vertical;
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
