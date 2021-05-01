/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","c6195e177a567b55a518e7fa1ca98e6a"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","b6d4a615ae181b592de5f27533e83d5d"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","50fccb77428da13230ae3d699fad5eb2"],["/2020/03/26/计算机系统结构-实验1和2-遇到的问题/index.html","2eb339dc408152d20ce7b7ddeeed3568"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","f4b24f81e4dcd56ded10388fb3790d1e"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","32e0bde1016192fb484c4497d8b80397"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","1b0fac9a32beb145eaed0b0044653e4d"],["/2020/04/18/机器学习-知识拓展-条件熵/index.html","4e5960c059c1eb5d0c682fdafd14de86"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","cc5aa694be2d45ed1384326c9f3ea53e"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","f707c0c13f588cc6518f9a2fc677d880"],["/2020/04/26/机器学习-实验-决策树/index.html","1584b29e4232be43e0f6e5daefad48dc"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","fa00322fc705bf37f77713540384e6ea"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","9cdbbb1d25743c568abc584a74d34372"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","c132c3a8468dba03653fc714d1a9386e"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","1aebf23648871bb70748bce6843d979a"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","68437e3359c5ebccfc0fae679a0c1e3e"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","6630538d29572f7ff44a70dc0bf4ca29"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","4b84c5773250e31b6bfcad3512ca28f8"],["/2020/06/11/机器学习-实验-DNN-手写识别/index.html","8c042d2e66fd8b064bee1e9c425e1af6"],["/2020/06/18/大数据-习题/index.html","4bf4e4b574fba54e244078850f07baf0"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","1d925aa00a5fd166e4387bcbf9d7dcf4"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","330322692ea9b13f78ba4d5f7138a95f"],["/2020/06/24/Linux-拓展学习/index.html","7b07a6042af77006804e5d4bf34b0dd2"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","c27479d0055c3801dafb9091c7f51452"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","666b2413e866501e8fe90dbc1bb5f426"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","4a7472ae53064b68295616e9b4391085"],["/2020/07/15/C和C++的struct使用总结/index.html","6d8adc7297da6056d7e18e31ad00acf9"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","eaac5b128025f4381b3a0ac04394fce0"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","abde8eee90a47e07b55389174639ffb1"],["/2020/08/10/机器学习-实验-花卉识别/index.html","9a3eb21672244259660879272058ea1c"],["/2020/08/15/Python-项目集锦/index.html","54cf0633b3856944d307a29d76003377"],["/2020/09/01/编译原理-词法分析/index.html","2fe238bfa3a08c5d0b48532658621084"],["/2020/09/02/编译原理-语法分析-LL1/index.html","da0185d1b8cf9e4b35c90ad556f973ee"],["/2020/09/02/编译原理-语法分析-LR/index.html","480c4d9c9a91561f9039902fffd9c02d"],["/2020/09/03/操作系统-内存管理/index.html","c169d44dd0805bee48250a4cab2bfef8"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","059cd13514d82714948c3187d1de8005"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","ce4d0f4b17b4201412aed30bf685d980"],["/2020/09/04/CSAPP-实验集锦/index.html","72d2e8c473d8ca8d4ddb3a86d919fdf8"],["/2020/09/10/计算机网络-实验集锦/index.html","1045327714f3477ce613501b88640924"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","1ee241ae69fdb976782b914da541764f"],["/2020/09/30/C++工程项目-JobShop/index.html","92594234e4285f4fe57813c1ad25a8a4"],["/2020/10/09/交换原理-实验1-时间表调度实验/index.html","30f5c3e8b058c436717b13f8bc54d4a7"],["/2020/10/09/交换原理-实验2-摘挂机检测实验/index.html","a3cef89b23a672fc228ffc96f89ab01a"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","1efecb26dd64a725f705cd9fec66bef0"],["/2020/10/09/交换原理-实验4-拨打SIP电话/index.html","025bd19ebb2e28af8b13993df024c753"],["/2021/01/04/Android-项目集锦/index.html","c9cbb3ee0a3987e642183b1fc548ea55"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","96d54d30105af39cb0ec427ac0193d1b"],["/2021/01/04/C++工程项目-travel/index.html","886757df47b0fe85c40fa9a54977ba7c"],["/2021/01/04/算法设计-分治-最接近点对/index.html","e27fb79f3db32182c9b9748d663f33de"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","17321e815ae6c01e792488106ac414ba"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","2591bceb60a4b24a89ba492b4700e245"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","d1afc438f50c44e496835fbd79e0390f"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","a129660b8200009488abc2399133a136"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","f57f0900769d2f03ac9346e461e3e0b5"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","0dae9be6921d38c485c46218d5d2c40f"],["/404.html","809e4fa682bf1ab1fa199cf862d33bdd"],["/about/index.html","a0fa62b4ded582213f5037bad3e7e5cd"],["/archives/2020/02/index.html","d04828edd3516cf25ac7e3c130c56369"],["/archives/2020/03/index.html","27b2123b6cb9a2be0e0a686a768bf404"],["/archives/2020/04/index.html","4a134681716e814a370207df16072606"],["/archives/2020/05/index.html","57c0335b6eb945a0b27173258960b7f0"],["/archives/2020/06/index.html","17a8184793246379cc9cf80f9da8e768"],["/archives/2020/07/index.html","33bd6c6eb22488a392ae67517f3b1272"],["/archives/2020/08/index.html","34b4b3c95983c5af7bd41936aaf3161e"],["/archives/2020/09/index.html","c605aa2334822c370c5b5d74563de9b1"],["/archives/2020/10/index.html","1175a0fcccb21bc93a39e659d573786a"],["/archives/2020/index.html","006f40f916856d15dad48efe32426c9c"],["/archives/2020/page/2/index.html","912b55107141c05182e6b8cd1381618a"],["/archives/2020/page/3/index.html","fa366463ee8c61cd31aba901bbbf3001"],["/archives/2020/page/4/index.html","75124096fdfc5dbc6e064373ba1b6f06"],["/archives/2020/page/5/index.html","bc54566c29a380afe0040d41897bb6b5"],["/archives/2021/01/index.html","af46646f8e4ff3a08a56712e814d48bd"],["/archives/2021/index.html","375ce75dfbb17a22117527d7782fd5b0"],["/archives/index.html","6fe2b424522a9dc5801e551cf12a9f9f"],["/archives/page/2/index.html","6fe2b424522a9dc5801e551cf12a9f9f"],["/archives/page/3/index.html","6fe2b424522a9dc5801e551cf12a9f9f"],["/archives/page/4/index.html","edd3853a7083d26eed32f277cf89826f"],["/archives/page/5/index.html","edd3853a7083d26eed32f277cf89826f"],["/archives/page/6/index.html","edd3853a7083d26eed32f277cf89826f"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/bb/index.html","c7e1430d4f57617cc6d5502f8e3045d2"],["/categories/C-C/index.html","fd7f777ec4291a9ba83216b09f246e77"],["/categories/C-C/page/2/index.html","ae90c15beaa682584c166de08f93d6fb"],["/categories/C-C/拓展学习/index.html","cc75a4c5570aceefda527cc0e3e7c943"],["/categories/C-C/操作系统/index.html","b71a69ad80016d53e2635f2b301e72b1"],["/categories/C-C/算法设计/index.html","8bb7e749875bf9f43e0ee0a60914e5e2"],["/categories/C-C/编译原理/index.html","e4056f1286a372f497dfe5624c4fb984"],["/categories/C-C/软件工程/index.html","ff2c2b7b955eb6c3004ca4bfdac2b568"],["/categories/C-C/项目/index.html","a7f0381f78e50268ec9a5cf00b37094f"],["/categories/Java/Android项目/index.html","eb44736589cdcdd6869c2e9127dbbe54"],["/categories/Java/index.html","8b6520c023f092a36718d6111693c52a"],["/categories/Linux/index.html","9f14b48cefeaf62f20f65ddf899d52c0"],["/categories/Linux/上机实战/index.html","40f340188b5d6a22ee48540de1280ac4"],["/categories/Linux/习题/index.html","c6edb850037b80659fcf62e131c6c7f7"],["/categories/Linux/拓展学习/index.html","454a43ce314da81cff19d1d8c7005ba8"],["/categories/Python/index.html","04ed57177252b38a58284ba7c4b0ff2f"],["/categories/Python/爬虫/index.html","1864ddf523882ac2b5eca42546ca4ddc"],["/categories/index.html","88eeb1567959f45fc078414888778f1d"],["/categories/交换原理/index.html","80fb637c21d0d4ca1bf9a3b9c12ed946"],["/categories/交换原理/实验/index.html","e9fffa8702d4a399c4e7f32f162745c3"],["/categories/其他/index.html","02f595fa67ec3c360ccdb2cba8111f95"],["/categories/大数据/index.html","7b79da54ec13e1a7012a049953284f25"],["/categories/大数据/习题/index.html","76c829262d1c14a9bc03eca10c11914f"],["/categories/大数据/实战/index.html","db468532e1125fd647c3aa0c50ce88c8"],["/categories/机器学习/index.html","8e7280a57c47031d0fe2a20634bb29aa"],["/categories/机器学习/实验/index.html","833c5f5238c112ba3a738b5d304b5aea"],["/categories/机器学习/知识拓展/index.html","60254343085a883aaaa6a5fe9ebcfc8e"],["/categories/现代交换原理/index.html","2b3d17a8cdae2e42aa77f977a889547a"],["/categories/现代交换原理/习题/index.html","dfc072d185cd58b641197a4e69ecd8ef"],["/categories/计算机系统结构/index.html","ee09744658bea5dfbea77f4ee9bb0999"],["/categories/计算机系统结构/实验/index.html","012c92ba794b780658758e7aad3ecb94"],["/categories/计算机组成原理/index.html","0ab69d7cc9d7191c2eeaaaf495f14f4a"],["/categories/计算机组成原理/实验/index.html","d4384d68a7bc470bf5db101181bce0cc"],["/categories/计算机网络/index.html","39c4a56e05ebf029fd61bbd7085cfdd8"],["/categories/计算机网络/实验/index.html","6862fb61e88bb529f38dda747a151367"],["/categories/集锦/Android/index.html","3fd4aaf7c0c4ae357615c160c0be4975"],["/categories/集锦/CSAPP/index.html","ab7f84e91b0ad0021ecbe57a20f346d0"],["/categories/集锦/Python/index.html","9f195819155de433396ea4541b15d6e7"],["/categories/集锦/index.html","dc91251dee1d5fe07f720ecfb73cea1d"],["/css/first.css","ea01aa1635810499a5ade558f4f81d56"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/style.css","6bb0e006bcdf6e96b6708cbc5b8f868a"],["/friends/index.html","15859596631b1387c68c1e2c58903113"],["/gallery/index.html","63f4bc7639ebb10460b077618443184f"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","b05f0a387fddc8ed4b7495b5ec5c425b"],["/js/aplayer.js","6e605f0855251e101d3024646f3eac60"],["/js/app.js","1948329f2fd7e750ade4bdc49138c09b"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","dc75f69bc207e47c3a4db34e4ba0c7ec"],["/page/2/index.html","d463472ed01682ee78c31118d1ecb912"],["/page/3/index.html","5f019e837c8c2b23eaa9ac8a84d4b5d6"],["/page/4/index.html","87adb60b385579812fb5bcb8548f4fda"],["/page/5/index.html","3db41645c2a733c5795f27795663ff01"],["/page/6/index.html","4e6e4eb79d2721577cfd9882e91c581d"],["/shuoshuo/index.html","52c76c030d8b60185daecafb5a5c30d7"],["/sw-register.js","41e180ccbc8dc4288fa27c59f96d9104"],["/tags/AI/index.html","3c0497c4a3161cfa2bcb1adbedbdc884"],["/tags/Android/index.html","0fc42ad465e37b5b165b7e7846c2c4a8"],["/tags/C/index.html","0abde5163a9433049bbc348dca3c4fa5"],["/tags/C/page/2/index.html","654a53c179ad728e4aa78b4add130273"],["/tags/C99/index.html","02d6f036dc4222bcc93167fa497ea9b7"],["/tags/CSAPP/index.html","62e7fba24f365ec84f89267ab12cd68f"],["/tags/DNN/index.html","89d3d6d98bba5215a401a35207369d66"],["/tags/DNS/index.html","d72a5ae2db6f0a7ebd072ca2fc1c7583"],["/tags/FPGA/index.html","c4e8e608c10391ddf24a2b0eb9791613"],["/tags/HDFS/index.html","aa1a85bd9fccd0ce7ca292ea361f4d26"],["/tags/Java/index.html","8f3fb9d3a1038e761e77dc13eb9cf3cd"],["/tags/JobShop/index.html","f793960c02ed3546b6b68450b713d828"],["/tags/K-Means/index.html","5ca222064fdfa3ddf011edc8fefc1a5b"],["/tags/Kafka/index.html","aa0b23d6b29e9becb0e7f83b6b989387"],["/tags/LL1/index.html","4dbc6fe25630dac588e5f9baf299d9b2"],["/tags/LR/index.html","d8cb465e2b7ed8a0e8678ffb7c8217a1"],["/tags/Linux/index.html","7bd61d49c9637f3eee43931fb4440c14"],["/tags/MIPS/index.html","bb551df976caab263558cbef1a2109ee"],["/tags/MOOC/index.html","ec750cbbe2cbbd3b6aba8713409fbba4"],["/tags/MPLS/index.html","eed9f5dbf087fd8737cc61058ad6a944"],["/tags/MapReduce/index.html","41e856705a4b677a66b70e6003050b7d"],["/tags/Matplotlib/index.html","ee1f8133b5a2af6f3e2a647a812f055b"],["/tags/MiniSYS/index.html","3a7fe76ecab26694d9afb06960c21e90"],["/tags/Python/index.html","ff8c3efc44090205c053e27467a2818b"],["/tags/QT/index.html","65bdeb85982496ead31c11641e2e9975"],["/tags/RNN/index.html","2ba5e61d0e5016c81b74660a20e945a5"],["/tags/SIP/index.html","6f3f2cc91505085d0a6d0c39eb4d2252"],["/tags/Scala/index.html","4ed475fa4ebb88d7339d351b5d97c28f"],["/tags/Shell/index.html","00e1108535b5a5cea82a9379525d2917"],["/tags/Spark/index.html","02a223823f4e91bad440eeb3c4f54191"],["/tags/Streaming/index.html","9b3cacf30d57ec037bff7a5e09a1d6ba"],["/tags/Struct/index.html","fdcec07434449773a53cd1dda3d596c5"],["/tags/Verilog/index.html","230d211e3d499ef8a8c0f086a8e370e6"],["/tags/first/index.html","65396a56943db46f30377c887ab1c1b7"],["/tags/iPython/index.html","a4ef6491b324ae3a186d6eb25c2ef996"],["/tags/index.html","c7e0cb97a5f946aa9c2748e5e1fb9338"],["/tags/ls/index.html","6e7bbd31ab8e13c71ad2467b8c356b07"],["/tags/习题/index.html","1249eb1154b40feba479f9fe99983091"],["/tags/交换原理/index.html","ced9fcf0b190f35208cc9b70c85ec436"],["/tags/人工智能/index.html","c7c17b67eb88985b012f7a8e86f43ac7"],["/tags/信号量/index.html","11caf0d9c339e63a064abeae56a20332"],["/tags/内存管理/index.html","82956646c6ab075e0364a2f8008cc43f"],["/tags/决策树/index.html","22691424ce81d5ada8b361e1ba814fa9"],["/tags/分治/index.html","2724804a748af4dd1acd4fd350928c9b"],["/tags/分类/index.html","ee4ad7eff91cd5cb33f70cce5fbbd153"],["/tags/动态规划/index.html","0dd0e663d012bd394594aac5d50d1212"],["/tags/华为云/index.html","f5fe63a73317f37a4eb221be852950b1"],["/tags/单词计数/index.html","5a387b3f1f34e3d62ce6c8757afb747d"],["/tags/可视化/index.html","99c44a01692f56a666ae117ef6215f52"],["/tags/同步互斥/index.html","2f4e262e23e0c9301b8dab8c494fdea2"],["/tags/大数据/index.html","e6eb40d27a51da1d4d78cfb1a3cac5ea"],["/tags/学堂在线/index.html","769c8314f95591ba34dd1c306612726d"],["/tags/实战/index.html","d3440296d074e6e62e7ab1589635affd"],["/tags/实验/index.html","b5edd26d9be9babebc97c1fca06c86fe"],["/tags/实验/page/2/index.html","28e25aedb16979198233b7a9adb5bf48"],["/tags/小游戏/index.html","24ca90006f355eb6c5850e6d99247372"],["/tags/工程/index.html","43a65d7323013d90750b752305fe93d8"],["/tags/工程/page/2/index.html","a43cdddba1056d3aaf12889f428620d3"],["/tags/手写识别/index.html","670b2da769477e8b4ecc51161a4d8ace"],["/tags/拓展/index.html","24ae39dc25404386fadcc321ca851cb7"],["/tags/操作系统/index.html","ee32008bd87a29cf5d1eeb76e554b2b4"],["/tags/数据处理/index.html","5de66f731acabe5c9cfec10326cab5e5"],["/tags/日志分析/index.html","54dd188470096af79450f14a029a7ea6"],["/tags/易错点/index.html","922562f93b39972ce96275fd0d200f27"],["/tags/机器学习/index.html","2bf7fee19cf0ae315a565bab3d4a2c1a"],["/tags/条件熵/index.html","bf95e2a323fd36b33364ebed76638533"],["/tags/正则表达式/index.html","98290c90127d838ebda167ee7d41aa79"],["/tags/汇编/index.html","16d1b328655acf6d6b23bad76fc09034"],["/tags/流计算/index.html","4a5b51ae7fd8be3c06d562faa04e0d74"],["/tags/爬虫/index.html","dab6aae55234ae3f67115766c67fe1d2"],["/tags/现代交换原理/index.html","6e8da5c3c42324dcbc285c74b38699e4"],["/tags/生产者消费者/index.html","c9d75c46ec8ab168cb28e380ffb43b8e"],["/tags/知识/index.html","7eb560cdab0e2971ffab5ad5518007c2"],["/tags/算法设计/index.html","1cd563291a6c96729affa356a4d4d3d8"],["/tags/线程/index.html","33abf6f5caa23fdbf1d89d89d42270d9"],["/tags/编译原理/index.html","fec083297a738f00581dfd18453d64f5"],["/tags/网课/index.html","ed78aea5442ef26d11a28d9f00ccecba"],["/tags/聚类/index.html","75b9ee7b41c8d8dfd1536ab2b7920924"],["/tags/脚本/index.html","f3cea3848833cbefbea2395acf60aecb"],["/tags/计算机系统结构/index.html","e7a697fe4b9d3c5ee86339c83fcc41d2"],["/tags/计算机组成原理/index.html","7c4a258959a42a23df75de738261c8ca"],["/tags/计算机网络/index.html","0df62a53d1bcf0d8c4d6976956a5d4e2"],["/tags/词法分析/index.html","736956becffb4c2cebca8636cf482392"],["/tags/语法分析/index.html","177afeff04d513581a94cd132e531907"],["/tags/读者写者/index.html","42f4e35d4244a033e1949c0bf9543e1d"],["/tags/课程/index.html","0d7b1e9b94e22129c40f86dec312621d"],["/tags/起名字/index.html","97adea8f45281c7716e54ada47509478"],["/tags/软件工程/index.html","7b0c4ba1d16c4a49d2c69ccac4684738"],["/tags/进程/index.html","a34d53e57e457e11ec09b14f6859ef39"],["/tags/通信/index.html","a962b6fea4cfa4cb60a6a7af711c40cf"],["/tags/遍历目录/index.html","b46cbee83374d1d8197f3bd59faec9c5"],["/tags/难点/index.html","69396d9c308cc3e543eaa21e62b6692f"],["/tags/项目/index.html","483b1df98905ae574c89eb70ccd2caf6"]];
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
