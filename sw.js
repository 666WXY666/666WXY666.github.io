/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","029ace0ad0314cd558929b3a810a1140"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","10e7d8ba0cb9fa9f6ad790fd861a5221"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","70c11dd2d7130d1a09e6dfdf4aa6a899"],["/2020/03/26/计算机系统结构-实验1&2-遇到的问题/index.html","449412a3c9b609d1d581b49dbd7d7907"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","b1afce6069221bf25f78fd39cac0eab2"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","e063bb979287c20206048f0c80d0d379"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","27758c2332d79e4eb3037f21417dc3d5"],["/2020/04/18/机器学习-知识拓展-条件熵/index.html","d05c9f4e34ace6102bd1f4cb949aba0c"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","c70ef97c3475f2184b0bfebb326bda38"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","47231a05078c7fea5992f0ebfee98582"],["/2020/04/26/机器学习-实验-决策树/index.html","8d19b0d07117256f616e76db8966fb7a"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","c273f4d6febdf37ee3778f3890147ec8"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","6cbf221f1600d470fbb54f722f621649"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","e88f9f9cfe1d48f04a868cf437fa9c02"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","b49a29e433d2e39244aa0e641bd155fd"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","72cad7b5f4ff5df7e509b1ab506f7448"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","ee752373950f5de2188aece4e7f3a0ec"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","a4a1e2029d855015aad6546efe1da8dc"],["/2020/06/11/机器学习-实验-DNN-手写识别/index.html","a53edf3bee68eeda8402c37e04234317"],["/2020/06/18/大数据-习题/index.html","1d1edc1aec599f85dfcea64c9cfaeae3"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","4b7d6319e34a8439fa332ce6563d1f53"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","d682ba6a9a3392bb6527eec18f72dd4c"],["/2020/06/24/Linux-拓展学习/index.html","a0d71a74610a8d79a6ca5b0037d7bb59"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","82a1d55d9d6a50a46d8fd78cea8ca014"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","6da1c004d50086f4fa67e231d4f05388"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","2c4d8aa6906b47f6837b46da9550ad53"],["/2020/07/15/C和C++的struct使用总结/index.html","00c47a95ea60b8b3f24adbf62f3488a3"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","6ad3859b336be90df719a2a279bfb0e5"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","a7b186cbf3a8d464c75b4b9f96109faa"],["/2020/08/10/机器学习-实验-花卉识别/index.html","e395ae08d039d1e79a5d0cf754f38c78"],["/2020/08/15/Python-项目集锦/index.html","47e7c9311e53da5ced50d91ec0d072c8"],["/2020/09/01/编译原理-词法分析/index.html","fb8f048be28d38be6e785458a903cc92"],["/2020/09/02/编译原理-语法分析-LL1/index.html","e40fe0ee457e373d7011f5cd06be988b"],["/2020/09/02/编译原理-语法分析-LR/index.html","3d384b36d2fc9a3f739734f859fd5057"],["/2020/09/03/操作系统-内存管理/index.html","858625bb65c9371f7ab245f0c7d385b4"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","41a439c4223aa4784b0a69cfa4445daa"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","2da995d94c5f64538ddb72175a3ce93f"],["/2020/09/04/CSAPP-实验集锦/index.html","b6538f47aab8ffec13212231fcf9d7d8"],["/2020/09/10/计算机网络-实验集锦/index.html","00fd38ad5e9022f229a948a5717308a4"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","d3fff5314473e6be1c1d2be3977ec402"],["/2020/09/30/C++工程项目-JobShop/index.html","4751366f03817fcc9a47e78e417de117"],["/2020/10/09/交换原理-实验1-时间表调度实验/index.html","a72fea2540edc4f8a54c65aa387d8e9e"],["/2020/10/09/交换原理-实验2-摘挂机检测实验/index.html","9b12ff47894b77bfee48fd058802768c"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","2581d00fb6dcaf1856be773f33d956fa"],["/2020/10/09/交换原理-实验4-拨打SIP电话/index.html","12019c78a6273f08ad7c09f36c729354"],["/2021/01/04/Android-项目集锦/index.html","59603372b0d22d5229a08a1c63f374b1"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","08a5e4c17979524a3f5b8f96a4d5143d"],["/2021/01/04/C++工程项目-travel/index.html","a417ddaebda9b24229aa01c55a8c6dd7"],["/2021/01/04/算法设计-分治-最接近点对/index.html","8c79117df9b36f1cbeb226381fdb46dc"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","676a062d58e7ec39dded3e22457bdadc"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","2af7a46e765b220f16aabb6cd64b9692"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","ac38f48041238ed99bd70cad194eca48"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","51631ba72de07a403abf5128d2bd7617"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","1987e8d32336fbe91fef96cf7ff867d9"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","1e191afa7ecca975777582a0c4731b11"],["/404.html","63f1f317db5d982d0c064ab25b96a3ac"],["/about/index.html","ff54d1203db47111f1d4c4d919375004"],["/archives/2020/02/index.html","6fb1a70560d6f2b4db24f4feedbf9971"],["/archives/2020/03/index.html","6990a3f81ae8958a09ef5b661f8bc812"],["/archives/2020/04/index.html","3c1a076d778c16dd39f0ed985ce19e50"],["/archives/2020/05/index.html","eb7181045baffa3c96173979b6f0e4e2"],["/archives/2020/06/index.html","544c23d7ce2b4f279879863c7e7fc70d"],["/archives/2020/07/index.html","1837b5a597febc91910d6fc7accb20b7"],["/archives/2020/08/index.html","5e7b986f74cb881e244bf78459645c75"],["/archives/2020/09/index.html","ac31df761b009b7adde74a87db319036"],["/archives/2020/10/index.html","4ed48311ea9b0aaeafea079c01769137"],["/archives/2020/index.html","d5c69ce56464df40eeedb14edbb48f79"],["/archives/2020/page/2/index.html","c356efb8cb0f5efee40a1c8f635ddb40"],["/archives/2020/page/3/index.html","f9ab686828d799ea77b4b08e3728d64f"],["/archives/2020/page/4/index.html","0b55b3bfea138a0f0954f7716e250516"],["/archives/2020/page/5/index.html","83d675320cc2efd0e107c5c178f7c242"],["/archives/2021/01/index.html","ae66f9e1dc8e7bcb8852e72b8e259f06"],["/archives/2021/index.html","b84944e9b1c7d65a5ed48a075373edca"],["/archives/index.html","147f7bd67bd8340a27529c121c70c2e2"],["/archives/page/2/index.html","147f7bd67bd8340a27529c121c70c2e2"],["/archives/page/3/index.html","ef7e849922dbd132d1da10c41a2c882d"],["/archives/page/4/index.html","ef7e849922dbd132d1da10c41a2c882d"],["/archives/page/5/index.html","ef7e849922dbd132d1da10c41a2c882d"],["/archives/page/6/index.html","ef7e849922dbd132d1da10c41a2c882d"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/categories/C-C/index.html","caab2bb78886ea3eb0ab06fd7eb4468f"],["/categories/C-C/page/2/index.html","332978813b003e6fcabfe3d38da4fbb7"],["/categories/C-C/拓展学习/index.html","842de85703d029b278a79187fad10893"],["/categories/C-C/操作系统/index.html","f9d01e02f1f37b3e37e1d2e6a3b8f102"],["/categories/C-C/算法设计/index.html","c1ca8e96b7d4d3c1120f7b6db0da3161"],["/categories/C-C/编译原理/index.html","3ec10c39558ee2f2f2ed55c83cbba2d6"],["/categories/C-C/软件工程/index.html","30316536a8ad3c45a7f18707e2c08655"],["/categories/C-C/项目/index.html","ab021cc46da90f2b63a91baa9af02cdd"],["/categories/Java/Android项目/index.html","efffef523dbc73418d7aeaa0a441cbe4"],["/categories/Java/index.html","861704d9eb9ddd46054098e433a88f3a"],["/categories/Linux/index.html","3c6c41ab58ee750f93bc032523f0a595"],["/categories/Linux/上机实战/index.html","1c35e664302a932d4c48975f4b957808"],["/categories/Linux/习题/index.html","55dd2695352c5c00b9c617d2be9c145f"],["/categories/Linux/拓展学习/index.html","943a35d1d40b0d7ce2d295931fd33f60"],["/categories/Python/index.html","82162f7e1af67a8d376862adbd4b933e"],["/categories/Python/爬虫/index.html","6277f6d9ce06cebda1cbda5b5b9246d6"],["/categories/index.html","a081dc6efb7b742f1e5b4fd612ee5559"],["/categories/交换原理/index.html","def062d122cb235130dd962cc641cd18"],["/categories/交换原理/实验/index.html","4d741128b8f6098529a67094330ae424"],["/categories/其他/index.html","2d756b326c0c8c2d1f08741ad79d79f3"],["/categories/大数据/index.html","b46ed09771a624e28bcb46f7e15a4c9f"],["/categories/大数据/习题/index.html","66c7aec3801eb54185c2955ca9bdc795"],["/categories/大数据/实战/index.html","524f5c5811c9d442be579462479173ee"],["/categories/机器学习/index.html","34ebe707cbaf9af1efdbaa35a1f82968"],["/categories/机器学习/实验/index.html","f0752322cf7c58678c1c4880e188f5be"],["/categories/机器学习/知识拓展/index.html","483c58157ae9ba493d6bb751209ac1c0"],["/categories/现代交换原理/index.html","36a2309417b6a80d652e308c2de28c53"],["/categories/现代交换原理/习题/index.html","8c7aeca6e0ff2a6ea7e17296c283a715"],["/categories/计算机系统结构/index.html","18f0949bf7f4424e2afea557a937bb2d"],["/categories/计算机系统结构/实验/index.html","a9e68b6601137db87a4521aad770b358"],["/categories/计算机组成原理/index.html","1cf4e879bf8d2550e9e92db43d3d3eef"],["/categories/计算机组成原理/实验/index.html","278449e7cb991c14eab5d2e0f92e42dc"],["/categories/计算机网络/index.html","48c9a0b3439bc424d9ae8d5b23042b11"],["/categories/计算机网络/实验/index.html","64c81787362c07dacdb2f5f0a70259f7"],["/categories/集锦/Android/index.html","13eb4a7165649466d993f47997bada1b"],["/categories/集锦/CSAPP/index.html","9ccc28d6d23bc3bc9243922cdbb59d28"],["/categories/集锦/Python/index.html","7f4d02f055d34bc3bf9db987539f42f0"],["/categories/集锦/index.html","d5f8aebe8ff86d3b9864be09df3a0015"],["/css/first.css","01a90baf99fa8f190becabd973782198"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/style.css","29bd14d027343cdf06b66cce6bf66453"],["/friends/index.html","73bbb6bc101f8763abfd40bee52b12f3"],["/gallery/index.html","63f4bc7639ebb10460b077618443184f"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/games/tank/index.html","a4a2448b8b53e14bf7bad5c1f71e614a"],["/index.html","55891dc5d8fa89190b107d5a629b3888"],["/js/aplayer.js","6e605f0855251e101d3024646f3eac60"],["/js/app.js","1948329f2fd7e750ade4bdc49138c09b"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","9df17ea941f8e252734417f649a70b76"],["/page/2/index.html","95f770d9f6d94d0207343171741dc7b3"],["/page/3/index.html","b54108db02d89844aa70adb79064e7be"],["/page/4/index.html","16421704a8519b3f5c3077361e5ddbf3"],["/page/5/index.html","6a79d6c677e26f723f8de03397b1cbdc"],["/page/6/index.html","3f099f5d35bf0d3eb09fecabaee909e7"],["/shuoshuo/index.html","e3333a93e832196010780b84f308cf18"],["/sw-register.js","2e9f0ae8c21e852e71aa6d32ae39bd5c"],["/tags/AI/index.html","40653fdc5cc29e1290b0a5bc4c3da2fa"],["/tags/Android/index.html","124dc688ccdc0939caf12800e4bdcf17"],["/tags/C/index.html","57786d0d22b43a306a0a48767fb0f996"],["/tags/C/page/2/index.html","114e45c627b671bd6e8cf80cc4cf1499"],["/tags/C99/index.html","ba962ce67ee3c5d140c1e4251a5b814e"],["/tags/CSAPP/index.html","8580f1e38d5a42345edc8c700b234f7b"],["/tags/DNN/index.html","27f0d2e08c049184a7a9fa37876b2b66"],["/tags/DNS/index.html","a9bc821185407cf4a6fc6d8008af55d2"],["/tags/FPGA/index.html","1f18113946352c40b370d38ea73f2eca"],["/tags/HDFS/index.html","6a14e130a6f0e2c0cbf5d0472624773b"],["/tags/Java/index.html","519e9895496cc3415a15de9a4b0ec5a6"],["/tags/JobShop/index.html","461f9c8fc1283b4dc51d678b88bd7557"],["/tags/K-Means/index.html","abadefdd438b6acd432282d677455966"],["/tags/Kafka/index.html","ff463beb3f7ed700c785008717764c63"],["/tags/LL1/index.html","f61df2a98f978aab740d48b73b30215b"],["/tags/LR/index.html","cb1f3f0fba5a29fbd54e63b6681f522e"],["/tags/Linux/index.html","48ddccb90cacc20c8d82d0c2677c8462"],["/tags/MIPS/index.html","a6bc1a9f9e857a867fad500b55ffa5ac"],["/tags/MOOC/index.html","baed71383ce54bf91d6a760cff14d8bc"],["/tags/MPLS/index.html","f16d9434c8330bd8c020ab62e45ca030"],["/tags/MapReduce/index.html","879842ae579b2079c959891abdc18f14"],["/tags/Matplotlib/index.html","b9508624213394bdbf2caa7b26f77b0d"],["/tags/MiniSYS/index.html","a8df9e20c1457e54811e99cf8560a03d"],["/tags/Python/index.html","7404ffbed5408f1a0ac7dfe0bc521038"],["/tags/QT/index.html","774d6fb9a2578481049a5ddee0c8d560"],["/tags/RNN/index.html","043099f218b4c520a0d3a6a3d765f63b"],["/tags/SIP/index.html","53b45dc766ff88c54d6da5d4082f442a"],["/tags/Scala/index.html","90bd5b0fc575c09fb569ffc7fb3ce234"],["/tags/Shell/index.html","17948999c41df512cc5c970eb783e052"],["/tags/Spark/index.html","01cd1f691e42ae1d47c619013e4e14cd"],["/tags/Streaming/index.html","82d15b977a1c7e88b3ebeeca91d15f75"],["/tags/Struct/index.html","87e1b03601a5b4846d36547561a37582"],["/tags/Verilog/index.html","a6945b75fe8cb24de0e0cddd665ab153"],["/tags/first/index.html","9a48167a0f67eb46dd7a0fb83ee6cb40"],["/tags/iPython/index.html","71198b44f3ce60523aff91a59a7c25f8"],["/tags/index.html","3054d102ad0706d2635105a1c1bb17b7"],["/tags/ls/index.html","7d44ff6246a1190c07a802ac66d9e743"],["/tags/习题/index.html","d829e770c57b490aeeca17955fddd36d"],["/tags/交换原理/index.html","151345221025b80180a3d91257d5f502"],["/tags/人工智能/index.html","209f30b8ec31fccac4cae2535ef31f8c"],["/tags/信号量/index.html","fa62f6072c4ed47ccd8a09a376402cf3"],["/tags/内存管理/index.html","d62ca44bc6ed36aff6eef62cc2759144"],["/tags/决策树/index.html","06f169551c6da40005cdcb76a16dd68a"],["/tags/分治/index.html","437947ab87e848db3a032a29d5c4c17e"],["/tags/分类/index.html","c52c3b53a4a5f9545d2a1a6c288b1b02"],["/tags/动态规划/index.html","ca89a7dd64862a5d74b6c7835bc288ce"],["/tags/华为云/index.html","fabf8474810abac487adf7478be767ca"],["/tags/单词计数/index.html","a8ae23a98a2414dd95d7978826045faf"],["/tags/可视化/index.html","dff74aaa94a1c93f60d30fe1f2e5a656"],["/tags/同步互斥/index.html","3c01ee4b1626264a59cb417f1f702dd5"],["/tags/大数据/index.html","19801bde254303babc0ad788640efb8e"],["/tags/学堂在线/index.html","59aa53cd9951668651a30e652b10ef2a"],["/tags/实战/index.html","e3850450dfcc54c5d477dc000b3b0c2b"],["/tags/实验/index.html","bf2cf7af54388887f6c82442dc7be118"],["/tags/实验/page/2/index.html","f67ebc17fa7863757b2990075765a7d8"],["/tags/小游戏/index.html","79b76481e9d42d074feb5f17453cd2af"],["/tags/工程/index.html","261b5ba5bd1b815329f1d88cdd5973d8"],["/tags/工程/page/2/index.html","e1eec0e750061c430f0b031a7ea0609c"],["/tags/手写识别/index.html","40fb88d88da88d09144f1e1da864ecb2"],["/tags/拓展/index.html","8171e62c9a0aa7f7b9e6844540c27481"],["/tags/操作系统/index.html","496e8359f96744020608ea04e11b44b6"],["/tags/数据处理/index.html","e964634b2c758d2288815c206d9f3851"],["/tags/日志分析/index.html","fec2c34ae9bd215263bae9330ba2c0f9"],["/tags/易错点/index.html","32e79f5748fbaaf3172d6140e9d47a3c"],["/tags/机器学习/index.html","64b8452013abb0ce26ab3f875fe23ade"],["/tags/条件熵/index.html","65be20b89ba621aa3996423359a8bae4"],["/tags/正则表达式/index.html","f6e0c72ab201811c2f6887c3b5e7f77c"],["/tags/汇编/index.html","4c1a5f802431a5568999eba5816c24ea"],["/tags/流计算/index.html","f2b489fab6983c510f139ef420ea5b7f"],["/tags/爬虫/index.html","0563807f1fd3a49033ec9a0dc6041de2"],["/tags/现代交换原理/index.html","620a27ae82d79c7ad14c5751e2f0c35e"],["/tags/生产者消费者/index.html","75b50b99e2fa4eca07fe97c29c0503ca"],["/tags/知识/index.html","ee4a07fda040a21dd38b1238dd22f1a6"],["/tags/算法设计/index.html","6af1680598b3440214bab2d6302b8f0e"],["/tags/线程/index.html","56087fc34252db7b3cdabb389e802cf5"],["/tags/编译原理/index.html","46c01ff6061330ac3c346e83bd69251d"],["/tags/网课/index.html","cd9d90b577ce44b5017e77a78ecec4ec"],["/tags/聚类/index.html","0ff0b288fac9fee4c45ec74a84d718be"],["/tags/脚本/index.html","c180be55d30dbc083c1b0a96dcbb0a7b"],["/tags/计算机系统结构/index.html","ec0640142edf34d377be7472c413619e"],["/tags/计算机组成原理/index.html","e08a00590e642285fd6e2f7df59c161e"],["/tags/计算机网络/index.html","30b62548e2b76e57caa71ee8297fdb0e"],["/tags/词法分析/index.html","732e576d7aacb233f56dfb162dac49e2"],["/tags/语法分析/index.html","6dfb478374147c8c4fceda24407c89c4"],["/tags/读者写者/index.html","1e1795df0a3e08de78900c2a8405da88"],["/tags/课程/index.html","78e3a05889affad23baf30a585e59f94"],["/tags/起名字/index.html","5a4f8d0de94aa52354a36fbf97bf247a"],["/tags/软件工程/index.html","8f15bbd514c033a68993bbaf5b2ecc5a"],["/tags/进程/index.html","aa562511cd6e92721fbc95994451ca0d"],["/tags/通信/index.html","e0067bb6ae7b3664a4c21e3a5b9f2a0f"],["/tags/遍历目录/index.html","b5d468f58aab3626a7cfff3d3c1350b1"],["/tags/难点/index.html","2620ff1696a9f9dcc7df2f0c00021941"],["/tags/项目/index.html","f1ca34dda591afb11c044be1596aca41"]];
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
