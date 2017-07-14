import $ from "jquery";

class Form {
	constructor () {
		
		this.contactForm = $(".contact__form");
		this.contactForm.on("submit", function() {
			$(".contact__greeting").text("Message Sent! I'll get back to you soon.");
			$(".contact__form").addClass("contact--disapear");
			var that = $(this),
			url = that.attr("action"),
			type = that.attr("method"),
			data = {};
			
			that.find("[name]").each(function() {
				var that = $(this),
				name = that.attr("name"),
				value = that.val();
				
				data[name] = value;
				
			});
			
			$.ajax({
				url: url,
				type: type,
				data: data,
				success: function(response) {
					console.log(response);
				}
			});
			
			return false;
		});
		
		
		
	}
}

export default Form;