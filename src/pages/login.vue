<template>
    <f7-page>
        <f7-navbar title="账号登录" back-link="Back" sliding></f7-navbar>
        <f7-block style="margin:0;padding:0">
            <!--<div class="f7-login-list" v-show="isboxone">-->
                <!--<ul>-->
                    <!--<li @click="getFont(item)" v-for="item in car1Num" v-text="item"></li>-->
                <!--</ul>-->
            <!--</div>-->
            <!--<div class="f7-login-list" v-show="isBoxtwo">-->
                <!--<ul>-->
                    <!--<li @click="addNum(item)" v-for="item in NUM1Num" v-text="item"></li>-->
                <!--</ul>-->
            <!--</div>-->
            <div class="f7-login-input">
                <input placeholder="填写手机号">
                <input type="text" v-model="pwd"placeholder="密码">
                <button class="btn" @click="cencelBtn">登录</button>
            </div>
            <div class="f7-login-footer">
                <a href="/register/" style="float:left">注册新用户</a>
                <a href="#" style="float:right">忘记密码?</a>
            </div>
            <div class="" @click="openPhone">
                <div class="f7-enjoy-list" style="bottom:0;position:fixed;width:100%;height:55px;left: 0;">
                    <div class="f7-enjoy-list-title" style="text-align:center;width:100%;margin-left:-6%;font-size:18px;color:#007aff;line-height:55px;">
                        拨打客服电话
                    </div>
                </div>
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
				carname: null,
				pwd: null,
				isBoxtwo: false,
				isboxone: true,
//                sendData: {
//					phone: '',
//					code: '',
//					password: '',
//					re_password: '',
//					company: '',
//					license: '',
//					img_url: '',
//                }
            };
        },
//        beforeMount() {
//			getData(this.phone,this.code,this.password,this.re_password,this.company,this.license,this.img_url);
//        },
		methods: {
			openPhone() {
				let app = new Framework7();
				app.confirm('123465798', '拨打客服电话', function () {
					window.location.href = "tel:123465798";
				})
			},
			getFont(item) {
				this.carname = item;
				if (item.length <= 0) {
					this.isboxone = T;
				} else {
					this.isBoxtwo = T;
					this.isboxone = F;
				}
			},
			addNum(item) {
				if (this.carname.length >= 7) {
					return;
				}
				this.carname = this.carname + item;
			},
			showshow() {
				this.carname = this.carname.substring(0, this.carname.length - 1);
				if (this.carname.length <= 0) {
					this.isboxone = T;
					this.isBoxtwo = F;
				} else {
					this.isboxone = F;
					this.isBoxtwo = T;
				}
			},
//            registerData(phone,code,password,re_password,company,license,img_url){
//				this.axios.post('http://192.168.11.220/YM/api/Register/registerCargo', {
//					phone: phone,
//					code: code,
//					password: password,
//					re_password: re_password,
//					company: company,
//					license: license,
//					img_url: img_url
//				})
//					.then(function (response) {
//						console.log(response);
//					})
//					.catch(function (error) {
//						console.log(error);
//					});
//            }
			cencelBtn() {
				let self = this;
				let app = new Framework7();
				app.confirm('', '确定登录？', function () {
					self.$router.load({url: '/mine/'})
				})
			}

		}
    }
</script>

<style>
    .f7-login-input input:first-child{
        margin-top:10px;
    }
    .f7-login-input input{
        padding-left:6%;
        padding-right:6%;
        color:#000;
        width:88%;
        border:none;
        height:40px;
        margin-bottom:1px;
    }
    .btn{
        margin-left:6%;
        margin-right:6%;
        width:88%;
        height:40px;
        border:none;
        background-color:#9CCE13;
        color:#fff;
        font-size:16px;
        margin-top:10px;
        border-radius:5px;
    }
    .textcarnum{
        padding-left: 6%;
        padding-right:6%;
        color: #000;
        width: 88%;
        border: none;
        height: 40px;
        margin-bottom: 1px;
        line-height: 40px;
        background:#fff;
        margin-top:10px;
    }
    .f7-login-list{
        overflow: hidden;
        margin-left:0;
        margin-right:6%;
    }
    .f7-login-list ul li{
        width:15%;
        margin-left:2px;
        margin-bottom:2px;
        height:40px;
        line-height:40px;
        float:left;
        list-style: none;
        font-size:14px;
        color:#000;
        background-color:#fff;
        text-align: center;
    }
    .f7-login-footer{
        height:40px;
        line-height:40px;
        padding-left:6%;
        padding-right:6%;
    }
    .f7-login-footer a{
        width:70px;
        display:inline-block;
    }

</style>