<template>
    <f7-page>
        <f7-navbar title="电子回单" back-link="Back" sliding></f7-navbar>
        <f7-block style="margin:0;padding:0">
            <p class="f7-receipt-p">回执单须收货方签字、盖章，或签身份证号。请整张拍摄回单，确保文字清晰可见。</p>
            <div class="f7-photograph-picture">
                <div class="f7-photograph-picture-one">
                    <div>
                        <p>＋</p>
                        <span>添加图片</span>
                    </div>
                </div>
                <div class="f7-photograph-picture-one">
                    <p>＋</p>
                    <span>添加图片</span>
                </div>
                <div class="f7-photograph-picture-one">
                    <p>＋</p>
                    <span>添加图片</span>
                </div>
            </div>
            <a href=""><button class="btn">发送</button></a>
        </f7-block>
    </f7-page>
</template>

<script type="text/ecmascript-6">

</script>

<style>
    .f7-receipt-p{
        line-height:25px;
        padding-left:6%;
        padding-right:6%;
    }
</style>