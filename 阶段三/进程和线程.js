/**
 * 一个程序，读入内存，全是0和1构成
 * 从内存读入到 CPU 计算， 这个时候要通过总栈
 * 怎么区分一段 010101 的数据到底是数据 还是 指令
 * 总栈类分为三种：
 * 控制线
 * 地址线
 * 数据线
 * （主要看从哪里来地 寻址线
 * 
 * 一个程序的执行 首先把可执行的文件放到内存 首先是起始文件main 的地址，逐步读出指令和数据，进行计算写回到内存
 * 
 * 什么是进程？ 什么是线程？
 * 
 * 只要有一个程序进入 内存，称之为进程。一个程序可以🏃🏻‍♀️跑多个进程
 * 
 * 如果同一个进程内部有多个任务并发执行的需求（比如一边计算，一边接收网络数据，一边刷新界面）必须设立一种机制 让他并发
 * 
 * 多进程？可以实现但是毛病多 最严重的是 可以轻易的搞死别的进程 因为进程之间可以共享数据
 * 线程概念横空出世：
 * 
 * 进程是静态的概念：程序进入内存，分配对应资源（存储资源，网络资源），内存空间，进程进入内存，同时产生一个主线程
 * 线程是动态的概念：是可执行的计算单元，共享进程资源
 */