#!/usr/bin/node

const err = console.error,
<<<<<<< HEAD
      stdin = process.stdin,
=======
>>>>>>> 38a32c521fb06171884d07677510464e16cb658e
      sum=0，
      hp=0，
      arr=[];

if(process.argv.length<3){
  err('无命令行参数！');
}
for(var i=2;i<process.argv.length;i++){
  if(argv[i]<0||argv[i]>1){
    err('命令行参数错误：请输入0-1的数！');
    break;
  }else if(!Number(argv[i])){
    err('命令行参数错误：请输入数字！');
    break;
  }
  sum+=argv[i];
}
<<<<<<< HEAD
if(sum<1){err('命令行参数错误：概率空间不封闭！');}
else if(sum>1){err('命令行参数错误：概率和超过1！');}

stdin.on('data')

=======
if(sum<1){err('命令行参数错误：概率空间不封闭！')}
else if(sum>1){err('命令行参数错误：概率和超过1！')}
>>>>>>> 38a32c521fb06171884d07677510464e16cb658e

