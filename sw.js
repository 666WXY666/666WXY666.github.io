/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","39fd1dae60103870868d4416656a42be"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","b77d09ce4ee42f64f35b2e4bf76d8758"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","895ac44aed264d68cd8da622b2a0479e"],["/2020/03/26/计算机系统结构-实验1和2-遇到的问题/index.html","06a97f812b77011a7d89b284228e6b69"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","7f38e90ef4cbc9ec76e17811f174ba4c"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","e78d635ea2072ca961f1b4016ce93143"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","e20e4e5d487994ad4ac07141ffc5df23"],["/2020/04/18/机器学习-知识拓展-条件熵/index.html","46171a1f977686d0b4ac4903b636f060"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","a581d188f5c350b6d8672c541ff99fd9"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","445f75d7ff9879be49e4ce25c124b1b0"],["/2020/04/26/机器学习-实验-决策树/index.html","eb8d7b33c479b893dec9391a648fdb60"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","2d3c4891ba9eff6f9cb2a92b8e4809b0"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","da785a277256132afbfb153ad8b4dfa9"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","15bde420e8b12180acaedf0abf9b1c33"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","6d43ec0002957ecca143b4201c6313f7"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","7dafd26a89070793e7c1aeef4f239072"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","34331900a2379dc3d81ed271aab3b1f1"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","27560389c114040645b01358845bd086"],["/2020/06/11/机器学习-实验-DNN-手写识别/index.html","a59639d33df2ab428c7d317de25e7901"],["/2020/06/18/大数据-习题/index.html","ad98195a698343f1c262c0badad1074d"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","6a723b0980eec5d9b9bfef7dc006de8a"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","1cbc96f55ac0ddbd98f0ad6cbb8636b6"],["/2020/06/24/Linux-拓展学习/index.html","260fee207d55a587fbc4662198272ade"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","19a9c24733c19f27a07a4b52b277d82c"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","c52b38c1c808e50b0b2969542700f920"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","04f591050f43b2e2807ff1ea26481342"],["/2020/07/15/C和C++的struct使用总结/index.html","f72dea77fed1a54d64825ac2676ab86c"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","7834b7155183f61e64fee1a9186f2bb6"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","2e580033f1a5deae99a9d19a66fa5ae7"],["/2020/08/10/机器学习-实验-花卉识别/index.html","7d8353351543d7e38486bf84c77d0942"],["/2020/08/15/Python-项目集锦/index.html","2a874654691f1fb35d1d79542595c76b"],["/2020/09/01/编译原理-词法分析/index.html","95b63bbdb93df7aae9e7035030f8e88f"],["/2020/09/02/编译原理-语法分析-LL1/index.html","155ea863f31727fa8f46743c6854dd71"],["/2020/09/02/编译原理-语法分析-LR/index.html","d95e14120496f3e539b164ab1e22b212"],["/2020/09/03/操作系统-内存管理/index.html","8f136eaadd53e423b9ce52636a44f83a"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","3e018100ab6184ed0777cff87b333550"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","48782fa4d0c4887729ff8cc0431d39a7"],["/2020/09/04/CSAPP-实验集锦/index.html","b3db4a3dba6e0a71f81d138e2274ed89"],["/2020/09/10/计算机网络-实验集锦/index.html","c9de341205f4f8d4e9b031cd5ee61570"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","5ccd37b0324891e14962590767d151dc"],["/2020/09/30/C++工程项目-JobShop/index.html","0bc03effb401f3902a30cfe3c29344ff"],["/2020/10/09/交换原理-实验1-时间表调度实验/index.html","4fa4ac221a03fb38188a85932f84f57a"],["/2020/10/09/交换原理-实验2-摘挂机检测实验/index.html","44384841d4bc7a04779c964662e28d2c"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","d2aae25824bf3c4cdbf40bbb6276a96a"],["/2020/10/09/交换原理-实验4-拨打SIP电话/index.html","34c3059aac0db58e2e2b2bd6b9045a14"],["/2021/01/04/Android-项目集锦/index.html","d6dca7464ca9703ab454fbb1d5b9dfff"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","1ca7c50da22f6e5adcb57f75d09e2c96"],["/2021/01/04/C++工程项目-travel/index.html","f0da1375a47a48dbab913acf339b8b6d"],["/2021/01/04/算法设计-分治-最接近点对/index.html","d30456e733460a7035b8eed3a8b21ab8"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","673d930d5617cc12544d79f1ab714ac4"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","392a674442347da1814c390d5644716a"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","5b2f4f0a534e56ec1e88fb208f85e3f7"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","cee672822e712b6b12a2a7310c7ee9d5"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","b0514be3415ff5e4593b110207cc9e05"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","a5b3ddc4e4cd02d83c26d613cbf91f95"],["/404.html","849ff1587826cbda370271647ddb3aa7"],["/about/index.html","e17654e0c6bf9c99f1b50a6ac500bd89"],["/archives/2020/02/index.html","b6ca73a084428640acff6b8dfdf76cc5"],["/archives/2020/03/index.html","7c5b6f278a98c71824ae8adfca4f2376"],["/archives/2020/04/index.html","77731aebd935a8924ada503fe8b0ad40"],["/archives/2020/05/index.html","578e9f734fbbf3b7b3e726ef090d099b"],["/archives/2020/06/index.html","9e89b3abaa022e0dc87ccce2b55ea419"],["/archives/2020/07/index.html","f3dc99de46479214bad93e733d30e71b"],["/archives/2020/08/index.html","fe8afef6a718138512d28b44e24e934a"],["/archives/2020/09/index.html","41f35b787c399147cd3507a00856849f"],["/archives/2020/10/index.html","3b93ba1d406575868121cb94e55ad8e4"],["/archives/2020/index.html","7ceccf2c26c6268d0730e8bddbd446af"],["/archives/2020/page/2/index.html","be4af094fc9dae05cbc37683b921d56e"],["/archives/2020/page/3/index.html","512e9ba2e4357fbe2fe9411c714b7b25"],["/archives/2020/page/4/index.html","e4abcc645094e4a7c6734d47da6cb018"],["/archives/2020/page/5/index.html","1acec53fbcdf344c3000d2275cfd1d81"],["/archives/2021/01/index.html","a6855ec473119a57f9b638f882f67770"],["/archives/2021/index.html","166b3ad5eafc1787e5296975c3d1e250"],["/archives/index.html","59dde517d0956975063c0660c87b8308"],["/archives/page/2/index.html","59dde517d0956975063c0660c87b8308"],["/archives/page/3/index.html","59dde517d0956975063c0660c87b8308"],["/archives/page/4/index.html","59dde517d0956975063c0660c87b8308"],["/archives/page/5/index.html","59dde517d0956975063c0660c87b8308"],["/archives/page/6/index.html","59dde517d0956975063c0660c87b8308"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/bb/index.html","cf4097fe250e7ea234d0e460d06dbbcd"],["/categories/C-C/index.html","1f4352bf37032c6851fc165ae10e59bb"],["/categories/C-C/page/2/index.html","620b09656cae87d67b89d7dd8cc3b00c"],["/categories/C-C/拓展学习/index.html","9f2a530cc33819fb3fca8a1a90f2eca0"],["/categories/C-C/操作系统/index.html","dfa15558e7d77fa56b16e517816ad541"],["/categories/C-C/算法设计/index.html","45602e89eae7bdb6eb512371bdf394e3"],["/categories/C-C/编译原理/index.html","d5da4b39decd0744fa6a09c57bc32113"],["/categories/C-C/软件工程/index.html","88dc97c00684ea314c2e41eb97d716c2"],["/categories/C-C/项目/index.html","98460dba44ae75a747a347dac5eb53b9"],["/categories/Java/Android项目/index.html","8d1aa67d570bac04f9fc1fe3bf5edb14"],["/categories/Java/index.html","2b873a749055446e774d105689a6747f"],["/categories/Linux/index.html","ed54b38e9d42b98ac1352fed49f11b7d"],["/categories/Linux/上机实战/index.html","09221db5f40949acca199a6b82c46b54"],["/categories/Linux/习题/index.html","620daa61a968d972b275e685bd6905ff"],["/categories/Linux/拓展学习/index.html","c65b679e709650545230fd1567be4682"],["/categories/Python/index.html","b017fd80a7cf877b515623bd405a958e"],["/categories/Python/爬虫/index.html","470b16101f1c578543c3c8e93473addc"],["/categories/index.html","c1ac080b46f6ae9b2bd9f7d42b858e3f"],["/categories/交换原理/index.html","2d5f62e47e3da125ef36e98d565d5f01"],["/categories/交换原理/实验/index.html","310ba258c0e21d4514d811b7e12427c8"],["/categories/其他/index.html","62505528a8f6b43bf9cc1531740b34a9"],["/categories/大数据/index.html","5203c1557e0e69e7ae095a0c981dd66d"],["/categories/大数据/习题/index.html","de8c3715c3f4bde698bec09af0a544b5"],["/categories/大数据/实战/index.html","79c97997e1fedbd402afc1f0ddd68112"],["/categories/机器学习/index.html","5f65929b2483b81d191d6f83c118c2c1"],["/categories/机器学习/实验/index.html","6f2559dfd9fef5b31a26265061a2388b"],["/categories/机器学习/知识拓展/index.html","3a708efad66eed9a089cd97423729cc3"],["/categories/现代交换原理/index.html","608988be788ee52b72412fd6d93df507"],["/categories/现代交换原理/习题/index.html","eaac364f3914f5f76f8bc0b20f16b45a"],["/categories/计算机系统结构/index.html","35116144645a494dc07ea6f72610070e"],["/categories/计算机系统结构/实验/index.html","3f92e09fb28ce9dc6f4391a8431a3697"],["/categories/计算机组成原理/index.html","b1dac845dde6989189d7514156025805"],["/categories/计算机组成原理/实验/index.html","2ff9dc8286657b667ccdb36fb19760d0"],["/categories/计算机网络/index.html","9c3acc29c3a6c69c2fc027d21bd168e2"],["/categories/计算机网络/实验/index.html","0ba5ece9d69b8801a71b4b0bd0f06514"],["/categories/集锦/Android/index.html","14d01c97224cbbdf7ea2aaf20c324d7c"],["/categories/集锦/CSAPP/index.html","67f868abd2a2a4e13e111e48470d39ad"],["/categories/集锦/Python/index.html","065c1facc1e6ae7044da6ca34d2f0d29"],["/categories/集锦/index.html","ef21e87f462d51381475783f7e38371b"],["/css/first.css","01a90baf99fa8f190becabd973782198"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/style.css","29bd14d027343cdf06b66cce6bf66453"],["/friends/index.html","05bbc66094d5a63ca324130eeecfd372"],["/gallery/index.html","63f4bc7639ebb10460b077618443184f"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/games/tank/index.html","a4a2448b8b53e14bf7bad5c1f71e614a"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","6b69e9cc8abfd81010503d0870b6064f"],["/js/aplayer.js","6e605f0855251e101d3024646f3eac60"],["/js/app.js","1948329f2fd7e750ade4bdc49138c09b"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","5c725b62ff7f212a1ac5093c9fec76cb"],["/page/2/index.html","0acccbfd24b069b2bfc22aa1451ab527"],["/page/3/index.html","55f473bf271f824325e9e99725ab248c"],["/page/4/index.html","ead9e84ac80275794ee169f1f9b02b39"],["/page/5/index.html","90526b318c31faf3cfe8862f9ea55ad9"],["/page/6/index.html","81c455fec83b7479bd5b542f0d796e1a"],["/shuoshuo/index.html","2308f840ef0ba929565f8eda2f132590"],["/sw-register.js","bbff793154de803891ee66b9a0871237"],["/tags/AI/index.html","79e45162971bed26c819b0659bfe20cc"],["/tags/Android/index.html","0093db830c29101a15ffd990df03b5b5"],["/tags/C/index.html","1efe79eb8c82478926f1a403ed3acc9b"],["/tags/C/page/2/index.html","802de095ef60a63a4bbb9af6ac751a72"],["/tags/C99/index.html","16d3e9862384546f22c1f95721bc982c"],["/tags/CSAPP/index.html","815e9e8b4d81d75df18c56eff21a1d30"],["/tags/DNN/index.html","1a8c135afc9a4d5864f65d94d4b63372"],["/tags/DNS/index.html","647321ddd41bfe8cfb957d0073884710"],["/tags/FPGA/index.html","1c0d3cda0d963f48abca4b256835e05a"],["/tags/HDFS/index.html","051c60aca63534d70ec1176243f901ed"],["/tags/Java/index.html","2da02bb2240ae75826fd62072f2e9e5a"],["/tags/JobShop/index.html","242ea5193e2ece2155cd20458ed02061"],["/tags/K-Means/index.html","324f64a28f8e920d288c2769fa36e04e"],["/tags/Kafka/index.html","b295588df709116d88439cd4b889c399"],["/tags/LL1/index.html","d49e0387f35390279be0b3e2c8ae7886"],["/tags/LR/index.html","3ab11f2143b8b7dcf0e6953fb968b34c"],["/tags/Linux/index.html","9d276aab184da560b720b909afa80aeb"],["/tags/MIPS/index.html","fb4529cad1a782b4c67c73eaae3f8253"],["/tags/MOOC/index.html","1881c7383785a7c55ceb71669e15691c"],["/tags/MPLS/index.html","560be6a2f9e0addf691438467ab1bd27"],["/tags/MapReduce/index.html","b21107e31f1cdcbaf1cd3bd350d3fde2"],["/tags/Matplotlib/index.html","84e10d9e5b62f3d125cd0c0c3b535a60"],["/tags/MiniSYS/index.html","38787b822821084382a67471bfd168b4"],["/tags/Python/index.html","f702f57db6dc05fae8f2d81c638daf5b"],["/tags/QT/index.html","124fe6087ce17ab0f210f3593b3af3f0"],["/tags/RNN/index.html","e99d8933c1681eb85aad1fd94b2d6ce6"],["/tags/SIP/index.html","39be1b7e42cc68fe28189441b40b66de"],["/tags/Scala/index.html","1a36cffd879db24d2a03fcfc5fffdfb9"],["/tags/Shell/index.html","bf64ea1aa67232c4ac09c549ab552f24"],["/tags/Spark/index.html","56e46ec44b2d14f46a3e27c8b6ab64d1"],["/tags/Streaming/index.html","9d163ab27def14213cb2cb7aed63f229"],["/tags/Struct/index.html","aada7727e43ecde52a75f932a8ba8919"],["/tags/Verilog/index.html","a0b1e030556bfc97b90e229f4ef0340d"],["/tags/first/index.html","01541622cf6e6edff281a79f2720132e"],["/tags/iPython/index.html","63b5e72ad7c5482876b5586679589bb6"],["/tags/index.html","630a07f7eb2689f34ad7d32cfafea4dd"],["/tags/ls/index.html","b99a2e68a5527f2ed066c9c09dad9dec"],["/tags/习题/index.html","27453c322d224e316a0a7f791285a68b"],["/tags/交换原理/index.html","d1bf3795d8fac651943d3f436c438552"],["/tags/人工智能/index.html","f4b82cbff38555bcec840e031daa6c70"],["/tags/信号量/index.html","eec5a47d1a57b5f736719445bec90b3f"],["/tags/内存管理/index.html","ed6853f4b4de35c804703e360142ef31"],["/tags/决策树/index.html","bd1b8abb2a8044db56c1a81b73ed55f4"],["/tags/分治/index.html","06839eaaa0fd0c79a27e6d071111fa64"],["/tags/分类/index.html","d8c130d4e67349dc19d7e93779f1998b"],["/tags/动态规划/index.html","e961db520cdd7e7b4c98f3d4495c489e"],["/tags/华为云/index.html","5270767ec32333d6c19a30ceb7329875"],["/tags/单词计数/index.html","045cfe667996a3e6ceb2ca0d5d99e4f3"],["/tags/可视化/index.html","faf428273361b2df02f04f508db77e31"],["/tags/同步互斥/index.html","d3358445c248eddcc28f906e81c32ebb"],["/tags/大数据/index.html","ccec7d6dca819c5910eff505d221209f"],["/tags/学堂在线/index.html","cb735b48ff87802d5dc4872b9995a173"],["/tags/实战/index.html","3e68131bbaf187be645f3a19d8de9de2"],["/tags/实验/index.html","2ddc80cb85aa4b3aca7ae4d3f653229d"],["/tags/实验/page/2/index.html","4b8e63c502d818e4df7dc19e4badbc8c"],["/tags/小游戏/index.html","4da50cbf38d950e73a488d1c37b9b5e6"],["/tags/工程/index.html","15fcd8d7d401d1d9fced6d2bd9244f33"],["/tags/工程/page/2/index.html","2d36a9bbe5eb4434270ef3a14d20bc71"],["/tags/手写识别/index.html","3dfdcabeb209b19b42ca68f15de95083"],["/tags/拓展/index.html","f513404cd7f83ec809e25fdc0e80fe91"],["/tags/操作系统/index.html","75599a2bd8793e3d13b7ca29b91be498"],["/tags/数据处理/index.html","32128c4bed12d3e3c0c2aeaf1cd04e04"],["/tags/日志分析/index.html","87122fe1f9915c36ef55ca2d468af94c"],["/tags/易错点/index.html","2db5705bb3756d1cb4cdf507e8ed43e6"],["/tags/机器学习/index.html","0337e00a1563f926e9e1104a0a8f8d14"],["/tags/条件熵/index.html","8b1fd5b65928d8a404db890f662339de"],["/tags/正则表达式/index.html","d27b59c7f824c375cdc539f75ad52546"],["/tags/汇编/index.html","fd253a6b4e0684c65cd69fb274450391"],["/tags/流计算/index.html","a605446dbb17ae2f448b27f2b1950488"],["/tags/爬虫/index.html","08756979379e251687ac0d60741e31a5"],["/tags/现代交换原理/index.html","33b35ac5f6a58b0b8bae7302827bf9a0"],["/tags/生产者消费者/index.html","a5fa7a4a242a49b0fc367a9cdf1927c9"],["/tags/知识/index.html","a64ee5c41246274da6fb48a060c5c317"],["/tags/算法设计/index.html","92bb971d5aff964a99487ba48b63a194"],["/tags/线程/index.html","bb02b61a2fdcd7b29daf40622cf04fdc"],["/tags/编译原理/index.html","8b415c2fbaa972b3ff82300df5316482"],["/tags/网课/index.html","9b069998a5c6222cf1d649a61508af1c"],["/tags/聚类/index.html","1f0ca65d4065876253afc00459aee4f0"],["/tags/脚本/index.html","c63f049efbfeaa0b660fa5ce069194b7"],["/tags/计算机系统结构/index.html","8cb7de4aa2af3735751fc925ed9f0a10"],["/tags/计算机组成原理/index.html","c8945981668002689ec91d3c8db1af60"],["/tags/计算机网络/index.html","a7fb92b007368a072f6ea2ee2314ddce"],["/tags/词法分析/index.html","a4b20e40cb22e8aaf9aab12b657217c2"],["/tags/语法分析/index.html","55b5dc7b0f47f4de61ca171a4f622de4"],["/tags/读者写者/index.html","9a1c49a3631ad2f3ab6476674a8267b5"],["/tags/课程/index.html","2803ce101f158420da94b9bb649d08b2"],["/tags/起名字/index.html","1d4dc44782b2bffba7e10561121aa672"],["/tags/软件工程/index.html","b82cb0b7651c467630a5fb1fcf176519"],["/tags/进程/index.html","976e634990002e041ded90aaa3d0c2c7"],["/tags/通信/index.html","4de7cc474d01038520b88e9043fd0d8e"],["/tags/遍历目录/index.html","02cc26f37c7a105531df57adf3819910"],["/tags/难点/index.html","4bf62b4d50009b63cf235c30117491b7"],["/tags/项目/index.html","d7b6464acc71b74188b7701885177b8f"]];
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
