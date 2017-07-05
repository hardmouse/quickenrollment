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
							<button type="button" :class="['sidebtn', this.currentSection == 'Overview'?'activeTabOFCS':'']" @click="onExpand('Overview','check')">Overview</button>
						</div>
						<div class="subitem">
							<button type="button" :class="['sidebtn', this.currentSection == 'MerchantAccounts'?'activeTabOFCS':'']" @click="onExpand('MerchantAccounts','check')">Merchant Accounts</button>
						</div>
						<div class="subitem">
							<button type="button" :class="['sidebtn', this.currentSection == 'CreditCardProcessing'?'activeTabOFCS':'']" @click="onExpand('CreditCardProcessing','check')">Credit Card Processing</button>
						</div>
						<div class="subitem">
							<button type="button" :class="['sidebtn', this.currentSection == 'OnlineAdministration'?'activeTabOFCS':'']" @click="onExpand('OnlineAdministration','check')">Online Administration</button>
						</div>
						<div class="subitem">
							<button type="button" :class="['sidebtn', this.currentSection == 'support'?'activeTabOFCS':'']" @click="onExpand('support','check')">Support</button>
						</div>
					</div>
					<router-link to="/Products"><div class="back2Prod">&#8920; back to Products</div></router-link>
				</div>
				</transition>

				<div class="col-xs-12 col-md-9 bodyText">
					<transition name="slide-fade">
						<div v-if="this.currentSection=='Overview'" :class="[this.currentSection != 'Overview'?'hideMe':'']">
							<div class="col-10" style="margin:10px 20px 50px 0px;text-align:left;">
								<div class="titleText">OFCS - Overview</div>
								<p>
								Online Fees Collections Services
								<br><br>
								O.F.C.S. offers an end-to-end approach in all aspects of collecting fees over the internet.
								<br><br>
								Services provided include:
								<ul>
								<li>Credit card rate negotiations ensures the lowest rates in the market</li>
								<li>Merchant account acquisition logistics</li>
								<li>Credit Card processing integration with QE RMS or third party software</li>
								<li>Online credit card payment administrative tools and reporting</li>
								</ul>
								Leading national organizations such as Hockey Canada have partnered with QE-OFCS since 2006 to bring their membership “the best services at the best price”. 
								</p>
							</div>
						</div>
					</transition>
					<transition name="slide-fade">
						<div v-if="this.currentSection=='MerchantAccounts'" :class="[this.currentSection != 'MerchantAccounts'?'hideMe':'']">
							<div class="col-10" style="margin:10px 20px 50px 0px;text-align:left;">
								<div class="titleText">OFCS – Merchant Account Acquisition</div>
								<p>
								QE-OFCS and our partners will guide you each step of the way in obtaining an online credit card merchant account that is required to process fees over the internet. It begins with our easy-to-use online merchant account signup form. Completing the form will result in an auto-generated and prefilled CHASE Paymentech contract that simply needs to be reviewed, signed and sent in to your dedicated OFCS representative. Once approved, QE-OFCS will test and activate your payment processing ability.
								<br><br>
								Contact a QE-OFCS representative for more information at <a href="mailto:info@qucikenrollment.com?subject=Enquires">info@quickenrollment.com</a> 
								</p>
							</div>
						</div>
					</transition>
					<transition name="slide-fade">
						<div v-if="this.currentSection=='CreditCardProcessing'" :class="[this.currentSection != 'CreditCardProcessing'?'hideMe':'']">
							<div class="col-10" style="margin:10px 20px 50px 0px;text-align:left;">
								<div class="titleText">OFCS – Credit Card Processing</div>
								<p>
								QE-OFCS automatically integrates with all QE registration management software. We are also able to integrate QE-OFCS with third party registration systems if required. Once live, your fees will be seamlessly, efficiently and safely processed and automatically deposited into your organization’s bank account within two business days. A receipt may be printed by your members. A copy is also emailed to them.
								</p>
								<p>
								QE-OFCS online transactions are safeguarded with the highest encryption levels commercially available. Critical credit card information is never stored within our servers which are frequently scanned to safeguard against any possible intrusions. The scanning engine tests for more than 3,000 vulnerabilities in a single scan. 
								</p>
							</div>
						</div>
					</transition>
					<transition name="slide-fade">
						<div v-if="this.currentSection=='OnlineAdministration'" :class="[this.currentSection != 'OnlineAdministration'?'hideMe':'']">
							<div class="col-10" style="margin:10px 20px 50px 0px;text-align:left;">
								<div class="titleText">OFCS – Online Administration – The OFCS Control Centre</div>
								<p>
								The OFCS Control Centre brings you a powerful suite of online functionalities and reporting tools that will make managing your credit card activity a snap. Intuitive design, real-time data and secure information at your fingers any time day or night. Features include:
								<ul>
								<li>easily reconcile credit activity with your monthly bank statements with our Transaction Summary reports</li>
								<li>powerful search tools allow you to find data based on several criteria such as: cardholder name, transaction date, transaction amount, card type, invoice #, email address, transaction status (completed, approved, declined), registration program, division/session, member name</li>
								<li>integrated detailed reporting displays both transaction information and member registration information all on one clear, concise line</li>
								<li>process partial or full refunds all year round. Credit card information is not required to process a refund. Safeguards are in place to ensure that refunds can not exceed the purchase amount as well as refund security code to ensure that only authorized personnel are able to process a refund.</li>
								<li>the Installment Report provides you with details of member’s installment payments and progress</li>
								<li>the Expiry Report assists in managing all credit cards that are due to expire prior to an upcoming scheduled installment payment</li>
								<li>All reports downloadable to MS Excel</li>
								<li>the Remote Terminal allows for the processing of transactions that are unrelated to registration such as fundraising, selling merchandise or skills videos, etc.</li>
								</ul>
								Do more in less time with the power of the OFCS Control Centre! 
								</p>
							</div>
						</div>
					</transition>
					<transition name="slide-fade">
						<div v-if="this.currentSection=='support'" :class="[this.currentSection != 'support'?'hideMe':'']">
							<div class="col-10" style="margin:10px 20px 50px 0px;text-align:left;">
								<div class="titleText">Support: <font class="yellowText">The Learning Centre</font></div>
								<p>
									Ok, so we’ve provided you with the most powerful tools available to assist you in providing the best possible services to your teams…but we realize our tools are only as useful to you as your knowledge of how to operate and utilize them.
									<ul>
									<li>all QE processes and functionalities have been built to be extremely easy to use and intuitive</li>
									<li>prior to your go live date an interactive online learning session is conducted with a QE representative that will ensure that you are well versed and comfortable with all QE processes and functionalities</li>
									<li>manual available to view/print on all processes and functionalities</li>
									<li>QE representatives available for assistance within your Qtrny support line</li>
									<li>QE representatives also available via toll free number</li>
									</ul>

									For further information or enquires please contact us at <a href="mailto:info@qucikenrollment.com?subject=Enquires">info@qucikenrollment.com</a>
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
		title: 'Our Products - OFCS',
		sectionView: true,
		activeTabOFCS: '',
		currentSection: "Overview",
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
.activeTabOFCS {
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