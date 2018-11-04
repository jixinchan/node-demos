#!/usr/bin/node

const err = console.error,
      log = console.log,
      stdin = process.stdin;

var j=0,
    arr = [],
    sum = 0,
    hp = 0,
    f1=true,
    f2=true;

//主函数
function main(){
  if(process.argv.length<3){
    loopInput();
  }else{
    var p;
    for(p=2;p<process.argv.length;p++){
      arr.push(process.argv[p]);
    }
    if(arr.every(judgeOne)&&judgeSum()){
      getResult();
    }else{
      loopInput();
    }
  }
}

//错误处理
function judgeOne(v){
  if(v<0||v>1){
    err('命令行参数错误：请输入0-1的数！');
    return false;
  }else if(!Number(v)){
    if(v.indexOf(',')&&!v.indexOf(' ')){
      //log('argv:',v);
      judgeS(v);
      return true;
    }else if(v.indexOf(',')&&v.indexOf(' ')){
      err('命令行参数错误：参数之间分隔符错误！');
      return false;
    }else{
      err('命令行参数错误：请输入数字!');
      return false;
    }
  }
  return true;
}
function judgeSum(){
  sum=0;
  for(var q = 0;q<arr.length;q++){
    sum=sum+Number(arr[q]);
  }
  //log('sum:',sum);
  if(sum<0.99999){
    err('命令行参数错误：概率空间不封闭！');
    return false;
  }else if(sum>1){
    err('命令行参数错误：概率和超过1！');
    return false;
  }else{
    return true;
  }
}
function judgeS(v){
  arr = v.split(',');
}

//逐行输入
function  loopInput(){
  log('请输入信源熵概率分布')
  log('p'+j);
  arr=[];
  stdin.on('data',(data)=>{
    f2=judgeOne(data);
    if(f2){
      arr.push(data.toString('utf8').substring(0,3));
    }else if(!f2){
      j--;
    }
    j++;
    log('p'+j);
  });
  stdin.on('end',()=>{
    if(judgeSum()){  
      getResult();
    }else{
      log('概率空间不封闭，无效的信源熵计算！');
    }
  });
  return;
}

//得结果
function getResult(){
  for(var m =0;m<arr.length;m++){
    num = Number(arr[m]);
    hp += -num*Math.log2(num);
  }
  log('p=',arr);
  console.log('h(p)=',hp.toFixed(3));
}
main();
