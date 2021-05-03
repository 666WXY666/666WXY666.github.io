/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","f78c4ffd12c8f81a14dbca40d5165d3e"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","b501dbd1186300e44cbc8c36cfedb166"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","31fff37f08f587cb4447b7e7d4aa3296"],["/2020/03/26/计算机系统结构-实验1和2-遇到的问题/index.html","2636c227698b092b6ae3631df1547a18"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","baec84656035edfb8a0f16b35fae26da"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","754b9926795a44454f3219fec98bc804"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","fa07102b3eca1a5ea5a4f0626f8be780"],["/2020/04/18/机器学习-知识拓展-条件熵/index.html","03cb0182f60a9bcf8f32822207ba1068"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","1ede26a3945a630657f3d94ae50556d2"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","d10cd0036e1cdcedf0ade6694d70903e"],["/2020/04/26/机器学习-实验-决策树/index.html","4d4bc9c1794205d88f57f0f7c9fd13a7"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","76b104c8e72eff5863978d9577ff329a"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","26c1a368b32b66c0c7c5f3e532524de1"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","0a12a76766a88989b344ecc33673f312"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","4296842a046792dbff37cc3e34df7faa"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","48ba05965a83f9fd1a5075ecdf4d798c"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","4417825c25054ddd933dd51f13918918"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","1b7992863217af2c67a017e319af9105"],["/2020/06/11/机器学习-实验-DNN-手写识别/index.html","1c3b449d9ea7ffe1ead1fa6a7c58e041"],["/2020/06/18/大数据-习题/index.html","1178c05efd3281fd6793cbb15a1a1f3d"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","a96eaa99038b272f2947e89be4044963"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","1ab4869369f4fb38bedf3d827578a3f6"],["/2020/06/24/Linux-拓展学习/index.html","8d54b6551e1c82ce9cfbea1a5b6e0e76"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","e3a3ae14b0b6d4b6ac8a2338bb35d382"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","838182a0dfb42d4aef70263fc30a2ece"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","86a2320257fc45b6ef1a78b07485e938"],["/2020/07/15/C和C++的struct使用总结/index.html","6f66fd9afa7046ac90926b89f810c11d"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","d8cce6a27163adea61d6d1fa65a424c4"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","2c7c1a78e2371fdb9c687d4906970042"],["/2020/08/10/机器学习-实验-花卉识别/index.html","d1f9890ea2470f4e4358f884a986fe69"],["/2020/08/15/Python-项目集锦/index.html","dbf9429bf56ce24a774ae9244dc7560f"],["/2020/09/01/编译原理-词法分析/index.html","752387e4cec1265af5bc3ecfadd531df"],["/2020/09/02/编译原理-语法分析-LL1/index.html","a2a71d588ba20206a7582a1129fb240f"],["/2020/09/02/编译原理-语法分析-LR/index.html","fb1c0b7eda700ad31be254d49668a117"],["/2020/09/03/操作系统-内存管理/index.html","d7e0d7408ce118636de740c6acaed774"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","f097e4e7a6588928d810b56087ebfbea"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","31695cdfba33f1e76e782fa16540c798"],["/2020/09/04/CSAPP-实验集锦/index.html","a52eec5c927bdcc76da85c17627d1773"],["/2020/09/10/计算机网络-实验集锦/index.html","0d42b87b889fa6472b6ed423151b7126"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","7086b674b1c9f9c8678877d5b6f36b4b"],["/2020/09/30/C++工程项目-JobShop/index.html","3f2aa1703657e16cac418f33bd9458fe"],["/2020/10/09/交换原理-实验1-时间表调度实验/index.html","a8b8ee10ab48cfba1b995c5d907b0dbc"],["/2020/10/09/交换原理-实验2-摘挂机检测实验/index.html","9d618a840f2ab1600d2ba08d0fed2bed"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","5afe2ffb61174e5689cd3a2802767b60"],["/2020/10/09/交换原理-实验4-拨打SIP电话/index.html","d356d0307c3c8597f35af80980832917"],["/2021/01/04/Android-项目集锦/index.html","897dc0ce92067c4655742b6841116d60"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","1d8753eedb0e512cd3f0aca2f26a2856"],["/2021/01/04/C++工程项目-travel/index.html","dd581a226c85c7228ab9b8ee171c4187"],["/2021/01/04/算法设计-分治-最接近点对/index.html","8df0f3dd6b20b87bd15fe0bbb4c2c674"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","f3d62a9f8004b9e33b0c824e8bac70a6"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","fdb5824084a89f18f782fe6ede469b9b"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","c51fc34ebd1f6d9b62cd2004be8c23f5"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","069651435e4fa7915bb207d1a0871eb9"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","204747a87acce62f6351366a5755e08f"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","5e835f6833e046953ea71db40cebfdef"],["/404.html","e0e9eb071f5b866f116e301672f3f170"],["/about/index.html","af6c428676a236d5544e3087b93d0cb1"],["/archives/2020/02/index.html","ff0abccff48e44a915e1ad437d685378"],["/archives/2020/03/index.html","e255569c503fa06a127fac6794f8f1ae"],["/archives/2020/04/index.html","6dafc4a94230f5a1b2786c46113d0832"],["/archives/2020/05/index.html","59cee6d3dce2f7fd22b5574cc366b31e"],["/archives/2020/06/index.html","e4eed56a25a1f7c52523bd11bcd2aac7"],["/archives/2020/07/index.html","4b01a4bd452bb0d692032631933e35b9"],["/archives/2020/08/index.html","720f19b7c96e39fd5532c414adf2ee79"],["/archives/2020/09/index.html","169ccd949006ad368d81b781ba6e0de4"],["/archives/2020/10/index.html","293314f0dce693521ffc5587e71d2374"],["/archives/2020/index.html","5f700f197bc7412be194ee480993879a"],["/archives/2020/page/2/index.html","5850ef3256020a416e87fb56388c4b9b"],["/archives/2020/page/3/index.html","743e32a4141202ac13e8f80aa95dca4c"],["/archives/2020/page/4/index.html","482f939955500a3047e56a7f6bdfd71b"],["/archives/2020/page/5/index.html","65d83b8f371fc78638e364ad92509092"],["/archives/2021/01/index.html","e20baf032a43f7f8e9eb1b5a9feffb7b"],["/archives/2021/index.html","23f86b4d234bbd0e117602881837ac87"],["/archives/index.html","ec35a1aa69008b899bd592fd6bb99c1b"],["/archives/page/2/index.html","ec35a1aa69008b899bd592fd6bb99c1b"],["/archives/page/3/index.html","ec35a1aa69008b899bd592fd6bb99c1b"],["/archives/page/4/index.html","ec35a1aa69008b899bd592fd6bb99c1b"],["/archives/page/5/index.html","ec35a1aa69008b899bd592fd6bb99c1b"],["/archives/page/6/index.html","ec35a1aa69008b899bd592fd6bb99c1b"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/bb/index.html","7fd7ca81abfa512ee1bae744777aad84"],["/categories/C-C/index.html","ae27b1e4448b00e46a06f589b6dac80b"],["/categories/C-C/page/2/index.html","7d90342c23ed6c2603aeeedc0e5b189c"],["/categories/C-C/拓展学习/index.html","11b8b4f6490a2980e434c1844efb3e95"],["/categories/C-C/操作系统/index.html","6ecf07200b6d90930d8199a5508e05b6"],["/categories/C-C/算法设计/index.html","8f4518bd3c913a0393dfb582d9e5b907"],["/categories/C-C/编译原理/index.html","09bf4a796ed2c29344a2a63f1ab9fb66"],["/categories/C-C/软件工程/index.html","310c3fd38fe712b84d8b9db7379a1b9b"],["/categories/C-C/项目/index.html","ec8b0c9b20733ab8f83945c92f4ed1b4"],["/categories/Java/Android项目/index.html","9cf195d2e713e2ff96093773731d660d"],["/categories/Java/index.html","92d3c5fed815b6b80274aa35a07c80df"],["/categories/Linux/index.html","42cd9e8f9c3c5bb8976a8621f45b1442"],["/categories/Linux/上机实战/index.html","5a142ad13f3b43f394ada3208f423b1a"],["/categories/Linux/习题/index.html","5c6b4a19cfcd47a3f6f50c06f9a5c2e7"],["/categories/Linux/拓展学习/index.html","eac9f891ba096270bc305e28ae030660"],["/categories/Python/index.html","2a8f8767c926cc97a497ec388a7011ce"],["/categories/Python/爬虫/index.html","deca9a6aeb5b8daa88e2fbb5c2c59c1b"],["/categories/index.html","bdbdb31448271b011571bfa37c031846"],["/categories/交换原理/index.html","9a62428bfc086a91512e3c7f255e3126"],["/categories/交换原理/实验/index.html","be6fd2f3a273c10acc6d36e4d142ca67"],["/categories/其他/index.html","321071043fe8e25e1895842cb753bbaa"],["/categories/大数据/index.html","9a21c20cd613346a353008261b90bc12"],["/categories/大数据/习题/index.html","6acb0fa930fe7749987aeef863e8ac71"],["/categories/大数据/实战/index.html","a30e065e9d9abd14209e37e41aea665c"],["/categories/机器学习/index.html","0ca7abc7280a45d4267564f80f802219"],["/categories/机器学习/实验/index.html","0b75a718ce8ee5691b2e33ffa38ef4e5"],["/categories/机器学习/知识拓展/index.html","01ccb7afcf912eff027c2673765e166a"],["/categories/现代交换原理/index.html","ef0b52098895954634e1ac02c2e458d3"],["/categories/现代交换原理/习题/index.html","b297bb252e69e193017addbbbda56dbb"],["/categories/计算机系统结构/index.html","cc9cf473b96b9b894398382be5043127"],["/categories/计算机系统结构/实验/index.html","32f126f90e0f5703c992476a93e3aabe"],["/categories/计算机组成原理/index.html","d9f77bfa57449a8a261d09983d1581f8"],["/categories/计算机组成原理/实验/index.html","3c537273b2de382bb3b1c6cf11115679"],["/categories/计算机网络/index.html","3c9fa932ad5d76557016f5a83234fa85"],["/categories/计算机网络/实验/index.html","a0cfc448b0039e11486a199e40f5f119"],["/categories/集锦/Android/index.html","6d32c3eb655038ad7c0575becb93efbc"],["/categories/集锦/CSAPP/index.html","d42022cc3b96c4e0856f663ada8c89b8"],["/categories/集锦/Python/index.html","648fe8df465de7d0d3d7340b846d4055"],["/categories/集锦/index.html","4d2888390fa1d9fa5396c7d6d0bb3942"],["/css/first.css","ac2d0010102d22ded3aa536d16e52b73"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/message.css","b0ce3ca232f809c8d7a85c79bf1f7ff8"],["/css/style.css","f33cadc59019a1af1d898b222bf512f6"],["/friends/index.html","da28d5aaa2d46dc87e273ec8d78c5d51"],["/gallery/index.html","63f4bc7639ebb10460b077618443184f"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","d4fb1b826c58d9dad637ffab6cea24a3"],["/js/aplayer.js","f10ee7aff4ce278045da925ac6510d29"],["/js/app.js","d14976ee97145aa14568c13c6554dcc4"],["/js/jquery.parallax.min.js","38cf4791e24aeaa8101bd2c816400718"],["/js/message.js","38da736cdf513c9a15a0a2a16a34eeae"],["/js/plugins/contributors.js","23ba3efa08d9fb1aae753ceaa6df2711"],["/js/plugins/friends.js","239cf9c648af390f866ed00cead3e23d"],["/js/plugins/sites.js","15bb31fc27abc888b17cc5d822808604"],["/js/rightMenu.js","19b2a577c30a04732f02b86bda62e0b9"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","fd85236b2888d995e1a142ed6fbe5448"],["/page/2/index.html","cfcd7afcee762a9662941fd9738ba7d6"],["/page/3/index.html","14ed52dbfed7e8a0e7bc0d11b49a77d0"],["/page/4/index.html","3366d40a325caf287c94012eaf7c89fb"],["/page/5/index.html","1f6606eafdc85b4b0e50a10e6c0e00a5"],["/page/6/index.html","ea2df6558b3aaf45ccef018db1b45aee"],["/shuoshuo/index.html","31169df6089c1ff98f2fd0c1dc8513e2"],["/sw-register.js","7d19bcdf89e9c5b202bc5a099a8e712d"],["/tags/AI/index.html","13b0a7408ca6db9136152efbbe8e8a03"],["/tags/Android/index.html","70ca5bb487e2a86ab9e965c38531665c"],["/tags/C/index.html","4adc34d61f7ba41960bee0e9a6ffd3a8"],["/tags/C/page/2/index.html","ccd709e57fa2924f0372ed2242c7707e"],["/tags/C99/index.html","8a3695a1b152b095ac268bdade2d0370"],["/tags/CSAPP/index.html","6effb9f6ea0017bcd80ab20958301f66"],["/tags/DNN/index.html","8093791a52db7c624573beadcad06673"],["/tags/DNS/index.html","d695b30f5e59c80a562d85ab6e83034b"],["/tags/FPGA/index.html","66093655f2b934ef876f65d06f12a83a"],["/tags/HDFS/index.html","4817fa4f054e0600b3fc1dfadbee37fa"],["/tags/Java/index.html","9b70cda678ef0d6abb963fd0c46df20f"],["/tags/JobShop/index.html","091a96ba2cf7004ca2a8ec838bcb4fa7"],["/tags/K-Means/index.html","ff30c62e29081c95f683933a0bd4749d"],["/tags/Kafka/index.html","0c09587b9b15796dd0c9816f68f94c92"],["/tags/LL1/index.html","97af5b0829eb9791a3c756a5229f7544"],["/tags/LR/index.html","9db8f9e9e67a5a38d867d10eb44d50b3"],["/tags/Linux/index.html","56c031fbce49da8e3818dfd135896acc"],["/tags/MIPS/index.html","b4d155361921afb68b446debc3018f69"],["/tags/MOOC/index.html","744861ced33699240451639d3a14d86e"],["/tags/MPLS/index.html","c163f8d2424b1cb9878e656d4eb579c4"],["/tags/MapReduce/index.html","e5122d58b5fd81baf0ce407b733e643e"],["/tags/Matplotlib/index.html","e8e1e4ab5627162032136d4f6e14221a"],["/tags/MiniSYS/index.html","11d1e1fdf538a6bdf463b48050efec8b"],["/tags/Python/index.html","f5152e18664af14c752f0083d7d3d6dc"],["/tags/QT/index.html","d4e45dcdc5f500748927fd2e615653f3"],["/tags/RNN/index.html","bd69bf86eab8557dc7bec99fcb4d8759"],["/tags/SIP/index.html","27a7689773a72b8df3fa0ec9a7626647"],["/tags/Scala/index.html","2638f425f659d838c35ffb18af25b6ac"],["/tags/Shell/index.html","b09c7a48a4ae9f4f94816004cbb98fb0"],["/tags/Spark/index.html","18104bf089c9e0404b7915e2f75d3823"],["/tags/Streaming/index.html","054a92af8b08e8f60e1fc12147456ddf"],["/tags/Struct/index.html","b2c22dbfb6fd313edb6310ab0b8271e6"],["/tags/Verilog/index.html","9d57b5736146ac7363e9e208d57e6bc3"],["/tags/first/index.html","f193fa1e0090c1d3afbd5bc66524579e"],["/tags/iPython/index.html","53210f56a940bdd514d56767d4cb26da"],["/tags/index.html","611fb82efe99625a2f2099d39c0c7f7b"],["/tags/ls/index.html","257b25f97fc91a76ee36496d69ef072f"],["/tags/习题/index.html","b8dfe8d868ca69d26c91f9727598d83c"],["/tags/交换原理/index.html","aa5693cc97a86d5616c593e850ceff03"],["/tags/人工智能/index.html","b5ca6b8ad0f05a58f3548215b584cd6d"],["/tags/信号量/index.html","f1537cf590f2ea2393e48794ec84e6ef"],["/tags/内存管理/index.html","44e610e48c9c924029a4262869a1320a"],["/tags/决策树/index.html","fa2426ce1ee6bee398575bf8ac49c480"],["/tags/分治/index.html","bc7841911b90f01d333b3be3c92693d7"],["/tags/分类/index.html","d22b105a0b7e1fbc513ebb78b9fa43fa"],["/tags/动态规划/index.html","07eceb9c89730b5ddc2c74ce157dc992"],["/tags/华为云/index.html","3f0f004004d188ce3bb04e890ae2c3e7"],["/tags/单词计数/index.html","c0bc467c6b4f6a0b39d85d45bc6bafd3"],["/tags/可视化/index.html","0861fa0affada8f54ea10530693129ef"],["/tags/同步互斥/index.html","22e3d7f35e3e8aa0902af6b69b3c0503"],["/tags/大数据/index.html","e505879582d42ac24ada16fcd66ff66f"],["/tags/学堂在线/index.html","2be9b24ed6da63327dc932b158240830"],["/tags/实战/index.html","be8f674ed3d3bf788d2eba3ea4fba83f"],["/tags/实验/index.html","dc9b33fd1eec02c1830e8e56d98afe39"],["/tags/实验/page/2/index.html","b01f11479d4534845eddcba502523880"],["/tags/小游戏/index.html","5f7244626b210b525707f58b264d446c"],["/tags/工程/index.html","28c5c2a492cb63d2edd7a944dbf80d53"],["/tags/工程/page/2/index.html","1a701d0cc6b779ca96506905e86d38ea"],["/tags/手写识别/index.html","c9272f8303c4e8aec81ff63b2ae2aa2e"],["/tags/拓展/index.html","fd8bb63a19f8adb4c1d30a3232383e55"],["/tags/操作系统/index.html","fd0699ac23129a26fe7f92f4c273eaf6"],["/tags/数据处理/index.html","ab789aae96662db162c394bc27f68886"],["/tags/日志分析/index.html","e6067704b592fb7e9673877888860fed"],["/tags/易错点/index.html","d8bb89d17e9215e54f92024a27a0e779"],["/tags/机器学习/index.html","86e4d883232b7d80e1fb716a30cecb6f"],["/tags/条件熵/index.html","0a7463dc499a04b41e9f1e29b0173d87"],["/tags/正则表达式/index.html","c02ca24d892a47c890dba94951f6bd25"],["/tags/汇编/index.html","66128478bc17e04ee329445d1d6dc51a"],["/tags/流计算/index.html","7ef2c14c56f7422139f251585d56d600"],["/tags/爬虫/index.html","3edaf78a7f5f056bfd13dfc3a71b851d"],["/tags/现代交换原理/index.html","cca161e9ae50d1b1f4791c6e4da1374e"],["/tags/生产者消费者/index.html","5854fc5c6e4a4d6d0a7ed4463f8244fd"],["/tags/知识/index.html","de2e4b35c44b571d79773ecbf8a16a94"],["/tags/算法设计/index.html","57809bb712ec01afd91de6a9461c76ba"],["/tags/线程/index.html","99e18626e05f933264923caab5c802e0"],["/tags/编译原理/index.html","6673d260e5b0cd71eb48f501e7730935"],["/tags/网课/index.html","3446de913c1fc3a9f4746bad63d03f59"],["/tags/聚类/index.html","55c902956baf19b255d7086079fab313"],["/tags/脚本/index.html","4cf77d14ceffdf13ae712e162a539a36"],["/tags/计算机系统结构/index.html","05f59d13de3f0d6fd7811193b50b6e18"],["/tags/计算机组成原理/index.html","0f1ffce4a5d67bc7ba908480bf25a7e4"],["/tags/计算机网络/index.html","cc5110cc8be283c2ecc1cd7f573c5d66"],["/tags/词法分析/index.html","1ee1bd29f1151b9e7a41522487158171"],["/tags/语法分析/index.html","aa8a9e404bf930350f3c06859c78fd89"],["/tags/读者写者/index.html","05ecdb7f614a8e626f31aa091ae1d6a3"],["/tags/课程/index.html","bb117f39eb7e19bb89005cc95a42534f"],["/tags/起名字/index.html","7ace90e8d6a8846230d8988e958b39bd"],["/tags/软件工程/index.html","621d4e38bd353b087df256b2c494523e"],["/tags/进程/index.html","6d86a022ed5cbe92f8dddf7c61b43e75"],["/tags/通信/index.html","33943a3cfa237a1ec72739d0896f8086"],["/tags/遍历目录/index.html","ea5b0552d34242663cbe2323ef4604e1"],["/tags/难点/index.html","93342a41b76cdcde5537051a2bec0892"],["/tags/项目/index.html","b73e965143427a8f33bf130e644bcb3e"]];
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
