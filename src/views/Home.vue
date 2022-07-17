<template>
    <div class="home-wrapper">
        <div class="top-wrapper">
            <div class="sentence">Good Evening, yanyanhuahua! It is time to have a rest.</div>
            <div class="calendar-wrapper">
                <i class="iconfont icon-calendar"></i>
                <span class="time">{{ date }}</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';

    @Component
    export default class Home extends Vue {
        date = '';

        mounted() {
            let date = new Date();
            this.date = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}  ${date.getHours()}: ${date.getMinutes()}`;
        }
    };
</script>

<style lang="less" scoped>
    .home-wrapper {
        margin-top: 20px;
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
    }
</style>
