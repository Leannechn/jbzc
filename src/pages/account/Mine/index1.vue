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