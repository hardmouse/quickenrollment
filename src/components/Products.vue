<template>
  <div class="homeContainer">
	<!--<div class="col-12 serviceImage">
		<div class="white">{{ msg }}</div>
		<div class="row justify-content-around">
			<button type="button" class="btn btn-primary col-3" @click.stop="sectionClick(true)">League</button>
			<button type="button" class="btn btn-primary col-3" @click.stop="sectionClick(false)">O.F.C.S.</button>
		</div>
	</div>-->
		<div class="topSpacing"></div>
        <!--<div class="row" style="padding:0px;margin:0px;">-->
          <div class="headerbelt">
            <div class="container"><div class="headerfont">{{title}}</div></div>
          </div>
		  <div class="col-12 serviceImage" style="padding-top:240px;padding-bottom:20px;">
			<div class="row justify-content-around">

				<div class="col-md-3 prodBox bgRMS">
					<router-link to="/Products-RMS">
					<div class="productBoxTitle">RMS</div>
					<div class="productBoxBody">Registration Management Systems</div>
					</router-link>
				</div>

				<div class="col-md-3 prodBox bgOFCS">
					<router-link to="/Products-OFCS">
					<div class="productBoxTitle">OFCS</div>
					<div class="productBoxBody">Online Fee Collection Services</div>
					</router-link>
				</div>

				<div class="col-md-3 prodBox bgQINT">
					<router-link to="/Products-QINT">
					<div class="productBoxTitle">Q-int</div>
					<div class="productBoxBody">Development & Integration</div>
					</router-link>
				</div>
			</div></div>
		  <div class="container">
		  	<div style="height:120px;"></div>
		<!--<div class="col-12 serviceImage" style="padding-top:120px;padding-bottom:20px;">-->
		<!--</div>-->

			<!--<div class="row" style="margin:0px;">
				<transition name="slide-fade-left">
				<div v-if="this.sectionView" :class="['col-xs-12', 'col-md-3','commonBG',{'hideMe' : !this.sectionView}]">
					<div class="sidemenu">
						<div class="subitem dropdown">
							<button class="dropbtn">&#9660; League</button>
								<div class="dropdown-content">
									<a @click="onExpand('overviewLeague','check')">Overview</a>
									<a @click="onExpand('Admin_Features','check')">Admin Features</a>
									<a @click="onExpand('Participant_Features','check')">Participant Features</a>
									<a @click="onExpand('Client_Applause','check')">Client Applause</a>
								</div>
						</div>
						<div class="subitem">
							<button type="button" class="sidebtn" @click="onExpand('Tourment','check')">Tourment</button>
						</div>
						<div class="subitem">
							<button type="button" class="sidebtn" @click="onExpand('Event','check')">Event</button>
						</div>
					</div>
				</div>
				</transition>

				<transition name="slide-fade-left">
				<div v-if="!this.sectionView" :class="['col-xs-12', 'col-md-3','commonBG',{'hideMe' : this.sectionView}]">
					<div class="sidemenu">
						<div class="subitem dropdown">
							<button class="dropbtn">&#9660; Merchant Accounts</button>
								<div class="dropdown-content">
									<a @click="onExpand('overviewOFCS','check')">Overview</a>
									<a @click="onExpand('Automated_Sign_up','check')">Automated Sign up</a>
									<a @click="onExpand('FAQS','check')">FAQ's</a>
								</div>
						</div>
						<div class="subitem">
							<button type="button" class="sidebtn" @click="onExpand('Payment_Processing','check')">Payment Processing</button>
						</div>
						<div class="subitem">
							<button type="button" class="sidebtn" @click="onExpand('AdminOFCS','check')">Admin</button>
						</div>
					</div>
				</div>
				</transition>
				
				<div class="col-xs-12 col-md-9 bodyText">
					<transition name="slide-fade">
						<div v-if="this.currentSection=='overviewLeague'" :class="[this.currentSection != 'overviewLeague'?'hideMe':'']">
							<div class="col-10" style="margin:10px 20px 50px 0px;text-align:left;">
								<div class="titleText">Overview: Q6 League Registration Management System</div>
								<p>
								Our 6th generation league registration management system will ensure that your members experience a quick, easy and efficient registration process when registering for your programs.  Your customized end-to-end system will lead your members from entering data through to payment in a matter of minutes.
								<br><br>
								Robust and intuitive online administration tools and reporting will allow you to substantially reduce volunteer hours each and every registration season.
								</p>
							</div>
						</div>
					</transition>

					<transition name="slide-fade">
						<div v-if="this.currentSection=='Admin_Features'" :class="[this.currentSection != 'Admin_Features'?'hideMe':'']">
							<div class="col-10" style="margin:10px 20px 50px 0px;text-align:left;">
								<div class="titleText">Admin_Features Admin_Features</div>
								<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut felis velit. Integer nulla sapien, semper ut semper ac, molestie ac leo. Sed mollis pulvinar maximus. Curabitur ut quam placerat, condimentum mauris sed, convallis tellus. Mauris dictum pellentesque est. Proin sit amet arcu nunc. Mauris at neque nec nunc aliquet porta sit amet a purus. Morbi sagittis eget neque sit amet sollicitudin.
<br><br>
Donec enim mi, malesuada sed neque at, pulvinar efficitur augue. Nulla dignissim metus orci. Suspendisse rutrum libero orci, eu maximus magna volutpat eu. Ut fermentum consectetur justo at feugiat. Sed placerat eros et nibh sollicitudin feugiat. Maecenas id justo vitae ex ullamcorper cursus at non sapien. Nulla placerat lorem consequat, rhoncus tortor volutpat, tempor magna. Nam enim diam, cursus ac diam at, lobortis dapibus ligula. Cras quis laoreet dolor. Fusce consequat nibh risus.
								
								</p>
							</div>
						</div>
					</transition>

					<transition name="slide-fade">
						<div v-if="this.currentSection=='Participant_Features'" :class="[this.currentSection != 'Participant_Features'?'hideMe':'']">
							<div class="col-10" style="margin:10px 20px 50px 0px;text-align:left;">
								<div class="titleText">Participant_Features</div>
								<p>
								Nam efficitur mi sit amet ultrices eleifend. Phasellus ultrices ante sit amet vehicula ornare. Vivamus suscipit, felis sed pulvinar maximus, nibh nisl posuere lacus, a aliquam mi magna sed lorem. Nam aliquam molestie augue, eget pharetra purus tristique molestie. In lacus metus, tristique ac mi sit amet, gravida ultrices ante. Aenean iaculis nec metus pulvinar elementum. Quisque augue velit, lacinia a elit id, ultricies ullamcorper elit. Proin id tellus quis purus tincidunt faucibus. Nullam vulputate tortor purus, vitae faucibus libero placerat non. Donec non erat ullamcorper, vestibulum ipsum in, egestas lectus. Donec viverra posuere tempus. Vivamus hendrerit et odio vel dictum. Etiam scelerisque libero id congue sodales. Integer aliquam purus ut odio semper, at dignissim elit euismod.
<br><br>
Ut accumsan ultricies purus gravida tincidunt. Aenean sed risus non erat posuere gravida. In at feugiat nisi, sed sagittis massa. Pellentesque velit mauris, semper a libero placerat, condimentum placerat eros. Nam et enim in metus volutpat mattis ut eleifend felis. Integer diam nisl, fringilla a cursus eu, commodo quis odio. Quisque pharetra viverra purus a porta. Morbi sodales elit id augue sodales sagittis. Sed felis ante, lacinia in ante quis, ornare pulvinar neque. Phasellus rutrum arcu eget tristique tempus. Aliquam erat volutpat. Sed id suscipit nisl.
								
								</p>
							</div>
						</div>
					</transition>

					<transition name="slide-fade">
						<div v-if="this.currentSection=='Client_Applause'" :class="[this.currentSection != 'Client_Applause'?'hideMe':'']">
							<div class="col-10" style="margin:10px 20px 50px 0px;text-align:left;">
								<div class="titleText">Client_Applause</div>
								<p>
								Proin id tellus quis purus tincidunt faucibus. Nullam vulputate tortor purus, vitae faucibus libero placerat non. Donec non erat ullamcorper, vestibulum ipsum in, egestas lectus. Donec viverra posuere tempus. Vivamus hendrerit et odio vel dictum. Etiam scelerisque libero id congue sodales. Integer aliquam purus ut odio semper, at dignissim elit euismod.
<br><br>
Ut accumsan ultricies purus gravida tincidunt. Aenean sed risus non erat posuere gravida. In at feugiat nisi, sed sagittis massa. Pellentesque velit mauris, semper a libero placerat, condimentum placerat eros. Nam et enim in metus volutpat mattis ut eleifend felis. Integer diam nisl, fringilla a cursus eu, commodo quis odio.
								
								</p>
							</div>
						</div>
					</transition>

					<transition name="slide-fade">
						<div v-if="this.currentSection=='Tourment'" :class="[this.currentSection != 'Tourment'?'hideMe':'']">
							<div class="col-10" style="margin:10px 20px 50px 0px;text-align:left;">
								<div class="titleText">Tourment Tourment Tourment Tourment</div>
								<p>
									Aenean iaculis nec metus pulvinar elementum. Quisque augue velit, lacinia a elit id, ultricies ullamcorper elit. Proin id tellus quis purus tincidunt faucibus. Nullam vulputate tortor purus, vitae faucibus libero placerat non. Donec non erat ullamcorper, vestibulum ipsum in, egestas lectus. Donec viverra posuere tempus. Vivamus hendrerit et odio vel dictum. Etiam scelerisque libero id congue sodales. Integer aliquam purus ut odio semper, at dignissim elit euismod.
									<br><br>
								Nam efficitur mi sit amet ultrices eleifend. Phasellus ultrices ante sit amet vehicula ornare. Vivamus suscipit, felis sed pulvinar maximus, nibh nisl posuere lacus, a aliquam mi magna sed lorem. Nam aliquam molestie augue, eget pharetra purus tristique molestie. In lacus metus, tristique ac mi sit amet, gravida ultrices ante. 
								
								</p>
							</div>
						</div>
					</transition>

					<transition name="slide-fade">
						<div v-if="this.currentSection=='Event'" :class="[this.currentSection != 'Event'?'hideMe':'']">
							<div class="col-10" style="margin:10px 20px 50px 0px;text-align:left;">
								<div class="titleText">Event Event Event Event Event</div>
								<p>
								Duis interdum purus vitae arcu ultricies, ornare fringilla orci venenatis. Integer in nisl posuere, blandit odio sed, feugiat purus. Fusce in dolor sed dolor congue consectetur. Morbi eget malesuada nibh. Quisque finibus lorem eget euismod imperdiet. Aliquam consectetur sodales justo, faucibus mattis arcu pulvinar ut. Vestibulum massa turpis, dignissim a tellus non, convallis auctor arcu. Nam scelerisque ullamcorper lectus, vitae malesuada tellus. Sed vitae sem erat. Phasellus dapibus mattis turpis sed iaculis. Cras vitae tortor ante. Nunc aliquam felis vitae orci rhoncus consequat.
								
								</p>
							</div>
						</div>
					</transition>

					<transition name="slide-fade">
						<div v-if="this.currentSection=='overviewOFCS'" :class="[this.currentSection != 'overviewOFCS'?'hideMe':'']">
							<div class="col-10" style="margin:10px 20px 50px 0px;text-align:left;">
								<div class="titleText">Overview: OFCS Merchant Accounts</div>
								<p>
								Our 6th generation league registration management system will ensure that your members experience a quick, easy and efficient registration process when registering for your programs.  Your customized end-to-end system will lead your members from entering data through to payment in a matter of minutes.
								<br><br>
								Robust and intuitive online administration tools and reporting will allow you to substantially reduce volunteer hours each and every registration season. 
								</p>
							</div>
						</div>
					</transition>

					<transition name="slide-fade">
						<div v-if="this.currentSection=='Automated_Sign_up'" :class="[this.currentSection != 'Automated_Sign_up'?'hideMe':'']">
							<div class="col-10" style="margin:10px 20px 50px 0px;text-align:left;">
								<div class="titleText">Automated_Sign_up</div>
								<p>
								Sed placerat eros et nibh sollicitudin feugiat. Maecenas id justo vitae ex ullamcorper cursus at non sapien. Nulla placerat lorem consequat, rhoncus tortor volutpat, tempor magna. Nam enim diam, cursus ac diam at, lobortis dapibus ligula. Cras quis laoreet dolor. Fusce consequat nibh risus.
<br><br>
Nam efficitur mi sit amet ultrices eleifend. Phasellus ultrices ante sit amet vehicula ornare. Vivamus suscipit, felis sed pulvinar maximus, nibh nisl posuere lacus, a aliquam mi magna sed lorem. Nam aliquam molestie augue, eget pharetra purus tristique molestie. In lacus metus, tristique ac mi sit amet, gravida ultrices ante. Aenean iaculis nec metus pulvinar elementum. Quisque augue velit, lacinia a elit id, ultricies ullamcorper elit. <br><br>Proin id tellus quis purus tincidunt faucibus. Nullam vulputate tortor purus, vitae faucibus libero placerat non. Donec non erat ullamcorper, vestibulum ipsum in, egestas lectus. Donec viverra posuere tempus. Vivamus hendrerit et odio vel dictum. Etiam scelerisque libero id congue sodales. Integer aliquam purus ut odio semper, at dignissim elit euismod.
								</p>
							</div>
						</div>
					</transition>

					<transition name="slide-fade">
						<div v-if="this.currentSection=='FAQS'" :class="[this.currentSection != 'FAQS'?'hideMe':'']">
							<div class="col-10" style="margin:10px 20px 50px 0px;text-align:left;">
								<div class="titleText">FAQ's</div>
								<p>
								Quisque pharetra viverra purus a porta. Morbi sodales elit id augue sodales sagittis. Sed felis ante, lacinia in ante quis, ornare pulvinar neque. Phasellus rutrum arcu eget tristique tempus. Aliquam erat volutpat. Sed id suscipit nisl.
<br><br>
Duis interdum purus vitae arcu ultricies, ornare fringilla orci venenatis. Integer in nisl posuere, blandit odio sed, feugiat purus. Fusce in dolor sed dolor congue consectetur. Morbi eget malesuada nibh.
								
								</p>
							</div>
						</div>
					</transition>

					<transition name="slide-fade">
						<div v-if="this.currentSection=='Payment_Processing'" :class="[this.currentSection != 'Payment_Processing'?'hideMe':'']">
							<div class="col-10" style="margin:10px 20px 50px 0px;text-align:left;">
								<div class="titleText">Payment_Processing</div>
								<p>
								Nam aliquam molestie augue, eget pharetra purus tristique molestie. In lacus metus, tristique ac mi sit amet, gravida ultrices ante. Aenean iaculis nec metus pulvinar elementum. Quisque augue velit, lacinia a elit id, ultricies ullamcorper elit. Proin id tellus quis purus tincidunt faucibus. Nullam vulputate tortor purus, vitae faucibus libero placerat non. Donec non erat ullamcorper, vestibulum ipsum in, egestas lectus. Donec viverra posuere tempus. Vivamus hendrerit et odio vel dictum. Etiam scelerisque libero id congue sodales. Integer aliquam purus ut odio semper, at dignissim elit euismod.
								
								</p>
							</div>
						</div>
					</transition>

					<transition name="slide-fade">
						<div v-if="this.currentSection=='AdminOFCS'" :class="[this.currentSection != 'AdminOFCS'?'hideMe':'']">
							<div class="col-10" style="margin:10px 20px 50px 0px;text-align:left;">
								<div class="titleText">AdminOFCS</div>
								<p>
								Duis interdum purus vitae arcu ultricies, ornare fringilla orci venenatis. Integer in nisl posuere, blandit odio sed, feugiat purus. Fusce in dolor sed dolor congue consectetur. Morbi eget malesuada nibh. Quisque finibus lorem eget euismod imperdiet. Aliquam consectetur sodales justo, faucibus mattis arcu pulvinar ut. Vestibulum massa turpis, dignissim a tellus non, convallis auctor arcu. Nam scelerisque ullamcorper lectus, vitae malesuada tellus. Sed vitae sem erat. Phasellus dapibus mattis turpis sed iaculis. Cras vitae tortor ante. Nunc aliquam felis vitae orci rhoncus consequat.
								
								</p>
							</div>
						</div>
					</transition>

				</div>-->



			</div>		
		</div>
	</div>
</template>

<script>
// import Vue from 'vue'
// Vue.component('sp1', {

// import proLeague from '@/components/productLeague'

export default {
  name: 'Products',
  data () {
    return {
		// component: proLeague,
		title: 'Our Products',
		sectionView: true,
		currentSection: "overviewLeague",
		myText: "",
    }
  },
  methods: {
    onExpand: function(e, item) {
		this.myText = e,
		this.currentSection = e
		// console.log(e),
		// console.log(item) 
    },
	sectionClick: function(e){
		this.sectionView = e
		console.log(this.sectionView)
		if(this.sectionView){
			this.currentSection="overviewLeague"
		}else{
			this.currentSection="overviewOFCS"
		}
		console.log(this.currentSection)
  	},
  },
	created: function() {
		this.$parent.prodEnabled=true;
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bgRMS{
	background-image: url('http://jay-yu.com/works/quickEnrollment/assets/hockeyShoe.jpg');
	background-size: 100%;
}
.bgOFCS{
	background-image: url('http://jay-yu.com/works/quickEnrollment/assets/creditCard.jpg');
	background-size: 100%;
}
.bgQINT{
	background-image: url('http://jay-yu.com/works/quickEnrollment/assets/field.jpg');
	background-size: 100%;
}
.prodBox{
	margin: 15px;
	padding: 20px;
	border: #fff solid 1px;
	border-radius: 10px;
	/*background: linear-gradient(90deg, #FFF, #EEEEFF);*/
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.7);
}
.productBoxTitle{
	font-size: 42px;
	font-weight: bold;
	color:#FFF;
	text-shadow: 0 0 8px #000, 0 0 19px #000;
}
.productBoxBody{
	font-size: 14px;
	color:#FFF;
	text-shadow: 0 0 3px #000, 0 0 5px #000, 0 0 19px #000;
}
.dropbtn {
	font-family:'gothic', Arial, Haettenschweiler, sans-serif;
    background-color: #0079C1;
    color: white;
	margin : 5px 0px 0px 0px;
    padding: 4px 16px 4px 16px;
    font-size: 16px;
    border: none;
}
.sidebtn {
	font-family:'gothic', Arial, Haettenschweiler, sans-serif;
    background-color: #0079C1;
    color: white;
	margin : 5px 0px 0px 0px;
    padding: 4px 16px 4px 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
}
.sidemenu{
    position: relative;
	display: inline-block;
}
.subitem{
	margin-left:0px;
	float: none;
}
/* The container <div> - needed to position the dropdown content */
.dropdown {
	font-family:'gothic', Arial, Haettenschweiler, sans-serif;
    position: relative;
    display: inline-block;
	/*border-bottom: 3px solid #095b8c;*/
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 190px;
    z-index: 1;
    cursor: pointer;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
}

/* Links inside the dropdown */
.dropdown-content a {
    color: black;
    padding: 5px 16px;
    text-decoration: none;
    display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #b2def9}
/*.dropdown-content p:hover {background-color: #b2def9}*/

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
    display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
    background-color: #095b8c;
}
.sidebtn:hover {
    background-color: #095b8c;
	/*margin-left: 3px;*/
}
.hideMe{
	display:none;
}
.commonBG{
	background-color:#d3e3ff;
	text-align:left;
	padding-bottom: 5px;
}

@media screen and (max-width: 700px) {
	.subitem{
		margin-left:2px;
		float: left;
	}
}
</style>
