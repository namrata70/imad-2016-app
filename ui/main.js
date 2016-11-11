
    //submit username/password to login
    var submit = document.getElementById('submit_btn');
    submit.onclick = function(){
        //create a request object
        var request = new  createXMLHttpRequest();
        request.onreadystatechange = function(){
            if (request.readyState === XMLHttpRequest.DONE){
                if(request.status === 200){
                    console.log(' user logged in');
                alert('logged in succesfully!');
                }else if (request.status === 403){
                    alert('username/password is incorrect');
                    
                }else if (request.status === 500){
                    alert('something wrong with server, try again later!');
                }
            }
            
        };
    };
    var username = document.getElementbyId('username').value;
    var password = document.getElementById('password').value;
    console.log(username);
    console.log(password);
    request.open('POST', 'http//:namrata70.imad.hasura-app.io/login', true);
    request.setRequestHeader('content-type', 'application/JSON');
    request.send(JSON.stringify({username: username, password:password}));
    
