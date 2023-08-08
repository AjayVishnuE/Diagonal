function arrowClicked() {
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
}

function homeClicked(){
    document.getElementById('center-image-holder').style.display == 'flex';
    document.getElementById('center-appear-downarrow').style.display = 'none';
    document.getElementById('center-image-holder').style.display == 'none';
    document.getElementById('center-appear-work').style.display = 'none';
    document.getElementById('center-appear-about').style.display = 'none';
    document.getElementById('center-appear-tech').style.display = 'none';
    document.getElementById('center-appear-careers').style.display = 'none';
    document.getElementById('center-appear-contact').style.display = 'none';
}

function workClicked(){
    document.getElementById('center-image-holder').style.display == 'none';
    document.getElementById('center-appear-work').style.display = 'flex';
    document.getElementById('center-appear-about').style.display = 'none';
    document.getElementById('center-appear-tech').style.display = 'none';
    document.getElementById('center-appear-careers').style.display = 'none';
    document.getElementById('center-appear-contact').style.display = 'none';

}

function aboutClicked(){
    document.getElementById('center-image-holder').style.display == 'none';
    document.getElementById('center-appear-work').style.display = 'none';
    document.getElementById('center-appear-about').style.display = 'flex';
    document.getElementById('center-appear-tech').style.display = 'none';
    document.getElementById('center-appear-careers').style.display = 'none';
    document.getElementById('center-appear-contact').style.display = 'none';
}

function techClicked(){
    document.getElementById('center-image-holder').style.display == 'none';
    document.getElementById('center-appear-work').style.display = 'none';
    document.getElementById('center-appear-about').style.display = 'none';
    document.getElementById('center-appear-tech').style.display = 'flex';
    document.getElementById('center-appear-careers').style.display = 'none';
    document.getElementById('center-appear-contact').style.display = 'none';
}

function careersClicked(){
    document.getElementById('center-image-holder').style.display == 'none';
    document.getElementById('center-appear-work').style.display = 'none';
    document.getElementById('center-appear-about').style.display = 'none';
    document.getElementById('center-appear-tech').style.display = 'none';
    document.getElementById('center-appear-careers').style.display = 'flex';
    document.getElementById('center-appear-contact').style.display = 'none';
}

function contactClicked(){
    document.getElementById('center-image-holder').style.display == 'none';
    document.getElementById('center-appear-work').style.display = 'none';
    document.getElementById('center-appear-about').style.display = 'none';
    document.getElementById('center-appear-tech').style.display = 'none';
    document.getElementById('center-appear-careers').style.display = 'none';
    document.getElementById('center-appear-contact').style.display = 'flex';
}