<template>
    <f7-page>
        <f7-navbar title="完善车辆信息" back-link="Back" sliding></f7-navbar>
        <f7-block style="margin:0;padding:0">
            <span id="f7-car-add">
                <p class="f7-carInformation-p">补充车辆信息后,收到的货源信息将更加精准</p>
                <div class="f7-add-list header">
                    <span>车辆类别</span><div style="width:100%;height:40px;text-align:right">前四后八 ＞</div>
                </div>
                <div class="f7-add-list header">
                    <span>车板类型</span><div style="width:100%;height:40px;text-align:right">厢车 ＞ </div>
                </div>
                <div class="f7-add-list header">
                    <span>车板长度</span><div style="width:100%;height:40px;text-align:right">请选择 ＞</div>
                </div>
                <div class="f7-add-list header">
                    <span>车板宽度</span><div style="width:100%;height:40px;text-align:right">请选择 ＞</div>
                </div>
                <div class="f7-add-list header">
                    <span>厢车高度</span><div style="width:100%;height:40px;text-align:right">请选择 ＞</div>
                </div>
                </span>
            <div class="f7-carInformation-list" style="margin-top:-10px;">
                <div style="padding-left:6%;width:32%;margin-right:6%;border-right:1px solid #b9b9b9">最大载重吨位</div>
                <div style="padding-right:6%;width:40%"><input type="text"placeholder="请输入"></div>
                <div style="width:8%">吨</div>
            </div>
            <div class="f7-carInformation-list">
                <div style="padding-left:6%;width:32%;margin-right:6%;border-right:1px solid #b9b9b9">最大载重体积</div>
                <div style="padding-right:6%;width:40%"><input type="text"placeholder="请输入"></div>
                <div style="width:8%">方</div>
            </div>
            <a href="/photograph/"><button class="btn">下一步</button></a>
        </f7-block>
    </f7-page>
</template>

<script>
	export default {}
</script>

<style>
    #f7-car-add>.header{
        padding-right:6%;
    }
    .f7-carInformation-p{
        margin-top:0;
        height:40px;
        line-height:40px;
        padding-left:6%;
        padding-right:0%;
    }
    .f7-carInformation-list{
        height:40px;
        background-color:#fff;
        margin-bottom:1px;
    }
    .f7-carInformation-list div{
        height:40px;
        float:left;
        line-height:40px;
    }
    .f7-carInformation-list div input{
        width:100%;
        height:36px;
        border:none;
    }
    .f7-carInformation-list span{
        /*display: inline-block;*/
    }
</style>