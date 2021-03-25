/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","23622c90c8101ceb3271a980dd10f5da"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","2c08738df00ce6dc299e0bccb52b615e"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","adfcf8a3ac83191e9780b20241d4731e"],["/2020/03/26/计算机系统结构-实验1和2-遇到的问题/index.html","64e4eb9c0b7ae2a42063abd3f0102fa0"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","b9952233ad8d641966e51bd2d149f264"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","cc89bcf8d72e3e23efd55738b30c5fa0"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","354f88b6dbdb109142ed8a1f06349d13"],["/2020/04/18/机器学习-知识拓展-条件熵/index.html","8f0a8327fb8f8c951508380c1f3d715e"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","75ef79c19a388e110e80d5a52542a958"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","cac0cf014cc6061733fc3f0132d3608d"],["/2020/04/26/机器学习-实验-决策树/index.html","3248cb154679b3e3aa0e6d983b472bd3"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","8232731e12667279f9748d00c76672b0"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","fb83be647296e2dba4a8f811a70014f8"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","88586df2bb426179439140d010b9d2b0"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","4df82dae1b0d21fcd434d4355454abaa"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","4723fe6d7a5fce68c091796c6490cb0c"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","4c96522c20f3fd0beeab02046851d536"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","48733a1a2677c9b0162e096fb63a13e0"],["/2020/06/11/机器学习-实验-DNN-手写识别/index.html","505618e02dc52894a9946b32da0c4bbb"],["/2020/06/18/大数据-习题/index.html","1d2d0371025326e06369c6da5da947ad"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","2d3692aa40db15bfcc7cb005776f146c"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","c35b51b4022ce1b50f7580e4e50dd7e6"],["/2020/06/24/Linux-拓展学习/index.html","4fdb764803a78ea9ec883301c662eee0"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","8a67b6f00c7725a142247050a9f15c7a"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","57e145b5209db75b3979a0957a7484a4"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","c18df077d3e33b287c1b56686ad28202"],["/2020/07/15/C和C++的struct使用总结/index.html","af00d0f540815c0b4b38c5361a927e34"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","3e441f6b0f977e933c89412bbc2da7ff"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","f574aa0ee7066df9723cf4aac2e958b6"],["/2020/08/10/机器学习-实验-花卉识别/index.html","4855874bddcd0ebe781d931189423750"],["/2020/08/15/Python-项目集锦/index.html","dbabe499c2dcb067eca2a272a40511b5"],["/2020/09/01/编译原理-词法分析/index.html","533408a2f5f436b094efc44fb4204015"],["/2020/09/02/编译原理-语法分析-LL1/index.html","6034b9ed0c9e7e8e90630dfeac75ce16"],["/2020/09/02/编译原理-语法分析-LR/index.html","2e3849c6d86b2669d4b4915d3b85ae60"],["/2020/09/03/操作系统-内存管理/index.html","c38227f848ba909141969013b553f472"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","72723fe7c3b1553e35d87e5fe5eb1a5a"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","d00d788a172632588f7235e15e2ff4e8"],["/2020/09/04/CSAPP-实验集锦/index.html","66493707a8d11ca59acb7526aceda8ba"],["/2020/09/10/计算机网络-实验集锦/index.html","ec90e4c2013a8624bab51f7498098c54"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","fbb9fd9538e4f191f9f5abf8488b8356"],["/2020/09/30/C++工程项目-JobShop/index.html","1260f6e55d49df7fa17b0a9dd16f1f1f"],["/2020/10/09/交换原理-实验1-时间表调度实验/index.html","ab7aee4295c97644237bc426abc22191"],["/2020/10/09/交换原理-实验2-摘挂机检测实验/index.html","165635a4d2d465b9d8d7770b00e68501"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","5941818c0a4bdd20772388fdad69bc66"],["/2020/10/09/交换原理-实验4-拨打SIP电话/index.html","219cabb237d3778bc842e14226ec812e"],["/2021/01/04/Android-项目集锦/index.html","e83900846d9dc26b2877e02747b578f0"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","9f146cc4ceaab43bf8eeb054023597ff"],["/2021/01/04/C++工程项目-travel/index.html","01d9c891aac0378af159dd4890f5209a"],["/2021/01/04/算法设计-分治-最接近点对/index.html","b983af41ed28588262cb2eef0a2c5029"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","4131ce0111b3fb887ec6bb3625b0fb5f"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","cf0454b58cfaa44d89a87fea3fadf56c"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","ef55f289ce1735cc79fc9664c8630603"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","ca0431410e08ab7f162262cde588329d"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","d77df25accebf84e5270783fc58d586b"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","1c48e987b1acdc226c8ec6bdbfffe7ea"],["/404.html","42fe758af4169c3588c1f2843aacc4b5"],["/about/index.html","5f2773955c43485c1c397067521c5353"],["/archives/2020/02/index.html","38a695fc83eddf88d3cb5aa8af6c5644"],["/archives/2020/03/index.html","76b27e6255e73620760ad9e15221a2a1"],["/archives/2020/04/index.html","25460eb4dcadb0ba8212da940afe5d26"],["/archives/2020/05/index.html","f456b010ebb850d9a7aa6bd77e687e4e"],["/archives/2020/06/index.html","b274a41a100ecd4dd09231cb4d5591a2"],["/archives/2020/07/index.html","5f0163ea51951efb565f7a0c65b3fb78"],["/archives/2020/08/index.html","0762585865755a99e7d7b1e7c5d13389"],["/archives/2020/09/index.html","21fbe98fc6b5bf453540977f59cce5cd"],["/archives/2020/10/index.html","0f9ce8ecc51a5967dfdb2879156a1d4f"],["/archives/2020/index.html","8c8c34ba8318a2b1209da176de0a64a8"],["/archives/2020/page/2/index.html","65952ceadeb5457c3fddc0a5b5bccaa5"],["/archives/2020/page/3/index.html","6f7e692573f4c40fdd61a0fb6c92d653"],["/archives/2020/page/4/index.html","fb687442ef4788108eebf3cf62e06439"],["/archives/2020/page/5/index.html","5a9799fdac483836f3b9a59fa25e6363"],["/archives/2021/01/index.html","e409dca8b0fcb0d786f6b7f69c1d7b37"],["/archives/2021/index.html","8660e342eaf3dcdaf418b46573085b72"],["/archives/index.html","b66caf3a7144f5a7244a5036516087de"],["/archives/page/2/index.html","b66caf3a7144f5a7244a5036516087de"],["/archives/page/3/index.html","b66caf3a7144f5a7244a5036516087de"],["/archives/page/4/index.html","b66caf3a7144f5a7244a5036516087de"],["/archives/page/5/index.html","b66caf3a7144f5a7244a5036516087de"],["/archives/page/6/index.html","b66caf3a7144f5a7244a5036516087de"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/categories/C-C/index.html","004f35ad7925c8387763a309feaa5d00"],["/categories/C-C/page/2/index.html","7a76379388d25c4a6b6db2f401a2c258"],["/categories/C-C/拓展学习/index.html","9258ccb7ae35d1824d9c3b5ed6b15b61"],["/categories/C-C/操作系统/index.html","52d8930405e283e85e0d3be0b2202408"],["/categories/C-C/算法设计/index.html","0c887fd598f33eb4a0b9117d9224ee86"],["/categories/C-C/编译原理/index.html","c4a013bfb0918dcfcbcaa3ae2265f322"],["/categories/C-C/软件工程/index.html","61298b779c207656aa38c0216e6ebcbc"],["/categories/C-C/项目/index.html","d1396b6b33e076580736e1798658e5ff"],["/categories/Java/Android项目/index.html","ea7919baa7e849c7ec6a19d93e58533e"],["/categories/Java/index.html","f5aa0d6aa1e892529fa002cafe5f6c44"],["/categories/Linux/index.html","472697e4fdb49554077caf8625140b32"],["/categories/Linux/上机实战/index.html","c20324d49cecfb2f73db1bb73929f01b"],["/categories/Linux/习题/index.html","6b2e6a93cff731299bae59e7ef4f62f4"],["/categories/Linux/拓展学习/index.html","9ac9e2e332bee9026c094524c4506b48"],["/categories/Python/index.html","2c0caca817aa5cd25eff27a533c6fc07"],["/categories/Python/爬虫/index.html","89387281c30b7913e0799624405dad2c"],["/categories/index.html","59f9377be35fa60d8f814c5df1b0339d"],["/categories/交换原理/index.html","1b80184dbad5958b76d83b672dcbc143"],["/categories/交换原理/实验/index.html","59982c8a6feae106334aa47db999d8e4"],["/categories/其他/index.html","b18cfba5c7488e3c37f12cdd5ed86e5b"],["/categories/大数据/index.html","9d6bd7c329f1ec975860d74710a91915"],["/categories/大数据/习题/index.html","66594c50d5e2b3fbb878bb9c8bc8da60"],["/categories/大数据/实战/index.html","7eb62e2fc6b33416345e4996ea0dc6f4"],["/categories/机器学习/index.html","38a772000d860c62e8de810cbb5cf59e"],["/categories/机器学习/实验/index.html","40eae0cca4077f3f680c15e239a36e8c"],["/categories/机器学习/知识拓展/index.html","225e3a7c675703fdcec538238071a058"],["/categories/现代交换原理/index.html","fa9ae84a7f05aff214335d8d9719cc16"],["/categories/现代交换原理/习题/index.html","db7e45ed2501ab07909118e69eadb10c"],["/categories/计算机系统结构/index.html","701e8c703a091c72eb8b6a2b28d75856"],["/categories/计算机系统结构/实验/index.html","17a3eb2112bb5bc0cf35919faf11a7fc"],["/categories/计算机组成原理/index.html","7e142c3f5506940b210f19cc7684a535"],["/categories/计算机组成原理/实验/index.html","1fb11086e91f7596bcd8f2cf71b2b284"],["/categories/计算机网络/index.html","5ea4cc2baade149f85fb86cd59436105"],["/categories/计算机网络/实验/index.html","5b91e595839453c3ca6f01a58a9253bc"],["/categories/集锦/Android/index.html","de8f3fd17fa179e0b1cea4eb8a482996"],["/categories/集锦/CSAPP/index.html","771bbb9bf50d863b5678405933cb6767"],["/categories/集锦/Python/index.html","c8427e4170cf32123df1bf3619b3a970"],["/categories/集锦/index.html","739576bbb13610db2f666cb947974100"],["/css/first.css","01a90baf99fa8f190becabd973782198"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/style.css","29bd14d027343cdf06b66cce6bf66453"],["/friends/index.html","b2a86d1b6ed5f677c86ccef9d849c971"],["/gallery/index.html","63f4bc7639ebb10460b077618443184f"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/games/tank/index.html","a4a2448b8b53e14bf7bad5c1f71e614a"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","398713515061d788e3b433107898e232"],["/js/aplayer.js","6e605f0855251e101d3024646f3eac60"],["/js/app.js","1948329f2fd7e750ade4bdc49138c09b"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","6cce9dc4c14d87731e170ca307a3db45"],["/page/2/index.html","4238f402b8c5bd9f2e4bc16df0bc14e0"],["/page/3/index.html","f747878b0f20ea18a2ae7eb186768e97"],["/page/4/index.html","bf0c191b6e8874a8f44b9be2f2124c8e"],["/page/5/index.html","3b11474983f7958f376fe543b553604d"],["/page/6/index.html","f99263aad6eee66ecfef5ccac07500e5"],["/shuoshuo/index.html","a3861c418e0369d2613506c1b8c92b30"],["/sw-register.js","df0691a41c8f9a125aa19c94897af3fb"],["/tags/AI/index.html","17a11a94632f16ba3b0993cdeb6d18d5"],["/tags/Android/index.html","d3c50676af68858088aa31139d77246d"],["/tags/C/index.html","41acb94c2947c14a57bd06be24d4eb0f"],["/tags/C/page/2/index.html","be78451358c52abe8d937c02f4f1a3aa"],["/tags/C99/index.html","a1380c7dbd64503c1bc90abe65cdad65"],["/tags/CSAPP/index.html","1fdae911b95d03cae5525708fe9f7f11"],["/tags/DNN/index.html","ad8a32f99a068dabf3bc8e4ba9ca1188"],["/tags/DNS/index.html","b9cfd7a0fa315106951bc33be77e0f61"],["/tags/FPGA/index.html","c99d917feacf85e8de76a39fd3e1db20"],["/tags/HDFS/index.html","148e145b817b26a767b4b0b8ccabec77"],["/tags/Java/index.html","d5e6dc4d01056f03dd94f0d6c34da72f"],["/tags/JobShop/index.html","d29f8c2205dfcef2ee810c71a0b3740b"],["/tags/K-Means/index.html","058fbe6f7eade452bbb0f4e6df793d21"],["/tags/Kafka/index.html","d8890876ec1ecee3184e8a6e6bdf0c89"],["/tags/LL1/index.html","3443ae34bb67a23502402cb596ff5a1f"],["/tags/LR/index.html","d76256fb91fe80bc6023dfa1f103247c"],["/tags/Linux/index.html","f6428086d17416d0432c72d4d33aa39a"],["/tags/MIPS/index.html","5e04f4083521277464aa8d565dfe7066"],["/tags/MOOC/index.html","1d5c7e5b7e159ab0fd98aa8addcf2544"],["/tags/MPLS/index.html","f0e82f6f9f2fd8afbaeb94b3a32c96c2"],["/tags/MapReduce/index.html","f1a65bb5aed3294b5268c06db34bacdf"],["/tags/Matplotlib/index.html","528fa1322e86283c3b401b32ebb19d2d"],["/tags/MiniSYS/index.html","27e35e6fd8ebe8fa64c2406f32816af5"],["/tags/Python/index.html","099ce69320fd6e82cb7c7931800616dd"],["/tags/QT/index.html","ca908a35ff5e256e6450b44cd426c536"],["/tags/RNN/index.html","4070d2604f864db8d52248d96e0f7f23"],["/tags/SIP/index.html","e959b56ace9f2d297db776b4e1a98344"],["/tags/Scala/index.html","e3627da2eb6645d1c8f784944d1dfe34"],["/tags/Shell/index.html","e8cadda1cb78150b9e6f8e044bf2aee7"],["/tags/Spark/index.html","4c9cb7d93dd9b77e34b683783af9113a"],["/tags/Streaming/index.html","f91f75281a952ae1b52fd65f7cce1a8c"],["/tags/Struct/index.html","18dac55b39ee24eabb9de271210fa3d9"],["/tags/Verilog/index.html","c508ce046153fd56d6f5cb67bdcc636a"],["/tags/first/index.html","656c6e007e1b7d8c2515572ac0ee7c4c"],["/tags/iPython/index.html","4190c1f16ab1da68af38d80eab306a29"],["/tags/index.html","eb212cb2b4bd1220bbd2c273855f4099"],["/tags/ls/index.html","6ddff23c3647eceadf38e1807713efe9"],["/tags/习题/index.html","e9b2fe8ea17296af2eba344ad9049ccf"],["/tags/交换原理/index.html","ce6512def496e4ba068788db70057e65"],["/tags/人工智能/index.html","225a944601065aa9829bdfbf255aaf50"],["/tags/信号量/index.html","5ac7783ed3f14e5a5ecad7e781331f1f"],["/tags/内存管理/index.html","cc4c3dadd8107d880fde13a06d942a59"],["/tags/决策树/index.html","11be8a68f896a973a13ff1afda7df803"],["/tags/分治/index.html","587b50d249a1c1c0d34268e01bf7cac0"],["/tags/分类/index.html","07591531676d980033fa882aac1afb3b"],["/tags/动态规划/index.html","8fbb387112daf86342850f6492ba4fa2"],["/tags/华为云/index.html","9cb47adbf208b155593b477ea2684fca"],["/tags/单词计数/index.html","1be2b48dfa39cc113d3329f7ab1bf7f2"],["/tags/可视化/index.html","be526e7445cb034cbee8e9b2b1f94f58"],["/tags/同步互斥/index.html","96bb1e13d6dab43c412ea63c3f74338e"],["/tags/大数据/index.html","e7bb01dcdaa658e25eb5b93d96a2ad32"],["/tags/学堂在线/index.html","751332ff1052d5cb08644aaf190d12d8"],["/tags/实战/index.html","d5e13103f19876ab264b02f9fd9e9690"],["/tags/实验/index.html","873c01b584731005e22161deba9df6aa"],["/tags/实验/page/2/index.html","46696861e789a02deff08ea436ddf057"],["/tags/小游戏/index.html","bc86e80ca5e6de7a24da895f0741ca87"],["/tags/工程/index.html","8d529359f1bc18d2d3ac7f6167201e08"],["/tags/工程/page/2/index.html","5e2278daa4ef825354318bb2903d9f5c"],["/tags/手写识别/index.html","d6ad9a5e1131963438cf6196b892c114"],["/tags/拓展/index.html","e580805665ef12b62ec9ed8f664d9c75"],["/tags/操作系统/index.html","9443be96dfe69a31ddca543669ef04a6"],["/tags/数据处理/index.html","110535a556184e6de29e2f02d2cf39aa"],["/tags/日志分析/index.html","88d9e27f0c5e19458b65ef1606ac0dfe"],["/tags/易错点/index.html","92a0833cd9d4ed233badca761701879c"],["/tags/机器学习/index.html","85e45d0f6992cfe0069f0ce2169edc7a"],["/tags/条件熵/index.html","003569acc82cd810e1fe92c912284cca"],["/tags/正则表达式/index.html","7576abc17b24a0f4f6603fb1325af7c2"],["/tags/汇编/index.html","c7f65d2eb49a3f068f76b3fee9e13463"],["/tags/流计算/index.html","ad9756280117eb8ed0bd8cd7e79e162d"],["/tags/爬虫/index.html","5d4321c6576f0a46e90c3c3ba58b70e8"],["/tags/现代交换原理/index.html","d57eafc5d2f0a2c69612b0d38e2e90c8"],["/tags/生产者消费者/index.html","ad035ddf52aeaacafe81c9c2e7432df3"],["/tags/知识/index.html","b50dafa21444d07c79324b65ca5c8935"],["/tags/算法设计/index.html","5b26ab9ee5a5d4eb8aa09e1f2ec773c5"],["/tags/线程/index.html","adc1f4d57f5966c2609b70bcaed8cd1b"],["/tags/编译原理/index.html","2706908882fed20a16c1b20d892a6878"],["/tags/网课/index.html","d380b178c90977a79934c2763ce3b3ed"],["/tags/聚类/index.html","7d7e58ef3189fb74595d36de71e1dbf6"],["/tags/脚本/index.html","ff848d3615d4784a62af8d0486a68b8a"],["/tags/计算机系统结构/index.html","72958890ce7dc74c870c824ce2e0de21"],["/tags/计算机组成原理/index.html","82c2c97a3bb19cc7cd5aab3237b56af6"],["/tags/计算机网络/index.html","0637e6a1da730b83f3f375782bbbc2fe"],["/tags/词法分析/index.html","f198e9858772a5f55ed24477ce81cb32"],["/tags/语法分析/index.html","b6bbf45005e8a7a1bccf2d9a10513c4e"],["/tags/读者写者/index.html","8a1fab839ab4853d6dd30f7f19b5b92c"],["/tags/课程/index.html","105555a239d9d21e3878cefb04092a2a"],["/tags/起名字/index.html","58ceee9035d42abe453f052e8e40e652"],["/tags/软件工程/index.html","a6855816878d5a5e8c15e5d12373b0a6"],["/tags/进程/index.html","1dae1b50a41d1cf530527ff4237c9541"],["/tags/通信/index.html","ebdf0961e94a4bd3f77103c8823b9b9b"],["/tags/遍历目录/index.html","b18e7d122f09fd2eb76f3bf151d46a6b"],["/tags/难点/index.html","fc0025d84ff5c6d4c610cb2e21d8ab19"],["/tags/项目/index.html","c41ea4d7e88c74c8cf08141fa1498674"]];
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
