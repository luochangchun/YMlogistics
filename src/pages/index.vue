<template>
    <span>
         <f7-views>
      <f7-view id="main-view" navbar-through :dynamic-navbar="true" main>
        <!-- iOS Theme Navbar -->
        <f7-navbar v-if="$theme.ios">
          <f7-nav-center sliding>干活</f7-nav-center>
        </f7-navbar>
          <!-- Pages -->
        <f7-pages>
          <f7-page>
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
                <a class="f7-btn1"><button :class="{tabbtn: btnActive}" @click="btnActive=true">指派</button></a>
                <a class="f7-btn2"><button :class="{tabbtn:!btnActive}" @click="btnActive=false">竞价</button></a>
              </div>
            </div>

            <div v-show="btnActive">
              <div class=f7-work-main>
                <p>运作中订单</p>
                <div class=f7-work-titlt>
                  <div class=f7-work-left>
                    <img src="../../img/location.png">
                  </div>
                  <div class=f7-work-location>
                    <div class=f7-work-send>
                       发送位置
                    </div>
                    <div class=f7-work-last-position>
                      上次定位：刚刚
                    </div>
                  </div>
                 </div>
              </div>


              <p class=f7-work-title>正在执行<span>1</span>个运输任务，请保持软件开启或定时手工发送位置</p>

              <div class=f7-work-list>
                <div class=f7-work-list-left-img>
                   <img src=../../img/2.png>
                </div>
                <div class=f7-work-package-right>
                  <div class=f7-work-package-right-top>
                    <p class="f7-work-number">NO 2017080754054</p>
                    <button class="f7-work-bill">回单上传</button>
                  </div>
                  <div class=f7-work-package-right-bottom>
                    <h4>湖北武汉&nbsp;<span style="font-size:18px;font-weight:800">→</span>&nbsp;安徽合肥&nbsp;&nbsp;<span>3吨/3方</span></h4>
                    <p>提货时间：<span>2017-8-2  &nbsp;17:00</span></p>
                  </div>
                  <div class="f7-work-price">
                    <div class="f7-work-money">
                      <img src="../../img/1.png" alt="">
                    </div>
                    <div class="f7-work-btm">
                      <div class=f7-work-send>
                        一口价 <span>1000.0</span>元
                      </div>
                      <div class=f7-work-last-position>
                        全额回单付
                      </div>
                    </div>
                    <div class="detil"><a href="/work/">查看详情</a></div>
                  </div>
                </div>
              </div>


              <div class=f7-work-list>
                <div class=f7-work-list-left-img>
                   <img src=../../img/3.png>
                </div>
                <div class=f7-work-package-right>
                  <div class=f7-work-package-right-top>
                    <p class="f7-work-number">NO 2017080754054</p>
                    <button class="f7-work-bill">回单上传</button>
                  </div>
                  <div class=f7-work-package-right-bottom>
                    <h4>湖北武汉&nbsp;<span style="font-size:18px;font-weight:800">→</span>&nbsp;安徽合肥&nbsp;&nbsp;<span>3吨/3方</span></h4>
                    <p>提货时间：<span>2017-8-2  &nbsp;17:00</span></p>
                  </div>
                  <div class="f7-work-price">
                    <div class="f7-work-money">
                      <img src="../../img/1.png" alt="">
                    </div>
                    <div class="f7-work-btm">
                      <div class=f7-work-send>
                        一口价 <span>1000.0</span>元
                      </div>
                      <div class=f7-work-last-position>
                        全额回单付
                      </div>
                    </div>
                    <div class="detil"><a href="#">查看详情</a></div>
                  </div>
                </div>
              </div>

              <p class="f7-work-sure">待确认订单</p>
               <div class=f7-work-list>
                <div class=f7-work-list-left-img>
                   <img src=../../img/2.png>
                </div>
                <div class=f7-work-package-right>
                  <div class=f7-work-package-right-top>
                    <p class="f7-work-number">NO 2017080754054</p>
                    <button class="f7-work-bill">剩余3小时56分</button>
                  </div>
                  <div class=f7-work-package-right-bottom>
                    <h4>湖北武汉&nbsp;<span style="font-size:18px;font-weight:800">→</span>&nbsp;安徽合肥&nbsp;&nbsp;<span>3吨/3方</span></h4>
                    <p>提货时间：<span>2017-8-2  &nbsp;17:00</span></p>
                  </div>
                  <div class="f7-work-price">
                    <div class="f7-work-money">
                      <img src="../../img/1.png" alt="">
                    </div>
                    <div class="f7-work-btm">
                      <div class=f7-work-send>
                        一口价 <span>1000.0</span>元
                      </div>
                      <div class=f7-work-last-position>
                        全额回单付
                      </div>
                    </div>
                    <div class="detil"><a href="#">查看详情</a></div>
                  </div>
                </div>
              </div>
            </div>

            <div v-show="!btnActive"style="min-height: calc(100vh - 217px );">
                <div class="f7-work-quote">
                    <div :class="{price:priceActive}" @click="priceActive=true">待报价</div>
                    <div :class="{price:!priceActive}" @click="priceActive=false">已报价</div>
                </div>
                <div v-show="priceActive">
                    <div>
                        <!--提货地-->
                    </div>
                    <p class=f7-work-title style="text-align:left;padding-left:6%">共有<span>4</span>票运单正在找车</p>

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
                                <div class="detil"style="line-height:9px;"><a href="/competing/">抢单报价</a></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-show="!priceActive">
                    <div>
                        <!--提货地-->
                    </div>
                    <div class=f7-work-list>
                <div class=f7-work-list-left-img>
                   <img src=../../img/2.png>
                </div>
                <div class=f7-work-package-right>
                  <div class=f7-work-package-right-top>
                    <p class="f7-work-number">NO 2017080754054</p>
                    <button class="f7-work-bill">剩余3小时56分</button>
                  </div>
                  <div class=f7-work-package-right-bottom>
                    <h4>湖北武汉&nbsp;<span style="font-size:18px;font-weight:800">→</span>&nbsp;安徽合肥&nbsp;&nbsp;<span>3吨/3方</span></h4>
                    <p>提货时间：<span>2017-8-2  &nbsp;17:00</span></p>
                  </div>
                  <div class="f7-work-price">
                    <div class="f7-work-money">
                      <img src="../../img/1.png" alt="">
                    </div>
                    <div class="f7-work-btm">
                      <div class=f7-work-send>
                        一口价 <span>1000.0</span>元
                      </div>
                      <div class=f7-work-last-position>
                        全额回单付
                      </div>
                    </div>
                    <div class="detil"><a href="#">查看详情</a></div>
                  </div>
                </div>
              </div>
            </div>
            </div>
            <!--固定底部导航栏-->
             <div v-if="" class="sh-footer">
                <!--<a style="display: none" id="goabout" href="/about/"></a>-->
              <a href="/about/"><div class="sh-footer-bgcomm sh-footer-bgcomm-index":class="classA"><span>干活</span></div></a>
              <a href="/enjoy/" ><div class="sh-footer-bgcomm sh-footer-bgcomm-design":class="classB" ><span>享受</span></div></a>
              <a href="/vault/"><div class="sh-footer-bgcomm sh-footer-bgcomm-shop":class="classC"><span>金库</span></div></a>
              <a href="/mine/"><div class="sh-footer-bgcomm sh-footer-bgcomm-user":class="classD"><span>我</span></div></a>
            </div>


          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-views>
    </span>
</template>

<script type="text/ecmascript-6">

	    const YMWLNAME_list=["f7-work","f7-enjoy","f7-vault","f7-mine"];
	    const False=false;
		export default{
			data(){
				return{
					classA:YMWLNAME_list[0],
					classB:False,
					classC:False,
					classD:False,
					mainView:null,
					btnActive: true, //顶部按钮切换变量
                    priceActive: true
	            };
	        },
	        mounted(){

	        },
			methods:{
				_goToRouter(num){
					let overClass=YMWLNAME_list[num];
					[this.classA,this.classB,this.classC,this.classD]=[false,false,false,false];
					if(num === 0){
						this.classA=overClass;
	                }
					if(num===1){

						this.classB=overClass;
					}
					if(num===2){

						this.classC=overClass;
					}
					if(num===3){

						this.classD=overClass;
					}
	            }
	        }
	    };

</script>


<style>
  /*.classA{*/
    /*background-image:url(../../img/car_1.png);*/
  /*}*/
  .price{
      border-bottom:3px solid #9cce13;
  }
  .f7-work-header{
    padding-top:4%;
    background-color:#04538e;
    padding-left:6%;
    padding-right:6%;
  }
  .f7-work-bottom .f7-btn1>.tabbtn,.f7-work-bottom .f7-btn2>.tabbtn{
    background-color: #9cce13;
  }
    .f7-work-top{
        height:30px;
        margin-bottom: 0.6em;
      line-height: 30px;
    }
    .f7-work-top-left{
        width:47%;
      float:left;
    }
    .f7-work-top-left div{
        font-size:16px;
        color:#fff;
    }
    .f7-work-top-left div span{
        font-size:12px;
    }
    .f7-work-top-right{
        width:47%;
      float:right;
      position: relative;
    }
    .f7-work-top-right button{
        width:75%;
        margin-right:10%;
        border:none;
        color:#fff;
        background-color:#6faedf;
        height:30px;
    }
    .f7-work-envelope{
      position:absolute;
      top: 20%;
      right: 0;
      width: 24px;
    }
    .f7-work-envelope img{
      width:24px;
      display: block;
      float: left;
    }
    .f7-work-bottom{
      height:40px;
    }
    .f7-btn1{
      width:47%;
      float:left;
    }
  .f7-btn2{
    width:47%;
    float:right;
  }
  .f7-work-bottom button{
    width:100%;
    height:30px;
    font-size:14px;
    color:#fff;
  }
  .f7-work-bottom button:last-child{
    background-color:#b3b3b3;
    border:none;
    height:30px;
  }
  .f7-work-red{
    color:#fff;
    display:inline-block;
    background-color:#e60012;
    border-radius:50%;
    min-width:12px;
    font-size: 8px;
    height:12px;
    line-height: 12px;
    text-align:center;
    position:absolute;
    top:-4px;
    right:-5px;
  }

  .f7-work-main p{
    color:#fff;
    font-size:14px;
    background-color:#6faedf;
    height:35px;
    line-height:35px;
    padding-left:6%;
    padding-right:6%;
    margin-top:10px;
  }


  .f7-work-titlt{
    background-color:#fff;
    margin-top:-13px;
    padding-top:15px;
    padding-bottom:5px;
  }
  .f7-work-left img{
    width:18px;
    padding-left:6%;
    padding-right:6%;

  }
  .f7-work-left{
    float:left;
    margin-left:6%;
    margin-right:4%;
  }
  。f7-work-location div{
    float:left;
  }
  .f7-work-send{
    font-size:12px;
  }
  .f7-work-last-position{
    font-size:12px;
    color:#b3b3b3;
  }

  .f7-work-title{
    margin-top:0;
    margin-bottom:0;
    font-size:8px;
    color:#b3b3b3;
    text-align:center;
    display:block;
    height:40px;
    line-height:40px;
  }
  .f7-work-title span{
    color:#e60012;
  }

  .f7-work-list-left-img{
    width:30%;
    float:left;
    margin-top:25px;
  }
  .f7-work-list-left-img img{
    width: 64%;
    margin: 0 auto;
    display: block;
    position: relative;
    max-width: 90px;
    left: -10%;
  }
  .f7-work-package-right{
    margin-top:10px;
    width:60%;
    float:left;
  }
  .f7-work-list{
    padding-left:6%;
    padding-right:6%;
    background-color:#fff;
    height:130px;
    margin-bottom:10px;
  }
  .f7-work-list:last-child{
    margin-bottom:30px;
  }
  .f7-work-package-right-top{
    height:30px;
    line-height:30px;
  }
  .f7-work-package-right-top p{
    float:left;
    font-size:8px;
    color:#b3b3b3;
    line-height:10px;
    display:block;
    width:65%;
    height:0;
  }
  .f7-work-package-right-top button{
    float:right;
    background-color:#bbdef9;
    border:none;
    height:30px;
    width:50%;
    font-size:12px;
    color:#fff;
    margin-right:-15%;
    margin-bottom:-10px;
  }
  .f7-work-package-right-bottom{
    height:50px;
    line-height:30px;
    clear:both;
    margin-right:-15%;
    border-bottom:1px solid  #d9d9d9;
  }
  .f7-work-package-right-bottom h4{
    font-size:14px;
    margin-top:-6px;
    padding:0;
  }
  .f7-work-package-right-bottom h4 span{
    font-size:8px;
    color:#b3b3b3;
  }
  .f7-work-package-right-bottom p{
    font-size:10px;
    margin-top:-30px;
  }
  .f7-work-package-right-bottom p span{
    font-size:8px;
    color:#b3b3b3;
  }
  .f7-work-price{
    background-color:#fff;
    padding-top:0;
    width:100%;
    height:40px;
  }
  .f7-work-money{
    width:20%;
  }
  .f7-work-money img{
    width:20px;
    margin-left:6%;
    float:left;
    margin-top:10px;
    margin-right:5px;
  }
  .f7-work-btm{
    width:70%;
    float:left;
    margin-top:5px;
  }
  .detil{
    float:right;
    margin-top:15px;
    margin-right:-17%;
    width:30%;
  }
  .detil a{
    font-size:12px;
    font-weight:600;
    color:#04538e;
  }
  .f7-work-sure{
    background-color:#b1df6f;
    padding-left:6%;
    font-size:14px;
    color:#fff;
    height:35px;
    line-height:35px;
    margin-bottom:0;
  }



  /***********底部***********/
  .sh-footer{
    display: flex;
    width: 100%;
    text-align: center;
    position: fixed;
    position: sticky;
    bottom: 0;
    left: 0;
    background:#fff;
    z-index:100;
  }
  .sh-footer a{
    flex: 1;
    font-size: 10px;
    position: relative;
    height:50px;
    display: block;
    width: 100%;
  }

  .sh-footer-bgcomm{
    background-repeat: no-repeat;
    background-size:38px;
    background-position: center 0.5rem;
    height: 100%;
  }
  .sh-footer-bgcomm-index {
    background-image: url("../../img/car.png");
  }
  .sh-footer-bgcomm-design {
    background-image: url("../../img/enjoy.png");
  }
  .sh-top{
    display: block;
    width: 1.173333rem;
    position: relative;
    margin: 0 auto;
    top: -0.44rem;
  }
  .sh-top:before{
    content:'';
    position: absolute;
    width: calc(1.173333rem);
    height: calc(1.173333rem);
    background-color: #ccc;
    left: 0;
    top: -1px;
    border-radius: 50%;
    z-index: -2;
  }
  .sh-footer-bgcomm-top {
    width:100%;
  }
  .sh-footer-bgcomm-shop {
    background-image: url("../../img/vault.png");
  }
  .sh-footer-bgcomm-user {
    background-image: url("../../img/mine.png");
  }
  .sh-footer span{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 20px;
    line-height: 20px;
    color:#b3b3b3;
  }
  .f7-work-quote{
      background-color:#fff;
      height:40px;
  }
  .f7-work-quote div{
      float:left;
      width:50%;
      text-align: center;
      height:37px;
      line-height:37px;
      font-size:14px;
  }
</style>