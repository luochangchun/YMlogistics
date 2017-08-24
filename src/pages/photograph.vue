<template>
    <f7-page>
        <f7-navbar title="证件照片" back-link="Back" sliding></f7-navbar>
        <f7-block style="margin:0;padding:0">
            <p class="f7-carInformation-p">证件图片均经过严格保密处理,请您放心上传。</p>
            <div class="f7-photograph-picture">
                <div class="f7-photograph-picture-one">
                    <p>＋</p>
                    <span>驾驶证</span>
                </div>
                <div class="f7-photograph-picture-one">
                    <p>＋</p>
                    <span>行驶证</span>
                </div>
                <div class="f7-photograph-picture-one">
                    <p>＋</p>
                    <span>本人头像</span>
                </div>
            </div>
            <a href=""><button class="btn">注册</button></a>
        </f7-block>
    </f7-page>
</template>

<script>
	export default {}
</script>

<style>
    .f7-photograph-picture{
        padding:15px 6% 15px 6%;
        background-color:#fff;
        margin-top:-10px;
        height:255px;
    }
    .f7-photograph-picture-one{
        width:40%;
        height:100px;
        border:1px dashed #b9b9b9;
        float:left;
        border-radius:5px;
        margin:13px;
    }
    .f7-photograph-picture-one p{
        font-size:38px;
        font-weight: normal;
        text-align: center;
        margin-top:20px;
        height:10px;
    }
    .f7-photograph-picture-one span{
        font-size:14px;
        text-align: center;
        padding-bottom:10px;
        display: block;
    }
</style>