<template>
    <f7-page>
        <f7-navbar title="车牌号注册" back-link="Back" sliding></f7-navbar>
        <f7-block style="margin:0;padding:0">
            <div class="f7-login-list" v-show="isboxone">
                <ul>
                    <li @click="getFont(item)" v-for="item in car1Num" v-text="item"></li>
                </ul>
            </div>
            <div class="f7-login-list" v-show="isBoxtwo">
                <ul>
                    <li @click="addNum(item)" v-for="item in NUM1Num" v-text="item"></li>
                </ul>
            </div>
            <div class="f7-login-input">
                <div class="textcarnum">
                    <span v-text.trim="carname"></span>
                    <i @click="showshow" style="float:right;display:block;"><img src="../../img/delete.png" alt=""></i>
                </div>
                <input type="text" v-model.trim="pwd"placeholder="请设置密码(6位数字)">
                <a href="javascript:;"><button class="btn" @click="nexttwo">下一步</button></a>
            </div>
            <div class="f7-carNum-footer">
                <p>轻触"下一步"按钮，即表示你同意<a href="#">《益马网服务协议》</a></p>
            </div>

        </f7-block>
    </f7-page>
</template>

<script>
	const [F,T] = [false, true];
	export default {
		data() {
			return {
				car1Num: ['川','鄂','甘','赣','贵','桂','黑','泸','吉','冀','津','晋','京','辽','鲁','蒙','闽','宁','青','琼','陕','苏','皖','湘','新','渝','豫','粤','云','藏','浙','','','','',''],
				NUM1Num: [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
				carname:"",
				pwd: "",
				isBoxtwo: false,
				isboxone: true,
                allData: null
			};
		},
        mounted(){
			this.allData = this.$route.options.query.allData;
        },
		methods: {
			nexttwo(){
//					var data = this.carname;
//					if(!data.carname.length){
//						myApp.alert('车牌号不能为空！');
//						return;
//					}
//				if(!data.pwd.length){
//					myApp.alert('密码不能为空！');
//					return;
//				}


				var data = {
                    carCode: this.carname,
					pwd: this.pwd
                }
				var datas = Dom7.extend({}, this.allData, data);
				console.log(datas);
				this.$router.load({url: '/photograph/', query: {allData: datas}});
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

			getFont(item){
				this.carname = item;
				if(item.length <= 0){
					this.isboxone = T;
				}else{
					this.isBoxtwo = T;
					this.isboxone = F;
				}
			},
			addNum(item){
				if(this.carname.length>=7){
					return;
				}
				this.carname = this.carname+item;
			},
			showshow(){
				this.carname = this.carname.substring(0,this.carname.length-1);
				if(this.carname.length<=0){
					this.isboxone = T;
					this.isBoxtwo = F;
				}else{
					this.isboxone = F;
					this.isBoxtwo = T;
				}
			}
		}
	}
</script>

<style>
    .f7-carNum-footer p{
        margin-left:6%;
        margin-right:6%;
        font-size:12px;
    }
    .textcarnum i img{
        width:20px;
        padding-top:10px;
    }
</style>