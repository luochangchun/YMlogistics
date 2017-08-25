<template>
    <span>
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
                        <p>新建异常</p>
                        <div class="f7-abnormal-tableBox">
                            <table class="f7-abnormal-table">
                                <thead>
                                    <tr>
                                        <th>类型</th>
                                        <th>原因</th>
                                        <th>款项性质</th>
                                        <th>金额(元)</th>
                                        <th>状态</th>
                                        <th>操作</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>货损货差</td>
                                        <td>出现货损</td>
                                        <td>扣款</td>
                                        <td>100</td>
                                        <td>新建</td>
                                        <td>
                                            <button>确定</button>
                                            <button style="display: none">撤销</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                         </div>
                    </div>

                    <div v-show="abnormalB" class="f7-abnormalB">
                        <p>新建异常</p>
                        <div class="f7-abnormalB-input" style="margin-top:-11px;">类型 <input type="text"placeholder="请选择"></div>
                        <div class="f7-abnormalB-radio">
                            <input type="radio" name="radio">扣款
                            <input type="radio" name="radio">补款
                        </div>
                        <div class="f7-abnormalB-input">类型 <input type="text"placeholder="金额（元）"></div>
                        <p>原因:</p>
                        <div class="f7-abnormalB-input"style="margin-top:-15px"><textarea type="text"></textarea></div>
                        <button class="btn">确定</button>
                    </div>

                    <div v-show="abnormalC" class="f7-abnormalC">
                        <p>全部异常记录</p>
                        <div class="f7-abnormal-tableBox">
                            <table class="f7-abnormal-table">
                                <thead>
                                    <tr>
                                        <th>类型</th>
                                        <th>原因</th>
                                        <th>款项性质</th>
                                        <th>金额(元)</th>
                                        <th>状态</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>货损货差</td>
                                        <td>出现货损</td>
                                        <td>扣款</td>
                                        <td>100</td>
                                        <td>已撤销</td>
                                    </tr>
                                    <tr>
                                        <td>货损货差</td>
                                        <td>出现货损</td>
                                        <td>扣款</td>
                                        <td>100</td>
                                        <td>已确定</td>
                                    </tr>
                                </tbody>
                            </table>
                         </div>
                    </div>
                </f7-block>
            </f7-page>
    </span>

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
    .f7-abnormal-tableBox{
        width:100vw;
        overflow: auto;
    }
    .f7-abnormal-table{
        text-align:center;
        overflow-x: auto;
        font-size:14px;
        line-height:30px;
    }

    .f7-abnormal-table thead tr{
        display: table-row;
        vertical-align: inherit;
        border-color: inherit;
    }
    .f7-abnormal-table thead tr th{
        width:200px;
        padding:0  10px;
        white-space:nowrap;
    }

    .f7-abnormal-table tbody tr:nth-of-type(odd){
        background-color:#fff;
    }
    .f7-abnormal-table tbody tr td{
        width:200px;
        padding:0  10px;
        white-space:nowrap;
    }
    .f7-abnormal-table button{
        background-color:#9CCE13;
        color:#fff;
        border:none;
    }
    .f7-abnormalC p{
        font-size:14px;
        font-weight:600;
        color:#fff;
        background-color:#6faedf;
        padding-left:6%;
        height:40px;
        line-height:40px;
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
    .f7-abnormalB p{
        font-size:14px;
        font-weight:600;
        color:#fff;
        background-color:#6faedf;
        padding-left:6%;
        height:40px;
        line-height:40px;
    }
    .f7-abnormalB-input{
        height:40px;
        line-height:40px;
        padding-left:6%;
        background-color:#fff;
        margin-bottom:10px;
        text-align: center;
        font-size:14px;
    }
    .f7-abnormalB-input input{
        height:30px;
        width:75%;
        margin-left:20px;
        border:none;
        background-color:#EFEFF4;
        padding-left:15px;
    }
    .f7-abnormalB-radio{
        padding-left:5%;
        background-color:#fff;
        height:40px;
        line-height:40px;
        margin-bottom:10px;
        font-size:14px;
    }
    .f7-abnormalB-input textarea{
        width:85%;
        height:30px;
        margin-left:10px;
        border:none;
        background-color:#EFEFF4;
        padding-left:15px;
        margin-top:3px;
    }
    .f7-abnormalB-input span{
        padding-top:0;
        display: inline-block;
    }
    .f7-abnormalB-input span{

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