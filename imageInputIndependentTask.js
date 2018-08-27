
// Function to search images:
// It will hide/show section according to the result of the search
function displayImage (lucky){

	var imageInput = imageForm.txtImage.value;
	
	if (lucky){
		// Just an option to search the image directly on Google (if lucky!)
		window.open("https://www.google.com.au/search?q=" + imageInput, "_self");
	} else {
		
		var imagesList = ["fruit1","fruit2","fruit3","fruit4", "fruit5"];
	
		// Hide Form to display Image or Error messages
		document.getElementById("imageFormSec").style.display = "none";
	
		if (imagesList.indexOf(imageInput) > -1){			
			document.getElementById("imageFoundImg").src = "images/" + imageInput + ".jpg";			
			document.getElementById("imageFoundP").innerHTML = "Image <i>" + imageInput + "</i> found!";	
						
			// Show image section 'imageFoundSec'
			document.getElementById("imageFoundSec").style.display = "block";			
		} else {
			
			// Show image section 'noImageFoundSec'
			document.getElementById("noImageFoundSec").style.display = "block";			
			document.getElementById("noImageFoundP").innerHTML = "Sorry, image not found!";
		}				
	}
}	


// Simple funtion to go back to the main page
function goBack(){
	window.open("imageInputIndependentTask.html", "_self");
}