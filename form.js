let abc=document.getElementById('btn').addEventListener('click',seen)
function seen(){
    let input1=document.getElementById('int1').value;
    let input2=document.getElementById('int2').value;
    let input3=document.getElementById('int3').value;
    if((input1==undefined)||(input1==null)||(input1=="")){  
        document.getElementById('msg1').innerText='!! please enter the username '
    }
    else{
        document.getElementById('msg1').innerText=""
    }
    if((input2==undefined)||(input2==null)||(input2=="")){
        document.getElementById('msg2').innerText='!! please enter the email  id '
    }
    else{
        document.getElementById('msg2').innerText=""
    }
    if((input3===undefined)||(input3===null)||(input3==="")){  
        document.getElementById('msg3').innerText='!! please enter the password '
    }
     else{
        document.getElementById('msg3').innerText=""
        document.getElementById('int1').value=""
        document.getElementById('int2').value=""
        document.getElementById('int3').value=""
        document.getElementById('success').innerText=('you have successfully log in'+" "+input1)
        setInterval(function(){
            document.getElementById('success').innerText="";
        },5000)
     }
}
