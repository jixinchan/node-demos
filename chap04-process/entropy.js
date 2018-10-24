#!/usr/bin/node

const err = console.error,
      log = console.log,
      stdin = process.stdin,
      sum=0,
      hp=0,
      arr=[];

var j=0;
function errDeal(){
  if(process.argv.length<3){
    err('无命令行参数！');
    return;
  }
  for(var i=2;i<process.argv.length;i++){
    if(argv[i]<0||argv[i]>1){
      err('命令行参数错误：请输入0-1的数！');
      return;
    }else if(!Number(argv[i])){
      err('命令行参数错误：请输入数字！');
      return;
    }
    sum+=argv[i];
  }
  if(sum<1){err('命令行参数错误：概率空间不封闭！');}
  else if(sum>1){err('命令行参数错误：概率和超过1！');}
}
log('p'+j);
stdin.on('data',(data)=>{
  j++;
  log('p'+j);
  arr.push(data);
});

stdin.on('end',()=>{
  for(var m =0;m<arr.length;m++){
    num = Number(arr[m]);
    hp += -num*Math.log2(num);
  }
  console.log(hp);
});

