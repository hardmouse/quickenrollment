<template>
  <div>
    <div class="topSpacing"></div>
        <div class="row" style="padding:0px;margin:0px;">
          <div class="headerbelt">
            <div class="container"><div class="headerfont">{{title}}</div></div>
          </div>
          <div class="container bodyContainer">
            <div class="col-xs-12 bodyText bodytext">
              <p>
          <div class="titleText">FAQ style 1:</div>
<!--<pre>{{ this.faqlist.faq.list}}</pre>-->

<ul class="faqListStyle">
  <li v-for="(sas, mykey) in this.faqlist.faq.list">
    <div v-html="sas.que[0]" class="queSty" @click="onExpandFAQ(mykey)"></div>
    <transition name="slide-fade-up">
		<div v-html="sas.ans[0]" class="ansSty" v-if="currentIndex===mykey"></div>
    </transition>
	<div style=height:5px;></div>
  </li>
</ul>

<div class="titleText">FAQ style 2:</div>
<ul class="faqListStyle">
  <li v-for="(sas, mykey) in this.faqlist2.faq.list">
	<div class="row">
    <div v-html="sas.que[0]" class="col-md-5 col-xs-12 style2Title" @click="onExpandFAQ2(mykey)"></div>
	<div v-html="sas.ans[0]" class="col-md-7 col-xs-12 style2body"></div>
	<div class="col-12"><hr></div>
	</div>
  </li>
</ul>

              </p>
            </div>
        </div>
      </div>
</div>
</template>

<script>
export default {
  name: 'support',
  data () {

    return {
		title: 'Customer Support',
		show: true,
		faqlist:'',
		faqlist2:'',
      activeFAQ: '',
	  currentIndex: -1,
	  currentIndex2: -1,
    }
  },
//   mounted: function() {
// 	console.log("mounted")
//   },
  created: function () {
    this.fetchData();
	console.log(this.currentIndex);
	this.$parent.prodEnabled=false;
  },

  methods: {
	fetchData() {
		this.faqlist = require('../assets/files/support.xml')
		this.faqlist2 = require('../assets/files/support2.xml')
		// console.log(this.faqlist.faq.list[0].ans);
		// console.log(JSON.stringify(this.faqlist));
	},
    onExpandFAQ(ind){
		if (ind==this.currentIndex){
			this.currentIndex=-1;
		}else{
			this.currentIndex = ind;
		}
    },
    onExpandFAQ2(ind){
		if (ind==this.currentIndex2){
			this.currentIndex2=-1;
		}else{
			this.currentIndex2 = ind;
		}
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.faqListStyle{
	list-style-type: none;
}
.queSty{
	background-color:#77cbff;
	padding:5px;
	font-weight:bold;
	cursor: pointer;
}
.ansSty{
	background-color:#d2eeff;
	padding:5px;
}
.style2Title{
	font-size: 20px;
}
.style2body{
	font-size: 16px;
}
</style>
