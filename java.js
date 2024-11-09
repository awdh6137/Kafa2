var img=document.getElementById("photo");
var imgname=["032e90e9eb19cb371a7c74f8d94c6e29.jpg","57c6a2ad01f6f7acdb93023e12f94af8.jpg","566f7e2cad6c0193df4b8196ec040f2b.jpg"];
var counter=0;

function changeimage(){
    if(counter>=imgname.length){
        counter=0;
    }
    else{
        img.src=imgname[counter];
        counter++;
    }
}