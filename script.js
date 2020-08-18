
              var a1=document.getElementById("a1");
            var result1=document.getElementById("result1");
            a1.onclick=function()
            {
                var f=document.getElementById("num").value;
                var c=Math.round((f-32)*(5/9)*100)/100;
                result1.innerHTML=""+c+" Celcius";
            };
            
             var a2=document.getElementById("a2");
            var result2=document.getElementById("result2");
            a2.onclick=function()
            {
                var c=document.getElementById("num").value;
                var f=Math.round((9/5)*c+32*100)/100;
                result2.innerHTML=""+f+" Fahrenheit";
            };
            
            var a3=document.getElementById("a3");
            var result3=document.getElementById("result3");
            a3.onclick=function()
            {
                var m=document.getElementById("num").value;
                var F=Math.round(m*0.3048*100)/100;
                result3.innerHTML=""+F+" Feet";
            };
            
             var a4=document.getElementById("a4");
            var result4=document.getElementById("result4");
            a4.onclick=function()
            {
                var F=document.getElementById("num").value;
                var m=Math.round(F/0.3048*100)/100;
                result4.innerHTML=""+m+" Meters";
            };
            
            var a5=document.getElementById("a5");
            var result5=document.getElementById("result5");
            a5.onclick=function()
            {
                var i=document.getElementById("num").value;
                var cm=Math.round(i/(2.54)*100)/100;
                result5.innerHTML=""+cm+" Inches";
            };
            
            var a6=document.getElementById("a6");
            var result6=document.getElementById("result6");
            a6.onclick=function()
            {
                var cm=document.getElementById("num").value;
                var i=Math.round(cm*(2.54)*100)/100;
                result6.innerHTML=""+i+" Centimeters";
            };
            
            var a7=document.getElementById("a7");
            var result7=document.getElementById("result7");
            a7.onclick=function()
            {
                var kg=document.getElementById("num").value;
                var p=Math.round(kg*(2.20462)*100)/100;
                result7.innerHTML=""+p+" Pounds";
            };
            
            var a8=document.getElementById("a8");
            var result8=document.getElementById("result8");
            a8.onclick=function()
            {
                var p=document.getElementById("num").value;
                var kg=Math.round(p/(2.20462)*100)/100;
                result8.innerHTML=""+kg+"Kilograms";
            };
            function clear()
            {
                document.getElementById("clearing").reset();
            }
