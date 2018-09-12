#!/usr/bin/node

//打印CPU架构
console.log("archetecture:",process.arch);
//操作系统版本
console.log("platform:%s\n",process.platform);
//进程id
console.log("pid:",process.pid);
//可执行文件的绝对路径
console.log("execPath:",process.execPath);
//标准输入流的读取让程序暂停执行
process.stdin.resume();
//打印 Node.js 版本信息
console.log("node version:",process.version);
//当前登录用户 id 信息，当前登录用户所属组 id 信息
console.log("uid:"+process.getuid()+"  gid:"+process.getgid());
//当前脚本所在路径信息
console.log("当前路径：",process.cwd());
//打印内存使用情况
console.log("rss:",process.memoryUsage().rss);
console.log("heapTotal:",process.memoryUsage().heapTotal);
console.log("heapUsed:",process.memoryUsage().heapUsed);
console.log("external:",process.memoryUsage().external);
//打印环境变量
console.log('env:',process.env);
console.log("logName:",process.env.LOGNAME);
console.log("hostName:",process.env.HOSTNAME);

