/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","6913d068cd7747882aa4fe082d547964"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","14d0432b2f5553e417b4a56e9732bcb8"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","4a17a1ae4b8b89ca64eb0a74ce3028df"],["/2020/03/26/计算机系统结构-实验1和2-遇到的问题/index.html","1e708f5cf40f32aca2074ef49718fd00"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","fd6c193e810df01d4ea9aa1b759ea347"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","6e5f9236adf802fc62704cc6236adf2a"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","5e014332f99d9367b0a8bd7a642ddf3f"],["/2020/04/18/机器学习-知识拓展-条件熵/index.html","7fb516fad16448146a794433a945b4b5"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","6d63f4bb872c9c372c9ef2b6fe12a628"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","14084019e72bc0df21d09c5bc11db168"],["/2020/04/26/机器学习-实验-决策树/index.html","c4055200b3e9a5990ae412b26c37b9e1"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","4c5eeb59cd9cdbd64a034f3e4b845e96"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","01de7f56397364a8b2b078fdec05da2c"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","3deee850549f92416a84812cdad8157a"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","41f94a5706e9136ea93537cb902c9f1b"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","2b97238e96d91974bc5a75f9e90731b7"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","69ee65fafe9bbea0c2a6be5c58375f52"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","5bf18b302cd641d8f87868c149fec0ed"],["/2020/06/11/机器学习-实验-DNN-手写识别/index.html","1dce961d8e0bbf9f3b7c041556dedac9"],["/2020/06/18/大数据-习题/index.html","50757d3c44354ed2ffb0d918d1cd128f"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","5f636fa43208ef51605a56b45f9b60b6"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","6f0bd0cc6a95b4e0de21634e5a9fac9f"],["/2020/06/24/Linux-拓展学习/index.html","82733e251a8728fdee86cc14dcd289ce"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","2d23dc60469d89eaecee3735ef745ace"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","0d94d4b87de5eeb350f736af69dc8d6f"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","4fbad6b63e518f9bf63d7f24a382fcba"],["/2020/07/15/C和C++的struct使用总结/index.html","4a89c637194d076ffb24fbc13b352096"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","35900200f0c47fef90c0a8ec7921dd6b"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","8ff064651c0941397565dbd6b922a766"],["/2020/08/10/机器学习-实验-花卉识别/index.html","52768a1b8f7a1fe0101dc7fba68ce7c1"],["/2020/08/15/Python-项目集锦/index.html","860d24577eb77a2e6558269bdd9acba5"],["/2020/09/01/编译原理-词法分析/index.html","bf553fb0f58ebb1697c618ea8f1cd138"],["/2020/09/02/编译原理-语法分析-LL1/index.html","22463b0166d4765f4d0a869f0f899ac5"],["/2020/09/02/编译原理-语法分析-LR/index.html","8ec242d899075b62b28921b51aefb000"],["/2020/09/03/操作系统-内存管理/index.html","8c15d4ab902a5d4963e73bef875191f2"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","474de84915f9ea65c3268a3ef0ea95f9"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","5b55c04c43eb6f0ba156140f140cc3ac"],["/2020/09/04/CSAPP-实验集锦/index.html","6aa7a01b9c35d07029fdb4d034454505"],["/2020/09/10/计算机网络-实验集锦/index.html","b07ff2c5115d1dad0e8e216429c180e6"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","00e2dc42e3503d855a893abcafa96eb1"],["/2020/09/30/C++工程项目-JobShop/index.html","69dd876406f68be5a247bbfb5cde8b7c"],["/2020/10/09/交换原理-实验1-时间表调度实验/index.html","46776476e9699e7370c91811536f7d92"],["/2020/10/09/交换原理-实验2-摘挂机检测实验/index.html","e9667b5ebaa26711efaa9992a70514a6"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","79f222d9daaee35b6ac05713c250a8ef"],["/2020/10/09/交换原理-实验4-拨打SIP电话/index.html","e8398f0682bcb31c3b39527f7126ab46"],["/2021/01/04/Android-项目集锦/index.html","2eb8a15b0cb98417ca197c3dc23ea087"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","08e9c4e5fea712417e752f58d7e01399"],["/2021/01/04/C++工程项目-travel/index.html","bdcbc50f094d45a035b93ae2c5c907b6"],["/2021/01/04/算法设计-分治-最接近点对/index.html","a16e9cea57588db5fdc8ec14d4952b17"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","386e4857105760ee42498b578021f91b"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","e1612cbc7ac578ca131299fe350e073f"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","0415faa29ce662748407dc61253d9e33"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","0a45c88e5049e74a006a88cd7e5caf9d"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","76a7d0c55231483050ee221121524c28"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","e84a5738a59bd1d3d84896f7d4e41eed"],["/404.html","782ca7d7257e2c3be4b3a877b1e16404"],["/about/index.html","423c1afb53fc9ecc205e895bcbd97631"],["/archives/2020/02/index.html","9f339731fc10af55e0d39ffe0d1b382a"],["/archives/2020/03/index.html","bfa1f1ebf537566d2fe023cf5c551e8f"],["/archives/2020/04/index.html","8a7005d8b178c532542fe9c86ed79c3f"],["/archives/2020/05/index.html","187f2398b88392113477994c499f2796"],["/archives/2020/06/index.html","f1e5e9410827d9bd14ee2a57cdb06c96"],["/archives/2020/07/index.html","769a9760d58c296b3ff2a51ae8522f18"],["/archives/2020/08/index.html","6e54ee91a6c6bd11145be936f934964e"],["/archives/2020/09/index.html","71eae21a7a5d5fe58b2183374e130164"],["/archives/2020/10/index.html","884d979287037e458904b33f994d8d52"],["/archives/2020/index.html","4f3f69c8987fbc348cda6d992b498fc6"],["/archives/2020/page/2/index.html","1e5d72db42c160fefa2cdc40aaa6dc05"],["/archives/2020/page/3/index.html","64a95e95ee3084edb88cbad6e51529fe"],["/archives/2020/page/4/index.html","8713eefedd68111f107dacbeb454cf80"],["/archives/2020/page/5/index.html","702a8b65581ba10b396ac7e6e0465fd0"],["/archives/2021/01/index.html","20e859a8491b66707920f51105c67410"],["/archives/2021/index.html","aea96dba53ab864169c1783c202e32cd"],["/archives/index.html","394df5fd7c7e98017ee2dd05375e3e59"],["/archives/page/2/index.html","394df5fd7c7e98017ee2dd05375e3e59"],["/archives/page/3/index.html","394df5fd7c7e98017ee2dd05375e3e59"],["/archives/page/4/index.html","3336df9d6ebf4cd03d33ef53e5852d61"],["/archives/page/5/index.html","3336df9d6ebf4cd03d33ef53e5852d61"],["/archives/page/6/index.html","3336df9d6ebf4cd03d33ef53e5852d61"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/categories/C-C/index.html","76c2ed24c9a7d90017c7c0157af47b52"],["/categories/C-C/page/2/index.html","6b2838e0b84bda955c151375decbb384"],["/categories/C-C/拓展学习/index.html","9b25f452e31ead071b4187436eb5942d"],["/categories/C-C/操作系统/index.html","b7824aa673512fe2f8a6ba13d8f8a18c"],["/categories/C-C/算法设计/index.html","87a35e68b5ce8a148531b13bbbaae932"],["/categories/C-C/编译原理/index.html","e9801d90137f1cf83cdc455eaca79c30"],["/categories/C-C/软件工程/index.html","5f46c6f133466e92e5ecf3d674ad5533"],["/categories/C-C/项目/index.html","e210c8a645d816faff1b6dd33621981f"],["/categories/Java/Android项目/index.html","0a5ed7df719d7e467e04c2c47b57b6d1"],["/categories/Java/index.html","ba311e712922700cae634971aee8f057"],["/categories/Linux/index.html","fc0b3a142c4af0af8d813100ca0d3c12"],["/categories/Linux/上机实战/index.html","14bbb9647cecf6598366ead6efa4df4a"],["/categories/Linux/习题/index.html","56379c21303ad034921f775da909f48e"],["/categories/Linux/拓展学习/index.html","4e19696fb6a8aa73bd5f7745bbfd5fca"],["/categories/Python/index.html","3f822577e50d3e083597ca36e91d6347"],["/categories/Python/爬虫/index.html","52a3a4d3baca76879237d31d2b89fa8d"],["/categories/index.html","a7ad8c79acbae75c8d3bd6c0f68c5d7b"],["/categories/交换原理/index.html","fc73c7fb9bb17e659e55d55b00c5510b"],["/categories/交换原理/实验/index.html","910559d130ae4c29ef831ebfc29948ee"],["/categories/其他/index.html","88a6f41ade768e61fb86c21153391c81"],["/categories/大数据/index.html","bbe0a111b72d2b2ea79355382acd2666"],["/categories/大数据/习题/index.html","3d3c847afa314abc3fe8042e518dce5d"],["/categories/大数据/实战/index.html","2da446f6c7d367d6cf1c3846a8e4c2cb"],["/categories/机器学习/index.html","c45adf1400b9c46e4df54d2701328e33"],["/categories/机器学习/实验/index.html","9fbb059c7fef18f352da80613aad431a"],["/categories/机器学习/知识拓展/index.html","8c36e3694cd9d2752e48e448a8892011"],["/categories/现代交换原理/index.html","1dd02f9cf9d0cb3a0936c00215687de2"],["/categories/现代交换原理/习题/index.html","6eb601a1f8dcdc762a44b2dff4b768ac"],["/categories/计算机系统结构/index.html","311db14a40aceba614d14724ef9004a4"],["/categories/计算机系统结构/实验/index.html","72e6d274f2a1ac1fd8b2ed8b301daf22"],["/categories/计算机组成原理/index.html","6b25c9ff0ff7aeedbaa6ac64f9b13b5f"],["/categories/计算机组成原理/实验/index.html","21347b5a87c3cb1c7cf2c3479227c6e1"],["/categories/计算机网络/index.html","a573c4b5c6c5715a6a88cf93d1bdbf9d"],["/categories/计算机网络/实验/index.html","f0c5cfe31e8c784578d3981b16690117"],["/categories/集锦/Android/index.html","0b5718173f663a9035448150ef974920"],["/categories/集锦/CSAPP/index.html","819fd90c8d6d1d12d932ccdab92882f8"],["/categories/集锦/Python/index.html","83e10a07a740466d1b7425a74b815cdd"],["/categories/集锦/index.html","b26e9ab0770f1c89cb5808cb6918225d"],["/css/first.css","01a90baf99fa8f190becabd973782198"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/style.css","29bd14d027343cdf06b66cce6bf66453"],["/friends/index.html","8aae0616f4b566a2fb23d73eec2d85de"],["/gallery/index.html","63f4bc7639ebb10460b077618443184f"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/games/tank/index.html","a4a2448b8b53e14bf7bad5c1f71e614a"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","eda61eb7ad6cab622e3e52e65d9ac122"],["/js/aplayer.js","6e605f0855251e101d3024646f3eac60"],["/js/app.js","1948329f2fd7e750ade4bdc49138c09b"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","495557573d555c601697fb822f8ede51"],["/page/2/index.html","086a96c75617a7783335ac442069d2eb"],["/page/3/index.html","ec49fea00684a5df616672a6fc0707b1"],["/page/4/index.html","dbfa1ade8679efb33538c1902530ed97"],["/page/5/index.html","0ff204e82226981d814a1d7f51abc44f"],["/page/6/index.html","881f8e129d3094ca676a51eb6e9a343b"],["/shuoshuo/index.html","4c16350ce9a9b452b57bd2a691688cc5"],["/sw-register.js","98169644b103ea677b1f27024b1f3977"],["/tags/AI/index.html","a6e6c50fdafba01e7ccb0dad2de5d160"],["/tags/Android/index.html","5f3db1520edd0c0e456f5b149d67ebce"],["/tags/C/index.html","101ec72e2dd42429c39af4ee213c006f"],["/tags/C/page/2/index.html","ee807ffb2671a826ee787abc7bd48339"],["/tags/C99/index.html","87745c76e587c64bc0888c6da7f45ff1"],["/tags/CSAPP/index.html","2e451ee8a1ce07a1735d426bd7219b6b"],["/tags/DNN/index.html","ba6f426773c55a3b158e02d3948a8420"],["/tags/DNS/index.html","c156233368abe207ca48563224ff48dd"],["/tags/FPGA/index.html","0555fdcb4d49067422e79d8c1298eb74"],["/tags/HDFS/index.html","ee178b4157b7041f2d327341db891b6f"],["/tags/Java/index.html","4f0f56e4ef15b0583c48940d6b84b1f9"],["/tags/JobShop/index.html","e487a81860b8b2b82dae821925a475e9"],["/tags/K-Means/index.html","6c7cfde464618eb4470ee2a1ffe35fbd"],["/tags/Kafka/index.html","9e5cce0d9e047df82e984dfdff6ad77c"],["/tags/LL1/index.html","db11eb2cfde97b1f215fb0e5b5282094"],["/tags/LR/index.html","f513e19e7065f5df3583ba90f89dfd30"],["/tags/Linux/index.html","f4765cfe90a4ff6f71729c9003a00e1f"],["/tags/MIPS/index.html","a131606ee6430c98d43f189127e36f3f"],["/tags/MOOC/index.html","c23a165e87812423561caeb07d31d253"],["/tags/MPLS/index.html","4b4db274ec38699427e7b2ac01f199d2"],["/tags/MapReduce/index.html","7441bd1d68bcfdea035d5f125ff5bf35"],["/tags/Matplotlib/index.html","d80e9bda81bcfe04a169716e8729dcb8"],["/tags/MiniSYS/index.html","46a566d05b5a171fbb853724267a0aa8"],["/tags/Python/index.html","942deb0a0ad0ea1526df7bf6f0fb1567"],["/tags/QT/index.html","ec94a229a3967e8b2ec395e0ba82e549"],["/tags/RNN/index.html","21771310a808cc56b08b09c077848fd2"],["/tags/SIP/index.html","5ddefe0940a747de538ee8ddab902443"],["/tags/Scala/index.html","c5ba63b6176b74c83e6f24b4a6a7fa7d"],["/tags/Shell/index.html","19e2b95aeec3e27b605242456abbad42"],["/tags/Spark/index.html","c14ecc717c468043ee4938d1c3f6e6c1"],["/tags/Streaming/index.html","470e7f4a7162f74badbe42332ef9f3b0"],["/tags/Struct/index.html","4df188ec7b651c9dba6a73c20eac9e0a"],["/tags/Verilog/index.html","b86faf487fc2764fb81d858e6e6b0f6c"],["/tags/first/index.html","314e54417af2524cd7fba14028eb23b2"],["/tags/iPython/index.html","3c785789cc7bf994c7d49656ae3db607"],["/tags/index.html","76a8bdb36199f0a06c92501133bdcb2c"],["/tags/ls/index.html","ea4b5f3392be75d6f33dddc60dbccb3c"],["/tags/习题/index.html","537c2479cf7779d2d7f3b58fb5544641"],["/tags/交换原理/index.html","11c9e0cca48cffd2ce10bfc8f2c3dc93"],["/tags/人工智能/index.html","6c3c0e7adf73c7574c7d9d2154878aa0"],["/tags/信号量/index.html","109628b559fe8cc1b7c70e0c94576350"],["/tags/内存管理/index.html","fe847a9b1b3467697bcb763b6c159ed0"],["/tags/决策树/index.html","ac8ed56b4fa681e4c13665965fe7c953"],["/tags/分治/index.html","d5c364cb9dfebe9b93babf336452dde0"],["/tags/分类/index.html","3167df395beaa4c5448228b791268503"],["/tags/动态规划/index.html","87b7baa7eb4bf129f0c4aaf893dcbcc6"],["/tags/华为云/index.html","7084a07a29b0e57669113e4f0d3aae8b"],["/tags/单词计数/index.html","26dcc48a157d24193ec1d18794566058"],["/tags/可视化/index.html","a207354ff02b16f68edd49521d140576"],["/tags/同步互斥/index.html","1a4f83ae0688b80a26c0e418827c650a"],["/tags/大数据/index.html","f293a880a35cc28d21f6fc44e199af73"],["/tags/学堂在线/index.html","cb0e7d3cd043c38e2c5ea032688b4174"],["/tags/实战/index.html","a427c60d1559eab43e175ea2fffb1da9"],["/tags/实验/index.html","1f366fa74b10f90ed20ee0cbbfadd3eb"],["/tags/实验/page/2/index.html","1f9717ec16289cfc6fea2658ac197ab1"],["/tags/小游戏/index.html","bd2e625a95530c20e5d6bc7d6a073f92"],["/tags/工程/index.html","54677d5e30f56b620659c9c8791113f1"],["/tags/工程/page/2/index.html","64ad751a8e30cb03920544a821cac92d"],["/tags/手写识别/index.html","3c020188c7df289ccf9973ae1b157091"],["/tags/拓展/index.html","d20538b78795141a5fe609133e80cdc4"],["/tags/操作系统/index.html","67f5415b44dfc487c30a0fe94c271fb6"],["/tags/数据处理/index.html","99a8aa386f3a2f8ceb1f0a8296fc8821"],["/tags/日志分析/index.html","9394640cb143a991e120d1dbd0477cdd"],["/tags/易错点/index.html","e97914d11c31b1762a4705128e08f9ce"],["/tags/机器学习/index.html","2997c8a54d980b3458a485f525fa711e"],["/tags/条件熵/index.html","586c6d30ddc8416a1286f5f31add2fd9"],["/tags/正则表达式/index.html","ba10b2060afcf627e6e176b64c91d56a"],["/tags/汇编/index.html","11c5c19db2160d0506638f0d20196a95"],["/tags/流计算/index.html","58861f4556681b207f11fb0574164d0b"],["/tags/爬虫/index.html","eb98db840df012745b2edbeca8e434d1"],["/tags/现代交换原理/index.html","8deb37d16fe0a49054feb143e03fb74e"],["/tags/生产者消费者/index.html","629c166f552e1e3b711ef7b27f866e69"],["/tags/知识/index.html","57114cc10a73b4e0c5e91608c44cbfd0"],["/tags/算法设计/index.html","493dd9f73179bef1017d9978b029043a"],["/tags/线程/index.html","5f74e29b863a7853cc97097367c1bbd9"],["/tags/编译原理/index.html","8d2b9d2f16a5a6e26aec3d8cf27bff7e"],["/tags/网课/index.html","3936bb5ce80925f996af93d40260f343"],["/tags/聚类/index.html","2b4518d2863a8dca830b44a0cf85a1ad"],["/tags/脚本/index.html","039551aef02f5695d0288660f05cfce3"],["/tags/计算机系统结构/index.html","cbc29ef25faf2f103ba246ea7aee4988"],["/tags/计算机组成原理/index.html","00cf4392688711e414caee828f462508"],["/tags/计算机网络/index.html","3c310532b4083423e03672155ed870d5"],["/tags/词法分析/index.html","9f4d297a0e6b33ea32e031aa96d6b7c2"],["/tags/语法分析/index.html","efd722dd2a719352d88d353620550895"],["/tags/读者写者/index.html","097c95465fb9f186e13fbdcd7a120a2e"],["/tags/课程/index.html","0a6636e71c8aa1ef6d15854a503d41b4"],["/tags/起名字/index.html","659ff1e3f99ebf6065ae13f24f9f3446"],["/tags/软件工程/index.html","8fef0130ff1196820e8cb2df69673b4e"],["/tags/进程/index.html","6c2f06e8a619bba4c26460cafef823e5"],["/tags/通信/index.html","6ab959509db53af5172a3ebee9d042df"],["/tags/遍历目录/index.html","19a19e3ceefe721adac114ffd76c02cf"],["/tags/难点/index.html","4a15de082c3a5acffd994cf515d30afc"],["/tags/项目/index.html","62968033b85bdd70b6a6380f79c4ab3e"]];
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
