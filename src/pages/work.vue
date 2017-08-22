<template>
    <f7-page>
        <f7-navbar title="运作单" back-link="Back" sliding></f7-navbar>
        <f7-block style="padding:0;margin:0">
            <div class="min-height-flex" style="min-height:calc(100vh - 120px)">
                <div class="f7-work-two">
                    <div class="f7-bankRecord-list-bottomLeft"style="margin-bottom:3%;color:#fff;">
                        广州&nbsp;&nbsp;<span>→</span>&nbsp;&nbsp;合肥
                    </div>
                    <div class="f7-bankRecord-list-top">
                        <div class="f7-bankRecord-list-topLeft f7-work-num1">
                            <span>提</span>2016-12-08 15:14
                        </div>
                        <div class="f7-bankRecord-list-topRight f7-work-num2">
                            <span>卸</span>2016-12-09 15:14
                        </div>
                    </div>
                </div>
                <div class="f7-vault-header-box">
                    <div class="f7-vault-header-box-top">
                        <a href=""><div class="f7-vault-notice"style="background-color:#f9d679;"><span>提货须知</span></div></a>
                        <a href=""><div class="f7-vault-abnormal"style="background-color:#e8aead"><span>异常信息</span></div></a>
                    </div>
                    <div class="f7-vault-header-box-bottom">
                        <a href=""><div class="f7-vault-receipt"style="background-color: #d4ea97"><span>回单拍照</span></div></a>
                        <a href=""><div class="f7-vault-spot"style="background-color: #b6e9f2"><span>现场拍照</span></div></a>
                    </div>
                </div>

                <div class="f7-bankRecord-list-top f7-work-number1"style="height:40px;line-height:40px;">
                    <div class="f7-bankRecord-list-topLeft" style="color:#000;">
                        运单号：20161124850784
                    </div>
                    <button class="f7-bankRecord-list-topRight f7-work-btn1">
                        在途中
                    </button>
                </div>
                <p class="f7-work-money-p">成交价 1000.00元</p>
                <div class="f7-work-accounts">
                    <p><span>结算方式：&nbsp;</span>全额回单付</p>
                    <p>所有运费在电子回单和纸质回单确认后支付给车主</p>
                </div>
                <table class="f7-work-table">
                    <tr>
                        <th>应收现金</th>
                        <td>1000.00元</td>
                        <th>已收现金</th>
                        <td>0.00元</td>
                    </tr>
                    <tr>
                        <th>应收油卡</th>
                        <td>1000.00元</td>
                        <th>已收油卡</th>
                        <td>0.00元</td>
                    </tr>
                    <tr>
                        <th>运费扣款</th>
                        <td>1000.00元</td>
                        <th>运费补款</th>
                        <td>0.00元</td>
                    </tr>
                </table>

                <div class="f7-work-all">
                    <div class="f7-work-haulway-one">
                        <p class="f7-work-haulway">运输线路</p>
                        <div class="f7-work-haulway-box">
                            <div class="f7-work-haulway-left">广东广州 <span>→</span> 云南昆明</div>
                            <div class="f7-work-haulway-left"style="line-height: 23px;">参考里程：1388公里</div>
                        </div>
                    </div>

                    <div class="f7-work-goods-list">
                        <p class="f7-work-haulway">提货信息</p>
                        <div class="f7-work-require-time">
                            <p>要求提货时间： <span>&nbsp;2017-08-17 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 10:17:00</span></p>
                            <p>广东广州,AAA,张三（联系电话:13586245223）</p>
                        </div>
                    </div>
                    <div class="f7-work-goods-list">
                        <p class="f7-work-haulway">卸货信息</p>
                        <div class="f7-work-require-time">
                            <p>要求提货时间： <span>&nbsp;2017-08-17 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 10:17:00</span></p>
                            <p>广东广州,AAA,张三（联系电话:13586245223）</p>
                        </div>
                    </div>
                    <div class="f7-work-goods-list">
                        <p class="f7-work-haulway">货物描述</p>
                        <div class="f7-work-require-time">
                            <p><span class="blue" style="color:#fff;">重货</span> &nbsp;快消品 &nbsp;牙膏 &nbsp;纸箱盒（数量:3）3吨/3方</p>
                        </div>
                    </div>
                    <div class="f7-work-goods-list">
                        <p class="f7-work-haulway">货物描述</p>
                        <div class="f7-work-require-time">
                            <p>无</p>
                        </div>
                    </div>
                </div>
                <div class="f7-work--flex-nav">
                    <button style="background-color:#9cce13">联系取货点</button>
                    <button style="margin-left:2px;margin-right:2px;background-color:#04538e">联系卸货点</button>
                    <button style="background-color:#04538e">评价发货人</button>
                </div>
            </div>
        </f7-block>
    </f7-page>
</template>

<script>
	export default {}
</script>

<style>
    .f7-vault-notice{
        background-image:url(../../img/10.png);
    }
    .f7-vault-abnormal{
        background-image:url(../../img/11.png);
    }
    .f7-vault-receipt{
        background-image:url(../../img/camera.png);
    }
    .f7-vault-spot{
        background-image:url(../../img/camera_1.png);
    }

    .f7-work--flex-nav{
        height:40px;
        display:flex;
        width:100%;
        text-align: center;
        position: fixed;
        position: -webkit-sticky;
        position: sticky;
        bottom: 0;
        left: 0;
        z-index:100;
    }
    .f7-work--flex-nav button{
        color:#fff;
        font-size:16px;
        border:none;
        width:39%;
    }

    .f7-work-goods-list{
        background-color:#fff;
    }
    .f7-work-require-time p{
        margin-top:-20px;
        height:28px;
        line-height:25px;
        color:#000;
        font-size:13px;
    }
    .f7-work-require-time p span{
        color:#b9b9b9;
    }

    .f7-work-number1{
        clear:both;
        padding-left:6%;
        padding-right:6%;
        background-color:#fff;
    }
    .f7-work-btn1{
        background-color:#6faedf;
        border:none;
        height:30px;
        color:#fff;
        margin-top:5px;
    }
    .f7-work-two{
        height:90px;
        background-color:#04538e;
        margin-bottom:8px;
        padding-left:6%;
        padding-right:6%;
    }
    .f7-work-two .f7-bankRecord-list-bottomLeft{
        text-align: center;
        width:100%;
    }
    .f7-bankRecord-list-topLeft span{
        margin-right:6%;
        font-size:8px;
        color:#fff;
        width:18px;
        height:18px;
        text-align:center;
        line-height:18px;
        border-radius:2px;
        background-color:#6faedf ;
        display:inline-block;
    }
    .f7-bankRecord-list-topRight span{
        margin-right:6%;
        font-size:8px;
        color:#fff;
        width:18px;
        height:18px;
        text-align:center;
        line-height:18px;
        border-radius:2px;
        background-color:#febe14;
        display:inline-block;
    }
    .f7-work-two .f7-bankRecord-list-top div{
        width:50%;
    }
    .f7-work-num1{
        float:left;
        text-align: center;
        color:#fff;
    }
    .f7-work-num2{
        float:right;
        text-align: center;
        color:#fff;
    }
    .f7-work-money-p{
        padding-left:6%;
        padding-right:6%;
        height:40px;
        line-height:40px;
        background-color:#fff;
        margin-top:0;
        color:#e60012;
        font-size:16px;
        font-weight:400;

    }
    .f7-work-accounts{
        padding-left:6%;
        padding-right:6%;
        background-color:#fff;
        height:50px;
    }
    .f7-work-accounts p{
        height:30px;
        line-height:30px;
        font-size:8px;
        color:#b9b9b9;
        margin-bottom:-22px;
    }
    .f7-work-accounts p span{
        color:#000;
    }
    .f7-work-table{
        margin-top:1px;
        background-color:#fff;
        width:100%;
        height:30px;
    }
    .f7-work-table th{
        font-size:16px;
        color:#000;
        font-weight: normal;
    }
    .f7-work-all{
        background-color:#fff;
        padding:0 6%;
        margin-top:15px;

    }
    .f7-work-haulway{
        font-size:16px;
        height:40px;
        line-height:40px;
    }
    .f7-work-haulway-one{
        margin-bottom: -10px;
    }
    .f7-work-haulway-box{
        margin-top:-20px;
        height:20px;
        line-height:20px;
        margin-bottom:30px;
    }
    .f7-work-haulway-box div{
        font-size: 13px;
        color:#000;
        width:50%;
        float:left;
    }
    .f7-work-haulway-left span{
        font-size:18px;
        font-weight:bold;
    }
    .blue{
        font-size:14px;
        background-color:#6faedf;
        border-radius:2px;
        height:25px;
        width:40px;
        text-align: center;
        display: inline-block;

    }

</style>