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
    arrowCheck();
}

function homeClicked(){
    if(document.getElementById('sidesec-head1').innerText =="Home"){
        document.getElementById('sidesec-head2').style.backgroundColor == 'blue';
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
}

function workClicked(){
    if(document.getElementById('sidesec-head2').innerText =="Work"){
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
        document.getElementById('sidesec-head1').style.background = 'lightgray';
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
}