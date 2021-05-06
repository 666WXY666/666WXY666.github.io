/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","a2ab43ba26d37cb67bc1d36dd2be338a"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","1b03e162a0d20c4445e3f61819cbc8c2"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","dabe8f42d59b595f627117305a38fdb1"],["/2020/03/26/计算机系统结构-实验1和2-遇到的问题/index.html","a449bb286bffe9933aa0deb76ca37e1e"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","09118076cff1b1b3c09491da5f91984b"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","c27287c2cfdae57d3e576b728bfb3547"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","4208c267d6ff56bba92288d2d37f33f8"],["/2020/04/18/机器学习-知识拓展-条件熵/index.html","fc532d8f422cc08ae9caba8fa09a10d8"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","c73b9525eff0dfc149cd814731b4474b"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","6ff7a6a953ccf973f054d678a4178939"],["/2020/04/26/机器学习-实验-决策树/index.html","b7dd6563dbda3ad7a0bf78c6f97a6e26"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","fe0f7a0f203bef94d0a3d8c498b28bfd"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","02e16fea5dd0a906a7212b2b154ec351"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","cb56af32b410c23b37e286535eb795c8"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","cf610623ef44e4660f648cc7d053c4cf"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","ba8c98312daefa7b2137580a8440aedb"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","693b2764400e8b1fa5f202dfa9ba0cb8"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","707dbbb61553cb8d6c0daa04b13cdb0f"],["/2020/06/11/机器学习-实验-DNN-手写识别/index.html","7bbc0ad71c8b31faf4c76fea42874b29"],["/2020/06/18/大数据-习题/index.html","4559a754e210dc4f8e37d3adc2422894"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","318f698113393c3311e43d2650b5f669"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","517e39a75627bce9b91409b2af7b2876"],["/2020/06/24/Linux-拓展学习/index.html","a62781dd6ba7f4ea07ea4aa41f03634c"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","7df274677ffbb56a5eb08633115637c9"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","c0da55cc98983ceebab7fcb21c18f284"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","4a902aaf47b9ffb3c57e4e8133a38df5"],["/2020/07/15/C和C++的struct使用总结/index.html","e805b6f296be85d9a51d9cf4ca388900"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","0cf76be68e3a267be0c511e1b72af023"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","9d112717467dd5da81a3af4d2815aceb"],["/2020/08/10/机器学习-实验-花卉识别/index.html","1ea878b5da4eacefde4b9489c91c44cc"],["/2020/08/15/Python-项目集锦/index.html","f05489b0c7b11f5aa6f276fc58baba72"],["/2020/09/01/编译原理-词法分析/index.html","b8c0be57d40cb1f9165896ad628858f0"],["/2020/09/02/编译原理-语法分析-LL1/index.html","bb66d16bb6de1cefe8b407ce033d3724"],["/2020/09/02/编译原理-语法分析-LR/index.html","befc81f35588c5c5c0e43eba4c6508af"],["/2020/09/03/操作系统-内存管理/index.html","a46808054833a0348f4e080405fd5a08"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","6b01d1ff1cfb004d5a66cd1fa17df275"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","22482e5a4273ceeeedbf39d76b0db1f1"],["/2020/09/04/CSAPP-实验集锦/index.html","20102dd0ffd0680d0cc8cc522b3d6574"],["/2020/09/10/计算机网络-实验集锦/index.html","bc7064bb5d746e58cc24c1fdfc8110f0"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","1020d3cad928281040255b27c4506068"],["/2020/09/30/C++工程项目-JobShop/index.html","6ebfb14bea266f90d3ad144d630f3326"],["/2020/10/09/交换原理-实验1-时间表调度实验/index.html","86c9b85c988ddb96d1743c637155f7a8"],["/2020/10/09/交换原理-实验2-摘挂机检测实验/index.html","65bec2e353e641afa47336473d1856e0"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","47ac82784c14258fd7cd0c1d62476428"],["/2020/10/09/交换原理-实验4-拨打SIP电话/index.html","cd233d2747b628531c63cc0b74127d14"],["/2021/01/04/Android-项目集锦/index.html","1971497d773aa291afad2fb96402dfbc"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","087316f35bba9eab2669d39d3fdec628"],["/2021/01/04/C++工程项目-travel/index.html","90857c1ea33c24cc7874ef558b3657ac"],["/2021/01/04/算法设计-分治-最接近点对/index.html","9cde6bbf5391ec53476f34ab058d8edc"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","237aa866a1f1c4b5eba723f9269dabd0"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","f30d2344d96b626cf56e08a649b15222"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","2ace237ebddf0d94bbc7eb5d9b3c2b44"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","a1cb8f6a78284b7d4768ec6a9b8e3734"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","9b11d5cdff81931aa8f3509ef8ea05c1"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","36dbb0a458d56879abf65237bd511c78"],["/404.html","2394b59b860bfc1b2a641e2bc2300ffb"],["/about/index.html","b24f8e7844e637c73485b04487286e73"],["/archives/2020/02/index.html","569afc2f1ad653874a019fe67a0d9e69"],["/archives/2020/03/index.html","fc7e81354dee3285613c9be0cee3e415"],["/archives/2020/04/index.html","5e587b81636e66bd211011d7872476c2"],["/archives/2020/05/index.html","bc8a1fcf4880b11f1dda9272e23df8f0"],["/archives/2020/06/index.html","df43651f5e6ca7020ccf71de045745e5"],["/archives/2020/07/index.html","91b490f301432d3c6393f1508642dec4"],["/archives/2020/08/index.html","60e972b0f2d082a62c6fc1135cbf67ee"],["/archives/2020/09/index.html","6def1cf2f042b9a816cc368eccd1b74f"],["/archives/2020/10/index.html","37942eff63e3a451e0dead4f1df71e68"],["/archives/2020/index.html","d292d90404bdfe40962d47b1aa772a5f"],["/archives/2020/page/2/index.html","6b153aff5eeb7b3bd0ee404641f4b9f6"],["/archives/2020/page/3/index.html","5ac9788125d1ff18fde33b8063063f95"],["/archives/2020/page/4/index.html","159ab71bbc6d332b313387f6c1b872dc"],["/archives/2020/page/5/index.html","c599fc48b9a7e9aa6fb59b23add44877"],["/archives/2021/01/index.html","28f5e26189066858e1eb1f972a177c18"],["/archives/2021/index.html","49588d37e706ae34818036bf4d9a7300"],["/archives/index.html","e06c46c0005ccc233bc878503f545b2b"],["/archives/page/2/index.html","e06c46c0005ccc233bc878503f545b2b"],["/archives/page/3/index.html","e06c46c0005ccc233bc878503f545b2b"],["/archives/page/4/index.html","e06c46c0005ccc233bc878503f545b2b"],["/archives/page/5/index.html","e06c46c0005ccc233bc878503f545b2b"],["/archives/page/6/index.html","ad3b31c92e4a753e264d8d21438a82de"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/bb/index.html","8bffdea370a044d407a637c88685863f"],["/categories/C-C/index.html","dd03c4e633f39fa1e93db7871994c34a"],["/categories/C-C/page/2/index.html","9993f3f078e30ee25b4c8bc06f815ee7"],["/categories/C-C/拓展学习/index.html","010013bcc302c97ec670823774b58162"],["/categories/C-C/操作系统/index.html","77ef313c5f0f1fc9be0052d0b3527389"],["/categories/C-C/算法设计/index.html","6ebe808e605a15dea22fe615ec14aa80"],["/categories/C-C/编译原理/index.html","82215176ae48eace3e7bd774116fc484"],["/categories/C-C/软件工程/index.html","4cbc8394354d5c6eb2581b6dcdccc1d6"],["/categories/C-C/项目/index.html","d47c3d65a29850769edd55fea59728ed"],["/categories/Java/Android项目/index.html","7eae3e168585b32fe4a926cdeecb5654"],["/categories/Java/index.html","e196add4eac570cb14528569f57a7be7"],["/categories/Linux/index.html","6118e32b240111c285a55e6995e2523a"],["/categories/Linux/上机实战/index.html","d685fac2adf8516064cfbbb69dd2dc6c"],["/categories/Linux/习题/index.html","a171a3684d662ef1f4e9749259b976c5"],["/categories/Linux/拓展学习/index.html","5551de7ec0dcd487c7d3b8fb7d0c031c"],["/categories/Python/index.html","b264ca80e79d0c956170c1c6874db77c"],["/categories/Python/爬虫/index.html","cd136434d84c19764fa1db83e109a89a"],["/categories/index.html","24234c75d00d17c082b3dcf4d27cf4a5"],["/categories/交换原理/index.html","fb97b49d816356dca39d9ae72942c46f"],["/categories/交换原理/实验/index.html","1b97c622b1ff6a6cc8cc9e0d567b70d5"],["/categories/其他/index.html","effe932886e97711933fa4f3488e96fa"],["/categories/大数据/index.html","eaa730a9efb48a4d5321c7ad332ddf80"],["/categories/大数据/习题/index.html","4cf52239685989cd3628d5e56bb1fac3"],["/categories/大数据/实战/index.html","a573ecf6a77c691fb926677d435319c3"],["/categories/机器学习/index.html","e4604b822f6908aefcde54bf50b5958c"],["/categories/机器学习/实验/index.html","e7cbbfa429c6c066ba27facb48dfb8c3"],["/categories/机器学习/知识拓展/index.html","6727999caeb129bd56ec7355e1edcf8d"],["/categories/现代交换原理/index.html","06bfbcb69dd6fe2c044678eb23b39481"],["/categories/现代交换原理/习题/index.html","c20bdfca7bb7835b745933562e2ed29f"],["/categories/计算机系统结构/index.html","caf298683de22e3b462ca08d8991a2fd"],["/categories/计算机系统结构/实验/index.html","169e42c6c55ce8e09516d17897622015"],["/categories/计算机组成原理/index.html","c3e41c363042e5049fa478e46b8044d2"],["/categories/计算机组成原理/实验/index.html","f3c206b869e5f0c0e1a47e92589eef6b"],["/categories/计算机网络/index.html","ab258a5bb0a988784fe229067f0f9589"],["/categories/计算机网络/实验/index.html","2254c45d3696864a492226e1d624ca56"],["/categories/集锦/Android/index.html","41b2fc46ce2cba8b3a4837be2989d131"],["/categories/集锦/CSAPP/index.html","c510913f5b6772bd05963adee762923c"],["/categories/集锦/Python/index.html","fdce097714941772265f681ab3072d1c"],["/categories/集锦/index.html","d79ed64433d45d2a61f86c5b34cf215d"],["/color/index.html","3f627143356419f7f54e1443b3536f0d"],["/css/first.css","ea01aa1635810499a5ade558f4f81d56"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/style.css","6bb0e006bcdf6e96b6708cbc5b8f868a"],["/friends/index.html","c3bcd762a14b265621ceda312ed41bd5"],["/gallery/index.html","cac0a9f9094373909cca2398b08a7aa4"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/periodic-table/index.html","4c31220b3c8c1d35b1128df43b2c9dc3"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","920c241567ea88dce13eae10a18847ff"],["/js/aplayer.js","6e605f0855251e101d3024646f3eac60"],["/js/app.js","1948329f2fd7e750ade4bdc49138c09b"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","cc6598d6e2d84622b8395e0e67803fc1"],["/page/2/index.html","24f80dadc45fb0b4be51985b47abddea"],["/page/3/index.html","99fe8bf51a360dfdfb85c339cf548eb6"],["/page/4/index.html","4d718b15364f6fb3e4e56f926c97208f"],["/page/5/index.html","52e4a3171de1bf1e9885ae8df2cc0ec9"],["/page/6/index.html","d5f7d16dea7425bb0a4add1e8e299735"],["/shuoshuo/index.html","8af1d3c001e2f9c8ac412ea6493bbf6f"],["/sw-register.js","296aa733df08c77a400d6dd0111b331e"],["/tags/AI/index.html","e151614f73be1c55c4faa14cd64e2824"],["/tags/Android/index.html","97b71233ca6624cec90c87cb1c5dba22"],["/tags/C/index.html","9b6e03d322f94b148504d3e7702b3d13"],["/tags/C/page/2/index.html","41be750681b9605207dfaf94105f1b8c"],["/tags/C99/index.html","fe82623277ce94c2d479507a2d85284a"],["/tags/CSAPP/index.html","f765971cbc147c4058986f388bbfdbe3"],["/tags/DNN/index.html","98a1d579ada0d865c02ee4d6c1fb657a"],["/tags/DNS/index.html","1669af3ea40a2b142612a2d6d3111f24"],["/tags/FPGA/index.html","3744fc3d777a23f56ce4a40b8ad16117"],["/tags/HDFS/index.html","b613b3cc5bd2a887814c63731613f2c0"],["/tags/Java/index.html","0dd6e0466f4ce7e0cf8e298c922061d3"],["/tags/JobShop/index.html","692893939f9e206086bc51433f10b42f"],["/tags/K-Means/index.html","b3757cdcd46e25f49bca708f475fbe99"],["/tags/Kafka/index.html","66eb5b3ec571bc53560b430d0d529780"],["/tags/LL1/index.html","c1d492cfbceeffeb52bb934b0f174a2c"],["/tags/LR/index.html","6c9e71ba79b7144f6ea7bbab33ed82b7"],["/tags/Linux/index.html","3bfd93e81ea4fa31b6af06e618b94db1"],["/tags/MIPS/index.html","12cb6ddc27d24b25052d0c679ccacd3c"],["/tags/MOOC/index.html","4c3387442566d2f9f6d176bda905d8cb"],["/tags/MPLS/index.html","6ab321db5a96b9f27a64fe2e7475c145"],["/tags/MapReduce/index.html","60e45946ca2f548e42165ce9b861c875"],["/tags/Matplotlib/index.html","f38d8cc311a46c11081184fb0f95839e"],["/tags/MiniSYS/index.html","3e7f3cc57c85c62402bd9ee3f74464b0"],["/tags/Python/index.html","1b10f65bbc6c45fc8087e184b0a1fddd"],["/tags/QT/index.html","1f836b0829fb9d8e76c89d06a23fab40"],["/tags/RNN/index.html","424bb8ecc9c80dde6d3ee257f4c80d78"],["/tags/SIP/index.html","e6e9a6f55d3b9db037c72a921b62068a"],["/tags/Scala/index.html","db80a7c081141a519027c4b0e4a09b39"],["/tags/Shell/index.html","0421a4e6b20a7ed619e2de791d036ccc"],["/tags/Spark/index.html","19dc885f640d0551e366b7d67b6dfca4"],["/tags/Streaming/index.html","b45401c517229a3892b322584bf197cf"],["/tags/Struct/index.html","869b57a6ef5afb1302a7045dce220064"],["/tags/Verilog/index.html","dfddced90f603a8739de894e09d8c3ef"],["/tags/first/index.html","e3c295677d445df485dfe87e4d330f60"],["/tags/iPython/index.html","ed8ee2fae1c13299c9513c6189910a14"],["/tags/index.html","061defa35f0f9297ffa47479cdada796"],["/tags/ls/index.html","9419fc97394bf178ccd8dab23c71130c"],["/tags/习题/index.html","ee1cc04af5b4e54a220d83460766e979"],["/tags/交换原理/index.html","06cc79d2b5d8b1bd3445ad4242d17266"],["/tags/人工智能/index.html","50a67a87d762c4f69564b6430a78dcfb"],["/tags/信号量/index.html","f3f80812c0599ae03cbf50f44d73775b"],["/tags/内存管理/index.html","1a1c2e91975a82af71259d9f3262a9c7"],["/tags/决策树/index.html","b9cc9707df0e21706fe2215e6b0c0279"],["/tags/分治/index.html","256f31895b607deb4b4a95867d3c73d1"],["/tags/分类/index.html","a339f207259d20b11caa6c81383e8f20"],["/tags/动态规划/index.html","0a72e113bbb440c09848079add4f6a63"],["/tags/华为云/index.html","0a27721c15b0d7d6e01460abf03029e4"],["/tags/单词计数/index.html","58c58d3c7cc277275b2cf08d1ddd29a2"],["/tags/可视化/index.html","c9d8d2ae13c79a78a1c53b56f32eaa42"],["/tags/同步互斥/index.html","171993f893881e392b75306a87e691cc"],["/tags/大数据/index.html","35f39444153e033fa06703bc20bc7e7c"],["/tags/学堂在线/index.html","4ba71f0a9f21e483da6571817873af44"],["/tags/实战/index.html","f3b1dfedf18a5ab1f60444b4ccfff03a"],["/tags/实验/index.html","60816df62a3df5ef0b62c9af9aa1147f"],["/tags/实验/page/2/index.html","43b379854a398ad54cabfe826cdb1c44"],["/tags/小游戏/index.html","771c6984098b87767b98e2132b8002ca"],["/tags/工程/index.html","0528a2ff20936f17e485b3fec1405b6d"],["/tags/工程/page/2/index.html","c29710bbe0a15b45142ca3bbf4fa31d4"],["/tags/手写识别/index.html","8577501515c3d494470fe7ea7c5124c9"],["/tags/拓展/index.html","10f6cda7c0573584c59774a2a6cbf05e"],["/tags/操作系统/index.html","53caf37d392fc896efcf0f8296caf002"],["/tags/数据处理/index.html","01e19b3214ead947f7f6c4c5b77cf324"],["/tags/日志分析/index.html","13f7ee30b0b205b9b9240f98cf46adb2"],["/tags/易错点/index.html","7a814bb05168ff6fbda921c08a722fdf"],["/tags/机器学习/index.html","5aeec24bc154c73f7db01b82c001af42"],["/tags/条件熵/index.html","beebcd6ec2b8dc96dedda0040cb70e14"],["/tags/正则表达式/index.html","d8f7dd071090dedb54dcae0120d2df2d"],["/tags/汇编/index.html","46793022250fbe650afccf1a09c2e780"],["/tags/流计算/index.html","3fdca7d884905f39f04cd2c349541377"],["/tags/爬虫/index.html","cec0bd0d1385b50c6caa617d86110ec5"],["/tags/现代交换原理/index.html","ad7a8666bd60ed5961c7009b71679d1c"],["/tags/生产者消费者/index.html","e413fb488865db64dc353592739866ef"],["/tags/知识/index.html","a89c9575e341c9a738271d0926f2b6cd"],["/tags/算法设计/index.html","0226fbc3b91edf0ff98ee22defd447b3"],["/tags/线程/index.html","17f9d1c04c26040d0cfc11a0fd672327"],["/tags/编译原理/index.html","967674057593b9559be90444f033176e"],["/tags/网课/index.html","95851fcd8262e46c4a82efa705c72401"],["/tags/聚类/index.html","7f80043b8353cecacc6241dedcfa4397"],["/tags/脚本/index.html","d94bd2215845f1862544a02f08769dc5"],["/tags/计算机系统结构/index.html","1b8531834bb9f649c110fc1a741c3845"],["/tags/计算机组成原理/index.html","463038f889a4c453b683d42d5fe89ebe"],["/tags/计算机网络/index.html","0f48ca6e12e6f2cc08b97332addb044a"],["/tags/词法分析/index.html","e9dea07bd7b1110b31e75bd98f03e5f6"],["/tags/语法分析/index.html","5e677a3c89d56a1a0d86972a48b26be6"],["/tags/读者写者/index.html","c98dd1c3cd0c9f7059e039768a2a925f"],["/tags/课程/index.html","e6cc318f0ea2438d2286e0d8c1c37e9b"],["/tags/起名字/index.html","b57ca15b706f1fe3f3e1fb3024ca157e"],["/tags/软件工程/index.html","71d85eac96ae172ef0d1e3156ce4f8b9"],["/tags/进程/index.html","7afb5827e5cca631c849aac14cbfd8c7"],["/tags/通信/index.html","485308f5411d11e5a4d0474f1ddff757"],["/tags/遍历目录/index.html","af0055c31c25d9d677126efe68d9514b"],["/tags/难点/index.html","9ad194297a5061642825accc050a0044"],["/tags/项目/index.html","ccd5aa355fa5b6cfc0f3fde744ef1210"]];
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
