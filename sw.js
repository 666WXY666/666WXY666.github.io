/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","b471fbbce196f97e4a34a8c852c86023"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","efaa56f8e93875237573c300533a589f"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","56532bca8bd01cd8d7b438b2e40a7fc9"],["/2020/03/26/计算机系统结构-实验1&2-遇到的问题/index.html","3d962321eeb2430e4bc9b8049475abec"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","1a6dd5dd8f74c0e76ec0f40d934ff4d2"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","b81e990959032787c12be37173172324"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","06ba077df683a9532ecb52b939b59390"],["/2020/04/18/机器学习-知识拓展-条件熵/index.html","15df7c47f6b3cf5b16671351589357c8"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","f5e0a6ca61cb2af962b18c701ec487d7"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","7dbd7e9d2cd0e7327367fb1a074f397c"],["/2020/04/26/机器学习-实验-决策树/index.html","3848e069d18b61eea82bed7589ed7b5e"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","2597c4b8235dd9ae26fe145bfde871a6"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","6f191fcd85e42871e1312693d923c4ad"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","3c352c79fba003bacb4430e9adebd245"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","6be18828012f0e1c21e01a39256a6231"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","57bdb9d48d6ead9e5cea5aad0eda6a70"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","7eccd982d819ee4c50e8f92b44cd5da2"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","62d7f652cdb1b265e00026d7c64d01a7"],["/2020/06/11/机器学习-实验-DNN-手写识别/index.html","7c3f42453291a4ef5e921b4bc864f151"],["/2020/06/18/大数据-习题/index.html","29cb56434289e95ec810d2de40bc6ff2"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","5742bfa3fed147d4f9439c7629218f32"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","cb35566d47ab37a8194c8885ffc47493"],["/2020/06/24/Linux-拓展学习/index.html","e4fcea97b0a70a01944a1cd5a7a209eb"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","439b814fcb1cddf950aecfe0fb3ffc54"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","892239531b810472f3e6b901e73b9f47"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","34474578203d4a1852e69fcafbdbf1cd"],["/2020/07/15/C和C++的struct使用总结/index.html","c1c3080cfc035c9ab91a544b6345ab72"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","45ce732a15065e06eeeefabaacb2be85"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","a63c24ed4f48a1618bf550ea514253d5"],["/2020/08/10/机器学习-实验-花卉识别/index.html","baeb840168b4b1fc6a15b6c2fbb41384"],["/2020/08/15/Python-项目集锦/index.html","8ff29f26b922f02774d242cdffd215ad"],["/2020/09/01/编译原理-词法分析/index.html","d9edab64c33f555026e10b9b203b0b26"],["/2020/09/02/编译原理-语法分析-LL1/index.html","71b7560fb8c8604b22b75f703102b6fa"],["/2020/09/02/编译原理-语法分析-LR/index.html","bfac0f9724e5f377a68efb6d1a87faa7"],["/2020/09/03/操作系统-内存管理/index.html","156a4619c44613d3041aa20d4c4923ad"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","26e346434a348a418954535cd085db49"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","9e512811c216fca695828ea37d57f9e2"],["/2020/09/04/CSAPP-实验集锦/index.html","d56c94c66307852a6df092c115ac3b84"],["/2020/09/10/计算机网络-实验集锦/index.html","7f88a3faf23f9ec1ad8af0d572e91186"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","f114e9ed83889df6faf03eb23f857c2e"],["/2020/09/30/C++工程项目-JobShop/index.html","c7fd5502d1dbfdd649111ae4dd3ff35d"],["/2020/10/09/交换原理-实验1-时间表调度实验/index.html","47b0d77f0ac7cbe8d71894c0210c55a9"],["/2020/10/09/交换原理-实验2-摘挂机检测实验/index.html","8488c7184f2bd24d119136e1286097e5"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","616a9905e10fc35cbf0de7a826d63abb"],["/2020/10/09/交换原理-实验4-拨打SIP电话/index.html","4ca290ffa6952866141a921f3f71eb53"],["/2021/01/04/Android-项目集锦/index.html","c12e5ccc86e108bc020284eba8f5bd72"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","1b26ac237457cb14722dbeabc535e4e5"],["/2021/01/04/C++工程项目-travel/index.html","abf10e6e3777821851a7d14a99480c69"],["/2021/01/04/算法设计-分治-最接近点对/index.html","ce65ca3fba723e13c9bc4a11cdc5ad8d"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","38b887d1cadb720fb15bc000f826d101"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","9d78ea92aa8b89bd926ea34b1f85ccc1"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","3723a9bff47bcb88d811e4e3073a0943"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","ff1c84582da871896788a869dbdb1c26"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","8248d64da4620f48c2d177da7eb2f71d"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","c0d382631c380da5e1a7c97cd28eca89"],["/404.html","4a0f8b411f3f5e839244205f844bf384"],["/about/index.html","57712eabf616969f9a85ec2dc37c0e6e"],["/archives/2020/02/index.html","2171e5782f2af2c6767db25d712294ee"],["/archives/2020/03/index.html","dfce562540c4364145f26cd3547a8bca"],["/archives/2020/04/index.html","bf61ec7a08e1f9b8ce8f20fd4f2ec085"],["/archives/2020/05/index.html","b75a668405aaecc22075684cf980ae8b"],["/archives/2020/06/index.html","91a6cd37be829492f46765225637d381"],["/archives/2020/07/index.html","50d6cbf2262076c9afe2b6f2adb9a472"],["/archives/2020/08/index.html","27bbb54c446889b8afc0af89f874629f"],["/archives/2020/09/index.html","0baf2083dc3ae08416adf78a4660a845"],["/archives/2020/10/index.html","5686af913c3f228b8c0293d70ef63b74"],["/archives/2020/index.html","87c9413834edd18e42fb3af42aa513d5"],["/archives/2020/page/2/index.html","f4598d1103bbaa19fa296d5b2016237a"],["/archives/2020/page/3/index.html","ffdbc47c15dcaf53c4132abd44e58d27"],["/archives/2020/page/4/index.html","8d67ff80846f63cecab4fe2ad21a8bd7"],["/archives/2020/page/5/index.html","e2a4f203370f81c566353368931abe40"],["/archives/2021/01/index.html","8598854e80784c137694eb1aea1c0530"],["/archives/2021/index.html","e2d72664a59520cd5fba4a48561e43ab"],["/archives/index.html","918db11b073787653ea9b0fa8a099922"],["/archives/page/2/index.html","918db11b073787653ea9b0fa8a099922"],["/archives/page/3/index.html","d92db15c0414f85f2811411b91290d1d"],["/archives/page/4/index.html","d92db15c0414f85f2811411b91290d1d"],["/archives/page/5/index.html","d92db15c0414f85f2811411b91290d1d"],["/archives/page/6/index.html","d92db15c0414f85f2811411b91290d1d"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/categories/C-C/index.html","db9242a468ffcaf50e6155b29926ff04"],["/categories/C-C/page/2/index.html","2325a37df9f09667b8054e917475f328"],["/categories/C-C/拓展学习/index.html","313497c3c2d533eea6dc6a207f50a23d"],["/categories/C-C/操作系统/index.html","eb48086234978ec110f70ec3a9a77f6e"],["/categories/C-C/算法设计/index.html","1faff66abd7c162551945f72749b18e3"],["/categories/C-C/编译原理/index.html","939e571e440a63e55ce08d83add81bcb"],["/categories/C-C/软件工程/index.html","4cec8a8f9818b431d850878d62ab694c"],["/categories/C-C/项目/index.html","656482399fa50e457b7c009b6530e5ee"],["/categories/Java/Android项目/index.html","cc24822e07b2e49ca43d5e61be38e216"],["/categories/Java/index.html","4bb559f6c3458102fbd28112ffea8c11"],["/categories/Linux/index.html","bca8d81b314e8c80eeaa25f3313235a8"],["/categories/Linux/上机实战/index.html","266b834e7afe0f30701618f021720e3d"],["/categories/Linux/习题/index.html","8139a3eed3b68a090069342b0b32aeca"],["/categories/Linux/拓展学习/index.html","4cbc06de43c91ee2ff9deb7e439cfb7e"],["/categories/Python/index.html","34f7d78b41399264b04b81e127b15604"],["/categories/Python/爬虫/index.html","5fecde6335d4a01f733a410c838f621a"],["/categories/index.html","250f63681c473844242dcca8779a1b19"],["/categories/交换原理/index.html","59151931e375d3084b2c410a7ae5dfe6"],["/categories/交换原理/实验/index.html","17524009a5afd8c4d786dafa9092c6ab"],["/categories/其他/index.html","2a8d459e37462d9f2105ecba6180a445"],["/categories/大数据/index.html","6fa252e43b750962d5edca3b8b9e3aa8"],["/categories/大数据/习题/index.html","0fa78ebd5eb5de89bb1d2ac821aa04fd"],["/categories/大数据/实战/index.html","d235641c2ce988c482861a6748b534e9"],["/categories/机器学习/index.html","12a7d623c37d3d50a6327afc54e20ecd"],["/categories/机器学习/实验/index.html","a4282d303779d578749f6dae089e4fb3"],["/categories/机器学习/知识拓展/index.html","c41d6108397992196e017009bb3f3ad0"],["/categories/现代交换原理/index.html","13f8874df05a746d4f3fd4b6ee9fa31c"],["/categories/现代交换原理/习题/index.html","8a92357144fd6813cacaffa78768d90c"],["/categories/计算机系统结构/index.html","f34e4ba239f0f3dcb035c3532830305c"],["/categories/计算机系统结构/实验/index.html","17a04648641d587816d417d68f238b9f"],["/categories/计算机组成原理/index.html","931a78a5cbff26bb45492b1a09455175"],["/categories/计算机组成原理/实验/index.html","91a6352a3d3743fdc4526c59554ff834"],["/categories/计算机网络/index.html","b5f33fdf9596eca2bd3451cbc4e15089"],["/categories/计算机网络/实验/index.html","8415e48d8c63fd02d1cd1a6c77180ca2"],["/categories/集锦/Android/index.html","55232563ca91904d93137c1cf6dafb34"],["/categories/集锦/CSAPP/index.html","fd06427fd493a44b75d015de0b08a164"],["/categories/集锦/Python/index.html","4cb365d670cffc91b1f6f6edf64f5bae"],["/categories/集锦/index.html","c3813332ecc1beddcc4d0036790cca17"],["/css/first.css","01a90baf99fa8f190becabd973782198"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/style.css","82929e48920958a8c340a165b4af5202"],["/faqs/index.html","e4f0087df4675145163a9c6efe20d63f"],["/friends/index.html","08ad12cfc924655f46a11d9ac7bc1492"],["/gallery/index.html","63f4bc7639ebb10460b077618443184f"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/games/tank/index.html","a4a2448b8b53e14bf7bad5c1f71e614a"],["/index.html","3f69c895105718f9ae095672bb25ad87"],["/js/aplayer.js","a0a8f225cab4df42a6e0164b45d7641a"],["/js/app.js","1948329f2fd7e750ade4bdc49138c09b"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","119aa7d0cda064ce586bef38d930d895"],["/page/2/index.html","f98a39839059b28b53c37c56d0b7743c"],["/page/3/index.html","640dc1c625a6870cf6dcb92d157f9358"],["/page/4/index.html","7573db41d81a647a66be4a20665800e3"],["/page/5/index.html","fd279fc329f10660204652cbcf8ee9b9"],["/page/6/index.html","2e8dd8479c239f4720ed39593478b0e8"],["/shuoshuo/index.html","17900cd9fb27ebbff761480c9ffcf819"],["/sw-register.js","9161121b1ec2ad1686fd774982018030"],["/tags/AI/index.html","3dbab35557357c0b65b747f64baff170"],["/tags/Android/index.html","d90e83f45df0dfefa1b0aea484719526"],["/tags/C/index.html","8c044977e73240de5e5d399acdbb68c7"],["/tags/C/page/2/index.html","f02f38be46a726abf643a1dc23d76f7c"],["/tags/C99/index.html","256f5e2700edf82fdca545f50b740c6b"],["/tags/CSAPP/index.html","9339db2cf9c5aaf78661809842fe194a"],["/tags/DNN/index.html","20382b0626b3fb6bdb2bad1f7dfceafc"],["/tags/DNS/index.html","3765f7ebf69796a304c33fdcaefaa876"],["/tags/FPGA/index.html","80c3cc86bd66d7cad4ae3c3a78c2ca23"],["/tags/HDFS/index.html","820d502302dffaeaa818edb0191aded2"],["/tags/Java/index.html","8464a6fa11e8abcfd1fc6500e5abbb77"],["/tags/JobShop/index.html","fd7a63159ec7e9028168787a8e6c3a73"],["/tags/K-Means/index.html","94dab638b80d2251153ada5044ed9fc5"],["/tags/Kafka/index.html","c169f224fa4022a301140df64acd0893"],["/tags/LL1/index.html","708baaead337ead7863e2a9149ea25ef"],["/tags/LR/index.html","b94eba20e2f35c2eedf6fbd79e2b4131"],["/tags/Linux/index.html","1646736ee39111cf9489ffdcf00971ae"],["/tags/MIPS/index.html","d8b7f0f230efa4e5a90cbc81d9f74bd7"],["/tags/MOOC/index.html","56414c8db9141753a5b4e6ea297e6e21"],["/tags/MPLS/index.html","0f6290655dfe1d8e55dab650d757da69"],["/tags/MapReduce/index.html","2222be5983d0530ce8d6ac8b6e47ece1"],["/tags/Matplotlib/index.html","7a5b361f180c380a9abd7953b15bbaa0"],["/tags/MiniSYS/index.html","45837408659253a790154887588743fc"],["/tags/Python/index.html","33ac0ce11ed46ffd56c07b970897d56a"],["/tags/QT/index.html","442560fea53696c7937df2633dc4f381"],["/tags/RNN/index.html","bb7cef29c4e8fdbad545cdebb54103c9"],["/tags/SIP/index.html","bb2fdf0e2b9c84cdc1aa802750da7ea2"],["/tags/Scala/index.html","972dbe63f5fd11f251774e7425185b14"],["/tags/Shell/index.html","935689ac3291a5910e242c22cebee356"],["/tags/Spark/index.html","7c08178255b156d0f01be2d2056540b0"],["/tags/Streaming/index.html","69634b6c5ddb121a32c16a329a33df1c"],["/tags/Struct/index.html","62eb588e60af8fa761d3b8a8230d7e8f"],["/tags/Verilog/index.html","4e63515b625fa0473a35efb3de5cf2d4"],["/tags/first/index.html","bec751d9a9babd3606d5edc33db27c81"],["/tags/iPython/index.html","050019ea591d17aa566c668c951ed498"],["/tags/index.html","b158836fc0acd25c89b264129c28361c"],["/tags/ls/index.html","12a406b88b9a42eea1c6cdd1807a6fcf"],["/tags/习题/index.html","8d6e2575a2f5f0939f66a6b39752c126"],["/tags/交换原理/index.html","f359a44dabb6fb236c51bb549adbc568"],["/tags/人工智能/index.html","a8b46e8a37f8faaa40c86869ed5ba9f6"],["/tags/信号量/index.html","699d46b356fef0c673ecce1e608b9332"],["/tags/内存管理/index.html","9ec7c864f5facdce07a97c1f5eb08878"],["/tags/决策树/index.html","04f19a3cfeb7b59d5bce87acc5074e46"],["/tags/分治/index.html","5af9e444b359809dd49f38f99f718641"],["/tags/分类/index.html","28debc5e5bc77effbd4bbb56517484f5"],["/tags/动态规划/index.html","77b40b88f795e2d9a9c84933ba9575d5"],["/tags/华为云/index.html","67e7f74b8003bea69797aac991015c00"],["/tags/单词计数/index.html","71c09dad4815ec7dc1411395116b6545"],["/tags/可视化/index.html","303e7a76ba8b12cfa54c67da76dc5806"],["/tags/同步互斥/index.html","d3e15da4f8351df6ea7de47ba99dcbd4"],["/tags/大数据/index.html","2b5db085829798eae244d52a4b33b1ce"],["/tags/学堂在线/index.html","12e51a44656884e8792f9cac049d397c"],["/tags/实战/index.html","eeb5be300e91279865e6090b943c951a"],["/tags/实验/index.html","e1da3f7d69196f8e2e8486cf2577fd31"],["/tags/实验/page/2/index.html","117dcc7d928042d16599cea6ee5f6a18"],["/tags/小游戏/index.html","832f2fd68fdfb33088beb50ce62c147b"],["/tags/工程/index.html","023cc420462a43c2be1367f5e822b331"],["/tags/工程/page/2/index.html","d5e92e1e730518dfd83c464fc735c068"],["/tags/手写识别/index.html","069ab8c5f7159bf106bdf1343d4a5d08"],["/tags/拓展/index.html","73513a11707d77e1606a92f63d1bbeec"],["/tags/操作系统/index.html","47976ef281dfbfcbb04dda2fb7cce87c"],["/tags/数据处理/index.html","ece51ec7191942bb22dc34155b66696c"],["/tags/日志分析/index.html","5ae9692b540085f50c046f5c9b1d5acd"],["/tags/易错点/index.html","757ac93f27e9ef7b2f841cb0ed876ed0"],["/tags/机器学习/index.html","7ce645e98f808edc15a290bdc4a371d9"],["/tags/条件熵/index.html","dc07895b862f65d03a44a7d767f14a54"],["/tags/正则表达式/index.html","4234bd8cc1d573d4256d17bbc0e6518b"],["/tags/汇编/index.html","a23f1e55c617b8a3bcb6cf42ab33213c"],["/tags/流计算/index.html","2d8d5a1097bef0a5973027b162ebc55f"],["/tags/爬虫/index.html","87fd880369e82d4a402d38f80bae003c"],["/tags/现代交换原理/index.html","7901d086f163d2268e451cc30ff5de93"],["/tags/生产者消费者/index.html","2cffcdd1e81a75f69c69bcac75a1d43e"],["/tags/知识/index.html","01ddfbf68a69847fd7be36ce3beba9bf"],["/tags/算法设计/index.html","5e3fe4f75c72866535f0fd299e48ab6f"],["/tags/线程/index.html","6a4a44fbafad971e9eead792cb738e0a"],["/tags/编译原理/index.html","9f2fff4a78dc63a2191e4a9558928dcd"],["/tags/网课/index.html","0445bc3c062031d354f6724001b4f45f"],["/tags/聚类/index.html","c6ad9842a1a7e28b5d7b9fdb1a212920"],["/tags/脚本/index.html","45ae24ce74f7243a697c6b50571e1231"],["/tags/计算机系统结构/index.html","d9056628353566784a3486eb42523938"],["/tags/计算机组成原理/index.html","451317e1aad27ab117469fed08e28c6c"],["/tags/计算机网络/index.html","9d5cd2448a72d7abf6f82e0358382336"],["/tags/词法分析/index.html","f882c05307d1db24f2e02b3d5c3a3e41"],["/tags/语法分析/index.html","6f8daaa15c86dae32e6c67a54a05dc3a"],["/tags/读者写者/index.html","6e1880a3b1ca0b018982868005e79f90"],["/tags/课程/index.html","72e9e1c151a36cd9588d7938de6465f4"],["/tags/起名字/index.html","b29ba0f1d7d68a4311604573eca3cafc"],["/tags/软件工程/index.html","6abbeb814ac1c7380d64718c4e3eb48f"],["/tags/进程/index.html","d2d19a723392af7b68cc60ab8ad4568a"],["/tags/通信/index.html","90f724f14e2ffe0e8c3cd8be3257800e"],["/tags/遍历目录/index.html","1ff0292cb5583c2a38bdce7b21ea4337"],["/tags/难点/index.html","860d8308719e5403dcfaa94e9ab5a29f"],["/tags/项目/index.html","b57036226352d79bec6bbd7651213cc6"]];
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
