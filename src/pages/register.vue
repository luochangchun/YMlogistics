<template>
    <f7-page>
        <f7-navbar title="验证手机" back-link="Back" sliding></f7-navbar>
        <f7-block style="margin:0;padding:0">
            <div class="f7-register-all">
                <div class="f7-register-all-top">
                     <input type="text"placeholder="请输入手机号">
                     <a href="#">获取验证码</a>
                </div>
                <input class="f7-register-all-bottom" type="text" placeholder="请输入验证码">
                <a href="/carNum/"><button class="btn">下一步</button></a>
                <p>手机号是验证身份、找回密码、收款支付时的重要安全凭证。</p>
                <ul>
                    <li>请确保使用你自己常用的手机号</li>
                </ul>
            </div>



        </f7-block>
    </f7-page>
</template>

<script>
	export default {}
</script>

<style>
    .f7-register-all-top{
        margin-top:10px;
        height:40px;
        width:88%;
        padding-left:6%;
        padding-right:6%;
        background-color:#fff;
        margin-bottom:1px;
    }
    .f7-register-all-top input{
        width:70%;
        height:38px;
        line-height:38px;
        border:none;
        border-right:1px solid #EFEFF4;
    }
    .f7-register-all-top a{
        display:block;
        width:70px;
        line-height:40px;
        float:right;
        height:40px;
    }
    .f7-register-all-bottom{
        width:88%;
        padding-left:6%;
        padding-right:6%;
        height:40px;
        border:none;
        margin-bottom:10px;
    }
    .f7-register-all p{
        margin-left:6%;
        margin-right:6%;
        font-size:12px;
    }
    .f7-register-all ul li{
        font-size:12px;
    }
</style>