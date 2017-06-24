<template>
  <div>
    <div class="topSpacing"></div>

        <div class="row" style="padding:0px;margin:0px;">
          <div class="headerbelt">
            <div class="container"><div class="headerfont">{{title}}</div></div>
          </div>
          <div class="container bodyContainer" style="margin-top:0px;">




		<div class="row" style="padding:0px;margin:0px;">


			<div class="col-xs-12 col-md-2" style="background-color:#d3e3ff;">
			    <b-nav vertical>
			      <b-nav-item class="active">Home</b-nav-item>
			      <b-nav-item>Page 1</b-nav-item>
			      <b-nav-item>Page 2</b-nav-item>
			      <b-nav-item>Page 3</b-nav-item>

           <b-nav-item-dropdown text="Lang" right-alignment>
              <b-dropdown-item to="#">Home</b-dropdown-item>
                <b-dropdown-item to="#">Mission</b-dropdown-item>
                <b-dropdown-item to="#">Services</b-dropdown-item>
                <b-dropdown-item to="#">Staff</b-dropdown-item>
                <b-dropdown-item to="#">Testimonials</b-dropdown-item>
            </b-nav-item-dropdown>
			    </b-nav>
		  </div>



					<div class="col-xs-12 col-md-10">


						<div class="row">
							<div class="col-12">
									<h2>This page is under construction</h2>
									<p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut 
										fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
							</div>
						</div>


						<div class="row">
							<section class="col-md-4 col-xs-12">
								<img src="../assets/sport1.jpg" class="img-responsive">
								<h3>Donec id elit non mi</h3>
								<p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, 
									ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
								<p><a class="btn" href="#">View details &raquo;</a></p>
							</section>
							<section class="col-md-4 col-xs-12">
								<img src="../assets/sport2.jpg" class="img-responsive ">
								<h3>sit amet risus</h3>
								<p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, 
									ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
								<p><a class="btn" href="#">View details &raquo;</a></p>
							</section>
							<section class="col-md-4 col-xs-12">
								<img src="../assets/sport3.jpg" class="img-responsive ">
								<h3>Cras justo odio</h3>
								<p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. 
									Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
								<p><a class="btn" href="#">View details &raquo;</a></p>
							</section>
						</div>


					</div>



					
	    </div>
	    </div>
	    </div>
	</div>
</template>

<script>
export default {
  name: 'contact',
  data () {
    return {
      title: 'Contact Us',
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

</style>
