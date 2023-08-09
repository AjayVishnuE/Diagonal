function arrowCheck(){
    if(document.getElementById('sidesec-head1').innerText =="Branding"){
        document.getElementById('sidesec-head1').innerText ="Home";
        document.getElementById('sidesec-head2').innerText ="Work";
        document.getElementById('sidesec-head3').innerText ="About";
        document.getElementById('sidesec-head4').innerText ="Tech";
        document.getElementById('sidesec-head5').innerText ="Careers";
        document.getElementById('sidesec-head6').innerText ="contact";
    }
}
function downArrowClicked() {
    document.getElementById('center-image-holder').style.display == 'none';
    document.getElementById('center-appear-downarrow').style.display = 'block';
    document.getElementById('center-line-1').style.display = 'block';
    document.getElementById('center-line-2').style.display = 'block';
    document.getElementById('center-arrow-appear-sec1').style.display = 'flex';
    document.getElementById('center-arrow-appear-sec2').style.display = 'flex';
    document.getElementById('center-arrow-appear-sec3').style.display = 'flex';
    document.getElementById('center-appear-work').style.display = 'none';
    document.getElementById('center-appear-about').style.display = 'none';
    document.getElementById('center-appear-tech').style.display = 'none';
    document.getElementById('center-appear-careers').style.display = 'none';
    document.getElementById('center-appear-contact').style.display = 'none';
    document.getElementById('sidesec1').style.background = 'white';
    document.getElementById('sidesec1').style.color = 'blue';
    document.getElementById('line1').style.background = 'blue';
    document.getElementById('line2').style.background = 'blue';
    document.getElementById('line3').style.background = 'blue';
    document.getElementById('line4').style.background = 'blue';
    document.getElementById('line-right-1').style.background = 'blue';  
    document.getElementById('line-right-2').style.background = 'blue';  
    document.getElementById('line-left-1').style.background = 'blue';  
    document.getElementById('line-left-2').style.background = 'blue';
    arrowCheck();
}

function homeClicked(){
    if(document.getElementById('sidesec-head1').innerText =="Home"){
        document.getElementById('center-image-holder').style.display == 'flex';
        document.getElementById('center-appear-downarrow').style.display = 'none';
        document.getElementById('center-image-holder').style.display == 'none';
        document.getElementById('center-appear-work').style.display = 'none';
        document.getElementById('center-appear-about').style.display = 'none';
        document.getElementById('center-appear-tech').style.display = 'none';
        document.getElementById('center-appear-careers').style.display = 'none';
        document.getElementById('center-appear-contact').style.display = 'none';
        document.getElementById('center-line-1').style.display = 'none';
        document.getElementById('center-line-2').style.display = 'none';
    }
    else if(document.getElementById('sidesec-head1').innerText =="Branding"){
        document.getElementById('sidesec1').style.background = 'blue';
        document.getElementById('sidesec1').style.color = 'white';
        document.getElementById('sidesec2').style.background = 'white';
        document.getElementById('sidesec2').style.color = 'blue';
        document.getElementById('sidesec3').style.background = 'white';
        document.getElementById('sidesec3').style.color = 'blue';
        document.getElementById('sidesec4').style.background = 'white';
        document.getElementById('sidesec4').style.color = 'blue';
        document.getElementById('sidesec5').style.background = 'white';
        document.getElementById('sidesec5').style.color = 'blue';
        document.getElementById('sidesec6').style.background = 'white';
        document.getElementById('sidesec6').style.color = 'blue';
        document.getElementById('center-image-holder').style.display == 'none';
        document.getElementById('center-appear-work').style.display = 'flex';
        document.getElementById('center-appear-about').style.display = 'none';
        document.getElementById('center-appear-tech').style.display = 'none';
        document.getElementById('center-appear-careers').style.display = 'none';
        document.getElementById('center-appear-contact').style.display = 'none';
        document.getElementById('center-line-1').style.display = 'none';
        document.getElementById('center-line-2').style.display = 'none';
        document.getElementById('center-work-digital').style.display = 'none';
        document.getElementById('center-work-tool-kit').style.display = 'none';
        document.getElementById('center-work-packaging').style.display = 'none';
        document.getElementById('center-work-space').style.display = 'none';
        document.getElementById('center-work-evp').style.display = 'none';
    }
}

function workClicked(){
    if(document.getElementById('sidesec-head2').innerText =="Work"){
        document.getElementById('line1').style.background = 'black';
        document.getElementById('line2').style.background = 'black';
        document.getElementById('line3').style.background = 'black';
        document.getElementById('line4').style.background = 'black';
        document.getElementById('line-right-1').style.background = 'black';  
        document.getElementById('line-right-2').style.background = 'black';  
        document.getElementById('line-left-1').style.background = 'black';  
        document.getElementById('line-left-2').style.background = 'black';  
        document.getElementById('center-image-holder').style.display == 'none';
        document.getElementById('center-appear-work').style.display = 'flex';
        document.getElementById('center-appear-about').style.display = 'none';
        document.getElementById('center-appear-tech').style.display = 'none';
        document.getElementById('center-appear-careers').style.display = 'none';
        document.getElementById('center-appear-contact').style.display = 'none';
        document.getElementById('center-line-1').style.display = 'none';
        document.getElementById('center-line-2').style.display = 'none';
        document.getElementById('sidesec-head1').innerText ="Branding";
        document.getElementById('sidesec-head2').innerText ="Digital";
        document.getElementById('sidesec-head3').innerText ="Tool-kit";
        document.getElementById('sidesec-head4').innerText ="Packaging";
        document.getElementById('sidesec-head5').innerText ="Space";
        document.getElementById('sidesec-head6').innerText ="EVP";
        document.getElementById('left-arrow-holder').style.display = 'flex';
        document.getElementById('right-arrow-holder').style.display = 'flex';
        document.getElementById('sidesec1').style.background = 'blue';
        document.getElementById('sidesec1').style.color = 'white';
    }
    else if(document.getElementById('sidesec-head2').innerText =="Digital"){
        document.getElementById('sidesec1').style.background = 'white';
        document.getElementById('sidesec1').style.color = 'blue';
        document.getElementById('sidesec2').style.background = 'blue';
        document.getElementById('sidesec2').style.color = 'white';
        document.getElementById('sidesec3').style.background = 'white';
        document.getElementById('sidesec3').style.color = 'blue';
        document.getElementById('sidesec4').style.background = 'white';
        document.getElementById('sidesec4').style.color = 'blue';
        document.getElementById('sidesec5').style.background = 'white';
        document.getElementById('sidesec5').style.color = 'blue';
        document.getElementById('sidesec6').style.background = 'white';
        document.getElementById('sidesec6').style.color = 'blue';
        document.getElementById('center-image-holder').style.display == 'none';
        document.getElementById('center-appear-work').style.display = 'none';
        document.getElementById('center-appear-about').style.display = 'none';
        document.getElementById('center-appear-tech').style.display = 'none';
        document.getElementById('center-appear-careers').style.display = 'none';
        document.getElementById('center-appear-contact').style.display = 'none';
        document.getElementById('center-line-1').style.display = 'none';
        document.getElementById('center-line-2').style.display = 'none';
        document.getElementById('center-work-digital').style.display = 'flex';
        document.getElementById('center-work-tool-kit').style.display = 'none';
        document.getElementById('center-work-packaging').style.display = 'none';
        document.getElementById('center-work-space').style.display = 'none';
        document.getElementById('center-work-evp').style.display = 'none';
    }
}

function aboutClicked(){
    if(document.getElementById('sidesec-head3').innerText =="About"){
        document.getElementById('center-image-holder').style.display == 'none';
        document.getElementById('center-appear-work').style.display = 'none';
        document.getElementById('center-appear-about').style.display = 'flex';
        document.getElementById('center-appear-tech').style.display = 'none';
        document.getElementById('center-appear-careers').style.display = 'none';
        document.getElementById('center-appear-contact').style.display = 'none';
        document.getElementById('center-line-1').style.display = 'none';
        document.getElementById('center-line-2').style.display = 'none';
    }
    else if(document.getElementById('sidesec-head3').innerText =="Tool-kit"){
        document.getElementById('sidesec1').style.background = 'white';
        document.getElementById('sidesec1').style.color = 'blue';
        document.getElementById('sidesec2').style.background = 'white';
        document.getElementById('sidesec2').style.color = 'blue';
        document.getElementById('sidesec3').style.background = 'blue';
        document.getElementById('sidesec3').style.color = 'white';
        document.getElementById('sidesec4').style.background = 'white';
        document.getElementById('sidesec4').style.color = 'blue';
        document.getElementById('sidesec5').style.background = 'white';
        document.getElementById('sidesec5').style.color = 'blue';
        document.getElementById('sidesec6').style.background = 'white';
        document.getElementById('sidesec6').style.color = 'blue';
        document.getElementById('center-image-holder').style.display == 'none';
        document.getElementById('center-appear-work').style.display = 'none';
        document.getElementById('center-appear-about').style.display = 'none';
        document.getElementById('center-appear-tech').style.display = 'none';
        document.getElementById('center-appear-careers').style.display = 'none';
        document.getElementById('center-appear-contact').style.display = 'none';
        document.getElementById('center-line-1').style.display = 'none';
        document.getElementById('center-line-2').style.display = 'none';
        document.getElementById('center-work-digital').style.display = 'none';
        document.getElementById('center-work-tool-kit').style.display = 'flex';
        document.getElementById('center-work-packaging').style.display = 'none';
        document.getElementById('center-work-space').style.display = 'none';
        document.getElementById('center-work-evp').style.display = 'none';


    }
}

function techClicked(){
    if(document.getElementById('sidesec-head4').innerText =="Tech"){
        document.getElementById('center-image-holder').style.display == 'none';
        document.getElementById('center-appear-work').style.display = 'none';
        document.getElementById('center-appear-about').style.display = 'none';
        document.getElementById('center-appear-tech').style.display = 'flex';
        document.getElementById('center-appear-careers').style.display = 'none';
        document.getElementById('center-appear-contact').style.display = 'none';
        document.getElementById('center-line-1').style.display = 'none';
        document.getElementById('center-line-2').style.display = 'none';
    }
    else if(document.getElementById('sidesec-head4').innerText =="Packaging"){
        document.getElementById('sidesec1').style.background = 'white';
        document.getElementById('sidesec1').style.color = 'blue';
        document.getElementById('sidesec2').style.background = 'white';
        document.getElementById('sidesec2').style.color = 'blue';
        document.getElementById('sidesec3').style.background = 'white';
        document.getElementById('sidesec3').style.color = 'blue';
        document.getElementById('sidesec4').style.background = 'blue';
        document.getElementById('sidesec4').style.color = 'white';
        document.getElementById('sidesec5').style.background = 'white';
        document.getElementById('sidesec5').style.color = 'blue';
        document.getElementById('sidesec6').style.background = 'white';
        document.getElementById('sidesec6').style.color = 'blue';
        document.getElementById('center-image-holder').style.display == 'none';
        document.getElementById('center-appear-work').style.display = 'none';
        document.getElementById('center-appear-about').style.display = 'none';
        document.getElementById('center-appear-tech').style.display = 'none';
        document.getElementById('center-appear-careers').style.display = 'none';
        document.getElementById('center-appear-contact').style.display = 'none';
        document.getElementById('center-line-1').style.display = 'none';
        document.getElementById('center-line-2').style.display = 'none';
        document.getElementById('center-work-digital').style.display = 'none';
        document.getElementById('center-work-tool-kit').style.display = 'none';
        document.getElementById('center-work-packaging').style.display = 'flex';
        document.getElementById('center-work-space').style.display = 'none';
        document.getElementById('center-work-evp').style.display = 'none';
    }
}

function careersClicked(){
    if(document.getElementById('sidesec-head5').innerText =="Careers"){
        document.getElementById('center-image-holder').style.display == 'none';
        document.getElementById('center-appear-work').style.display = 'none';
        document.getElementById('center-appear-about').style.display = 'none';
        document.getElementById('center-appear-tech').style.display = 'none';
        document.getElementById('center-appear-careers').style.display = 'flex';
        document.getElementById('center-appear-contact').style.display = 'none';
        document.getElementById('center-line-1').style.display = 'none';
        document.getElementById('center-line-2').style.display = 'none';
    }
    else if(document.getElementById('sidesec-head5').innerText =="Space"){
        document.getElementById('sidesec1').style.background = 'white';
        document.getElementById('sidesec1').style.color = 'blue';
        document.getElementById('sidesec2').style.background = 'white';
        document.getElementById('sidesec2').style.color = 'blue';
        document.getElementById('sidesec3').style.background = 'white';
        document.getElementById('sidesec3').style.color = 'blue';
        document.getElementById('sidesec4').style.background = 'white';
        document.getElementById('sidesec4').style.color = 'blue';
        document.getElementById('sidesec5').style.background = 'blue';
        document.getElementById('sidesec5').style.color = 'white';
        document.getElementById('sidesec6').style.background = 'white';
        document.getElementById('sidesec6').style.color = 'blue';
        document.getElementById('center-image-holder').style.display == 'none';
        document.getElementById('center-appear-work').style.display = 'none';
        document.getElementById('center-appear-about').style.display = 'none';
        document.getElementById('center-appear-tech').style.display = 'none';
        document.getElementById('center-appear-careers').style.display = 'none';
        document.getElementById('center-appear-contact').style.display = 'none';
        document.getElementById('center-line-1').style.display = 'none';
        document.getElementById('center-line-2').style.display = 'none';
        document.getElementById('center-work-digital').style.display = 'none';
        document.getElementById('center-work-tool-kit').style.display = 'none';
        document.getElementById('center-work-packaging').style.display = 'none';
        document.getElementById('center-work-space').style.display = 'flex';
        document.getElementById('center-work-evp').style.display = 'none';
    }
}

function contactClicked(){
    if(document.getElementById('sidesec-head6').innerText =="Contact"){     
        document.getElementById('center-image-holder').style.display == 'none';
        document.getElementById('center-appear-work').style.display = 'none';
        document.getElementById('center-appear-about').style.display = 'none';
        document.getElementById('center-appear-tech').style.display = 'none';
        document.getElementById('center-appear-careers').style.display = 'none';
        document.getElementById('center-appear-contact').style.display = 'flex';
        document.getElementById('center-line-1').style.display = 'none';
        document.getElementById('center-line-2').style.display = 'none';
    }
    else if(document.getElementById('sidesec-head6').innerText =="EVP"){
        document.getElementById('sidesec1').style.background = 'white';
        document.getElementById('sidesec1').style.color = 'blue';
        document.getElementById('sidesec2').style.background = 'white';
        document.getElementById('sidesec2').style.color = 'blue';
        document.getElementById('sidesec3').style.background = 'white';
        document.getElementById('sidesec3').style.color = 'blue';
        document.getElementById('sidesec4').style.background = 'white';
        document.getElementById('sidesec4').style.color = 'blue';
        document.getElementById('sidesec5').style.background = 'white';
        document.getElementById('sidesec5').style.color = 'blue';
        document.getElementById('sidesec6').style.background = 'blue';
        document.getElementById('sidesec6').style.color = 'white';
        document.getElementById('center-image-holder').style.display == 'none';
        document.getElementById('center-appear-work').style.display = 'none';
        document.getElementById('center-appear-about').style.display = 'none';
        document.getElementById('center-appear-tech').style.display = 'none';
        document.getElementById('center-appear-careers').style.display = 'none';
        document.getElementById('center-appear-contact').style.display = 'none';
        document.getElementById('center-line-1').style.display = 'none';
        document.getElementById('center-line-2').style.display = 'none';
        document.getElementById('center-work-digital').style.display = 'none';
        document.getElementById('center-work-tool-kit').style.display = 'none';
        document.getElementById('center-work-packaging').style.display = 'none';
        document.getElementById('center-work-space').style.display = 'none';
        document.getElementById('center-work-evp').style.display = 'flex';
    }
}

const show1 = document.getElementById('work-show-1');
const hiddenDiv1 = document.getElementById('work-hide-1');
show1.addEventListener('mouseover', function handleMouseOver() {
  hiddenDiv1.style.display = 'block';

});
show1.addEventListener('mouseout', function handleMouseOut() {
  hiddenDiv1.style.display = 'none';
});

const show2 = document.getElementById('work-show-2');
const hiddenDiv2 = document.getElementById('work-hide-2');
show2.addEventListener('mouseover', function handleMouseOver() {
  hiddenDiv2.style.display = 'block';

});
show2.addEventListener('mouseout', function handleMouseOut() {
  hiddenDiv2.style.display = 'none';
});

const show3 = document.getElementById('work-show-3');
const hiddenDiv3 = document.getElementById('work-hide-3');
show3.addEventListener('mouseover', function handleMouseOver() {
  hiddenDiv3.style.display = 'block';

});
show3.addEventListener('mouseout', function handleMouseOut() {
  hiddenDiv3.style.display = 'none';
});

const show4 = document.getElementById('work-show-4');
const hiddenDiv4 = document.getElementById('work-hide-4');
show4.addEventListener('mouseover', function handleMouseOver() {
  hiddenDiv4.style.display = 'block';

});
show4.addEventListener('mouseout', function handleMouseOut() {
  hiddenDiv4.style.display = 'none';
});