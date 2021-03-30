/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","45236d9633d87e482fbba6811ac93df1"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","7bf957a89e57cdff70b452a2213555af"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","c06afc546b0784d8c7e99d45a46f82bc"],["/2020/03/26/计算机系统结构-实验1和2-遇到的问题/index.html","dc53df5800e1f3cbd39edb2a1fdd35d6"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","7ee5c739f94c196bbfa5af3ebc0a4f46"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","738fa3fb4db4b552bb1657ada2a4d175"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","be0e1ff131f5c13f044b504229953671"],["/2020/04/18/机器学习-知识拓展-条件熵/index.html","c36890bff638fd87fed565bd66763e7c"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","66e582da617c4cfd4789299fe4ed227e"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","d7566eae7d7a92eb73662eb3c033a7df"],["/2020/04/26/机器学习-实验-决策树/index.html","4be68832be95e9ac73e30c34f180190c"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","721e6d2446fe6ad241059136f5661b46"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","d1a202604af550d1becc549545d1ac3d"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","6425c7e61285b8342d14cdcb9e77bb66"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","fc53790a582a3bbff09624b0c30e56e8"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","d360bb7ee710e7b76997df89d9d59d60"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","82c1ed6483070709340ced62f8e0ff05"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","12687359a7b3607e5a452174b39d91ad"],["/2020/06/11/机器学习-实验-DNN-手写识别/index.html","806a943f632ead6d697747ecc7072dcf"],["/2020/06/18/大数据-习题/index.html","27a4e5ebb62a03e22ce96375ef6b87aa"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","e7cddf8a76cb9ce82ac89b196aff254e"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","ed4e2d580eb90b9d0f295c1dc27bc7ce"],["/2020/06/24/Linux-拓展学习/index.html","2fbe9e1f776a2f55902a6ded29b4b7f3"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","5126132425131eaa56fe4bde3ee2f53b"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","a8a719f8648c24c285dca7611b0d4f27"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","91314a1563b4721078ab1171d21729fd"],["/2020/07/15/C和C++的struct使用总结/index.html","40eefeefa2f059e33d862562b1f8ca5a"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","74de1e75ffe312b60a86d6152a9fd333"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","22445b3e7c29267ebc864a299c0fc908"],["/2020/08/10/机器学习-实验-花卉识别/index.html","da1305a028b536007b259a818fa344b8"],["/2020/08/15/Python-项目集锦/index.html","31b572f6aebbbce1857d23ac1da56290"],["/2020/09/01/编译原理-词法分析/index.html","51449df318e20625a49c70571d1babd6"],["/2020/09/02/编译原理-语法分析-LL1/index.html","760f88bd5cef18d488a330830b950d5a"],["/2020/09/02/编译原理-语法分析-LR/index.html","58e698a3f7eefe860cc74fe2e458e7ef"],["/2020/09/03/操作系统-内存管理/index.html","640011e89a100643d3e3ab0721ed6dd3"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","8977327f8538ade413af6e73649955ea"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","6bad3436b21933476b4c3da3de5f6198"],["/2020/09/04/CSAPP-实验集锦/index.html","d08a8d387951dd0af8f4105cd3364109"],["/2020/09/10/计算机网络-实验集锦/index.html","9d55ae0a00ddcda0c5cd426c7791f752"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","a42e1067733ea1105c161662649d9c43"],["/2020/09/30/C++工程项目-JobShop/index.html","d9abee5bef387061efd8df831656cd8f"],["/2020/10/09/交换原理-实验1-时间表调度实验/index.html","f94067a8648ac3837c41b51c4f98f9fc"],["/2020/10/09/交换原理-实验2-摘挂机检测实验/index.html","4f6fd17dde7e0164b712e7a70ca03a7f"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","b744de4f227c889ea1d7d3f29477d5ec"],["/2020/10/09/交换原理-实验4-拨打SIP电话/index.html","a4cedac7a467c52d71205c9786bbfae4"],["/2021/01/04/Android-项目集锦/index.html","479cee225f7ce8b8a1fa2c17b576cebb"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","e01bf708e1b7f402b3a6fd77ec2f4c3e"],["/2021/01/04/C++工程项目-travel/index.html","5eabfeb5ba72b540b897000e1a2492b1"],["/2021/01/04/算法设计-分治-最接近点对/index.html","71f7d348d77a330a85147578f295e529"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","d10272f99605909faa8ae26ce0037183"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","c89fea7b652ac00cf65bb40eb3fb4ed4"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","d01d77e5bade10ea7e58d211d4ea051a"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","035635eed8f2f71fb79b88fc3838c710"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","6b8ac11625ccba655cff834e30808af1"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","8aa251540286c8ffe39c704442efe4d9"],["/404.html","4983e9405a763006d188d8fdd2813a79"],["/about/index.html","4a2e464ea98cedd5760f5247f60f2243"],["/archives/2020/02/index.html","e0e52f8c411335e229d543cb342ed939"],["/archives/2020/03/index.html","7363f6cfded296a2948ca9f90bf825af"],["/archives/2020/04/index.html","c69f30ea4d660a24b367f1d426d4e1e3"],["/archives/2020/05/index.html","0adfe3a459e151b48b6cbefd373d44b5"],["/archives/2020/06/index.html","84cf451df523659dd5cb0d226cdcbd58"],["/archives/2020/07/index.html","bb33d87da270637b80efdae092d52b8d"],["/archives/2020/08/index.html","af1d2fc398fe45d0c0bd46bc1cc61f38"],["/archives/2020/09/index.html","f9dedcf3d28075c5e6420eb30acb4369"],["/archives/2020/10/index.html","69af6008e6295d027d93db148a71ebe2"],["/archives/2020/index.html","a26d58ebbdcb0dad8bea659847487d9a"],["/archives/2020/page/2/index.html","2066d7aa92da1d0720a04704a32ee593"],["/archives/2020/page/3/index.html","4a01881f92c714c5b3fa07a578d31e7f"],["/archives/2020/page/4/index.html","e3849e6b17ee96cefe8c24fafa8719e5"],["/archives/2020/page/5/index.html","8b2cd845516404adb8f557b67ddd9436"],["/archives/2021/01/index.html","de7f18f15fd6caefacf4bb6845347ed1"],["/archives/2021/index.html","d6477e943122ac829903b2f721ffd9a8"],["/archives/index.html","ac83fdff0eca18c2b48f485d070f84ae"],["/archives/page/2/index.html","7c300ee23812063bfc675bb1db79185c"],["/archives/page/3/index.html","7c300ee23812063bfc675bb1db79185c"],["/archives/page/4/index.html","7c300ee23812063bfc675bb1db79185c"],["/archives/page/5/index.html","7c300ee23812063bfc675bb1db79185c"],["/archives/page/6/index.html","7c300ee23812063bfc675bb1db79185c"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/categories/C-C/index.html","baef2696b012bc72bcca2ce3ab6fc2a4"],["/categories/C-C/page/2/index.html","109d1a5f0b11b0b502be2d895698779b"],["/categories/C-C/拓展学习/index.html","32b2e856f1ff1b2526683ea9745870fa"],["/categories/C-C/操作系统/index.html","601ebb07400fbb10bcd7eea1393ad874"],["/categories/C-C/算法设计/index.html","301ff7bb54fdcdb43113ad6ce7520862"],["/categories/C-C/编译原理/index.html","023376b73adc10f3b7bbefec952a2263"],["/categories/C-C/软件工程/index.html","e9a5596b2c40362dbb1475dc0f790e3d"],["/categories/C-C/项目/index.html","079901d035a99dd1d3b69807d4ae6ba5"],["/categories/Java/Android项目/index.html","0862ffa3e764bb768e6bd3fc6247426c"],["/categories/Java/index.html","dfcef818b980e2fece4324c60ba50560"],["/categories/Linux/index.html","542b4dea78be0858ed260fcc4dad4134"],["/categories/Linux/上机实战/index.html","70baceddc01ad81c61f6caffbddc41d8"],["/categories/Linux/习题/index.html","7c35ff37dfe65aa57ddb9f864fc33bcf"],["/categories/Linux/拓展学习/index.html","f6cb4fa0604f1b063a1a013cfa40de36"],["/categories/Python/index.html","595886b92b48683266eab093592bc685"],["/categories/Python/爬虫/index.html","9cce0593e8ae8002e5374c2352125cc9"],["/categories/index.html","76333aae89d17653b99d8bde8f48f3da"],["/categories/交换原理/index.html","81227d4d79f837afc2d6fc0ea9e32abc"],["/categories/交换原理/实验/index.html","b27e8b417bf32210cfef9b4da557a50d"],["/categories/其他/index.html","94da4bf113192e35c0141c39f6895dec"],["/categories/大数据/index.html","e2e1e2b3fa80e4f7faf20c43b336e77a"],["/categories/大数据/习题/index.html","2972084c2c3fa45eea05289250bcd6a9"],["/categories/大数据/实战/index.html","c3eefbffcbdd36a6f7172ec00c769338"],["/categories/机器学习/index.html","6a461d1eeba7b68c19143f1f8c341f4b"],["/categories/机器学习/实验/index.html","bd18ffc465ef954f4572264b6d6bcd60"],["/categories/机器学习/知识拓展/index.html","8290267c2cc91df2826ec8bf5d39318c"],["/categories/现代交换原理/index.html","324480c6024de5b26dab767a8242fec2"],["/categories/现代交换原理/习题/index.html","73877bc9bd537148f1c6b0e58dea16a1"],["/categories/计算机系统结构/index.html","75eaf4807d4f7ba3486e8180284488f7"],["/categories/计算机系统结构/实验/index.html","cf56e19574a46992271c77647b9944d1"],["/categories/计算机组成原理/index.html","831e773a8d4333bfe51c71c28c804a45"],["/categories/计算机组成原理/实验/index.html","ce0092ff778ed30764bc386def7a2800"],["/categories/计算机网络/index.html","8fe1528505cb030a52b9677728afa5b9"],["/categories/计算机网络/实验/index.html","75b9e183c0959a2e76a89131ea2a36a9"],["/categories/集锦/Android/index.html","ac1aeb856fef7842fa3d2536a45a7c8e"],["/categories/集锦/CSAPP/index.html","94ee8269eb2ffdad56c08e4cb9c373c0"],["/categories/集锦/Python/index.html","db224bd0d8366a209c42e582d95f090b"],["/categories/集锦/index.html","5c48bdf70714a8f2c950f0b3f727a080"],["/css/first.css","01a90baf99fa8f190becabd973782198"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/style.css","29bd14d027343cdf06b66cce6bf66453"],["/friends/index.html","3001226889eddb913afba4b6f026b8b8"],["/gallery/index.html","63f4bc7639ebb10460b077618443184f"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/games/tank/index.html","a4a2448b8b53e14bf7bad5c1f71e614a"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","922c09cec6ffb6beb227f4fc10ce5c85"],["/js/aplayer.js","6e605f0855251e101d3024646f3eac60"],["/js/app.js","1948329f2fd7e750ade4bdc49138c09b"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","8f0323d7557766afad770648410341cd"],["/page/2/index.html","ae31e881f08d136daeb8edf07b768394"],["/page/3/index.html","f44f88817453964d7b3f4b820a19cf49"],["/page/4/index.html","0137a25b3cce4d0a860c260a003a3c89"],["/page/5/index.html","c0cfbf84ef023088cc36280a0b1bf04e"],["/page/6/index.html","388d83ea6050da7868078e11b05804a2"],["/shuoshuo/index.html","0be06273ddbe47b2e13120c0bec0282e"],["/sw-register.js","e72846bcb9346ed2d8f69450fefd8a75"],["/tags/AI/index.html","95e544f8c0e693412f6ce0fa4bbe08a5"],["/tags/Android/index.html","d26d588b7a804113c8b1e9e98ef6fd2b"],["/tags/C/index.html","f9cdefe57c338ea866b3a649a81c2baa"],["/tags/C/page/2/index.html","972f961b3b06f8175a000ee35fcf186b"],["/tags/C99/index.html","5aa9ecb65cf7a134f9ad1e72842d869d"],["/tags/CSAPP/index.html","3daa3cfa7e80af0014cd4f199bef8e59"],["/tags/DNN/index.html","94e0c08574f870943c7741b01b65bfb1"],["/tags/DNS/index.html","1de6a79b41bfb602e4cf9c9898d30574"],["/tags/FPGA/index.html","1e66f35c49eca1504a7921254df91e7b"],["/tags/HDFS/index.html","8eb8a712ae5635f05d83f61ea3066a2a"],["/tags/Java/index.html","db64e295aa14c3e7e7eb1f21ea3d040a"],["/tags/JobShop/index.html","b42df5fe0a8c7f3ac8851914a959cfca"],["/tags/K-Means/index.html","1841f0b35dc84f3581c081ed34c72019"],["/tags/Kafka/index.html","2da833fbc11850d6579700fdd10d3734"],["/tags/LL1/index.html","cb169cec5e1f4a11458d9c824465317d"],["/tags/LR/index.html","545f70e32c51d3cc498cc12fac0d2c6d"],["/tags/Linux/index.html","17cbd840e9080f0f6ca11690149c9da3"],["/tags/MIPS/index.html","faece81616cb30cee2b130f4f00634db"],["/tags/MOOC/index.html","6b21d2c53b1b53ff9b049816bf1e1ba5"],["/tags/MPLS/index.html","2762f020318dede799f143e93621d211"],["/tags/MapReduce/index.html","62bff7006b0b086b2a046a1f32b2c826"],["/tags/Matplotlib/index.html","6adaf82068ca4406d2853c3045791ed7"],["/tags/MiniSYS/index.html","cebbe316ec59e2087cea908d12f59262"],["/tags/Python/index.html","9b75f6c54455676232525610b5d03d5b"],["/tags/QT/index.html","8b53912273842a7a23dd0010c0474885"],["/tags/RNN/index.html","3b820f1ccc069eddb50b63565062a681"],["/tags/SIP/index.html","21a76a25789c87f7edaa23622273997c"],["/tags/Scala/index.html","230009fbe96bf223e7ce16c9598a42e8"],["/tags/Shell/index.html","966c3032b16d5cfa565dbcceb543ad16"],["/tags/Spark/index.html","d84f81d740a8ce97bd6849ee6dfa2101"],["/tags/Streaming/index.html","ac629f4b5a34fb64a06890668b40ed4e"],["/tags/Struct/index.html","5ee36e69498bfa5d9859d3526da7cea7"],["/tags/Verilog/index.html","a54f5c1104251ee231b07eb7c7d87b93"],["/tags/first/index.html","4711ed58bc50c4b64e4a48a366e712f5"],["/tags/iPython/index.html","9c33aaffe25d6b2730a892ebdbfd4830"],["/tags/index.html","08ae3d6be485931222b778826300edb7"],["/tags/ls/index.html","95ee28afa74431b16ca4ed6df9f66811"],["/tags/习题/index.html","6254406dfdcd3e58bcb53b70335ed6f9"],["/tags/交换原理/index.html","0ceb71ef781d8486bf9a316894ded27c"],["/tags/人工智能/index.html","f653dd18c4e3dcdd1c92d27ae2a398b0"],["/tags/信号量/index.html","046208cd01d4d01fe366cf51846773f8"],["/tags/内存管理/index.html","eb39117ae134e061a7354207834427ba"],["/tags/决策树/index.html","c74c42d126c3feb58c5a95b87fc85692"],["/tags/分治/index.html","d9e215ef10d2dc4e17b11b64f6a69b7b"],["/tags/分类/index.html","54b2aabe26b3108fff37239c5d89b962"],["/tags/动态规划/index.html","dfaa9875a3dbdee65b4f7e901661f26c"],["/tags/华为云/index.html","59a187cb5916fb441925d7ad1dee3095"],["/tags/单词计数/index.html","628bd63d992f31886478244a48d7e56e"],["/tags/可视化/index.html","fe0f9fce51ab3feb99f0f8aa1c9697d2"],["/tags/同步互斥/index.html","0adbadf8c578f6a476fb96a18781a570"],["/tags/大数据/index.html","c89086d100c1f034b689e1e47780c97b"],["/tags/学堂在线/index.html","ae640114c8341eaaa95d6b6a0524e5de"],["/tags/实战/index.html","9d3b954748c70a9b6e71d0ed18653345"],["/tags/实验/index.html","b49509ab78d059fbf64c06ba0c413edf"],["/tags/实验/page/2/index.html","b093801be1f50d62c6414af4763dd1b2"],["/tags/小游戏/index.html","82cc1f7c8deb8f9604644ee8627c132f"],["/tags/工程/index.html","dde598dab1991c5cb76b0502f39c8493"],["/tags/工程/page/2/index.html","851e9a71626bfda85fb199a85ff18fbd"],["/tags/手写识别/index.html","bbfbbd097afccb02f7e4ee45b33cf94a"],["/tags/拓展/index.html","f57347b6ddac4ae10c9d6e5a1b703e74"],["/tags/操作系统/index.html","7f35162fa085b0e5dd61af6055d814be"],["/tags/数据处理/index.html","21f9388389f237bf6efe12b154f690ff"],["/tags/日志分析/index.html","6d6025bc0166aef6caf14ee3201ccba5"],["/tags/易错点/index.html","c7f1f56e95468758fac684c352ddba22"],["/tags/机器学习/index.html","a9e1a58c31309eecfe71845bb4fb581a"],["/tags/条件熵/index.html","adacc2abd366a3b98957ecca34c8f3dc"],["/tags/正则表达式/index.html","4f5fb2c486002df002c069de23b6a338"],["/tags/汇编/index.html","35d96430c7c4b57e5b624564f4b8bb54"],["/tags/流计算/index.html","0c14b9630e4375ab7b4ecc095412d5fb"],["/tags/爬虫/index.html","56b66a1717fb8078643888a556e0cbaf"],["/tags/现代交换原理/index.html","8156f52e2013b1d56650086b367fe3c8"],["/tags/生产者消费者/index.html","3f8a09eb7a31b2b3cdbfd4ded618cbf5"],["/tags/知识/index.html","44ac22441dd5645ae3d647db01051230"],["/tags/算法设计/index.html","250affa1e8569becba5ef005a8e2c51e"],["/tags/线程/index.html","44a5052538bed7b2c3be96771bfda7c2"],["/tags/编译原理/index.html","82d635859f99fafc2d2e57f30c5d0a68"],["/tags/网课/index.html","0d84c87787d565bba3027281374ade00"],["/tags/聚类/index.html","8abb75ce24e661a462ec2140224f2043"],["/tags/脚本/index.html","2795eda80a55ab5f266af616751ad220"],["/tags/计算机系统结构/index.html","29fd3643c91a54eaf2bb971fa2ad3299"],["/tags/计算机组成原理/index.html","2ddc9fadb8a8a1d05249e0da03977caf"],["/tags/计算机网络/index.html","8d3144def1bcf2b034613388f6304e1f"],["/tags/词法分析/index.html","1d2d3e1cd3d999535db57119405bc73d"],["/tags/语法分析/index.html","572453022975a102811018e31c6da2d4"],["/tags/读者写者/index.html","595b6717c2834b9ac2d105cdc95bd4dc"],["/tags/课程/index.html","e69aec5f32fcf42892d80860542b6d4a"],["/tags/起名字/index.html","524830a9855290ccc6b535086a1b721d"],["/tags/软件工程/index.html","957579989f78419d00eda9406d8b1b99"],["/tags/进程/index.html","1830bf6c5905049088a698db2778b2df"],["/tags/通信/index.html","d1500978342d83a28b9f8b7c1a945e29"],["/tags/遍历目录/index.html","8d3036ab72b66a22358c2dd50ee9f517"],["/tags/难点/index.html","7ff107b315f834b6c3fbf4c9c2742d39"],["/tags/项目/index.html","6d9d8b34b5aa245f9a46330bc1c495bc"]];
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
