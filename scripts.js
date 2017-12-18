function showSidebar(){
  var sidebar = document.querySelector('.sidebar-mobile');
  var sidebarBg = document.querySelector('.sidebar-mobile-bg');
  sidebar.classList.remove("off")
  sidebarBg.classList.remove("off")
}

function hideSidebar(){
  var sidebar = document.querySelector('.sidebar-mobile');
  var sidebarBg = document.querySelector('.sidebar-mobile-bg');
  sidebar.classList.add("off")
  sidebarBg.classList.add("off")
}

function showView(viewId){
  viewId = viewId || '';
  [
  'home',
  'bandas',
  'lancamentos',
  'bailes'
  ].forEach(function(id){
    var el = document.querySelector('#' + id)
    if(viewId !== id){
      el.classList.add('hide')
    } else {
      el.classList.remove('hide')
    }
  })
}
