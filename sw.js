/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","7480d7ade08807e36102f6d4037509e4"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","416dacec0ce107a17d534e0c2a5aa40d"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","870156c4bb906d0449ede81aae8ec022"],["/2020/03/26/计算机系统结构-实验1和2-遇到的问题/index.html","43387eb7e4e03da666b6eee6b832bc56"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","58bd5fc36566923ffd7925241c8b39d2"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","c0c32bcc1870f232eb96778d727fad6c"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","d25f95dd20a6e7ebeada84d573171584"],["/2020/04/18/机器学习-知识拓展-条件熵/index.html","0531615d0d8026be880c453fc4e2b0d1"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","97b00923a720ec0e6710f19415e5e37b"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","c645b9f09f4c3bba9e0b64312dcd9db7"],["/2020/04/26/机器学习-实验-决策树/index.html","4a610d005c3a13855e76f32c5c642990"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","0b81c771efda6608bcb9581c187d058a"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","eb6472680dfaa7cb3f2d11845a9e812b"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","9c38d8c5af999a0c0a41dfb762cdecd2"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","b25088c021d75041c9ac7b38d53c9640"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","fe636dddf914cba197a91ce90b59a4fc"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","4d3748b1d5cad60fdf1291690f7481ae"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","02b919fa539b59fe47bb118121cc032c"],["/2020/06/11/机器学习-实验-DNN-手写识别/index.html","2c1c4e950ad6271f00cd60dc1e106fc2"],["/2020/06/18/大数据-习题/index.html","61fda51d25073cbce46e962497f1f029"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","e4cdc2e098be87d6598d8e7090731d30"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","bbdd63226261810917805056c4db7dea"],["/2020/06/24/Linux-拓展学习/index.html","956776103462409570fe76b7d2741b82"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","a554d9e291e7757108c51c1fa3d1a65a"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","0061ea1b2ec8891a096cccf495460d49"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","4e4533add778526362e6d07465877deb"],["/2020/07/15/C和C++的struct使用总结/index.html","801b0bd37a9361f26cbac95123ea74af"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","ca7902bbb397a2bb02c8d62f6e6749e0"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","28b138986ddc8690677d87ca16a00ce3"],["/2020/08/10/机器学习-实验-花卉识别/index.html","7ca5ca25ca3d32ac3f6070164655dcd1"],["/2020/08/15/Python-项目集锦/index.html","f291dac3510c07d35dc2b7fdc054ced7"],["/2020/09/01/编译原理-词法分析/index.html","f342236cb9d3781f560cd92f869111c7"],["/2020/09/02/编译原理-语法分析-LL1/index.html","c86b369ac647c0b1b4aa88c1224b79db"],["/2020/09/02/编译原理-语法分析-LR/index.html","ff863ad9859b23229abdb04e1cc1d891"],["/2020/09/03/操作系统-内存管理/index.html","327ba2eaa1b61cf0e6e7a418da7dd11c"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","9024ebce7974e0fcfba8b014976811a7"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","04454a0b3be37cce8238ccc3c5a7885d"],["/2020/09/04/CSAPP-实验集锦/index.html","8d4da6a71fd7ee9a2dd5aa1b6420b2f7"],["/2020/09/10/计算机网络-实验集锦/index.html","656b14dcfb2ae3771672e390d6df21f0"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","3b3aacc3e9a415a09651d2c9610cff57"],["/2020/09/30/C++工程项目-JobShop/index.html","7a510baa4a169131c1648a84a25277b5"],["/2020/10/09/交换原理-实验1-时间表调度实验/index.html","0f8b344c56a98e89085a40727fd11f55"],["/2020/10/09/交换原理-实验2-摘挂机检测实验/index.html","b4989d0ea70a1e8ab6e96cbf9a10b350"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","4963144e16f94f2b5af530455a6690f4"],["/2020/10/09/交换原理-实验4-拨打SIP电话/index.html","0b17101b693926cf6d05d4f6a90ac667"],["/2021/01/04/Android-项目集锦/index.html","b72743b6d393b1b10c542a1057ab6771"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","77b4a94b4168e3aa1943ad3fbf96f3aa"],["/2021/01/04/C++工程项目-travel/index.html","b407f323e6fa023b88cac7d1e49bc21c"],["/2021/01/04/算法设计-分治-最接近点对/index.html","383f860789e937b57c24c4c826b14ff6"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","3be71f43f1c39e8cfeb7846b663eb0fb"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","a8db0604b091431898fd9a6881a3a5a4"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","8a6ab57393f5f3bfaf5b44789f447a28"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","8d5bc6c579742248f6f93183257de46b"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","f094b01bff89927a089b320f086a62e5"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","37b5fb5d23c7fafeb91860663b0b8c76"],["/404.html","a46bf0ba9bc33f956d978057522f01b9"],["/about/index.html","28f42deea030669399a6fa88e1d75c40"],["/archives/2020/02/index.html","8e557da9d178056a4cccc36eea24c739"],["/archives/2020/03/index.html","0c409af41c4fea352f68c0fe08d17e1b"],["/archives/2020/04/index.html","4d2866e361a0783a129e75717a57144b"],["/archives/2020/05/index.html","e57d1f8be3e69ec0aff324adc5895cfd"],["/archives/2020/06/index.html","4b4507f9a1bfa2cb0e5dfcd5f5608a6c"],["/archives/2020/07/index.html","43410b3b1c3882633f2c621b7d8af529"],["/archives/2020/08/index.html","60746e264c1a6ce780b5c35aa7a580ff"],["/archives/2020/09/index.html","0423c453fea2972899db3044e0db077c"],["/archives/2020/10/index.html","65121556c62325f9d6d073e7a968b5e6"],["/archives/2020/index.html","4c59a70c00c1e16a5f5c1a53158fdebe"],["/archives/2020/page/2/index.html","3ec801dd2db235700f09dd1fa02712dc"],["/archives/2020/page/3/index.html","fa1de17a3e4fd6d5e3f42f30457c87ae"],["/archives/2020/page/4/index.html","96d1a1928d4d19148a50fbe4290a6a1b"],["/archives/2020/page/5/index.html","96d3e188ba9293d0a96622c8527dc758"],["/archives/2021/01/index.html","a50ec1841e8d3843fa37def5101544c5"],["/archives/2021/index.html","c6deb3bc1cc72eeca30af50ec1d08a3a"],["/archives/index.html","9194d9b672334ae2da9fccc7d27dd741"],["/archives/page/2/index.html","9194d9b672334ae2da9fccc7d27dd741"],["/archives/page/3/index.html","9194d9b672334ae2da9fccc7d27dd741"],["/archives/page/4/index.html","9194d9b672334ae2da9fccc7d27dd741"],["/archives/page/5/index.html","9194d9b672334ae2da9fccc7d27dd741"],["/archives/page/6/index.html","9194d9b672334ae2da9fccc7d27dd741"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/bb/index.html","baf51b00af65abd3b8a790bdb7a9bc57"],["/categories/C-C/index.html","800caa7025e6951820d47588f303bf92"],["/categories/C-C/page/2/index.html","316941aae289988b0a130defe7a50032"],["/categories/C-C/拓展学习/index.html","3010100be82ab14c9e504d83ada58478"],["/categories/C-C/操作系统/index.html","c81d7d0ecd62ef889712ee410225d72d"],["/categories/C-C/算法设计/index.html","db669ea757951970588bd4510e7b28b3"],["/categories/C-C/编译原理/index.html","b42ffa7318e4e7ce8a7f3e15a0429ab1"],["/categories/C-C/软件工程/index.html","a9755484b21a394e6047d01b954cfdc7"],["/categories/C-C/项目/index.html","756f9f86dab7db7457a96fb752e46dc8"],["/categories/Java/Android项目/index.html","7bdcdeb47ea7a362645c76df3a58c3e5"],["/categories/Java/index.html","0e58b3835e41d7bcb38c69806bdb929b"],["/categories/Linux/index.html","f280268edbc4d2567d45fb463f0ac7b9"],["/categories/Linux/上机实战/index.html","a4fe1e7dd23d41ede14ad682686380d8"],["/categories/Linux/习题/index.html","a8dc48fb28e152890cfb44fc4a829d53"],["/categories/Linux/拓展学习/index.html","c2353f5fda57208a2d55b17c9c16c374"],["/categories/Python/index.html","083c374688c6612ab64eca7164e15ad4"],["/categories/Python/爬虫/index.html","90ce030e2021ac763f98f20f3000b556"],["/categories/index.html","05fabc93e73b914f868c366a1ff66116"],["/categories/交换原理/index.html","a57099f4cf37f8bdc77a41987781324e"],["/categories/交换原理/实验/index.html","45322143b8f170f887f745816f46dde4"],["/categories/其他/index.html","ed1f9ca9aedcad88ea9cc202f9f6da42"],["/categories/大数据/index.html","aabbfb179e8b6744a5531b47fb0237e6"],["/categories/大数据/习题/index.html","83720979ef8c7eabfb0a414ac16dcb41"],["/categories/大数据/实战/index.html","eadd7218371ea164660002f8c13c441b"],["/categories/机器学习/index.html","9c12d710dfa52d05521269ae24f7c2c5"],["/categories/机器学习/实验/index.html","40a46fccedcfb350d88af19d439f70f5"],["/categories/机器学习/知识拓展/index.html","d38eec7702d5f27c6b87a0806d55f640"],["/categories/现代交换原理/index.html","2e7f2ad713325ddb80547281845df9af"],["/categories/现代交换原理/习题/index.html","a98ce54b1082e9eea50920ca5aa58f68"],["/categories/计算机系统结构/index.html","5a85b65d0771e3f7c83f1de507438938"],["/categories/计算机系统结构/实验/index.html","ca194d49acfd4f98bce1876d6ba640ee"],["/categories/计算机组成原理/index.html","db90d43e7bb00268a3d8618dcd827270"],["/categories/计算机组成原理/实验/index.html","958214efad8c9219f315424691d4d6c6"],["/categories/计算机网络/index.html","be4b222dae5a0e3b754c70f2e3c98ad8"],["/categories/计算机网络/实验/index.html","a60e319e775b0e64b759a1319287b93b"],["/categories/集锦/Android/index.html","d73f354698928d87480bc0ce5ed0d0e5"],["/categories/集锦/CSAPP/index.html","a4c75234a7b60e0f38e85ae37a4c3d82"],["/categories/集锦/Python/index.html","440442e66e1d9c0aa8875c89618d253d"],["/categories/集锦/index.html","fbbb60db5d1dc460e8e078313f8b239d"],["/css/first.css","ea01aa1635810499a5ade558f4f81d56"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/style.css","6bb0e006bcdf6e96b6708cbc5b8f868a"],["/friends/index.html","83a47c7dbf6b7edbb38a793043547d21"],["/gallery/index.html","63f4bc7639ebb10460b077618443184f"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","f5947ecc623c03198e1875bd8dea815e"],["/js/aplayer.js","6e605f0855251e101d3024646f3eac60"],["/js/app.js","1948329f2fd7e750ade4bdc49138c09b"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","62b8233e2f824a1d46cff2faa8a6bcaf"],["/page/2/index.html","57b680cf9b86ff98703e351d433162e8"],["/page/3/index.html","f91dd6eed1d7bac23852eb578b42afd5"],["/page/4/index.html","c5ca6804b1bf8828956993cd4b63aeaf"],["/page/5/index.html","6ef5b86fe27745591ea6b224ad93d728"],["/page/6/index.html","94ac3b9e1adf76333319fb4dd69be320"],["/shuoshuo/index.html","e8a70eab33b655d156ffa8915934557c"],["/sw-register.js","43f4d7f1a451bbff5f4b313ca203632a"],["/tags/AI/index.html","5f5f6b7d02807e2e785faed0541d9417"],["/tags/Android/index.html","b7eefc9e530211b6a91600d947798549"],["/tags/C/index.html","49d0b89fa2f60dffbe6a7946e6249d3c"],["/tags/C/page/2/index.html","8a864e3e33a07c6fc25fc967caf443c1"],["/tags/C99/index.html","dc16fbd1b85b32e9342da9b1537ca08e"],["/tags/CSAPP/index.html","6f7170c589017f612cf3d263b0983e90"],["/tags/DNN/index.html","e804e2cc32d05e18e0203f096c231643"],["/tags/DNS/index.html","79b72813ffa4ec21ddf4883c4000ec69"],["/tags/FPGA/index.html","5afc7a47ce2ee4e931efcce1f4bf1761"],["/tags/HDFS/index.html","197b261aeb2c8216a8b128595d939e7a"],["/tags/Java/index.html","f27da97b5f15472ba1fab738ee2704f1"],["/tags/JobShop/index.html","3ebc30d350a7b54c691cf651c6733ec7"],["/tags/K-Means/index.html","90ab147935ca80d36ebc5fe99a532856"],["/tags/Kafka/index.html","24342b1552472981a6617833781007c3"],["/tags/LL1/index.html","14ede8d530a1432925658a1217090d4a"],["/tags/LR/index.html","0b1597e4c07cfebf5ba22ffa75f520d8"],["/tags/Linux/index.html","674493ff087d7881a5d24cb6e5923589"],["/tags/MIPS/index.html","f4a0e352e3448d01a1c11aacac2aa02f"],["/tags/MOOC/index.html","3782ff216ace0ea3175f18d6cdc212ab"],["/tags/MPLS/index.html","791f78abed4d8d327462c9e38e361479"],["/tags/MapReduce/index.html","7b96091761a17ec1286137da88c8074b"],["/tags/Matplotlib/index.html","e8d4e37e9fea2648068164fa5cbd5c27"],["/tags/MiniSYS/index.html","00b5ef1ba8fa921b85db4aa2a41d57ff"],["/tags/Python/index.html","47bdd1fcdd34d65f720c5aea8502ae7d"],["/tags/QT/index.html","300c90ff8bc42a9fb821efd36eb335f6"],["/tags/RNN/index.html","ef03f6e4da233e6fb85c22924ba920ff"],["/tags/SIP/index.html","f708dcab1f6cd2f90ab4ce210e898750"],["/tags/Scala/index.html","02977a8325305b0e52376ba40637fc04"],["/tags/Shell/index.html","8af364d1d765504afa8c2c81156e8676"],["/tags/Spark/index.html","703534661a2a5769330dff74ee9ce973"],["/tags/Streaming/index.html","59b89e7d0320fd0d7dbf0e7f8ef82624"],["/tags/Struct/index.html","0cf1249a239a35f18b32d0a99f214d68"],["/tags/Verilog/index.html","b0f9fa3effb73ce54ebddb0a9e9c4e1e"],["/tags/first/index.html","9349308408a05f392636820854772163"],["/tags/iPython/index.html","0c3be3bd56cfaca1df7d328eaa26c5fd"],["/tags/index.html","1dd891ef4416b8c509ef00b38e1f2610"],["/tags/ls/index.html","47c8088a2059ef4054b2a7819b797b14"],["/tags/习题/index.html","9011498e90ffd707e2673a104e02cb47"],["/tags/交换原理/index.html","e813824ce6566204218c814a593bbfd1"],["/tags/人工智能/index.html","b8fafb9355a9d755db0c0576c48c6d69"],["/tags/信号量/index.html","9437aa763fb861cba414fcb6ce12f222"],["/tags/内存管理/index.html","0a0fa094d53a1b4f27e4642c0cb34d55"],["/tags/决策树/index.html","cca4f2c7b227c146e9855e6bc6c85dc0"],["/tags/分治/index.html","78ff20803e25a709a74270652cf24427"],["/tags/分类/index.html","73e743f2f2dc75ae3a035ecd4a5d4f30"],["/tags/动态规划/index.html","bd45de7e3f027f412af890a9121b7f94"],["/tags/华为云/index.html","8ca81caaff0924df4c36a9a7bc65a8c8"],["/tags/单词计数/index.html","154c86c665ae9d43835cc2b172018223"],["/tags/可视化/index.html","f4e0a550dc4ffec3ae299ec33cb3ac7d"],["/tags/同步互斥/index.html","734f95d773f84aa651a5988b7a3a6f0c"],["/tags/大数据/index.html","d2b0fd9c42750fe9eba8fb8556be5ff1"],["/tags/学堂在线/index.html","3d1234454b4fcd1c2a8e338d9c0ad2bd"],["/tags/实战/index.html","50227f52e924102dfc9d2ee453b74438"],["/tags/实验/index.html","fa3f8357835329aebd6a7b581749ae73"],["/tags/实验/page/2/index.html","970056bb2a6b14c373a6c909806f4e2a"],["/tags/小游戏/index.html","9a5382de9366b4825fffd7933e298f18"],["/tags/工程/index.html","c2500edf99375c9e8b92436470214510"],["/tags/工程/page/2/index.html","562e279a2761b20162df4a57967c3c58"],["/tags/手写识别/index.html","1cf95adf43d3c69e5612ce58008e5730"],["/tags/拓展/index.html","e21d57dd080f7ed75f086a6f15ea97df"],["/tags/操作系统/index.html","3feca465b096cab71655ce2ae8c072e8"],["/tags/数据处理/index.html","b25446180e3f8e457d1c88c461f8417f"],["/tags/日志分析/index.html","85ef6506c4b22f1a1979e027f0cbaab7"],["/tags/易错点/index.html","547c360b9f3b8fede92481c91833c788"],["/tags/机器学习/index.html","e24dc97b2a7ff7e691b6f9cb30589f63"],["/tags/条件熵/index.html","4d55acf5332096d2de52b5596877888f"],["/tags/正则表达式/index.html","48ddf70c5e8380e395fd630250624612"],["/tags/汇编/index.html","73f4a176cb7319ad58776ebdcbad0d32"],["/tags/流计算/index.html","f761b9887c92f2417ac0a97c59a6e078"],["/tags/爬虫/index.html","e21c107707a7da1292681ad9f8d052fd"],["/tags/现代交换原理/index.html","fe8f221ff97ac50b6eb8afa9f2c373b9"],["/tags/生产者消费者/index.html","bbde11c9834620692e15eec11762a849"],["/tags/知识/index.html","d2c6858e7b6c22cb79adbc54070d4444"],["/tags/算法设计/index.html","11349ed81882bc0608226cb461dc9219"],["/tags/线程/index.html","fcd548a38e99be270581a207160b0feb"],["/tags/编译原理/index.html","91c9166fdea23937cf7f7c408ef495d2"],["/tags/网课/index.html","5cab4bf3b5b8deab8da6ec7fa8dab24a"],["/tags/聚类/index.html","f6924bfc0c869550e44dcd6179588408"],["/tags/脚本/index.html","f0fd53d82ac5e8a80b0fe737ac0cca08"],["/tags/计算机系统结构/index.html","a72a385030019b66d5642321f145badc"],["/tags/计算机组成原理/index.html","1c2aaec27894e6e66ea89c6e484ce490"],["/tags/计算机网络/index.html","28629d6ae897e87bbfe762f292d49d79"],["/tags/词法分析/index.html","4fd879c5fc50c6367d75daa686917241"],["/tags/语法分析/index.html","1ce411884f193539e4aa90eb05035693"],["/tags/读者写者/index.html","23dbae677739bfa5d4cfc01b830efbfa"],["/tags/课程/index.html","f2187fd75b00bf0f8994eff347fc6e6e"],["/tags/起名字/index.html","e5f4a7b1e002915ce34ff36a86e6a7bf"],["/tags/软件工程/index.html","dcdbcf7242f1c87e6094db268db48748"],["/tags/进程/index.html","784e542e42cbb44cba24c4174f59e084"],["/tags/通信/index.html","d5777ab7b0c7e3dbc6d9409a2faa50b4"],["/tags/遍历目录/index.html","7ad5463564a8372965e8408f99857a6d"],["/tags/难点/index.html","dec3787e1d83771f51870e842bd2804d"],["/tags/项目/index.html","7f9eceec795241f2840e9611395ac94d"]];
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
