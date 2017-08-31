<template>
    <f7-page>
        <f7-navbar title="选择常跑城市" back-link="Back" sliding>
            <div class="right">
                <a href="/oftenAdd/"style="font-size:14px;">添加</a>
            </div>
        </f7-navbar>
        <f7-block style="margin:0;padding:0">
            <div class="chip f7-often-chip">
                <div class="">省份</div>
                <div>城市</div>
                <a style="color:#000;font-size:14px;"></a>
            </div>
            <div class="chip f7-often-chip" v-for="(item,index) in cityInfoList">
                <div class="">{{item.sheng}}</div>
                <div>{{item.city}}</div>
                <a @click="deleteCity(index)" class="chip-delete"></a>
            </div>
        </f7-block>
    </f7-page>
</template>

<script>
	export default {
		data() {
			return {
				cityInfoList: [
                    {
                    	sheng: '广东省',
                        city: '广州市'
                    },
					{
						sheng: '广西省',
						city: '南宁市'
					},
					{
						sheng: '河北省',
						city: '邯郸市'
					}
                ]
            };
        },
        methods: {
			deleteCity(index){
				this.cityInfoList.splice(index,1);
            }
        }
    }
</script>

<style>
    .f7-often-chip{
        height:40px;
        width:100%;
        background-color:#fff;
        color:#000;
        padding-left:6%;
        padding-right:0;
    }
    .f7-often-chip div{
        width:43%;
    }
</style>