/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","6376d74f750806686a0d94869d0453f6"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","33bc51338012491ca0ccb30ad044aa82"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","be14d135e0b89c74392a77d26e7887b9"],["/2020/03/26/计算机系统结构-实验1和2-遇到的问题/index.html","81cb59fc192731e75fcdc273739b1360"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","236bffff4593e3ba230f3cb422866d77"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","7880f1415913a0cc6fbaabf7844a75d2"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","6ef2fc6c0d71276891f1d0624119dfed"],["/2020/04/18/机器学习-知识拓展-条件熵/index.html","7d3e54f4ab4fd39812c89161a0a73aca"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","447c7ce01bc4c931e1b03430b3efd006"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","9f6b3d333b0984590a09fcc7b0c3f1e5"],["/2020/04/26/机器学习-实验-决策树/index.html","edbdc81da65d01ffe682a92d4f619fbb"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","0fb1a3b96f8166cb6334ad3431589313"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","9ad69e6047130edaba2b58c19551c57b"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","c20dcb064946124d9c419b38ce999003"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","acdb3e1bbcd535fb97805d35c8d9d5e8"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","f417ee29f906c37bc92a458edc253c5f"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","d0b1e7c89d85fabbb94db50539db23ae"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","be6204ccbb7e876b4c6bac233875b550"],["/2020/06/11/机器学习-实验-DNN-手写识别/index.html","cd5b4c1694a0f1eb37af8cd4c0643d6c"],["/2020/06/18/大数据-习题/index.html","3234a1518a0b1adc9452f7a8b15c496e"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","b8b5f4139b0cac63e7f771efbd0988db"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","26afe4336e6868a1d1d1ba451413a16c"],["/2020/06/24/Linux-拓展学习/index.html","f6f560988551b42d0d0a5c7b2e5765f0"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","b0da5a7c6691219fee68ffb9f6f59b03"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","f00a9cf664c94e56ea775e4a6e98dce8"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","bd664716bd9b4c871935bd81e1f24dbe"],["/2020/07/15/C和C++的struct使用总结/index.html","cd17a49a779949456a382bc09dfa6308"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","a8a848003937caba87c471f3a40f8576"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","06f995f9e9817da885c64f8930f728bb"],["/2020/08/10/机器学习-实验-花卉识别/index.html","c4ab940ff0ba30b92231488d8273726f"],["/2020/08/15/Python-项目集锦/index.html","91d8fbcd19dbb135ff1b1d5a65deb2f3"],["/2020/09/01/编译原理-词法分析/index.html","8bbb48e9db17d11142b5cdb8c8a8e63c"],["/2020/09/02/编译原理-语法分析-LL1/index.html","7a07c0b2a3171d60e5e08302b8585726"],["/2020/09/02/编译原理-语法分析-LR/index.html","ad6193290d5afa8e10d97f3247acbfde"],["/2020/09/03/操作系统-内存管理/index.html","79468e2dc35ac9b137b9e063b8c61155"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","7540562e8f6448a5598527c24a02c0f7"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","d743f5a5b43b89ac21cd8bf6e5e2a309"],["/2020/09/04/CSAPP-实验集锦/index.html","f65f9efba3f25e35067b7c15961529e9"],["/2020/09/10/计算机网络-实验集锦/index.html","4a12fa7c6223029a4d3cc1841e17246d"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","1f928d12a9b8af3bbfbe4d1169c96c5e"],["/2020/09/30/C++工程项目-JobShop/index.html","c11e8ed58f89fd42325f5ba3a1ab646c"],["/2020/10/09/交换原理-实验1-时间表调度实验/index.html","d63299ae0adfddf4677072d4c08fc497"],["/2020/10/09/交换原理-实验2-摘挂机检测实验/index.html","dca407cb22d96408f7f0050cc8259653"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","150170d0c33d9a7f54b42cf1a5fa5bc8"],["/2020/10/09/交换原理-实验4-拨打SIP电话/index.html","b6e77f20a5d64d4b8bacc88284c6e33f"],["/2021/01/04/Android-项目集锦/index.html","4e45e740515428fabc7a4600d52820db"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","9d6b837e9b0a4326ce0e35228fbc6fb0"],["/2021/01/04/C++工程项目-travel/index.html","dbc20fcebc51bb8336205d9cf95c479f"],["/2021/01/04/算法设计-分治-最接近点对/index.html","be4db93fd32259891648959e1b791ab7"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","fbe4e4133d2f1c823e61218b93b76564"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","ca04a915ad613a0b2abdebfa89037d87"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","aeb546b7a86bff5fcb74ab35be5ce00c"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","cc2bd7e821d0d1b1a64fe9f4dd3ce74b"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","e7d3637e162d1159caa7eb8d9678a2a2"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","d748237760034927a709b61c5a27bce9"],["/404.html","a1f88b58bf0976507b1709e56e923ef0"],["/about/index.html","4fbe1bd583d4e64cd4e9ce6add137a20"],["/archives/2020/02/index.html","0e51f36a731beea14b00568d3c8cf9db"],["/archives/2020/03/index.html","b3783924f8af1aa1724d116d9fea2151"],["/archives/2020/04/index.html","94d933a4d607368633b587e80b9d1dd2"],["/archives/2020/05/index.html","72b4e94cfa27d6372d0409d1bd66faa5"],["/archives/2020/06/index.html","7111e3fd7e14341a3c6d456f2cfa6e63"],["/archives/2020/07/index.html","3df64535fc3a5be6990df53cfadab3a3"],["/archives/2020/08/index.html","3582c972686bc3db52df00093556b083"],["/archives/2020/09/index.html","9187aed83ee7da74f8919c82d2626695"],["/archives/2020/10/index.html","47574edeb2a1480c6d088bc1b2b49726"],["/archives/2020/index.html","55f3fc84a5ad7a67c5ef0b8e30f5a45b"],["/archives/2020/page/2/index.html","bf0aa6ec555b85517016263715dfcf98"],["/archives/2020/page/3/index.html","ed978e090016abc617ae0fcc97d34aaa"],["/archives/2020/page/4/index.html","2345a843bce6a85a6d0db6af12525c56"],["/archives/2020/page/5/index.html","1070af720fbbf3afe475139794010075"],["/archives/2021/01/index.html","e7ad5ac0d808cbda5d09b6bfb02e77ad"],["/archives/2021/index.html","e2b8a09e607d1299a17cd99c6dc4b8cc"],["/archives/index.html","5c1af146527575669d08a3efe599d393"],["/archives/page/2/index.html","fea3d56193513272a99e307ba2799a98"],["/archives/page/3/index.html","fea3d56193513272a99e307ba2799a98"],["/archives/page/4/index.html","fea3d56193513272a99e307ba2799a98"],["/archives/page/5/index.html","fea3d56193513272a99e307ba2799a98"],["/archives/page/6/index.html","fea3d56193513272a99e307ba2799a98"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/bb/index.html","d4601915d1dc4186a155ca66d9e6b7d1"],["/categories/C-C/index.html","61e12695ea3261142e5dd78f31eb7211"],["/categories/C-C/page/2/index.html","803bb657324da9c3cd462b4f9fea7518"],["/categories/C-C/拓展学习/index.html","b9ca09e442a0215df295f31fe50f7bd3"],["/categories/C-C/操作系统/index.html","3cddd177d01be5b1fc4ddf2b81f5de5e"],["/categories/C-C/算法设计/index.html","6dbcd4d1743146dfd57ac62701d5cc88"],["/categories/C-C/编译原理/index.html","8b5ccdf4834669ffc2755663506c8b2d"],["/categories/C-C/软件工程/index.html","deefb358bcdf5cbddad317d1724701f6"],["/categories/C-C/项目/index.html","cb03f993326bfdde09e9fc57523f2286"],["/categories/Java/Android项目/index.html","e34e40a68135eec429b00ba32355bbf4"],["/categories/Java/index.html","53c19a22aeb7119a151547553542bb97"],["/categories/Linux/index.html","c0865a55b4b0ecf6b47048358ad0b3ea"],["/categories/Linux/上机实战/index.html","d1550c6a9696f87dba1ee7d445284a63"],["/categories/Linux/习题/index.html","60c643291082daccdfbf41300ae6f50f"],["/categories/Linux/拓展学习/index.html","2cb4ecba8255b6818051a2b1706d60cd"],["/categories/Python/index.html","1771e77c7b3b9adeeecc734a23eca03f"],["/categories/Python/爬虫/index.html","50f09807fc58e51003c8891d2625d7c7"],["/categories/index.html","f6bce4e41a56ca600da5da5a9bed764c"],["/categories/交换原理/index.html","e506fc4c4b7adfb5ecb43fde953fb688"],["/categories/交换原理/实验/index.html","04d3d7583b34bf30c6fbebb0edd7bc92"],["/categories/其他/index.html","b8c1c595ae85b7517e4931b698bb569c"],["/categories/大数据/index.html","339304fbf062ac3cd84e967832704583"],["/categories/大数据/习题/index.html","588a78acd4da9a93e0002dc7ed27bedb"],["/categories/大数据/实战/index.html","30b783130083db0b5e6cfd119171d7af"],["/categories/机器学习/index.html","16f529472f510ee84f69a826755e9077"],["/categories/机器学习/实验/index.html","dca86994d973595b167487410af76e6e"],["/categories/机器学习/知识拓展/index.html","273eabebe311110ad4e880b4960d96d2"],["/categories/现代交换原理/index.html","3dc010c4eb873e850395fd40ac095be1"],["/categories/现代交换原理/习题/index.html","4204c5fda1e42d6a6eef3893f1ed8e7c"],["/categories/计算机系统结构/index.html","120d10ac162ee37611a37b48450de95a"],["/categories/计算机系统结构/实验/index.html","26f56d618a63b9d0f566b1ea00f9f9ed"],["/categories/计算机组成原理/index.html","562e100d8058ebd07315fec0609282b9"],["/categories/计算机组成原理/实验/index.html","6fa6ba05ffce0a94c059aa76fc6667ae"],["/categories/计算机网络/index.html","8c7845b5ed88494fcf42311906a364b4"],["/categories/计算机网络/实验/index.html","402927f027bccaabca6ea55a01d248c5"],["/categories/集锦/Android/index.html","c88ef45b3db20c328955ec77db6f48a6"],["/categories/集锦/CSAPP/index.html","43b2bed81ba069c1b9e99945cb24cf37"],["/categories/集锦/Python/index.html","700d830b3f9c01a7b4573dbb220bcbc0"],["/categories/集锦/index.html","a0308e2207a6527944fd995950983379"],["/css/first.css","01a90baf99fa8f190becabd973782198"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/style.css","ea27919e2de6612a3e5cd178fe81c25d"],["/friends/index.html","070a91348a4cb33f7020b8864d2d0e7d"],["/gallery/index.html","63f4bc7639ebb10460b077618443184f"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/games/tank/index.html","a4a2448b8b53e14bf7bad5c1f71e614a"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","5c8e981a27a36fcc57dcf3be60c5ced3"],["/js/aplayer.js","6e605f0855251e101d3024646f3eac60"],["/js/app.js","1948329f2fd7e750ade4bdc49138c09b"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","9560ec39403faa0f9ba0a3799eb6f8fa"],["/page/2/index.html","b29830c6758de3e960434ef885a86a4c"],["/page/3/index.html","4071948317d2984a465731e30a8c2d5f"],["/page/4/index.html","fd9d86a47d93238567f03ed82708769a"],["/page/5/index.html","f5074a43f8ad54d1b4423ceaf505c9c1"],["/page/6/index.html","158b3b5309cc87e99fa0864a7b570959"],["/shuoshuo/index.html","67e6c8b20858544519143d23fc625f8a"],["/sw-register.js","75027859c91c5dde3aa0e877fae69704"],["/tags/AI/index.html","94190226528edbc7e5f4700d0da3be29"],["/tags/Android/index.html","3224f3200db389c62387cd2958713aa4"],["/tags/C/index.html","c04b689421ab95f4daa59e32681098bc"],["/tags/C/page/2/index.html","2606a8efe5320197f31c760313032818"],["/tags/C99/index.html","583ae110d81af75adcfd3f3255da548c"],["/tags/CSAPP/index.html","9fe45b0a13286ebddef68b9c86699e4c"],["/tags/DNN/index.html","9d4892ffc3b0b73a0968f31fa4aa1cf3"],["/tags/DNS/index.html","0197234ada9e07e9f0e675d30a615206"],["/tags/FPGA/index.html","d0b0761e25725ddf462726e2b4b8ced9"],["/tags/HDFS/index.html","57586b3968eda8b617a9aefccead4bed"],["/tags/Java/index.html","a6e131e2ad3d68e04efb84120e4c5d44"],["/tags/JobShop/index.html","8e626edf58258fa621efeb30622877eb"],["/tags/K-Means/index.html","135495610a779fad1502584691571c66"],["/tags/Kafka/index.html","d420ba1d2ce2c5e4d97172daeb8f7560"],["/tags/LL1/index.html","07551d1ec67a2fa645cdbf77e49834d4"],["/tags/LR/index.html","77db196a2ea2b3b1ddafe98568cff43b"],["/tags/Linux/index.html","934ac36b183b225e15611abf249710a2"],["/tags/MIPS/index.html","4c0d361fbc09241ea2cdbd2e3ae19394"],["/tags/MOOC/index.html","964c0cf5fbf487da847ccae069363737"],["/tags/MPLS/index.html","c24fe8ed622f8cc436a0d4923976d9cd"],["/tags/MapReduce/index.html","114de8dc1210db09fed56cbb8266c8a8"],["/tags/Matplotlib/index.html","054c8846e372a32bd7c4a15568d07df5"],["/tags/MiniSYS/index.html","e1a01d1656f1ee1a81e42e4e432f83ae"],["/tags/Python/index.html","f31ab4f8e2e93ea1e28a9ec352b4c955"],["/tags/QT/index.html","62eebf0f193261601ddf35e720c27e14"],["/tags/RNN/index.html","c0feee6a8df5c9ac8a673d6bf25f9cd0"],["/tags/SIP/index.html","5576a01d37374434633b57e6d9b3c50a"],["/tags/Scala/index.html","3c590f9b9d311638dc5568710e3a6f96"],["/tags/Shell/index.html","231ba9830b6e35a3d7573a1dbb5ee9c0"],["/tags/Spark/index.html","c654c8ab3fa3abd1dd1353d61dd17b82"],["/tags/Streaming/index.html","2851dfe8cd8bd3c272387ad32360cdd3"],["/tags/Struct/index.html","7df46cd1614fa20e06d3889e67965fb9"],["/tags/Verilog/index.html","2112d4074e8d17035788bfda4942cfa5"],["/tags/first/index.html","cc599992c00a5bf172cb27786f83495f"],["/tags/iPython/index.html","046230854f7afd99d7a5f7fb2d027baa"],["/tags/index.html","44e1f3a01e81fcabc13021b2da87ea14"],["/tags/ls/index.html","296267b2e473d4f2fe61d4965d8f03f9"],["/tags/习题/index.html","4ab3763b8f351f7de74c525e4ebc3d64"],["/tags/交换原理/index.html","4b78ee9bdf06a3bfd30f0014b10e7aef"],["/tags/人工智能/index.html","6398ecd942dbcf38f579abc2e674fef4"],["/tags/信号量/index.html","f248eb3249c5c66bb480a3510d64cc4f"],["/tags/内存管理/index.html","f6579cdcac2a0b03f65055668740f589"],["/tags/决策树/index.html","2ae38666b2df90f4eaf0acf01929fd3d"],["/tags/分治/index.html","84b38357ce3cc41f13fce531104a7219"],["/tags/分类/index.html","ca8844a860eee0aad132e45df6173635"],["/tags/动态规划/index.html","38e8d231c21b28e8f5a4dfcfe564f179"],["/tags/华为云/index.html","6bddd4f30df8c6afe13c78c60e8d36a5"],["/tags/单词计数/index.html","07fdd17abb24f6c7c30c4bd957f75b60"],["/tags/可视化/index.html","25b776a26e68002fbe61ed09bf1a9542"],["/tags/同步互斥/index.html","3165e856aec72ee2216eabb1fdc680c9"],["/tags/大数据/index.html","5935b6c8449c5818440be3eff768554d"],["/tags/学堂在线/index.html","c3eab3183d3fa3f4d94985841134f3f2"],["/tags/实战/index.html","63e80bec4eda4ebfa214623d75253899"],["/tags/实验/index.html","f76c194f8da0d529c347bcecb1440310"],["/tags/实验/page/2/index.html","90ea1c385410728b75d7f98d66a0b822"],["/tags/小游戏/index.html","1801be763c92b13c04dcc5fd70949bd6"],["/tags/工程/index.html","6d592a75b3aadf646f1c40a8145d4036"],["/tags/工程/page/2/index.html","902942973e6c7f68eee91fc020850683"],["/tags/手写识别/index.html","57d00c953404f86798faa83c8443654e"],["/tags/拓展/index.html","69891e70e15104a343475af427b49974"],["/tags/操作系统/index.html","3ae6c6b8cb206e02788ad4aac912e76a"],["/tags/数据处理/index.html","b2fd68e0ea0a42f95d211787ffbf44f1"],["/tags/日志分析/index.html","c7a11188df72415361d3086d652f7346"],["/tags/易错点/index.html","17f858f4a88bbdf2433508e129fdd3b7"],["/tags/机器学习/index.html","41ff66e3f451e7be5604027ab5f0b7db"],["/tags/条件熵/index.html","d82d173f7ac5ff7de706c7a1353925f6"],["/tags/正则表达式/index.html","d76c2254c6fc7710a07ff1ffbf3d2912"],["/tags/汇编/index.html","6bae98cd7d232959856114526496138e"],["/tags/流计算/index.html","0afab4b88816463dae39ad2caff7150e"],["/tags/爬虫/index.html","fe895055d339acb3acaec5b27ab2d940"],["/tags/现代交换原理/index.html","6e8798f2ad0ae5ae12dbd2d4358ca55f"],["/tags/生产者消费者/index.html","4e31f16668a3c473ffb50c5936ba72be"],["/tags/知识/index.html","61d43bf72a9e06073470d3667a5cfcfd"],["/tags/算法设计/index.html","f85d6a5ab9de57874cbd03f0389a5e39"],["/tags/线程/index.html","015bcad005536bc0e0cf6c888aa8484a"],["/tags/编译原理/index.html","01087146451e3837850fd8de9c0202bd"],["/tags/网课/index.html","330b8e8be0b6d1eaef544d68a34b89d4"],["/tags/聚类/index.html","59df8e46a79b7945bdc31b8ada242b0f"],["/tags/脚本/index.html","137ce15c7fcb323893714167d5ccdb85"],["/tags/计算机系统结构/index.html","a6870d11a7fe54d6dec5953151551a43"],["/tags/计算机组成原理/index.html","c9bfad991f4957b49d02b9390903ff55"],["/tags/计算机网络/index.html","36ac68b196c17dacbe1fbf5634a34692"],["/tags/词法分析/index.html","75296e7f098c9d21dbe781ddd7e1ef9f"],["/tags/语法分析/index.html","e41b6884b278687286385fcd5e7b7532"],["/tags/读者写者/index.html","cdeaa33e32a383ca34737a6716ec9115"],["/tags/课程/index.html","f1c3350961eb4db1d1eea5a1a2c1bd06"],["/tags/起名字/index.html","d2b96991ba6150716e654724ff741ff1"],["/tags/软件工程/index.html","98653d8085eff124cf94c8b8286cf95f"],["/tags/进程/index.html","b0c1737ebada129ef3f1b4511ff330b9"],["/tags/通信/index.html","6dfef806857e3f6e7cc28d76a954f3e8"],["/tags/遍历目录/index.html","3d7f690dc42ac6d7b70376841305d13b"],["/tags/难点/index.html","f1b2d7d00c8a8d5fcce8750db10a5587"],["/tags/项目/index.html","60e957b8dd5fb1ade3fffa00019bddea"]];
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
