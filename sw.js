/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","9b3d4082e9ed7164c3b3e7bd1ca1637b"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","85c78bd45b2d5f34044d9154b6a7c043"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","3057cc0a559e407dcbe8095c2af54a47"],["/2020/03/26/计算机系统结构-实验1和2-遇到的问题/index.html","73201b52387e69a03ca1307c590a7725"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","c215793277f8303f860bd04abda3cbe3"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","11183cb5d83b84a956c80e91a2f12396"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","5c8f93cf26d59115c360854cd03f52a8"],["/2020/04/18/机器学习-知识拓展-条件熵/index.html","f7bc52a976e3b11976904abf42a1978f"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","c940579e0b1924f8d902a37e2e6b9b20"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","728a2ccaf636b3376acac6b7a411c2f4"],["/2020/04/26/机器学习-实验-决策树/index.html","e246302205d9bf6721e41f42b0fbeea5"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","c1e3e3abec92a55281ca27955c1cc7ef"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","4bc061e6f461de9cae145a225074b206"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","262c530aa4d2420e8771f8e588b526ec"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","d139da32a65bdd2e921d84f76d9478fc"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","6d96424ee9a3449951ee81330074bb84"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","bad6f4850f5c1b7a1c060aa40722b59a"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","5d4a645d9e58c30b67d56e93de3cfa9d"],["/2020/06/11/机器学习-实验-DNN-手写识别/index.html","9a4f34da218d9433a59549c8609dc9b8"],["/2020/06/18/大数据-习题/index.html","8ef94d82076272f1c82269229d0c5468"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","d747f0fb0dda225e35fceabcef88f101"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","47cc7652ef7e96a9c2fa7878c38b1425"],["/2020/06/24/Linux-拓展学习/index.html","87f933ed7df2dd4129d775c5e4a12b7a"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","67c72b89e220412d9656a141584614d2"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","4d95b723fc52dfec2e09926a0f6a7b77"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","3fbc0b675a43ba55a15650f8eb4e8777"],["/2020/07/15/C和C++的struct使用总结/index.html","69d06e21d42600af38c4070ca0592c28"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","c67d0053bed827b6310b7c00e89baf16"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","4b4a54f1911dec4793bfb9c1193fa500"],["/2020/08/10/机器学习-实验-花卉识别/index.html","f51c40c37dfb6bb738ffc4a5fa02c1f9"],["/2020/08/15/Python-项目集锦/index.html","eb9e2532ea6981543f0386c1843392f2"],["/2020/09/01/编译原理-词法分析/index.html","6024e1687ab912521f695f49f7d75ce5"],["/2020/09/02/编译原理-语法分析-LL1/index.html","05ebd723ef3ded6ce42680c197c54bac"],["/2020/09/02/编译原理-语法分析-LR/index.html","e365d0acef02a6672b3dfb362194af22"],["/2020/09/03/操作系统-内存管理/index.html","c87129e12b7a79c1b71ba4c396c0daad"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","83b7577a7528c34aad477eaa98d8408d"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","a3e3d665e73a2f7d259719d9bad25987"],["/2020/09/04/CSAPP-实验集锦/index.html","fba50224ba9cf3c01d0d937b97586bf2"],["/2020/09/10/计算机网络-实验集锦/index.html","a96e08cd06c76b796b1766a961225ae9"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","3ba20b294bb93c61545db2955109acf9"],["/2020/09/30/C++工程项目-JobShop/index.html","074a6e7563c2337859985d8d1def0a3d"],["/2020/10/09/交换原理-实验1-时间表调度实验/index.html","4a13b24562c40a3ccd07e251be2fde43"],["/2020/10/09/交换原理-实验2-摘挂机检测实验/index.html","5355ca6913e73fe3526bdd73d6cf5df1"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","9855315cadece29a7e4a2d88301f5f1f"],["/2020/10/09/交换原理-实验4-拨打SIP电话/index.html","ff1006d685676ee1fd099b3e4eb844c2"],["/2021/01/04/Android-项目集锦/index.html","f6c33556550ea1d69e7cc0c02d238f2d"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","61cf3acd41f7030758d592af374edbae"],["/2021/01/04/C++工程项目-travel/index.html","df9e88fa295a2283d3fd2d6d792607b0"],["/2021/01/04/算法设计-分治-最接近点对/index.html","55c8b667ac93696be5f0b4ab7996bf5a"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","f6969f82495c5d163a4bfe4e5cd95960"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","106d25cc13ea54f0ea4dc28dfc1ac165"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","d618dc1edd3349c1a6ba72341a546792"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","d85c8a0c19c8720c699698dffe8cae7d"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","dccb82732340953bf77e8693cd798e47"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","55681b3a2f200a57eb891239c138c1d7"],["/404.html","de540915be668b30678c26486b6751eb"],["/about/index.html","ed741d35c2fa67f2310748fa30c9f05e"],["/archives/2020/02/index.html","2e1d7f3f21388e340df174a3a3fb9d46"],["/archives/2020/03/index.html","eeb2595774853f41bd47a1734aa71f37"],["/archives/2020/04/index.html","a73465578019878c1ff4029f3d16fd2b"],["/archives/2020/05/index.html","ee4cb21e86e8d2ab4989bf82c0adb842"],["/archives/2020/06/index.html","74b222490d5729f49514255e688862e4"],["/archives/2020/07/index.html","f03193424927f3f10b7aa250da693ff2"],["/archives/2020/08/index.html","00bd398d96337568e9339029cb4c69a3"],["/archives/2020/09/index.html","31e079448c3d8e93bf81f35f6d718866"],["/archives/2020/10/index.html","588650ccd061796d1460fa9e80d82cba"],["/archives/2020/index.html","603072619ec1b8bc1cc5390d9321884b"],["/archives/2020/page/2/index.html","30319c13fe29f7fe2eeea16d26a570f3"],["/archives/2020/page/3/index.html","43850ca9d03885568ff2748fee0c1214"],["/archives/2020/page/4/index.html","7487c5bcb9e51ba92ccb4fd2dc1294f8"],["/archives/2020/page/5/index.html","79160425ce956b591c89888ae3f487a9"],["/archives/2021/01/index.html","1c3e382ca178cbcbedc2d25ec313e482"],["/archives/2021/index.html","838a3d650320f57539fb3a8e62b85200"],["/archives/index.html","6468e77060e171144e21c9f891157bdf"],["/archives/page/2/index.html","6468e77060e171144e21c9f891157bdf"],["/archives/page/3/index.html","6468e77060e171144e21c9f891157bdf"],["/archives/page/4/index.html","6468e77060e171144e21c9f891157bdf"],["/archives/page/5/index.html","5ca1fbb869b7632c6d8ec0ae030fe3a4"],["/archives/page/6/index.html","5ca1fbb869b7632c6d8ec0ae030fe3a4"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/bb/index.html","0eb997f353d2d6cb49c5af7dcee0e5f0"],["/categories/C-C/index.html","6e3ab510245bcf7c906bee641fe480c9"],["/categories/C-C/page/2/index.html","5f5d469fe6da900435537f6c5b4d47cb"],["/categories/C-C/拓展学习/index.html","abc749c7a24aee01fbbc797e2fd49ed1"],["/categories/C-C/操作系统/index.html","55505f3e2025396b9dada0271ba033da"],["/categories/C-C/算法设计/index.html","6bb9653517600d02d03632a97a36bd00"],["/categories/C-C/编译原理/index.html","95495b88c922d73d5cf4f240e829d00c"],["/categories/C-C/软件工程/index.html","a3552660a826828eea4ab4e4539affa8"],["/categories/C-C/项目/index.html","5605f6d618b609d9f2f9dd33c834e5f2"],["/categories/Java/Android项目/index.html","9a0bcc358ac9e3820f4789b09048c0c1"],["/categories/Java/index.html","a7debc056cc3dc649012e016bd036223"],["/categories/Linux/index.html","058c05b454edf7236ed960800af7ebd8"],["/categories/Linux/上机实战/index.html","76be92ee834d8b1fb438ba6b5de8010f"],["/categories/Linux/习题/index.html","ee5f98915e38cf817546d49ab1aed7df"],["/categories/Linux/拓展学习/index.html","a950730be89565133a59f835b09ab059"],["/categories/Python/index.html","b64ab6b83c62b0c0c79733750a494b0d"],["/categories/Python/爬虫/index.html","f763e2679de2ddf83ad817550ef7d99e"],["/categories/index.html","27f066f2b849bcaab3bf7f407dc03d43"],["/categories/交换原理/index.html","0987e4a13b988652ea16e1cce8a97483"],["/categories/交换原理/实验/index.html","2e396e4275e97a2313a76e2c083f3d8a"],["/categories/其他/index.html","fd0a84966e56870869c69bcc29f94e54"],["/categories/大数据/index.html","4fcaf3b69233a166aa2ecd2fc8fe2acc"],["/categories/大数据/习题/index.html","ec00b198a076e86531810b0f13845b81"],["/categories/大数据/实战/index.html","eea50304017dd1f838b71801d688f7ab"],["/categories/机器学习/index.html","1fb12132e1df98474cc3c31f1328a79b"],["/categories/机器学习/实验/index.html","7664eecec6ef16e4b2cb7d22cd0fb74d"],["/categories/机器学习/知识拓展/index.html","a8b54c7725ff27c35805d76e17ce6b1a"],["/categories/现代交换原理/index.html","9ef23fec7b1a58af7c8d27a3557dd76a"],["/categories/现代交换原理/习题/index.html","4131cd1377fbc683c360e667b094e033"],["/categories/计算机系统结构/index.html","36662bd5dcecc9c76ed61c087754c4e7"],["/categories/计算机系统结构/实验/index.html","c648c3e3126975f84cd18d9523eec1ce"],["/categories/计算机组成原理/index.html","06c47297696f11ddaa16fa2161ef1fa9"],["/categories/计算机组成原理/实验/index.html","1dee2bc4d61505299ae008f6c1e67c1f"],["/categories/计算机网络/index.html","6e9014350097b628d584ff9e533fc8ac"],["/categories/计算机网络/实验/index.html","0a95f86da2d615b4cc187fecbe033e41"],["/categories/集锦/Android/index.html","d7fc48872ef98e6af23d3fc6d163a95d"],["/categories/集锦/CSAPP/index.html","e6f816176d01638ea1cd1d6d9cefe468"],["/categories/集锦/Python/index.html","48d6f2b33010aa60b19d4f551a883f31"],["/categories/集锦/index.html","04cf132bad28140745f4a39e2ae70cd2"],["/css/first.css","ac2d0010102d22ded3aa536d16e52b73"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/message.css","b0ce3ca232f809c8d7a85c79bf1f7ff8"],["/css/style.css","f33cadc59019a1af1d898b222bf512f6"],["/friends/index.html","2fe4704a2f2956ab11d020c5ee7611d1"],["/gallery/index.html","63f4bc7639ebb10460b077618443184f"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","a4b527cf6418aad5d680d06f76e079e3"],["/js/aplayer.js","f10ee7aff4ce278045da925ac6510d29"],["/js/app.js","d14976ee97145aa14568c13c6554dcc4"],["/js/jquery.parallax.min.js","38cf4791e24aeaa8101bd2c816400718"],["/js/message.js","38da736cdf513c9a15a0a2a16a34eeae"],["/js/plugins/contributors.js","23ba3efa08d9fb1aae753ceaa6df2711"],["/js/plugins/friends.js","239cf9c648af390f866ed00cead3e23d"],["/js/plugins/sites.js","15bb31fc27abc888b17cc5d822808604"],["/js/rightMenu.js","19b2a577c30a04732f02b86bda62e0b9"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","02858bebe7d889845724ba50c869786b"],["/page/2/index.html","ec8c35de2f96916901f130571b31a695"],["/page/3/index.html","ea13ac130b80ac758ceb626f1b8d02fb"],["/page/4/index.html","c42c668a53357f92803208fb18daf842"],["/page/5/index.html","6610fcb0cf383d684c4f46a4b1d67eb2"],["/page/6/index.html","40b2a212ffca4a02aaf9911cf30fa752"],["/shuoshuo/index.html","f323287a24a4c21ad9698d8ac58a9bfb"],["/sw-register.js","7b5511492f69f49f13901bc49a29eb19"],["/tags/AI/index.html","ca76e677b5c16829be1dfc04210f0b87"],["/tags/Android/index.html","e93d8a792f834120102110cd915b4d74"],["/tags/C/index.html","ede1be51344b05c9c842e31c25145baa"],["/tags/C/page/2/index.html","19a3fb1553f58262c2b9a2425b8a5163"],["/tags/C99/index.html","99adb440ab6a6b3b7c087a9330138318"],["/tags/CSAPP/index.html","ce0dc44a5acc351b70d8d7ffa6ca0552"],["/tags/DNN/index.html","ce9a3d107f1579da447a5c69d58fc8df"],["/tags/DNS/index.html","8221a0f345fad6b4e07e77c2f3063936"],["/tags/FPGA/index.html","4dafed86c093de58e193fad3db3f752e"],["/tags/HDFS/index.html","a5521bf011efdec14feb12536ffa6733"],["/tags/Java/index.html","75da15648b47411510f5f477af62780e"],["/tags/JobShop/index.html","b465b185d3e0262a7ec0d68cbe46fb32"],["/tags/K-Means/index.html","736bcd1ef64ac70366d755b177163c71"],["/tags/Kafka/index.html","813017c2d3bc46106af6ee364487c4df"],["/tags/LL1/index.html","c449f0e4c281895a4db780bb1949c1d8"],["/tags/LR/index.html","474014c8edb859dc38b868ff7296dac0"],["/tags/Linux/index.html","a59993fa74724322df880487a2ca15db"],["/tags/MIPS/index.html","5ebc90f176d24f5ce574d425da01ab2f"],["/tags/MOOC/index.html","9b9de6bf1c0c53ec5937c083ba9c2280"],["/tags/MPLS/index.html","e2ea3520038303e68767c64f0df99d2f"],["/tags/MapReduce/index.html","0f8a69cd3bd9052e7ebc411c0c66539a"],["/tags/Matplotlib/index.html","ca4726929950de5ebc581e1411160cef"],["/tags/MiniSYS/index.html","8a56452f933f34563542570a1240e8b5"],["/tags/Python/index.html","4610f97291789c9443c10a9b906a4d71"],["/tags/QT/index.html","5174efd82bddea1523fff62ce864b113"],["/tags/RNN/index.html","5da259d405b0a6c902f19a7fc78c6ff0"],["/tags/SIP/index.html","568a2d9557f6a9a864d1dfdd8a49df40"],["/tags/Scala/index.html","9c9d3349fe0657ce4b347ba059e1afbf"],["/tags/Shell/index.html","349849c286e4a0d8eb9ebab51e28e2ce"],["/tags/Spark/index.html","71ebae131d503fe392a594243c396cd9"],["/tags/Streaming/index.html","72cb9b846df37abd9e2a5cd4c4cfb8c4"],["/tags/Struct/index.html","bae2aba93e2954aaa21f8675d6ebf1e3"],["/tags/Verilog/index.html","66ce704e81aca9e5839d99978e871690"],["/tags/first/index.html","bc089f7e1de35b620e61e7a66f09fe3d"],["/tags/iPython/index.html","d9fa61323a34652dfb142279427198eb"],["/tags/index.html","c8b153c65210d309b123c4228fb72fb3"],["/tags/ls/index.html","24fff4519263dbbee4e9799d3912840d"],["/tags/习题/index.html","67dd62c31cfc7a6d4632073d592231c6"],["/tags/交换原理/index.html","767dd2f5b00abe962d6e301432a6b2e6"],["/tags/人工智能/index.html","3391026f41fda4bd3e0ff4b47c43240c"],["/tags/信号量/index.html","628d6575cebd623e661a05b255acaadc"],["/tags/内存管理/index.html","dac5de93ef4d28dedd8769d5d4a55aa6"],["/tags/决策树/index.html","e7c5859074d33b95d8e5fb82eaa5bfe2"],["/tags/分治/index.html","9c5a694f53b6d6d101d2ef2a75cf043a"],["/tags/分类/index.html","c8836400ad57ad9287b5f8fe3cd059aa"],["/tags/动态规划/index.html","b09ebe6ca6958d4b84e1588afe0b8691"],["/tags/华为云/index.html","9aec8c6713156265c14cd90895a369f0"],["/tags/单词计数/index.html","b0ddc15a936342099b9151141d09b4a5"],["/tags/可视化/index.html","de6154b8b07cda73fde6b946f9775881"],["/tags/同步互斥/index.html","4f9b740f21af3c635cfe3aee3b9e3341"],["/tags/大数据/index.html","445264ae4cfe7b5eec1b1b31824f27a9"],["/tags/学堂在线/index.html","a9f8b4700274c9b572cebc8ae3398ae7"],["/tags/实战/index.html","1d42c463041e28f2830ebfa6c1cfeeb4"],["/tags/实验/index.html","4e68c7cf2f0765e40dbe9b8e657e5f35"],["/tags/实验/page/2/index.html","18991089616a9bedba10ee0509932ab5"],["/tags/小游戏/index.html","aa2c22d4d94fcd3b6eb8fcab2e42d328"],["/tags/工程/index.html","93b87b90f606ac52d9a67f391802d19d"],["/tags/工程/page/2/index.html","32cb9761bf69c6b705bd669cdcbb3d1d"],["/tags/手写识别/index.html","94e88306c098687b73ae637a319285d5"],["/tags/拓展/index.html","b269f95e3956d3d2f62474976b4edc62"],["/tags/操作系统/index.html","42ed4869ad16f767f5bd333fa72c4050"],["/tags/数据处理/index.html","f64062517933a9148efd240fa2be7181"],["/tags/日志分析/index.html","e0d28aba9a218f79c2cd14f3a91292a6"],["/tags/易错点/index.html","ca488ff1ae4038f836acd30f7d159061"],["/tags/机器学习/index.html","6f5eb32080f1c79be0bb71567002e02f"],["/tags/条件熵/index.html","31843ede5a931a5556694a76d5e26435"],["/tags/正则表达式/index.html","7db40c97cfca1ece20eebdb377615069"],["/tags/汇编/index.html","1b877e3bc1cc0a1e33b8f6ef5d116332"],["/tags/流计算/index.html","7a4d9d24ea7b33362496a46cb7c8af67"],["/tags/爬虫/index.html","66f91189ddddd54effc6c4ebc47a65ad"],["/tags/现代交换原理/index.html","94c4e4e1b204fc6d66952dfdb85fafab"],["/tags/生产者消费者/index.html","dd80063c9c309987e70596a14ef5b5ce"],["/tags/知识/index.html","7701de50eda00c355ff22749ab417272"],["/tags/算法设计/index.html","38e8cbaf402767af13fafc8674277ec1"],["/tags/线程/index.html","8279f5bfdb4c0f24066c599900575b4e"],["/tags/编译原理/index.html","ef6ab5d5e5c412cdaf2238d523fab59a"],["/tags/网课/index.html","9fffa545a5bc0f5d92763aef6903d178"],["/tags/聚类/index.html","d295c39ec42779cf1f53d635e99b072d"],["/tags/脚本/index.html","ca9eb8b173056d1f8e78064289d83869"],["/tags/计算机系统结构/index.html","f21ad5775d92d4da7b33235b9b929d30"],["/tags/计算机组成原理/index.html","2f67a66877211422df2024b2939e95b0"],["/tags/计算机网络/index.html","4544f18b47a82e6e990c6c6e6025356c"],["/tags/词法分析/index.html","b2f6aea2bbebe45c5cab01f260b166bf"],["/tags/语法分析/index.html","96ccc04ca82a74aa41f669ef2a9359ee"],["/tags/读者写者/index.html","403ea11f93f80bf06e4c4465f62bc7dc"],["/tags/课程/index.html","a65a44ce2a7f9ead0c1ab090cb70946e"],["/tags/起名字/index.html","144a460e88c40802097fca5f18042ea9"],["/tags/软件工程/index.html","bf336f4f7088af4a52f3f98d4f0b298e"],["/tags/进程/index.html","45a99fd6cd2fb198c95da494c5ca822c"],["/tags/通信/index.html","0c2afed029cdc4a5f488c0077be8bc63"],["/tags/遍历目录/index.html","e994c64655312565f3aa03a07a812458"],["/tags/难点/index.html","4966881a5d743a75ae8c80a3a684f5ac"],["/tags/项目/index.html","3f7d4389d82d999975f7d70d3d0e60df"]];
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
