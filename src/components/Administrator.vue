<template>
  <div>
    <div class="topSpacing"></div>
    
        <div class="row" style="padding:0px;margin:0px;">
          <div class="headerbelt"><div class="container"><div class="headerfont">{{title}}</div></div></div>
        
        <transition name="slide-fade">
            <div class="col-12" style="padding-top:20px;padding-bottom:20px;" v-if="this.currentSection==''">
                <div class="row justify-content-around">

                    <div class="col-md-3 prodBox bgPad" @click.stop="goAdmin('Q6')">
                        <img src="../assets/q6.png">
                        <div class="productBoxTitle">Registration Management Software​</div>
                        <div class="productBoxBody">Online registration management tools​ and reporting.​</div>
                    </div>

                    <div class="col-md-3 prodBox bgPad" @click.stop="goAdmin('OFCS')">
                         <img src="../assets/ofcs.png">
                        <div class="productBoxTitle">Online Fee Collection Services​</div>
                        <div class="productBoxBody">Credit card processing management tools​ and reporting.​</div>
                    </div>

                </div>
            </div>
        </transition>

          <transition name="slide-fade">
            <div class="container" v-if="this.currentSection=='Q6'">
                <iframe src="https://www.quickenrollment.com/qe_login/qeLoginClient/login.aspx" width="100%" height="500" scrolling="no" frameborder="0" style="border:0" allowfullscreen></iframe>
                <div class="back2Admin" @click.stop="goAdmin('')">&#8920; back to Admin</div>
            </div>
          </transition>

          <transition name="slide-fade">
            <div class="container" v-if="this.currentSection=='OFCS'">
            <iframe src="https://www.quickenrollment.com/ofcs/client/League/client/login/login.aspx" width="100%" height="500" scrolling="no" frameborder="0" style="border:0" allowfullscreen></iframe>
                <div class="back2Admin" @click.stop="goAdmin('')">&#8920; back to Admin</div>
            </div>
          </transition>

	<div class="container"><div style="height:120px;"></div></div>
          <!--<div class="container bodyContainer bodyText">
                <p>
                    {{ body }}
                </p>
                <hr>
                <div class="container" style="background-color:#EEF;padding:10px;">
                    <form class="form-horizontal" action="http://quickenrollment.ca/login.aspx">
                        <div class="form-group" style="text-align:left;">
                        <label class="control-label col-sm-2" for="ID">Administrator ID:</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="ID" placeholder="Enter ID" name="ID">
                        </div>
                        </div>
                        <div class="form-group" style="text-align:left;">
                        <label class="control-label col-sm-2" for="pwd">Password:</label>
                        <div class="col-sm-10">          
                            <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd">
                        </div>
                        </div>
                        <div class="form-group">        
                        <div class="col-sm-offset-2 col-sm-10" style="text-align:left;">
                            <div class="checkbox">
                            <label><input type="checkbox" name="remember"> Remember me</label>
                            </div>
                        </div>
                        </div>
                        <div class="form-group" style="text-align:right;">        
                        <div class="col-sm-offset-2 col-sm-10">
                            <button type="submit" class="btn btn-primary">Login</button>
                        </div>
                        </div>
                    </form>
                    <div class="col-sm-10" style="background-color:#FCC; padding:10px;text-align:left;color:#F55;">
                    Click “forgot my password” below in order to RESET your password. 
                    <br>
                    <button type="submit" class="btn btn-danger bodyText" @click.stop="onClick('https://www.quickenrollment.com/qe_login/qeLoginClient/forgot_password.aspx')">forgot my password</button>
                    </div>
                </div>
                <hr>-->

        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Administrator',
  data () {
    return {
      title: 'ADMINISTRATOR LOGIN',
      currentSection: '',
      body: 'Enter your Administrator ID and Password below then click Login to access your Administrator Control Centre.'
    }
  },
  methods: {
     onClick(val) {
      location.href = val
     },
     goAdmin(val){
        this.currentSection = val;
        // console.log(val);
     }
  },
	created: function() {
		this.$parent.prodEnabled=false;
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
iframe { overflow:hidden; }

.bgPad{
  background: -webkit-linear-gradient(rgba(0,121,193,.9) 90%, rgba(0,121,193,0));
  background: -o-linear-gradient(rgba(0,121,193,.9) 90%, rgba(0,121,193,0));
  background: -moz-linear-gradient(rgba(0,121,193,.9) 90%, rgba(0,121,193,0));
  background: linear-gradient(rgba(200,230,255,1) 10%, rgba(230,230,230,1) 70%);
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
	font-size: 28px;
	font-weight: bold;
	color:#FFF;
	text-shadow: 0 0 8px #000, 0 0 19px #000;
}
.productBoxBody{
	font-size: 16px;
	color:#FFF;
	text-shadow: 0 0 3px #000, 0 0 5px #000, 0 0 19px #000;
}
</style>
