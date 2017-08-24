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
                    <p class="f7-sure-p2">报价：￥4000.00</p>
                    <div class="f7-work-accounts" style="margin-top:-5px;">
                        <p style="margin-top:-20px;">到手价为：1000.00元</p>
                        <p><span>结算方式：&nbsp;</span>全额回单付</p>
                        <p>所有运费在电子回单和纸质回单确认后支付给车主</p>
                    </div>

                    <div style="text-align:center;font-size:14px;height:20px;line-height:20px;background-color:#fff;margin-top:20px;margin-bottom:10px;">发货人拒绝还价，抢单请尽快</div>
                    <input class="s1" type="checkbox" value="">我已阅读并同意《运输协议》
                </div>
                <button class="btn" @click="openCancel" style="background-color:#e60012">取消报价</button>
            </div>
        </f7-block>
    </f7-page>
</template>
<script type="text/ecmascript-6">
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
			openCancel(){
				let app = new Framework7();
				app.confirm('<br><br><br><br><br>','提示', function () {
					window.location.href = "tel:123465798";
				})
			}
		}
	}
</script>

<style>

</style>