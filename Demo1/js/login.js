var login = new Vue({
	el: "#tab-box",
	data: {
        isoneshow: true,
        istwoshow: false,
	},
	mounted:function(){
        this.getData()
	},
	methods:{
		getData:function(){

		},
        oneclick:function(){
        	this.isoneshow = true;
        	this.istwoshow = false;
        },
        twoclick:function(){
        	this.isoneshow = false;
        	this.istwoshow = true;
        }
	}
})