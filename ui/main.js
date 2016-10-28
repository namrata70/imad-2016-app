//counter code
var button = document.getElememtById('counter');
button.onClick = function(){
    //create a request object.
    var request = XMLHttprequest();
    
    //capyure the response and store it to a variable.
    request.onreadystatechanges =function(){
        if (request.readyState === XMLHttpRequest.DONE)
        {
           //TAKE SOME ACTION 
           if(request.status === 200)
           { var counter =request.responseText;
           var span = document.getElementById('count');
           span.innerHTML = counter.toString();
               
           }
        }
        //not done yet.
        
    };
    //make a request
    request.open('GET', "http//:namrata70.imad.hasura-app.io/counter", true);
    request.send(null);
    };
    //submit name
    var nameInput = document.getElementById('name');
    //var name = nameInput.value;
    var submit = document.getElementById('submit_btn');
    submit.onclick = function(){
        //make a request to server and send the names
        
        //capture a list of names and render it as a list.
        var names = ['name1', 'name2', 'name3', 'name4'];
        var list = '';
        for (var i = 0; i<names.length; i++)
        {
            list+= '<li>' + names[i] + '</li>';
            
        }
        var ul = document.getElementById('namelist');
        ul.innerHTML = list;
    };
    request.open('GET', 'http//:namrata70.imad.hasura-app.io/submit-name?name=' + name, true);
    request.send(null);
    
