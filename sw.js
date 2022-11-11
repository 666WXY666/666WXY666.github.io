/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","20a25a75aafa2876383ca34915516416"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","6644f5c104b42ce5501c20a722bbe410"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","c45b85b583f9f1c05bb9622d2c550bb5"],["/2020/03/26/计算机系统结构-实验1&2/index.html","92ef70030d48c5b043ac7d59d4202350"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","9a2ce6d86cd006c00f5716e8a37d5c85"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","d52d111716d6b5b114fefc728bd2e1d3"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","8fb189943d4d72d2015a0e78a9803654"],["/2020/04/18/机器学习-条件熵/index.html","6155696f6c2a7b9bd92a1605a8f47d3b"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","3e027cf4b637545ced9dd64b2a786c0f"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","685726e43a9b1651d78839f82d35d2ce"],["/2020/04/26/机器学习-实验-决策树/index.html","a68cc1f07188205b1c286cc32da1819a"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","f02abdae67ceee1bd38e4814fc8aeead"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","57b0fd21b83fdd05b8718f542ba77e41"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","963eefa399f9810e5dcb26dc7817a13b"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","b92f50d8f0e4358fdd64a828fb02cb20"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","dae35b20944204c2e59a5d1958e81bc1"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","25cbcecc23198dfa5c6a379bb10e30e2"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","607655c6f980a7a0b2cd4d8288d74e9c"],["/2020/06/11/机器学习-DNN-手写识别/index.html","5a819602153221ceb535cd12a9cf3900"],["/2020/06/18/大数据-习题/index.html","c7f9f1c84d66f41d4ae5deaff475930c"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","644148886c65a3210b2c264554dbd36c"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","1c0921a15a48a58e36f13fa765f75f4e"],["/2020/06/24/Linux-拓展学习/index.html","2d01bd75aa715f051ba84a654879390e"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","b8141de2ef80fa9f8fdc791aa5c63f6d"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","75358ae374ac1edc9f79aa9a370865ed"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","8a216544c4739496e717575a770f8d89"],["/2020/07/15/C和C++的struct使用总结/index.html","ce45f5702e766436eea33220e76d6c74"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","99add9e646d69fbd08946b13d9c3342a"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","3d79141bb5cfc6b60f3c88c46ccb969f"],["/2020/08/10/机器学习-实验-花卉识别/index.html","17857f8e11ad4f522c35d9acf361d81c"],["/2020/08/15/Python-项目集锦/index.html","0d6552cbdc8fe8768ea62b86a84a68a5"],["/2020/09/01/编译原理-词法分析/index.html","34e1fadf881eb8c8726470b37ada0243"],["/2020/09/02/编译原理-语法分析-LL1/index.html","76b0b17f31d105c4c966dc9ad27e91b2"],["/2020/09/02/编译原理-语法分析-LR/index.html","bfbcaaefd70b4d186f9e52879b9449b8"],["/2020/09/03/操作系统-内存管理/index.html","81c38355686a9ab64528c1b0d673366d"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","8925c4ef6e08dcc46822afc590abb85e"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","ed9a0e26dba9cd273e79c835b76e2f19"],["/2020/09/04/CSAPP-实验集锦/index.html","0abf50a10b79847db23426601df7b977"],["/2020/09/10/计算机网络-实验集锦/index.html","170dad3ea569bad7e22f54e5e04a12c6"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","2930af2e3490442c1ba5c75766ef6f6a"],["/2020/09/30/C++工程项目-JobShop/index.html","7b29fa654d452f82f2d5373b8f1d956f"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","2b3142f7a87516763f6244e52f0bd2bb"],["/2020/10/09/现代交换原理-实验1-时间表调度实验/index.html","c2d6cac615cbceb1a34087223958eff1"],["/2020/10/09/现代交换原理-实验2-摘挂机检测实验/index.html","d7a943cff50fe1949b87664f6fefcae4"],["/2020/10/09/现代交换原理-实验4-拨打SIP电话/index.html","25c831177b8183bb7ee9c1e847ee79b3"],["/2021/01/04/Android-项目集锦/index.html","f0550f3247c79e9244a8424db25bee87"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","9372acaf709bfa961f71142a7e187641"],["/2021/01/04/C++工程项目-travel/index.html","df29f27d4907db934b63808f0333cc6c"],["/2021/01/04/算法设计-分治-最接近点对/index.html","444939dd9bf2543c4e534629ecbeb722"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","c5bc9d54176a4ca7da97f29e49944ba2"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","4c6693d6e44105adb2a146d6fbabc92f"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","358ec554c8c28acf679cc90a7870c7e5"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","d2c5765e56b5b7ebee5ad8facd35f912"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","f61a9d626d3c85a4f8067cf2536c001b"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","574f5f67a0d9ca03cce5147b314b3eee"],["/404.html","2394b59b860bfc1b2a641e2bc2300ffb"],["/about/index.html","310b12184a4e844f7d4ee721a92fd191"],["/archives/2020/02/index.html","3e795d37bf1e2e6d661669192843ce8b"],["/archives/2020/03/index.html","2dfbf198b3f0fe857d5fe4e9e9091f5e"],["/archives/2020/04/index.html","209890235820b295416152643ba4ecc0"],["/archives/2020/05/index.html","04961761cb2300550ebe7b9d8b970170"],["/archives/2020/06/index.html","e30ffd60e863f810aeb3db9c34224e4e"],["/archives/2020/07/index.html","2201decbb12623bb0377b608725b761e"],["/archives/2020/08/index.html","d4ab10a558f551264861124877b91365"],["/archives/2020/09/index.html","c138fa0298e9a1e14fcdbe5e4a48e8d6"],["/archives/2020/10/index.html","d7b79688e7b85ec0bd8182c82a500842"],["/archives/2020/index.html","8d00d4cf2e9d781fdefb9a9e95af912b"],["/archives/2020/page/2/index.html","ce5241a1b3b03365d64832263a1bb4c2"],["/archives/2020/page/3/index.html","c9090889ee88ecf5b7aa178a84e8d5b7"],["/archives/2020/page/4/index.html","7ea90ec4b80bb1951c30ffb10841cc3b"],["/archives/2020/page/5/index.html","306299f58832e3384d5bb525332e1398"],["/archives/2021/01/index.html","1198796309c42552a25127d9b2e4c4c2"],["/archives/2021/index.html","239f485fd5c3a136cff8de44fa5c3b7d"],["/archives/index.html","5a31763926e0422c091a5099120d2424"],["/archives/page/2/index.html","5a31763926e0422c091a5099120d2424"],["/archives/page/3/index.html","5a31763926e0422c091a5099120d2424"],["/archives/page/4/index.html","e16107d549fab86b4242e1ed966cd4be"],["/archives/page/5/index.html","e16107d549fab86b4242e1ed966cd4be"],["/archives/page/6/index.html","e16107d549fab86b4242e1ed966cd4be"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/bb/index.html","1068765c0b95a1589443987b5ac089b1"],["/categories/C-C/index.html","c8999093ed4906de9d7203eccb012d4e"],["/categories/C-C/page/2/index.html","ebcaf96cfa4826bbdc330a25edb586cd"],["/categories/C-C/拓展学习/index.html","a8095c3d52de79082e7a2779f378bfaa"],["/categories/C-C/操作系统/index.html","5edd929216d8bdb5d51b1c9d53570dc6"],["/categories/C-C/算法设计/index.html","04d0071f30705fffeed6e856251c66e1"],["/categories/C-C/编译原理/index.html","ef9a199c7696a9c320ec5b751f34be20"],["/categories/C-C/软件工程/index.html","07d4bf12ac26bf7c49951ec9be1664c7"],["/categories/C-C/项目/index.html","4b9f774a50e565434a4aa75a2ae7e814"],["/categories/Java/Android项目/index.html","14294be06fb21e32c3f10e15c5fd10e9"],["/categories/Java/index.html","f7f4fe7fa2819736b7e7a73b2936b14e"],["/categories/Linux/index.html","ae1a842ae6937a4d53c503eb96dbf754"],["/categories/Linux/上机实战/index.html","dbcf0f6ca7b7591828d34cec87589680"],["/categories/Linux/习题/index.html","e30982f4880c1643ea41ce8af034bc6b"],["/categories/Linux/拓展学习/index.html","b6282f189acacec50579f35ab8456c90"],["/categories/Python/index.html","df29c4769fd1db76265828245f66c313"],["/categories/Python/爬虫/index.html","59585f3c543c4058a01f30edd93c35f2"],["/categories/index.html","cafaab415b2bdd0791d96fde6fe0d502"],["/categories/其他/index.html","2c2f5d4860ff08621d2327cf76ed6e07"],["/categories/大数据/index.html","82cbcca40e2fe30ac153a4ec6c40feb1"],["/categories/大数据/习题/index.html","e3a0ccb4ef3614ef5763aa6e1d573c15"],["/categories/大数据/实战/index.html","9224d3e92e7e7bc0295a9b66f58b7d6e"],["/categories/机器学习/index.html","77a920d3e998207defd5bdb63a832cef"],["/categories/机器学习/实验/index.html","711ab40656f335000e885bc7f0d7aba6"],["/categories/现代交换原理/index.html","fb413956409264d4527183f849c2ffa8"],["/categories/现代交换原理/习题/index.html","fefe0baeffabfe5ab9c240840e7f2b2e"],["/categories/现代交换原理/实验/index.html","27fed3f36434d21a62e93dbd0ff1ea07"],["/categories/计算机系统结构/index.html","33360de7d421081fc8ee96c1e0ffe4d9"],["/categories/计算机系统结构/实验/index.html","50664caa5cff05fc8c4fc67e7f6d87ef"],["/categories/计算机组成原理/index.html","d2995da0143017d0e0c30f7c0e4d542e"],["/categories/计算机组成原理/实验/index.html","d148a0852bbd0b8158dd08fb2331b3ef"],["/categories/计算机网络/index.html","2a3191919eda708145c9c9668633fb9a"],["/categories/计算机网络/实验/index.html","5c7e4b4e13ae6c238dd4c17b1119e093"],["/categories/集锦/Android/index.html","fa029254013fa0388148ce74f7cf8e78"],["/categories/集锦/CSAPP/index.html","9d0d8d724002284d37492fbe4bad1501"],["/categories/集锦/Python/index.html","7342788c96df74c3b63490c88abb72cd"],["/categories/集锦/index.html","6ce373e70abf8adda511b3a8ee24f1c4"],["/color/index.html","3f627143356419f7f54e1443b3536f0d"],["/css/first.css","ea01aa1635810499a5ade558f4f81d56"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/style.css","4b6ce514c846132c606ce76da7e1c124"],["/friends/index.html","2f61762edf6a44e13bf896c862ea4138"],["/gallery/index.html","cac0a9f9094373909cca2398b08a7aa4"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/periodic-table/index.html","4c31220b3c8c1d35b1128df43b2c9dc3"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","aab2886d0f58334e4f2f79f8f69aef87"],["/js/aplayer.js","6e605f0855251e101d3024646f3eac60"],["/js/app.js","1948329f2fd7e750ade4bdc49138c09b"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","83dbc817a03804bbea6ea24bd981cd36"],["/page/2/index.html","1aebce09561aba2add5abd1aec4cf224"],["/page/3/index.html","0dbe0ade714eb21f87757a90db5e446d"],["/page/4/index.html","d8609d4762ffea26e76815064a360748"],["/page/5/index.html","3c1b353d717682f799e2d2fd43cd05cf"],["/page/6/index.html","834f0a9179224bb921e56fddfdc4b2cb"],["/shuoshuo/index.html","e2fec9c3c96b2ee441fd32c9b0f189ac"],["/sw-register.js","3d035c4f6fe9cdf930313ab9750f88e1"],["/tags/Android/index.html","326980a28f41baa7e7a6edce4b71e564"],["/tags/C/index.html","b61d0d7929d1da62370f93350ce875c5"],["/tags/C/page/2/index.html","e467dd57da9077497a97d51e0aedb45d"],["/tags/CSAPP/index.html","853122f7b202eb27b6b2bbe1f61d8f24"],["/tags/DNN/index.html","ef250e570c56b7d009e149152f5a7da2"],["/tags/DNS/index.html","cf4df70c4bfc74eb7469231044ca23eb"],["/tags/FPGA/index.html","7242c37a5c824c35cb4a00a7016b9781"],["/tags/HDFS/index.html","ba165d07a14078b4fdba8cdd27ec6084"],["/tags/Java/index.html","b31e8fa59e33d8f61210dbc95923c2a1"],["/tags/JobShop/index.html","52630c420b3e6cd5c2758cb7f4fa20e3"],["/tags/K-Means/index.html","4d67d3e2a4f39de31ae6876c8ea2b4c3"],["/tags/Kafka/index.html","3409866b16fcd8102f5381ceb97972e0"],["/tags/Linux/index.html","2cf09687059a20604b7cccd88d705cf4"],["/tags/MIPS/index.html","962b42e29221110b63f58d1893fb9f3e"],["/tags/MOOC/index.html","243d04c85ffca5ec1e8b4f303755a577"],["/tags/MPLS/index.html","7a0ef9b0c48e6ee216917a1e246807da"],["/tags/MapReduce/index.html","eec12ec85747648be5110bb2630e4e25"],["/tags/Matplotlib/index.html","7a71731a0db5c52423c297f0cc964ee7"],["/tags/MiniSYS/index.html","287a5da74d2f054ff4f9e5c0940f532f"],["/tags/Python/index.html","7b8200f81f2cbc529a04ddf4c771d5d2"],["/tags/QT/index.html","79c5e7f2dbdbda681c4c32dfe8c49d28"],["/tags/RNN/index.html","1cefc4fafbcd7519ed0f4fd407bbdf88"],["/tags/SIP/index.html","f5c5a522fb9a275f342a2f4bee47de0d"],["/tags/Scala/index.html","4e0b6341dd208ba372f9726d2e94a60b"],["/tags/Shell/index.html","9b89a1f31b52b3f47e7c5da8d0511ee5"],["/tags/Spark/index.html","181638f0e0f7ab430eae3dc4019a1780"],["/tags/Streaming/index.html","02a73a76a9df3e7d37dcb46f05f0bb8c"],["/tags/Verilog/index.html","6d71c590a397a05e12e51c85a15b732e"],["/tags/first/index.html","75caf6c818b68e9b7d9fafb471c83a80"],["/tags/index.html","4661b1ced6f235a196963150da086dbc"],["/tags/习题/index.html","4e6a573870b02b76f7608108282bd900"],["/tags/决策树/index.html","83fc1d7a0e74314d932ba987407788e2"],["/tags/分治/index.html","843b880afb297731e61cb976a264c08b"],["/tags/分类/index.html","056019ad1c69bcf7519389332efe5c61"],["/tags/动态规划/index.html","d1f60114c6e24b19a41c17f5f86a81b1"],["/tags/华为云/index.html","3c1ac13c9319c3cba549c6280f41266a"],["/tags/同步互斥/index.html","fa4febbd8e92c21281f2d89978201ce3"],["/tags/大数据/index.html","c59e97a7df641defdc434950e6200512"],["/tags/实验/index.html","c3cc40553877528e8784b8bee87c0eb0"],["/tags/小游戏/index.html","504434f8e8b9b6ab3f0ac0b133c79b9e"],["/tags/操作系统/index.html","c55d8da9ff6b99fd19514909d79f3e72"],["/tags/日志/index.html","e29c6c3abbcafe1b70e7aa8e34acde84"],["/tags/易错点/index.html","24ccdb77ed6ed5e49e3898b8814970c9"],["/tags/机器学习/index.html","d7266aca54465ef51633e1e44c22e5b6"],["/tags/正则表达式/index.html","6b90c8d5583fdda281bacbc8d99f2b36"],["/tags/汇编/index.html","72fceb6004090a33ab9ecb12f230b431"],["/tags/流计算/index.html","9e6e66bd3b4ad7e76f63f8063ffdb3da"],["/tags/爬虫/index.html","37b8dbed458eb4dc6472bb027a568070"],["/tags/现代交换原理/index.html","ba27ecf32434561b391cc52182057c68"],["/tags/生产者消费者/index.html","efc2ea0187815c29a9f2325c25c26741"],["/tags/算法设计/index.html","a6a98219d01066818e601e05fa86b24c"],["/tags/线程/index.html","2004ff2d2a7d78697cd19e941e73e9bc"],["/tags/编译原理/index.html","e42a23f9d7c62cbfe0b1b2574ecd9d3a"],["/tags/网课/index.html","ed02aa418d01afbb59c803598c234f62"],["/tags/聚类/index.html","16ff35354fb548d1f2b00d2946e6787e"],["/tags/计算机系统结构/index.html","477f17a18d9b696989613263c7db11f2"],["/tags/计算机组成原理/index.html","6c0185e02878fcd1d2e3adc2a0aee23c"],["/tags/计算机网络/index.html","bbb816efbdb1713e4101abc2bfec1f76"],["/tags/词法分析/index.html","ce42fb5dfd4e044ab46ceb424c9dd40b"],["/tags/语法分析/index.html","a57fa9bcd946f425627446db444e4962"],["/tags/读者写者/index.html","fc742ab3c20ff0331e8e3193575677f8"],["/tags/软件工程/index.html","b324c4bdf409c57dd714912c89cccc1e"],["/tags/进程/index.html","8f1a2a34207adc0ac849d1d886d62c8f"],["/tags/难点/index.html","a21e8d320e2f199cf03e20e89fa88166"],["/tags/集锦/index.html","2cdd5d2ce229534dcc5db0872c891f4c"]];
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
