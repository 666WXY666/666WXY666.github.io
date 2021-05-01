/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","cb8700c9da29131c158c42d0f4aadd41"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","e88b2ca487b41e4b63164e75f890f16a"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","68e9e4cee2cf519346f90e8a0453ecf5"],["/2020/03/26/计算机系统结构-实验1和2-遇到的问题/index.html","b668803cce5c1abf551d5102dda7709e"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","2cbe161f2590e63e20b3dfc5e208f6c1"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","a65648bb75cafcd52b93d93805109faa"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","d5d4fec63f693e5f0f17495486437354"],["/2020/04/18/机器学习-知识拓展-条件熵/index.html","dbabc8fc3e1413bb850640c14cb31d64"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","61d827e4a77a798f0a9282186c7e9d30"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","12b291936551b9ee8ca80e3fcb4f04ec"],["/2020/04/26/机器学习-实验-决策树/index.html","8cb8b2e4aef5d86c26f6832034a09b3b"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","62ea9a67b914da1809edfafbc4dc2a76"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","dc9df4611eb96b17868b88a160e661d8"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","77e9d623da0f42499c2dc73c145725a0"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","ca7341ede2703ae72b036232c22f2fe9"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","546efe5b98040a52a59bcbca08f7e16d"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","c942a5e0d2b829793e47b2d31d7f0404"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","39794970c6398589eb23261cbfbb26b1"],["/2020/06/11/机器学习-实验-DNN-手写识别/index.html","ce2ed81de4e861cec175abcb8f5eb1cd"],["/2020/06/18/大数据-习题/index.html","d9a89854947acbb3ea6f06494f1dd537"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","8cd7174b46b3e18508a166c74192fc27"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","03be44ad0bf7ad7fb4722e3470b1f27f"],["/2020/06/24/Linux-拓展学习/index.html","fc34251080d6f217d6c8d484c1f51745"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","41b7eb9fde2e2b4502695341ed7c6f02"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","59306d4479fc61e798d7df7d44e5a838"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","cb034e7f77e1de464a001b1b6ea07e9e"],["/2020/07/15/C和C++的struct使用总结/index.html","2ef9886cf8cd1cc38dcce261fea78f91"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","16302765d1821db78b4d8a87d5291930"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","b5647cb704ebbf17d5ff6d1a9518258d"],["/2020/08/10/机器学习-实验-花卉识别/index.html","7bf87aeeae5fa188c48d734f10d1d381"],["/2020/08/15/Python-项目集锦/index.html","8751217de940ccc3dda3b3431eb644ce"],["/2020/09/01/编译原理-词法分析/index.html","2f1187ad15981f26b474a76a7f59d418"],["/2020/09/02/编译原理-语法分析-LL1/index.html","ce67d96cefa4cb3947ce57f8acdd9cc5"],["/2020/09/02/编译原理-语法分析-LR/index.html","8cb4d5babbef5a1e84b20a23c077ed6c"],["/2020/09/03/操作系统-内存管理/index.html","1511c761d75538ff4a1e29ee5ae4163e"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","12716de23d40ce240f9eec689acff632"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","056bccc10be9701648a1ae85b0408b94"],["/2020/09/04/CSAPP-实验集锦/index.html","61b335e964dea8bc706ac5ad7d5c6ce2"],["/2020/09/10/计算机网络-实验集锦/index.html","a805942d640936b2c290cbe73027a8e1"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","c9c3e592594e96f2b35c6422882de59f"],["/2020/09/30/C++工程项目-JobShop/index.html","191cd5be904e7737ad75e14695574ff9"],["/2020/10/09/交换原理-实验1-时间表调度实验/index.html","08bbf9cd21a85d3230cab91621a04bb8"],["/2020/10/09/交换原理-实验2-摘挂机检测实验/index.html","10c22047bff156464dec7e11edfce0df"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","8b27984dc87c2adc09b5b000233d3c55"],["/2020/10/09/交换原理-实验4-拨打SIP电话/index.html","59cc160e8ec48c8e1ab077711401bc12"],["/2021/01/04/Android-项目集锦/index.html","1e3f2e80e1391ac32544ebef8c81b839"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","6a13462e423d7bb50b6282247eece81f"],["/2021/01/04/C++工程项目-travel/index.html","d24e9df92df25fa2d9533349b6cef26e"],["/2021/01/04/算法设计-分治-最接近点对/index.html","7a32575eb32252bc658c54f1018f8eab"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","d80402314027ac41e618d6541d071bdd"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","4076be12d35efc462295fcf5cbbb1fcd"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","8867a4f5906f3e84a600090d8d788cb1"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","b4d9b95d11c30e8a1678d56f0120c49c"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","3a74ff8b9114497ccc6f95b3664f1aa0"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","36acfd6cae598f9e0696e38d24eb9efd"],["/404.html","b8db29fe3e8c7ac021a191e4c8d812f8"],["/about/index.html","57b4df4b33bc6e192746f2316a37fa43"],["/archives/2020/02/index.html","587065f2ef369e33eee49b3b44e947e3"],["/archives/2020/03/index.html","72da301d05a3ad409c89aba0f0241097"],["/archives/2020/04/index.html","eab179c882b6a3403f95f25c18f337b2"],["/archives/2020/05/index.html","3ad4541766e3b84a64c46458aa8266dc"],["/archives/2020/06/index.html","f8390fa05d8798fb45c97f889776fc91"],["/archives/2020/07/index.html","09479a7ef0e222129b2d89af8f3b5f53"],["/archives/2020/08/index.html","70d65e4756acfb12f6bbfd6ab4573cb4"],["/archives/2020/09/index.html","ffe604d38a62fdff4cc718f0eebd8afe"],["/archives/2020/10/index.html","52f2ae7e83033239414a9b040b218c25"],["/archives/2020/index.html","08144c5aca06deb2551786e1f22958ff"],["/archives/2020/page/2/index.html","50141ce03a2e32af7e740832028abd2a"],["/archives/2020/page/3/index.html","4c51d1f2f4b3e596f37f20768b2996b2"],["/archives/2020/page/4/index.html","a6958f2e62a1b7e6743473850e068beb"],["/archives/2020/page/5/index.html","e2d26a7c4b52f6b04b80a886f132ffc0"],["/archives/2021/01/index.html","0d463f351747b20933e022bfa15cc5e3"],["/archives/2021/index.html","258191c471854fa4baa591000bc27e8e"],["/archives/index.html","4e9972e6653c3a93e5706632e281ea11"],["/archives/page/2/index.html","4e9972e6653c3a93e5706632e281ea11"],["/archives/page/3/index.html","4e9972e6653c3a93e5706632e281ea11"],["/archives/page/4/index.html","4e9972e6653c3a93e5706632e281ea11"],["/archives/page/5/index.html","4e9972e6653c3a93e5706632e281ea11"],["/archives/page/6/index.html","4e9972e6653c3a93e5706632e281ea11"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/bb/index.html","b4d5d7cf27106347ee734e0fd7253d22"],["/categories/C-C/index.html","3fdc66cff416d8785cd72f11e7ad5810"],["/categories/C-C/page/2/index.html","6eb8b4b2357c81abaf1d6c6892e6de86"],["/categories/C-C/拓展学习/index.html","c2c3533403ccb0f47f858a916e38684a"],["/categories/C-C/操作系统/index.html","84ae786cf9ea31c49dde33ff4f99e23c"],["/categories/C-C/算法设计/index.html","5c4391adbf400c1652f7bd51830cb764"],["/categories/C-C/编译原理/index.html","e5e77582d1d1d566c0269199ed3c32bc"],["/categories/C-C/软件工程/index.html","9f9b93b73135721ad088ed1a0cf20aba"],["/categories/C-C/项目/index.html","892e9ec3d4b79616cdf7f9c782a9ea80"],["/categories/Java/Android项目/index.html","a8731dc933c354bf3ed739bbee4906c9"],["/categories/Java/index.html","64deb01316619cfc17df1de905339fd9"],["/categories/Linux/index.html","3a25347385179fd99be3953f0521cd9b"],["/categories/Linux/上机实战/index.html","ef0cb049726efd8db68805c2b1d419e0"],["/categories/Linux/习题/index.html","a3940b04d24dbe0af5152976a0d2574f"],["/categories/Linux/拓展学习/index.html","34cff0b395c99430e5edb191853c5ec9"],["/categories/Python/index.html","0eb1c640bb82c09465cddf9c1ee89c06"],["/categories/Python/爬虫/index.html","22fea64bc41893dbecae50d674854ad1"],["/categories/index.html","f5abc0209a719e2916bd255322427091"],["/categories/交换原理/index.html","74e6f53afa1014eee19671a3c4161308"],["/categories/交换原理/实验/index.html","972f91839363b3643639c744b4b4a31c"],["/categories/其他/index.html","463ea00b246245b419ad4a6eaa8e49c8"],["/categories/大数据/index.html","702a5a1358f124b210da8585cdf3668b"],["/categories/大数据/习题/index.html","460e6a82813d76d242544b1e5f6587b1"],["/categories/大数据/实战/index.html","a5b9146676c3452e6eb5976a20c5175a"],["/categories/机器学习/index.html","562ae18a165979eeb279fba24962ae7c"],["/categories/机器学习/实验/index.html","d7daf61f19d08e420aff6381f374fcc6"],["/categories/机器学习/知识拓展/index.html","8b500bea8266d2711386458be6314d9b"],["/categories/现代交换原理/index.html","487361b89bcb1e2889c676aae006c33f"],["/categories/现代交换原理/习题/index.html","1bbb866d99a00e4742a5b6fcd5a19bd3"],["/categories/计算机系统结构/index.html","2f365e0f9d21731cc8fe41dc0d4549a6"],["/categories/计算机系统结构/实验/index.html","1dd4dd26e1ada5aad81a2175eb02abe8"],["/categories/计算机组成原理/index.html","f0e2768992eed480b4086d4f97dcafb2"],["/categories/计算机组成原理/实验/index.html","4af6cd7e932f80857b7fe220d4f988b1"],["/categories/计算机网络/index.html","1c8bc021171879aefe8f284440397067"],["/categories/计算机网络/实验/index.html","da05db742e9cdac526b1e2ec0a83455d"],["/categories/集锦/Android/index.html","00798e3158877992c3bd78eca2780fff"],["/categories/集锦/CSAPP/index.html","e0eaf6756c5dcc2afec50b6937aeec1a"],["/categories/集锦/Python/index.html","256f97b6fbd1d2d9fb520fb2b81cce8f"],["/categories/集锦/index.html","b5b3c28e2095be0f136cdfc64a812475"],["/css/first.css","b6d087a1c859f2a9e183897e37ac7fd2"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/message.css","b0ce3ca232f809c8d7a85c79bf1f7ff8"],["/css/style.css","7c02d5a26902ac4da5d2d0131ed08853"],["/friends/index.html","925add67d391addd2087e1fea1d56f59"],["/gallery/index.html","63f4bc7639ebb10460b077618443184f"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","3f0e1290de5459d636e143c389fabdbe"],["/js/aplayer.js","f10ee7aff4ce278045da925ac6510d29"],["/js/app.js","2fb5381b84811b7d10a6c591d3896727"],["/js/jquery.parallax.min.js","38cf4791e24aeaa8101bd2c816400718"],["/js/message.js","38da736cdf513c9a15a0a2a16a34eeae"],["/js/plugins/contributors.js","23ba3efa08d9fb1aae753ceaa6df2711"],["/js/plugins/friends.js","239cf9c648af390f866ed00cead3e23d"],["/js/plugins/sites.js","15bb31fc27abc888b17cc5d822808604"],["/js/rightMenu.js","19b2a577c30a04732f02b86bda62e0b9"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","9193abe7e5b000b16fb72d2a9b76a5a5"],["/page/2/index.html","e5beb89474f6c23803135b3f21cd9050"],["/page/3/index.html","126f27b2a2611158727842a5829bd54e"],["/page/4/index.html","f514d31c3fe04f94c4dfdc85a18c4112"],["/page/5/index.html","7c1da09a615410853e85980af8284d8a"],["/page/6/index.html","3ff717e6137c38785af7c85fd2b940c2"],["/shuoshuo/index.html","35e7b96733aedf26e7debd4b0d8611af"],["/sw-register.js","3b6ad27ad9c31a672f78a4606a3b6cec"],["/tags/AI/index.html","ca64154a817ef372a3f4b0bd7f9b1a04"],["/tags/Android/index.html","074fb039e3b8c8dddd3fbff1c2e0c737"],["/tags/C/index.html","c1a9b98ea6d14b48c78f61a03bf9d51b"],["/tags/C/page/2/index.html","6bdc3e720f539a7db16a8fa57a8a51e7"],["/tags/C99/index.html","0cd79174ba01bfff7d10607d763a1b60"],["/tags/CSAPP/index.html","5668c3b111a50c79f50c0ee036bd21a9"],["/tags/DNN/index.html","2f9040d994b3fc89a1315f6d09e668d2"],["/tags/DNS/index.html","593fcad3e308a4fe646458622c482ef0"],["/tags/FPGA/index.html","c7345750452a43b50bafa373130c27b9"],["/tags/HDFS/index.html","74d100aeb8b8122d723d6989d5174251"],["/tags/Java/index.html","a47ad3d3cd2f39584c10353d889df646"],["/tags/JobShop/index.html","786c16e76c9787c374e0aad47b11cfd5"],["/tags/K-Means/index.html","3acf20e686df9644dc78c0f644e6716f"],["/tags/Kafka/index.html","df8d15460ac23d9a811a5ab5e2df1743"],["/tags/LL1/index.html","6fc1214a9a10820f226cf10cc23bab21"],["/tags/LR/index.html","4f04d1406fe2db3004a02b7405adea2d"],["/tags/Linux/index.html","a490bbd7c1fd39c75a1a2478b152d6ab"],["/tags/MIPS/index.html","c240d5bcd85c177bab022dde0d8206bc"],["/tags/MOOC/index.html","5d7e424bf0954cafd747f1332e3663dd"],["/tags/MPLS/index.html","6e0589ec83a843a6c45f2ac097b664c2"],["/tags/MapReduce/index.html","08ce8b576763821df35e702401bee196"],["/tags/Matplotlib/index.html","6e7420ca60bab07765ebd5d0d7e693de"],["/tags/MiniSYS/index.html","41f4c86ec267686df2fb19a7150761f9"],["/tags/Python/index.html","60346d2c9b73d82e2ba832b7016db384"],["/tags/QT/index.html","3f9864164febef2cfee551d1c4eb213d"],["/tags/RNN/index.html","b927d213a46032b69ed85fb6e9eff23e"],["/tags/SIP/index.html","d8abac720b7b78d7cd6dab160f08d55c"],["/tags/Scala/index.html","0661c3b4f7e94265f004f93530ac6a90"],["/tags/Shell/index.html","844622b4b7c97da3ee2f48bb767e5116"],["/tags/Spark/index.html","4291e2dd73f33244eb796e03d3193422"],["/tags/Streaming/index.html","918641163d82f36980d34865be413d8d"],["/tags/Struct/index.html","16d6e80d0c40cbad7c22c3e970a15eac"],["/tags/Verilog/index.html","5e561c44b909b1fe597bd3d91c56eff2"],["/tags/first/index.html","0a411b5647b0485d64e3c22a40e8498c"],["/tags/iPython/index.html","c75cd4a1c769a92783dd90bdd967f6f2"],["/tags/index.html","2bd24f2a16b52db9a447ed3a0b4e6153"],["/tags/ls/index.html","0d0b65f040e0aed02faf900071a012a9"],["/tags/习题/index.html","29330e69335f91219b6128889fe28c27"],["/tags/交换原理/index.html","d829b5f69b3be5d6915a09e368a662c1"],["/tags/人工智能/index.html","62dff5ed360d29a7ce8f8e412f9a1792"],["/tags/信号量/index.html","2f74c266c7c5cf59448293ec82b388c8"],["/tags/内存管理/index.html","3c4dd63948a80b53dcd3a51127fc83fa"],["/tags/决策树/index.html","3547a71065f661458288652e06a8367c"],["/tags/分治/index.html","d49f39e27028af3366f651b5eb933d9e"],["/tags/分类/index.html","31045dfaf634a2b9fa2907fe8a55b418"],["/tags/动态规划/index.html","e0461acdcd086ef1ea529b61744da1d7"],["/tags/华为云/index.html","7d54f98affe380c85824dc0e73a05771"],["/tags/单词计数/index.html","9e00cf112961ff227b33c37eb39edc10"],["/tags/可视化/index.html","a9c5734e183ad87723a95b53881ed25b"],["/tags/同步互斥/index.html","d6ce146a80029bec978ee5b6b902ecb4"],["/tags/大数据/index.html","a71693f201b7a6d5487f34023a4817e7"],["/tags/学堂在线/index.html","3333b2664b599feeaea273d49c3e8bdf"],["/tags/实战/index.html","c379004f88ededfaa57c83e9150104c8"],["/tags/实验/index.html","71538c8f4c0c0417b24f31b3924b68bc"],["/tags/实验/page/2/index.html","0acc07b19baf3d75abb65129f04a42c2"],["/tags/小游戏/index.html","4dd7c53be7b777ca7f4c2148cf28bc1f"],["/tags/工程/index.html","9a9bbb07c876b6567883231a9c05b271"],["/tags/工程/page/2/index.html","dd9c43dc362f956844aec2cd6b1a54d1"],["/tags/手写识别/index.html","4fd124b0680df2eda19f447dda287b29"],["/tags/拓展/index.html","309f336044e38ecfe06d0053199c8913"],["/tags/操作系统/index.html","92a46a6d2e5f1a7c793f56a95494304d"],["/tags/数据处理/index.html","4ba2f2955d6b8a4afe2142ce83244bd7"],["/tags/日志分析/index.html","0ef2e1bacc4a45bcd900083138ea2749"],["/tags/易错点/index.html","2bb924e73fbfb04ae7409a6817ec9f46"],["/tags/机器学习/index.html","44e92d44f1cdf09e4ce1cb94b4de749e"],["/tags/条件熵/index.html","3c41ddc4311bc2409311b4b4847b37f5"],["/tags/正则表达式/index.html","ef72bb6a6233b293732738d4ea5cecbc"],["/tags/汇编/index.html","b859d701070f4b7b330b713cee251bf8"],["/tags/流计算/index.html","0897a776c502606a7bfa1a89592d225a"],["/tags/爬虫/index.html","4ed8e39e802129b8a96b408604232993"],["/tags/现代交换原理/index.html","6be513dddf8f39c95d83922ce5d69d44"],["/tags/生产者消费者/index.html","81872c0e8a911d286f124e3d2cece877"],["/tags/知识/index.html","b1af0f6083604a318c9ff4b0cc5fd074"],["/tags/算法设计/index.html","e206de51d176cbd8b9d591daad343c5a"],["/tags/线程/index.html","96cd327addefa15b7b1291dc56e24ce5"],["/tags/编译原理/index.html","42b0fa5f947d98c2ff5b393b5f78217a"],["/tags/网课/index.html","f9bb42610ef47277c8e5b4f14442b28b"],["/tags/聚类/index.html","badf0f6f30b937911de9e123e467bc61"],["/tags/脚本/index.html","1c99f49d4c415ac24174bc4c3c82d86c"],["/tags/计算机系统结构/index.html","9fce4b2dbaac39f12b1caf1dbb627c9e"],["/tags/计算机组成原理/index.html","4c07959fb4fc538e97a072ede60ff33d"],["/tags/计算机网络/index.html","f259e2fb93aebfc9f01e0a94ea82dd42"],["/tags/词法分析/index.html","d7db7ed290d72a4ef33ff8872d9ffaec"],["/tags/语法分析/index.html","1d646d412224cda80441b2e1ad548f4d"],["/tags/读者写者/index.html","fb2cae940e901d56b3a0163d90fae909"],["/tags/课程/index.html","426972a72c60e51c228fa5c1ff9acf30"],["/tags/起名字/index.html","6e1ebf874c48b3999d9b64116fe0e3c5"],["/tags/软件工程/index.html","250b9bbb43bea4f7154c180818a21e7f"],["/tags/进程/index.html","c210c67c1d9ccbda5fce7de08494a36d"],["/tags/通信/index.html","686dbee6e2427053fa65204405842617"],["/tags/遍历目录/index.html","2c0580c202f500aba02095ec2a04f223"],["/tags/难点/index.html","d71eb08d37da11566e6a462066ed55c4"],["/tags/项目/index.html","3c81e9ca12490fba46f0721e760d1359"]];
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
