<template>
    <f7-page>
        <f7-navbar title="设置" back-link="Back" sliding></f7-navbar>
        <f7-block style="margin:0;padding:0">
            <a href="/pwd/" class="f7-enjoy-list" style="clear:both;">
                <div class="f7-enjoy-list-title">
                    修改密码
                </div>
                <a href=""class="f7-enjoy-list-right">＞</a>
            </a>
            <div href="//" class="f7-enjoy-list" style="clear:both;">
                <div class="f7-enjoy-list-title">
                    服务协议
                </div>
                <a href="//"class="f7-enjoy-list-right">＞</a>
            </div>
            <button class="btn" @click="cencelBtn">退出当前账号</button>
        </f7-block>
    </f7-page>
</template>

<script>
	export default {
		methods: {
			cencelBtn() {
				let self = this;
				let app = new Framework7();
				app.confirm('','确定退出账号？', function () {
					self.$router.load({url: '/mine/'})
				})
			}
		}
    }
</script>

<style>

</style>