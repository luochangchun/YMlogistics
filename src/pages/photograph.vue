<template>
    <f7-page>
        <f7-navbar title="证照登记" back-link="Back" sliding></f7-navbar>
        <f7-block style="margin:0;padding:0">
            <p class="f7-carInformation-p">证件图片均经过严格保密处理,请您放心提交。</p>
            <div class="f7-photograph-picture">
                <a class="f7-photograph-picture-one ac-5" @click="img1">
                    <span v-show="!jszShow"><img src="url" alt=""></span>
                    <span v-show="jszShow">
                        <p>＋</p>
                        <span>驾驶证</span>
                    </span>
                </a>
                <input type="file" id="inputfile" style="opacity:0;filter:alpha(opacity=0)" accept="image/jpeg,image/jpg,image/png,image/webp" @change="imgDone($event)">

                <a class="f7-photograph-picture-one ac-5">
                    <span v-show="!jszShow"><img src="" alt=""></span>
                    <span v-show="jszShow">
                        <p>＋</p>
                        <span>行驶证</span>
                    </span>
                </a>

                <a class="f7-photograph-picture-one ac-5">
                    <span v-show="!jszShow"><img src="" alt=""></span>
                    <span v-show="jszShow">
                        <p>＋</p>
                        <span>本人头像</span>
                    </span>
                </a>
            </div>
            <a href="javascript:">
                <button class="btn" >注册</button>
            </a>
        </f7-block>
    </f7-page>
</template>


<script>
	export default{
		data(){
			return{
				jszShow:true,
//                url:''
			};
		},
		mounted() {
			this.allData = this.$route.options.query.allData;
		},

		methods: {
			img1(){
				Dom7('#inputfile').click();
			},
			imgDone(e){
                console.log(e);
            }
		}
	}
</script>
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