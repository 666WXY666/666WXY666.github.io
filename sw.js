/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","fbaff0a80d23de68a99deeb2af76bf08"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","06789df4219ffaa81ff05a12775e8a1f"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","ab5fc30d03f50659f22270851ecd9a2d"],["/2020/03/26/计算机系统结构-实验1&2/index.html","a980b403fa97dd0cd73efaecb652d543"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","ab7ff756d2ac56a625c8a85afbbef91f"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","7c5206c8fad6699314ab30a354b3acf7"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","ea15093912100b8fca8150f9371a2419"],["/2020/04/18/机器学习-条件熵/index.html","c8071f4509cc225692d852b2226c82c3"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","974a516ca37757ba247e78190d846942"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","4a7a1828645f2ed750d7a21411fdafc9"],["/2020/04/26/机器学习-实验-决策树/index.html","fc1b0bdfd49bdb6053bdc8b9d4208e3c"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","3e1c9cc54f4338bc6f50c43b68076672"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","ec9f4ed81df334787929730367f188e1"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","80f5502581118d95aeae04cc938d8333"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","cce5ee48f41c3c60f11bf24a6b3e2ba8"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","1277c9f10a0b0b62208c99e526149b15"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","f9b60f178422cb25b6f5d78372b3e811"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","a48bb859222151d91ceda03f8e87da6a"],["/2020/06/11/机器学习-DNN-手写识别/index.html","6190f8f21725b76339ae7ad1a4886ee9"],["/2020/06/18/大数据-习题/index.html","ec4932047fb58bb1782a34029e56ed66"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","ef87901b27ebe0b896f7631ed15243b0"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","a4f65fb08e25f9ae0565c83018f88faa"],["/2020/06/24/Linux-拓展学习/index.html","fe327bcacff3b584274551869fdde4a6"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","a0ba485bec629f3b642e2fcbc2052ccb"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","25bc8f087f4974d60a44ef516c751763"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","3239f3547a77ad251d34e95e4b5d71e9"],["/2020/07/15/C和C++的struct使用总结/index.html","43d7f36c57b72b80d8fbdcd22c0a4f77"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","3982788f20cb4aff950575a8fb18b70b"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","540022f7ceed8cf1a13028da4c990d55"],["/2020/08/10/机器学习-实验-花卉识别/index.html","84adafe1fb8f01196db079f2ef239cf1"],["/2020/08/15/Python-项目集锦/index.html","54e16202ad570aa296c7cef81a8feb6f"],["/2020/09/01/编译原理-词法分析/index.html","a75bfc96e8601ea4a40b145eb88d39de"],["/2020/09/02/编译原理-语法分析-LL1/index.html","2d24b3f95fc9a9b14433cbf9f3f0df56"],["/2020/09/02/编译原理-语法分析-LR/index.html","5bc52db42ce83811e75efccb7a4db963"],["/2020/09/03/操作系统-内存管理/index.html","4d9b99f13184cb907e79bdce2429746a"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","f9f0e58f1a02fe4dd37f0c1fb0ceb41d"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","8f787a74f0e55eb36ae312b92e0471e4"],["/2020/09/04/CSAPP-实验集锦/index.html","08c952bf27cbef0fc5046aff5588ca29"],["/2020/09/10/计算机网络-实验集锦/index.html","588253a7e63127bc6b0939ee1e5dc6a7"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","8a85d926ad683199633004abee15c205"],["/2020/09/30/C++工程项目-JobShop/index.html","36d430f3051ea7ef183145184ad713af"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","f4a078f3f78883ba9c03d945fd40d866"],["/2020/10/09/现代交换原理-实验1-时间表调度实验/index.html","bdb7c9cc93ab30722defee13e5c93a69"],["/2020/10/09/现代交换原理-实验2-摘挂机检测实验/index.html","8015b2e64de93870f66d58a71016e5df"],["/2020/10/09/现代交换原理-实验4-拨打SIP电话/index.html","6af945fa542214ef1c2680d7bb8ea447"],["/2021/01/04/Android-项目集锦/index.html","31e6fb6bf03b1314f6a74b7c19744540"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","9cc798b4a30183c5d51c06571af21d24"],["/2021/01/04/C++工程项目-travel/index.html","87f42f1f874096164647e0ef28c0b6f4"],["/2021/01/04/算法设计-分治-最接近点对/index.html","0ae4f0b0dafa78fb495fd1ea490bbf41"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","354040649e3cb2b6ab81f877f62f8e79"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","d828f299892d7a7809d1fe3c07d7e017"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","19a1c94741944084397a0896fedd8849"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","20df796a0653ea46ef422a2f3045b15c"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","23d058c169ac85f3fec364eba0d09ff6"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","28c850cfb64c9cd89004836778cf17d0"],["/404.html","2394b59b860bfc1b2a641e2bc2300ffb"],["/about/index.html","892d0dd5977bc3c951c6bbc3ba45f116"],["/archives/2020/02/index.html","49d311ae46a006fed7fe4dee2505c5d3"],["/archives/2020/03/index.html","af8408abdc06a82ec2d006c410ad971b"],["/archives/2020/04/index.html","78725992de91e36a9e2e11b66de2ec1c"],["/archives/2020/05/index.html","999fa885b804514d0391f7ca461ac2ef"],["/archives/2020/06/index.html","b3141377ddbeff46c0a231051b1231fc"],["/archives/2020/07/index.html","ad2e4c3c7383b4d126e97a6d31b32b99"],["/archives/2020/08/index.html","fdee6c2f8a02eb7bfd5521f753ceddde"],["/archives/2020/09/index.html","b6d1d90756b0e90f6e415654894b329d"],["/archives/2020/10/index.html","130fff07b0c0c71cff61b45ce5a261f4"],["/archives/2020/index.html","dacede3b536f62e2cb5aca7b332d6c2f"],["/archives/2020/page/2/index.html","13e198ebac00a2eae6317b53caa413d9"],["/archives/2020/page/3/index.html","1bb5e96af7a9074d1a3457dd9e91a64d"],["/archives/2020/page/4/index.html","8bbb3dc88606b8c20d87ae6e3e1770dd"],["/archives/2020/page/5/index.html","4e4d122f33185113da5219f5e24dcd29"],["/archives/2021/01/index.html","16bd2ec553d26231895e4e6b1880cda3"],["/archives/2021/index.html","686870e9945f713a286a5f940202ee5a"],["/archives/index.html","9f09abd289020fda26dca9e198b59e77"],["/archives/page/2/index.html","9f09abd289020fda26dca9e198b59e77"],["/archives/page/3/index.html","9f09abd289020fda26dca9e198b59e77"],["/archives/page/4/index.html","9f09abd289020fda26dca9e198b59e77"],["/archives/page/5/index.html","9f09abd289020fda26dca9e198b59e77"],["/archives/page/6/index.html","9f09abd289020fda26dca9e198b59e77"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/bb/index.html","a576559187eb6b3a43ad32e5d7eb74d1"],["/categories/C-C/index.html","08a7edae36accda9c56c58fb2980c142"],["/categories/C-C/page/2/index.html","29f21f7408218159420c14b06b4e5c32"],["/categories/C-C/拓展学习/index.html","966bbfc3a7056fd4341d6346e9bfdc53"],["/categories/C-C/操作系统/index.html","d1936e1c63611fcef5cd35c565b2a2fa"],["/categories/C-C/算法设计/index.html","246c722964245f42370efdde5a7ab4f2"],["/categories/C-C/编译原理/index.html","3c071605bb2e13768187e16c3dafa0ad"],["/categories/C-C/软件工程/index.html","89318c7748c7fc5fb06547329fe493d2"],["/categories/C-C/项目/index.html","aae7659f4ab29f5971238df5e63d5de7"],["/categories/Java/Android项目/index.html","4ccb6452cc9fe63f2f855b4403c15d35"],["/categories/Java/index.html","0df4d638b4cf1373ce4309b197fa6657"],["/categories/Linux/index.html","93e4aa0133c97a5c6034bc429508002b"],["/categories/Linux/上机实战/index.html","fa8982a5d40e1ace1028121d48258a4b"],["/categories/Linux/习题/index.html","38e81609c03314b76e93bf710353b5ee"],["/categories/Linux/拓展学习/index.html","16cec0adf5c60b5ef8c8c7f51bffc0ca"],["/categories/Python/index.html","7e3f8c1d29435f886a3c447984bcf56a"],["/categories/Python/爬虫/index.html","e50a8f2fdd074acc0d3db5f6e3b0aa09"],["/categories/index.html","44d3964c6bc7a1f345d34f569ae0da66"],["/categories/其他/index.html","743f7c79b189cdb9075022731856406e"],["/categories/大数据/index.html","320dcf22d6ee34c4127518699e23b625"],["/categories/大数据/习题/index.html","c581a2348922d10d45d946b304d6f759"],["/categories/大数据/实战/index.html","b09c93d86a35d856b8c4fa37f86b5d57"],["/categories/机器学习/index.html","eaf6a3765f1738e3d12c2569b1c17cca"],["/categories/机器学习/实验/index.html","00113b148239a57c8d1fd8b28c66d56f"],["/categories/现代交换原理/index.html","6b34d853f95fe9db61d1505e0ffef7d3"],["/categories/现代交换原理/习题/index.html","db7f03ab4b952031298cb76f099cb4a7"],["/categories/现代交换原理/实验/index.html","ab317fdc9870476683bd43f8c50965fb"],["/categories/计算机系统结构/index.html","bf80bff7509754c921cf0c987ef0898b"],["/categories/计算机系统结构/实验/index.html","451fc3f7c88acc30d8364f6cf91b8da2"],["/categories/计算机组成原理/index.html","9329455a9cac67126db2bead03e1ac13"],["/categories/计算机组成原理/实验/index.html","9d39b3784cf44b3cf83627b582624764"],["/categories/计算机网络/index.html","6d1141e3d5e3bfea80b8186d91aeef67"],["/categories/计算机网络/实验/index.html","fa52f1629b503f42ca86b337172b715c"],["/categories/集锦/Android/index.html","4bf052c02922616ab5c24d1a78749210"],["/categories/集锦/CSAPP/index.html","8133f777220224909f714a6295863671"],["/categories/集锦/Python/index.html","09e34d8dbb6063e510cc354177abfec1"],["/categories/集锦/index.html","70f6a4849a13760ea0821e7242ede86e"],["/color/index.html","3f627143356419f7f54e1443b3536f0d"],["/css/first.css","ea01aa1635810499a5ade558f4f81d56"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/style.css","64b1114c519e03931eeca2c72b7d769d"],["/friends/index.html","1af885e32874d4d389e68d98bd6372c9"],["/gallery/index.html","cac0a9f9094373909cca2398b08a7aa4"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/periodic-table/index.html","4c31220b3c8c1d35b1128df43b2c9dc3"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","3f7d547cb7af7e2c91b0f84e1316c929"],["/js/aplayer.js","6e605f0855251e101d3024646f3eac60"],["/js/app.js","1948329f2fd7e750ade4bdc49138c09b"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","e28f9df404297dcbdc1e776fe9b54156"],["/page/2/index.html","00c5dc5551a54f71016bc5cedd2eccbb"],["/page/3/index.html","c98817d0202678b62e77bc13e4ceb554"],["/page/4/index.html","cbff604b0bd74671f2e904ffedbd9569"],["/page/5/index.html","5bb0ca32ce62187fa9416d3c8d991755"],["/page/6/index.html","3f2e4a16afbcd125f00f301a9312cd39"],["/shuoshuo/index.html","be5ee56bf069df87dd79c6991a88d63d"],["/sw-register.js","6900aaddcaa3e56cf114292923d37cdd"],["/tags/Android/index.html","2e9dd41a03c82273d085f94848d1a42a"],["/tags/C/index.html","ac0f374e1fbfb0736e66564361cb7e91"],["/tags/C/page/2/index.html","567ab2c29805cbf7447a2d9811cd1e28"],["/tags/CSAPP/index.html","2d3b3d1a4e0689a50ea35ec5d7161ea2"],["/tags/DNN/index.html","cfc24b40f3a6cbc05a877da82f15eb39"],["/tags/DNS/index.html","bd6a27933ac034876f87a32cfdc7d683"],["/tags/FPGA/index.html","51c5e5bca374cfde829100593586351e"],["/tags/HDFS/index.html","ca0d328a8f4098eb3d1697425f06495c"],["/tags/Java/index.html","ff0ae8f8b92befc3dd9c72b914c201e9"],["/tags/JobShop/index.html","555657f152043c6f2c9debd27cebbe1e"],["/tags/K-Means/index.html","f06d9f90bb3d291c19e1cb3fa9ef45e1"],["/tags/Kafka/index.html","db43ef1f874608bf0b979f1385356d0f"],["/tags/Linux/index.html","12af5c098b3561092a059374b6a8c027"],["/tags/MIPS/index.html","ea74d8a352593ace0c008e196e6e7e3f"],["/tags/MOOC/index.html","274e799f6ced2dff6c382ad457244d96"],["/tags/MPLS/index.html","edc77bfe8a3bfddcb85c7417c6867a0d"],["/tags/MapReduce/index.html","13bb005ce0974277dbb79fe446eb229c"],["/tags/Matplotlib/index.html","0712eb61229e657722a42c7d34a9e47c"],["/tags/MiniSYS/index.html","a67469ba909f2d2b69890b3afc58cf51"],["/tags/Python/index.html","aaded8c93ec1ae246b90a827d5c61a47"],["/tags/QT/index.html","3bbad9d2446741d603ba7e7ef6b5028e"],["/tags/RNN/index.html","453bb120f99af58088d5837578442b35"],["/tags/SIP/index.html","67843e5bbc46610902df8e7aab33559f"],["/tags/Scala/index.html","4ca6980103108b5dc2c4cc32ee65e1aa"],["/tags/Shell/index.html","5779600a20dd13e0faf7ed74269de12e"],["/tags/Spark/index.html","a1b8bedfb35b37c19bf21b0ff6a3590e"],["/tags/Streaming/index.html","2aef201d301a456764d8a3cd507b0afe"],["/tags/Verilog/index.html","6cf157217005c559d5dcc55e5ff8f3e2"],["/tags/first/index.html","e428d894b53ebe2161f8dd3b0ae4603b"],["/tags/index.html","9138078f12fdc03051afa2b2921a0f15"],["/tags/习题/index.html","a4672d87d3aa9ed1a8a7b033acc33e87"],["/tags/决策树/index.html","5b69db53b86b64aea320204ed720e1e8"],["/tags/分治/index.html","39bf83a4ed6e553629a180e97a37ff95"],["/tags/分类/index.html","9142b1c9e873bb0c43a7c67987b06056"],["/tags/动态规划/index.html","253f4a7b8594d711464f0ec344daa63c"],["/tags/华为云/index.html","a7d4188e1e09ca813943a1b62cda0695"],["/tags/同步互斥/index.html","19613f7339212bac0e52d5dba4b50af7"],["/tags/大数据/index.html","551b2a150616399d1d52ec3b06bdac2b"],["/tags/实验/index.html","916a74204cb8b30525e57c293393b14b"],["/tags/小游戏/index.html","6d7efc0af0f8bfde12b11668fa4b1b56"],["/tags/操作系统/index.html","c70e7359ec6453f6b9f3a6bc72382348"],["/tags/日志/index.html","0723a2862fe1599810e76d168d5fc26f"],["/tags/易错点/index.html","ffccf0ad263b8407659f2f8643678ab6"],["/tags/机器学习/index.html","d6e436559c19ba1cd3773c1befeb9b69"],["/tags/正则表达式/index.html","dca4c368d32250251aca325d062d2cfb"],["/tags/汇编/index.html","8db8529186f2cddeb89196c8a99d5526"],["/tags/流计算/index.html","bf5fcfc9674e60008f7dba54d6c9d146"],["/tags/爬虫/index.html","ed1cae33e7f2d273f517e5c78c5ea847"],["/tags/现代交换原理/index.html","2892ccaf59902ac3bc7a6f0aa98a14ac"],["/tags/生产者消费者/index.html","b0a2209bfc4cc9894b7cf26dd69f6059"],["/tags/算法设计/index.html","d36726406dd9fe4ed685ff3e0148fa1f"],["/tags/线程/index.html","e6cbc7f8e829c35f19048ae509cd5500"],["/tags/编译原理/index.html","4d697ca7dc1bcd71fa08e7b5da88ec06"],["/tags/网课/index.html","0479c4091b88c00fffcfb248fe2514cd"],["/tags/聚类/index.html","5deef6bc37505a3935d851d8afdafea7"],["/tags/计算机系统结构/index.html","85faed01d138aee6d13dcb4a9476685e"],["/tags/计算机组成原理/index.html","9a4f5b3a7905fa82d8d91358eb7e5d37"],["/tags/计算机网络/index.html","1217680788e47e57d07beff27bc1b2f4"],["/tags/词法分析/index.html","fd024c325a15a6deda2b88166f4b5c45"],["/tags/语法分析/index.html","39e1e32226d642a4f301a161ff283d8d"],["/tags/读者写者/index.html","ce4b3dd937378aaac737d1c2151dc68f"],["/tags/软件工程/index.html","5b69d4fce1179437a76f0e01cb0face2"],["/tags/进程/index.html","e2c68e72bee3cc265d46599981598a33"],["/tags/难点/index.html","55ff87095d3c938752b408d6ac109523"],["/tags/集锦/index.html","c383353e7c193c61a1dc98004b38118c"]];
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
