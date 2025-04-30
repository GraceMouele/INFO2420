// JavaScript Document

PrintButton1 = new Image
	PrintButton2 = new Image
	Logo1 = new Image
	Logo2 = new Image
if (document.images) {
	PrintButton1.src = "Images/Print1.jpg"
	PrintButton2.src = "Images/Print2.jpg"
	Logo1.src = "Images/Logo1.jpg"
	Logo2.src = "Images/Logo2.jpg"
}


		var imgArray = new Array(
			'Image1Lg.jpg',
			'Image2Lg.jpg',
			'Image3Lg.jpg',
			'Image4Lg.jpg'
			

		);


		var titleArray = new Array(
			'Nice plate',
			'Great Wine',
			'Delicious Desert',
			'Marble Steak'
			
		);
			
		var imgPath = "Images/FullSize/";
		
		function swapImage(imgID) {

			var theImage = document.getElementById('theImage');
			var textDiv = document.getElementById('bottomText');

			var newImg;
			var textTitle;

			newImg = imgArray[imgID];
			theImage.src = imgPath + newImg;

			textTitle=titleArray[imgID];

      			textDiv.innerHTML = textTitle;
		}
			
		function preloadImages() {		
			for(var i = 0; i < imgArray.length; i++) {
				var tmpImg = new Image;
				tmpImg.src = imgPath + imgArray[i];
			}
		}