$(document).ready(function() {

  $("#project_quick_jump_box").select2();

  // Issue form.
  var fields = ['assigned_to_id', 'project_id', 'product_code_id'];
  fields.forEach(function(item, i, arr) {
    var elem = 'select#issue_' + item;
    $(elem).select2();
    $(elem).parent().find('.select2-container').attr('style', 'width: 60%');
  });
});
