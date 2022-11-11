/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","b3f42b949344d598d3f09376e409e986"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","6aabe554aacb36b4fb3b55ce1efbfd8a"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","ad90c6ace78d1b399064def691260f3a"],["/2020/03/26/计算机系统结构-实验1&2/index.html","22632448cd2bd62c11a0253d4bc9cc99"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","fa3b1865e3b4e33c52b8c9b565e1c3d1"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","4b3ec8861472964e5ca10e9fe0e3cd41"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","300edf083175c157093ffb45b6d83420"],["/2020/04/18/机器学习-条件熵/index.html","49625788d990be1420d6acad97627497"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","8b9033f0082d3d9223f780f743813deb"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","d0a34e7e027ce11ae85e4159c6c0a837"],["/2020/04/26/机器学习-实验-决策树/index.html","8f2d901e114f68f3481ae5ccdc69af25"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","da03423dcba2931a3ec4e45f1fb47a2a"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","6d486761b12d5b5e711061d12641260a"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","94851680cdd8f6c160bce5095c5b2f5a"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","fc75dfeff9a6170a164e62c2c9841d97"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","8c0543d9cee5fda4bd088c1e8666caab"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","b95e2bcb90b224fd5f77b5293ee40a33"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","879574b053da49b943cd547cb68a61aa"],["/2020/06/11/机器学习-DNN-手写识别/index.html","f1031dfde77c0c3603a3c4f7b2185370"],["/2020/06/18/大数据-习题/index.html","2ecd86785ebb9fc00cb1e720fda238fa"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","a1da8b8a343cc1a0e940843fe431d6af"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","6ebcd82d0f6ac58b66a115048d731327"],["/2020/06/24/Linux-拓展学习/index.html","7cfe8f442596ad580996a53891c51f75"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","5e9a4f19048d402375426a2330b9889b"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","64583f1ef2f64715e925860ad4a82df6"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","b8cde94d6d78eb6911e3402c9cf5f993"],["/2020/07/15/C和C++的struct使用总结/index.html","52c6f8aee7249c426bdfd861d3e1e8e3"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","233879eab30cdeea176d93c96e91231f"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","84a24c4279a787eca1986b1aa8eb58a9"],["/2020/08/10/机器学习-实验-花卉识别/index.html","c65ab8bf8698bb120eebc2c9c8e618d2"],["/2020/08/15/Python-项目集锦/index.html","efd139d600976915cb3dcc91769dd3f3"],["/2020/09/01/编译原理-词法分析/index.html","b63b7662d55b9a8903176681b6c63a2f"],["/2020/09/02/编译原理-语法分析-LL1/index.html","afdddc70b3e2facc52730951ef85e909"],["/2020/09/02/编译原理-语法分析-LR/index.html","5c7fb9f6289e7f24d141246034db3707"],["/2020/09/03/操作系统-内存管理/index.html","82cb865892e1d4ead1441595feba1102"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","8992f0e22eca93f8698c54c3dcc9d4fb"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","10eecc6cd4fa9edb19f24413d5644111"],["/2020/09/04/CSAPP-实验集锦/index.html","d3d53e6e93a83b56dfc467499cf3be6f"],["/2020/09/10/计算机网络-实验集锦/index.html","7c10e0f3caa66a8af3a4d507c3d70b2d"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","fad1b9da1e601eff4b62833403946c51"],["/2020/09/30/C++工程项目-JobShop/index.html","dbbb22cf326842c07ad974abfb45c178"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","9eae0191f9b1a322a609b27284894260"],["/2020/10/09/现代交换原理-实验1-时间表调度实验/index.html","11fdd08ece30c8f992dd4d58e0ec4bb4"],["/2020/10/09/现代交换原理-实验2-摘挂机检测实验/index.html","55e4a5dd1484ba7738099c7c02fe6a82"],["/2020/10/09/现代交换原理-实验4-拨打SIP电话/index.html","f108beba6957d743366a8bf569f493a9"],["/2021/01/04/Android-项目集锦/index.html","011feeb24a17b17fe2001deb62d7a0e7"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","f8c66da053d15df57018d199356dd208"],["/2021/01/04/C++工程项目-travel/index.html","a412aec66e1593ecafc0fddf5e0cd566"],["/2021/01/04/算法设计-分治-最接近点对/index.html","fda1abcf658553c62eb1cc189994c758"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","3096cb8f23bdd2b01bb9172cd4f07200"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","384d304ced1a3378f6087d391c9c1c40"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","7d22e21d33549bde03aec6e2e4797098"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","8e79b2f652488cc8df00e5473832f62c"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","83c4426937c1b4544c4004874b3c8083"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","f59b75ee208624bcfb587ead59d2529c"],["/404.html","2394b59b860bfc1b2a641e2bc2300ffb"],["/about/index.html","3b9f328f7720331e334d600818ca6a43"],["/archives/2020/02/index.html","51b5d8f17fa8cf46551ae92778e44c05"],["/archives/2020/03/index.html","71227ab9c16ce25b5320dcdc43dca9f6"],["/archives/2020/04/index.html","6acc0cc7486cb8626f57b9261696516f"],["/archives/2020/05/index.html","8c639d48c3a97556c03092777463857e"],["/archives/2020/06/index.html","9042c7192ef848b07d22b3bad5411867"],["/archives/2020/07/index.html","549f4d8b540b0b7e52e069dbb25a6d1e"],["/archives/2020/08/index.html","cb9290b937393fce4a64077241aa01d1"],["/archives/2020/09/index.html","0102d8fc680707554d44fcf6a206268f"],["/archives/2020/10/index.html","cc108711e0ea97678e604b2690c69cc3"],["/archives/2020/index.html","1198be1425a6fdddce4994723b6eb66a"],["/archives/2020/page/2/index.html","b6f627661b55186952cb9c9350771942"],["/archives/2020/page/3/index.html","f33810ae70eabafc05437af3815b7799"],["/archives/2020/page/4/index.html","dd91f9b558080549b5df285937e9adee"],["/archives/2020/page/5/index.html","156b17fbf204411fc1e1e8424ed22f3d"],["/archives/2021/01/index.html","7cc8720369a1e46d3ea6f51204fe76ed"],["/archives/2021/index.html","ec1ab478c2f235d99c7d1fd8148080f9"],["/archives/index.html","14acbda5bd1e2285a7055dba4d0c3b10"],["/archives/page/2/index.html","9662bfaddab33849187b383b54baab5e"],["/archives/page/3/index.html","cdf9e2191ee69211d9817e3904345b05"],["/archives/page/4/index.html","201d7760094c1dc2b2916ad948dc613e"],["/archives/page/5/index.html","f1434eb5819cb68715df3d04bc89eac3"],["/archives/page/6/index.html","c4a412e053a519ef8c272b7b7931b64f"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/bb/index.html","4eedbbc42e18341f6c5905cf421fd026"],["/categories/C-C/index.html","f692cd3b3ea3524603091ae939990f7c"],["/categories/C-C/page/2/index.html","04ba92cb6c17c36c3fbe656fd4005554"],["/categories/C-C/拓展学习/index.html","b9682de3292e559ac93313a548f4971e"],["/categories/C-C/操作系统/index.html","5fa325b82b9b88d6cb31431bd875f2c6"],["/categories/C-C/算法设计/index.html","d1cf73d0c6b36f84f9475dee04ba5f3b"],["/categories/C-C/编译原理/index.html","cdb451498b353cc0a7e5ab0820099175"],["/categories/C-C/软件工程/index.html","bd969c8d5891449f0d44784ab84a0da4"],["/categories/C-C/项目/index.html","ffa1371120fc646a7c4e7233fddae957"],["/categories/Java/Android项目/index.html","8a8103b181ea92b9fff8bb7e1d317f57"],["/categories/Java/index.html","f9b3403bf3cb8a578329c0cdd9955730"],["/categories/Linux/index.html","5bc039a53a24253755695f0bbb79e935"],["/categories/Linux/上机实战/index.html","ff6b0edbba60ba90a712b62ed4556ea0"],["/categories/Linux/习题/index.html","148235a7b689a5d521275aaa1ccbb1c8"],["/categories/Linux/拓展学习/index.html","b98fc9920540c1b0db5380916d14a9ba"],["/categories/Python/index.html","4cca29ea6a98a156965da57f0022c25e"],["/categories/Python/爬虫/index.html","2bdcebc3bd00c38802b52d333194820e"],["/categories/index.html","eb65c73d68d2b05e4166cbe685376b28"],["/categories/其他/index.html","db7f75bb19029795dec8d423e460610b"],["/categories/大数据/index.html","e694dea2c816a7f297097984503797e8"],["/categories/大数据/习题/index.html","ec5d86daa7b29aae87a3513fa69cac69"],["/categories/大数据/实战/index.html","a9612a37b71421f3197feb1f21e44034"],["/categories/机器学习/index.html","ed446a73d8388468804134b20bea4b2a"],["/categories/机器学习/实验/index.html","a8d4ab5f6052ee4392434696a79b0e53"],["/categories/现代交换原理/index.html","6431c9b9965135ced4002bdc4403bdc0"],["/categories/现代交换原理/习题/index.html","0fbea266f2f922e5b871e87cffa681ab"],["/categories/现代交换原理/实验/index.html","e2764d25ce912960fd43a996fdf25ae9"],["/categories/计算机系统结构/index.html","3ff004e4334931d4f57f93fce03fcdec"],["/categories/计算机系统结构/实验/index.html","e54fc44f7346fc7e6e760f632378332c"],["/categories/计算机组成原理/index.html","53aff3ccfc5ca8387542e5d7d8f0cf2a"],["/categories/计算机组成原理/实验/index.html","223de7cd1d5e44fc1e683032571b69c6"],["/categories/计算机网络/index.html","e4b366a01f628adce6301f70db4ae494"],["/categories/计算机网络/实验/index.html","17fc3e88799fc13d21020ce57094ead4"],["/categories/集锦/Android/index.html","22ce3930c3a3b393a17e0dd3a60d95f3"],["/categories/集锦/CSAPP/index.html","ad0ff09c75dae496196025bfa00b737e"],["/categories/集锦/Python/index.html","10311b87b36b6fc528122bbb945e8c86"],["/categories/集锦/index.html","3670a71405019b54ce0c1310da6eddd0"],["/color/index.html","3f627143356419f7f54e1443b3536f0d"],["/css/Readme.html","4bc3fb2cafc0c4c35b4e56559c87d909"],["/css/first.css","fac9d8c41ed1687a81bf2ac7dcd1ba30"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/style.css","0e35d2161024d9ad0bc6f16ba0eba6aa"],["/friends/index.html","7bbb596f784bc29a8b8a0ff28432e678"],["/gallery/index.html","cac0a9f9094373909cca2398b08a7aa4"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/periodic-table/index.html","4c31220b3c8c1d35b1128df43b2c9dc3"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","7d365cb688d69cd3cb94b7e51699e292"],["/js/app.js","aa80cf51d3f304b2c56cc43cd4d75fe6"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenus.js","d280cefa875e65c8e078cd45badf4dd1"],["/js/plugins/tags/contributors.js","aec8045335d2753a39a48c34fb019662"],["/js/plugins/tags/friends.js","f372da57b83083859f60ce19b736a695"],["/js/plugins/tags/sites.js","76bf19b80414fbce774acddabf6b1d3e"],["/js/search/algolia.js","6edbbd91cb2b7e175c1e912798f3552e"],["/js/search/hexo.js","0ca9f8dadce94caef20d50d9e2e33ec8"],["/js/search/meilisearch.js","caba7692a9dba1b0a4af8ae1d268e589"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/mylist/index.html","dbcb453d1747a02baab9e7627e6e64ec"],["/page/2/index.html","ebc8d72795af81705b8e52b1c21f9020"],["/page/3/index.html","14239c80839e544eebb10cdd3dd26b13"],["/page/4/index.html","341f70bd2a4558c06032ecbb334b59e8"],["/page/5/index.html","2714598aa4e8fa3424222bdf4ef3d923"],["/page/6/index.html","ef6673377479a1d9084552416b559b48"],["/shuoshuo/index.html","a20028b72d80838a9c866fa26c93fb9e"],["/sw-register.js","95039bf09688e2b25c77cd123d43ee9e"],["/tags/Android/index.html","1e770e39e43e7f0a323e4faa7c11ddcd"],["/tags/C/index.html","18f30c73fc7957044444aa96ad0887a9"],["/tags/C/page/2/index.html","ddd3de3810bc469fe6a49f4e67ccf218"],["/tags/CSAPP/index.html","235dadeb3e9f0aa0a0cb8ced1a738514"],["/tags/DNN/index.html","09b5b8257395e591a76365c35153fb8d"],["/tags/DNS/index.html","543e05587f206e28fed75cc81c321572"],["/tags/FPGA/index.html","8abdab115c2caa81c4443e41cc23fb6c"],["/tags/HDFS/index.html","02742f21c81fe0ec88eadf1309a98535"],["/tags/Java/index.html","ef392c4efb079c73087336baedcb8785"],["/tags/JobShop/index.html","2828e1d60fa2eda98ac3dfafc343f733"],["/tags/K-Means/index.html","750449a107e7b211341ccfabd6b0d950"],["/tags/Kafka/index.html","248609e0a3790809100c1234b14ac5bc"],["/tags/Linux/index.html","6ae398fb093767ce421f268e222bc625"],["/tags/MIPS/index.html","4d70170b9513d55fd34ee2e242e7ea63"],["/tags/MOOC/index.html","5f25eb89d63e92cd0c75e7e78c1f355e"],["/tags/MPLS/index.html","2a53bccfea3cb9880c0d719bf9b7f1c4"],["/tags/MapReduce/index.html","050ef1f000f8ea00f489ccfe99b09fcb"],["/tags/Matplotlib/index.html","2c181445b81ea546c39ca4ffda253c68"],["/tags/MiniSYS/index.html","a820eef3ddb56671c398386c8d1ae5e2"],["/tags/Python/index.html","e58e380c041eddf232c09bd66be831fb"],["/tags/QT/index.html","015b0375a271014229ee3cc6db919f1f"],["/tags/RNN/index.html","3070845da2984f146f9274c620916a03"],["/tags/SIP/index.html","0d842cbc39247e182865412688c181cf"],["/tags/Scala/index.html","713de80bd0e950bdcdac0e947da3a015"],["/tags/Shell/index.html","f36b2a778bc4d93f22d3bc3ddf015cde"],["/tags/Spark/index.html","3b6f22d55b3a5330bd700c4122de42ee"],["/tags/Streaming/index.html","601c01b2a4522c95cbd31e00e82ec7be"],["/tags/Verilog/index.html","23dd03625d0ccba8ee07128a30592fc7"],["/tags/first/index.html","4c2a083f0f194d33c5bed83913c44701"],["/tags/index.html","a35330928736754ff5652982911f8f8b"],["/tags/习题/index.html","3f558e2f1db816e09d7efa020d4bd21f"],["/tags/决策树/index.html","7cb09124c7c9fc21c2025d5f6990f08e"],["/tags/分治/index.html","079c531f01bfb1901c334f6f4a62950e"],["/tags/分类/index.html","ce1879f5b1a1e0f03dcfe91a732ee721"],["/tags/动态规划/index.html","e9f97dabf108359c7e91bf674640e2b1"],["/tags/华为云/index.html","204f9fae03422ca87287c7032a4fa1c8"],["/tags/同步互斥/index.html","a297b092ff819df8523f5b5286e3ad05"],["/tags/大数据/index.html","959c5e6bbfaf4f347454460e13dbf2d3"],["/tags/实验/index.html","66347f44fcc8218e3037d19fec7d51a9"],["/tags/小游戏/index.html","e1272e930f8ae26b5e77f11448c2bb41"],["/tags/操作系统/index.html","340a71ba830373bd0070373b644abc42"],["/tags/日志/index.html","3fa2df35908058cd48f2342afdd26675"],["/tags/易错点/index.html","c401556d3d91ea0445e8158210aa5f2f"],["/tags/机器学习/index.html","415ac99eab64a5a100fcc103c266b3b7"],["/tags/正则表达式/index.html","bbabce442f17e6863657db0cf7c2ae1b"],["/tags/汇编/index.html","f888c166015b44d4f982dbcda9c8d893"],["/tags/流计算/index.html","5daa608d10198a80c57211fe1437cd37"],["/tags/爬虫/index.html","5d1d2870a56f675600e240bca3ebcf83"],["/tags/现代交换原理/index.html","39605d97b50c9dce5c7be012b9a820fe"],["/tags/生产者消费者/index.html","cf2cb2b91f4aca99642681285d87aa1d"],["/tags/算法设计/index.html","f83826982e1310571a7a97939f5fef5b"],["/tags/线程/index.html","edabb2a5c5a5613233cc45e457a62364"],["/tags/编译原理/index.html","45b1e174cd9c9dcf0c1f9aed45254199"],["/tags/网课/index.html","85428f191075ba7fd7a7750f6f9e9875"],["/tags/聚类/index.html","9aef1873ce39a4959b452f502a710635"],["/tags/计算机系统结构/index.html","c4a34247df241e9d5bce4d5a40aa82e8"],["/tags/计算机组成原理/index.html","7764fa9d152d45536baea8e9d4f452c8"],["/tags/计算机网络/index.html","ffaf43a80bcd23441c7b65999943fb05"],["/tags/词法分析/index.html","9c2eed2839f02e433dc4bb04de203f23"],["/tags/语法分析/index.html","e854fc315ec42984237abe5c9c95a293"],["/tags/读者写者/index.html","267ffa1e3413bc047788e0f57446ebbd"],["/tags/软件工程/index.html","d1323a69a7ff9fe125db329747f1b0c3"],["/tags/进程/index.html","2097861105a2c2c82956993788e27f4e"],["/tags/难点/index.html","8622f38887edeb305fb4dbad2c9525f7"],["/tags/集锦/index.html","64ad5c0d71cc4707d3a84c617b33328c"]];
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
