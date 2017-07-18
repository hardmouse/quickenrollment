<template>
  <div>
    <div class="topSpacing"></div>

        <div class="row" style="padding:0px;margin:0px;">
          <div class="headerbelt">
            <div class="container"><div class="headerfont">{{title}}</div></div>
          </div>
          <div class="container bodyContainer" style="margin-top:0px;">


						<div class="row" style="margin-bottom:50px;">
							<section class="col-md-4 col-xs-12">
								<img src="../assets/support.jpg" class="img-responsive" style="padding-bottom:6px;">
								<h3>Customer Service</h3>
								<p>Please contact us if you require any assistance from our customer care department:
									<br>
									<br>Email: <a href="mailto:operations@quickenrollment.com">operations@quickenrollment.com</a>
									<br>(9am - midnight EST - 7 days/ week)
									<br>Local Phone #: 416-337-2016
									<br>Toll free: 888-999-4258
									<br>(9am - 5pm - Monday through Friday) </p>
							</section>
							<section class="col-md-4 col-xs-12">
								<img src="../assets/sport2.jpg" class="img-responsive" style="padding-bottom:6px;">
								<h3>Sales</h3>
								<p> If you would like information on how QE may assist you and your organization please contact us at:
									<br>
									<br>Email: <a href="mailto:info@quickenrollment.com">info@quickenrollment.com</a>
									<br>(9am - midnight EST - 7 days/ week)
									<br>Local Phone #: 416-337-2016
									<br>Toll free: 888-999-4258
									<br>(9am - 5pm - Monday through Friday) </p>
							</section>
							<section class="col-md-4 col-xs-12">
								<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2877.0946193720993!2d-79.34052918449568!3d43.85386747911492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d4f8337407f9%3A0xcc36363731f77341!2s3601+Hwy+7+%23400%2C+Markham%2C+ON+L3R+0M3!5e0!3m2!1szh-TW!2sca!4v1498767177483" width="360" height="233" frameborder="0" style="border:0px;" allowfullscreen></iframe>
								<h3>Mailing Address</h3>
								<p>3601 Highway #7 East, Suite 400<br>Markham, Ontario<br>L3R 0M3</p>
							</section>
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
    window.scrollTo(0, 0);
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3{
	font-family:'gothic', Arial, Helvetica, sans-serif;
	margin-top:30px;
	font-weight:bold;
}
p{
	font-family:'gothic', Arial, Helvetica, sans-serif;
	font-size: 16px;
}
</style>
