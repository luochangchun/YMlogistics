<template>
    <f7-page>
        <f7-navbar title="电子回单" back-link="Back" sliding></f7-navbar>
        <f7-block style="margin:0;padding:0">
            <p class="f7-receipt-p">回执单须收货方签字、盖章，或签身份证号。请整张拍摄回单，确保文字清晰可见。</p>
            <div class="f7-photograph-picture">
                <div class="f7-photograph-picture-one ac-5">
                    <div class="f7-photograph-picture-one" title="点击添加图片">
                        <p v-show="" data-val="image">+</p>
                        <a v-show=""><img src="../../img/car_1.png"/></a>
                    </div>
                    <!--<div>-->
                        <!--<p>＋</p>-->
                        <!--<span>添加图片</span>-->
                    <!--</div>-->
                </div>
                <!--<div class="f7-photograph-picture-one ac-5">-->
                    <!--<p>＋</p>-->
                    <!--<span>添加图片</span>-->
                <!--</div>-->
                <!--<div class="f7-photograph-picture-one ac-5">-->
                    <!--<p>＋</p>-->
                    <!--<span>添加图片</span>-->
                <!--</div>-->
            </div>
            <a href=""><button class="btn">发送</button></a>
        </f7-block>
    </f7-page>
</template>

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
							<!--myApp.alert('确保照片清晰可见','确认拍照？',function(){-->
<!--//								self.isAlert = true;-->
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
    .f7-receipt-p{
        line-height:25px;
        padding-left:6%;
        padding-right:6%;
    }
</style>