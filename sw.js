/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","327c8803e8f22bbcea85556d3ee6597a"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","a135a83c89a38240db490e0552934018"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","0314ebf7ff70785d1453b8676ce753fd"],["/2020/03/26/计算机系统结构-实验1&2/index.html","eef6c871df75e52685f49e02bd86b7ae"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","e7a7e99d98b2d1e975875e81421f7724"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","f296b7a3fb0a7e7f6dc4675c333b0f73"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","c0a9e7e492b466a433e3966f39b3b2db"],["/2020/04/18/机器学习-条件熵/index.html","d45a9f40a4f6484d1f8b74edaced7a87"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","2464a228e117239e7f957ab20b369f20"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","afc7620e1801cb88502f5fb103370683"],["/2020/04/26/机器学习-实验-决策树/index.html","47c424599a75459b155ee85c6026cf58"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","0e6e5473fb19a14c572bb66c016e4269"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","f76e77d269961d2291c27e031f174770"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","e8293e26ae96a3750b5acca6064502f7"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","3c00b528ecb99be875e12267425d00cf"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","7d76ed1ee1c551a8549866171525451d"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","8870624c38c8b2c6018f0afa9e1adbc5"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","d630c4e39d1dd96668b1e7e7b30cf904"],["/2020/06/11/机器学习-DNN-手写识别/index.html","1fc67deeef56c847aa8dd6bbf61bb9c4"],["/2020/06/18/大数据-习题/index.html","7ecb62d062d2909c939a04e3a1416b57"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","34f2c3551ced963ee01d55e5698021c9"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","a2fad576dd86f9d3b57066a0dae4ac86"],["/2020/06/24/Linux-拓展学习/index.html","07479183c52b9b7af05bca39de013f3e"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","5e9fc10ad5aa10969b004ea9afca3a45"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","c8112454fff964619c846741058c0a50"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","f41868ef051022f221b4915f52843332"],["/2020/07/15/C和C++的struct使用总结/index.html","7edf3eef19d7623a5884c8bdb8618b25"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","a8c7b9e138e3cd88e694689f7bd8dc9c"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","a805065a74c2f9245bcc88b1262707b6"],["/2020/08/10/机器学习-实验-花卉识别/index.html","fb2e30439d7d2d430bdae8c8bbffaddf"],["/2020/08/15/Python-项目集锦/index.html","be6529f5bc534fdf677d95caa6b63952"],["/2020/09/01/编译原理-词法分析/index.html","6e2f7799cde3c6bf4d22fbbede70e2c9"],["/2020/09/02/编译原理-语法分析-LL1/index.html","47dd0a6f0c0484297696647a812f11d5"],["/2020/09/02/编译原理-语法分析-LR/index.html","1308d1272c2ba42c7eee2d8a2e106591"],["/2020/09/03/操作系统-内存管理/index.html","746463b276814af3dbfafb2cc788b60d"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","b4a19151e30c1155f2b4cdf61673e360"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","9f3892c53b95bcf9f481fbebab314072"],["/2020/09/04/CSAPP-实验集锦/index.html","4e797732f17f82f85d982ab4b610bceb"],["/2020/09/10/计算机网络-实验集锦/index.html","fc8f4791d7f490a6c1f08714eb067069"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","835749119e0f32d453ceb11dd6d57479"],["/2020/09/30/C++工程项目-JobShop/index.html","1d14997c9c513a2aaf7c9b623e31f570"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","a9ea0b0fb6018cca6e2c05b5a793c379"],["/2020/10/09/现代交换原理-实验1-时间表调度实验/index.html","a222ac5e82078ffa289f62fd75a63d89"],["/2020/10/09/现代交换原理-实验2-摘挂机检测实验/index.html","70847ca516ecb7a0112469ee5e8f0686"],["/2020/10/09/现代交换原理-实验4-拨打SIP电话/index.html","86fbd4ae823ed250efd16b9e04b087c5"],["/2021/01/04/Android-项目集锦/index.html","4e5f4ac70ea6f1fad81a9b5171387a69"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","e7710e259110cd5201b2ed64f30b9bf5"],["/2021/01/04/C++工程项目-travel/index.html","d3030ef8531a77471fa8b14f04e861e0"],["/2021/01/04/算法设计-分治-最接近点对/index.html","1f344b11a33c15bce73e9da35d2880b2"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","b5fd8b07a3044a98757ac827f1171b50"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","407bb110ecc20f5c44bdb405135fbf6a"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","df52a21c6c8a3fc589c44aed36613db1"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","2d32ba572644cde57aec851aa7050fff"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","e950ab0d45a1b752d727faa98f43506f"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","682784d92c416ac0f9383b8078bbd6b9"],["/404.html","2394b59b860bfc1b2a641e2bc2300ffb"],["/about/index.html","3bd0828a410c0d8ce001ffd05093d10f"],["/archives/2020/02/index.html","111eeb19b5eccf52366fff4977e78d62"],["/archives/2020/03/index.html","bd6f7f10ba681db6bf702c866db5d075"],["/archives/2020/04/index.html","c2ceefd20b85aec59a1e6e89129e0817"],["/archives/2020/05/index.html","bcee8c6ff0485be604c78ab7206ceb07"],["/archives/2020/06/index.html","e02eea89cc65832e2050020747ebd59b"],["/archives/2020/07/index.html","31b64df53e0e3fa265e104888dbef573"],["/archives/2020/08/index.html","0dd4320a4051e623d7d7c51f86fe2b39"],["/archives/2020/09/index.html","5648ec38acd77ebfa2f7b3f9591c9a62"],["/archives/2020/10/index.html","f2f6a6b299e635dd0fd2ceb378a1ddd9"],["/archives/2020/index.html","22ef3ecea0fd71c273866b2bd8d041f3"],["/archives/2020/page/2/index.html","eaaa534b547c4097459a74edf0e64a86"],["/archives/2020/page/3/index.html","49a94c0274ff85032927e625ec3fca26"],["/archives/2020/page/4/index.html","f0317d4044feec8fc89f49fcc0e3d26e"],["/archives/2020/page/5/index.html","cc9111fc421fc4c01033e9ec80a7103a"],["/archives/2021/01/index.html","c8c6a8ef39708fa3a8e4aa4d3667f89b"],["/archives/2021/index.html","13068c300df0cbc247bb8150805a93a0"],["/archives/index.html","7c6e891bea6f28eb15281ca0a417b609"],["/archives/page/2/index.html","b2e89d63e66e2ba4dad219fb169e6ebf"],["/archives/page/3/index.html","6ac07c3ce34df96e28629d992d840cdc"],["/archives/page/4/index.html","76554076bd45748a396005a7b8bd924d"],["/archives/page/5/index.html","6595a433aa1b53939d2c74845aae1cb9"],["/archives/page/6/index.html","9785710520a29327e76a5b095cc4b9db"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/bb/index.html","d7a529b6ec979ec7acc5ba08fbfcfdcf"],["/categories/C-C/index.html","3ca3c493150405ec37e0cc19c2fbf907"],["/categories/C-C/page/2/index.html","88fd291ee2d899c595cdb6244029351b"],["/categories/C-C/拓展学习/index.html","e97e1b433d4789b351a4ee80b3bd4172"],["/categories/C-C/操作系统/index.html","2d2d38b7a20a256bc40e6377dde28572"],["/categories/C-C/算法设计/index.html","377f2c47c3510a98d2fb1282c12c96b8"],["/categories/C-C/编译原理/index.html","b95ca36a8d6ac1f03e91871aece6f885"],["/categories/C-C/软件工程/index.html","819d302d54f1f7aa0dd55565bb63d222"],["/categories/C-C/项目/index.html","029ff5cc90db640e6899c46f69fccfa7"],["/categories/Java/Android项目/index.html","1a084824dec630f6e0d5ed03245326f9"],["/categories/Java/index.html","350d55c5758743c450b0a1c815286336"],["/categories/Linux/index.html","ed09da97d4eaebbf695f3dc61fc69c75"],["/categories/Linux/上机实战/index.html","953c1827243f57f2d0f4e6a4f522066b"],["/categories/Linux/习题/index.html","8b69d55e3406eec158ba88c35bec651e"],["/categories/Linux/拓展学习/index.html","0514fb101b509ad208cf55e1fc9dd2d4"],["/categories/Python/index.html","10507e9deb51790e4010456de1fb5771"],["/categories/Python/爬虫/index.html","afa6a94a2e580e5f36e80f920254ff6f"],["/categories/index.html","0636d87762222d9416a4b9b0d2624f5f"],["/categories/其他/index.html","abdc07df9658c92c7787207dd1985a9c"],["/categories/大数据/index.html","4720d8dfab7250de90f116eec52e83cb"],["/categories/大数据/习题/index.html","0c0ed69d00a0093701a1e7f340c0bac0"],["/categories/大数据/实战/index.html","dc274dd97dcfd1b9d5df585cd011a7a4"],["/categories/机器学习/index.html","7e3a5b9b48b0abbd0207404b9d2e7c72"],["/categories/机器学习/实验/index.html","33e137498a00647106b856f4738cece5"],["/categories/现代交换原理/index.html","b5c4e4decb74dacd0862b2f1a6f44cb9"],["/categories/现代交换原理/习题/index.html","3fa013b45e96932868da9f8702e767b2"],["/categories/现代交换原理/实验/index.html","1d8e06a009f3faa030520a9d8d0490bd"],["/categories/计算机系统结构/index.html","71980566b62fb23ee72484ca8aba9b34"],["/categories/计算机系统结构/实验/index.html","137c1afa0fa031dffa9d2c767a71fa35"],["/categories/计算机组成原理/index.html","42292407be19e04b9b97ae27ff4b1768"],["/categories/计算机组成原理/实验/index.html","a138a4eda9ec3ee7e55638753be052d5"],["/categories/计算机网络/index.html","2f5ab9a2de517893d35aa21a1b3235dd"],["/categories/计算机网络/实验/index.html","2c5c94e079deddea6d021dd17ed361af"],["/categories/集锦/Android/index.html","30fdd2378a801f6c168746239d589ed7"],["/categories/集锦/CSAPP/index.html","a2380df0db4bf59099375f01871982c5"],["/categories/集锦/Python/index.html","1dc49e1ecdd13dbd0fd0cb9012557ffd"],["/categories/集锦/index.html","b48066b8d45a7a914c8e39779162f0ba"],["/color/index.html","3f627143356419f7f54e1443b3536f0d"],["/css/Readme.html","4bc3fb2cafc0c4c35b4e56559c87d909"],["/css/first.css","fac9d8c41ed1687a81bf2ac7dcd1ba30"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/style.css","0e35d2161024d9ad0bc6f16ba0eba6aa"],["/friends/index.html","1b6b145bb4d8313f9fe17fd4670ef756"],["/gallery/index.html","cac0a9f9094373909cca2398b08a7aa4"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/periodic-table/index.html","4c31220b3c8c1d35b1128df43b2c9dc3"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","db27933b52d530bd3ea9d2241eb2e245"],["/js/app.js","aa80cf51d3f304b2c56cc43cd4d75fe6"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenus.js","d280cefa875e65c8e078cd45badf4dd1"],["/js/plugins/tags/contributors.js","aec8045335d2753a39a48c34fb019662"],["/js/plugins/tags/friends.js","f372da57b83083859f60ce19b736a695"],["/js/plugins/tags/sites.js","76bf19b80414fbce774acddabf6b1d3e"],["/js/search/algolia.js","6edbbd91cb2b7e175c1e912798f3552e"],["/js/search/hexo.js","0ca9f8dadce94caef20d50d9e2e33ec8"],["/js/search/meilisearch.js","caba7692a9dba1b0a4af8ae1d268e589"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/mylist/index.html","27d18a7d85b08f5d8627cd3624b7b5ad"],["/page/2/index.html","d7e4f7dbd5b1f6815b43047c2aaa0efa"],["/page/3/index.html","347d4fbc1db1ae51bd03866eabb71024"],["/page/4/index.html","42d09f0008ab3742bc0f49d268f70c36"],["/page/5/index.html","a0b038ead5e71a346906ba36a8435bdc"],["/page/6/index.html","af9de76950709aabd0daded93ef5a2f3"],["/shuoshuo/index.html","ea2860255587d2601317a7f7408bc8b9"],["/sw-register.js","6f78cc264e0116bdc81956ca4f150af5"],["/tags/Android/index.html","ac826b89a5a45f2389606d60ad1182b7"],["/tags/C/index.html","ef2c6efe084dbce6ab07146b9008d4f7"],["/tags/C/page/2/index.html","8ce1af31459a3442cd1cf0c36f5059f5"],["/tags/CSAPP/index.html","fdae481d1b8ec304625658b3f75fb469"],["/tags/DNN/index.html","68e5d65ba6284e5b7c1fcd31dd22ee13"],["/tags/DNS/index.html","4429bb96bdba601ad07c7b8a81deffd5"],["/tags/FPGA/index.html","2a6cde052b2eda34ee8b1f66f535307b"],["/tags/HDFS/index.html","654123092d22ab000fe1646e8547afd6"],["/tags/Java/index.html","e8d3c4b27ec195cca2ce20e6a9de68b0"],["/tags/JobShop/index.html","8aaf88eb0e23ebcd10b9d1e53a405e99"],["/tags/K-Means/index.html","df76fed309e2254da610106fd28c9319"],["/tags/Kafka/index.html","fb462faab67ddec868a0099fae336f20"],["/tags/Linux/index.html","fc6749a3ab6ab4b97cd3c25a4ba07513"],["/tags/MIPS/index.html","b7754d005c196ca17846f983f65fffd1"],["/tags/MOOC/index.html","20ad63f9ca652c71c3c8a9d015f107ee"],["/tags/MPLS/index.html","f97fd9b13005d399c0b90081dc21ae52"],["/tags/MapReduce/index.html","c78d05cb6f71897c9a5730564e5f0e4d"],["/tags/Matplotlib/index.html","e88394308f8c81a619d14897be79dcd8"],["/tags/MiniSYS/index.html","b75283fd1599d83b914606a21134bdc1"],["/tags/Python/index.html","ca2bfc1b3aa422f5730877756e25ad47"],["/tags/QT/index.html","b41c343ccf85641f329d77ced0867767"],["/tags/RNN/index.html","e6c395ea0a74bcbec6d984fd3720c16b"],["/tags/SIP/index.html","4b887e1f3d1d501d55bcb5add226635c"],["/tags/Scala/index.html","e462f8cff9909001a9cc3c94c5c35b00"],["/tags/Shell/index.html","bb9e8f0fe16bb1bebb3b390d0836e653"],["/tags/Spark/index.html","adcfd55f4be775cedbd63288e3a07aaf"],["/tags/Streaming/index.html","56bed9cd8233c18663441759c6072ad9"],["/tags/Verilog/index.html","86feecd4439b12b63bc8ab7fc2e54a82"],["/tags/first/index.html","cb71b4f5d5684d9adbf074ad89575509"],["/tags/index.html","5ac1b163e4791527d74b0c0439fbe345"],["/tags/习题/index.html","47090d4c7d30acc58901e6f38f5eb104"],["/tags/决策树/index.html","19a5b9079b29216fc2b2806a53cc1ab1"],["/tags/分治/index.html","77da21f01821c9351419493fdf6a8745"],["/tags/分类/index.html","ece20602ac10452ac59aa5e3b7a695e7"],["/tags/动态规划/index.html","d3c8042d5ac15e647233bb065a1b110f"],["/tags/华为云/index.html","a29c4bac54c4b53758cd4a651023974a"],["/tags/同步互斥/index.html","10d0673bb8d1e048b83b87961fb38dda"],["/tags/大数据/index.html","1f0f558fc94efd235d7c1ef45ecab9cd"],["/tags/实验/index.html","4bea77f93d85ae943cf12fbcd47ab2d8"],["/tags/小游戏/index.html","33103e0d0491f4c20c488db91f7e894f"],["/tags/操作系统/index.html","923f0d3bd7bdf2929d72318fc4d67dfb"],["/tags/日志/index.html","e62d2bf76c873c9b586312ca70e84a66"],["/tags/易错点/index.html","b6313c6cb0fe68ccc360fa630f86296a"],["/tags/机器学习/index.html","b4eb3ed6ebeb134606a747544b85e6c5"],["/tags/正则表达式/index.html","6c31130704e533b0254aeeddd4b0d6f5"],["/tags/汇编/index.html","2e8a541e0490891f48f5f07efb286ef8"],["/tags/流计算/index.html","26e3ec24a90d6713319fd4ce1d40ef00"],["/tags/爬虫/index.html","902af5e223e35c5d3ea8eb940ff8e5ba"],["/tags/现代交换原理/index.html","65f3294bea128a72c3723f89400d16d7"],["/tags/生产者消费者/index.html","b794c364c84e154a71ae394ccfa9df66"],["/tags/算法设计/index.html","dedc75e3b7d6c921121ed7aaa972ad38"],["/tags/线程/index.html","76a42275ab59c8b5f3e58a3040bbab9b"],["/tags/编译原理/index.html","24deeacb9d35fda87d3ecf9b705e6a01"],["/tags/网课/index.html","f16daedb518a977d6ba134e998fa28e8"],["/tags/聚类/index.html","d2b9df31609850225a37341e40bdd8e7"],["/tags/计算机系统结构/index.html","6b6cb12ccf93b2a51538ce3327358c34"],["/tags/计算机组成原理/index.html","0015629626596362ce024f585ee7e7cc"],["/tags/计算机网络/index.html","e0cd410c794ab5cd2720b8b5275c4cef"],["/tags/词法分析/index.html","b5f633105998bbc7dc0a861d91020681"],["/tags/语法分析/index.html","a15b548bd824057d6b041e9bc9261b0d"],["/tags/读者写者/index.html","9be231187efb8d8a70d15c2b1144feaf"],["/tags/软件工程/index.html","4e8ef119287e25fe66d20c0b4b37ec34"],["/tags/进程/index.html","1090530486792316ea82cc2d47f637df"],["/tags/难点/index.html","d2569c73ba43a2239790d51b3836365e"],["/tags/集锦/index.html","8d8293ac2d3e29a70633521948a8d723"]];
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
