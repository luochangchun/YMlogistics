<template>
    <f7-page>
        <f7-navbar title="异常信息" back-link="back"sliding></f7-navbar>
        <f7-block style="padding:0;margin:0">
            <div class="f7-abnormal-header">
                <ul>
                    <li :class="{abnormal:abnormalA}" @click="abnormalA=true;abnormalB=false;abnormalC=false">异常处理</li>
                    <li :class="{abnormal:abnormalB}" @click="abnormalA=false;abnormalB=true;abnormalC=false">新建异常</li>
                    <li :class="{abnormal:abnormalC}" @click="abnormalC=true;abnormalA=false;abnormalB=false">查看全部记录</li>
                </ul>
            </div>
            <div v-show="abnormalA" class="f7-abnormalA">
                <p>异常处理</p>
                <div class="f7-abnormalA-input" style="margin-top:-11px;">类型 <input type="text"placeholder="请选择"></div>
                <div class="f7-abnormalA-radio">
                    <input type="radio" name="radio">扣款
                    <input type="radio" name="radio">补款
                </div>
                <div class="f7-abnormalA-input">类型 <input type="text"placeholder="金额（元）"></div>
                <div class="f7-abnormalA-input"><span>原因</span><textarea type="text"></textarea></div>
            </div>
        </f7-block>
    </f7-page>
</template>

<script type="text/ecmascript-6">

	const YMWLNAME_list=["f7-work","f7-enjoy","f7-vault","f7-mine"];
	const False=false;
	export default{
		data(){
			return{
				abnormalA:true,
				abnormalB:false,
				abnormalC:false
			};
		},
		mounted(){

		},
		methods: {

        }
	};

</script>

<style>
    .f7-abnormalA{

    }
    .f7-abnormalA p{
        font-size:14px;
        font-weight:600;
        color:#fff;
        background-color:#6faedf;
        padding-left:6%;
        height:40px;
        line-height:40px;
    }
    .f7-abnormalA-input{
        height:40px;
        line-height:40px;
        padding-left:6%;
        background-color:#fff;
        margin-bottom:10px;
        text-align: center;
    }
    .f7-abnormalA-input input{
        height:30px;
        width:75%;
        margin-left:20px;
        border:none;
        background-color:#EFEFF4;
        padding-left:15px;
    }
    .f7-abnormalA-radio{
        padding-left:5%;
        background-color:#fff;
        height:40px;
        line-height:40px;
        margin-bottom:10px;
    }
    .f7-abnormalA-input textarea{
        width:75%;
        height:30px;
        margin-left:20px;
        border:none;
        background-color:#EFEFF4;
        padding-left:15px;
        margin-top:3px;
    }
    .f7-abnormalA-input span{
        padding-top:0;
        display: inline-block;
    }
    .f7-abnormalA-input span{

    }




    .abnormal{
        border-bottom:3px solid #9CCE13;
    }
    .f7-abnormal-header ul{
        padding:0;
        height:40px;
        background-color:#fff;
        line-height:40px;
    }
    .f7-abnormal-header ul li{
        width:33%;
        font-size: 14px;
        color:#000;
        list-style: none;
        float: left;
        text-align: center;
    }
</style>