/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","4bb3718bbc6e515199910a2b89cd117b"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","1fe2ad81f7d0dee9fb9429ff2b847f9f"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","7c83222670c83d2df98b39a97621a08a"],["/2020/03/26/计算机系统结构-实验1和2-遇到的问题/index.html","6195a95a5228fba173be61e60d154ecc"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","bdc0a995442407502d269a2d44086722"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","2d3f1764cb44f40d4aa621fff4b1eb88"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","ea7b152c0967da260e41de25cf99d978"],["/2020/04/18/机器学习-知识拓展-条件熵/index.html","8699aa27748ec587f96867333bf90440"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","b3479059bd0d170b5d332fe5aca569be"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","a4e9e792459f8aef9a2241f9df4485a1"],["/2020/04/26/机器学习-实验-决策树/index.html","8ea3f5e8807fb2280040d47c03aaa00d"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","2b7ec4b6a74c872dfafbd2480cc2237c"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","4467fa674b425cbbd40ebcc0a06a1beb"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","61aa4fcb0fb4c3859719babbd9032294"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","1557ade64dbd504f8d3a0d5ec2db2fee"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","387525e0e50da6b99ad8f259d5688ee2"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","3bf88780cb93b6a791da0dd6375b15b8"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","8505774c37ee59e27b9be3509b6fb102"],["/2020/06/11/机器学习-实验-DNN-手写识别/index.html","989e070c79e45195da94792344171df1"],["/2020/06/18/大数据-习题/index.html","b389ce119fddaf78418c0c48bb3aabb9"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","c933632203004f7418a108d622aafca2"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","cfe92a4283d6238a130224e2f3371177"],["/2020/06/24/Linux-拓展学习/index.html","63a167600b3bb227ff447b364518d4ec"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","50b451c3e0f10277b6149445e2680b96"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","95f2b7972c8c02f1333920f9362db67a"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","19068dffa2dbba9008651fea3a8e6d13"],["/2020/07/15/C和C++的struct使用总结/index.html","b1ba0e56adcd3bb9d5767497a8104e4e"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","7304fe07558bb156c41531c34022a9d5"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","974782bb22fa63f99c0965632972c435"],["/2020/08/10/机器学习-实验-花卉识别/index.html","21d03ce4318798b99e72663354a976e1"],["/2020/08/15/Python-项目集锦/index.html","dded1b90aee6a53e6131c04acc0f2bca"],["/2020/09/01/编译原理-词法分析/index.html","2c2b38ba704b39053d2378ccce188983"],["/2020/09/02/编译原理-语法分析-LL1/index.html","9e8cc991d023133a54ff9ab6ffff2ad1"],["/2020/09/02/编译原理-语法分析-LR/index.html","d1aa3b76b402928a1ea4274a6c9c0711"],["/2020/09/03/操作系统-内存管理/index.html","0538cd5f285df60423c11b29d5807cfc"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","714d9a8b30fa0297b54e4a6297f61efb"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","15af4b9c112dc445d188fcde033a88ff"],["/2020/09/04/CSAPP-实验集锦/index.html","ed7baff24912fa2dd72d53c1917dc86c"],["/2020/09/10/计算机网络-实验集锦/index.html","2cfd97ef6b2a6654b6ead2b2f728b086"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","b3c1f769748138b6d975aaefbda079c9"],["/2020/09/30/C++工程项目-JobShop/index.html","9e8bd39a2ffa625c019cffb80f298560"],["/2020/10/09/交换原理-实验1-时间表调度实验/index.html","37fd0f9634f74dc9b37de84c6b4d4dff"],["/2020/10/09/交换原理-实验2-摘挂机检测实验/index.html","79199bf55dd2ee88ae8732b002f63c3c"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","84574148095fa6b8b38695d2c790aee2"],["/2020/10/09/交换原理-实验4-拨打SIP电话/index.html","bfcb7ec937b6dd013d89126062a62083"],["/2021/01/04/Android-项目集锦/index.html","91846d0e02e916d15a5be1995e4e4685"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","3803aa280dca089b7396f523f407bfcd"],["/2021/01/04/C++工程项目-travel/index.html","33299be43e52e4f039c582807cbad097"],["/2021/01/04/算法设计-分治-最接近点对/index.html","90c0b20893a558486442022a2a16f89d"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","45e2adbeea1438ace880006df0ec20e2"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","070ef87f02620509918dd4c1f53b27bb"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","ef0fb12fc6550795158f98a2884c2c90"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","516b6949005dd3be9ebb90e40fe6b1a8"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","90608834f6abc75665981849358e29e2"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","3c87e3cba74b92d60f1fd2419bffa3fe"],["/404.html","63f1f317db5d982d0c064ab25b96a3ac"],["/about/index.html","ff54d1203db47111f1d4c4d919375004"],["/archives/2020/02/index.html","e39363c09484d85af3429fde5a913d9c"],["/archives/2020/03/index.html","66f234847290476c73909d00397c0853"],["/archives/2020/04/index.html","356a8f6e6f4ac6e016c095d9c5d99ad0"],["/archives/2020/05/index.html","4cd6e6537bd4f611ba0f3aebf23bfa50"],["/archives/2020/06/index.html","4eed374bb42ecf58d7894bc25e0303fa"],["/archives/2020/07/index.html","dc46ef054268c041aecf5b419061601b"],["/archives/2020/08/index.html","8348f9c208996ffc1ec4102d7b3e128a"],["/archives/2020/09/index.html","fe51879294426aa971459123109488fb"],["/archives/2020/10/index.html","b421444a18c861f81c8927e71856f0d9"],["/archives/2020/index.html","90628108b0dfe4301c1f140cdef05727"],["/archives/2020/page/2/index.html","d6bb4f952f507e46a3f5e5bee6b47ce7"],["/archives/2020/page/3/index.html","c98ba50fa0b7d2582281b31d489fe5a9"],["/archives/2020/page/4/index.html","63c29ecd1ca54250d7242ee19c0669fb"],["/archives/2020/page/5/index.html","49e96f6f8693ce74dbddad5112d12fec"],["/archives/2021/01/index.html","678ebcdaa6baebfa35795cd3ccc81151"],["/archives/2021/index.html","75178796a31f4eb1bda9c01da4c53b73"],["/archives/index.html","8592aa63629380a5db8d05ef1faf7d78"],["/archives/page/2/index.html","8592aa63629380a5db8d05ef1faf7d78"],["/archives/page/3/index.html","8592aa63629380a5db8d05ef1faf7d78"],["/archives/page/4/index.html","8592aa63629380a5db8d05ef1faf7d78"],["/archives/page/5/index.html","81f563e47844a43ece86748df08929b8"],["/archives/page/6/index.html","81f563e47844a43ece86748df08929b8"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/categories/C-C/index.html","c9a34676ae8e1be8386f36796cc9e377"],["/categories/C-C/page/2/index.html","a802728b0c4af3571ee87b015f74ee8a"],["/categories/C-C/拓展学习/index.html","0b6740c7235ecf34c927e5dfa31616f7"],["/categories/C-C/操作系统/index.html","2f7231101aa4efd5b5254814f66323d6"],["/categories/C-C/算法设计/index.html","2ace399f66283d73839286fe7f59a5d2"],["/categories/C-C/编译原理/index.html","d7dd9ab35f33cbbb6e68bb093721165c"],["/categories/C-C/软件工程/index.html","78294321fb277f17c05a12d305690466"],["/categories/C-C/项目/index.html","cceba99dae104686ef810eeb6480dc86"],["/categories/Java/Android项目/index.html","35b0664d51940e946bf0e2e1acd2d6a2"],["/categories/Java/index.html","b46674be1d8138d73b1b365f4aad1225"],["/categories/Linux/index.html","76da3f5d86e56992cd3e5ad42c899fc9"],["/categories/Linux/上机实战/index.html","360000bb19a51d169ea23e11672dc14e"],["/categories/Linux/习题/index.html","8648124ed6bbd03f36974d80047a1ae9"],["/categories/Linux/拓展学习/index.html","62235fd813774cb684743d8d3da182d4"],["/categories/Python/index.html","3eac4cf33ecc70a78ac296b810e6b5e3"],["/categories/Python/爬虫/index.html","ba1a8df32afa1d9b1947956709113aa0"],["/categories/index.html","a081dc6efb7b742f1e5b4fd612ee5559"],["/categories/交换原理/index.html","963fe7d19fbd8f78356b07a30a750a20"],["/categories/交换原理/实验/index.html","9373cf47494d27748f6e8d1b34d9ffb8"],["/categories/其他/index.html","9940fef583144ba7e833068d20e05ef0"],["/categories/大数据/index.html","f6903305fde348d4c913d3cb0ce719c0"],["/categories/大数据/习题/index.html","8611f8a11c94520206314abe3285415d"],["/categories/大数据/实战/index.html","6b188d59bf9b6fda2d95614a61f3a1be"],["/categories/机器学习/index.html","9afc2c08040512d37e52ec2b29b7660f"],["/categories/机器学习/实验/index.html","81fdfb8ba172b5b03812701359b79c35"],["/categories/机器学习/知识拓展/index.html","af245985981c4a6e425fbc2edef683ab"],["/categories/现代交换原理/index.html","da004a1aaf21cffaf1e217220a45f98e"],["/categories/现代交换原理/习题/index.html","4e8af2d0fa9b90bacac27e47197e63c8"],["/categories/计算机系统结构/index.html","9a7862ac8698250ccf39b90c198ff897"],["/categories/计算机系统结构/实验/index.html","8f9aa99039b9ef7f81fc9de2436e01b9"],["/categories/计算机组成原理/index.html","fbbed6225336a396922345a6e676d2a7"],["/categories/计算机组成原理/实验/index.html","77ec68fdbb2389d673694da3e77ce88c"],["/categories/计算机网络/index.html","ec6ea7ccadf00cd6391807572a4d893e"],["/categories/计算机网络/实验/index.html","e309196db5ff18e9a5b25d0210fcceb5"],["/categories/集锦/Android/index.html","886b9ba5d2439b75c89f64f9a3d5f730"],["/categories/集锦/CSAPP/index.html","57799bb1464cd8d5affbfa8d10a08f7f"],["/categories/集锦/Python/index.html","60cc1dd49fbf51d36bf286f1b5dac82b"],["/categories/集锦/index.html","16c982d357e981435aa9f3b9c94c7694"],["/css/first.css","01a90baf99fa8f190becabd973782198"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/style.css","29bd14d027343cdf06b66cce6bf66453"],["/friends/index.html","c2dc83fa9a531c00a81239e0e90674c4"],["/gallery/index.html","63f4bc7639ebb10460b077618443184f"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/games/tank/index.html","a4a2448b8b53e14bf7bad5c1f71e614a"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","26a8bddc2318bf288a825f8ed7953edd"],["/js/aplayer.js","6e605f0855251e101d3024646f3eac60"],["/js/app.js","1948329f2fd7e750ade4bdc49138c09b"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","581b59a286b2a8cebb197e0222a4f39a"],["/page/2/index.html","a33495cc7e8364b185a157b9017952fe"],["/page/3/index.html","0dcf36dd1d96614a796f98e42720a166"],["/page/4/index.html","ffe78264e71e4b9b5c17c03c164985d8"],["/page/5/index.html","7209ff3aeb37ec2703be8dd4df5df959"],["/page/6/index.html","93c9ae4dffe9c55563209d7161463ee2"],["/shuoshuo/index.html","9a19f0899a506c8cda61aef6d5ab4493"],["/sw-register.js","dbc9309f1a56de7ad51cad8763021f2f"],["/tags/AI/index.html","7a852cbf3a2f8809d8fc00adbeb427ea"],["/tags/Android/index.html","84021afc923bbf631571041f3eabf910"],["/tags/C/index.html","5343dddc26699a39e91dfa39b4b4314d"],["/tags/C/page/2/index.html","c12d474af5413bb604ae1df5f0c9a343"],["/tags/C99/index.html","b9befc1938075810d7d56e5be92af8b1"],["/tags/CSAPP/index.html","9f1086d57c2f23deb2c0d09a077ec300"],["/tags/DNN/index.html","3ec853da8a92587a0e395426d0cc47b5"],["/tags/DNS/index.html","78ad271161df34d2a16f9914e744d1dc"],["/tags/FPGA/index.html","7b41219950ab35674b20972c7ab68152"],["/tags/HDFS/index.html","559467c97ae747a99fb7f9384f5bc0ec"],["/tags/Java/index.html","c16a54722224af3c320a7865a82d7bd9"],["/tags/JobShop/index.html","eb86e0c417ef9430d112cdf84a6702bc"],["/tags/K-Means/index.html","c14182b99e0a3e0576783acbed2aff00"],["/tags/Kafka/index.html","1235f0177f8ac51c85cb07dbbf5c1e56"],["/tags/LL1/index.html","92a88ce5e4d3cbf1283ddafc19c20b61"],["/tags/LR/index.html","9cdff3d2a3c54db42b5f1ab6a6e9241b"],["/tags/Linux/index.html","72ac4cff0cc55a5647a40a910b10bb72"],["/tags/MIPS/index.html","157eee651179715e0bd9ae3b1b70f7f8"],["/tags/MOOC/index.html","519fa0c80b441f6f9be114c9a90d6a33"],["/tags/MPLS/index.html","4859d39960abfca23c7fd816aa716097"],["/tags/MapReduce/index.html","50bdf6b0a263a367fc0cd64e73e53234"],["/tags/Matplotlib/index.html","c6bc1428766200c7cbb29412241486aa"],["/tags/MiniSYS/index.html","fba8fea7b8743ab2f2f0191ea53598a5"],["/tags/Python/index.html","0edddde3cea0c9670de3968bc7009b17"],["/tags/QT/index.html","73583ca2e03e6048c941be2e993b3bae"],["/tags/RNN/index.html","8ee9069ea967ee7f0d046181efd49b58"],["/tags/SIP/index.html","d60828ea704914cd406f427b56767b14"],["/tags/Scala/index.html","466316faccd27555260954a586f19373"],["/tags/Shell/index.html","1e0f21a6abc6d149dd794f92053f7468"],["/tags/Spark/index.html","902b2df8180d234d38b44ef829ec5efb"],["/tags/Streaming/index.html","fa5a9947df2a169d71c161ac925aa838"],["/tags/Struct/index.html","5539e18f72ab716bad07d5332dd66528"],["/tags/Verilog/index.html","4d5104730e11e819f489865b0ae1d6e1"],["/tags/first/index.html","bee98bf54d822a45156bc2f50ff0b1b7"],["/tags/iPython/index.html","bc5db4af67ad387566ae121f657d40d8"],["/tags/index.html","3054d102ad0706d2635105a1c1bb17b7"],["/tags/ls/index.html","e67c5dcb376833f0d2622a34f425bb40"],["/tags/习题/index.html","18761196af82e73a80a60b7d598115c8"],["/tags/交换原理/index.html","9d3f5689bb8d985175cc95a595a44acd"],["/tags/人工智能/index.html","de3e511972ecc3ca33186ba2479c91fa"],["/tags/信号量/index.html","e1a5d044b48706fff670aba9466c15ac"],["/tags/内存管理/index.html","dbc76ba47ea93e2ec139f2f8c01eedde"],["/tags/决策树/index.html","fe2c3ed3d337a21305f6073b16316220"],["/tags/分治/index.html","1a19e380fc592797dd203a4640539aeb"],["/tags/分类/index.html","bd2ed35bbc3c07c67052e0ca9cde1be7"],["/tags/动态规划/index.html","8724f4005b795a00265128a02552e9c4"],["/tags/华为云/index.html","eb7a6fd9e6e10df6dcba0a9e23643cdc"],["/tags/单词计数/index.html","684af0628b4f823ad19b56d590fb0665"],["/tags/可视化/index.html","7d496c36dc357c36acdc9ec6d1adcb85"],["/tags/同步互斥/index.html","cf373e86a493d4b25890664ba9c54ffe"],["/tags/大数据/index.html","7dcbf059b717a100c5274d7e7a52b00e"],["/tags/学堂在线/index.html","5493dc661b491f090be24ae0f652a562"],["/tags/实战/index.html","bfbb3c16d1aa8772144f6c826f21b153"],["/tags/实验/index.html","d1f538cd81cf1dc94aaa5d6d1d291a87"],["/tags/实验/page/2/index.html","38f1da13037daf78b02df7204a892a40"],["/tags/小游戏/index.html","d4901a8878bfb97e5e61cac91b846878"],["/tags/工程/index.html","24915b1175f14e3054cffb0c47e814d9"],["/tags/工程/page/2/index.html","50e99233c54aa25e1819572a2ae34047"],["/tags/手写识别/index.html","b612282115254b15bd6f6a49da06f3a2"],["/tags/拓展/index.html","917b6b5e392149ed6cf8550c55f53455"],["/tags/操作系统/index.html","6d6f6c1ea4caef76bb9dbfb37aa8216a"],["/tags/数据处理/index.html","f6f570d51d5b22ffd36911d93ede9fe2"],["/tags/日志分析/index.html","da2e8a2bfb1fb404e820ed7202ab8c59"],["/tags/易错点/index.html","d8c17f1c498af6ee6e9bc995fb1e4783"],["/tags/机器学习/index.html","2e7a7ff54427bd80bce4e91a8fffb43c"],["/tags/条件熵/index.html","762c3482796fb91aad95c0b83afab42c"],["/tags/正则表达式/index.html","1a03be20d3e88fc04c348fd1dbf2f206"],["/tags/汇编/index.html","ddb699791cae7c2fd04f15fe79f02a3d"],["/tags/流计算/index.html","81378da9984be62ba94ada9bff2c44f3"],["/tags/爬虫/index.html","977d4fa8357f165706d727140e40a437"],["/tags/现代交换原理/index.html","1593e5f3755d1ee00217b3178fc74342"],["/tags/生产者消费者/index.html","de739c1b18b644a4b32493f6e6eb9859"],["/tags/知识/index.html","dbf0a4b45fb533f5a5a1d43adea5592c"],["/tags/算法设计/index.html","05c6e69e8569a1aafb6ba795c9c52cad"],["/tags/线程/index.html","20930d85603538324ae8ebd59fd2de13"],["/tags/编译原理/index.html","9e0871adc9adf64df41c2d62b79a9bf8"],["/tags/网课/index.html","2ec07ad53f389d5c7979cb5e78f80357"],["/tags/聚类/index.html","caee694a0e0fb7dc625ad65352cc5902"],["/tags/脚本/index.html","b252f61ecaa747f584e4c93292958e6e"],["/tags/计算机系统结构/index.html","b9614ee87582aafef45b98bc7e87dc55"],["/tags/计算机组成原理/index.html","6121636101eb0c8c496bee2c691cfc81"],["/tags/计算机网络/index.html","237d2679f3c806a54fba25750fe86c9b"],["/tags/词法分析/index.html","69e4b217cd7324cd1d1ab39a5b63de46"],["/tags/语法分析/index.html","c1235be010b9fd701f2533ba3ebad92b"],["/tags/读者写者/index.html","33e132fcd387f76e211ceb27f17b6611"],["/tags/课程/index.html","ce7808e86be46b69f6d784f6887eade0"],["/tags/起名字/index.html","09d1d14ddf219159d2377d9e46666e26"],["/tags/软件工程/index.html","3838845e2585e09980cf421ca0f29079"],["/tags/进程/index.html","6eabd4d026218f9ec1ca97fbaa92e0a1"],["/tags/通信/index.html","82cd5ee90b84c921b417275c44c3bfaa"],["/tags/遍历目录/index.html","1d200e5d02cfb5372dbc283c23c1afa2"],["/tags/难点/index.html","a583faea7247efcdcb7d633fa5285910"],["/tags/项目/index.html","9baf062142659b5e8207e7a20142d12e"]];
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
