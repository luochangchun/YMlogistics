<template>
    <f7-page>
        <f7-navbar title="证照登记" back-link="Back" sliding></f7-navbar>
        <f7-block style="margin:0;padding:0">
            <p class="f7-carInformation-p">证件图片均经过严格保密处理,请您放心提交。</p>
            <div class="f7-photograph-picture">
                <a class="f7-photograph-picture-one ac-5">
                    <p>＋</p>
                    <span>驾驶证</span>
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
            <a href="">
                <button class="btn">注册</button>
            </a>
            <!--<div class="actions-modal modal-in">-->
                <!--<div class="actions-modal-group">-->
                    <!--<div class="actions-modal-button">拍照</div>-->
                    <!--<div class="actions-modal-button">从相册选择照片</div>-->
                    <!--<div class="actions-modal-button color-red">取消</div>-->
                <!--</div>-->
            <!--</div>-->
            <div v-if="isAlert">
                <div class="modal-overlay modal-overlay-visible"></div>
                <div class="modal modal-in" style="display: block; margin-top: -170px;">
                    <div class="modal-inner">
                        <div class="modal-title">拍照提示</div>
                        <div class="modal-text">
                            <img src="../../img/camera_1.png" alt="">
                            <p>证件信息：确保整张拍摄，证件号、有效日期清晰可见</p>
                        </div>
                    </div>
                    <div class="modal-buttons modal-buttons-1">
                        <span class="modal-button modal-button-bold" @click="cancelPhoto">取消</span>
                    </div>
                </div>
            </div>

        </f7-block>
    </f7-page>
</template>

<script>
	export default {
		data() {
			return {
				isAlert: null
            };
		},
		mounted: function() {
			var self = this;
            var myApp = new Framework7();
            var $$ = Dom7;
			console.log($$('.ac-5'));
            //- With callbacks on click
            $$('.ac-5').on('click', function () {
                var buttons = [
                    {
                        text: '拍照',
                        onClick: function () {
                            myApp.alert('确保证照清晰可见','确认拍照？',function(){
								self.isAlert = true;
                            });
                        }
                    },
                    {
                        text: '从相册中选择',
                        onClick: function () {
//                            myApp.alert('从相册中选择click')
                        }
                    },
                    {
                        text: '取消',
                        color: 'red',
                        onClick: function () {
//                            myApp.alert('取消click')
                        }
                    },
                ];
                myApp.actions(buttons);
            });
        },
		methods: {
			cancelPhoto (){
				this.isAlert = false;
            }
        }
	}
</script>

<style>
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