/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","93339c607d046462cc6e8829026a26d0"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","21e5bc21c982b7afd87e945f89c9302f"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","99bd397626138e60a1694a5039ce58a8"],["/2020/03/26/计算机系统结构-实验1和2-遇到的问题/index.html","94301c4e4a8cf8f6ef341ce5fe5fa318"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","b054ff5187d13f916149318be05082d4"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","214d16a72e0b84815bb859e59b93f309"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","9c58f800af69a9e1141f4b202b1301fb"],["/2020/04/18/机器学习-知识拓展-条件熵/index.html","f022b1f91dac444149d5f23224f36eea"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","806ee8277e49601b3777e10d13dc87ce"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","1c512e0b22ca0546de7fb9084aa72a2c"],["/2020/04/26/机器学习-实验-决策树/index.html","37cc4cb621b993a62220a610a9b9d8d6"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","a0f837cef51e4255f10c8f465c837a1e"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","f93f0d577fad21cf2e9a94646b25fd2f"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","11ddf1f57f5494632c203408ebd7768a"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","43e2189c18e90a4940a66369caae4685"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","7cae0b0de513e5951005241ac753cd13"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","1cbb2ed201720dbffa1e5c1a33c8791c"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","28a8e403f397d11e3f747c799e1bbf15"],["/2020/06/11/机器学习-实验-DNN-手写识别/index.html","b781911f6d2a3e0e85db949276c9fd37"],["/2020/06/18/大数据-习题/index.html","0b99dcfaa1b6eb78b19bb67d415ab6fc"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","52bb3f97b204c1835cd0da27b9d5097d"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","639cb308d64f45df7f8551d6ac50f8b3"],["/2020/06/24/Linux-拓展学习/index.html","e4b3ab1b99d79310663be130256686ce"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","bc9895d1cd47ce0ba332a0b540a6a987"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","ca55795170a6657af64c4c1b5378df3e"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","f5cd53d302af3ca0360204a58c8e3357"],["/2020/07/15/C和C++的struct使用总结/index.html","b273077214c3fd3c8898b6fca5819139"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","3ba4fe31f458412cb0585983d394f741"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","f5959f307602fbc346c2541e5d11826a"],["/2020/08/10/机器学习-实验-花卉识别/index.html","5ea727315435d27735ffbdb2ec4cea2f"],["/2020/08/15/Python-项目集锦/index.html","b48d15554e14b24f4684b8e35be0ea6e"],["/2020/09/01/编译原理-词法分析/index.html","e0d284c73fc27798bc2a78590b5bbb60"],["/2020/09/02/编译原理-语法分析-LL1/index.html","ef607c2cd1dcaf67a5feadcc54bb96a4"],["/2020/09/02/编译原理-语法分析-LR/index.html","ac225a207ca0a5dd4b71f677a28691a6"],["/2020/09/03/操作系统-内存管理/index.html","64d83ccb83c1fa7c884e0c89b0bfac9a"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","d0daebcb013de9e207749e9db0e3529a"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","b8731c95ebc227e7d1803f1c3cb2f49a"],["/2020/09/04/CSAPP-实验集锦/index.html","e9caad2a308ff4ff3bd2595c4d4052d1"],["/2020/09/10/计算机网络-实验集锦/index.html","0834320b5831a38e3493349c0da52953"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","658c161744c8ae49e627d47bcc55c57b"],["/2020/09/30/C++工程项目-JobShop/index.html","de18470866af19a690eb20390f571e59"],["/2020/10/09/交换原理-实验1-时间表调度实验/index.html","6a0d8f16e8dcbbdbe5ba02a96ef2376d"],["/2020/10/09/交换原理-实验2-摘挂机检测实验/index.html","3b1b4d0014ec2a5382c16f3aeed7b562"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","d4a645c2a365af89aafef2e843b52f85"],["/2020/10/09/交换原理-实验4-拨打SIP电话/index.html","03ec17451da861749454a74863ec8a54"],["/2021/01/04/Android-项目集锦/index.html","daaefe236652af3e7821f243d7ad1dda"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","92cf5fa57f0d2f04041c2d48ef94633e"],["/2021/01/04/C++工程项目-travel/index.html","54824d352a37e32eec9c75dc7b55fd4b"],["/2021/01/04/算法设计-分治-最接近点对/index.html","3e30e4fa127500db2afb0ea320a4bdef"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","19277f46598e56d2265740f1f52c9100"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","ed1b847b6256457e7a2e5d416d7f124f"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","ed5746bb554744d1bfc9c97bea05222f"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","fef16ca68bc64615484dbb0e955eacd8"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","19cfb7edde4b8646209ee9c498c39edd"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","9c8eec6b9ac220075682876969fbe2ea"],["/404.html","4dec2a2598d19da88c1c92b0265ec99f"],["/about/index.html","f0d0f9a7df2b70997de42854d811c666"],["/archives/2020/02/index.html","8f2fde26680f2c9b8382d7c91abe9cb0"],["/archives/2020/03/index.html","d50d3b657d56c7c0a5817f43e645f8f0"],["/archives/2020/04/index.html","c943a7c2e620df26887304e7a18e92b1"],["/archives/2020/05/index.html","c1be4d04f2f33b23f83322bfcc136cfb"],["/archives/2020/06/index.html","a22a786deafd6dcaefd6a31fc5b1d8c5"],["/archives/2020/07/index.html","99c0d1d5af167d265930d57d37dd43c0"],["/archives/2020/08/index.html","89dfa433df720d6fb674f6181dbf6713"],["/archives/2020/09/index.html","6566d51d201acb82dab35d7711c0cb0b"],["/archives/2020/10/index.html","5bb8ba19c331ba8b7972d5f50a74a634"],["/archives/2020/index.html","11d89c15a4aea459bf693aa9c70a90e7"],["/archives/2020/page/2/index.html","0fc9a8685becaf23c6f762672e873ccd"],["/archives/2020/page/3/index.html","460cb9c46832760a3ae989dbe0d47530"],["/archives/2020/page/4/index.html","752a36a51ebf5ba6d56332ecc35cb773"],["/archives/2020/page/5/index.html","19150841833c799b7eeff3c7f095283c"],["/archives/2021/01/index.html","af695021f0bc7df1bf9965800ae9b237"],["/archives/2021/index.html","8800ca73f42226fcec9d56b5d3c9cb71"],["/archives/index.html","66198864c961383249bb75beb4e73745"],["/archives/page/2/index.html","66198864c961383249bb75beb4e73745"],["/archives/page/3/index.html","056af1834b4bb472e9e0334651290d69"],["/archives/page/4/index.html","056af1834b4bb472e9e0334651290d69"],["/archives/page/5/index.html","056af1834b4bb472e9e0334651290d69"],["/archives/page/6/index.html","056af1834b4bb472e9e0334651290d69"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/bb/index.html","54f59ad1af7bfcdd975159cb3e74f7bc"],["/categories/C-C/index.html","9cf0e076fdd5055224194696c51b9366"],["/categories/C-C/page/2/index.html","e1a2b353aa34eb4947ff5138dfd1f94d"],["/categories/C-C/拓展学习/index.html","740c14770189ffe3b7c8472fd17d6a24"],["/categories/C-C/操作系统/index.html","3c662246e5c648a4928423d9244d74a1"],["/categories/C-C/算法设计/index.html","aa28681951a2e73c13c30309f85ca80d"],["/categories/C-C/编译原理/index.html","b833986621f82373737cf1897e2cc7f9"],["/categories/C-C/软件工程/index.html","0a4bef18dab3a7a001c8c25ee664cf86"],["/categories/C-C/项目/index.html","c3c4ecc54dbbfa47b2a5d1eaa8550b24"],["/categories/Java/Android项目/index.html","c45b44acec4e57d26f69a1371d2a5b41"],["/categories/Java/index.html","d22e7d44ec08c6798ab9193ca59759b4"],["/categories/Linux/index.html","dc7e9498d58d2ea341f13a4b1eda55bb"],["/categories/Linux/上机实战/index.html","8ff427a480e99e8413ca778d3ee92218"],["/categories/Linux/习题/index.html","0ca870b89adf0c0eaa613d7316c51ae6"],["/categories/Linux/拓展学习/index.html","da47880185ee6c95af227df593eb5767"],["/categories/Python/index.html","d03d21929a94457ebeccc033de4d045a"],["/categories/Python/爬虫/index.html","30bb8a1862385c1ca67f03e106f4a804"],["/categories/index.html","70ab4ea512d62ae8f10ebada38d8006c"],["/categories/交换原理/index.html","ad39b67d2128442a516318b20915716b"],["/categories/交换原理/实验/index.html","c291af5cc6d24bd5b4e97c0f1e8ca4dc"],["/categories/其他/index.html","58ab58f3dd22dfbe1501e9807346b7ec"],["/categories/大数据/index.html","5c9973dbcd339ccb112d12d1732425ff"],["/categories/大数据/习题/index.html","2f5c63686fb41598c64868aaed23ad55"],["/categories/大数据/实战/index.html","a8ae4b356cb489e005e2c5e94810d4ab"],["/categories/机器学习/index.html","d6085df77125c7df4ff6b580d05797a8"],["/categories/机器学习/实验/index.html","ee3a376b9331d86853c8da16c0dcd889"],["/categories/机器学习/知识拓展/index.html","4de41e54918314b0cfd8d4167e1f6095"],["/categories/现代交换原理/index.html","19a666f74b065b51f7296fb0085d840d"],["/categories/现代交换原理/习题/index.html","d421499fe6e7e6afc125c0c7129caa57"],["/categories/计算机系统结构/index.html","4daf559ca92ed06cea7f5b35a0217319"],["/categories/计算机系统结构/实验/index.html","91415f2dd840ae8feeca9a88c50d4044"],["/categories/计算机组成原理/index.html","ec9ff1f27a676e96f157fa4ddb18b96e"],["/categories/计算机组成原理/实验/index.html","0f677a935ec2eadb3a42cfc5fb481304"],["/categories/计算机网络/index.html","789d853235d8138811c9f087ffa5bea8"],["/categories/计算机网络/实验/index.html","b385767d06467044cb5b4975080a2a5a"],["/categories/集锦/Android/index.html","2016c2e349785df6434b921143be91ac"],["/categories/集锦/CSAPP/index.html","dfa17ccbc383350dbb4fe5a99531e225"],["/categories/集锦/Python/index.html","e6ecd19fc8a9f0feae32ec656d1e8946"],["/categories/集锦/index.html","a291f337693e9dbc5c7bddac7c08f7be"],["/css/first.css","01a90baf99fa8f190becabd973782198"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/style.css","29bd14d027343cdf06b66cce6bf66453"],["/friends/index.html","c799fd38028dc20709bcbbdf05bae6a9"],["/gallery/index.html","63f4bc7639ebb10460b077618443184f"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/games/tank/index.html","a4a2448b8b53e14bf7bad5c1f71e614a"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","6f0e0d50724f4010354fa996c9efe2d9"],["/js/aplayer.js","6e605f0855251e101d3024646f3eac60"],["/js/app.js","1948329f2fd7e750ade4bdc49138c09b"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","e03a0dc87a7ae1c9a3dd20fd5cab52b5"],["/page/2/index.html","574cab416a4fa801152ca301331ca8b4"],["/page/3/index.html","371e284f51f316cadc04be204a8b6ae8"],["/page/4/index.html","699eef37ea4b17c393227d03ca9f0c08"],["/page/5/index.html","8577143ecb219df2a365f332358ae6b6"],["/page/6/index.html","0ae936b09cafa76b7697bf43f6c1d697"],["/shuoshuo/index.html","64adce42ba28c992fd5f636262b1f8f3"],["/sw-register.js","d61c894e07ba2ff33dca8ebaa965a408"],["/tags/AI/index.html","f1348ad11daf0ddcdee4ea8739e7e9fe"],["/tags/Android/index.html","173ee5e888af949d527e6b253ca2bd28"],["/tags/C/index.html","6cdc173b019f49ac9d5227c95d9adefb"],["/tags/C/page/2/index.html","70a8d807956440e23f250c731b4951ba"],["/tags/C99/index.html","c00b3583852d0b7785266b9b208b020f"],["/tags/CSAPP/index.html","8948ae53f631de0cd04d8f1fd415b61f"],["/tags/DNN/index.html","79c9e0aae824e8a1ef8b4367d9d161d6"],["/tags/DNS/index.html","aeb6a7f37dad255a6953356068b8ab05"],["/tags/FPGA/index.html","bfcf1b8f2d36b9f0e532eef4ea60a6d2"],["/tags/HDFS/index.html","26fdae8876033b787197def90d6c4250"],["/tags/Java/index.html","513eb07d4debc4e6b0b36cb46fb8e586"],["/tags/JobShop/index.html","e06d4594b5c34a203cd1ddaad6debba7"],["/tags/K-Means/index.html","ca923beb650ad0512f0f189c62af6f0c"],["/tags/Kafka/index.html","4b0bdf85a1f01c361959ac1bca85b574"],["/tags/LL1/index.html","576d6839e4ac20630537c8d43f665c95"],["/tags/LR/index.html","b59e878ebe8595b928db8ca9ee3a6fda"],["/tags/Linux/index.html","25241e6977936e62553df455cf61bbda"],["/tags/MIPS/index.html","8b047932cbc12ca9f7c7b6ed49af39ec"],["/tags/MOOC/index.html","6439345693fb5891e4ad66fbb0703101"],["/tags/MPLS/index.html","7b207a12e7f043840547ff1741739d51"],["/tags/MapReduce/index.html","7d4b5a8e0e383b0b871593ba8e354e21"],["/tags/Matplotlib/index.html","dc86796458de8e16b28315d4868b2b3e"],["/tags/MiniSYS/index.html","a65a98f6cc09d0c4086152bc257101c1"],["/tags/Python/index.html","264988a07836cd7e5ec34e778ee04e07"],["/tags/QT/index.html","8c7aebb581ae8e7786745a506f5ac118"],["/tags/RNN/index.html","c7c1eea7a9ab867a7d03b383040cf39b"],["/tags/SIP/index.html","528e6da492dfadb054bee5897344cd00"],["/tags/Scala/index.html","a11d620779c158dd707e05064cc6b1a4"],["/tags/Shell/index.html","53b8bfdfe7cfdbef7f8d3ea2c41ad2d0"],["/tags/Spark/index.html","01627eebd34ae5b664ff1cb911346568"],["/tags/Streaming/index.html","f7fc8eea36a70448d4913c62e3dd0f86"],["/tags/Struct/index.html","589e07b259937e815d6f054213248aca"],["/tags/Verilog/index.html","66976892c893ebd7292527304874fbd3"],["/tags/first/index.html","9a08ec999ccd72fd22756b0f54c86d56"],["/tags/iPython/index.html","d50bab8684fe20373b08e9a6c3f798da"],["/tags/index.html","1ede135e74551966758c90d4306b4223"],["/tags/ls/index.html","877c68d1ff903c1919bb12113a30e9da"],["/tags/习题/index.html","e1917ea16e505e43f17d23a3815eaa58"],["/tags/交换原理/index.html","881f6678cab2a8400bb9a63195a7fbd7"],["/tags/人工智能/index.html","1d7c1f68cae970f3dcec82b3ef70069a"],["/tags/信号量/index.html","3f2cc93e41fb6e900667d5884b58835d"],["/tags/内存管理/index.html","1b4b2d48eef615d915625207e44214a8"],["/tags/决策树/index.html","ffd799cfd6d31fa2c32ec65e9a14efb5"],["/tags/分治/index.html","0e38dd405997d98a627354a3914f3c73"],["/tags/分类/index.html","ad7079fac96b3ae3dae620b9871e6215"],["/tags/动态规划/index.html","27d146c2d970c3469b422a1f0f33e36b"],["/tags/华为云/index.html","fd34f0742cd01fd3621b255b5534d6b2"],["/tags/单词计数/index.html","fe93a7c94fb54eef36a65cd0936e0ab8"],["/tags/可视化/index.html","f6a3bd5b27ff2b8eab579d3da8320d08"],["/tags/同步互斥/index.html","b6625ec10ff297a5bf7c4df906390045"],["/tags/大数据/index.html","d93afc9952a1c8c36c6c3decb98418ac"],["/tags/学堂在线/index.html","3dda6a4698188d392d100c59ca7edc48"],["/tags/实战/index.html","fb16804aa2b46a0f16cef158141906ef"],["/tags/实验/index.html","993b3c72371e9a38154dbd353a73f989"],["/tags/实验/page/2/index.html","2248914583403af4e23a2712a7b7c5d9"],["/tags/小游戏/index.html","f3a002007bf0ff5e6dd4063bb9077eb5"],["/tags/工程/index.html","75a6fdf5aeab52f0703264b68755005f"],["/tags/工程/page/2/index.html","ebcecc4136c1cb7fa2b825c2887aa79e"],["/tags/手写识别/index.html","c9ed0f2f7a84ae2c23b4059ad24fb482"],["/tags/拓展/index.html","78a45653b31dc0467c1576af15c835a4"],["/tags/操作系统/index.html","2b1e4bd89f2c38b5e0a1d9e450351f04"],["/tags/数据处理/index.html","df38a5179d93a5901e2b6d7889cd1bd0"],["/tags/日志分析/index.html","32875241eedd6d449b00f3cdc4df8136"],["/tags/易错点/index.html","595fcdb431d88a05a376ed2df7923518"],["/tags/机器学习/index.html","c98198f7642cc681c20c9c3b877616a2"],["/tags/条件熵/index.html","d2648a36873567bb13c6634879ce7b37"],["/tags/正则表达式/index.html","e72de0e5ae6e9039e95a0f9fdadb701e"],["/tags/汇编/index.html","8205425ebe64426b60a9ef7dec81ef8f"],["/tags/流计算/index.html","b1102ab81152e23f9b97a24fa34e446c"],["/tags/爬虫/index.html","db833f91c3c24be8bc9f19fd206dab57"],["/tags/现代交换原理/index.html","8a7819359d4b94db8c18caa5aac6b5be"],["/tags/生产者消费者/index.html","bf7ee734902ec2023b63841374e65975"],["/tags/知识/index.html","4761333762abcc1f28ed99d2b2cdaf18"],["/tags/算法设计/index.html","40c5f6db0253940041206e9560a2313d"],["/tags/线程/index.html","d93d2a56b0c747cffec3c44b0359f922"],["/tags/编译原理/index.html","eb57f18910477d36238b5ba2a3e452db"],["/tags/网课/index.html","3748f1b10e70c939f3ab1c39f97b15fc"],["/tags/聚类/index.html","760ef621216f6c1ef5aa74f4b9c48f25"],["/tags/脚本/index.html","3acd790ad084370cad60e7b42e668e39"],["/tags/计算机系统结构/index.html","d26244f83ef3f40c77b87790a70716d5"],["/tags/计算机组成原理/index.html","693c57e98c53c8d8443a70dbdfdf2c6a"],["/tags/计算机网络/index.html","6640862c5db01f1b374108ee6c062ca5"],["/tags/词法分析/index.html","1313a7cc666a5bac0ad7b3d4c9e4ae6f"],["/tags/语法分析/index.html","a0e7eb133059de78ee870daec3450ddc"],["/tags/读者写者/index.html","0736bec004d6b443549478802ff251bf"],["/tags/课程/index.html","ade9d92450224f296e9b6c760241a301"],["/tags/起名字/index.html","3a2e0c567c9f11f1d347157f6e4cbee7"],["/tags/软件工程/index.html","8dece3f85c5b58fb04f2b3e72e51bfe6"],["/tags/进程/index.html","cf61756dfd777703d8b4c954e9826912"],["/tags/通信/index.html","863071c1123bbf35cc827324f64b8d2c"],["/tags/遍历目录/index.html","b6130ee1d88ee1a6ebf034881097a891"],["/tags/难点/index.html","8b4ee21b94b8ba8928d1e86ddb732d0d"],["/tags/项目/index.html","c6ceb57d1703d06b1a2c57484a4761ba"]];
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
