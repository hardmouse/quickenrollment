<template>
  <div class="homeContainer">
		<div class="topSpacing"></div>
          <div class="headerbelt">
            <div class="container"><div class="headerfont">{{title}}</div></div>
          </div>
		  <div class="col-12 serviceImage" style="padding-top:200px;padding-bottom:20px;"></div>
		  <div class="container">
			<div class="row" style="margin:0px;">
				<!--<transition name="slide-fade-left">-->
				<div class="col-xs-12 col-md-3 commonBG">

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
						<br>
						<div class="subitem dropdown">
							<button class="dropbtn">&#9660; Tournament</button>
								<div class="dropdown-content">
									<a @click="onExpand('adminOverview','check')">Overview</a>
									<a @click="onExpand('adminFeatures','check')">Admin Features</a>
									<a @click="onExpand('controlCenter','check')">OFCS Control Centre</a>
									<!--<a @click="onExpand('support','check')">Support</a>-->
								</div>
						</div>
					</div>
						<router-link to="/Products"><div class="back2Prod">&#8920; back to Products</div></router-link>

				</div>
				<!--</transition>-->
				
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
								<div class="titleText">The Q6 RMS Administrator Control Centre</div>
								<p>
Our sixth-generation registration management system is both powerful and easy to use.  Over our 17 year history we have always listened to our clients feedback to build all processes and functionalities. QE turns our clients feedback into new upgrades at no additional cost.  We build to suit our clients needs.  We never try to shoehorn our clients into fitting into functionalities we think is best for them.
								</p>
	<h5>Control Administrator Access: <font class="yellowText">Administrator Management</font></h5>
	A Master Administrator is set up for your organization with online access to your Q6 Administrator
Control Centre.  The Master Administrator then creates sub administrators:
<ul>
<li>ID/Password and SSL protected</li>
<li>create, delete and edit multiple sub administrators</li>
<li>customize access levels for each sub administrator</li>
<li>reset administrator passwords</li>
</ul>

<h5>Customize Your Registration Systems: <font class="yellowText">Edit Registration Systems</font></h5>

	Part of our unwavering commitment to new clients is to provide additional support during 
	their first year with QE.  We understand that moving to a new platform may involve a period of
learning and uptake.  With this in mind, you will be assigned a QE expert that will build your customized registration systems during your first year utilizing your requirements.  Once built and live, you will have the ability to make changes to the registration systems on the fly. Including:
	
<ul>
<li>edit divisions/programs offered, including names, birth years and maximum numbers</li>
<li>change registration fees and discount amounts</li>
<li>add/remove payment options available to your members</li>
<li>add optional or mandatory additional cost items</li>
<li>edit the Information and Important Next Steps page</li>
<li>edit your legal waiver</li>
<li>edit your privacy statement</li>
<li>edit content for automated system emails such as Acceptance, Conditional Acceptance,</li>
Denial, Event Reminder and Payment Reminder emails</li>
<li>edit automatic Open and Close registration dates</li>
</ul>

<h5>Manage Your Member Registration Cycle: <font class="yellowText">Registration Management</font></h5>

The majority of registration processes essentially follow a specific registration cycle with a small number of special circumstances that need to be managed. Q6 RMS has been designed to utilize a combination of intuitive and automated functionalities to provide the ultimate in control of your registration cycle while reducing administrative workloads by as much as 60%!

<ul>
<li>review high level, real time, member registration numbers by division/program and by member status (waiting, accepted, conditionally accepted and denied)</li>
<li>drill down to view member status lists such as waiting lists, accepted, denied, etc.</li>
<li>drill down even further to view/edit/print full individual member information</li>
<li>activate the email notification function to notify the administrator each time someone registers.</li>
<li>Set your system to close registration when maximum numbers have been reached</li>
<li>detailed payment information available and automatically updated for all online credit card payments</li>
<li>funds automatically and electronically deposited into your organization’s bank account within two business days</li>
<li>keep track and manage all account receivable payments</li>
<li>auto emailed receipts delivered to your members once their payments are entered</li>
<li>members may access their own “child tax credit receipts” within their QE Family Profiles</li>
<li>send manual accounts receivable emails</li>
<li>setup automatic accounts receivable emails that will inform your members of funds owing on an ongoing basis until marked as paid in the Q6 system</li>
<li>process partial or full refunds online</li>
<li>easily and quickly set member status according to your rules.  Automatic and customized status update emails will be sent to your members once their status’ have been updated</li>
<li>schedule an automatic event reminder email that will send all your accepted members a customized message at a date of your choice.</li>
</ul>


 <h5>Information At Your Fingertips: <font class="yellowText">Reporting</font></h5>

Real time, accurate and clear reporting is essential in organizing and implementing an efficient registration process. Q6 RMS brings you the ultimate in clear and concise reporting utilizing both relevant quick view standard and flexible reporting tools.  All reports are also downloadable to Excel.
<ul>
<li>view real-time reports anywhere there is internet access</li>
<li>all reports downloadable to M.S. Excel.</li>
<li>view reports on overall numbers registered, by division/program, by status, etc.</li>
<li>detailed reports on members by status (waiting, accepted, conditionally accepted, denied).</li>
<li>Participant Lookup (the dashboard view), allows you to access all functionalities to manage all aspects of your members registration experience</li>
<li>create your own detailed, customized reports on any and all information entered by utilizing QE’s Report Generator.</li>
<li>send targeted or mass emails using the Email Generator</li>
</ul>

<h5>Manage/Report Credit Card Activity: <font class="yellowText">The OFCS Control Centre</font></h5>

Credit Card processing provides the ultimate in convenience and efficiency for your members.  Our powerful credit card reporting tools and functionalities bring the efficiencies to another level for our client’s administrators:

<ul>
<li>easily reconcile your monthly credit card activity to your monthly bank statements</li>
<li>view/print detailed credit card purchase reports. Search by credit card name, date, amount, invoice #, member name, program, session/division</li>
<li>view detailed reports that combine both credit card purchase information and member registration information all in one easy to read line</li>
<li>partially or fully refund transactions online all year round</li>
<li>process transactions unrelated to member registration (ex: merchandising, skills videos, fundraising, etc.) using our Remote Terminal.</li>
</ul>

<h5>Support: <font class="yellowText">The Learning Centre</font></h5>

Ok, so we’ve provided you with the most powerful tools available to assist you in providing the best possible services to your members…but we realize our tools are only as useful to you as your knowledge of how to operate and utilize them.
<ul>
<li>all QE processes and functionalities have been built to be extremely easy to use and intuitive</li>
<li>prior to your go live date an interactive online learning session is conducted with a QE representative that will ensure that you are well versed and comfortable with all QE processes and functionalities</li>
<li>manuals available to view/print on all processes and functionalities</li>
<li>QE representatives available for assistance within your Q6 support line</li>
<li>QE representatives also available via toll free number </li>
</ul>

For further information or enquires please contact us at <a href="mailto:info@quickenrollment.com?subject=Enquires">info@quickenrollment.com</a> 
								</p>
							</div>
						</div>
					</transition>


					<transition name="slide-fade">
						<div v-if="this.currentSection=='Participant_Features'" :class="[this.currentSection != 'Participant_Features'?'hideMe':'']">
							<div class="col-10" style="margin:10px 20px 50px 0px;text-align:left;">
								<div class="titleText">The Q6 RMS Participant Registration</div>
								<p>
Our member registration process has been designed to be quick, easy-to-use and efficient.  Q6 utilizes automation and an intuitive design to achieve the highest possible member satisfaction levels.  It all starts with the QE Family Security Profile:
<h5>Setup You Profile: <font class="yellowText">QE Family Security Profile</font></h5>

For members that have never used Q6 in the past, the first step is to setup a QE Family Security Profile.  Its purpose is to offer enhanced security, enable prefilling of information for all future registrations as well as the volume discount functionality.  Once completed your member will simply enter the ID/Password that they created and begin to register for your programs at any time in the future.  If your member has registered with any other QE client and has already setup a QE Family Security Profile, they may use it to register for your organization as well.  Other advantages to your members include: 

<ul>
<li>update member contact information as needed</li>
<li>change member password</li>
<li>view all programs registered for, member status (waiting, accepted) and payment status</li>
<li>view/print all current and past invoices/receipts</li>
<li>view/print Child Tax Credit receipts</li>
<li>make an instalment payment</li>
<li>change payment method from cheque/cash to online credit card</li>
</ul>

<h5>Begin Registering: <font class="yellowText">Q6 Registration Process</font></h5>

The member registration for your programs begins with choosing which program they wish to register for.  They will then view the program details, accept your legal waiver, choose which family members they wish to register, complete your customized registration form and choose their preferred payment method.  Once complete they will be able to view/print their invoice/receipt.  That’s it! All done in a matter of a few moments.  Built in features include:
	
<ul>
<li>programs automatically open and close on dates selected by your organization</li>
<li>maximum registration numbers may be set for each session/program/division</li>
<li>gender and age restrictions enforced</li>
<li>a customized Information Page displays all relevant registration information</li>
<li>your customized Legal Waiver is enforced and must be accepted by the member in order to move on</li>
<li>members will only be displayed session/programs/division that qualify for their age and/or gender</li>
<li>able to restrict members from registering into the same session/program/division twice (if applicable)</li>
<li>your registration form is completely customized.  You pick the questions and which ones are required or optional</li>
<li>a great number of fields are prefilled from past visits speeding up the process</li>
<li>a member may register multiple participants or in multiple programs at the same time</li>
<li>family volume, multiple program/session and early bird discounts are automatically applied (if applicable)</li>
<li>optional additional cost items are available to be selected (if applicable). Ask if they wish to contribute to a fundraiser or purchase merchandise.</li>
<li>required additional cost items are also available.  You may automatically add items such as a fundraiser amount, etc.  This may be added per member or per family.</li>
<li>a payment plan may be offered if applicable.  Your member may choose full payment or payment in instalments</li>
<li>only payment options your organization accepts will be offered to your members</li>
<li>invoice/receipts are presented to view/print.  An email copy is also automatically sent</li>
<li>members with outstanding balances will automatically receive payment reminder emails on dates that have been set up by you</li>
</ul>


<h5>Make Your Payment: <font class="yellowText">Payment Processing</font></h5>

The Q6 RMS may be set up to accept any one of five payment options: online credit card, offline credit card, cheque, money order or cash.  Your Q6 Administrator Control Centre keeps track of all payment status’ and details automatically.  Online credit card payments are automatically updated.  All other payment methods are update by you once received.

<ul>
<li>pay in full or by instalments (if available)</li>
<li>your members may change their payment option from cheque/cash to credit card within the QE Family Security Profile at a later date</li>
<li>your member’s payment is updated in their QE Family Security Profile updated once payment is recorded</li>
<li>up-to-date Child Tax Credit Receipts available at any time</li>
<li>credit card payment is automatically deposited into your organization’s bank account within 2 business days</li>
</ul>

For further information or enquires please contact us at <a href="mailto:info@quickenrollment.com?subject=Enquires">info@quickenrollment.com</a>

								</p>
							</div>
						</div>
					</transition>

					<transition name="slide-fade">
						<div v-if="this.currentSection=='Client_Applause'" :class="[this.currentSection != 'Client_Applause'?'hideMe':'']">
							<div class="col-10" style="margin:10px 20px 50px 0px;text-align:left;">
								<div class="titleText">Client Applause</div>
								<p>
Here at QE, we realize that we could never have accomplished all we have in 17 years without the incredible support of our loyal clients.  We have built our solutions by listening to and fulfilling their needs.
<br><br>
<h5>Organization Administrators – <font class="yellowText">what clients have to say</font></h5>

"The system saved us hundreds of volunteer hours this past season. When needed, the support desk is very helpful as well." 
<div class="signature">
	Jeff Leavens, President
	<div class="yellowText">Meadowvale Hockey Association</div>
</div>
<hr>
"The QuickEnrollment staff provided me with in-depth product knowledge both from an enrollment and a GTHL point of view. They were always there to quickly respond to any questions or queries I had. I would highly recommend QuickEnrollment to anyone who wants a dependable, professional online registration company. " 
<div class="signature">
	Ani Adair, Registrar,  
	<div class="yellowText">Leaside Hockey Association</div>
</div>
<hr>
"QuickEnrollment is one of the most user-friendly programs I have ever worked on.  It makes hockey registration easy for players, parents, and administrators." 
<div class="signature">
	Jodi Healey-Drost, Registrar,  
	<div class="yellowText">Niagara Falls Minor Hockey Association</div>
</div>
<hr>
"As Registrar for RMHA, I can't thank the guys at QE enough for the time and energy that they provided in setting up out on-line registration. They were always on hand to answer all my inquiries. We are looking forward to next year when we go 100% on-line. Thanks again." 
<div class="signature">
	Alan Latendre, Director ,  
	<div class="yellowText">Riverside Minor Hockey Association</div>
</div>
<hr>
"QuickEnrollment is the best!  The system is so easy and convenient to use.  The customer support is number one." 
<div class="signature">
	Christine Perron, Registrar ,  
	<div class="yellowText">Belle River District Minor Hockey Association</div>
</div>
<hr>
"Experiences I had with QuickEnrollment was great, everything was simple to enter, reports were easy to get, you had no problem on figuring out how many people were registered." 
<div class="signature">
	Lisa Kaszab, Registrar ,  
	<div class="yellowText">Innisfil Minor Hockey Association</div>
</div>
<hr>
"This is a great advancement for us. We've been working hard at trying to make the League more accessible to families involved in the League and to the Public in general.  We are hoping to draw in more and more families, giving them the ease and convenience of online registration, and making it easier to get information and to communicate with us." 
<div class="signature">
	Carlo Carlucci, President,  
	<div class="yellowText">New Tecumseh Ball Hockey</div>
</div>
<hr>
"QE has been extremely helpful in our transition to online registration.  They've tailored the system to our needs, advised us of pitfalls to avoid and suggested the simplest course to follow.  They have really guided us through the whole process and made the development painless and effective. Speaking as a minor hockey association volunteer, it's been a tremendous breakthrough. It saves many hours of work and allows our administrators to spend more time in other areas. " 
<div class="signature">
	John Mellor, Houseleague Vice Chai,  
	<div class="yellowText">Sarnia Minor Hockey Association</div>
</div>
<hr>
"We had an excellent experience with QuickEnrollment. All the staff was very helpful. Our time was reduced by 50%." 
<div class="signature">
	Lee-Ann Lambert, Registrar,  
	<div class="yellowText">Cambridge Hockey Association</div>
</div>
<hr>
"Thanks in advance for a great system." 
<div class="signature">
	James Young, President,  
	<div class="yellowText">Canadian Society of Technical Analysts (CSTA)</div>
</div>
<hr>
" As a virtual assistant with many varied clients, QuickEnrollment provided me with an easy solution for my clients and a quick and easy way to register people for diverse meetings, seminars and conferences. QuickEnrollment gave me great service and answered my many questions quickly and efficiently. This is a new process for me and they've been very patient. QE has also made the registration process very user-friendly for the participants and has made my job as the administrator effortless. " 
<div class="signature">
	Laura Clark, Executive Assistant, Clark Executive Services,<br>
	Guelph Partnership for Innovation<br>
	BioEnterprise Corporation   
	<div class="yellowText">Canadian Supply Chain Food Safety Coalition</div>
</div>
<hr>



<h5>Participants – <font class="yellowText">what registrants have to say</font></h5>


"This quick method of registering is so fantastic. Thank you for doing this. The thought of lining up one evening at Leaside to register makes me a bit nuts. I can't spend hours doing that while my kids wait. This is the way to go. "
<div class="signature">
Laurie Stein, <font class="yellowText">Leaside Minor Hockey</font></div>
<hr>
"What a great system. It was flawless and intuitive. Thanks again."
<div class="signature">
Michael Haines,<font class="yellowText"> Leaside Minor Hockey</font>
</div>
<hr>
"Great time saver without having to go to the rink to register." 
<div class="signature">
Marg Stasko, <font class="yellowText">Newmarket Minor Hockey Association</font>
</div>
<hr>
"Just a quick note to say I was extremely impressed at the ease of use and speed of the online registration process today...congratulations on a seamless transition. " 
<div class="signature">
Steve Crisp, <font class="yellowText">Barrie Minor Hockey Association</font>
</div>
<hr>
"In the past, registering meant a whole morning wasted waiting in line-ups.  With your system, I was in and out of the process in minutes. "
<div class="signature">
Peter Scheffler, Convener, <font class="yellowText">Newmarket Minor Hockey Association</font>
</div>
<hr>
"This is a wonderful system for registration, saving a lot of time and travel. I am certain that most parents like myself will enjoy using your system. It is quick and user friendly. "
<div class="signature">
Dr. Tony J. Juliani, <font class="yellowText">Cambridge Minor Hockey Association</font>
</div>
<hr>
" I love the new system - no more lineups!" 
<div class="signature">
Christine Persichetti, <font class="yellowText">Sarnia Minor Hockey Association</font>
</div>
<hr>
"Hockey Registration has moved to the 21st Century! Everything went very smoothly and probably took about a couple of minutes to input and I was done." 
<div class="signature">
Rick Groves , <font class="yellowText">Barrie Minor Hockey Association</font>
</div>
<hr>
"Congratulations! Someone finally made sign-up for hockey easy...this is the best year yet for sign-up...this year took me a total of five minutes." 
<div class="signature">
Wayne Murray, <font class="yellowText">Barrie Minor Hockey Association</font>
</div>
<hr>
" I was really impressed with this system." 
<div class="signature">
Holley Piotrowski, <font class="yellowText">Newmarket Minor Hockey Association</font>
</div>
<hr><br>
To get full information and a more comprehensive product description, please be sure to email us at <a href="mailto:info@quickenrollment.com?subject=Enquires">info@quickenrollment.com</a>

								</p>
							</div>
						</div>
					</transition>

					<transition name="slide-fade">
						<div v-if="this.currentSection=='adminOverview'" :class="[this.currentSection != 'adminOverview'?'hideMe':'']">
							<div class="col-10" style="margin:10px 20px 50px 0px;text-align:left;">
								<div class="titleText">The Qtrny Administrator Control Centre</div>
								<p>
Our tournament registration management system is designed to reduce efforts for both team and tournament organizers alike. Teams are able to register in a matter of minutes while organizers are able to utilize a suite of tools and reports to efficiently run their tournament registration. 
								</p>
							</div>
						</div>
					</transition>

					<transition name="slide-fade">
						<div v-if="this.currentSection=='adminFeatures'" :class="[this.currentSection != 'adminFeatures'?'hideMe':'']">
							<div class="col-10" style="margin:10px 20px 50px 0px;text-align:left;">

<div class="titleText">Control Administrator Access: <font class="yellowText">Administrator Management</font></div>

A Master Administrator is set up for your organization with online access to your Qtrny Administrator Control Centre.  The Master Administrator then creates sub administrators:

<ul>
<li>ID/Password and SSL protected</li>
<li>create, delete and edit multiple sub administrators</li>
<li>customize access levels for each sub administrator</li>
<li>reset administrator passwords</li>
</ul>

<h5>Manage Your Member Registration Cycle: <font class="yellowText">Registration Management</font></h5>

The majority of registration processes essentially follow a specific registration cycle with a small number of special circumstances that need to be managed.   Qtrny RMS has been designed to utilize a combination of intuitive and automated functionalities to provide the ultimate in control of your registration cycle while reducing administrative workloads by as much as 55%!

<ul>
<li>An organizer may manually register a team</li>
<li>review high level, real time, team registration numbers by division and by status (waiting, accepted and denied)</li>
<li>drill down to view team status lists such as waiting lists, accepted, denied, etc.</li>
<li>drill down even further to view/edit/print full individual team information</li>
<li>activate the email notification function to notify the administrator each time a team registers.</li>
<li>Set your system to close registration when maximum team numbers have been reached</li>
<li>detailed payment information available and automatically updated for all online credit card payments</li>
<li>funds automatically and electronically deposited into your organization’s bank account within two business days</li>
<li>keep track and manage all account receivable payments</li>
<li>auto emailed receipts delivered to your teams once their payments are entered</li>
<li>send manual accounts receivable emails</li>
<li>process partial or full refunds online</li>
<li>easily and quickly set team status according to your rules.  Automatic status update emails will be sent to your teams once their status’ have been updated</li>
<li>team roster reports available, downloaded to MS Excel</li>
<li>enable functionality that will allow team organizers to return at a future date to update their rosters</li>
</ul>

<h5>Information At Your Fingertips: <font class="yellowText">Reporting</font></h5>

Real time, accurate and clear reporting is essential in organizing and implementing an efficient registration process. Qtrny RMS brings you the ultimate in clear and concise reporting utilizing both relevant quick view standard and flexible reporting tools.  All reports are also downloadable to Excel.
<ul>
<li>view real-time reports anywhere there is internet access</li>
<li>all reports downloadable to M.S. Excel.</li>
<li>view reports on overall numbers registered, by division, by status, etc.</li>
<li>detailed reports on team by status (waiting, accepted, denied).</li>
<li>create your own detailed, customized reports on any and all information entered by utilizing QE’s Report Generator.</li>
<li>send targeted or mass emails using the Email Generator</li>
</ul>
								</p>
							</div>
						</div>
					</transition>

					<transition name="slide-fade">
						<div v-if="this.currentSection=='controlCenter'" :class="[this.currentSection != 'controlCenter'?'hideMe':'']">
							<div class="col-10" style="margin:10px 20px 50px 0px;text-align:left;">

<h5>Manage/Report Credit Card Activity: <font class="yellowText">The OFCS Control Centre</font></h5>

Credit Card processing provides the ultimate in convenience and efficiency for your teams.  Our powerful credit card reporting tools and functionalities bring the efficiencies to another level for our client’s administrators:
<ul>
<li>easily reconcile your monthly credit card activity to your monthly bank statements</li>
<li>view/print detailed credit card purchase reports. Search by credit card name, date, amount, invoice #, team name, division</li>
<li>view detailed reports that combine both credit card purchase information and team registration information all in one easy to read line</li>
<li>partially or fully refund transactions online all year round</li>
<li>process transactions unrelated to team registration (ex: merchandising, skills videos, fundraising, etc.) using our Remote Terminal.</li>
</ul>
<h5>Support: <font class="yellowText">The Learning Centre</font></h5>

Ok, so we’ve provided you with the most powerful tools available to assist you in providing the best possible services to your teams…but we realize our tools are only as useful to you as your knowledge of how to operate and utilize them.
<ul>
<li>all QE processes and functionalities have been built to be extremely easy to use and intuitive</li>
<li>prior to your go live date an interactive online learning session is conducted with a QE representative that will ensure that you are well versed and comfortable with all QE processes and functionalities</li>
<li>manual available to view/print on all processes and functionalities</li>
<li>QE representatives available for assistance within your Qtrny support line</li>
<li>QE representatives also available via toll free number</li>
</ul>

For further information or enquires please contact us at <a href="mailto:info@quickenrollment.com?subject=Enquires">info@quickenrollment.com</a>
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
		title: 'Our Products - RMS',
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
    window.scrollTo(0, 0);
	if(this.$route.query.page=="testimonials"){
		this.currentSection="Client_Applause";
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
	margin-top:30px;
	font-weight:bold;
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
	left:50px;
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
