/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","59a768681a264f8fb37d4998174edfdf"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","73b0c831b80cd3aa73dab79305950e5f"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","43fafbe501db910546b70c2167e63e4e"],["/2020/03/26/计算机系统结构-实验1和2-遇到的问题/index.html","f1255b919b18b467bae28449250d207d"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","38a1accd26556bcc5ffe5e83d33ee073"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","cc3344f875db56e41750f6f2472ef208"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","138f73110b14cf407768926328ce47ec"],["/2020/04/18/机器学习-知识拓展-条件熵/index.html","6851ecec6cd4b108ed515c586d635afa"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","7eff3ef93352a91c11a2861af594eac8"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","9ce24cd8de152053d49e392436da2be9"],["/2020/04/26/机器学习-实验-决策树/index.html","7b981252c2af7d969d2b11d1e4fe4734"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","b9421ece8e9e5c6ff8e5b71acae3ecea"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","3e09a0a2e4cfb3c42a62f56e47d08e02"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","58006375db80e57ad4bdac93b8ed6b7e"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","d0e27fb27c9f61a46602141afb45b7bb"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","fd991d5e23cb696bed27a5a8b7c5665b"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","cffbad4a3805b4c959af92dde773109b"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","8ccbd3835d8682a89fcb0d58b4499f77"],["/2020/06/11/机器学习-实验-DNN-手写识别/index.html","572c9881df906b6ab1f308b72e6f186b"],["/2020/06/18/大数据-习题/index.html","fd08071c7d410233754a09361c012ea0"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","19cad74c7bc95c712bd9fa7f36dc5fed"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","20275a3c7178502b8149783a4a0bfa78"],["/2020/06/24/Linux-拓展学习/index.html","409f6dfb65234e1c856a5ae04924abbd"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","f216a9577f25d71e643f5ded12e817de"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","a6d49476369a99ad0fa1b6e3467854b5"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","0f24c1a28692919ba119499be0a978ec"],["/2020/07/15/C和C++的struct使用总结/index.html","809ba792b2e2b60bf70f1707a4eab31a"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","6b5b663ce558cbeab269b0aaff685d68"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","7cadf30148571421544fe86328abd28a"],["/2020/08/10/机器学习-实验-花卉识别/index.html","7e77ba9d12e886106b8dbad4ad2a2887"],["/2020/08/15/Python-项目集锦/index.html","bc790f6483118ca5b89337780f68df1b"],["/2020/09/01/编译原理-词法分析/index.html","da22ab9cf493a1fbed0cc887be18f8d0"],["/2020/09/02/编译原理-语法分析-LL1/index.html","6eedecd1327205b2cbe19ba5b039985a"],["/2020/09/02/编译原理-语法分析-LR/index.html","bbabc18f4c9f45d8915cbd8c483337c6"],["/2020/09/03/操作系统-内存管理/index.html","b34661ee4a66d7effdee7d20f8b1d07d"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","e5d29a253c7b899909c40bf2dba7ffed"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","336739a0ca5d62918bf591c40fc31706"],["/2020/09/04/CSAPP-实验集锦/index.html","cf2022526fa950c81f343838ef0858f6"],["/2020/09/10/计算机网络-实验集锦/index.html","1bd35fb9d83a0fe62b3771bbc68a7ccd"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","17d842c48771e9546482587e623240fc"],["/2020/09/30/C++工程项目-JobShop/index.html","0c2405fd29659db96a42024833866f19"],["/2020/10/09/交换原理-实验1-时间表调度实验/index.html","aacdaf84d5df0e7453d3fc46d3e2d113"],["/2020/10/09/交换原理-实验2-摘挂机检测实验/index.html","8c4723514736c554d2bc0344c602d7be"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","8c66eabea2a7d8880ba13aeba47f00ad"],["/2020/10/09/交换原理-实验4-拨打SIP电话/index.html","861995376e49d4a982d5fe7d6938ea13"],["/2021/01/04/Android-项目集锦/index.html","5d99cc65aa9e155baba3be8e40bb4182"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","39b02dbeec6dc814d478b77771dbfea4"],["/2021/01/04/C++工程项目-travel/index.html","a5440d9a5d9f59a2621ba04159684e59"],["/2021/01/04/算法设计-分治-最接近点对/index.html","a74914c6096b8d8b3862be6f2c2f10da"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","cd5d0b65632428f5881d29d68f46fd4f"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","504fcb92e6dc93d2682b16b12750e1d5"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","b613721e2137bc2a72ba1409d51a781d"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","37ee3823c1845ea893b6d6206750d90b"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","96fdfee212c0d0deaf5d9a5870529ec7"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","c3f70bc2eeba47a4653d2a9dd522fbf4"],["/404.html","e5fe08760a6ec1e0c258745d88a8fe1b"],["/about/index.html","5bc2d0ebe4bc3a70d987e8b9f8979763"],["/archives/2020/02/index.html","4b7dc56b49eb5e2408a62f73d64ee5c6"],["/archives/2020/03/index.html","e47155a2b122c70d4740bb2c029bd730"],["/archives/2020/04/index.html","e171500a118874abbf21f182902e6f9e"],["/archives/2020/05/index.html","087d6d4cfaabb53e153dbc62a9788d92"],["/archives/2020/06/index.html","2a4ec286d92b06afb7b188c9c4b8a541"],["/archives/2020/07/index.html","0637dfa1d26356f32ca1930747b10da7"],["/archives/2020/08/index.html","92a558bd13184a309453af737cea750d"],["/archives/2020/09/index.html","e3348d4a3e3702f294a46b48df779ce2"],["/archives/2020/10/index.html","dd55cb7320911cdd4006fa3a1577460b"],["/archives/2020/index.html","0b8725c489c4e8f9b090fdbfadcfc12c"],["/archives/2020/page/2/index.html","5177e30a90e862ca528330cf2e162558"],["/archives/2020/page/3/index.html","58f6919b21b43f38ce5ab333522eb970"],["/archives/2020/page/4/index.html","cd284eefab219802ee581c662e995b06"],["/archives/2020/page/5/index.html","7cfec91695c7a362969ac2fa33836924"],["/archives/2021/01/index.html","bfbcc4cff139b674b368fa915c196747"],["/archives/2021/index.html","f7a6e61bb354c818dd0ac00679317e1f"],["/archives/index.html","d75a13a921fe8e654abf2637112c7d7f"],["/archives/page/2/index.html","d75a13a921fe8e654abf2637112c7d7f"],["/archives/page/3/index.html","d75a13a921fe8e654abf2637112c7d7f"],["/archives/page/4/index.html","f1208786c7a7efe188273edd538feb5c"],["/archives/page/5/index.html","f1208786c7a7efe188273edd538feb5c"],["/archives/page/6/index.html","f1208786c7a7efe188273edd538feb5c"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/bb/index.html","a4b7f450df0f262487f9abf68aca7c51"],["/categories/C-C/index.html","ebcee6691cf1c1c76d8124df42bbcfed"],["/categories/C-C/page/2/index.html","5b310d194090d74386c39841c4ab6992"],["/categories/C-C/拓展学习/index.html","4df17b5174142f1ae0451eaa2c06d750"],["/categories/C-C/操作系统/index.html","6e334c22f0e314ed9494eb830fbd7b27"],["/categories/C-C/算法设计/index.html","7dad970f8bd0d703b6a96f1c5ff1e2d3"],["/categories/C-C/编译原理/index.html","f6b5e4c39f0de601706cb5e371b7dda2"],["/categories/C-C/软件工程/index.html","308d0b6ecf5c49fe32c1a4e810feebdb"],["/categories/C-C/项目/index.html","3f26c53e4daea63d184842333c0b7636"],["/categories/Java/Android项目/index.html","386b355466a057850ca9f78dd7e7c6f0"],["/categories/Java/index.html","dc5c19a21621e4ff4d284b4e6a3cdb03"],["/categories/Linux/index.html","2b7558b2e029a5b6f1a8e27d7726873c"],["/categories/Linux/上机实战/index.html","f4bd376af3ada8dacb6370933d1b846a"],["/categories/Linux/习题/index.html","755d65c42570f64cb7d526d372492cb5"],["/categories/Linux/拓展学习/index.html","67d9b779ca8a66ad48df1564cc384392"],["/categories/Python/index.html","a7ba2c8a58b6fc7b9ef962d502d910c9"],["/categories/Python/爬虫/index.html","34535fec81fd6bb8864ad0d6e0e53f19"],["/categories/index.html","4247ae6386801bf58f354e0facb4cfd5"],["/categories/交换原理/index.html","4ebad0351e62fc688a6c080a0fb5e0ad"],["/categories/交换原理/实验/index.html","f11619426bf8f5c60e04c3f4069b3548"],["/categories/其他/index.html","dfd691ea1b0df8587e3a77cb724c68d4"],["/categories/大数据/index.html","83e901aff2bad776570098011edb5674"],["/categories/大数据/习题/index.html","fa53fd420b136750bfc5ec52cee27002"],["/categories/大数据/实战/index.html","1ef1d10e2ba202c6b05253ef8573a4bd"],["/categories/机器学习/index.html","487769f4149e52fc9e5a1e083c13ccce"],["/categories/机器学习/实验/index.html","70f7f5fbc387902f801cfe12bcfa5182"],["/categories/机器学习/知识拓展/index.html","97623933d987cb456ba4f0deb89de7b4"],["/categories/现代交换原理/index.html","ab7775569fbcb75c9da735ce298cc560"],["/categories/现代交换原理/习题/index.html","bd22e88b651d1cbbf126f4d445e1afe2"],["/categories/计算机系统结构/index.html","8fb9c4cf74d16450dd1f482b6735105c"],["/categories/计算机系统结构/实验/index.html","c81d7d5126f94c7e20d57a9e3a42fdff"],["/categories/计算机组成原理/index.html","fc89f96bef96b69e9a4cdb2c18b05633"],["/categories/计算机组成原理/实验/index.html","fc28237647f193d9782d40eaa80ff8fd"],["/categories/计算机网络/index.html","426acdeaddd82d06e55e7a2f8f248e25"],["/categories/计算机网络/实验/index.html","fbad6f6e6c0b0acd95b819a8d2c59fcd"],["/categories/集锦/Android/index.html","e36f380d8b92d073799edd77556f8422"],["/categories/集锦/CSAPP/index.html","2b1570df695c89c54da6c32ed3ab9211"],["/categories/集锦/Python/index.html","a38444abfe2d9b4a94399356840bc688"],["/categories/集锦/index.html","a193f785a4899ac8120d5677b8f871eb"],["/css/first.css","ea01aa1635810499a5ade558f4f81d56"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/style.css","6bb0e006bcdf6e96b6708cbc5b8f868a"],["/friends/index.html","bd3fe7e96741b578bdb3cee6808ab6c5"],["/gallery/index.html","63f4bc7639ebb10460b077618443184f"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","e779f399a9c0eecd76246a83200abdea"],["/js/aplayer.js","6e605f0855251e101d3024646f3eac60"],["/js/app.js","1948329f2fd7e750ade4bdc49138c09b"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","5a3838a3198fa5bde9da7b25a0eac299"],["/page/2/index.html","3825c956ded736cd5ca3d5234d0ed419"],["/page/3/index.html","b05b3dff144c5c2e6f4bd1250e1791b2"],["/page/4/index.html","a7d50b5ff9c8b6cb2095723dd70f7cec"],["/page/5/index.html","6580b9538e1debbff910e199e9940f51"],["/page/6/index.html","1c25d0dc03f36b7f53f16af702385ab0"],["/shuoshuo/index.html","97f1ff5e8ba8cd6e125e8f9c44ea3c0a"],["/sw-register.js","653812eea03cc285549fb11eba89f6cd"],["/tags/AI/index.html","1b383233a6347bd15347e9d371d21c71"],["/tags/Android/index.html","e2b90d289a85f99d69fc5744a73f9c04"],["/tags/C/index.html","aef8a1fd1a53d72075b0831b48cf5857"],["/tags/C/page/2/index.html","c19503a6606296f62e5365171efdf481"],["/tags/C99/index.html","23f8a6f076f58b638f4bacf2a0f2c6b2"],["/tags/CSAPP/index.html","56783b8c8da80590c3780b3b89a89f47"],["/tags/DNN/index.html","779b507f5c01e4381e102bfe1f7fb7c9"],["/tags/DNS/index.html","d976f157e5c383f9663bb9c70d08ed45"],["/tags/FPGA/index.html","57dc163f6c30af29df6195bba981870a"],["/tags/HDFS/index.html","f417ea39fddd7d3010521727db335194"],["/tags/Java/index.html","2ac85fbc7d2c9819e0f99b1753bef03a"],["/tags/JobShop/index.html","bb14a4cdfe93fe0c63fadbffaedd66aa"],["/tags/K-Means/index.html","38e180a219abd23f7269d28ccd99260f"],["/tags/Kafka/index.html","6a866b5c04d2a777e1d92e15e0876433"],["/tags/LL1/index.html","6368fbd38c8691f7a5195a0afc3018dc"],["/tags/LR/index.html","f8c1846adb775e91730ec1f023d14f8e"],["/tags/Linux/index.html","85ac787318290e84862ba200625db101"],["/tags/MIPS/index.html","c79024cb9d46ce756acecbd5972249ca"],["/tags/MOOC/index.html","17f1147bd46439ce9b5068ef788fb7e6"],["/tags/MPLS/index.html","c7b2b4ebb031f88637c11c4d0ca88068"],["/tags/MapReduce/index.html","a21cd2447668f567d5beb2bbc482daab"],["/tags/Matplotlib/index.html","dd893914ce7f24305c29738bb1124124"],["/tags/MiniSYS/index.html","0f49e4521c90a03822b276343f538ea0"],["/tags/Python/index.html","888db7182cfa09547e516616e0ef6881"],["/tags/QT/index.html","434108f23ee0652c9d3c0bf404b88092"],["/tags/RNN/index.html","2da35ad586ad3a6acb0aa63b5db279e9"],["/tags/SIP/index.html","8a54d1088da2e87021f2ff83b8082fd7"],["/tags/Scala/index.html","403e3288cbbdcdb3c735eb2e4d63c471"],["/tags/Shell/index.html","f13b7756c6ca6889450d7639c95f8d31"],["/tags/Spark/index.html","722bed8e431d82f46e305200c80b7935"],["/tags/Streaming/index.html","9d48a75fc34d7e43a39787061707a124"],["/tags/Struct/index.html","7990de600cb8e330f1e75796d120d597"],["/tags/Verilog/index.html","cc9b6d96f899c6e45a936f0880cf1c06"],["/tags/first/index.html","cb7da2cc2ac28d2df73932e1a3819ecd"],["/tags/iPython/index.html","9b0003c5a1911c33a0dbc8ac15af98f1"],["/tags/index.html","c835d1df4b5219025319e1b9582a9866"],["/tags/ls/index.html","3875dad4ea4cc6bc48157b342766cfe1"],["/tags/习题/index.html","29fa2d2b364aeb8ad40cff5ee9f4c44f"],["/tags/交换原理/index.html","9df3029fdfe549f86fcddc3dae94e366"],["/tags/人工智能/index.html","a64a34c69b29330182909ad5da6a6051"],["/tags/信号量/index.html","61f537808c81cd125d4f682dc99e99e6"],["/tags/内存管理/index.html","21f1a73229cab541ed27bc37ecf20587"],["/tags/决策树/index.html","6a6ed1dcdfc208ba8292ae8b1daeea7e"],["/tags/分治/index.html","3011ec8786cc25314652cade29402a2a"],["/tags/分类/index.html","0b77568ff800345aca6e3a85228cfaba"],["/tags/动态规划/index.html","23d4f3934c81a3d993b4c6ca8f55510e"],["/tags/华为云/index.html","7b18be28e95718f602cd56a00eb1bb1f"],["/tags/单词计数/index.html","d3d712d1e13fa507cf84c7b2ad39a23a"],["/tags/可视化/index.html","9521c7358bf8f38ec85d9f6fa99a6e88"],["/tags/同步互斥/index.html","88c584cca9fe5dd38219091420eb92b0"],["/tags/大数据/index.html","eb97ef8b487c9c734119ccd7719767c0"],["/tags/学堂在线/index.html","ae13f67d1da950306ddd01221c32c7e0"],["/tags/实战/index.html","dbbc48f6ca9b120d385ece4b1e4a6cc3"],["/tags/实验/index.html","4383923f9f76fea5506fdd3b46878f2e"],["/tags/实验/page/2/index.html","71fa13b09c4ca98c9eeb92679250430e"],["/tags/小游戏/index.html","2b23715c03b66dded37029e84297b920"],["/tags/工程/index.html","6e6233e714001769299f1becacd91255"],["/tags/工程/page/2/index.html","6af8f3f696caec7e49cc2e5dbbc982aa"],["/tags/手写识别/index.html","3a59688ae42b95722d510c60e47cd8ac"],["/tags/拓展/index.html","10acb11d49e4f2fc65860ddb9d0f4af9"],["/tags/操作系统/index.html","d52f8085e731e5536a51a46047dba159"],["/tags/数据处理/index.html","23a5a6b8d6d1828411f433113434e899"],["/tags/日志分析/index.html","1ce1484ca3b2ab97dfc7fc529ce1bd1f"],["/tags/易错点/index.html","ddd409da8513a7481a527fa236080adf"],["/tags/机器学习/index.html","80c872603618f947edda953c5075cb9c"],["/tags/条件熵/index.html","a2532ece948ab93731ebf673878bf6b3"],["/tags/正则表达式/index.html","951ca7b2a92ed8d98c6e957755449022"],["/tags/汇编/index.html","a0946b1cde9379c1dc195e8248d3b4d0"],["/tags/流计算/index.html","3a94f5e66d835a07418fbb1bc534d27f"],["/tags/爬虫/index.html","e80d01bc593638cf435ba56141c1b6db"],["/tags/现代交换原理/index.html","ca98e3e44775663d2c0453e14443cf66"],["/tags/生产者消费者/index.html","d984fafaacf504cad12974db44b59940"],["/tags/知识/index.html","29264d097e2d4a2155823285548c6a2d"],["/tags/算法设计/index.html","27abc84ad36869df1304f308448f6036"],["/tags/线程/index.html","e534f0b91f8e536e29e400e687114ae9"],["/tags/编译原理/index.html","e0c61b9e7bc736c2ed8fb61959979ad2"],["/tags/网课/index.html","6ca6a3cb2508fbf2b6087b63dfba00fa"],["/tags/聚类/index.html","63a6108184a4fb647ba05f11f9c2ce01"],["/tags/脚本/index.html","f051d71f677edafee8fc5279da25507a"],["/tags/计算机系统结构/index.html","cbd963702fdfad46656e10ba893537e9"],["/tags/计算机组成原理/index.html","837634418c3a97d7a9ba7d5cdc01f1d3"],["/tags/计算机网络/index.html","5fa5827608301cbc883d9ca7436dd1b5"],["/tags/词法分析/index.html","452171dd574bbf57be0d306485ae65a5"],["/tags/语法分析/index.html","bb8998ead26cec3dd2b892095ef124b5"],["/tags/读者写者/index.html","e71148222794a5c48c7084939412c9c3"],["/tags/课程/index.html","36b103dbccf4bd9781ebd238f8f1bfd5"],["/tags/起名字/index.html","f0d25bd7ae46ff5ac9a5ebd50a23bdd9"],["/tags/软件工程/index.html","bfcf6d0977c58fe1dacf42602cff68fd"],["/tags/进程/index.html","dfdcd7a23dcc2d969107a685b345ec55"],["/tags/通信/index.html","91e598dd6b681015d2e46e78b9c08ccc"],["/tags/遍历目录/index.html","23438d74556fb67f49ccd4afad977e13"],["/tags/难点/index.html","97ec883f3de24bb0dd66fa5a5600d1ff"],["/tags/项目/index.html","bec5cf3e8b7e38694e8e9f3c58bff6fc"]];
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
