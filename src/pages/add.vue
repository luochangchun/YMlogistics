<template>
    <f7-page>
        <f7-navbar title="银行" back-link="Back" sliding></f7-navbar>
        <f7-block  style="padding:0">
            <div class="f7-add">
                <div class="f7-add-list header bank">
                    <span>开户银行</span>
                    <div style="width:73%;text-align:right;color:#000;">
                        中国工商银行
                        <a style="margin-right:-6%;color:#666;">＞</a>
                    </div>
                </div>
                <div class="f7-add-list bank">
                    <span>用户名</span> <input placeholder="开户人姓名">
                </div>
                <div class="f7-add-list">
                    <span>账号</span> <input  placeholder="银行卡号 / 储蓄账号">
                </div>
                <div class="f7-add-list bank">
                    <span>开户省市</span>
                    <div class="f7-price-carry" id="DBTH">
                        <input id="demo6" type="text" readonly="" placeholder="提货地"  value="广东省,深圳市"/>
                        <input id="value6" type="hidden" value="20,234,504"/>
                    </div>
                </div>
                <div class="f7-add-list">
                    <span>支行</span> <input placeholder="请输入准确的支行名称">
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
			var s6 = new LArea()
			s6.init({
				'trigger': '#demo6', //触发选择控件的文本框，同时选择完毕后name属性输出到该位置
				'valueTo': '#value6', //选择完毕后id属性输出到该位置
				'keys': {
					id: 'id',
					name: 'name'
				}, //绑定数据源相关字段 id对应valueTo的value属性输出 name对应trigger的value属性输出
				'type': 1, //数据源类型
				'data': ididi.sss //数据源
			});
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
    .bank div{
        float:left;
    }
    .f7-add-list div{
        width:76%;
        border:none;
        /*background-color:#5ac8fa;*/
        height:38px;
        color:#ddd;
    }
    .header>::-webkit-input-placeholder{
        text-align:right;
    }
    .header a{
        float:right;
        width:18px;
        color:#b9b9b9;
        font-size:22px;
    }
    .f7-add{
        margin-top:-34px;
    }
    .f7-add-title{
        padding-left:6%;
        padding-right:6%;
        font-size:8px;
        height:40px;
        line-height:40px;
        color:#000;
    }

    .f7-add-list{
        background-color:#fff;
        height:40px;
        padding-left:6%;
        padding-right:6%;
        line-height:40px;
        margin-top: -13px;
        margin-bottom:6%;
    }
    .f7-add-list span{
        width:20%;
        display:block;
        float:left;
        color:#000;
        height:40px;
    }
    .f7-add-list input{
        width:80%;
        float:left;
        border:none;
        /*background-color:#5ac8fa;*/
        height:38px;
    }
</style>