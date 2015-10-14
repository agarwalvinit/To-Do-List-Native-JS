(function(){ 
    var task = [];
    var show = document.querySelector('#showTask');

    window.addList = function(){
        var inp = document.getElementById('input').value;
        if(document.getElementById('input').value === null || document.getElementById('input').value === ''){
            alert('please enter a text in the field');
        } else {
        task.push(inp);
        for(i = 0; i < task.length; i++){
            var newList = "<a onclick = 'removeItem(" + i + ");'>" + task[i] + "</a><br>";
        }
        show.innerHTML += newList;
        storeLocal();
        var x = document.getElementById('input');
        x.focus();}
        }

    window.removeItem = function(i){
        task.splice(i,1);
        var show = document.getElementById('showTask');
        var newList = "";
        for(i = 0; i < task.length; i++){
            newList += "<a onclick = 'removeItem(" + i + ");'>" + task[i] + "</a><br>";
        }
        show.innerHTML = newList;
        storeLocal();}

    document.addEventListener('DOMContentLoaded', retrieveLocal, false);

    function storeLocal(){
        //localStorage.clear();
        localStorage.showTask = show.innerHTML;
        localStorage["task"] = JSON.stringify(task);
    }

    function retrieveLocal(){
        if(localStorage.showTask){
            show.innerHTML = localStorage.showTask;
            task = JSON.parse(localStorage["task"]);
        }
    }
})();