<template>
    <f7-page>
        <f7-navbar title="银行" back-link="Back" sliding></f7-navbar>
        <f7-block  style="padding:0">
            <div class="f7-add">
                <p class="f7-add-title">请绑定持卡人本人的银行卡</p>
                <div class="f7-add-list">
                    <span>卡类型</span> <input>
                </div>
                <div class="f7-add-list">
                    <span>持卡人</span> <input>
                </div>
                <div class="f7-add-list">
                    <span>账号</span> <input>
                </div>
                <div class="f7-add-list">
                    <span>开户省市</span> <input>
                </div>
                <div class="f7-add-list">
                    <span>支行</span> <input>
                </div>
            </div>

        </f7-block>
    </f7-page>
</template>

<script>
	export default {}
</script>
<style>
    .f7-add{
        margin-top:-34px;
    }
    .f7-add-title{
        padding-left:6%;
        padding-right:6%;
        font-size:8px;
        height:40px;
        line-height:40px;
        color:#000;
    }

    .f7-add-list{
        background-color:#fff;
        height:40px;
        padding-left:6%;
        padding-right:6%;
        line-height:40px;
        margin-top: -13px;
        margin-bottom:6%;
    }
    .f7-add-list span{
        width:20%;
        display:block;
        float:left;
        color:#000;
        height:40px;
    }
    .f7-add-list input{
        width:80%;
        float:left;
        border:none;
        /*background-color:#5ac8fa;*/
        height:38px;
    }
</style>