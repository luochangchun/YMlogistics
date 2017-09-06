<template>
    <f7-page>
        <f7-navbar title="证照登记" back-link="Back" sliding></f7-navbar>
        <f7-block style="margin:0;padding:0">
            <p class="f7-carInformation-p">证件图片均经过严格保密处理,请您放心提交。</p>
            <div class="f7-photograph-picture">
                <a class="f7-photograph-picture-one ac-5">
                    <div v-show="photo"@click="change_input()">
                        <p>＋</p>
                        <span>驾驶证</span>
                    </div>
                    <form id="addTextForm" @change="setImg($event)"></form>
                    <div id="img-wrapper" @click="deleteImg($event)"></div>
                    <div class="photograph_add_img" v-show="!photo">
                        <img src="../../img/car_1.png" alt="">
                        <span @click="deletePhoto(index)"></span>
                    </div>
                </a>
                <a class="f7-photograph-picture-one ac-5">
                    <p>＋</p>
                    <span>行驶证</span>
                </a>
                <a class="f7-photograph-picture-one ac-5">
                    <p>＋</p>
                    <span>本人头像</span>
                </a>
            </div>
            <a href="javascript:">
                <button class="btn" @click="cencelBtn">注册</button>
            </a>
            <!--<div v-if="isAlert">-->
                <!--<div class="modal-overlay modal-overlay-visible"></div>-->
                <!--<div class="modal modal-in" style="display: block; margin-top: -170px;">-->
                    <!--<div class="modal-inner">-->
                        <!--<div class="modal-title">拍照提示</div>-->
                        <!--<div class="modal-text">-->
                            <!--<img src="../../img/camera_1.png" alt="">-->
                            <!--<p>证件信息：确保整张拍摄，证件号、有效日期清晰可见</p>-->
                        <!--</div>-->
                    <!--</div>-->
                    <!--<div class="modal-buttons modal-buttons-1">-->
                        <!--<span class="modal-button modal-button-bold" @click="cancelPhoto">取消</span>-->
                    <!--</div>-->
                <!--</div>-->
            <!--</div>-->

        </f7-block>
    </f7-page>
</template>


<script>
	function getFileUrl(obj) {
		let url;
		url = window.URL.createObjectURL(obj.files.item(0));
		return url;
	}


	export default {
		name: 'accident',
		data () {
			return {
				imgNum:4,
			}
		},
		methods: {
			cencelBtn() {
				let self = this;
				let app = new Framework7();
				app.confirm('','确定注册？', function () {
					self.$router.load({url: '/mine/'})
				})
			},
			deletePhoto(index){
				this.photo.splice(index,1);
			},

			change_input(){
				let inputArr=$('#addTextForm input');
				let add_inputId='';     //需要被触发的input
				for(let i=0;i<inputArr.length;i++){
					// 根据input的value值判断是否已经选择文件
					if(!inputArr[i].value){          //如果没有选择,获得这个input的ID
						add_inputId=inputArr[i].id;
						break;
					}
				}
				if(add_inputId){                   //如果需要被触发的input ID存在,将对应的input触发
					return  $("#"+add_inputId).click();
				}else{
					alert("最多选择"+this.imgNum+"张图片")
				}
			},
			//当input选择了图片的时候触发,将获得的src赋值到相对应的img
			setImg(e){
				let target=e.target;
				$('#img_'+target.id).attr('src',getFileUrl(e.srcElement));
			},
			//点击图片删除该图片并清除相对的input
			deleteImg(e){
				let target=e.target;
				let inputID='';       //需要清除value的input
				if(target.nodeName=='IMG'){
					target.src='';
					inputID=target.id.replace('img_','');    //获得需要清除value的input
					$('input#'+inputID).val("");
				}
			},

		}

	}
</script>






<!--<script>-->
	<!--export default {-->
		<!--data() {-->
			<!--return {-->
				<!--isAlert: null-->
            <!--};-->
		<!--},-->
		<!--mounted: function() {-->
			<!--var self = this;-->
            <!--var myApp = new Framework7();-->
            <!--var $$ = Dom7;-->
			<!--console.log($$('.ac-5'));-->
            <!--//- With callbacks on click-->
            <!--$$('.ac-5').on('click', function () {-->
                <!--var buttons = [-->
                    <!--{-->
                        <!--text: '拍照',-->
                        <!--onClick: function () {-->
                            <!--myApp.alert('确保证照清晰可见','确认拍照？',function(){-->
								<!--self.isAlert = true;-->
                            <!--});-->
                        <!--}-->
                    <!--},-->
                    <!--{-->
                        <!--text: '从相册中选择',-->
                        <!--onClick: function () {-->
<!--//                            myApp.alert('从相册中选择click')-->
                        <!--}-->
                    <!--},-->
                    <!--{-->
                        <!--text: '取消',-->
                        <!--color: 'red',-->
                        <!--onClick: function () {-->
<!--//                            myApp.alert('取消click')-->
                        <!--}-->
                    <!--},-->
                <!--];-->
                <!--myApp.actions(buttons);-->
            <!--});-->
        <!--},-->
		<!--methods: {-->
			<!--cancelPhoto (){-->
				<!--this.isAlert = false;-->
            <!--}-->
        <!--}-->
	<!--}-->
<!--</script>-->

<style>
    .photograph_add_img{
        width:100%;
        height:100px;
        text-align: center;
        border:1px solid #ddd;
    }
    .f7-photograph-picture-one>.photograph_add_img>span{
        display: block;
        background-image:url(../../img/delete.png);
        background-repeat: no-repeat;
        position:relative;
        top:-108%;
        right:-85%;
        background-size:20px;
        width:25px;
        height:25px;
    }
    .photograph_add_img img{
        width:100px;
        height:100px;

    }
    .f7-photograph-picture a{
        color:#ddd;
    }
    .f7-photograph-picture {
        padding: 15px 6% 15px 6%;
        background-color: #fff;
        margin-top: -10px;
        height: 255px;
    }

    .f7-photograph-picture-one {
        width: 40%;
        height: 100px;
        border: 1px dashed #b9b9b9;
        float: left;
        border-radius: 5px;
        margin: 13px;
    }

    .f7-photograph-picture-one p {
        font-size: 38px;
        font-weight: normal;
        text-align: center;
        margin-top: 20px;
        height: 10px;
    }

    .f7-photograph-picture-one span {
        font-size: 14px;
        text-align: center;
        padding-bottom: 10px;
        display: block;
    }
</style>