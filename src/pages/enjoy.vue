<template>
    <f7-page>
        <f7-navbar title="享受" back-link="" sliding></f7-navbar>
        <f7-block style="padding:0;margin:0;">
            <div class="min-height-flex" @click="openPhone">
                <div class="f7-enjoy-list">
                    <div class="f7-enjoy-list-img">
                        <img src="../../img/location.png">
                    </div>
                    <div class="f7-enjoy-list-title">
                        拨打客服电话
                    </div>
                    <a href="javascript:;"class="f7-enjoy-list-right" >＞</a>
                </div>
            </div>

            <!--固定底部导航栏-->
            <div v-if="" class="sh-footer">
                <!--<a style="display: none" id="goabout" href="/about/"></a>-->
                <a href="/index/"><div class="sh-footer-bgcomm sh-footer-bgcomm-index"><span>干活</span></div></a>
                <a href="javascript:;" ><div class="sh-footer-bgcomm sh-footer-bgcomm-design f7-enjoy"><span>享受</span></div></a>
                <a href="/vault/"><div class="sh-footer-bgcomm sh-footer-bgcomm-shop"><span>金库</span></div></a>
                <a href="/mine/"><div class="sh-footer-bgcomm sh-footer-bgcomm-user"><span>我</span></div></a>
            </div>
        </f7-block>
    </f7-page>
</template>

<script>

	export default {
		data() {
			return {
			};
		},
		methods: {
			openPhone(){
				let app = new Framework7();
				app.confirm('123465798','拨打客服电话', function () {
					window.location.href = "tel:123465798";
				})
            }
        }
    }
</script>

<style>
    .f7-enjoy{
        background-image: url(../../img/enjoy_1.png);
    }
    .f7-enjoy>span{
        color:rgb(4, 83, 142);
    }
    .min-height-flex{
        min-height: calc(100vh - 95px);
    }
    .f7-enjoy-list{
        height:40px;
        background-color:#fff;
        padding-left:6%;
        padding-right:6%;
        margin-bottom:20px;
    }
    .f7-enjoy-list-img{
        width:10%;
        float:left;
        margin-top:5px;
    }
    .f7-enjoy-list-img img{
        width:20px;
        vertical-align: middle;
    }
    .f7-enjoy-list-title{
        width:85%;
        float:left;
        font-size:16px;
        line-height:40px;
        font-weight:normal;

    }
    .f7-enjoy-list-right{
        float:right;
        width:5%;
        font-size:18px;
        font-weight:600;
        line-height:40px;
        color:#b9b9b9;
    }
</style>