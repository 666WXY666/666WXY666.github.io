/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","9fbf1f852e3861cae58a3570d6b2cf4a"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","2ca3b1d1b6298242d79685dc12827f64"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","9d5a0a9a46588a37ca89a236b2674cfe"],["/2020/03/26/计算机系统结构-实验1&2/index.html","2f1eb5997f21ff630274aa46d5c57c7e"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","8892e4346b8e129c89eb0135d0261838"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","d10c37f6b6da30b05bb23ef6bc68e6d3"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","3ce5212bc1e7f71f847f3fcc36416108"],["/2020/04/18/机器学习-条件熵/index.html","871ebd550e3c4fb858e17a6afbcaa2de"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","f72b693971c2430fa731bf084581b321"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","65a9e2afc234819d254201f8aea300c2"],["/2020/04/26/机器学习-实验-决策树/index.html","159533f5ec03d953055d06b67d8642af"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","9ccbefee6df5a697c6c1903f528d012b"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","6efb9b3254ee3602e908b116635333a6"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","916de49f6b5570f90b666cb4242b5cd1"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","1b7bab12c59d4e2f91340f31c2e7ee45"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","fecc438d4a39eafe90c1d8a6a74c497c"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","6991abff39aaa48f839776c7e9430281"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","9664db06e45eb83250025f1c65f71c8a"],["/2020/06/11/机器学习-DNN-手写识别/index.html","5bfce51ac0f04556bc6205b742d0027e"],["/2020/06/18/大数据-习题/index.html","fd926c01f68374d96ab198798a8d8109"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","7af22e477aa738d4572b007ba94ca2b9"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","1eb67cd5f4164dfb86aec6380112ebb3"],["/2020/06/24/Linux-拓展学习/index.html","96c9f38b9a57690c99d5dbd147ec0d7f"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","1a72bb05c0252fa50c8de5b6416f6227"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","a5346c5f9ccf2cceb0193c42a93627da"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","457184f6f6162a21352bf99ff684a4ac"],["/2020/07/15/C和C++的struct使用总结/index.html","ce67bc7e9bc75debde2d3cd5dd4f66e0"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","17863cc592787c1d5897416a910ad3c8"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","8f248c6537cdf0fb69e4c4818c7fec72"],["/2020/08/10/机器学习-实验-花卉识别/index.html","6804c057f71c7c81fb68f911b32ea763"],["/2020/08/15/Python-项目集锦/index.html","a0624add8f15303c266d09dba12d00a2"],["/2020/09/01/编译原理-词法分析/index.html","a83a4b565816b2113b17a79ba8b0f7e3"],["/2020/09/02/编译原理-语法分析-LL1/index.html","11d2237d242189d233c65c77c7e686cb"],["/2020/09/02/编译原理-语法分析-LR/index.html","8981fd4766a5ffc176e81a759eaae625"],["/2020/09/03/操作系统-内存管理/index.html","4cc373e3f42530f9716759d632cc2d8f"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","4865785e98b553d7ebd394037accbce2"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","5dc00d98c1c3332ed5ad1a1494740d11"],["/2020/09/04/CSAPP-实验集锦/index.html","96b86965587df972dcea295bccd7a18e"],["/2020/09/10/计算机网络-实验集锦/index.html","36045d3ba42a53b9262e4350d67d4b65"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","fdab74b8b58617e221d8eb2b2c411ad4"],["/2020/09/30/C++工程项目-JobShop/index.html","1232eb34bf128c12b9acd7d63ab0088c"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","6a93042ddedefbff450be7400576c5b1"],["/2020/10/09/现代交换原理-实验1-时间表调度实验/index.html","b185ac2bbbec255d61865dee7b70c3bf"],["/2020/10/09/现代交换原理-实验2-摘挂机检测实验/index.html","f24882b738e749d2903e6804109a40e8"],["/2020/10/09/现代交换原理-实验4-拨打SIP电话/index.html","f19bf2053af50132114e806f4b3db82d"],["/2021/01/04/Android-项目集锦/index.html","b54097eba572fd4f5367a2b584d8ffa6"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","86d3e7e4f0ef8a3757dc649e1bfb5bc6"],["/2021/01/04/C++工程项目-travel/index.html","e6c26cfa521ab3dd4da193644fe0fe30"],["/2021/01/04/算法设计-分治-最接近点对/index.html","4ed23d01b0188d9633f37c07ee90bf2a"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","007bb3d10f59d58db552a2a6cf2ee5c2"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","2074eeca85ff03fe5a9ac1df186b94b4"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","0fa96a0fdb769c22fe4e9f29dc9f3710"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","b925886748048fa205b6cc39ddf5d569"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","baae5e1535e9b60d8257f31070fbadda"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","f070ac0260c37ffb6c0798cc87ec6036"],["/404.html","2394b59b860bfc1b2a641e2bc2300ffb"],["/about/index.html","310b12184a4e844f7d4ee721a92fd191"],["/archives/2020/02/index.html","3a41617e4c11c7294576d915459de063"],["/archives/2020/03/index.html","a880ca40a3f7f0560ed2a88ace47c566"],["/archives/2020/04/index.html","4de496f8a07c06ce06b12a4db0a68297"],["/archives/2020/05/index.html","cc9606752a38f3191c0d0e15987cc416"],["/archives/2020/06/index.html","dd240161ce197b25220d8c8d7370aa8a"],["/archives/2020/07/index.html","f7c9af9cdb205a843536cbb6de7193cb"],["/archives/2020/08/index.html","0dbd651d39335ed3ff78e7356e17d08e"],["/archives/2020/09/index.html","cda3a6ff01c49cdc55de376a8b5443b1"],["/archives/2020/10/index.html","c652192502890d21e260fc14a90ecab1"],["/archives/2020/index.html","3859916a1bf7ca59c89a872bf7f83124"],["/archives/2020/page/2/index.html","771159adf1d0f2d51eda1c20b6d3df64"],["/archives/2020/page/3/index.html","9ebd9e5e9498f1912979af655e9543a8"],["/archives/2020/page/4/index.html","2b1286fc388e4d5ed043975866868e15"],["/archives/2020/page/5/index.html","930f19adb5abd31048dd81fe0f76fec1"],["/archives/2021/01/index.html","286517c761cae4d4c9719015ae3aacc9"],["/archives/2021/index.html","52af59ed7e023cb7a4d5b11854eefbb6"],["/archives/index.html","9d6abc11b14fc58b93eb5d33ff409ec5"],["/archives/page/2/index.html","9d6abc11b14fc58b93eb5d33ff409ec5"],["/archives/page/3/index.html","9d6abc11b14fc58b93eb5d33ff409ec5"],["/archives/page/4/index.html","9d6abc11b14fc58b93eb5d33ff409ec5"],["/archives/page/5/index.html","9d6abc11b14fc58b93eb5d33ff409ec5"],["/archives/page/6/index.html","9d6abc11b14fc58b93eb5d33ff409ec5"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/bb/index.html","1068765c0b95a1589443987b5ac089b1"],["/categories/C-C/index.html","154cd78f8d890205aa7358bf7293cde1"],["/categories/C-C/page/2/index.html","0de6fc501f87d3ece88dc42e232a715d"],["/categories/C-C/拓展学习/index.html","b063e529936676becca9bee648331e39"],["/categories/C-C/操作系统/index.html","4e1ea877c85eebf24f92cd75db07810a"],["/categories/C-C/算法设计/index.html","e305f2e5b028d85f5924c3acc7119d4c"],["/categories/C-C/编译原理/index.html","ec42b3f4ea8befc9436690f124af0e81"],["/categories/C-C/软件工程/index.html","25bdce34a35bc859e6692722f8ad8f5e"],["/categories/C-C/项目/index.html","238c4ca0c204ada465242b29b9929ae0"],["/categories/Java/Android项目/index.html","4dd828fd7f32f426aa00f6eb7cff72e3"],["/categories/Java/index.html","4301846ea01fd22697264b884843ba34"],["/categories/Linux/index.html","48e5c4dcda6cbefcdc4164c2c050aa46"],["/categories/Linux/上机实战/index.html","1ae17d4e8342534b894e72685d168b88"],["/categories/Linux/习题/index.html","170877e9ebc7a1b84ef9f4282bed0ac7"],["/categories/Linux/拓展学习/index.html","2d513fd755645996c5df4c82c1785640"],["/categories/Python/index.html","7f23e4b4a013a0b41873b9aa2e185df0"],["/categories/Python/爬虫/index.html","30fd44a2e5ca2c7cb88da4b66c837297"],["/categories/index.html","cafaab415b2bdd0791d96fde6fe0d502"],["/categories/其他/index.html","16004cc9b390edddf0d2fe6332c569e9"],["/categories/大数据/index.html","b2cc6751c661a09c78300f35a9d24ab7"],["/categories/大数据/习题/index.html","b33b145cd080bf067d94523bfe845592"],["/categories/大数据/实战/index.html","6583efac02b2bd59ef22cbb7fd7a187c"],["/categories/机器学习/index.html","90c180d7d996ec584de8b77906cab562"],["/categories/机器学习/实验/index.html","5e6d2ac65d531b3e9f621bc025b2e145"],["/categories/现代交换原理/index.html","40415dbbf202e656f30205c033d652ee"],["/categories/现代交换原理/习题/index.html","1182654a7d739701bfe03bf60c81e62b"],["/categories/现代交换原理/实验/index.html","ebde4033419e000b17e64c6dd25caca3"],["/categories/计算机系统结构/index.html","6f696d7b548ee54c7f7e097a673a136f"],["/categories/计算机系统结构/实验/index.html","7bf119a86d1ae10924a1d7c3a277bac4"],["/categories/计算机组成原理/index.html","3d40b842cdfc40a095f037c2dd727450"],["/categories/计算机组成原理/实验/index.html","d993b34a6645ae0e0fad0cb7e1e2f518"],["/categories/计算机网络/index.html","75f12b6c7124f4b4162e90b485153204"],["/categories/计算机网络/实验/index.html","c69992cc56bf9d7f65c5fc2e8a56b26f"],["/categories/集锦/Android/index.html","7dd023dc58e910f1ce6822b9f642fd25"],["/categories/集锦/CSAPP/index.html","a19aede6e4bd71f7ac4f7caaf028dc69"],["/categories/集锦/Python/index.html","f822d1bac467452ce0c49abead7abfde"],["/categories/集锦/index.html","81b527548050779565408072bfc48667"],["/color/index.html","3f627143356419f7f54e1443b3536f0d"],["/css/first.css","ea01aa1635810499a5ade558f4f81d56"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/style.css","4b6ce514c846132c606ce76da7e1c124"],["/friends/index.html","b393ce21d2c7b365df51e3fdc6686986"],["/gallery/index.html","cac0a9f9094373909cca2398b08a7aa4"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/periodic-table/index.html","4c31220b3c8c1d35b1128df43b2c9dc3"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","d9980cec6ca52b0c2bc052f55af2d4ed"],["/js/aplayer.js","6e605f0855251e101d3024646f3eac60"],["/js/app.js","1948329f2fd7e750ade4bdc49138c09b"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","2887d3afe0879ea00380ae2b235680d8"],["/page/2/index.html","970ce468a604160e0c63965941d392fd"],["/page/3/index.html","14d683cf998148772338ebf31dd7e755"],["/page/4/index.html","b3746b24c514dbfc9fce6cf409989fce"],["/page/5/index.html","071cc587d1293118ef9e322b6a60b1c8"],["/page/6/index.html","accc2d43e36834c7a4d59e3e547c37c4"],["/shuoshuo/index.html","e2fec9c3c96b2ee441fd32c9b0f189ac"],["/sw-register.js","0e3e3222c28b2ba129ba316630b99004"],["/tags/Android/index.html","15d00608df8633e894ea5a339b8390b7"],["/tags/C/index.html","721d21b2a751b5bfa79b8cf6f8490d79"],["/tags/C/page/2/index.html","348305f894c82db234abde103b1099f4"],["/tags/CSAPP/index.html","fe62bf5cffc143e4f4e850e4a1d3d672"],["/tags/DNN/index.html","434d2a7c871af4b4a1e77f7e77d8320e"],["/tags/DNS/index.html","5abcab8e4d63a4d1d89ba2ef7c09c699"],["/tags/FPGA/index.html","322c008cb3c59b6bec339c1d868810eb"],["/tags/HDFS/index.html","da9a7d14e9e6940f9c93b8dbbb697abb"],["/tags/Java/index.html","5ae252e31c024ff7f43362623a218cde"],["/tags/JobShop/index.html","bf2c5739a9303f2f32783cb0a9c9c03d"],["/tags/K-Means/index.html","3902182f92e312c457a84c74961ffd5e"],["/tags/Kafka/index.html","f0126d027a5aecca86df23603c35bf75"],["/tags/Linux/index.html","6c2b480bfad68f54627ce2e8c98e41ef"],["/tags/MIPS/index.html","d8154ae40737c3ec65d80c26bc2810bd"],["/tags/MOOC/index.html","3a646ff0f85c485dad861ba514175362"],["/tags/MPLS/index.html","60bb455043cc51e4a946d1974f137a6f"],["/tags/MapReduce/index.html","62c962c71cca0607601ae8e13a66cd37"],["/tags/Matplotlib/index.html","dad37e798d14f7faf258f3e6e258e077"],["/tags/MiniSYS/index.html","02420a3be000b69897f780c3f3662941"],["/tags/Python/index.html","56ee598da1a2c6cf4a72e575e698baa9"],["/tags/QT/index.html","894bc28eedd91473b95ed49bbe040034"],["/tags/RNN/index.html","31b56adf3dd834e0007ecbeacc351663"],["/tags/SIP/index.html","5b7aab79abb36bac8d8eab433c22b85f"],["/tags/Scala/index.html","2aa7055718f50b99c5587721dc1a464d"],["/tags/Shell/index.html","07ee41f181960230fc9a2800f8100d25"],["/tags/Spark/index.html","0f4087e886c254066f52303e4de42bc5"],["/tags/Streaming/index.html","f390ad67a70ebb60dcee8f80c10d53b0"],["/tags/Verilog/index.html","aa1ddea74e8b7f5e877acfcbf896e2c3"],["/tags/first/index.html","dc2a2845fdaae49ff82e5c4aebe3e9d2"],["/tags/index.html","4661b1ced6f235a196963150da086dbc"],["/tags/习题/index.html","fbb5ab9acbcfdad936cfa9eaaed1733e"],["/tags/决策树/index.html","675963e478c3953c5a0b7d86e2a799a3"],["/tags/分治/index.html","2340068142cc7be5976037bbf18d9a5f"],["/tags/分类/index.html","19141416f2239899c7c465c207ef5679"],["/tags/动态规划/index.html","c96c99bd99aeeef66459c68a915aa769"],["/tags/华为云/index.html","a2ced95779da69a5a2b6bb1e4f7e995c"],["/tags/同步互斥/index.html","e782e8632a90695eedd01999b9dff9c4"],["/tags/大数据/index.html","ef3e096869767513b60d8b9ab1b95e6a"],["/tags/实验/index.html","f7e992a4ab7b40f019038086766122c2"],["/tags/小游戏/index.html","d7d4dd123194b2f8bf3890e935f89f56"],["/tags/操作系统/index.html","cc67b02f67edc54d86c4e57b48eac8b0"],["/tags/日志/index.html","4db0b1d05be1f8eacde347bcf979be69"],["/tags/易错点/index.html","cf4411e7879f9a72a986410ae05dd8ad"],["/tags/机器学习/index.html","ba7f0c154b4a7c5b123bdba85b1bd61d"],["/tags/正则表达式/index.html","27af0f2458f1f66843f7db04a99cde5e"],["/tags/汇编/index.html","ba9823983ca586be32b32d98061e56c7"],["/tags/流计算/index.html","fde4157bed7f1d3c6375da3dfa6be29e"],["/tags/爬虫/index.html","1b2b41348970f8ef84067253abd2f119"],["/tags/现代交换原理/index.html","eb4b0e9f73bf8983fec35833a2d7bf93"],["/tags/生产者消费者/index.html","8f246d766eb0597bee47587ec906a60c"],["/tags/算法设计/index.html","23b259629fa9ab515b0e576d90248177"],["/tags/线程/index.html","dd9fd70a50a8aacff8e796c9228f76eb"],["/tags/编译原理/index.html","13461dcffac3259eaa2046d2003c8810"],["/tags/网课/index.html","81070e279767d665d2b6065561021e89"],["/tags/聚类/index.html","e7dd16cb12647e305194b9a8fa8a556f"],["/tags/计算机系统结构/index.html","d21ac645605350889de3e712f58e4b92"],["/tags/计算机组成原理/index.html","b5590926c8d6d969208b2f4becd1d0eb"],["/tags/计算机网络/index.html","900b27706756448a48c83ce2e813b76c"],["/tags/词法分析/index.html","d7b97eb515b6dd39db7cad8e61c2f149"],["/tags/语法分析/index.html","065fd5edaa50a9d5cc322beccb30c620"],["/tags/读者写者/index.html","e0e9729f7d7c15bb7ffa8ab630481a1e"],["/tags/软件工程/index.html","5e3b3291ef2db0d9f182b6e1e95f37d4"],["/tags/进程/index.html","5c4fef343f1d040dfe5e94693d9e80b6"],["/tags/难点/index.html","4fddc451d2e6655d6c6a265ce21e469a"],["/tags/集锦/index.html","1d7465dc702d38ec16e063f40f79f45a"]];
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
