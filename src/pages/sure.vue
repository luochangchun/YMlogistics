<template>
    <f7-page>
        <f7-navbar title="待确认详情" back-link="Back" sliding></f7-navbar>
        <f7-block style="margin:0;padding:0">
            <div class="" style="margin:0 auto">
                <div class="f7-work-two">
                    <div class="f7-bankRecord-list-bottomLeft"style="color:#fff;margin-top:20px;">
                            距您1167.6公里
                    </div>
                    <div class="f7-bankRecord-list-bottomLeft"style="margin-top:1%;color:#fff;text-align:center;font-size:16px;">
                        剩余抢单时间：55分22秒
                    </div>
                </div>

                <div class="f7-work-two" style="background-color:transparent">
                    <div class="f7-bankRecord-list-bottomLeft"style="margin-bottom:3%;color:#000;">
                        广州&nbsp;&nbsp;<span>→</span>&nbsp;&nbsp;合肥
                    </div>
                    <div style="text-align:center;color:#000;font-size:14px">总里程：361公里</div>
                    <div class="f7-bankRecord-list-top">
                        <div class="f7-bankRecord-list-topLeft f7-work-num1" style="color:#000">
                            <span>提</span>2016-12-08 15:14
                        </div>
                        <div class="f7-bankRecord-list-topRight f7-work-num2" style="color:#000">
                            <span>卸</span>2016-12-09 15:14
                        </div>
                    </div>
                </div>
                <p class="f7-sure-p">订单号：20161129419411</p>
                <p class="f7-sure-p1">提货地址</p>
                <div class="f7-sure-list">
                    <span>1</span>
                    <p>江西无锡新吴区硕放街道墙宅路1号(提货耗时:0小时)</p>
                </div>
                <p class="f7-sure-p1">卸货地址</p>
                <div class="f7-sure-list">
                    <span>1</span>
                    <p>安徽合肥经开区耕耘路与青龙潭路交口(卸货耗时:0小时)</p>
                </div>
                <div style="background-color:#fff;padding-bottom:10px;">
                    <div class="f7-work-accounts" style="margin-top:25px;">
                        <p><span>结算方式：&nbsp;</span>全额回单付</p>
                        <p>所有运费在电子回单和纸质回单确认后支付给车主</p>
                    </div>
                    <p class="f7-sure-p2">一口价：￥4000.00</p>
                    <div style="text-align:center;font-size:14px;height:20px;line-height:20px;background-color:#fff;margin-top:-16px;margin-bottom:10px;">发货人拒绝还价，抢单请尽快</div>
                    <input class="s1" type="checkbox" value="" onmouseout="this.className=''" onmouseover="this.className='s1'" />我已阅读并同意《运输协议》
                </div>
                <div class="f7-work-bottom btn6"style="margin-top:10px;padding-left:6%;padding-right:6%">
                    <a @click="openPrice" class="f7-btn1"><button>立刻抢单</button></a>
                    <a href="javascript:;" @click="cencelBtn" class="f7-btn2"><button>退回订单</button></a>
                </div>
            </div>
        </f7-block>
    </f7-page>
</template>

<script>
	export default {
//		data() {
//			return {
//				classA: '',
//				classB: '',
//				classC: '',
//				classD: '',
//			};
//		},
		methods: {
			openPrice(){
				let app = new Framework7();
				app.confirm('报价3000.00元，到手价3000.00元；<br><br>收款银行：中国工商银行（李晓00）<br>账号：6222023909389892322;<br> <br>订单信息：无锡→合肥，10方/10吨 重货，总里程361公里，结算方式：全额回单付所有运费在电子回单和纸质回单确认后支付给车主','请核对报价', function () {
					window.location.href = "tel:123465798";
				})
			},
			cencelBtn() {
				let self = this;
				let app = new Framework7();
				app.confirm('是否退回订单？','退回订单', function () {
					self.$router.load({url: '/index/'})
				})
            }
		}
	}
</script>

<style>
    .f7-sure-p{
        padding-left:6%;
        padding-right:6%;
        font-size: 14px;
        color:#000;
        background-color:#9CCE13;
        height:40px;
        line-height:40px;
        margin-bottom:-10px;
    }
    .f7-sure-p1{
        padding-left:6%;
        padding-right:6%;
        font-size:16px;
        color:#000;
        background-color:#fff;
        height:40px;
        line-height:40px;
    }
    .f7-sure-list{
        padding-left:6%;
        padding-right:6%;
        background-color:#fff;
        margin-top:-15px;
        margin-bottom:-10px;
    }
    .f7-sure-list span{
        font-size:18px;
        color:#fff;
        background-color:#6faedf;
        width:25px;
        height:25px;
        display:block;
        text-align: center;
        border-radius:50%;
        float: left;
        margin-right:10px;
        margin-top:5px;
    }
    .f7-sure-list p{
        font-size:14px;
        line-height:20px;
    }
    .f7-sure-p2{
        background-color:#fff;
        color:#e60012;
        font-size: 16px;
        height:40px;
        line-height:40px;
        text-align: center;
        margin-top:0;
    }
    .s1{
        background-color:#fff;
        margin-left:25%;

    }
    .btn6 a button{
        background-color:#9CCE13 !important;
        height:40px !important;
    }
</style>