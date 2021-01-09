/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","2d398114fd39f79c6499f7e46421f6c3"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","e398452d4f30395cd60c1e4ee273d253"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","e08a16654993d71e763a1edbd4e4b073"],["/2020/03/26/计算机系统结构-实验1&2-遇到的问题/index.html","41b6cdcb6813a3a37bcec4ed91af513f"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","8b19ba691815655d0802b891e1e0a083"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","7acbc7e6ca8fd1222d62b6ad5f3250c3"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","782b33ab67da252911019802a8697025"],["/2020/04/18/机器学习-知识拓展-条件熵/index.html","bbddfc242f7841b57d81465b1edbbb2b"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","0b81378f3fb6ef511226a4803d14458e"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","29d59793ae18d502f5596b8203e7efef"],["/2020/04/26/机器学习-实验-决策树/index.html","3ce4eb13635748f862af94e4eae51235"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","e2ce835606e4ce8c57532b9a6a912587"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","06e4ce7d118bdfd2385c29367948a640"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","3861b917603c465883463f258d95215e"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","cbfe48261b8294c8202f6ac6b406475f"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","d2e49e1a0e3d7947ad014f854822a34f"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","39bf743d3b41a55a1d468e455886bbdb"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","8f22d12ee5a2e7b5f732cbc7f31ff960"],["/2020/06/11/机器学习-实验-DNN-手写识别/index.html","957b5581f6453a5229a064cb033d3c03"],["/2020/06/18/大数据-习题/index.html","2eb64ebacb7aa25d377fa8705ba5a483"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","1a44ca2956460e1dc1eca1cc7a7dba3c"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","dd5c31ca275d7cb9ef00af389b5e04b4"],["/2020/06/24/Linux-拓展学习/index.html","e5dc80ca286b45a9806b1d078947b3db"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","e4e863d84082181265368080e1eaf0ed"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","5443ffd2d3694882eabc383e8793ca44"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","42f4cc8d2df9d578cd82954c5acb2f27"],["/2020/07/15/C和C++的struct使用总结/index.html","738bb445ee6aa30ba2ea81c8ec5e01f6"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","53e82f07af2408dfc1e25ad1c05465e7"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","7f1974f60d007136255adbb45261e5c6"],["/2020/08/10/机器学习-实验-花卉识别/index.html","2099c0b6af65e733f30fc17b45e7836f"],["/2020/08/15/Python-项目集锦/index.html","e7a73a65b57b538f21de31365f9fcc35"],["/2020/09/01/编译原理-词法分析/index.html","fa3c6ae3c81185230240783cccaf116c"],["/2020/09/02/编译原理-语法分析-LL1/index.html","ef9a0e26ffeb45339bfd6a030a5742c4"],["/2020/09/02/编译原理-语法分析-LR/index.html","715df88eacf7b61d03f2a762e22c4fd4"],["/2020/09/03/操作系统-内存管理/index.html","c3c5bc1b837f3ed20354ab96f8d9b5e8"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","65cc7b633ebbb2dcdd39f56f0d83ca46"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","164f8df13b554b1c42d1165bda7ad141"],["/2020/09/04/CSAPP-实验集锦/index.html","67778c5e00e3e855cdcaa064584bf227"],["/2020/09/10/计算机网络-实验集锦/index.html","162278f4838641aadcf7c0f1a3417879"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","2d50f9403671ceb8ec5c64350ebc1d29"],["/2020/09/30/C++工程项目-JobShop/index.html","a33102b0a7a407e09650bca80528cce1"],["/2020/10/09/交换原理-实验1-时间表调度实验/index.html","f5a9f80310b53ae982f5c33c40f3ce54"],["/2020/10/09/交换原理-实验2-摘挂机检测实验/index.html","2c3065ab72fe0c99d8a3c99f8345ea7d"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","7aeca58d37e4a403a14aa8db2ff060cc"],["/2020/10/09/交换原理-实验4-拨打SIP电话/index.html","011917ab1b2ce799bff3efb77c97df30"],["/2021/01/04/Android-项目集锦/index.html","7973fed8308d087f2ad2708d21c3a7eb"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","f286b9b06b6473e27f86a512490325d4"],["/2021/01/04/C++工程项目-travel/index.html","aeb8f55a1c44ccb935a0c0115f1bfec6"],["/2021/01/04/将博客搬至CSDN/index.html","323fa6bba70520a3bbee252cef18ad6d"],["/2021/01/04/算法设计-分治-最接近点对/index.html","5bbe8fef279a038fbfa9d817bc118c83"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","4b22e5744343f52857ef4d18cfea5ca6"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","6bb968bfb4e9cccf9684ab0e69f3c611"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","0a4c2d89474380d0e34fa8fedf3f80fd"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","fd390d08d18662480f31aba418af6fcf"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","d1d4c63c028c106cc6caa3f1f57543e5"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","fcade826f715427840d23a51a6a54945"],["/404.html","c8ecd45fedaef5452c360005476966b2"],["/about/index.html","4f9066cb64d7d0b0662f672cad18a4d9"],["/archives/2020/02/index.html","df8e86b4fdd93b99761bdea39dd53803"],["/archives/2020/03/index.html","1cdff56f9a635d782767416807349639"],["/archives/2020/04/index.html","b22645bbd9507982790008d62dd78c78"],["/archives/2020/05/index.html","9a704dd0e0017b27a41504a392c423ad"],["/archives/2020/06/index.html","ab62357e45922ff958e4bb6d1c2f1902"],["/archives/2020/07/index.html","d27ce9f2d49e08801e7706db0a24dc44"],["/archives/2020/08/index.html","63520ffc3f46884c16659ad361c164bd"],["/archives/2020/09/index.html","079c2de6c55d3f523c9145b8c2d8af60"],["/archives/2020/10/index.html","4ae2a4ad27c6a0055cb65663dde9d106"],["/archives/2020/index.html","675a90834aed66731b388ae791418756"],["/archives/2020/page/2/index.html","d687a658c30d50b74803c16243a69cdc"],["/archives/2020/page/3/index.html","02b40678314ff3b8d2af8c8c05c91e56"],["/archives/2020/page/4/index.html","6632496fd2dec4021edaa5b6143f8430"],["/archives/2020/page/5/index.html","799dd26f037ed23f347dddf6d2621c77"],["/archives/2021/01/index.html","cab5df0f96cabbc698dc3c0e81483bc8"],["/archives/2021/01/page/2/index.html","a8b1a49382064a5d13a8636f41d458fc"],["/archives/2021/index.html","0e874bb1f00e21988daa972dae3e23bb"],["/archives/2021/page/2/index.html","ac2ce31ecae10a41df79f46ca5843a6e"],["/archives/index.html","fc155f2e9981eb3bee53a37a2cd71cb1"],["/archives/page/2/index.html","fc155f2e9981eb3bee53a37a2cd71cb1"],["/archives/page/3/index.html","fc155f2e9981eb3bee53a37a2cd71cb1"],["/archives/page/4/index.html","fc155f2e9981eb3bee53a37a2cd71cb1"],["/archives/page/5/index.html","fc155f2e9981eb3bee53a37a2cd71cb1"],["/archives/page/6/index.html","fc155f2e9981eb3bee53a37a2cd71cb1"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/categories/C-C/index.html","d54bfc5301b57b52dd0759b60aabb3e3"],["/categories/C-C/page/2/index.html","2ca51e94424a9c99c3e8b01945d2dfbd"],["/categories/C-C/拓展学习/index.html","7a079004a7452d700045ac749a48a98d"],["/categories/C-C/操作系统/index.html","89e5bf0e41cebf1f9e9e63a31c10c261"],["/categories/C-C/算法设计/index.html","b12b8dc123c538a6085b743af3982afd"],["/categories/C-C/编译原理/index.html","e4277e79ede465b8a046f3e436e9ec94"],["/categories/C-C/软件工程/index.html","00b0e74a86168d821b81f13742a0b42d"],["/categories/C-C/项目/index.html","1e5805f324ca64a99a51c911f6282078"],["/categories/Java/Android项目/index.html","a45302d7e3838913ae32b96938ceedd9"],["/categories/Java/index.html","ba17d4b3f525c69eeecf08d4150d5d0b"],["/categories/Linux/index.html","ce19645abd27c0cb0e1283b3e58522e5"],["/categories/Linux/上机实战/index.html","711734f8c122a52b22237e11c45c5ad0"],["/categories/Linux/习题/index.html","cdb588e10d723195904f0bee4bb5b9dd"],["/categories/Linux/拓展学习/index.html","25abb5d9e87dd3dd0678ed8edc0c9a03"],["/categories/Python/index.html","18547c1fb286d1d79732b954fb8deb54"],["/categories/Python/爬虫/index.html","e9f3e8ea05ed4115c8afdca1e9ef12e3"],["/categories/index.html","3d2efeaf3829adf3fdef60baf3b146f9"],["/categories/交换原理/index.html","6b09316c602fd9c4c9ef59399bb4961f"],["/categories/交换原理/实验/index.html","3517c953c9abab37002a26abcfc0d861"],["/categories/其他/index.html","aeca517dc7ada341ea4a16a60822f741"],["/categories/大数据/index.html","6e9da1f5815b4c30dcc3431b26daaaa6"],["/categories/大数据/习题/index.html","26889ca714f54b206f1890c1f2df94ad"],["/categories/大数据/实战/index.html","764583bd46662f4edf510eaef8de671b"],["/categories/机器学习/index.html","2817fe58397c9df2a227774f9b8aeb40"],["/categories/机器学习/实验/index.html","43a7402657dcf62080249bae4ee7318d"],["/categories/机器学习/知识拓展/index.html","83929acb2fbaa2509cf4ba9400dc5643"],["/categories/现代交换原理/index.html","87928a9940810383452c94f0dd126f6a"],["/categories/现代交换原理/习题/index.html","3e3c556e0e57b55e27a459377f445190"],["/categories/计算机系统结构/index.html","09eda0c3aa6dec7eae36263e0bd58040"],["/categories/计算机系统结构/实验/index.html","221f1e66ffcf6f7ed6bdb80353d34b96"],["/categories/计算机组成原理/index.html","3955565f8c7b71cd2aa647103f9560af"],["/categories/计算机组成原理/实验/index.html","5117d566d080063085388f46f1a64bf0"],["/categories/计算机网络/index.html","e484069a769b2bd7100e14947d6229d1"],["/categories/计算机网络/实验/index.html","a024bc7f35a65ac001f749fe5e9c0f01"],["/categories/集锦/Android/index.html","c1cf70f0d13e0378cbca0734b72dfc21"],["/categories/集锦/CSAPP/index.html","c7f9681463fb840ab2fd7650844ec2b2"],["/categories/集锦/Python/index.html","e4bce6bc96d9bcb2b6ae0eee8b374796"],["/categories/集锦/index.html","6738b7e8b58ddaebb28fd61010ada075"],["/css/first.css","880233a3d683a1c63bb8455e42deed41"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/style.css","15b71a0103630e784e568ec15bd35d12"],["/faqs/index.html","6e71e7ebd1bec317e081d5da756730bb"],["/friends/index.html","8d6f8f7ed31d6f1a5dd14e44c825e6e0"],["/games/gomoku.html","3f9883510d3cce5092bdff2b091e8ecc"],["/games/mf.html","b616632e075d22163287241ac9e5e1bc"],["/games/mikutap.html","a4dd3337906fed31e900e2f10dec2d0d"],["/games/plane.html","6e67b9ebfcdd67174bcef496f5ffb6d5"],["/games/snake.html","08ce6c3dee8704e5d1c74d84f9ea52d6"],["/games/tank.html","14a86140b44d7d6e26e4c9ff926dee14"],["/index.html","4e3a834c697d1f37ab66e498c4b71f26"],["/js/aplayer.js","9b130c167aaa26645b6026f5852f902c"],["/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d/demo/demo2.html","9a264074ef7eea855d39b2efdea998d7"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","a471ca82993523ec6915f2c431da7ed4"],["/page/2/index.html","d75a88f3910d9d09de39642e058ed329"],["/page/3/index.html","9d1129bc98490a6521af3fab7d906962"],["/page/4/index.html","ce89387ba846e0020c95f3f96d3a7a58"],["/page/5/index.html","9585ef6aad3f8b02dd76d7025aff8a72"],["/page/6/index.html","13ed73e6b454f6135aade3fa885f1a76"],["/shuoshuo/index.html","01cf722c7ed5795dd0f940f82ef0897d"],["/sw-register.js","50b447b3c35cafae106a5e3801bed19e"],["/tags/AI/index.html","4d02d5a3cc1dd70bf9c27af4553b7c1a"],["/tags/Android/index.html","02ab2fc1ec9622f8074a39b785e8c2d7"],["/tags/C/index.html","b1ca671e058224a21df3b38b1638774a"],["/tags/C/page/2/index.html","25fae478f6bdab95ff8b0dbc773ebd39"],["/tags/C99/index.html","545f9a789b92ea2eb57886858552f4dd"],["/tags/CSAPP/index.html","264dc7094868acb603579476590c5488"],["/tags/CSDN/index.html","0655d625a2df7f29613f9b1a50ebbfe9"],["/tags/DNN/index.html","3fd9c8cbb13ce88e9065523e56ede252"],["/tags/DNS/index.html","adb85c38a7fd177e79e258d3ee06012e"],["/tags/FPGA/index.html","aef330b572c5255905508d30af8f5975"],["/tags/HDFS/index.html","3a3055fd5c4480bfe476dd96531c113a"],["/tags/Java/index.html","555c18c01cf36fed1e5507b70274ce0d"],["/tags/JobShop/index.html","7c73f0c3d0da624b1aadfd1e54b7bd0a"],["/tags/K-Means/index.html","82275964e30523896979c67ab0e75d08"],["/tags/Kafka/index.html","835269321010332bd14f524fd228a799"],["/tags/LL1/index.html","03605657cd2c1f3481c790aa1e73a5e4"],["/tags/LR/index.html","1dc7a5732a1bd21c1a759b0e630da0e2"],["/tags/Linux/index.html","0c80fd6aa8926d30ba8614013b56ba32"],["/tags/MIPS/index.html","367ca35a708cdcd9f65748d8ebf4c660"],["/tags/MOOC/index.html","95aaeb62102453ba4eb21a724f60f7ef"],["/tags/MPLS/index.html","5240d6829aeec74033d3850a8edae94a"],["/tags/MapReduce/index.html","2c9e727f8586ff1ab149bd4e3726b7f0"],["/tags/Matplotlib/index.html","73a03cbdc612743706fc15e022665f41"],["/tags/MiniSYS/index.html","87213cea2ff74b764e1685cedb2f12bd"],["/tags/Python/index.html","a499ab82f53f82e44061a0719f355c21"],["/tags/QT/index.html","a332cf48df85df3d99a6b972c6517237"],["/tags/RNN/index.html","1d6261bf8d6097345e4d8d1763e32364"],["/tags/SIP/index.html","e4338ec7e430f12b6ef082d715f8b741"],["/tags/Scala/index.html","88b0672abcdf6898bee00e96f76338a9"],["/tags/Shell/index.html","63199b51cc6ec4044fc8b3d93d531892"],["/tags/Spark/index.html","0c2e08a1ce3d9896a862322e488509a3"],["/tags/Streaming/index.html","57ecc7527600c5a31c7187d53556a621"],["/tags/Struct/index.html","040593c9e966d2a870df20108f6d784b"],["/tags/Verilog/index.html","62ae565b42c8573777a9e4efdcc1d9cd"],["/tags/first/index.html","4ade9901ca860b2dd8fa79f089dd38d5"],["/tags/iPython/index.html","5b8b2c10b3792e9f24d521689a65d05a"],["/tags/index.html","97b843446f301f86d80b95c7ab78d800"],["/tags/ls/index.html","d584cafa53ba76e67cd07f3444ff6490"],["/tags/习题/index.html","a5d227ac47d73ce0121f28a0dbbfdfd6"],["/tags/交换原理/index.html","3f8f23123219949e64e2b6068bf3e55f"],["/tags/人工智能/index.html","3ce3fb0c5ce09394f6631c21a1105cbb"],["/tags/信号量/index.html","4f6a9f75239dcaf83006c74f8ce10c01"],["/tags/内存管理/index.html","a700e15447bdf5533504937314138e51"],["/tags/决策树/index.html","489d128b0b1119d6239fd6e59ce1db1f"],["/tags/分治/index.html","dcfaee3bdbf37e02d6ef13ba59b79f5f"],["/tags/分类/index.html","875e6993d6bd188e6ee998c53fb9a7c0"],["/tags/动态规划/index.html","d5f0d3c0f03048f5d900344d72490820"],["/tags/华为云/index.html","b279897712f6967a6b105b2c3537f79e"],["/tags/单词计数/index.html","f7c7616c2d7ad8e4a3c5681cd31a5fdd"],["/tags/可视化/index.html","4f3011666a515ab4e78a55416c5b5338"],["/tags/同步互斥/index.html","98a4d57278080bc0387176673bd4868e"],["/tags/大数据/index.html","b769815121691f3a0c678d0f7ac1a8c4"],["/tags/学堂在线/index.html","cefa9ea918750f48ecd3fc67ab29c833"],["/tags/实战/index.html","84951335a261123ead65e5b28d0f2392"],["/tags/实验/index.html","7dd35ffe33b32565cd40bdca0488338b"],["/tags/实验/page/2/index.html","751702bf0c034f48b106d68a853674d3"],["/tags/小游戏/index.html","6020c2a44c7a28ef643b3ceaddf15b4e"],["/tags/工程/index.html","b45789e151741f1cf1b00a6666e33c02"],["/tags/工程/page/2/index.html","1d1f86d63e255387322beacb867402a5"],["/tags/手写识别/index.html","820e1ca21445b73b9f524ca93f5f704b"],["/tags/拓展/index.html","333f85d0904fd7e281d0a26e007bc637"],["/tags/操作系统/index.html","31f208ec5fbbbeaefdacc1c8a21fe15f"],["/tags/数据处理/index.html","5961260df85b2e0d1e9a3fe80e7a54f6"],["/tags/日志分析/index.html","d4c0202b52095e2dcae8782286f0424d"],["/tags/易错点/index.html","a52aec50e8602160d28752ca48bd1d58"],["/tags/机器学习/index.html","372c4d94e7f599b18545c612f2816244"],["/tags/条件熵/index.html","be867a4c19409a37dcb38eae7b5f0699"],["/tags/正则表达式/index.html","bcdd8cce975e71268e93ced1597d96ea"],["/tags/汇编/index.html","16a4ee25e00f11cb3957158e143ff286"],["/tags/流计算/index.html","c34f242c32bb7739c70e761b37c45a05"],["/tags/爬虫/index.html","b06f2d9a9feb48a79c41d10e44467fa0"],["/tags/现代交换原理/index.html","aa00482baff682c35d264025c80ce8ec"],["/tags/生产者消费者/index.html","391a169e664936e55611ad10c3868860"],["/tags/知识/index.html","f19f49a407e43a7b9eac90fa11d671ba"],["/tags/算法设计/index.html","9ebf7404bb030ebe171c4b1c943f37fb"],["/tags/线程/index.html","f2250797b2f55c8ac1b94cf5fb181881"],["/tags/编译原理/index.html","2e1bab582ffdbca356f490b9ff115db6"],["/tags/网课/index.html","37153beaeacb6f1e9724b52cad621146"],["/tags/聚类/index.html","2cce1315463378f30fcf600daf658594"],["/tags/脚本/index.html","cfd416c1709342fdee644bb3690f8452"],["/tags/计算机系统结构/index.html","2c79ba3d3b415a62e01d3b14564e6b5a"],["/tags/计算机组成原理/index.html","95781a60b7bfb9fe2033a66246c35dd5"],["/tags/计算机网络/index.html","f9c2adb7d07304508c4828d89d4ff262"],["/tags/词法分析/index.html","5928a1001dee1e79f242e209ef8bfffd"],["/tags/语法分析/index.html","357ac23753125a1431646b65f8164b64"],["/tags/读者写者/index.html","c22a412dc67fbccd6be7243144931219"],["/tags/课程/index.html","3f6366c809cb8d429f0374358ec340b7"],["/tags/起名字/index.html","664c126e6119e434c66fc3095761e496"],["/tags/软件工程/index.html","b2cb13a0e24ea386b6b7be17d0ece1ce"],["/tags/进程/index.html","63b72c9902d6e87257b170a6e0cfa108"],["/tags/通信/index.html","9a3be54ac72656f94a5281fc4705f9bf"],["/tags/遍历目录/index.html","cfcdde99f215a3cb83e3117b92377483"],["/tags/难点/index.html","2b5005e6a49cd0240a63d2f27fd1a670"],["/tags/项目/index.html","fec4764f6e27fa1d077b0f6817dba613"]];
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
