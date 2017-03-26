<template>
    <!--最外层必须是也只能是 一个div ,注意id与页面名称一样-->
    <div id="home">
        <!--菜单-->
        <Menus/>
        <!--轮播-->
        <div id="module_10026" data-spm="10026" data-name="zc-slidebanner" data-group="abs-mod" data-version="0.0.5" style="">
            <div style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0;">
                <div style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; width: 375px; overflow: hidden; height: 130px; background-color: rgb(204, 204, 204);">
                    <div style="width: 375px;">
                        <!--<div class="swiper-container ">
                            <div style=" width: 375px" class="swiper-wrapper">
                                <div class="childWrap1" style="border: 0px solid blac; box-sizing: border-box; width: 375px; height: 130px;">
                                    <a href="#" style="text-decoration: none;">
                                        <img src="../../assets/images/swiper.jpg" style="display: flex; width: 375px; height: 130px;"></a>
                                </div>
                                <div style="border: 0px solid black; box-sizing: border-box;  width: 375px; height: 130px;">
                                    <a href="#" style="text-decoration: none;">
                                        <img src="../../assets/lunbo.jpg" style="width: 375px; height: 130px;"></a>
                                </div>
                                <div style="border: 0px solid black; box-sizing: border-box;  width: 375px; height: 130px;">
                                    <a href="#" style="text-decoration: none;">
                                        <img src="../../assets/lunbo.jpg" style="width: 375px; height: 130px;"></a>
                                </div>
                            </div>
                            <div class="swiper-pagination"> </div>
                        </div>-->
                        <!--<swipe class="my-swipe" v-bind:show-indicators="true">
                            <swipe-item class="slide1">
                                <a href="#" style="text-decoration: none;">
                                    <img src="../../assets/images/swiper.jpg" style="width: 375px; height: 130px;">
                                </a>
                            </swipe-item>
                            <swipe-item class="slide2">
                                <a href="#" style="text-decoration: none;">
                                    <img src="../../assets/lunbo.jpg" style="width: 375px; height: 130px;">
                                </a>
                            </swipe-item>
                            <swipe-item class="slide3">
                                <a href="#" style="text-decoration: none;">
                                    <img src="../../assets/lunbo.jpg" style="width: 375px; height: 130px;">
                                </a>
                            </swipe-item>
                        </swipe>-->
                        <swiper :options="swiperOption" ref="mySwiper">
                            <!-- slides -->
                            <swiper-slide>
                                <a href="#" style="text-decoration: none;">
                                    <img src="../../assets/lunbo.jpg" style="width: 375px; height: 130px;">
                                </a>
                            </swiper-slide>
                            <swiper-slide>
                                <a href="#" style="text-decoration: none;">
                                    <img src="../../assets/images/swiper.jpg" style="width: 375px; height: 130px;">
                                </a>
                            </swiper-slide>
                            <swiper-slide>
                                <a href="#" style="text-decoration: none;">
                                    <img src="../../assets/images/swiper.jpg" style="width: 375px; height: 130px;">
                                </a>
                            </swiper-slide>
                            <!-- Optional controls -->
                            <div class="swiper-pagination" slot="pagination"></div>
                        </swiper>
                    </div>
                    <div class="pagination" style="border: 0px solid black; position: absolute; box-sizing: border-box; display: flex; -webkit-box-orient: horizontal; flex-direction: row; align-content: flex-start; flex: 1 1 0%; bottom: 4px; width: 375px; margin: 0px auto; -webkit-box-flex: 1; -webkit-box-pack: end; justify-content: flex-end; -webkit-box-align: center; align-items: center; height: 20px; right: 16px; background-color: transparent;">
                        <!--<div style="border: 0px solid black; position: relative; box-sizing: border-box; display: inline-block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; border-radius: 50%; margin: 1.5px; width: 8px; height: 8px; background-color: rgb(204, 204, 204);"></div>
                    <div style="border: 0px solid black; position: relative; box-sizing: border-box; display: inline-block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; border-radius: 50%; margin: 1.5px; width: 8px; height: 8px; background-color: rgb(204, 204, 204);"></div>
                    <div style="border: 0px solid black; position: relative; box-sizing: border-box; display: inline-block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; border-radius: 50%; margin: 1.5px; width: 8px; height: 8px; background-color: rgb(204, 204, 204);"></div>
                    <div style="border: 0px solid black; position: relative; box-sizing: border-box; display: inline-block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; border-radius: 50%; margin: 1.5px; width: 8px; height: 8px; background-color: rgb(204, 204, 204);"></div>
                    <div style="border: 0px solid black; position: relative; box-sizing: border-box; display: inline-block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; border-radius: 50%; margin: 1.5px; width: 8px; height: 8px; background-color: rgb(2, 194, 201);"></div>-->
                    </div>
                </div>
            </div>
        </div>

        <!--每日上新-->
        <div id="module_18225" data-spm="18225" data-name="zc-linebanner" data-group="abs-mod" data-version="0.0.25" style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0;"
            data-spm-max-idx="0">
            <div style="border-width: 0px 0px 1px; border-style: solid; border-color: black black rgb(224, 224, 224); position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: horizontal; flex-direction: row; align-content: flex-start; flex-shrink: 0; width: 375px; height: 69px; -webkit-box-align: center; align-items: center; font-family: 'PingFang SC', Helvetica, 'Helvetica Neue', Arial; background-color: rgb(255, 255, 255);">
                <div style="border-width: 0px 1px 0px 0px; border-style: solid; border-color: black rgb(204, 204, 204) black black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; width: 87.5px; height: 43.5px; margin-top: 2.5px; -webkit-box-align: center; align-items: center; -webkit-box-pack: justify; justify-content: space-between;">
                    <img src="../../assets/meirishangxin001.png" style="display: flex; width: 64.5px; height: 18.5px;">
                    <div style="border: 1px solid rgb(0, 0, 0); position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: horizontal; flex-direction: row; align-content: center; flex-shrink: 0; width: 64px; height: 18px; border-radius: 2px; -webkit-box-align: center; align-items: center; -webkit-box-pack: center; justify-content: center; overflow: hidden;">
                        <span style="border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 16px; color: rgb(0, 0, 0); font-family: 'PingFang SC', Helvetica, 'Helvetica Neue', Arial;">3</span>
                        <span style="border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 18px; color: rgb(0, 0, 0);">/</span>
                        <span style="border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 16px; color: rgb(0, 0, 0); font-family: 'PingFang SC', Helvetica, 'Helvetica Neue', Arial;">14</span>
                    </div>
                </div>
                <a style="text-decoration: none; width: 287px; height: 68px; position: relative; -webkit-box-orient: horizontal; flex-direction: row; display: flex; align-content: flex-end; -webkit-box-pack: justify; justify-content: space-between;">
                    <div style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; height: 43.5px; width: 153.5px; margin-top: 13px; margin-left: 10px; -webkit-box-align: start; align-items: flex-start; -webkit-box-pack: justify; justify-content: space-between; overflow: hidden;">
                        <span style="border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 16px; line-height: 20px; color: rgb(74, 74, 74); font-family: 'PingFang SC', Helvetica, 'Helvetica Neue', Arial;">申请代言人</span>
                        <span style="border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 13px; line-height: 20px; color: rgb(153, 153, 153); font-family: 'PingFang SC', Helvetica, 'Helvetica Neue', Arial;">首发特惠49元！</span>
                    </div>
                    <img src="../../assets/meirishangxin002.jpg" style="display: flex; width: 60px; height: 60px; margin-top: 4px; margin-right: 10px; object-fit: cover; background-color: rgb(255, 255, 255);">
                    <img src="../../assets/meirishangxin004.jpg" style="display: flex; width: 53px; height: 68px; -webkit-box-align: end; align-items: flex-end; object-fit: cover; background-color: rgb(255, 255, 255);">
                </a>
                <a style="text-decoration: none; display: flex; position: absolute; right: 0px; top: 14px; width: 58px; height: 40px;">
                    <img src="../../assets/meirishangxin003.jpg" style="display: flex; width: 58px; height: 40px; object-fit: cover;">
                    <div style="border: 0px solid black; position: absolute; box-sizing: border-box; display: flex; -webkit-box-orient: horizontal; flex-direction: row; align-content: flex-start; flex-shrink: 0; top: 25px; right: 20.5px; height: 5px; width: 13px; -webkit-box-pack: justify; justify-content: space-between;">
                        <div style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; width: 5px; height: 5px; border-radius: 5px; opacity: 0; transform: scale(0); background-color: rgb(255, 255, 255);"></div>
                        <div style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; width: 5px; height: 5px; border-radius: 5px; opacity: 0.00211443; transform: scale(0.00211443); background-color: rgb(255, 255, 255);"></div>
                    </div>
                </a>
            </div>
    </div>
    <div id="module_1847" data-spm="1847" data-name="zc-gap12" data-group="abs-mod" data-version="0.0.3" style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0;">
        <div style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; height: 8px; width: 375px; background-color: rgb(238, 238, 238);"></div>
    </div>
    <!--力荐清单-->
    <div id="module_10893" data-spm="10893" data-name="zc-module-header" data-group="abs-mod" data-version="0.0.3" style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0;">
        <div style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0;">
            <div style="border-width: 0px 0px 0px 2px; border-style: solid; border-color: black black black rgb(0, 204, 204); position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: horizontal; flex-direction: row; align-content: flex-start; flex-shrink: 0; -webkit-box-align: center; align-items: center; height: 44px; width: 375px;">
                <img src="../../assets/lijian001.png" style="display: flex; width: 19px; height: 19px; margin-left: 10px;">
                <div style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: horizontal; flex-direction: row; align-content: flex-start; flex-shrink: 0; align-items: baseline; height: 44px;"><span style="border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 16px; font-weight: bold; color: rgb(0, 204, 204); margin-left: 6.5px; line-height: 44px;">力荐清单</span><span
                        style="border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 12px; color: rgb(153, 153, 153); margin-left: 3px; line-height: 44px;">精彩不容错过</span></div>
            </div>
        </div>
    </div>
    <div id="module_10894" data-spm="10894" data-name="zc-recommend-list" data-group="abs-mod" data-version="0.0.13" style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0;"
        data-spm-max-idx="0">
        <div style="border-width: 1px 0px; border-style: solid; border-color: rgb(241, 241, 241) black rgb(224, 224, 224); position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: horizontal; flex-direction: row; align-content: flex-start; flex-shrink: 0; height: 100px; width: 375px; overflow: hidden; -webkit-box-pack: start; justify-content: flex-start; font-family: 'PingFang SC', 'Helvetica Neue', Helvetica, STHeiTi, sans-serif;">
            <a style="text-decoration: none; display: flex; width: 50%; height: 100px; box-sizing: border-box; position: relative; -webkit-box-orient: horizontal; flex-direction: row; -webkit-box-pack: justify; justify-content: space-between; border-right-width: 1px; border-right-style: solid; border-right-color: rgb(241, 241, 241);">
                <img src="../../assets/lijian003.jpg" style="display: flex; width: 82px; height: 82px; margin: 9.5px 0px 0px 9px; object-fit: cover;">
                <div style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; height: 100px; width: 92.5px;">
                    <div style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: horizontal; flex-direction: row; align-content: flex-start; flex-shrink: 0; height: 16px; margin-top: 16.5px; overflow: hidden;">
                        <span style="border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 14px; color: rgb(0, 0, 0); font-weight: bold; line-height: 16px;">热门排行</span></div>
                    <div style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; height: 32px; margin-top: 2.5px; overflow: hidden;">
                        <span style="border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 13px; line-height: 16px; color: rgb(102, 102, 102);">蓝牙智能降噪耳机</span>
                    </div>
                    <div style="border: 1px solid rgb(0, 204, 204); position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: horizontal; flex-direction: row; align-content: flex-start; flex-shrink: 0; width: 83px; height: 18px; -webkit-box-align: center; align-items: center; -webkit-box-pack: center; justify-content: center; border-radius: 18px; margin-top: 3.5px;"><span style="border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 13px; color: rgb(0, 204, 204);">1347</span><span
                            style="border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 12px; color: rgb(0, 204, 204); margin-left: 3px;">人支持</span></div>
                </div>
                <img src="../../assets/lijian002.png" style="display: flex; width: 29px; height: 29px; position: absolute; top: 0px; left: 0px; object-fit: cover;"></a>
            <a style="text-decoration: none; display: flex; width: 50%; height: 100px; box-sizing: border-box; position: relative; -webkit-box-orient: horizontal; flex-direction: row; -webkit-box-pack: justify; justify-content: space-between;">
                <img src="../../assets/lijian005.jpg" style="display: flex; width: 82px; height: 82px; margin: 9.5px 0px 0px 9px; object-fit: cover;">
                <div style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; height: 100px; width: 92.5px;">
                    <div style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: horizontal; flex-direction: row; align-content: flex-start; flex-shrink: 0; height: 16px; margin-top: 16.5px; overflow: hidden;">
                        <span style="border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 14px; color: rgb(0, 0, 0); font-weight: bold; line-height: 16px;">代言人套餐</span>
                    </div>
                    <div style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; height: 32px; margin-top: 2.5px; overflow: hidden;">
                        <span style="border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 13px; line-height: 16px; color: rgb(102, 102, 102);">单手可提的电动车</span>
                    </div>
                    <div style="border: 1px solid rgb(0, 204, 204); position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: horizontal; flex-direction: row; align-content: flex-start; flex-shrink: 0; width: 83px; height: 18px; -webkit-box-align: center; align-items: center; -webkit-box-pack: center; justify-content: center; border-radius: 18px; margin-top: 3.5px;">
                        <span style="border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 13px; color: rgb(0, 204, 204);">479</span>
                        <span style="border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 12px; color: rgb(0, 204, 204); margin-left: 3px;">人支持</span>
                    </div>
                </div>
                <img src="../../assets/lijian004.png" style="display: flex; width: 29px; height: 29px; position: absolute; top: 0px; left: 0px; object-fit: cover;">
            </a>
        </div>
        </div>
        <div style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; height: 8px; width: 375px; background-color: rgb(238, 238, 238);"></div>
        <!--本期主打-->
        <div style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0;">
            <div style="border-width: 0px 0px 0px 2px; border-style: solid; border-color: black black black rgb(0, 204, 204); position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: horizontal; flex-direction: row; align-content: flex-start; flex-shrink: 0; -webkit-box-align: center; align-items: center; height: 44px; width: 375px;">
                <img src="../../assets/benqizhuda001.png" style="display: flex; width: 19px; height: 19px; margin-left: 10px;">
                <div style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: horizontal; flex-direction: row; align-content: flex-start; flex-shrink: 0; align-items: baseline; height: 44px;">
                    <span style="border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 16px; font-weight: bold; color: rgb(0, 204, 204); margin-left: 6.5px; line-height: 44px;">本期主打</span>
                    <span style="border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 12px; color: rgb(153, 153, 153); margin-left: 3px; line-height: 44px;">轻松引爆潮流</span></div>
            </div>
        </div>
        <div id="module_10896" data-spm="10896" data-name="zc-weathervane" data-group="abs-mod" data-version="0.0.7" style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0;"
            data-spm-max-idx="0">
            <div style="border-width: 0px 0px 1px; border-style: solid; border-color: black black rgb(224, 224, 224); position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; width: 375px; -webkit-box-pack: start; justify-content: flex-start;">
                <div style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: horizontal; flex-direction: row; align-content: flex-start; flex-shrink: 0; -webkit-box-pack: start; justify-content: flex-start; width: 375px; height: 192.5px;">
                    <a style="text-decoration: none; display: flex; -webkit-box-orient: vertical; flex-direction: column; width: 125px; height: 192.5px; box-sizing: border-box; border-top-width: 1px; border-top-style: solid; border-top-color: rgb(241, 241, 241); font-family: 'PingFang SC', Helvetica, 'Helvetica Neue', Arial; padding-left: 9.5px; border-right-width: 1px; border-right-style: solid; border-right-color: rgb(241, 241, 241); background-color: rgb(255, 255, 255);">
                        <div style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: horizontal; flex-direction: row; align-content: flex-start; flex-shrink: 0; -webkit-box-pack: start; justify-content: flex-start; height: 21px; -webkit-box-align: center; align-items: center; margin-top: 9.5px; overflow: hidden;">
                            <span style="border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 14px; width: 107px; color: rgb(0, 0, 0); line-height: 21px; font-weight: bold; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; font-family: 'PingFang SC', Helvetica, 'Helvetica Neue', Arial;">好吃</span></div>
                        <div style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: horizontal; flex-direction: row; align-content: flex-start; flex-shrink: 0; -webkit-box-pack: start; justify-content: flex-start; height: 19px; -webkit-box-align: center; align-items: center; overflow: hidden;"><span style="border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 13px; line-height: 19px; width: 107px; color: rgb(102, 102, 102); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-family: 'PingFang SC', Helvetica, 'Helvetica Neue', Arial;">行走的健身房</span></div><img
                            src="../../assets/benqizhuda002.jpg" style="display: flex; width: 107px; height: 107px; margin-top: 4px; object-fit: cover;">
                        <div style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: horizontal; flex-direction: row; align-content: flex-start; flex-shrink: 0; -webkit-box-pack: start; justify-content: flex-start; height: 33px; -webkit-box-align: center; align-items: center; overflow: hidden;"><span style="border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 12px; line-height: 33px; color: rgb(0, 204, 204);">¥</span><span
                                style="border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 12px; line-height: 33px; color: rgb(0, 204, 204); font-weight: bold; margin-left: 2px; margin-right: 2px;">99.00</span><span
                                style="border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 12px; line-height: 33px; color: rgb(0, 204, 204);">起</span></div>
                    </a>
                    <a style="text-decoration: none; display: flex; -webkit-box-orient: vertical; flex-direction: column; width: 125px; height: 192.5px; box-sizing: border-box; border-top-width: 1px; border-top-style: solid; border-top-color: rgb(241, 241, 241); font-family: 'PingFang SC', Helvetica, 'Helvetica Neue', Arial; padding-left: 9.5px; border-right-width: 1px; border-right-style: solid; border-right-color: rgb(241, 241, 241); background-color: rgb(255, 255, 255);">
                        <div style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: horizontal; flex-direction: row; align-content: flex-start; flex-shrink: 0; -webkit-box-pack: start; justify-content: flex-start; height: 21px; -webkit-box-align: center; align-items: center; margin-top: 9.5px; overflow: hidden;"><span style="border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 14px; width: 107px; color: rgb(0, 0, 0); line-height: 21px; font-weight: bold; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; font-family: 'PingFang SC', Helvetica, 'Helvetica Neue', Arial;">好喝</span></div>
                        <div style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: horizontal; flex-direction: row; align-content: flex-start; flex-shrink: 0; -webkit-box-pack: start; justify-content: flex-start; height: 19px; -webkit-box-align: center; align-items: center; overflow: hidden;"><span style="border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 13px; line-height: 19px; width: 107px; color: rgb(102, 102, 102); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-family: 'PingFang SC', Helvetica, 'Helvetica Neue', Arial;">除湿净化干衣防霉</span></div><img
                            src="../../assets/benqizhuda002.jpg" style="display: flex; width: 107px; height: 107px; margin-top: 4px; object-fit: cover;">
                        <div style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: horizontal; flex-direction: row; align-content: flex-start; flex-shrink: 0; -webkit-box-pack: start; justify-content: flex-start; height: 33px; -webkit-box-align: center; align-items: center; overflow: hidden;"><span style="border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 12px; line-height: 33px; color: rgb(0, 204, 204);">¥</span><span
                                style="border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 12px; line-height: 33px; color: rgb(0, 204, 204); font-weight: bold; margin-left: 2px; margin-right: 2px;">299.00</span><span
                                style="border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 12px; line-height: 33px; color: rgb(0, 204, 204);">起</span></div>
                    </a>
                    <a style="text-decoration: none; display: flex; -webkit-box-orient: vertical; flex-direction: column; width: 125px; height: 192.5px; box-sizing: border-box; border-top-width: 1px; border-top-style: solid; border-top-color: rgb(241, 241, 241); font-family: 'PingFang SC', Helvetica, 'Helvetica Neue', Arial; padding-left: 9.5px; background-color: rgb(255, 255, 255);">
                        <div style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: horizontal; flex-direction: row; align-content: flex-start; flex-shrink: 0; -webkit-box-pack: start; justify-content: flex-start; height: 21px; -webkit-box-align: center; align-items: center; margin-top: 9.5px; overflow: hidden;"><span style="border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 14px; width: 107px; color: rgb(0, 0, 0); line-height: 21px; font-weight: bold; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; font-family: 'PingFang SC', Helvetica, 'Helvetica Neue', Arial;">好玩</span></div>
                        <div style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: horizontal; flex-direction: row; align-content: flex-start; flex-shrink: 0; -webkit-box-pack: start; justify-content: flex-start; height: 19px; -webkit-box-align: center; align-items: center; overflow: hidden;"><span style="border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 13px; line-height: 19px; width: 107px; color: rgb(102, 102, 102); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-family: 'PingFang SC', Helvetica, 'Helvetica Neue', Arial;">智能语音驾驶助手</span></div><img
                            src="../../assets/benqizhuda002.jpg" style="display: flex; width: 107px; height: 107px; margin-top: 4px; object-fit: cover;">
                        <div style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: horizontal; flex-direction: row; align-content: flex-start; flex-shrink: 0; -webkit-box-pack: start; justify-content: flex-start; height: 33px; -webkit-box-align: center; align-items: center; overflow: hidden;"><span style="border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 12px; line-height: 33px; color: rgb(0, 204, 204);">¥</span><span
                                style="border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 12px; line-height: 33px; color: rgb(0, 204, 204); font-weight: bold; margin-left: 2px; margin-right: 2px;">99.00</span><span
                                style="border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 12px; line-height: 33px; color: rgb(0, 204, 204);">起</span></div>
                    </a>
                </div>
                <div style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: horizontal; flex-direction: row; align-content: flex-start; flex-shrink: 0; -webkit-box-pack: start; justify-content: flex-start; width: 375px; height: 192.5px;">
                    <a style="text-decoration: none; display: flex; -webkit-box-orient: vertical; flex-direction: column; width: 125px; height: 192.5px; box-sizing: border-box; border-top-width: 1px; border-top-style: solid; border-top-color: rgb(241, 241, 241); font-family: 'PingFang SC', Helvetica, 'Helvetica Neue', Arial; padding-left: 9.5px; border-right-width: 1px; border-right-style: solid; border-right-color: rgb(241, 241, 241); background-color: rgb(255, 255, 255);">
                        <div style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: horizontal; flex-direction: row; align-content: flex-start; flex-shrink: 0; -webkit-box-pack: start; justify-content: flex-start; height: 21px; -webkit-box-align: center; align-items: center; margin-top: 9.5px; overflow: hidden;"><span style="border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 14px; width: 107px; color: rgb(0, 0, 0); line-height: 21px; font-weight: bold; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; font-family: 'PingFang SC', Helvetica, 'Helvetica Neue', Arial;">好用</span></div>
                        <div style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: horizontal; flex-direction: row; align-content: flex-start; flex-shrink: 0; -webkit-box-pack: start; justify-content: flex-start; height: 19px; -webkit-box-align: center; align-items: center; overflow: hidden;"><span style="border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 13px; line-height: 19px; width: 107px; color: rgb(102, 102, 102); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-family: 'PingFang SC', Helvetica, 'Helvetica Neue', Arial;">许小蘑潘多拉蘑盒</span></div><img
                            src="../../assets/benqizhuda002.jpg" style="display: flex; width: 107px; height: 107px; margin-top: 4px; object-fit: cover;">
                        <div style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: horizontal; flex-direction: row; align-content: flex-start; flex-shrink: 0; -webkit-box-pack: start; justify-content: flex-start; height: 33px; -webkit-box-align: center; align-items: center; overflow: hidden;"><span style="border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 12px; line-height: 33px; color: rgb(0, 204, 204);">¥</span><span
                                style="border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 12px; line-height: 33px; color: rgb(0, 204, 204); font-weight: bold; margin-left: 2px; margin-right: 2px;">48.00</span><span
                                style="border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 12px; line-height: 33px; color: rgb(0, 204, 204);">起</span></div>
                    </a>
                    <a style="text-decoration: none; display: flex; -webkit-box-orient: vertical; flex-direction: column; width: 125px; height: 192.5px; box-sizing: border-box; border-top-width: 1px; border-top-style: solid; border-top-color: rgb(241, 241, 241); font-family: 'PingFang SC', Helvetica, 'Helvetica Neue', Arial; padding-left: 9.5px; border-right-width: 1px; border-right-style: solid; border-right-color: rgb(241, 241, 241); background-color: rgb(255, 255, 255);">
                        <div style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: horizontal; flex-direction: row; align-content: flex-start; flex-shrink: 0; -webkit-box-pack: start; justify-content: flex-start; height: 21px; -webkit-box-align: center; align-items: center; margin-top: 9.5px; overflow: hidden;"><span style="border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 14px; width: 107px; color: rgb(0, 0, 0); line-height: 21px; font-weight: bold; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; font-family: 'PingFang SC', Helvetica, 'Helvetica Neue', Arial;">好物</span></div>
                        <div style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: horizontal; flex-direction: row; align-content: flex-start; flex-shrink: 0; -webkit-box-pack: start; justify-content: flex-start; height: 19px; -webkit-box-align: center; align-items: center; overflow: hidden;"><span style="border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 13px; line-height: 19px; width: 107px; color: rgb(102, 102, 102); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-family: 'PingFang SC', Helvetica, 'Helvetica Neue', Arial;">吃豆人声波牙刷</span></div><img
                            src="../../assets/benqizhuda002.jpg" style="display: flex; width: 107px; height: 107px; margin-top: 4px; object-fit: cover;">
                        <div style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: horizontal; flex-direction: row; align-content: flex-start; flex-shrink: 0; -webkit-box-pack: start; justify-content: flex-start; height: 33px; -webkit-box-align: center; align-items: center; overflow: hidden;"><span style="border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 12px; line-height: 33px; color: rgb(0, 204, 204);">¥</span><span
                                style="border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 12px; line-height: 33px; color: rgb(0, 204, 204); font-weight: bold; margin-left: 2px; margin-right: 2px;">29.00</span><span
                                style="border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 12px; line-height: 33px; color: rgb(0, 204, 204);">起</span></div>
                    </a>
                    <a style="text-decoration: none; display: flex; -webkit-box-orient: vertical; flex-direction: column; width: 125px; height: 192.5px; box-sizing: border-box; border-top-width: 1px; border-top-style: solid; border-top-color: rgb(241, 241, 241); font-family: 'PingFang SC', Helvetica, 'Helvetica Neue', Arial; padding-left: 9.5px; background-color: rgb(255, 255, 255);">
                        <div style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: horizontal; flex-direction: row; align-content: flex-start; flex-shrink: 0; -webkit-box-pack: start; justify-content: flex-start; height: 21px; -webkit-box-align: center; align-items: center; margin-top: 9.5px; overflow: hidden;"><span style="border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 14px; width: 107px; color: rgb(0, 0, 0); line-height: 21px; font-weight: bold; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; font-family: 'PingFang SC', Helvetica, 'Helvetica Neue', Arial;">其他</span></div>
                        <div style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: horizontal; flex-direction: row; align-content: flex-start; flex-shrink: 0; -webkit-box-pack: start; justify-content: flex-start; height: 19px; -webkit-box-align: center; align-items: center; overflow: hidden;"><span style="border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 13px; line-height: 19px; width: 107px; color: rgb(102, 102, 102); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-family: 'PingFang SC', Helvetica, 'Helvetica Neue', Arial;">电动指甲刀闭眼剪</span></div><img
                            src="../../assets/benqizhuda002.jpg" style="display: flex; width: 107px; height: 107px; margin-top: 4px; object-fit: cover;">
                        <div style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: horizontal; flex-direction: row; align-content: flex-start; flex-shrink: 0; -webkit-box-pack: start; justify-content: flex-start; height: 33px; -webkit-box-align: center; align-items: center; overflow: hidden;"><span style="border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 12px; line-height: 33px; color: rgb(0, 204, 204);">¥</span><span
                                style="border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 12px; line-height: 33px; color: rgb(0, 204, 204); font-weight: bold; margin-left: 2px; margin-right: 2px;">69.00</span>
                            <span style="border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 12px; line-height: 33px; color: rgb(0, 204, 204);">起</span></div>
                    </a>
                </div>
            </div>
            </div>
            <div style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; height: 8px; width: 375px; background-color: rgb(238, 238, 238);"></div>
            <!--列表-->
            <div id="module_1581" data-spm="1581" data-name="zc-items-tab" data-group="abs-mod" data-version="1.3.52" style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0;">
                <div style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0;">
                    <div style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0;">
                        <div style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; height: 0px; background-color: white;"></div>
                        <div style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: horizontal; flex-direction: row; align-content: flex-start; flex-shrink: 0; justify-content: center; height: 44px; line-height: 44px; font-family: 'PingFang SC', 'Helvetica Neue', Helvetica, STHeiTi, sans-serif; width: 375px; font-size: 4px;">
                            <div style="border-width: 0px 0px 2px; border-style: solid; border-color: black black rgb(2, 194, 201); position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex: 1 1 0%; -webkit-box-flex: 1; text-align: center; font-size: 14px; color: rgb(2, 194, 201); height: 44px; padding-bottom: 2px; font-weight: bold; background-color: rgb(255, 255, 255);">
                                <span style="border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 14px;">最新上线</span>
                            </div>
                            <div style="border-width: 0px 0px 1px; border-style: solid; border-color: black black rgb(224, 224, 224); position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex: 1 1 0%; -webkit-box-flex: 1; text-align: center; font-size: 14px; color: rgb(5, 27, 43); height: 44px; background-color: rgb(255, 255, 255);">
                                <span style="border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 14px;">精彩预告</span></div>
                            <div style="border-width: 0px 0px 1px; border-style: solid; border-color: black black rgb(224, 224, 224); position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex: 1 1 0%; -webkit-box-flex: 1; text-align: center; font-size: 14px; color: rgb(5, 27, 43); height: 44px; background-color: rgb(255, 255, 255);">
                                <span style="border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 14px;">即将结束</span></div>
                        </div>
                    </div>
                    <div id="list" style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0;">
                        <!-- empty -->
                        <div v-for="item in items">
                            <HomeItem/>
                        </div>
                        <div style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0;">
                            <div style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0;"></div>
                        </div>
                        <!-- empty -->
                    </div>
                </div>
            </div>
            <!--底部-->
            <Footers/>
            </div>
</template>

<script>
    import Menus from 'components/menu';
    import Footers from 'components/footer';
    import HomeItem from './HomeItem';
    import { swiper, swiperSlide } from 'vue-awesome-swiper';


    export default {
        name: 'home',
        mounted: () => {

        },
        components: {
            Menus, Footers, HomeItem,
            swiper, swiperSlide
        },
        computed: {
            swiper() {
                return this.$refs.mySwiper.swiper
            }
        },
        mounted() {
            // you can use current swiper instance object to do something(swiper methods)
            // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
            console.log('this is current swiper instance object', this.swiper)
           // this.swiper.slideTo(3, 1000, false)
        },
        data() {
            return {
                items: new Array(10),
                swiperOption: {
                    // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
                    // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
                    notNextTick: true,
                    // swiper configs 所有的配置同swiper官方api配置
                    autoplay: 1000,
                    direction: 'horizontal',//vertical
                    grabCursor: true,
                    setWrapperSize: true,
                    autoHeight: true,
                    loop:true,
                    speed:2000,
                    pagination: '.swiper-pagination',
                    paginationClickable: true,
                    // prevButton: '.swiper-button-prev',
                    // nextButton: '.swiper-button-next',
                    // scrollbar: '.swiper-scrollbar',
                    mousewheelControl: true,
                    observeParents: true,
                    // if you need use plugins in the swiper, you can config in here like this
                    // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
                    debugger: true,
                    // swiper callbacks
                    // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
                    // onTransitionStart(swiper) {
                    //     console.log(swiper)
                    // },
                    // more Swiper configs and callbacks...
                    // ...
                }
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped lang="scss" type='stylesheet/scss'>
    @import './style.scss'; 
</style>