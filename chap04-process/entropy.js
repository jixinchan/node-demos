#!/usr/bin/node

const err = console.error,
      log = console.log,
      stdin = process.stdin;

var j=0,
    arr = [],
    sum = 0,
    hp = 0,
    flag=true;

//主函数
function main(){
  if(process.argv.length<3){
    loopInput();
  }else{
    for(var p=2;p<process.argv.length;p++){
      arr.push(argv[i]);
    }
    errDeal();
  }
}

//错误处理
function errDeal(){
  arr.forEach(judgeOne(v));
  judgeSum();
  if(!flag){
    loopInput();
  }
}
function judgeOne(v){
  if(v<0||v>1){
    err('命令行参数错误：请输入0-1的数！');
    return false;
  }else if(!Number(v)){
    err('命令行参数错误：请输入数字！');
    return false;
  }
  return true;
}
function judgeSum(){
  for(var q = 0;q<arr.length;q++){
    sum+=arr[q];
  }
  if(sum<1){err('命令行参数错误：概率空间不封闭！');return false;}
  else if(sum>1){err('命令行参数错误：概率和超过1！');return false;}
  return true;
}

//逐行输入
function  loopInput(){
  log('请输入信源熵概率分布')
  log('p'+j);

  stdin.on('data',(data)=>{
    j++;
    log('p'+j);
    judgeOne(data);
    arr.push(data);
  });

  stdin.on('end',()=>{
    for(var m =0;m<arr.length;m++){
      num = Number(arr[m]);
      hp += -num*Math.log2(num);
    }
    log('p=',arr);
    console.log(hp);
  });
}
