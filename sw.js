/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","f21d7ddbd4f5e873dcb6e81988511507"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","6c2379deb4432a2d241e78f86ef41c47"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","d874ec12777bf8b0d009df1ee9791eb2"],["/2020/03/26/计算机系统结构-实验1和2-遇到的问题/index.html","74c6831271031116e3041eada18942b9"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","c0ad6b2bb6885a4f3f8347d14e586ece"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","edd1017e669fc9d097cde400fa958670"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","e446a75fee226bf92312105d5cf366d0"],["/2020/04/18/机器学习-知识拓展-条件熵/index.html","3e41612d58f1199ccbb0ae6778d81c2d"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","ed9062560508624a4679a24569ae7b39"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","70c1089fb473fa0637db224186129f55"],["/2020/04/26/机器学习-实验-决策树/index.html","3aeb1a25aef4c2adfb8335519c0cda41"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","a701e307e36052f36a60547797d17b49"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","8afa0d4a24ac5c1c845f8baa699f42c3"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","b7235b96e578283ea182bac4fcc2eb81"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","dd2950c5a463af86fa6692f11f343bd7"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","941e29fa3c0266df290b5eacb9b4200b"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","631d1708de227329cae7ed25269d4384"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","6b9d3636a35b8a94d294d604445f09e2"],["/2020/06/11/机器学习-实验-DNN-手写识别/index.html","ceb95fc60bafeaf040c52276415b3666"],["/2020/06/18/大数据-习题/index.html","3086239f3b9fbf52f7b5131c10b68fed"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","860be50fa00968bb5148b082da22368f"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","d9fe7da82c5b41dba84f2152608a342a"],["/2020/06/24/Linux-拓展学习/index.html","e816302c8e526f2330fbc18d10835321"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","3b6a968177c2ba70f491eeba8d031e27"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","403adc83674ebaeb23afe4b7958a391b"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","e62f7384e2201a46f28158e2d0c45bfd"],["/2020/07/15/C和C++的struct使用总结/index.html","a36af2552c6d1125eb2c2d88624a7511"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","02cfade464c88c46d4170c4411826cf4"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","359d0c8da25ba4208eac25da9b677b08"],["/2020/08/10/机器学习-实验-花卉识别/index.html","4cb78e2c6897396c56106acfe2306f1a"],["/2020/08/15/Python-项目集锦/index.html","05bcb28fd7231ca614aeaff69951ade1"],["/2020/09/01/编译原理-词法分析/index.html","d5305b9f8c3766ada17a2df86a302827"],["/2020/09/02/编译原理-语法分析-LL1/index.html","04e690866bf9484a41c287d8ae331135"],["/2020/09/02/编译原理-语法分析-LR/index.html","7053cef2e36792d148a4f067c76c04a8"],["/2020/09/03/操作系统-内存管理/index.html","1c74689cd9a06a928dd6a4cf01a905a8"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","d9728747e6a3b0f237cd1ac6f6520e1c"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","3c4604cda9ec27725344e276600ace6b"],["/2020/09/04/CSAPP-实验集锦/index.html","f4f945ac280ffc8dfc8f45b97a4b2ec0"],["/2020/09/10/计算机网络-实验集锦/index.html","093d22e288c5159fb66dfe851d98ec1d"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","5fa6f605924d6563092efceb8ffe9c3f"],["/2020/09/30/C++工程项目-JobShop/index.html","a6962470569f4f5ecf880765778fa505"],["/2020/10/09/交换原理-实验1-时间表调度实验/index.html","63ce9c999dedf9161739b927d8624200"],["/2020/10/09/交换原理-实验2-摘挂机检测实验/index.html","28af4e6417d8644804864531e394aabd"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","26ba69eb86b3c582f7efa38ec305f382"],["/2020/10/09/交换原理-实验4-拨打SIP电话/index.html","0868eb58c5780a1058aa564ccf1fe6cc"],["/2021/01/04/Android-项目集锦/index.html","b403c0e73ba741c171cbfb1597eb725b"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","844f77d229bddbe0a5189aa1e7911ecf"],["/2021/01/04/C++工程项目-travel/index.html","975cb65396874f43bc0ec1c8edc1738c"],["/2021/01/04/算法设计-分治-最接近点对/index.html","ddbde5905f1ad55a6be7d7be4efa1e67"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","359d3ea37fe807417e8bb0cd41632a28"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","3aa3c4cca598652724554711f0e96ab6"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","f38b0f5594ad7b0834d1dbfbc439bbe3"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","4a40a86c08ff7c39e3a715641a790b0d"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","df9f53eba422f64d22d2af1be67f25ae"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","4339f0101fc7398d20d46f397e810bdc"],["/404.html","4dec2a2598d19da88c1c92b0265ec99f"],["/about/index.html","f0d0f9a7df2b70997de42854d811c666"],["/archives/2020/02/index.html","ab829303c526b03184cf14988f29fc35"],["/archives/2020/03/index.html","f5362cce61a55371718b5f1c06076043"],["/archives/2020/04/index.html","4058206252bc78d9012e49ba0dbdee50"],["/archives/2020/05/index.html","196bae5b24c4a17875bd0ebec49a04ae"],["/archives/2020/06/index.html","05360066eca5bfda5396e792c8c50940"],["/archives/2020/07/index.html","b71ae48dc4cde59bb6fcf18a8167fd77"],["/archives/2020/08/index.html","3b2840abd495ed739a132df7789a616e"],["/archives/2020/09/index.html","27606570e7e7dd9c2be89742ebb115b1"],["/archives/2020/10/index.html","77b426d58ec0bccc7ea21e943400a0aa"],["/archives/2020/index.html","91499c327f8d3fd840978604e176a8d1"],["/archives/2020/page/2/index.html","2ac8045272c411939122daa261a7861e"],["/archives/2020/page/3/index.html","59141213c7cabd82cd0ec12187c9b95a"],["/archives/2020/page/4/index.html","cea935f617103e2ede72f406b1042885"],["/archives/2020/page/5/index.html","b74ced5b25d5410589680d096a6ad6d8"],["/archives/2021/01/index.html","69aad2fe6fc37f379332257c39d18f0b"],["/archives/2021/index.html","94a51beff7d9fe3fdf740c56ac8a9171"],["/archives/index.html","5161741e7ee5daebcc26793a655f9f90"],["/archives/page/2/index.html","5161741e7ee5daebcc26793a655f9f90"],["/archives/page/3/index.html","5161741e7ee5daebcc26793a655f9f90"],["/archives/page/4/index.html","5161741e7ee5daebcc26793a655f9f90"],["/archives/page/5/index.html","5161741e7ee5daebcc26793a655f9f90"],["/archives/page/6/index.html","cc6fc3922b0e5c0816075339fdb56bde"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/bb/index.html","54f59ad1af7bfcdd975159cb3e74f7bc"],["/categories/C-C/index.html","1b9b1e80ab4a2b5e2be71800a55e8e06"],["/categories/C-C/page/2/index.html","edd4871fcb58158331368ca741bf58ea"],["/categories/C-C/拓展学习/index.html","3b6f77c35247fdf4618cdc3cd9e4e0ea"],["/categories/C-C/操作系统/index.html","b8ce16430d143c9fdfbebfe0cc6397db"],["/categories/C-C/算法设计/index.html","ff5be3c124aaed9574543e8264b0fa14"],["/categories/C-C/编译原理/index.html","1679edffaefe60df81aa1115833d2692"],["/categories/C-C/软件工程/index.html","a7b486034118ceebbff0a000d8326144"],["/categories/C-C/项目/index.html","13380d12b3fbe8f3a9cd65566ec451cb"],["/categories/Java/Android项目/index.html","4daf28021fc7b152f70d5220f945a67b"],["/categories/Java/index.html","cbb9cbb1b483f6851ec2c0ad1558986d"],["/categories/Linux/index.html","17e7897093dcb3100ca8d972398eb219"],["/categories/Linux/上机实战/index.html","28f63c676b22cf9815988e9669f2f63a"],["/categories/Linux/习题/index.html","540b1abfbb695cccb33ee62f464b4546"],["/categories/Linux/拓展学习/index.html","f11f423faa0bf4f11c6c71462e1152e2"],["/categories/Python/index.html","b3e6f2142ed89dab234507f3fef9664b"],["/categories/Python/爬虫/index.html","60b3d17a244f5e58c2c0d4dda6f5fa8a"],["/categories/index.html","70ab4ea512d62ae8f10ebada38d8006c"],["/categories/交换原理/index.html","88ed653c2490164a33d5c9e8047c1dda"],["/categories/交换原理/实验/index.html","1c1dfc69fdf4cae2ac7a196fa7bf9f8b"],["/categories/其他/index.html","8cb2c50ac4afcf082c8304abc29e321f"],["/categories/大数据/index.html","a395844f87dc1a43a9b9eb648046f187"],["/categories/大数据/习题/index.html","09a6cc48438f4c5564613920f21b71b7"],["/categories/大数据/实战/index.html","75434fcce017569aa5ca5409bbec1955"],["/categories/机器学习/index.html","552bdc1b1dad66e76fc0628944e327c4"],["/categories/机器学习/实验/index.html","03a4a25feb1caf2b339aa202a4bfe747"],["/categories/机器学习/知识拓展/index.html","e7fd45a5052443d157c237109c73af4b"],["/categories/现代交换原理/index.html","45c9b1e381adab210b1e4bd23eb97abc"],["/categories/现代交换原理/习题/index.html","5c2a847a6e16556f8b9b4a3a1f395a66"],["/categories/计算机系统结构/index.html","61df3e685c5eb7a9758515c6aa7fcac7"],["/categories/计算机系统结构/实验/index.html","de55395f42f22df9c22b6044b104efb1"],["/categories/计算机组成原理/index.html","f539a9b49a59d594a8bc05850c7206d5"],["/categories/计算机组成原理/实验/index.html","945c04c7fe724311d62b6caa4a9f24c1"],["/categories/计算机网络/index.html","3379049dfdb24bccd71fee78a081aaf3"],["/categories/计算机网络/实验/index.html","2cde1ac98b227b681cdb497698ec9d29"],["/categories/集锦/Android/index.html","428e4e2098817b92808bd3064ba15118"],["/categories/集锦/CSAPP/index.html","5b458669544dfa01ca365881d59b66c0"],["/categories/集锦/Python/index.html","39f08aa4fe45b0e7de64c024994cf501"],["/categories/集锦/index.html","d9483ea9e1dc151ad49f838adb7a107d"],["/css/first.css","01a90baf99fa8f190becabd973782198"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/style.css","9564e3aacc499944fbbbf6cba7248167"],["/friends/index.html","5551c048c65790e7ee8b54b9f6925c45"],["/gallery/index.html","63f4bc7639ebb10460b077618443184f"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/games/tank/index.html","a4a2448b8b53e14bf7bad5c1f71e614a"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","fb5774a0d0bb5d58367e96e9964cdba3"],["/js/aplayer.js","6e605f0855251e101d3024646f3eac60"],["/js/app.js","1948329f2fd7e750ade4bdc49138c09b"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","5640ac50d48791805563189dbf0e7553"],["/page/2/index.html","c4e5edf068762aa3bfcfefa9b3ec15f5"],["/page/3/index.html","9e3ffcbb99e722fadef818c9107b7e69"],["/page/4/index.html","6c34753a71d1f2fa4ca5d1d80e38cb26"],["/page/5/index.html","460545d145967ca95e593a2a6106e9b2"],["/page/6/index.html","6bccbe50ca513c57499f7121cf7b403b"],["/shuoshuo/index.html","64adce42ba28c992fd5f636262b1f8f3"],["/sw-register.js","e055bc4ebe480ca4951d96d1754f9afa"],["/tags/AI/index.html","1562fc5cb5565be225ec2671842c69c9"],["/tags/Android/index.html","a63fd11ff93d974869ebafa875e846c6"],["/tags/C/index.html","a4fcdfb4ae715e26a6f353c2c2565d36"],["/tags/C/page/2/index.html","70527ab97468fbfa47011e1fae7b90b6"],["/tags/C99/index.html","1566b896f4ec48a310f8d29955d63c28"],["/tags/CSAPP/index.html","e7c49deadc421e468f477cb19440c3b0"],["/tags/DNN/index.html","43c0f7b135ca6555765faab5283cedc2"],["/tags/DNS/index.html","7f347621566e7fc96ac1eb9a5d566312"],["/tags/FPGA/index.html","ce9acc69d849d7a0c9c57d9dc1ca076d"],["/tags/HDFS/index.html","0b3c72980291d34154a3c3669504e4d0"],["/tags/Java/index.html","5becdcea947b8e008e4238532ad8b49c"],["/tags/JobShop/index.html","f52db23a190489f47e30b0cc2f1e89d8"],["/tags/K-Means/index.html","fc9c3a46709a120c056c77d8df24ed6e"],["/tags/Kafka/index.html","2959278cc8c9b7c07c7b75c2ac6fd665"],["/tags/LL1/index.html","8027e564c42042a3d4ab4038e3453f1f"],["/tags/LR/index.html","478ea99d90ff4627a379207c03524322"],["/tags/Linux/index.html","1c2a71cc332527db812f2126184c3daf"],["/tags/MIPS/index.html","e7d49cfbe1b712042e26373e36c227e5"],["/tags/MOOC/index.html","d4af58815e6fb62a339c4dc6c99d8c0b"],["/tags/MPLS/index.html","609975fa08ceccdd115449fc6940a726"],["/tags/MapReduce/index.html","388758a08f2c406bee13fa03d5d73ef3"],["/tags/Matplotlib/index.html","b818fd1c3ed7b4dac2d2f569a242d33c"],["/tags/MiniSYS/index.html","559d91a282d83b876c39de18d3d519a9"],["/tags/Python/index.html","dfd9e876578312b3c6b2be814fa5aa5f"],["/tags/QT/index.html","48247397b1552895dd967bf557f0a333"],["/tags/RNN/index.html","d65d93fbd869219e83bd977072c318ca"],["/tags/SIP/index.html","8eac09f88c48a55c638503667dd169aa"],["/tags/Scala/index.html","6ce1940a7559a11268471e6db41ff6f8"],["/tags/Shell/index.html","7df47dd842c1c16f6d8b8e44f2d3c694"],["/tags/Spark/index.html","ec3033e1719fe985e80b616b36b4698e"],["/tags/Streaming/index.html","23d507226d3cd139fd06f7db5e979f5c"],["/tags/Struct/index.html","97871dfddd6f8edbb6218d27b2b1d770"],["/tags/Verilog/index.html","e4874995bc3339f2dbe030b31294621e"],["/tags/first/index.html","087244d796b2120a3e76d9686ccf19b2"],["/tags/iPython/index.html","6b6ebcfd67f539abb186a764d7b7728c"],["/tags/index.html","1ede135e74551966758c90d4306b4223"],["/tags/ls/index.html","e78191ee6677ed8b3c85faa1bdfc6098"],["/tags/习题/index.html","40e5e2392a85869f5547d0c2f548b617"],["/tags/交换原理/index.html","8a88c52c6b39134425e764fce7dee8b2"],["/tags/人工智能/index.html","4ca359c805085fac982e32fe4db3e853"],["/tags/信号量/index.html","534def7931ecbdc4da0b22fff1ed6daf"],["/tags/内存管理/index.html","bae0506ecee369db72b2aba572ff1014"],["/tags/决策树/index.html","03bdbd9636a400805fd4ce604a915ed8"],["/tags/分治/index.html","e3d0fd2fc62c4f54819e03e9fad78db8"],["/tags/分类/index.html","05a96defbcef5b27c5da72e59e7842dd"],["/tags/动态规划/index.html","686c95d76cc3b9e7fe446149bd80aa56"],["/tags/华为云/index.html","820ca550ab5b2a881497f796c127d11b"],["/tags/单词计数/index.html","c5944384e6f4cdc0de4d7f22d88f3795"],["/tags/可视化/index.html","c5608cc59948a25b4f440dd86450f221"],["/tags/同步互斥/index.html","e3f3f80cb0b9a115c6fb8e436da076ad"],["/tags/大数据/index.html","d43ad4f1bd6285b17f8695fbb08fca33"],["/tags/学堂在线/index.html","800d4e5e7ac2d01c24af4f5d14c32ca3"],["/tags/实战/index.html","fbb012a6edb72f5b4754f2192c5c3d82"],["/tags/实验/index.html","6b4c8bd1d92abc735fe3b435dbe836e2"],["/tags/实验/page/2/index.html","9b848e6cf5c6a1f1593f3cb3ea97c1de"],["/tags/小游戏/index.html","0c4c928c81ca7ba7e87bdd8de445eec4"],["/tags/工程/index.html","03eafcede32df0f865cfe3b11593f5df"],["/tags/工程/page/2/index.html","7e5f2d0e1ad897f4476d570e137a501d"],["/tags/手写识别/index.html","69b1a7349ebc817c212ca7574c99fb36"],["/tags/拓展/index.html","99bcb75e9bafe205007e27bc980ccddd"],["/tags/操作系统/index.html","efaa723e9dc84afb699c4b845e61a449"],["/tags/数据处理/index.html","ff833b90b6bcc968c2851510f78fe14d"],["/tags/日志分析/index.html","89bd60e4e7d1d13c8d172b84cc661ab6"],["/tags/易错点/index.html","7a867850c9fa6078b92141ec1b569d84"],["/tags/机器学习/index.html","406b31fb98c013e113bacd6bdb961e3c"],["/tags/条件熵/index.html","693ecedda8f64189cb761da959c49d92"],["/tags/正则表达式/index.html","3bc2f08bc6cc08fb693e86d3c5fe7dde"],["/tags/汇编/index.html","0b821d13c3cc77cf0537bc686da2d430"],["/tags/流计算/index.html","0761727f3733b3b3a4d45c9148ebaf24"],["/tags/爬虫/index.html","2028bad337a4d32d12144343760747ef"],["/tags/现代交换原理/index.html","e9d314b2f657900563e93f9f235ed12f"],["/tags/生产者消费者/index.html","b7794e3e299a3dbc5fe598b9f4e1b7ef"],["/tags/知识/index.html","13c9f39fc28d6cc5a9e7d77d19f46a58"],["/tags/算法设计/index.html","a8fe4a78d7d5f5437192c38a298649d5"],["/tags/线程/index.html","bd976602c64ed09cb7b081b67fe9c76c"],["/tags/编译原理/index.html","1dcda030f1aba567deb15cb7c8ae8603"],["/tags/网课/index.html","7eb302bb40251f47bbbacebd086d7dca"],["/tags/聚类/index.html","44ab0739d5bcdf8363ed7e138f148176"],["/tags/脚本/index.html","4939bde15e1ec82a1478cbe702733845"],["/tags/计算机系统结构/index.html","3b29f480d7d9287f8c02b50e393c8412"],["/tags/计算机组成原理/index.html","e8b255555cc3174c860e68489e497d17"],["/tags/计算机网络/index.html","3d99e7e0e4b952733ab243db6295f267"],["/tags/词法分析/index.html","9e4e161d25b5f5525fc70e01d2fe33de"],["/tags/语法分析/index.html","54f28e069c8e4dfa0e81fea1007f5c5c"],["/tags/读者写者/index.html","c4e821df0685389f9c26a4d9ff2aec30"],["/tags/课程/index.html","7852afa8e7270096a5bfb48d3eb4e0c5"],["/tags/起名字/index.html","6f313cdab86942164135c41efecdcf33"],["/tags/软件工程/index.html","45ef8e79b31cf5a24ea86cb79d6b1319"],["/tags/进程/index.html","5c0103d55352673945db7e86d3b3767f"],["/tags/通信/index.html","85020c4378e0594fc4b3c1520e8ad2c5"],["/tags/遍历目录/index.html","a5d94987e33d6057c29794994ac4d577"],["/tags/难点/index.html","de4ec79577cb87af8a71fd530ce87ef5"],["/tags/项目/index.html","8e790d2bd21a7fe3fe4f4b24ecc742c4"]];
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
