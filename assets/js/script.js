
// Change the color of the list items randomly based on an array of colors
$('section').each(function() {
    // [Orange, Yellow, Pink, Blue, Yellow, Green]
    var back = ["#F9A55B","#ffc","#ff7eb9","#7afcff","#ffc", "#98FB98"];
    var rand = back[Math.floor(Math.random() * back.length)];
    $(this).css('background-color',rand);
});