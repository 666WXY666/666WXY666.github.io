/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","917242e0fa8a80e1445b3bc2e79eb4f3"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","1ba84eca974a1dcf5b9fae1befd4a69d"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","ff70e7c412900c9d4d297c229af3222a"],["/2020/03/26/计算机系统结构-实验1&2-遇到的问题/index.html","89394f796240e6af70467b98fb5d626f"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","075591bc48894f0639c98ff8b108c479"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","4c8c54fc04a7b9ceb90a2348971a37fe"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","54a1888845ac42e5ed5c3219e2f5b36a"],["/2020/04/18/机器学习-知识拓展-条件熵/index.html","b9c2addcabaea40fbcb4064b11c07148"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","61a69daf598ed506984e44f1f2e0ecfe"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","a57b2413f3ebf42fc0cfbb0ed78e731e"],["/2020/04/26/机器学习-实验-决策树/index.html","b6ffedeb04f67d9de7d8c4908caf689d"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","a3e4c1a1f82fa24565464753c75f92a8"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","1d7bb1b5a59b3f05abf544042144cfd8"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","46467c2c7b1b6da0f212db7a691be955"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","e21c9d1143d5a1d4001e1b1a2f195db8"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","77ad40a75e0f5e6ce8424460a4f529f3"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","00a9b23f6412fb476b68f5db6b9f5630"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","2082e13f8d87b5a5abbed0304e4e89c1"],["/2020/06/11/机器学习-实验-DNN-手写识别/index.html","38eeb411bb0b94a7f9831f476de81a51"],["/2020/06/18/大数据-习题/index.html","c0bd95d1e99ba32145efabbb7a64b326"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","d48cdfeb8c5e3474271952b8816d6bd3"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","60de4a4793d5776d6c6f7cd64229f302"],["/2020/06/24/Linux-拓展学习/index.html","1eb10f3341686167af4ce89690f3aa1e"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","56e697ce2adf87e5a898f3d0cdbafa7d"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","74ec3b6a9156a7e534b4a8b39b3f883f"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","1e8fe3eb7237679da4b07b3a222f0255"],["/2020/07/15/C和C++的struct使用总结/index.html","fd859e6812e4f906f9a886025b7c5afb"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","54c0b94f424b2b5ccefd5786b3ea54a7"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","7ec3d940307bbcdf0392908ce71d74e9"],["/2020/08/10/机器学习-实验-花卉识别/index.html","0b317328d370b661b5ab0929d9fc5781"],["/2020/08/15/Python-项目集锦/index.html","e528e485e66ac749777a019c4ad6f7ef"],["/2020/09/01/编译原理-词法分析/index.html","a5891effd2709f97c0d5723a06811666"],["/2020/09/02/编译原理-语法分析-LL1/index.html","8e502f123c301f23f628387f21f47c3b"],["/2020/09/02/编译原理-语法分析-LR/index.html","020a01a6a9f91dfcf82b581db0741c83"],["/2020/09/03/操作系统-内存管理/index.html","2842d6d2eb09ee234f8b339111c3b36d"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","f2a26a74fdc7101865a6666ef076bb7c"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","b9bbe0eb3c2d47244adef3ad4c485731"],["/2020/09/04/CSAPP-实验集锦/index.html","68c35667f00ee513e9387be947d2e981"],["/2020/09/10/计算机网络-实验集锦/index.html","58cbb71065703ddfb070f0f9099131ed"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","944bc19da647a42460e0dfc4d7648d39"],["/2020/09/30/C++工程项目-JobShop/index.html","070c8169839c26bab13d9611c32c0539"],["/2020/10/09/交换原理-实验1-时间表调度实验/index.html","565d1b403b11da0cc16b3fcf8d9e343a"],["/2020/10/09/交换原理-实验2-摘挂机检测实验/index.html","54342fc72f55ee6ba5b538f92f18fd26"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","df3738f512816685fed718483c8dd4a1"],["/2020/10/09/交换原理-实验4-拨打SIP电话/index.html","f681feb9db55909d51db7b963da09a8c"],["/2021/01/04/Android-项目集锦/index.html","4fd394239af12fa78e1f3b52ad09183d"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","4ac3e87ad37d609d1313a2820d0066ba"],["/2021/01/04/C++工程项目-travel/index.html","53baa1ca07a06e2dd71506b595e667e2"],["/2021/01/04/算法设计-分治-最接近点对/index.html","5c94fdc857188c10e01289e39b5be9a3"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","eff685f5c31a854c3dfe1b0429abf872"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","38b9a56d2fe842b4fbf7335ad1a5d656"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","52032aa5d887144a65eef1e1f026609c"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","6d9e746b063938bc307ed9c64800b3ae"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","3c912adc70e58c3a51661a2885c70d2a"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","e7daff0ccf843360e18f9d68b273d80e"],["/404.html","2176cd23a2b35f1da70e08340988cbb7"],["/about/index.html","cbcbf312f43c4a46ab0f32704daa1191"],["/archives/2020/02/index.html","fe94f44debd4b06efef91fd3e4193334"],["/archives/2020/03/index.html","caa95950a6193395a7a38d352934390e"],["/archives/2020/04/index.html","7cd93bd11c60699b8c9579dcb3d18162"],["/archives/2020/05/index.html","0f004224bbdf6f0ad9b4d658718c2673"],["/archives/2020/06/index.html","a441b2c6c407e6df4b468c29d2b73100"],["/archives/2020/07/index.html","bcc6a2c77857a135472b1d67d4460fb0"],["/archives/2020/08/index.html","0f80861c6bdb6b9143ca177f79f57355"],["/archives/2020/09/index.html","0036670bcdde3463bf735346f20d8049"],["/archives/2020/10/index.html","3c2db3d68302422bd842a158b8eabbb2"],["/archives/2020/index.html","36ff2fde3e65a8ac1059e458b3341cd4"],["/archives/2020/page/2/index.html","4df90e2d5bcbba31d46ba5d11acfbda4"],["/archives/2020/page/3/index.html","eb987dcc60aecc4d5a04484e42705ea6"],["/archives/2020/page/4/index.html","0b2472c807daf17334051d405ccf8e71"],["/archives/2020/page/5/index.html","036b019a0a74ef81a6d9642d49bc36b0"],["/archives/2021/01/index.html","e67ece843878f2e70587b8b620b8b629"],["/archives/2021/index.html","dd5eba103accea8eeeff012f73079dc4"],["/archives/index.html","70ef5b409b134f447e42b6be236391c9"],["/archives/page/2/index.html","3ef464e24bb1a9a4eaed41ff1ad3be97"],["/archives/page/3/index.html","3ef464e24bb1a9a4eaed41ff1ad3be97"],["/archives/page/4/index.html","3ef464e24bb1a9a4eaed41ff1ad3be97"],["/archives/page/5/index.html","3ef464e24bb1a9a4eaed41ff1ad3be97"],["/archives/page/6/index.html","3ef464e24bb1a9a4eaed41ff1ad3be97"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/categories/C-C/index.html","e8032389a3e29e5ce2c2f1dd9cc2b4ac"],["/categories/C-C/page/2/index.html","f4d005a61b728ca87d6332d3553f4b7f"],["/categories/C-C/拓展学习/index.html","3ded46c1d45ded8f84d1fb17c69a4bd4"],["/categories/C-C/操作系统/index.html","808a291031e0cd059a81a4740bf35f95"],["/categories/C-C/算法设计/index.html","1b2aef97c98bd3bb54ce8be55ce56a7b"],["/categories/C-C/编译原理/index.html","37744b352ad58e58c4d256d952af918c"],["/categories/C-C/软件工程/index.html","64590f62b281891bc2e52209d791f3bd"],["/categories/C-C/项目/index.html","841bea13611f5027dbe2accfda4c2588"],["/categories/Java/Android项目/index.html","1986059fc0175dde752cb062ebcbfb19"],["/categories/Java/index.html","0c15cfd808d4768be7b6bf21bbea2c0e"],["/categories/Linux/index.html","a324d6aa5e7c8cc332805f77ac1fbe4e"],["/categories/Linux/上机实战/index.html","b510100b39afb42cd1fc36f8c72e9ee4"],["/categories/Linux/习题/index.html","e5df1f733865e61b0d0555f5a0ec1c9c"],["/categories/Linux/拓展学习/index.html","a13d619271d643e330f50f540d398712"],["/categories/Python/index.html","85361cce49257cac1946615d0647bcc4"],["/categories/Python/爬虫/index.html","71c2995f35a6b9dca32e393d8e22098a"],["/categories/index.html","48ae1beb800086e91469e1f07242d428"],["/categories/交换原理/index.html","d88d92138a855bb65afe1dbaa3296a61"],["/categories/交换原理/实验/index.html","6c0071c9f40ea046bd1b152dde9db497"],["/categories/其他/index.html","6856bb88b07640edb3fc26a2d5a0e86d"],["/categories/大数据/index.html","6c21fa053552f6d90e6a30ce183b22e0"],["/categories/大数据/习题/index.html","4e01c4c494c9ab6d24772554cf334fa2"],["/categories/大数据/实战/index.html","14b17e68f052f2fe9dfb97ddb3d0f4f1"],["/categories/机器学习/index.html","766624fe80c56ff3e93b21eeae627d40"],["/categories/机器学习/实验/index.html","c675382a95e5af35fe50003273e9959a"],["/categories/机器学习/知识拓展/index.html","bdd8dd7463fb5da8449daed153f83818"],["/categories/现代交换原理/index.html","90a7440cbce247ab1ae4868e4e62272b"],["/categories/现代交换原理/习题/index.html","9699c5a128c639bd2da58c027ea2f758"],["/categories/计算机系统结构/index.html","c736500b951e789126cea30105ead747"],["/categories/计算机系统结构/实验/index.html","5c59c6e351eaab6ce63f230c29eee9e5"],["/categories/计算机组成原理/index.html","4cc362ab9148a7c10e66ea6fff70812a"],["/categories/计算机组成原理/实验/index.html","8946dbbf3514dcdf82c5b905cd04ba7a"],["/categories/计算机网络/index.html","90e6688fdcd2b79f539142ad964a9257"],["/categories/计算机网络/实验/index.html","6448af668a61f8ee6f109c81876f96b9"],["/categories/集锦/Android/index.html","b4cfd3a75487302ad754973f9b4f70f5"],["/categories/集锦/CSAPP/index.html","6334f7bbbe99306fffda5aac34eb1d34"],["/categories/集锦/Python/index.html","2994223b3241cac011f3b45f2c1d4d4b"],["/categories/集锦/index.html","11faea3828fca0fd35cca9e5a377088f"],["/css/first.css","01a90baf99fa8f190becabd973782198"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/style.css","d6b605a251a052e3c03a515d025edd45"],["/friends/index.html","2e3df2ecc12616301c5464c74dc00e46"],["/gallery/index.html","63f4bc7639ebb10460b077618443184f"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/games/tank/index.html","a4a2448b8b53e14bf7bad5c1f71e614a"],["/index.html","27c130a3fb36e59c1fa0b6a5301776ea"],["/js/aplayer.js","a0a8f225cab4df42a6e0164b45d7641a"],["/js/app.js","1948329f2fd7e750ade4bdc49138c09b"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","69f3c67d22c5dce65f57511286ece73d"],["/page/2/index.html","9f3a563c6ae0246c8a545e84212a7a1b"],["/page/3/index.html","fea07348e12bee93ad68ef0a7c7885bb"],["/page/4/index.html","65d5e9c7848a7d169a8f5d6e8f12bac8"],["/page/5/index.html","b71fcbd7c05021d5e9d3bc48f037c31b"],["/page/6/index.html","f286d32dd18f298b6d26150830b9e1ad"],["/shuoshuo/index.html","10281d8f8773e05e4aec83fcc6ac207f"],["/sw-register.js","ab69137cea069066a6393943316b6574"],["/tags/AI/index.html","e50456832ff6fdf52db1380412a37447"],["/tags/Android/index.html","6ca16828c2ec6e3d41e66f30a9ed4308"],["/tags/C/index.html","af86c8ff70efe8698462c00ec6bf1c19"],["/tags/C/page/2/index.html","3f1283392e75d71970f3a6e03b2feab2"],["/tags/C99/index.html","4b12f245f59b0493335287ceadefc2b0"],["/tags/CSAPP/index.html","85d048b339bef4701e3027855f6885b8"],["/tags/DNN/index.html","25a4a3e754a72948de967bb781bd1d85"],["/tags/DNS/index.html","a25fdc682185766fc837919d5da01e3f"],["/tags/FPGA/index.html","cee67807aef2be581454bc76692a2383"],["/tags/HDFS/index.html","60d20334564416c63e31986225f4bb37"],["/tags/Java/index.html","bfac6e2e645bc832ce382894eefa73a5"],["/tags/JobShop/index.html","38c7c3975870ba0320ca382b1466740b"],["/tags/K-Means/index.html","8cc1adbdc91e2732d70c4e6627d30f84"],["/tags/Kafka/index.html","4df30e242233ef2f40ff27495590c539"],["/tags/LL1/index.html","b4fbd68f6fa0eb553f44d93825c3774d"],["/tags/LR/index.html","188e9280a5ff935428ea341f1da99bf7"],["/tags/Linux/index.html","bfa1b8294d7ef54e4ac413246b4f8d03"],["/tags/MIPS/index.html","0283e5bbd9050ed3aa92c0039eea9ac5"],["/tags/MOOC/index.html","6dc6daa466e664fc9ff3b5980472e46d"],["/tags/MPLS/index.html","35b1bb2c995ef04676a0d71c822f905e"],["/tags/MapReduce/index.html","08f9f7debcb0883d9192c9dbdb2171de"],["/tags/Matplotlib/index.html","ea5a1185bd5dfdc09652884ca41ed12b"],["/tags/MiniSYS/index.html","27b971e9ae22b63ffebb74ce1f17b874"],["/tags/Python/index.html","6f1ec2ba04421b82451cb2d6a7403132"],["/tags/QT/index.html","d2df1507643f443b96fac81c441290f5"],["/tags/RNN/index.html","151c0e366aa041bfda9d92787f9c4b15"],["/tags/SIP/index.html","0b8e3f49746915d5b9f21133a52e262b"],["/tags/Scala/index.html","1d5f1f04996ac6b771ac2ae215477845"],["/tags/Shell/index.html","c58661e770e2fe1344b02bd85788445f"],["/tags/Spark/index.html","a8e7823237916a7c79b09274290208d9"],["/tags/Streaming/index.html","b65d2690ba027b401c6769661ed32301"],["/tags/Struct/index.html","f84762a7a4beab39260f8e3410ea1547"],["/tags/Verilog/index.html","791f9a551560da5a8b412decfbb10e73"],["/tags/first/index.html","4546b0ca31d961cf08476d3e18cd6829"],["/tags/iPython/index.html","6cb7271d353faeb227ebfed71fe6c911"],["/tags/index.html","aef778363ab12fdf84cc16be22897383"],["/tags/ls/index.html","78014e546156db2179c2069a54e30b66"],["/tags/习题/index.html","74920246b879ace36a10f0db9bdb195d"],["/tags/交换原理/index.html","e86598e2cea02b045fd4e26ad3ded2b9"],["/tags/人工智能/index.html","bffdd6a4cd3c58d7cb2365d55b3f5cf8"],["/tags/信号量/index.html","0e9f07581dca6d938fbf4fb13a2c2a19"],["/tags/内存管理/index.html","ef17ead890bfd2bc40813c7a6ebb5ab6"],["/tags/决策树/index.html","3a9b132f66f31a8fc84a5549b5d23c34"],["/tags/分治/index.html","fac92f8abba5499bfb6a6bccee61a110"],["/tags/分类/index.html","1a23d80f644505f7df8af70ba5bfe265"],["/tags/动态规划/index.html","4eadbce49066d3b2de6c351033b1b977"],["/tags/华为云/index.html","be2cf0a841bae2addb801acf9d1f6ffa"],["/tags/单词计数/index.html","97b2ba75f35c07a06a56a09cf76bb38c"],["/tags/可视化/index.html","ac7d8ae57aa31cb91b8a445a0d8a5899"],["/tags/同步互斥/index.html","443a39d692dfd46d4e1fb5487a83629e"],["/tags/大数据/index.html","74f2d355c9788bc712394d92a381434f"],["/tags/学堂在线/index.html","0079e45844adc07b3d6373e4589ecd7d"],["/tags/实战/index.html","5341ef873bffd2c61d26f5102e3b1453"],["/tags/实验/index.html","5b35a5fd09ba842f779808cdfcc838de"],["/tags/实验/page/2/index.html","df6c2cd16f28e799a8bbab25826d9cc3"],["/tags/小游戏/index.html","8b41c8c81a8d896230d020b3e34958fe"],["/tags/工程/index.html","8cf9e945593b707256e5a330117df322"],["/tags/工程/page/2/index.html","3f92d45f12cf459b19163be4ce0de530"],["/tags/手写识别/index.html","c1ec05921a21613891358fd3722b13e9"],["/tags/拓展/index.html","ea6bc9f0d03479c8a551ce4fd9afe1fe"],["/tags/操作系统/index.html","fb86ea63c6385c6f5e3c6e89af255cbf"],["/tags/数据处理/index.html","85ef90a734b5af72e4769762436ff570"],["/tags/日志分析/index.html","be05163f7ee96e09df768c568929e574"],["/tags/易错点/index.html","5643930867b86168a402ae8e048dc28c"],["/tags/机器学习/index.html","3b09c62aee07bf87f09929121b4cbd69"],["/tags/条件熵/index.html","08581f40297b576ede0394513d153414"],["/tags/正则表达式/index.html","11646bc0a46acc7238bb03d9fd35a9c3"],["/tags/汇编/index.html","1ea2fbb850d421e9dc712e1106562cad"],["/tags/流计算/index.html","b404c530473a2f7d9c6972d5c0d2d820"],["/tags/爬虫/index.html","7653acb1d8d089aa70fc49da9a06ac83"],["/tags/现代交换原理/index.html","99ecbfafa4116f565e32ee2b20a6fbc7"],["/tags/生产者消费者/index.html","75931edc852858001f4b2d92a7821acf"],["/tags/知识/index.html","827692b0fbb5bd9342c6f5a8cba63ea5"],["/tags/算法设计/index.html","8e753ac8846a313b4706184ffb4eff99"],["/tags/线程/index.html","95ae47bc67019280b840387dc2752c79"],["/tags/编译原理/index.html","16b80b41787d1b882378a62f2d9fd9ca"],["/tags/网课/index.html","8e1ab5277091728a64969cfc1d0e08b5"],["/tags/聚类/index.html","b5b8f3da16c0a462548753a0dc389330"],["/tags/脚本/index.html","92d2e221fb7c32dc1608c142c46c261e"],["/tags/计算机系统结构/index.html","91282c249b397a217e13ecad1c2d86d1"],["/tags/计算机组成原理/index.html","0202d5f4a8b3faa6cae97112fbf08fa5"],["/tags/计算机网络/index.html","2a99f5c62e67bbb9446367a409769542"],["/tags/词法分析/index.html","6fc897037f99cada832c7ff0503cb962"],["/tags/语法分析/index.html","45dac542c42b0a45887da75a35affb9b"],["/tags/读者写者/index.html","7a6d0fc5619f198450498b0d70fe3887"],["/tags/课程/index.html","32f6e1e1d92b56614b7cc3dafa43e704"],["/tags/起名字/index.html","fb288c3e36aa32f917f2db237dce5da7"],["/tags/软件工程/index.html","3c4d0b3f22cda5e6a16e2f26e6fbf3c9"],["/tags/进程/index.html","d05fbe91a313233a057a6401d953a3da"],["/tags/通信/index.html","7ad73a91d5050af0173318dedc801912"],["/tags/遍历目录/index.html","4a2844af04ef882a6765fe757e68d83b"],["/tags/难点/index.html","862ea989617dd3430b8d6e10bc256339"],["/tags/项目/index.html","d4778a0894c0920529f00807ac4657fd"]];
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
