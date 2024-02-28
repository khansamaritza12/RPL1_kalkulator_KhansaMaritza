//insert
function insert(num){
    document.form.textarea.value=document.form.textarea.value+num;
}
//hitung
function equal(){
    var hasil=document.form.textarea.value;
    document.form.textarea.value=eval(hasil);
}
//clean
function clean(){
    document.form.textarea.value="";
}
//back
function back(){
    var hasil=document.form.textarea.value;
    document.form.textarea.value=hasil.substring(0,hasil.length-1);
}
