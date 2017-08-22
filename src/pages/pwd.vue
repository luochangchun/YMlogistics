<template>
    <f7-page>
        <f7-navbar title="修改密码" back-link="Back" sliding></f7-navbar>
        <f7-block style="margin:0;padding:0">
            <div class="f7-pwd-input">
                <input type="pwd"placeholder="请填写旧密码">
                <input type="pwd"placeholder="请填写新密码">
                <input type="pwd"placeholder="请确认密码">
            </div>
            <button class="btn">确定</button>
        </f7-block>
    </f7-page>
</template>

<script>
	export default {}
</script>

<style>
    .f7-pwd-input input{
        width:100%;
        height:40px;
        border:none;
        margin-bottom:1px;
        padding-left:6%;
        padding-right:6%;
    }
</style>