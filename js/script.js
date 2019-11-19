function randomimage() {
var randomList = new Array(
  "../image/00000IMG_00000_BURST20190801204420105_COVER.jpg",
  "../image/00100lPORTRAIT_00100_BURST20190625205058848_COVER-EFFECTS.jpg",
  "../image/1565833638674.JPEG",
  "../image/1574133310816.JPEG" );
var num = Math.floor(Math.random() * randomList.length);
var printHtml = 'url(' + randomList[num] + ');';
$('.box').css('background-image', printHtml);
}