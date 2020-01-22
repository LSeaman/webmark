Vue.component('show-box', {
	props:['flink', 'show'],
	data: function () {
		return {
			
		}
	},
	template:`
	<div id="particulars" v-if="show">
		<div class="mark-box" v-for="item in flink">
			<div class="mark-title">
				<a :href="'http://' + item.url" v-text="item.title"></a>
			</div>
			<div class="mark-link">
				<a :href="'http://' + item.url" v-text="item.url"></a>
				<span>改</span>
			</div>
		</div>
	</div>
	
	`
})

var vm = new Vue({
	el: '#app',
	data: {
		showFlag: true, 
		hideFlag: true,
		addFlag: true,
		// 显示全部 标志
		showListFlag: false,
		// 修改 标志
		editFlag: false,
		key: '百度',
		ptitle: '',
		purl: '',
		result: '',
		pageHeight: '',
		link: [{
				id:1,
				title: '百度',
				url: 'www.baidu.com'
			},
			{
				id:2,
				title: '搜狗',
				url: 'www.sogou.com'
			},
			{
				id:3,
				title: 'Google',
				url: 'www.google.com'
			},
			{
				id:4,
				title: 'Bing',
				url: 'www.bing.com'
			},
			{
				id:5,
				title: 'Vue',
				url: 'cn.vuejs.org'
			}
		],
		category: [{
			id: 1,
			name: '收藏',
			num: '',
		}, {
			id: 2,
			name: '常用',
			num: '',
		}, {
			id: 3,
			name: '私密',
			num: '',
		}]
	},
	methods: {
		// 展示 快捷框的内容
		show: function(val) {
			this.key = val.title;
			this.search();
		},

		// 搜索 触发事件 
		search: function() {
			this.showListFlag = false;
			this.result = this.link.filter(item => {
				return item.title == this.key
			})
			if (this.result.toString() == '') {
				this.hideFlag = false;
				console.log(1);
			} else {
				this.hideFlag = true;
				this.ptitle = this.result[0].title;
				this.purl = this.result[0].url;
			}
		},
		// 侧边栏显示隐藏 
		addButton: function() {
			this.addFlag = !this.addFlag;
		},
		showButton: function() {
			this.showFlag = !this.showFlag;
		},
		// 显示全部
		showList: function() {
			this.showListFlag = !this.showListFlag;
		},
		// 修改按钮
		editMark: function () {
			this.editFlag = !this.editFlag;
		}
	},
	watch: {
		showFlag: function() {
			if (this.showFlag) {
				this.addFlag == false;
			}
		}
	}
})
