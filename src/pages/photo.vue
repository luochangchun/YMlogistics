<template>
    <f7-page>
        <f7-navbar title="享受" back-link="" sliding></f7-navbar>
        <f7-block style="padding:0;margin:0;">
            <div class="min-height-flex">
                <div class="f7-photograph-picture">
                    <a class="f7-photograph-picture-one ac-5" @click="img1">
                        <span v-show="!jszShow"><img src="" alt=""></span>
                        <span v-show="jszShow">
                            <p>＋</p>
                            <span>驾驶证</span>
                        </span>
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
                <input type="file" id="imgfile" style="display: none;" @change="imgDone(e)">
            </div>
        </f7-block>
    </f7-page>
</template>

<script>

	export default {
		data(){
			return {
				jszShow:true
            }
        },
        methods:{
			imgDone(e){

            },
            img1(){
                Dom7('#imgfile').click();
            }
        }
    }
</script>

<style>

</style>