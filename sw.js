/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","ef164dd9d462dd2cf12c4112526fadeb"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","84cc908904929034f291e1c3c6b1d00d"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","94646b50a3420b91f2bcada1dd9cf03f"],["/2020/03/26/计算机系统结构-实验1和2-遇到的问题/index.html","d7d342fac3f21693e98ec9a738dee4da"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","5178c08186168d6a263f9a60afd0bfb9"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","a21e5ea050088006ee5e7b203328b7ab"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","3f5f3fddb7d5caf00edacf9216a3661c"],["/2020/04/18/机器学习-知识拓展-条件熵/index.html","1094f78a4adcfb4b3283f6210d4106ef"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","b68fc4f54e16d8b25d15527cf7448981"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","5bf343d0c1e43b03f84bd4083f41c679"],["/2020/04/26/机器学习-实验-决策树/index.html","ef9b2dd3c704e3539d8a59978d36eef5"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","91a4574e2796ad5aa9f877ac16c795e7"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","8512984f2e82cfcc94b1a28a166b2d00"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","57aa5a0164783a2672856c5c1aef008b"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","6b11f67a91ccc40ddf4c8bfd190a581b"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","d033aace2269b6437ad995c94b384a1a"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","9ddad4324c1becce7b9648874662d400"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","6c2e39a3fa9853725facd5edf3bfe577"],["/2020/06/11/机器学习-实验-DNN-手写识别/index.html","91a86855180be023db4408c5419f349b"],["/2020/06/18/大数据-习题/index.html","f7914948bb3a010d8e950964b4a17c08"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","0a6fa4d6e11ec2862a5a7e54fa00904a"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","6ca9b4009955dc8c451c8ceafc7f9e51"],["/2020/06/24/Linux-拓展学习/index.html","6f49b69a7191b426cadc08a890c423fb"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","010221898b9d28307888199ffae0985e"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","e833df5769b3a7c1248b7c2173ca13b9"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","737fae7d1e16eed6dbb26bf38baeed5b"],["/2020/07/15/C和C++的struct使用总结/index.html","93740a5478c4670d5ee94c7c68762b75"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","fb1716505136f5fd27377c2c975f0589"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","6e9465925daf9d4e64504a79b483764f"],["/2020/08/10/机器学习-实验-花卉识别/index.html","6e382b6bfafca4ffb602a2a60539fce7"],["/2020/08/15/Python-项目集锦/index.html","b520116ea109ed82f7e04dadee5316bd"],["/2020/09/01/编译原理-词法分析/index.html","3df6dfbd1364be47493b125eb6894ed4"],["/2020/09/02/编译原理-语法分析-LL1/index.html","624bee60e3e3fc15959e7b89f8f82ff4"],["/2020/09/02/编译原理-语法分析-LR/index.html","3d8320ce36aec79faa8269f2ec0d815e"],["/2020/09/03/操作系统-内存管理/index.html","1ea0d58af0fe63176de0ffef5fddce58"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","11b5f6f8d49f4987202b42df003f0b33"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","53a39e5d53324ed8eb26a36531e0d8f0"],["/2020/09/04/CSAPP-实验集锦/index.html","80e4f2eb2f59a594c68a4930f38abb60"],["/2020/09/10/计算机网络-实验集锦/index.html","410a2f9b4c7cce25acc7811590f99ec0"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","3c07bf0389dd9d69891c91eee8bacd18"],["/2020/09/30/C++工程项目-JobShop/index.html","12a402e6bad2222f83e94aa8080dd1b6"],["/2020/10/09/交换原理-实验1-时间表调度实验/index.html","1250035ccbc325bf4da0afe24e46b56c"],["/2020/10/09/交换原理-实验2-摘挂机检测实验/index.html","d244c6e0e15bcd45c627587f94f7bc27"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","a7d3a57477311c67b56757fb62dd049b"],["/2020/10/09/交换原理-实验4-拨打SIP电话/index.html","5f1cedcb70c35e013aa3195e7a9d0d3a"],["/2021/01/04/Android-项目集锦/index.html","db608c672d596bd19d56e0238ce4e73c"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","f2e400165e48ace0d7a863842addd170"],["/2021/01/04/C++工程项目-travel/index.html","0c50f107ec34a59f04b510a11dcff14d"],["/2021/01/04/算法设计-分治-最接近点对/index.html","61faac5e40e314eec72bea31718db39c"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","930ab31a998c2fdbe714181d80f5caa6"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","64819b5c6be5aa2d0f6ec8cab39a1a79"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","7ec3a925566e7b47c635f853b7ddc948"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","28475f873708c4dc57e07c081c774b35"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","df2b6eb9f1b94d3c647a4377fabfe53a"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","6dcb1559b1417443c6276f3208a9498d"],["/404.html","8dbfdfcdd68ccf87e0aa5240c7a7cd4c"],["/about/index.html","cf8016b8605f8a8ebca343c43951c6d8"],["/archives/2020/02/index.html","34ac442d034e818eb3a0cd313a8efa97"],["/archives/2020/03/index.html","758fc098a53cd70b18a0ee45d76f4caf"],["/archives/2020/04/index.html","efcdefda4359430f7d6f3c2ba8e015d8"],["/archives/2020/05/index.html","6cf0b11ccf69b6dbc14197fc0c8b891a"],["/archives/2020/06/index.html","12c7ce7133e04ac0e8456fdaa7154e50"],["/archives/2020/07/index.html","7a9c102c0c44e51e7008036431ab2385"],["/archives/2020/08/index.html","944e96218c33d5f3ecb0055bed5a63af"],["/archives/2020/09/index.html","e82149242204565d118d71e2069ac8b3"],["/archives/2020/10/index.html","c5cb5cc05694d237bc29a4d33b5015b1"],["/archives/2020/index.html","ce1eb94b0cc1df7cfb316c1811bc8099"],["/archives/2020/page/2/index.html","48454c565bf5168e426ab869727473d1"],["/archives/2020/page/3/index.html","303a9d230eb4dd7aa01aadb07da74688"],["/archives/2020/page/4/index.html","99a0283043904cafdda32f9126e5b479"],["/archives/2020/page/5/index.html","ba6c36f730c6c3f17f9eb7179ba2d94b"],["/archives/2021/01/index.html","46422bdc092dffda09db48f879ece50f"],["/archives/2021/index.html","a152e7c573a772bc20c66b9e4f6de613"],["/archives/index.html","89b3c7dc23bca26a03781d8f2f6ba7ab"],["/archives/page/2/index.html","89b3c7dc23bca26a03781d8f2f6ba7ab"],["/archives/page/3/index.html","7f531e4d621353a24b798a6c35400f08"],["/archives/page/4/index.html","7f531e4d621353a24b798a6c35400f08"],["/archives/page/5/index.html","7f531e4d621353a24b798a6c35400f08"],["/archives/page/6/index.html","7f531e4d621353a24b798a6c35400f08"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/bb/index.html","28bcdee9867d036998e668c12ea227c4"],["/categories/C-C/index.html","51fa1abdeb1df33fe771be7a141b0423"],["/categories/C-C/page/2/index.html","8725dfa79c3898dc1ee53a16d77ee785"],["/categories/C-C/拓展学习/index.html","7d541f4935780f32aecf059c2e148793"],["/categories/C-C/操作系统/index.html","ec12feb14212dcffade27d1f12eb807c"],["/categories/C-C/算法设计/index.html","72e0650c40f1b2b14f271a9aeb696ed5"],["/categories/C-C/编译原理/index.html","6ad26250e64f14c03d23a4abeca087f2"],["/categories/C-C/软件工程/index.html","a861ea7df0d5e12ff3af72d7bccd0af8"],["/categories/C-C/项目/index.html","9f8ecde74d19c2075282adf0acecd9fe"],["/categories/Java/Android项目/index.html","7be0d7b4d6a60187426c872236f01e5c"],["/categories/Java/index.html","88e7c7455754c0ba3f14baeedb4853cf"],["/categories/Linux/index.html","775e6cd57274b7edc77c6ef7172b000d"],["/categories/Linux/上机实战/index.html","ab0d22061a258d1d346401c9b1a6d150"],["/categories/Linux/习题/index.html","a5f99d6aec04f7c0ed00f837f8009438"],["/categories/Linux/拓展学习/index.html","2ecaea68751ab036a818f99eacf18323"],["/categories/Python/index.html","b3610c1af9bfdf95f0e551d5da6f0ee0"],["/categories/Python/爬虫/index.html","4db7dbe8ea5745b2b3169605f5b185ce"],["/categories/index.html","12ea3b651ca37f644316d4e8478d43bc"],["/categories/交换原理/index.html","0453f067cc148da60e12d7c8658111a9"],["/categories/交换原理/实验/index.html","67699c71d3952a703a87606776fefc1f"],["/categories/其他/index.html","a924929c0c34491ca443bb5cf12266a5"],["/categories/大数据/index.html","309b0509d7ba712623c4c0e605d4b657"],["/categories/大数据/习题/index.html","f8ec4eabbdb62e1d31cf4b712bcee4de"],["/categories/大数据/实战/index.html","1f5544da8c112df47cc8d9fd8a1c5664"],["/categories/机器学习/index.html","9168c04902972b9ddaadcdb9b257420f"],["/categories/机器学习/实验/index.html","f9b62fc3a34cf396d1a03f5ccadfbcef"],["/categories/机器学习/知识拓展/index.html","9addf73f0a6c55e8fe22c770f665db53"],["/categories/现代交换原理/index.html","85723e6d44789b7e4a723a0853c3b6a6"],["/categories/现代交换原理/习题/index.html","fc89fa340ecf081bbef2ecf3b4fab0b7"],["/categories/计算机系统结构/index.html","aa3cccf75ab7531b8c39332cc1f8901b"],["/categories/计算机系统结构/实验/index.html","c2bfc2c7ca61e476cef30e29c65f6c52"],["/categories/计算机组成原理/index.html","f810daa855b4722e53072d2e068b0539"],["/categories/计算机组成原理/实验/index.html","23e6beaa8300e555205fbab9f4f80914"],["/categories/计算机网络/index.html","33ed2f99dd9a02f61bc461352ea28272"],["/categories/计算机网络/实验/index.html","d9202b47c1bdfbedcca1d67472593ef7"],["/categories/集锦/Android/index.html","3c3ad1d3a0844dd0b43ff49ae3e8c8ea"],["/categories/集锦/CSAPP/index.html","4240de30eef8b6602bd8d81845e058a0"],["/categories/集锦/Python/index.html","8cec3ccc56efbd0ccaf08184e56f665a"],["/categories/集锦/index.html","0e57ddac49aafe0381a017a7442a76e4"],["/css/first.css","ac2d0010102d22ded3aa536d16e52b73"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/message.css","b0ce3ca232f809c8d7a85c79bf1f7ff8"],["/css/style.css","f33cadc59019a1af1d898b222bf512f6"],["/friends/index.html","a177635562849a1eebd28ad6ea1a75fb"],["/gallery/index.html","63f4bc7639ebb10460b077618443184f"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","379cba510935fc54ef2213cb7881046f"],["/js/aplayer.js","f10ee7aff4ce278045da925ac6510d29"],["/js/app.js","d14976ee97145aa14568c13c6554dcc4"],["/js/jquery.parallax.min.js","38cf4791e24aeaa8101bd2c816400718"],["/js/message.js","38da736cdf513c9a15a0a2a16a34eeae"],["/js/plugins/contributors.js","23ba3efa08d9fb1aae753ceaa6df2711"],["/js/plugins/friends.js","239cf9c648af390f866ed00cead3e23d"],["/js/plugins/sites.js","15bb31fc27abc888b17cc5d822808604"],["/js/rightMenu.js","19b2a577c30a04732f02b86bda62e0b9"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","e591237e48a721956a4ef8245fe2b083"],["/page/2/index.html","5b8b13f2cf1b8a5a39a0a636789e361a"],["/page/3/index.html","c3e839bc5663983b5d65b6ab8248c9e7"],["/page/4/index.html","d5f95fd69827e1e1024d2b39ec116514"],["/page/5/index.html","199f5364e77a9c3e2a3712ee708ea19c"],["/page/6/index.html","38d87133e91d11bb2ee81d5d20a68ce0"],["/shuoshuo/index.html","bcd0055b4c691a5957541d803f05114f"],["/sw-register.js","b6d28d13ff2c29a427c50b9c0cba1054"],["/tags/AI/index.html","6cd4c404a6c6b116d84988d5c02a3351"],["/tags/Android/index.html","8393a991ae0230d3cd5d783698e8c314"],["/tags/C/index.html","ddfd729063e120efd0a6c2c60bbeb98b"],["/tags/C/page/2/index.html","e40607d3de2411ff127499941f57694b"],["/tags/C99/index.html","246c20db35bebb57011ab0347869b154"],["/tags/CSAPP/index.html","edba698bc12c266078b68fb3da332c5d"],["/tags/DNN/index.html","f0b4506ac9923d5a14055fc3220f020b"],["/tags/DNS/index.html","54ed40cded8c7aecf4c4fb6fb07ff0c6"],["/tags/FPGA/index.html","4b348194cf3c665ae23a09faf8fc4dbd"],["/tags/HDFS/index.html","6200a87005c3c8453c586109c8cbee18"],["/tags/Java/index.html","e4cb11ba69e7efe32ef176dd936c54ef"],["/tags/JobShop/index.html","f7cc8a83b788b1e7c0ec969e756d0d23"],["/tags/K-Means/index.html","776e50c44c54fad13458b079493fe53c"],["/tags/Kafka/index.html","7188b0174947018f9eb225167533d43d"],["/tags/LL1/index.html","5e67312a0420123ef36573c6abecb2ba"],["/tags/LR/index.html","20c3962c49a91d4b03311e900c4a48f3"],["/tags/Linux/index.html","c0e9eeff319e46bc7e8763439334ece6"],["/tags/MIPS/index.html","fbeda0a3020221972994ea5af19dc6f4"],["/tags/MOOC/index.html","acd7eb49a4384d6b86c31f5d82c2e958"],["/tags/MPLS/index.html","e9ae3c860677c1485d8fe1dfeb118cc2"],["/tags/MapReduce/index.html","b8865931aed80ac0dedf024f368cd49b"],["/tags/Matplotlib/index.html","1a2dbfc3033a51195c851899985082fa"],["/tags/MiniSYS/index.html","9403b117c7026bf631aa75bd44107deb"],["/tags/Python/index.html","c5b49f69d8e456254f132110cbb06f92"],["/tags/QT/index.html","9e9882e8450efe577413c4fd4dcda874"],["/tags/RNN/index.html","089781bd6874866525e9f8933f53aa21"],["/tags/SIP/index.html","110c5d8fc9e8ab7f4337a98984e1ad31"],["/tags/Scala/index.html","5ef9de044ea6a290e842683eb7100fbd"],["/tags/Shell/index.html","77328f04313255e05af0356822c0da44"],["/tags/Spark/index.html","e38b52b33b82d56b23c939b3c70ab991"],["/tags/Streaming/index.html","fcab6300bc15677f65841639d4284514"],["/tags/Struct/index.html","4d7d816ec69fabbd6a0ccc4ff5693152"],["/tags/Verilog/index.html","4136a12d7e976a69f14cf715da511e61"],["/tags/first/index.html","a8efb7c5bb396b612f881acf8e89d9a9"],["/tags/iPython/index.html","6e324ff7e4937bb9d7d239b953d7a1f7"],["/tags/index.html","b8ca972c7201988a8a5349434935ec4b"],["/tags/ls/index.html","64a446f6cf6366f1d9c7a516e1404198"],["/tags/习题/index.html","970ce0012f716557f49b50fa561abd3b"],["/tags/交换原理/index.html","fb6ed2202aa54d654ab3dc5c596651c6"],["/tags/人工智能/index.html","a21a9c1859ed8d2b1657949f49cc783b"],["/tags/信号量/index.html","f595d679af1496aa1b6cb459fa55f352"],["/tags/内存管理/index.html","9d0461db50d0a99fdbde30d7c706200d"],["/tags/决策树/index.html","0870733624ab0f180b1eb4961057af8d"],["/tags/分治/index.html","41b3f4fbeab87fa786a95639585fa187"],["/tags/分类/index.html","934538c633524670c9dd0248432dce96"],["/tags/动态规划/index.html","cc2cdbb7a752af1854248b44a934a5c9"],["/tags/华为云/index.html","9e2ccf3865c50ce500e986cf9b1df59f"],["/tags/单词计数/index.html","99e92ac193e29bb37d46280e8cec526a"],["/tags/可视化/index.html","8c3257352dda2fd00713b9239bcd1f87"],["/tags/同步互斥/index.html","ed71fc18b59a7e58f50c68fa9f7a8e34"],["/tags/大数据/index.html","15e61ef1d6d44d738cac85a31096adcc"],["/tags/学堂在线/index.html","46cdafc860c79805a5a7ae626df5450d"],["/tags/实战/index.html","5ac112bfec4538eb6fb08c3622728302"],["/tags/实验/index.html","7f8861e6720ade420892117a2697f1d0"],["/tags/实验/page/2/index.html","8bec812066d06282f7f98760f3ad3e1c"],["/tags/小游戏/index.html","2fdcc0343332345476efc1666f68b47f"],["/tags/工程/index.html","b60eea274e8512b1e8ab23bc6b86b0b9"],["/tags/工程/page/2/index.html","e01d7d2e9f35524514e6cb08c46aa1a4"],["/tags/手写识别/index.html","7e4b4c2715b540fafe096e2a7c6d8e03"],["/tags/拓展/index.html","a1afabc93b8518e7df20f3e40a2249e7"],["/tags/操作系统/index.html","45189ed76a1eb6a76e0b0b4fa332ad14"],["/tags/数据处理/index.html","31bc3bc242100d6fee1caad78abd9e24"],["/tags/日志分析/index.html","d319e85f0fb554d3a27a08f9a0b1daad"],["/tags/易错点/index.html","0ae3cbe596d94557fc120808e008c501"],["/tags/机器学习/index.html","a9258ecdbe4d6133bc76bc37b0d21fa5"],["/tags/条件熵/index.html","a81fd88e884abbb91d0ba614a0275a9c"],["/tags/正则表达式/index.html","1c6372fd5adf82d493baf5b74dcea837"],["/tags/汇编/index.html","328771ea4b29d8b6b16310a8fcf5d906"],["/tags/流计算/index.html","837fe52b113364b964bc5144997455b1"],["/tags/爬虫/index.html","76d8d5caad4a9e854d846bed647df74e"],["/tags/现代交换原理/index.html","9ccd9143e880f9dcef1df96b29d4ad01"],["/tags/生产者消费者/index.html","61774b64135dbcd389131aa826f54754"],["/tags/知识/index.html","efd98e1c56708eaef284d6def569bc93"],["/tags/算法设计/index.html","2a3df6888cb79fa31bd2d8a74380d95a"],["/tags/线程/index.html","8cc57e268cd4c25feea6f4297daa2a0b"],["/tags/编译原理/index.html","d4c01cf7674c46b0994a5f3c5dd28ace"],["/tags/网课/index.html","79dbd5687de54dc97e5095275bbb7301"],["/tags/聚类/index.html","c3515582e761bb494c37f542e3a8a5c1"],["/tags/脚本/index.html","e4bd64e753b2ed1ed4b80bdd23f839ed"],["/tags/计算机系统结构/index.html","b01fd687499b24a9c7a4781f32f75331"],["/tags/计算机组成原理/index.html","46562aa0623fbb678ab5ef96dea7d350"],["/tags/计算机网络/index.html","53bac732a14f03cf6d92fba32d1405aa"],["/tags/词法分析/index.html","8176932da0b47fa3b2911d0b7359a65e"],["/tags/语法分析/index.html","511d6f1624df37994d7029cf882b9570"],["/tags/读者写者/index.html","3ff7d94a51e86c1137f6a23580411f24"],["/tags/课程/index.html","c61c4738308d2786fce2f11bf777d7a0"],["/tags/起名字/index.html","f7b73bb715f119d2b221754d4e6c907c"],["/tags/软件工程/index.html","c4bc1ec97894498e58ee9b0d15f02496"],["/tags/进程/index.html","b05e12be3b57ae4599baea91f6a6f907"],["/tags/通信/index.html","8d579e0da77513e89efb9776062875a8"],["/tags/遍历目录/index.html","81892b6d9c0b57bb2b05e8484c1ab1b9"],["/tags/难点/index.html","e653f54f5e982252daa8d44f777728e8"],["/tags/项目/index.html","3f8291c8cc27a8a031bdb06318b27ddf"]];
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
