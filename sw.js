/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","772782c067094f1fcc797ef9144f6999"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","5666a9ec8c4c04416bd1920403980781"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","04d3c726567562a23b217fc80ef9310c"],["/2020/03/26/计算机系统结构-实验1和2-遇到的问题/index.html","2cae309c279aadab7a56c353923e2bdb"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","43f7d72fbdddd01207bccc23d59a3d39"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","fa8b71dc2e6e41a121c88e9f25ce1d30"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","30e59aa9b99f8a52d39491e73ffbd79f"],["/2020/04/18/机器学习-知识拓展-条件熵/index.html","2e85e8ec08f8bc7bd6599e994ba40311"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","141d85f7ecf50690c5b2ef7edb324d89"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","122d7f2605db2a86bbd5c24becf6316e"],["/2020/04/26/机器学习-实验-决策树/index.html","197ba7222c1421d857e639a5d453ac7b"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","366adbf7df6f7ad184d79548accda5d0"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","04a016413db4497ff4ac2a4d2141613e"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","54e848902689e457121fc53c1aae5e7b"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","8f6d6e086676b3ccabd79ce88349758d"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","032025a0390e9b5a72fdf514340b4dd2"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","6ad7e54d689646538e7014c197e2114c"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","9e8c91a46f78d7781ee007b60ae5ad2e"],["/2020/06/11/机器学习-实验-DNN-手写识别/index.html","747553836bc6ed85ff9ce56828e7840c"],["/2020/06/18/大数据-习题/index.html","e350466e257e61f957113de1875e525f"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","d2dbb49014d31e4678ceb553b12b2112"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","5c738e6131e331b2e183d463ec5fb7f2"],["/2020/06/24/Linux-拓展学习/index.html","76e6901cae8034f34bcfb76cafcdcb8d"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","a285f272b74f37cec401cac0395f17d2"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","13f547d5db5957f12041e8a4956d5ae4"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","99a2ffac5701feece4371882fdce3714"],["/2020/07/15/C和C++的struct使用总结/index.html","04b9f42736b4ff687aaa202548f44bba"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","7867fa38a532321c6d5b2c4079e1642e"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","3769a285a1966af5b4bb97f07ab03abd"],["/2020/08/10/机器学习-实验-花卉识别/index.html","15c6047c27015c8242a560a9276d1d73"],["/2020/08/15/Python-项目集锦/index.html","a5a69f1a92d1335a52da22cc76dcd842"],["/2020/09/01/编译原理-词法分析/index.html","9620ec4199ca19a1d9461367dfff2f0d"],["/2020/09/02/编译原理-语法分析-LL1/index.html","f9ea57fd29340fd21595e460dddcadec"],["/2020/09/02/编译原理-语法分析-LR/index.html","7477e1d04e090758ea2b198bab6cc5d3"],["/2020/09/03/操作系统-内存管理/index.html","8acbed786e2495cea374826faf48da73"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","2cf35e770200e1c1b26672e9b4fbe73b"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","61dbadd76cdfbaffee825559350e5902"],["/2020/09/04/CSAPP-实验集锦/index.html","25f852646f3ebcb1f0f110abece9d2cc"],["/2020/09/10/计算机网络-实验集锦/index.html","f14a4fb736b311fe7628a9789061338d"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","80b171adb8998cca482fcd9987a392ec"],["/2020/09/30/C++工程项目-JobShop/index.html","cdba7f00dd610a6bc57fdd87d358116a"],["/2020/10/09/交换原理-实验1-时间表调度实验/index.html","7bb376ec50e44a0abe9cb992fe9a5d13"],["/2020/10/09/交换原理-实验2-摘挂机检测实验/index.html","13a6c10b2da9a8d93d37a1233b8cc005"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","c4513c68aca45021e2068e87af742856"],["/2020/10/09/交换原理-实验4-拨打SIP电话/index.html","1cb88ce37af997acc224d714fbedd063"],["/2021/01/04/Android-项目集锦/index.html","e3a2d88efe69beb11287918ffabea772"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","ec39394dcf3b8c589735bbf0c65b5286"],["/2021/01/04/C++工程项目-travel/index.html","450658b16f0181174a1123936cc24501"],["/2021/01/04/算法设计-分治-最接近点对/index.html","e9904176e0258e5721e710e32eb87fee"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","9b07173c959dc0f57ddfacd546cfae56"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","f3e50831037dbc8f4ec957755b883004"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","5ab9d02f6db4d11161832e0d498bfd7b"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","db6600d012585723f1dee8c52dd50566"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","b761c98af9dd4afde59e744914d2fb10"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","721d2668e4be43d9c5e49267c9414a25"],["/404.html","a1f88b58bf0976507b1709e56e923ef0"],["/about/index.html","4fbe1bd583d4e64cd4e9ce6add137a20"],["/archives/2020/02/index.html","9e8b057d820feab7096df01d954ea0f0"],["/archives/2020/03/index.html","0fd0a6c20c902093077dda859b15306e"],["/archives/2020/04/index.html","32d374af74e9c6ccebc21322fbd666c9"],["/archives/2020/05/index.html","9a2d41a9862d8093bed80a335ecbfa75"],["/archives/2020/06/index.html","34d9db283437a9c7cdbd455c42d95973"],["/archives/2020/07/index.html","58c1fb57a053c12ffb65d5a0ec602908"],["/archives/2020/08/index.html","3918455a37cd8697a285fc39488c5545"],["/archives/2020/09/index.html","0ec31789f07b0d4570c9cfee2d4a3af2"],["/archives/2020/10/index.html","01abde807e526b63ed46551b9adcd964"],["/archives/2020/index.html","a74dc6e064c9b6f4d98b5c1ec66f671e"],["/archives/2020/page/2/index.html","a159c305415a183e6c36ac1521f1ea5c"],["/archives/2020/page/3/index.html","a3c6b036e5aadaf41efd452e85398479"],["/archives/2020/page/4/index.html","08851c1385cfaf047beacfe72c3ccaea"],["/archives/2020/page/5/index.html","6c8c1fb779df3189b421ae596cb64b61"],["/archives/2021/01/index.html","bf785c160f54fa3751c9ba47b6ba4b26"],["/archives/2021/index.html","6e923c49d0653bf576562cee92bacf2c"],["/archives/index.html","c2138f0068b16ae611992b722357bb3f"],["/archives/page/2/index.html","c2138f0068b16ae611992b722357bb3f"],["/archives/page/3/index.html","d9e9d2b52074f478528dd4843991e656"],["/archives/page/4/index.html","d9e9d2b52074f478528dd4843991e656"],["/archives/page/5/index.html","d9e9d2b52074f478528dd4843991e656"],["/archives/page/6/index.html","d9e9d2b52074f478528dd4843991e656"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/bb/index.html","6c5c32c9a7d9c5ef0730d5d59079766b"],["/categories/C-C/index.html","6801d11abac43a059903afb32553c19d"],["/categories/C-C/page/2/index.html","50373ab355235fcec9c710468f81c65f"],["/categories/C-C/拓展学习/index.html","fd7de148941bf5cea3f63880d853412a"],["/categories/C-C/操作系统/index.html","a6349dffb3051b1764256688cbc87ab0"],["/categories/C-C/算法设计/index.html","b88b5cfec728ed371c22016018a5f010"],["/categories/C-C/编译原理/index.html","6bc9774cf71345897714e074de8a087c"],["/categories/C-C/软件工程/index.html","c5555c1238bee6cf3ef4f8d3fbe9a15b"],["/categories/C-C/项目/index.html","e7a9a9218213bb9acd4ed7a22981b6ed"],["/categories/Java/Android项目/index.html","3871a734a11aa48e9c0ab3735be536fb"],["/categories/Java/index.html","98a69a9732bb8bec29ea16c3bb1d1a94"],["/categories/Linux/index.html","740da102623615f0e945a342bcb33bdd"],["/categories/Linux/上机实战/index.html","4a98eaa0fa33477922407e0d34df8ec4"],["/categories/Linux/习题/index.html","eb026bc1e5177d774e9adde62182ca04"],["/categories/Linux/拓展学习/index.html","2546c554f7272e032a33b1279f714d35"],["/categories/Python/index.html","4f428257fc39d62d893e3eb26a6a461c"],["/categories/Python/爬虫/index.html","987eb30a4b6a76ad5c19bbdedd63c1e9"],["/categories/index.html","f6bce4e41a56ca600da5da5a9bed764c"],["/categories/交换原理/index.html","47f5a73ab648827dca5752445bb819f1"],["/categories/交换原理/实验/index.html","e1c988dc6683ca2be1bf1f5a99f9b7be"],["/categories/其他/index.html","cedd04b674c97aa4bb31c37239555539"],["/categories/大数据/index.html","739b408fa71073f01d24d32615ce7a3a"],["/categories/大数据/习题/index.html","b5d571f1f8acd99da4dc69de3339b402"],["/categories/大数据/实战/index.html","016ba72749245f6c258980ca862bc9a2"],["/categories/机器学习/index.html","ccab0c71b2216bdf67cc7192528ea59c"],["/categories/机器学习/实验/index.html","98ae2657bab2566e7896c8bc2702ee05"],["/categories/机器学习/知识拓展/index.html","0797dffd78c265c4fc49e5dc240990b3"],["/categories/现代交换原理/index.html","2b16c669fd6b97c57547412b0a2b92aa"],["/categories/现代交换原理/习题/index.html","52bc459aeb94200aaa2f30a5abc81d45"],["/categories/计算机系统结构/index.html","a490579775053f8c64a6c7d6b2f857e3"],["/categories/计算机系统结构/实验/index.html","d98fd13adde74a31e7f985b035e22a35"],["/categories/计算机组成原理/index.html","f61f5815b226f9d1854de6d5b6ef3ffb"],["/categories/计算机组成原理/实验/index.html","db0d676e0a0629a557edd0db3647a553"],["/categories/计算机网络/index.html","c9ced4e7b59e9a610497c0f614efac90"],["/categories/计算机网络/实验/index.html","00013c11c21ca47dd39ffb42dd1faa95"],["/categories/集锦/Android/index.html","da92956a1ffe880aa555bc70fa3d1c5d"],["/categories/集锦/CSAPP/index.html","bff0db1d6367d6b462ac82fba080bc9b"],["/categories/集锦/Python/index.html","11cf88efec6ba14645378a2445236390"],["/categories/集锦/index.html","79214461c275967df58d3f243aff566f"],["/css/first.css","ea01aa1635810499a5ade558f4f81d56"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/style.css","6bb0e006bcdf6e96b6708cbc5b8f868a"],["/friends/index.html","6acc94390a28090d39a18b2a1eaccf1d"],["/gallery/index.html","63f4bc7639ebb10460b077618443184f"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","566b80ac281149793d484442351c55ac"],["/js/aplayer.js","6e605f0855251e101d3024646f3eac60"],["/js/app.js","1948329f2fd7e750ade4bdc49138c09b"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","fcb0a2c9d259d59f85630191fa6cf4b0"],["/page/2/index.html","74b1a178743293095bd764e11ac64b5d"],["/page/3/index.html","d963be567d01f543d928271aa38844df"],["/page/4/index.html","673071954a7c08afa83f1ef89bbb82d5"],["/page/5/index.html","d898980b318eaa132efb3464f361687e"],["/page/6/index.html","1a5f8b0964294d0b23c86f53a62e543a"],["/shuoshuo/index.html","25bd1282d7cf88572bb471de1692e762"],["/sw-register.js","75a793c001771adc5dcf8e24fab74912"],["/tags/AI/index.html","341e5afbc34a4dc4c416de8cfdd5a1b7"],["/tags/Android/index.html","a54d80617869c82d1cb601684e22b49c"],["/tags/C/index.html","43f85057411753594253e984ed9f233d"],["/tags/C/page/2/index.html","73939252411b7125c3b9ac209c4f8ebd"],["/tags/C99/index.html","efdb83b1d870f630a339fb4dbe8395ba"],["/tags/CSAPP/index.html","a7c6f8ba278e5f8de1b2da3bd4e567e6"],["/tags/DNN/index.html","8eddc98c037918f79e479b4d082a607a"],["/tags/DNS/index.html","67572817e08a76b0c8d8925fef4d4ac4"],["/tags/FPGA/index.html","22bdd91c4d129c526ddad5806c23d3c7"],["/tags/HDFS/index.html","0c5440a8aa2195b0162691a5ef35aaf4"],["/tags/Java/index.html","113dab16693b0a3652d181e9b9bb24f2"],["/tags/JobShop/index.html","1d2498f346cc77f4e2bfcb9becd6fd08"],["/tags/K-Means/index.html","eb60445bd973a0c3cb44197b6f392a15"],["/tags/Kafka/index.html","58a4037d29250ef140e0b1681b686095"],["/tags/LL1/index.html","c736e348f6019c394572ca98c5f90379"],["/tags/LR/index.html","6e444ce7fe4258b8cbf2b933335a11c8"],["/tags/Linux/index.html","bd3652756503739d94a66ba33901d7a4"],["/tags/MIPS/index.html","877760ce4f91cd7a568fec851d150b56"],["/tags/MOOC/index.html","bc942b57d4abb69b68cbce34ca289738"],["/tags/MPLS/index.html","dc382cb01fa7a812b19c6e38965dfd1f"],["/tags/MapReduce/index.html","36dc025002c596129b5e43c0adfe5998"],["/tags/Matplotlib/index.html","bc5a82a44bf003656a30c38d60dad6e4"],["/tags/MiniSYS/index.html","ad15165315064ca9f009432790fb045a"],["/tags/Python/index.html","cec6371b797e36387b9fab41f8d9b016"],["/tags/QT/index.html","5bbf2695527363b55b4b3ae24183648f"],["/tags/RNN/index.html","b3276dcd984dd6e8623ac5fd26f79def"],["/tags/SIP/index.html","961688be7cb0edc2e9111fbe644e6a82"],["/tags/Scala/index.html","28a45259d7785abe0e808ad03de75586"],["/tags/Shell/index.html","23f1fcade5815e321fdc7cc3c3acdaae"],["/tags/Spark/index.html","812ab2b99a8310a38dc0568075507d14"],["/tags/Streaming/index.html","34cc0b7f01161abf0c7caa3a4a8603c5"],["/tags/Struct/index.html","fce58c188eb66509b8b43f7116311f2e"],["/tags/Verilog/index.html","1b6e798408347ccd2a42d69b24f65a19"],["/tags/first/index.html","5dae9093e40a00699cdf7f0a806a9a87"],["/tags/iPython/index.html","65e4dac83b6eb5fb43be3c042be1f07b"],["/tags/index.html","44e1f3a01e81fcabc13021b2da87ea14"],["/tags/ls/index.html","d0cefb55a60a6d6c2f9a95496d5e47cc"],["/tags/习题/index.html","4b1e540265bf15c757b499fe2871d391"],["/tags/交换原理/index.html","9a3085e1d1f970b13b28d8c5770373a4"],["/tags/人工智能/index.html","4bfd8bcc65fc33843fb3eb6dfb45861e"],["/tags/信号量/index.html","0415bb216c07a5b56ac79df62e960efb"],["/tags/内存管理/index.html","812d948b602c4fe8b70efe94ddec369a"],["/tags/决策树/index.html","0c296394251b529a8535f049ffc1872c"],["/tags/分治/index.html","556db9172c9e3004176f347d06d5278c"],["/tags/分类/index.html","bd57e27b01cb1b0b3a52289a0de2431a"],["/tags/动态规划/index.html","63d678f45334630c52f044ac6d2a8cfd"],["/tags/华为云/index.html","2ad6471e1455f578171a479144bbb507"],["/tags/单词计数/index.html","3a0ea2994046e398ad214db785953e36"],["/tags/可视化/index.html","808fa32dfe30c340edae434fb8cdf1e1"],["/tags/同步互斥/index.html","79ecfbdbbbc9f9f72cc4a64012bd2c3c"],["/tags/大数据/index.html","addd513fd3c1a8b055609365155341ff"],["/tags/学堂在线/index.html","db82fe9aae17ea91e51ca21bda51afc7"],["/tags/实战/index.html","1169cbd56cb0427df635feaf6ac42fa0"],["/tags/实验/index.html","d9bd735e3ba5dd5149198ae466386f4c"],["/tags/实验/page/2/index.html","427d17bd5722522046f1b57fd46ff8ef"],["/tags/小游戏/index.html","c656c6e119e567043e73d752fc0363f8"],["/tags/工程/index.html","b2497ada385d9b40fe6a1525bdc7b2b7"],["/tags/工程/page/2/index.html","86ba109b6332401888312dea9b52f0d8"],["/tags/手写识别/index.html","098151601f1be77367a889ec08e4be73"],["/tags/拓展/index.html","b8acb297dddfc645a5c08b27ff07a69e"],["/tags/操作系统/index.html","ff35d6f6bed4f582e887493eeeae08f0"],["/tags/数据处理/index.html","2cb8d20deb2a47aea4a5eba9d94445ae"],["/tags/日志分析/index.html","de5b8b1a4c6124f7db440b668c9fb18f"],["/tags/易错点/index.html","4b18c5ca455651fad8ec051d6679499c"],["/tags/机器学习/index.html","016df3f6fb7c9b8fd63d1d908bc980c6"],["/tags/条件熵/index.html","71d90a59849c566d73f5d29aec3a1382"],["/tags/正则表达式/index.html","27761a6d482a3dd7b39d4aa894ad039c"],["/tags/汇编/index.html","5a15511625759d9d189ca2bd2bcd3586"],["/tags/流计算/index.html","1a6c8279ebb87a291ac642ba5c6657ce"],["/tags/爬虫/index.html","4e1acf2757208977951b4b841843ca24"],["/tags/现代交换原理/index.html","d597c64de7024c51fa7a050e8f814aa3"],["/tags/生产者消费者/index.html","95b196be73715eb20f47f04856bc649a"],["/tags/知识/index.html","49365ed31cd831fcb68182ead62b615d"],["/tags/算法设计/index.html","d3e20923d849f0cc7041ac833bd2961b"],["/tags/线程/index.html","9f81e03539dcfbd914b6758f7ff0084d"],["/tags/编译原理/index.html","c81fe17f0489aec066e18763a5641973"],["/tags/网课/index.html","02a894835ca281e58de26d8da7f91382"],["/tags/聚类/index.html","427cfbef3a9e25665d757d5d3f39e188"],["/tags/脚本/index.html","f87b960a74f62d209e840fc1bd3081ee"],["/tags/计算机系统结构/index.html","dc6409f2217b81fa7d482c031fcccf63"],["/tags/计算机组成原理/index.html","840879e80e047cddc21b729b90eb5268"],["/tags/计算机网络/index.html","1296a3071b1a1987ef0d542292ca04ce"],["/tags/词法分析/index.html","6a7024c73a3eed12f80236ecb508443d"],["/tags/语法分析/index.html","9c5f1bc8e54c3fb3b2d0506d48549822"],["/tags/读者写者/index.html","ea3f108cfe54ab1bfccce405e609436c"],["/tags/课程/index.html","911d1dca56c0f08fa03f1c3fdaa2c2f0"],["/tags/起名字/index.html","2d0562870ae0ac26bd070c186f9a5dd8"],["/tags/软件工程/index.html","fcc4e01fe737f093f9371dc28381c6ec"],["/tags/进程/index.html","646159e6c85aaf21bc92e5ad38596cde"],["/tags/通信/index.html","1422960c240f56a64b06564c1fd3e997"],["/tags/遍历目录/index.html","85129882d6b7dd128c8371d1f47db2e6"],["/tags/难点/index.html","81ccceead3d7032835f8478001b8cffb"],["/tags/项目/index.html","f015d993c037a0351cfb67488b1cf596"]];
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
