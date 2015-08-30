var addLikes = (function (counter) {
       return counter += 1;
	});
	$(document).ready(function(){

		$('#btnLike').click(function(e){
			e.preventDefault();
			var likeCount = $("#likeCountSmall").text();
			var likes = addLikes(parseInt(likeCount));
			console.log(likes);
            $("#likeCountSmall").text(likes);
		}); 
	});

