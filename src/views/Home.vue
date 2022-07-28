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
                        <img src="@/assets/image/bookCover.png" :alt="item.name"/>
                        <div class="bottom">
                            <div class="author">作者：{{ item.author }}</div>
                            <div class="name">{{ item.name }}</div>
                            <div class="desc">{{ item.desc }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="hot-wrapper">
            <div class="name-wrapper">
                <div class="name">最热推荐</div>
                <div class="more">
                    <span>查看全部</span>
                    <i class="iconfont icon-arrowRight"></i>
                </div>
            </div>
            <div class="book-wrapper">
                <div class="book" v-for="(item, index) in bookList" :key="index">
                    <img src="@/assets/image/bookCover2.png" :alt="item.name">
                    <div class="info-wrapper">
                        <div class="author">作者：{{ item.author }}</div>
                        <div class="name">{{ item.name }}</div>
                        <div class="desc">{{ item.desc }}</div>
                    </div>
                    <div class="line"></div>
                    <div class="data-wrapper">
                        <div class="name">作品数据</div>
                        <div class="read-wrapper">
                            <div class="label">阅读数</div>
                            <div class="number">66</div>
                        </div>
                        <div class="favorite-wrapper">
                            <div class="label">收藏数</div>
                            <div class="number">88</div>
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

        .recommend-wrapper,
        .hot-wrapper {
            .name-wrapper {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin: 20px 0;

                .name {
                    font-size: 20px;
                }
            }
        }

        .recommend-wrapper {
            margin-bottom: 40px;
            .name-wrapper {
                .change-page {
                    display: flex;
                    align-items: center;

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
                            display: inline-block;
                            position: absolute;
                            top: 3px;
                            left: 4px;
                            font-size: 12px;
                            transform: scale(0.8);
                        }
                    }
    
                    .left {
                        margin-right: 8px;

                        .iconfont {
                            top: 4px;
                            left: 3px;
                            transform: rotate(180deg) scale(0.8);
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
                        padding-top: 116%;

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

        .hot-wrapper {
            .more {
                cursor: pointer;

                span,
                .iconfont {
                    font-size: 12px;
                    color: var(--textColor);
                }

                .iconfont {
                    display: inline-block;
                    transform: scale(0.8);
                    margin-left: 5px;
                }

                &:hover {
                    span,
                    .iconfont {
                        color: var(--mainColor);
                    }
                }
            }

            .book-wrapper {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;

                .book {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: 48%;
                    height: 128px;
                    padding: 0 2%;
                    margin-bottom: 20px;
                    border-radius: 20px;
                    background: #FFFFFF;
                    cursor: pointer;

                    img {
                        width: 80px;
                        height: 88px;
                        object-fit: cover;
                    }

                    .info-wrapper {
                        width: 58%;
                        .author {
                            font-size: 12px;
                            color: var(--textColor);
                        }

                        .name {
                            margin: 8px 0;
                        }

                        .desc {
                            font-size: 12px;
                            color: var(--textColor);
                            text-overflow: ellipsis;
                            overflow: hidden;
                            display: -webkit-box;
                            -webkit-line-clamp: 2;
                            -webkit-box-orient: vertical;
                        }
                    }

                    .line {
                        width: 1px;
                        height: 100%;
                        background: var(--textColor);
                        opacity: .2;
                    }

                    .data-wrapper {
                        width: auto;
                        max-width: 20%;

                        .name {
                            font-size: 14px;
                            margin-bottom: 14px;
                        }

                        .read-wrapper,
                        .favorite-wrapper {
                            display: inline-block;
                            .label {
                                font-size: 12px;
                                color: var(--textColor);
                                margin-bottom: 5px;
                            }
                            .number {
                                font-size: 14px;
                            }
                        }

                        .read-wrapper {
                            margin-right: 20px;
                        }
                    }
                }
            }
        }
    }
</style>
