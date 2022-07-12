<template>
    <div class="navbar-wrapper">
        <div class="logo-wrapper">
            <div class="logo"></div>
            <div class="name">悦阅</div>
        </div>
        <div class="nav-list">
            <div class="nav-item active">
                <div class="icon">+</div>
                <div class="name">首页</div>
            </div>
            <div class="nav-item">
                <div class="icon">+</div>
                <div class="name">个人书柜</div>
            </div>
            <div class="nav-item">
                <div class="icon">+</div>
                <div class="name">观看历史</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Watch } from 'vue-property-decorator';

    @Component
    export default class NavBar extends Vue {
        current = 0;
    //     smallNavbarList = [
    //         { id: 'masterpiece', name: '名著阅读' },
    //         { id: 'story', name: '小说阅读' },
    //         { id: 'children', name: '儿童阅读' },
    //         { id: 'science', name: '科普阅读' }
    //     ];
    //     storyList = [
    //         { id: 'story', name: '小说首页' },
    //         { id: 'classical', name: '古典小说' },
    //         { id: 'suspense', name: '悬疑小说' },
    //         { id: 'inferential', name: '推理小说' },
    //         { id: 'history', name: '历史小说' },
    //         { id: 'scienceFiction', name: '科幻小说' },
    //         { id: 'fantasy', name: '玄幻小说' },
    //         { id: 'romantic', name: '言情小说' },
    //         { id: 'supernatural', name: '仙侠小说' },
    //         { id: 'martial', name: '武侠小说' }
    //     ];
    //     userInfo = { user_avatar: '' };
    //     activeIndex = '';
    //     search = '';
    //     isLogin = true;
    //     showNav = false;
    //     fold = 'el-icon-s-fold';
    //     unfold = 'el-icon-s-unfold';
    //     user_avatar = 'https://cdn.jsdelivr.net/gh/chen-lifei/reading@master/src/assets/public/avatar.png';

    //     @Watch('$store.state.userInfo')
    //     onUserInfoChange(newVal: object) {
    //         this.isLogin = !!newVal
    //     }

    //     @Watch('$store.state.userInfo.user_avatar')
    //     onUserAvatarChange(newVal: string) {
    //         this.getUserInfo()
    //     }

    //     @Watch('$route')
    //     onRouteChange(newValue: object) {
    //         if (newValue) {
    //             this.showNav = false
    //         }
    //     }

    //     hiddenNav () {
    //         this.showNav = false
    //     };

    //     getNavStatus () {
    //         window.onresize = () => {
    //             const width = window.innerWidth
    //             if (width >= 800) {
    //                 this.showNav = false
    //             }
    //         }
    //     };

    //     toHome () {
    //         this.$router.push({ name: 'home' })
    //     }

    //     getLoginStatus () {
    //         let token = localStorage.getItem('readingToken')
    //         if (token) {
    //             this.isLogin = false
    //             this.getUserInfo()
    //         } else {
    //             this.isLogin = true
    //         }
    //     }

    //     getUserInfo () {
    //         this.$store.dispatch('getUserInfo', localStorage.getItem('readerId'))
    //         this.userInfo = this.$store.state.userInfo
    //         this.user_avatar = this.userInfo.user_avatar ? `http://localhost:3000/avatar/${this.userInfo.user_avatar}` : this.user_avatar
    //     }

    //     changeNav (category) {
    //         if (this.$route.name !== category) {
    //             this.$router.push({
    //                 path: category === 'story' ? '/story' : `/story/${category}`
    //             })
    //         }
    //     }

    //     getActiveIndex () {
    //         let current = this.$route.name
    //         switch (current) {
    //             case 'masterpiece':
    //                 this.activeIndex = '1'
    //                 break
    //             case 'story':
    //                 this.activeIndex = '2'
    //                 break
    //             case 'children':
    //                 this.activeIndex = '3'
    //                 break
    //             case 'science':
    //                 this.activeIndex = '4'
    //                 break
    //         }
    //     }

    //     handleSearch () {
    //         if (this.search) {
    //             this.$router.push({ name: 'booklist', query: { search: this.search } })
    //             this.search = ''
    //         }
    //     }

    //     toReader () {
    //         this.$router.push({ name: 'reader' })
    //     }

    //     handlerInput () {
    //         if (this.search) {
    //             this.$router.push({ name: 'booklist', query: { search: this.search } })
    //             this.search = ''
    //         }
    //     }

    //     mounted () {
    //         this.getNavStatus()
    //         this.getLoginStatus()
    //         this.getActiveIndex()
    //     }
    }
</script>

<style lang="less" scoped>
    .navbar-wrapper {
        width: 180px;
        border-radius: 20px;
        background: #d8e3d9;
        padding: 20px 10px;

        .logo-wrapper {
            display: flex;
            margin-bottom: 30px;

            .logo {
                width: 36px;
                height: 36px;
                background: #8cab91;
                border-radius: 5px;
            }

            .name {
                font-size: 24px;
                font-weight: bold;
                color: #8cab91;
                margin-left: 10px;
            }
        }

        .nav-list {
            display: flex;
            flex-wrap: wrap;

            .nav-item {
                display: flex;
                width: 100%;
                padding: 10px 5px;
                margin-bottom: 10px;
                border-radius: 5px;
                cursor: pointer;

                .icon {
                    width: 16px;
                    height: 16px;
                    margin-right: 10px;
                    color: #7d8592;
                }

                .name {
                    color: #7d8592;
                }

                &:hover,
                &.active {
                    background: #8cab91;

                    .icon,
                    .name {
                        color: #c5ebca;
                    }
                }
            }
        }
    }
</style>
