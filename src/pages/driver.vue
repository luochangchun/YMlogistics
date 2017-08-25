<template>
    <f7-page>
        <f7-navbar title="司机管理" back-link="Back" sliding>
            <div class="right">
                <a href="/addPhoto/" style="font-size:14px;"><span v-show="!driverActive">添加</span></a>
            </div>
        </f7-navbar>
        <div class="f7-driver-all">
            <div class="f7-driver-personal-information">
                <div class="f7-work-information">
                    <div :class="{driver:driverActive}" @click="driverActive=true">个人信息</div>
                    <div :class="{driver:!driverActive}" @click="driverActive=false">证件相片</div>
                </div>
            </div>

            <div v-show="driverActive">
                <div class="driver-all" v-show="isSure1">
                    <p class="f7-driver-p">当前司机:陈子福 13430262691</p>
                    <div class="f7-enjoy-list" style="clear:both;">
                        <div class="f7-enjoy-list-img">
                            <img src="../../img/rights.png" style="margin-top:5px;">
                        </div>
                        <div class="f7-enjoy-list-title"style="width:80%;height:40px;">
                            陈子福 13430262691
                        </div>
                        <a @click="isSure=true;isSure1=false" class="f7-driver-list-right">修改</a>
                    </div>
                </div>
                <div v-show="isSure" id="alter">
                    <div class="f7-driver-list">
                        <span>姓名</span> <input placeholder="请输入姓名">
                    </div>
                    <div class="f7-driver-list">
                        <span>手机号</span> <input  placeholder="请输入手机号">
                    </div>
                    <div class="f7-driver-list">
                        <span>身份证号</span> <input placeholder="请输入身份证号">
                    </div>
                    <button class="btn" @click="isSure1=true;isSure=false">返回</button>
                </div>
            </div>



            <div v-show="!driverActive">
                <p class="f7-driver-p">如需要修改已认证的证件，请致电客服</p>
                <div class="f7-driver-photo">
                    <p class="f7-driver-p">基本证照</p>
                    <div class="f7-driver-verified">
                        <div style="width:100%;height:40px;">
                            <div class="f7-driver-true">
                                <img src="../../img/rights.png" alt="">&nbsp;
                            </div>
                            <p>已审核</p>
                        </div>
                        <span>驾驶证</span>
                    </div>
                </div>
            </div>
        </div>
    </f7-page>
</template>

<script>
	export default {
		data() {
			return {
				driverActive:true,
                isSure:false,
                isSure1:true
            };
        },
		methods: {

        }
    }
</script>

<style>
    #alter{
        padding-top:10px;
        height:40px;
        clear:both;
    }


    .f7-driver-list{
        background-color:#fff;
        height:40px;
        padding-left:6%;
        padding-right:6%;
        line-height:40px;
        margin-bottom:10px;
    }
    .f7-driver-list span{
        width:20%;
        display:block;
        float:left;
        color:#000;
        height:40px;
    }
    .f7-driver-list input{
        width:80%;
        float:left;
        border:none;
        /*background-color:#5ac8fa;*/
        height:38px;
    }




    .f7-driver-verified{
        width:100px;
        height:65px;
        border:1px solid #9CCE13;
        margin-left:6%;
        border-radius:5px;
    }
    .f7-driver-verified span{
        clear:both;
        color:#b9b9b9;
        font-size:8px;
        display: block;
        margin-bottom:-10px;
        position: relative;
        bottom:20px;
        text-align: center;
    }
    .f7-driver-verified p{
        line-height:1px;
        height:22px;
        float:left;
    }
    .f7-driver-true img{
        width:22px;
        padding-left:15px;
        padding-top:20px;
        float:left;
        margin-right:8px;
    }

    .driver{
        border-bottom:3px solid #9CCE13;
    }
    .f7-work-information div{
        float:left;
        width:50%;
        text-align: center;
        height:37px;
        line-height:37px;
        font-size:14px;
    }
    .f7-work-information{
        background-color:#fff;
        height:40px;
    }
    .f7-driver-p{
        height:40px;
        font-size:14px;
        color:#b3b3b3;
        padding-left:6%;
        padding-right:6%;
        line-height:40px;
        margin:0;
    }
    .f7-driver-list-right{
        font-weight: normal;
        font-size:14px;
        width:10%;
        display:inline-block;
        line-height:40px;
    }
    .f7-driver-photo{
        background-color:#fff;
        height:120px;
    }
</style>