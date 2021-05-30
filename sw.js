/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","45f122092e6ad43c5b20c59e83e36121"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","5f7bfbe6cfba52cca8380949b29f19a4"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","bafafb6711767eee94171437b89a6876"],["/2020/03/26/计算机系统结构-实验1&2/index.html","8883fb1b5f1dbd37cc78a5180af5da8f"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","ed4baf4a4abbaa5e6ca8023ad7e72999"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","d1e63dc286479f5098185125891029df"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","4b264a5b2ace8bec6700f5e1455658bb"],["/2020/04/18/机器学习-条件熵/index.html","546193ef04d01f6b6bb8ef5754abfc5c"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","5e32c376291dd51bb43faa6f355a800d"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","221f6ccca4a7da5a2b67318da796bb55"],["/2020/04/26/机器学习-实验-决策树/index.html","0b6336b8f7490f0db800dae5abd92f50"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","a121dcab59d93879945d103b69ea9dc4"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","6af9c34b687facf009893c0f71472641"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","fe3a89297fe2ba91589175549a0d33b0"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","78531f9927c39b99972f00f5e28a9666"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","131004a48a45b50c8301d74679837f6f"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","575df084258d54915926c2c13e9337da"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","a6b2bb1d26c0314eef8718dd00cad7a6"],["/2020/06/11/机器学习-DNN-手写识别/index.html","388ebe0d7e0699eb695e622484adb112"],["/2020/06/18/大数据-习题/index.html","58b687b031d63c39eecf2f76707368b2"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","78048a11517e7e04b11f27c68a9d2b3e"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","a7246d0b28c0740884da5907cf1e5c2e"],["/2020/06/24/Linux-拓展学习/index.html","ddb8e5b63baa35605fab59f35cd15ac5"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","1599231b05aaa4ea2a02ec04f838f338"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","4446c8258c22909d76f1196804e44ed0"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","8e853277360271a9a914e36a995a06e3"],["/2020/07/15/C和C++的struct使用总结/index.html","fc9f199ca8a16e00634c6163ff3b0fbb"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","290e72e707d41ce8691095cc7cb5b683"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","0fe55cfec00fec0aba9eb13f02470410"],["/2020/08/10/机器学习-实验-花卉识别/index.html","0756f21cff54dc33e8cb40477b06e887"],["/2020/08/15/Python-项目集锦/index.html","c39052fa0a4eede166e3195cc1d49b5b"],["/2020/09/01/编译原理-词法分析/index.html","14fc30c90924f97def1f8bc069bca3c7"],["/2020/09/02/编译原理-语法分析-LL1/index.html","d0f4a2e50470a470dfc30a04b97118a6"],["/2020/09/02/编译原理-语法分析-LR/index.html","e79dcf866e11efcfec7367591a5413c1"],["/2020/09/03/操作系统-内存管理/index.html","5163e82e75413eac09f16cdc49ef7edb"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","07f623993443d7f3e024283596cad41e"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","76e45cf125b9d896fae75480ef9de257"],["/2020/09/04/CSAPP-实验集锦/index.html","7764a5471c7ba096730f317a0d484978"],["/2020/09/10/计算机网络-实验集锦/index.html","9d0c1abe90a07d646e6c63f7c2197b42"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","2c2ff07b7339b5f089418ee841c897ef"],["/2020/09/30/C++工程项目-JobShop/index.html","6703201769ae6e5b54748a6fab7490ee"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","f0d4525d781a19a052ba2fe5cb810674"],["/2020/10/09/现代交换原理-实验1-时间表调度实验/index.html","0c478ce327e7a7f6cd9b3c021b3d7057"],["/2020/10/09/现代交换原理-实验2-摘挂机检测实验/index.html","955ec0d9e448b57054c44045f7336a64"],["/2020/10/09/现代交换原理-实验4-拨打SIP电话/index.html","456924db68006bd05b4f8297244b18bc"],["/2021/01/04/Android-项目集锦/index.html","3f7d8c0a9abf930631f415213ad2a67a"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","bb512ce56958077ab576145d6d62ed37"],["/2021/01/04/C++工程项目-travel/index.html","c5e58ca7a1cba51746f0363d63b01f5c"],["/2021/01/04/算法设计-分治-最接近点对/index.html","2f177c863add05f3f9f7981d87c32e66"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","c13badf29b6198545f5aa04c23d801cc"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","d0afee08a4a41ed340d932f5cd592dc2"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","cde193be5e96c08bce2ab84046f47f84"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","cba23d0e29a70991ca89fdcee158a4ea"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","38554ac3ca831c264b8bdb897a7788f4"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","734f142ef90e1f3f143ecbf6c9cae153"],["/404.html","2394b59b860bfc1b2a641e2bc2300ffb"],["/about/index.html","6e450ae2bdfc3ed2b38a581e08ed5cb9"],["/archives/2020/02/index.html","89e37ccbc6cc950f6f33c953f7407852"],["/archives/2020/03/index.html","02db1cdb2454b36312b33e5261b2be78"],["/archives/2020/04/index.html","de6a01b7fc96497f1e523bc2cab488b7"],["/archives/2020/05/index.html","57cc299c9053190f4d56c3f9256e79a4"],["/archives/2020/06/index.html","f190ac2a2ae5d55067e439f90869c751"],["/archives/2020/07/index.html","41ac2d5fbadd6dde2f1ec09fe6a56ff8"],["/archives/2020/08/index.html","9342fd36ea02c0c2fdc6c5a6a14c7bc3"],["/archives/2020/09/index.html","79f1cf9020676b0e2cab85cf2886d29b"],["/archives/2020/10/index.html","cd90cb6920bf9e9058ed679011dbe498"],["/archives/2020/index.html","5904469b9006cf940faaec135fbcebbf"],["/archives/2020/page/2/index.html","dba18f72f40a82f9301165b0025c3faf"],["/archives/2020/page/3/index.html","ac1da0a07490fc5f579c6907c06b55e6"],["/archives/2020/page/4/index.html","b8015dad45c7bd2187c8c38aca55e665"],["/archives/2020/page/5/index.html","aa46c31157f1935816ae6bd2dad3d309"],["/archives/2021/01/index.html","9fc7f291d0eb8a1876e3c819ede78f42"],["/archives/2021/index.html","264b71ee4435ae51ed9e11881a9c08dd"],["/archives/index.html","d270540e6a71993e131b82a9f17b1cae"],["/archives/page/2/index.html","d270540e6a71993e131b82a9f17b1cae"],["/archives/page/3/index.html","d270540e6a71993e131b82a9f17b1cae"],["/archives/page/4/index.html","d270540e6a71993e131b82a9f17b1cae"],["/archives/page/5/index.html","d270540e6a71993e131b82a9f17b1cae"],["/archives/page/6/index.html","7ac8180351d2dc5d4d6b169e32b3714e"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/bb/index.html","ddb9f23619348e18029dc62032a44d5b"],["/categories/C-C/index.html","a207452c0469ce906d9a39d8cfe15c57"],["/categories/C-C/page/2/index.html","0141fddcc83635aa97bc35b7a2a499af"],["/categories/C-C/拓展学习/index.html","ee057374f2b48eeed876a14b0fc3bb23"],["/categories/C-C/操作系统/index.html","ae60c604b2b6f1e1949aacb915046933"],["/categories/C-C/算法设计/index.html","2841f751d8c76f6ab3d075401a42489c"],["/categories/C-C/编译原理/index.html","2c5c418d7ead00492238b128582b0149"],["/categories/C-C/软件工程/index.html","1ee44ff5a3137b7afb4519903591e219"],["/categories/C-C/项目/index.html","9e2dca35a8f45c6cb62c8fba1bb6997c"],["/categories/Java/Android项目/index.html","d64b8a287360ea50333594793384695b"],["/categories/Java/index.html","e3060282cbd8b60a3a37c94e2f7b4795"],["/categories/Linux/index.html","3b0858ed590dcb7fa8e18fec308cc81e"],["/categories/Linux/上机实战/index.html","dca503c95cad24be7046018160335efe"],["/categories/Linux/习题/index.html","706d66dff202f0ab6ee873b8e95139c5"],["/categories/Linux/拓展学习/index.html","34e890fde3f05d2f2663d994bde681ef"],["/categories/Python/index.html","fbde4dd57143eb34330ed64736566554"],["/categories/Python/爬虫/index.html","31d6b9ad8095d6bd18c2c1df8f5bfad8"],["/categories/index.html","fcc22e26d715d9e6e31bbe2442b0f16d"],["/categories/其他/index.html","46c37ddf28d16e0dcf8f37718fe47909"],["/categories/大数据/index.html","ee5dddc907356a60d6d6169bc83cd95d"],["/categories/大数据/习题/index.html","59671b17c4fc401d4bd66b9fb064a5e7"],["/categories/大数据/实战/index.html","eebb3dc20e68b28f57d8d3ee99bd4970"],["/categories/机器学习/index.html","555408d33986b49461a450a4262c0096"],["/categories/机器学习/实验/index.html","ce3dbe08097efa817085cff033f2adad"],["/categories/现代交换原理/index.html","af2e2644d603e8a78ddb0502ab912943"],["/categories/现代交换原理/习题/index.html","c8c30021f6c931fe27e82df73855fb53"],["/categories/现代交换原理/实验/index.html","8d37f12c98d6514a34f93485bae5d5db"],["/categories/计算机系统结构/index.html","16dc684a3bbc5fe9e7335c01c9d445a2"],["/categories/计算机系统结构/实验/index.html","126bef4af1cb0591f9159b44a92123bd"],["/categories/计算机组成原理/index.html","923e69e47b742521e7094595e1c0c371"],["/categories/计算机组成原理/实验/index.html","e40905e90479b2b2437fa995fbd81f93"],["/categories/计算机网络/index.html","f6e1ba7a952f1a69ce006a8adb7f4a0e"],["/categories/计算机网络/实验/index.html","0723e745de2c7645dfa2f4153e19c351"],["/categories/集锦/Android/index.html","5fce5401a5b9cafa76345eb377e11e74"],["/categories/集锦/CSAPP/index.html","09819472dbc151bccd8fabaf90047bb5"],["/categories/集锦/Python/index.html","05f576cee4c8e8065593456f3faba22f"],["/categories/集锦/index.html","84ae73c46e42dfd9437e213bb88a42e9"],["/color/index.html","3f627143356419f7f54e1443b3536f0d"],["/css/first.css","ea01aa1635810499a5ade558f4f81d56"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/style.css","6bb0e006bcdf6e96b6708cbc5b8f868a"],["/friends/index.html","cbec73e07a116b4dda4ba5242212c9cd"],["/gallery/index.html","cac0a9f9094373909cca2398b08a7aa4"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/periodic-table/index.html","4c31220b3c8c1d35b1128df43b2c9dc3"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","996f8ed93e2bea30461aad2e4f492d17"],["/js/aplayer.js","6e605f0855251e101d3024646f3eac60"],["/js/app.js","1948329f2fd7e750ade4bdc49138c09b"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","f388deea1365e774ab63ff7925cf8ff4"],["/page/2/index.html","c62a41c8edd14db8b8f99089a01f1982"],["/page/3/index.html","c08be09a2c7af52ad88b3f8e479dfc71"],["/page/4/index.html","4451a068f882a192411307a4e7c07560"],["/page/5/index.html","7f2d433e8a9b113c6a2a26e147ddb95a"],["/page/6/index.html","c28fb6f22a8a1388191b7db712bce758"],["/shuoshuo/index.html","ed0938f5741afc74fbef5bec0861cdfd"],["/sw-register.js","716d1227c99ab989b09f94e2a5ce96d2"],["/tags/Android/index.html","bbcd7ede588711f16a17b994b619dad8"],["/tags/C/index.html","4fe5a99d528c072c7a4b7e1acc14aa5a"],["/tags/C/page/2/index.html","7819247b9a890189221a60b57dc09402"],["/tags/CSAPP/index.html","cecf2b00a512aa9ef540ae9bef76b851"],["/tags/DNN/index.html","98af47319367a36bf212913fbbb8e91e"],["/tags/DNS/index.html","80392292db529ee0a9fc59627cdf3359"],["/tags/FPGA/index.html","f57bd3a954c4705597a47ed0b8ba904e"],["/tags/HDFS/index.html","f0b54e7d7c8318dce393596d2f879ed7"],["/tags/Java/index.html","7f1f78d73a25f1faf0297b087ab5b514"],["/tags/JobShop/index.html","36262ab8d4a48374cc6e0b8eb50ad2fb"],["/tags/K-Means/index.html","3da8d8e0b12f1153a24e2718c0442fde"],["/tags/Kafka/index.html","9b7243df9a4ec3ce9c4d0205643df90c"],["/tags/Linux/index.html","978c5c435338568fe4f53e6b6e9ed4aa"],["/tags/MIPS/index.html","eb70642eab2e4f6ee3c561a6f3d2b0a4"],["/tags/MOOC/index.html","2f422b969fe25ec94d73f82ce16a276c"],["/tags/MPLS/index.html","e8768e73aa251c7a1519ce1739d2ab2e"],["/tags/MapReduce/index.html","7b25448dd0062b1c553337fea384a766"],["/tags/Matplotlib/index.html","a68466be5d8c531a6246fe2c14a05520"],["/tags/MiniSYS/index.html","f24331c6375ee64e058dd167ca9d8c70"],["/tags/Python/index.html","d71c5d38588760124c2e3dbff65705a7"],["/tags/QT/index.html","0188c8c54ec3d18c8b9de20d42e83752"],["/tags/RNN/index.html","2395174a542239bf440480773d4c0000"],["/tags/SIP/index.html","442c687c01d14dfaf9dbebdc84f47286"],["/tags/Scala/index.html","b6e0526e6d57da2f6e244cdfb39ce1d2"],["/tags/Shell/index.html","95917b27125338e186befc15ba6666a7"],["/tags/Spark/index.html","384ee1367ddde08dfbbad76cf260884d"],["/tags/Streaming/index.html","7d462acacfbea20644adeffb3a5e179e"],["/tags/Verilog/index.html","3353d615177ab9cd371218dfe7862b20"],["/tags/first/index.html","41889609c6f0ae69fde9c387f9cb15e3"],["/tags/index.html","f47968cc121e7f375120a0f9b037ff11"],["/tags/习题/index.html","dd49b101f5a21065ddab0ade8d9611ac"],["/tags/决策树/index.html","ef3273fcc72e3f7b8858428e44e69ca7"],["/tags/分治/index.html","201c3a51c2cd2132920baa55f1870fc1"],["/tags/分类/index.html","cd8c759301b60a5591d94928742031e5"],["/tags/动态规划/index.html","44e9bde8fae42ee0ef8ad632e04bebfd"],["/tags/华为云/index.html","3227afbec8e14afe2ff89882835fbccb"],["/tags/同步互斥/index.html","e91aaf015078766b2ff3c9d7ec92f0ea"],["/tags/大数据/index.html","2559100a7a3e74c914a7e69886eab995"],["/tags/实验/index.html","d61207d4591631b05193dc9c3b5a5975"],["/tags/小游戏/index.html","24c204f5743e9f466050f795d967d413"],["/tags/操作系统/index.html","c8ba4ab5b6510504b160a4708851cb07"],["/tags/日志/index.html","2b754c017d7e6284e058b9d28ee95f23"],["/tags/易错点/index.html","6a56c269c82443c632676004e1841ad0"],["/tags/机器学习/index.html","f22a44d80989e7cebc52277961b53a12"],["/tags/正则表达式/index.html","fcc5314c3efe71a57c571d8b157c58aa"],["/tags/汇编/index.html","3206541a35e554895fe7e4b58e48ad5b"],["/tags/流计算/index.html","7fc856453bacf1a7720b1681dc7619a7"],["/tags/爬虫/index.html","9202991a921c3adec20d60b8e1837e09"],["/tags/现代交换原理/index.html","e1d36d6de2c6a62741358e5496ab5329"],["/tags/生产者消费者/index.html","42244cf9f8d365c96171fa8c5b59116e"],["/tags/算法设计/index.html","537bce3bfca94a8df175c0ac68dea7d6"],["/tags/线程/index.html","bf7aa62519684e9d7f76d050a2760885"],["/tags/编译原理/index.html","1043fb1f8552868270574a0fb925f679"],["/tags/网课/index.html","97bc600eb2faf62dd2acb96967099b3e"],["/tags/聚类/index.html","6c167009562ab23694285478df9e9e08"],["/tags/计算机系统结构/index.html","ed282346a1a9d4feee17a66952aee767"],["/tags/计算机组成原理/index.html","172af081fc215313a00033bcb0be11a9"],["/tags/计算机网络/index.html","21b9e2d7603cd77b3e8441e020a3cd83"],["/tags/词法分析/index.html","7185dbf9b833736b9a990a7b97141d22"],["/tags/语法分析/index.html","884de7eeac974e4f0e720e51fb1a101f"],["/tags/读者写者/index.html","7f2d4df3ce95c7d4080caea9c68aea87"],["/tags/软件工程/index.html","303868374fbd7a28f2902da3d8256128"],["/tags/进程/index.html","7fb88ae36f17b51ea2e07e8f904d5445"],["/tags/难点/index.html","78174e5b1efdc07cca07a2361a9b685b"],["/tags/集锦/index.html","ebf7234bcdd653f71ed9b8f6f761eb77"]];
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
