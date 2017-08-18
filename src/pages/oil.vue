<template>
    <f7-page>
        <f7-navbar title="油卡" back-link="Back" sliding></f7-navbar>
        <f7-block style="padding:0;margin:0">
            <div class="f7-oil-card">
                <div class="f7-oil-card-left">
                    油卡账户
                </div>
                <div class="f7-oil-card-right">
                    4654654654316546
                </div>
            </div>
        </f7-block>
    </f7-page>
</template>

<script>
	export default {}
</script>
<style>
    .f7-oil-card{
        height:40px;
        background-color:#fff;
        padding-left:6%;
        padding-right:6%;
    }
    .f7-oil-card-left{
        width:30%;
        height:40px;
        line-height:40px;
        color:#000;
        font-size:14px;
        float:left;
    }
    .f7-oil-card-right{
        width:70%;
        height:40px;
        line-height:40px;
        color:#b9b9b9;
        float:left;
    }
</style>