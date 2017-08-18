<template>
    <f7-page>
        <f7-navbar title="干活" back-link=""sliding></f7-navbar>
        <f7-block style="padding:0;margin:0">
            <div class=f7-work-header>
                <div class=f7-work-top>
                    <div class="f7-work-top-left">
                        <div>庄899<span>&nbsp;&nbsp;&nbsp;鄂A54651</span></div>
                    </div>
                    <div class="f7-work-top-right">
                        <button>历史运单</button>
                        <div class=f7-work-envelope>
                            <img src=../../img/envelope.png>
                            <span class=f7-work-red>7</span>
                        </div>

                    </div>
                </div>
                <div class=f7-work-bottom>
                    <a href="/index/"class="f7-btn1"><button>指派</button></a>
                    <a href="/bidding/"class="f7-btn2"><button style="background-color: #9cce13">竞价</button></a>
                </div>
            </div>
            <div class="f7-work-quote">
                <div>待报价</div>
                <div>已报价</div>
            </div>
            <div>
                <!--提货地-->
            </div>
            <p class=f7-work-title>共有<span>4</span>票运单正在找车</p>

            <div class=f7-work-list>
                <div class=f7-work-list-left-img>
                    <img src=../../img/2.png>
                </div>
                <div class=f7-work-package-right>
                    <div class=f7-work-package-right-top>
                        <p class="f7-work-number">NO 2017080754054</p>
                        <button class="f7-work-bill">剩余3小时56分</button>
                    </div>
                    <div class=f7-work-package-right-bottom style="height:38px;">
                        <h4>湖北武汉&nbsp;<span style="font-size:18px;font-weight:800">→</span>&nbsp;安徽合肥&nbsp;&nbsp;<span>3吨/3方</span></h4>
                    </div>
                    <div class="f7-work-price">
                        <div class="f7-work-money">
                            <img src="../../img/1.png" alt="">
                        </div>
                        <div class="f7-work-btm">
                            <div class=f7-work-send style="line-height:30px;">
                                结算方式：全额回单付
                            </div>
                        </div>
                        <div class="detil"style="line-height:9px;"><a href="#">抢单报价</a></div>
                    </div>
                </div>
            </div>
        </f7-block>
    </f7-page>
</template>

<script>
	export default {}
</script>

<style>
    .f7-work-quote{
        background-color:#fff;
        height:40px;
    }
    .f7-work-quote div{
        float:left;
        width:50%;
        text-align: center;
        height:40px;
        line-height:40px;
        font-size:14px;
    }
</style>