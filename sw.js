/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","0a880302b910d9664d778ebf82aba18e"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","edab3411041d178631421a229dbceb66"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","13009210a83513634db7a48480eb2303"],["/2020/03/26/计算机系统结构-实验1&2-遇到的问题/index.html","666f68308d28b105c4c77307a1649fbc"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","bfb0b5c5211cce532a4bbc34e6f67a65"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","2f6d3961ee7321c2a29ae629f4a99d0f"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","dbc3eef9e39fdf6d05db27fdc2c6ec5a"],["/2020/04/18/机器学习-知识拓展-条件熵/index.html","58c26bb669d5414a00204729f3232439"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","6a304b04bb66bf07b68b9050a50c6699"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","269c31de829f23ff517faa67b3a346d7"],["/2020/04/26/机器学习-实验-决策树/index.html","50faf2550261db5d49db8ad0c6a0fed5"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","a84e20069847b4f34e5dacea9f5acf01"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","7ddcf68cbafbc81c4be0d3dc035f9ea6"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","9797ce93f96a17bf891ec9e01042d06b"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","ac2be14f6d0c8ed1ce34416dd0256732"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","ba17f3daa919dbb01875a3bfb2d9e236"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","b13fb9f2e5a3208f9b196288d6a2071f"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","ac19b2b43cc73960b8b2e28233d12474"],["/2020/06/11/机器学习-实验-DNN-手写识别/index.html","a3e5222ecd38349223013d7afa3a645a"],["/2020/06/18/大数据-习题/index.html","647da8cc3e33c9fd9a7c426280a3eb5c"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","2ffdda21241ef5758ce197f1edd4129c"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","6818545b175661e1dd5f1dba825748ee"],["/2020/06/24/Linux-拓展学习/index.html","654fa58b41674afb858d48841ade17ec"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","f0570b2e1fe6bb6cc7c592775aea0d52"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","6fe865d43134727c31bc0bc4235cf712"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","3f9038141f2a2dcedf8931d6b0dcf679"],["/2020/07/15/C和C++的struct使用总结/index.html","288b5d44b7fc79b943810fa5299848f4"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","2e9e90910e70cb3f55a4d868a5071dc4"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","6c0f9fde8912bc290988d1f8e6b6ac6a"],["/2020/08/10/机器学习-实验-花卉识别/index.html","2ee38df7c5b7a880a12744fc69bb4fa8"],["/2020/08/15/Python-项目集锦/index.html","1f44d5c64b94a50e256ae93499c6b481"],["/2020/09/01/编译原理-词法分析/index.html","7fd000d038a9cd6e0ac113036ff5bbad"],["/2020/09/02/编译原理-语法分析-LL1/index.html","59def2158c9f021711f533f632abf4c7"],["/2020/09/02/编译原理-语法分析-LR/index.html","46a680059bfc8354ed7b6d6683a8a9b5"],["/2020/09/03/操作系统-内存管理/index.html","f1394d0a42102f4d2cc770761d2312d0"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","bfa3cf00b350f25df2ef030402a9e810"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","9519ca13cb572d9b22b1827e9c5030cc"],["/2020/09/04/CSAPP-实验集锦/index.html","cac5719b1c8ea0c8310541aacdc2e13e"],["/2020/09/10/计算机网络-实验集锦/index.html","27e430fda7ab27f9a56f414347ab9845"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","f30354373702e2b82e8388ba2aa23dce"],["/2020/09/30/C++工程项目-JobShop/index.html","5f5b804bc6c506559b02375178342e6f"],["/2020/10/09/交换原理-实验1-时间表调度实验/index.html","de5e301378642c29793f118547d11e61"],["/2020/10/09/交换原理-实验2-摘挂机检测实验/index.html","5f2f6e0fa21e2fd46b7b105f06349d11"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","51340191a6c0ce3327e5411a39056214"],["/2020/10/09/交换原理-实验4-拨打SIP电话/index.html","7ec27c37748a268ac0503e74598e53a4"],["/2021/01/04/Android-项目集锦/index.html","8ca838b4a43680cbcfcd1ff4c2abc8a4"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","64a59d5870b8e8a4ee57dc341a703cc1"],["/2021/01/04/C++工程项目-travel/index.html","5023ec99a6ca854d3286606b8677ac95"],["/2021/01/04/算法设计-分治-最接近点对/index.html","2e5aeadd08b3319888a338587761f5fc"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","73fec25a1f6676b3da67c12d511f40fa"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","beb5c2d5f8a85247c89b7c72cde6b4b5"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","7dc79ad32f46ad7bed5e6b2e839b7140"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","4f551db3edd2a6bdb47de4c888c859e1"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","d3b613aac077c440a1fcd7c7aca1ffdc"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","df3fe140ff3ae6c383be8de87ec610c9"],["/404.html","6a8652eddbc9f75172ef0457da4397df"],["/about/index.html","a2037bd3ac5886cd5ef036234b5085da"],["/archives/2020/02/index.html","f38db620f582ab44dab1af463837f6f9"],["/archives/2020/03/index.html","3f14a9bd130e953747a7e3c0edc38249"],["/archives/2020/04/index.html","03dce567b8c3a0ea302e3a17a75858c7"],["/archives/2020/05/index.html","b72d2a519cf7bf16e41cb5c0ea23b2a3"],["/archives/2020/06/index.html","2a760ef7b187656d8eaa5e74fb2dc467"],["/archives/2020/07/index.html","4fd503912522ca03e86e43908b9adb32"],["/archives/2020/08/index.html","bdfba8483fb633d38c3223b3b095f057"],["/archives/2020/09/index.html","1780fabe7f597c489a6e394a74f0c544"],["/archives/2020/10/index.html","66ce257b2ddd2da9cb0b1fed2d30d10c"],["/archives/2020/index.html","b08591f23c8ce7feb5bf862f485521d8"],["/archives/2020/page/2/index.html","b4f436141eb4d102b239165247034de8"],["/archives/2020/page/3/index.html","69abed12768e94cd80b557267612043c"],["/archives/2020/page/4/index.html","6853d098e8ae414ba58714107025976a"],["/archives/2020/page/5/index.html","fa179fc1dbf29a76b006d27e37594d56"],["/archives/2021/01/index.html","df35f65f1496e60a18ad3f8cf95f5cef"],["/archives/2021/index.html","7507f080906fec5dc15ae36f1e94666e"],["/archives/index.html","623079e13ffee89fd2cd3fa747cb87ae"],["/archives/page/2/index.html","111318c73d7448964f1e6e6a289ca4c1"],["/archives/page/3/index.html","111318c73d7448964f1e6e6a289ca4c1"],["/archives/page/4/index.html","111318c73d7448964f1e6e6a289ca4c1"],["/archives/page/5/index.html","111318c73d7448964f1e6e6a289ca4c1"],["/archives/page/6/index.html","111318c73d7448964f1e6e6a289ca4c1"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/categories/C-C/index.html","ce1322fb966624ff590b15c745119d9c"],["/categories/C-C/page/2/index.html","d0a500670162657dc3bbd2e6cfb3ce0b"],["/categories/C-C/拓展学习/index.html","c4fa3e23578027634f4338437519d439"],["/categories/C-C/操作系统/index.html","9b5a681cd363f1d2f3d22635d30c808a"],["/categories/C-C/算法设计/index.html","b10352020b7b683463af7ad82480359f"],["/categories/C-C/编译原理/index.html","b4b2ae68e2750b4bdb2c10a71229bcac"],["/categories/C-C/软件工程/index.html","c3d123a3d53cf46558986ece4ff9213e"],["/categories/C-C/项目/index.html","574482dd994d8317906aabc64abe01f3"],["/categories/Java/Android项目/index.html","1cda3e4edd9fef289cd77353dab64ad7"],["/categories/Java/index.html","a94a1a8eacabb47f356b71539eed3258"],["/categories/Linux/index.html","8914fc34f1d62142f8b0669da12742a1"],["/categories/Linux/上机实战/index.html","cfdda85e6a341eb1b40282f2c3da7903"],["/categories/Linux/习题/index.html","b2d6b203babb9d2b89c7342c044c5ea2"],["/categories/Linux/拓展学习/index.html","8e9ac871bc7ef8e13f98f473b05a7fd6"],["/categories/Python/index.html","e443a82304d2a887339c1f6af0e03814"],["/categories/Python/爬虫/index.html","d9315663fcf649b29d61fb1707df6838"],["/categories/index.html","39089c685fae89cb10954cd01d49f331"],["/categories/交换原理/index.html","37e9da36a09b102cfb54612a8aa58fda"],["/categories/交换原理/实验/index.html","875aad81912f65ffe04e773d7a9034e6"],["/categories/其他/index.html","56d0680877152e5851d6fff12101e398"],["/categories/大数据/index.html","00996f532ac99fdb12f0a30c1b27455c"],["/categories/大数据/习题/index.html","205cff8e0d52b99f574f361735db5c8a"],["/categories/大数据/实战/index.html","ca36d5703deaf76ff6d4179fdc666487"],["/categories/机器学习/index.html","e690babb6835bdd5bbd0c51e1f1c9d78"],["/categories/机器学习/实验/index.html","2204aa11c0e98689b8083845d8164b7f"],["/categories/机器学习/知识拓展/index.html","342e1cefa21962c5b866257d8edae33d"],["/categories/现代交换原理/index.html","1d57604e0d13f7c0a3fdcb670c63b011"],["/categories/现代交换原理/习题/index.html","9cc826c4f4c7c5f27da8f12b38569bc3"],["/categories/计算机系统结构/index.html","974c7fccd2546551942c08eca0060593"],["/categories/计算机系统结构/实验/index.html","c7336fe2098c7cd9e394b4dc01978c95"],["/categories/计算机组成原理/index.html","8096dbb24817c12a7f437b6c18b8f4d1"],["/categories/计算机组成原理/实验/index.html","1cc3b30656f28c481de758e0c81b2c8c"],["/categories/计算机网络/index.html","b3d49e0c2723d449dd4484ea4dcf39d3"],["/categories/计算机网络/实验/index.html","659d975494f79a02f8e088ec7ca518ee"],["/categories/集锦/Android/index.html","506fe97b347f4a45d77e804f63c50d9d"],["/categories/集锦/CSAPP/index.html","89a6a0987d6d2cf3c1be5ed64b8bd7f9"],["/categories/集锦/Python/index.html","e8c3bf6c8f78e7d84986ca35199b74b6"],["/categories/集锦/index.html","ed8ed1c5803edcf8ef798cccd04488b4"],["/css/first.css","01a90baf99fa8f190becabd973782198"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/style.css","29bd14d027343cdf06b66cce6bf66453"],["/friends/index.html","928acb9c14ece4fc233a5297d7098bba"],["/gallery/index.html","63f4bc7639ebb10460b077618443184f"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/games/tank/index.html","a4a2448b8b53e14bf7bad5c1f71e614a"],["/index.html","66139452b910eae78f8280b0d616ce09"],["/js/aplayer.js","6e605f0855251e101d3024646f3eac60"],["/js/app.js","1948329f2fd7e750ade4bdc49138c09b"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","bf8ab53e1c01af46965b431cb9693000"],["/page/2/index.html","bd90976d6a7cc572cf957b50be9d97ad"],["/page/3/index.html","f715f8ac9d9ada6dfb4fa00b140c5d4e"],["/page/4/index.html","44631aeee9db3fc473c25de6fd8a8f57"],["/page/5/index.html","44256bf339c690f238e7f6c2353b1413"],["/page/6/index.html","498a609b0a2708ff9dde94fbed14c38c"],["/shuoshuo/index.html","bdfca9661aa90c889b1133afdc3fe4c0"],["/sw-register.js","2b35caf6360f9fc2575441e3518c26e7"],["/tags/AI/index.html","208e98d186ad4c55f9889299b7fde685"],["/tags/Android/index.html","19f78165aebc04cfb366d12af2b435cc"],["/tags/C/index.html","d24fb91affacfb59217a466922b36ae2"],["/tags/C/page/2/index.html","43c4afe3e62dc13ffe668ec7bb75911b"],["/tags/C99/index.html","2a452ebe385ae23199dbadad323962b5"],["/tags/CSAPP/index.html","fb9beadb786d30129394873770d342f5"],["/tags/DNN/index.html","21766dbcf2655fd860bcec9bb6b82019"],["/tags/DNS/index.html","aebd7ff438c0686ebebb66a7c3e8f636"],["/tags/FPGA/index.html","bb3256e774d77d7c41f68e3f78a2398a"],["/tags/HDFS/index.html","cefa574a07f862d7a29cd6f89ee2a31f"],["/tags/Java/index.html","a3173c30b649a9216c2b056d35b7cd80"],["/tags/JobShop/index.html","b6a37c92d50a8286ca2e9974705319bd"],["/tags/K-Means/index.html","f7e6c08d908ba52fd1af3b4f21e36c7e"],["/tags/Kafka/index.html","ee647d8b904d1cb518365be44edf09e9"],["/tags/LL1/index.html","1cc92415a8a65d6f6abce98a5ae9a46e"],["/tags/LR/index.html","2450dd40a8261d27074a22dd2dff532b"],["/tags/Linux/index.html","f86faa84e97735e7ead8f29f960334a3"],["/tags/MIPS/index.html","e743b44bda807b9d83e1463e18cd84e2"],["/tags/MOOC/index.html","c680c3b2ef51af41644d552385d43e74"],["/tags/MPLS/index.html","6c1edbb3e378ab9ebebc90fb837b11d7"],["/tags/MapReduce/index.html","a601cb987e6d50488914c67d92c3974a"],["/tags/Matplotlib/index.html","b19edebd2cca0cde09012c430ad0d246"],["/tags/MiniSYS/index.html","e790931e1ff3ae6817ae41c1bde74f53"],["/tags/Python/index.html","472514bf76e7660fe98204daaca73500"],["/tags/QT/index.html","ddeef2539c8a0eeb2d87b55772de48d5"],["/tags/RNN/index.html","e46c5e8056cac6181a1c999d5b05600a"],["/tags/SIP/index.html","ddc9232e98eb618f03860d9a739dd1a4"],["/tags/Scala/index.html","80b2b775eaaf940504f7a2b4c7589307"],["/tags/Shell/index.html","bde79802309d2fe89bcd8272d5505eb5"],["/tags/Spark/index.html","656045729ba6edfd151a8836cf6822eb"],["/tags/Streaming/index.html","4e0b1255db0367631d259209985cbcb1"],["/tags/Struct/index.html","17b47d63bb086c4349ea96623a546686"],["/tags/Verilog/index.html","960f99a124e89ece42a6962885ec772c"],["/tags/first/index.html","7c43f270a74bebf3503acbfd2b413f61"],["/tags/iPython/index.html","1730fbba9ca145050cd92557aa31cc2d"],["/tags/index.html","9eb0dc67f2284a375a82952de9208ddc"],["/tags/ls/index.html","aab9096d0b50c8e39f50e4453a92d894"],["/tags/习题/index.html","b791b6325f4c3421a8fcdb346f79f9a9"],["/tags/交换原理/index.html","0527acc4eb80e973373f41aea8b0138f"],["/tags/人工智能/index.html","cfb4b63dfd96c7dc51c7d6018df5cb0a"],["/tags/信号量/index.html","b4e3bc4a26a401092c452fe52cca3e51"],["/tags/内存管理/index.html","fa2a60ef5b4a67f9d9257bbe1839d320"],["/tags/决策树/index.html","a253360187668c5079b533ee475932de"],["/tags/分治/index.html","d42dbe7d636fe876a22afe1ff462adb1"],["/tags/分类/index.html","8909d97121bf233c4775ea8fb80f5352"],["/tags/动态规划/index.html","005e55b0b6674b4453d465465ed24e35"],["/tags/华为云/index.html","beac05c557d3866ffaa0f7b4d779e829"],["/tags/单词计数/index.html","f0e60469b275ef23668f4f9ec51f1431"],["/tags/可视化/index.html","3db62dc525a18209535b49445386c916"],["/tags/同步互斥/index.html","6ee145c821e384cc21471dbbe6ab5390"],["/tags/大数据/index.html","9024c89cc257e43b37436e0a8e76646c"],["/tags/学堂在线/index.html","ecfd7f78086162bee169fe8180fe9edf"],["/tags/实战/index.html","43b45cad17f652d50475e86a7ce1f39d"],["/tags/实验/index.html","e4111a01a20bb30b3f955825e73fc648"],["/tags/实验/page/2/index.html","8da2f9ef09b1f36a2aff27a02ea6234c"],["/tags/小游戏/index.html","0cbd890da4a5335f2d71ad89bd0dca63"],["/tags/工程/index.html","dc795f3dcc835f67f70f77144f76dae6"],["/tags/工程/page/2/index.html","e4a5df567fad1eca5e81ebedf5d59874"],["/tags/手写识别/index.html","8b724ab7c672454900e9492a90ee55fa"],["/tags/拓展/index.html","cad9d6bfe6139e9e3f6255384c83620c"],["/tags/操作系统/index.html","620a5b955b412e917c7c678e96910854"],["/tags/数据处理/index.html","f18b8a1dd8e2121b49efc1674cf66857"],["/tags/日志分析/index.html","b7590871bcdef50d8fe9c0d6a0085713"],["/tags/易错点/index.html","04a76cf04c4f6ddc531bdebbc89094dc"],["/tags/机器学习/index.html","00f5eef8e1d63c96c253f348f782c436"],["/tags/条件熵/index.html","f86e6b00c7ffe5a9063bdb18f31ec898"],["/tags/正则表达式/index.html","a000bde8dc95bc06e43d6cec49ce4f12"],["/tags/汇编/index.html","5f0cd4b916037ec9f95a7495e4393fdf"],["/tags/流计算/index.html","c6ad91a1789bbd78675cdc0aebb46754"],["/tags/爬虫/index.html","9ba9c3f44e6e67349bb2ae8e71df077d"],["/tags/现代交换原理/index.html","56896ea69732afa7e70d71995d8ca9a4"],["/tags/生产者消费者/index.html","ecbdbc0e164505bef02b77aa51fb7900"],["/tags/知识/index.html","60262ad686a836b128dcd4cafb66c239"],["/tags/算法设计/index.html","0a8fc33cca3341fdb6aa3189a64d21bc"],["/tags/线程/index.html","299f6b41dbb00a19d487bf6123f01db0"],["/tags/编译原理/index.html","24dedf467c7b46e565158a44d1b2f143"],["/tags/网课/index.html","585a4c09b4f09e653bd9d1574abb70a8"],["/tags/聚类/index.html","8bfa6c56ada15426f8bf1c09686e214d"],["/tags/脚本/index.html","0a110ff352d997f58ef162e65d29c7f5"],["/tags/计算机系统结构/index.html","c1d1178c569ccb94aabb996241efe1cf"],["/tags/计算机组成原理/index.html","c3c2c1554899aff9f5f3b9d732606d6c"],["/tags/计算机网络/index.html","b39e9af40ebb787681ed5987f1e1df27"],["/tags/词法分析/index.html","51803fc750b978b5255aa2e04ec092f9"],["/tags/语法分析/index.html","5d5ea5d0a9e38b03054ed239abe3a707"],["/tags/读者写者/index.html","bba923a78aaac7d3a10fced18210751c"],["/tags/课程/index.html","77ec148e55fa3213c1cd6576767a9e8b"],["/tags/起名字/index.html","9b93cbda906c0e7f25f91b49c0db149c"],["/tags/软件工程/index.html","701787583ed5b7263cb4ebaabefc3f47"],["/tags/进程/index.html","2ddedd0b3d594e7838a3bbf0eb27cb77"],["/tags/通信/index.html","753b3cf034e66c60ae8482c29f64b07b"],["/tags/遍历目录/index.html","5dd4593e3ffb03a1e44dda90f98b5707"],["/tags/难点/index.html","442a32a73a825b228183693ae3a19414"],["/tags/项目/index.html","16cd025d291497b766bb10d718a951b7"]];
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
