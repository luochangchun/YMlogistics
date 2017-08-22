<template>
    <f7-page>
        <f7-navbar title="审核进度" back-link="Back" sliding></f7-navbar>
        <f7-block style="margin:0;padding:0">
            <div class="f7-audit-all">
                <div class="f7-audit">
                    <div class="f7-audit-img">
                        <img src="../../img/rights.png" alt="">
                    </div>
                    <span>资料提交成功</span>
                </div>
                <div class="f7-audit-two">
                    <p>审查结果：<span>正在审核</span></p>
                    <p>说明：<span>预计2小时内完成</span></p>
                </div>
            </div>
            <a href="//"><button class="btn">完成</button></a>
        </f7-block>
    </f7-page>
</template>

<script>
	export default {}
</script>

<style>
    .f7-audit{
        padding-top:10vh;
        width:100%;
        height:40vh;
        background-color:#fff;
        text-align: center;
    }
    .f7-audit-img img{
        width:90px;
        margin-bottom:20px;
    }
    .f7-audit span{
        font-size:22px;
        color:#000;
    }
    .f7-audit-two{
        margin-top:-16px;
        background-color:#fff;
        padding-left:6%;
        padding-right:6%;
        height:70px;
    }
    .f7-audit-two p{
        font-size: 16px;
        height:20px;
        line-height:20px;
    }
    .f7-audit-two p span{
        color:#d6ab00;
    }
</style>