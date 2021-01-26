/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","88cc75be9d32a26d4c44480d78d83547"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","1233c49bac4de98cce480fe12bc61280"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","c40faa3bb38ca95a90b5647dcd81df66"],["/2020/03/26/计算机系统结构-实验1&2-遇到的问题/index.html","4ce1304cfae5095b751986cabceadf41"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","cbe73f6221827efb7fa3c7e566fa0d3e"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","cdae11df1a96200b1251f31ea8a51e01"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","61bf33ab8b4816889ebea723e496746f"],["/2020/04/18/机器学习-知识拓展-条件熵/index.html","4d8cb55cee3be129d82085eb19df34b8"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","9cad9fbd79e76c13dde8bc9f3a123519"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","ed364175a37dc7ed1310337672f7f9ff"],["/2020/04/26/机器学习-实验-决策树/index.html","09595d8e58f5c8f3ddb57877dc01760d"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","e86c81695e832a165dcacac5e7598eb0"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","10522ae72cee2b45b1953725d850bcc9"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","957fe09d8d3cd75698592044977e5c30"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","6e23d80781676bf53370d1c179ca2c38"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","e50a4e940bc50c19e04ae22f59c85274"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","8351268fd7d88d43d5ee05148079221a"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","ae1ad97db28271cbef5df5df81ec7c04"],["/2020/06/11/机器学习-实验-DNN-手写识别/index.html","b84537257432e39ac5d2c708589238c9"],["/2020/06/18/大数据-习题/index.html","92099d0e9002a5671495f4204c980126"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","e7c053adb7bb325dab78b9fcd95f2cd8"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","b6160752ed49cabf7e0ead77924aaa3b"],["/2020/06/24/Linux-拓展学习/index.html","03ff7cd14640041f80b0bdf02989ccb1"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","9ecc4120f363a27b689e0758f2a0cfac"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","26a2088c186f60e2ac312f7f5832e94e"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","b241f61495e92312451dd5f18abbfb2d"],["/2020/07/15/C和C++的struct使用总结/index.html","9005fa0f14d84174d41b729f3eb5ca45"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","14c4a1c7fbefbaf05abd1f77b4b198a5"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","ddf3a549db62354a3fce3a939fdafdf8"],["/2020/08/10/机器学习-实验-花卉识别/index.html","b545e9f45052dc284b30219bd626882f"],["/2020/08/15/Python-项目集锦/index.html","3bcee8b8a230a5aa3d3a50f2bcd8b544"],["/2020/09/01/编译原理-词法分析/index.html","47e3940a2b8182e2ab01f3d353f49884"],["/2020/09/02/编译原理-语法分析-LL1/index.html","0616211d76141f7b653625aeb5b10fb1"],["/2020/09/02/编译原理-语法分析-LR/index.html","02a2934d1ed2bf15c019714f5c093174"],["/2020/09/03/操作系统-内存管理/index.html","adac0218894339ab690645a2e7d04cf2"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","43518bd835782404e44381d54f096cfb"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","0e0367af507206c96429119ce8df1b04"],["/2020/09/04/CSAPP-实验集锦/index.html","b65a403c1659f02b18d9bbf21d8a9e4f"],["/2020/09/10/计算机网络-实验集锦/index.html","6bad9c1e313875378cafe9d82fdb569c"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","25bcab88abb57378c725fb748f76079f"],["/2020/09/30/C++工程项目-JobShop/index.html","438fda005c6a293a6cb6d6c378e5b2dc"],["/2020/10/09/交换原理-实验1-时间表调度实验/index.html","86131d804ed0e21ff434cc22a953795d"],["/2020/10/09/交换原理-实验2-摘挂机检测实验/index.html","c5901b206fd6f61695bdef4ff65a53b1"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","3545700b1e598a878e3fc932e748c593"],["/2020/10/09/交换原理-实验4-拨打SIP电话/index.html","0ae937090b1396826280bbd3ddb68512"],["/2021/01/04/Android-项目集锦/index.html","bbbb1f5b39992aceb35452afc2e50c59"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","7fda45b1a4fce373bb66a89f5b8e8293"],["/2021/01/04/C++工程项目-travel/index.html","1922c2524e51b70c62d70ca953a36ae9"],["/2021/01/04/算法设计-分治-最接近点对/index.html","b83e88ff96c90fcdeed243b8386ee7e1"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","c97136d64d6a5b23cdab794018c3e89e"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","903b0c09001b0e6f5da0cb04e5b07909"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","411f1da5a3fa79ca6ab001319afe0c03"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","25704a3309cbaf22c62e458dd42d59f6"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","12e0dabec8cf82f96252f1d508e4f50c"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","7cf5f90c1a29a2e682332775ea62b2e5"],["/404.html","1701717531fe5d59bb629348d271cc67"],["/about/index.html","bd601848c7cf2f3fd963b3e4fce12cc5"],["/archives/2020/02/index.html","f883c29e632ac3245718fd74558ff15f"],["/archives/2020/03/index.html","ea42f69eedbadb0b7510c3553b496e98"],["/archives/2020/04/index.html","3fa606166506c496fdacea9c0e92d331"],["/archives/2020/05/index.html","fa83d6249e9bcbe912ec0f2a453060ad"],["/archives/2020/06/index.html","0c675b3252d0a65dc824de7a36cc002d"],["/archives/2020/07/index.html","7f112b89caf2b7a1fbcedcddf436db3c"],["/archives/2020/08/index.html","c1500a3031c25e5c05ad802c92343257"],["/archives/2020/09/index.html","0a0e93d8880ea9888fe26eefc3f59d5a"],["/archives/2020/10/index.html","98528e10d353ac8bcfffa0583c76fcd2"],["/archives/2020/index.html","ab2de5b8a1d30b9b428049929d754eb4"],["/archives/2020/page/2/index.html","83bde061ee358d456c50466add4cba9c"],["/archives/2020/page/3/index.html","50917e19a5d320fc33881f5aa8db6358"],["/archives/2020/page/4/index.html","61238a86f50091e7e14467ac506e50ca"],["/archives/2020/page/5/index.html","9f652fc874993cc4abc68c1e30bebdeb"],["/archives/2021/01/index.html","3613edf44e983ab1c9bfbaede4998e21"],["/archives/2021/index.html","fba2327281e33aea668e325304e22b3b"],["/archives/index.html","5963997c752175e1846e218e1c91af0b"],["/archives/page/2/index.html","5963997c752175e1846e218e1c91af0b"],["/archives/page/3/index.html","5963997c752175e1846e218e1c91af0b"],["/archives/page/4/index.html","3b25cad56f2857ab1f735d60a8527249"],["/archives/page/5/index.html","3b25cad56f2857ab1f735d60a8527249"],["/archives/page/6/index.html","3b25cad56f2857ab1f735d60a8527249"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/categories/C-C/index.html","ebfedc91e8adf42c9b68b119e2e437cd"],["/categories/C-C/page/2/index.html","60696370a0fbb13e0b990b1c28d743a4"],["/categories/C-C/拓展学习/index.html","62f4dca80568fa48a74a54eb099cafe1"],["/categories/C-C/操作系统/index.html","445adceba4dfec8b4516958bd3254869"],["/categories/C-C/算法设计/index.html","d08467d270c8404f56fe98813ae5a07e"],["/categories/C-C/编译原理/index.html","28a6fd7b78ccb53622ad0a023db7d76d"],["/categories/C-C/软件工程/index.html","3c585f70371e5a1a6f9b2701ca6fe5f5"],["/categories/C-C/项目/index.html","4164e0b965f53f6523fcb9771a600e40"],["/categories/Java/Android项目/index.html","aa8238a72e86cdf2d0352bd664958f0e"],["/categories/Java/index.html","3edd23c150005cd3de104ea7eb171745"],["/categories/Linux/index.html","a73f3c5b69bd4d94774ef8cd3cd0c88b"],["/categories/Linux/上机实战/index.html","d87dbfa31dfc39aa4f0d903b41408060"],["/categories/Linux/习题/index.html","1f5890c7792f41668758d9282091aa36"],["/categories/Linux/拓展学习/index.html","be350a26b56fff0f13c102ae5c027721"],["/categories/Python/index.html","06fc6069544fa0689de0438f9fe8a2a1"],["/categories/Python/爬虫/index.html","c3881c8de235a00a53caa08d738516e3"],["/categories/index.html","3c181bfba0e73b7da8218542ec8d62fd"],["/categories/交换原理/index.html","9b2afc4272dbec09f984040fa51e092e"],["/categories/交换原理/实验/index.html","abbdcf4affad2f15d076ebcba8d9ca1d"],["/categories/其他/index.html","3ed179c3aa699fadcef4686bbc1e611f"],["/categories/大数据/index.html","dd5028e7f014a4889701b4623e33e3b9"],["/categories/大数据/习题/index.html","64746448728111394263769fa3f07906"],["/categories/大数据/实战/index.html","e50c74cbb16ad03387edfbe5db46b370"],["/categories/机器学习/index.html","950ae6ff7fb94e54a55550ab562d274e"],["/categories/机器学习/实验/index.html","c29ddba4898754be5ced924a85f9d704"],["/categories/机器学习/知识拓展/index.html","3f0f7687ccdafb20231dcfb0e5611e49"],["/categories/现代交换原理/index.html","556afec606edce088f9f1202a60716fa"],["/categories/现代交换原理/习题/index.html","2775bb6991121af8d4573a3be8ea5a51"],["/categories/计算机系统结构/index.html","0593a95621d60406cc6dc18a01fe7424"],["/categories/计算机系统结构/实验/index.html","b06d6e546cfd6396907e1497f4e22995"],["/categories/计算机组成原理/index.html","2fe9038042d8601def0753dcd0a0381c"],["/categories/计算机组成原理/实验/index.html","3f0fc7d072fe69a6526b004eb3b213b7"],["/categories/计算机网络/index.html","1806ac709d62bc01a6df6b80e29bef30"],["/categories/计算机网络/实验/index.html","455ed11a6cdc4b7cb72b5a420e19f884"],["/categories/集锦/Android/index.html","d55bce43fc7fb591185951e43a0cf978"],["/categories/集锦/CSAPP/index.html","a6c83bbd05afe3debe492ab934b7a8d5"],["/categories/集锦/Python/index.html","0ac870e8cdc85ee93a538434631a0a8f"],["/categories/集锦/index.html","3e5ea606fcdfaf172189417adc891159"],["/css/first.css","01a90baf99fa8f190becabd973782198"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/style.css","29bd14d027343cdf06b66cce6bf66453"],["/friends/index.html","5925a90ac8851c47f0f794a1ce9ed46d"],["/gallery/index.html","63f4bc7639ebb10460b077618443184f"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/games/tank/index.html","a4a2448b8b53e14bf7bad5c1f71e614a"],["/index.html","d03a4bbb31e673f3da1c8b45331456d5"],["/js/aplayer.js","6e605f0855251e101d3024646f3eac60"],["/js/app.js","1948329f2fd7e750ade4bdc49138c09b"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","e1f9dbe48091078d16047a585a5bf50c"],["/page/2/index.html","a14f18e5916326ba51433c5f9a48855f"],["/page/3/index.html","5726da868c532beec4868d8c3b57b6bc"],["/page/4/index.html","05d2c1a0b07b2ea017d465a0c84d0ee2"],["/page/5/index.html","ec1613c26324fa9983b88015e44ea9d6"],["/page/6/index.html","a3ac62bc1f97246f44ec732d0462cc91"],["/shuoshuo/index.html","e98ecd02564d90e8dfa4ba8617c067ca"],["/sw-register.js","35e59f45dc92d57f226d52224e90e658"],["/tags/AI/index.html","8a67b8b8d9bd153a400c1f54b211dbe7"],["/tags/Android/index.html","1c2ffee7518ebf2c4103cef8a9a92b10"],["/tags/C/index.html","f2bb77972ab0a9ea949a095f305f9e5f"],["/tags/C/page/2/index.html","9c2710ef7770ed03cd425a4055b3fb47"],["/tags/C99/index.html","5b9261be3528d2b5ba14772ae0cb3e5a"],["/tags/CSAPP/index.html","c6d83e7795ed0ae8217b1711e4b8fa74"],["/tags/DNN/index.html","5e48294738b077ebce3a90b9e6561999"],["/tags/DNS/index.html","789fa49dce724b7e3af3999f0a3c5c94"],["/tags/FPGA/index.html","c64d4353329388f93169b7a6f49c8816"],["/tags/HDFS/index.html","3b965e689fcbdd0e5185d2dd49c06975"],["/tags/Java/index.html","ba6fb66830386d7d52080037096fc484"],["/tags/JobShop/index.html","99b90a2dd470ca31bb23efd3aafa82aa"],["/tags/K-Means/index.html","f2e69401b766317a503c9bf2810b307e"],["/tags/Kafka/index.html","c30458f8592b3b54b392403d67d8ff60"],["/tags/LL1/index.html","22b3e2da930a1dd0d7cec3f73f767f12"],["/tags/LR/index.html","62a047f20393a42a433235aae59c2fb2"],["/tags/Linux/index.html","f7189855b5aeb28b5f276914e9172e0f"],["/tags/MIPS/index.html","d43fb9c595a940aa92dd789d467c192b"],["/tags/MOOC/index.html","edf149d0aac9d75883df9f342a466875"],["/tags/MPLS/index.html","ce35ccfbd0773c14b3f44cae7535c444"],["/tags/MapReduce/index.html","035b71e11054b554b2ceeacd73f01c6c"],["/tags/Matplotlib/index.html","3f7061c58ea132d28107952348961c9c"],["/tags/MiniSYS/index.html","b8f3e33029504dfac1fb37dfa51b1e4c"],["/tags/Python/index.html","0e875ca48f342215e1b148af33e72f22"],["/tags/QT/index.html","2ea02808ce46128f9c89d9057fff11b7"],["/tags/RNN/index.html","4ed7a5e55bb87d139c570161729c73fb"],["/tags/SIP/index.html","2ff9c727c43d2faa09300a463c9049f4"],["/tags/Scala/index.html","74ed20bcd3e127fa4bf3e8941f4cc347"],["/tags/Shell/index.html","19bad3f6d8add04352805079eecc01eb"],["/tags/Spark/index.html","639d823a9e99bac71ca17b13073d7c1a"],["/tags/Streaming/index.html","e43569c180189ef0880e2a2a6a337109"],["/tags/Struct/index.html","3a80e13889c1794d558f07a29c09b102"],["/tags/Verilog/index.html","a62c8cf9aa5e3eacd750f80dd0c2f806"],["/tags/first/index.html","7d105a92d835de2af45901f9d4f8f33f"],["/tags/iPython/index.html","b5f06df7db3ebeed7090032ab1fe1feb"],["/tags/index.html","b7fc5cc34d7e2f8868dc985f3abc010a"],["/tags/ls/index.html","df9614092ed8e7d8f6b2ade81a9ac561"],["/tags/习题/index.html","2f5d1c5cfa812c9fb519981b25581ad0"],["/tags/交换原理/index.html","14ac4e83194374b961476b1814e35334"],["/tags/人工智能/index.html","39df3b57cc879466e2b8c97019374435"],["/tags/信号量/index.html","148d96441c3321fb005be4af25ad5b9b"],["/tags/内存管理/index.html","d9d4c8cb5f431e2f468efe38424d97ab"],["/tags/决策树/index.html","2fd4bfe5dde10e6e19d5d0f9d486c708"],["/tags/分治/index.html","42d306e287dde77aa0ca88879692774f"],["/tags/分类/index.html","89327c171068f25414b2dffbd8d14560"],["/tags/动态规划/index.html","47c43ace1292f2ca84aa12e1374a989a"],["/tags/华为云/index.html","eb0730b67d2d3b1caaf87a2aaf44e7ec"],["/tags/单词计数/index.html","48c6258e2d8a849b8060da14c94d6f30"],["/tags/可视化/index.html","f59b95c515c250473cb1c0b7c6bb7250"],["/tags/同步互斥/index.html","6fc09851d1087be55290aa135f926eda"],["/tags/大数据/index.html","046281aeb53fda90d6a308c6201a7747"],["/tags/学堂在线/index.html","af5d124b39b1255f2a82d7baffa8bb59"],["/tags/实战/index.html","6b678a5f7509f0fa9d29465316eac346"],["/tags/实验/index.html","1c53d1f7734cfa9f819e92f081182eb6"],["/tags/实验/page/2/index.html","9577107b20f32d1d76020413fc7c0202"],["/tags/小游戏/index.html","54682c170acea82812c20e872a43a7df"],["/tags/工程/index.html","ef39ff02377457fbb6cee25604618e2a"],["/tags/工程/page/2/index.html","c61be3805252dff6fd5f1b89d122f51a"],["/tags/手写识别/index.html","62301f994c1430063658287330008658"],["/tags/拓展/index.html","f490ddabc6a56a88336f12f12b98e5ec"],["/tags/操作系统/index.html","c5dc2c057393b6ea8e8cf3735ee31d93"],["/tags/数据处理/index.html","13b5c0ca5612ed6aa6b02f0069b8eda6"],["/tags/日志分析/index.html","0d65e028e65e517af11480146b3ad14e"],["/tags/易错点/index.html","6cadda54ffde9f7aa4f0a23dd5da737f"],["/tags/机器学习/index.html","9dce709b15b2e62a5810752a916a46cd"],["/tags/条件熵/index.html","8bf83690b52728d9e6fa6ffd72e425ea"],["/tags/正则表达式/index.html","22fab8ac17aa42bcd7b7b795a0dbdb77"],["/tags/汇编/index.html","c050a8cd6cb5e9b0265b7f04ac47c9d9"],["/tags/流计算/index.html","f22361712cd038264dca8355d82a9e85"],["/tags/爬虫/index.html","08fcdd25fa466e0c479ed53e50511856"],["/tags/现代交换原理/index.html","b7cf12c878cd759f61dad1607f12fda2"],["/tags/生产者消费者/index.html","d05278d613d55baa5ec8a7b6e0533766"],["/tags/知识/index.html","faf0c3771ba72df9f99a8b64ae0a7241"],["/tags/算法设计/index.html","fa07cf061355a33d3afa200048ec8afe"],["/tags/线程/index.html","621bbafcc8dc02cb8668913d46becc07"],["/tags/编译原理/index.html","031c8892abdf0e1731b995acf8ec3c0b"],["/tags/网课/index.html","660f536c05a648df741a3d12d75d3a73"],["/tags/聚类/index.html","8abc94890785a81da68896e4f58fad32"],["/tags/脚本/index.html","d75b0de311cc769205efe58809ea8173"],["/tags/计算机系统结构/index.html","931170ba78e5edfc695cbd4f0a7a3faa"],["/tags/计算机组成原理/index.html","4ec7ff7d17eff3d5955014cd76c98905"],["/tags/计算机网络/index.html","fcbcffafad84eaf9ed8667edb39244d0"],["/tags/词法分析/index.html","de1ef2fdb539a682a65114bb9e5a9aa4"],["/tags/语法分析/index.html","f8f7697a042db89c965a37ddd875eeb4"],["/tags/读者写者/index.html","9f84eca1b01ab8e15f86bda525450bba"],["/tags/课程/index.html","9c61a978392236949cf0626d66c51e17"],["/tags/起名字/index.html","e864fe83d5c2ef270113d46cecb3073b"],["/tags/软件工程/index.html","9f99d96be94e7f10ef11372f062423d4"],["/tags/进程/index.html","1bd7ceb07614aa3f2a88a52d5d8011a2"],["/tags/通信/index.html","c7eb8896162ff03527e1de94ab18a5aa"],["/tags/遍历目录/index.html","dee370157854d75280e341879d0a99aa"],["/tags/难点/index.html","f80bb579dd3b2053dd535a0d5a05421e"],["/tags/项目/index.html","301c189331cf2494bd2ef4ba40937c96"]];
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
