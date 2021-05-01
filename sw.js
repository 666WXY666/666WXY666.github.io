/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","120d287c7d3a2dd3c820da4ea769cb21"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","64833989d675802ccdcb3e68548b0e30"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","da29bb654b6ba6e5ecb5684e37581113"],["/2020/03/26/计算机系统结构-实验1和2-遇到的问题/index.html","680d91f7e0a524f35426187e6d8f53a4"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","edeb58d1fccde60668124ec5586c1d80"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","4098bc8aae317102eb187b08022a58d7"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","9fe059734d318d5877019db660fbd51d"],["/2020/04/18/机器学习-知识拓展-条件熵/index.html","166c3d83260a67cc57f47513e7083f54"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","5a1ef3efe7f1ef01463dea7e34fffc0e"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","01ff7417662085c16a2f8bad42b1eea6"],["/2020/04/26/机器学习-实验-决策树/index.html","825dc69843dfa46cc9a63abc76250d6f"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","d2bf8e335c3cf789c908b097c82d52f5"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","18d47140729a2b5946fa301e7c1e8e81"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","be68907bec4dccd27cec8cc5ad770a16"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","e845f8f57dd3e673ba73dd220d3c6af5"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","a48ff8aab348b43d3a8fa1ed3012f7d6"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","3c13fd8e112a3d56a7b71b6f4964e905"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","007705c6280973de64082ff92e1c2c90"],["/2020/06/11/机器学习-实验-DNN-手写识别/index.html","0f8f5add04b79696547de824a0909646"],["/2020/06/18/大数据-习题/index.html","ab76705ef0057aba1b466d14547de26d"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","f5f957f836f6d109dc7f406d1752f2c3"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","735ea570e0f3a06f9895e84533e0adf1"],["/2020/06/24/Linux-拓展学习/index.html","a6391d4d8834bd3e7c5c9d5a2c71454e"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","e03c775a65beb78f1a50ea856073975c"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","2622d3369a801be11899352ac83d35ae"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","63fb6fc13c0d25b41ef12ee8fef0d2c9"],["/2020/07/15/C和C++的struct使用总结/index.html","b2fb64d295cc2eb67719e9c6a1a3cbd8"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","9c98e8a1c5a8dc21aa27dadcb4551f34"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","f0e1de4b891c3489f911d446be9be6e9"],["/2020/08/10/机器学习-实验-花卉识别/index.html","b8f244a15be09b288adaadb5f03d1c2f"],["/2020/08/15/Python-项目集锦/index.html","5183f955a10111a4156d3ca384a13be1"],["/2020/09/01/编译原理-词法分析/index.html","16998ae53625f352792f36df83b1dbc1"],["/2020/09/02/编译原理-语法分析-LL1/index.html","69d05e1c62509e67c8f38f175c673ae5"],["/2020/09/02/编译原理-语法分析-LR/index.html","89f996880a9827728b980c8828733449"],["/2020/09/03/操作系统-内存管理/index.html","f25a12ab984cbed630b4ace354633218"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","788907a4923f0c40799236a6395c2155"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","1acdc3384b0320ebed0a67f7b00c388c"],["/2020/09/04/CSAPP-实验集锦/index.html","1787905e8079a35d23a2703c6cfc427a"],["/2020/09/10/计算机网络-实验集锦/index.html","360a1dac9c6261d63151e29f00112a8e"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","d2fb1c5505714ebff33989a43b2acd11"],["/2020/09/30/C++工程项目-JobShop/index.html","e9e219a25bb6482c609e8d25b2f56f89"],["/2020/10/09/交换原理-实验1-时间表调度实验/index.html","60a7f679075a36b50e6f60532f9228bf"],["/2020/10/09/交换原理-实验2-摘挂机检测实验/index.html","659549572f0cc52b7f0501eddefc85d8"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","aafd2755dc45a330b84fb11c2902dc79"],["/2020/10/09/交换原理-实验4-拨打SIP电话/index.html","629ffced1da1a80bbc197c261af2cdba"],["/2021/01/04/Android-项目集锦/index.html","767a956de6fed7e843ac6c8c98f2152f"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","1876bbd5c02d79957bc8286280491e84"],["/2021/01/04/C++工程项目-travel/index.html","ec5b85eab36aa689c075cdd3734e534a"],["/2021/01/04/算法设计-分治-最接近点对/index.html","e894e9a63cef13951423e2f6e682250b"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","1b19afc58443d903c5198ef5cc08a04b"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","5703bad034c1248dfdf4c10313fdaa58"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","eebb930d6d653b4a8d30ebab51df8e4c"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","f27659a22705222b0c8245f8378b3f02"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","e64e7a609178d37214b3998d2a274aca"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","3f3e80f91d009f2d8726a756a50cbd2f"],["/404.html","c049c654ac3d8e61e7360c2f1b0bc5ca"],["/about/index.html","fc5bddb48b495eb227adeb948d9c29c9"],["/archives/2020/02/index.html","c8f4d846ea75869715b53b41bbdff02c"],["/archives/2020/03/index.html","1ae329c66065ba05026b0582331f009d"],["/archives/2020/04/index.html","1ca3953bc8b863d4e1cd5fdbc1ffe3fb"],["/archives/2020/05/index.html","cb222116fc8c566a534a926ef82a7389"],["/archives/2020/06/index.html","10cdb0116abdc9980dae43f3a562c600"],["/archives/2020/07/index.html","74fc6d4458a4b86c3a53615e05cbb801"],["/archives/2020/08/index.html","623b6c59ffea883b640fd26c40a931dd"],["/archives/2020/09/index.html","a7bcc71f0e8874065105fe48647317b4"],["/archives/2020/10/index.html","1a24f9699d450b2517776d5e428311f3"],["/archives/2020/index.html","6e05be48424b1a98335c0de33f29167e"],["/archives/2020/page/2/index.html","c8e6b7d002a7009f2d03e2e7e96f8be7"],["/archives/2020/page/3/index.html","d865c699a21fbe58af9c20c8c7494f90"],["/archives/2020/page/4/index.html","c4b77ca5de543113ab6810995bf8a789"],["/archives/2020/page/5/index.html","c490931479eb892d7e30dd6aea67b55f"],["/archives/2021/01/index.html","1d465965851ed9b2fb5aa6013e212b04"],["/archives/2021/index.html","de36c23acddf07096405d95a2364fb85"],["/archives/index.html","2796893ce84f5cffaca71ce8168f8eb1"],["/archives/page/2/index.html","2796893ce84f5cffaca71ce8168f8eb1"],["/archives/page/3/index.html","fcc314bfadeac8ec86e7623906d2c5c9"],["/archives/page/4/index.html","fcc314bfadeac8ec86e7623906d2c5c9"],["/archives/page/5/index.html","fcc314bfadeac8ec86e7623906d2c5c9"],["/archives/page/6/index.html","fcc314bfadeac8ec86e7623906d2c5c9"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/bb/index.html","378605bd82b59124b85634f4a41d0b3a"],["/categories/C-C/index.html","93efa28934200411e1eade75d5edc3c1"],["/categories/C-C/page/2/index.html","6097b5991dd2e8f4b7b5d168f077931c"],["/categories/C-C/拓展学习/index.html","e89c70dd3a06bad050e8ed8ef983af02"],["/categories/C-C/操作系统/index.html","0b4931cc62edca9e233003302959ff7c"],["/categories/C-C/算法设计/index.html","44dea274503162faccbca7ced5bad67e"],["/categories/C-C/编译原理/index.html","75bc1e4119c8a50b9d298b89d76e4e96"],["/categories/C-C/软件工程/index.html","3b3910f321e9af63b5c1a17f301e5635"],["/categories/C-C/项目/index.html","f91a05cd8aa3d03068abd9b5fd22800c"],["/categories/Java/Android项目/index.html","3f23fed2af8da1006c8700483970ac8a"],["/categories/Java/index.html","690e66e596de03cf535440c471795622"],["/categories/Linux/index.html","be66054f3db7b6976d93e6ba2feb55c3"],["/categories/Linux/上机实战/index.html","263e460da525936eb1ebf157ffc657f6"],["/categories/Linux/习题/index.html","1ea07197f448b5783b3c14ec2c78c69c"],["/categories/Linux/拓展学习/index.html","f198ea3e728336dad3b7d7df75662480"],["/categories/Python/index.html","c662fce4ff4726060461686c09c39181"],["/categories/Python/爬虫/index.html","d25e69071d706af1dd633fb269df00fa"],["/categories/index.html","17baf9afdeb0dc34550c4ec2cd3fddcd"],["/categories/交换原理/index.html","338c43c9cc9b25b8a56da6e12bdef7d8"],["/categories/交换原理/实验/index.html","203a397cbc4cbe285527e98135d64a6d"],["/categories/其他/index.html","514038500622451922dbf22d63a7cf13"],["/categories/大数据/index.html","af29070bc7e576afd7a5dd3ce465ad63"],["/categories/大数据/习题/index.html","a9e13536983779daf3f6fab8fd3dc804"],["/categories/大数据/实战/index.html","c022ac014668f659e022e008a78002f4"],["/categories/机器学习/index.html","015e9d8fca6f2ddb0f42cbf2fa038fa5"],["/categories/机器学习/实验/index.html","4c835f265d0ff6bbbb31435d5cd809d8"],["/categories/机器学习/知识拓展/index.html","481e9c4012485dba9c6e6888d88ae254"],["/categories/现代交换原理/index.html","e7388f8e5d077f03e75bd1faf85a58de"],["/categories/现代交换原理/习题/index.html","d061ee03857aae4f93a686de31aedde2"],["/categories/计算机系统结构/index.html","e3e560d2c0aeabf55b438a20bf172ca2"],["/categories/计算机系统结构/实验/index.html","ac5ec1794b57783e9b317875563e0ab3"],["/categories/计算机组成原理/index.html","352bd3af2e093580ac3ef19697bca804"],["/categories/计算机组成原理/实验/index.html","fc99cf4e46e1b7257d628f8729caba8c"],["/categories/计算机网络/index.html","c782050bdccb1b430645df819e37c1bf"],["/categories/计算机网络/实验/index.html","3d887ae21d4923fb8cb9eb6d8a24a404"],["/categories/集锦/Android/index.html","ca50360e2373e88536f6d03a6a854a51"],["/categories/集锦/CSAPP/index.html","90d399577bf506288b14227ac50cddbc"],["/categories/集锦/Python/index.html","252c7515dd67b4f8b10483b695a1db80"],["/categories/集锦/index.html","f143575a1b0167458b1835b9c2ffce09"],["/css/first.css","ea01aa1635810499a5ade558f4f81d56"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/style.css","6bb0e006bcdf6e96b6708cbc5b8f868a"],["/friends/index.html","aebd023fc298f94ebb574dce8775d3d8"],["/gallery/index.html","63f4bc7639ebb10460b077618443184f"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","5b3ae083bfdeade0f264ab2adbab2bd7"],["/js/aplayer.js","6e605f0855251e101d3024646f3eac60"],["/js/app.js","1948329f2fd7e750ade4bdc49138c09b"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","429eee00fa62487b15020edbfb755c7b"],["/page/2/index.html","a228aebef2338bae0786ac187b1c127f"],["/page/3/index.html","6796d8b50851cd9bd48573faf985e4ca"],["/page/4/index.html","1d33cff37ffa6a5346ab7f4a6abcc7ba"],["/page/5/index.html","cb8449c6ff6f40bd43eb66241f1b5940"],["/page/6/index.html","e68fd6a032569e99289d98877e145bd9"],["/shuoshuo/index.html","759025df64811a0ff60bdb832b8ddaa2"],["/sw-register.js","ef32d70aad3dffc9f3751d3b03d3cdbe"],["/tags/AI/index.html","a2baab37d49820c20575ea7a9fac4e5e"],["/tags/Android/index.html","e22c16002bc266d5f089231c907466c0"],["/tags/C/index.html","25eac650ebf9fb92b0b5222c020984b2"],["/tags/C/page/2/index.html","6e49072f678d764b0c32ab5dff7bbc05"],["/tags/C99/index.html","cabd962a02c5ac6a57cfdbcf1826cdad"],["/tags/CSAPP/index.html","681cfe406d0553700ee6570a7ec94943"],["/tags/DNN/index.html","57f68502cd3e1ace90cab8f8a8509ecf"],["/tags/DNS/index.html","33f1fa9b25a7003fb64a4bd332a3f944"],["/tags/FPGA/index.html","8629a934b7e8dd357d1b7951e5753810"],["/tags/HDFS/index.html","07644c222e312f394ebf4659e901689e"],["/tags/Java/index.html","23a0a7fb2068ed196959d23c95b83d3f"],["/tags/JobShop/index.html","e4d3540408d1314a6724e294352d7234"],["/tags/K-Means/index.html","cbe2181c4415853576f9fe513209b54e"],["/tags/Kafka/index.html","e4548a2555c14c70185353cf535a0cea"],["/tags/LL1/index.html","8649660a4df503d7013db1d02d48a418"],["/tags/LR/index.html","b52856a8cd664542d143c0b7333c9578"],["/tags/Linux/index.html","b28815eccc36ce4e5be175026b929848"],["/tags/MIPS/index.html","e9775cf5d390697ce30e72f5bda902c4"],["/tags/MOOC/index.html","a753b95d3a04b3ae381b6d086febabcd"],["/tags/MPLS/index.html","5b5a01ff2bc248651e667719c4d9b386"],["/tags/MapReduce/index.html","d134fb397d6dc170d2161326b0873db4"],["/tags/Matplotlib/index.html","23407fa48239f83203c1a5d9dd608ac9"],["/tags/MiniSYS/index.html","5351124b80311372dd6dd33421dfb988"],["/tags/Python/index.html","0fd40d816c2ab711d84ed47f9e79721e"],["/tags/QT/index.html","da60780f0554402fd9746c0e002a6b84"],["/tags/RNN/index.html","05aafa02e4760f02c6739bc9d7f68d8e"],["/tags/SIP/index.html","94600593e840180c70fab75bf61ea694"],["/tags/Scala/index.html","30db8d4a471a2193d696570898ea8762"],["/tags/Shell/index.html","45e7eb72c12452b1ea7cfb18a415f4a3"],["/tags/Spark/index.html","befd2e180d5050a99889048a0004b778"],["/tags/Streaming/index.html","9923472bf75c9d6128a0714a00ecde06"],["/tags/Struct/index.html","0e810361cb9a98d39160140a6472fc6e"],["/tags/Verilog/index.html","cdf00e63bfefe02fbde76ed228aa5b65"],["/tags/first/index.html","557c09617c73553bbb63bd9a92d12df9"],["/tags/iPython/index.html","06134dd17a92396e9b14b62fc8ae9eb3"],["/tags/index.html","8b987d20dc4304134b795f688a29b03e"],["/tags/ls/index.html","cc02a71d80e2c6a315e82d04f802654b"],["/tags/习题/index.html","5d0ed510ecf36c0421a438ca39b0f7a3"],["/tags/交换原理/index.html","d0fffbec3a2986675e7ed775272135be"],["/tags/人工智能/index.html","e35f28240bddcf8d599b09304cc9757b"],["/tags/信号量/index.html","ff03346b0e0dcc935e7ea68d00564745"],["/tags/内存管理/index.html","37fe3546f6f9c0a2b77d3575ae1cc19f"],["/tags/决策树/index.html","c90c2e749290a46a98ad54ec587c90d0"],["/tags/分治/index.html","161cb95507f59134473a1012d03a9987"],["/tags/分类/index.html","3b129aec17ada4c9537ea74ea7abfcd9"],["/tags/动态规划/index.html","718b19ac7772c2079f8fbc65542fb87f"],["/tags/华为云/index.html","b4854e1967092991a5d0cf882fcf49d5"],["/tags/单词计数/index.html","a25d9b228b38438a167b0e7d87462373"],["/tags/可视化/index.html","a93a099c87370dc0067672bd1bb058bc"],["/tags/同步互斥/index.html","b8f6d8ae05679c26d7733c1948121df4"],["/tags/大数据/index.html","43fb53f2ae1f78a41a157ed5074fd173"],["/tags/学堂在线/index.html","6bbe1ce6524ac9afba37e4f73d560335"],["/tags/实战/index.html","9f1e0ca5942421158135b5c173096a91"],["/tags/实验/index.html","ba96fa982141eb2bd764298553e13ee2"],["/tags/实验/page/2/index.html","d693205fc5e7aeb4e4fa0907d3fb219a"],["/tags/小游戏/index.html","f603ef471ad9fa964a8d7462e7dc994e"],["/tags/工程/index.html","c336a0a5e52028ff53d124b75c5c7442"],["/tags/工程/page/2/index.html","d837f75f3377aa963c106f67b03b861c"],["/tags/手写识别/index.html","d1a64d2abd8d0bb3474d4c4efea8ad74"],["/tags/拓展/index.html","0b47e5352dbd2f406bff1e4ed26b5d17"],["/tags/操作系统/index.html","f75a44d019c99224f610d1942c1064f1"],["/tags/数据处理/index.html","157c4ecfc054e06861b7cf6a91ea9d59"],["/tags/日志分析/index.html","f03c87be473d1ecf7c6c2972fa6e355e"],["/tags/易错点/index.html","6e32335226b04553abac987d974b814e"],["/tags/机器学习/index.html","ba7161dac1d454789707ea9a3b6e454c"],["/tags/条件熵/index.html","04203faab3db807a01f222401ffc0060"],["/tags/正则表达式/index.html","7aa30442dc823d2977173977ebd8e3da"],["/tags/汇编/index.html","c06b600318ca0f52599a3124aaebc8b5"],["/tags/流计算/index.html","bfc9527b382ee780ee27c91dfb81f58e"],["/tags/爬虫/index.html","cfd1d5d221c8b6d220ad9cacf0555b77"],["/tags/现代交换原理/index.html","a2eb18b09e2db73839f24d6262023ce9"],["/tags/生产者消费者/index.html","b69e877c4599b4c2d8c481fc9e46d582"],["/tags/知识/index.html","ee6b53ea0998c0571752be829cb9489b"],["/tags/算法设计/index.html","cc7b55a92aa7dae276d5f89429be6ce4"],["/tags/线程/index.html","442fe8a80109f67e36f734b0013d29a5"],["/tags/编译原理/index.html","274f48e3a74a395e65858e1d02ab646d"],["/tags/网课/index.html","ddfbed32901855afc20f3e0a2a6d16e5"],["/tags/聚类/index.html","4babcc0d8b60c90bed1b8fd782e2b5a3"],["/tags/脚本/index.html","c9e10e1d882706f98529f714e637efc7"],["/tags/计算机系统结构/index.html","9a50656ba5fb704f1f83839df0e7f3e6"],["/tags/计算机组成原理/index.html","f9359c83829a2f13ac2705fe6ca9de57"],["/tags/计算机网络/index.html","f27c68ac7f3652ee8d9b13fa0290b935"],["/tags/词法分析/index.html","a172b99d88d1e6d1b00d18c7356d30ad"],["/tags/语法分析/index.html","83c88b56c3c538f51e91f3002882d477"],["/tags/读者写者/index.html","d66ecffb3c110727f296c4d3da9122ee"],["/tags/课程/index.html","5c4ce18c0bf3345e316e752560969d2c"],["/tags/起名字/index.html","92d9eabd85946477d9f24ece576b7e0f"],["/tags/软件工程/index.html","6586bb797d8216f9f3c3c9715825883d"],["/tags/进程/index.html","a5e5fa544bd92ce767c94cffe3252f3b"],["/tags/通信/index.html","c14577ba71a56f722dab0d6eebffc39f"],["/tags/遍历目录/index.html","e21ec51a219e6250c767a98759dc5454"],["/tags/难点/index.html","b295174e5af900cfa4e852841e3c367e"],["/tags/项目/index.html","dd2aefa7efb08a7b6d44f71848ba493f"]];
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
