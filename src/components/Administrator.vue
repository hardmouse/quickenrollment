<template>
  <div>
    <div class="topSpacing"></div>
        <div class="row" style="padding:0px;margin:0px;">
          <div class="headerbelt">
            <div class="container"><div class="headerfont">{{title}}</div></div>
          </div>
          <div class="container bodyContainer bodyText">
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
                <hr>
                <!--Please ignore the following content.
                <br>
                <div class="table-responsive">          
                    <table class="table" style="background-color:#ffeeee;">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Age</th>
                            <th>City</th>
                            <th>Country</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Anna</td>
                            <td>Pitt</td>
                            <td>21</td>
                            <td>New York</td>
                            <td>USA</td>
                        </tr>
                        
                        <tr>
                            <td>2</td>
                            <td rowspan="2" bgcolor="#FFA">Pete</td>
                            <td rowspan="2" bgcolor="#ACF">Dawson</td>
                            <td>35</td>
                            <td rowspan="2">New York</td>
                            <td>USA</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>35</td>
                            <td>USA</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
        <hr>
          <router-link to="/#">HOME</router-link>
            <hr>
            <div class="btn-group">
                <button type="button" class="btn btn-primary" @click.stop="onClick('abc')">Home</button>
                <button type="button" class="btn btn-primary">Samsung</button>
                <button type="button" class="btn btn-primary">Sony</button>
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
      body: 'Enter your Administrator ID and Password below then click Login to access your Administrator Control Centre.'
    }
  },
  methods: {
     onClick(val) {
      location.href = val
     }
  },
	created: function() {
		this.$parent.prodEnabled=false;
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>

</style>
