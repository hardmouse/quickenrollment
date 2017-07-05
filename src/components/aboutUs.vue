<template>
  <div>
    <div class="topSpacing"></div>
        <div class="row" style="padding:0px;margin:0px;">
          <div class="headerbelt">
            <div class="container"><div class="headerfont">{{title}}</div></div>
          </div>
          <div class="container bodyContainer">
            <div class="col-xs-12 bodyText bodytext">
              <img src="../assets/building.jpeg" class="img-responsive" style="float:left; margin-right:15px;">
              <p>
               <strong>QuickEnrollment Inc.</strong> (“QE”) was first established in September 1999, in an effort to streamline the registration process in such a way that would provide a quick and easy alternative to traditional, paper-based methods of registration. With the development and implementation of QE-RMS (Registration Management Software), parents and registrants were provided with a fast and simple registration process, and administrators with an uncomplicated database that would satisfy all their player management, informational and communicative needs, while remaining user-friendly and straightforward. (<router-link to="/Products-RMS">details</router-link>).
<br><br>
QE’s innovation and integration expertise was in full display, when in 2000, QE-RMS was integrated with the C2J-AGILEX governing body management system, in order to become the first to connect all aspects of player registration and governing body management in Canada. The new platform, implemented for the Ontario Minor Hockey Association (OMHA – 125,000+ players), streamlined registration at all levels of hockey from player to league to provincial governing body to national governing body and resulted in substantially increased efficiencies and decreased efforts at all levels. The Greater Toronto Hockey League (GTHL-45,000 players) and Minor Hockey Alliance (ALLIANCE-40,000 players) joined the QE-RMS/AGILEX integration platform in 2001. (<router-link to="/Products-QINT?page=caseStudies">details</router-link>)
<br><br>
In 2006 QE expanded its product and service offerings to include Online Fee Collection Services (OFCS). End-to-end logistics and software were implemented that enabled clients to obtain an online credit card merchant account, process registration fees, manage transactions and display detailed integrated transaction reporting. OFCS is currently servicing amateur sports organizations nationwide. (<router-link to="/Products-OFCS">details</router-link>)
<br><br>
Operating out of Markham, Ontario, Canada, QE has been recognized by leading organizations such as Hockey Canada, Ontario Minor Hockey Association, GTHL, Alliance and Slo-Pitch Ontario. QE has also been nominated by the Royal Bank of Canada as the “Business of the Year”. QuickEnrollment provides comprehensive online registration and fee collection solutions to amateur and recreational sports organizations, their respective leagues, tournaments, and events. 
              </p>
              <p>
         <div class="titleText"> Our Business Approach</div>
           At QuickEnrollment, our business philosophy is to build lasting, long-term relationships with our clients. This allows us to grow with our clients and have a better understanding of their processes, needs, and aims to provide them with premier products of the highest quality. Further, the growth of these relationships enables us to foresee potential problems that may present itself, and subsequently customize process and solutions to best suit individual requirements. In doing so, we have achieved partnerships with principal sports organizations, such as Hockey Canada, Alliance Hockey, and the GTHL. Maintaining relationships with our clients is of the utmost importance to QuickEnrollment, and is the foundation upon which our company was built and continues to grow.
<br><br>
QuickEnrollment’s main distinguishing characteristics are our expertise, knowledge, and extreme focus that have allowed us to become registration and fee collection specialists thereby affording our clients the finest online solutions available.
<br><br>
QuickEnrollment has both automated and revolutionized traditional paper-based registration process that previously existed in amateur and recreational sports. Through leveraging state-of-the-art Internet-based tools and technologies in creating QuickEnrollment online solutions, we have created a forum in which associations can save themselves, volunteers, and members incalculable amounts of time, energy, and frustration. 
              </p>
              <p>
          <div class="titleText">Our Mission:</div>
          <em>To streamline and automate your registration and fee collection process by making registration quick, easy and more powerful for your organization and your participants.</em>
<br><br>
Our objective is to improve the business processes within your organization, ultimately saving you valuable time, money and resources. We have built QE solutions in an extremely straightforward and user-friendly style so that both associations and their members are able to quickly and easily access and navigate from any computer with a live Internet connection. In doing this, QE has ensured that this process becomes extremely convenient for members, and provides administration with a cost-effective and hassle-free registration process, ultimately increasing the satisfaction of both parties. Further, QE offers complete support and technical assistance, ensuring that your problems are resolved in the swiftest and most convenient manner possible.
<br><br>
If your organization does not currently offer online registration and fee collection and you would like more information, click <router-link to="/Contact">here</router-link> for contact information 
              </p>
            </div>
        </div>
      </div>
</div>
    <!--<div class="topSpacing"></div>
        <div class="row" style="padding:0px;margin:0px;">
          <div class="col-sm-6 col-xs-12" style="background-color:#d3e3ff;">
            <h1>{{ msg }}</h1>
            <router-link to="/">Go to index</router-link>
            <hr>
                <div class="col-sm-4">
                  <ul class="nav" style="background-color:#d3e3ff;height:30px;">
                    <li class="active"><a href="#">Home</a></li>
                    <li><router-link to="/">page 1</router-link></li>
                    <li><router-link to="/p2">page2</router-link></li>
                    <li><router-link to="/bigmove">BigMove</router-link></li>
                  </ul>
                </div>
          </div>
          <div class="col-sm-6 col-xs-12" style="background-color:#ffe3a9;">
                <h2>BOOTSTRAP</h2>
                <div class="jumbotron text-center">
                  <h1>This is a Bootstrap Page</h1>
                  <p>Resize this responsive page to see the effect!</p> 
                </div>
          </div> 
        </div>           
                <div class="col-sm-12">
                  <div class="row">
                    <div class="col-sm-12" style="padding:30px;">
                        <h2>WHAT WE DO</h2>
                        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, 
                          ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                    </div>

                    <section class="col-sm-4">
                      <img src="../assets/sport1.jpg" class="img-responsive">
                      <h3>Image 1</h3>
                      <p><a class="btn" href="#">View details &raquo;</a></p>
                      <transition name="slide-fade">
                        <p v-if="show">Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                      </transition>
                    </section>
                    <section class="col-sm-4">
                      <img src="../assets/sport2.jpg" class="img-responsive">
                      <h3>Image 2</h3>
                      <p><a class="btn" href="#">View details &raquo;</a></p>
                      <transition name="slide-fade">
                        <p v-if="show">Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                      </transition>
                    </section>
                    <section class="col-sm-4">
                      <img src="../assets/sport3.jpg" class="img-responsive">
                      <h3>Image 3</h3>
                      <p><a @click="show = !show">View details &raquo;</a></p>
                      <transition name="slide-fade">
                      <p v-if="show">Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                      </transition>
                    </section>
                    
                  </div>
                </div>
                <hr>
<div id="example-1">
  <button @click="show = !show">
    Toggle Button
  </button>
  <transition name="slide-fade">
    <p v-if="show">body text</p>
  </transition>
</div>-->


  
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      title: 'About Us',
      show: true
    }
  },
	created: function() {
		this.$parent.prodEnabled=false;
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}*/


</style>
