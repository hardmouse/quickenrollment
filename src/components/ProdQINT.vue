<template>
  <div class="homeContainer">
		<div class="topSpacing"></div>
          <div class="headerbelt">
            <div class="container"><div class="headerfont">{{title}}</div></div>
          </div>
		  <div class="col-12 serviceImage" style="padding-top:200px;padding-bottom:20px;"></div>
		  <div class="container">
			<div class="row" style="margin:0px;">
				<transition name="slide-fade-left">
				<div class="col-xs-12 col-md-3 commonBG">
					<div class="sidemenu">
						<div class="subitem">
							<button type="button" :class="['sidebtn', this.currentSection == 'development'?'activeTabQINT':'']" @click="onExpand('development','check')">Development & Integration</button>
						</div>
						<div class="subitem">
							<button type="button" :class="['sidebtn', this.currentSection == 'caseStudies'?'activeTabQINT':'']" @click="onExpand('caseStudies','check')">Case Studies</button>
						</div>
					</div>
					<router-link to="/Products"><div class="back2Prod">&#8920; back to Products</div></router-link>
				</div>
				</transition>

				<div class="col-xs-12 col-md-9 bodyText">
					<transition name="slide-fade">
						<div v-if="this.currentSection=='development'" :class="[this.currentSection != 'development'?'hideMe':'']">
							<div class="col-10" style="margin:10px 20px 50px 0px;text-align:left;">
								<div class="titleText">QE – Development and Integration</div>
								<p>
								QuickEnrollment offers design and development services to customize our registration and credit card processing platforms. Our team of development experts are capable of customizing our OFCS or RMS platforms in order to fulfill a variety of needs that are not currently offered. Our integration experts can also integrate our existing platforms to third party software if required.
								</p>
								<h5 class="yellowText">Registration (RMS)</h5>
								<p>
								QuickEnrollment has provided industry leading online Registration Management Software (RMS) to a variety of amateur sports organizations across Canada since 1999. Our sixth generation RMS “Q6” is a highly automated, robust system that addresses all aspects of an intuitive and efficient online platform. Clients have reported an average reduction of registration related work efforts of 60%. <router-link to="/Products-RMS">Click Here</router-link> for more information on Q6 RMS.
								</p><p>
								Q6 may operate as a stand-alone platform that addresses all registration needs of an individual organization or integrated with third party software such as a governing body management system to provide a truly powerful end-to-end registration experience at all levels.
								</p><p>
								Do you have specialized needs? No problem! Our experts will work with you to satisfy your needs.
								</p><h5 class="yellowText">
								Credit Card Processing Integration (OFCS)
								</h5><p>
								QE-OFCS automatically integrates with all QE registration management software. We are also able to integrate QE-OFCS with third party registration systems if required. Once live, your fees will be seamlessly, efficiently and safely processed and automatically deposited into your organization’s bank account within two business days. A receipt may be printed by your members. A copy is also emailed to them.
								</p><p>
								QE-OFCS online transactions are safeguarded with the highest encryption levels commercially available. Critical credit card information is never stored within our servers which are frequently scanned to safeguard against any possible intrusions. The scanning engine tests for more than 3,000 vulnerabilities in a single scan.
								</p><p>
								If you have existing online software and need to add safe, secure and efficient credit card processing, we’re here to help! We will integrate our OFCS online platform and get you on your way to accepting online payments!
								</p>
							</div>
						</div>
					</transition>
					<transition name="slide-fade">
						<div v-if="this.currentSection=='caseStudies'" :class="[this.currentSection != 'caseStudies'?'hideMe':'']">
							<div class="col-10" style="margin:10px 20px 50px 0px;text-align:left;">
								<div class="titleText">Case Studies</div>
								<p>
								<h5 class="yellowText">Q6-C2J AGILEX Registration Integration</h5>
								<p>
								AGILEX is a sports governing body management system that has been utilized by many Ontario amateur sports organizations since 1995. The system is utilized to manage member data, statistics, scheduling, governing body rules management and enforcement, clinic registration, online learning, etc. The AGILEX system manages all aspects of a governing body’s day-to-day operational needs.
								</p>
								<p>
								The need to expand the AGILEX system right down to the membership registration level was first realized in 2000. C2J approached QE to integrate our League Registration Management System with their AGILEX system for the Ontario Minor Hockey Association (OMHA). The OMHA is the largest single provincial hockey governing body in Canada with a membership exceeding 125,000 players. The integration streamlined registration at all levels of hockey from player to league to provincial governing body to national governing body. The need for Player Cards were eliminated resulting in hundreds of hours of work being saved for all levels of hockey. Governing body rules were enforced automatically at the time of player registration. Member data was automatically updated in the OMHA database without the need of OMHA resource efforts. Q6-AGILEX became the first platform to completely integrate all levels of hockey in Canada. The Greater Toronto Hockey League (45,000 players) and Minor Hockey Alliance (40,000 players) joined the Q6-AGILEX integration platform in 2001.
								</p>
								<h5 class="yellowText">Hockey Canada – HCR- OFCS Integration</h5>

								<p>The HCR system is provided to all amateur hockey leagues/clubs as well as all provincial governing bodies across Canada. In 2006 Hockey Canada approached QE to pioneer end-to-end credit card logistics and services integrated with their HCR online registration management software nation wide.
								</p>
								<p>
								Close cooperation between Hockey Canada and QE resulted in the successful integration and implementation of the following services and products:
								</p>
								<ul>
								<li>Credit card rate negotiations</li>
								<li>Merchant account acquisition logistics and online software, integrated with all five stakeholders</li>
								<li>OFCS Credit Card processing integration with Hockey Canada’s HCR online registration management system</li>
								<li>Online credit card payment administrative tools and reporting seamlessly integrated with HCR</li>
								</ul>
								<p>
								Eleven years later OFCS-HCR integration has successfully and securely processed millions of transactions and close to a billion dollars in hockey fees nation wide!
								</p>
								<p style="font-weight:bold;">
								"Hockey Canada has been extremely pleased with the work of QuickEnrollment and feels that they provide the best service at the best price for our needs."
								</p>
								<p style="font-weight:bold;text-align:right;">
								Jonah McEachern, Director of Operations
								<br>
								Hockey Canada
								</p>

								<h5 class="yellowText">Spordle – First Shift- OFCS Integration</h5>
								<p>
								THE FIRST SHIFT program is a joint effort between Hockey Canada, Canadian Tire and Bauer. It is designed to ensure a positive experience for new to hockey families. This means breaking down the barriers that exist for many of these parents, and making them feel at home within our hockey community. The program is designed for entry level players, instructors and other volunteers
								</p>

								THE FIRST SHIFT utilizes online registration software provided by spordle. QE-OFCS integrated with spordle in 2017 to provide:
								<ul>
								<li>Spordle-OFCS Credit card processing of FIRST SHIFT fees</li>
								<li>Automatic deposit of funds into FIRST SHIFT account</li>
								<li>Full OFCS Control Centre functionalities and reporting tools integrated with the spordle software</li>
								</ul>
								OFCS-spordle integration was launched in June 2017 and is currently processing FIRST SHIFT fees across Canada. 
								</p>
							</div>
						</div>
					</transition>

					<img src="../assets/goods.png" class="img-responsive" style="float:right;">
					<!--<router-link to="/Products"><img src="../assets/arrowback.png" class="backButton" alt="back to Product"></router-link>-->

				</div>



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
		title: 'Our Products - Q-int',
		sectionView: true,
		activeTabOFCS: '',
		currentSection: "development",
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
    window.scrollTo(0, 0);
	if(this.$route.query.page=="caseStudies"){
		this.currentSection="caseStudies";
	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul{
	margin-top:12px;
}
h5{
	font-weight:bold;
	margin-top:30px;
}
.signature{
	text-align:right;
	font-weight: bold;
}
.prodBox{
	margin: 15px;
	padding: 20px;
	border: #0079C1 solid 1px;
	border-radius: 20px;
}
.productBoxTitle{
	font-size: 36px;
	font-weight: bold;
}
.productBoxBody{
	font-size: 14px;
}
.dropbtn {
	font-family:'gothic', Arial, Haettenschweiler, sans-serif;
    background-color: #DDD;
    color: #0079C1;
	margin : 5px 0px 0px 0px;
    padding: 4px 16px 4px 16px;
    font-size: 16px;
    border: none;
}
.sidebtn {
	font-family:'gothic', Arial, Haettenschweiler, sans-serif;
    background-color: #DDD;
    color: #0079C1;
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
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    cursor: pointer;
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

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
    display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
    background-color: #095b8c;
	color:#FFF;
}
.sidebtn:hover {
    background-color: #095b8c;
	color:#FFF;
	/*margin-left: 3px;*/
}
.activeTabQINT {
    background-color: #0079C1;
	color:#FFF;
}
.hideMe{
	display:none;
}
.commonBG{
	background-color:#DDD;
	text-align:left;
	padding-bottom: 5px;
}

@media screen and (max-width: 700px) {
	.subitem{
		margin-left:2px;
		float: left;
	}
	h5{
		font-size:14px;
	}
}
</style>