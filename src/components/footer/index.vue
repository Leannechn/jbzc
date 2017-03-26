<template>
    <div id="menu" data-spm="1427" data-name="zc-nav" data-group="abs-mod" data-version="2.1.11" style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0;">
        <div id="zhongchounav" style="">
            <div class="zhongchounavaa" style="">
                <div style="border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; height: 56px; color: white; text-align: center; font-size: 13px;">
                    <a href="#" style="text-decoration: none; color: white;">
                        <div id="0" style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; float: left; width: 25%; height: 56px; opacity: 1; background-color: rgb(2, 194, 201);">
                            <div style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; text-align: center; margin-bottom: 2px;">
                                <img src="../../assets/menu001.png"
                                    style="display: inline-block; width: 23px; height: 23px; margin: 5px auto 2.5px;"></div><span style="border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 13px;">首页</span></div>
                    </a>
                    <a href="#" style="text-decoration: none; color: white;">
                        <div id="1" style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; float: left; width: 25%; height: 56px; opacity: 0.8; background-color: rgb(23, 23, 23);">
                            <div style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; text-align: center; margin-bottom: 2px;">
                                <img src="../../assets/menu002.png"
                                    style="display: inline-block; width: 23px; height: 23px; margin: 5px auto 2.5px;"></div><span style="border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 13px;">活动</span></div>
                    </a>
                    <a href="#" style="text-decoration: none; color: white;">
                        <div id="2" style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; float: left; width: 25%; height: 56px; opacity: 0.8; background-color: rgb(23, 23, 23);">
                            <div style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; text-align: center; margin-bottom: 2px;">
                                <img src="../../assets/menu003.png"
                                    style="display: inline-block; width: 23px; height: 23px; margin: 5px auto 2.5px;"></div><span style="border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 13px;">购物车</span></div>
                    </a>
                    <a href="#" style="text-decoration: none; color: white;">
                        <div id="3" style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; float: left; width: 25%; height: 56px; opacity: 0.8; background-color: rgb(23, 23, 23);">
                            <div style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; text-align: center; margin-bottom: 2px;">
                                <img src="../../assets/menu004.png"
                                    style="display: inline-block; width: 23px; height: 23px; margin: 5px auto 2.5px;"></div><span style="border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 13px;">个人中心</span></div>
                    </a>
                </div>
        </div>
    </div>
    </div>
</template>
<script>
    export default {
        name: 'footer',
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
    .zhongchounavaa{
        border: 0px solid black; 
        position: fixed; 
        box-sizing: border-box; 
        display: flex; 
        -webkit-box-orient: vertical; 
        flex-direction: column; 
        align-content: flex-start; 
        flex-shrink: 0; 
        font-weight: lighter; 
        height: 56px; 
        width: 375px; 
        font-family: "sans serif"; 
        bottom: 0px; 
        left: 0px; 
        z-index: 200; 
        background-color: rgb(23, 23, 23);
    }
</style>