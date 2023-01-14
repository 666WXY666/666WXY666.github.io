/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","ee56486cefa78ecfc2c6e4c01efb2f0a"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","b1fe892080ac9e3a000749220b12482f"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","b75724f2654dc71accb9d1f4997b53e6"],["/2020/03/26/计算机系统结构-实验1&2/index.html","9a0ad0776e8913d4b25b807d3cc1c3d6"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","be88c3fb7dcbfda8bd4bfce46d545a08"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","c11177763aaa8ee62473f67f608793e7"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","787224795a66551185a376a72bb0985e"],["/2020/04/18/机器学习-条件熵/index.html","9e4c6ed1e8f9e0aad3e0d7f4f3f2795e"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","13d7dd3a39b6dedf0771fa8b14457dfd"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","c6d22828863ec6fe7a2cfb1a3e8ddbfc"],["/2020/04/26/机器学习-实验-决策树/index.html","9d04609bbdb227e13ca4dcec4251c1a1"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","31fa7c1d34977f2b58a144fb5bb5b263"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","cf2cd2efcb65ad2ad6bc47c119153a29"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","0c727cdeb481327711dba5d5bc4bbabb"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","5a4cde0e7386d21b359e9f6c7cb9c5bc"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","6aeff6a1145550bdb1049d56ff619e8c"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","357dbceb1617d7340747709739bd1018"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","d4b44a526925df7c65df82e2a3db0bab"],["/2020/06/11/机器学习-DNN-手写识别/index.html","a4ea4ba6d1436af12a05b5d897a61e7e"],["/2020/06/18/大数据-习题/index.html","244ed4aaa12e82d0b7ba89872e00a6cf"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","59b2a8214db5864cbb08fb7d21392cb6"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","5f30879faf4f31039f87fb6452b6bd6c"],["/2020/06/24/Linux-拓展学习/index.html","590a4db4c9715a99fee082902eb40853"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","2afd5938816c653166830f8ecff976b8"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","0b5106bb4b6c587a0e173784d007030d"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","c88a40eef068e31ff2f3c2d49b50861a"],["/2020/07/15/C和C++的struct使用总结/index.html","15a5df4a43b3dde959857602b5acd0e3"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","27f4b69436750972585a4aab4d3cf6b5"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","ec47244f3f1d677d32575d224f362152"],["/2020/08/10/机器学习-实验-花卉识别/index.html","0dd8dccc0f62d96139b696b31d522e00"],["/2020/08/15/Python-项目集锦/index.html","ce065516bf0098c8db54ed564ee78e38"],["/2020/09/01/编译原理-词法分析/index.html","9f9a4604ad732e2dafb4597704168dae"],["/2020/09/02/编译原理-语法分析-LL1/index.html","e021db5d211f21576f27ca3abe6204bf"],["/2020/09/02/编译原理-语法分析-LR/index.html","1839743157262905f566841d681f043d"],["/2020/09/03/操作系统-内存管理/index.html","f57529e75f475970779eb26b57f91326"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","e5a46a2ede3519fbaa41d8b1adb42f13"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","9a651a562c4c8aca8288e6aace12d215"],["/2020/09/04/CSAPP-实验集锦/index.html","48aa75f5026f5ff39cb8ed6b86254d6c"],["/2020/09/10/计算机网络-实验集锦/index.html","1cca59abd2a150b323ad14012ebeb341"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","9f0074532914ab62e44326fdf663d795"],["/2020/09/30/C++工程项目-JobShop/index.html","fe62c325a638b935af88b6c91bee9d74"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","a4971c4fcba21c4381fd8a9307ce68aa"],["/2020/10/09/现代交换原理-实验1-时间表调度实验/index.html","e222348be6a44bd1b8f889bfdede790d"],["/2020/10/09/现代交换原理-实验2-摘挂机检测实验/index.html","df18ebec43aed818bf1996c2fe181e47"],["/2020/10/09/现代交换原理-实验4-拨打SIP电话/index.html","dea457e7d63860ac0edf6542d5c12a83"],["/2021/01/04/Android-项目集锦/index.html","3400e8991a0179aaf6873e4d5ce0fdbd"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","ddbb231b624b9a936868085e7a3df4df"],["/2021/01/04/C++工程项目-travel/index.html","113edb68573f3812978327bbf3ce4491"],["/2021/01/04/算法设计-分治-最接近点对/index.html","32612a0124b5b0c72834f2b181902220"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","605415b8ace239538568e27dc40baec3"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","33a900e4fb0c1238811a28ec1718acb1"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","f1cd9968a5b7145a3544f0938d02af01"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","0749341bb47cd37e2be76b59e9cfb6aa"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","8da605130c6e9c234982006d0f700dc2"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","7b55c135a47519bbb1dc283632eaa3e5"],["/404.html","2394b59b860bfc1b2a641e2bc2300ffb"],["/about/index.html","b38fc146147e9df2322a0b1dd6ef626d"],["/archives/2020/02/index.html","7f0d7bd91d54a8157ba64d0155831057"],["/archives/2020/03/index.html","53091500cb76fd81b3b54c5e53faac4c"],["/archives/2020/04/index.html","c4bc2849fc14c05baeed46e89e949ff2"],["/archives/2020/05/index.html","136ea60ed4faca295d0a679fe5638292"],["/archives/2020/06/index.html","93fba95eb263ec03462193b959140d0f"],["/archives/2020/07/index.html","0b8d8f01c6a5d4772c2ae7b14a29a4da"],["/archives/2020/08/index.html","0ed39d9eb421dfe245ef26ab88cfbac4"],["/archives/2020/09/index.html","0567d4338bb764975a652336e9ee8b91"],["/archives/2020/10/index.html","d641210c63d29905703e2e9650167083"],["/archives/2020/index.html","dbde84c148734b7eec4b0824a18088bf"],["/archives/2020/page/2/index.html","fbe705a427594780b682ace2f3bfec85"],["/archives/2020/page/3/index.html","fd90ffa178ef103803158ae45b7e41ad"],["/archives/2020/page/4/index.html","746ef6d20e01a5a2f01880eae7b11510"],["/archives/2020/page/5/index.html","51a305a6003a21462108a0bd4c30e6d1"],["/archives/2021/01/index.html","6c8a75af9b822867bcc098f377a7798e"],["/archives/2021/index.html","4b37a7df9e1b376105b5f24e1e81c95f"],["/archives/index.html","357b76be8b3992e45e3e0ef67acc7134"],["/archives/page/2/index.html","47a15e0e171350b28df4d5d79bc9ff98"],["/archives/page/3/index.html","47a15e0e171350b28df4d5d79bc9ff98"],["/archives/page/4/index.html","47a15e0e171350b28df4d5d79bc9ff98"],["/archives/page/5/index.html","47a15e0e171350b28df4d5d79bc9ff98"],["/archives/page/6/index.html","47a15e0e171350b28df4d5d79bc9ff98"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/bb/index.html","9fadc8f326f929d644351dc4202686b5"],["/categories/C-C/index.html","d2397391f8d9267aa176237cc87fceff"],["/categories/C-C/page/2/index.html","88cca526de148aec74c61455fc968d97"],["/categories/C-C/拓展学习/index.html","0498083d51706940beb85121993ccd21"],["/categories/C-C/操作系统/index.html","a7f01e759c56a055abd436d1e4ae77cc"],["/categories/C-C/算法设计/index.html","db5a8a7e6cadde708fc1e1a9ebdb774d"],["/categories/C-C/编译原理/index.html","c75a00013a016ac31eb2851d03828a05"],["/categories/C-C/软件工程/index.html","b2a3e508ee69ff58ac19a11e0ea3d337"],["/categories/C-C/项目/index.html","334184d0546a2594c2377bfd6901d14e"],["/categories/Java/Android项目/index.html","f2f659a35e2c9112a0fd47c6edc4f4c9"],["/categories/Java/index.html","65d5b95885eb6dbd1305e880a32b9bd1"],["/categories/Linux/index.html","e56a73266a2eed9d6fe10a399fd40152"],["/categories/Linux/上机实战/index.html","06743bf7ced24c5738be15536d25f4af"],["/categories/Linux/习题/index.html","3c509a6b58fb9897169742bae563556f"],["/categories/Linux/拓展学习/index.html","3f5ba4d1be4521db24a2bcab247e6b45"],["/categories/Python/index.html","a38677408673e09ccfbecedf55f5bc8f"],["/categories/Python/爬虫/index.html","dfb80211e7d1abd67191de695f0da47b"],["/categories/index.html","7973a0e2e46d5724998f1e51b8371816"],["/categories/其他/index.html","2127970bb84ecd86a1d852f8d380e55c"],["/categories/大数据/index.html","9e261a5f3d14fbd0355feebd32d48dd4"],["/categories/大数据/习题/index.html","c1cefaf6d5375ffc1fcbc393b1677cd6"],["/categories/大数据/实战/index.html","f1c8dcc484a51b3570a0861cbd58bee9"],["/categories/机器学习/index.html","e6ed77c46fb6c46ab7755a9e22ddb3f1"],["/categories/机器学习/实验/index.html","fbd6a5e705426999677d2a64d77be1a3"],["/categories/现代交换原理/index.html","9ea6d98f55e31df4d2d957b98c027241"],["/categories/现代交换原理/习题/index.html","99affb46e4f8c80cf0993eba4bcf7fb6"],["/categories/现代交换原理/实验/index.html","c841c0a267d18dbb321cdc55267f4774"],["/categories/计算机系统结构/index.html","ef5e9ad106dbf6a27b64784520cc5a8a"],["/categories/计算机系统结构/实验/index.html","6fc6be52bb615e2c4be59c7544e9da40"],["/categories/计算机组成原理/index.html","4ff6ded8f60457cf93a6a8346e573b5a"],["/categories/计算机组成原理/实验/index.html","2e18c1efe9ea2391ab3e18b7c868937d"],["/categories/计算机网络/index.html","e376e7c3806113ba93620c642bd8136c"],["/categories/计算机网络/实验/index.html","c1b5619260c667b137c9a9869b804647"],["/categories/集锦/Android/index.html","3a46d00cf127d55625f3630a3a1747a8"],["/categories/集锦/CSAPP/index.html","8c9a82d3c057451aed7c28142c911282"],["/categories/集锦/Python/index.html","5522eaa114c85b2d5d7e0f4a7f99e49e"],["/categories/集锦/index.html","ae2ad690016268a73a51cc093cf4a847"],["/color/index.html","3f627143356419f7f54e1443b3536f0d"],["/css/first.css","ea01aa1635810499a5ade558f4f81d56"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/style.css","4b6ce514c846132c606ce76da7e1c124"],["/friends/index.html","7c5527b0746f1ccc3258cbbb1901a249"],["/gallery/index.html","cac0a9f9094373909cca2398b08a7aa4"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/periodic-table/index.html","4c31220b3c8c1d35b1128df43b2c9dc3"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","f907887a207ab7b8e4c7b63e9c1940f3"],["/js/aplayer.js","6e605f0855251e101d3024646f3eac60"],["/js/app.js","1948329f2fd7e750ade4bdc49138c09b"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","b31ea4ca91ba5b5806e28bbec41e4b1e"],["/page/2/index.html","73679c8f2a92e275ccf7edef2737c0fa"],["/page/3/index.html","9781b5ed65ed63f3fa5c29533146f719"],["/page/4/index.html","7c171036f97f95f8813b9f27a2dd460e"],["/page/5/index.html","3fe779fd2b39a33dd67b87fd658392f7"],["/page/6/index.html","85b97b744477126cd65ccf59be16b733"],["/shuoshuo/index.html","b455f99c8b90b6e0dd62808a0baeb2a3"],["/sw-register.js","bb2b588c08a62820fda427fb85f87660"],["/tags/Android/index.html","c021865bd51a06dfb55b3afa0fb82953"],["/tags/C/index.html","3f636ba2c9bfdcbf05162cdf9d9d0992"],["/tags/C/page/2/index.html","8876f73fe6d8795fb4ce81bb4c6b226b"],["/tags/CSAPP/index.html","cd7bb0330a383f11d7819f62337ba4ca"],["/tags/DNN/index.html","abe908a7d951a5dea650aa3d5e75a9ab"],["/tags/DNS/index.html","23c3da0879db3b7bd4418ab67ccd0ec3"],["/tags/FPGA/index.html","badce8e45d71df10b8f59e7c146a974d"],["/tags/HDFS/index.html","e16219e38dade0c1b1aa3e63b043e166"],["/tags/Java/index.html","3c658fef8b4eb880f2075d5e1280925c"],["/tags/JobShop/index.html","c96493f42608d33a746563efcc200b66"],["/tags/K-Means/index.html","f019653edc2c12b0de3bff3f52d8b824"],["/tags/Kafka/index.html","fddc59d2c8559f5a111fb98875f15ffa"],["/tags/Linux/index.html","ce6e793cf84f5606d6bef660106227e1"],["/tags/MIPS/index.html","794db80934e10b62d447e7ae4db58250"],["/tags/MOOC/index.html","d0171ba32a78512830c14aad81a7992d"],["/tags/MPLS/index.html","3a43b810844ee9a2702f3d4538af646e"],["/tags/MapReduce/index.html","563acd8a974b744899c9185c84d08ba9"],["/tags/Matplotlib/index.html","1daddd114c9659080b8850651a79fc67"],["/tags/MiniSYS/index.html","fc97d89ddbcccfb0281e79886dc06620"],["/tags/Python/index.html","fbb0167a188c7dc2ca3f9b43cf5a62b0"],["/tags/QT/index.html","a5bbb4c49083b91701a22af5ef896617"],["/tags/RNN/index.html","3dae75501854e27b947c6121ffbc1cb5"],["/tags/SIP/index.html","c8aab67dec34bf2a7d0f402233aaed72"],["/tags/Scala/index.html","4bce9e9f155709463eaa2e0a5715554b"],["/tags/Shell/index.html","46db0130a632ae0d9dccb8d6c1e7fa78"],["/tags/Spark/index.html","a6cd0dceb4d4500f8a5b931bc18b818f"],["/tags/Streaming/index.html","902dbb047dca68a0708093c9aba7f659"],["/tags/Verilog/index.html","ab671361e766972bf183e2ef0e8010b2"],["/tags/first/index.html","641517d1a17f0a50791fda26478d0138"],["/tags/index.html","90e97139eee5c946ad0964c41225d305"],["/tags/习题/index.html","3e7b28656c0849e524635f3036dcfc7a"],["/tags/决策树/index.html","153c174cad39878c3b6a6d80c657866f"],["/tags/分治/index.html","03085ddb7fbc23a637ab0318b27aa46f"],["/tags/分类/index.html","46cbd59b80ebd54882b2584d0eee34de"],["/tags/动态规划/index.html","85de47d9bf0b53f00a137e2753f73a3e"],["/tags/华为云/index.html","840843c5ee3f608a8cb297b630694862"],["/tags/同步互斥/index.html","f27339897178c0ea65dc744a49d09871"],["/tags/大数据/index.html","3356f06353a430cceaa06cbfaccca720"],["/tags/实验/index.html","548992ab17b7eb094a5aca747f195b62"],["/tags/小游戏/index.html","86f838f7c9bd48b8d0f2ef582bd41d7a"],["/tags/操作系统/index.html","0ce71ee7ceb9a6526448d19189924d32"],["/tags/日志/index.html","0147133e88b981b74c26653106dd3eb3"],["/tags/易错点/index.html","39862ae19c925676188233b58a2bb350"],["/tags/机器学习/index.html","b60331305be9342c8da2bf0bea843192"],["/tags/正则表达式/index.html","151061ab3107c222aaa4fd384f348116"],["/tags/汇编/index.html","6c7ebeda2063749cdece8de4ae74b372"],["/tags/流计算/index.html","b1042dbd5f98859e9d7ca5853e921bfe"],["/tags/爬虫/index.html","f67c55f4b32fca2df7ea343ccb62ffae"],["/tags/现代交换原理/index.html","094b60aa2778a2381e203e9cd052b459"],["/tags/生产者消费者/index.html","ccd0563822d712cf37c3fea5b5349d25"],["/tags/算法设计/index.html","7bbf19dd7d12a53baf01395ea7a8b5cd"],["/tags/线程/index.html","7b3f749ad7724509b19fa8c6424ea3c8"],["/tags/编译原理/index.html","acb30651fb4d7d303017793b71a7d280"],["/tags/网课/index.html","eafca88b13ee731b6610c2fa0e4dcf7f"],["/tags/聚类/index.html","9cd662c2fadefd6cb378611a6730555e"],["/tags/计算机系统结构/index.html","26dc306504e69941f37da80ea5ea109f"],["/tags/计算机组成原理/index.html","b3f1391a161883ed3ce0b85f6d12515d"],["/tags/计算机网络/index.html","5ec3b9c727c8ab744e2fb5bcdfc55fdf"],["/tags/词法分析/index.html","610841a2fc6a9f7cf3eda6cef1ead6d7"],["/tags/语法分析/index.html","4c9b3466d5a7ce41928bf8b2a5c90635"],["/tags/读者写者/index.html","f66038fb510fd56c4a212178964657d8"],["/tags/软件工程/index.html","ac3e46509793f7b2ecd100d7ec16145c"],["/tags/进程/index.html","3cdbdb61f91a718153af7c148628bd7f"],["/tags/难点/index.html","69e63ef45828abc2219f6b1296a66832"],["/tags/集锦/index.html","7b41037d6e24b134484f9d8df3339bbb"]];
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
