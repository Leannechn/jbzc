<template>
    <div id="page-account-mine">
        <div style="width: 100%;">
        <div class="rechargeBtn" style="border-bottom: 1px solid #eee;">
    	    <div class="rechargeFriend" data-target="toOwn">给自己充值</div>
    	    <div class="rechargeOwn" data-target="toOther">给朋友充值</div>
        </div>
        </div>

        <div style="width: 375px;text-align: center;">
            <div style="width: 60%; margin: 0 auto;">
                <input type="text" class="btnInputAmt"  placeholder="输入朋友手机号码" style="" />
            </div>
        </div>

        <div class="" style="width: 375px; text-align: center; margin: 4% 0;">
            <img src="http://imgs.52ywy.com/58d1e96dc5548_58d1e96dc55cb.jpg" class="" style="border-radius: 50%; width: 30%;">
        </div>

        <div style="width: 375px;text-align: center;">
            <div style="width: 50%; margin: 0 auto;">
                <p>
                    <span>微信昵称:</span>
                    <span>XXX</span>
                </p>
                <input type="text" class="btnInputAmt"  placeholder="输入金额" style="" />
                <button class="btnrecharge">充值</button>
            </div>
        </div>

        <div style="width: 375px;text-align: left;">
            <div style="width: 90%; margin: 0 auto;">
                <input type="text" class="btnMemo"  placeholder="想对他说些什么....." style="" />
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'page-account-mine',
        components: {
        },
        data() {
            return {}
        }
    }

</script>
<style scoped lang="scss">
    @import './style.scss';
</style>