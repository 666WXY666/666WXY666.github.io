/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","534e9a9bc604323100fb6c475bd1f3dc"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","8a1c1c365ffa55e578bb3229aa8da2eb"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","39a9e57e46994e8b4442a989ea5a8e69"],["/2020/03/26/计算机系统结构-实验1&2-遇到的问题/index.html","352ecdff71b33028be6bf18612448fe3"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","c8f1e2fe3aaa6b69d51f6eda781ce1a0"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","0080eef966bcbec7344fdea8b454a3af"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","22b47a8fcdcd0fb2164128afa208b3c5"],["/2020/04/18/机器学习-知识拓展-条件熵/index.html","123d3b713e1d70e045743a6c645b6f3a"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","45d08f7ced0ae5e6cc75e1c5e9e1713f"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","032060d06a3c659f4f23add26f8c2dff"],["/2020/04/26/机器学习-实验-决策树/index.html","087f5b5af149b45f4350d33d8596a7a2"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","498e98ed3597f3940bac8e46063d6da4"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","07b844e496cc7ebdd1eb108fbd5fb0b1"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","b8e7c030fb168b43b872dfc3ff3520b8"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","bf3a22e192a0d8b2e19a8cdcfe8df76f"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","f6acf1204c33464491559857c3c09a09"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","8d2129ab55c993e08e463642d0431983"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","8cbe8d5562dacbe59b4695431fc991cc"],["/2020/06/11/机器学习-实验-DNN-手写识别/index.html","81494865cf03e1abf2a11f59fc5f83f0"],["/2020/06/18/大数据-习题/index.html","7308ff920fd040d4cf22154b77ef2cd7"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","cfe5e150852c50285e93d8867486f104"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","f652618e9cb7cc41c86238826ea32c4a"],["/2020/06/24/Linux-拓展学习/index.html","485dc4f83f2593e6fc9e592a91f48e54"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","00030238c2589950c850b8acd3d64bfd"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","c08a7fd782f21be9d23fa7ac5d6eb20c"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","1730e8acb85f210b9b7037dfe5121ec6"],["/2020/07/15/C和C++的struct使用总结/index.html","b4bc0336a2335feb24f3a7ac6c8c4851"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","10a8d3eae020ea55f5ef113ee6c08a1f"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","3f1fd672e237a27486005a6095b0cec8"],["/2020/08/10/机器学习-实验-花卉识别/index.html","26c30af25ff56a7d54b0cf2fe8a17d89"],["/2020/08/15/Python-项目集锦/index.html","a83aadf1f1edb80bf62484c2c80f40b8"],["/2020/09/01/编译原理-词法分析/index.html","b5dc03c29a71db1cd427ab7bdfd48d19"],["/2020/09/02/编译原理-语法分析-LL1/index.html","8aa76bfe6181ecf9af346268aec60e02"],["/2020/09/02/编译原理-语法分析-LR/index.html","745b61c770647b0eb627b93e0c1cadd8"],["/2020/09/03/操作系统-内存管理/index.html","2266ff72f678d393622df44b69f35d33"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","ca2c88e75afd1c26e39d160d007e7e37"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","cab489875299f52caaca6a2a569d0a49"],["/2020/09/04/CSAPP-实验集锦/index.html","c0734f61d4597643fbad1b3b23100d87"],["/2020/09/10/计算机网络-实验集锦/index.html","5df993ee229612716e9958d4645be7ed"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","ed20b9b2dc0c8d2c866a018f9bb45704"],["/2020/09/30/C++工程项目-JobShop/index.html","bd5bd78e59f50c1d9d757b28bf63bdf7"],["/2020/10/09/交换原理-实验1-时间表调度实验/index.html","d50b34fa1106eab8e92b3c2b575961a5"],["/2020/10/09/交换原理-实验2-摘挂机检测实验/index.html","113d456a8c811bfc5b59569eff3ae474"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","74ee1f6cfbf5bac4cd104efc17ad342a"],["/2020/10/09/交换原理-实验4-拨打SIP电话/index.html","b4c6f500e3f71a2613322f54ee76690b"],["/2021/01/04/Android-项目集锦/index.html","b61880997d353934afc16eb532da19b0"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","460ccec6530486ebf4a1b2c03201ec5c"],["/2021/01/04/C++工程项目-travel/index.html","d32c18f157964589791fae93a689c07d"],["/2021/01/04/算法设计-分治-最接近点对/index.html","c9aeeb16d69efad6788fc6f928fea311"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","a312f206edb3b6ac1942983ab0c51dac"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","84135fa5c925b32d480e67649473c6cc"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","8fd86f25108d1c3934b7670364009d8f"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","14b0463f8a2b9185164f585724fb59a0"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","34feb28daac3e341a046af73d6b22503"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","6475b261a69cdd2cf939ba93d1111735"],["/404.html","943deb2842c33a19c63615198e2e51df"],["/about/index.html","7ee6497b77dfc5a8bbfe4d94394e5ebf"],["/archives/2020/02/index.html","53b3b50e17a56ee2d83413c08d4a36a2"],["/archives/2020/03/index.html","ddf5fee9579eae2619fd6f3fe5e06c6f"],["/archives/2020/04/index.html","4919dca888055da2cd4fed4adeedf0a8"],["/archives/2020/05/index.html","9e4259c0390e7d2aa5959f8c93dcdebc"],["/archives/2020/06/index.html","879e226b9f45987aa21660fb131258b0"],["/archives/2020/07/index.html","3d6fbcba064858d36ee6b7dd7eaf5303"],["/archives/2020/08/index.html","cef3a25cbb60f919af421f7cc846b414"],["/archives/2020/09/index.html","143c884d52fdb189a5a29ec48ffdd94d"],["/archives/2020/10/index.html","af6bd4f2adcb846466c576022502e5b8"],["/archives/2020/index.html","1ee1daf538dd964e905f21e835557398"],["/archives/2020/page/2/index.html","a557d9d296969e272d491446fb51938b"],["/archives/2020/page/3/index.html","10d0aca3c2d8be9ed24b939092d33ccb"],["/archives/2020/page/4/index.html","2e8bdb05c86b2effed6817fa9c7f3b7a"],["/archives/2020/page/5/index.html","d8d09b044dd1fb7a6fc53e89e6e53fe7"],["/archives/2021/01/index.html","16333dd68c7bf7e5cc652d499a5f8f19"],["/archives/2021/index.html","03a8b478802726a0df7aba265b51d4c1"],["/archives/index.html","2728a8ecfaea9d6c853bf093dc45b582"],["/archives/page/2/index.html","08f1b4674fef3b316b347b2b6d5cf70d"],["/archives/page/3/index.html","08f1b4674fef3b316b347b2b6d5cf70d"],["/archives/page/4/index.html","08f1b4674fef3b316b347b2b6d5cf70d"],["/archives/page/5/index.html","08f1b4674fef3b316b347b2b6d5cf70d"],["/archives/page/6/index.html","08f1b4674fef3b316b347b2b6d5cf70d"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/categories/C-C/index.html","e0a31a9df5d240039fefe412c1991193"],["/categories/C-C/page/2/index.html","2f1bd270bd2ea0adf3034997528feece"],["/categories/C-C/拓展学习/index.html","0c7f86cdd6518e9aa9c5c16ad36f80bf"],["/categories/C-C/操作系统/index.html","a637f7f9e09fd545ba594e8025f3afb0"],["/categories/C-C/算法设计/index.html","8cf31df27142aa2f75c718a6f410411c"],["/categories/C-C/编译原理/index.html","60f455a84fae95912708611090274909"],["/categories/C-C/软件工程/index.html","27d610f0394f00250f1ea95fc835ed82"],["/categories/C-C/项目/index.html","a670e7662ba170db265c7725c9dcba0c"],["/categories/Java/Android项目/index.html","5dc90f72e43185421644cab1f666e788"],["/categories/Java/index.html","8d98500cefcc2823cba570188b2d66a6"],["/categories/Linux/index.html","fd584be6d7440b06376766e5b543f5f4"],["/categories/Linux/上机实战/index.html","abaf3c84baa0f9557abfdf4b9c74453b"],["/categories/Linux/习题/index.html","8c89324a7eb8779e43f800c0a2707f02"],["/categories/Linux/拓展学习/index.html","5942aac6ba1c7557b29e15cb6c1654e8"],["/categories/Python/index.html","b16afd8285fe836ed93375d2de20db49"],["/categories/Python/爬虫/index.html","39aec4fad749dba4cf864405b5a0ff03"],["/categories/index.html","7caeffc4c9a38dcc38f8d09c4c77f364"],["/categories/交换原理/index.html","1cfbdfdc2b1c871e7150d2f3e38c2f18"],["/categories/交换原理/实验/index.html","0f591d5fb3f7854f26b259cb9d0a5e76"],["/categories/其他/index.html","3a3766097f9844cbb6ebb2478489c7cd"],["/categories/大数据/index.html","4c57ab8f94c6dd95733da8059bba8a17"],["/categories/大数据/习题/index.html","7f2f20b39fe0be5298b4a54393754db8"],["/categories/大数据/实战/index.html","90bca7dc18281cd65c16a0fa612ee890"],["/categories/机器学习/index.html","5357b47670e14ea597ab8f830c5a87e8"],["/categories/机器学习/实验/index.html","e3fb468bfac36cf5e5713601863b1dd9"],["/categories/机器学习/知识拓展/index.html","269d49b3c4031d141e881592c0c15127"],["/categories/现代交换原理/index.html","1d8ccf366d3a5a3773fd7ac4b10e50e9"],["/categories/现代交换原理/习题/index.html","6fa00b4977cf1bf814a7572857c8b1a0"],["/categories/计算机系统结构/index.html","c6a156f4ecd37217cfb1149242078b4d"],["/categories/计算机系统结构/实验/index.html","9fb599ec25a4ec6520fec75cae1346c6"],["/categories/计算机组成原理/index.html","1f594568dcf6cb791448bff984ba775e"],["/categories/计算机组成原理/实验/index.html","34c6da9fc31264f312a2bfe29fa6897a"],["/categories/计算机网络/index.html","9fd0e945a1d593a117fe99e1150c3383"],["/categories/计算机网络/实验/index.html","9a17d77785b87b0b5193313a209cb40e"],["/categories/集锦/Android/index.html","96c45784e9d733bd799347b158fbfaa1"],["/categories/集锦/CSAPP/index.html","805bda0885d8221884e9cdd954795ea7"],["/categories/集锦/Python/index.html","a7d578435d73b54d6b17bb7ef741961d"],["/categories/集锦/index.html","47d739e669649fd0e871dd59459a4c5e"],["/css/first.css","01a90baf99fa8f190becabd973782198"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/style.css","d6b605a251a052e3c03a515d025edd45"],["/friends/index.html","1c087e61372fd565e8dbe3d8fe2a52bd"],["/gallery/index.html","63f4bc7639ebb10460b077618443184f"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/games/tank/index.html","a4a2448b8b53e14bf7bad5c1f71e614a"],["/index.html","897fbae3c8f470d54c148a17c299ba86"],["/js/aplayer.js","a0a8f225cab4df42a6e0164b45d7641a"],["/js/app.js","1948329f2fd7e750ade4bdc49138c09b"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","c0a205347faed3a9488990cf77d1c76d"],["/page/2/index.html","0020c9ce42a250b27c3e603cc22a2258"],["/page/3/index.html","dd4c3c0c8699a2a5f3c834c029d63f95"],["/page/4/index.html","0663af527291b88eab145de3ca336315"],["/page/5/index.html","c69cadd86c22deaf5be12acd00610f5c"],["/page/6/index.html","68bd7d48c495bb813e29502f7db6d2ba"],["/shuoshuo/index.html","5a3a2e2a5c4d786d926cefeccb8d1060"],["/sw-register.js","b9fd94b48d0cf06577d2c185114cc72d"],["/tags/AI/index.html","fe33ac35c1c4e30bcfa4e86db7375ddd"],["/tags/Android/index.html","66e043c0f5fb8a2d4407771800e314ad"],["/tags/C/index.html","76af22cbfc6ca56c9919bc5658df6541"],["/tags/C/page/2/index.html","e5b21584330b8eb1096f84dd9c8a4f31"],["/tags/C99/index.html","5bff596dcca6e5db70f9806a3540309a"],["/tags/CSAPP/index.html","f44bfee9b2a272c2cae60458bc745245"],["/tags/DNN/index.html","cc5b4bacf538e9657b42abda5bad2fd9"],["/tags/DNS/index.html","bde05938fdc1f7af8283ed5cc23324e8"],["/tags/FPGA/index.html","ea266bda96368ef614152c8eb608c83d"],["/tags/HDFS/index.html","87e1c09c929a593655908b96747e5a68"],["/tags/Java/index.html","5c1aab524b69bade39e7606995e2f8d3"],["/tags/JobShop/index.html","3dc2a7b2a7e67c910d0f14fb22112023"],["/tags/K-Means/index.html","46dd7e67b4fcbd06f88e99494036a032"],["/tags/Kafka/index.html","a3220c25aaf6ad947cc473996b35766b"],["/tags/LL1/index.html","80ae623676d92a9c5913c4f31807c533"],["/tags/LR/index.html","166d13f61462f624877f7d85957ec844"],["/tags/Linux/index.html","2cda4098e0f18f1478a08382d224a68d"],["/tags/MIPS/index.html","5231ba9ba5c59941410ffec55f8c5453"],["/tags/MOOC/index.html","17a93e69c218114dad992767d1cd7b54"],["/tags/MPLS/index.html","e5b8a4db087cb8e8a627137971ce4643"],["/tags/MapReduce/index.html","88f9136c40b556a5e7bea00ea3512191"],["/tags/Matplotlib/index.html","1cd03d19bed1b8f8171a48392739e9f5"],["/tags/MiniSYS/index.html","434a7f95be2d67bd3be67387227ed320"],["/tags/Python/index.html","b5ead63a368ed543efab4d6db508b51d"],["/tags/QT/index.html","ad6f3b09c8d32c89cc1d54caaf6cb68b"],["/tags/RNN/index.html","d3c40a30eac3566e73ea94262560da58"],["/tags/SIP/index.html","a1b0bb43247445c56ad72992851f1588"],["/tags/Scala/index.html","f18356037f837ab8892ec620e40901e5"],["/tags/Shell/index.html","85f9f99776e8e6e2354059757b679f3b"],["/tags/Spark/index.html","bd0e8629d4b35e2d1b640429535e1251"],["/tags/Streaming/index.html","8f33138a1dd49ea94d2ea4264fb84abe"],["/tags/Struct/index.html","0383d0759f4ea32aaca469c2e6bba6ae"],["/tags/Verilog/index.html","658a72accf336ad919ad98f9372498ba"],["/tags/first/index.html","73c56965afcfe2e995806067fd85857a"],["/tags/iPython/index.html","2bec85dc36e97d7eb2c2d672e4c0d6e2"],["/tags/index.html","1a40c68f1c7d9fc5b44b3df05a24396a"],["/tags/ls/index.html","f2b7b0519ad31ad5d88e38bc5fb7bd27"],["/tags/习题/index.html","e799ee648de2eda0048816dcb4a73c5e"],["/tags/交换原理/index.html","a85ffe931aebc880beaed9ef933e8928"],["/tags/人工智能/index.html","9c2ebf3b9611c80200df5358dd6083e7"],["/tags/信号量/index.html","554c96fe4ff7864e76c3b971dec7666d"],["/tags/内存管理/index.html","2471c4374428d32952c55015a3d06ed5"],["/tags/决策树/index.html","64209bede6842be895a4e2adee0427ab"],["/tags/分治/index.html","afa13b3e4b696534f279004df67896fe"],["/tags/分类/index.html","c2352332661df234152c7309919962fb"],["/tags/动态规划/index.html","2e346822606291106e8c6256d6134e91"],["/tags/华为云/index.html","58b91ef8dbe389f6725fe91a9ac81df1"],["/tags/单词计数/index.html","d856a78c0f0b76f9bd84c2d48b207fb7"],["/tags/可视化/index.html","497c0e3dcb1a30edff7b2f73fa91ba21"],["/tags/同步互斥/index.html","d2da6c2f86da85d99d8a3dac7ced696f"],["/tags/大数据/index.html","77107d4fe60287ab4daf05752307798b"],["/tags/学堂在线/index.html","9dac828bf6afe563f2436647b552c80b"],["/tags/实战/index.html","56054d164a63fde98b89d02834ae98e3"],["/tags/实验/index.html","1eb6a862fa595fd7350e443d22d535f5"],["/tags/实验/page/2/index.html","9e186f069beb64eb5d24667ca4d9c662"],["/tags/小游戏/index.html","83ba197e691726b60f692f14a13bf12d"],["/tags/工程/index.html","85b6942a93242b741939624010d9f619"],["/tags/工程/page/2/index.html","1117034284bb87f9d1b0b63dbdf4d6e9"],["/tags/手写识别/index.html","62fa6cc170c38e94e9d7dc13858763f3"],["/tags/拓展/index.html","5884693af3130cf5a7794b7546da05ce"],["/tags/操作系统/index.html","51ae4a4656bdb341b418aafd7c7287f6"],["/tags/数据处理/index.html","a1693892447992f059983f316e00275f"],["/tags/日志分析/index.html","e259c3528c00e39922bbccae17947b8a"],["/tags/易错点/index.html","a08ff2a17f75ced20a4511531ee7efce"],["/tags/机器学习/index.html","a995a5297902ec4eb0befde1ab079750"],["/tags/条件熵/index.html","b1bbc0615f84cee3f3e9fb6bd9756a2a"],["/tags/正则表达式/index.html","a06f99c3e7415fa912f56eb59ec407b5"],["/tags/汇编/index.html","16f377f3a6573088410bea24013cc1a2"],["/tags/流计算/index.html","cb20b3d7e6091ba82994c76f0762941b"],["/tags/爬虫/index.html","1f24cff71c9ca7b38f66438a048b7a0f"],["/tags/现代交换原理/index.html","daddd3903d1c5aece0f89921e8ebdfff"],["/tags/生产者消费者/index.html","b9205c4aaccfea9dd0709221ad69ba77"],["/tags/知识/index.html","9ca79cff0607c37b584ad92a0a1ed5ab"],["/tags/算法设计/index.html","235963d2534146edb0417078647cbb28"],["/tags/线程/index.html","0eae0b726b9f2343aba561a024ccc5f1"],["/tags/编译原理/index.html","bb7584533d59844873afcda234fe111b"],["/tags/网课/index.html","eac38ae2d16d880972ed50ecf1259c74"],["/tags/聚类/index.html","12e2cf05daa41a8b2ba08932744882e8"],["/tags/脚本/index.html","f66dcbbcec5f9207bde010c2bad7c563"],["/tags/计算机系统结构/index.html","064edebe1091e5fc7151c58dc4fdbace"],["/tags/计算机组成原理/index.html","9c53d4242cd60f2deea8b36f9e9c3c96"],["/tags/计算机网络/index.html","9695855e5eedc81586f88c97f94fdfd9"],["/tags/词法分析/index.html","2e370623081de51d36c3ee218b82b6bb"],["/tags/语法分析/index.html","67e7fa744bfe1729fc07ed1338a3b8d2"],["/tags/读者写者/index.html","d6f438beb8d39ac219f72c70719e7040"],["/tags/课程/index.html","c53805c78277dee357141e38cb7a5119"],["/tags/起名字/index.html","56eece4d9535c1238139b53928a93d3e"],["/tags/软件工程/index.html","c90be67e1ddcaf06acf8cfeb61803cb7"],["/tags/进程/index.html","a5851e48ec887a7b4c365b1d8f1a52a7"],["/tags/通信/index.html","92ad9768b47e4f10fedf8052df1db0ea"],["/tags/遍历目录/index.html","76a6a976662f353932dc6b877e340575"],["/tags/难点/index.html","cbf5f9b4b8ac1abda32200154e8f3e93"],["/tags/项目/index.html","b06799e61b4c9a2e388c390f653782d3"]];
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
