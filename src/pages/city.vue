<template>
    <f7-page>
        <f7-navbar title="选择常跑城市" back-link="Back" sliding>
            <div class="right">
                <a href="/oftenAdd/"style="font-size:14px;">保存</a>
            </div>
        </f7-navbar>
        <f7-block style="margin:0;padding:0">
            <div class="list-block">
                <ul style="padding-left:2%;padding-right:6%;margin-top:-40px;">
                    <li>
                        <label class="label-checkbox item-content">
                            <div class="item-inner" style="color:#000;font-size:16px;padding-right:0;">
                                <div class="item-title">编号</div>
                                <div class="f7-item-content">城市</div>
                                <input type="checkbox" name="my-checkbox" v-model="checkAll"v-check-all="checkAll" check-data="checkData">
                                <div class="item-media">
                                    <i class="icon icon-form-checkbox"></i>
                                </div>
                            </div>
                        </label>
                    </li>
                    <li v-for="(item,index) in cityList">
                        <label class="label-checkbox item-content">
                            <div class="item-inner"style="color:#000;font-size:14px;  padding-right: 0px;">
                                <div class="item-title">{{item.cityNum}}</div>
                                <div class="f7-item-content">{{item.cityName}}</div>
                                <input type="checkbox" name="my-checkbox" :value="item.cityNum"  v-model="item.checked">
                                <div class="item-media">
                                    <i class="icon icon-form-checkbox"></i>
                                </div>
                            </div>
                        </label>
                    </li>
                </ul>
            </div>



        </f7-block>
    </f7-page>
</template>

<script type="text/ecmascript-6">
export default {
//	'check-all': {
//		twoWay: true,
//		params: ['checkData'],
//		bind() {
//			this.vm.$watch(this.params.checkData, (checkData) => {
//				if (checkData.every((item) => item.checked)) {
//					this.set(true);
//				} else {
//					this.set(false);
//				}
//			}, { deep: true });
//		},
//		// checkAll发生更改时
//		update(checkAll) {
//			if (checkAll) {
//				this.vm[this.params.checkData].forEach((item) => {
//					item.checked = true;
//				});
//			} else {
//				this.vm[this.params.checkData].forEach((item) => {
//					item.checked = false;
//				});
//			}
//		},
//	},









	data() {
		return {
			cityList: [
                {
                	cityNum: 210000,
                    cityName: '沈阳市'
                },
				{
					cityNum: 210100,
					cityName: '沈阳市'
				}
            ]
        };
    },
    methods:{
		allCheck() {

        }
    }
}
</script>

<style>
    .f7-item-content{
        margin-right:25%;
        width:100px;
        text-align: center;
    }
</style>