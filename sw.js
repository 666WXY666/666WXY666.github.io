/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","b41ec56869b785d7d87ce38460f7fbc9"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","a9646d0b8dc302b1b236fa4fc72f6050"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","a5030e805220c01b5b8c285b736cfffb"],["/2020/03/26/计算机系统结构-实验1和2-遇到的问题/index.html","a7d1c388afc28d71c879347a204ea1ba"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","736b4370c4b5e51d72774d17810ef4d1"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","be5a8f640a400c168120db7fd3e94c36"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","b638911f9c5fece13adecc23d9ce26cf"],["/2020/04/18/机器学习-知识拓展-条件熵/index.html","a14ec0e0273751924baa1105beb9fe51"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","5171a567b8f64ba7c3049da55f3fe65d"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","1763d76b7ec3a35209d57628cac2d599"],["/2020/04/26/机器学习-实验-决策树/index.html","e7869351d6949295d9574dc5d19426e0"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","309dcf4dcbcdbe39122a80df8c15c5dd"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","fe9099aaf3f2d7aad21c089698dd9920"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","a9e439aa09ab34541cc98520eb0a52b6"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","2441ebaa66cf5e9cdcd0858c26b4beab"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","958c205a0c7528831498a4365ffc8d8f"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","cc26b2721937f4363faa60bc3e6987e8"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","81264aa038b60138eb3f8f07bfcd83fa"],["/2020/06/11/机器学习-实验-DNN-手写识别/index.html","b11ad29053d398c0e0c0be7978f5a86a"],["/2020/06/18/大数据-习题/index.html","0ab9f1eea05e6acd08c26de5ec696521"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","06233df8881718704577706c10be22af"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","51b835de5c714875935a9b4bdcaacb79"],["/2020/06/24/Linux-拓展学习/index.html","4ef7cac4e8fc47b94888bd2c624c715e"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","592e7aeb4fe74c107f4519c1f3731b30"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","d54bb862e72255c367b1543cb0248806"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","f8b406d24e6092928163ba10ddb59cf9"],["/2020/07/15/C和C++的struct使用总结/index.html","71278283660f91f8dc646765ea25c235"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","4ea9004f041cddfd3009e64ed5a5e06d"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","8bfddc747cf15721aa557ab75914be44"],["/2020/08/10/机器学习-实验-花卉识别/index.html","67c882d43c756357b007caadae0576ec"],["/2020/08/15/Python-项目集锦/index.html","8c39266f3ce4e93fe59b4e23d2788139"],["/2020/09/01/编译原理-词法分析/index.html","e3e499b02367a4c0515d335907f8777f"],["/2020/09/02/编译原理-语法分析-LL1/index.html","818276346638e80ab27b2405518578e8"],["/2020/09/02/编译原理-语法分析-LR/index.html","e48f56b7d5d852ad0fcc4394d4cbce6d"],["/2020/09/03/操作系统-内存管理/index.html","4e2eb95de03b83a6389a44ce274cb33c"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","f91d7907162955920f5f602c0b29fa91"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","9a9541a62f4c5e9831e462741b853de2"],["/2020/09/04/CSAPP-实验集锦/index.html","406f3aa8ab80f85f7a674c8a7c25f080"],["/2020/09/10/计算机网络-实验集锦/index.html","e593ad4446dcf3768ea6e11c41a71725"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","28f29360d57f5bd125d7ccc69285951f"],["/2020/09/30/C++工程项目-JobShop/index.html","4cb0eef6169416e1510858a38e6f6d4c"],["/2020/10/09/交换原理-实验1-时间表调度实验/index.html","50149cf2a9ac780e1cd750d6957b5a61"],["/2020/10/09/交换原理-实验2-摘挂机检测实验/index.html","b00ef3d506b12c595e35176329ec42d8"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","7b60212e908834461817d0c359593f8d"],["/2020/10/09/交换原理-实验4-拨打SIP电话/index.html","964861b656c5cfd7188d723030752c91"],["/2021/01/04/Android-项目集锦/index.html","4e3cdaf2f002de7fd8036f7cd133bcca"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","738510240b049599351b6aab0bdfce54"],["/2021/01/04/C++工程项目-travel/index.html","fee1f1abcdb14f8c1857af461f827b6c"],["/2021/01/04/算法设计-分治-最接近点对/index.html","5ceceb53dce06062caf235e63eeb2afd"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","be9280ff706f3ed8701de2219f6f506e"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","162faa426b840d0254c70ae69e6cb14a"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","845f59ac07f6971b21a3d971df3981d0"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","fbe050deae3058b6bc6faf47ee8958d5"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","9890bdfbb9cad4e04752f99924d8fc60"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","6768b8c0ff96451a93be54b6790ba1b6"],["/404.html","a7e4d47d8d2658453d3fb47ef8a5a396"],["/about/index.html","3e6630e094e4d8a79eb62c69a5381256"],["/archives/2020/02/index.html","d5091b3e7d82dc3e621828f4cf587a3c"],["/archives/2020/03/index.html","ac22baa7b6e934feb0aa81107a0eb83e"],["/archives/2020/04/index.html","53676929d60ec659eee4ddfcdda7de70"],["/archives/2020/05/index.html","0802f55cf4d194717aaa10095bc2f207"],["/archives/2020/06/index.html","93367f77edcbb61c5132c175c71a0e01"],["/archives/2020/07/index.html","701fd3952771ef145cee2dc25de2ebdf"],["/archives/2020/08/index.html","c5af4dea4fb5ce9dade983d68459c54f"],["/archives/2020/09/index.html","27e75572ca9095b51e9c49a95ab1fff4"],["/archives/2020/10/index.html","50269ba951fe334a680cbddde7e8a545"],["/archives/2020/index.html","eb4e9364e440b09178d729a40b0aa379"],["/archives/2020/page/2/index.html","e84c5f6c4d6bc799f47ae588ccdfbcf3"],["/archives/2020/page/3/index.html","d54c80e76fef319256c3ab30c211b1fb"],["/archives/2020/page/4/index.html","0fb84aacc68bfcb6939bd591ff29a181"],["/archives/2020/page/5/index.html","3834091aa818961bbdc9ae5846116728"],["/archives/2021/01/index.html","476e7bc024916c78c6f4f23e5e768250"],["/archives/2021/index.html","d393f08be5b71c010132067f31f22952"],["/archives/index.html","db489e313c76335cf7263dd25666c5de"],["/archives/page/2/index.html","db489e313c76335cf7263dd25666c5de"],["/archives/page/3/index.html","16125b0182a73ae6180cdfce12a3da8a"],["/archives/page/4/index.html","16125b0182a73ae6180cdfce12a3da8a"],["/archives/page/5/index.html","16125b0182a73ae6180cdfce12a3da8a"],["/archives/page/6/index.html","16125b0182a73ae6180cdfce12a3da8a"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/bb/index.html","e5661beed7f6b7e7c5942ffbfdcaf3fe"],["/categories/C-C/index.html","a66ce6769e8f8aad7d53e4fe70212177"],["/categories/C-C/page/2/index.html","cd297e97601287cdd878c91d7394624e"],["/categories/C-C/拓展学习/index.html","5550a88804e0bbd9454c2777a8108e95"],["/categories/C-C/操作系统/index.html","4da5b58294a7b66cb34ccf2b4eac6070"],["/categories/C-C/算法设计/index.html","83869e35735e858904df1735c8812428"],["/categories/C-C/编译原理/index.html","c3c8f1a3d306c335c419bf65d87da787"],["/categories/C-C/软件工程/index.html","d9f940f6a4a40fdab5f1a508f5c411c4"],["/categories/C-C/项目/index.html","d4d97c6de8032a9bd671739aa4777c15"],["/categories/Java/Android项目/index.html","bb1ff8b4fde7e6223ba41dafdd8f4f9f"],["/categories/Java/index.html","e096a67ae6fbe4a74cc4ad2132e68627"],["/categories/Linux/index.html","ea8c25bfd240b281ebb7d7f9f7f3b5d9"],["/categories/Linux/上机实战/index.html","695fa80abc0254c048af98567a3be5cc"],["/categories/Linux/习题/index.html","4c5ad2640b84795db6228c2582edc17c"],["/categories/Linux/拓展学习/index.html","6c2280db4239e85f6d0b80e3144761dd"],["/categories/Python/index.html","1b0335177f0c517da3fdacd173ac6214"],["/categories/Python/爬虫/index.html","35d21cab1eccd93e85c40c928ecf2b2d"],["/categories/index.html","019d2d58bec31c2971cc4c537ef86b94"],["/categories/交换原理/index.html","e7fae3312e9198b07c016b4f179f5ccb"],["/categories/交换原理/实验/index.html","ed4927f00e1a3ecc6f9df920a50a9ad4"],["/categories/其他/index.html","1869ff223daa69350880d2c6a1ca3ea0"],["/categories/大数据/index.html","ec393226cbb551e835e64847dc0d165d"],["/categories/大数据/习题/index.html","25984dae6eb28209e1cec88e5148797b"],["/categories/大数据/实战/index.html","e3dfd430cd8bf710fe2c2da3ffc01a0c"],["/categories/机器学习/index.html","16e88891e5b42d9f67aef1e84ca2a33e"],["/categories/机器学习/实验/index.html","e77335e82ea554e15d66aff7bc53f991"],["/categories/机器学习/知识拓展/index.html","62e4e6d5af516d6137d22c39bb76c65f"],["/categories/现代交换原理/index.html","36a936ec6049dc79ced598eb953db6ec"],["/categories/现代交换原理/习题/index.html","20b6e66fe6ab81a6de117df757383b43"],["/categories/计算机系统结构/index.html","3fb8dfb80664e7f01126f57f53aeea4f"],["/categories/计算机系统结构/实验/index.html","572829cab4f8fea3ffc007aa01714a72"],["/categories/计算机组成原理/index.html","2ac188cd41a6bdd1139591306c3065e0"],["/categories/计算机组成原理/实验/index.html","78fe5006477cf69ade4cc224f16ce4eb"],["/categories/计算机网络/index.html","b540bdc5c219df9eb3ece62ca7870e94"],["/categories/计算机网络/实验/index.html","b809d223c7941b6e05ae9bb1cdbbe89f"],["/categories/集锦/Android/index.html","4ac19e70a53e0aa09c7fd1bd47269561"],["/categories/集锦/CSAPP/index.html","9cef243094aa3f17e75cb16b558ab405"],["/categories/集锦/Python/index.html","804116468d30bd99761bd7ae871d0c2c"],["/categories/集锦/index.html","bea99bb252acd7afc642c852955d62e4"],["/css/first.css","ac2d0010102d22ded3aa536d16e52b73"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/message.css","b0ce3ca232f809c8d7a85c79bf1f7ff8"],["/css/style.css","f33cadc59019a1af1d898b222bf512f6"],["/friends/index.html","a4c56abcd098ea4ff28163ab08ca2af3"],["/gallery/index.html","63f4bc7639ebb10460b077618443184f"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","d121e9be23ab01ca1b316c72b4600e62"],["/js/aplayer.js","f10ee7aff4ce278045da925ac6510d29"],["/js/app.js","d14976ee97145aa14568c13c6554dcc4"],["/js/jquery.parallax.min.js","38cf4791e24aeaa8101bd2c816400718"],["/js/message.js","38da736cdf513c9a15a0a2a16a34eeae"],["/js/plugins/contributors.js","23ba3efa08d9fb1aae753ceaa6df2711"],["/js/plugins/friends.js","239cf9c648af390f866ed00cead3e23d"],["/js/plugins/sites.js","15bb31fc27abc888b17cc5d822808604"],["/js/rightMenu.js","19b2a577c30a04732f02b86bda62e0b9"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","dd798dd87ae5223865c519f287ec4aed"],["/page/2/index.html","791ef836dce67f80b538da1bf6f3d812"],["/page/3/index.html","2e169d24a8aea4d704de12d778e49c0f"],["/page/4/index.html","c1921e84cccd00d6edeb888a99b14585"],["/page/5/index.html","cf39ffb1ed9e746bc093270dbd3cbd32"],["/page/6/index.html","0742374e90f345fea307080019c8faea"],["/shuoshuo/index.html","0079641d065fedaf6227af0fd3d4b18b"],["/sw-register.js","8c0cc570dfe3252dea10e144cb05d4d7"],["/tags/AI/index.html","82879d9a01b5470e7afe52329089b9bd"],["/tags/Android/index.html","efcf9701da1e358b4913da0c8eae5657"],["/tags/C/index.html","71d18a4553f3061d8b1202dc488eaa43"],["/tags/C/page/2/index.html","f2d93cf4984bf401cd6e08ac03759274"],["/tags/C99/index.html","f12595ecf0d6805391629e1d8630847b"],["/tags/CSAPP/index.html","84e959100abb2b5a7a0aa330e2f6667b"],["/tags/DNN/index.html","d2fa2a557fe4e8c011aeb6e5bea08109"],["/tags/DNS/index.html","5ea5a4c24d4d3edfa475e3e335ea4e24"],["/tags/FPGA/index.html","5df085f0f0c6694fc937bc1787a1a1e7"],["/tags/HDFS/index.html","8fa4388acce6acba29bc29a7ccdfddc0"],["/tags/Java/index.html","e911eff6e384a0f4f807813f1c9a232a"],["/tags/JobShop/index.html","0e197116a09118c9befd5204b2719ab9"],["/tags/K-Means/index.html","b094c6eeb7c07e7eb40e0fd31127f0ca"],["/tags/Kafka/index.html","c79115acd21ab6e1932e2a3caad3cf8e"],["/tags/LL1/index.html","3fc97dd3f58af746bcf5af43f6fc5b43"],["/tags/LR/index.html","91635e2671897249c3d08d2d0fd71de9"],["/tags/Linux/index.html","acffd16b86c8e5628b2c7e244aee1679"],["/tags/MIPS/index.html","2414063082ec6b96bd1ae1b2a2d1765a"],["/tags/MOOC/index.html","b559472d664e8a26af98c70f1b5cc0e5"],["/tags/MPLS/index.html","a967b2978f142bece34a7cb2b6f41175"],["/tags/MapReduce/index.html","a8ad310065411d37dc5fe51762f1a2bb"],["/tags/Matplotlib/index.html","ba3ae0b2d3716b028d7c22fb824c649d"],["/tags/MiniSYS/index.html","056e1201970e2ac1029175cc28b9a54e"],["/tags/Python/index.html","51c81445cb49816d43b6a6e57e96b703"],["/tags/QT/index.html","794b743ee75267e385df1ad605785e42"],["/tags/RNN/index.html","d4e79313a1a1e6c6f6ea21f5e96a5dc6"],["/tags/SIP/index.html","f21c9c9bb0f791cfc7037a52331b4a35"],["/tags/Scala/index.html","1034bb175c1bdb3be82e4107b95d4d06"],["/tags/Shell/index.html","dc58e32ee17f206ceb09e3067b328a21"],["/tags/Spark/index.html","42d06fce8e17c83ca832c585f4ad2749"],["/tags/Streaming/index.html","794c17e5f5c65717c68782fe103e702d"],["/tags/Struct/index.html","6c77d6793f42fa4c3822022d2305167c"],["/tags/Verilog/index.html","eb687b3715df4decf8526b222da18bc6"],["/tags/first/index.html","1e1cc17107a583b31a6cbb17bc89411c"],["/tags/iPython/index.html","b8e2a19476815b461240d5eeb62c3c2d"],["/tags/index.html","9d2055068e4aa5c70599adfce05fdfcc"],["/tags/ls/index.html","aa2d00e98bfba282f1cb3cea0a281d5f"],["/tags/习题/index.html","fa2d810ddebb60877df83d61b38e14cd"],["/tags/交换原理/index.html","be048b6a20be3c7f99c74834596a22b1"],["/tags/人工智能/index.html","fd92b83e3f89b0bf400ec6784233c5c0"],["/tags/信号量/index.html","d95074c6df11e9fff86f41e57f556aeb"],["/tags/内存管理/index.html","9ccf5516d8663844ecd55249fbcb5a89"],["/tags/决策树/index.html","e557392a3ea7087ae6f38b673d9bdc45"],["/tags/分治/index.html","e1c5093899caeb1718fbc2e8d8ce6d59"],["/tags/分类/index.html","e2979d7e306d3fe909a0f4f79cca2337"],["/tags/动态规划/index.html","b4d22ca06c3ea20bad9ff7999a7c40a4"],["/tags/华为云/index.html","2f95564ff018be5305f21a19e4711cd3"],["/tags/单词计数/index.html","b595dbbde63aec45046e7675e4aa9b51"],["/tags/可视化/index.html","eff2d1826d1878be1c18d230f8645f1b"],["/tags/同步互斥/index.html","43763582f21b08ad676125ba59279f12"],["/tags/大数据/index.html","059822d80e1f1c2c80a21c3465b1c8bc"],["/tags/学堂在线/index.html","2c7297a4a1a193af0041fb6c562313f5"],["/tags/实战/index.html","a2f865c79fefccf8e4000b3699b4dd2e"],["/tags/实验/index.html","23a9652f6182b0d7d9058d57b6438146"],["/tags/实验/page/2/index.html","4613ba5933b842ec0f12bfaa6ecc9211"],["/tags/小游戏/index.html","7b43caf692068770e73353d43505e6c4"],["/tags/工程/index.html","ef36fb03910d2363f53a4dd3d071c958"],["/tags/工程/page/2/index.html","9a2b460e9af2b30063c8766ab2c287b3"],["/tags/手写识别/index.html","bbc5cc653b087f7d0aac10de48693e9f"],["/tags/拓展/index.html","63ac269068d01ab9301b8c7fae520efd"],["/tags/操作系统/index.html","281c22b42e1e3aad5c429589054977e5"],["/tags/数据处理/index.html","923256fb2d68a0670abed9694e011497"],["/tags/日志分析/index.html","d17deb8d6c6477cdd11461387a842678"],["/tags/易错点/index.html","0d7a83a95961106b781f575755bed925"],["/tags/机器学习/index.html","b7667b2b4dec98663fa9fbef020c7e7a"],["/tags/条件熵/index.html","effdb8c7f5f9b0a8c9bf7a26e45f566b"],["/tags/正则表达式/index.html","be25337485193fda159ac71a82c19f52"],["/tags/汇编/index.html","315bb2c2fcff674e791158bc133560f6"],["/tags/流计算/index.html","1934de8ffafea3b00f38296ab9932a30"],["/tags/爬虫/index.html","ed759c0e7a5a80de70738c568344d67f"],["/tags/现代交换原理/index.html","97a2b01ecfdc9f1c21d7685c3456d1f7"],["/tags/生产者消费者/index.html","636aaa8a72ff06c4c40920c00695e174"],["/tags/知识/index.html","d7370e6ce83f49c206cfcfc67846bfc5"],["/tags/算法设计/index.html","248efa3375114536f982131144c9ede0"],["/tags/线程/index.html","f2b465badda8f7e715962ef10dae392a"],["/tags/编译原理/index.html","969a6779ba54faf11e17ce5fdb78e0ae"],["/tags/网课/index.html","ce7573a1966bcf67c89a1be9f04a3eee"],["/tags/聚类/index.html","c6c81c0e17e16652a7c9a33fe3a938d4"],["/tags/脚本/index.html","b81ab47bf7716ff4423b489b1c4a7ae1"],["/tags/计算机系统结构/index.html","aa08ff6be1ba35f198de240798e8218f"],["/tags/计算机组成原理/index.html","9e8e1505c7c08b6b263f6d4318cdc0c7"],["/tags/计算机网络/index.html","228b30892f63cf57466449d07c84c3ca"],["/tags/词法分析/index.html","cbbcb7f30adccbef4bc57ca553fb7a49"],["/tags/语法分析/index.html","ca694e977b62d5de35ccac228d6626c5"],["/tags/读者写者/index.html","002c1f9d8850262e5a8df6ab25878489"],["/tags/课程/index.html","5e018349d33429f5f0bced79e635a123"],["/tags/起名字/index.html","43b9b64636129a8b38b654405571c9f5"],["/tags/软件工程/index.html","9060ee8087bf46b16eb8d88076ff872d"],["/tags/进程/index.html","20e12c864c39ddf30a96e92630195bf3"],["/tags/通信/index.html","960282f547d0cd9c04accdd5a7269136"],["/tags/遍历目录/index.html","f4477e66458d7372695bab00f8a75ad3"],["/tags/难点/index.html","0c9cdeaf3e0c1f392c22687bace4b88b"],["/tags/项目/index.html","ee2f120f13cdbd8abca5eab035d24781"]];
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
