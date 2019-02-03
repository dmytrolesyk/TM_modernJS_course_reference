$(document).ready(function(){
  $('.delete-user').on('click', deleteUser)
});

function deleteUser() {
  const confirmation = confirm('Are you sure?');
  if (confirmation) {
    $.ajax({
      type: 'DELETE',
      url: '/' + $(this).data('id')
    }).done(function(res){
  })
  } else {
    return false;
  }
  window.location.replace('/')
}