<template>
    <f7-page>
        <f7-navbar title="待确认详情" back-link="Back" sliding>
        </f7-navbar>
        <f7-block style="margin:0;padding:0">
            <div class="chip f7-often-chip">
                <div class="">编码</div>
                <div>省份</div>
            </div>
            <a href="/city/" v-for="(item,index) in shengList">
                <div class="chip f7-often-chip">
                    <div class="">{{item.num}}</div>
                    <div>{{item.sheng}}</div>
                    <a href=""style="color:#000;font-size:14px;">已选</a>
                </div>
            </a>
        </f7-block>
    </f7-page>
</template>

<script type="text/ecmascript-6">
	export default {
		data() {
			return {
				shengList: [
					{
						num: '210000',
						sheng: '广东省',
					},
					{
						num: '310000',
						sheng: '湖北省'
					},
					{
						num: '310000',
						sheng: '湖北省'
					}
				]
			};
		},
		methods: {

		}
	}
</script>

<style>

</style>