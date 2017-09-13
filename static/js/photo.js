/**
 * Created by Administrator on 2017/9/8 0008.
 */
(function($) {
	$(document).ready(function() {
		var interface = $.fptDataCenterIntance();
		//		var data = {userId: $.cookie('userId')}
		//		interface.getSellHouseList(,)\
		var vm = new Vue({
			el: '#index_v2',
			data: {
				userId: $.cookie('userId'),
				pageIndex: 1,			// 页码
				pageRows: 30,			//每页多少条数据
				dataInfo: null,			// list数据
				changeValue: 1,			// 求购或求租
				add: true,				// 添加和修改提交按钮切换
				priceval1:'',
				priceval2:'',
				houseNum: '',
				areaText: '区域/板块',
				isSoU: 1, 						//1为search，其他为Update
				saveAjaxData: '',
				nextBtn: true,
				prevBtn: true,
				isAdd: false,					//编辑是禁用单选框
				textRadioText: '选择性质',
				imglist: [],
				updatedimg:null,
				house_name_search: '',  //搜索框
				shi:0,
				ting:0,
				wei:0,
				isRent: 1,					//是否隐藏整租合租隐藏
				showRent: false,
				images:'',							//图片列表
				currentClick: '',					//图片上传当前对象
				itemInfo: {
					cellphone : '-',			   		 // 客户姓名
					created : '-',			    		 	 // GPSX
					gps_x : '-',					 // 区域
					gps_y : '-',				   			 // GPSY
					house_area : '-',					 // 板块（小区）
					house_describe : '-',					 // 期望户型
					house_floor : '不限',					 // 期望楼层
					house_method : '不限',					 // 装修与否
					house_model : '',					 // 楼盘1
					house_name : '',					 // 楼盘2
					house_orientations : '',					 // 楼盘3
					house_property : '不限',				 // 房屋性质
					house_proportion : '',			 // 期望面积 最小
					house_year : '',			 // 期望面积 最大
					is_deleted : '',				 // 预算价位 最小
					sell_id : '',				 // 预算价位 最大
					sell_price :'',				 // 客户描述
					sell_type :'',               // 客户描述
					rent_house_type :'整租',				 // 客户描述
					total_floor :'',				 // 客户描述
					turnover :'',				 // 客户描述
					user_id :'',				 // 客户描述
					username :''				 // 客户描述
				}			// 求购求租接口内容
			},
			created: function() {
				this.getQG();
			},
			methods: {
				changeBtn: function(){
					this.houseNum = "";
					if(this.changeValue == 1){
						this.getQG();
					}else{
						this.getQZ();
					}
					this.areaText = '区域/板块';
				},
				openAlert: function(item){
					var self = this;
					layer.open({
						type: 1,
						title: '房源详情',
						closeBtn: 1,
						area: ['900px', '400px'],
						shadeClose: true,
						skin: 'yourclass',
						content: $('.Availability'),
						success: function() {
							self.itemInfo = item;
							self.imglist = JSON.parse(item.images);
							self.$nextTick(function(){
								$(".banner").thumbnailImg({
									large_elem: ".large_box",
									small_elem: ".small_list",
									left_btn: ".left_btn",
									right_btn: ".right_btn"
								});
							})

						}
					});
				},
				getQG: function(val){
					var self = this;
					var item = {
						userId: this.userId,
						pageIndex: this.pageIndex,
						pageSize: self.pageRows
					};
					var datas = $.extend({}, item, val);
					this.saveAjaxData = datas;
					layer.load(1, {
						shade: [0.1,'#fff'] //0.1透明度的白色背景
					});
					interface.getSellHouseList(datas, function(res){
						if(res.STATUS){
							self.dataInfo = res.list;
							if(res.list.length<self.pageRows && this.pageIndex==1){
								self.prevBtn = false;
							}else{
								self.prevBtn = true;
							}
							if(res.list.length<self.pageRows){
								self.nextBtn = false;
							}else{
								self.nextBtn = true;
							}
						}else{
							layer.msg('请求失败', {time:2000, offset: 't'});
						}
						layer.closeAll('loading');
					})
				},
				getQZ: function(val){
					var self = this;
					var item = {
						userId: this.userId,
						pageIndex: this.pageIndex,
						pageSize: self.pageRows
					};
					var datas = $.extend({}, item, val);
					this.saveAjaxData = datas;
					layer.load(1, {
						shade: [0.1,'#fff'] //0.1透明度的白色背景
					});
					interface.getRentHouseList(datas, function(res){
						if(res.STATUS){
							self.dataInfo = res.list;
							if(res.list.length<self.pageRows && this.pageIndex==1){
								self.prevBtn = false;
							}else{
								self.prevBtn = true;
							}
							if(res.list.length<self.pageRows){
								self.nextBtn = false;
							}else{
								self.nextBtn = true;
							}
						}else{
							layer.msg('请求失败', {time:2000, offset: 't'});
						}
						layer.closeAll('loading');
					})
				},
				prev: function(){
					var saveitem = this.saveAjaxData;
					if(saveitem.pageIndex == 1){
						return false;
					}
					this.pageIndex = --saveitem.pageIndex;
					if(this.changeValue == 1){
						this.getQG(saveitem);
					}else{
						this.getQZ(saveitem);
					}
				},
				next: function(){
					var saveitem = this.saveAjaxData;
					this.pageIndex = ++saveitem.pageIndex;
					if(this.changeValue == 1){
						this.getQG(saveitem);
					}else{
						this.getQZ(saveitem);
					}
				},
				openView: function(item){
					var self = this;
					layer.open({
						type: 1,
						title: '客户详情',
						closeBtn: 1,
						area: ['900px', '400px'],
						shadeClose: true,
						skin: 'yourclass',
						content: $('#openView'),
						success: function() {
							self.itemInfo = item;
						}
					});
				},
				valueDataRule: function(){
					var reg = /^[1-9]\d*$/;
					var reg0 = /^[0-9]\d*$/;
					if(this.itemInfo.house_name.length==0){
						layer.msg('小区名称不能为空！', {time:2000, offset: 't'});
						return false;
					}
					if(this.itemInfo.gps_x.length==0 || this.itemInfo.gps_y.length==0){
						layer.msg('经纬度填写有误！', {time:2000, offset: 't'});
						return false;
					}
					if((this.itemInfo.house_floor.length==0) || (this.itemInfo.total_floor.length==0) ){
						layer.msg('楼层填写有误！', {time:2000, offset: 't'});
						return false;
					}else{
						if(!reg.test(this.itemInfo.house_floor) || !reg.test(this.itemInfo.total_floor) ){
							layer.msg('楼层应填正整数！', {time:2000, offset: 't'});
							return false;
						}else{
							if(parseInt(this.itemInfo.house_floor)>parseInt(this.itemInfo.total_floor)){
								layer.msg('房屋所在楼层不能大于楼层数！', {time:2000, offset: 't'});
								return false;
							}
						}
					}
					if( this.itemInfo.house_proportion.length==0 ){
						layer.msg('建筑面积不能为空！', {time:2000, offset: 't'});
						return false;
					}else{
						if(!reg.test(this.itemInfo.house_proportion) ){
							layer.msg('建筑面积应填正整数！', {time:2000, offset: 't'});
							return false;
						}
					}
					if( this.shi.length==0 ||  this.ting.length==0 || this.wei.length==0 ){
						layer.msg('户型规格填写有误！', {time:2000, offset: 't'});
						return false;
					}else{
						if(!reg0.test(this.shi) || !reg0.test(this.ting) || !reg0.test(this.wei) ){
							layer.msg('户型规格应填大于等于0的整数！', {time:2000, offset: 't'});
							return false;
						}
					}
					if(this.itemInfo.house_year.length==0){
						layer.msg('房屋年代不能为空!', {time:2000, offset: 't'});
						return false;
					}else{
						if(this.itemInfo.house_year.length!=4){
							layer.msg('房屋年代为4位正整数!', {time:2000, offset: 't'});
							return false;
						}else{
							if(!reg.test(this.itemInfo.house_year)){
								layer.msg('房屋年代应填4位正整数', {time:2000, offset: 't'});
								return false;
							}
						}
					}
					if(this.isRent == 1){
						if(this.itemInfo.property_right.length==0){
							layer.msg('产权状况不能为空！', {time:2000, offset: 't'});
							return false;
						}
						if(this.itemInfo.sell_price.length==0){
							layer.msg('售价不能为空！', {time:2000, offset: 't'});
							return false;
						}else{
							if(!reg.test(this.itemInfo.sell_price)){
								layer.msg('售价为正整数', {time:2000, offset: 't'});
								return false;
							}
						}
					}else{
						if(this.itemInfo.rent_price.length==0){
							layer.msg('租价不能为空！', {time:2000, offset: 't'});
							return false;
						}else{
							if(!reg.test(this.itemInfo.rent_price)){
								layer.msg('租价为正整数', {time:2000, offset: 't'});
								return false;
							}
						}
					}
					if(this.images.length == 0){
						layer.msg('房屋图片不能为空!', {time:2000, offset: 't'});
						return false;
					}

					return true;

				},
				openUpdate: function(item){
					this.itemInfo = item;
					this.add = false;
					var self = this;
					if(this.changeValue == 1){
						this.isRent = 1;
					}else{
						this.isRent = 2;
					}
					layer.open({
						type: 1,
						title: '修改资料',
						closeBtn: 1,
						area: ['900px', '400px'],
						shadeClose: true,
						skin: 'yourclass',
						content: $('#updateBox'),
						success: function(){
							self.textRadioText = "出售类型";
							self.isAdd = true;
							$("#chooseRadio input[name='one']").each(function(){
								if($(this).val() == item.sell_type){
									$(this).prop( "checked", true );
								}
							});

							$("#chooseA input[name='houseaer']").each(function(){
								if($(this).val() == item.decorate){
									$(this).prop( "checked", true );
								}
							});
							$("#chooseB input[name='look']").each(function(){
								if($(this).val() == item.house_method){
									$(this).prop( "checked", true );
								}
							});
							var idid = item.house_type.split('');
							self.shi = idid[0];
							self.ting = idid[2];
							self.wei = idid[4];
							self.images = JSON.parse(item.images);
							$('.i-checks').iCheck({
								checkboxClass: 'icheckbox_square-green',
								radioClass: 'iradio_square-green',
							});
						}
					});
				},
				openAdd: function(){
					var self = this;
					this.add = true;
					layer.open({
						type: 1,
						title: '添加资料',
						closeBtn: 1,
						area: ['900px', '400px'],
						shadeClose: false,
						skin: 'yourclass',
						content: $('#updateBox'),
						success: function(){
							self.textRadioText = "选择性质";
							self.isAdd = false;
							self.itemInfo.username='';				    // 客户姓名
							self.itemInfo.gps_x='';				    // GPSX
							self.itemInfo.gps_y='';				    // GPSY
							$("#chooseRadio input[name='one']").eq(0).prop( "checked", true );
							self.itemInfo.house_area='不限';						// 区域
							self.itemInfo.house_model='不限';						// 板块（小区）
							self.itemInfo.house_floor='';					// 楼层
							self.itemInfo.total_floor='';                   // 楼高
							self.itemInfo.rent_price='';					//
							self.shi='';
							self.ting='';
							self.wei='';
							self.itemInfo.house_name='';
							self.itemInfo.house_property='不限';					// 房屋性质
							self.itemInfo.house_proportion='';			// 建筑面积
							$("#chooseA input[name='houseaer']").eq(0).prop( "checked", true );			// 装修状况
							self.itemInfo.house_orientations='东';				// 房屋朝向
							self.itemInfo.property_right='';			// 产权
							self.itemInfo.house_year='';			// 房屋年代
							self.itemInfo.sell_price='';			// 房屋售价
							$("#chooseB input[name='look']").eq(0).prop( "checked", true );			//看房方式
							self.images=[];
							self.itemInfo.house_describe='';	// 客户描述
							$('.i-checks').iCheck({
								checkboxClass: 'icheckbox_square-green',
								radioClass: 'iradio_square-green',
							});
						},
						cancel: function(){
							if(self.changeValue == 1){
								self.getQG(self.saveAjaxData);
							}else{
								self.getQZ(self.saveAjaxData);
							}
						}
					});
				},
				updateBtn: function() {
					var self = this;
					var data = {
						userId: this.itemInfo.user_id,			// 用户ID
						username: this.itemInfo.username,				    // 客户姓名
						gpsX: this.itemInfo.gps_x,				    // GPSX
						gpsY: this.itemInfo.gps_y,				    // GPSY
						sellType: $("#chooseRadio input[name='one']:checked").val(), //出售类型
						rentType: $("#chooseRadio input[name='one']:checked").val(), //出售类型
						rentHouseType: this.itemInfo.rent_house_type,
						rentPrice: this.itemInfo.rent_price,
						houseArea:this.itemInfo.house_area,						// 区域
						houseModel:this.itemInfo.house_model,						// 板块（小区）
						houseFloor:this.itemInfo.house_floor,					// 楼层
						totalFloor:this.itemInfo.total_floor,					// 楼高
						houseType:this.shi+'室'+this.ting+'厅'+this.wei+'卫',					// 期望楼层
						houseName:this.itemInfo.house_name,					// 楼盘1
						houseProperty:this.itemInfo.house_property,					// 房屋性质
						houseProportion:this.itemInfo.house_proportion,			// 建筑面积
						decorate:$("#chooseA input[name='houseaer']:checked").val(),			// 装修状况
						houseOrientations:this.itemInfo.house_orientations,				// 房屋朝向
						propertyRight:this.itemInfo.property_right,			// 产权
						houseYear:parseInt(this.itemInfo.house_year),			// 房屋年代
						sellPrice:this.itemInfo.sell_price/10000,			// 房屋售价
						houseMethod:$("#chooseB input[name='look']:checked").val(),			//看房方式
						images:this.images.length>0?JSON.stringify(this.images):'',
						houseDescribe:this.itemInfo.house_describe?this.itemInfo.house_describe:''	// 客户描述
					}
					if(this.changeValue == 1){ //求购修改数据接口操作
						data.sellId = this.itemInfo.sell_id;
						interface.SellHouseUpdate(data, function(res){
							if(res.STATUS){
								layer.msg('修改成功', {time:2000, offset: 't'});
								layer.closeAll('page');
								self.getQG(self.saveAjaxData);
							}else{
								layer.msg(res.paraName+res.description, {time:2000, offset: 't'});
							}
						})
					}else{ //求租修改数据接口操作
						data.rentId= this.itemInfo.rent_id;
						interface.RentHouseUpdate(data, function(res){
							if(res.STATUS){
								layer.msg('修改成功', {time:2000, offset: 't'});
								layer.closeAll('page');
								self.getQZ(self.saveAjaxData);
							}else{
								layer.msg(res.paraName+res.description, {time:2000, offset: 't'});
							}
						})
					}
				},
				addBtn: function() {
					if(!this.valueDataRule()){
						return false;
					}
					var self = this;
					var data = {
						userId: this.userId,
						username: this.itemInfo.username,				    // 客户姓名
						gpsX: this.itemInfo.gps_x,				    // GPSX
						gpsY: this.itemInfo.gps_y,				    // GPSY
						sellType: $("#chooseRadio input[name='one']:checked").val(),
						rentType: $("#chooseRadio input[name='one']:checked").val(),
						rentHouseType: this.itemInfo.rent_house_type,
						rentPrice: this.itemInfo.rent_price,
						houseArea:this.itemInfo.house_area,						// 区域
						houseModel:this.itemInfo.house_model,						// 板块（小区）
						houseFloor:this.itemInfo.house_floor,					// 楼层
						totalFloor:this.itemInfo.total_floor,					// 楼高
						houseType:this.shi+'室'+this.ting+'厅'+this.wei+'卫',					// 期望楼层
						houseName:this.itemInfo.house_name,					// 楼盘1
						houseProperty:this.itemInfo.house_property,					// 房屋性质
						houseProportion:this.itemInfo.house_proportion,			// 建筑面积
						decorate:$("#chooseA input[name='houseaer']:checked").val(),			// 装修状况
						houseOrientations:this.itemInfo.house_orientations,				// 房屋朝向
						propertyRight:this.itemInfo.property_right,			// 产权
						houseYear:parseInt(this.itemInfo.house_year),			// 房屋年代
						sellPrice:this.itemInfo.sell_price/10000,			// 房屋售价
						houseMethod:$("#chooseB input[name='look']:checked").val(),			//看房方式
						images:this.images.length>0?JSON.stringify(this.images):'',
						houseDescribe:this.itemInfo.house_describe?this.itemInfo.house_describe:''	// 客户描述
					}
					if(this.isRent == 1){ //求购添加数据接口操作
						interface.SellHouseAdd(data, function(res){
							if(res.STATUS){
								layer.msg('添加成功', {time:2000, offset: 't'});
								self.getQG();
								layer.closeAll('page');
							}else{
								layer.msg('表单填写有误', {time:2000, offset: 't'});
								layer.msg(res.paraName+res.description, {time:2000, offset: 't'});
							}
						})
					}else{ //求租修改数据接口操作
						interface.RentHouseAdd(data, function(res){
							if(res.STATUS){
								layer.msg('添加成功', {time:2000, offset: 't'});
								self.getQZ();
								layer.closeAll('page');
							}else{
								layer.msg('表单填写有误', {time:2000, offset: 't'});
								layer.msg(res.paraName+res.description, {time:2000, offset: 't'});
							}
						})
					}
				},
				deleteData: function(item) {
					var data = {
						userId: item.user_id
					}
					var self = this;
					layer.confirm('确定删除？', {
						btn: ['删除','取消'] //按钮
					}, function(){
						if(self.changeValue == 1){
							data.sellId = item.sell_id;
							interface.SellHouseDelete(data, function(res){
								if(res.STATUS){
									layer.msg('删除成功', {time:2000, offset: 't'});
									self.getQG();
									layer.closeAll('page');
								}else{
									layer.msg('删除失败', {time:2000, offset: 't'});
								}
							})
						}else{
							data.rentId = item.rent_id;
							interface.RentHouseDelete(data, function(res){
								if(res.STATUS){
									layer.msg('删除成功', {time:2000, offset: 't'});
									self.getQZ();
									layer.closeAll('page');
								}else{
									layer.msg('删除失败', {time:2000, offset: 't'});
								}
							})
						}
					});
				},
				clickInputFile: function(event) {
					this.currentClick = $(event.currentTarget)
					$('#inputfile').click();
				},
				uploadImg: function() {
					var self = this;
					var data = new FormData();
					var itemfile = event.currentTarget.files[0];
					$.each($(itemfile), function(i, file) {
						data.append('upload_file', file);
					});
					interface.imgUpload(data, function(){
						self.currentClick.text('上传中');
					}, function(res) {
						self.updatedimg = res.upload_file;
						self.images.push(res.upload_file);
						self.currentClick.text('上传完成');
					}, function(){
						self.currentClick.text('+');
					}, function(err) {
						layer.msg('上传失败!', {time:1000, offset: 't'});
						self.currentClick.text('+');
					});
				},
				delimg: function(index){
					this.images.splice(index,1);
					console.log(this.images)
				},
				keydownSearch: function(e) {
					if(e.keyCode==13){
						var data = ['不限']
						if(this.areaText != '区域/板块'){
							data = this.areaText;
						}
						this.search(data);
					}
				},
				search: function(value) {
					if(this.changeValue == 1){
						var data = {
							priceMin: this.priceval1.split(',')[0],
							priceMax: this.priceval1.split(',')[1],
							hopeType: this.houseNum,
							houseName: this.house_name_search
						}
						if(value.length>0){
							if(value != '不限'){
								var house = value[0];
								if(house.indexOf('区')==-1){
									house = house+'区';
								}
								data.houseArea = house;
								data.houseModel = value[1];
							}
						}
						this.getQG(data);
					}else{
						var data = {
							priceMin: this.priceval2.split(',')[0],
							priceMax: this.priceval2.split(',')[1],
							hopeType: this.houseNum,
							houseName: this.house_name_search
						}
						if(value.length>0){
							if(value != '不限'){
								var house = value[0];
								if(house.indexOf('区')==-1){
									house = house+'区';
								}
								data.houseArea = house;
								data.houseModel = value[1];
							}
						}
						this.getQZ(data);
					}
				},
				setAreaValue: function(area, model){
					this.isSoU = 2;
					var area1 = area;
					if(area.indexOf('区')!=-1){
						area1 = area1.substring(0, area.length-1);
					}

					setAreaValue(area1+","+model);
				},
				setSearchValue: function(){
					this.isSoU = 1;
				}
			}
		});
		function setAreaValue(value) {
			$('#areaValue').val(value);
			if($('#areaValue').val() != '不限'){
				var areav = $('#areaValue').val();
				var areav1 = areav.split(',')[0].trim();
				var areav2 = areav.split(',')[1].trim();
				if(isNull(areav1)){
					$('.areaChoose a').removeClass('selected');
					$('.areaChoose a').each(function (index, item){
						if($(item).text() == areav1){
							$(item).addClass('selected');
							if(isNull(areav2)){
								$(item).click();
							}
						}
					})
				}
				if(isNull(areav2)){
					$('.subBox a').removeClass('selected');
					$('.subBox a').each(function (index, item){
						if($(item).text() == areav2){
							$(item).addClass('selected');
						}
					})
				}
			}else{
				$('#areaValue').val('不限');
			}
		};
		/*$('.editAreaChooseBox').click(function () {
			setAreaValue('江岸,后湖');
		})*/
		function isNull(value) {
			if(value == '' || value == undefined || value == null){
				return false;
			}else{
				return true;
			}
		}
		var itemFont = [];
		$('.areaChoose>a').click(function(){
			itemFont = [];
			var selfEle = $(this);
			selfEle.addClass('selected').siblings().removeClass('selected')
			itemFont.push(selfEle.text())
			var index = selfEle.index();
			$('.subBox').hide();
			$($('.subBox')[index]).show();
		});
		$('.subBox a').click(function () {
			var selfEle = $(this);
			$('.subBox a').removeClass('selected');
			selfEle.addClass('selected').siblings().removeClass('selected');
			if(itemFont.length>1){
				itemFont[1] = selfEle.text();
			}else{
				itemFont.push(selfEle.text());
			}
		});
		var show = false;
		$('.showAreaChooseBox').click(function () {
			if(show){
				$('.m-filter').css('top','-50%');
				show = false;
				$('.m-dialog').fadeOut(200);
			}else{
				$('.m-filter').css('top',0);
				show = true;
				$('.m-dialog').fadeIn(200);
			}
		});
		$('.areaCancel').click(function () {
			$('.m-filter').css('top','-50%');
			show = false;
			$('.m-dialog').fadeOut(200);
		})
		$('.areaSubmit').click(function () {
			$('.m-filter').css('top','-50%');
			$('.m-dialog').fadeOut(200);
			if(vm.$data.isSoU == 1){
				var chooseV = itemFont==''?'不限':itemFont;
				$('#areaValue').val(chooseV);
				show = false;
				vm.$data.areaText = $('#areaValue').val();
				vm.search(itemFont);
			}else{
				if(itemFont==''){
					vm.$data.itemInfo.house_area = '不限';
					vm.$data.itemInfo.house_model = '';
				}else{
					vm.$data.itemInfo.house_area = itemFont[0];
					vm.$data.itemInfo.house_model = itemFont[1];
				}

			}

		});
		$(".m-dialog").click(function(e){
			$('.m-filter').css('top','-50%');
			show = false;
			$('.m-dialog').fadeOut(200);
		})
	})
})();
