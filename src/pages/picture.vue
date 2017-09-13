<template>
    <f7-page>
        <f7-navbar title="证照登记" back-link="Back" sliding></f7-navbar>
        <f7-block style="margin:0;padding:0">
            <p class="f7-carInformation-p">证件图片均经过严格保密处理,请您放心提交。</p>
            <div class="f7-photograph-picture">
                <a class="f7-photograph-picture-one ac-5">
                    <div class="uploadImg" @click="clickInputFile($event)" title="点击添加图片">
                        <div  v-show="!updateData.Aimage" data-val="image" class="addimgbtn" @click="clickInputFile($event)" title="点击添加图片">
                            <p>＋</p>
                            <span>驾驶证</span>
                        </div>
                        <a v-show="updateData.Aimage"><img src=""/></a>
                    </div>
                </a>
                <input type="file" id="inputfile" style="opacity:0;filter:alpha(opacity=0)"@change="uploadImg"accept="image/jpeg,image/jpg,image/png,image/webp">

                <a class="f7-photograph-picture-one ac-5">
                    <div class="uploadImg" @click="clickInputFile($event)" title="点击添加图片">
                        <div  v-show="!updateData.Bimage" data-val="image" class="addimgbtn" @click="clickInputFile($event)" title="点击添加图片">
                            <p>＋</p>
                            <span>行驶证</span>
                        </div>
                        <a v-show="updateData.Bimage"><img src=""/></a>
                    </div>
                </a>

                <a class="f7-photograph-picture-one ac-5">
                    <div class="uploadImg" @click="clickInputFile($event)" title="点击添加图片">
                        <div  v-show="!updateData.Cimage" data-val="image" class="addimgbtn" @click="clickInputFile($event)" title="点击添加图片">
                            <p>＋</p>
                            <span>本人头像</span>
                        </div>
                        <a v-show="updateData.Cimage"><img src=""/></a>
                    </div>
                </a>
            </div>
            <a href="javascript:">
                <button class="btn" @click="cencelBtn">发送</button>
            </a>
        </f7-block>
    </f7-page>
</template>


<script>
	export default{
		data(){
			return{
				updateData:false
			};
		},
		mounted() {
		},

		methods: {
//			clickInputFile: function (event) {
//				this.currentClick = $(event.currentTarget)
//				$('#inputfile').click();
//			},
//			uploadImg: function () {
//				var self = this;
//				var data = new FormData();
//				var itemfile = event.currentTarget.files[0];
//				$.each($(itemfile), function (i, file) {
//					data.append('upload_file', file);
//				});
//				interface.imgUpload(data, function () {
//					self.currentClick.text('上传中');
//				}, function (res) {
//					self.updatedimg = res.upload_file;
//					self.images.push(res.upload_file);
//					self.currentClick.text('上传完成');
//				}, function () {
//					self.currentClick.text('+');
//				}, function (err) {
//					layer.msg('上传失败!', {time: 1000, offset: 't'});
//					self.currentClick.text('+');
//				});
//			}
		}
	}
</script>
<style>

</style>