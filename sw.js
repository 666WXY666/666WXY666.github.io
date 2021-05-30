/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","b54cac43955a31e51ba1a1cf8714f8a7"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","21490028bbb3c31669b01c4c32ec2ed0"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","58ce9efc4d5f2dd6b2f4ad3c99d0e0a3"],["/2020/03/26/计算机系统结构-实验1&2/index.html","1cc1a5defd90e901614ab05e57dad7ca"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","26b7d40bd54755f5df17f54188f8e0ca"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","3bfc2b2dd53d78dfae6f9779d63d8616"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","9002c2201e430b20f593d7fe8ab76a19"],["/2020/04/18/机器学习-条件熵/index.html","1777ee00ffabbb4ff1488c5ec99a2461"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","48a1e28cb348c2e143500c5e62b314bb"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","f9bf3c04b26cdbd37bc99ed8a7ee36b2"],["/2020/04/26/机器学习-实验-决策树/index.html","7d9f0edf077f35e4d52c71d3c438ab1c"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","c65a42602ae8d1ccae7ddd488f88eaec"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","aa6c616a9af39cd5ef41276d077d56be"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","84890f709c305261711c523a87ddf46e"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","a9f7f998f9a61d50fb7dc1d52892d6bc"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","e5880f9cea265cf32b235ba6560297d1"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","5609ac5f8bb14f2ceea9718b006ff513"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","7885e12eca8548e954b64617a998cd17"],["/2020/06/11/机器学习-DNN-手写识别/index.html","9719c640600f534d580af31ce2ce994a"],["/2020/06/18/大数据-习题/index.html","ad5491363fb7d662de5f196a616ada4b"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","75fb19d7f177febee154445941e348a9"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","ee9fb8e46f3f6d6e7779b88e23d62f31"],["/2020/06/24/Linux-拓展学习/index.html","73343e8a37800cd5e313ac06450b3407"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","73f81d1ded08ca5a71ce7cd4d151cadf"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","803c986adeb8633321517ead2d9e373b"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","a942d6dfd5dbd866282611f0b92554c6"],["/2020/07/15/C和C++的struct使用总结/index.html","a35f1bacde44981881d89a23cebf802c"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","fc66fcb4dc1409a1d7933ebfe872ed4a"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","aca3abf8adc8a2c83734010401fb216d"],["/2020/08/10/机器学习-实验-花卉识别/index.html","2955c559675476a8ec6185c78ea5d3f0"],["/2020/08/15/Python-项目集锦/index.html","0172c072a73362c5240932b795e4124e"],["/2020/09/01/编译原理-词法分析/index.html","d36c71c03508efc0fe312954d29a4150"],["/2020/09/02/编译原理-语法分析-LL1/index.html","ee06ccc5525c415c254a38ef0fea62ff"],["/2020/09/02/编译原理-语法分析-LR/index.html","b6357e97ee3e5d3fc61a1b5f956dcb73"],["/2020/09/03/操作系统-内存管理/index.html","41fddf7b3d8c987ea1f5c5601b9fc92c"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","af4dbd9a3c3ba7def4c9cce5e5e58410"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","29848209d9ecd8f6f9906c943e8efcb2"],["/2020/09/04/CSAPP-实验集锦/index.html","7c97d1354a41546d0220b7234cb927bf"],["/2020/09/10/计算机网络-实验集锦/index.html","d6c99f8358b239998c65a14e833c0896"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","24ccc155b3bab6b7877fe8aeb1d2d9ce"],["/2020/09/30/C++工程项目-JobShop/index.html","1ffa5a83211261806ae88a54dd4eba6c"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","6f69e7d846dfdcd63afbdc09a1f9d3fa"],["/2020/10/09/现代交换原理-实验1-时间表调度实验/index.html","457e457f45aa57ed372a220211b9ade6"],["/2020/10/09/现代交换原理-实验2-摘挂机检测实验/index.html","15c76733392739c546fc2e5e53a8141b"],["/2020/10/09/现代交换原理-实验4-拨打SIP电话/index.html","3ab2a743490e9077fc123213bd4009b4"],["/2021/01/04/Android-项目集锦/index.html","40d749f934ae328d551d5aa0a0379d22"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","12c291ca97a1f96b0b3b303713be6865"],["/2021/01/04/C++工程项目-travel/index.html","d37ae492ab02079dee204478df7a9bd3"],["/2021/01/04/算法设计-分治-最接近点对/index.html","29a2a42956aec7c820c0c5a59b1a7cdf"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","51c7d77364f5425abeb4973d2afbdecc"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","517c331e6ab9399bc1261878ad7be09b"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","cd01d00ad0e86f1c3d2787781ef979ad"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","392ef113a7bfac1f70cd25d99a8af1d6"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","18a2f94e25bb2b952120fc9b839ac0dd"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","ad2c1c242403f014792a8a7424c8fb46"],["/404.html","2394b59b860bfc1b2a641e2bc2300ffb"],["/about/index.html","6e450ae2bdfc3ed2b38a581e08ed5cb9"],["/archives/2020/02/index.html","f8241fb7c7f79c31381b86485ae38f39"],["/archives/2020/03/index.html","cdbfdb3366ade11890ea8444c4ca1c9c"],["/archives/2020/04/index.html","371e21b0233555a52766be58eaa43d28"],["/archives/2020/05/index.html","194bd644e4aa203678b7b301e0720cb7"],["/archives/2020/06/index.html","1481dabfe437a3f40b4a904fb94c74c1"],["/archives/2020/07/index.html","07049c4618421f0ea29a77e55262819f"],["/archives/2020/08/index.html","b932636bc3b0da399c3c25079b2f4e92"],["/archives/2020/09/index.html","815303162b334bf09de2a09b46fac972"],["/archives/2020/10/index.html","e562bdcc7e3f072dc7cf6ea8ff3d68bc"],["/archives/2020/index.html","693b8c76a35d5eebefd8f311a4bb2ece"],["/archives/2020/page/2/index.html","71f13b0e6d018ef4e0474e87d7e97157"],["/archives/2020/page/3/index.html","3efaf07191b6fc292208912cbb5c55f7"],["/archives/2020/page/4/index.html","fbe9b0a6440d5607cadb226b83d0fe76"],["/archives/2020/page/5/index.html","3359fa4b15e4892eaecdbdb27e125484"],["/archives/2021/01/index.html","e5805bc277e65e800d0b584d0781eaf6"],["/archives/2021/index.html","1902ba12ef9bb5c8b8cca9b3ec2473d0"],["/archives/index.html","65a4af3ec7ca5194b78b21006c3852d2"],["/archives/page/2/index.html","8c5058cb47ada539c576f5e2b197e0c6"],["/archives/page/3/index.html","8c5058cb47ada539c576f5e2b197e0c6"],["/archives/page/4/index.html","8c5058cb47ada539c576f5e2b197e0c6"],["/archives/page/5/index.html","8c5058cb47ada539c576f5e2b197e0c6"],["/archives/page/6/index.html","8c5058cb47ada539c576f5e2b197e0c6"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/bb/index.html","ddb9f23619348e18029dc62032a44d5b"],["/categories/C-C/index.html","c0e91dc001fd93a9a2c53eca89fc6aa4"],["/categories/C-C/page/2/index.html","b6c03fa6607082b7d30b4b82b9f8b20b"],["/categories/C-C/拓展学习/index.html","2508fff5800c0d824df716e9d490b24c"],["/categories/C-C/操作系统/index.html","dc69e258aa106580ca25aa0cda753f1f"],["/categories/C-C/算法设计/index.html","5314fe275494dc2e3b56266c5cf92419"],["/categories/C-C/编译原理/index.html","7feaf5441f17a73f03c39c02ecad5c87"],["/categories/C-C/软件工程/index.html","eaa624795b57a830d3879791a688df15"],["/categories/C-C/项目/index.html","925c6eaf22e23180920725a965d83ef9"],["/categories/Java/Android项目/index.html","b68411bb21ac1d69cbfc3736850754db"],["/categories/Java/index.html","7f69bcc8ee69421cabb5231b9eef0304"],["/categories/Linux/index.html","ef43207a5a99c56eabe9c23186f9ea78"],["/categories/Linux/上机实战/index.html","96438e6ff59b9a66047a8fe4cce309cb"],["/categories/Linux/习题/index.html","e6988c69931d90ef5faa69ea994f9a07"],["/categories/Linux/拓展学习/index.html","7ed7714a32e218d2b7dc493b7de7920c"],["/categories/Python/index.html","a9edaa73e40a7a1b6c4fd7062a9ad496"],["/categories/Python/爬虫/index.html","cd1ea52543a9eff597d2c22b0b4b204f"],["/categories/index.html","fcc22e26d715d9e6e31bbe2442b0f16d"],["/categories/其他/index.html","8deaf9707687011f8a60aa3abfae537b"],["/categories/大数据/index.html","6d79e470851f613c5089e5559e1eb785"],["/categories/大数据/习题/index.html","40319159e49901e64e6f9dbf40e613d9"],["/categories/大数据/实战/index.html","c6794b6d6a4b08b8000bba18907c53f9"],["/categories/机器学习/index.html","9c082c3bdef3b5150d7ff904a3c6f54e"],["/categories/机器学习/实验/index.html","8c58111f0a953667d86418e5b53a5eb5"],["/categories/现代交换原理/index.html","d6062e3ecdd472de8a68c9e5b4e4f740"],["/categories/现代交换原理/习题/index.html","529571c052e7bdb45859cffa946f890d"],["/categories/现代交换原理/实验/index.html","122cee4aec2512eed57eaa283286ff32"],["/categories/计算机系统结构/index.html","878d7d863b3837e1051a6424ba76d4d4"],["/categories/计算机系统结构/实验/index.html","0af3c03d559adfb470362243fc245278"],["/categories/计算机组成原理/index.html","f1a817508e2fd47305bb68729b67addc"],["/categories/计算机组成原理/实验/index.html","e189a098184b8d60229b33bd5fc8f087"],["/categories/计算机网络/index.html","b81f30df8ae493e33d3af99b2d926adc"],["/categories/计算机网络/实验/index.html","7f52b2f04e165d42ec99e19d268bc038"],["/categories/集锦/Android/index.html","1eb51c94e8badc89bac9c75d325d83f7"],["/categories/集锦/CSAPP/index.html","1997218659722de7c9848ca10f66ee48"],["/categories/集锦/Python/index.html","97d34c60dd09480a5999ad31b1fa0eb0"],["/categories/集锦/index.html","93e701c5f5eb811e56894f611a2a2a69"],["/color/index.html","3f627143356419f7f54e1443b3536f0d"],["/css/first.css","ea01aa1635810499a5ade558f4f81d56"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/style.css","e26c8d6dd933874a82b95958df895833"],["/friends/index.html","5c599af57195bab0140e1c882712fb61"],["/gallery/index.html","cac0a9f9094373909cca2398b08a7aa4"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/periodic-table/index.html","4c31220b3c8c1d35b1128df43b2c9dc3"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","8197a9e5f1fc6de5cfc9fac6acb05287"],["/js/aplayer.js","6e605f0855251e101d3024646f3eac60"],["/js/app.js","1948329f2fd7e750ade4bdc49138c09b"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","20743cf462e8d66dbdc651b79e91a1d7"],["/page/2/index.html","f25e433559a68bfbb40646e9651b4926"],["/page/3/index.html","4e61f3c784012a6308e371debb3ce87e"],["/page/4/index.html","d693aba0a5ce53d8a88f34c72eaabea6"],["/page/5/index.html","b2ae1df5ded6e713244057a281e10602"],["/page/6/index.html","5b1462d4800e0377dbca2b97e79fea83"],["/shuoshuo/index.html","ed0938f5741afc74fbef5bec0861cdfd"],["/sw-register.js","52d14fa737fd875f171ab805b4515239"],["/tags/Android/index.html","3a14b00104565a7b08955f4a634999eb"],["/tags/C/index.html","a9771372c1cf82a78bc0cec1ec9618a6"],["/tags/C/page/2/index.html","05f7fd64edf1638e70defb5559fd602f"],["/tags/CSAPP/index.html","9a017dc365baa958d2677f8578ba1f26"],["/tags/DNN/index.html","e62f3e5740b60b34f2d20cec633bbe95"],["/tags/DNS/index.html","c0232be2e75b8a719508471da21ba65c"],["/tags/FPGA/index.html","1ca0c991f399a5db32b405adb300e658"],["/tags/HDFS/index.html","4a02a79b74c28cd70d056e4f68a95288"],["/tags/Java/index.html","8539995fb936a24483b86e5eed485f9c"],["/tags/JobShop/index.html","c6a114f41b8b4b24fd29983aaf5538ae"],["/tags/K-Means/index.html","aceefea91b1c237332f60c9838986672"],["/tags/Kafka/index.html","ba8be81ad058ff40eb37ac969377f63d"],["/tags/Linux/index.html","73fe82c699b0a57a356379fb52375f36"],["/tags/MIPS/index.html","0db30761deb78fab00d4a90b7745d0b9"],["/tags/MOOC/index.html","6327231c51070e81012bb6ccf7d6ed44"],["/tags/MPLS/index.html","e83b68c99acad872f1c4c283cda21eca"],["/tags/MapReduce/index.html","1cb5cdcaf22d55f8c470fda836a86140"],["/tags/Matplotlib/index.html","6234d8e83d2aefbc800a45efae2677a8"],["/tags/MiniSYS/index.html","64444096f55ad995112e92862482865b"],["/tags/Python/index.html","8eca0f08e4a17c14e4357233199adf2d"],["/tags/QT/index.html","d1fa7a969a882f3ba6e3eaadf486b1ea"],["/tags/RNN/index.html","02053dbee08a823750d8529bb239eac0"],["/tags/SIP/index.html","269c638ad245978b26e6ae9b7b49db10"],["/tags/Scala/index.html","48b17f8cb37db6a17286062aa74ddfde"],["/tags/Shell/index.html","7ff3a744c6e14b16db46351c3b232f49"],["/tags/Spark/index.html","7eed8adb193ea801b3996ef4658a73c4"],["/tags/Streaming/index.html","4b5e314dca64d28cda49d79f2999b688"],["/tags/Verilog/index.html","68a15abf206fe151a58892b0f2bea9a7"],["/tags/first/index.html","0d0f4ec4988c027b6c77def6d98272a6"],["/tags/index.html","f47968cc121e7f375120a0f9b037ff11"],["/tags/习题/index.html","4e209aeb190dcb066a6cbb310211b901"],["/tags/决策树/index.html","ce59c993a9dfc25c8d35d74274fd7aa1"],["/tags/分治/index.html","97f01a9fe1c6c06b667f82b2b5d74099"],["/tags/分类/index.html","e0d23d488a1be1bd22b3e77b0f91a33b"],["/tags/动态规划/index.html","669d6a4e6cf9a17d193a4ba13564b6b8"],["/tags/华为云/index.html","9addde3c76d884657585d098492e26ce"],["/tags/同步互斥/index.html","b46a9f630e525aede1e67a346b6e1b1e"],["/tags/大数据/index.html","4e6b944af71ba92eed0c26a93d1113b8"],["/tags/实验/index.html","eb74ecc3ac6e7984ff30703f432c56b0"],["/tags/小游戏/index.html","56d3ef78206193e12a084a9f6b641162"],["/tags/操作系统/index.html","3d630fda0094212b2d3be81521d1a724"],["/tags/日志/index.html","9d7fb8f2d0f3ff4f51fa54ebeb59a2b6"],["/tags/易错点/index.html","b1ec8112f711b1af4c0a8f307de2847e"],["/tags/机器学习/index.html","c17a0e319b552569739eecb383006df0"],["/tags/正则表达式/index.html","2e97827fb88ab6964d1fab4b197648bf"],["/tags/汇编/index.html","9cb675b19bb68da5373e72e5a1f5d5f0"],["/tags/流计算/index.html","9cda33cc9db0f3ca8ba4a72b24cad7f2"],["/tags/爬虫/index.html","e841754b5e5bce96dc8f305671c8bce7"],["/tags/现代交换原理/index.html","d06e3924ec8e70f7cfaf4bcee247b08f"],["/tags/生产者消费者/index.html","ab1f9c66119e5c3c1107934aabba25a0"],["/tags/算法设计/index.html","0902c5343211b5a03025bb62e4c94ddc"],["/tags/线程/index.html","7347f60d21054f8bc588a787a2515f97"],["/tags/编译原理/index.html","cda392e73e4fce74b48c17446028d3c5"],["/tags/网课/index.html","f9699a4a935299f130dadcdad97c08e8"],["/tags/聚类/index.html","c6e1f7da9dddf6574b689198094d41e0"],["/tags/计算机系统结构/index.html","e394caab07e02a9d47ea1eb1d3c2f70c"],["/tags/计算机组成原理/index.html","27aa6f9634490b83399d4676baa986ba"],["/tags/计算机网络/index.html","5fd16718d4cdd5cc1e7f35448bad0c63"],["/tags/词法分析/index.html","33ac28ba44621cc292c9f1ba01ead95f"],["/tags/语法分析/index.html","f55e5ac1ab7fb0ae4426623ebd7d7e5d"],["/tags/读者写者/index.html","a4147091964b7175650af38fcc765214"],["/tags/软件工程/index.html","1f71c2470b25157a4fb7f8436a67e6e8"],["/tags/进程/index.html","caef6aaa9829a22cab48a4c3bfab2ae6"],["/tags/难点/index.html","e61c50d3c88493d0b4b23e644ee0985e"],["/tags/集锦/index.html","2ef2b1ec7cacb55939e77f373776c7b6"]];
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
