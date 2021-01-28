/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","c45de45f15c329b0c9d02ce07825a101"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","12ed3a36d747fd57e1cae1b4f3743570"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","1f08cbe72e0275d8c21f9455515b0a70"],["/2020/03/26/计算机系统结构-实验1&2-遇到的问题/index.html","bac0657ac3f7267ac1bf65d29d5817e0"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","0d0aa7bfdfbd5ad38b6bf7d6851463b5"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","66854b7f5627548a8813c862d357dbf5"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","f010be171ea1441a88ec7cc8b07f59de"],["/2020/04/18/机器学习-知识拓展-条件熵/index.html","7e496053fe8375c8a3a0d430ee815f28"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","7a75b4ab69b7badd2c0db28667844e29"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","e31741d0b07b44903dec81ca488b8d7e"],["/2020/04/26/机器学习-实验-决策树/index.html","4a67d8a13b33028810fb17cdf129ec56"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","c7dd9b04799c9460e430ac704e312586"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","7944ecad666147ba623387576d731313"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","846670788544b0e1a55565d783f59702"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","ebe0272275d88fd644c59e904fab7c46"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","4f20d3aa93d0b65b6d9e9f23cbe7e648"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","5591456b157d78c1f445cadf6c9816eb"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","de49c94cee91367c8b683319d8a0f01a"],["/2020/06/11/机器学习-实验-DNN-手写识别/index.html","5fc044af25951a77c7103b3d0dadc5d9"],["/2020/06/18/大数据-习题/index.html","9b1fac0a5514d4d9df18b87144f24bf5"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","68d2f8c9e7d444662671a1e4961067cc"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","cdc06dc05973913777a1d523a65c0ed5"],["/2020/06/24/Linux-拓展学习/index.html","eb6e5fc7265c883d0ca2a3e7c7804fee"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","9cbb88dbe937dfd77048b4db1240367e"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","29ab3d11a15ac907639a5ea9223f9dea"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","f0a91e1a42a41fa25e239b2b958bdedb"],["/2020/07/15/C和C++的struct使用总结/index.html","273526be8cd028fc83ec87ed0377ea74"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","4ca9af220059995a1edada5c063f33bd"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","dd1880890452e463c58d5090b3eb8e4b"],["/2020/08/10/机器学习-实验-花卉识别/index.html","40fd54a181a7a1c70ef139fb09b4458e"],["/2020/08/15/Python-项目集锦/index.html","6233cfcdc044ee22efeb2237e1067f5b"],["/2020/09/01/编译原理-词法分析/index.html","ba7f87e3e22bb5e82c09fefa104cc720"],["/2020/09/02/编译原理-语法分析-LL1/index.html","80c765c55f733f885e8d9bcb12da53e0"],["/2020/09/02/编译原理-语法分析-LR/index.html","c7522155c2450790454511af1575255d"],["/2020/09/03/操作系统-内存管理/index.html","04b31cca6e940efb52fa9112e463a412"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","d82eff37874a811a5238acf333e6efa1"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","755540bab5972b7e4fccaf2f3b420db2"],["/2020/09/04/CSAPP-实验集锦/index.html","e6ad659ebf348bd47f10d4f124e41499"],["/2020/09/10/计算机网络-实验集锦/index.html","66147e31de5da7799d6b86f8739a731c"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","498aecd5dc36bde8768ae4db2761568a"],["/2020/09/30/C++工程项目-JobShop/index.html","c94ee2cf699377064f20df94f49b6487"],["/2020/10/09/交换原理-实验1-时间表调度实验/index.html","c657357802684f2b284187a06756daf3"],["/2020/10/09/交换原理-实验2-摘挂机检测实验/index.html","cc8b0bfe601da7ae909847ce9de3888f"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","e2e23277c35fb619cc3eb509902fc26a"],["/2020/10/09/交换原理-实验4-拨打SIP电话/index.html","cc3aa9b132efb4ec22d4a8f3136cabef"],["/2021/01/04/Android-项目集锦/index.html","28baec8aea164f08e62357e6098e0b41"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","04a16ad6596490454fe04a40666dd46c"],["/2021/01/04/C++工程项目-travel/index.html","b34147efa6209d466392f0db9786b853"],["/2021/01/04/算法设计-分治-最接近点对/index.html","8bac91a01507c4689ee30f5f15fe10e8"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","a083eba716f1ae3df0bd98a6e81ec110"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","576d4ed91c3694be38baf601d8f631b7"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","8500f8e8d41d6dbe03229d6d4f726052"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","214df80d7c58ddaad41c0779fe4a37bb"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","53edb628679f4993ef7aa079e48d750b"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","d5763b0695625cd31474935fbb6eef56"],["/404.html","a08860a2667c38f9a83656718274e561"],["/about/index.html","d296287522c75097290905513ba621e9"],["/archives/2020/02/index.html","5ccd27e514e2a99f78487f8f35019106"],["/archives/2020/03/index.html","c4aa91c64d3d8edb3154622bf553df02"],["/archives/2020/04/index.html","dbf68863681297663eb6ef618731ba64"],["/archives/2020/05/index.html","5231ad5dfc632b439e36f823947055be"],["/archives/2020/06/index.html","94bb587ed550d8a0c69f892a535bf2a3"],["/archives/2020/07/index.html","959d932d69c428162d8fbd54f33e5f8c"],["/archives/2020/08/index.html","f549876496fba03ffa8b141ae1d2373a"],["/archives/2020/09/index.html","0bdd3d187d4da287dbba6d3a52202c4c"],["/archives/2020/10/index.html","58e82dff48686417d9fbed23eb61d9a4"],["/archives/2020/index.html","689b5e4e30a2777dd9d1fab4f6090430"],["/archives/2020/page/2/index.html","cf7b3552d4072cff64d0bba2d761391d"],["/archives/2020/page/3/index.html","57cfefe221479fdddb05b303605ee967"],["/archives/2020/page/4/index.html","a41f1017f912a8dbd487ddff5bc4695b"],["/archives/2020/page/5/index.html","9ea830a740d6dc18632871e891c646b8"],["/archives/2021/01/index.html","6cfcc21fba585a0430317e68283fbf8c"],["/archives/2021/index.html","979bff519999ff73293d1c6bb4f61c00"],["/archives/index.html","2af7ca2a11e6a0fb1ac242cd829a9d9f"],["/archives/page/2/index.html","2af7ca2a11e6a0fb1ac242cd829a9d9f"],["/archives/page/3/index.html","2af7ca2a11e6a0fb1ac242cd829a9d9f"],["/archives/page/4/index.html","2af7ca2a11e6a0fb1ac242cd829a9d9f"],["/archives/page/5/index.html","2af7ca2a11e6a0fb1ac242cd829a9d9f"],["/archives/page/6/index.html","a14f09b10fd1c6826d3049c6784c0138"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/categories/C-C/index.html","d48d26f162454a87ab26f1b143aa530e"],["/categories/C-C/page/2/index.html","cc030558d78a04bdf9f4bc81ca775bf0"],["/categories/C-C/拓展学习/index.html","4f74fc2076aaeba890f8fe146d4aa5cd"],["/categories/C-C/操作系统/index.html","dec6bf60077ae5270a772fbe0f87f2f3"],["/categories/C-C/算法设计/index.html","51f488a6c5c07ec45aaa66faa67b6f50"],["/categories/C-C/编译原理/index.html","ed860a69441a2edafba8bd8983f569ef"],["/categories/C-C/软件工程/index.html","44d218c82db4895eabc40124d1f03646"],["/categories/C-C/项目/index.html","d861688b7291a81e0e1cef2bc80bca4a"],["/categories/Java/Android项目/index.html","b65c7f16750f8de27ce3361b8b4d35f5"],["/categories/Java/index.html","4bb5e4063c91aeb5d74c0430af4369c0"],["/categories/Linux/index.html","5bc26a95e16d37dde1bd7b49b65d20cf"],["/categories/Linux/上机实战/index.html","fdc841831f9b4ad4935258dfe3c4b551"],["/categories/Linux/习题/index.html","49d127a85c47ac425b86fae11c304bab"],["/categories/Linux/拓展学习/index.html","28af769dba6a6ff94aa544c58733aace"],["/categories/Python/index.html","bea0883b6ee532c58112ffb8c4a9f779"],["/categories/Python/爬虫/index.html","44b4be4ac1163012a34cc725fc24140c"],["/categories/index.html","0626df2d595fa06554738d9cb579191a"],["/categories/交换原理/index.html","03415710387f7206b83c8ffdd1871228"],["/categories/交换原理/实验/index.html","16e9064cdaa45f77c592c19c8c9fd2c4"],["/categories/其他/index.html","8d0a8b69c3c8cbecfddae440a28cc068"],["/categories/大数据/index.html","e3c7a3b2f73a057657bfb792dd1d7149"],["/categories/大数据/习题/index.html","639ab6e7d87f4ca4403f8279f718056d"],["/categories/大数据/实战/index.html","718fbab9e45d8aa2b22caad55a348b0c"],["/categories/机器学习/index.html","7919693787e11fe96ea3dd6cb20a2c9e"],["/categories/机器学习/实验/index.html","d212e6b3a998071ea70d0b3c7ca4909d"],["/categories/机器学习/知识拓展/index.html","03c1ec2ea813d08bc92fc8ec1d439980"],["/categories/现代交换原理/index.html","a9cffdc45cc3de8287342deeb8e73831"],["/categories/现代交换原理/习题/index.html","44e374269627fcaee80ce89169dc4f74"],["/categories/计算机系统结构/index.html","fe93ca396cef031e6c588bb1d25a02a7"],["/categories/计算机系统结构/实验/index.html","a0f4edd18295833a4cead1110072b347"],["/categories/计算机组成原理/index.html","620e23f7c741495c4b4c0803c296afd6"],["/categories/计算机组成原理/实验/index.html","d06d66dab20fa8e27b8e3455250aacd1"],["/categories/计算机网络/index.html","e6ec615b1c449f3ee51e1f2f673a1f71"],["/categories/计算机网络/实验/index.html","5eaabf9c7718818dbd42a41b44d28628"],["/categories/集锦/Android/index.html","2956755e9f78622fb89716326ca1d63e"],["/categories/集锦/CSAPP/index.html","a90c956897aace4c7be8d679fa1f2c43"],["/categories/集锦/Python/index.html","3b4eb21d0d1e4e66e5a77c0d89d518a9"],["/categories/集锦/index.html","35f878ba97533c93d85c44165760a1f3"],["/css/first.css","01a90baf99fa8f190becabd973782198"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/style.css","29bd14d027343cdf06b66cce6bf66453"],["/friends/index.html","3d2343ec6c2ed969ea61ff92d116af1f"],["/gallery/index.html","63f4bc7639ebb10460b077618443184f"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/games/tank/index.html","a4a2448b8b53e14bf7bad5c1f71e614a"],["/index.html","382a9d15341cdcee1c38248c5531e5c8"],["/js/aplayer.js","6e605f0855251e101d3024646f3eac60"],["/js/app.js","1948329f2fd7e750ade4bdc49138c09b"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","a24126089902560cf426caec3a2bc183"],["/page/2/index.html","e7f9d5987d08cfd0a6dc2a2ba9246a31"],["/page/3/index.html","4c2f54583523c75914fa9f8da596a1d1"],["/page/4/index.html","cf93313d0d1800c3c7d9903f83ad8def"],["/page/5/index.html","efa4e54adc91ea05949424f6888ac8a8"],["/page/6/index.html","6ee77e616592135a357a0df08c9e7394"],["/shuoshuo/index.html","02de6d4ef84947d4ae38ae978508cca4"],["/sw-register.js","ff2af4c60198c69e40dfe091e262f250"],["/tags/AI/index.html","ac28e6fe21346afd2b5d73c698a55fcc"],["/tags/Android/index.html","f3b16decb264f4842197cbacc289f237"],["/tags/C/index.html","52ab6f4c65f400c10579968945afd51f"],["/tags/C/page/2/index.html","f8d6532f65cf6b14f43aa2db1942df77"],["/tags/C99/index.html","a2cdb97400b1103c4c43dff33eaeed86"],["/tags/CSAPP/index.html","12a0de0d475b22ddbd42bdb16922e75c"],["/tags/DNN/index.html","bbd5c90cdebffbe66265567d45cb921a"],["/tags/DNS/index.html","7aeb6b79b5ba1c2552738846bd527944"],["/tags/FPGA/index.html","bb63db7d4401bbe3c6ea5cb1012da50a"],["/tags/HDFS/index.html","a9c70dcf76ba8f02168302810bcc7185"],["/tags/Java/index.html","c0ac273006de3be4e90378c27266792c"],["/tags/JobShop/index.html","819dfd2e22a43ea1442aedd0cf72cb2f"],["/tags/K-Means/index.html","bf916c3972d7c669c2a3b52fb4d76d54"],["/tags/Kafka/index.html","a19a1ddbcc81a0fa02aac956eb9a9cdd"],["/tags/LL1/index.html","351eccf1c2349b6475c75c9306b2c06a"],["/tags/LR/index.html","213845b81a51198b2c83e0543016b9e0"],["/tags/Linux/index.html","c51b8a7abd4d17155414cb38e14e6b48"],["/tags/MIPS/index.html","40a2f81c340c459c9e18af510a979be2"],["/tags/MOOC/index.html","3c9253de4a07a2faf9ed72b7ee52238c"],["/tags/MPLS/index.html","ee684b6c12f77ba3f4d802df08a0e45a"],["/tags/MapReduce/index.html","78c28309f50d1019d5baf44d0987210c"],["/tags/Matplotlib/index.html","b171e50a02e8851c4ac44c75e7e5733c"],["/tags/MiniSYS/index.html","d63adb48446770b0de2069bf9ac7b87e"],["/tags/Python/index.html","4a14113e1eb6bb68acbadbc2b029245a"],["/tags/QT/index.html","946195d885d0be64ed49ee5377c3de47"],["/tags/RNN/index.html","235c133b6469c2500caf5ff731851c45"],["/tags/SIP/index.html","13e2519aac7a0099a994e830e0fbf621"],["/tags/Scala/index.html","0e1b0dac110b16e59d3be1a31320e8f9"],["/tags/Shell/index.html","49def44a7c126ddcd329b10a69c8f7db"],["/tags/Spark/index.html","900681da0f637518464f3871e578938d"],["/tags/Streaming/index.html","5fda71699418ee9dc07dfc92a2d23a6c"],["/tags/Struct/index.html","f6b70a0201bf229574df6ffc0c8cb176"],["/tags/Verilog/index.html","1ab29b90dce0f0de07a88b54a0db9f14"],["/tags/first/index.html","5c4b211eaea24946e6a589ee744fd70c"],["/tags/iPython/index.html","7ad49f31ffaf9eeeffd978ffb3ac1325"],["/tags/index.html","d5451feda0b05ce5f5023c50d693bd54"],["/tags/ls/index.html","ae21ad8893b71d2e80f23024ff3f435b"],["/tags/习题/index.html","e29f335e6238894495958ee7a052a384"],["/tags/交换原理/index.html","7acdd2ca1e8134a367d09ebd0a40f45e"],["/tags/人工智能/index.html","5eb2b2f38ba096a6ce36bbc319c98e7e"],["/tags/信号量/index.html","0cad7dbe8a0d05d0587c9db547b29395"],["/tags/内存管理/index.html","08aef701d1fec83134fe8f5d60edc466"],["/tags/决策树/index.html","509836c7bd7e975879ff56ae965e6ee8"],["/tags/分治/index.html","cfc7ba1c52135b0a8ac6da2f70d0d771"],["/tags/分类/index.html","27b821a6a234a335f63a9934cb6ceb5e"],["/tags/动态规划/index.html","d649399c52b007412f5d0a6835270ded"],["/tags/华为云/index.html","0e54069bfe3a1dabd0d95ed4ce13c7e1"],["/tags/单词计数/index.html","4853f16c5b12d039a6a84ef7d2f8f246"],["/tags/可视化/index.html","151c0f6d1711e02d532f2be17e22d254"],["/tags/同步互斥/index.html","f4e8d0cbbbdf82467d9874c325b5b5fd"],["/tags/大数据/index.html","d508f98b1036ae4fd3c7a44961de95ab"],["/tags/学堂在线/index.html","59037f1ac1d95956f1cc205578064105"],["/tags/实战/index.html","e597b4e9e794df16e8147402ee092102"],["/tags/实验/index.html","d86f84b9523ea59f76ba0072ba2941b7"],["/tags/实验/page/2/index.html","2e8fc4faf25dc1d534fbcaeca661ddb1"],["/tags/小游戏/index.html","dee2a6083add54d853a81bb3e989fa5d"],["/tags/工程/index.html","06488eb4dcbdcba4f09036798cc7d9ca"],["/tags/工程/page/2/index.html","1c1b3a55b46903a2e88c9d4e99839562"],["/tags/手写识别/index.html","7068123d9f998e50b4978f6adb5a79e5"],["/tags/拓展/index.html","1cefbc43717ec10d9783dc320206972e"],["/tags/操作系统/index.html","85d58d81ab251e53cf11b5fe12d419df"],["/tags/数据处理/index.html","cdda616dae9f8a41b172d923975395eb"],["/tags/日志分析/index.html","2abced2c50aba738fbe6954aaa80a8aa"],["/tags/易错点/index.html","a07f4dbfb5b1c2af83220d10976f8479"],["/tags/机器学习/index.html","bc24e7097697dd60e41978962e2d610d"],["/tags/条件熵/index.html","02565fa75cabb0b12f23c7cc943f1272"],["/tags/正则表达式/index.html","8f573954c3684bc050a8b129794ff2b4"],["/tags/汇编/index.html","9b9fce1083182da303424c9a32ee5bbb"],["/tags/流计算/index.html","257b0a799fbadc50fe40875520b3ecd1"],["/tags/爬虫/index.html","7c0a2e9b61656d1d4581d5b7d377ebbb"],["/tags/现代交换原理/index.html","d67369380b849657fceea08a17401bc1"],["/tags/生产者消费者/index.html","cf9b24fb37b56cafd71845d60e7e2c71"],["/tags/知识/index.html","55a70958bc673c55c4a9cd80f74bc616"],["/tags/算法设计/index.html","5e84bf7fe0d511639c6f9c35c99fb6f0"],["/tags/线程/index.html","f3a334471893c28af446f6d4c086c103"],["/tags/编译原理/index.html","9f6b6d6e6e2bb958bb237b0b72b207c8"],["/tags/网课/index.html","7628446142a7226c72b8d1143428e748"],["/tags/聚类/index.html","bbc63eaa2a1e2aef292d00fb5ab8f1d3"],["/tags/脚本/index.html","c1d5dd1b58dfac628291060b3f4de17e"],["/tags/计算机系统结构/index.html","5080044a62ee9750c5b7b606634058f3"],["/tags/计算机组成原理/index.html","dc743f050bd927a46c3b1b29b388a5f2"],["/tags/计算机网络/index.html","d3c46dd21ae6f31d2cde0a6c5b2029a6"],["/tags/词法分析/index.html","e4f0d3ec3b9feb1b8f3fcdd6c836a888"],["/tags/语法分析/index.html","d105fbe5effe0b72c2cac8b9cc82da55"],["/tags/读者写者/index.html","42701c10d5246f92c7991639188c5344"],["/tags/课程/index.html","abd5d8f39ac8ebc93a8b3a15f3b9fd0a"],["/tags/起名字/index.html","5db0b333c0916da2867224612cd5651e"],["/tags/软件工程/index.html","8acd9b18c778594be7ffa8c15abfda24"],["/tags/进程/index.html","9da5fd94461779c3ff03f23ee8620295"],["/tags/通信/index.html","c0f8744ae84e1ad7f2d0509e287f995f"],["/tags/遍历目录/index.html","ac08506208b817b902792476daa85ce3"],["/tags/难点/index.html","23809ca476bdfb1f5cd38950fbb3a31b"],["/tags/项目/index.html","e923e2f1d0bcb407c55f18a3e6092210"]];
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
