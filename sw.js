/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","0db829c0db6f49d1dd6ffe7dcd8897ce"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","cfa2ccb0cf07f2a1e6e9a71a02c0c0ab"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","1a813c84d7a7b19c07697e0857260dfb"],["/2020/03/26/计算机系统结构-实验1和2-遇到的问题/index.html","2b90f47b7427de3c7b60ff132162808c"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","cfb21c0adb1705aac794fdf8edf594bb"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","83c8057646f248dfdeb47550b6167ce4"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","08e45fec317134b196268a047673760c"],["/2020/04/18/机器学习-知识拓展-条件熵/index.html","5eea917ab82f9e7ecf965e172044e9b9"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","56d3c68045d88bd5c6efe6facf51fe5e"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","4ee06888c9d577f11bb8e8bf17d9140b"],["/2020/04/26/机器学习-实验-决策树/index.html","942fce97906839ba16c8a0714b995390"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","590e89e8163510147d57958781599216"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","0fbf39564d9ab4311d3ed886894481ad"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","c2b8a49b21e992d72567632beb780bbd"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","b2ac66c962b2814ee92076a2c52290bb"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","a419701faf7af0b862206f43ccf75ac5"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","5ff44dc983bb41d59ea07b9991b0819d"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","3ef439407d7e3de124b30f410f506d62"],["/2020/06/11/机器学习-实验-DNN-手写识别/index.html","cdd591533e73ea9f2fc04e43ff0d29d3"],["/2020/06/18/大数据-习题/index.html","fb530c2295b9eeda2e5bfa716487bd87"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","bd2194973a4298d12e806fc6e3ef2dc0"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","5210c5150569aa9ac00bdb2da12d56a8"],["/2020/06/24/Linux-拓展学习/index.html","20f261890e05d0881014f33d06f01c78"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","efe7f7a0c0a53631e5808d0f0d6f5e26"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","4e398ee798aa8dfa6aadd8406503e2cb"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","1de7e50e7a4f4a5df326c44cfad61fdc"],["/2020/07/15/C和C++的struct使用总结/index.html","c32890e9217dd180a2335b6787514209"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","0118cc00242dec0a3fbbb60885721d2b"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","df41bc0f0e0d81b8472195e757b7734b"],["/2020/08/10/机器学习-实验-花卉识别/index.html","46de85bdfd8844e820085c1c9fd0ba82"],["/2020/08/15/Python-项目集锦/index.html","f8ab6e57420e689f33dcb3e1a6c94d7a"],["/2020/09/01/编译原理-词法分析/index.html","c3e9bd36977a5bb2dbbdefdddd90f9ea"],["/2020/09/02/编译原理-语法分析-LL1/index.html","f0c1fd716f8bfcd540603be93343aec2"],["/2020/09/02/编译原理-语法分析-LR/index.html","8ad5c76060dc67204536705e078f1343"],["/2020/09/03/操作系统-内存管理/index.html","489ee990cf15dae1dc0573309af2c62f"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","1e20e5d1febddccba81a3cd7082a26fe"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","1d567e5c427da3bd3f05f66b92e01b2e"],["/2020/09/04/CSAPP-实验集锦/index.html","78529e5494d0c80203d72ac24d7436e2"],["/2020/09/10/计算机网络-实验集锦/index.html","3f0a0c9e13755ae5d70d085ac4a90e78"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","cf73fc858383ad622dfe7afec949244d"],["/2020/09/30/C++工程项目-JobShop/index.html","a39f7abb54f3906bfa7cf8715025b103"],["/2020/10/09/交换原理-实验1-时间表调度实验/index.html","4c57e102a98e7d1c2dd33e3c35499e6a"],["/2020/10/09/交换原理-实验2-摘挂机检测实验/index.html","76ba769b1f55ec509d31e6287db5cbad"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","13d3fe9391caa3219f9837c512dee43e"],["/2020/10/09/交换原理-实验4-拨打SIP电话/index.html","c938167b243b0237723193462289a715"],["/2021/01/04/Android-项目集锦/index.html","c67c2534b11895dcd586c761da42c77e"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","26056d14dde29268571bf7b3958aa9f5"],["/2021/01/04/C++工程项目-travel/index.html","fee06bca81976abfe6aecd3d1a9f6e7a"],["/2021/01/04/算法设计-分治-最接近点对/index.html","d76328f6e8246306623e5ef5764e113e"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","c696b8d3509db5669603782f65ca1fb7"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","1aee460acb6e75d7e582811c125b650c"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","6705f01cbfce0ffa9e8285accf1550ec"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","c6b67fde65ef87cd33bab654461a1a8c"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","e1ab80abb4f3183e4262e53f452d3050"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","868bf60d51b2f6279b4b64eb100492ab"],["/404.html","d3e6723ae1d31ac4e97fe3184a94fc80"],["/about/index.html","a55ac9d9c185e0827fa01cc2d5e6b475"],["/archives/2020/02/index.html","8be63ae8b9e52085f4098714783e1243"],["/archives/2020/03/index.html","26ce6c244ff454c75be788d3f4425ed1"],["/archives/2020/04/index.html","7e3df53c867f35a07b6c087249b8c897"],["/archives/2020/05/index.html","d7bfdd3c34fbdebc29c4288d6368f3c3"],["/archives/2020/06/index.html","36c5a3bcb403c5ca0f5b86145eeba263"],["/archives/2020/07/index.html","33edd57b6ef18769038ecfd9179725a5"],["/archives/2020/08/index.html","8276951cc94a2aeeb08efbd909ec57c8"],["/archives/2020/09/index.html","ff8aac422b5d978c95b9ba17420f26da"],["/archives/2020/10/index.html","5464c499308433e817272b72c538b99b"],["/archives/2020/index.html","b7e5e97b9c51eed4a0473d0403e8ad1e"],["/archives/2020/page/2/index.html","03706212964cffbabca82fd020cce5a6"],["/archives/2020/page/3/index.html","76250fcf431f4255d05faae7ef626945"],["/archives/2020/page/4/index.html","9c30bdf2e1116c8cd7d0ce93ff34019a"],["/archives/2020/page/5/index.html","1479c026d973fddd444c7bf4f4157aee"],["/archives/2021/01/index.html","98669a05544b556b69d49a23c8c97f6f"],["/archives/2021/index.html","0a9e2db565d723dc1c4bc028695ec781"],["/archives/index.html","7d2015570cff92feccd9643bedf864a7"],["/archives/page/2/index.html","7d2015570cff92feccd9643bedf864a7"],["/archives/page/3/index.html","7d2015570cff92feccd9643bedf864a7"],["/archives/page/4/index.html","7d2015570cff92feccd9643bedf864a7"],["/archives/page/5/index.html","7d2015570cff92feccd9643bedf864a7"],["/archives/page/6/index.html","7d2015570cff92feccd9643bedf864a7"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/bb/index.html","f006675a691b10b0138dfd6c68ea15ef"],["/categories/C-C/index.html","109b369e314159afcab0121fec035160"],["/categories/C-C/page/2/index.html","c315d0554808ec67e773e794acc6f4cd"],["/categories/C-C/拓展学习/index.html","6a8f37cd154a8cbc038ed8e4bcb011bc"],["/categories/C-C/操作系统/index.html","51dd82ac97013adde5f9471e04022502"],["/categories/C-C/算法设计/index.html","985c81d9361c0a51d799424ff785f1a5"],["/categories/C-C/编译原理/index.html","bb0ebb67e56e57f09220b6281b22cf03"],["/categories/C-C/软件工程/index.html","6efd900a210d79b45afe448af677d0ba"],["/categories/C-C/项目/index.html","173c4ef836391b27f7d25dd19e44aef9"],["/categories/Java/Android项目/index.html","9397fd226ac98a6379baedb857d990a0"],["/categories/Java/index.html","386c9559d9819f934a037c7301c1aea8"],["/categories/Linux/index.html","a162df4d07e8faadd063a685dcbfc3cd"],["/categories/Linux/上机实战/index.html","f0a040a51409228f70b215c31434af83"],["/categories/Linux/习题/index.html","b5c730d8cb6902c99950376db44de7e1"],["/categories/Linux/拓展学习/index.html","018f91fa94ed05f83ffa97f6f2c18bdc"],["/categories/Python/index.html","fe26a2894ccff647bb35913500211c4a"],["/categories/Python/爬虫/index.html","b102256979e18cf90b02807216d309bb"],["/categories/index.html","aa6ab59c33155c733c84f1713ac4f056"],["/categories/交换原理/index.html","9c006d9b1a8588ce5999241f05766ed3"],["/categories/交换原理/实验/index.html","3a4d57ce2ef67abc63489b1d730d4828"],["/categories/其他/index.html","b6b95ece849d92ab6f40963e63c33912"],["/categories/大数据/index.html","7cf581535ecbd340383b8fd438d8615e"],["/categories/大数据/习题/index.html","819769a6d61b3b378b643246501cfb59"],["/categories/大数据/实战/index.html","52c20ce10801d4189fb8b70ce3a77f1e"],["/categories/机器学习/index.html","67fa07c3366bc081c1423c969dd28770"],["/categories/机器学习/实验/index.html","f0cfec187dd386367e6e1dbe77512b93"],["/categories/机器学习/知识拓展/index.html","8d9fd9a3851c72c244ef29ba7fba5057"],["/categories/现代交换原理/index.html","b23acddf19bac7d49bc43c0768d54762"],["/categories/现代交换原理/习题/index.html","c4f643686b291dd697b31566f0af5b98"],["/categories/计算机系统结构/index.html","0b8b37f454a250da18c3bfd433dfeecc"],["/categories/计算机系统结构/实验/index.html","4c277a0aab23e40a60d7b722a7324e22"],["/categories/计算机组成原理/index.html","31643e7e2f366949cafc3e6bc83b052c"],["/categories/计算机组成原理/实验/index.html","7aadb3cb0f70ef93752338432d6fa510"],["/categories/计算机网络/index.html","f06bea8fdf4df0facc4d08f8d96b5e0b"],["/categories/计算机网络/实验/index.html","5f5f5b5d78376fa82e4251440c4fd6c3"],["/categories/集锦/Android/index.html","56ea111352877dcfb0dda28308402efe"],["/categories/集锦/CSAPP/index.html","12bfba21a4ac88a43c91af0e13570d1d"],["/categories/集锦/Python/index.html","9c1eb23153015e44067fe6dc764d8ba6"],["/categories/集锦/index.html","f9bc1bda5e16a2cfd486b719215e7f83"],["/css/first.css","ac2d0010102d22ded3aa536d16e52b73"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/message.css","b0ce3ca232f809c8d7a85c79bf1f7ff8"],["/css/style.css","f33cadc59019a1af1d898b222bf512f6"],["/friends/index.html","205f4717741a8eacfe8bb6331efe85d4"],["/gallery/index.html","63f4bc7639ebb10460b077618443184f"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","ff226071c746a264356feb375a8d3a23"],["/js/aplayer.js","f10ee7aff4ce278045da925ac6510d29"],["/js/app.js","d14976ee97145aa14568c13c6554dcc4"],["/js/jquery.parallax.min.js","38cf4791e24aeaa8101bd2c816400718"],["/js/message.js","38da736cdf513c9a15a0a2a16a34eeae"],["/js/plugins/contributors.js","23ba3efa08d9fb1aae753ceaa6df2711"],["/js/plugins/friends.js","239cf9c648af390f866ed00cead3e23d"],["/js/plugins/sites.js","15bb31fc27abc888b17cc5d822808604"],["/js/rightMenu.js","19b2a577c30a04732f02b86bda62e0b9"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","af4ff091ceb03de06f2db7e754584173"],["/page/2/index.html","ffdb12a4a32bf0f4f8e53f6878e98097"],["/page/3/index.html","6a627f0fba20c999f314656ccfe043eb"],["/page/4/index.html","7fcb2fcf7f26ec85bf806e808a91d0d7"],["/page/5/index.html","01ef82f5a6c9c909c4a551aafe57ec10"],["/page/6/index.html","0c608b2f6975df92b591e9efe5e07191"],["/shuoshuo/index.html","521b603ac7d96f50083b56405d3a09cb"],["/sw-register.js","591f6fed7249caa7ee67ac6a9854537d"],["/tags/AI/index.html","ddb85ddaea27ecdebbd62ee38c480122"],["/tags/Android/index.html","8a25d9b171ff50254e743fc95b5c0b8c"],["/tags/C/index.html","fcf42b2b08119e1125a46f5200427407"],["/tags/C/page/2/index.html","9a1cedca260956e57dafd8a0f6178234"],["/tags/C99/index.html","b228de93cea0d6cae7c8bb0be4c3e195"],["/tags/CSAPP/index.html","62b016a7d2b61cc9e4c7790b0b7becf3"],["/tags/DNN/index.html","926a3d7eb701cd4458e287db24e48fcf"],["/tags/DNS/index.html","0fd7e4604208e84aa4ba90f10c9b81a0"],["/tags/FPGA/index.html","0b12901c4d2718c29ed2ef38d150c499"],["/tags/HDFS/index.html","1f811cdce5d750cbf1009318c722c649"],["/tags/Java/index.html","12ce85279b6937891eccf46eef71aebf"],["/tags/JobShop/index.html","7d69ce269bafee2615072e6888021ef0"],["/tags/K-Means/index.html","80c7c454dc96587b3ef58bbe4b3808e1"],["/tags/Kafka/index.html","f2e6e0d058f1018deca8e61f41c0c8f7"],["/tags/LL1/index.html","0859dd11d13c5b62081c1d379543e0e8"],["/tags/LR/index.html","92660304ae09283503a1ce0f40d6577e"],["/tags/Linux/index.html","8f72a89b23c9de95a84910ccd71a4251"],["/tags/MIPS/index.html","a2d5696ebace3381b413fc59f37b9582"],["/tags/MOOC/index.html","21722467b1625a5b74cf569120dabca1"],["/tags/MPLS/index.html","021e17c7243edcadd930b0d2167bada6"],["/tags/MapReduce/index.html","c5fe7acf81d8fa01bf6e4bd8379a2037"],["/tags/Matplotlib/index.html","cf1fc217bb7d29e32d9e427d7071ee58"],["/tags/MiniSYS/index.html","8882cdfc755bba8ec8df04109a294075"],["/tags/Python/index.html","c3d231a4b1df2ab4f6ed2ade2ee31e3a"],["/tags/QT/index.html","d635dfa435edcc5844ff6f77c7169f42"],["/tags/RNN/index.html","22609ce29094ef10e9514750b3f444c8"],["/tags/SIP/index.html","ffdc25868137d482e8dfcdb624a032bf"],["/tags/Scala/index.html","683eececa247b256522744090e92b6a5"],["/tags/Shell/index.html","4b21a40a9c6d27f19b99be0b2bf522d4"],["/tags/Spark/index.html","9373f2f42544025736fce8d653152db8"],["/tags/Streaming/index.html","cdbfe8b7fccc5430d30e808ba24e17bf"],["/tags/Struct/index.html","ea5557e7e8cae7bceb0d2e1310948169"],["/tags/Verilog/index.html","54e680998de0312402fa7d37bc960dc3"],["/tags/first/index.html","35de9137488df50578fd6ffed1b860ea"],["/tags/iPython/index.html","2c3de54dec8fc86db1ef2c51b6a25cbf"],["/tags/index.html","75a09d6c1afda150e17f4e7a8af234ac"],["/tags/ls/index.html","95dc6f4385e3e993417cf8ff9c7ef987"],["/tags/习题/index.html","304c0b8c333d67b0c48ffa52647e285b"],["/tags/交换原理/index.html","1d32e3917f678dbe61f946f9fd56b4ef"],["/tags/人工智能/index.html","67ee428bd7b06553cc4bce2de26ca948"],["/tags/信号量/index.html","6c2b907f0443eec41329e2078da3ed6d"],["/tags/内存管理/index.html","7c55b6b6948603cbeea3b9e1bd498d12"],["/tags/决策树/index.html","5c4a437adc9afad775351c8f36189ea0"],["/tags/分治/index.html","0da66305ba27c3590c4d9f41eaacb3de"],["/tags/分类/index.html","5198c3a2a1974096006b20a397ae58ae"],["/tags/动态规划/index.html","86f4bfec7339e40490ba7f26ccaa0d50"],["/tags/华为云/index.html","5cf8599d0498cd6932eda94d0cdefdc5"],["/tags/单词计数/index.html","13a6e31a868e354d0ba2f6e1da358c98"],["/tags/可视化/index.html","f908d5de2ac09112c8c3cb6c43f5a56d"],["/tags/同步互斥/index.html","15f67bfccb01de7f31f48ab2b9e3935b"],["/tags/大数据/index.html","cbab7a762367f5fd1f85e7609d575052"],["/tags/学堂在线/index.html","ed8ac988374e437faeb98a9c43e7027b"],["/tags/实战/index.html","59abe3ab2fdfa968a1865c905e8f67fa"],["/tags/实验/index.html","bd67a0183f3980eb89aea308b0789207"],["/tags/实验/page/2/index.html","caaf9fdca5db5853c341d24975e0027e"],["/tags/小游戏/index.html","83ac182dddfb491473d28620680af153"],["/tags/工程/index.html","36b2f1f9838c1fe61657a08d3a443438"],["/tags/工程/page/2/index.html","f36985de7d2cc275638fd63e1a815aab"],["/tags/手写识别/index.html","b019134c934794547c01407255a0c520"],["/tags/拓展/index.html","1de505223a5812debe22149c49ca1062"],["/tags/操作系统/index.html","8611ed89a794e0d7e7a7abbf7cb544f6"],["/tags/数据处理/index.html","de1234417bed2413eee78ba408dbb461"],["/tags/日志分析/index.html","d9ba0a125a3448229555db9bc3bb0621"],["/tags/易错点/index.html","a07a9a721dc618b40194648f9946c931"],["/tags/机器学习/index.html","4c17a65a73170bfcf1a394da59c0279a"],["/tags/条件熵/index.html","3dbb297bfd1c86e9ac7a0adde3194af6"],["/tags/正则表达式/index.html","336d9400798bf13a2234b6a6e87df440"],["/tags/汇编/index.html","f199fbe6039b4c185b1b96152ab9181f"],["/tags/流计算/index.html","ec9e935b75d22eafb186372e7d024ed3"],["/tags/爬虫/index.html","606192ae88ee6b244945e26535f8e42e"],["/tags/现代交换原理/index.html","6785831087a763adb068804a5574868d"],["/tags/生产者消费者/index.html","c0f08e9fd73dc68778e39151cd84eb24"],["/tags/知识/index.html","4ab0b366a0050d7821a6a9c7b9092e9e"],["/tags/算法设计/index.html","1115229c0ad2253b79d4af83337a3c8c"],["/tags/线程/index.html","97f6101d8492b611320aefb6b2239f9a"],["/tags/编译原理/index.html","ea17237d89925404df39602efe635b90"],["/tags/网课/index.html","cec634f5ed4f665c6c017faae56138b8"],["/tags/聚类/index.html","c3e594ce48ac87672960820f9f05bad3"],["/tags/脚本/index.html","d48aeebd5f97ba7f0615fa798e8f4a6c"],["/tags/计算机系统结构/index.html","a8bc71b0a7ef6dbe3644115a7f75e29c"],["/tags/计算机组成原理/index.html","6e669c8e15e9f8c6db9a33ca9810dc9d"],["/tags/计算机网络/index.html","0e7c0edbd42d9f810fdf8d18ea6e6f13"],["/tags/词法分析/index.html","12ca4a3f5ccf8e8daeb9be2819a626d5"],["/tags/语法分析/index.html","bfa93cfdbd5852d7d7629b7bf89875f8"],["/tags/读者写者/index.html","0e3bf6439adfaf3c577963fb11e7c571"],["/tags/课程/index.html","26cc529880796480ea28a855ab95553a"],["/tags/起名字/index.html","99884c9292e385fd89be113a21cfecc4"],["/tags/软件工程/index.html","a96990670afcc4d7e3f44114a2ffcb46"],["/tags/进程/index.html","b9bdb67fd481ec5b05c1c04b861fc84e"],["/tags/通信/index.html","711eb9bb576dfa983bb6ed8a50252dfe"],["/tags/遍历目录/index.html","a99667d9d49399805549be2f04c958f4"],["/tags/难点/index.html","2e0f81b141057ed04c8d8624508104f7"],["/tags/项目/index.html","9529b96f4f190eddccdb45452d2b2cdd"]];
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
