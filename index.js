

function handleMenuIconClick() {
  $('#menu-icon').click(() =>{
    $('.nav-drop').toggleClass('hidden');
  });
}

function HandleNavElementClick() {
  $('.nav-link').click(() =>{
    $('.nav-drop').toggleClass('hidden');
  });
}



function main() {
  HandleNavElementClick();
  handleMenuIconClick();
}

$(main);