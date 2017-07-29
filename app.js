 $(document).ready(function(){
      $('.parallax').parallax();
    
	
		$('#menuStrip').click(function(){
			$("html, body").animate({ scrollTop: 0 }, "slow");
			$('#dropdown1').toggle(100);
		});
		
		$('.dropDownMenu').click(function(){
			$('#dropdown1').hide();
		});
		
		
});
 
 
