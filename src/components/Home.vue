<template>
<div>
  <div class="homeContainer vertical-center">
      <transition name="fade">
        <img :src="homeImage[this.$parent.hpNum]" :key="homeImage[this.$parent.hpNum]" class="img-responsive homeBackground">
      </transition>
      <div class="container">
        <div class="col-sm-10 offset-sm-1">
          <transition name="bounce">
            <h1 class="myTitle">{{ title }}</h1>
          </transition>
          <transition name="bounce">
            <p class="myBodyText">{{ body }}</p>
          </transition>
          <transition name="slide-fade">
            <p v-html="quoteText[this.$parent.hpNum]" class="quoteBodyText" v-if="this.$parent.homeTextShow"></p>
          </transition>
          <!--<button type="button" class="btn btn-primary col-sm-2" @click.stop="onClick('abc')">START</button>-->
          <!--<button type="button" class="btn btn-warning col-sm-2" @click.stop="onColorClick('abc')">Background</button>-->
          <!--<button type="button" class="btn btn-success col-sm-2" @click.stop="onBcClick()">TEXT</button>-->
        </div><span v-for="(url,key) in homeImage"><img :src="url" width="0"></span>
      </div>
  </div>
  <div class="headerbelt">
            <div class="container"><div class="headerfont">Why QuickEnrollment?</div></div>
          </div>
  <div class="container contentBody">
    <div class="row">
      <div class="col-md-4 col-sm-12 supportContent">
        <img src="../assets/eor.png" class="supportImage">
<h5 class="yellowText">Efficient Online Registration</h5>
<p>
Members registered in your customized registration system in minutes! No line ups and no hassles! Automation reduces volunteer workload by more than 60%! Detailed and customized reporting ensures complete control!
</p>
      </div>
      <div class="col-md-4 col-sm-12 supportContent">
        <img src="../assets/sop.png" class="supportImage">
<h5 class="yellowText">Safe, Secure Online Payments with the Lowest Rates</h5>
<p>
No more chasing fees. Keep control with the industry’s first integrated and detailed payment reporting. Offer a staggered payment option. National volumes ensure that you will get all this for the lowest processing rates!
</p>
      </div>
      <div class="col-md-4 col-sm-12 supportContent">
        <img src="../assets/are.png" class="supportImage">
<h5 class="yellowText">Automated Reminder Emails</h5>
<p>
Offering Cheque or Cash payments? Let our Accounts Receivable Automated Emails chase fees without any efforts by you! Need to remind members of important information prior to your event? Reminder Auto Emails make sure your members are fully informed at just the right time!
</p>
      </div>
    </div>


    <div class="row">
      <div class="col-md-4 col-sm-12 supportContent">
        <img src="../assets/emc.png" class="supportImage">
<h5 class="yellowText">Efficient Member Communications</h5>
<p>
Email a member, parents or your entire organization with the Email Generator! Communicate cancellations to a division or participants in a session. Inform your coaches of upcoming certification dates and locations
</p>
      </div>
      <div class="col-md-4 col-sm-12 supportContent">
        <img src="../assets/tmm.png" class="supportImage">
<h5 class="yellowText">Target Market Your Members</h5>
<p>
Have a new program you’re offering?  New merchandise or skills videos just came in? Is this season’s registration around the corner?
Get the word out to all your members quickly and easily with our state-of-the-art mass communication tools!
</p>
      </div>
      <div class="col-md-4 col-sm-12 supportContent">
        <img src="../assets/crm.png" class="supportImage">
<h5 class="yellowText">Customer Retention & Management</h5>
<p>
Keep track of all your current and past members so you can easily reach out and stay connected.
</p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 col-sm-12 supportContent">
        <img src="../assets/trm.png" class="supportImage">
<h5 class="yellowText">Tournament Registration Management System</h5>
<p>
Teams registered and paid in minutes! Track and manage team registration. Real-time information at your fingertips. Make your tournament registration convenient and efficient for you and your teams!
</p>
      </div>
    </div>
  </div>
</div>
  
</template>
  

<script>
export default {
  data () {
    return {
      title: 'QuickEnrollment',
      body: 'proven, powerful, professional',
      show: true,
      qc:0,
      homeImage: ["https://www.quickenrollment.com/home/assets/banner1.jpg",
      "https://www.quickenrollment.com/home/assets/baseball2.jpg",
      "https://www.quickenrollment.com/home/assets/soccer1.jpg",
      "https://www.quickenrollment.com/home/assets/ska.jpg",
      "https://www.quickenrollment.com/home/assets/swm.jpg",
      "https://www.quickenrollment.com/home/assets/basketball.jpg"],
      currentText:"",
      quoteText:[
        "Hockey Canada has been extremely pleased with the work of QuickEnrollment and feels that they provide the best service at the best price for our needs.<br><br><i>Jonah McEachern, Director of Operations</i><br><b>Hockey Canada</b>",
        "I am extremely satisfied with what the QuickEnrollment Online Registration System provides SPO and it's members.<br><br><i>Tom Buchan, CEO</i><br><b>Slo-Pitch Ontario Association</b>",
        "We were very pleased that the online registration process went smoothly for both the spring and summer programs<br><br><i>Debbie McAdam, Administration</i><br><b>North Toronto Soccer Club</b>",
        "QuickEnrollment The system saved us hundreds of volunteer hours this past season!<br><br><i>Happy Minor Sports Administrator</i>",
        "What a great system! It was flawless and intuitive. Thanks again!<br><br><i>Happy Registrant</i>",
        "QuickEnrollment runner up for the Business of the Year, nominated by the Royal Bank of Canada<br><br>",
      ],
    }
  },
  methods: {
     onClick(val) {
      //  console.log(this.backgroundImage)
      this.$router.push({name: 'aboutUs'}); 
     },
     onColorClick(val) {
      this.$parent.onBackgroundClick('a')
     },
     onBcClick() {
      this.show = !this.show
      this.$parent.homeTextShow = !this.$parent.homeTextShow
     }
  },
	created: function() {
		this.$parent.prodEnabled=false;
    window.scrollTo(0, 0);
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.vertical-center {
  min-height: 100%;  /* Fallback for browsers do NOT support vh unit */
  min-height: 100vh; /* These two lines are counted as one :-)       */

  display: flex;
  /*align-items: center;*/ /*v-align to middle*/
}
.myTitle {
  margin-top:30%;
	/*font-family: 'myFont';*/
	font-family: 'myFont', Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  text-align: left;
  opacity: 0.8;
  filter: alpha(opacity=80);
  color: #fff;
  border: 0px solid #0F0;
  /*font-size: 36px;*/
  font-size: 9vw;
  letter-spacing: 1px;
  margin-bottom:0PX;
  text-shadow: 0 0 8px #0079C1, 0 0 19px #000000;
}
.myBodyText {
  white-space: nowrap;
	font-family: 'myFont', Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  text-align: left;
  margin-left: 10px;
  border: 0px solid #0F0;
  text-shadow: 0 0 8px #FFF, 0 0 19px #FFF;
  opacity: 0.8;
  filter: alpha(opacity=80);
  color: #000;
  font-size: 3.5vw;
  /*font-size: 3.3vw;*/
  letter-spacing: 0px;
}
.contentBody{
  margin-top:30px;
  margin-bottom:30px;
	font-family:'gothic', Arial, Helvetica, sans-serif;
  text-align:left;
  
}
.supportContent{
  margin-top:30px;
  margin-bottom:30px;
  border: 10px solid white;
  resize: vertical;
}
.supportImage{
  width:80px;
  display: block;
  margin: 0 auto;
  padding-bottom:12px;
}
.quoteBodyText{
	font-family:'gothic', Arial, Helvetica, sans-serif;
  margin-left: 15px;
  width: 100%;
  color: #FFF;
  /*font-size: 10px;*/
  font-size: 16px;
  text-align: left;
  text-shadow: 1px 1px 2px #000000, 0px 0px 4px #000000, 2px 2px 8px #000000;
}
@media screen and (max-width: 600px) {
  .quoteBodyText {font-size: 14px;line-height: 15px;}
  .myBodyText {font-size: 5vw; margin-bottom:0px;padding-top:0px;}
  .myTitle {font-size: 12vw; margin-top:10%;}
}
@media screen and (max-width: 400px) {
  .quoteBodyText {font-size: 12px;line-height: 15px;}
  .myBodyText {font-size: 5vw; margin-bottom:0px;padding-top:0px;}
  .myTitle {font-size: 12vw; margin-top:50%;}
}
.myTitleColor1 {
  background-color: #0079C1;
}
.myTitleColor2 {
  background-color: #333333;
}
.myTitleColor3 {
  background-color: #1e961e;
}
.myTitleColor4 {
  background-color: #b45a00;
}
.homeBackground{
  position:absolute;
  z-index: -10;
  margin: 0px;
  background-position: center center;
  object-fit: cover;
  /*height:100%;
  height:90hv;
  width:100%;
  width:100hv;*/
  /*max-width:100%;
  max-height:1500px;*/
  height: 100%;
  width: 100%;
}
.homeContainer {
  height:100vh;
  text-align: center;
  padding-left: 0px;
  padding-right: 0px;
  margin-left: auto;
  margin-right: auto;
}

</style>
