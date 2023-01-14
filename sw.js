/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","bfeb9e8c3dc4771388d5caa0c35ab02b"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","a7488425d464abf32224917878284196"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","9d01c885fb3c544ec16db2c0a39eab63"],["/2020/03/26/计算机系统结构-实验1&2/index.html","a2d309fa60f06f5bf4c05efd2be40c83"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","4245099eccad60b912638c0a13f71b74"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","4d3b8df68c691776600e2099b7a7838c"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","deb19df6384994999e67ed21ff0c60c1"],["/2020/04/18/机器学习-条件熵/index.html","fac9fee012a7b9152d746e3867a1333a"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","c4beba584c5b8f4e91f5c5fc20b2499b"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","b3b0871474ce551f7118060c0e9f6134"],["/2020/04/26/机器学习-实验-决策树/index.html","55355789523a9906ae413d351da91e8d"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","b80262a5353cfea201932a946705ad58"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","0a3a2ffae356116d7fe5328083c2370e"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","e569ed973574bb8d58e20352c9a19aab"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","a039991649fe6b90c785bca4a58d355b"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","fa8db19e7d72617c1cd13bb517410f03"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","801d26bc8b4dae39626d1a4915e8143d"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","9925e37164e83dd4590c1bc24ea5dd6a"],["/2020/06/11/机器学习-DNN-手写识别/index.html","b4a212050e7fce42d67a93310c492d21"],["/2020/06/18/大数据-习题/index.html","d6c2e57044e7a6e501238eb38759ca00"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","1ec4230ff99c946856546f4592408985"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","dfceccc287f49c0aad541367b194afc6"],["/2020/06/24/Linux-拓展学习/index.html","cae228ad26625c951d19dcb76fde1136"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","c334bb55b1cd6faf845df14eb753c3a7"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","728df9db811ba1673d428046df76c7aa"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","186bdf69d346403209b2b9744a064f1e"],["/2020/07/15/C和C++的struct使用总结/index.html","011b31abe4dc99581a244cd09d4015f9"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","b50123edda1575476a6d0413d7c4fa16"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","8b484b9a5a1e52fc556fdc21e846e1d7"],["/2020/08/10/机器学习-实验-花卉识别/index.html","c3bfc2b20090baec7f38c9511f9325ca"],["/2020/08/15/Python-项目集锦/index.html","71bc25e9be26113c9c52a4afa78972f7"],["/2020/09/01/编译原理-词法分析/index.html","39612608c9fe5656bdb522a409fc8a3a"],["/2020/09/02/编译原理-语法分析-LL1/index.html","ed62b4d2ee8f9ab7da59efc65d4fe138"],["/2020/09/02/编译原理-语法分析-LR/index.html","27747744ac95e1539d6764aba438e892"],["/2020/09/03/操作系统-内存管理/index.html","c5d72b9270c649a605f8ab3f470fba42"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","b7d2a5d0010c5c15e995b1e95d42d391"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","7c1b2c81c8f17c544ed72a531b57c669"],["/2020/09/04/CSAPP-实验集锦/index.html","3b082d16985c42e65a9cf5f7a0ee214c"],["/2020/09/10/计算机网络-实验集锦/index.html","173620bac91af8f3048af1697cf39559"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","88bfb24961722e8a9726044629fdc19c"],["/2020/09/30/C++工程项目-JobShop/index.html","b677c901ceab0f19d5dad6cbc6a2c710"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","19233252839124b88d6f3494c8a4508d"],["/2020/10/09/现代交换原理-实验1-时间表调度实验/index.html","f25524b163f90f9ef25b4c30624a2849"],["/2020/10/09/现代交换原理-实验2-摘挂机检测实验/index.html","c183decf08edef83f29ecd34810003bf"],["/2020/10/09/现代交换原理-实验4-拨打SIP电话/index.html","f7c940b4b789bee209140fb36e2caef8"],["/2021/01/04/Android-项目集锦/index.html","86858d352e3daa635bae6c75b610bd00"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","948c47bf908a1936ca8a90738f163939"],["/2021/01/04/C++工程项目-travel/index.html","51f61aebd1464d35b226fc9a7f4b0c7e"],["/2021/01/04/算法设计-分治-最接近点对/index.html","8a5c3dbc0c92497691921d55bffc6b9b"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","3e4844dc6ed7a0bf2ac16fc2c410521a"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","cae7687310de8f0d37e73d88759e3977"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","85522efa57be0d5bc9095486c0e4a4da"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","c06c9dc70519c0f6d1c4d4baf8bfe3c8"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","79b5299e3df619d7d0839401277a2d40"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","1d35a44e6d41e95d90ef6df7681c6e79"],["/404.html","2394b59b860bfc1b2a641e2bc2300ffb"],["/about/index.html","eb28a18d43294e1c6ade89fcf8e5fa17"],["/archives/2020/02/index.html","0426428d6367d9409f47cfa0419595b2"],["/archives/2020/03/index.html","dc3fd017185d0514655a7f0fb7267dce"],["/archives/2020/04/index.html","174ab0b59edece2ba3fb12aa0eb22aea"],["/archives/2020/05/index.html","b10467e1727e923e873d0d9d4c82f504"],["/archives/2020/06/index.html","bef4b3078cb2aa2c8df9cbbc30e3ee92"],["/archives/2020/07/index.html","72c96b01424667e0b53930610730cf7b"],["/archives/2020/08/index.html","11478dba1b04e21b9e75f29989f79b7f"],["/archives/2020/09/index.html","eeaaca0c9bfbcb8b7ecc358931502613"],["/archives/2020/10/index.html","239b3740249373cddbe5c706ba401d2f"],["/archives/2020/index.html","fbfdea6774a420ddc931319b4ff6b3f1"],["/archives/2020/page/2/index.html","39723f5162e4dfb5d5ddf6e8ac5355c8"],["/archives/2020/page/3/index.html","d9e944783b1afc19f380a8a8f12a38f2"],["/archives/2020/page/4/index.html","f6e34adf6b7d407abb90cb16e50e3f0f"],["/archives/2020/page/5/index.html","dfb5225bd698130c2cf81fe371672cd0"],["/archives/2021/01/index.html","cbb8dc9825ab29f0e0e17e696a0fc827"],["/archives/2021/index.html","04fe3dfdf18eb828d842cb461e2f14fa"],["/archives/index.html","dbbb9637f1f298226f085da987bfb04b"],["/archives/page/2/index.html","dbbb9637f1f298226f085da987bfb04b"],["/archives/page/3/index.html","3dd1f1b05b1580d1cc893faac8631cb3"],["/archives/page/4/index.html","3dd1f1b05b1580d1cc893faac8631cb3"],["/archives/page/5/index.html","3dd1f1b05b1580d1cc893faac8631cb3"],["/archives/page/6/index.html","3dd1f1b05b1580d1cc893faac8631cb3"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/bb/index.html","5b7703aff3594b390847c2c8760eae59"],["/categories/C-C/index.html","5d4a5c023f752fb0c006513a2195ca4a"],["/categories/C-C/page/2/index.html","d2d4cf56d13f2bc30e753405275aa8dc"],["/categories/C-C/拓展学习/index.html","b7bb92bf45a0223b2ba7c7c467c9211b"],["/categories/C-C/操作系统/index.html","0d24d7628f3586fb08bb4724d922c620"],["/categories/C-C/算法设计/index.html","32556fff5e5ea32e8d1ce5a5ee002714"],["/categories/C-C/编译原理/index.html","46ebdb6453d2d6c48e8fcb613aacf423"],["/categories/C-C/软件工程/index.html","e36823689225dd20053d3a447e3340f8"],["/categories/C-C/项目/index.html","fc2f6cacabc63b0a06732274e989da22"],["/categories/Java/Android项目/index.html","0011e6db4b963fcd6b981783852e8caf"],["/categories/Java/index.html","8b13adbc7d15d1e6c712a99caa3841c0"],["/categories/Linux/index.html","3f42947806ba93ddf451e63508baa798"],["/categories/Linux/上机实战/index.html","ecec0917c3ffae830016e1cba7327000"],["/categories/Linux/习题/index.html","d7c2b7c2f150ea118d13ba0a0ad299f5"],["/categories/Linux/拓展学习/index.html","166c8d5f1403da7b98ffe63ef00cf622"],["/categories/Python/index.html","a6d967c4fbd6af7aa377acce4c3590e6"],["/categories/Python/爬虫/index.html","5945c2129f424fe5ee88320b40fef80a"],["/categories/index.html","7f5b62e497a8a04e0bb4ea249524b110"],["/categories/其他/index.html","37b41ca5dc2ceb08f4652583d3b8ebac"],["/categories/大数据/index.html","304012a67d87b78e05c7c2ad7d4009c1"],["/categories/大数据/习题/index.html","72826ea3b4e05f27ee092865fac964c0"],["/categories/大数据/实战/index.html","a4c89d77beeba52266f35689539a290d"],["/categories/机器学习/index.html","11af51fcb37ff363106ed2bc8a715a23"],["/categories/机器学习/实验/index.html","7c6a442e79131d576e959a34c4011188"],["/categories/现代交换原理/index.html","982bfbddf11ad3f2320a89d5bb0a5373"],["/categories/现代交换原理/习题/index.html","b1e84d36a031753912e0d4484d59b517"],["/categories/现代交换原理/实验/index.html","f0d64acca86f561bc1cab489d7e38536"],["/categories/计算机系统结构/index.html","37b21994d35cce4e5396a0a10bca4eab"],["/categories/计算机系统结构/实验/index.html","39b29437e68ba8348a71e8e9eee85a42"],["/categories/计算机组成原理/index.html","6a1d43e8104492b22537b3975245a3c2"],["/categories/计算机组成原理/实验/index.html","d0375a3e589391e8f2c34d0ba56215d0"],["/categories/计算机网络/index.html","58e89117a5e18275cb8c0097497c827b"],["/categories/计算机网络/实验/index.html","e3d0ce4f4436a40ee799214a09d47c1c"],["/categories/集锦/Android/index.html","bf33a7da439805227aafcf3725c37681"],["/categories/集锦/CSAPP/index.html","b5b4b2d81fbda30446e5ad24bd038091"],["/categories/集锦/Python/index.html","cafa8a4c4623382471fcd8b3d6fbd10f"],["/categories/集锦/index.html","9b634064a6241275d9e94d49db124426"],["/color/index.html","3f627143356419f7f54e1443b3536f0d"],["/css/first.css","ea01aa1635810499a5ade558f4f81d56"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/style.css","4b6ce514c846132c606ce76da7e1c124"],["/friends/index.html","3f62a747a856ffc7ea5dec03a8b06884"],["/gallery/index.html","cac0a9f9094373909cca2398b08a7aa4"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/periodic-table/index.html","4c31220b3c8c1d35b1128df43b2c9dc3"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","7cd7270ada432dc4e61a1d0771463000"],["/js/aplayer.js","6e605f0855251e101d3024646f3eac60"],["/js/app.js","1948329f2fd7e750ade4bdc49138c09b"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","bd48637bc861c65321f6b42a8830f394"],["/page/2/index.html","4298d9fcc26dd9d8f42e6184087d8a70"],["/page/3/index.html","f54eeb23aec1f655bfaaf5315a0bbc94"],["/page/4/index.html","e826a22f2520f645169ab739ec650b47"],["/page/5/index.html","e6ddbbf44d8b8ff4948ec37adf41ac7c"],["/page/6/index.html","ce703bb8a8a289995ee612dbd6bb18e3"],["/shuoshuo/index.html","b2698812d513533794338437619fdc93"],["/sw-register.js","730e6635c14ff0183cf1497e0d39c042"],["/tags/Android/index.html","1aa7368230e3c394d21f3679d1eb2c77"],["/tags/C/index.html","f3a1c8fe8b95738ad97c9fc07b7f18ed"],["/tags/C/page/2/index.html","d607a2191c7e3205262a388f77ceda18"],["/tags/CSAPP/index.html","920634c09e7e04eb539377ff61adc603"],["/tags/DNN/index.html","9099b0a326c0783bb3db096db35cf011"],["/tags/DNS/index.html","d6fc97732c2e5356bacceb45e49d2398"],["/tags/FPGA/index.html","7438241aa07d1f1139cb6a510807c63c"],["/tags/HDFS/index.html","573a6be5b76d3ff992649813fd50ca88"],["/tags/Java/index.html","7ea56970045ea423a01795aad11ca225"],["/tags/JobShop/index.html","57f5b7ad56392af6f53d8811f9cd6997"],["/tags/K-Means/index.html","57980d0ed5b04ea5eb0c444fe058a858"],["/tags/Kafka/index.html","22bb080110efa659795443197deecc03"],["/tags/Linux/index.html","ae94e8ca858b8ba12ba45998cd1a5e10"],["/tags/MIPS/index.html","ed718378c10733fb3fadb361bd944b5c"],["/tags/MOOC/index.html","62c1787ae80eb295de7be0d9362a22ab"],["/tags/MPLS/index.html","0ce80a63aaf98d3db09c85d402a8b53c"],["/tags/MapReduce/index.html","0b47cf67ae0adee961789eac5032d73b"],["/tags/Matplotlib/index.html","b872cb9c4e810cccee2915cecba8a316"],["/tags/MiniSYS/index.html","f845ded01fb26f787e3df5b5f851cfa7"],["/tags/Python/index.html","bea15889774ed9dc6439d68cd01fd42b"],["/tags/QT/index.html","eae6f38b548073baca2e00a4fa8fd9be"],["/tags/RNN/index.html","3fac7132213616e6dedc47da60d60c46"],["/tags/SIP/index.html","71fee7b77fb4f918fa7be8985ce51fd8"],["/tags/Scala/index.html","cd63bf0c778f9dae84c931f062d1efe3"],["/tags/Shell/index.html","48a5c74f45b51f3fb1d614fa97f9a14a"],["/tags/Spark/index.html","1861a2751ecc5fdb9433972a7338e29f"],["/tags/Streaming/index.html","39a862115b5a52942b859b1f2709fe3a"],["/tags/Verilog/index.html","2c2b78b405e0bb90b92ff2d5d43dfa53"],["/tags/first/index.html","acca34b6d9f24c8d1fdabd613470351c"],["/tags/index.html","2bc9483f4e5209d9c9c1a6a575c0ed47"],["/tags/习题/index.html","29a92ea627a641a2011f9a44bbd3a3eb"],["/tags/决策树/index.html","67444b1d68ee96b6baa547b075f23ed0"],["/tags/分治/index.html","ba8af8cc068eba33c350e6592b394a9c"],["/tags/分类/index.html","9eb5981a88077a17ebb486a75d9cbb35"],["/tags/动态规划/index.html","de30d8785e46c29c783b6b0b88e98980"],["/tags/华为云/index.html","f49e5998587533b40ab3b8df83ad1948"],["/tags/同步互斥/index.html","54c256a79a065ae77d7aabba0d8a2699"],["/tags/大数据/index.html","614db8b543a773d58eac2ed7f76330b1"],["/tags/实验/index.html","b555b628d679dc302bddc994c2741a79"],["/tags/小游戏/index.html","32775ed2c5d75127ee326aeb6ecefd48"],["/tags/操作系统/index.html","2f2f8663a7e4ac9aefbea0affd5b26c3"],["/tags/日志/index.html","8086793c7e56f0ff3295a59848ad5674"],["/tags/易错点/index.html","97b66c9e4f8d1e7287110cc5fa46a73e"],["/tags/机器学习/index.html","cabe7c9572616d7770bbf1d19b065574"],["/tags/正则表达式/index.html","d93de441527a1651ac88bc36803bbb3c"],["/tags/汇编/index.html","0d5aee4648dbb2b5861e015182abb86d"],["/tags/流计算/index.html","a1aff765fa25ac5ad10b7349021e58d0"],["/tags/爬虫/index.html","6975de470599221dde03412df0495d79"],["/tags/现代交换原理/index.html","452b6e7af2a698d7f44d5e03a396222d"],["/tags/生产者消费者/index.html","0cb4ee9d42576d2021e61f72ef2fc1cb"],["/tags/算法设计/index.html","09b2e367ecc4d0ce88fae3fb305a43c5"],["/tags/线程/index.html","e54a09c5cce53fa98580d739c077b1f8"],["/tags/编译原理/index.html","b80d76838762727671c54af8651b97f5"],["/tags/网课/index.html","5958d69106f921e1c157096258c38945"],["/tags/聚类/index.html","a37470bc463a07ee72fcc49df1adeac9"],["/tags/计算机系统结构/index.html","1e9bb59aa1b4ab3de55788b5d44796d1"],["/tags/计算机组成原理/index.html","5454b2abdfbdc4ae79bc2dd4160b3b00"],["/tags/计算机网络/index.html","9584fa3c001fc77901918c3997ccdd84"],["/tags/词法分析/index.html","bda3e990fbe3d72991f35359efe0eb95"],["/tags/语法分析/index.html","4de1696eda8dee685765e256fe150437"],["/tags/读者写者/index.html","c03a62a6ef23d972d7ad059d821130ae"],["/tags/软件工程/index.html","2f294f84dc88d331fb896ec0ebda9104"],["/tags/进程/index.html","2972fc7f270b4f732517cd409ca70cf6"],["/tags/难点/index.html","cf2b1a47c4bc2c7bd166bfb867c6dc19"],["/tags/集锦/index.html","4511e501ed39fc1dcf2ab2a13bb6f7ca"]];
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
