 
       var API = "http://localhost:5500";

       //-----------------------------------------------
         var b = document.querySelector('#Name');
           var Password= document.querySelector('#Password');
            var submit= document.querySelector('#button__submit');
           var handleResult = document.querySelector('#next');
            var notification = document.querySelectorAll('.notification')
           var linkGD = document.querySelectorAll('.linkGD')
            var box = document.querySelector('.box')
           // var next = document.querySelectorAll('.next')
           var boxSU = document.querySelector('.boxSU')
       
         console.log(linkGD)
         
       
           // sign in link thu 5
           linkGD[4].onclick = () => {
             box.style.display="block"
           }
           linkGD[0].onclick = () => {
             box.style.display="block"
           }
           linkGD[1].onclick = () => {
             box.style.display="block"
           }
           linkGD[2].onclick = () => {
             box.style.display="block"
           }
          //  linkGD[3].onclick = () => {
          //    box.style.display="block"
          //  }
           linkGD[5].onclick= ()=>{
                 boxSU.style.display="block"
           }
       
           //  next[0].onclick = () => {
           //   box.style.display = "none";
           //   boxSU.style.display =  "block";
           //  }
       
           var name = "";
                b.onkeyup =(e) =>{
                   name=e.target.value;
               }
       
               var password ="";
               Password.onkeyup = (e) =>{      
               password = e.target.value
               }
               
                 function start () {
                   getInfo(handleInfo);
                 }
       
       
                 function getInfo(callback){
                   fetch(API)
                   .then ((info) => {
                          return info.json(''); 
                   })
                   .then(callback)
                   .catch(() =>{
                       return 'error'
                   })
                 }
       
       
       
              
                 function handleInfo(data) {
                   for (var i = 0; i < data.length; i++) {
                     console.log(data[i].name)
                     console.log(data[i].Password)
                       if (name == data[i].name && password == data[i].Password){
                           
                           handleResult.style.display = 'block';
                           return;
                       }
                   }
       
                   //wrong account or wrong Password
                   notification[0].style.display="block";
                   notification[1].style.display="block";
       
                 }
                 
       
                 //Submit
                 submit.onclick = (e) =>{
                   start();
                 }
       
       
       
                 //js sign up 
                  
          
       
                 var inputElement = document.querySelectorAll('.inputSU');
                   var displayResult = document.querySelectorAll('.nextSU')
                   var notificationSU = document.querySelectorAll('.notificationSU')
                   var create = document.querySelector('.create')
                
          
                   //Dom event
                   var NameSU;
                   inputElement[0].onkeyup= (e)=>{
                       
                       nameSU = e.target.value;
                       console.log(nameSU)
                   }
       
                   var PasswordSU;
                   inputElement[1].onkeyup = (e) =>{
                       
                       PasswordSU = e.target.value;
                    console.log(PasswordSU)    
                   }
                   
                   var again_Password;
                   inputElement[2].onkeyup = (e) => {
       
                       again_Password = e.target.value
                       console.log(again_Password)
                   }
                  
       
               
                   //port accouont
                   function createAccount(data) {
                    
                       fetch(API,{
                           method: 'POST',
                           headers: {
                               'content-Type': 'application/json'
                           },
                           body: JSON.stringify(data)
                       })
                        .then((a) => {
                           console.log(a)
                           // displayResult[0].style.display = 'block';
                           // displayResult[1].style.display = 'block';
                        })
                        .catch(() => {
                           notification[0].style.display = "block";
                           
                           notification[1].style.display = "block";
                           
                           notification[2].style.display = "block";
                        })
                   }
       
                   //dom event
                   var idSU = 4;  
                   create.onclick = () =>{
                     console.log(PasswordSU,again_Password)
                       if (PasswordSU !==again_Password) {
                       notificationSU[1].style.displ="block"
                       notificationSU[2].style.display = "block";
                         return;
                   }
       
                       idSU++;
                       var Formdata = {
                           id: idSU,
                           nameSU,
                           PasswordSU
                       }
                       // console.log(Formdata)
                       createAccount(Formdata)
                   }