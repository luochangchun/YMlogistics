<template>
    <f7-page>
        <f7-navbar title="电子回单" back-link="Back" sliding></f7-navbar>
        <f7-block style="margin:0;padding:0">
            <p class="f7-receipt-p">回执单须收货方签字、盖章，或签身份证号。请整张拍摄回单，确保文字清晰可见。</p>
            <div class="f7-photograph-picture">
                <div class="f7-photograph-picture-one ac-5">
                    <div v-for="(img,index) in images" class="f7-photograph-picture-one" title="点击添加图片">
						<a style="display: block">
							<img :src="'./house_p/file/FileCenter!download.hp?name='+img" alt="" />
							<i class="imgdel" @click="delimg(index)">X</i>
						</a>
						<p class="addimgbtn" @click="clickInputFile($event)" title="点击添加图片">+</p>
                    </div>
                </div>
				<input type="file" name="image" style="opacity:0;filter:alpha(opacity=0);" id="inputfile" @change="uploadImg" accept="image/jpeg, image/png, image/jpg, image/webp"/>
            </div>
            <a href=""><button class="btn">发送</button></a>
        </f7-block>
    </f7-page>
</template>



<style>
    .f7-receipt-p{
        line-height:25px;
        padding-left:6%;
        padding-right:6%;
    }
</style>