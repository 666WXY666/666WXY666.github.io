/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","ddb3226b900a19effd346ee9bd7cbe08"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","8213864cd9d75a7693f6e92a33f593e0"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","61d8f39ac1dd5f4ba3e7208a9aeb6257"],["/2020/03/26/计算机系统结构-实验1&2/index.html","456a84ea01088535547e56d3d72dce47"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","b846880108d88e2870aac46fd1124582"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","634e737b807fefeee1eadcec220f02a6"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","67e2c3e2fb528eee898349f3b74e06ce"],["/2020/04/18/机器学习-条件熵/index.html","54446fc1a5fd9793be2ffe7697eb909b"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","cbb33541d730038b8ec31b4c867c1682"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","a6b33e3ca5cd80590b52ed867f4d7a3a"],["/2020/04/26/机器学习-实验-决策树/index.html","d70909fc1eda856df95203a9ff318c50"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","2722ffb50ee223da160e841ea9c3c529"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","99bbdaaaa7e293d25ae2c89fb6448e75"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","3ddb214ca24b9cc533351efbb14a39e3"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","bcf8f108f7c28078c9b2f2933d8f6895"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","767224089cb40fbcd62599ff7b734b3a"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","bdaea0c000f2c052df9bd74e139d1451"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","5bbcc31cf9e4deac172f3d3c8082e265"],["/2020/06/11/机器学习-DNN-手写识别/index.html","58020b519d986e0b3401e480a547f24d"],["/2020/06/18/大数据-习题/index.html","452e9c6cce25410f9a952b14131369c8"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","4baf2c7f60fc13c5df26d113b43c19d6"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","e529d500461f7d47833306a945f4c745"],["/2020/06/24/Linux-拓展学习/index.html","6f0ae1349b5d25ea5371e24646ef957b"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","42c874105f3f6fd32839d00186279881"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","750ff3d3857d3b581fd36c2c528e5623"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","7c6c411130a98e54e889b1adc92708a4"],["/2020/07/15/C和C++的struct使用总结/index.html","5c0810ad77dac2842afc732141ca05bb"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","4c01c4d2b7c28035a709f9edb9fca45e"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","06c69b5dd4b65bd9504f6b8cd0564288"],["/2020/08/10/机器学习-实验-花卉识别/index.html","b9f11d98ebf123f7047b252af3f2eeaf"],["/2020/08/15/Python-项目集锦/index.html","cf26e45e837c6b7865212607789346ae"],["/2020/09/01/编译原理-词法分析/index.html","5d87ee038bb74b44705f0a58a3b954df"],["/2020/09/02/编译原理-语法分析-LL1/index.html","d48b6f96350a6a44eec97bf3c3478383"],["/2020/09/02/编译原理-语法分析-LR/index.html","3aebd6142e32c1b6a3f6cd43b790c9d1"],["/2020/09/03/操作系统-内存管理/index.html","760288ec04c46d784da192eab7b9db5b"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","072a30bdb49c2acd3b1e3334f9a25a05"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","480065530527e2b2cab4cda781e2856b"],["/2020/09/04/CSAPP-实验集锦/index.html","f4dea56439f94af4a3658194517f27b0"],["/2020/09/10/计算机网络-实验集锦/index.html","a571b9a9942f1a8489514b9376a75ea2"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","04101e1b0b9806934a465744db0dae1c"],["/2020/09/30/C++工程项目-JobShop/index.html","e74eb4024c40cfe2b3fdaa148029bdf0"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","61dc57416c4a3322b3422be72cb4dbbc"],["/2020/10/09/现代交换原理-实验1-时间表调度实验/index.html","5d5f79d09ae6da6c2964f58d32eaf5f5"],["/2020/10/09/现代交换原理-实验2-摘挂机检测实验/index.html","5e8990ea8a27bc5ffbd67d27954a42c0"],["/2020/10/09/现代交换原理-实验4-拨打SIP电话/index.html","0acec7611d1a1509a45518ffeefc24aa"],["/2021/01/04/Android-项目集锦/index.html","b24e15df0d04a097751c32a53f08acc2"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","3bb870ac5347e2d6f7479a48fe94ccac"],["/2021/01/04/C++工程项目-travel/index.html","6f665dd25c0cb4333583284b6b0cf308"],["/2021/01/04/算法设计-分治-最接近点对/index.html","d64e94a321041c8123b2004ad37a93b9"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","8c0cd8e3a003fa23c931f6612c92d6f1"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","33c50a2d2a590c621daf1fbac6722d80"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","142028f1a06067f66fe813141851baf6"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","d30de0b1e7ff98202344b4509a59f70b"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","9d5f86ea6c694c0d7d71a54407fd955b"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","a4315a995ea2fb45d02c70c95a85c03c"],["/404.html","2394b59b860bfc1b2a641e2bc2300ffb"],["/about/index.html","310b12184a4e844f7d4ee721a92fd191"],["/archives/2020/02/index.html","44db05989d180125ea6aede519bc877d"],["/archives/2020/03/index.html","b696ec4aa0e3de99937e6e7eabd276e4"],["/archives/2020/04/index.html","ea8416715f96506971e403017d5f3358"],["/archives/2020/05/index.html","2ba5caca3335e389bb69aa85762fbc86"],["/archives/2020/06/index.html","62d1ee67c8fde6af9cc8f0afa68e63f3"],["/archives/2020/07/index.html","f23af22e37906e38fc3c6563e8da98d2"],["/archives/2020/08/index.html","3ed11f7f2be19c3c1de3e3b616509cb3"],["/archives/2020/09/index.html","a5d863c578a3293f878e525abf4bd1ce"],["/archives/2020/10/index.html","8c790a6f8ca56148d2682d5e5cf79dd9"],["/archives/2020/index.html","3821057d3bd6395437dcee41c40d38fc"],["/archives/2020/page/2/index.html","b566146cc649fdf456bb3c683b1bde25"],["/archives/2020/page/3/index.html","d5293b0952593d3b9328ff4f5b6cf8dd"],["/archives/2020/page/4/index.html","7b3878375c08a209e7bd7ca5f41b6b45"],["/archives/2020/page/5/index.html","96f388d4cd6ae427794d2bff992776bf"],["/archives/2021/01/index.html","ddbf519748a55becfa8011fbdb49ab2a"],["/archives/2021/index.html","fd0f9ced13de48ab2fb2c912cf3c291d"],["/archives/index.html","e1e5257d4313ecc6676487ab8d07dfdc"],["/archives/page/2/index.html","e1e5257d4313ecc6676487ab8d07dfdc"],["/archives/page/3/index.html","e1e5257d4313ecc6676487ab8d07dfdc"],["/archives/page/4/index.html","e1e5257d4313ecc6676487ab8d07dfdc"],["/archives/page/5/index.html","e1e5257d4313ecc6676487ab8d07dfdc"],["/archives/page/6/index.html","e1e5257d4313ecc6676487ab8d07dfdc"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/bb/index.html","1068765c0b95a1589443987b5ac089b1"],["/categories/C-C/index.html","97efd4082fbe2aa559511bcdcba273b3"],["/categories/C-C/page/2/index.html","cd44acab69f1a7f46cc5891edc1990c0"],["/categories/C-C/拓展学习/index.html","9e844de50d91d4f9718a4f48bc6ef316"],["/categories/C-C/操作系统/index.html","6c265c29b9af0f08ed07a741730fdabe"],["/categories/C-C/算法设计/index.html","216fab5ad59fce04ea559e893bc11218"],["/categories/C-C/编译原理/index.html","97ac42f14b2dc4a21f2f4dc34d990552"],["/categories/C-C/软件工程/index.html","0558e5c8b42d247303ac6eeaac68b11d"],["/categories/C-C/项目/index.html","255d50f76ac1af8bd56c69c015add3e8"],["/categories/Java/Android项目/index.html","d61f41b31234b3d910c6312f687e0156"],["/categories/Java/index.html","8f41d4a0e4587735b947d8d7582534e4"],["/categories/Linux/index.html","6843763776964dff65e287eaeeadfa20"],["/categories/Linux/上机实战/index.html","033793d10918fa1bcb53edba89908d61"],["/categories/Linux/习题/index.html","a7edce6533b379a03460c1cf0a808c34"],["/categories/Linux/拓展学习/index.html","ef2ad0e138c691ad23f40c236fd8b7d3"],["/categories/Python/index.html","e4afb2adec9000b462c80db3288b253a"],["/categories/Python/爬虫/index.html","34b355fa2b968f10caa0908608e4b523"],["/categories/index.html","cafaab415b2bdd0791d96fde6fe0d502"],["/categories/其他/index.html","0b78163dfb4a0bfebedf3124785dfc18"],["/categories/大数据/index.html","9474934bf8831a84cd20a0ec2a91bd8d"],["/categories/大数据/习题/index.html","3da82e954ca4027aeab6da860124dcea"],["/categories/大数据/实战/index.html","d96c800ef235a860d356f68bae2cc875"],["/categories/机器学习/index.html","883ad99fd639f71763e48fa5e1e2f09f"],["/categories/机器学习/实验/index.html","e2e0cb14a3e99512c5d96e61bd4ee536"],["/categories/现代交换原理/index.html","96b9a256b7a6805f19eda35913527801"],["/categories/现代交换原理/习题/index.html","197282dbe56c9ead4fdf0e34dc162146"],["/categories/现代交换原理/实验/index.html","2a642aa423c20b85485c7366bde044d9"],["/categories/计算机系统结构/index.html","3d93ff4af691e6ecbc083d676b0c1951"],["/categories/计算机系统结构/实验/index.html","e2da7fc6497fc161831b7f6d3bc25eda"],["/categories/计算机组成原理/index.html","84ba3abbebe32311cfeae86fcd3301d2"],["/categories/计算机组成原理/实验/index.html","fd033efe8e559360e0d33a6fa5ff8629"],["/categories/计算机网络/index.html","3dcddddfd8dca986577760f6ef0d2f83"],["/categories/计算机网络/实验/index.html","7c713a162de850deee2728e1a00e7d3e"],["/categories/集锦/Android/index.html","4199b2d2d079a2e3dc3b9863ab938d9d"],["/categories/集锦/CSAPP/index.html","3957ef12f6471a0f13c65fb0dd0792ed"],["/categories/集锦/Python/index.html","47fda2e00eb5304d1b1294c3d3356b8c"],["/categories/集锦/index.html","ea89b96f621e05f821a7571cffdd3809"],["/color/index.html","3f627143356419f7f54e1443b3536f0d"],["/css/first.css","ea01aa1635810499a5ade558f4f81d56"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/style.css","4b6ce514c846132c606ce76da7e1c124"],["/friends/index.html","51cc9b4cb2ccf87a8f0d3866db24bae8"],["/gallery/index.html","cac0a9f9094373909cca2398b08a7aa4"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/periodic-table/index.html","4c31220b3c8c1d35b1128df43b2c9dc3"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","a297f4c65ec85decbdbcc144c37ae370"],["/js/aplayer.js","6e605f0855251e101d3024646f3eac60"],["/js/app.js","1948329f2fd7e750ade4bdc49138c09b"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","891d428ce590e8cf0ff0dd12d75f48a7"],["/page/2/index.html","22f79093df30f13de3acf9ff1f050b17"],["/page/3/index.html","bac934b1b1d2005fa02444baf2c679c0"],["/page/4/index.html","0cc571e78a7b21d31b786c676764afbb"],["/page/5/index.html","0153ba49c74f5b12fc7dd41e69c45975"],["/page/6/index.html","6f38ff6fd79a2e4a050eaa87f4a9551a"],["/shuoshuo/index.html","e2fec9c3c96b2ee441fd32c9b0f189ac"],["/sw-register.js","9108afd0a9303e6b752d5ac57b1324e7"],["/tags/Android/index.html","f145625d49addadb84512e48a5359fef"],["/tags/C/index.html","36ce916a68f4fbba84c74a046de9dfed"],["/tags/C/page/2/index.html","4814ea90681f1e7cecc839da6d7d194d"],["/tags/CSAPP/index.html","19bb7eff42dd830bc47228620e5fb2fb"],["/tags/DNN/index.html","d8310b823220f8b5560c7fd5d43a2447"],["/tags/DNS/index.html","3dbc28fd970aedaea90ec060e6a67557"],["/tags/FPGA/index.html","873fca116f7ce3fba5c19bf0629ce20c"],["/tags/HDFS/index.html","c2041ab6bbd55c78a8ced028bebd8899"],["/tags/Java/index.html","b1f0ef6f303a6baaea9f1fcc60581155"],["/tags/JobShop/index.html","53c83021b5b26fdaa0e971a1e7f31560"],["/tags/K-Means/index.html","b079469e0e2d95d3293a2be81c74a710"],["/tags/Kafka/index.html","e7dd12b449f4da97975b77bd946f9b90"],["/tags/Linux/index.html","2856f23e67bf4be749467c1aa875b540"],["/tags/MIPS/index.html","3525d0d4ced85de1f41363fc94459308"],["/tags/MOOC/index.html","f5c79e4d0836700aa9a6432cb7452ff5"],["/tags/MPLS/index.html","84431127b9f04029dc8ee4fa897b327d"],["/tags/MapReduce/index.html","d80f1ddcb317155fc7bdb7da76fe6079"],["/tags/Matplotlib/index.html","c4409d7c82d22ba8669d8f7518b68723"],["/tags/MiniSYS/index.html","6930aca2e651e03ee77636f4a785f5b3"],["/tags/Python/index.html","7f4de78f54f5733e633eee83668b5919"],["/tags/QT/index.html","fae85f364324a99975c030dcde2284b2"],["/tags/RNN/index.html","c014e2a7f7ad8b63cabf2a5bef58350b"],["/tags/SIP/index.html","0591eb76103721125028b8e4ab8419d0"],["/tags/Scala/index.html","100f6ae3394dd4296423590ed4535d41"],["/tags/Shell/index.html","77c9bf9b0f7c3cab287457c04931dbec"],["/tags/Spark/index.html","4cc91f5fdb409e0e9a8f5c8ef7e379c2"],["/tags/Streaming/index.html","8022ca861c8912deb0cacd7d050765c7"],["/tags/Verilog/index.html","ceff40b2faf447471e67eaa75c31333a"],["/tags/first/index.html","43be15e1e772ff171aa2c1e3aea10907"],["/tags/index.html","4661b1ced6f235a196963150da086dbc"],["/tags/习题/index.html","e5310ffb0b335c2fed9c443172d5e3ee"],["/tags/决策树/index.html","571d90612ee4709644557ea0d80f10f4"],["/tags/分治/index.html","db437252129af9e0e319c65b16bac35f"],["/tags/分类/index.html","ea88c2485477580769594021135ca692"],["/tags/动态规划/index.html","4db2e8101ebffca27d5084350207369a"],["/tags/华为云/index.html","348ab16b8f91a080bff67837276f5094"],["/tags/同步互斥/index.html","2cc921ae9395bafb76de4f0d7e43451a"],["/tags/大数据/index.html","00c5b7ea5ae0e9762b987d0b181972a5"],["/tags/实验/index.html","35c6ecd38699f9da8d11991063d6d1be"],["/tags/小游戏/index.html","0d9c2467f124687163fc0aaa565baacd"],["/tags/操作系统/index.html","13c8885421f3ee9ad81476e5d2dbf9d6"],["/tags/日志/index.html","f18c2d286d74513347030d75fb3ad081"],["/tags/易错点/index.html","b870dcade1ab93677bae6f19b077315c"],["/tags/机器学习/index.html","4a09f47d31f25eb27aeef4cac0952ea8"],["/tags/正则表达式/index.html","a5585a4a8609fe4db09c853952218255"],["/tags/汇编/index.html","a8c177f33b77d8e00b190e34b5bbf9a1"],["/tags/流计算/index.html","3bf2adaf16af2fefe3eafeb2f5d75821"],["/tags/爬虫/index.html","f268eb97c7832f18eaab932ec7780d17"],["/tags/现代交换原理/index.html","a9b1641c8a1d320b91d4ca62795544a8"],["/tags/生产者消费者/index.html","fce3f8df72c35e9a475c46c0f5cd6ecf"],["/tags/算法设计/index.html","550146ef2728a542f56a2883a9fdbe72"],["/tags/线程/index.html","afc702af519a03f396eaa9532448a326"],["/tags/编译原理/index.html","dd8f83c8ffa3777f78380b08db0d7537"],["/tags/网课/index.html","15b3a66fdfc5e6fdf5fb33b7986334eb"],["/tags/聚类/index.html","af3cf9a56eb805d51091cbeaf8c87583"],["/tags/计算机系统结构/index.html","c2708d02c338a5e862d318464b05a522"],["/tags/计算机组成原理/index.html","3c726e7f2d10c9a6eb8d936fd774c2f4"],["/tags/计算机网络/index.html","3cae6324ac78d832fd519ca2238b0917"],["/tags/词法分析/index.html","f76452b2037396c2a8d860a40d301001"],["/tags/语法分析/index.html","01afdec5ded22ccf96a67bb7a01c6a32"],["/tags/读者写者/index.html","92dd0822655c27a4f4f12a491d602e3e"],["/tags/软件工程/index.html","cd77ca2de976b4cb64f9faa5d3a5ef62"],["/tags/进程/index.html","d349a09ca2035866998e341209d5ac28"],["/tags/难点/index.html","98ff5293867a457eeeb26b4edac080c5"],["/tags/集锦/index.html","8e97422191eff81781f4f689fcde121d"]];
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
