<template>
    <f7-page>
        <f7-navbar title="选择常跑城市" back-link="Back" sliding>
            <div class="right">
                <a href="/oftenAdd/"style="font-size:14px;">添加</a>
            </div>
        </f7-navbar>
        <f7-block style="margin:0;padding:0">
            <div class="chip f7-often-chip">
                <div class="">省份</div>
                <div>城市</div>
            </div>
            <div class="chip f7-often-chip">
                <div class="">广东省</div>
                <div>广州市</div>
                <a href="#" class="chip-delete"></a>
            </div>
            <div class="chip f7-often-chip">
                <div class="">河南省</div>
                <div>郑州市</div>
                <a href="" class="chip-delete"></a>
            </div>
        </f7-block>
    </f7-page>
</template>

<script>
	export default {}
</script>

<style>
    .f7-often-chip{
        height:40px;
        width:100%;
        background-color:#fff;
        color:#000;
        padding-left:6%;
        padding-right:0;
    }
    .f7-often-chip div{
        width:43%;
    }
</style>