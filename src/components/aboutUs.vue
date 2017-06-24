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
              QuickEnrollment Inc. ('QE') was established in September 1999 and operates out of Toronto, Ontario, Canada. QuickEnrollment provides a comprehensive suite of online registration solutions particularly, but not exclusively, to amateur and recreational sports organizations, their respective leagues, tournaments and events they run.
              </p>
              <p>
         <div class="titleText"> Our Business Approach</div>
          At QuickEnrollment, our business philosophy is to build relationships with our clients as long-term partners. This allows us to grow with our clients and have a better understanding of their existing registration processes. What distinguishes QuickEnrollment from other companies is that our main business focus is <b>online registration</b>. Our expertise and knowledge in this area has allowed us to become registration specialists, thereby, providing our clients with the best online registration solution available.
              </p>
              <p>
          QuickEnrollment has essentially automated the traditional paper-based registration process that currently exists in amateur and recreational sports by leveraging state-of-the-art Internet based tools and technologies in creating the QuickEnrollment Online Registration Management System.
              </p>
              <p>
          <div class="titleText">Our Mission:</div>
          To streamline and automate your registration process by making registration quick, easy and more powerful for your organization and your participants.
              </p>
              <p>
          Our objective is to improve the business processes within your organization. We do this by increasing both YOUR satisfaction and YOUR CUSTOMERS' satisfaction (the participants) by making your registration process easier for them, and easier and more cost effective for you to administer. In the end, you will save tremendous amounts of time and money.
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
