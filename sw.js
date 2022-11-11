/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","2a1a6988031420b907a2b247234159e0"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","91a4962850a1879255361eadf0ecf5d6"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","6e679f17f4a65f1243c49c52da2e424c"],["/2020/03/26/计算机系统结构-实验1&2/index.html","1e1ad157bea2a01628a7cf479b4efc05"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","135b5257ab0dc711fe20ee264c960aba"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","449ad356ae6f382f19946925855eb5e8"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","10ea6c1558bdb83ff4a699d1d481903a"],["/2020/04/18/机器学习-条件熵/index.html","103612351e6e6f4c484ff41c65152453"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","486c91ee3519e26491bfe7657c8a4f2b"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","037bc83f723147d9a78c914c08bafcfe"],["/2020/04/26/机器学习-实验-决策树/index.html","029f42f8ed94148848f4e25189f36713"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","7eefa0082c29d558333ae8c7db861f3e"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","00059a8c1ced7a1556d9fc97a8bca551"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","92006cc81529cad9c79e4dc5b7b08e12"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","5b8a016d020f126b4b9460772db3c1c6"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","cbcaa1d6bc63655ed177cbfd3f53f956"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","658cd7398d7ddc2258e2abad786bc7a4"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","63dbb5605fa1f325fb8c226137310b73"],["/2020/06/11/机器学习-DNN-手写识别/index.html","853f0beb8394c7256191c5829742b201"],["/2020/06/18/大数据-习题/index.html","02435979059c0abb5430d19c558594ad"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","0737a4c82c9dfde17a9df8193d0f2081"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","89c3e41f0c66091507610fea76d64171"],["/2020/06/24/Linux-拓展学习/index.html","c872ac1e55644bba9e707cc10b19afae"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","93f07ddaf0cd38af002348db86fc9876"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","05009bcdd7e6ed2cea115d9457d04d4a"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","6dd2e374afdba8c81a399b9df2eac372"],["/2020/07/15/C和C++的struct使用总结/index.html","df5da1ae8d6a8094b15f67bc09dbbd25"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","c185562a0341a9e88892f7d9e428d7a8"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","dff0430a3719d0e1f579cd2059c4afa6"],["/2020/08/10/机器学习-实验-花卉识别/index.html","364e289c56eccdf68de976bc3b31e662"],["/2020/08/15/Python-项目集锦/index.html","d5a073603dc47f5fad73a5fcf6be44cf"],["/2020/09/01/编译原理-词法分析/index.html","57b71ac7766c9c9d9782aa47f1158794"],["/2020/09/02/编译原理-语法分析-LL1/index.html","16fda6e5283f6b2cc354405c7df0b50d"],["/2020/09/02/编译原理-语法分析-LR/index.html","a7103aa597e6eb215d027a9e833dcc88"],["/2020/09/03/操作系统-内存管理/index.html","b99e7b62948c7038b80350aae4beea81"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","b94fff8f6dd7577d844911b87f1c551f"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","8a77ce770da702eb02746cf4679e92d0"],["/2020/09/04/CSAPP-实验集锦/index.html","9c6d387623432fbea97f91678dde54ac"],["/2020/09/10/计算机网络-实验集锦/index.html","3c5c85d0ab85b7a9719fd96c4433224a"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","da2faf9c982d575e687122b46ac4a1f3"],["/2020/09/30/C++工程项目-JobShop/index.html","855e96471caf266f7f1fe0f3077dff4f"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","d396d91426a20e703fab4a8ed9dd18f0"],["/2020/10/09/现代交换原理-实验1-时间表调度实验/index.html","8dbd142b535b5d09c92370b547a4dea5"],["/2020/10/09/现代交换原理-实验2-摘挂机检测实验/index.html","3b5f9e3025b00b193c601203fc6ce99b"],["/2020/10/09/现代交换原理-实验4-拨打SIP电话/index.html","a334fa82386342b9c9ceb202c250a2bf"],["/2021/01/04/Android-项目集锦/index.html","580e1a9b5ee8125c7f7821051c613feb"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","a15399ecb60486fd77453f56ddbadc4c"],["/2021/01/04/C++工程项目-travel/index.html","32b7fa2972edab39b955bfdc6a758ce0"],["/2021/01/04/算法设计-分治-最接近点对/index.html","f625d59cf3be88abc0f805b87021698f"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","a3636afe65f0d7303cae35b0c284da8c"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","84039fb9b7437d218660d17f06a6f3ac"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","34dc295cc7ad79c17ee866452b5b3e68"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","215d0c3ad742af8441966c22ee5ec3b5"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","bc33cd0c3dba4c4d885312502e0002b9"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","36345e1853065f1cfafefc16933c2a86"],["/404.html","2394b59b860bfc1b2a641e2bc2300ffb"],["/about/index.html","94f8de2d31236332e15afbde01c80fc0"],["/archives/2020/02/index.html","680e6cdfda883fea8faa77ee3fdd156a"],["/archives/2020/03/index.html","2e87fce66d235b6e68d058d7d4622400"],["/archives/2020/04/index.html","8ca23cb7ed805ef13974150570b8fe13"],["/archives/2020/05/index.html","284613c11486d53bcef076603051123a"],["/archives/2020/06/index.html","34e737e48cbbc45654d771fd63633a57"],["/archives/2020/07/index.html","26c0788b505d2ba25e0e5772b0d00001"],["/archives/2020/08/index.html","5a31885c1f6f9523a4a8b2d937fe19cd"],["/archives/2020/09/index.html","8ca1d75dbddd409736b07320707c10c5"],["/archives/2020/10/index.html","a27ac216d8cfa19e91d6e222ce382fa0"],["/archives/2020/index.html","526199ce6e3b534a8c9d2d0195698c80"],["/archives/2020/page/2/index.html","661151ae81c8fe0a3895d00bf6b4102a"],["/archives/2020/page/3/index.html","8206bf1e40a5f4a03546e81b66af074f"],["/archives/2020/page/4/index.html","545464899ccda10c5b8517a1b08948c4"],["/archives/2020/page/5/index.html","09cd72f0d76657189af93bdeb6ad3144"],["/archives/2021/01/index.html","8b0842bd2c1355bf3ee56b286f014cd8"],["/archives/2021/index.html","eea9209e50bdc2b7f9d934341875556d"],["/archives/index.html","1b09ac013a11d8a66f20c92ae82e731a"],["/archives/page/2/index.html","1b09ac013a11d8a66f20c92ae82e731a"],["/archives/page/3/index.html","1b09ac013a11d8a66f20c92ae82e731a"],["/archives/page/4/index.html","1b50b15e4ed410653c413b578d10d39f"],["/archives/page/5/index.html","1b50b15e4ed410653c413b578d10d39f"],["/archives/page/6/index.html","1b50b15e4ed410653c413b578d10d39f"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/bb/index.html","42d2714cf9de61f96705219a97656d49"],["/categories/C-C/index.html","8c8afd61632cb281ed3e157efb2d9372"],["/categories/C-C/page/2/index.html","ebd67a3c9e271313126a6365df135126"],["/categories/C-C/拓展学习/index.html","f8de0f41b7b5d788a51c46af6aeb587c"],["/categories/C-C/操作系统/index.html","b07e037a009c2456bcc495791db19e4f"],["/categories/C-C/算法设计/index.html","cc304dfbdb5a572de833290ae970525a"],["/categories/C-C/编译原理/index.html","83f3998975ee9b50a80fe2066e9e27a1"],["/categories/C-C/软件工程/index.html","231a5c7b8f8508e594e56241d4eb6d0b"],["/categories/C-C/项目/index.html","77a07180583f4b4096036303d3a720b1"],["/categories/Java/Android项目/index.html","9b240ca475b05b281771a935b25f2ee3"],["/categories/Java/index.html","7693543f8c1bbe676698deefaba15b73"],["/categories/Linux/index.html","9989b2b558e4b49c34907a62fa65e840"],["/categories/Linux/上机实战/index.html","bf66d67c549ddd9a137f29fa6b8489e9"],["/categories/Linux/习题/index.html","e4c5f74f44f2657f13688c16509b8387"],["/categories/Linux/拓展学习/index.html","b82f6fa69fce2f52a5451d8e8f8c196b"],["/categories/Python/index.html","4312b814b9d097f6f067a25f0e146059"],["/categories/Python/爬虫/index.html","ef383dd24352e953c0436625b19d0140"],["/categories/index.html","407ace2739c7ca0c74b04a81427f9c73"],["/categories/其他/index.html","eab5b2301d9548cc6410ba7835f87f68"],["/categories/大数据/index.html","e9b9da7087ab71a24912ed0edc77c006"],["/categories/大数据/习题/index.html","35dc62eca4a967acf6845c51d1d2cc96"],["/categories/大数据/实战/index.html","d876067040eef6229110c378f5fd5a54"],["/categories/机器学习/index.html","57d32260aa0412fcf38f308b9bf6c712"],["/categories/机器学习/实验/index.html","beabaf99e628d50c11a206fa69156b29"],["/categories/现代交换原理/index.html","24e4d505ee02c80a1487add09b34c344"],["/categories/现代交换原理/习题/index.html","fcaa8d0c7eed1ec11e91827bd6d73c45"],["/categories/现代交换原理/实验/index.html","af6fd8a4dcbd0c5328ac028d50c4eda0"],["/categories/计算机系统结构/index.html","502af7b62807a10f0030b54cf7373572"],["/categories/计算机系统结构/实验/index.html","15f3ced0f3782157f3157282a63ebe16"],["/categories/计算机组成原理/index.html","7961f9ea88151437b5138c1ead420ca2"],["/categories/计算机组成原理/实验/index.html","922747e689ab9e7c2f85d58f38d13c3d"],["/categories/计算机网络/index.html","1165dc1e4db3fd271532b7c04e3b90f0"],["/categories/计算机网络/实验/index.html","f9f11a9cc4d67882377576e4df86c41d"],["/categories/集锦/Android/index.html","91612226571f7a7b6659868f74d71cae"],["/categories/集锦/CSAPP/index.html","f7189bcac6642a1f654b3157523d20a8"],["/categories/集锦/Python/index.html","11b5134f312ba500ed66a9f53df649ab"],["/categories/集锦/index.html","59ecd32cb8fceb352f639bfbb1b94a74"],["/color/index.html","3f627143356419f7f54e1443b3536f0d"],["/css/first.css","ea01aa1635810499a5ade558f4f81d56"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/style.css","4b6ce514c846132c606ce76da7e1c124"],["/friends/index.html","1ea5a758d5c70a977ca43695dc04ca3b"],["/gallery/index.html","cac0a9f9094373909cca2398b08a7aa4"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/periodic-table/index.html","4c31220b3c8c1d35b1128df43b2c9dc3"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","9066f712a05f966211d730e0287d2a34"],["/js/aplayer.js","6e605f0855251e101d3024646f3eac60"],["/js/app.js","1948329f2fd7e750ade4bdc49138c09b"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","158f40498447caf14ccd2a6b4297cf92"],["/page/2/index.html","8de831c5a6c25f683105c151c66911fb"],["/page/3/index.html","520a7415e21dbf7fc9b9ff72380f72cb"],["/page/4/index.html","843eddc180f5dbc5d26b480ba56ab2c1"],["/page/5/index.html","e7abe4a92eec279bdc36b149bd9883fa"],["/page/6/index.html","21e250e78ea82ca3440a81e7c3b212b2"],["/shuoshuo/index.html","c839b27b6971943714c1e7abc5ced5ce"],["/sw-register.js","3eba3aa744e9b4782987b6e6ace98814"],["/tags/Android/index.html","339a10c73b27adc3aa5185ad519741c8"],["/tags/C/index.html","eb299f481060e57d32b24a0d6fdd0437"],["/tags/C/page/2/index.html","e4655f6da5e510e348fafa43abc2334a"],["/tags/CSAPP/index.html","655fbe7efe74867aefb86294fc8ed096"],["/tags/DNN/index.html","b40892fed8a7adcf66b1fe729ea78948"],["/tags/DNS/index.html","919c3e1a28824f9ef99a282ff5c45f87"],["/tags/FPGA/index.html","b6a32f98866d43d03980bd066110fad3"],["/tags/HDFS/index.html","cc854e3c6c398d2e0de7bd9bf12322c1"],["/tags/Java/index.html","d8f314cdb6805d251f839e8987c4f265"],["/tags/JobShop/index.html","ade8df910281fe5eacdeec1ca52a0d5a"],["/tags/K-Means/index.html","df21818a2b5083c3702c6e013cfbcd26"],["/tags/Kafka/index.html","d1b0cb062bbb2b9405a0099fcea69b90"],["/tags/Linux/index.html","9945600bde26f9417f50fff31d92fd6f"],["/tags/MIPS/index.html","78d793a8c77ae23f3325d024f9af4dfb"],["/tags/MOOC/index.html","f158c8d41e2b9298a5299d90ed28dbd0"],["/tags/MPLS/index.html","f37bb306a06827d452ce2a3302965648"],["/tags/MapReduce/index.html","0d180d63287300215a22855d5bae54dd"],["/tags/Matplotlib/index.html","954de1ade81e2606558a4d7e17be950f"],["/tags/MiniSYS/index.html","d23b0092b5e9e6c6cc224a2888703f10"],["/tags/Python/index.html","6fefd05d235604f26728274a72da8357"],["/tags/QT/index.html","cdc4421e86ccbceb6c77e7485c87ade5"],["/tags/RNN/index.html","00a567dfce5b027a665371a7c25d555d"],["/tags/SIP/index.html","838c0fc7cbd991f55a029bbaa63f1cfb"],["/tags/Scala/index.html","bce2c8fc3d52ebef4c4400a6ac1bfdab"],["/tags/Shell/index.html","81fd36a607bd72f195331a7c57d26df8"],["/tags/Spark/index.html","8d389c644e057905b02fe6ebfbbae2ac"],["/tags/Streaming/index.html","2e1ff4079ffbc86163fd90357eda2af3"],["/tags/Verilog/index.html","3eb1977e21e491a18a7b010ade80a926"],["/tags/first/index.html","dcf53883e4c16588ed4522890aadd6a8"],["/tags/index.html","4430d72040de5f25b126865c0e88b088"],["/tags/习题/index.html","3eeb7700b32cb6cc8abf3a2aa7cbfea7"],["/tags/决策树/index.html","d87ecca683287ba6f3b438112b0aec27"],["/tags/分治/index.html","4c6e9e915a56e0159c59677c62044b84"],["/tags/分类/index.html","12a864b11a94d2e3109c014e37a941f8"],["/tags/动态规划/index.html","e1e50fcab98cb69324abda769593f458"],["/tags/华为云/index.html","262ea401c840168c00fd3a97fcfb08d9"],["/tags/同步互斥/index.html","d9680321cc9df4aa463e6e361a0b4d69"],["/tags/大数据/index.html","c1e2a4e1c61750fdf1f7cf2433fdd417"],["/tags/实验/index.html","cd3ce524efe3f9e8dd3f940082ae3491"],["/tags/小游戏/index.html","8e11a27309246b33792000aaa435d249"],["/tags/操作系统/index.html","0fc0ed3af2d95319250d7ed6e2335255"],["/tags/日志/index.html","3d1d018d762735ae01884c3b69176e33"],["/tags/易错点/index.html","da32e3be9bf6ef72c42163aa466386ef"],["/tags/机器学习/index.html","a7f77be89031895172bbc3ab0ea2a7f5"],["/tags/正则表达式/index.html","6413e05fcd962c9c43e9177feaefc35d"],["/tags/汇编/index.html","19d0f847d483109fd4191332ad3e6858"],["/tags/流计算/index.html","ee6de884d7532c592b533369eff9d2e5"],["/tags/爬虫/index.html","d4cb662bfea658adddb0359e9197104c"],["/tags/现代交换原理/index.html","d64da536816636fce83ef34e89fa2abd"],["/tags/生产者消费者/index.html","3532053c790af8c61e57a086ee4230ae"],["/tags/算法设计/index.html","0c11b395b72883c3e56a687887c24e9a"],["/tags/线程/index.html","5121080af5d8a557d5f9d9790e73a3ad"],["/tags/编译原理/index.html","9512f3f411228640d9f797ebd04d2fe7"],["/tags/网课/index.html","e288446397d433c3a67d141c2b1c4d78"],["/tags/聚类/index.html","b4030504a45828c894c0ea8086111e66"],["/tags/计算机系统结构/index.html","2693e95c10a4db7cbe68d1e411c93984"],["/tags/计算机组成原理/index.html","787b35f29a33484afb146bb56934ef05"],["/tags/计算机网络/index.html","5f87d06d485e3121d73cb6a96a11c89c"],["/tags/词法分析/index.html","41878e37ed774ae2fd038ce55b8fb183"],["/tags/语法分析/index.html","7475cf29562213130f70bb8b9e91cdf9"],["/tags/读者写者/index.html","c6c777d38fb590c1f55ba8cbb7e1c585"],["/tags/软件工程/index.html","c994a8f62c339a5da658555eb5f7b714"],["/tags/进程/index.html","34856cee270de4d63f2590aaa70a3ba3"],["/tags/难点/index.html","8225f7852a495fc950264ac1a5e3aecd"],["/tags/集锦/index.html","16f6535256651bfb4c5c98f0dd550482"]];
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
