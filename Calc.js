var m,n,result,k;var y=0; var f=0;
m=" ";
var g=0;
  
  function yes(a)
 {
    
    o=document.getElementById("op1");
    if(o.innerHTML=="input1")
    m+=a;
    else m=m+a;
    o.innerHTML=m;
    
  if(y==1)answer();
  }
  function res(b){
  
  if(f<=0)
  
    {
      
      
      p=document.getElementById("op1");
       p.id="ch1";
  s=document.getElementById("op2");
    
   
    
    s.id="op1";m=" ";
  
    s.innerHTML=".";g=b;
    function hi(t)
    {switch(t){
     case 1: t="+";break;
     case 2: t="-";break;
     case 3: t="×";break;
     case 4: t="%";break;}
     return t; 
    }
  //  mn
   y=1; 
    
   document.getElementById("op").innerHTML =hi(b);
 
 
 f++;
 
 }
 else {
 
 p=document.getElementById("ch1");
 
 
 q=document.getElementById("op1");
 p.innerHTML=document.getElementById("result").innerHTML;
 q.innerHTML="0";
 
 function hi(t)
    {switch(t){
     case 1: t="+";break;
     case 2: t="-";break;
     case 3: t="×";break;
     case 4: t="%";break;}
     return t; 
    }
  //  mn
   //y=1;  
    m=" ";
     g=b;
   document.getElementById("op").innerHTML =hi(b);
 
 
 document.getElementById("result").innerHTML=" ";
  
  }
  
  }
  
 
  function answer()
  {
 var p=document.getElementById("ch1").innerHTML;
    
 var q=document.getElementById("op1").innerHTML;
  
var u,i;
u=parseFloat(p);
i=parseFloat(q);
k=document.getElementById("result");

  switch(g)
    {
      case 1:k.innerHTML=u+i; break;
      case 2:k.innerHTML=u-i; break;
      case 3:k.innerHTML=u*i; break;
      case 4:k.innerHTML=u/i; break;

      default: 
    }
    
  }
  function reset(){
    
   var p=document.getElementById("ch1");
   p.innerHTML="input1";
   var q=document.getElementById("op1");
    document.getElementById("op").innerHTML="Operator";
    q.innerHTML="input2";
    p.id="op1";
    q.id="op2";
   // alert ("operation is resetted successfully");
    document.getElementById("result").innerHTML="Answer";
    m=" ";
    y=0;
    
    
  }
  function tr(){
    
    p=document.getElementById("dot");
    u=parseFloat("0.25");
    p.innerHTML=u;
  }
