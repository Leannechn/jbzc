<template>
    <div class="menu" data-spm="1427" data-name="zc-nav" data-group="abs-mod" data-version="2.1.11" style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0;">
        <div id="zhongchounav" style="">
            <div class="aa" style="">
                <div style="border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; height: 56px; color: white; text-align: center; font-size: 13px;">
                    <a href="#" style="text-decoration: none; color: white;">
                        <div id="0" style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; float: left; width: 20%; height: 56px; opacity: 1; background-color: rgb(2, 194, 201);">
                            <div style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; text-align: center; margin-bottom: 2px;">
                                <img src="../../assets/menu001.png"
                                    style="display: inline-block; width: 23px; height: 23px; margin: 5px auto 2.5px;"></div><span style="border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 13px;">精选</span></div>
                    </a>
                    <a href="#" style="text-decoration: none; color: white;">
                        <div id="1" style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; float: left; width: 20%; height: 56px; opacity: 0.8; background-color: rgb(23, 23, 23);">
                            <div style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; text-align: center; margin-bottom: 2px;">
                                <img src="../../assets/menu002.png"
                                    style="display: inline-block; width: 23px; height: 23px; margin: 5px auto 2.5px;"></div><span style="border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 13px;">好物</span></div>
                    </a>
                    <a href="#" style="text-decoration: none; color: white;">
                        <div id="2" style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; float: left; width: 20%; height: 56px; opacity: 0.8; background-color: rgb(23, 23, 23);">
                            <div style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; text-align: center; margin-bottom: 2px;">
                                <img src="../../assets/menu003.png"
                                    style="display: inline-block; width: 23px; height: 23px; margin: 5px auto 2.5px;"></div><span style="border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 13px;">生活</span></div>
                    </a>
                    <a href="#" style="text-decoration: none; color: white;">
                        <div id="3" style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; float: left; width: 20%; height: 56px; opacity: 0.8; background-color: rgb(23, 23, 23);">
                            <div style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; text-align: center; margin-bottom: 2px;">
                                <img src="../../assets/menu004.png"
                                    style="display: inline-block; width: 23px; height: 23px; margin: 5px auto 2.5px;"></div><span style="border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 13px;">吃喝</span></div>
                    </a>
                    <a href="#" style="text-decoration: none; color: white;">
                        <div id="4" style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; float: left; width: 20%; height: 56px; opacity: 0.8; background-color: rgb(23, 23, 23);">
                            <div style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; text-align: center; margin-bottom: 2px;">
                                <img src="../../assets/menu005.png"
                                    style="display: inline-block; width: 23px; height: 23px; margin: 5px auto 2.5px;"></div><span style="border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 13px;">玩乐</span></div>
                    </a>
                </div>
        </div>
    </div>
    </div>
</template>

<script>
    import * as _ from 'lodash'; // 直接写名字，模块化的插件
    require('lodash');// 方法二，这种事针对jquery插件的引入
    export default {
        name: 'menu',
        created:()=>{
            //这里相当于$().ready(function(params) {
                //初始化
           // })
           console.log($);
        },
        data() {
            return {}
        }
    }

</script>

<style>
    #zhongchounav {
        border: 0px solid black;
        position: relative;
        box-sizing: border-box;
        display: flex;
        -webkit-box-orient: vertical;
        flex-direction: column;
        align-content: flex-start;
        flex-shrink: 0;
        height: 56px;
        width: 375px;
        font-family: "PingFang SC", "Helvetica Neue", Helvetica, STHeiTi, sans-serif;
        -webkit-font-smoothing: antialiased;
        background-color: rgb(238, 238, 238);
    }
    .aa{
        border: 0px solid black; position: fixed; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-weight: lighter; height: 56px; width: 375px; font-family: "sans serif"; top: 0px; left: 0px; z-index: 200; background-color: rgb(23, 23, 23);
    }
</style>