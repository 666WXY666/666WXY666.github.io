/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","362dc6ee1e486581c42fd52c326ed4ee"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","499d9e9673439d0587033e484a5184a0"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","cd1c6c0ef735a75aa8f0439881205be8"],["/2020/03/26/计算机系统结构-实验1&2/index.html","62ef30b271b2c9f4c30d9dace312031a"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","0c73361bbbb90267e51d542d57e4125a"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","92d0031902333a3e9f93a97bffb9c8c9"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","87b4800bd4c531e53ce27e9c86b280a9"],["/2020/04/18/机器学习-条件熵/index.html","dc00f02469287258ea9dd734744481f0"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","b5c3d1d139f38d6b838f7380cf781efa"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","e3ed511e6f0517257be47f75e328a037"],["/2020/04/26/机器学习-实验-决策树/index.html","2343c91c4776a2612db4b115a58dec92"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","921f9689c67e15aaa679d48ad50cf928"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","824c2d64a13006f23d9d72b8556d0112"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","76f7b7e345250adfe5b223c66632c61f"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","e7c401114b673e91ef8c22d01cd6c244"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","d87cc3af84f98ff5f36854de492709ae"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","47453c4fcfcb7670faaec387656b7c41"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","9906b69649a7a39ea75b1803b106853d"],["/2020/06/11/机器学习-DNN-手写识别/index.html","67fe854fe9b7d773461c441260d76507"],["/2020/06/18/大数据-习题/index.html","f64758c5776af00745652dad79afb61e"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","6550d042f9a1cfdaa7d1bb54457ae6b3"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","e92ad468dd677494f573476b35b9e8e5"],["/2020/06/24/Linux-拓展学习/index.html","2ae867224e4989c60f8586fed7ee525e"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","48a836de1a1868e5da7280ec5d2844fc"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","25a8499f96e03a0e7e643c29ae0b62b5"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","323ebd546293d86a4d315514414ae978"],["/2020/07/15/C和C++的struct使用总结/index.html","9f12f73efcf729ca049b0ef1b77b8b12"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","13654a04998cafd4213d942baf41b1a5"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","3da360b17ddcff26859f2d5f4b08e4f9"],["/2020/08/10/机器学习-实验-花卉识别/index.html","a606c9887e0a2bb677f2586971ed300c"],["/2020/08/15/Python-项目集锦/index.html","830874c18bcc879ef4c0a497716a948c"],["/2020/09/01/编译原理-词法分析/index.html","df43e6c00720b4605b22e24d4ee2bd7b"],["/2020/09/02/编译原理-语法分析-LL1/index.html","4552e0e29f9b2a069abfbdbf0d1bccf6"],["/2020/09/02/编译原理-语法分析-LR/index.html","0d9afcfb2c06a9f12f68f162fc4a7c14"],["/2020/09/03/操作系统-内存管理/index.html","f99cd313084ddb1cf8ef2ec3f0d60416"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","833a22eff6c472f95b5507397ecebf2d"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","b720c7c769e46f8509ff255c4967906e"],["/2020/09/04/CSAPP-实验集锦/index.html","050c5f921a598c883c9ee12025c7aab3"],["/2020/09/10/计算机网络-实验集锦/index.html","342bb8326c36add01be9784dfdb7e488"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","243958a07577e656bf1958c34c0f61e8"],["/2020/09/30/C++工程项目-JobShop/index.html","1bd72c0cb0bc6c18bd09eb59c4f05158"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","7a34fbb2320cabf373aea3b7ddb4ddac"],["/2020/10/09/现代交换原理-实验1-时间表调度实验/index.html","9275c0316c5e150c6aaa41aca97f1846"],["/2020/10/09/现代交换原理-实验2-摘挂机检测实验/index.html","0971524a1207623466e5cb82da54aaee"],["/2020/10/09/现代交换原理-实验4-拨打SIP电话/index.html","a88efbc7c21f44a8c77b02e353f3b0f0"],["/2021/01/04/Android-项目集锦/index.html","8162231154c13356632117e3f183ba6d"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","7a729f57ec682a444d62ecfb32ea8183"],["/2021/01/04/C++工程项目-travel/index.html","5b9c7cd29b1c5b8a1b0b8c73ff72b35c"],["/2021/01/04/算法设计-分治-最接近点对/index.html","12c197540d4c7b0b720464debb8ef854"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","217e4d0cea9c9d90edac4c562ca1ce20"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","96ce247e83da85eda58bdff6aee2deb0"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","75735a1b95df33350b79ea5fe70bb971"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","726696fa32a39e05124e45b5c9b0a6f5"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","af729139269df2a1e5724260f15894be"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","0a7f221d0c55b2ca9824335dcf5f7a06"],["/404.html","2394b59b860bfc1b2a641e2bc2300ffb"],["/about/index.html","e0ea2c8993d02f10808449164d25cc3c"],["/archives/2020/02/index.html","8cefa8f6b3980fa2f251bdbbc2b9b15d"],["/archives/2020/03/index.html","d577cae29c0a9f1d077c6b8de9a603b5"],["/archives/2020/04/index.html","3384cc915444bdb5cefd68eedca65df0"],["/archives/2020/05/index.html","9d6618582db790ee92d2e6bacb81d6bc"],["/archives/2020/06/index.html","56392527d7445ee133bbe4fe8cff07e1"],["/archives/2020/07/index.html","b08b151c9d24d4b9fea6a409ffbb7ac1"],["/archives/2020/08/index.html","c3fa8e0e9e79ae05da305401bde77b35"],["/archives/2020/09/index.html","4e4ef8607f8cf3bf8b8e66123f0581d2"],["/archives/2020/10/index.html","6fd6cc0512c51158691c51c9f2907676"],["/archives/2020/index.html","a9b43974bd10db503b656c066481c088"],["/archives/2020/page/2/index.html","05dc3aafd7437379c134fb85ef2ecd64"],["/archives/2020/page/3/index.html","272d36a9ed79f4d2649749c1d52d1986"],["/archives/2020/page/4/index.html","a4a3167d6610552b3ac1474feaef3d21"],["/archives/2020/page/5/index.html","800df41f6494247e370db73c8967d1fb"],["/archives/2021/01/index.html","ad00f4eac73375f48ee1ebeee4752201"],["/archives/2021/index.html","bf9cb0cf3686f0668d0683909c4b0d0b"],["/archives/index.html","395f96f158b65bfd40311e0194a780b1"],["/archives/page/2/index.html","395f96f158b65bfd40311e0194a780b1"],["/archives/page/3/index.html","395f96f158b65bfd40311e0194a780b1"],["/archives/page/4/index.html","395f96f158b65bfd40311e0194a780b1"],["/archives/page/5/index.html","395f96f158b65bfd40311e0194a780b1"],["/archives/page/6/index.html","395f96f158b65bfd40311e0194a780b1"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/bb/index.html","c7a4b9d91f350738637dabb9de581427"],["/categories/C-C/index.html","092258f5dd807b9135e1d7ba9ae81caf"],["/categories/C-C/page/2/index.html","1d45d61de261b16c83eee3f899bcea5f"],["/categories/C-C/拓展学习/index.html","252f8aea5c59fe87ca460e6d92e6291a"],["/categories/C-C/操作系统/index.html","2d08a2ac72ab85ab15e41a0ec17b1e2d"],["/categories/C-C/算法设计/index.html","85e81376cd8f1653af98888d92cde05c"],["/categories/C-C/编译原理/index.html","b6431182a7fc3b5f873a059d9194ee85"],["/categories/C-C/软件工程/index.html","d427b8c619570f5def44cc92551ee2a2"],["/categories/C-C/项目/index.html","79230d72e97deeef0056dc60ec2be89b"],["/categories/Java/Android项目/index.html","3e53ead2aa479d7270b16de81d881761"],["/categories/Java/index.html","b9a3e17ebcc6377d6865eac3b3464b6d"],["/categories/Linux/index.html","68321568ea609fd576f2eeb5aec15bca"],["/categories/Linux/上机实战/index.html","2ffcccaa99d35ef6c80f5055f800c379"],["/categories/Linux/习题/index.html","e64375a727fa089c0e9c962c03edb83b"],["/categories/Linux/拓展学习/index.html","034a4bec67ecebc118e01c8bdc760586"],["/categories/Python/index.html","0b112b19d251c2cdec48f9c5d59d5e12"],["/categories/Python/爬虫/index.html","d1fb29340300d76777d4b51eca1b0337"],["/categories/index.html","f0ec796cb99105b7022532a64e3d6da7"],["/categories/其他/index.html","d41eba6a2bae6192d687fdf1a70ec69e"],["/categories/大数据/index.html","3947713b63e465a2873ad78084296ef3"],["/categories/大数据/习题/index.html","f450e59013942b5489cd3da00286a5ad"],["/categories/大数据/实战/index.html","992c0a214e029e85c1335048f0ce0382"],["/categories/机器学习/index.html","c97ccb74edba78e9b2b1176ba6b9f136"],["/categories/机器学习/实验/index.html","e68a06e6cb6c8c479718dce0a4e090fe"],["/categories/现代交换原理/index.html","89083702b07169f323710d32b3247933"],["/categories/现代交换原理/习题/index.html","961b1436ce287cb9867a5d37984dec7c"],["/categories/现代交换原理/实验/index.html","aced1ca7799a183e73009c449cd259ee"],["/categories/计算机系统结构/index.html","d51d209f9b45e390e99c7da1c0a0c50f"],["/categories/计算机系统结构/实验/index.html","21dbde00e6ac3b66f5b73514c164e5fb"],["/categories/计算机组成原理/index.html","e9b4bd03b4b6269a3c0746071acef8e6"],["/categories/计算机组成原理/实验/index.html","82b6153425d4d5af58e5352919290341"],["/categories/计算机网络/index.html","2757247ec702dec1d15809ad560b8486"],["/categories/计算机网络/实验/index.html","902db0ac8e97ce17343c028676bec4ed"],["/categories/集锦/Android/index.html","a90668470ba5d73ca56157039ca4cc31"],["/categories/集锦/CSAPP/index.html","f40afe4e907175b0a9d71c49b8067086"],["/categories/集锦/Python/index.html","0583e10bb4109c6bd5a2e111036d5015"],["/categories/集锦/index.html","419841158c532c33cfcff8d132b0a762"],["/color/index.html","3f627143356419f7f54e1443b3536f0d"],["/css/first.css","ea01aa1635810499a5ade558f4f81d56"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/style.css","4b6ce514c846132c606ce76da7e1c124"],["/friends/index.html","71647a494c892d8ada635a2ee4e44561"],["/gallery/index.html","cac0a9f9094373909cca2398b08a7aa4"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/periodic-table/index.html","4c31220b3c8c1d35b1128df43b2c9dc3"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","0c4b67eccd3f8f2bc9e80bbc5332236b"],["/js/aplayer.js","6e605f0855251e101d3024646f3eac60"],["/js/app.js","1948329f2fd7e750ade4bdc49138c09b"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","7b5982ba0693cc13b7e0a390b3648ed1"],["/page/2/index.html","78c7e34b03090c2f29afb9ab898689c2"],["/page/3/index.html","61b1d89e7b7f89f68ff50d18414af147"],["/page/4/index.html","918c40a29b9a42a26116963f29309ba1"],["/page/5/index.html","45162f7dbe0482ce76d442c28033b395"],["/page/6/index.html","e07cbdbcb1de2a6f43d14cba98f98907"],["/shuoshuo/index.html","a99326477facf046eef81e48562aa6ad"],["/sw-register.js","58d790149d4e5ea5581da5a3a7bdf78d"],["/tags/Android/index.html","b30b4e9f1b3029e1f61c0ae4cf0b7ed6"],["/tags/C/index.html","f1c35d32c634fa993b5a06b80fc14274"],["/tags/C/page/2/index.html","770444a4abaabc44c37773f72738ce2f"],["/tags/CSAPP/index.html","0669d4241de1b7a55d1981d751888601"],["/tags/DNN/index.html","82093161ca8f197adb222c838b78751e"],["/tags/DNS/index.html","3ee9614a30491e5ada36e11324da9ee8"],["/tags/FPGA/index.html","9da2dfaa942ad27f96f8f2ce1e7c3993"],["/tags/HDFS/index.html","4c111df6b4d5d269418c66cf0d024315"],["/tags/Java/index.html","da0a6ec2f8637b4bfb743964f29db767"],["/tags/JobShop/index.html","e1893961c9be65203c033868c4a4e9f1"],["/tags/K-Means/index.html","56b345a69b950d9a9d2c9fc366f8f4d5"],["/tags/Kafka/index.html","7e3b8bef8e3d9b4d2b762c0509f508be"],["/tags/Linux/index.html","46ada060a66968c2692b095eb3e31548"],["/tags/MIPS/index.html","e1b1eb6bccf085ab1f388bde961983b1"],["/tags/MOOC/index.html","b13eb0512d2add0a0d79133e8f879a63"],["/tags/MPLS/index.html","15d5da711d4a4b69067361197a4a0b42"],["/tags/MapReduce/index.html","a1846d7ba861698ea88a106fbd97d814"],["/tags/Matplotlib/index.html","2a3e4511ea93ab6842e86d026d1ecfb8"],["/tags/MiniSYS/index.html","11216990774d81768ff804ffad805580"],["/tags/Python/index.html","e0fadd635a3a35532ba6e3e1bb7eca02"],["/tags/QT/index.html","f6c5d55822206f6b839a5fe049982d4a"],["/tags/RNN/index.html","186fc3951727d78bb139abac22e3c687"],["/tags/SIP/index.html","5d9cfa87982416595c3ba41bfd17d833"],["/tags/Scala/index.html","f9d96eb2f8b672b0dd0cc72f4be4df45"],["/tags/Shell/index.html","b2a02825405c741b9b6dfbb2752c702a"],["/tags/Spark/index.html","0e8d152e7c8582ad5df5c1babff7985f"],["/tags/Streaming/index.html","86e5f656ef6226ac9df0f5ebb2fd897e"],["/tags/Verilog/index.html","c24f4b31b4c45b41d7b5aa2dbb1d87bc"],["/tags/first/index.html","364f9d2094d3ed91a7c12d88f02ac440"],["/tags/index.html","518369f7a619054ded3d97d86bb6b96f"],["/tags/习题/index.html","efab4f7631167c0f97c2a558e017c326"],["/tags/决策树/index.html","25123c68e8a4bc8dd30454bfa6c7d2cb"],["/tags/分治/index.html","bf8cae1e322d8f414301827c40d3df23"],["/tags/分类/index.html","3aa4120babb4a24581f7b6122b57dd4c"],["/tags/动态规划/index.html","71cdf30595b60a8fd15518a9c7b0cb26"],["/tags/华为云/index.html","330031bf2e330d14c7618ac6d582764a"],["/tags/同步互斥/index.html","aaaf68949fc8cf584c6adacc51a13cf3"],["/tags/大数据/index.html","ad6088207fcbb8c0ce58052f51cdba94"],["/tags/实验/index.html","c15d7f6e2b2816c13286bc62e45e23e7"],["/tags/小游戏/index.html","bd7b9af58a3b651c17bb88f1406f2036"],["/tags/操作系统/index.html","72f029f0f1cf05b15cee9d79e52b031e"],["/tags/日志/index.html","f7e1f89caef0a035294a8512aab16148"],["/tags/易错点/index.html","f197b8c5f7f5c5241b1fdac8021639bd"],["/tags/机器学习/index.html","7f88656b6cd29cd0b863278f8001077a"],["/tags/正则表达式/index.html","934f92ca2fe7f73b47aade3150168db8"],["/tags/汇编/index.html","1ec18f8c04f0c096b8a112a09f72d140"],["/tags/流计算/index.html","23261b4a504a4eea40d6bd20aaf2aaf1"],["/tags/爬虫/index.html","2cb52f9c2b87a16ca59946b3edb26cf5"],["/tags/现代交换原理/index.html","efead61165c58e0d89be588699ac482f"],["/tags/生产者消费者/index.html","5eb45981a6925351ce35da76fc4b11dc"],["/tags/算法设计/index.html","b3522d481abb9a00e0a2fc71c9fc6477"],["/tags/线程/index.html","975e8b9a252d23b9b512c9af6009d623"],["/tags/编译原理/index.html","bfda33dc15646833cb54c45ef8b083eb"],["/tags/网课/index.html","3e789e7d31b9b9ae9f6778e7cb959950"],["/tags/聚类/index.html","05b699cc6c4d7fe065e0380806ff29bf"],["/tags/计算机系统结构/index.html","905def6f87bf04ed38434fe4dd05acf6"],["/tags/计算机组成原理/index.html","6195e4b4bda54906366c43f442ace80d"],["/tags/计算机网络/index.html","db258197e47fd6895e1e3a81f8d2258b"],["/tags/词法分析/index.html","6e432381babed479577c92e2d28ff163"],["/tags/语法分析/index.html","6cdcdbf82d3b9d5e48dd86cb5fe0eb03"],["/tags/读者写者/index.html","f450b2821c4a0c69e0ad4561f785c7fe"],["/tags/软件工程/index.html","82147a93e1bbd89162e840205e6c8bf3"],["/tags/进程/index.html","126193c7a379fc4f647346ab3ac6f52b"],["/tags/难点/index.html","d40cf684c2afc70178764b20bc0d8652"],["/tags/集锦/index.html","d4cc33d63b4008ce7433914b594ae5e2"]];
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
