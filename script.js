var head = document.createElement('h3')
head.innerHTML="Enter your email id"

var tbox = document.createElement('input')
tbox.setAttribute('type','email')
tbox.setAttribute('id','mail')

var button=document.createElement('input')
button.setAttribute('type','submit')
button.setAttribute('onclick','sendemail()')

document.body.append(head,tbox,button)

var b =document.getElementById('mail');

function sendemail()
{
  var a=Math.floor(Math.random()*90000000) + 10000000;
   console.log(a)
   Email.send({
    Host: "smtp.gmail.com",
    Username : "bram95270@gmail.com",
    Password : "bram@1234",
    To : ""+b, 
    From : "bram95270@gmail.com",
    Subject : "OTP",
    Body : "below is your OTP  :"+a,
    } 
    )
    .then(
      message => alert("mail sent successfully")
    );
   
}
