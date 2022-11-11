/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","00a742b955c1bb63e296ab0d28cc04fc"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","0b49b6ee2a57591c9dc5be4f32389017"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","3d7762e98b10f710bd5444ca2c171416"],["/2020/03/26/计算机系统结构-实验1&2/index.html","9054cdb33451600097cc6d7c038d04a8"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","39b9972c470c7f56e66ba0a073ddb19e"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","81e52a34ffd7f28aa7a78d7c9c17ef3c"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","7f4c8fb25703ff24167ad66d06257d7e"],["/2020/04/18/机器学习-条件熵/index.html","f8ca7fe0dfba1241696dd088e2caf409"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","6dd44054d5f500ec92a7a256055eedd2"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","c0d73322b0b56e066cc797d1dfe919de"],["/2020/04/26/机器学习-实验-决策树/index.html","88037cab8f34210733fbf0ce53ec0065"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","6631ccc811543e4fed8043603280b7a7"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","5381cf449106b93248ec75ea4653b538"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","604e433a35467ffa36778362134110cc"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","bcad508f64f0500c4c69df34762ec224"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","c5c0fbbae1a41e8833baf2d1c47ede5d"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","2a683b893a47ed50c019439d9d41f4e2"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","d1218d3407c40ba8f1216347221b9a2b"],["/2020/06/11/机器学习-DNN-手写识别/index.html","6190ded697212939fb128194a6c6ddde"],["/2020/06/18/大数据-习题/index.html","bd3e84f21dce334b7bc0d6e2459f8080"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","26c217126c233e7527e9f4480e10ffef"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","87e32c6da428131bdbe73089475da295"],["/2020/06/24/Linux-拓展学习/index.html","5ee1ca9deca5f1354d123e73ee55a099"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","3f78dae23ec9bc9769db454faf4debdb"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","c9d2c1d065def5755cc8538022b0b87c"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","66182229c3d5b05b6c427c3dfb27dde0"],["/2020/07/15/C和C++的struct使用总结/index.html","a01b60bc23200077cac0c65406be292f"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","4423f562d736c2b6b313a8f754adbe3f"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","e737546e4a7b67372dd46afae7b623e2"],["/2020/08/10/机器学习-实验-花卉识别/index.html","781957e78696724e8b8f0f4622ad61d7"],["/2020/08/15/Python-项目集锦/index.html","582c3ef3520b6b24b5f178ecda6338d3"],["/2020/09/01/编译原理-词法分析/index.html","72785de74a6a5bc9f992978eee18ecf3"],["/2020/09/02/编译原理-语法分析-LL1/index.html","68b9256af8814ab60a56b74b08d74c86"],["/2020/09/02/编译原理-语法分析-LR/index.html","59dec6d0955a591622dd0fa3b24973ff"],["/2020/09/03/操作系统-内存管理/index.html","f32472c2e58641c09943c9f2023aa05e"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","f6a410bc01826248a2e20a69d8bdaebe"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","6ef9367fb461279a0c47d072897674e6"],["/2020/09/04/CSAPP-实验集锦/index.html","3babd30d5c1f1022dba4b1b48e190fcb"],["/2020/09/10/计算机网络-实验集锦/index.html","c55037f240d5a6617b5c193d82a5a091"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","c266093512c69b6ae153c25ccd7cd4db"],["/2020/09/30/C++工程项目-JobShop/index.html","e6b8c9e482115a0a6966d935a3141d4a"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","a5e090f4fb8e5cf7e20293d330c7facf"],["/2020/10/09/现代交换原理-实验1-时间表调度实验/index.html","6ff171a37388f287523911c864a314bb"],["/2020/10/09/现代交换原理-实验2-摘挂机检测实验/index.html","c85c7bc7facac11f09d107c1cfa02da2"],["/2020/10/09/现代交换原理-实验4-拨打SIP电话/index.html","33812b12e7f3c31fa6272891f5a86998"],["/2021/01/04/Android-项目集锦/index.html","f34412e2cfe4d9f904dd058b28682421"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","feb98b14cd5ccf8b783a5f4701dacdf4"],["/2021/01/04/C++工程项目-travel/index.html","b6dab2e3ea6f6358295bd272403af11b"],["/2021/01/04/算法设计-分治-最接近点对/index.html","bd81c0d643f231edf7fc618e4a6acef5"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","f2243f1c1b341d28a142b43d63f98354"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","783ac10ef0dff4466536017db847077b"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","20e868ed757a499066dd5f5be0464105"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","9eab63ef71f9d243ddb420847ca6a569"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","83fc9e06a9ba39435e83f117496ea5ad"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","522dd98cc9e05995a63ae5ba4550008c"],["/404.html","2394b59b860bfc1b2a641e2bc2300ffb"],["/about/index.html","e0ea2c8993d02f10808449164d25cc3c"],["/archives/2020/02/index.html","b49862742a2c18852414e8a6069d28fd"],["/archives/2020/03/index.html","d14e5a67fc4b352e916c44e05c47205e"],["/archives/2020/04/index.html","2483b17f1e5a410b3a3dc87bdba4264e"],["/archives/2020/05/index.html","51d6fa1333008125b64f47522dbe8234"],["/archives/2020/06/index.html","599516d9b9f4905bb5826ccb321888a0"],["/archives/2020/07/index.html","b0dbd4463195f44574c1295853907b40"],["/archives/2020/08/index.html","c464c6e08c36d9de11d8d6a67bd95c7b"],["/archives/2020/09/index.html","a53abec8cfa78211d1f0ba8644a7db47"],["/archives/2020/10/index.html","c6a596f670830c399352d1b02fc7a0ad"],["/archives/2020/index.html","d5cb7c812633ff7e162d430d8df99973"],["/archives/2020/page/2/index.html","9a43684a15edf01e897163493c7cc626"],["/archives/2020/page/3/index.html","2a8b10b12dbac2f70ae6cc967ac2ce18"],["/archives/2020/page/4/index.html","e3246beb9d1ea4f155c1b24a7a23da8c"],["/archives/2020/page/5/index.html","895f1c717bf6c7461c0e67b88fd9211f"],["/archives/2021/01/index.html","14c8feae89577bc4ed16df06cf173669"],["/archives/2021/index.html","bc44e877338dc3d7a8c9e5708538e5e4"],["/archives/index.html","c87fae5058729e622292d0208ef1fd14"],["/archives/page/2/index.html","c87fae5058729e622292d0208ef1fd14"],["/archives/page/3/index.html","c87fae5058729e622292d0208ef1fd14"],["/archives/page/4/index.html","c87fae5058729e622292d0208ef1fd14"],["/archives/page/5/index.html","c87fae5058729e622292d0208ef1fd14"],["/archives/page/6/index.html","c87fae5058729e622292d0208ef1fd14"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/bb/index.html","c7a4b9d91f350738637dabb9de581427"],["/categories/C-C/index.html","dc06b9fe8bbf32a289001ddc75fcab98"],["/categories/C-C/page/2/index.html","2636376ddd87842f4e981a6beee8dbbf"],["/categories/C-C/拓展学习/index.html","7a27568547372829ec9c70c6d06a2a11"],["/categories/C-C/操作系统/index.html","74785f4c533da36009d6e2b93a1f8e11"],["/categories/C-C/算法设计/index.html","3b15a4b26c0a0dfa3c78a825045d3ea0"],["/categories/C-C/编译原理/index.html","42f145818372e0fd473fb3dc935a4663"],["/categories/C-C/软件工程/index.html","43e322f0ec0024bf0f6f4792aab2e366"],["/categories/C-C/项目/index.html","bf61acdf841f47afd6bbc8c35a75556a"],["/categories/Java/Android项目/index.html","681110c646575a7a0b5e8802551821c8"],["/categories/Java/index.html","55965aa0880d4ea21bba56c8bdacf667"],["/categories/Linux/index.html","1b16728350d2beedbab61c866e99fb84"],["/categories/Linux/上机实战/index.html","c8554b70f4fe7e6883691b351451db1d"],["/categories/Linux/习题/index.html","4c7a65b3fafb8a096a4f3d7639c0fd8d"],["/categories/Linux/拓展学习/index.html","9a0c6d2204a91a0763954a4e02d11826"],["/categories/Python/index.html","efa940a4addb76c7458fd5909fcb0507"],["/categories/Python/爬虫/index.html","6f011e36f1f6481eb5f7f7d41c73f754"],["/categories/index.html","f0ec796cb99105b7022532a64e3d6da7"],["/categories/其他/index.html","9bef3abc2f9b61840814686eaa70cb14"],["/categories/大数据/index.html","e3ce192da65ab40355fe281eb68469b5"],["/categories/大数据/习题/index.html","cf41de6ac5df6c44681ca35aa19866a2"],["/categories/大数据/实战/index.html","aed1b2d8fcb67171ed8dc89334022ee2"],["/categories/机器学习/index.html","1600d45e76097edd02a69560303c75c1"],["/categories/机器学习/实验/index.html","cf7dced7b3799a529f08b1de0aed16a0"],["/categories/现代交换原理/index.html","ab0bd85114e1ea6f03c8ef5ae059cc64"],["/categories/现代交换原理/习题/index.html","30e4e74bfedf590c962234888d48c48b"],["/categories/现代交换原理/实验/index.html","2528b0ceae6d0ed12e8f1bf7027eb603"],["/categories/计算机系统结构/index.html","291161f319cf704f5ea5e9df1822522d"],["/categories/计算机系统结构/实验/index.html","698c2cf1eea3cc48db381438fe1cbac4"],["/categories/计算机组成原理/index.html","8d0803f2a9ea3267876c763921ddb475"],["/categories/计算机组成原理/实验/index.html","93b2894db76d1b93a7ef0c1fe0dd9e44"],["/categories/计算机网络/index.html","d036220feed4407cca578504e8c7a86c"],["/categories/计算机网络/实验/index.html","11806920085397d0ed842be40989c9ee"],["/categories/集锦/Android/index.html","49999f5d9eddbfb56110398d132e2d4d"],["/categories/集锦/CSAPP/index.html","4ba62447098a0fa7b90aad1dddc68826"],["/categories/集锦/Python/index.html","a395370c7a655e0e713c1a572036a326"],["/categories/集锦/index.html","ffb5399fa0499acbc499b8e22a1bdac7"],["/color/index.html","3f627143356419f7f54e1443b3536f0d"],["/css/first.css","ea01aa1635810499a5ade558f4f81d56"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/style.css","4b6ce514c846132c606ce76da7e1c124"],["/friends/index.html","1e8953c688f73355f2f14ce3e50ac2ff"],["/gallery/index.html","cac0a9f9094373909cca2398b08a7aa4"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/periodic-table/index.html","4c31220b3c8c1d35b1128df43b2c9dc3"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","11adc252d171003bdec12b95e8ee67a9"],["/js/aplayer.js","6e605f0855251e101d3024646f3eac60"],["/js/app.js","1948329f2fd7e750ade4bdc49138c09b"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","205757fdf33c9eb906f312c645ba16bb"],["/page/2/index.html","ecb9c932447d61e25d56fe4bbf30e37a"],["/page/3/index.html","dfa93c155261c61dfa7de59030d4e8b9"],["/page/4/index.html","39dfa5cc181fda2fac76ef8ecc5c26ce"],["/page/5/index.html","5b4c7f7b323b59ed9689e7f8a133c1e2"],["/page/6/index.html","fac815e8cfd070663ad8cefc8a358e25"],["/shuoshuo/index.html","a99326477facf046eef81e48562aa6ad"],["/sw-register.js","594778967e6d282998f30d7c61692ad9"],["/tags/Android/index.html","1d597a3afaaceb1c547496afae300572"],["/tags/C/index.html","dbe919f231c9fa402eb76918073c5e52"],["/tags/C/page/2/index.html","5bb869a3cbed3db922c86fe2c8cb5058"],["/tags/CSAPP/index.html","f76929c93641b21ca73e7ad34e263097"],["/tags/DNN/index.html","2d1b16cac74f2bd2e88d4d7740e119f7"],["/tags/DNS/index.html","e87560e6eee21bbd0c7e7eb5065e9f98"],["/tags/FPGA/index.html","a432063bf1afa610db873a85bfebd858"],["/tags/HDFS/index.html","3e6985131e2b429c9a5304da0335b6e4"],["/tags/Java/index.html","c887646114d8bfa6fa8cf0d1a9f157fb"],["/tags/JobShop/index.html","3b554f6047d7d483cf823a7bf23d6ee5"],["/tags/K-Means/index.html","5dd1a4133faa5ceda273d706492fa4ec"],["/tags/Kafka/index.html","f389818ad3dee10da2ae45be57ee0f4e"],["/tags/Linux/index.html","0d3ae16187e749657cc492ec52192a9e"],["/tags/MIPS/index.html","b76a749fc9a5006f746aa97cc4f5986d"],["/tags/MOOC/index.html","50a9e678e42c4133e7b69b7842da4872"],["/tags/MPLS/index.html","c80fab71c77b9fdef92d4a1449afbfb8"],["/tags/MapReduce/index.html","d1a5b2210983062915714d8667fa3618"],["/tags/Matplotlib/index.html","394894a1b69476b0ee120bc7924f0270"],["/tags/MiniSYS/index.html","1e1c1b505bac90b3b875964aa30a37d8"],["/tags/Python/index.html","4015145b4285634f30c506a477d3b0b4"],["/tags/QT/index.html","6a744692c07886575335d80f439dc8f7"],["/tags/RNN/index.html","19dfae3d76c22c34b7e895cc2c0fed61"],["/tags/SIP/index.html","c43948db50b8bb6de59e3d1926fb57d7"],["/tags/Scala/index.html","19c8975da1e338fe1b945456e3626ea4"],["/tags/Shell/index.html","d1a7e1e9fdc519a743a4c8fa278b54de"],["/tags/Spark/index.html","131f09f94e09364c4ebb27a5589ca7c3"],["/tags/Streaming/index.html","6535f8170fd44929e642d8dec2283ad5"],["/tags/Verilog/index.html","b181dd0aab8741ccddd56e21b1541b80"],["/tags/first/index.html","87ff6d25f006970976a1e4ff2cf86611"],["/tags/index.html","518369f7a619054ded3d97d86bb6b96f"],["/tags/习题/index.html","d587121446dfac292cffc337f9a7558d"],["/tags/决策树/index.html","b40968c13898edfb445c538a1c889b70"],["/tags/分治/index.html","e88616c2e9a7c832e1ffb1db53b09221"],["/tags/分类/index.html","f1ab47069058b18f7379c943c38e6d93"],["/tags/动态规划/index.html","4e4b9bb0b46ccfdba540df869f2add85"],["/tags/华为云/index.html","51cd2965ff60348d9e5946c21d2c4b1a"],["/tags/同步互斥/index.html","70f1ac6bef10c7ad4acfd87ad7007413"],["/tags/大数据/index.html","012f516912b405742f9b1eba66f96ec3"],["/tags/实验/index.html","4d0f0e2be7cd77fb0b3f278b2e6dae6d"],["/tags/小游戏/index.html","af9cd26da41d97c6cb41e750f18d978e"],["/tags/操作系统/index.html","d46615102354886b2fc8dc3c02293a19"],["/tags/日志/index.html","2471c78bce16347e6e9959a39f0b0d5a"],["/tags/易错点/index.html","2e39b7995ddb1a3c7044b22733db1880"],["/tags/机器学习/index.html","832a727836feb20aa3c7e385a4c0698b"],["/tags/正则表达式/index.html","401d06f4e85b6ae654cdb114a3718d46"],["/tags/汇编/index.html","8ea3d539cd93bdd4271c4d8fcf5aaa63"],["/tags/流计算/index.html","4b91e33dc25300b5213b1563611cd052"],["/tags/爬虫/index.html","7f98ca458126eae4afcf4c416aa5b8b8"],["/tags/现代交换原理/index.html","57fa3e325090db3d07fb4c163c89e94b"],["/tags/生产者消费者/index.html","62cb305489b45e0bbc6a82765625d8ce"],["/tags/算法设计/index.html","70cd103da1e2275416b08a7d6b24552c"],["/tags/线程/index.html","004c5d175bb71465984ac88388d8765b"],["/tags/编译原理/index.html","56f0636696bb9c4d51b6934d597b2f31"],["/tags/网课/index.html","5dc758fce426da1d6d6b08e1724f10da"],["/tags/聚类/index.html","6c9ffdbce09b519278b8bf39e4c95df5"],["/tags/计算机系统结构/index.html","012ad051cf8ded4496a0fc0b54e9f441"],["/tags/计算机组成原理/index.html","006fc3da015481e97273449e1d9426d1"],["/tags/计算机网络/index.html","0c9832151d44d29fffb172ed696d6fa4"],["/tags/词法分析/index.html","78fdc071ed1968f9acb3b8c68e38ce4c"],["/tags/语法分析/index.html","385c8105cdb9e7110fb581706126bc1d"],["/tags/读者写者/index.html","2749e546f459f526c1c7aee6a7f092cf"],["/tags/软件工程/index.html","16556d8ac96900c37700d32eb5605c0e"],["/tags/进程/index.html","0cec3d7f4c9c96c0a2379d596bf1654e"],["/tags/难点/index.html","1c7c02774706733ffb296bd75c161dbb"],["/tags/集锦/index.html","0e732eac8b2e737e4891ff0b3c5eb17b"]];
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
