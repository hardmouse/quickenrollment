
<template>
  <div id="app" class="my-fluid-container">
    <div class="indexNav">
      <div :class="currentClass[this.cNum]">
        <router-link to="/home" class="topnav-item leftLogo">
          <img src="./assets/logoYellow.png" alt="QuickEnrollment" border="0" width="200">
        </router-link>
        <router-link to="/aboutUs" :class="['topnav-item',this.$route.name == 'aboutUs'?'activeTab':'', 'left']">About Us</router-link>
        <router-link to="/Products" :class="['topnav-item', prodEnabled == true?'activeTab':'', 'left']">Our Products</router-link>
        <!--<router-link to="/Products" :class="['topnav-item', this.$route.name == 'Products'?'activeTab':'', 'left']">Our Products</router-link>-->
        <router-link to="/PrivacyPolicy" :class="['topnav-item',this.$route.name == 'Partnership'?'activeTab':'', 'left']">Privacy Policy</router-link>
        <router-link to="/Support" :class="['topnav-item',this.$route.name == 'Support'?'activeTab':'', 'left']">Customer Support</router-link>
        <router-link to="/Contact" :class="['topnav-item',this.$route.name == 'Contact'?'activeTab':'', 'left']">Contact Us</router-link>
        <router-link to="" class="icon topnav-item rightMenu" @click.native="onExpand()"><img src="./assets/menu.gif" border="0"></router-link>
        <router-link to="" class="topnav-item right" @click.native="loginShow = !loginShow">Register</router-link>
        <router-link to="/admin" :class="['topnav-item',this.$route.name == 'Administrator'?'activeTab':'', 'right']">Admin Login</router-link>
        <!--<font style="color:#FFF;">
        {{scrolled}}
        {{yNum}}
        {{screenWidth}}
        </font>-->
        <!--<a  href="javascript:void(0);" class="topnav-item left">({{this.$route.name}})</a>-->
      </div>
    </div>

      <transition name="bounce">
          <div class="loginBox" v-if="loginShow">
            <img src="./assets/Delete.png" class="loginClose" @click="loginShow = !loginShow">
            <form class="form" :action="selected">
            <div class="form-group">
                <label for="keyword">Quick Word:</label>
                <!--<b-form-input v-model="qWord" type="text" placeholder="Enter quick word" :state="qWord.length?'success':'warning'" :formatter="format"></b-form-input>-->
                <!--<input type="email" class="form-control" id="email">-->
                <b-form-input type="text" name="org_keyword"></b-form-input>
            </div>
            <div class="form-group">
                <label for="eType">Event Type:</label>
                <b-form-select v-model="selected" 
                   :options="options"
                   calss="mb-3"></b-form-select>
                <!--<div>Selected: <strong>{{selected}}</strong></div>-->
            </div>
            <!--<div class="checkbox">
                <label><input type="checkbox"> Remember me</label>
            </div>-->
            <button type="submit" class="btn btn-primary" style="width:100%;">Submit</button>
            </form>
          </div>
      </transition>

    <router-view></router-view>

     <div class="myFooter">
       <div class="container">
          <div class="row footerText">
            <div class="col-md-4 col-xs-12">
                  <p class="footerTextTitle">QuickEnrollment, INC</p>
                  3601 Highway #7 East, Suite 400<br>
                  Markham, Ontario<br>
                  L3R 0M3<br>
                  Canada<br>
                  TEL: (416) 337-2016<br>
                  FAX: (905) 477-8949<br>
                  <a href="mailto:info@quickenrollment.com">info@quickenrollment.com</a><br>
                  <br><br>
            </div>
            <div class="col-md-4 col-xs-12">
                  <p class="footerTextTitle">ABOUT</p>
                  <router-link to="/Products-RMS?page=testimonials">Testimonials</router-link><br>
                  <router-link to="/Support">FAQs</router-link><br>
                  <router-link to="/PrivacyPolicy">Privacy Policy</router-link><br>
                  <br><br>
            </div>
            <div class="col-md-4 col-xs-12">
                  <p class="footerTextTitle">SUPPORT</p>
                  <router-link to="/Contact">Contact Us</router-link><br>
                  <br><br>
            </div>

				<div class="col-12" style="text-align:center; color:#FF0;">
			    Copyright 1999-2017 QuickEnrollment Inc. all rights reserved
		    </div>
          </div>
       </div>



      <div class="row footerText">
	    </div>

		</div>


     <div class="bottomFooter">
	    <div class="row footerLogoText">
			  <div class="col">
			    <img src="./assets/footerImages/omha.gif" class="img-thumbnail" width="50"><br>ONTARIO MINOR HOCKEY ASSOCIATION
		    </div>
			  <div class="col">
			    <img src="./assets/footerImages/hc_logo.jpg" class="img-thumbnail" width="50"><br>HOCKEY CANADA
		    </div>
			  <div class="col">
			    <img src="./assets/footerImages/gthlfoot.gif" class="img-thumbnail" width="50"><br>GREATER TORONTO HOCKEY LEAGUE
		    </div>
			  <div class="col">
			    <img src="./assets/footerImages/news_alliance.jpg" class="img-thumbnail"><br>ALLIANCE HOCKEY
		    </div>
			  <div class="col">
			    <img src="./assets/footerImages/spoLogoSMALL.gif" class="img-thumbnail"><br>SLO-PITCH ONTARIO
		    </div>
	    </div>
     </div>




  </div>
</template>
<script>
export default {
  name: 'app',
  data(){
    return {
      prodEnabled:false,
      qWord: '',
      activeTab: '',
      currentPage: 'home',
      cNum:0,
      hpNum:0,
      yNum: 0,
      screenWidth: 0,
      scrolled: false,
      homeTextShow:true,
      currentClass: ['topnav top-banner','responsive topnav top-banner-solid','topnav top-banner-blue'],
      // currentHomeBackground: ['bkImage1','bkImage2'],
      loginShow: false,
      selected: null,
      options: [
      {
        text: 'Select your enrollment',
        value: null
      },
      {
        text: 'Leagues',
        value: 'https://www.quickenrollment.com/qerms_league/league/prelogin.aspx?EmailHelp=Yes'
      },
      {
        text: 'Tournaments',
        value: 'https://www.quickenrollment.com/qe_client_member_secure/qeSearch/qeTournaments/client_member_locations.asp'
      },
      {
        text: 'Events',
        value: 'https://www.quickenrollment.com/qe_client_member/qeSearch/event_locations.asp'
      },
      // {
      //   text: 'Affiliation',
      //   value: 'affiliation'
      // },
      // {
      //   text: 'Disabled',
      //   value: 'disabled',
      //   disabled: true
      // }
      ],
    }
  },
  computed: {
    
    // navClass: function () {
    //   return {
    //     'topnav-item': true,
    //     'left': true,
    //   }
    // }
  },
  methods: {
    format(value) {
      return value.toLowerCase();
    },
    onExpand(){
      this.cNum ^= 1;
      // console.log(this.cNum);
    },
    onBackgroundRotate() {
      this.homeTextShow=false;
      this.hpNum++
      if(this.hpNum>5)this.hpNum=0
      this.onTextRotate()
    },
    onTextRotate() {
      this.homeTextShow=true;
    },
    handleWindowResize(event) {
      // this.windowWidth = event.currentTarget.innerWidth;
      // if(this.windowWidth>640)this.cNum=0;
      // console.log(this.windowWidth);
      this.screenWidth = window.outerWidth;
    },
    handleScroll () {
      this.scrolled = window.scrollY > 0;
      this.yNum = window.scrollY;
      this.screenWidth = window.outerWidth;
      // if(this.yNum>100){
      //   this.cNum=2;
      // }else{
      //   this.cNum=0;
      // }
    },
  },
  created: function() {
    setInterval(() => { 
      this.onBackgroundRotate();
    }, 10000),
    window.addEventListener('scroll', this.handleScroll);
    // this.prodPage = this.$route.name | truncate(4);
  },
  beforeDestroy: function () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  mounted: function() {
    window.addEventListener('resize', this.handleWindowResize);
  },

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #555;
  margin-top: 0px;
}
.loginBox{
  z-index: 25;
  position: fixed;
  width:240px;
  right:0px;
  top  :50px;
  margin: 10px;
  padding: 10px;
  text-align: left;
  background-color: #fff;
  border: 2px solid #0079C1;
  font-size: 14px;
}
.loginClose{
  position:inherit;
  right:20px;
  width:20px;
  cursor: pointer;
}
.topSpacing{
  height:80px;
}
.topnav {
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10;
  width: 100%;
  font-family:'gothic', Arial, Helvetica, sans-serif;
  border:#0F0 0px solid;
}
.topnav-item {
  margin-right: 0px;
  margin-left: 0px;
  position:relative;
  /*font-weight: bold;*/
  border:#FFF 0px solid;
}
.leftLogo {
  top: 0%;
  display: block;
  float: left;
}
.left {
  top: 20%;
  display: block;
  float: left;
}
.right {
  top: 20%;
  display: block;
  float: right;
  border:#FF0 1px solid;
  margin-right:10px;
}
.rightMenu {
  top: 20%;
  display: block;
  float: right;
  margin-right:10px;
}

.topnav a:not(:first-child) {
  color: #fff;
  text-align: center;
  padding: 0px 10px;
  text-decoration: none;
  font-size: 17px;
}

.topnav a:hover:not(:first-child) {
  color: #000;
  background-color: #ddd;
  opacity: 0.5;
  filter: alpha(opacity=50); /* For IE8 and earlier */
}

.topnav .icon {
  display: none;
}
.topnav a.activeTab {
  color: #0079C1;
  font-weight: bold;
  background-color: #FFF;
  border: #FFF 0px solid;
}
.indexNav{
  display: block;
}
.bodyContainer{
  text-align:left;
  margin-top:10px;
}
.bodyText{
  font-family: 'gothic', Arial, Helvetica, sans-serif;
	position:static;
	font-size:16px;
	border: 0px solid #F00;
	/*height: 300px;*/
}
.titleText{
  font-family: 'gothic', Arial, Helvetica, sans-serif;
	margin: 20px 0px 10px 0px;
  line-height: 24px;
	font-weight:bold;
	font-size:24px;
}
@media screen and (max-width: 800px) {
	.titleText{
		line-height: 20px;
		font-size: 15px;
	}
	.bodyText{
		font-size:14px;
	}
}
@media screen and (max-width: 995px) {
  .topnav a:not(:first-child) {font-size: 14px;}
}
@media screen and (max-width: 800px) {
  .topnav a:not(:first-child) {font-size: 12px;}
}
@media screen and (max-width: 1160px) {
  .topnav a:not(:first-child) {display: none;}
  .topnav a.icon {
    float: right;
    display: block;
  }
  .topnav.responsive {position: fixed;}
  .topnav.responsive .icon {
    position: absolute;
    color: #FFF;
    right: 0;
    top: 16px;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
.top-banner{
  background-color:#0079C1;
  height:70px;
  background: -webkit-linear-gradient(rgba(0,121,193,.9) 90%, rgba(0,121,193,0));
  background: -o-linear-gradient(rgba(0,121,193,.9) 90%, rgba(0,121,193,0));
  background: -moz-linear-gradient(rgba(0,121,193,.9) 90%, rgba(0,121,193,0));
  background: linear-gradient(rgba(0,80,180,.6) 10%, rgba(0,121,193,.5) 70%, rgba(0,121,193,0));
}
.top-banner-solid{
  background-color:#0079C1;
  opacity: 0.9;
  filter: alpha(opacity=90); /* For IE8 and earlier */
  padding-bottom: 10px;
}
.top-banner-blue{
  background-color:#0079C1;
  opacity: 1;
  height:70px;
  filter: alpha(opacity=100); /* For IE8 and earlier */
}
.myFooter{
  color:#FFF;
  margin:0px;
  padding:60px 20px 60px 90px;
  background-color:#333;
  text-align: left;
  /*background: -webkit-linear-gradient(rgba(255,255,255,1) 10%, rgba(255,255,255,1));
  background: -o-linear-gradient(rgba(255,255,255,1) 10%, rgba(255,255,255,1));
  background: -moz-linear-gradient(rgba(255,255,255,1) 10%, rgba(255,255,255,1));
  background: linear-gradient(rgba(235,235,235,1), rgba(255,255,255,1) 15%);*/
}
.footerTextTitle{
  font-size:16px;
  font-weight: bold;
  margin-left: -7px;
  margin-bottom: 7px;
}
.footerText{
  font-size:15px;
  font-family: 'gothic', Arial, Helvetica, sans-serif;
}
.footerLogoText{
  font-size:10px;
}
.yellowText{
	color:#806000;
}
.back2Prod{
  padding: 0px 20px 0px 20px;
  margin-top:10px;
  font-family:'gothic', Arial, Helvetica, sans-serif;
  background-color:#555;
  color:#FFF;
  cursor:pointer;
}
.back2Admin{
  padding: 10px 20px 10px 20px;
  border-radius: 7px;
  margin-top:10px;
  font-family:'gothic', Arial, Helvetica, sans-serif;
  background-color:#555;
  color:#FFF;
  width:200px;
  cursor:pointer;
}
.bottomFooter{
  color:#555;
  margin:0px;
  padding:20px;
  background-color:#FFF;
}
img {
  vertical-align: middle;
}
.img-responsive,
.thumbnail > img,
.thumbnail a > img,
.carousel-inner > .item > img,
.carousel-inner > .item > a > img {
  display: block;
  max-width: 100%;
  height: auto;
}
.img-rounded {
  border-radius: 12px;
}
.img-thumbnail {
  display: inline-block;
  max-width: 100%;
  height: auto;
  padding: 4px;
  line-height: 1.42857143;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  -webkit-transition: all .2s ease-in-out;
       -o-transition: all .2s ease-in-out;
          transition: all .2s ease-in-out;
}
.my-fluid-container {
  height:95vh;
  text-align: center;
  padding-left: 0px;
  padding-right: 0px;
  margin-left: auto;
  margin-right: auto;
}

.slide-fade-left-enter-active {
  display:block;
  transition: all .5s ease;
}
/*************************************************/
/*  DO NOT DELETE LINE - FOR AVOID OVERLAY ONLY  */
/********************************************************/
/*  MAY COMMON OUT FOLLOWING, KEEP IT FOR AVOID GLIDGE  */
/********************************************************/
.slide-fade-left-leave-active {
  display:none;
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-left-enter, .slide-fade-left-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateX(-20px);
  opacity: 0;
}

.slide-fade-up-enter-active {
  display:block;
  transition: all .5s ease;
}
.slide-fade-up-leave-active {
  display:none;
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-up-enter, .slide-fade-up-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateY(-20px);
  opacity: 0;
}

.slide-fade-enter-active {
  display:block;
  transition: all .5s ease;
}
/*************************************************/
/*  DO NOT DELETE LINE - FOR AVOID OVERLAY ONLY  */
/********************************************************/
/*  MAY COMMON OUT FOLLOWING, KEEP IT FOR AVOID GLIDGE  */
/********************************************************/
.slide-fade-leave-active {
  display:none;
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 2s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}

.bounce-enter-active {
  animation: bounce-in .2s;
}
.bounce-leave-active {
  animation: bounce-in .2s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}


.bkImage{
  position: relative;
  opacity: 1;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 90%;
}
/*.bkImage1{
  background-image: url("http://jay-yu.com/works/quickEnrollment/assets/banner1.jpg");
}
.bkImage2{
  background-image: url("http://jay-yu.com/works/quickEnrollment/assets/banner2.jpg");
}*/
.serviceImage {
  background-image: url('http://jay-yu.com/works/quickEnrollment/assets/golf.jpg');
  background-position: center center;
  background-size: cover;
  height: 80%;
  padding-bottom: 10px;
}

@font-face {
    font-family: 'myFont';
    src: url('./assets/fonts/mimicimpact.ttf');
    /*src: url('http://jay-yu.com/works/quickEnrollment/assets/font/mimicimpact.ttf');*/
}
@font-face {
    font-family: 'gothic';
    src: url('./assets/fonts/gothic.ttf');
    /*src: url('http://jay-yu.com/works/quickEnrollment/assets/font/gothic.ttf');*/
}
.white{
	color: #0079C1;
	text-align: center;
	margin: auto;
  font-size: 36px;
  font-size: 8vw;
	padding-top:  80px;
	font-family: 'myFont', Arial, Helvetica, sans-serif;
  text-shadow: 0 0 8px #FFF, 0 0 19px #FFF;
}
.headerfont{
	color: #333;
  font-size: 32px;
	font-family: 'gothic', Arial, Helvetica, sans-serif;
  /*text-shadow: 0 0 8px #FFF, 0 0 19px #FFF;*/
}
.headerbelt{
  width: 100%;
  line-height: 90px;
	text-align: left;
  padding-left:10px;
  /*background-color: #ccf;
  background: #ccf;
  background: -webkit-linear-gradient(90deg, #0079C1, #3aa4e2);
  background: -o-linear-gradient(90deg, #0079C1, #3aa4e2);
  background: -moz-linear-gradient(90deg, #0079C1, #3aa4e2);
  background: linear-gradient(90deg, #0079C1, #3aa4e2);*/
}
.backButton{
  right: 20px; 
  bottom: 120px; 
  position: fixed;
  width: 50px;
  height: 50px;
}
</style>
