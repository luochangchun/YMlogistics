<template>
    <f7-page>
        <f7-navbar title="历史订单" back-link="Back" sliding>
        </f7-navbar>
        <f7-block style="margin:0;padding:0">
            <div v-show="priceActive">
                <div class="f7-index-price">
                    <div class="f7-price-carry" id="DBTH">
                        <input id="demo4" type="text" readonly="" placeholder="提货地"  value="广东省,深圳市"/>
                        <input id="value4" type="hidden" value="20,234,504"/>
                    </div>
                    <div class="f7-price-right" style="width:10%">→</div>
                    <div class="f7-price-carry">
                        <input id="demo5" type="text" readonly="" placeholder="卸货地"  value="广东省,深圳市"/>
                        <input id="value5" type="hidden" value="20,234,504"/>
                    </div>
                    <div class="f7-price-carry" style="margin-left:15px;">
                        <input id="demo6" type="text" readonly="" placeholder="提货时间" value="2017-08-25"data-lcalendar="2010-01-11,2019-12-31"/>
                        <input id="value6" type="hidden" value=""/>
                    </div>
                    <div class="f7-price-more">
                        <button @click="showMoreActive">更多</button>
                    </div>
                </div>
                <div v-show="moreActive">
                    <div class="f7-price-weight">
                        <p>重量（吨）:</p>
                        <input type="text"placeholder="最低值">
                        <span>到</span>
                        <input type="text"placeholder="最高值" >
                    </div>
                    <div class="f7-price-weight">
                        <p>体积（方）:</p>
                        <input type="text"placeholder="最低值">
                        <span>到</span>
                        <input type="text"placeholder="最高值" >
                    </div>
                    <button class="btn">完成</button>
                </div>
                <div v-show="!moreActive">
                    <div class=f7-work-list style="margin-top:10px;">
                        <div class=f7-work-list-left-img>
                            <img src=../../img/2.png>
                        </div>
                        <div class=f7-work-package-right>
                            <div class=f7-work-package-right-top>
                                <p class="f7-work-number">NO 2017080754054</p>
                                <button class="f7-work-bill">剩余3小时56分</button>
                            </div>
                            <div class=f7-work-package-right-bottom>
                                <h4>湖北武汉&nbsp;<span style="font-size:18px;font-weight:800">→</span>&nbsp;安徽合肥&nbsp;&nbsp;<span>3吨/3方</span></h4>
                                <p>提货时间：<span>2017-8-2  &nbsp;17:00</span></p>
                            </div>
                            <div class="f7-work-price">
                                <div class="f7-work-money">
                                    <img src="../../img/1.png" alt="">
                                </div>
                                <div class="f7-work-btm">
                                    <div class=f7-work-send>
                                        一口价 <span>1000.0</span>元
                                    </div>
                                    <div class=f7-work-last-position>
                                        全额回单付
                                    </div>
                                </div>
                                <div class="detil"><a href="/offer/">查看详情</a></div>
                            </div>
                        </div>
                    </div>
                    <div class=f7-work-list style="margin-top:10px;">
                        <div class=f7-work-list-left-img>
                            <img src=../../img/2.png>
                        </div>
                        <div class=f7-work-package-right>
                            <div class=f7-work-package-right-top>
                                <p class="f7-work-number">NO 2017080754054</p>
                                <button class="f7-work-bill">剩余3小时56分</button>
                            </div>
                            <div class=f7-work-package-right-bottom>
                                <h4>湖北武汉&nbsp;<span style="font-size:18px;font-weight:800">→</span>&nbsp;安徽合肥&nbsp;&nbsp;<span>3吨/3方</span></h4>
                                <p>提货时间：<span>2017-8-2  &nbsp;17:00</span></p>
                            </div>
                            <div class="f7-work-price">
                                <div class="f7-work-money">
                                    <img src="../../img/1.png" alt="">
                                </div>
                                <div class="f7-work-btm">
                                    <div class=f7-work-send>
                                        一口价 <span>1000.0</span>元
                                    </div>
                                    <div class=f7-work-last-position>
                                        全额回单付
                                    </div>
                                </div>
                                <div class="detil"><a href="/offer/">查看详情</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </f7-block>
    </f7-page>
</template>

<script type="text/ecmascript-6">
	const ididi = require('static/js/LAreaData1.js')
	import 'static/js/LArea'
	import 'static/js/lCalendar'
	export default{
		data(){
			return{
				priceActive: true,
				moreActive:false,
				AmoreActive:false
			};
		},
		mounted(){
			var s3 = new LArea()
			s3.init({
				'trigger': '#demo4', //触发选择控件的文本框，同时选择完毕后name属性输出到该位置
				'valueTo': '#value4', //选择完毕后id属性输出到该位置
				'keys': {
					id: 'id',
					name: 'name'
				}, //绑定数据源相关字段 id对应valueTo的value属性输出 name对应trigger的value属性输出
				'type': 1, //数据源类型
				'data': ididi.sss //数据源
			});
			var s4 = new LArea()
			s4.init({
				'trigger': '#demo5', //触发选择控件的文本框，同时选择完毕后name属性输出到该位置
				'valueTo': '#value5', //选择完毕后id属性输出到该位置
				'keys': {
					id: 'id',
					name: 'name'
				}, //绑定数据源相关字段 id对应valueTo的value属性输出 name对应trigger的value属性输出
				'type': 1, //数据源类型
				'data': ididi.sss //数据源
			});



//				var calendar = new lCalendar();
//				calendar.init({
//					'trigger': '#demo3',
//					'type': 'date'
//				});
			var s5 = new lCalendar();
			s5.init({
				'trigger': '#demo6',
				'type': 'datetime'
			});
//				var calendartime = new lCalendar();
//				calendartime.init({
//					'trigger': '#demo3',
//					'type': 'time'
//				});

		},
		methods:{
			showMoreActive() {
				if(this.moreActive){
					this.moreActive = false;
				}else{
					this.moreActive = true;
				}
			},
			showAmoreActive() {
				if(this.AmoreActive){
					this.AmoreActive = false;
				}else{
					this.AmoreActive = true;
				}
			}
		}
	};

</script>

<style>

</style>