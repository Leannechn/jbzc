<template>
    <div id="page-account-center">
        <!--菜单-->
        <Menus/>

        <div class="user-head">
            <div class="tC mT54 avatar">
                <img src="http://imgs.52ywy.com/58d1e96dc5548_58d1e96dc55cb.jpg" class="header bR50">
            </div>
            <div class="mT10 tC fS22 cWhite">Chrysanthemum</div>
            <div class="mui-row" >
                <div class="mui-col-xs-left" style="color: white;">ID : 14471742</div>
                <div class="mui-col-xs-right" style="color: white;">邀请码 : BAGV</div>
            </div>
        </div>  

        <div style="width: 375px;">
        <div class="mui-col-xs-12">
            <p class="user-bill" >余额 : <span class="fS12">¥0.00</span></p>
            <button class="btnrecharge">充值</button>
        </div>
        </div>
        <div style="width: 375px;">
        <div class="mui-row" data-status="5" style="border-bottom: 1px solid #eee;">
            <div class="mui-col-xs-left">
                <span class="fS15" style="font-size: 17px;">订单</span>
            </div>
            <div class="mui-col-xs-right">
                <img src="../../../assets/right.png" class="rightC" width="8%">
            </div>
        </div>
        </div>

        <div style="width: 100%;">
        <div class="mui-row-1" style="width: 375px; text-align: center;">
            <div class="mui-col-xs-3">
                <div class="Strmsg">
                    <ul class="PendingPayment" data-status="1">
                        <li class="IconImg">
                            <img src="../../../assets/IconImg1.png" alt="" width="36%">
                        </li>
                        <p style="color: #8f8f94; font-size: 14px;">待付款</p>
                        <i class="cNum obligations" style="font-size:12px"></i>
                    </ul>
                </div>
            </div>
            <div class="mui-col-xs-3">
                <div class="Strmsg">
                    <ul class="ReadyMoney" data-status="2">
                        <li class="IconImg">
                            <img src="../../../assets/IconImg4.png" alt="" width="36%">
                        </li>
                        <p style="color: #8f8f94; font-size: 14px;">待发货</p>
                        <i class="cNum back_to" style="font-size:12px"></i>
                    </ul>
                </div>
            </div>
            <div class="mui-col-xs-3">
                <div class="Strmsg">
                    <ul class="ReceiptGoods" data-status="3">
                        <li class="IconImg">
                            <img src="../../../assets/IconImg2.png" alt="" width="36%">
                        </li>
                        <p style="color: #8f8f94; font-size: 14px;">待收货</p>
                        <i class="cNum received_to" style="font-size:12px"></i>
                    </ul>
                </div>
            </div>
            <div class="mui-col-xs-3">
                <div class="Strmsg">
                    <ul class="Completed" data-status="4">
                        <li class="IconImg">
                            <img src="../../../assets/IconImg3.png" alt="" width="36%">
                        </li>
                        <p style="color: #8f8f94; font-size: 14px;">已完成</p>
                    </ul>
                </div>
            </div>
        </div>
        </div>

        <div style="width: 375px;">
        <div class="mui-row" data-status="5" style="border-bottom: 1px solid #eee;">
            <div class="mui-col-xs-left">
                <span class="fS15" style="font-size: 17px;">我的代金券</span>
            </div>
            <div class="mui-col-xs-right">
                <img src="../../../assets/right.png" class="rightC" width="8%">
            </div>
        </div>
        </div>
        <div style="width: 375px;">
        <div class="mui-row" data-status="5" style="border-bottom: 1px solid #eee;">
            <div class="mui-col-xs-left">
                <span class="fS15" style="font-size: 17px;">我们粉丝</span>
            </div>
            <div class="mui-col-xs-right">
                <img src="../../../assets/right.png" class="rightC" width="8%">
            </div>
        </div>
        </div>
        <div style="width: 375px;">
        <div class="mui-row" data-status="5" style="border-bottom: 1px solid #eee;">
            <div class="mui-col-xs-left">
                <span class="fS15" style="font-size: 17px;">申请代言人</span>
            </div>
            <div class="mui-col-xs-right">
                <img src="../../../assets/right.png" class="rightC" width="8%">
            </div>
        </div>
        </div>
        <div style="width: 375px;">
        <div class="mui-row" data-status="5" style="border-bottom: 1px solid #eee;">
            <div class="mui-col-xs-left">
                <span class="fS15" style="font-size: 17px;">设置</span>
            </div>
            <div class="mui-col-xs-right">
                <img src="../../../assets/right.png" class="rightC" width="8%">
            </div>
        </div>
        </div>

        <div class="PagePdding"></div>
        <!--底部-->
        <Footers/>
    </div>
</template>

<script>
    import Menus from 'components/menu';
    import Footers from 'components/footer';
    export default {
        name: 'page-account-center',
        components: {
            Menus, Footers
        },
        data() {
            return {}
        }
    }

</script>
<style scoped lang="scss">
    @import './style.scss';
</style>