/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","491913d6b452b63f8c79b7e521f15bfb"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","89eb41f2762457fed130a669490288f4"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","3b864fd0d705dd2f98fefd0e8fea509d"],["/2020/03/26/计算机系统结构-实验1和2-遇到的问题/index.html","cbacd58532b7be1f52ab731a7ab61516"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","22462bee46414314ac4cd12fe9683606"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","92f017adda4e009996e8f9be88c4a4fd"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","1bc3dcc8aec2f376606af4b187dae608"],["/2020/04/18/机器学习-知识拓展-条件熵/index.html","0c2603d8d5a9035ccf379192eb0c1e45"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","0b4cace80a163c53c66718725c904f3e"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","cd37169819af8ed569655d68a927b947"],["/2020/04/26/机器学习-实验-决策树/index.html","f447a1a5fd9d0123160c16e6a97d8aee"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","2a3171787ca92b64da8ae6fb460a0fb5"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","30f2ddc474a8d48500b828613cb7978b"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","93ad4f14baa3b2c37e4de0a7c1b27a30"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","c666cfc2045a151c85cffd818469c601"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","b2aca16d1cf03a6864567536c315b84b"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","94e807e100c9471deac15adfbd8623ee"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","553ce66a93f69ce3268d02d276170c8b"],["/2020/06/11/机器学习-实验-DNN-手写识别/index.html","5e7302d739566dd25bd54d3e507327ab"],["/2020/06/18/大数据-习题/index.html","2fb117d3587fab364fc92679e895150d"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","7997542cfebcaceda78276e2d2df737e"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","7d96420b1504c8657dfe1f34648a3d33"],["/2020/06/24/Linux-拓展学习/index.html","b9d49671a011c57742229ad5ee8ae9b2"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","6dd9de0cf66f77204a750e495b1a1eea"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","cbc480d7f72974c893237dea22490520"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","dedb9e581bf823049cb2340cee69a717"],["/2020/07/15/C和C++的struct使用总结/index.html","e649d52c0120012e927668748c47ce9a"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","ba5400596a2f1ce6ba366f27a328ded7"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","9ce20dd1d409f8d6de28b31135e9efe8"],["/2020/08/10/机器学习-实验-花卉识别/index.html","51243bf14684d48c0f3d671f4aa90005"],["/2020/08/15/Python-项目集锦/index.html","6491d7c01ad71e23788dda09f9a0ec2d"],["/2020/09/01/编译原理-词法分析/index.html","6f74f83db2b05125289d530af3eb8051"],["/2020/09/02/编译原理-语法分析-LL1/index.html","bf2f83e5363402379705d8d2ef47fbf9"],["/2020/09/02/编译原理-语法分析-LR/index.html","58f34d25be4f5f0394cd8c9bcbc9acb1"],["/2020/09/03/操作系统-内存管理/index.html","411ca504ed19ba9e28cc13c65e9750be"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","65570b7d636921174d969b19c2716ebc"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","357953557f22ec2e6b7b6f5d47a8ec88"],["/2020/09/04/CSAPP-实验集锦/index.html","c8aa07838a9bafeee733ceb2bf4ca180"],["/2020/09/10/计算机网络-实验集锦/index.html","c177980f64b92911f78313b225344f5b"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","ac0886a50502bd1154849eb59f812e53"],["/2020/09/30/C++工程项目-JobShop/index.html","17dfe8eabbd87dd8914a5e4da6bb4a08"],["/2020/10/09/交换原理-实验1-时间表调度实验/index.html","e76e522059cfe6c5c6f1456b17082d5a"],["/2020/10/09/交换原理-实验2-摘挂机检测实验/index.html","7c5ea7886b730622da64e0461958e0c4"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","ffb95bcb64d9d5e88fcd0e553021ada8"],["/2020/10/09/交换原理-实验4-拨打SIP电话/index.html","d4553abad3cf98b77ef2d66c348312c3"],["/2021/01/04/Android-项目集锦/index.html","f280ceb25b5b5db1a4ea6cda38fbb5ae"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","177febe10a1ae42229133de9a9278562"],["/2021/01/04/C++工程项目-travel/index.html","c46ac7b44dbd759bb2fd1d1fbaea721c"],["/2021/01/04/算法设计-分治-最接近点对/index.html","c28035cf1e8dee9112047fed28320d89"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","b362f1f15b04c2cf3eb4b19d53d8a75c"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","0f601452af842792c252bc6c98efbe0c"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","b0787fcf31946481959af0a9740369ec"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","8a4158e533b55c7701f4acd8245a9cb5"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","ed9cd5fe3e3af3103b4e599c7f12fa05"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","70785daefa8a17e1d9ebd7298dd5f4b8"],["/404.html","ff61fc3030608f461f649f4182a545c2"],["/about/index.html","142ee8c347f61d6c1a92b87667b259f7"],["/archives/2020/02/index.html","87ba8d361d789134068c60b741d6b6fd"],["/archives/2020/03/index.html","1b9a82caea6d3a5c176fea69be81f4e6"],["/archives/2020/04/index.html","357fc2aee5568887f16401236b227614"],["/archives/2020/05/index.html","1c12c546b0e2725e4ed53d07d6839f83"],["/archives/2020/06/index.html","755820700e0b70c5b3e7d0c904c0eb85"],["/archives/2020/07/index.html","b5f9c809a36c83db8c783c9625805cd0"],["/archives/2020/08/index.html","97edb90ed0a5bb24a95e027dd4e07fb8"],["/archives/2020/09/index.html","6fa916e39e3f276381e55a68cdbfdc51"],["/archives/2020/10/index.html","0ab98d18e82291fe2c3eaed800c306f6"],["/archives/2020/index.html","5444941e90c9d1e0e5fd7d357bdfe8ea"],["/archives/2020/page/2/index.html","2616af7aab8a25ad891ab7f6fd9bb278"],["/archives/2020/page/3/index.html","ecce8438b5943dab174cb28fd51dfbb7"],["/archives/2020/page/4/index.html","dfce6602ec56c39c4b87097f7ec1cc7f"],["/archives/2020/page/5/index.html","3f70843e1894b20d2f7efcab4b31efdd"],["/archives/2021/01/index.html","b56bd9364994817a5a47083244305c4a"],["/archives/2021/index.html","750f6685ca83a23035149330c89e21f8"],["/archives/index.html","20c4374a87e5001dd1aaa72eff250226"],["/archives/page/2/index.html","c32f7a6bd18da2bad415476c88e1ee93"],["/archives/page/3/index.html","c32f7a6bd18da2bad415476c88e1ee93"],["/archives/page/4/index.html","c32f7a6bd18da2bad415476c88e1ee93"],["/archives/page/5/index.html","c32f7a6bd18da2bad415476c88e1ee93"],["/archives/page/6/index.html","c32f7a6bd18da2bad415476c88e1ee93"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/bb/index.html","00de06c3780833af397b3087b759ea5c"],["/categories/C-C/index.html","02a83864fe2ffd45cd34bccbbeafe853"],["/categories/C-C/page/2/index.html","4f05665f192ba8a916b0b2adf8a709a9"],["/categories/C-C/拓展学习/index.html","ccee6b092529a26b606a54fb68425709"],["/categories/C-C/操作系统/index.html","ff8df352d45baf8b4b38c8035970a627"],["/categories/C-C/算法设计/index.html","e3e6e1e008c21a3a581cbdec2b5ea003"],["/categories/C-C/编译原理/index.html","e0c204277d504a9f7deec80aa6f114e2"],["/categories/C-C/软件工程/index.html","e9ed3ace2b73025a2b25468d19adfe61"],["/categories/C-C/项目/index.html","40255778fe78dfc8fa7d67f37c220f60"],["/categories/Java/Android项目/index.html","fb22940024f349f5801fd5b3f0312c2c"],["/categories/Java/index.html","a6d9e23123e664730eb73c6bee8d4d48"],["/categories/Linux/index.html","c009a27498dc92b12254d043f57e922a"],["/categories/Linux/上机实战/index.html","3c8b4201feae42c01bf03d4fd776a3da"],["/categories/Linux/习题/index.html","94d3de7a9d9acc1673aa6c5aafa1810d"],["/categories/Linux/拓展学习/index.html","13d95311f83ff303c9b634942bbd7468"],["/categories/Python/index.html","1c071e995f8d3045b8a5c89192760741"],["/categories/Python/爬虫/index.html","c9bd8d46d4ccfd76d8b7ffea113e05c4"],["/categories/index.html","f57a46c74848ae94c442c94250cfd4c7"],["/categories/交换原理/index.html","c4822e47d9a7cb93bd7a5f705b7985c0"],["/categories/交换原理/实验/index.html","54383b5dbc53e7437ab9b262e44ebda9"],["/categories/其他/index.html","a5d60db38ac6ce1b5d826f6f1144a776"],["/categories/大数据/index.html","427432fcebb96cdc448e9d7366de2543"],["/categories/大数据/习题/index.html","698afba7f37c6b3ad652a626dc6d7547"],["/categories/大数据/实战/index.html","5f3347dcd41377ff6ba8c405b8df2e8f"],["/categories/机器学习/index.html","c54a94b0a41527844ea96a13e9a9e73b"],["/categories/机器学习/实验/index.html","fd2234f77f3feb910cfd5e823f1ebfc1"],["/categories/机器学习/知识拓展/index.html","f619828bbdeaa09be801588804a85699"],["/categories/现代交换原理/index.html","de3e8cdc4c5fe8f06c3f50d036a39245"],["/categories/现代交换原理/习题/index.html","25db105d7b3d03ce03f7bc55ec1f6ca0"],["/categories/计算机系统结构/index.html","43e302ffa700723c19e2f9fd382e5dc7"],["/categories/计算机系统结构/实验/index.html","6e98f9a0f860e69ec189048b2bcdf6fb"],["/categories/计算机组成原理/index.html","5281276e04c19d4da6d41707e3738729"],["/categories/计算机组成原理/实验/index.html","2dc99f6e5419e4f9377b1b74663f8fe4"],["/categories/计算机网络/index.html","b152882759086ec41c4eaf7773a10057"],["/categories/计算机网络/实验/index.html","2b8725d904cd2fd76f32aeba996e1936"],["/categories/集锦/Android/index.html","f2e46fcb0b0b9f4d49a9fa9cf19e9f64"],["/categories/集锦/CSAPP/index.html","9140781c94c5107162940c17966fe01e"],["/categories/集锦/Python/index.html","a7d4cd50e4b9acda2eb4d32199a11c54"],["/categories/集锦/index.html","230e35d6fc90548c371c5aee19988376"],["/css/first.css","ac2d0010102d22ded3aa536d16e52b73"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/message.css","b0ce3ca232f809c8d7a85c79bf1f7ff8"],["/css/style.css","f33cadc59019a1af1d898b222bf512f6"],["/friends/index.html","a3457cae25b3a5c675e72a8838084869"],["/gallery/index.html","63f4bc7639ebb10460b077618443184f"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","b7dbf60354d3fc3c839b4d471da38515"],["/js/aplayer.js","f10ee7aff4ce278045da925ac6510d29"],["/js/app.js","d14976ee97145aa14568c13c6554dcc4"],["/js/jquery.parallax.min.js","38cf4791e24aeaa8101bd2c816400718"],["/js/message.js","38da736cdf513c9a15a0a2a16a34eeae"],["/js/plugins/contributors.js","23ba3efa08d9fb1aae753ceaa6df2711"],["/js/plugins/friends.js","239cf9c648af390f866ed00cead3e23d"],["/js/plugins/sites.js","15bb31fc27abc888b17cc5d822808604"],["/js/rightMenu.js","19b2a577c30a04732f02b86bda62e0b9"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","50ffb031e4684d29a0f283f56a9db2bd"],["/page/2/index.html","1396aa2da7991400c59d9310fd253700"],["/page/3/index.html","335486b783b2d15080c55e4d75185585"],["/page/4/index.html","b7f76561ca1f00675b02c160ab1171e0"],["/page/5/index.html","443660454294941f5c6a60e41da2ffbd"],["/page/6/index.html","82fa5db4d043a6b1bd4e1cb9fbe530b9"],["/shuoshuo/index.html","d17ca71491d7c8e35d6c5da354ede859"],["/sw-register.js","d76010986c729954419129f36d49528e"],["/tags/AI/index.html","6babce533945324d7651fa5706d90ab8"],["/tags/Android/index.html","527be34d9a772904e5858fc6cb4210d1"],["/tags/C/index.html","133f02b80b384ea753e14b3207dbcda7"],["/tags/C/page/2/index.html","e384558a37d783dfdd48d845818635c8"],["/tags/C99/index.html","74adb65b3124e17e7d578f2cf315e011"],["/tags/CSAPP/index.html","f3645f798aec081eb25d6455fa1adae0"],["/tags/DNN/index.html","35923a22cfe5a4d6f75b39c1bdccf776"],["/tags/DNS/index.html","54009ebfa0446e0a9052b06aaf6f8934"],["/tags/FPGA/index.html","1c72e74b13c8b54a4aed10b3964064cf"],["/tags/HDFS/index.html","f1be211514d5314564292b30caafb4ea"],["/tags/Java/index.html","a082ed3b0e9133ce4e45f8130a125394"],["/tags/JobShop/index.html","4d85b21adefd728b0b19b7bcaeeae680"],["/tags/K-Means/index.html","503b66a61eb524df8141488cf0a8332d"],["/tags/Kafka/index.html","b1de0f7a7b91152ba57d5f35ca73c9b9"],["/tags/LL1/index.html","773b94d4bff6e42b050e93a5eecc1c0f"],["/tags/LR/index.html","ff378fe6cb4be26aac4146734f8b4509"],["/tags/Linux/index.html","ff4da8dff007727151a0f74974cbe646"],["/tags/MIPS/index.html","429f34c11fb67f7547e7f1014ed4e89b"],["/tags/MOOC/index.html","7406d2c540002e513599603d18f29b90"],["/tags/MPLS/index.html","9dab880369e047c764675b96829d272a"],["/tags/MapReduce/index.html","a9e93b54943877abf5af0e4928ede3d2"],["/tags/Matplotlib/index.html","561bc3811df130d0a9d66b73b108d2f8"],["/tags/MiniSYS/index.html","35d3a4c30de7c61b85705f976572be90"],["/tags/Python/index.html","0b52b88f31d50b3d9b126096daf8e5a4"],["/tags/QT/index.html","cb60305a3b24323810ce70c7993a3592"],["/tags/RNN/index.html","6fd449330ec1512ea216c9bf9c0201cd"],["/tags/SIP/index.html","c3056bcd88abdbda0d9a6fdda33e561e"],["/tags/Scala/index.html","9b24a6c1678c7573b4470b39f85888fa"],["/tags/Shell/index.html","d454cc0be8cb49744a08fa7ea6b164a7"],["/tags/Spark/index.html","b0bb4bb0f25f89363520139d2e9b0720"],["/tags/Streaming/index.html","23480d217f154408d0d78b2237ac852e"],["/tags/Struct/index.html","a0b42885cd37001fcd91037314f09c0f"],["/tags/Verilog/index.html","97dbc3cebc1ef85b4534acb2c1c13d1b"],["/tags/first/index.html","e47b2324deb069a7007915e7187291a9"],["/tags/iPython/index.html","1037e2bfccc7e564756be68707356138"],["/tags/index.html","eb240437e55ce238ef615b2c9248e1e6"],["/tags/ls/index.html","3c92769115b141124eb21d352aabd149"],["/tags/习题/index.html","b10b7247fd83e93255cce4ce468880d4"],["/tags/交换原理/index.html","d506bcd355295260b8e909bb74c45a01"],["/tags/人工智能/index.html","bf360f5bfdab60377668df20a635aeb0"],["/tags/信号量/index.html","ac59907d5dacc8d41a5fcf61324f7c34"],["/tags/内存管理/index.html","5ef98d04a10171e5128e7c169f358b0f"],["/tags/决策树/index.html","75e1558bede7f43cffac9f0bd579a502"],["/tags/分治/index.html","0c76ed8d07364bd3fd0aa757ca0368ae"],["/tags/分类/index.html","4b07ed34e81e14f6cf7abc3575bccf55"],["/tags/动态规划/index.html","fed72ce3e1599daf277931b4c50e9fbf"],["/tags/华为云/index.html","5acdf69049620e2a0e54480036b48e3d"],["/tags/单词计数/index.html","d94d3507cf1c8e95a91d60c1b7942ece"],["/tags/可视化/index.html","8b521ba610c0c749e7e13400e5ba7e24"],["/tags/同步互斥/index.html","00f6e945a0c8a91818a5765136c3dd51"],["/tags/大数据/index.html","c784f7f37def1ad2764b7dcb257fc8d9"],["/tags/学堂在线/index.html","1a4c4807c62abf6c119ac4e442289b66"],["/tags/实战/index.html","7d415e99f7707b54a4e42204abe66855"],["/tags/实验/index.html","24a0c0c15fd64e0ffe0b74371bb3c62f"],["/tags/实验/page/2/index.html","58ac818e68532d2d0ab013db92838ccc"],["/tags/小游戏/index.html","ae8238ba8dac2236bbfcd5a46a57d775"],["/tags/工程/index.html","d5b89ef7ed73ecfc9014fd1484ff4d0a"],["/tags/工程/page/2/index.html","172e06d815c44ab49a05c35278216eff"],["/tags/手写识别/index.html","385226fed970c5ae5ea760da29655c02"],["/tags/拓展/index.html","e406a4d9910ce3206d8712168b241750"],["/tags/操作系统/index.html","1dfe2e08e6ba4611a3ee45740d7af758"],["/tags/数据处理/index.html","e4a268bb1ab12cfbbfc9932bd556e776"],["/tags/日志分析/index.html","cdac7d78c46c441b1799ab406984d185"],["/tags/易错点/index.html","3ab18a4442e8870918ec586aed9d1f8b"],["/tags/机器学习/index.html","58d0271586e1dc30a75c434e9e13cc38"],["/tags/条件熵/index.html","ccdd1e2afc2aa8c6671d0ab902c3c44b"],["/tags/正则表达式/index.html","83e1bcd428a2ceff71bc2460d97c270c"],["/tags/汇编/index.html","b93b5798735b32bef30292bec9c5d200"],["/tags/流计算/index.html","046c7e235b8e807fd37209a74edff94b"],["/tags/爬虫/index.html","3f7dfa334aafbf1e4dab16bb9accb362"],["/tags/现代交换原理/index.html","56e90dae9cbdc90de086379a92fe812e"],["/tags/生产者消费者/index.html","7adb958e946b3eef17aeb0e8a7cb263b"],["/tags/知识/index.html","506603efe1c0093f6cd9c84b5089896a"],["/tags/算法设计/index.html","9c15debb472d8044633a676e30e11f05"],["/tags/线程/index.html","1b1f689d44a277cd66ab02de88ce0f50"],["/tags/编译原理/index.html","22cc01a1ec360e271364a7db5830b936"],["/tags/网课/index.html","424e65582bcdc6c9000870b0591cbbc7"],["/tags/聚类/index.html","a52e82cccc3bf3c4984ee498407087c9"],["/tags/脚本/index.html","4931ff247205f6897deb25c1e343a1c7"],["/tags/计算机系统结构/index.html","91458cdedf38baecc80fccb1fc8a56c5"],["/tags/计算机组成原理/index.html","eb0842faa307646a52e0e88a9ad38246"],["/tags/计算机网络/index.html","f0e55a8db843050cd33d2cbdabeaf23d"],["/tags/词法分析/index.html","ae8e0bf91f3119a4aaf94df9e97fc41d"],["/tags/语法分析/index.html","a4b18c9ab8cf746982d56df23e27c0c7"],["/tags/读者写者/index.html","daa591c17779fb3f7f8eac18604c1c78"],["/tags/课程/index.html","b1681a0762752df5ce1ac2e87aca2366"],["/tags/起名字/index.html","85f63dbe6066bab5098da72ad4578e22"],["/tags/软件工程/index.html","d8b919bce70f648b94837045bab5327a"],["/tags/进程/index.html","3274ace004ec45544f128c80c7da84ab"],["/tags/通信/index.html","88232e20adddb113b909423370010acf"],["/tags/遍历目录/index.html","6f2d735d66d9e4534772185152681bf6"],["/tags/难点/index.html","e983dc4a0b25c1c43096f154037a9d94"],["/tags/项目/index.html","8e1068ffc9b495f5fbb73244a1e1b496"]];
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
