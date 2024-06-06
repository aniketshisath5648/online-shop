var user="aniket"
var pasw="ansh0708"

function useridd(){
    if((document.getElementById('userid').value==user) && (document.getElementById('pass').value==pasw))
        {
            window.location.href="./shop.html";
        }
        else{
            document.getElementById('valid').value=" INVALID"
        }
}
