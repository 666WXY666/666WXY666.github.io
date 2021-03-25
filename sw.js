/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","319a0b3d27f8db9e0e6de457ff5a19d6"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","dfb06fa3e45d46ea0632cde06cce1512"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","79eb31d0d9d3fab61e3cda0fe030fd73"],["/2020/03/26/计算机系统结构-实验1和2-遇到的问题/index.html","7ffe50efbcf595334bf39a60e25a9f59"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","1f428d38c3737bded861be2f75d754b2"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","f790a59965943ecec8df59dfd6b8968f"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","054401173b4de146411c69e423fb2b2a"],["/2020/04/18/机器学习-知识拓展-条件熵/index.html","f0d406bbee39091bf06c52eb3a9c4c35"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","9f75c7912049d1a9b24e4792c78b594a"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","3dc6a35ec5c446c1d7872e3a793e0ba6"],["/2020/04/26/机器学习-实验-决策树/index.html","da64940c0a8a557147b324e9bb63dbc3"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","242049b4beb981875cc8c8718a862619"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","351e891b3f43c2fe3e1c9a70196f176e"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","3ee05814c971ba03afca66af3fb53be6"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","5608e1e8da3c4519884a77221dfa5344"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","1d33ff67360103a8f0ca9a6660829f0f"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","b3b9b23210dc252cf0b316911c6ee997"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","8b2f8d86bc1538b6d942a5b595cad247"],["/2020/06/11/机器学习-实验-DNN-手写识别/index.html","cfb743e270f36c77bcd136ef10ee7155"],["/2020/06/18/大数据-习题/index.html","c7449f72c9b6ed229c01208836b3c836"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","2db31b9a4404db0b1b1826ebe2361a4f"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","36ce6d256fcb4d2590bfba6fe2f4f32b"],["/2020/06/24/Linux-拓展学习/index.html","396bd919daaa397d3ac734e08ee226bd"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","2d73ed26dafcd026ed4794fee7e2e35c"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","88a48e4b03f05520aa64bfff60800363"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","aa505e61dc5dc426539ff8ca46124c40"],["/2020/07/15/C和C++的struct使用总结/index.html","e8bd7781afcfb3b8c5cf52b5143bcb0d"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","da0844b80c06b242d2e7b770bd7aa362"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","9dcbbbbb13f27b1ad681cfabdfb5c4f0"],["/2020/08/10/机器学习-实验-花卉识别/index.html","1575fcaf09e7b05dc36b76babe830fbc"],["/2020/08/15/Python-项目集锦/index.html","52b0ae4b881394c561f331cfa6ab48be"],["/2020/09/01/编译原理-词法分析/index.html","4f2520cf4d575e84f880fa48e6185ffe"],["/2020/09/02/编译原理-语法分析-LL1/index.html","74396207f9b3f93fc793b06174147574"],["/2020/09/02/编译原理-语法分析-LR/index.html","aa1cc67d5a2704d57c62952aee3a2cb3"],["/2020/09/03/操作系统-内存管理/index.html","0e0a4405ffa51fb2364c9d6058d53711"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","08b413ed5b3601d6bdfac2b9c2198614"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","bb6d1e9421d19be3b83d48623673983c"],["/2020/09/04/CSAPP-实验集锦/index.html","3c8369507e1d7d2b4d718baa3ebd3414"],["/2020/09/10/计算机网络-实验集锦/index.html","0f0944cbba9a798addcb139873eddbfe"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","f512188a989e2120efa9c8cc541a6169"],["/2020/09/30/C++工程项目-JobShop/index.html","a2483f12c02006412e86554902e8772e"],["/2020/10/09/交换原理-实验1-时间表调度实验/index.html","eda58e494c73fc12212cae58431b764c"],["/2020/10/09/交换原理-实验2-摘挂机检测实验/index.html","35e3a32cdf98e8ab8be07a2811424c7e"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","f185b7c91a8c1f3ffae4c7701e09cf9f"],["/2020/10/09/交换原理-实验4-拨打SIP电话/index.html","777e228695010cbaa2645b23b3cf75cd"],["/2021/01/04/Android-项目集锦/index.html","b3e6b117d6bba35e003f61fbd89df995"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","4d21c6c7214e25daf9d359532947be60"],["/2021/01/04/C++工程项目-travel/index.html","37477781000179a965450a3e345a89da"],["/2021/01/04/算法设计-分治-最接近点对/index.html","c6440af931fc083091f04c435c962e37"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","f29335ec0b1456b9039b63dc6a707b53"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","b5ea0e7738a78af961807cfb0ea98c2d"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","a2bd8c70bd349b4b822c3ce44ea435c6"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","c96570f856320d0e73a8d2d9a1b3a796"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","f1035fc0a2fe79ee50029e02147b9411"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","e3c11f4c6e8101fdde1c218d1c9d295b"],["/404.html","42fe758af4169c3588c1f2843aacc4b5"],["/about/index.html","5f2773955c43485c1c397067521c5353"],["/archives/2020/02/index.html","415fb6e41857abcef6c058951ea7d415"],["/archives/2020/03/index.html","28418d76c134f77e2d199a3833f28736"],["/archives/2020/04/index.html","5f53adbca2219db2b771b592175ea3d0"],["/archives/2020/05/index.html","b479bf686141f665b589ac9996080b41"],["/archives/2020/06/index.html","70c997fb28683785fb232a6bb158fba8"],["/archives/2020/07/index.html","a7728aaf3a8c7992acb4c8122b22b274"],["/archives/2020/08/index.html","3768b20c9562b41d6696e6e71a3eacad"],["/archives/2020/09/index.html","502de2115668651e73d4b26417d039dd"],["/archives/2020/10/index.html","c88247acb907c09ca14764ed7df6d60b"],["/archives/2020/index.html","39ce9b2fc27fa9b3e1aade695fe0b07e"],["/archives/2020/page/2/index.html","d5997db1d763ec459c86fa11c9f4b181"],["/archives/2020/page/3/index.html","613fe6a02f1aacd3015b8b32aaec16db"],["/archives/2020/page/4/index.html","481faabfe4e870b97e91d05bb72d8ae4"],["/archives/2020/page/5/index.html","b0d64b1e174c155396781b4a543282f2"],["/archives/2021/01/index.html","8fe7d9b7f7a9292c77f1a3b41121441c"],["/archives/2021/index.html","dd40a4ce1169334b9bf26a6baabbf0ea"],["/archives/index.html","310403cc002d192fe723d73f5e30173c"],["/archives/page/2/index.html","310403cc002d192fe723d73f5e30173c"],["/archives/page/3/index.html","310403cc002d192fe723d73f5e30173c"],["/archives/page/4/index.html","310403cc002d192fe723d73f5e30173c"],["/archives/page/5/index.html","1a44beb33cd17031070f77ca429deb9e"],["/archives/page/6/index.html","1a44beb33cd17031070f77ca429deb9e"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/categories/C-C/index.html","165138ba73118c3558e577c99951373b"],["/categories/C-C/page/2/index.html","4cc04424937a418ed079d6db14daee6c"],["/categories/C-C/拓展学习/index.html","5bac780cdab926cd5030bbf8e9f51ee3"],["/categories/C-C/操作系统/index.html","e93630f8426daa5483176c50528ba45c"],["/categories/C-C/算法设计/index.html","c8b0dbc0a02ebdc856024d1a0b26d020"],["/categories/C-C/编译原理/index.html","a3260d85508ffaa49efde816e50823b6"],["/categories/C-C/软件工程/index.html","186ca65fb663a23dbefeb4aac4f9ad35"],["/categories/C-C/项目/index.html","971145922cce498ede9eeb12b1b26421"],["/categories/Java/Android项目/index.html","5aae22761341e75b1fcd6700ff588182"],["/categories/Java/index.html","76bf8d06321d6173480a03a1cfde5914"],["/categories/Linux/index.html","9cfddb85f4c926a39f59a9315a548f6e"],["/categories/Linux/上机实战/index.html","76fa69e44e5080fe4bfb613d3f6c5b7c"],["/categories/Linux/习题/index.html","45c2c65e5aaa7881d1ae841fdab3c1c9"],["/categories/Linux/拓展学习/index.html","a1e61e2f7d97f33f55a5ed1aef95b48c"],["/categories/Python/index.html","e5cbd76b240ede5780225cc6f1502f1b"],["/categories/Python/爬虫/index.html","1f2de63b11d6522c2086a0b048f8933d"],["/categories/index.html","59f9377be35fa60d8f814c5df1b0339d"],["/categories/交换原理/index.html","234f87c7ea69f6de232a8dc9adaa7042"],["/categories/交换原理/实验/index.html","4ad3d06babd9a886aa9ec7f986b91b92"],["/categories/其他/index.html","ca65a2e4b91f48f3dbed4a4e3d80cd3d"],["/categories/大数据/index.html","03ab27cb4c8bfdb545465b71c9754cf7"],["/categories/大数据/习题/index.html","c96cc6dff31b5061ad6c029c1a6500a1"],["/categories/大数据/实战/index.html","e01fa9a1ac47be043ee9440ca8303be9"],["/categories/机器学习/index.html","fd1ed8c7ec3399958bf9df1b70958482"],["/categories/机器学习/实验/index.html","7a6a8130ee689908c768cdde1d089c14"],["/categories/机器学习/知识拓展/index.html","00112f4b31c45c4d90c5532597c3458d"],["/categories/现代交换原理/index.html","5ed2852ac8ddb5c18a8ea6aac7921f8c"],["/categories/现代交换原理/习题/index.html","784b708cb5fa8464adeeeb0f5e11d0f5"],["/categories/计算机系统结构/index.html","e9d210e0eee20df64a38690d6c81f8da"],["/categories/计算机系统结构/实验/index.html","a528b3648542102263a469fe4cd40748"],["/categories/计算机组成原理/index.html","ae1ffee7145549bec10bd4c568d8181a"],["/categories/计算机组成原理/实验/index.html","abab6954eb560a74d2352017c704f93e"],["/categories/计算机网络/index.html","04fb415e7b8d749df43fb0bc8567de3a"],["/categories/计算机网络/实验/index.html","ed0fc81ad847250b86be4b0e5afd6949"],["/categories/集锦/Android/index.html","271138e189ed4ea5a09fb11d94f5a806"],["/categories/集锦/CSAPP/index.html","771a1a1de466c07054c896acc13b383a"],["/categories/集锦/Python/index.html","498106890a15100e6509bcfec9b6a585"],["/categories/集锦/index.html","b0deadf74d6a31fb0bd67fcaaecd8fa7"],["/css/first.css","01a90baf99fa8f190becabd973782198"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/style.css","29bd14d027343cdf06b66cce6bf66453"],["/friends/index.html","49a8db2b2fa61025d5071bc0e2f882df"],["/gallery/index.html","63f4bc7639ebb10460b077618443184f"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/games/tank/index.html","a4a2448b8b53e14bf7bad5c1f71e614a"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","7de9c3baf98e24d4247948dd0eab4113"],["/js/aplayer.js","6e605f0855251e101d3024646f3eac60"],["/js/app.js","1948329f2fd7e750ade4bdc49138c09b"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","7e984d37947ac23a83232633df8d03bc"],["/page/2/index.html","d12ca686893fff54cfd73e88d253d919"],["/page/3/index.html","f60e3321086b1f67fc1ca1a9c764b77a"],["/page/4/index.html","7eb453a6484c753cd3bf643a3a300e67"],["/page/5/index.html","15869d96cbad62bc0fbe5eb210af092c"],["/page/6/index.html","e96f2ea3e33b08678b88be06ea1181f7"],["/shuoshuo/index.html","a3861c418e0369d2613506c1b8c92b30"],["/sw-register.js","afde68723b23c07f288c194cd8fb5a7e"],["/tags/AI/index.html","0b30dd8e2539929fb2ce3b81324eda6d"],["/tags/Android/index.html","284c31337f35adc58a519b5158cbaa56"],["/tags/C/index.html","c3db46cf08d35f36f3f6890a06bfcd8b"],["/tags/C/page/2/index.html","4d79fc1ab9ef9772a93131d66ccb44d0"],["/tags/C99/index.html","ab41749d8bab4735ce73116785e1ee8b"],["/tags/CSAPP/index.html","ae0e210a23d84d9457ffec72a524a0c2"],["/tags/DNN/index.html","f40493129aba7efd17081c27ba09ffaa"],["/tags/DNS/index.html","f0ef6d514dcfc7803e0ea793e3c558b7"],["/tags/FPGA/index.html","0986c7fb2182f79339537a86ad7e7984"],["/tags/HDFS/index.html","de4e95128eb0b3c40a3ffc9bccc6fbf1"],["/tags/Java/index.html","9e8d9ff091dbf96cc213bae28a83176f"],["/tags/JobShop/index.html","37aced5f51568ac2f290fb124126af98"],["/tags/K-Means/index.html","bfea2746e465ec3ec3455b4f499c7297"],["/tags/Kafka/index.html","8cf27f943b6bc4d58a3f06d84fbccdfd"],["/tags/LL1/index.html","e334836c60f72e24f6d07ea1ca9aeb11"],["/tags/LR/index.html","ec9638cad16d77ba2ebf666c6c394bab"],["/tags/Linux/index.html","24369de13fac744f1bffcfa25451bafa"],["/tags/MIPS/index.html","32ae8a0e5f0b1f8ad3dc2b4e166b2eb8"],["/tags/MOOC/index.html","ea8aa558aa3bcdc343bfa78dca8c0ccf"],["/tags/MPLS/index.html","7ae80e905fbc6bc5059c8ebeda9838a7"],["/tags/MapReduce/index.html","02da85db01da8656d93c79c9995836a7"],["/tags/Matplotlib/index.html","6ad84a7ed658d7422629d092a6498b39"],["/tags/MiniSYS/index.html","f8061a82675871fce8648baf0c430317"],["/tags/Python/index.html","09273f497c8b9e451d49131b788b29b9"],["/tags/QT/index.html","17d6f54ac949ae70964e938d1ef53bc3"],["/tags/RNN/index.html","8784fe993506ed850463458ce84efae3"],["/tags/SIP/index.html","81a39fc20873814934ddcc69f199c921"],["/tags/Scala/index.html","d5a3504e835c473e4fb23c69081c4732"],["/tags/Shell/index.html","79d75627e60e329b82bb321a828c5ba7"],["/tags/Spark/index.html","87bd8d54ff4647f6b1b08b49a4116cc7"],["/tags/Streaming/index.html","505b948923583fc28090623314c97756"],["/tags/Struct/index.html","4a1bb025fad6d9959ffee3b98a4c85b2"],["/tags/Verilog/index.html","1426921d8d3d03eaf534ec38fa2c7039"],["/tags/first/index.html","549b1ab166b30d2906c3831eb5ddfe5f"],["/tags/iPython/index.html","60e3b294e084e89e8b5f676e9eebba5f"],["/tags/index.html","eb212cb2b4bd1220bbd2c273855f4099"],["/tags/ls/index.html","db8bd986312bafb9574b1e6b86ead1cc"],["/tags/习题/index.html","18213de0b23db35b175554b733653c94"],["/tags/交换原理/index.html","1d30e2b2a271da1e6a941a45211642ac"],["/tags/人工智能/index.html","e00cca5644df3b2fd8d0adf8047679ba"],["/tags/信号量/index.html","d4e5bf413b3dc504727def386689dc1d"],["/tags/内存管理/index.html","41b93f6a391834d76dd5791293b3c11e"],["/tags/决策树/index.html","c3093533d5d80e119def92c7cc1ff8a0"],["/tags/分治/index.html","26f9ea9cacc24422d089b0c77e6baa29"],["/tags/分类/index.html","46410606f7f6767a4bbc1df3a38d53a4"],["/tags/动态规划/index.html","f1380e63a83f5cbaae00297b61d625c0"],["/tags/华为云/index.html","99484f6d3fb72d0d4a982418485c5f7f"],["/tags/单词计数/index.html","273a7d46d8d54a1680bd2726317a4b08"],["/tags/可视化/index.html","3f5d5aba2e2639caf04d594481e5ad26"],["/tags/同步互斥/index.html","66e8d75fc18e54a7770b788c5ec26093"],["/tags/大数据/index.html","95f66799a947617040bd06828863f292"],["/tags/学堂在线/index.html","3924ab89f4e09012b9b73b6dd169378e"],["/tags/实战/index.html","245bac9992c2474c77a4edb5fb30183b"],["/tags/实验/index.html","76ff1653ffd42f7e0b7e054678d2693f"],["/tags/实验/page/2/index.html","0a769502b0f7d701cfa11e8bf411e3d7"],["/tags/小游戏/index.html","e8d2c707f2b375e6afd26b691459cb96"],["/tags/工程/index.html","c6b1d8d6d3419612db929159c2d37e92"],["/tags/工程/page/2/index.html","135b8b859d9706af5d695138c69bbb59"],["/tags/手写识别/index.html","dbdacb4ca170f7ade3056778dfc5d4a3"],["/tags/拓展/index.html","43bfadd09050c9ae1b0fccbf9f4b19d7"],["/tags/操作系统/index.html","2d085983abe347d4a8c67fce92a5665b"],["/tags/数据处理/index.html","5f8fad870f436354742f4fab2b04993d"],["/tags/日志分析/index.html","67be4a48f761ffd62ea7fe37218a7ba8"],["/tags/易错点/index.html","ff6686d8393b826b3f81c1b547a73291"],["/tags/机器学习/index.html","2eacd42c1d83a8f8825573c87129207b"],["/tags/条件熵/index.html","64536078d4996fe6ba7d6f74868d63bf"],["/tags/正则表达式/index.html","cfbc134e1326517b1cf4c7b6cbdb1c22"],["/tags/汇编/index.html","114cb9316b065d29aac938759a651837"],["/tags/流计算/index.html","18ae56dc3151ce5cd7cb21b38caf4159"],["/tags/爬虫/index.html","7e80196e226f7f627756575cc011c9e2"],["/tags/现代交换原理/index.html","8673a3357bdc7f5d8598ee8eb3fc45cb"],["/tags/生产者消费者/index.html","335fcc223785c06410d6f3fc03c7fa7e"],["/tags/知识/index.html","fc55a6fb9808ecf2555d0f3c0a8e43e7"],["/tags/算法设计/index.html","65f106c0939176584114dc88b7a5989a"],["/tags/线程/index.html","2a866d7d67b710d3fe09b59a8d9597ec"],["/tags/编译原理/index.html","144aefbb52d3b489bb8ed048d4536990"],["/tags/网课/index.html","9e2573ca766505d1487b081c35d073c6"],["/tags/聚类/index.html","6ac448cce35aae1497b367859096a1cb"],["/tags/脚本/index.html","adf4d150420ab9466d9db52227f81bf8"],["/tags/计算机系统结构/index.html","94f89a24259b9b8ca12bd795c2cb2fac"],["/tags/计算机组成原理/index.html","ea2cb17a078b037b797ed95b3170002f"],["/tags/计算机网络/index.html","23fc6556943841594a6c5089c9a47bf1"],["/tags/词法分析/index.html","e1355e34d5027cf92419f59486cba51e"],["/tags/语法分析/index.html","1ec765d91ac107641db7ecc73ea21c4c"],["/tags/读者写者/index.html","636c3262cb52ab04bf18fc424dbb6abe"],["/tags/课程/index.html","55b3bad009a10b5bd8a2798dad1b24f4"],["/tags/起名字/index.html","a6990c72b7832a3401cb5e0de16764ab"],["/tags/软件工程/index.html","dbe17a32a1bb23c0eb695c4419f8d87e"],["/tags/进程/index.html","e47c4d6cbec6f47daf425fd95c64f261"],["/tags/通信/index.html","4a6a4c1ed9b64d0f92e7bbe8681604ec"],["/tags/遍历目录/index.html","c0956f938a79ed5aa864955b8a14f5d0"],["/tags/难点/index.html","f914097870fdbe48ca5ab210d6789962"],["/tags/项目/index.html","c0bd795fde68beba47666fe2914729bb"]];
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
