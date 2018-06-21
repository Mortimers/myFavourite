<template>
    <div class="music">
        <section class="fav-header">
            <div class="fav-header-bg"></div>
            <div class="fav-header-wrap">
                <div class="header-left">
                    <img src="../../static/img/myImage.jpg" />
                    <span>歌单</span>
                </div>
                <div class="header-right">
                    <h3>想要一个别人盗不走的陪伴</h3>
                    <div>—佚名</div>
                </div>
            </div>
        </section>
        <section class="fav-intro">
            <div class="tit-tags">
                标签：
                <em>华语</em>
                <em>流行</em>
                <em>治愈</em>
            </div>
            <div class="tit-intro">
                <p>简介：所有细碎微小的回忆</p>
                <p>推搡迷惘的我前行</p>
                <p>我们无言躺在这片静谧</p>
                <p>我的心为你而敞开</p>
                <p>在那些漫长无眠的夜晚</p>
            </div>
        </section>
        <div class="music-list">
            <h3 class="music-list-tit">歌曲列表</h3>
            <div class="music-item" v-for="(obj, index) in getMusicList">
                <h3>{{index + 1}}</h3>
                <div class="music-play"></div>
                <div class="music-item-intro">
                    <div class="music-item-tit">{{obj.music_name}}</div>
                    <div class="music-item-info">{{obj.singer}}-{{obj.music_name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                search: ""
            }
        },
        computed: {
            getMusicList () {
                console.log(this.$store.state.musiclist)
                return this.$store.state.musiclist
            }
        }
    }
</script>
<style lang="stylus">
.music
    .fav-header
        padding 20px 10px
        position relative
        overflow hidden
        .fav-header-bg
            background url("../../static/img/myImage.jpg") no-repeat
            background-size 100% 100%
            position absolute
            top 0
            left 0
            width 100%
            height 100%
            filter blur(20px)
            z-index 0
        .fav-header-wrap
            position relative
            display flex
            .header-left
                width 145px
                height 145px
                position relative
                img
                    width 100%
                span
                    position absolute
                    top 20px
                    left 0
                    width 50px
                    color #fff
                    background-color rgba(217,48,48,.8)
                    padding-left 10px
                    border-radius 0 10px 10px 0
            .header-right
                padding 20px 0 0 10px
                color #f5f5f5
                div
                    float right
                    padding 10px 10px 0 0
    .fav-intro
        padding 10px 10px
    .music-list
        overflow hidden
        .music-list-tit
            height 30px
            line-height 30px
            padding-left 10px
            color #666
            background-color #eeeff0
        .music-item
            height 55px
            h3
                width 35px
                height 55px
                line-height 55px
                text-align center
                float left
                color #999
                font-size large
            .music-play
                float right
                width 22px
                height 22px
                margin 12px 15px 0 0
                background-size 166px 97px
                background-image url("../../static/img/music-icon.png")
                background-position -24px 0
            .music-item-intro
                height 55px
                margin-left 30px
                .music-item-tit
                    font-size 17px
                    padding-top 10px
                .music-item-info
                    font-size 12px
                    color #888
</style>
