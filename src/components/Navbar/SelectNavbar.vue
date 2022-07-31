<template>
    <div class="select-bar">
        <div class="top-nav">
            <span class="name">分类：</span>
            <span class="select-name">青春</span>
            <i class="iconfont icon-arrowRight"></i>
            <div class="line"></div>
            <div class="top-nav-list">

            </div>
        </div>
        <div class="second-nav">
            <div class="nav-item" v-for="item in currentNav" :key="item.key" :class="{ 'selected': item.key === 'school' }">
                <div class="name">{{ item.name }}</div>
                <div class="desc">
                    <span class="number">数量：{{ item.number }}</span>
                    <span class="click-number">点击量：{{ item.clickNumber }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Watch } from 'vue-property-decorator';

    @Component
    export default class SelectNavbar extends Vue {
        topNavList = [
            {
                key: 'qingchun',
                name: '青春',
                list: [
                    { key: 'school', name: '校园', number: '3', clickNumber: 16 },
                    { key: 'love', name: '爱情', number: '4', clickNumber: 16 },
                    { key: 'panni', name: '叛逆', number: '5', clickNumber: 16 },
                    { key: 'xuanyi', name: '悬疑惊悚', number: '6', clickNumber: 6 },
                    { key: 'mohuan', name: '魔幻奇幻', number: '7', clickNumber: 10 },
                ]
            },
            {
                key: 'story',
                name: '小说',
                list: [
                    { key: 'yanqing', name: '言情', number: '6', clickNumber: 6 },
                    { key: 'modern', name: '现代', number: '6', clickNumber: 6 },
                    { key: 'urban', name: '都市', number: '6', clickNumber: 6 },
                    { key: 'historical', name: '历史', number: '6', clickNumber: 6 },
                    { key: 'classical', name: '古典', number: '6', clickNumber: 6 },
                    { key: 'wuxia', name: '武侠', number: '6', clickNumber: 6 },
                    { key: 'zuopinji', name: '作品集', number: '6', clickNumber: 6 },
                    { key: 'masterpiece', name: '世界名著', number: '6', clickNumber: 6 },
                    { key: 'xuanyi', name: '悬疑推理', number: '6', clickNumber: 6 },
                    { key: 'kongbu', name: '恐怖惊悚', number: '6', clickNumber: 6 },
                ]
            },
            {
                key: 'wenxue',
                name: '文学',
                list: [
                    { key: 'wenji', name: '文集', number: '6', clickNumber: 6 },
                    { key: 'jishi', name: '纪实文学', number: '6', clickNumber: 6 },
                    { key: 'poem', name: '古诗词', number: '6', clickNumber: 6 },
                    { key: 'shige', name: '现当代诗歌', number: '6', clickNumber: 6 },
                ]
            },
        ]
        currentSelect = this.topNavList[0]
        currentNav = this.currentSelect.list
    }
</script>

<style lang="less" scoped>
    .select-bar {
        width: 220px;
        border-radius: 20px;
        padding: 20px 10px;
        background: #FFFFFF;
        overflow: auto;

        .top-nav {
            position: relative;
            padding-bottom: 20px;

            .name,
            .select-name {
                font-weight: bold;
            }

            .iconfont {
                font-size: 12px;
                font-weight: bold;
                margin-left: 20px;
                cursor: pointer;
                transform: rotate(90deg) scale(.8);
            }

            .line {
                position: absolute;
                left: -10px;
                bottom: 0;
                width: calc(100% + 20px);
                height: 1px;
                background: var(--borderColor);
            }

            .top-nav-list {
                position: absolute;
                width: 100%;
                height: auto;
                max-height: 400px;
                overflow: hidden scroll;
                background: #FFFFFF;
            }
        }

        .second-nav {
            padding: 20px 0;

            .nav-item {
                position: relative;
                padding: 8px 20px;
                margin-bottom: 20px;
                cursor: pointer;

                .name {
                    margin-bottom: 8px;
                    color: var(--textColor);
                    font-weight: bold;
                }

                .desc {
                    font-size: 12px;
                    color: var(--dimColor);

                    .number {
                        margin-right: 6px;
                    }
                }

                &:hover,
                &.selected {
                    border-radius: 10px;
                    background: var(--hoverColor);

                    .name {
                        color: var(--mainColor);
                    }
                }

                &.selected {
                    &::after {
                        content: '';
                        position: absolute;
                        top: 0;
                        right: -10px;
                        height: 100%;
                        width: 4px;
                        border-radius: 6px;
                        background: var(--mainColor);
                    }
                }
            }
        }
    }
</style>