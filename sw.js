/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","69bc3a11124a6bcd3e324c0bb486d0f8"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","148115a9823bb0a19a925f80bfa20e6e"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","95448d1407dcd8a439a6587321fb59e5"],["/2020/03/26/计算机系统结构-实验1&2-遇到的问题/index.html","09cdb028a5846174f870fbf5a08c78d9"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","a5e2a17e46e749710d14b1b14a21d1ed"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","1e543022daa8407299c7981b68d6ecd7"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","10385042441d61a62217eb8a10f93c9d"],["/2020/04/18/机器学习-知识拓展-条件熵/index.html","aaa378a5d9f1981e2cd930507b5f7d44"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","5e19c6834b54578c8331dae16cb1fd9a"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","5f9ac1d4fd762d077f4a4de755cf5c7c"],["/2020/04/26/机器学习-实验-决策树/index.html","e638c0327b632e9501dc39c836364b4c"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","7b9d3fe6eab6cd4f1ba0dee0fe12c656"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","b7770f370cfc3f0c3abae71151af7fd6"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","473f5da6bd9513f70e11d6c30e775452"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","1b9a926852a19a55d67d3c839244c502"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","cd7c6ce27ffadcd961a281d89c971ff4"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","652be794d63610a5caa4b9ab623bd001"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","60a974610fea343c59b11c10781c5ac2"],["/2020/06/11/机器学习-实验-DNN-手写识别/index.html","b1564a6980d8597cec910b82abb199d1"],["/2020/06/18/大数据-习题/index.html","cb6ee6bca51dcb4b44afc4360e1e75d1"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","4fc10b2ec54b76aad1e70b5dfd29eaf9"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","dfdcc586f353222e0a08523a00be06d9"],["/2020/06/24/Linux-拓展学习/index.html","445721486e84b78efee9ca9e058fb692"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","b2af0a2a32de25cf9aa057f9b134a731"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","8fef261455b35c40d7fd662108860d5c"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","5e0dd909ca5c1ed3396663d88856cd44"],["/2020/07/15/C和C++的struct使用总结/index.html","845de44f398d7f15a04f553eb02c4bf1"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","a4187ed8883ef519bd9d349170fba5a6"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","ec1f8a5a8a7b04dd2afb92b12ae23dbf"],["/2020/08/10/机器学习-实验-花卉识别/index.html","9815011bbcfc2aa1969d314f078ac0d0"],["/2020/08/15/Python-项目集锦/index.html","ba6fbfff2c133dbe65fb84e2356858de"],["/2020/09/01/编译原理-词法分析/index.html","71d9bd070ebe28250f5db0dbfcae4070"],["/2020/09/02/编译原理-语法分析-LL1/index.html","d0a9b9618c05f53a59be347d4e9b2821"],["/2020/09/02/编译原理-语法分析-LR/index.html","ca3cab6c5544055846cc5158999b8700"],["/2020/09/03/操作系统-内存管理/index.html","9f04daa0f7871685c0338e2ff40158aa"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","a835d9181ee1586e71ba6863d38c69d2"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","fdfa7b99d82120e1290f9167c476fb0f"],["/2020/09/04/CSAPP-实验集锦/index.html","bf000897da1e1a9cd04435707fc7f1b2"],["/2020/09/10/计算机网络-实验集锦/index.html","588441dd0626be93287350db58e2c1a2"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","8142b6f4b629d451454b77278505570e"],["/2020/09/30/C++工程项目-JobShop/index.html","e385cd1d17545848a489450fa5d96ed0"],["/2020/10/09/交换原理-实验1-时间表调度实验/index.html","e7753113983dc17f1ad85c18b4b98905"],["/2020/10/09/交换原理-实验2-摘挂机检测实验/index.html","404f82420b5a80cefa84f8e943065bbf"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","6d563ca849c95aa05e534d31ca2c6c47"],["/2020/10/09/交换原理-实验4-拨打SIP电话/index.html","c7a3747d093b5729488989e8a7b96219"],["/2021/01/04/Android-项目集锦/index.html","884ec0f9c4ef488973b2f730189d96a7"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","d8fc51121100e8cabd8adb5d5e28fa6c"],["/2021/01/04/C++工程项目-travel/index.html","955473b9ebf9ec48cc682c6600f7fb29"],["/2021/01/04/算法设计-分治-最接近点对/index.html","5764538a6b55cedf6ac6401fb885cf18"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","942ddaf63b452e27df1d204b31bacebc"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","a33e9489ea6a735c25296177da343add"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","a2bc9e8d5ef0d94023172053ce5304fb"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","aa0ab0f876f7dfec27f8d15b7cbbaddc"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","2fb86462b8fb2e2fc6ebb805160390d4"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","dba8ce5b91fb21df4d3bfe9e16ea6255"],["/404.html","a08860a2667c38f9a83656718274e561"],["/about/index.html","d296287522c75097290905513ba621e9"],["/archives/2020/02/index.html","3535e639cd047c629f6459ff0c8765a9"],["/archives/2020/03/index.html","1bf213a4bab10edda13dec3a67b0a4c8"],["/archives/2020/04/index.html","faff0b83b53155460d46d2e3449bfce8"],["/archives/2020/05/index.html","dd0c634dcbc2af3269cd64618737ead1"],["/archives/2020/06/index.html","6f87b1d693170191ca4fcd6fbe2ca3e1"],["/archives/2020/07/index.html","097b6ca11088c3b3aa6b0b973c1bd71c"],["/archives/2020/08/index.html","fd57a326e5118dcf042297d3b184aeb0"],["/archives/2020/09/index.html","faed6fd727fadab46cb4e967cca71965"],["/archives/2020/10/index.html","a129b7a538647dc63a27f1b0d328d9ec"],["/archives/2020/index.html","4b38660fd77fe38ed8c1c99ec55d15fa"],["/archives/2020/page/2/index.html","44e98a2985dfdbfc2b8aa6f2e2f2e97d"],["/archives/2020/page/3/index.html","3e982117f827c58d4e8928aa7dc864db"],["/archives/2020/page/4/index.html","dce8513c4bdc5c94d09def4964315438"],["/archives/2020/page/5/index.html","3e754751310850e2409e545e43cbdea8"],["/archives/2021/01/index.html","f5191034efaf65a34e6afafaebdc119b"],["/archives/2021/index.html","0bc97f3d4bd06abf4af33e942332e73c"],["/archives/index.html","872ba96d466bae8087ead3b9187b162a"],["/archives/page/2/index.html","872ba96d466bae8087ead3b9187b162a"],["/archives/page/3/index.html","872ba96d466bae8087ead3b9187b162a"],["/archives/page/4/index.html","fd92e81c6e7cab856bfe53689bc9b2c4"],["/archives/page/5/index.html","fd92e81c6e7cab856bfe53689bc9b2c4"],["/archives/page/6/index.html","fd92e81c6e7cab856bfe53689bc9b2c4"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/categories/C-C/index.html","1713dbb8888598ac25c4084adfc4fcd7"],["/categories/C-C/page/2/index.html","77bc18fc7434b2e48d4bc5f9e5b8e577"],["/categories/C-C/拓展学习/index.html","3d12634f0389f61f75bb1091fc9ef60e"],["/categories/C-C/操作系统/index.html","d3f9f0048fa7d33c233cef2c62e125ca"],["/categories/C-C/算法设计/index.html","52830feb9874ad274a26b2e2a18e99aa"],["/categories/C-C/编译原理/index.html","1a198a49c27dd50ec38afb2d5d82566c"],["/categories/C-C/软件工程/index.html","5e4affab854ab93c6f4ef9fd2fa1aa72"],["/categories/C-C/项目/index.html","b5ec47471d6f0e84fde2aa21cc805eee"],["/categories/Java/Android项目/index.html","714d08c2516c85dd0c7f8f6d1640bcf6"],["/categories/Java/index.html","46715411812cd26c1e7d0dfb68ad2ed1"],["/categories/Linux/index.html","7b209a8fbc1c046e21524e0b09e7dd5d"],["/categories/Linux/上机实战/index.html","5451f3b1ce2d0f45902b5d880504b697"],["/categories/Linux/习题/index.html","152faec2d72d45d5851e0d8d6118996a"],["/categories/Linux/拓展学习/index.html","289b93067520f6e2b2f3c2e324e7f390"],["/categories/Python/index.html","a92499606c986fd6208372eed5f2bc34"],["/categories/Python/爬虫/index.html","f6a7a05d08a4e592e6151c46821e150e"],["/categories/index.html","0626df2d595fa06554738d9cb579191a"],["/categories/交换原理/index.html","9b9e8de9a6e42da06cda2a3cb16f62c9"],["/categories/交换原理/实验/index.html","673a1933400157fdf2f11503c6ea56eb"],["/categories/其他/index.html","6d2219b6a9e13b0ec86aee7de6a9d0b0"],["/categories/大数据/index.html","f51ed557a96a789999c20439e2edeb7f"],["/categories/大数据/习题/index.html","bc48c636283b2d5378d72e81b42104c6"],["/categories/大数据/实战/index.html","6d80ccf9358858475bd12b964057f292"],["/categories/机器学习/index.html","a3479497005c38b684bb2337fc20b114"],["/categories/机器学习/实验/index.html","a38cda89ccaab4f0737145013d87b9dc"],["/categories/机器学习/知识拓展/index.html","3fef4798a43ada6462a359c2e2e19427"],["/categories/现代交换原理/index.html","d3002be75bb38153adbb1e3b71056171"],["/categories/现代交换原理/习题/index.html","fcd1c2c8e5c251d9d298cf8073182678"],["/categories/计算机系统结构/index.html","2a2a61fe419bd2ee4481f13893b479b5"],["/categories/计算机系统结构/实验/index.html","124b8749a0bcc8dafe569c16bf92e18c"],["/categories/计算机组成原理/index.html","97b322363be4eba0188c7d1e01a90ccc"],["/categories/计算机组成原理/实验/index.html","21c2e924abbf1a3fb8bd6adb7ae8f7d6"],["/categories/计算机网络/index.html","14ee0dcd5c9e942bad2de125913dd582"],["/categories/计算机网络/实验/index.html","25d3f8283b67a88683ced6f7fc1698cd"],["/categories/集锦/Android/index.html","1b1b1f47e4ed100e947ceddba0e758cd"],["/categories/集锦/CSAPP/index.html","9be0172e79a0882902805772c050ba5f"],["/categories/集锦/Python/index.html","be71dc4abbd5f0ae828c0f25c302a348"],["/categories/集锦/index.html","35423ee67f48e68fcee13c3a258f0bf9"],["/css/first.css","01a90baf99fa8f190becabd973782198"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/style.css","29bd14d027343cdf06b66cce6bf66453"],["/friends/index.html","79424ec0b53942e4f56f8130ded88a08"],["/gallery/index.html","63f4bc7639ebb10460b077618443184f"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/games/tank/index.html","a4a2448b8b53e14bf7bad5c1f71e614a"],["/index.html","a9ba25eef429f0a91b8d534a1ff0f2b6"],["/js/aplayer.js","6e605f0855251e101d3024646f3eac60"],["/js/app.js","1948329f2fd7e750ade4bdc49138c09b"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","702be946e818ba167bbed815af6dff61"],["/page/2/index.html","d39621a636ef3a25d2261874b3395637"],["/page/3/index.html","b18df73787128e46e02126fdd8770ce5"],["/page/4/index.html","b95110dcfdf2b1a496f3292377a139c9"],["/page/5/index.html","f03b0266b4666f473c966bff11cd4d29"],["/page/6/index.html","ec9f0ddbc1ad1e8ca4cf856b870ab2b2"],["/shuoshuo/index.html","02de6d4ef84947d4ae38ae978508cca4"],["/sw-register.js","6b1237be814031c4bdbc95c7cb22a37d"],["/tags/AI/index.html","49b8cedc9b833cd5535e7d1bb26c7c83"],["/tags/Android/index.html","31ea238b514c3cb78ca91131b96da799"],["/tags/C/index.html","582d7a68aae14ee92df3971ff724a336"],["/tags/C/page/2/index.html","541e3f9c5ec4b2961393a7b60407fe78"],["/tags/C99/index.html","0aa275f1cecdb3d8860029a77386ed08"],["/tags/CSAPP/index.html","33077e9ea6635bd8f21837c507de526c"],["/tags/DNN/index.html","cea910894a837ec60c1753be666de0db"],["/tags/DNS/index.html","3e32204c69c895c7c7182e552cae1239"],["/tags/FPGA/index.html","e50b147d659cf9bbc88d0f373a18f95d"],["/tags/HDFS/index.html","420ad131c14f0cb66795124d8b49c2ad"],["/tags/Java/index.html","965ed047a5147bb0d24179015d4c5e14"],["/tags/JobShop/index.html","a1dce1ad91ba135ffcb28845a59b4ae0"],["/tags/K-Means/index.html","68f5680f764e10eafe49e69c48e8d295"],["/tags/Kafka/index.html","533a8a15ec400d00c8bdb184ca9e3300"],["/tags/LL1/index.html","f879da8e4124c9d07b840698e61a9dc2"],["/tags/LR/index.html","839e183915367966adef76695aea5dad"],["/tags/Linux/index.html","4c3ea5871400eb059f43ff42c798c846"],["/tags/MIPS/index.html","4d73bc6c56e29f43b32b81383146c59b"],["/tags/MOOC/index.html","bff33fc2a35a980b59a15371a4c87eef"],["/tags/MPLS/index.html","48229b7d90eae97a88ae9cff93ed9656"],["/tags/MapReduce/index.html","e7db8248006fe24ebb1a0a8c8328804d"],["/tags/Matplotlib/index.html","00ebf2fa8724c31cd6af0dfad5f7556e"],["/tags/MiniSYS/index.html","f67153dab6e5184f6683da4c1c4445ac"],["/tags/Python/index.html","1da2f641bfff061a2e906a289efb18e0"],["/tags/QT/index.html","540196b7eeeebe196ba76ede272bcc00"],["/tags/RNN/index.html","78fc2a625e30a3d2057f01e37c88ed20"],["/tags/SIP/index.html","e0153133f7a086533ef5f37b25df0188"],["/tags/Scala/index.html","79151f848a7cb268cd4518d89d4f9948"],["/tags/Shell/index.html","8b3b420302a3f3d7625f6b2196aac13e"],["/tags/Spark/index.html","a130207ee97f87df8f74c6e5c9dd8629"],["/tags/Streaming/index.html","f6122caab27e58d36b453924e3cbf711"],["/tags/Struct/index.html","b5b7e9afdf11fa6693d4ceb2f37e68ea"],["/tags/Verilog/index.html","5c38085045b00ca127b187004c43400d"],["/tags/first/index.html","dcd115471afcc6486d86fd1177629d1b"],["/tags/iPython/index.html","35bc7b15059edc966e59ba90ad70892d"],["/tags/index.html","d5451feda0b05ce5f5023c50d693bd54"],["/tags/ls/index.html","a1d7fa1350914251bacf516ab1992abe"],["/tags/习题/index.html","232a43e414c2d6664913d5def08276d8"],["/tags/交换原理/index.html","e87b4c6c7891f2230d6930362b1dbd0a"],["/tags/人工智能/index.html","19690b80989cc8e2d3da6cf418ffe769"],["/tags/信号量/index.html","3070c1a512283915ed21a5597c0f2a3b"],["/tags/内存管理/index.html","cb0422a687611ca7fb25015c8466ede0"],["/tags/决策树/index.html","f5d8f85149188b23638c0827c973ce83"],["/tags/分治/index.html","ed80dd0b7cb8ce9a40c0777d3a2c50de"],["/tags/分类/index.html","a40e15149132f0ed0e74709fa2339eb1"],["/tags/动态规划/index.html","ed5d56cbfc2032df473e8c7f3b920fd4"],["/tags/华为云/index.html","a7909058859fe9f1164dd7dfa854cda6"],["/tags/单词计数/index.html","a62472c23692542ce9535d774613fb13"],["/tags/可视化/index.html","42425838eb9460700a0acbb015651f97"],["/tags/同步互斥/index.html","b6ea05264e5f0f0ed07f9f5d6be73ec0"],["/tags/大数据/index.html","c9451b20084c8124db61065af02a192c"],["/tags/学堂在线/index.html","8a10b0b8a826f739c0edc51115f0736f"],["/tags/实战/index.html","3da33f1ed15caceecd3e2f1623f6b6fe"],["/tags/实验/index.html","394a322d07dde5200f576501ae876b8b"],["/tags/实验/page/2/index.html","6f923aa079430355780f0fdfaf1c4f7b"],["/tags/小游戏/index.html","f29748544c5cb846fb82102674c07347"],["/tags/工程/index.html","966d0b4c4e3d186fd47da71c4dccd55b"],["/tags/工程/page/2/index.html","5077c05c36a60039096e0b49c86abd4f"],["/tags/手写识别/index.html","b4efdc427b4f3c23a049ba7178f67c5c"],["/tags/拓展/index.html","f6d22f0f4dfba4a02713b00a382007b7"],["/tags/操作系统/index.html","74823bf3b1eca0630794f6cca185b52e"],["/tags/数据处理/index.html","22bc35c160581a6619f5c2fb684987bb"],["/tags/日志分析/index.html","fafced6ab2908b2f4ff9e03e1f522cf4"],["/tags/易错点/index.html","694c3063ae652a580448dcec30815228"],["/tags/机器学习/index.html","31fd79d55efbdc06ab129e864e3fd081"],["/tags/条件熵/index.html","4dbae0f743c4faa8673a79b2301b1318"],["/tags/正则表达式/index.html","be8c51e05d4c8f7b79b7cf9b056e7963"],["/tags/汇编/index.html","04cbbc4c36e7f0d3688cc90d7df3c649"],["/tags/流计算/index.html","94d8253a0ec30d77053787a0c87092cd"],["/tags/爬虫/index.html","56ea25144beb7e02fc5611544bdd7676"],["/tags/现代交换原理/index.html","6f8f48e70143032b5002bfc29f3245ed"],["/tags/生产者消费者/index.html","4eff7d3fa51d87d33344261c1485b991"],["/tags/知识/index.html","be166715a88e6be6232da54916d3cae6"],["/tags/算法设计/index.html","e93fac44c696590a9fff8fd37ef01cde"],["/tags/线程/index.html","f95248dc6faa8352353a5c9202f7a787"],["/tags/编译原理/index.html","81db4aacfb0a06c50d202ec3f5bae192"],["/tags/网课/index.html","3d3559af7eea1d1d319636934dd54f06"],["/tags/聚类/index.html","c87d7fa827d2bf4825c2dd75eebb1483"],["/tags/脚本/index.html","c9e8563f628cee61b42824fd1a571ee4"],["/tags/计算机系统结构/index.html","ad08340dea879a028af3ba9794c249b2"],["/tags/计算机组成原理/index.html","59c82c72454e17c6f0644810734c75c1"],["/tags/计算机网络/index.html","1057f5716cf2c3a7a638ce5288a04ce2"],["/tags/词法分析/index.html","709b5dc099be8d1f1c8d5dc9556aac1d"],["/tags/语法分析/index.html","70554da92bd385a72443c5bfd51b8557"],["/tags/读者写者/index.html","aa561eb06b1d91f7c2ceabe4eb6b6a5d"],["/tags/课程/index.html","1a3cb2b98ac6db1e53a77ca57b8a7cea"],["/tags/起名字/index.html","bc434af14a0d3424178a99b8aa90d3a8"],["/tags/软件工程/index.html","2e28faa9bb0628c3b263adbf983d4d61"],["/tags/进程/index.html","e2ebf10aa96b41f4c167806f515b77db"],["/tags/通信/index.html","c5631a8cedff06183d3c53227d7521d7"],["/tags/遍历目录/index.html","df437a408c3be9822cedddd42cf685ae"],["/tags/难点/index.html","e426db45f3d3ffa2aa2507f63168b40d"],["/tags/项目/index.html","cf7d4cb2d67758cafcab0d6c6b6a6914"]];
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
