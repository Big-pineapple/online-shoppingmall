var blogDetail = new Vue({
	el: '#swiper-container', //写html里面要渲染的部分的最跟父级的id
	data: {
         //写你自己定义的变量 还有假数据也在这里面写
        boximg: null,
        haha:{
        	listImg: [
            {
                url: "./images/banner1.jpg"
            }, 
            {
                url: "./images/banner2.jpg"
            }, 
            {
                url: "./images/banner1.jpg"
            }, 
            {
                url: "./images/banner2.jpg"
            }, 
            {
                url: "./images/banner1.jpg"
            }
        ]
        },
	},
	mounted:function(){
	    this.getData();
	},
	methods:{// 这个里面都是自己写的方法
		getData:function(){
            this.boximg = this.haha.listImg;
            console.log(this.boximg);



            
            // var url = 'a.json';
            // var xhr = new XMLHttpRequest();//发送，装载，判断请求是否成功的方法或属性
            // xhr.open('get',url,false);//同步，异步
            // xhr.send(null);

            // // 500-服务器错误
            // // 404-找不到文件
            // // 200-成功
            // if((xhr.status>=200&&xhr.status<300)||xhr.status==304){
            //     //判断是否成功
            //     // "{a:1,b:2}" -> {a:1，b:2}
            //     var obj = JSON.parse(xhr.responseText);//ES5:将数据由字符串类型转换为Object类型
            //     console.log(obj.a,obj.b[1]);
            //     //对返回数据的额外处理：插入到dom中。
            // }
            
    	    },
    }
})