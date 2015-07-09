$(function() {
	$(".featuresArea .slide").owlCarousel({
		items : 3,
		navigation: true,
		navigationText: [
			"<i class='arrow left'></i>",
			"<i class='arrow right'></i>"
		],
		itemsCustom : [
			[0, 2],
			[560, 2],
			[860, 3],
		]
	});
	

})
