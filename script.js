function QRCodeGenerator(){
    var userInput = document.querySelector('textarea').value;
    var chartAPI = 'https://chart.googleapis.com/chart?cht=qr&chs=300x300&chld=H&chl=';
    var qrCodeContent = chartAPI + userInput;
    document.querySelector('#QRCodeImage').src = qrCodeContent;
}