<template>
    <f7-page>
        <f7-navbar title="完善车辆信息" back-link="Back" sliding></f7-navbar>
        <f7-block style="margin:0;padding:0">
            <div class="f7-add-list header" style="margin-top:0;">
                <span>车辆类别</span><input style="width:73%" placeholder="前四后八"><a>＞</a>
            </div>
            <div class="f7-add-list header">
                <span>车板类型</span><input style="width:73%" placeholder="高栏"><a>＞</a>
            </div>

            <div class="f7-add-list header">
                <span>车板长度</span><input style="width:73%" placeholder="9.6米"><a>＞</a>
            </div>
            <div class="f7-add-list header">
                <span>车板宽度</span><input style="width:73%" placeholder="2米"><a>＞</a>
            </div>
            <div class="f7-carInformation-list" style="margin-top:-10px;">
                <div style="padding-left:6%;width:32%;margin-right:6%;border-right:1px solid #b9b9b9">最大载重吨位</div>
                <div style="padding-right:6%;width:40%"><input type="text"placeholder="20.00"></div>
                <div style="width:8%">吨</div>
            </div>
            <div class="f7-carInformation-list">
                <div style="padding-left:6%;width:32%;margin-right:6%;border-right:1px solid #b9b9b9">最大载重体积</div>
                <div style="padding-right:6%;width:40%"><input type="text"placeholder="53.00"></div>
                <div style="width:8%">方</div>
            </div>
            <a href="//"><button class="btn">修改</button></a>
        </f7-block>
    </f7-page>
</template>

<script>
	export default {}
</script>

<style>

</style>