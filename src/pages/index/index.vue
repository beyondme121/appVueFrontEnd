<template>
    <transition name="slideIn" mode="in-out">
        <div id="index">
            <template>
                <!-- 视图 -->
                <transition name="fade">
                    <keep-alive>
                        <router-view></router-view>
                    </keep-alive>
                </transition>
                <!-- 底部导航栏 -->
                <nav-bar></nav-bar>
            </template>
        </div>
    </transition>
</template>
<script>
import navBar from './navBar'
export default {

    components: { navBar }
};
</script>
<style lang="stylus">
#index {
    width: 100%;
    height: 100%;
    overflow: hidden;

}
</style>
