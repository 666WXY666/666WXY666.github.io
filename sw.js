/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","7f37259db5e793f0e9096b95162ba439"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","cc4ade1661161f942efecd62acfb6538"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","0e786e4cd5f8c70a6d7f885578c922cd"],["/2020/03/26/计算机系统结构-实验1和2-遇到的问题/index.html","e2b6222b7d6134024862931a70b24e5c"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","3f8492c50c5eea8ed7bf44d8209fa0fa"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","1d60f1bc85bafbfdbc41935243f86939"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","2d519f22a8321d91cfe9a2034146b299"],["/2020/04/18/机器学习-知识拓展-条件熵/index.html","038596de7eecd5661740b28e0197aca3"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","45b4e569c5faa01374fa9d7e7b6e2034"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","8e1339dc48743f0344c6d69f617a6bc9"],["/2020/04/26/机器学习-实验-决策树/index.html","64ae0d61bdeb1fe275385c447754e136"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","6ab740ec371da800143d9b64c3320be3"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","da2c41c89e7d5314fd9172b7adbf1755"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","74a4789c903f87d054e933ca4c45c55d"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","7a68380b24f16d8272e773538f7f4316"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","c18ac38e4126780836e90baf13d317b1"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","56926e99d4e744f48889dc4f6db82d7b"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","d3992486d7ece2d5e856f72460f62cfe"],["/2020/06/11/机器学习-实验-DNN-手写识别/index.html","a3337be3f14871da2065971526cf0bb9"],["/2020/06/18/大数据-习题/index.html","fc081ae700d13646f70cf76264cca94f"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","b22a65f0272be2ca299532e17c103933"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","2ce42a889cc43b59158dabd122146032"],["/2020/06/24/Linux-拓展学习/index.html","0b4bc3280c21f59c28e07b9eb8f542b1"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","25f995d95f6b4ec38d10699ed0040dc6"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","af99051d602fc224200282327b6f5320"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","28177d14981330001536e6c607567bb4"],["/2020/07/15/C和C++的struct使用总结/index.html","a7a09200b9d637b564ac0dfcccbef97e"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","65b67833fd43990a782ee138d4e75565"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","5b599c6c190ece3b33e53ff9ffbc6ee3"],["/2020/08/10/机器学习-实验-花卉识别/index.html","6a5f1f0d17d7deed3ab3ecc4d86e2155"],["/2020/08/15/Python-项目集锦/index.html","1076324a232b4917228e6bfa00c18686"],["/2020/09/01/编译原理-词法分析/index.html","75051aa9578d5e83444cbb4431530356"],["/2020/09/02/编译原理-语法分析-LL1/index.html","65d27bee7dad68e98ad85d0e49f911d9"],["/2020/09/02/编译原理-语法分析-LR/index.html","f964e21d18a0278a2bffe13966901919"],["/2020/09/03/操作系统-内存管理/index.html","aefb8c4fde24636353a71858ef12ce53"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","3a049a96c41fcc7c3521ec7476b5b6d4"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","45e658e3f239b615dad8ce2247f481cc"],["/2020/09/04/CSAPP-实验集锦/index.html","9064e6755494d0594bb76e3ac16c36f4"],["/2020/09/10/计算机网络-实验集锦/index.html","aad9cc315f494ab36efd591c69e68193"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","91982f73b48f472bd47a4c74234570ae"],["/2020/09/30/C++工程项目-JobShop/index.html","29deea50fdf0d6a0efc7522420bd7c16"],["/2020/10/09/交换原理-实验1-时间表调度实验/index.html","924b826069044929ffc0683f580c9dc6"],["/2020/10/09/交换原理-实验2-摘挂机检测实验/index.html","53eb04a6467cb2b903f50cfaf16712fb"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","ff8010c1f10240dd7b7028b691a90536"],["/2020/10/09/交换原理-实验4-拨打SIP电话/index.html","ff3029ce05b9e599d58adf2240274ed0"],["/2021/01/04/Android-项目集锦/index.html","e5747f3a912f3aefc900dcd794ba8cab"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","e4d84b54580e02cce1fd2928501a7eb7"],["/2021/01/04/C++工程项目-travel/index.html","5cd39cb8ed5d088ba00abee78b5b6438"],["/2021/01/04/算法设计-分治-最接近点对/index.html","e75fb4b34d7cf027b256de24eb9f0f5b"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","9152979a612e20205e4374a3e2bb3ffa"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","285604187b69cdc2d315842023cdda58"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","6f02cd1da844371b6321b2e6378590e5"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","d70dd1faa526df9ec2ae1620b1d74f8f"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","fcf23124faa5d916c45787905d363d91"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","1836c5047cb81bb335d0f79eb5efe808"],["/404.html","849ff1587826cbda370271647ddb3aa7"],["/about/index.html","e17654e0c6bf9c99f1b50a6ac500bd89"],["/archives/2020/02/index.html","bc23a8c71d6858c9b0fec8541e2676f2"],["/archives/2020/03/index.html","ab23ca0c9a142ce60ffe6a2396953c6d"],["/archives/2020/04/index.html","6885daedc2daf934e9e2a2360ba758b2"],["/archives/2020/05/index.html","70746d9e4e1a4d65313c4d8fd50dfaf5"],["/archives/2020/06/index.html","56a936c085bbc4d042e65cf2d296b1c3"],["/archives/2020/07/index.html","72e04dda2405d26be612cb4377aee93d"],["/archives/2020/08/index.html","fd2638f3303a3519713b1bd2433dbfb8"],["/archives/2020/09/index.html","7663a877eaf392cd1dbe2b0e268f4ebe"],["/archives/2020/10/index.html","ba5860ed46e3540179a7f26577d37a42"],["/archives/2020/index.html","2145ec3b2c8e9be0fb1e2968d3bdd3e1"],["/archives/2020/page/2/index.html","1eb7c4a832bb5661de074bbd3fb5c9f9"],["/archives/2020/page/3/index.html","b6f24033662ee9452bba63aff3e9673c"],["/archives/2020/page/4/index.html","3356c59b2495f463f9c6a2368dd2bba3"],["/archives/2020/page/5/index.html","1a8af63511a0f509958a3d8b35d21354"],["/archives/2021/01/index.html","778bd31870b07a1777d6d2cd566ca36a"],["/archives/2021/index.html","37589bdefe20071543e1d6ccb0ed8bae"],["/archives/index.html","28aaf55e90305af3b0b48e0c4443b29d"],["/archives/page/2/index.html","28aaf55e90305af3b0b48e0c4443b29d"],["/archives/page/3/index.html","28aaf55e90305af3b0b48e0c4443b29d"],["/archives/page/4/index.html","28aaf55e90305af3b0b48e0c4443b29d"],["/archives/page/5/index.html","28aaf55e90305af3b0b48e0c4443b29d"],["/archives/page/6/index.html","f5734b3c5617a8157795ce59c8132cee"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/bb/index.html","c4914dfe26e8700a7efe611fca1e297d"],["/categories/C-C/index.html","c3d56a1ea3361269adf175a44358b2f4"],["/categories/C-C/page/2/index.html","3919669538df1f368caeb7c069d085db"],["/categories/C-C/拓展学习/index.html","458db6d81a39ea11b108cdf3f6e7e4aa"],["/categories/C-C/操作系统/index.html","efb28742e41b46e23d6aa850db2c6c34"],["/categories/C-C/算法设计/index.html","2c1bc89f8493414f2f6b6bf3e173f821"],["/categories/C-C/编译原理/index.html","7fca65f18f99fed3a3b3a183ba298d3f"],["/categories/C-C/软件工程/index.html","ad03c7b200c7d23eb614cc88f7635ddd"],["/categories/C-C/项目/index.html","2fb07e2f23d454182014b60c5911b87b"],["/categories/Java/Android项目/index.html","3221ae2a2e22363a1b46980638e2bacc"],["/categories/Java/index.html","1d864191ba69f9a11502ae03eb9a8eff"],["/categories/Linux/index.html","4e333357dfae5ae6a152a2f0d630fe3a"],["/categories/Linux/上机实战/index.html","fb3986b0d3995188d5dcf7fe281766c8"],["/categories/Linux/习题/index.html","4fc8ab34a2d4fb54fab32fe7253eb559"],["/categories/Linux/拓展学习/index.html","f046d13fa35708ce8d01c8a6069328e5"],["/categories/Python/index.html","304dca37f5b3897e7b7c03b5dba67964"],["/categories/Python/爬虫/index.html","5ee343fe94a0243dcf6e8329ea4eabae"],["/categories/index.html","c1ac080b46f6ae9b2bd9f7d42b858e3f"],["/categories/交换原理/index.html","49c76e83fa9e6eb5aa5f236c04865f72"],["/categories/交换原理/实验/index.html","1b9379934794417ebabbb8c3194ba8f4"],["/categories/其他/index.html","c737da5a09b0e70f1e7d54c532137656"],["/categories/大数据/index.html","bad120049f942617c17378877abfd28e"],["/categories/大数据/习题/index.html","8e5eb7c36b0cc4a467a01f96062b7264"],["/categories/大数据/实战/index.html","02b469d4dc75d9f838894abc0bedbc25"],["/categories/机器学习/index.html","825d4abfb4baa6ad9dfe6bdca54e3818"],["/categories/机器学习/实验/index.html","1688bf15a959af131bdd138c44ad59f3"],["/categories/机器学习/知识拓展/index.html","c51e94be6061217bc612e6dba1fd4dc8"],["/categories/现代交换原理/index.html","913590ebf09b7bc83fb17ec0569f7b1e"],["/categories/现代交换原理/习题/index.html","720c083b533166fd5a523c41c1202b50"],["/categories/计算机系统结构/index.html","d144474aa9af3a3da6cadaa6f55798fd"],["/categories/计算机系统结构/实验/index.html","538cba92c7c0e9e90ffa5be16e58daf4"],["/categories/计算机组成原理/index.html","4cc54d90018831f7ed8936853ebe6209"],["/categories/计算机组成原理/实验/index.html","f04cdc330c833fc81ebf7640041f51cb"],["/categories/计算机网络/index.html","d68ec23b1b52f622f9ddaac879eeb78a"],["/categories/计算机网络/实验/index.html","75dc1a0c083ef3acbc9393bf140fff21"],["/categories/集锦/Android/index.html","1ad1200d4183f33c0a96daeb0f89bccf"],["/categories/集锦/CSAPP/index.html","5d5cdad4fd053cd488a6d877c6198951"],["/categories/集锦/Python/index.html","cfa2bee442f2494d9dd61da713cfc194"],["/categories/集锦/index.html","383302ca49b362c3a31d0f1d87b0cabc"],["/css/first.css","01a90baf99fa8f190becabd973782198"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/style.css","29bd14d027343cdf06b66cce6bf66453"],["/friends/index.html","099e8cc5bf6575c6ab592739adb385b6"],["/gallery/index.html","63f4bc7639ebb10460b077618443184f"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/games/tank/index.html","a4a2448b8b53e14bf7bad5c1f71e614a"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","a85ee096151f2c049b64f3327a65a311"],["/js/aplayer.js","6e605f0855251e101d3024646f3eac60"],["/js/app.js","1948329f2fd7e750ade4bdc49138c09b"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","1179af598aead0eb741e685349538b13"],["/page/2/index.html","133973ed48ecb4b60385b4655fa06e54"],["/page/3/index.html","f82cd44520399d44a2aa4f8d5f06f0f9"],["/page/4/index.html","9a9bdf0f9163b47ef335ebf3c4f22ca2"],["/page/5/index.html","c069d292a09e4252a02fee9787773362"],["/page/6/index.html","967574df8126da47e0450429287bc126"],["/shuoshuo/index.html","2308f840ef0ba929565f8eda2f132590"],["/sw-register.js","2ecc87a02c5318ab7954e0dd3eecc9da"],["/tags/AI/index.html","15a7c19a08ceda86378f294d2e9a6225"],["/tags/Android/index.html","2bb39dbd0dfb177a2e4d7640cf2df23f"],["/tags/C/index.html","6a9ff375d63af627f564581869a9ba82"],["/tags/C/page/2/index.html","610d745ef09912f67fe73f6ee4247e0d"],["/tags/C99/index.html","92165cb77582a80575d9a5aa0d586429"],["/tags/CSAPP/index.html","abc19331768993d3ff6823240627c4fb"],["/tags/DNN/index.html","d0619900f34e9aa0e234fbf070e59adc"],["/tags/DNS/index.html","36fda3b930feeb256714b3b3e560874c"],["/tags/FPGA/index.html","73de97c51cc8c9cb0557997ded72d9b6"],["/tags/HDFS/index.html","1964419708e99e97ca72e32c938c8d42"],["/tags/Java/index.html","9fabb554151bc0262e350cda87565d83"],["/tags/JobShop/index.html","75967947ec35588bad1f5abc08b9a0fb"],["/tags/K-Means/index.html","93a22affdd1579f2d82a65ae5c3ddb43"],["/tags/Kafka/index.html","1338d42c4cdc9c0970d580e8eab7d014"],["/tags/LL1/index.html","dafc9b13b233ba8d585735e76b102277"],["/tags/LR/index.html","0c9973e01e93eabbc83716e8f0b90dd4"],["/tags/Linux/index.html","16a8dcbdda460b2099e8bb15d3edc0d4"],["/tags/MIPS/index.html","0a773aad4127f954568d9b12b42315f9"],["/tags/MOOC/index.html","91458725a62d9f1d965804c7d3149a54"],["/tags/MPLS/index.html","790ca2224fe471d902848261d5cc8f71"],["/tags/MapReduce/index.html","83515bcbeba8d1c7419dfeca0a585f7e"],["/tags/Matplotlib/index.html","5780222ff17e0dd46931fe5ae2b4023f"],["/tags/MiniSYS/index.html","9c452c6900c33b75a9e270bfc0b3d5f2"],["/tags/Python/index.html","a6e63558d491531cd56eea0f895b4d07"],["/tags/QT/index.html","f28135b877efb9bf1d968c56cff9d7cc"],["/tags/RNN/index.html","82424ddad490b47e426aa792b83ef763"],["/tags/SIP/index.html","e87c5dcbe71d675d8cdad42a4d78bf6b"],["/tags/Scala/index.html","16fca90e9afaa767c1d0df31f368a2e4"],["/tags/Shell/index.html","802e6b5bd9edac7e8551e9fa559af30e"],["/tags/Spark/index.html","e73068b1518d86e916a8e9332dee8167"],["/tags/Streaming/index.html","ebce476a25ca82e3310f7a5006bd531e"],["/tags/Struct/index.html","cf9525d1a59e0e09d85578668b6538b4"],["/tags/Verilog/index.html","e48634df88004020f622c2190ff6935e"],["/tags/first/index.html","d590655528888b7af19ac4c62f967960"],["/tags/iPython/index.html","47c28c1da751e2fc91e43c6f0f83ac7b"],["/tags/index.html","630a07f7eb2689f34ad7d32cfafea4dd"],["/tags/ls/index.html","c2a8cd069725ce5a04d07e7dab1418c8"],["/tags/习题/index.html","ee8bf536c608be3a7299415bb53c5f94"],["/tags/交换原理/index.html","0eff0889bfd2cfc0e40bd159c425a436"],["/tags/人工智能/index.html","d675bb2db68e479347717767fad26832"],["/tags/信号量/index.html","0cd11cfc0fe9354b9b21f5f05cfc97ec"],["/tags/内存管理/index.html","a086df5754ccde68fcea699c37c8a92e"],["/tags/决策树/index.html","c90b14735552a667bab2d063c96eeeae"],["/tags/分治/index.html","de5bbc2e1f0007a33342a88477d37922"],["/tags/分类/index.html","7ff99494b7de979d4dd85b3b80c550b2"],["/tags/动态规划/index.html","1bb7cbf4c1dac79959be99f09952071f"],["/tags/华为云/index.html","3bd8077be6452623ec64c2af5c2e9079"],["/tags/单词计数/index.html","a21940a3679db778791dac97fda63a18"],["/tags/可视化/index.html","4f3cd8f216e2cd9e1d537fc17576ac8c"],["/tags/同步互斥/index.html","1979356484a6e6e402f1d9601230b88e"],["/tags/大数据/index.html","d370c479cd0b46f7e74fda5589816ba0"],["/tags/学堂在线/index.html","cc7bcf6aec36a951b6ee7078072d00ae"],["/tags/实战/index.html","85b97cf171fdb68e765dea24add16ef2"],["/tags/实验/index.html","ddf775cbe2f74bb3fea91114fb3aa677"],["/tags/实验/page/2/index.html","af134820d861e2f5ef5b3b15f1f964a6"],["/tags/小游戏/index.html","b97c10481257d2f25d00cbdddefd8817"],["/tags/工程/index.html","5452bd12922a17566b7a9445cc3ccdeb"],["/tags/工程/page/2/index.html","2c831a394b10e172547f50a290c6725e"],["/tags/手写识别/index.html","a5db462e040f644c9e2cc48b9795bd2a"],["/tags/拓展/index.html","f33db3512ef68acce5d8eb8c26be862a"],["/tags/操作系统/index.html","30726eef59380bcb4525baab5f0a2b45"],["/tags/数据处理/index.html","70fe850ee36896afbc0a62f12d4fbc00"],["/tags/日志分析/index.html","46579f94a8167bc7a0b78d4e3499efbc"],["/tags/易错点/index.html","87a8b1274da0ed4b263896a41c82c13c"],["/tags/机器学习/index.html","cbba4d98735cd9770fe263e8945efa6c"],["/tags/条件熵/index.html","0ebfabcbdc6c0a2ea538cf7a61f10f39"],["/tags/正则表达式/index.html","ce0baf986b44b05d0b3aecfb5284335e"],["/tags/汇编/index.html","6dc67c068ef78ac6d6b48ae19999748c"],["/tags/流计算/index.html","eb0b70b1f0156251e1868d5130fa83e7"],["/tags/爬虫/index.html","75d721e53482f8c110f8733fd6507584"],["/tags/现代交换原理/index.html","a73e0718ff43a7b82a841fdf4b920407"],["/tags/生产者消费者/index.html","67920ec31e6339ce557ad0454533988a"],["/tags/知识/index.html","8c581902e2adfaa4f52791d651425f1a"],["/tags/算法设计/index.html","e2a4f2a82130ade4013d30216000736f"],["/tags/线程/index.html","0d8da2d0f72761ad3ad3346601310712"],["/tags/编译原理/index.html","beedafed8a7cb3f5a13e235ac16fa165"],["/tags/网课/index.html","0cdfb4c302f095a656cb246553e377ae"],["/tags/聚类/index.html","b1fe19976ef9059d31c088feb35e9e47"],["/tags/脚本/index.html","0fd0c190e04e7dfa4d6f59776c82d360"],["/tags/计算机系统结构/index.html","db6536a1e5bf642003885c253fdbc86d"],["/tags/计算机组成原理/index.html","706191c01477c20f34d88f4879260d63"],["/tags/计算机网络/index.html","846a3a6e3a3611f0a2b06a9319222388"],["/tags/词法分析/index.html","3150d4cb77893f5ba0640214b13cc95e"],["/tags/语法分析/index.html","9cdbad7b958abfb5c91f4a9ba10418c6"],["/tags/读者写者/index.html","b8cd7610e14fac5b3f39019f2d4e040f"],["/tags/课程/index.html","62830c7b67d3f8d30f03b492df6433a5"],["/tags/起名字/index.html","4da9dd8e06d34c880d00a6eb2a1e86be"],["/tags/软件工程/index.html","36ac99fbc2a0174c580e93e4cb26a40f"],["/tags/进程/index.html","abb2403b5a45c36c4521ea0bd43ace32"],["/tags/通信/index.html","4b4879b901f3c1d0fdcdc9346ed2fb1f"],["/tags/遍历目录/index.html","eb20144bc791763faaca5fc47916f96e"],["/tags/难点/index.html","9ff2d7136d1737b6370ea16cc8872fce"],["/tags/项目/index.html","ced72edfb4234bcdcd9aace14e39aae0"]];
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
