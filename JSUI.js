// JSUI 2.0, formerly an EyeScary Development project

function component(type, id, cls, inHTML, target, opt1="null", opt2="null", opt3="null"){
  webcomponent=document.createElement(type)
  webcomponent.innerHTML = inHTML
  webcomponent.class = cls
  webcomponent.id = id 
  if(type == "a"){
    if(opt1.startsWith("https://") || opt1.startsWith("http://") || opt1.endsWith(".html") || opt1.endsWith(".js") || opt1.endsWith(".css"))
    {
      webcomponent.href=opt1
    } else {
      webcomponent.onclick=opt1
    }
  } else if (type == "link"){
    webcomponent.href=opt1
    webcomponent.rel=opt2
  } else if (type == "meta"){
    webcomponent.setAttribute('name', opt1)
    webcomponent.setAttrivute('content', opt2)
  } else if (type == "button"){
    webcomponent.onclick=opt1
  }
  target.appendChild(webcomponent)
}
