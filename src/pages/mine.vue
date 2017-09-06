<template>
    <f7-page>
        <f7-navbar title="个人中心" back-link="" sliding></f7-navbar>
        <f7-block style="padding:0;margin:0">
            <div class="min-height-flex" style="min-height:calc(100vh - 95px)">
                <a href="/login/" class="f7-mine-header">
                    <div class="f7-mine-headPortrait">
                        <img src="../../img/head.png" alt="">
                    </div>
                    <div class="f7-mine-headRight">
                        <div class="f7-mine-headRight-top">陈子福</div>
                        <div class="f7-mine-headRight-bottom">藏C77777</div>
                    </div>
                </a>

                <a href="/vehicleInformation/" class="f7-enjoy-list" style="clear:both;">
                    <div class="f7-enjoy-list-img"style="margin-top:10px;">
                        <img src="../../img/car0.png">
                    </div>
                    <div class="f7-enjoy-list-title">
                        车辆信息
                    </div>
                    <a href="/vehicleInformation/"class="f7-enjoy-list-right">＞</a>
                </a>
                <a href="/driver/" class="f7-enjoy-list" style="clear:both;">
                    <div class="f7-enjoy-list-img"style="margin-top:10px;">
                        <img src="../../img/user-icon.png">
                    </div>
                    <div class="f7-enjoy-list-title">
                        司机信息
                    </div>
                    <a href="/driver/"class="f7-enjoy-list-right">＞</a>
                </a>
                <a href="/often/" class="f7-enjoy-list" style="clear:both;">
                    <div class="f7-enjoy-list-img"style="margin-top:10px;">
                        <img src="../../img/city.png">
                    </div>
                    <div class="f7-enjoy-list-title">
                        常跑信息
                    </div>
                    <a class="f7-enjoy-list-right">＞</a>
                </a>
                <a href="/setting/" class="f7-enjoy-list" style="clear:both;margin-top:10px">
                    <div class="f7-enjoy-list-img"style="margin-top:10px;">
                        <img src="../../img/setting.png">
                    </div>
                    <div class="f7-enjoy-list-title">
                        设置
                    </div>
                    <a class="f7-enjoy-list-right">＞</a>
                </a>
            </div>
            <!--固定底部导航栏-->
            <div v-if="" class="sh-footer">
                <!--<a style="display: none" id="goabout" href="/about/"></a>-->
                <a href="/index/"><div class="sh-footer-bgcomm sh-footer-bgcomm-index f7-work"><span>干活</span></div></a>
                <a href="/enjoy/"><div class="sh-footer-bgcomm sh-footer-bgcomm-design" ><span>享受</span></div></a>
                <a href="/vault/"><div class="sh-footer-bgcomm sh-footer-bgcomm-shop"><span>金库</span></div></a>
                <a href="javascript:;"><div class="sh-footer-bgcomm sh-footer-bgcomm-user f7-mine"><span>我</span></div></a>
            </div>
        </f7-block>
    </f7-page>
</template>

<script>
	export default {
		data() {
			return {

            };
        }
    }
</script>

<style>
    .f7-mine {
        background-image: url(../../img/mine_1.png);
    }
    .f7-mine>span{
        color:rgb(4, 83, 142);
    }
    .f7-mine-header{
        background-color:#04538e;
        height:100px;
        padding-left:6%;
        padding-right:6%;
        margin-bottom:10px;
        display: block;
    }
    .f7-mine-headPortrait{
        width:30%;
        float:left;
    }
    .f7-mine-headPortrait img{
        width:80px;
        height:80px;
        margin-top:10px;
        border-radius:50%;
    }
    .f7-mine-headRight{
        width:60%;
        float:left;
        padding-left:10%;
    }
    .f7-mine-headRight-top{
        font-size:18px;
        color:#fff;
        height:40px;
        line-height:67px;
    }
    .f7-mine-headRight-bottom{
        font-size:16px;
        color:#fff;
        height:40px;
        line-height:50px;
    }
    .f7-enjoy-list{
        margin-bottom:1px;
        display:block;
        color:#000;
        text-decoration: none;
    }
</style>