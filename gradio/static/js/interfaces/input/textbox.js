$('body').on('click', '.clear', function(e) {
  $(".input_text").val("");
})
$('body').on('click', '.submit', function(e) {
  text = $(".input_text").val();
  ws.send(text, function(e){
    notifyError(e)
  });
})
