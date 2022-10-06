const notification=document.getElementById('notif');
const notification2=document.getElementById('notif2');
const language=document.getElementById('language');
const language2=document.getElementById('language2');
const lang=document.querySelector('.languages');
const profile=document.getElementById('profile');
const profile2=document.getElementById('profile2');
const prof=document.querySelector('.profile');
const mainNot=document.querySelector('.notifcation');
const floortab=document.getElementById('floor');
const floor=document.querySelector('.floor');
const invoicetab=document.getElementById('invoice');
const invoice=document.querySelector('.invoice');
const sidebartab=document.getElementById('sidebar');
const sidebar=document.querySelector('.sidebar')
const closeside=document.getElementById('closeside')
const settab=document.getElementById('setting');
const settab2=document.getElementById('setting2');
const setting=document.querySelector('.setting');
const tab1=document.getElementById('tab1');
const tab2=document.getElementById('tab2');
const tab3=document.getElementById('tab3');
const tab4=document.getElementById('tab4');
const tab5=document.getElementById('tab5');
const tab6=document.getElementById('tab6');
const tab7=document.getElementById('tab7');
const tab8=document.getElementById('tab8');
const content=document.querySelector('.content');
const content2=document.querySelector('.content2');
const content3=document.querySelector('.content3');
const content4=document.querySelector('.content4');
const content5=document.querySelector('.content5');
const content6=document.querySelector('.content6');
const content7=document.querySelector('.content7');
const content8=document.querySelector('.content8');
tab1.addEventListener('click',function(){
content.style.display='block';
content2.style.display="none";
content3.style.display="none";
content4.style.display="none";
content5.style.display="none";
content6.style.display="none";
content7.style.display="none";
content8.style.display="none";
});
tab2.addEventListener('click',function(){
content.style.display='none';
content2.style.display="block";
content3.style.display="none";
content4.style.display="none";
content5.style.display="none";
content6.style.display="none";
content7.style.display="none";
content8.style.display="none";
});
tab3.addEventListener('click',function(){
content.style.display='none';
content2.style.display="none";
content3.style.display="block";
content4.style.display="none";
content5.style.display="none";
content6.style.display="none";
content7.style.display="none";
content8.style.display="none";
});
tab4.addEventListener('click',function(){
content.style.display='none';
content2.style.display="none";
content3.style.display="none";
content4.style.display="block";
content5.style.display="none";
content6.style.display="none";
content7.style.display="none";
content8.style.display="none";
});
tab5.addEventListener('click',function(){
content.style.display='none';
content2.style.display="none";
content3.style.display="none";
content4.style.display="none";
content5.style.display="block";
content6.style.display="none";
content7.style.display="none";
content8.style.display="none";
});
tab6.addEventListener('click',function(){
content.style.display='none';
content2.style.display="none";
content3.style.display="none";
content4.style.display="none";
content5.style.display="none";
content6.style.display="block";
content7.style.display="none";
content8.style.display="none";
});
tab7.addEventListener('click',function(){
content.style.display='none';
content2.style.display="none";
content3.style.display="none";
content4.style.display="none";
content5.style.display="none";
content6.style.display="none";
content7.style.display="block";
content8.style.display="none";
});
tab8.addEventListener('click',function(){
content.style.display='none';
content2.style.display="none";
content3.style.display="none";
content4.style.display="none";
content5.style.display="none";
content6.style.display="none";
content7.style.display="none";
content8.style.display="block";
});
notification.addEventListener('click',function(){
if (mainNot.style.display==="block") {
mainNot.style.display="none";
}else
{
mainNot.style.display="block";
mainNot.style.display="block";
prof.style.display="none";
setting.style.display="none";
lang.style.display="none";
document.querySelector('.bars').style.display="none";
floor.style.display="none";
 invoice.style.display="none";
}
});
notification2.addEventListener('click',function(){
if (mainNot.style.display==="block") {
mainNot.style.display="none";
}else
{
mainNot.style.display="block";
prof.style.display="none";
setting.style.display="none";
lang.style.display="none";
document.querySelector('.bars').style.display="none";
floor.style.display="none";
    invoice.style.display="none";
}
});
language.addEventListener('click',function(){
if (lang.style.display==="block") {
lang.style.display="none";
}else
{
lang.style.display="block";
prof.style.display="none";
setting.style.display="none";
mainNot.style.display="none";
document.querySelector('.bars').style.display="none";
floor.style.display="none";
    invoice.style.display="none";
}
});
language2.addEventListener('click',function(){
if (lang.style.display==="block") {
lang.style.display="none";
}else
{
lang.style.display="block";
prof.style.display="none";
setting.style.display="none";
mainNot.style.display="none";
document.querySelector('.bars').style.display="none";
floor.style.display="none";
    invoice.style.display="none";
}
});
profile.addEventListener('click',function(){
    if (prof.style.display==="block") {
    prof.style.display="none";
    }else
    {
    prof.style.display="block";
    lang.style.display="none";
    mainNot.style.display="none";
    setting.style.display="none";
    document.querySelector('.bars').style.display="none";
    floor.style.display="none";
    invoice.style.display="none";
    }
    });
    profile2.addEventListener('click',function(){
    if (prof.style.display==="block") {
    prof.style.display="none";
    }else
    {
    prof.style.display="block";
    lang.style.display="none";
    mainNot.style.display="none";
    setting.style.display="none";
    document.querySelector('.bars').style.display="none";
    floor.style.display="none";
    invoice.style.display="none";
    }
    });
    floortab.addEventListener('click',function(){
        if (floor.style.display==="block") {
        floor.style.display="none";
        }else
        {
        floor.style.display="block";
        invoice.style.display="none";
        prof.style.display="none";
        lang.style.display="none";
        mainNot.style.display="none";
        setting.style.display="none";
        document.querySelector('.bars').style.display="none";
        }
        });
        invoicetab.addEventListener('click',function(){
            if (invoice.style.display==="block") {
            invoice.style.display="none";
            }else
            {
            invoice.style.display="block";
            floor.style.display="none";
            prof.style.display="none";
            lang.style.display="none";
            mainNot.style.display="none";
            setting.style.display="none";
            document.querySelector('.bars').style.display="none";
            }
            });
        sidebartab.addEventListener('click',function(){
            sidebar.style.display="block";
          document.querySelector('.wholepage').style.opacity="30%";
        }) ;
        closeside.addEventListener('click',function(){
            sidebar.style.display="none";
            document.querySelector('.wholepage').style.opacity="unset";
        }) ;
        settab.addEventListener('click',function(){
            if (setting.style.display==="block") {
            setting.style.display="none";
            }else
            {
            setting.style.display="block";
            lang.style.display="none";
            mainNot.style.display="none";
            prof.style.display="none";
            document.querySelector('.bars').style.display="none";
            }
            });
            settab2.addEventListener('click',function(){
            if (setting.style.display==="block") {
            setting.style.display="none";
            }else
            {
            setting.style.display="block";
            lang.style.display="none";
            mainNot.style.display="none";
            prof.style.display="none";
            document.querySelector('.bars').style.display="none";
            }
            });  
            $(function(){
                $('[data-toggle="tooltip"]').tooltip();
              });
              document.getElementById('friends').addEventListener('click',function(){
                  document.querySelector('.friends').style.display="block";
                  document.querySelector('.Others').style.display="none";
                  document.querySelector('.Activess').style.display="none";
              });
              document.getElementById('others').addEventListener('click',function(){
                document.querySelector('.friends').style.display="none";
                document.querySelector('.Others').style.display="block";
                document.querySelector('.Activess').style.display="none";
            });
            document.getElementById('active').addEventListener('click',function(){
                document.querySelector('.friends').style.display="none";
                document.querySelector('.Others').style.display="none";
                document.querySelector('.Activess').style.display="block";
            });
            document.getElementById('bars').addEventListener('click',function(){
                if (document.querySelector('.bars').style.display==="block"){
                    document.querySelector('.bars').style.display="none";
            }else{
                document.querySelector('.bars').style.display="block";
                setting.style.display="none";
                prof.style.display="none";
                mainNot.style.display="none";
                lang.style.display="none";
            }
            });
            document.getElementById('bars2').addEventListener('click',function(){
                if (document.querySelector('.bars').style.display==="block"){
                    document.querySelector('.bars').style.display="none";
            }else{
                document.querySelector('.bars').style.display="block";
                setting.style.display="none";
                prof.style.display="none";
                mainNot.style.display="none";
                lang.style.display="none";
            }
            });

                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                 
                
