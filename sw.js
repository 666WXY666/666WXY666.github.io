/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","cb2102d9dcb3742d3fd1ef79a65f625e"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","79cb5d04c0fa936d5fd6c3bf47852945"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","2586189e13522a6c22f35696efaef7b8"],["/2020/03/26/计算机系统结构-实验1&2-遇到的问题/index.html","9abc1f60f33b004599fce4cbd194ff28"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","5db0bad5a6f5dced1e3965f88b0f103e"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","76d09a8ee6663d4fb4cd2ee199df86b6"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","ffe427b9fdbf5d40290f2f204e938de0"],["/2020/04/18/机器学习-知识拓展-条件熵/index.html","e3e61134768c15865e54dd5c43041b32"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","959adb819da14e8aa559e44f24ae0dc9"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","bcccd8de0340133f99af722614f44fc2"],["/2020/04/26/机器学习-实验-决策树/index.html","579e962e0e7c7e51627d4dab5b83c8b5"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","009e1c7bb71371270b02229e58c03cd9"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","5e420b867338e328920affd6c0f9dd22"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","bb1c3c8b4a721d7c9922ed532e363eb7"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","7d5d7172232ea50e46948bde97798df6"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","55a3604270f83c1395ef2deac5de999c"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","e2198b7e5ea08dc200b9192fb44f99f1"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","ce389b94b9956ac647e7ba66708e255c"],["/2020/06/11/机器学习-实验-DNN-手写识别/index.html","8e2c3e67e2a79f31db539aac2515beb7"],["/2020/06/18/大数据-习题/index.html","1c737a4199ed7b4d496d4abce6cde83a"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","4b67b71ed9270536941ad6bbb5832237"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","972e7bcb5850c89a83d3f1b42ec1710c"],["/2020/06/24/Linux-拓展学习/index.html","6a02476bb3d234d9a43f62f6c3fee8a2"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","a468839dd12b72bd02dddebbe38fbf2c"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","5df1d588fa25660de53ed35835dfebe1"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","680ade77c999e2174466dcf6246adb9d"],["/2020/07/15/C和C++的struct使用总结/index.html","f3e876bad618b25a044f725f8fd40cc2"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","0c4181e719a373de02611badbcba7e18"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","a53870be522745cef4193f0b542380c8"],["/2020/08/10/机器学习-实验-花卉识别/index.html","c1a01ebd0aef1e5ebf3cae0b554504b2"],["/2020/08/15/Python-项目集锦/index.html","833e20b36908f264294664393798f517"],["/2020/09/01/编译原理-词法分析/index.html","8fcefd03f7a343feb1e453cebfeb6698"],["/2020/09/02/编译原理-语法分析-LL1/index.html","c38b7870792b3a9aa6834edc100e1345"],["/2020/09/02/编译原理-语法分析-LR/index.html","7f845a67a0704967a5cf95b905006d56"],["/2020/09/03/操作系统-内存管理/index.html","2037f85b27d092a7df71fe8d0beb95f1"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","73ed297e93268dc6834cfecac553ec9b"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","f3d67a9d2ffe4bde397a5abc86cab150"],["/2020/09/04/CSAPP-实验集锦/index.html","4ddc77a5799ceecf8b61a828f207485d"],["/2020/09/10/计算机网络-实验集锦/index.html","bebcbff55a90ba64252727e4ff26ee7b"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","eb921d5239f30d5224b71eb3ca5a8703"],["/2020/09/30/C++工程项目-JobShop/index.html","0ab03d87ef1a405983480248ca43e389"],["/2020/10/09/交换原理-实验1-时间表调度实验/index.html","8d186f797fac3a3d3d655e15e68b81f5"],["/2020/10/09/交换原理-实验2-摘挂机检测实验/index.html","acad7e203c8150f6acba1ae9deb31305"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","37e99b982a899425082db0ae5f5d7cda"],["/2020/10/09/交换原理-实验4-拨打SIP电话/index.html","ba702a18cfb73bd713834dea85e8784e"],["/2021/01/04/Android-项目集锦/index.html","fdb51fe05ab06208c6a4945016e9b964"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","18ba1c54b4081e013a13f06d035c85ed"],["/2021/01/04/C++工程项目-travel/index.html","4332f8d5d66ca6da18aa891a64e08682"],["/2021/01/04/算法设计-分治-最接近点对/index.html","6939b4c2f867df314bed445ee3fc7309"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","cf5df2bcbb686661025916c3a50dbe80"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","890b412a59d1b79224301f839a0468f6"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","cb1eb418ccd40fbc4fa3cfcadc50e096"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","35d93f6e5431c4e5ed9de60454a4fac1"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","dac81294438104aa992e4debdb29b04d"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","d313ae378c6494c68f5d94ace235bd98"],["/404.html","df69fec5ced7d25ab4edc3f62330d153"],["/about/index.html","4987fcba49c1056997134e68f18251f0"],["/archives/2020/02/index.html","3ec8f5d206eba8a68b7c49c456b8e3dc"],["/archives/2020/03/index.html","d11ea5f9a92df63cacf36163c445ce41"],["/archives/2020/04/index.html","872b05cb41a3d2c59c72458a0e3d4206"],["/archives/2020/05/index.html","c3da5f05a37c2390db5ac84a8865f2f0"],["/archives/2020/06/index.html","37fe9e0806ae7e434c561e99a31e6ce9"],["/archives/2020/07/index.html","1aff273d2b789b7af9ea58f93df2f03f"],["/archives/2020/08/index.html","6ec656dddf3e6560a1365d4ed90b5525"],["/archives/2020/09/index.html","ab5fb37ab0582914da21d194913ea4d1"],["/archives/2020/10/index.html","a3b8d09de927423620253ccfc74f0d5f"],["/archives/2020/index.html","e34dce295b3787cf6e9b3cac0aa4679f"],["/archives/2020/page/2/index.html","a28b3c5a438ace0bd853a3ffb2be7dc5"],["/archives/2020/page/3/index.html","aa9f8cb1a1af9e50fa7a5a2f3201ff0e"],["/archives/2020/page/4/index.html","aa1c8f7e1dd3b702376f765e14fd18db"],["/archives/2020/page/5/index.html","73e19c51aa006cadd5c3a5e6c4606a19"],["/archives/2021/01/index.html","89ee2b30406adaef1f23084d04d4d2c7"],["/archives/2021/index.html","c4bba32e20cbacd67c57e6eedd08e6d9"],["/archives/index.html","c6a7009a0f15f6e59866487c799f97ee"],["/archives/page/2/index.html","c6a7009a0f15f6e59866487c799f97ee"],["/archives/page/3/index.html","c6a7009a0f15f6e59866487c799f97ee"],["/archives/page/4/index.html","c6a7009a0f15f6e59866487c799f97ee"],["/archives/page/5/index.html","c6a7009a0f15f6e59866487c799f97ee"],["/archives/page/6/index.html","bc6290362fbd2a352f23b6a21d2a7b0d"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/categories/C-C/index.html","676d77ab0d0f473d2a9533a11130f322"],["/categories/C-C/page/2/index.html","f441bd429cca0ff5067df0e9fbf91a15"],["/categories/C-C/拓展学习/index.html","7d1f31dc56aef9f62fee5573913a0b09"],["/categories/C-C/操作系统/index.html","3e588e050616d382c13991a4afe96ef5"],["/categories/C-C/算法设计/index.html","015b78ffb7f687a06a94001818b87048"],["/categories/C-C/编译原理/index.html","80d963b29bb91ee5c43ab4fbe3f3d0de"],["/categories/C-C/软件工程/index.html","5f9586f01106a4a4a51e41e4dae332a9"],["/categories/C-C/项目/index.html","be579751f902ecbdc526613c24bd6e95"],["/categories/Java/Android项目/index.html","0e3ffc0fa58fd1122f3f6b8bddff847a"],["/categories/Java/index.html","661c7795fcdef368c40d003af6881ac2"],["/categories/Linux/index.html","58498637de18134114aaa0992af61ff6"],["/categories/Linux/上机实战/index.html","fb8b4f924a3c2ef5c1b5290d0e40426b"],["/categories/Linux/习题/index.html","eff0d26ea62771f305f8216bb5212e45"],["/categories/Linux/拓展学习/index.html","6d95551163f0f7f5588d4443aeeea0c0"],["/categories/Python/index.html","47dd25118585bd312aa2336434f9e27b"],["/categories/Python/爬虫/index.html","523b145227d35ebf78849324f3ce3d42"],["/categories/index.html","6163905df1665a7a3cb9644859ccf6b7"],["/categories/交换原理/index.html","31823a00e5688460e485ef6360b06926"],["/categories/交换原理/实验/index.html","fa8f31a6b5b9b799ebb2d3e2c8633eff"],["/categories/其他/index.html","61d40afc124c6aa06f024ceef100d8c5"],["/categories/大数据/index.html","6ea3d8f7a612d33ec501ac8f966bd1db"],["/categories/大数据/习题/index.html","1b8d5146cbad3acd7bd324576641e2e4"],["/categories/大数据/实战/index.html","262d456a38700920284c2680395d0f20"],["/categories/机器学习/index.html","2378fe340af4344f4021c7bd2ccc6bdb"],["/categories/机器学习/实验/index.html","e7c408dec35977e288efa778825a100b"],["/categories/机器学习/知识拓展/index.html","df8a3d130915f8822e7c470cd880de46"],["/categories/现代交换原理/index.html","9f8e06180c693e3c6d44b44348d810cf"],["/categories/现代交换原理/习题/index.html","42d52ec3b94bbbaa4abb309ad601addb"],["/categories/计算机系统结构/index.html","6841327ddd5f5279bc09627041742cc8"],["/categories/计算机系统结构/实验/index.html","2a7d484e1af03acc0c79ee574f78cd48"],["/categories/计算机组成原理/index.html","331cfa96f611950a6b10024436ab58ee"],["/categories/计算机组成原理/实验/index.html","f1925c4f142573e2837f3c1f4d3281ff"],["/categories/计算机网络/index.html","93cb78d541d6109ed4f3f884ac70a51e"],["/categories/计算机网络/实验/index.html","7f20bf70aec6e93281dd81e3830a7541"],["/categories/集锦/Android/index.html","93e2f53d19f1c8eceac65b3df143d3c7"],["/categories/集锦/CSAPP/index.html","6312811d7eaf6b4ee5e6f3b5e85efd72"],["/categories/集锦/Python/index.html","3d23d35912c7616935d143a95eb4e7b2"],["/categories/集锦/index.html","6796f2a8288f1030f30ceefb1f2420c9"],["/css/first.css","01a90baf99fa8f190becabd973782198"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/style.css","29bd14d027343cdf06b66cce6bf66453"],["/friends/index.html","c48f0bc984fb878ae83f27a9bc012291"],["/gallery/index.html","63f4bc7639ebb10460b077618443184f"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/games/tank/index.html","a4a2448b8b53e14bf7bad5c1f71e614a"],["/index.html","eedd4e08ffc2ce095a13875029e420ae"],["/js/aplayer.js","6e605f0855251e101d3024646f3eac60"],["/js/app.js","1948329f2fd7e750ade4bdc49138c09b"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","59598fbdf10216491d13d7b2b13eee63"],["/page/2/index.html","961d074355d9de36a65e600aba7d81bd"],["/page/3/index.html","3f790458144f8d8c6246814758fa357b"],["/page/4/index.html","d451b3699c24297e7434b37489a1bb98"],["/page/5/index.html","e3aac86bbd75834bbc34342f2b70c4f7"],["/page/6/index.html","a03b7c6b6069bee78c8a3e0bb344bdba"],["/shuoshuo/index.html","22fbc4e70312cee3852e41ef74e16a84"],["/sw-register.js","12fb5e1793bb99410850657865f722ea"],["/tags/AI/index.html","8d6a0dc282e9a651b014c323cecfba13"],["/tags/Android/index.html","5274cf9c324e0acde2d4d706492c2273"],["/tags/C/index.html","c648dee7c5770f3b4f323baaf781733b"],["/tags/C/page/2/index.html","bac0a3d5a8754b3dd46e8565842d4814"],["/tags/C99/index.html","f2a210b6a0fdfdf4e2256ed861cc566e"],["/tags/CSAPP/index.html","7b8ad5ce562c936b481bd58ec28d71f9"],["/tags/DNN/index.html","2427fba18533f414b2a8f57ba8e29bf9"],["/tags/DNS/index.html","235396ba5620b312fc03b2e03a3b35cd"],["/tags/FPGA/index.html","a26c2e5b37336df4ef5311c37bd9dca9"],["/tags/HDFS/index.html","ada161be671a9135d52e20c7155c1d9a"],["/tags/Java/index.html","c6e3ad57f497f3259cdea095997b6cc1"],["/tags/JobShop/index.html","385c5f2622b21e9d905c4afdcda4eb9d"],["/tags/K-Means/index.html","27ee76c992a03f3cd02cc5901c9aac5a"],["/tags/Kafka/index.html","4a656ef896a10784aba612ce032b07c4"],["/tags/LL1/index.html","06637a04c35449b0f6f39b1776704228"],["/tags/LR/index.html","857c85f377bbc899d06447bf8dd351f6"],["/tags/Linux/index.html","2c97dd98ba423288a3a4533511cdad58"],["/tags/MIPS/index.html","872c4a6e1265e92e2fb899a6a44d1d84"],["/tags/MOOC/index.html","b2fcc5ba33a76ca65253334c1bb9e314"],["/tags/MPLS/index.html","5fd7b483b0408cd23e6dc07d1c870ca8"],["/tags/MapReduce/index.html","b43b524e412ca6879edd9b239b26b814"],["/tags/Matplotlib/index.html","304771ce72f97ffd186f70fe493a64c5"],["/tags/MiniSYS/index.html","62ce039201cac8a27f3844de0c76c736"],["/tags/Python/index.html","357252bdbdc1af401c1f73dd1f5ec0c4"],["/tags/QT/index.html","7adddde92aac9aa897d679025b92c798"],["/tags/RNN/index.html","32f729fd5c582882f59689b4f4da9263"],["/tags/SIP/index.html","2853b68f6d0162083f84bb2288df43d3"],["/tags/Scala/index.html","5664023c5e7b8f7bad2b8969c653938d"],["/tags/Shell/index.html","c79957b7602286df98b23c64ff0de4bf"],["/tags/Spark/index.html","5568335e0b13bb99089b6a1df4a33f00"],["/tags/Streaming/index.html","a0619262fac2a76b1208fb804979a64d"],["/tags/Struct/index.html","5481d1b8746464db7abd365c45a9e4d1"],["/tags/Verilog/index.html","8069577e8444b9e2f993dc0ed4da2338"],["/tags/first/index.html","71d1d3e24ac059ad4c307949b1e408ad"],["/tags/iPython/index.html","f237ad2aabb59a73d33de726ac75476f"],["/tags/index.html","04bedbce57d3cde93c7e8820c0ed7970"],["/tags/ls/index.html","08833ceb93a390774e0d6bb7472ef16e"],["/tags/习题/index.html","f2ce5693cced315356acce544e7bf888"],["/tags/交换原理/index.html","833c5f0e7002010710e17fca4eddb63d"],["/tags/人工智能/index.html","d0bb06c02826711fa455d4204a54fe76"],["/tags/信号量/index.html","6aff919351f8b6136df415ab73d46915"],["/tags/内存管理/index.html","f7fc5173e1a33897842dd427f9207868"],["/tags/决策树/index.html","c3196c68c499b2b48f6d965fc00d31c2"],["/tags/分治/index.html","abeb24ba2ffc19a28a2fbdce7bb7f49d"],["/tags/分类/index.html","1fc532211fb4f487337fcd72414c6a8b"],["/tags/动态规划/index.html","89d9d09d3dd9e12536c6cd3c21a14ec5"],["/tags/华为云/index.html","60b2c27bf7d984fa7d6dada9be74314e"],["/tags/单词计数/index.html","cf5c2fd394131ded0b2d9ed6440f6b97"],["/tags/可视化/index.html","dd96c48367135d5fb00022ab318ebea2"],["/tags/同步互斥/index.html","521f3488f525c88fa4318ba37e237bbe"],["/tags/大数据/index.html","321259c1b2f3196b1d9b57cc879191de"],["/tags/学堂在线/index.html","2591ab5083999621d0d7b77a3de4d417"],["/tags/实战/index.html","37b4b5ed27c61fd37497dadd5bebb1bd"],["/tags/实验/index.html","d68103d0991093cdade2d91321f2d430"],["/tags/实验/page/2/index.html","0af978f91501edffcc60b82cc36eea6d"],["/tags/小游戏/index.html","77a0e983ee415f3dca68a7a5cdf36293"],["/tags/工程/index.html","474566e41b9beb2c2ccca9a25502603f"],["/tags/工程/page/2/index.html","0974057837571127e4c078d5afe2f526"],["/tags/手写识别/index.html","3513a8dddaf9a4851d25d1872cb520ea"],["/tags/拓展/index.html","8e7aa648d507a88ee5e1299b7539853f"],["/tags/操作系统/index.html","d1d3b0cd1a3acb14478513079a0371be"],["/tags/数据处理/index.html","2eca3c2eb5ccb5d0248a82bf63ae38f3"],["/tags/日志分析/index.html","f12bbad68c2386d9b6177bb5fa8b7b44"],["/tags/易错点/index.html","a9db728e1361e7a7546107c64fbc042e"],["/tags/机器学习/index.html","6773160cdfc0321fa8f09db4dd3716e7"],["/tags/条件熵/index.html","3b57965f2ca2605402008453c89d0640"],["/tags/正则表达式/index.html","2e1f44a32bdd1971dd944531c8cfb437"],["/tags/汇编/index.html","d67c1eb15bc9febb8224b2c347a79db6"],["/tags/流计算/index.html","1cdb414f3021ebcf38ed79e8b0e077d1"],["/tags/爬虫/index.html","2927ee6977c271d5a4d364c38225f484"],["/tags/现代交换原理/index.html","d4fa4daa5c5f76f631b59c1b474d1d82"],["/tags/生产者消费者/index.html","55f0f3f98086d85d485847aad203a485"],["/tags/知识/index.html","545d54d0624d919602872ec50d035ddb"],["/tags/算法设计/index.html","87970393227dca4511069b8718c83da5"],["/tags/线程/index.html","32589b2b68eb387f7992d37b8c90f8d4"],["/tags/编译原理/index.html","da22e1b851f378306ae265c62f4118b8"],["/tags/网课/index.html","70bdc844c1ec66492b370f91acccd6a9"],["/tags/聚类/index.html","5ee52487c172d5a3f33777a119c5f183"],["/tags/脚本/index.html","58d7652093cdfa229142f51fba271f03"],["/tags/计算机系统结构/index.html","c21206cea47300c3c2b93bdecbb520c7"],["/tags/计算机组成原理/index.html","3718d5df52d95f68e423c9a3fde52750"],["/tags/计算机网络/index.html","911bcfca392bbcb17079315fc9d079ae"],["/tags/词法分析/index.html","9a2f3f00812a55c2d6c6a31d23020a76"],["/tags/语法分析/index.html","e5aaa9209f5998c13488174d5146465b"],["/tags/读者写者/index.html","9730deff13756685be82e41d5d6f1fbc"],["/tags/课程/index.html","0fde674927817097d7f79f4d385a0785"],["/tags/起名字/index.html","e658b850abed568884232359e177b3e9"],["/tags/软件工程/index.html","a70fca6d7fcae6ac3cee7fe19e96905b"],["/tags/进程/index.html","b33626e59b8662b248bf2cbb5dbf550e"],["/tags/通信/index.html","ee581fdb27ab9af713a7ebfa75130a84"],["/tags/遍历目录/index.html","4427157abcc0fda943af2f3fe77b32ea"],["/tags/难点/index.html","5790f093f0c40581c7a18b7d220ed863"],["/tags/项目/index.html","5fbd8d24bb9078e3bbd51deb0c97e9b5"]];
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
