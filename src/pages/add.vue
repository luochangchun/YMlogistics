<template>
    <f7-page>
        <f7-navbar title="银行" back-link="Back" sliding></f7-navbar>
        <f7-block  style="padding:0">
            <div class="f7-add">
                <div class="f7-add-list header">
                    <span>开户银行</span><input style="width:73%" placeholder="中国工商银行"><a>＞</a>
                </div>
                <div class="f7-add-list">
                    <span>用户名</span> <input placeholder="开户人姓名">
                </div>
                <div class="f7-add-list">
                    <span>账号</span> <input  placeholder="银行卡号 / 储蓄账号">
                </div>
                <div class="f7-add-list">
                    <span>开户省市</span> <input placeholder="">
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
    .header>::-webkit-input-placeholder{
        text-align:right;
    }
    .header a{
        float:right;
        width:18px;
        color:#b9b9b9;
        font-size:22px;
    }
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