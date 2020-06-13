// var iframe = document.getElementsByClassName('ivpring')[0];
var arrfile = [], leg=0,i=0, printBtn = document.getElementsByClassName("printBtn")[0];
function printFile(that){
  arrfile = event.target.files,
    leg = arrfile.length;
    printNext();
}
// 打印下一个
function printNext(){
  if(i>(leg-1)){
    alert('已经打完啦，么么哒！');
    location.reload(true);
    return;
  }
  var filePath = window.URL.createObjectURL(arrfile[i]);
  console.log(filePath);
  printJS(filePath);
  i++;
  if(i<=(leg-1)) printBtn.innerHTML = '打印第'+ (i+1) +'个文件';
}

// console.log(window.URL.createObjectURL(arrfile[0]))
//     // iframe.src = arrfile[i];
//     // iframe.src = window.URL.createObjectURL(arrfile[i]);
    
//     printJS(window.URL.createObjectURL(arrfile[i]));
//     // iframe.contentWindow.print();
//     // window.print()