/* WE ARE · app */
function render(){calc();for(let i=0;i<3;i++)$('nav'+i).classList.toggle('active',i===page);$('main').innerHTML=[dashboard,taskpage,history][page]()}
render();

