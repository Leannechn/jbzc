<template>
    <div id='components-comHeader'>
        <div class="back"><img src="../../assets/images/back.png"/></div>
        <h5>聚宝众筹</h5>
        <div class="share">
            <img src="../../assets/images/share.png"/>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'components-comHeader',
        components: {  },
        data() {
            return {items:new Array (10)}
        }
    }

</script>

<style lang="css" scoped>
#components-comHeader{
    width: 375px;
    height: .8rem;
    background: rgba(0,0,0,.2);
    position: relative;
    text-align: center;
    line-height: .8rem;
}
h5{font-size: .4rem;}
.back{
    position: absolute;
    left: .1rem;
    top: .1rem;
}
.share{
    position: absolute;
    right: .1rem;
    top: .1rem;
}
 img{width:.6rem;height: .6rem;cursor: pointer;}

</style>