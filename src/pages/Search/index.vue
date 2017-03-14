<template>
    <div id="page-search">
        <div style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0;">
            <div style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0;">
                <div style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; height: 0px; background-color: white;"></div>
                <div style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: horizontal; flex-direction: row; align-content: flex-start; flex-shrink: 0; justify-content: center; height: 44px; line-height: 44px; font-family:  'PingFang SC ',  'Helvetica Neue ', Helvetica, STHeiTi, sans-serif; width: 375px;">
                    <div style="border-width: 0px 0px 2px; border-style: solid; border-color: black black rgb(2, 194, 201); position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex: 1 1 0%; -webkit-box-flex: 1; text-align: center; font-size: 14px; padding-bottom: 2px; color: rgb(2, 194, 201); height: 44px; font-weight: bold; background-color: rgb(255, 255, 255);"><span style="border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 14px;">综合排名</span></div>
                    <div style="border-width: 0px 0px 1px; border-style: solid; border-color: black black rgb(224, 224, 224); position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex: 1 1 0%; -webkit-box-flex: 1; text-align: center; font-size: 14px; color: rgb(5, 27, 43); height: 44px; background-color: rgb(255, 255, 255);"><span style="border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 14px;">人气最高</span></div>
                    <div style="border-width: 0px 0px 1px; border-style: solid; border-color: black black rgb(224, 224, 224); position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex: 1 1 0%; -webkit-box-flex: 1; text-align: center; font-size: 14px; color: rgb(5, 27, 43); height: 44px; background-color: rgb(255, 255, 255);"><span style="border: 0px solid black; position: relative; box-sizing: border-box; display: block; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; font-size: 14px;">金额最高</span></div>
                </div>
            </div>
            <div id="list" style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0;">
                <!-- empty -->
                <div v-for="item in items">
                    <ItemOverview/>
                </div>
                <div style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0;">
                    <div style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0;"></div>
                </div>
                <!-- empty -->
            </div>
            <div style="border: 0px solid black; position: relative; box-sizing: border-box; display: flex; -webkit-box-orient: vertical; flex-direction: column; align-content: flex-start; flex-shrink: 0; height: 17.5px; text-align: center; color: rgb(153, 153, 153); font-size: 12px; line-height: 17.5px; font-family:  'PingFang SC ', Helvetica,  'Helvetica Neue ', Arial; background-color: rgb(231, 231, 231);">加载中...</div>
        </div>
    </div>
</template>

<script>
    import ItemOverview from './overview'
    export default {
        name: 'page-search',
        components: { ItemOverview },
        data() {
            return {items:new Array(10)}
        }
    }

</script>