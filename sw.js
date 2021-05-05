/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","9d5fdd3824650af24dbdad3e3c5ecc15"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","2817c8abd49a71ab4018ef4670e856fe"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","f53517a302f1db57e9ea0105433e03f1"],["/2020/03/26/计算机系统结构-实验1和2-遇到的问题/index.html","59d3e9b12de6bbf7e8786c3b5692138a"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","1c6eefabd63d261185b7ef6c4defa8d7"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","82bc80eb1517e48b27d6f67652d7af81"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","8ea7f862202dcbffb8b81daae9aa0fa4"],["/2020/04/18/机器学习-知识拓展-条件熵/index.html","372fa122da6f7740a8ca67eb95df4f58"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","12bb3783a4c074f31d93e5646fbfa686"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","4cb7841ec16ac0d18ed0ff5cd8205f8c"],["/2020/04/26/机器学习-实验-决策树/index.html","1e75f296a3750e98d2fed9ae4b75d922"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","7ebed94cd933c4b13ac6e715f2950bc1"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","bbdf9e4a29bb5d5a62caa59523885a4d"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","1cc27c1ab846584dc5dc81b704a0c643"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","502ec20905ff66dad1a69b59cd063452"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","38e87e1dc663b2b65849b48f73461f44"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","562c2dcd4dc2f0f5c8264c133e6aec35"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","af65616547e67082164a8dbea07a5616"],["/2020/06/11/机器学习-实验-DNN-手写识别/index.html","97e344bb310d972c54516a7b394b2d0c"],["/2020/06/18/大数据-习题/index.html","80cde12b3fd8f3052370e46aad0bab6d"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","32aa3034342fe01915416673debe030e"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","004a20acc56471563228e5be2ea7ad8b"],["/2020/06/24/Linux-拓展学习/index.html","971cfe42f89ab1684be16d5ac72514a6"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","12b7746ec50197faa39294d232459f59"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","9cb0f1164d9d9d4ceac8e505b83cb6c8"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","6013979362a1e9bfba774077da16c05c"],["/2020/07/15/C和C++的struct使用总结/index.html","f02a04c84acc15247ca269461d93d8df"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","6d05cff8258c5ff476ce25598a8f2cf5"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","c3344045c14a7e6e6376bdace27e4b99"],["/2020/08/10/机器学习-实验-花卉识别/index.html","6c044958e100184711a9c44672a9b485"],["/2020/08/15/Python-项目集锦/index.html","33bb466608876b01ddb0f653845d260f"],["/2020/09/01/编译原理-词法分析/index.html","11a13336c861dce64093718036a2a74c"],["/2020/09/02/编译原理-语法分析-LL1/index.html","b4594801378a682a1db57f5a0d6055b9"],["/2020/09/02/编译原理-语法分析-LR/index.html","bbee9db86c22361c93a3136e01bf02a1"],["/2020/09/03/操作系统-内存管理/index.html","2f336fdc53f88ab169caa0f0c715d4a6"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","14098723b9b161eeb59afb09c708ff73"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","9aaa19d5bde18e12acd81d4fcd0dc138"],["/2020/09/04/CSAPP-实验集锦/index.html","c73d763bfec453007b70eeecef6536e1"],["/2020/09/10/计算机网络-实验集锦/index.html","c0b483c9d5eaa210d5f6f90402c14104"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","e7757c1aa6b78fb6729f7fcb7862228c"],["/2020/09/30/C++工程项目-JobShop/index.html","127a67feed3c50d7fcc29e10be9f5fc7"],["/2020/10/09/交换原理-实验1-时间表调度实验/index.html","70113a2fbcb45935ded1eb57e871ee3f"],["/2020/10/09/交换原理-实验2-摘挂机检测实验/index.html","62c85ad765cfac1de210f97270e0b5d1"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","91a5dcceb2eebe71287e7722d9a65100"],["/2020/10/09/交换原理-实验4-拨打SIP电话/index.html","f86f79f9bd493ecfa2e6b8b3f079ae0e"],["/2021/01/04/Android-项目集锦/index.html","277a081609c77d6cb24dad0777cc414d"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","acb6f3c911445a7e64ea11fcc6b52f35"],["/2021/01/04/C++工程项目-travel/index.html","5ca39d2f988fe04a38d36d449d5b1f50"],["/2021/01/04/算法设计-分治-最接近点对/index.html","012b3eba52c4fc316720c231cc30db6c"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","efc4a741d9730ae83a20e0d08dbf0cdd"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","aeb06bc2cc0054676551d7e41b256e18"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","53b741bf124e7c017d08af77a7743aaf"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","04cf62f8e2904d5d598ccea063a339a2"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","b35028f9f1ac569e0504bf05b0b9a967"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","8c95e76e500d8cf7c3edec03931dfa18"],["/404.html","510f20ba3a47928a302d1e8b2bb1184f"],["/about/index.html","05a26731d9eed197e7c3f6e9ed5ce7db"],["/archives/2020/02/index.html","b2322e0965d2a8474d02e6c97426df2a"],["/archives/2020/03/index.html","41d946c0c1a16d6bd1984a123b6b5f26"],["/archives/2020/04/index.html","d2c678e724d7f3b7e47f698c2d8066b9"],["/archives/2020/05/index.html","7600abb5b9f64d04901b381522c5e5d3"],["/archives/2020/06/index.html","7e6c3d3600d617f5d7bd33718ed0dbbd"],["/archives/2020/07/index.html","18c3fa11cb46c012c40c451fbe15e950"],["/archives/2020/08/index.html","f12e38bdbf4d3988f34d9916dd2ff400"],["/archives/2020/09/index.html","c60aab77aa0c4feb3e5589b9e740ac9c"],["/archives/2020/10/index.html","e7b8f564eea3179ac73e770d6f0655b0"],["/archives/2020/index.html","d0144176dce4ceb2eeefb076236ea882"],["/archives/2020/page/2/index.html","4e412e2dbc261e31bc9f368bb9991210"],["/archives/2020/page/3/index.html","2148ff3b7a9aa3b779adf30bb038b79b"],["/archives/2020/page/4/index.html","b5dee41dc10c5d85e93e5a31d1b8fd85"],["/archives/2020/page/5/index.html","7f775cd4310aad65dab7f1663a99b2a9"],["/archives/2021/01/index.html","d8536a5b94d9a8e311bfab1aed681d9e"],["/archives/2021/index.html","d7864e9c118468b6f99927e93c490fd6"],["/archives/index.html","dcd37aa6e2a80e4812fbebe7c4b38c82"],["/archives/page/2/index.html","dcd37aa6e2a80e4812fbebe7c4b38c82"],["/archives/page/3/index.html","dcd37aa6e2a80e4812fbebe7c4b38c82"],["/archives/page/4/index.html","dcd37aa6e2a80e4812fbebe7c4b38c82"],["/archives/page/5/index.html","dcd37aa6e2a80e4812fbebe7c4b38c82"],["/archives/page/6/index.html","dcd37aa6e2a80e4812fbebe7c4b38c82"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/bb/index.html","24da6baf708292a02e48cd57e4264ce8"],["/categories/C-C/index.html","2024cad2dcb7135e687d2409fbde8b20"],["/categories/C-C/page/2/index.html","ac39df50d80deeaa057c1829e03f7b66"],["/categories/C-C/拓展学习/index.html","5a9d858794479e046d2d0c96a4cf5600"],["/categories/C-C/操作系统/index.html","3108b009ddb0cceed13cb21291604e32"],["/categories/C-C/算法设计/index.html","089f3db10f43334c320b972669436384"],["/categories/C-C/编译原理/index.html","36bebb267baf612d0a9da3fff664ba53"],["/categories/C-C/软件工程/index.html","e393f11b8e82244084a6fe0d5bad3c8f"],["/categories/C-C/项目/index.html","2c1e0f4927f8e503b47bc695708a8a2b"],["/categories/Java/Android项目/index.html","b98bc32da38505f666ba2ebf896118c6"],["/categories/Java/index.html","4b746193cc918f2cb78161f15ee6e670"],["/categories/Linux/index.html","496ce0de245ccc1600d2159e7673b555"],["/categories/Linux/上机实战/index.html","8b450f3e37fda8cc5cc027d1c9c00f01"],["/categories/Linux/习题/index.html","7788ab38e7885dc5fca475e7668609ca"],["/categories/Linux/拓展学习/index.html","e37ebdd85cfc35c6ed451a5ff3248bea"],["/categories/Python/index.html","aed4b2aa41f9d71b946a9ea3d6a18d73"],["/categories/Python/爬虫/index.html","192119c60e242d413dfa2032068c89e7"],["/categories/index.html","6735275092614480f85c8ad26427794e"],["/categories/交换原理/index.html","7b16fa3e20ad314543dafd80a5cdf75a"],["/categories/交换原理/实验/index.html","192809d04a3271b86c80f83f16cad3a3"],["/categories/其他/index.html","d4d187606abc939fc7ceaa1728048dd5"],["/categories/大数据/index.html","c85654cd5fc102b51d0ecd9e8ffa086d"],["/categories/大数据/习题/index.html","fc0365a77054462088c3751f97aeda04"],["/categories/大数据/实战/index.html","3274456cd0bbdecddd5cfa82dea9285d"],["/categories/机器学习/index.html","396a4f4bf8e89e3cbd57085aac142eaa"],["/categories/机器学习/实验/index.html","4d4b760bd6122ff8218239fc2c4d674f"],["/categories/机器学习/知识拓展/index.html","d531a2ab58e034f7362dc07039c237cf"],["/categories/现代交换原理/index.html","bfcdf55f8fe8dc7d1c96c1e52dca4e82"],["/categories/现代交换原理/习题/index.html","6ac5b48a2746d52d311faed93999608b"],["/categories/计算机系统结构/index.html","1527159ed3d1a4720e64806cecd15a1e"],["/categories/计算机系统结构/实验/index.html","d9fd6fb67dc93dccc69abcb306f5f878"],["/categories/计算机组成原理/index.html","ad9ee22f77ae379a51e00ddda2390a10"],["/categories/计算机组成原理/实验/index.html","3744c6a3e49229c66b7dc3728b7e5261"],["/categories/计算机网络/index.html","10bd038285efcf175703170d5fa85f88"],["/categories/计算机网络/实验/index.html","5bde246f25f1771c66ab32e34be8666e"],["/categories/集锦/Android/index.html","9a29efecde39584460d06338b187d5d1"],["/categories/集锦/CSAPP/index.html","2a42099138a6161236681f3f901b43a1"],["/categories/集锦/Python/index.html","d8e58b4c1ef120d13f5eec72b1e23bfd"],["/categories/集锦/index.html","29a2ad5ac0da2089275b5b32f5b66503"],["/css/first.css","ac2d0010102d22ded3aa536d16e52b73"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/message.css","b0ce3ca232f809c8d7a85c79bf1f7ff8"],["/css/style.css","f33cadc59019a1af1d898b222bf512f6"],["/friends/index.html","f8628cd9e2b529408e41cb89e325d974"],["/gallery/index.html","63f4bc7639ebb10460b077618443184f"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","01323ecf34c5d880d920e4cc78d99fd9"],["/js/aplayer.js","f10ee7aff4ce278045da925ac6510d29"],["/js/app.js","d14976ee97145aa14568c13c6554dcc4"],["/js/jquery.parallax.min.js","38cf4791e24aeaa8101bd2c816400718"],["/js/message.js","38da736cdf513c9a15a0a2a16a34eeae"],["/js/plugins/contributors.js","23ba3efa08d9fb1aae753ceaa6df2711"],["/js/plugins/friends.js","239cf9c648af390f866ed00cead3e23d"],["/js/plugins/sites.js","15bb31fc27abc888b17cc5d822808604"],["/js/rightMenu.js","19b2a577c30a04732f02b86bda62e0b9"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","b5c2e1848c6a8bb80af7d7a45a9c29a8"],["/page/2/index.html","d551a812c26a6b6c7b6fa067bf142639"],["/page/3/index.html","1c19bcd9c0489c163f13143ed74b2f31"],["/page/4/index.html","c9bacdee13eab6e3eb411de9cb08c5de"],["/page/5/index.html","504f3a54f63f302876872515071c5699"],["/page/6/index.html","4e323f395f4b8ebcdaccc6c61c711439"],["/shuoshuo/index.html","5fb62e5fff4cb662334010adb9f10f3b"],["/sw-register.js","20556afbe5fc6307d5108567713798c3"],["/tags/AI/index.html","13ad640bd6ea74fec99879699e7e5e98"],["/tags/Android/index.html","f64458a8edad68c6f5c35404029e837f"],["/tags/C/index.html","5020a367ae44149b0f69d4612cdb2b37"],["/tags/C/page/2/index.html","394cfdcd8dee9a019434b0cd8c4750d2"],["/tags/C99/index.html","92570f2672d55d23dd578fe621be3e19"],["/tags/CSAPP/index.html","d9679133d0ac9f9fc2a72c88dfbf1115"],["/tags/DNN/index.html","732ceb26c652e2654cc333f69f1a65f7"],["/tags/DNS/index.html","051491a8bbc0b784f8b1581dce35bcdc"],["/tags/FPGA/index.html","45183fdd7d885c0990e41595c699676d"],["/tags/HDFS/index.html","29483900a098c16c230e2e3b4dff2c98"],["/tags/Java/index.html","4e6ac3616d06756f605923b66cee77c7"],["/tags/JobShop/index.html","13e2a5f86be0375af941472b5629290c"],["/tags/K-Means/index.html","1c95e487c09e9e0f5f29a27d4c8518fa"],["/tags/Kafka/index.html","237da51b9629f30d8e195f17c8c093d5"],["/tags/LL1/index.html","3211ac8886c3375a2af77234369dd913"],["/tags/LR/index.html","bef26f65a8af21ccfcf0f185477b38ac"],["/tags/Linux/index.html","5ff82ddd1fafe1773ed68775a0a5b976"],["/tags/MIPS/index.html","d6fcde90f7a1898f5f97c083bfb7de31"],["/tags/MOOC/index.html","bff74123c8ee0cdb3b4a8883482b6493"],["/tags/MPLS/index.html","3ede6c61d45ec9558ed031da3d4313bd"],["/tags/MapReduce/index.html","0956b91961dd0e42f8791d1c12cee770"],["/tags/Matplotlib/index.html","eb2262d96fdb31f301dd0d071d09846b"],["/tags/MiniSYS/index.html","2ae0d2e0005dca8d0014ae443de41acf"],["/tags/Python/index.html","711fc7b09f8c87bcb0ea5d9cd108edb5"],["/tags/QT/index.html","7dafe87ddfd11828e4aec9ece01ad3d7"],["/tags/RNN/index.html","6044badf7ec784584504543ff9b2019e"],["/tags/SIP/index.html","d9cf017482488a8a63539befac6e6b14"],["/tags/Scala/index.html","a8d896d110b320f21057387818476646"],["/tags/Shell/index.html","33ae4dec8bd4786c51f6dddbd48c70fa"],["/tags/Spark/index.html","a4f78507fd118ecc1ec23d8fb8414160"],["/tags/Streaming/index.html","3b2e4ea30778fb707bebe0880f09cc14"],["/tags/Struct/index.html","7d90b831c33daee3fd920f7071649e0d"],["/tags/Verilog/index.html","629619506b4ff951c5fe85c444bc1dfb"],["/tags/first/index.html","380729f76df48e894a774433287834a5"],["/tags/iPython/index.html","e951bf54c919ed486988f78c7fc3bb11"],["/tags/index.html","f07dd0b4eaa9dc20ee086ea49a097a21"],["/tags/ls/index.html","e5a7dd3ce8ba2208b35c979915e3c539"],["/tags/习题/index.html","f2e17384526adf34931474d94cd9b631"],["/tags/交换原理/index.html","44bc2fb058912ccd635a12b99b98ac79"],["/tags/人工智能/index.html","106e3c0f8ebc65a97f2d3a770832ff74"],["/tags/信号量/index.html","6b79e3b194605c5c8e1192e3b0725744"],["/tags/内存管理/index.html","768df40dffe92085e1eb45e91c94a2cd"],["/tags/决策树/index.html","f298f818439e355b2e379c19ec0c5c01"],["/tags/分治/index.html","b9f2ab2fd6b8f989060376892c34ba49"],["/tags/分类/index.html","7e477c4f97167ba093431cd73c170ae4"],["/tags/动态规划/index.html","09bde920eb72f5342ed2b412c34b4362"],["/tags/华为云/index.html","2675e506f931f9cf87a705d4cef02086"],["/tags/单词计数/index.html","48dcf70b5000ef117563c32b8b6d1cca"],["/tags/可视化/index.html","76865edea97bc24578080bcd3c019029"],["/tags/同步互斥/index.html","d538451eaad50e59da41191bec4b94d5"],["/tags/大数据/index.html","1910f40ecbdf49309fe7ce53be851905"],["/tags/学堂在线/index.html","0325af19462bd19af0ef8e3beb83220b"],["/tags/实战/index.html","3ce81dce5d6cfbd5d872cd42c38a86cd"],["/tags/实验/index.html","e739d3f8a0134231482aad0649588d54"],["/tags/实验/page/2/index.html","077f695a416fa08819be5ecb27b6bdcb"],["/tags/小游戏/index.html","a73a6fdec7ca8f73ca4d4f2557a37337"],["/tags/工程/index.html","e92ba42f9b211512cbdb0592094e709f"],["/tags/工程/page/2/index.html","4562943b6d547e959765684680b7be71"],["/tags/手写识别/index.html","4f7922a58b6c8e1c8a0e35c0f7c1b8a0"],["/tags/拓展/index.html","4d18feddc1d7f770bfcbeed0b6a0ffaf"],["/tags/操作系统/index.html","7a2452b07b8fe94c493c092d3ddfea88"],["/tags/数据处理/index.html","faedabbb1589a2cbae185064f040a37e"],["/tags/日志分析/index.html","a019664b5b42784136e38ba748efd4f9"],["/tags/易错点/index.html","aed984b17356abd1c94ed0298db813dc"],["/tags/机器学习/index.html","fa8a12052091c4461c93e58be3984c5b"],["/tags/条件熵/index.html","e078a3eccff98130317df701fb7afe02"],["/tags/正则表达式/index.html","e7362d67f8839b6dc971fa4fc7fb3843"],["/tags/汇编/index.html","19530d93b4e701a1892c1b7ce3eeac81"],["/tags/流计算/index.html","9454d8afdc6f356951011770fd0b1271"],["/tags/爬虫/index.html","d0e918bf2635c8bf5fc8b39d04685726"],["/tags/现代交换原理/index.html","3553af3677646fdfa40d8b0556707e64"],["/tags/生产者消费者/index.html","b689da7e679a79b5c57c64ca49274eac"],["/tags/知识/index.html","c687805171771c24b4c67ef01de41402"],["/tags/算法设计/index.html","2258411544f87a19710425b7e41667e6"],["/tags/线程/index.html","a9c3f2c5a8c3e3877a00034c6daf8332"],["/tags/编译原理/index.html","001992544cf5d03883e1f6a16b7c6954"],["/tags/网课/index.html","155fe1b104a4acfb64d8157024a02541"],["/tags/聚类/index.html","fe53af403a495c52d6097588e38c37cb"],["/tags/脚本/index.html","7f8d6647e0579914fdaf4b4814b290c9"],["/tags/计算机系统结构/index.html","cd0a3884de2fb7ae4aca3710cd622d7d"],["/tags/计算机组成原理/index.html","1bb1b40b342624d7391510a679134dbc"],["/tags/计算机网络/index.html","0c3fc7ad28a753ee9a986d2b26b72858"],["/tags/词法分析/index.html","c7add22b724781c4bcc09881088c7577"],["/tags/语法分析/index.html","163c6cf275e5d4943b5a28ed3a9d1067"],["/tags/读者写者/index.html","5df864002151fea023e83a6a5b252e09"],["/tags/课程/index.html","0b3fc44875d1a5c68d7c8f17490b14b5"],["/tags/起名字/index.html","f0bc4d9da76d03e207bb67c8bcfb272f"],["/tags/软件工程/index.html","5379e3f56db013f2cc56a4dcf36ea415"],["/tags/进程/index.html","246cb2f7940b0c653020231963f2bcbb"],["/tags/通信/index.html","61f1243f0700fbe93a594475135a062f"],["/tags/遍历目录/index.html","1d60931af94b6de1af62a8b882b230d9"],["/tags/难点/index.html","b5446514a002362365c57f82ba3e4f20"],["/tags/项目/index.html","fad8d738b71c36d4a85f1fc1bde24870"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });



// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache 配置转换后的 toolbox 代码.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"unpkg.com"});
toolbox.router.get("/npm/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});





/* eslint-enable */
