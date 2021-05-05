/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","80c49eeec8f43592cdb370b54df430db"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","cb30ff114e0503c8025f20428eb8dffd"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","4f19d16457bb96e410a3a65326458215"],["/2020/03/26/计算机系统结构-实验1和2-遇到的问题/index.html","39c7b61ca0ed003f812cc62711f9504c"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","828b327224078717dd267e6eb0eca639"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","783825bd00b95e6de74de681dffb925c"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","80040a02a90099bb1df83cc3b050b9f6"],["/2020/04/18/机器学习-知识拓展-条件熵/index.html","13265c6cd2c1fb51f0d9ff2b9a5116c5"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","df94a65de62edc43ccd84f563eaa6ec3"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","63ef7605322e43d53ad49cfff8fb302b"],["/2020/04/26/机器学习-实验-决策树/index.html","a57cea69c31ad1c537826f441a337fc1"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","cb3e08d2bbe85cc261a5f0207f7fdd51"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","7dff9c57cf6cd203bb8a75454bcb5c3e"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","08736e1e1b90d4fbf7c8574b326e195e"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","5e4b565a9c685891594750745414776e"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","98ed2c03bda03fca0cf68dfd9d28d639"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","cc6dc10c0199ec219403a3371637859a"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","99b01a5f16b4376d72cbc1aa0ce0c1a9"],["/2020/06/11/机器学习-实验-DNN-手写识别/index.html","49e320ff12bb460bf7fa6d721695fd4c"],["/2020/06/18/大数据-习题/index.html","6b55b4c25c3ef4dbc91adab39e225896"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","d1ebb5d7f5ace1228c75ff183442002c"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","35270936c650edfbb78ae7d9954c09c5"],["/2020/06/24/Linux-拓展学习/index.html","750062cb975057ae2a469e5b8597c384"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","e687ae528d573e9da1e53d3adccb5b1a"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","6c1756e1a948e2d3cf887440df7ac1da"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","67e4f46c24f13b61d6073636fbad444a"],["/2020/07/15/C和C++的struct使用总结/index.html","130cd9f6311ecdc040dad63ad511753d"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","7446c49872d1b9eba573b61126cc66f3"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","7889944d16f1f38a3451374b5f08463a"],["/2020/08/10/机器学习-实验-花卉识别/index.html","08cb57c0d7cc28bf9d9a2c99dcdd67b5"],["/2020/08/15/Python-项目集锦/index.html","c535732daf77364e8eec04e7ce06dbcb"],["/2020/09/01/编译原理-词法分析/index.html","d59dede14f5b711dae9055e77950eb26"],["/2020/09/02/编译原理-语法分析-LL1/index.html","7b59c913b6dc25069d85b4a0512ab887"],["/2020/09/02/编译原理-语法分析-LR/index.html","edb896be6fa59ccc526957e99a988303"],["/2020/09/03/操作系统-内存管理/index.html","07cfbdca16aaa26c2aa153af2dbd0926"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","93617fedbc420ceb1ed470df02b1133b"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","b7a97719f6d69307309addb761954dc3"],["/2020/09/04/CSAPP-实验集锦/index.html","cd5188ea85da890704822236da1c5532"],["/2020/09/10/计算机网络-实验集锦/index.html","550a77f080d815dd59a64b12790b0ab5"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","a484a44d513b1f0cc9d2c19c558a9bbe"],["/2020/09/30/C++工程项目-JobShop/index.html","2cb3653f14e37e407334a677aabbba88"],["/2020/10/09/交换原理-实验1-时间表调度实验/index.html","3ef8b25908e52168f060a3171971755b"],["/2020/10/09/交换原理-实验2-摘挂机检测实验/index.html","07cbc19ef24f1daeaa63b327d8005a0a"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","e764f7b0c782366aff518ebaaedbfe44"],["/2020/10/09/交换原理-实验4-拨打SIP电话/index.html","564464bc83aa9bc4209599977546d310"],["/2021/01/04/Android-项目集锦/index.html","e5b13e4dbc82125460bd177e2daa1188"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","3ab4613f5a6766be276e34fafe482d78"],["/2021/01/04/C++工程项目-travel/index.html","ba1b9007b17a5bf41527d8c0c8a21a2e"],["/2021/01/04/算法设计-分治-最接近点对/index.html","f0e30f871cbeb8c1babf3250534b50be"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","fa146ce7d245f943885b1b3342d043d3"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","8b1296168faf847df22f1b528572186f"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","6781a888f797f8aa1257c1998d3f58bb"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","ba934814baba080361304b1ef5a2baf6"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","e6466af12f0c996e35bb55d8fedf0eb8"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","509875e2971b2b7f59586b217d2996ee"],["/404.html","6304b26241fcc58d70745d0dc45d2ec9"],["/about/index.html","36c2546105b5d50280265cee6ca53335"],["/archives/2020/02/index.html","a708d52cce7413863b38e92d5f536564"],["/archives/2020/03/index.html","d7f74cc9d5fda856c6e064874090c7bd"],["/archives/2020/04/index.html","71d1df88b5c26c1a278338eda131feca"],["/archives/2020/05/index.html","bddbd0d12fac75f20957fd7f77f1e443"],["/archives/2020/06/index.html","4e34cab4190acc8976254b1776605904"],["/archives/2020/07/index.html","71c953f6e917556be56a084d155f74bd"],["/archives/2020/08/index.html","28343ee9384e14017e9891b970f09268"],["/archives/2020/09/index.html","b9223750643b7938beef4b7691d47467"],["/archives/2020/10/index.html","4dbe716b0af6b39892b57abee03f4c4f"],["/archives/2020/index.html","7fe3b6a051319b4d33b6ea11ab475b52"],["/archives/2020/page/2/index.html","a3e08026ba5b08d69d79778fb09a4393"],["/archives/2020/page/3/index.html","c5dec3905a856114f4c7347cc7a459e9"],["/archives/2020/page/4/index.html","a9282e47a96955e12e3e501ed94bd2ef"],["/archives/2020/page/5/index.html","206edfdaa6966d0f9ce3011bc68f5fc9"],["/archives/2021/01/index.html","959c34681e7d10da4db47d4a21f648b2"],["/archives/2021/index.html","889f2bae7ea003e214b9846d5380b621"],["/archives/index.html","5d91278a5dedaaae5de2023641b04c63"],["/archives/page/2/index.html","5d91278a5dedaaae5de2023641b04c63"],["/archives/page/3/index.html","5d91278a5dedaaae5de2023641b04c63"],["/archives/page/4/index.html","5d91278a5dedaaae5de2023641b04c63"],["/archives/page/5/index.html","d0a1e395b81a71957920c8b89cbe932d"],["/archives/page/6/index.html","d0a1e395b81a71957920c8b89cbe932d"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/bb/index.html","4b2c22e1d1ab95c07e564652f2f26c6d"],["/categories/C-C/index.html","d5949c08657fd81e157964e15cc55990"],["/categories/C-C/page/2/index.html","58918b960bb881197270f2197566919c"],["/categories/C-C/拓展学习/index.html","d5d355a2cc98467988baa1797fe6fc6e"],["/categories/C-C/操作系统/index.html","2e070f8ee62f6d38d21c4e811ca22751"],["/categories/C-C/算法设计/index.html","743d639ff8757255076fb6dc183da899"],["/categories/C-C/编译原理/index.html","0174311f27b52817eb13ef42f72ee879"],["/categories/C-C/软件工程/index.html","ff0efa70d21ceded51281c3fd175209c"],["/categories/C-C/项目/index.html","c17d3b1268909535e98fb645b3fc279f"],["/categories/Java/Android项目/index.html","802ac91c44505d65f07871093efcc34b"],["/categories/Java/index.html","ea1b389ccacb8c2e43f5a67a7694279c"],["/categories/Linux/index.html","cf1082dbd674b52516dc9c77c9c9a5ef"],["/categories/Linux/上机实战/index.html","4d0d3979728e08edb9dac683a07fccdc"],["/categories/Linux/习题/index.html","7812efac673f3b2912c2f1cf2a823aa6"],["/categories/Linux/拓展学习/index.html","21a658f27e2f3570988592c75f03c7e2"],["/categories/Python/index.html","e068e25e6bc730ec6096a3ee1a4c619a"],["/categories/Python/爬虫/index.html","1bafc3ef88106951c026b1d2d3b3c5d5"],["/categories/index.html","4de76fa7f80d36cc9d9d695181dd419d"],["/categories/交换原理/index.html","94a0ac893126c2d877a93ac31cbb07a4"],["/categories/交换原理/实验/index.html","d142b17475427f33e20691c1600e8ebc"],["/categories/其他/index.html","1f4c96603a4d3fba9fece068f3d66255"],["/categories/大数据/index.html","22b1890198403d57b4d851f2cece87f4"],["/categories/大数据/习题/index.html","42a5bf5c4e0e84c5ac07e71514936707"],["/categories/大数据/实战/index.html","b3669f6be0bade236cb42e03c0d2d38f"],["/categories/机器学习/index.html","12dc728e54cc1745bb41b1509ea95e97"],["/categories/机器学习/实验/index.html","66203b0dbc9bc7c78f84fb5a63985008"],["/categories/机器学习/知识拓展/index.html","1676d1fa0117ed7562d19e55822ba300"],["/categories/现代交换原理/index.html","584f09022d1cf0ee1d319a569f089a98"],["/categories/现代交换原理/习题/index.html","aa0dc960e3a38c4b81a2ed5ba7665a96"],["/categories/计算机系统结构/index.html","294bc3401d2e8e3a6fd2af24695bdfe7"],["/categories/计算机系统结构/实验/index.html","80f76baf10170bb98cdf3eed52470647"],["/categories/计算机组成原理/index.html","6bda02498804ceed955d3dbc93cbd37e"],["/categories/计算机组成原理/实验/index.html","2cd0ed4a521b1a4289b860f7a8e45117"],["/categories/计算机网络/index.html","6b1ed32d56723e06e9c1b11947bd7f2b"],["/categories/计算机网络/实验/index.html","6bcf34c4937953e2a86d3a210cddffb1"],["/categories/集锦/Android/index.html","e0ee19f39ce3e10bfe9d95e2cc92bc00"],["/categories/集锦/CSAPP/index.html","fcf9dbe2f39d30e4a3ab9c5aac83c898"],["/categories/集锦/Python/index.html","d8fe534052b9c69f89db031c8c0e2f20"],["/categories/集锦/index.html","3d3698e0643d219fda9732bd5f788282"],["/css/first.css","ac2d0010102d22ded3aa536d16e52b73"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/message.css","b0ce3ca232f809c8d7a85c79bf1f7ff8"],["/css/style.css","f33cadc59019a1af1d898b222bf512f6"],["/friends/index.html","3b8f619b80d472b0262a1656d1f6eb9e"],["/gallery/index.html","63f4bc7639ebb10460b077618443184f"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","600600296263134db80eafecd3eda542"],["/js/aplayer.js","f10ee7aff4ce278045da925ac6510d29"],["/js/app.js","d14976ee97145aa14568c13c6554dcc4"],["/js/jquery.parallax.min.js","38cf4791e24aeaa8101bd2c816400718"],["/js/message.js","38da736cdf513c9a15a0a2a16a34eeae"],["/js/plugins/contributors.js","23ba3efa08d9fb1aae753ceaa6df2711"],["/js/plugins/friends.js","239cf9c648af390f866ed00cead3e23d"],["/js/plugins/sites.js","15bb31fc27abc888b17cc5d822808604"],["/js/rightMenu.js","19b2a577c30a04732f02b86bda62e0b9"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","a04e6588de7b29f512bf477ecff8eb1a"],["/page/2/index.html","6ae033870a2e7372a4ca6af0d079bd2a"],["/page/3/index.html","b29ff6bb2f514cfa6e2e0f59a32b9fb7"],["/page/4/index.html","6d771db648ad8f6ae040261149783a5f"],["/page/5/index.html","a257a23c7959dacbc0856dba77d67a71"],["/page/6/index.html","53511ea7c14e4e5888cfa60da080486a"],["/shuoshuo/index.html","4499fc7f370638f0a8c42785909cb38f"],["/sw-register.js","32f80e3bd8855067f9f802aac2fb0195"],["/tags/AI/index.html","ef3cc8cdb76a1e64957406a0d6d3c6c5"],["/tags/Android/index.html","fc192f12c206da0a91b187bc4816b6d3"],["/tags/C/index.html","5cdbff1cadeb9bbbb4d483b96e253c44"],["/tags/C/page/2/index.html","96cf2472738b87ad074e7a307d32c9db"],["/tags/C99/index.html","48550ef0f857f2ee30154408ad4d8533"],["/tags/CSAPP/index.html","7abb05794d277f9adcedf885b635f164"],["/tags/DNN/index.html","4968a2cb8456f9826a65193df8aeb42c"],["/tags/DNS/index.html","f94ee05baa274c144ecc793b346817fb"],["/tags/FPGA/index.html","199fdc9000f87c253e069fd33ee10db1"],["/tags/HDFS/index.html","469fc1a454ae4bfaf897382dbdc53321"],["/tags/Java/index.html","8cfa6da5e427f6ae199cf2a940efb2a6"],["/tags/JobShop/index.html","1cfa6361642e7f4f7a310d0c12ab0971"],["/tags/K-Means/index.html","d4c922df31a453dddd17e8a36b85401e"],["/tags/Kafka/index.html","897e7d7358900eada5d5c8b861fb0341"],["/tags/LL1/index.html","3ccfcd39e2d8faa60a759549476597ce"],["/tags/LR/index.html","5509aa0213d21923b7037ef79d1311c4"],["/tags/Linux/index.html","b1afb8be1f9b72ba6e2f8c86e9fb10fc"],["/tags/MIPS/index.html","ba72d8504818fa7d9a5dc35bddab2b97"],["/tags/MOOC/index.html","172a4d9fa3716fcd613337944855b072"],["/tags/MPLS/index.html","f6ceed78db19bb5c5fd9342acba44ee9"],["/tags/MapReduce/index.html","fdef055b7d49ec53b4f7f4bce99a51e7"],["/tags/Matplotlib/index.html","08c707dc0907310b0da4a7c4a10f6c15"],["/tags/MiniSYS/index.html","79422dedf01498ae3efa9c163bccb092"],["/tags/Python/index.html","d9d7a710089b3455558393d49cb4086b"],["/tags/QT/index.html","5500c14b14904b618b707f89dc4bd866"],["/tags/RNN/index.html","8c4b22ad0caa942b2b3e6a3fe2ed8d13"],["/tags/SIP/index.html","fb754e1058424b9cd054456b8bb78a2e"],["/tags/Scala/index.html","391332901fa3c28f0c731ce8526a3351"],["/tags/Shell/index.html","09160ecf913dc10a0a0217fe21ce4e7c"],["/tags/Spark/index.html","5d772cbf5299782a50838af6764f6c16"],["/tags/Streaming/index.html","0f938e06e5ebffedd9cd4b34fffd1d7e"],["/tags/Struct/index.html","1034c0636672c4b5b5d08ee001164123"],["/tags/Verilog/index.html","89eb3787e814679643bacf4361b26303"],["/tags/first/index.html","3e6f7f2530f98ee4def05bbd320bf85b"],["/tags/iPython/index.html","3d91aca42aeec30ab7a0eb3f1f729079"],["/tags/index.html","448f8417b7546042537b326750b5bad1"],["/tags/ls/index.html","bff10cea338ce446e5474d9a00329f18"],["/tags/习题/index.html","303630bf111621977d64ca5eafcab1bd"],["/tags/交换原理/index.html","680318479e92b5d083d8a9e908dad0ab"],["/tags/人工智能/index.html","d756edd8941a27139d254a943c7d2b38"],["/tags/信号量/index.html","b61232e401893497ba5cb618abf3ed78"],["/tags/内存管理/index.html","172034736c042e16ba17c7cf2f3a518c"],["/tags/决策树/index.html","3eabdd93b9ea84e7298e380a313801cf"],["/tags/分治/index.html","f753a4a301763a21acb6e30ae2e3d8a1"],["/tags/分类/index.html","ed0c08b148af6a9b88d6b66bd6d2a7c7"],["/tags/动态规划/index.html","152882cc5d6f65e49aae2ce6f4f0a7a7"],["/tags/华为云/index.html","de9d6d3cdfbc3970f85daeb7c4898957"],["/tags/单词计数/index.html","450a210a8af57c4610cecf25f22ad9ad"],["/tags/可视化/index.html","54ee4c632b6d23f7b1c755f22e408edf"],["/tags/同步互斥/index.html","a635a95e24152deb99b6c940c0823e94"],["/tags/大数据/index.html","c662498d4a318708a808e43ce3c060ff"],["/tags/学堂在线/index.html","e4cefaceaade405cd3830db061b584ed"],["/tags/实战/index.html","b2ff077ea9b0a5ebbe4681634097be36"],["/tags/实验/index.html","7daedca296a99b76eaf704c5fd087c6b"],["/tags/实验/page/2/index.html","34a1aa524871cd8aed82f40c2b0d2ffc"],["/tags/小游戏/index.html","773ff286316f2ecb790fd03221d7a618"],["/tags/工程/index.html","eceb6888577c71b9cd2fde19d57e14fe"],["/tags/工程/page/2/index.html","007e42ce13e4697e72d164d02701952e"],["/tags/手写识别/index.html","5b5f4e3441c97fd4849978e0891c20d4"],["/tags/拓展/index.html","e46dd922a5a138791b0b4553118e9402"],["/tags/操作系统/index.html","93f1b4e2ccf85f31671192f8de3bd106"],["/tags/数据处理/index.html","d5df54154b512849661dfb43395d8f61"],["/tags/日志分析/index.html","49c0b2805cefecc4bd2256892084ffca"],["/tags/易错点/index.html","3980d5dce6951a12b7914314d517d5e0"],["/tags/机器学习/index.html","1089b7314d6664658c0246eda5334bfb"],["/tags/条件熵/index.html","ffda77c8e7efecb048235b5e997d41d6"],["/tags/正则表达式/index.html","87e688fd8408d9e269741862ef5736e9"],["/tags/汇编/index.html","2e5e83488c49dde5ab33c26d1a4e8230"],["/tags/流计算/index.html","aba58f5f7540c824b304c8d61b7c1183"],["/tags/爬虫/index.html","bce66cad82df261541d42f3017d9d2cf"],["/tags/现代交换原理/index.html","b5a3f715f32d096d54adc6168229d9da"],["/tags/生产者消费者/index.html","dc42f81101e6da0921ba6139301315a3"],["/tags/知识/index.html","5aea050bb368b39a6b287597bb42d811"],["/tags/算法设计/index.html","13209738110c52884d7f08a3016507e2"],["/tags/线程/index.html","15ca0cff99ffe34c1e94c1e2553977cf"],["/tags/编译原理/index.html","5b2d38729a0e69b0095f2c951aa03565"],["/tags/网课/index.html","dd9e9da8311ca019dcdce6cb2a9596c3"],["/tags/聚类/index.html","2802c196adc33ab4b965148bb50d59f1"],["/tags/脚本/index.html","66c98ff0030e4bdb898a2dded8e4638c"],["/tags/计算机系统结构/index.html","83c161fa91320da7ba7bcc544080d8b5"],["/tags/计算机组成原理/index.html","7717cfa101e51fef8fed70eb1a4afe26"],["/tags/计算机网络/index.html","b5cbae6c0234a64c10c88ec338f3249a"],["/tags/词法分析/index.html","974c8e44c3b3751cd3884ff3d01e9996"],["/tags/语法分析/index.html","2ececab5442982a664f319f6075166d8"],["/tags/读者写者/index.html","904bce105ed6992ab10cebfed8903b36"],["/tags/课程/index.html","7e9a78047642c7044e9f979236c823f1"],["/tags/起名字/index.html","a6dc268ed1fdb1cf9fd42dd96dbeb464"],["/tags/软件工程/index.html","96e23c69811f04136c32bda115456139"],["/tags/进程/index.html","dc81ef6d2784546f3ed46a22df22f066"],["/tags/通信/index.html","1be596fac0429bf69fb4bd7680a2f39e"],["/tags/遍历目录/index.html","d8159fef7082da70a8106f4bfc9f1c6c"],["/tags/难点/index.html","4e13e336848ed74ecfdac6e727342cf4"],["/tags/项目/index.html","47961e41ed2c2eea7f43cc56d67ee99a"]];
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
