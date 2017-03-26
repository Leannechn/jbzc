<template>
    <div id="page-redPack">
        <div class="theFirst oF pRS mT44">
            <img class="w fl" src="../../assets/images/get-168.jpg" alt="">

            <div class="setting-area" style="display: block; top: 8.8rem;">
                <div>
                    <div class="line">
                        <input style="width:74%;" type="number" placeholder="请输入手机号码" name="mobile">
                        <span class="T-send fS15">发送</span>
                    </div>

                    <div class="line">
                        <input type="number" placeholder="请输入手机验证码" name="code" style="width: 100%;">
                    </div>
                </div>
            </div>
            <!--领取红包-->
            <span class="get-hongbao" style="top: 13rem; left: 3rem;"></span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'page-redPack',
        components:{},
        data() {
            return {}
        }
    }

</script>

<style scoped lang="css">
    body {
        overflow: hidden;
        width:375px;
    }
    #page-redPack{
        width:375px;
    }
    image{
        width:375px;
    }
    input {
        color: #fff;
        background: transparent;
        line-height: 1.3rem;
        border: none;
        outline: none;
        -webkit-appearance: none;
    }
    
    input::-webkit-input-placeholder {
        color: #fff;
    }
    
    .setting-area {
        bottom: 23%;
        width: 100%;
        position: absolute;
    }
    
    .setting-area > div {
        margin: auto 1.2rem;
    }
    
    .setting-area .line {
        border: 1px solid #fff;
        border-radius: 6px;
        text-align: center;
        margin-bottom: .3rem;
        height: 1.3rem;
    }
    
    input[type="number"] {
        padding-left: .1rem;
        display: inline-block;
    }
    
    span.fS15 {
        display: inline-block;
        box-sizing: border-box;
        line-height: 1.3rem;
    }
    
    .T-send {
        width: 20%;
        border-left: 1px solid #fff;
        color: #fff;
    }
    
    .get-hongbao {
        position: absolute;
        width: 4rem;
        display: inline-block;
        height: 1.3rem;
    }
    
    .w {
        width: 10rem;
    }
 
div {
    font-size: 14px;
}
[data-dpr="3"] div {
    font-size: 26px;
}
</style>