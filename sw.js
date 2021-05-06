/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","db8f6e3d692ef5f0eefb1c9335fb783f"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","8a4847dca93b1a65bd62e95a77b471b0"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","0056039016969a52b156c162a2241ee4"],["/2020/03/26/计算机系统结构-实验1和2-遇到的问题/index.html","93fe33f9c83e7f6cc9ad6753f81af203"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","fc4e235b7966c7f5c11ba180fbe50365"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","494dd05dab292f18695c797062ab0269"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","18a581e027545d5ad998b2f3c526ba53"],["/2020/04/18/机器学习-知识拓展-条件熵/index.html","6e435063e734b532cd85bea6cd8a5bed"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","715954135273c6de2be20d2fb3013795"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","ed21be5a6c72a72fbc419b1d14d3079f"],["/2020/04/26/机器学习-实验-决策树/index.html","ef9c46ff47e5edb0c2bb4597120c50ae"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","82a6ef5d23243c7c27bedef69cae95ae"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","75040557533da7a674bc40d9232c7bd5"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","7b8241f8118e9fc8f06988c82e54e29b"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","333c9a3808244ab3d1d68c114d768568"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","46d37ab0afdfabdf5bef08d64b2e3e56"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","579cf78b7820f533e0d888973cd78bbc"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","aee985fdd57edf7e91264455283efecd"],["/2020/06/11/机器学习-实验-DNN-手写识别/index.html","644cb499aad7483aea260b687d18d90b"],["/2020/06/18/大数据-习题/index.html","ae4bcb657ce54d298c5f322ab38c37f9"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","ba08bca677d8d9580013ffe3b884430b"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","d9f3591a63a0b7c9b352c6ef0417bc1f"],["/2020/06/24/Linux-拓展学习/index.html","c5c1438ea181fa0517e48b3ff8de6574"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","37f1e4dcc97ad1ec3cf920e3a8d21912"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","ecb41f8bcdff42da1382a147b59b2ade"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","8def0b5be2360b269d7c53430ee76e42"],["/2020/07/15/C和C++的struct使用总结/index.html","c91ce85e0616a385365e3fb3c844156b"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","c9c01c42bee228fbe26d26c4506f0571"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","9399f048b739b81c411bfefb73f8e5ad"],["/2020/08/10/机器学习-实验-花卉识别/index.html","f24476123781dcb72af548b404d44195"],["/2020/08/15/Python-项目集锦/index.html","91decb463f1b7c711c72fb445485553e"],["/2020/09/01/编译原理-词法分析/index.html","a936d63e2583c25c8f0418d4d2d25ea1"],["/2020/09/02/编译原理-语法分析-LL1/index.html","32e510ecf0402823d231eadfd179f666"],["/2020/09/02/编译原理-语法分析-LR/index.html","2011f7b2db57edbf26e5cdda4dc377f3"],["/2020/09/03/操作系统-内存管理/index.html","ea46361429f2535c2e4894fb10e4d7ee"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","466bccae58d000320f52a9a2d4564e2f"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","d76c12bdc5bfe5b393149d7fe11956c5"],["/2020/09/04/CSAPP-实验集锦/index.html","1f153fcb21d301cbbc389a939aa1b6ab"],["/2020/09/10/计算机网络-实验集锦/index.html","49fde89ae42f302329a178166ef6e16f"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","16b745f71714092981c1db3d701bc378"],["/2020/09/30/C++工程项目-JobShop/index.html","6315b87a4def3019f7897ea623da5b24"],["/2020/10/09/交换原理-实验1-时间表调度实验/index.html","96d5d4437d31f0af46decdec6653bdd1"],["/2020/10/09/交换原理-实验2-摘挂机检测实验/index.html","c8e629d431c9a5699f61d4fc87deca31"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","477c5da6a2dbfbad4f4ed2eef39ee93b"],["/2020/10/09/交换原理-实验4-拨打SIP电话/index.html","5127e7063cad588c1b21d60c63c7d8f0"],["/2021/01/04/Android-项目集锦/index.html","fdcfa5efda672624bbb69085bd81a569"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","14c7245038369236080696d898395d38"],["/2021/01/04/C++工程项目-travel/index.html","5f9c8280acb23b6b1bf27eeaa62efa2e"],["/2021/01/04/算法设计-分治-最接近点对/index.html","913fdf169e516193f4bd9d3fc45ef048"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","d8c42c6308c6a3972834e06ccec2811c"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","3f4b4640c8595b16a3a4cc49610537dd"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","53c49d8819abfe8cf8febd423302facb"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","bbb1b91371c6616bf527a6369e1a9544"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","c8433d18f2e8127e6c6d44ac382e7f75"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","89f7e374513b413c2e6915a4fe64cf23"],["/404.html","2394b59b860bfc1b2a641e2bc2300ffb"],["/about/index.html","c535d8649c96ebe22bb23007cacadbc8"],["/archives/2020/02/index.html","707c0b48fdc47e4790a7aa850e485044"],["/archives/2020/03/index.html","33ac021e58bfe62a29f9793a1d65a544"],["/archives/2020/04/index.html","2d02fcc91ea6cb7e9139b6a18acd24bd"],["/archives/2020/05/index.html","c39c394cf8be6e22890411db0a72a59e"],["/archives/2020/06/index.html","8ffadc7b2a7a263d2b851757d9b08f0d"],["/archives/2020/07/index.html","cf498e4fe4c549af6a6338b261cd7da2"],["/archives/2020/08/index.html","08bc27a7be29bd535c75c84aeacbbfe7"],["/archives/2020/09/index.html","624a7128710c4cb3f14fa985e21734ed"],["/archives/2020/10/index.html","16e7e1a58805d429be3c3caca32632ae"],["/archives/2020/index.html","4a4e047abe3baa4b5f52846f42d8fc59"],["/archives/2020/page/2/index.html","4ec4b8502eba24115d7c881522d3a67b"],["/archives/2020/page/3/index.html","da091895deafa11cc658689af80a02b9"],["/archives/2020/page/4/index.html","3e0faa795e6ba03522da56ef2b1a931b"],["/archives/2020/page/5/index.html","d1b821fddb2d3e5b31730aae3f3c3394"],["/archives/2021/01/index.html","1cb640fbd5106d8ba6f8e3bacc8d43d9"],["/archives/2021/index.html","bba68a2f74c0e2e38a69e9a624e8e727"],["/archives/index.html","810be650fee06610b42414275883e706"],["/archives/page/2/index.html","810be650fee06610b42414275883e706"],["/archives/page/3/index.html","810be650fee06610b42414275883e706"],["/archives/page/4/index.html","810be650fee06610b42414275883e706"],["/archives/page/5/index.html","810be650fee06610b42414275883e706"],["/archives/page/6/index.html","810be650fee06610b42414275883e706"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/bb/index.html","6330a1e8264a8b4c724ca4026fcb1ef9"],["/categories/C-C/index.html","53d55c546d1682896553065c91c3999e"],["/categories/C-C/page/2/index.html","cbf3b742f592d7c9befcbda291b22800"],["/categories/C-C/拓展学习/index.html","5328512c053d2c9a7374f6d388e4877d"],["/categories/C-C/操作系统/index.html","3e92bba78001d4de297a8203fb166fe0"],["/categories/C-C/算法设计/index.html","cdffa6028e7533a7fcf1984c086b5d9d"],["/categories/C-C/编译原理/index.html","b333d0d5343bf70634385193bea74af7"],["/categories/C-C/软件工程/index.html","fe2dfb9bb71beea0dea92f479b9c3e31"],["/categories/C-C/项目/index.html","98052e0c5aea98189cdd1cc305ed5bd6"],["/categories/Java/Android项目/index.html","a1a217f9278aca011343747f3759138d"],["/categories/Java/index.html","0a52934b7d7af794b73597889bfa228a"],["/categories/Linux/index.html","3981761cb37dec5c89bea2d1df67f7a1"],["/categories/Linux/上机实战/index.html","cd925b761f36be214d920856c80fd319"],["/categories/Linux/习题/index.html","4f4a4e9de0d32de0e707e54c54f7c1c2"],["/categories/Linux/拓展学习/index.html","8cc94eb205a5362d31d9b6e1e950e280"],["/categories/Python/index.html","f31813544e70eceeeebbdf7df92b5683"],["/categories/Python/爬虫/index.html","6a45880de24199a9b20b08c62e6b40c7"],["/categories/index.html","06511c0e3bff7093afec81f8948d8f42"],["/categories/交换原理/index.html","919282a747de5665e5f1bed364c643dd"],["/categories/交换原理/实验/index.html","a6fb7f13b910be7cf8bbe1c47d4cb8d0"],["/categories/其他/index.html","60adc3481e1c2b7577ca9275a0436da4"],["/categories/大数据/index.html","d515999beabb2b47b8003ea6b725126b"],["/categories/大数据/习题/index.html","aeb067a154a088f877ad2c49eca2602a"],["/categories/大数据/实战/index.html","b82b2ae5d60b13710ab10eaca45c0591"],["/categories/机器学习/index.html","5b8d2d1d6df55f21ceba6797cc475b51"],["/categories/机器学习/实验/index.html","6df0a837c7c09f5d3b004968f35f7e21"],["/categories/机器学习/知识拓展/index.html","9d47e66f7d8abcab1bc4f29eb8f6a104"],["/categories/现代交换原理/index.html","f0d241721b690c4950a1051cf1faee0b"],["/categories/现代交换原理/习题/index.html","13102a4e96f75dbcf20f25f58e3a37f1"],["/categories/计算机系统结构/index.html","170e6c79ee6221d564235244fb3e55c7"],["/categories/计算机系统结构/实验/index.html","1500baad6caebfabccb252ac8d75c454"],["/categories/计算机组成原理/index.html","22bf952041b7e1677a3bd07c2f6bf527"],["/categories/计算机组成原理/实验/index.html","e14bc2d2058354864086fb54fd3837c6"],["/categories/计算机网络/index.html","ae6798c2a763bc2ce4c5335bac862f56"],["/categories/计算机网络/实验/index.html","642ad0e5cb5db54c70b7fe5aa819b4b6"],["/categories/集锦/Android/index.html","1e3a1898dca01d58b8aaca699bf1c5e6"],["/categories/集锦/CSAPP/index.html","713510ee73adc897b76b5794618385c1"],["/categories/集锦/Python/index.html","b190e7373157a343f9c8b3ecfd40369b"],["/categories/集锦/index.html","b1ce9408d7b453c9e37c4bd090b56eb5"],["/color/index.html","3f627143356419f7f54e1443b3536f0d"],["/css/first.css","ea01aa1635810499a5ade558f4f81d56"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/style.css","6bb0e006bcdf6e96b6708cbc5b8f868a"],["/friends/index.html","29025aa0f816beae83be135b47456a37"],["/gallery/index.html","cac0a9f9094373909cca2398b08a7aa4"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/periodic-table/index.html","4c31220b3c8c1d35b1128df43b2c9dc3"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","9af8328cf2e28a1759f809980a738cf4"],["/js/aplayer.js","6e605f0855251e101d3024646f3eac60"],["/js/app.js","1948329f2fd7e750ade4bdc49138c09b"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","f1f45d2fdae2ff46b0f130bc48a476db"],["/page/2/index.html","9a7d62c5ad771ad398f187b788d97953"],["/page/3/index.html","d9e08bcd274cc5ee26c746d25c384da5"],["/page/4/index.html","2803cc077fdeec30587f0e081003db6e"],["/page/5/index.html","b91f033c4b445beaaf312d6f885d46dd"],["/page/6/index.html","77e76ce3ca81a76052bac05bad39523f"],["/shuoshuo/index.html","ed9b45e77d22a6e612dae8f1fd4d4e5c"],["/sw-register.js","39749366bda4a892ae3878069b0df453"],["/tags/AI/index.html","6456e25696906b58f1ab87142fb19f8d"],["/tags/Android/index.html","ee1f348d873366a95112a8883a0b0c39"],["/tags/C/index.html","afdf5b5c8ed0268224c2d814453f6c3d"],["/tags/C/page/2/index.html","a81aba86ef4fa3b5504eea499544d6d6"],["/tags/C99/index.html","0fc6c0db98b8b331a55f7b9e5d39368f"],["/tags/CSAPP/index.html","e611a67d6f61ae713f48161504a27b82"],["/tags/DNN/index.html","8c65eb4a4643456d2bd54cbb02904d06"],["/tags/DNS/index.html","7fdf51e5de3b72db51530b2ff3f0ec35"],["/tags/FPGA/index.html","11402a0a8e97985aea08547d811a084b"],["/tags/HDFS/index.html","c8dbf4bc9518ea680ff76631ab5dbaa1"],["/tags/Java/index.html","4f0d41a24153e3b1042a6a9b5a85a93a"],["/tags/JobShop/index.html","28c579446655a3c9b6a1ca950b86a035"],["/tags/K-Means/index.html","451f6e1127a8346b129c28b96862d805"],["/tags/Kafka/index.html","0d7dcc54153b00d4fa7d82f55f938f96"],["/tags/LL1/index.html","d1d42de9be9a84006764fc74ddd4cd3f"],["/tags/LR/index.html","23ea009b3eb2c169c54ce6cf58908a38"],["/tags/Linux/index.html","8dd0ce17369a17ecc090c4d26e3c0158"],["/tags/MIPS/index.html","4c524a381a9b3c165685b5d649b1b4c6"],["/tags/MOOC/index.html","2b208624cb99d49a76125a0da6d34ba7"],["/tags/MPLS/index.html","10af870e59da60b5195b50bffbc5360e"],["/tags/MapReduce/index.html","8c7f723c53214c90e1650e4f67025a97"],["/tags/Matplotlib/index.html","d5e3520cba5688398eef95d966c63826"],["/tags/MiniSYS/index.html","e216860d9e7a916b720043b5b4919899"],["/tags/Python/index.html","3dad47dc23eb9992a0b4df2b2812747b"],["/tags/QT/index.html","fcd0718cef877f7c1df5e545709769c3"],["/tags/RNN/index.html","c5a68a1a7f0a76cf6ce88f6f7621a39d"],["/tags/SIP/index.html","c122079655a4ef5f5c098f11b7114ada"],["/tags/Scala/index.html","4d3349e4600727db988f1366e1576746"],["/tags/Shell/index.html","97467c9997c9e44e51597c0850a09424"],["/tags/Spark/index.html","b45be446957f321882e7003aa7dc7c71"],["/tags/Streaming/index.html","46269e36ea1a8ba8650d9262ae1a467c"],["/tags/Struct/index.html","eb4695c95e5e13e9166170af11a9f58e"],["/tags/Verilog/index.html","34ed1360c4e1000194cfb364a838849d"],["/tags/first/index.html","1dbae87b479aef090ec49c60555a699e"],["/tags/iPython/index.html","d60db1c2d0bf77dcf4b36c43d6f9c5ef"],["/tags/index.html","9859442d290b86a46fed0adf5d5bafe7"],["/tags/ls/index.html","1df2fdf9057c0f53032528ee5932a6fa"],["/tags/习题/index.html","33d8ff6b5c63df92523c5d337d9cdd27"],["/tags/交换原理/index.html","46cbb13fbbf75d8cd1fb70612e9d666f"],["/tags/人工智能/index.html","fedd185c7e7c4cc86225e66779a93865"],["/tags/信号量/index.html","1b8f54a3ae30fe65a5d190cb9bb38ac4"],["/tags/内存管理/index.html","ff7e432a8a3d500b6b97cb1616bdd9fd"],["/tags/决策树/index.html","4a3466d88a2cc63edcf7fa1c6c3e0da6"],["/tags/分治/index.html","360b2405a83703272a15cf5e2a32d390"],["/tags/分类/index.html","1e4880b7612d013aa7804a55000a50f4"],["/tags/动态规划/index.html","900fda4cbfaa3b5ccf6af0ec6c197629"],["/tags/华为云/index.html","5cb9d72c6dc3a6983f4444501a2299b9"],["/tags/单词计数/index.html","97a87e62b714aa7f44f5cb656e9552ed"],["/tags/可视化/index.html","a6988ba3c7b782b70c2094cba682f1b3"],["/tags/同步互斥/index.html","205c006e573882ec4b85bcccfa2a0985"],["/tags/大数据/index.html","c27980068af1e9c95b83f560a9cc605f"],["/tags/学堂在线/index.html","d2240483bfb1d086ee2c54400e5683de"],["/tags/实战/index.html","dbed15fbaa6028296f2c2d91b308d00f"],["/tags/实验/index.html","fa29f49534d4fe337b444faa6b370818"],["/tags/实验/page/2/index.html","288eceb1dd74ff6b73c91dffebfe3372"],["/tags/小游戏/index.html","9f65720a8d19308252be9677736448e4"],["/tags/工程/index.html","314a7618683c84a5847fd01a52364cb5"],["/tags/工程/page/2/index.html","f12bae49e465b0c5098d966878c88151"],["/tags/手写识别/index.html","4668178c9cf2f70df347a192fe17a64d"],["/tags/拓展/index.html","3cacff36a18908edabbb89c3130273db"],["/tags/操作系统/index.html","bf3e6df2d3b06f9c7922740e247881d4"],["/tags/数据处理/index.html","b21152ca0fb57fa34198502f32512161"],["/tags/日志分析/index.html","c57201bea0a86a4405dc4b3daa83a6ff"],["/tags/易错点/index.html","7fe13a43285d7236953500694e4bc89e"],["/tags/机器学习/index.html","4182369991aabe5b2c8d237ba04e0491"],["/tags/条件熵/index.html","bb0352937702653691ca287fee256313"],["/tags/正则表达式/index.html","e92543c976ca8eccbe7130fb8bbd8b6e"],["/tags/汇编/index.html","53fb68a37e48e89cbb1ab09fc7eace89"],["/tags/流计算/index.html","42efd104bbd499e06edb9799493ee65b"],["/tags/爬虫/index.html","799dea49858ee89e265861cf06c8d373"],["/tags/现代交换原理/index.html","0215f879ab9299e7db416293b40384f6"],["/tags/生产者消费者/index.html","f7b503c4bc6dd186acc61f38d9cddbca"],["/tags/知识/index.html","2bf5f86fc691a45bda99de872f6500ce"],["/tags/算法设计/index.html","206e899a9b43aa007e8f981687513537"],["/tags/线程/index.html","b73b2d8809f68ef94dd3729b616435b9"],["/tags/编译原理/index.html","502d7c41946c0ea04ec7022379debedc"],["/tags/网课/index.html","09b935b8d206282f94d44963b95399a2"],["/tags/聚类/index.html","b181e6514ab8aea35be1824f4a1fa178"],["/tags/脚本/index.html","5b37335518a38fc8af061913b68a2540"],["/tags/计算机系统结构/index.html","48f4c7f3b08c1763eae9e4db742627d6"],["/tags/计算机组成原理/index.html","ddb14d7210df2af604d6d31d1d86a20f"],["/tags/计算机网络/index.html","50a4285443ada64135d4d864763efdde"],["/tags/词法分析/index.html","332a58ed5c0b72cbe25e1a0160220f9c"],["/tags/语法分析/index.html","da6c7a67c09dcb008677d811631cef1d"],["/tags/读者写者/index.html","8e56a7cdd97d9f60a3a94d10082c5f6d"],["/tags/课程/index.html","7fdf75606f8b0e39eb3d5f7e53df65ef"],["/tags/起名字/index.html","21d66e68ebed8c15f8b66d14be2469c9"],["/tags/软件工程/index.html","65ce09a452c05cd4ecec7623d9177d88"],["/tags/进程/index.html","c85d878a76030b2b033d0695bfb9e101"],["/tags/通信/index.html","b80888be3929864d55fc6b484945950b"],["/tags/遍历目录/index.html","2a42b6988088b9728f4ab43d2eb673ab"],["/tags/难点/index.html","1d052a849c919438f0cefc310c16f942"],["/tags/项目/index.html","59fc73ae8973d000f6185a0f184aa23c"]];
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
