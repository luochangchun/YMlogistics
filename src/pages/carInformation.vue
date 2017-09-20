<template>
    <f7-page>
        <f7-navbar title="完善车辆信息" back-link="Back" sliding></f7-navbar>
        <f7-block style="margin:0;padding:0">
            <span id="f7-car-add">
                <p class="f7-carInformation-p">补充车辆信息后,收到的货源信息将更加精准</p>
                <div class="f7-add-list header">
                    <span>车辆类别</span>
                    <div class="item-input" style="width:100%;height:40px;text-align:right">
                        <select name=""class="sh-size-modality" v-model="options1">
                            <option v-for="option in options1">
                                {{ option.text }}
                            </option>
                        </select>
                        <!--<span>Selected: {{ selected }}</span>-->
                    </div>
                </div>
                <div class="f7-add-list header">
                    <span>车板类型</span>
                    <div style="width:100%;height:40px;text-align:right">
                        <select name=""class="sh-size-modality" v-model="selected2">
                            <option v-for="option in options2">
                                {{ option.text }}
                            </option>
                        </select>
                        <!--<span>Selected: {{ selected }}</span>-->
                    </div>
                </div>
                <div class="f7-car-list header">
                    <span>车板长度</span><input  v-model.trim="length"placeholder="请输入长度">
                </div>
                <div class="f7-car-list header">
                    <span>车板宽度</span><input  v-model.trim="width"placeholder="请输入宽度">
                </div>
                <div class="f7-car-list header">
                    <span>厢车高度</span><input  v-model.trim="height"placeholder="请输入高度">
                </div>
            </span>
            <div class="f7-carInformation-list" style="margin-top:-10px;">
                <div style="padding-left:6%;width:32%;margin-right:6%;border-right:1px solid #b9b9b9">最大载重吨位</div>
                <div style="padding-right:6%;width:40%"><input type="text"  v-model.trim="tonnage" placeholder="请输入"></div>
                <div style="width:8%">吨</div>
            </div>
            <div class="f7-carInformation-list">
                <div style="padding-left:6%;width:32%;margin-right:6%;border-right:1px solid #b9b9b9">最大载重体积</div>
                <div style="padding-right:6%;width:40%"><input type="text"  v-model.trim="volume" placeholder="请输入"></div>
                <div style="width:8%">方</div>
            </div>
            <a href="/photograph/"><button class="btn" @click="nextthree">下一步</button></a>
        </f7-block>
    </f7-page>
</template>

<script>
	const [F,T] = [false, true];
	const myApp = new Framework7();
	export default {
		data(){
			return {
				selected1:'',
				selected2:'',
				length:'',
				width:'',
				height:'',
				tonnage:'',
				volume:'',
                options1: [
			{ text: '请选择', value: '请选择' },
			{ text: '普通货车', value: '普通货车' },
			{ text: '厢式货车', value: '厢式货车' },
            { text: '罐式货车', value: '罐式货车'},
			{ text: '牵引车', value: '牵引车' },
			{ text: '普通挂车', value: '普通挂车' },
			{ text: '罐式挂车', value: '罐式挂车' },
			{ text: '集装箱挂车', value: '集装箱挂车' },
			{ text: '仓栅式货车', value: '仓栅式货车' },
			{ text: '封闭货车', value: '封闭货车' },
			{ text: '平板货车', value: '平板货车' },
			{ text: '集装箱车', value: '集装箱车' },
			{ text: '自卸货车', value: '自卸货车' },
			{ text: '特殊结构货车', value: '特殊结构货车' },
			{ text: '专项作业车', value: '专项作业车' },
			{ text: '厢式挂车', value: '厢式挂车' },
			{ text: '仓栅式挂车', value: '仓栅式挂车' },
			{ text: '平板挂车', value: '平板挂车' },
			{ text: '自卸挂车', value: '自卸挂车' },
			{ text: '专项作', value: '专项作' },
			{ text: '车辆运输车', value: '车辆运输车' },
			{ text: '车辆运输车(单排)', value: '车辆运输车(单排)' }
				],
				options2: [
			{ text: '请选择',     value:'请选择'},
			{ text: '普通',       value:'普通'},
			{ text: '平板',       value:'平板'},
			{ text: '高低平板',   value:'高低平板'},
			{ text: '厢式',       value:'厢式'},
			{ text: '封闭',       value:'封闭'},
			{ text: '开顶厢',     value:'开顶厢'},
			{ text: '罐式',       value:'罐式',},
			{ text: '集装箱',     value: '集装箱'},
			{ text: '自卸',       value:'自卸'},
			{ text: '高栏',       value:'高栏'},
			{ text: '轴线板',     value:'轴线板'},
			{ text: '满论车',     value:'满论车'},
			{ text: '框架板',     value: '框架板'},
			{ text: '高低高坂',   value: '高低高坂'},
			{ text: '抽拉板',     value:'抽拉板'},
			{ text: '簸箕板',     value: '簸箕板'},
			{ text: '超低板',     value:'超低板'},
			{ text: '高低板高栏', value:'高低板高栏'},
			{ text: '笼子车',     value:'笼子车'},
			{ text: '叶片车',     value:'叶片车'}
				]
            }
        },
		mounted(){
			this.allData = this.$route.options.query.allData;
//			data = this.$route.options.query.data;
		},
        methods:{
			nextthree(){
//				var data = this.carname;
				if(!data.length.length){
					myApp.alert('车板长度不能为空！');
					return;
				}
				if(!data.width.length){
					myApp.alert('车板宽度不能为空！');
					return;
				}
				if(!data.height.length){
					myApp.alert('厢车高度不能为空！');
					return;
				}
				if(!data.tonnage.length){
					myApp.alert('最大载重吨位不能为空！');
					return;
				}
				if(!data.max_volume.length){
					myApp.alert('最大载重体积不能为空！');
					return;
				}
//				if(!data.width.length){
//					myApp.alert('密码不能为空！');
//					return;
//				}
//				if(!data.width.length){
//					myApp.alert('密码不能为空！');
//					return;
//				}

			var data={
				selected1:this.selected1,
				selected2:this.selected2,
				length:this.length,
				width:this.width,
				height:this.height,
				tonnage:this.tonnage,
				volume:this.volume
			}
			console.log(this.options);
            var datas=Dom7.extend({},this.allData, data,data,data);
			console.log(datas);
			this.$router.load({url:'/photograph/',query:{allData :datas}})
        },

			registerData(){
				this.axios.post(this.ajax_head+'/YM/api/recogn/upd_phone', {

				})
					.then(function (response) {
						console.log("注册成功!");
					})
					.catch(function (error) {
						console.log("注册失败，请重新输入!");
					});
			},
		},
    }
</script>

<style>
    .f7-add-list select{
        height:40px;
        width:30%;
        border:none;
    }
    .f7-car-list{
        background-color:#fff;
        height:40px;
        padding-left:6%;
        padding-right:6%;
        line-height:40px;
        margin-top: -13px;
        margin-bottom:20px;
    }
    .f7-car-list span{
        width:20%;
        display:block;
        float:left;
        color:#000;
        height:40px;
        margin-right:53%;
    }
    .f7-car-list input{
        width:26%;
        float:left;
        border:none;
        height:38px;
    }
    #f7-car-add>.header{
        padding-right:6%;
    }
    .f7-carInformation-p{
        margin-top:0;
        height:40px;
        line-height:40px;
        padding-left:6%;
        padding-right:0%;
    }
    .f7-carInformation-list{
        height:40px;
        background-color:#fff;
        margin-bottom:1px;
    }
    .f7-carInformation-list div{
        height:40px;
        float:left;
        line-height:40px;
    }
    .f7-carInformation-list div input{
        width:100%;
        height:36px;
        border:none;
    }
    .f7-carInformation-list span{
        /*display: inline-block;*/
    }
</style>