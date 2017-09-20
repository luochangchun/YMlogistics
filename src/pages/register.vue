<template>
    <f7-page>
        <f7-navbar title="验证手机" back-link="Back" sliding></f7-navbar>
        <f7-block style="margin:0;padding:0">
            <div class="f7-register-all">
                <div class="f7-register-all-top">
                     <input type="text"placeholder="请输入手机号" v-model.trim="sendData.phone">
                     <a href="#">获取验证码</a>
                </div>
				<input class="f7-register-all-bottom" v-model.trim="sendData.real_name" type="text" placeholder="请输入姓名">
                <input class="f7-register-all-bottom" v-model.trim="sendData.card" type="text" placeholder="请输入身份证号">
				<!--<div class="f7-register-all-top">-->
					<!--<input type="text" v-model="" placeholder="请输入验证码">-->
					<!--<a href="#"><img src="../../img/u.jpg" alt=""></a>-->
				<!--</div>-->
				<!--<input class="f7-register-all-bottom" type="text"v-model.trim="" placeholder="请输入手机验证码">-->
                <input class="f7-register-all-bottom" v-model.trim="sendData.license_code" type="text" placeholder="请输入现住详细地址">
                <a href="javascript:;"><button class="btn" @click="nextone">下一步</button></a>
                <p>手机号是验证身份、找回密码、收款支付时的重要安全凭证。</p>
                <ul>
                    <li>请确保使用你自己常用的手机号</li>
                </ul>
            </div>



        </f7-block>
    </f7-page>
</template>
<script>
	const [F,T] = [false, true];
	const myApp = new Framework7();
	export default {
            data() {
                return {
                    sendData: {
						real_name: '',
                        phone:'',
                        password: '',
						card:'',
						gender:'',
						birthday:'',
						place:'',
						license_code: ''
                    }
              };
          },
            beforeMount() {
            },
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
			nextone(){
                var data = this.sendData;
            	if(!data.real_name.length){
                    myApp.alert('姓名不能为空！');
                    return;
                }
				if(!data.phone.length){
					myApp.alert('手机号不能为空！');
					return;
				}
				if(!data.card.length){
					myApp.alert('身份证不能为空！');
					return;
				}
				if(!data.license_code.length){
					myApp.alert('姓名不能为空！');
					return;
				}
				this.$router.load({url: '/carNum/', query: {allData: this.sendData}});
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
	.f7-register-all-top a img{
		width:100px;
		height:38px;
		margin-left:-20px;
		margin-top:1px;
	}
    .f7-register-all-top{
        margin-top:10px;
        height:40px;
        width:88%;
        padding-left:6%;
        padding-right:6%;
        background-color:#fff;
        margin-bottom:1px;
    }
    .f7-register-all-top input{
        width:70%;
        height:38px;
        line-height:38px;
        border:none;
        border-right:1px solid #EFEFF4;
    }
    .f7-register-all-top a{
        display:block;
        width:70px;
        line-height:40px;
        float:right;
        height:40px;
    }
    .f7-register-all-bottom{
        width:88%;
        padding-left:6%;
        padding-right:6%;
        height:40px;
        border:none;
        margin-top:10px;
    }
    .f7-register-all p{
        margin-left:6%;
        margin-right:6%;
        font-size:12px;
    }
    .f7-register-all ul li{
        font-size:12px;
    }
</style>