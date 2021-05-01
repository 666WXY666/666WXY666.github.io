/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","f66a2770701b1fc858251c17a5ed4a81"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","70ccfb3aff7ead356300b51e295b0482"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","006a59344595542b25ed172fa4c0a9b6"],["/2020/03/26/计算机系统结构-实验1和2-遇到的问题/index.html","359b79f16c3cc1217b696bafd9695319"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","c69e65d528beaa7ad9d91f27a130935e"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","e3214effad3e37db78d52b1e2bdbb4f3"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","feabb6d58052c37f2235b5170427ce63"],["/2020/04/18/机器学习-知识拓展-条件熵/index.html","3af6d84b613be2382263e39f264f5bb2"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","e733e7b5be725377f5ee03af9c346bcc"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","f18000e216f476a2aeb217b293ceb6f4"],["/2020/04/26/机器学习-实验-决策树/index.html","db775ef460885f590e29eeb78c96cfe4"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","3cd2abc2d87f031f88038c15d60f6447"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","1496836d43ba075273e6f556a61343ed"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","0515215340c2f2c1ee4de2a27f566c6d"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","8f1b0257b761e09fa5b9ebb16f923121"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","96869f8b52b3029356fb93fa5cad2e2c"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","f22b56a1978701e9f3813631d7a814cc"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","5966f8cacc697794ef7eae5b88795dbf"],["/2020/06/11/机器学习-实验-DNN-手写识别/index.html","e92fb58e18c1dc3a1a4a1c280cffa09b"],["/2020/06/18/大数据-习题/index.html","000020b00e2daa43d801189a7174bfd7"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","dde28dde6e0541e12d177ddaf5fd9180"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","cea2452912911dc82ebb82d58ad38168"],["/2020/06/24/Linux-拓展学习/index.html","6da12d191690641d9d1f6746c60b1501"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","946444cd0266cdc3169f950e52ad19a7"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","b180385ce14fc1a837c21e51bcf9bfea"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","904e99877fc74f593e0b177dea749b5e"],["/2020/07/15/C和C++的struct使用总结/index.html","f637b1cdcb64ca5c4285a4365ec2947d"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","ec42c2515cdb57376ad598fa20fe1ead"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","6e52c022948a0bec35995d46d9df57d5"],["/2020/08/10/机器学习-实验-花卉识别/index.html","b5e34ff5db34900110dc74f55bb55f33"],["/2020/08/15/Python-项目集锦/index.html","93fd1ab74062ac6afaf97eb823d88159"],["/2020/09/01/编译原理-词法分析/index.html","d2d6b65398e10ffa295923c94e8d2dc4"],["/2020/09/02/编译原理-语法分析-LL1/index.html","13efd1019855735ab03eaf6fcad09023"],["/2020/09/02/编译原理-语法分析-LR/index.html","7e35b6abf9fc56ae842c87a2e40af2cd"],["/2020/09/03/操作系统-内存管理/index.html","35aca6b0e568ae709494ce0aef920bfa"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","064e58ab4c2f0787276c83eb5ed4f743"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","d4ac2a07882fdff43d97d712739eba98"],["/2020/09/04/CSAPP-实验集锦/index.html","d6c1ac239e8fe4c1d5c56a12051e9c57"],["/2020/09/10/计算机网络-实验集锦/index.html","8fdfe55b338d3c28bcd8a46614aa6e6a"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","a61b9aea591c5c5e5bc5eb7fa9d58c5f"],["/2020/09/30/C++工程项目-JobShop/index.html","f8b8938df50cd5cacac1abc738a032eb"],["/2020/10/09/交换原理-实验1-时间表调度实验/index.html","2231d586b914be10eddfe1f80fb4396b"],["/2020/10/09/交换原理-实验2-摘挂机检测实验/index.html","37cc7490c932c589f938285415aec322"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","636be0efd89b1a8fa82bec07e8c23142"],["/2020/10/09/交换原理-实验4-拨打SIP电话/index.html","d417f581563008336b7a55d45546cde0"],["/2021/01/04/Android-项目集锦/index.html","6422fc844005019bea2ff7d794eb939d"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","5b80f0e293f0d38c6039571943cb86dc"],["/2021/01/04/C++工程项目-travel/index.html","d63464559c463a27ec32505639a4374f"],["/2021/01/04/算法设计-分治-最接近点对/index.html","94a400c27bdbb3460b58a2b55e85a99b"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","44a3c54971bdb43f6dbcaa66e4d953a3"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","c5b03099834c106282d5040a9c946cd9"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","0d5b64c82bf8d73179c34d5e9e858562"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","674321bf6f73d20b731bc7c8737c5ac2"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","754c780f1461c216921e88e44fa1084c"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","e781bad772cd1a9868668aef079c3850"],["/404.html","002caa771ceef93d7ea51fc06f18d043"],["/about/index.html","9e4e6fc2867974255af16a3829e87c5c"],["/archives/2020/02/index.html","b916fbea8793ebcfb6eff7a2678ecbbb"],["/archives/2020/03/index.html","4d104857a30280f1c578fd4af72de1c7"],["/archives/2020/04/index.html","424cb38df54c684a3f8c68904d182c66"],["/archives/2020/05/index.html","96f8c5e606db28343860a5cb24045db4"],["/archives/2020/06/index.html","7842241d0bc5de884a648a24626ba30c"],["/archives/2020/07/index.html","83fe27df1100cdbfe012e2c65d35eb80"],["/archives/2020/08/index.html","8fc62dcd8be7eff760c02c5c1c0345a0"],["/archives/2020/09/index.html","677239b25fee6ea74be45a097c282518"],["/archives/2020/10/index.html","9964df3f6c2a26db8bfb2051ff6d5aa6"],["/archives/2020/index.html","5a15c39ceea42f1b601af489503adc4c"],["/archives/2020/page/2/index.html","5f186655848c5fe50d08d6ece24455af"],["/archives/2020/page/3/index.html","d03e198483f375808632eae56b4c6e59"],["/archives/2020/page/4/index.html","66851b75a7a7fe74a9643ae3c60de327"],["/archives/2020/page/5/index.html","356de7427e98e1ec39e8f0b3f208e2a1"],["/archives/2021/01/index.html","ade59a23ff8cb5061b1fb6016c67647b"],["/archives/2021/index.html","6ec47c3c00d16d6188748dd3b317b8df"],["/archives/index.html","4ac24538a73a6650d0a722f048138af9"],["/archives/page/2/index.html","4ac24538a73a6650d0a722f048138af9"],["/archives/page/3/index.html","77981dd71575fa025915dd1562f29396"],["/archives/page/4/index.html","77981dd71575fa025915dd1562f29396"],["/archives/page/5/index.html","77981dd71575fa025915dd1562f29396"],["/archives/page/6/index.html","77981dd71575fa025915dd1562f29396"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/bb/index.html","ea38ecbe8bbf803983a8f6abf158ce28"],["/categories/C-C/index.html","249e2655f7319aa2cfc3d631404e4bc5"],["/categories/C-C/page/2/index.html","6f7af3df95dff68c2dd245c07aa282c7"],["/categories/C-C/拓展学习/index.html","19c4c522fc139fe8a81bb1f2a1c9d50d"],["/categories/C-C/操作系统/index.html","88e551fc5df41240fe86f41efc4d82ea"],["/categories/C-C/算法设计/index.html","9b5b40f01a0a33addc388c1a8cd4c9ec"],["/categories/C-C/编译原理/index.html","d60aacbde5e90281b483d98ee5f5d2b7"],["/categories/C-C/软件工程/index.html","f9241ac24f5f03b9a378151ed9351c58"],["/categories/C-C/项目/index.html","35683f61a7ec96c6d53de8ea403587d4"],["/categories/Java/Android项目/index.html","85ba6b198b7e9ee239d6118a89375278"],["/categories/Java/index.html","c7ba3954774f0c16bdeed26f7a13ebd6"],["/categories/Linux/index.html","de6f10bade561e4ee13689af5362df68"],["/categories/Linux/上机实战/index.html","36410bd543e7d97248eef762833df81f"],["/categories/Linux/习题/index.html","9465b30170d20a0528783c0a64d8b450"],["/categories/Linux/拓展学习/index.html","2b6f3824cd44aa5977e6534282b83ed0"],["/categories/Python/index.html","096124beb8745aaa0f1b89bc7043fcee"],["/categories/Python/爬虫/index.html","874aa8d2e1bc33d547207f78408da960"],["/categories/index.html","9618969eb6c10f7957d2d45450ad1e1f"],["/categories/交换原理/index.html","4287bb4c16b7312b4b0b51058448711f"],["/categories/交换原理/实验/index.html","83c1e0ea778b770faacdc7d37419b856"],["/categories/其他/index.html","73f384ff57690f88e6173d8e83a56d85"],["/categories/大数据/index.html","f1dc629e498c3a2fe367b93ee513c91f"],["/categories/大数据/习题/index.html","b583399c59d8c99e7e442a838029ea5f"],["/categories/大数据/实战/index.html","6c88f8347edd78e4af4d0c2500ea3818"],["/categories/机器学习/index.html","acb0a1609708048b91069f9d30e328de"],["/categories/机器学习/实验/index.html","de2c41203358a5ba5002ae76a750a409"],["/categories/机器学习/知识拓展/index.html","5b94ea771549590b9d2164ff488ebb26"],["/categories/现代交换原理/index.html","9794636ab279ce95d827bedb2f5c37c5"],["/categories/现代交换原理/习题/index.html","56b2f7fcf93390f2d5e81d8ae53c8a46"],["/categories/计算机系统结构/index.html","0d26e2834ac75080574195451574b361"],["/categories/计算机系统结构/实验/index.html","78a5401501cde6cbdcf2a30184f347a2"],["/categories/计算机组成原理/index.html","e27433cc6b0142ab710d32a104727364"],["/categories/计算机组成原理/实验/index.html","19b16a186357e60af20c0c2b106828df"],["/categories/计算机网络/index.html","57e216e959208f05b718dc1c7b382103"],["/categories/计算机网络/实验/index.html","d91d170bbf556a2e5d02c853af4bc209"],["/categories/集锦/Android/index.html","b592353994cb38a2d82f15297dec7bf0"],["/categories/集锦/CSAPP/index.html","a5b8ef1bf9446f37439c7f418154d2fa"],["/categories/集锦/Python/index.html","034b919139528332bfe61314a9a94d80"],["/categories/集锦/index.html","9f87d5d49b4b7655f1b38599d093ac2c"],["/css/first.css","ea01aa1635810499a5ade558f4f81d56"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/style.css","6bb0e006bcdf6e96b6708cbc5b8f868a"],["/friends/index.html","eb7347e9f252a7c55d52a42f2573227c"],["/gallery/index.html","63f4bc7639ebb10460b077618443184f"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","86f7b8626a53b38089f28aed3ff81351"],["/js/aplayer.js","6e605f0855251e101d3024646f3eac60"],["/js/app.js","1948329f2fd7e750ade4bdc49138c09b"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","2339576f2245345542a6410cf67534c0"],["/page/2/index.html","36b2e40f27f73fe10fd770f10a22fffd"],["/page/3/index.html","2df3c4b27251b105dea84edfbae61f99"],["/page/4/index.html","104c865244725cd01ab5ac9bf89c2a89"],["/page/5/index.html","803dc9391f8b4fa78620746f8e747714"],["/page/6/index.html","777c5f0442d857de681230aa431e357d"],["/shuoshuo/index.html","31949761b2a523e37ccca00fcbe1b469"],["/sw-register.js","746f7af439211d8d875c20d3e6e5f33a"],["/tags/AI/index.html","6703f848a0be33b764d25f05fa18a9de"],["/tags/Android/index.html","09edeffca65bf51d96507c4b81186f4a"],["/tags/C/index.html","6d80e6fb442bdb49b278b20d1b138b5e"],["/tags/C/page/2/index.html","d20c9db079fac79cb9f74cd5b4007bce"],["/tags/C99/index.html","d7a513a2c9054fea3b00dbbbed8b447e"],["/tags/CSAPP/index.html","a34a14a1756c7267ab212bd065c35e19"],["/tags/DNN/index.html","46ea1c4cedf57d2dff5eb3fc4a877e27"],["/tags/DNS/index.html","28a6a9caa9c27289d996d4b478a2b3a2"],["/tags/FPGA/index.html","16e9b38a60e42d16c96e0f8e1f88358d"],["/tags/HDFS/index.html","0d3c6d67bf95f73b70bc913acfc1a71e"],["/tags/Java/index.html","d740736306077e71aa764a082c8ecb0d"],["/tags/JobShop/index.html","59efa067ba2ea4d1c390c33853c79832"],["/tags/K-Means/index.html","c42902f8158536df6b90dd78b079b03e"],["/tags/Kafka/index.html","1b91e31ea205ceae208c012094f5db4e"],["/tags/LL1/index.html","8111620b7957b0074a0a2d7b4fa426fe"],["/tags/LR/index.html","e7264d192c9bc8b44f50018b123b6a43"],["/tags/Linux/index.html","61fca1527eb0cfe8bfa34dc375297247"],["/tags/MIPS/index.html","d9c9f7e218bd2751fa971b687b5e91b0"],["/tags/MOOC/index.html","ef3cd6e8911bf00d0c789375674bc83a"],["/tags/MPLS/index.html","0b8a81d8257675fa0bb8597c334b145e"],["/tags/MapReduce/index.html","1883a524557a32efb638ebb58443b716"],["/tags/Matplotlib/index.html","5b2f361e02132a4ce64cbfbcb5861c19"],["/tags/MiniSYS/index.html","a021a7a2298ce61f3bc171348072f375"],["/tags/Python/index.html","fdd6e78bc9773e553d2268208052bb6c"],["/tags/QT/index.html","bc96ea4874f373854a97fa4674e27c68"],["/tags/RNN/index.html","aeace9b5599de251827c187d98c585d0"],["/tags/SIP/index.html","85143a652f46eaa466bb7acb4368a593"],["/tags/Scala/index.html","2f54f8de09ed834a999e139d4b369c1d"],["/tags/Shell/index.html","26674b064431e06e5dfddf0fe554b4fd"],["/tags/Spark/index.html","d64d35a7c8dd74e2a051061b214d3060"],["/tags/Streaming/index.html","1e720784c465c2f06202c1fbce07fe9e"],["/tags/Struct/index.html","c239a45e0d227069dbe29a5d1af6e3ed"],["/tags/Verilog/index.html","2a823a08d2b6fe9b7df083097e88237c"],["/tags/first/index.html","33dbf78ebe5badb122d091520f71ebbc"],["/tags/iPython/index.html","8af8336bc18de0277e641c45b13fd4ef"],["/tags/index.html","5740dc9137a7c1dc344ea9b166f03d76"],["/tags/ls/index.html","0120291d0ffebc9af57f1920bc80dc5b"],["/tags/习题/index.html","60e0a39fb44e6147088f05f0b57a35d6"],["/tags/交换原理/index.html","f4952a369dd810a9a6a716dc2c9e6e53"],["/tags/人工智能/index.html","4d2488d7a4e389626631442186554d1f"],["/tags/信号量/index.html","95d11fd7db42196a65e944d1c3d4d0ed"],["/tags/内存管理/index.html","b60d899e5d29180e9dad5db0c78e3983"],["/tags/决策树/index.html","4f88801ba5b088915e4a3e6b98dd1dd9"],["/tags/分治/index.html","91f9aeb98e02ed40104afe70ce96a3b1"],["/tags/分类/index.html","9ab3cd9f5d177173833b8fac23aad082"],["/tags/动态规划/index.html","e350e15063a3cc2633af5530f8b6a155"],["/tags/华为云/index.html","a7d90ed22f20ad11da77eec7c0e4ea25"],["/tags/单词计数/index.html","3ab4c8951bd963dc9fcadef18c95ef82"],["/tags/可视化/index.html","a94cec0c32e75f779606cc969e21872f"],["/tags/同步互斥/index.html","84f045559f430283ac7bca3baea03830"],["/tags/大数据/index.html","5ecdd61626893d50927287fa1175612e"],["/tags/学堂在线/index.html","fa71f84f4504239b52f3fc1f1311d7a5"],["/tags/实战/index.html","144004eb3a766d5e30f22fd74e3d36a3"],["/tags/实验/index.html","f3b46690957e29d2a2d5cb929f2b2776"],["/tags/实验/page/2/index.html","f49781e700fda10f12d6778a703415d3"],["/tags/小游戏/index.html","b5bf72dea542c5022add1e1c090e256e"],["/tags/工程/index.html","23c88732c1ce031e7cf9bed45ef74e83"],["/tags/工程/page/2/index.html","b706a15b2ef6652db41ba16449b61965"],["/tags/手写识别/index.html","29a7b7fe3ca5b5e03d6ab7f52311b438"],["/tags/拓展/index.html","c485cec682cf36aa59abfc780cee280e"],["/tags/操作系统/index.html","623d5b8d715e9edcdc4991905013d544"],["/tags/数据处理/index.html","0c208e75964a813643cd779bf30c71a7"],["/tags/日志分析/index.html","107ef728c43a46ce55ebe4a6ed1ce9f5"],["/tags/易错点/index.html","fb2b5a197f19b14e959708e0df98270f"],["/tags/机器学习/index.html","f8130dd4223ccfd8fa9f7d6d8584d30f"],["/tags/条件熵/index.html","ab4fbf4c2c73685086737737c39dcfc2"],["/tags/正则表达式/index.html","aa4f76cb3321543feeec77f74030f493"],["/tags/汇编/index.html","15bc824052c3961eff26378f8a4a4847"],["/tags/流计算/index.html","812c1ae7a7043d5e4796e870ab3e8e25"],["/tags/爬虫/index.html","989bdf6fc05cdde6111f4a8603791e3b"],["/tags/现代交换原理/index.html","31ede1b4975aa9bc3f991820d071237e"],["/tags/生产者消费者/index.html","fb891826e451a04ab33dd814abaefd1f"],["/tags/知识/index.html","f2cded189fed31c0ec261d2ef520a17a"],["/tags/算法设计/index.html","b811bf996dfc62413420284b94d1da82"],["/tags/线程/index.html","55b95e0a242aa5e9a884b5a5aae92494"],["/tags/编译原理/index.html","06d7b612bdd3424958fa170a3284a5b5"],["/tags/网课/index.html","5419af8094bb49e94db4949dfd293992"],["/tags/聚类/index.html","b1e0709adc1f1a13eb8075810bab0ccb"],["/tags/脚本/index.html","7773eef6a9bcaac80388a7bfd7fed1ee"],["/tags/计算机系统结构/index.html","99833c2738a4ee92ebcecb078e7577f3"],["/tags/计算机组成原理/index.html","4735cfb399831ed2d1aef3d3136f1d63"],["/tags/计算机网络/index.html","eefbbb90a328789d866cab2c4155d6c7"],["/tags/词法分析/index.html","d65aa9562afa05343f67e1e7e3e5ddac"],["/tags/语法分析/index.html","7e6927c2cf474c3c9db059e26d105b9f"],["/tags/读者写者/index.html","d7eeba5a6affa395d2c824511fdcbe69"],["/tags/课程/index.html","be4f6e12924b65f9200ea124e9b5febb"],["/tags/起名字/index.html","0a3058189f089332f21e4892ed1f7827"],["/tags/软件工程/index.html","929f370a302827b7197bafc1a8bc7e83"],["/tags/进程/index.html","aa50a045ebc4a76bf810d66cfef4fd16"],["/tags/通信/index.html","d9e58cba889b8025152a90690c7ee6c7"],["/tags/遍历目录/index.html","742ec77f418da13a55278ff9f137cbdd"],["/tags/难点/index.html","763d465c834fd84a474fd2ba572ff073"],["/tags/项目/index.html","648935f5bc1526711308e66393b94b65"]];
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
