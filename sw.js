/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","20c3f417328b5e90fb69c9f3880c1409"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","ecc8b771d71604bf00c4d383f146d182"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","0425d90f357dfa5fb78307f95bed2d90"],["/2020/03/26/计算机系统结构-实验1和2-遇到的问题/index.html","9185845377e1bfddede8ff949ee8043f"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","1ef636946ad9bc10cee7c331f9029464"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","bf46d668127e32a5775b588380cbbe54"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","e74a2fe93838a003755f386eff9b1411"],["/2020/04/18/机器学习-知识拓展-条件熵/index.html","ee6c8cd3e2456314792a38aedc8e3ee1"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","954f2e3802b603de8d4e8699e83eb0d5"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","cf6eef52020152e7fd4deaae28384a35"],["/2020/04/26/机器学习-实验-决策树/index.html","8376b71a344f634c28b81b3c0ba8dcac"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","a1b4402b5d245395d690cb154f2a2ad5"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","72775b625db6ed6019f2116ec3c928a1"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","4cfa8415c44eb82c64ffb4df878f1c4b"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","6d100c700900eaf64333a0a4329563a2"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","92c3f458c7fed6d574996a5f7c9e4841"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","b3c4e5e4dc89d5a4d3c708ff12dbc95e"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","935ab0b55b00db7b1d809fb061a6856a"],["/2020/06/11/机器学习-实验-DNN-手写识别/index.html","4ca9b4b70a475980ff650291096e6776"],["/2020/06/18/大数据-习题/index.html","e42641a732e72128287a64b2ba2c0aaa"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","ad9852385aba6b78c76616c2ab6e55b5"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","1ba6d5748e717a2fd11d54eae081743c"],["/2020/06/24/Linux-拓展学习/index.html","778549468c4d6635aa19dba175bf1b12"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","0dbf135c7e19110e082731ad7f813c84"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","38abf0a597d8c61e1b07b4834e570ba5"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","29d8a5a9f0f1d07fe5f6c7390bd100b6"],["/2020/07/15/C和C++的struct使用总结/index.html","44bcbea0125701756dec5455d17e9400"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","4277aebbd4d611aa9e918218ba51472a"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","b6e0e3161f223b28fd5441eeb2f84d5a"],["/2020/08/10/机器学习-实验-花卉识别/index.html","5b2fad19571615b604299cb8692d450b"],["/2020/08/15/Python-项目集锦/index.html","3e46a2b292cbfdae544ef34cfaed3537"],["/2020/09/01/编译原理-词法分析/index.html","8c67a270768760e199cebe115dcb7647"],["/2020/09/02/编译原理-语法分析-LL1/index.html","73828e4b1fde9f016f31700931382ad2"],["/2020/09/02/编译原理-语法分析-LR/index.html","86b4b0ec59a8fb51d0369c6af1f56fac"],["/2020/09/03/操作系统-内存管理/index.html","fdb94323d78441009c215588d9f58d2f"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","22d92d23c07d54085ba562001fa6c39d"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","b05680a495c75964394d450f8f88341e"],["/2020/09/04/CSAPP-实验集锦/index.html","a0d0142434958b89539622b6cdd7ebea"],["/2020/09/10/计算机网络-实验集锦/index.html","cb0e4cd40b7aa7083c9e7d4844ed005e"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","114445a73fe2200cb2d05395b6e9c1b3"],["/2020/09/30/C++工程项目-JobShop/index.html","5ec83fcc8e3a34f7fa9b35aeb06c7762"],["/2020/10/09/交换原理-实验1-时间表调度实验/index.html","7b0576e03b393dc3b6ed5e5ff74d554f"],["/2020/10/09/交换原理-实验2-摘挂机检测实验/index.html","073e5f4abe1cb11193daa1db23d08ae1"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","7c74cc7b19af10b3f5d8939c3b62f518"],["/2020/10/09/交换原理-实验4-拨打SIP电话/index.html","0e7fd730b27d8e70129783a0bbf112a4"],["/2021/01/04/Android-项目集锦/index.html","98a52cccef1dac262c5cd5202857d2df"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","54304d747bb6092d9dc9cae0aa3bf0f3"],["/2021/01/04/C++工程项目-travel/index.html","0c11e507514cbafbc512a48fcf7ac33c"],["/2021/01/04/算法设计-分治-最接近点对/index.html","b085411dd6af233fd2e22a6c69c2bde3"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","6e892b22123b760421c98a2e50307b8e"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","497ae2b8c2f14a967c3d6d374f808cc8"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","9f4cecb82c76b423f618cb43af47179b"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","5341fb66c34a738fc549ecfdafaed86b"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","4d0acd5c2aa120861167c59e68ba2314"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","35d546bea18c3399b6f8b73ef848a5b9"],["/404.html","2394b59b860bfc1b2a641e2bc2300ffb"],["/about/index.html","e74ba0d00e696b9c2e25cc0d7256b494"],["/archives/2020/02/index.html","eae71183fe69d1c649550810e5aa5342"],["/archives/2020/03/index.html","24d80d979924c18f5cd85906bfead6c1"],["/archives/2020/04/index.html","21b679eef86157b4e864143f23878a45"],["/archives/2020/05/index.html","d69e48551144e2d6e052a4a38ae38468"],["/archives/2020/06/index.html","cce52504383d810f84984ca52c172977"],["/archives/2020/07/index.html","9cda516ceb06b8dbc49141068addc5e7"],["/archives/2020/08/index.html","61a68784a3285342a63c4b3312385d59"],["/archives/2020/09/index.html","f1a7400c57d481a4e58684bfc398ae86"],["/archives/2020/10/index.html","9b72548df1189e6a5314b1ac357242c1"],["/archives/2020/index.html","c74ead257446d81f9f8411342e62a4fe"],["/archives/2020/page/2/index.html","13e9cce123cd3d809aadb3a612510098"],["/archives/2020/page/3/index.html","c2485b2ca6f19f60c8c2fdf404d5cd53"],["/archives/2020/page/4/index.html","85b86f1b70cfa85a958db7c703c85b06"],["/archives/2020/page/5/index.html","f5d5c0fdbbb2f87bd6f2f728df975581"],["/archives/2021/01/index.html","f52d0754991de135887354c84a0a259a"],["/archives/2021/index.html","3bf91f58b7be4592d73978ff942710a3"],["/archives/index.html","7310dd19b69029bb727d3099368f844e"],["/archives/page/2/index.html","7310dd19b69029bb727d3099368f844e"],["/archives/page/3/index.html","7310dd19b69029bb727d3099368f844e"],["/archives/page/4/index.html","2ed34907864784a0e1d9fa043ddc0dc2"],["/archives/page/5/index.html","2ed34907864784a0e1d9fa043ddc0dc2"],["/archives/page/6/index.html","2ed34907864784a0e1d9fa043ddc0dc2"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/bb/index.html","d6e857327d8c3a03a82334c8d7af89e5"],["/categories/C-C/index.html","14f615cea89b34513ef9778f752d5601"],["/categories/C-C/page/2/index.html","05d084f5c3762b4703593b9034cc4aa7"],["/categories/C-C/拓展学习/index.html","eb94fb32f89c5d93c91c5463576db8f7"],["/categories/C-C/操作系统/index.html","0a136bd204163d49cf99e678f255514b"],["/categories/C-C/算法设计/index.html","d0fb24db3a97056f386300bb0904cf63"],["/categories/C-C/编译原理/index.html","c1d733130ff9582128cccee110f1005f"],["/categories/C-C/软件工程/index.html","d88ce93b4ff9f6eb7acd8add74b47d62"],["/categories/C-C/项目/index.html","f7a180f3608390f92fce9c81710898f4"],["/categories/Java/Android项目/index.html","25b01fdac620160d39599285f1fa1962"],["/categories/Java/index.html","3c0c64ca955d6e20fdab00d03c56a7c0"],["/categories/Linux/index.html","d92237f2637bfbedf5c528ac0dab43a0"],["/categories/Linux/上机实战/index.html","14fd3b56b80694ed7c19bb6a935e05da"],["/categories/Linux/习题/index.html","5552cca0143c130b9081bdf105d81c41"],["/categories/Linux/拓展学习/index.html","ccaeee7bb2f34fe3e4e56b8e1bf93fc4"],["/categories/Python/index.html","c8fc74243b6a13327e75dfdbfdbe46c3"],["/categories/Python/爬虫/index.html","8d50134121fba0340ae2b722b96cb0e3"],["/categories/index.html","d4d4dca6d3bb0bf5bb56f31c474e0c49"],["/categories/交换原理/index.html","c90b1cea8e66449572810d47aaf99771"],["/categories/交换原理/实验/index.html","633f3803f077250b4542c76fd3f5b466"],["/categories/其他/index.html","fcd5a9943c10a769603c89f81ce112f9"],["/categories/大数据/index.html","808041a557d0d3ac9a184bf953f8d2f5"],["/categories/大数据/习题/index.html","41af496a1e9b50e39738db0ee678b638"],["/categories/大数据/实战/index.html","6c65962dc3420dc56440b7cefe29691e"],["/categories/机器学习/index.html","f7c45c8831ad7a81b52b9c3906741c69"],["/categories/机器学习/实验/index.html","0500578c0f35a1aea1f5ca8da8b9491b"],["/categories/机器学习/知识拓展/index.html","7419228e760a9e267bd9bbcfc7c8cc10"],["/categories/现代交换原理/index.html","9d00d5d4b77e9c606fffa62ae4ce03a6"],["/categories/现代交换原理/习题/index.html","5c3ed11e3cbad662c21551e96ff77fe0"],["/categories/计算机系统结构/index.html","d50229dc1c686e798736934cb79013f0"],["/categories/计算机系统结构/实验/index.html","4fd725209a10fd1ee014a02000914c39"],["/categories/计算机组成原理/index.html","12aec804b88698f44e882a03a0bdf84c"],["/categories/计算机组成原理/实验/index.html","c54b6923bc7526bd720160f2aaeda986"],["/categories/计算机网络/index.html","9f269b60de797173ff97ec7cf423dc34"],["/categories/计算机网络/实验/index.html","b3c1ab3a930c005e4ca6ab7306940fa3"],["/categories/集锦/Android/index.html","d9128cefbc94ed6c2a3f0afc01409071"],["/categories/集锦/CSAPP/index.html","4a981c618caf28118015a887d97f5993"],["/categories/集锦/Python/index.html","757e182f346884c018bfc107d915e4d2"],["/categories/集锦/index.html","b3ffdd17d64dca70ac7c11f756092e81"],["/color/index.html","3f627143356419f7f54e1443b3536f0d"],["/css/first.css","ea01aa1635810499a5ade558f4f81d56"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/style.css","6bb0e006bcdf6e96b6708cbc5b8f868a"],["/friends/index.html","d6a14477d24056a0b31c23fb01e080b3"],["/gallery/index.html","cac0a9f9094373909cca2398b08a7aa4"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/periodic-table/index.html","4c31220b3c8c1d35b1128df43b2c9dc3"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","fb9ec9e32170da9bb2184826ddeed6d6"],["/js/aplayer.js","6e605f0855251e101d3024646f3eac60"],["/js/app.js","1948329f2fd7e750ade4bdc49138c09b"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","2c6a8cc965eee8162a446ea4c61ec820"],["/page/2/index.html","c1352e658103c8a49b64c7e5445ff942"],["/page/3/index.html","2def56ecf885a35c667f7d9beb007635"],["/page/4/index.html","22d91a1a11e6726916715038ddb6f06e"],["/page/5/index.html","fef942aa87f2d6758f7eae45e9a2da8c"],["/page/6/index.html","aad38f88dabb61d7ba906eda91cdfa0f"],["/shuoshuo/index.html","c5588ddabde20db145ce4c9e21aa7fa1"],["/sw-register.js","6d27924611e47fa5eae69124f04b2cc9"],["/tags/AI/index.html","b49476589a29a25e10689a2fa9fc79d2"],["/tags/Android/index.html","c52c11ddd1659c74a096081542a5a551"],["/tags/C/index.html","905c8444753bc29b255814fde49ef4c5"],["/tags/C/page/2/index.html","4cac00b4799fc7d344842b6202095b88"],["/tags/C99/index.html","d5de0f25c7646beec8ac631393778346"],["/tags/CSAPP/index.html","c306ab70aa821097a8d5955897e8092f"],["/tags/DNN/index.html","16af0e058efc173a5c4333660787cbf0"],["/tags/DNS/index.html","e15b1186f8ea59cc9d7ef103b720685d"],["/tags/FPGA/index.html","6288cacaaa1e09ba4ace57e291c930dd"],["/tags/HDFS/index.html","12d2a0772d2521c813459d1f9cf7e4a5"],["/tags/Java/index.html","46806b87840d08eb23b9a64b7ce30a49"],["/tags/JobShop/index.html","b31e47b7d39dc47c1e08947738de1d2d"],["/tags/K-Means/index.html","694b3d7c860fe9c76dad9484d7239019"],["/tags/Kafka/index.html","09d4a916bce37a5613235c806325910b"],["/tags/LL1/index.html","9958defdb46ec32ca010efeb6b2ce20b"],["/tags/LR/index.html","9f249ccd8f771a1a7de1bc3f10422855"],["/tags/Linux/index.html","594388628e3520b0ef7252055d735d0e"],["/tags/MIPS/index.html","221d50f43395603a8d6197134b6c6730"],["/tags/MOOC/index.html","38bda63660f55bed7659328f51ce8034"],["/tags/MPLS/index.html","27646e7b4a898d678812d187dd54235c"],["/tags/MapReduce/index.html","1a85d9edd940a78c40d379629db50eda"],["/tags/Matplotlib/index.html","47482e8f918e479929d3944ae8acf12a"],["/tags/MiniSYS/index.html","8eff1735865e78a8b8baa668329918ff"],["/tags/Python/index.html","12d429d84945762feeb3c3536765422f"],["/tags/QT/index.html","153e64f8b0151a864d0abd82bb902d69"],["/tags/RNN/index.html","6c2829c6f14c108fa861d2641dd1d693"],["/tags/SIP/index.html","92503c0908bc6ce13763147f13b72b3a"],["/tags/Scala/index.html","463c8207219a483cbccb124e9b9c156c"],["/tags/Shell/index.html","3a0c24106e6feca0b99a87b9395a437c"],["/tags/Spark/index.html","61b06ff86e260fddbf66bf456746dadc"],["/tags/Streaming/index.html","bb81d9199c248f2496f8ab891cfba740"],["/tags/Struct/index.html","ec7bbb925958179896b82f4455260d67"],["/tags/Verilog/index.html","1b54b671e49d8c11d8e077ddf3ca09a6"],["/tags/first/index.html","08775f954657b13beecf28f742870e44"],["/tags/iPython/index.html","d908300c0544eb69b0573a9b720c6470"],["/tags/index.html","c00d053bfef2fb8ee0ec05ce5a0baa5b"],["/tags/ls/index.html","9d46cd7213ea3ee65a47384aa9a9eb98"],["/tags/习题/index.html","3b5f8985bd9eb3348c11e45cc6a03229"],["/tags/交换原理/index.html","3d5c52c65076912cfcab6e53949acf0e"],["/tags/人工智能/index.html","021f1b9a7bbd171f1242808ce2737865"],["/tags/信号量/index.html","fa2c80144b5d03d59fce3ecfb0be0f48"],["/tags/内存管理/index.html","024711c19b7bad977c424f41694a4811"],["/tags/决策树/index.html","b115262e0f76987d3e4c48d4dd53f71d"],["/tags/分治/index.html","43d5aeec4070ec70c55e2dd22236b3f7"],["/tags/分类/index.html","35a509e3b4d7bae21e170923ce1315df"],["/tags/动态规划/index.html","f82156b560ec19a1794a1bca34934cdd"],["/tags/华为云/index.html","c8c1ad7df5739ff55315e33f4c5d26d8"],["/tags/单词计数/index.html","9067ef4ea0d2c0b7660ed16a157011b0"],["/tags/可视化/index.html","d7e33ed5c50db030a90e304855abf3dc"],["/tags/同步互斥/index.html","b53264b93d85d48c345af2e97d15dba0"],["/tags/大数据/index.html","ab7bc5a97ed3ee1c34886490998ebdaf"],["/tags/学堂在线/index.html","e51eb25e2e5e06c1f5ab3d2c360200ab"],["/tags/实战/index.html","45d6a9b799a4cbbe0d6fadbfe5df3112"],["/tags/实验/index.html","88a78282627dbe8b5325e2bd6d510e51"],["/tags/实验/page/2/index.html","c2e90a022d37bce2b182635b0da0ca24"],["/tags/小游戏/index.html","76764a0c12ec4be0035008a8af789ddb"],["/tags/工程/index.html","8a59c4d102bd7d7b9f19575205f1c0e0"],["/tags/工程/page/2/index.html","877e1a86bc45d32943fcb1b74e67dadd"],["/tags/手写识别/index.html","83ae77d9a3097f3d8277125f9e311003"],["/tags/拓展/index.html","db4067aa6135a68772f1f2c4504b1257"],["/tags/操作系统/index.html","afba317ed6d8ae87fd1287128243ef1a"],["/tags/数据处理/index.html","6a53e7c28a974d0f7e4ae5bdf6f65dbd"],["/tags/日志分析/index.html","ae2320d2870a84fd2d091768cbb95533"],["/tags/易错点/index.html","038b677fea43b6d4896382a97fe89b37"],["/tags/机器学习/index.html","61653ce88d8ce9279ed63d0f36f7159a"],["/tags/条件熵/index.html","5060142098bfe581b1d73ef01e92dd9b"],["/tags/正则表达式/index.html","2b4d2d67ee9a5fcbadeb28abfd775760"],["/tags/汇编/index.html","8ed4f9dc667306390e0d47361557bfb2"],["/tags/流计算/index.html","2b508be91d347977373b65cd53b28a29"],["/tags/爬虫/index.html","75d1c6028ba6c92416120c80f08c3f8a"],["/tags/现代交换原理/index.html","6735800c8a84d585f717e9e8eaa0e2fe"],["/tags/生产者消费者/index.html","23c1b8dc02571571d4d59ea6e73f4673"],["/tags/知识/index.html","9a61d2ac8bad1d914137b0cd43186624"],["/tags/算法设计/index.html","6a043dd63206888118b7c69110a6520b"],["/tags/线程/index.html","43af51eafef6565d8bbae9079bb54aec"],["/tags/编译原理/index.html","1589ac59861cb8a5fee29ee7aa41d5d8"],["/tags/网课/index.html","c45bb8c0794726f23cac79018c92a3d7"],["/tags/聚类/index.html","a57a123bdcfaeb41830ee8817c50d19d"],["/tags/脚本/index.html","7ea1afed919899d32b1e51685b4d763c"],["/tags/计算机系统结构/index.html","51b842a1e317e77e3c40937ed290375b"],["/tags/计算机组成原理/index.html","bbf129b6d8c77fb4c13ad1c973ec16cd"],["/tags/计算机网络/index.html","82f0daadc239c91fe0e813362506765a"],["/tags/词法分析/index.html","552fd323ebc07428cbe1569a4a4d0451"],["/tags/语法分析/index.html","d0238e9dc2cc1ac41ee7f4439c6c809a"],["/tags/读者写者/index.html","4a2e467cbc5e87dee86ff1973bea930c"],["/tags/课程/index.html","0a0680dfa4a0b81b012fc4cab0b5c617"],["/tags/起名字/index.html","d3876407f87d7266985d2183194fe0af"],["/tags/软件工程/index.html","7312277ed1c4d5a5e01f2f654dc7ca2b"],["/tags/进程/index.html","15f20f29e674a4b0b89491935d0c8c3a"],["/tags/通信/index.html","91703530089aaf5c7959ab41d27d264e"],["/tags/遍历目录/index.html","2d3f655395211e76fd4d75e098d38679"],["/tags/难点/index.html","1cce9541befed5a742437a92a8c1e43c"],["/tags/项目/index.html","c556ad4b78d41f9d9d845bac889495e9"]];
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
