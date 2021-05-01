/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","f09256fe4e7c5f9bf413d57272c1d4be"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","86d37aa8431c6d17dd16c6ba8fd234fb"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","fe25e46ed2c5878caf46590cde03bbfd"],["/2020/03/26/计算机系统结构-实验1和2-遇到的问题/index.html","1c28619f45526b1fd325ab21496fda65"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","ae881ce545717ec199861341e423b03f"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","9dde932a342a1558569701147fe8ef1d"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","6f515ba30a78f75c05c3aff41300918c"],["/2020/04/18/机器学习-知识拓展-条件熵/index.html","263ca3b41bb88537c078fdb983105092"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","25a2b5b01535f3a45f3a383af65d5358"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","0f0f8fc6721221529a10c2d0bc3b885f"],["/2020/04/26/机器学习-实验-决策树/index.html","66b03112c6c8f61d0c0405e45ac357a3"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","155e9c0d62a3711fa93dd4d1d90b2cc8"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","36a178d6cc9a506d9dd87b3264e93d31"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","b23488ac183e1a04ffb164578fce77fb"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","4963908bbe37ff8bfe7232874e08354f"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","2276fdb4f815fae2b5aa5aaf94183a63"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","f2eca33a2d096b60b6b9e4468992d1af"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","9ca0bd843d26466ecd52c53f6926c1e4"],["/2020/06/11/机器学习-实验-DNN-手写识别/index.html","8e8673271ccba63c6059076b065dc8fa"],["/2020/06/18/大数据-习题/index.html","8e71aa3339f51c3d38ed74b9a472a745"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","fe550267248f69f56b974a793be00068"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","cfc061c2be840ff587506ea7d65e4186"],["/2020/06/24/Linux-拓展学习/index.html","aa1ab5fc8e07a9578e4229de3e2cce25"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","35cf0e6760606e3f51eb2abb0637eb3a"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","81f412152ac0ad2ce08d2289974507bf"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","b87171aeabdc393f174b1668bfe23bce"],["/2020/07/15/C和C++的struct使用总结/index.html","fa27f2373f9ce094578ac09976403198"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","2a28b2d1eb55b5bf282201cb99d6b396"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","6a7b6e588963354b79cdb4f86b322218"],["/2020/08/10/机器学习-实验-花卉识别/index.html","6411ab4b034904d04bfefd576d81db6c"],["/2020/08/15/Python-项目集锦/index.html","58ae4860d39695e97ef24d9b7ec78e50"],["/2020/09/01/编译原理-词法分析/index.html","8c3fb7c5f2db93aaa5c244e7e4f5b2c4"],["/2020/09/02/编译原理-语法分析-LL1/index.html","080e03898a65d656293663e51a579481"],["/2020/09/02/编译原理-语法分析-LR/index.html","45ef17cbd2ffc3cffff720f52f7f51cf"],["/2020/09/03/操作系统-内存管理/index.html","26bb0184e5ba6e39e9d195f85f873561"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","8e0d22349cb8c5e283ea117b8074ab24"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","ba89e78830f0ccb925bca8205bb9ad55"],["/2020/09/04/CSAPP-实验集锦/index.html","222f95de4e3d57f2130abaeed430bd51"],["/2020/09/10/计算机网络-实验集锦/index.html","174396ce3ef741c01e9fbe5ef38244e3"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","63b4a22ff64a3520b2e1f7cd5702e5da"],["/2020/09/30/C++工程项目-JobShop/index.html","1ef1ff68a412835e22deaa6c8ebf4aac"],["/2020/10/09/交换原理-实验1-时间表调度实验/index.html","989f192e413abe9be9764eed99a52dc4"],["/2020/10/09/交换原理-实验2-摘挂机检测实验/index.html","22f97b79c55daaf4ebd6f2e0fc022816"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","ef11f316f2c80dd3f88b6251532a5a49"],["/2020/10/09/交换原理-实验4-拨打SIP电话/index.html","5500ba01d6213ef98cda21cfd52edb1c"],["/2021/01/04/Android-项目集锦/index.html","76f6f397ff2217789a3194f541002d76"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","287dc842955e9ea01e824aceeabeccab"],["/2021/01/04/C++工程项目-travel/index.html","3970f0ad99216d8fd272d752a835e7be"],["/2021/01/04/算法设计-分治-最接近点对/index.html","b8539b79abd7d8647d0f7d63e5f1334b"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","1245af8845019a3641c5e6a05a47372d"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","2eee85c718cecb30c1548e78284eefe3"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","3a81e3b449ee51e160ad2b561741532f"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","fbabf25113781d87611db4f1bf63db00"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","3d1f235e275b579214b39d6869587181"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","4a8bc88704b56aba79dc59b4228472a5"],["/404.html","457be0cb6a024753e88a487c75424761"],["/about/index.html","d2d932148d5da32b78d744a67285153b"],["/archives/2020/02/index.html","d21c66a6f29176632aee42749a40c8e8"],["/archives/2020/03/index.html","2b7f69e1c890899abe6584192d1bbeb6"],["/archives/2020/04/index.html","c26a04b3d693a3c40740c6cdf79dc38d"],["/archives/2020/05/index.html","3373dedc8a3da819eec3529b1a89ce6c"],["/archives/2020/06/index.html","cc379a269f2b04a68190be691311296a"],["/archives/2020/07/index.html","1e845a918c18f65ad67416830565487c"],["/archives/2020/08/index.html","4b5d03edd1a4fa66d9b2762eda7835a5"],["/archives/2020/09/index.html","25dd4e537e0d739bcd03f9856fa64426"],["/archives/2020/10/index.html","5de3c2ee23e0b1c50e1897b1a76525d8"],["/archives/2020/index.html","c29c040d164cb5630b250d3ca5e3f6d8"],["/archives/2020/page/2/index.html","652415d3ee7263b436b2c5fc64a2bd90"],["/archives/2020/page/3/index.html","d16ffa492ecfe5a06b20140b5d56191b"],["/archives/2020/page/4/index.html","071eff765e3e3787639e61ad04bd9eb7"],["/archives/2020/page/5/index.html","74377484025cbd7f48731b94dac2cb8e"],["/archives/2021/01/index.html","deb9ba2c617d4c4635a359a56212c553"],["/archives/2021/index.html","a8473dbc38a2e1df22e7d4320d4fd291"],["/archives/index.html","6b3cc8773a67fe53e5c112f0f2960b34"],["/archives/page/2/index.html","6b3cc8773a67fe53e5c112f0f2960b34"],["/archives/page/3/index.html","6b3cc8773a67fe53e5c112f0f2960b34"],["/archives/page/4/index.html","6b3cc8773a67fe53e5c112f0f2960b34"],["/archives/page/5/index.html","6b3cc8773a67fe53e5c112f0f2960b34"],["/archives/page/6/index.html","6b3cc8773a67fe53e5c112f0f2960b34"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/bb/index.html","9dbfc1406a686de8575c5e9f713deeb1"],["/categories/C-C/index.html","055f3e748f09b20731cb29643b54d525"],["/categories/C-C/page/2/index.html","a877601b3a2e56e628e01684048077d7"],["/categories/C-C/拓展学习/index.html","5b13de524be455d0795bcb31974a96d3"],["/categories/C-C/操作系统/index.html","6496d87f15ce0aa897b2e593ceab8b86"],["/categories/C-C/算法设计/index.html","bf850aae8d9069fd0510126943afffc4"],["/categories/C-C/编译原理/index.html","f9c67364111981efb6f53e21cb18f2b6"],["/categories/C-C/软件工程/index.html","e716c54c7f27c15bab0be851e66ebf6b"],["/categories/C-C/项目/index.html","17d1dc510adadb677b8ed9c381332f70"],["/categories/Java/Android项目/index.html","a800fe01c36d145ae594f63149bac912"],["/categories/Java/index.html","c2bc50f95b0328dd2db9e6e18274eee9"],["/categories/Linux/index.html","70e8693724e866785dc5a8d328816171"],["/categories/Linux/上机实战/index.html","e84b82df20478c742344a4a8e3fe2b72"],["/categories/Linux/习题/index.html","7ac9f3dcc3be3da6dbff394562751b60"],["/categories/Linux/拓展学习/index.html","53a13f336579c21549acc5abe7899de9"],["/categories/Python/index.html","2b7c2c35b8a33d16ddc7051048376931"],["/categories/Python/爬虫/index.html","d8e56c3677bc2423268519e967f6f758"],["/categories/index.html","84920fd7869b1fc321ae1637aa8417cd"],["/categories/交换原理/index.html","3dfda9ee8dafb2f823053f8d19d78eff"],["/categories/交换原理/实验/index.html","ec6b03363069ddd07aa80e55d4da845b"],["/categories/其他/index.html","1b7dccae7806a0c78215e13e56bf386a"],["/categories/大数据/index.html","9df0f4e73ff98658a6a940beeee1e815"],["/categories/大数据/习题/index.html","6dcd52a978af37e0a7f97a1c258fda23"],["/categories/大数据/实战/index.html","b9b17833786e59aba2ecfe96759e3fb6"],["/categories/机器学习/index.html","058c84184a515b5cf5d11410086d6fae"],["/categories/机器学习/实验/index.html","0a1c9d6369a12c1a4feed24db830d382"],["/categories/机器学习/知识拓展/index.html","c9fc1dd2424c7b3dfd500110a99a2266"],["/categories/现代交换原理/index.html","feb410f966527457669a13a2c107883c"],["/categories/现代交换原理/习题/index.html","d07150367d40d179dbae541e306cbe8e"],["/categories/计算机系统结构/index.html","8f87a2f7b4a9258c274fd5792b58f10e"],["/categories/计算机系统结构/实验/index.html","5d567c0df6d37992f298d8acfced0b9d"],["/categories/计算机组成原理/index.html","e1665f4b205927c90a81701ebebe92ad"],["/categories/计算机组成原理/实验/index.html","96a565bb0cd3c0593d9100fe7adcf4a4"],["/categories/计算机网络/index.html","7e92e799d97bfa26f5c583d45b3b6075"],["/categories/计算机网络/实验/index.html","8dac8a82b342a6bf8af0f5c16416dcb1"],["/categories/集锦/Android/index.html","b90ce0933ab20616d79c8f59fb3b655a"],["/categories/集锦/CSAPP/index.html","3c216ffcd2576036c60feb7cca064152"],["/categories/集锦/Python/index.html","67381eef4420943da5e1b3b86c5be35a"],["/categories/集锦/index.html","7c8d3e059976787e0105ca2c3cd309ed"],["/css/first.css","b6d087a1c859f2a9e183897e37ac7fd2"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/message.css","b0ce3ca232f809c8d7a85c79bf1f7ff8"],["/css/style.css","7c02d5a26902ac4da5d2d0131ed08853"],["/friends/index.html","a47d72c7024749de4d32e9b793cfd306"],["/gallery/index.html","63f4bc7639ebb10460b077618443184f"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","717142fb68c7d682f9daa0f7899c45aa"],["/js/aplayer.js","f10ee7aff4ce278045da925ac6510d29"],["/js/app.js","2fb5381b84811b7d10a6c591d3896727"],["/js/jquery.parallax.min.js","38cf4791e24aeaa8101bd2c816400718"],["/js/message.js","38da736cdf513c9a15a0a2a16a34eeae"],["/js/plugins/contributors.js","23ba3efa08d9fb1aae753ceaa6df2711"],["/js/plugins/friends.js","239cf9c648af390f866ed00cead3e23d"],["/js/plugins/sites.js","15bb31fc27abc888b17cc5d822808604"],["/js/rightMenu.js","19b2a577c30a04732f02b86bda62e0b9"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","60b8336d12570f94ded9fbaf95caee74"],["/page/2/index.html","9941f3e1f1714a71e276f2323a4f02c3"],["/page/3/index.html","9f6aa0f7349aa0f98fdabfc3cd942dcf"],["/page/4/index.html","bd2df08abcebee6679fce6f96b8397d2"],["/page/5/index.html","b3fb0f8744181a95ae9570043ce8d3c4"],["/page/6/index.html","c72f1eb26529e0ceff7d9fa89264a6ce"],["/shuoshuo/index.html","e5c22a160aa5b09423ccbdf0b8e117d4"],["/sw-register.js","5d1502b156126a65ab596f6afbf605dc"],["/tags/AI/index.html","7e7b81b77c9649ceea101ca29486d1ae"],["/tags/Android/index.html","b2c54916b5a153a91bf5b97b96460558"],["/tags/C/index.html","9abeb4c116fcd7154add97018c2981d0"],["/tags/C/page/2/index.html","000695a9c7cf85fdd1f66c568d497222"],["/tags/C99/index.html","02286a350f710b775cbc98835824a1a7"],["/tags/CSAPP/index.html","79cd17acf5099d227c40a0f7e85e2e96"],["/tags/DNN/index.html","955dcc744ea421a65832984bd3a8d482"],["/tags/DNS/index.html","df0f8e634ebd5b0dbed47825ba7d3fbe"],["/tags/FPGA/index.html","3a9d13951c6f5a36ce15b1d677dd2768"],["/tags/HDFS/index.html","65a4fdfa9bb7ef6b85f2a696596963a0"],["/tags/Java/index.html","63017886febb65e48c2f0d2ca7cbcf06"],["/tags/JobShop/index.html","69d7d9692527ea0cd98dbea615c4a80e"],["/tags/K-Means/index.html","60fc209a87ee3604b69f9e7c84dd5598"],["/tags/Kafka/index.html","f05eabb120bbfd73267fe19dc0c576b4"],["/tags/LL1/index.html","7fdbc7c00f8e9a33065dc957179667ea"],["/tags/LR/index.html","c3be442626bb27e2af43d94350815a20"],["/tags/Linux/index.html","40b8de30e5a19ecc0a4fa6bb042e3850"],["/tags/MIPS/index.html","0acdd621f2ca6293696b7d458aa36852"],["/tags/MOOC/index.html","861d955994a6bc781646b8864428e1a8"],["/tags/MPLS/index.html","ad50aa91d7d9ba3c81d6a2ba7a3a7706"],["/tags/MapReduce/index.html","f8f60247aa65f91ee346a5841e7b5778"],["/tags/Matplotlib/index.html","b83a3736b9595c856ad9e26e5694f851"],["/tags/MiniSYS/index.html","1398276b089c94b6f502b219f8614b9b"],["/tags/Python/index.html","2ba0e9bf4caa0d35ca530e61ad727d8e"],["/tags/QT/index.html","46d0f49858ffd43a2fbe3ad882dfdf7e"],["/tags/RNN/index.html","205daf20a25e8cb1496f0c814983f64a"],["/tags/SIP/index.html","e7787116fc9af3e491dd009957cf17e0"],["/tags/Scala/index.html","e3ae617239274d9642bdef846107703d"],["/tags/Shell/index.html","dfd44380338b40b53490c192ccdd92e8"],["/tags/Spark/index.html","4cab7ef4acb0fa641076e5c57364aff3"],["/tags/Streaming/index.html","f62b3b8f0bcf814df103dffc20ef83f1"],["/tags/Struct/index.html","7775145fdd9b013704760f98b820e4f7"],["/tags/Verilog/index.html","727916baa15d258c4cfe1ec5c21a5972"],["/tags/first/index.html","2358781c0aa36a93413f1bdba6ff7585"],["/tags/iPython/index.html","e54338fbb5b55210b82171d0688683dd"],["/tags/index.html","f6390d9c1ee4aa6b9898504e6d55b870"],["/tags/ls/index.html","55c0d0d78a7d384037b30a255170e756"],["/tags/习题/index.html","b218cd039b5cba615b9dca2d10562d4b"],["/tags/交换原理/index.html","a8eefacfea493cdd245f79177b1fbb27"],["/tags/人工智能/index.html","62442e46b9660bbf19dd2b3a887e3334"],["/tags/信号量/index.html","7ae34b0bd5d35810f6aad62010896b3e"],["/tags/内存管理/index.html","496ac5bc9d818f36c1cb0d774e7993a0"],["/tags/决策树/index.html","e9368ff77694d22e05339648219dda1c"],["/tags/分治/index.html","3bbb549dcb1d82013914126df30a65c7"],["/tags/分类/index.html","afcbf3107e7fedb0a332fd91913f0238"],["/tags/动态规划/index.html","7a57e1443e98d018a87003d4410b0ef2"],["/tags/华为云/index.html","e264865b870aa2282c23442f1967c07f"],["/tags/单词计数/index.html","e872d07195df088c58ee1197d18639c7"],["/tags/可视化/index.html","eeb1877ec2cccdf90590ac53407afad4"],["/tags/同步互斥/index.html","1a7fe048445ee500aa03956379926f5f"],["/tags/大数据/index.html","53a5d0b1dfcdad84b7b644bd80a4cb26"],["/tags/学堂在线/index.html","26b335f02d3a150784dbb25a588f7504"],["/tags/实战/index.html","b88b61b2c64da5ead0eae09752e6e511"],["/tags/实验/index.html","1a4d6599498ee6827d5f5a16f8f5db86"],["/tags/实验/page/2/index.html","340279bf55419468beb0e8b8feebde22"],["/tags/小游戏/index.html","28e7049ffbd165d091f419de3e9bbeb3"],["/tags/工程/index.html","c979eee2401efcf61ca7fb406745b378"],["/tags/工程/page/2/index.html","518a901ce06e1eab4bbf21a79c739c0d"],["/tags/手写识别/index.html","0bd5b7b3bbe768e7c7eca7cc07e9ba9a"],["/tags/拓展/index.html","c39bca7d02776b79842bd97347b3a9c5"],["/tags/操作系统/index.html","76e339c5925b370e56e6954b709db1ee"],["/tags/数据处理/index.html","bfc51ec3bbf3a2668ea60739484145c5"],["/tags/日志分析/index.html","74e2391ec78cc7108feb96c046bc4c08"],["/tags/易错点/index.html","4179373632d725a79dd1cd88757c988e"],["/tags/机器学习/index.html","925f7cb7b518289757b589b2f069a82f"],["/tags/条件熵/index.html","1c1c20dd6a2628eaa4b6e4e735278a2f"],["/tags/正则表达式/index.html","2fc664ec41cadb30891f99578ef30c11"],["/tags/汇编/index.html","7ed006385a63924ab4f4845cb4314c1e"],["/tags/流计算/index.html","f959cd747beabffe4d5935258f8fba81"],["/tags/爬虫/index.html","aa209c693ac1a58c22942dd97f111433"],["/tags/现代交换原理/index.html","a2becf1e7afabdbe097f6273a62271c0"],["/tags/生产者消费者/index.html","5890ebb207beb359c57f9d375c0ed336"],["/tags/知识/index.html","ce8a5528cb2eb81af579fc72e36e1436"],["/tags/算法设计/index.html","d8661a6331d2c06fd658fe9256c54d13"],["/tags/线程/index.html","c258bd375ab1d4f3cebb1ca241266dc4"],["/tags/编译原理/index.html","6dd5d8a7b7155d00bcb1300943151201"],["/tags/网课/index.html","22f74c85da55c29601d0af33ba9ed10b"],["/tags/聚类/index.html","2be4375936a799eea468a9b9f73d73a7"],["/tags/脚本/index.html","def9392ee9e55ba4ecec511e074421d7"],["/tags/计算机系统结构/index.html","b2ecc54bf80d5553db21cbd6240965ca"],["/tags/计算机组成原理/index.html","0542bfcc0129ee461805fd369a622b7d"],["/tags/计算机网络/index.html","0997d4de7c9675cd52c8277ae8d1af16"],["/tags/词法分析/index.html","a7003d4925a573773496533c595ce148"],["/tags/语法分析/index.html","04d0c93e1b7a1f502326a35e8e25a048"],["/tags/读者写者/index.html","b39abd99d8c0f39ee321ea6fcf02183e"],["/tags/课程/index.html","a67552973ec7667003918b3fc9511d1a"],["/tags/起名字/index.html","5b6bc066a4538f6ce18ef261beeca02e"],["/tags/软件工程/index.html","dbc5081d0d948c2b4f01a6ff283fd947"],["/tags/进程/index.html","68b9ce6bc9a8d642112c18919abe3a57"],["/tags/通信/index.html","1b65928070688c27c202c9b34ace4c86"],["/tags/遍历目录/index.html","2d928588660d6bef4ee0b750f3017849"],["/tags/难点/index.html","1a54dd7951abbd364b2f17fadaf57265"],["/tags/项目/index.html","2047ffa14984b17f0d77140f4c87e0f9"]];
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
