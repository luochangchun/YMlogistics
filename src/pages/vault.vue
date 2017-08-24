<template>
    <f7-page>
        <f7-navbar title="金库" back-link="" sliding></f7-navbar>
        <f7-block style="padding:0;margin:0">
            <div style="min-height: calc(100vh - 120px );">
                <div class="f7-vault-header-box">
                    <div class="f7-vault-header-box-top">
                        <a href="/bankAccount/"><div class="f7-vault-bank-card"><span>银行卡</span></div></a>
                        <a href="bankRecord"><div class="f7-vault-bank"><span>银行卡收款记录</span></div></a>
                    </div>
                    <div class="f7-vault-header-box-bottom">
                        <a href="oil"><div class="f7-vault-oil-card"><span>油卡</span></div></a>
                        <a href="oilRecord"><div class="f7-vault-oil"><span>油卡收款记录</span></div></a>
                    </div>
                </div>
                <p class="f7-vault-title">回单照片审核合格，运单便会进入付款流程</p>
                <div class="f7-vault-list">
                    <div class="f7-vault-list-left">
                        <h4>待收款 <span>(银行卡)</span></h4>
                        <p>35823.65元</p>
                    </div>
                    <a href="/work/" class="f7-vault-list-right"><button>详情</button></a>
                </div>
                <div class="f7-vault-list">
                    <div class="f7-vault-list-left">
                        <h4>待收款 <span>(油卡)</span></h4>
                        <p>35823.65元</p>
                    </div>
                    <a href="/work/" class="f7-vault-list-right"><button>详情</button></a>
                </div>
            </div>
                <!--固定底部导航栏-->
                <div v-if="" class="sh-footer">
                    <!--<a style="display: none" id="goabout" href="/about/"></a>-->
                    <a href="/index/"><div class="sh-footer-bgcomm sh-footer-bgcomm-index"><span>干活</span></div></a>
                    <a href="/enjoy/"><div class="sh-footer-bgcomm sh-footer-bgcomm-design"><span>享受</span></div></a>
                    <a href="javascript:;"><div class="sh-footer-bgcomm sh-footer-bgcomm-shop f7-vault"><span>金库</span></div></a>
                    <a href="/mine/"><div class="sh-footer-bgcomm sh-footer-bgcomm-user"><span>我</span></div></a>
                </div>

        </f7-block>
    </f7-page>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style>
    .f7-vault{
        background-image: url(../../img/vault.png);
    }
    .f7-vault>span{
        color:rgb(4, 83, 142);
    }
    .f7-vault-header-box-top{
        margin-top:0;
    }
    .f7-vault-header-box div a{
        display: block;
        width:49%;
        height:8rem;

    }
    .f7-vault-header-box div a:first-child{
        margin-right:2%;
        margin-bottom:2%;
    }
    .f7-vault-header-box-top a{
        float:left;
    }
    .f7-vault-header-box div a div{
        background-repeat: no-repeat;
        background-position: center 1.3rem;
        height: 100%;
        background-size:3rem;
        background-color:#fff;
    }
    .f7-vault-header-box div a div span{
        width: 100%;
        height: 30px;
        line-height: 30px;
        color:#000;
        font-size:16px;
        display: block;
        text-align: center;
        position:relative;
        top:60%;
    }
    .f7-vault-header-box-bottom a{
        float:left;
    }
    .f7-vault-bank-card{
        background-image:url(../../img/bank_card.png);
    }
    .f7-vault-bank{
        background-image:url(../../img/bank_record.png);
    }
    .f7-vault-oil{
        background-image:url(../../img/oil_record.png);
    }
    .f7-vault-oil-card{
        background-image:url(../../img/oil_card.png);
    }

    .f7-vault-title{
        clear:both;
        background-color:#9CCE13;
        width:100%;
        height:35px;
        text-align: center;
        line-height:35px;
        font-size:14px;
        color:#fff;
    }
    .f7-vault-list{
        clear:both;
        background-color:#fff;
        padding-left:6%;
        padding-right:6%;
        margin-top:-14px;
        height:70px;
        margin-bottom:7%;
    }

    .f7-vault-list-left{
        width:50%;
        float:left;
        padding-top:-1px;
    }
    .f7-vault-list-left h4{
        font-size:14px;
        color:#000;
        margin-bottom:-12px;
        height: 15px;
        line-height: 12px
    }
    .f7-vault-list-left h4 span{
        font-size:8px;
        color:#b3b3b3;
    }
    .f7-vault-list-left p{
        color:#e60012;
        font-size: 14px;
        font-weight:600;
    }
    .f7-vault-list-right{
        width:50%;
        float:right;
    }
    .f7-vault-list-right button{
        width:80%;
        height:30px;
        background-color:#6faedf;
        border:none;
        margin-top:20px;
        float:right;
        color:#fff;
    }
</style>