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

function showView(viewId, callback){
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
  });

  if(callback) callback();
}


var source   = document.getElementById("lista-bandas-template").innerHTML;
var template = Handlebars.compile(source);

var banda_ = bandas
  .sort(function(a, b){
      if(a.description < b.description) return -1;
      if(a.description > b.description) return 1;
      return 0;
  })
  .map(function(el){
    var temp = el
    temp.image = el.track[0].byArtist.image
    return temp
  });

var context = { banda: banda_ };
var html    = template(context);
document.querySelector('#bandas').innerHTML = html
