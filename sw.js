/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","fff0c1ef9950e731ce205261b69ef43d"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","f7197b754c7fecc07f056160fc1362d2"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","278cf389c2bbb7d6681b11c4d3339571"],["/2020/03/26/计算机系统结构-实验1&2/index.html","f63c4ff1c95a35155ec080a06033e281"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","c73a71e6f24be409cf156e02b1817dc1"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","a76956efc90ae7b2fe820f7bff189d38"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","8aa6021841fa5052cbff9de7aef0f3d4"],["/2020/04/18/机器学习-条件熵/index.html","8702226bf0a0b527414709466308d049"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","b0c748696798a17987f641fa6abd3538"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","bc42cedea0482f2adc8bc277e08e9ccb"],["/2020/04/26/机器学习-实验-决策树/index.html","54627c6347a7acf0648afddb89f8fc09"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","f48ac00cf1e169fb6bdd0e6aae41bffb"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","097e17cedbc9bc13065e8793ed863240"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","9b0a69bae9dd2560e82719830177dab3"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","23fcf7fa8518f680b28add1693fae2d0"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","80fbde034416e46208ab7ba157f30872"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","fe81b60bd18f68c4443b16d76ce37703"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","e3a54aefb43154736b13c8fb146f9b51"],["/2020/06/11/机器学习-DNN-手写识别/index.html","9ce71f6d995d4a9c02c4478f02350e75"],["/2020/06/18/大数据-习题/index.html","2311ca4d7b918b7ac5f7ed88e954ca65"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","8a2813c4f07b70a0647199e14f6a519d"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","56d705ecd04fa20b0a5646125ce9f238"],["/2020/06/24/Linux-拓展学习/index.html","e4cd31fcdbc97b043efa5eb97a403d07"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","36a3cad949e9befc6af8d95805366358"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","eda3cf65eb841a7e733289b530a6aee5"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","83ea810cb469fb1f8ecffc339425f38e"],["/2020/07/15/C和C++的struct使用总结/index.html","8d752a8286cb4b35c12ffab1f44abccb"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","111e1f19b256015e1863998b78ce495d"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","c45855027fd68af6518176c69d004927"],["/2020/08/10/机器学习-实验-花卉识别/index.html","de0b7145519291ccf75173405e56d359"],["/2020/08/15/Python-项目集锦/index.html","35e261ae900105acc0e3c2b76aaccb55"],["/2020/09/01/编译原理-词法分析/index.html","f61185c64eaee4e23a5b970b61843ca5"],["/2020/09/02/编译原理-语法分析-LL1/index.html","ee65dc5d1e608594970c14a0b4726c47"],["/2020/09/02/编译原理-语法分析-LR/index.html","4a8c295cc34bf02019f43e8f5731212f"],["/2020/09/03/操作系统-内存管理/index.html","28cda3325a12b0a1f35d83c2a78c4f24"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","39981c0db907d7358060f72a0c486824"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","f004e0cebb7648a6540caad2b9682e82"],["/2020/09/04/CSAPP-实验集锦/index.html","b2feddbb524f07dcd7fd15b64b6176af"],["/2020/09/10/计算机网络-实验集锦/index.html","c18212872fc9cb0c56ef00490a9a1a1e"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","be3d7af27925e8999da2931e3c7493c1"],["/2020/09/30/C++工程项目-JobShop/index.html","29cf6fe486bb7fc6f36997b9fb71590b"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","65ef38b1d44bfee9cc272056245e0c1c"],["/2020/10/09/现代交换原理-实验1-时间表调度实验/index.html","6a808b843904347b4aa4697d1e062afb"],["/2020/10/09/现代交换原理-实验2-摘挂机检测实验/index.html","2276506360896e66a47b8d41c1f26d84"],["/2020/10/09/现代交换原理-实验4-拨打SIP电话/index.html","09fd779ac5d8b4f40a343d7aa0da4b7d"],["/2021/01/04/Android-项目集锦/index.html","407f1508384fc57cc3c9c7af49ee3b5b"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","3205d36849230c13044c00fbb0742aeb"],["/2021/01/04/C++工程项目-travel/index.html","400341e3450ab1d23c5138785a941f7f"],["/2021/01/04/算法设计-分治-最接近点对/index.html","2987c46f863daf85c5f01ac71617ed35"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","d69642bd50c56be90bd87b3e8c723c8f"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","1e9ac2a18403e5b2a64c7b1aafeb977f"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","50ca8a6a0ea532f9d931c626227f5557"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","51f60381f6225bdbe38352073fe71c6c"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","7c27c2271d4d430856c57da230e36213"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","71fb2933504903748f5ae300f06b20c9"],["/404.html","2394b59b860bfc1b2a641e2bc2300ffb"],["/about/index.html","e0ea2c8993d02f10808449164d25cc3c"],["/archives/2020/02/index.html","1992d5f2c234e3985af31b8c20e7d307"],["/archives/2020/03/index.html","2293a77e634a5b76d1b9146512f957a9"],["/archives/2020/04/index.html","85717dfd93dfdfa97f1dc79ae220f320"],["/archives/2020/05/index.html","2fe2059d75c5d89cb3358a5257944396"],["/archives/2020/06/index.html","d9dfbfdfbe6c310b0b0f0720672691ae"],["/archives/2020/07/index.html","5a548329025f561e1aedd4c7aa9e1dc3"],["/archives/2020/08/index.html","51be7dac5e79707665de149ff34fb795"],["/archives/2020/09/index.html","17fc6fd02bc9fd34b42bf229d808bd09"],["/archives/2020/10/index.html","eac0d14dad1481682559c3ff95b0a253"],["/archives/2020/index.html","ea2425ace7a0abf28199cfa522c98bd4"],["/archives/2020/page/2/index.html","ff331130bf6ba799dd0698fe2d649a7e"],["/archives/2020/page/3/index.html","1ad286574a22133572b11c595106c75d"],["/archives/2020/page/4/index.html","3ba61ebf7774fa4319b98dbaca26787f"],["/archives/2020/page/5/index.html","4d0faf3807907f697ed391164aad5422"],["/archives/2021/01/index.html","60e6ec4cb53b9c50e712a2665786b47e"],["/archives/2021/index.html","8f18fa913cb60cdeab33233ea11d06f1"],["/archives/index.html","b20614b4b8c0f7e9eedbe98c98082c3f"],["/archives/page/2/index.html","b20614b4b8c0f7e9eedbe98c98082c3f"],["/archives/page/3/index.html","b20614b4b8c0f7e9eedbe98c98082c3f"],["/archives/page/4/index.html","b20614b4b8c0f7e9eedbe98c98082c3f"],["/archives/page/5/index.html","b20614b4b8c0f7e9eedbe98c98082c3f"],["/archives/page/6/index.html","b20614b4b8c0f7e9eedbe98c98082c3f"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/bb/index.html","29dc90156569f45db5fe9d562d8ab381"],["/categories/C-C/index.html","852ad77225f4546d8d3e98829350ef9f"],["/categories/C-C/page/2/index.html","563762f67bc8af12f0ddcc252cd56e62"],["/categories/C-C/拓展学习/index.html","6a64e0bd9b363c0afcd3d6876f9942c9"],["/categories/C-C/操作系统/index.html","92374f4e1aaed5274a9bbbabd28d5a02"],["/categories/C-C/算法设计/index.html","75ba6527c84d76755d68015eba4a6c7a"],["/categories/C-C/编译原理/index.html","cbd583066c845dd04f0794078f65455a"],["/categories/C-C/软件工程/index.html","14d2231082a2a6b43be924a64428f3f0"],["/categories/C-C/项目/index.html","53ff8480aa0bb54e441d13ecd128a5e6"],["/categories/Java/Android项目/index.html","9a6dbc8cee37fe6cda4669be6d4f7291"],["/categories/Java/index.html","32e23febb8a4fb5ed101c0e4d6f99675"],["/categories/Linux/index.html","d6b16c79b04a31f4aedcac7ed8052968"],["/categories/Linux/上机实战/index.html","81c3f03cf56acd965333a7795bd03f3e"],["/categories/Linux/习题/index.html","ef782dbd3176aa4a687ea41c00dc9418"],["/categories/Linux/拓展学习/index.html","4835cb2f91ee0827bad90c12b5d7ab50"],["/categories/Python/index.html","cdc1c355f3f74d6d6fc0b99da9467ae5"],["/categories/Python/爬虫/index.html","44cd1fbbc22a5e05bc39dfb36ed40022"],["/categories/index.html","f0ec796cb99105b7022532a64e3d6da7"],["/categories/其他/index.html","9c8f14306957606c5bb2b6978f8db878"],["/categories/大数据/index.html","6002a2648b419a2067353268b97bde93"],["/categories/大数据/习题/index.html","a4974269b029b6f4d17cc661d4aab75d"],["/categories/大数据/实战/index.html","1da5ab66166d51e08453d991829a00d1"],["/categories/机器学习/index.html","e1b9d323c2c6c3c47a35541ad0823e8b"],["/categories/机器学习/实验/index.html","d26ea494e0ca682ea3b3aa153b714a9f"],["/categories/现代交换原理/index.html","3f19b15e58c8040709190423b810a209"],["/categories/现代交换原理/习题/index.html","d19d05b3b9c532f324e18750f43d6e5f"],["/categories/现代交换原理/实验/index.html","65ea190a2f744afc58a9ab44bbd7c5e4"],["/categories/计算机系统结构/index.html","02cec6b03f6a53af96681ba59df9d438"],["/categories/计算机系统结构/实验/index.html","62080d06a3c48864b7d16cbdb7d75aa0"],["/categories/计算机组成原理/index.html","0302b8be90d09912f5934247c7c18162"],["/categories/计算机组成原理/实验/index.html","d9c547c431282ed63ef1d114ef61a1d9"],["/categories/计算机网络/index.html","b7621cf82c8c6c9142959d03c9bd0513"],["/categories/计算机网络/实验/index.html","51d34d83f00bdcda57415df76fa51852"],["/categories/集锦/Android/index.html","001540bd06b1e330ade518b8cd824ff7"],["/categories/集锦/CSAPP/index.html","c8de29a6f73abc3b100484af6378e767"],["/categories/集锦/Python/index.html","40c4a1591cc83ca2a2302a4d6af1183c"],["/categories/集锦/index.html","ef629b9ae345ec31781d480022d8820d"],["/color/index.html","3f627143356419f7f54e1443b3536f0d"],["/css/first.css","ea01aa1635810499a5ade558f4f81d56"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/style.css","4b6ce514c846132c606ce76da7e1c124"],["/friends/index.html","fcf42f3211887ac8b23bee25f47cb428"],["/gallery/index.html","cac0a9f9094373909cca2398b08a7aa4"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/periodic-table/index.html","4c31220b3c8c1d35b1128df43b2c9dc3"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","f096fe6b21ddf7ea26913b2795d7c1a5"],["/js/aplayer.js","6e605f0855251e101d3024646f3eac60"],["/js/app.js","1948329f2fd7e750ade4bdc49138c09b"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","f775b76ec96d6f56686f466b4fc3df4c"],["/page/2/index.html","c93de3c7e36a64c9a6dd9a45e4cab61b"],["/page/3/index.html","72ca0ce144676a5454f53b0871043115"],["/page/4/index.html","04c40b03d0eb8481ac364f872672e84c"],["/page/5/index.html","4eba5720773b56d96d536185def6f44e"],["/page/6/index.html","d6eabd1ec7792e0fb95ffad17cbdeefa"],["/shuoshuo/index.html","3622b6bea70834b2f457e52a9b65e6ae"],["/sw-register.js","bbbc743a3918423dedac8a5c6860d716"],["/tags/Android/index.html","d2d15a2a8aecc8cac91867d31e5bdcac"],["/tags/C/index.html","f0e5272533c9259b0714ed04b2a5f5fd"],["/tags/C/page/2/index.html","ebb50f5d4b419f734ed3a1cafbaf1a16"],["/tags/CSAPP/index.html","cd19bbd24ba9f21dc641b2efbe514992"],["/tags/DNN/index.html","f9c7cee2988ac256ecca0a61d67ed9de"],["/tags/DNS/index.html","52c13533b5e5c579e2a06ddf72e309c7"],["/tags/FPGA/index.html","05e87cd9e134e71df972e84f8ca3a24a"],["/tags/HDFS/index.html","af4d1865aab09f387e998ca60337f955"],["/tags/Java/index.html","73c9a22cbd6e87b011e52effc979ff4f"],["/tags/JobShop/index.html","bddd08d6cdecd9f98eb559acca507ac3"],["/tags/K-Means/index.html","b085025e2cb00374acdd329232048a00"],["/tags/Kafka/index.html","3f31b1aae780d76a7b40f917b96ded96"],["/tags/Linux/index.html","f48b4cf6d636ca7e8b12618c8a6d817d"],["/tags/MIPS/index.html","cd6bc66a255aae898d19f6d47be5a51c"],["/tags/MOOC/index.html","f0751727e4d63218a0ea034742341031"],["/tags/MPLS/index.html","3d7ea4706f95af4d353a8467aa9b53d1"],["/tags/MapReduce/index.html","e3c0fc9fde664842c12d8a82b1a5a937"],["/tags/Matplotlib/index.html","c0ba0653acc37984cd7d325165bdd866"],["/tags/MiniSYS/index.html","69bc6caac2e8df0b019f1dc66dfaa215"],["/tags/Python/index.html","a0904ebc8bf7c1511aba9b0b2772b38b"],["/tags/QT/index.html","0df975fbddf308ca1cfb561f76215aea"],["/tags/RNN/index.html","db2aed5894958430018a0c3beba21c65"],["/tags/SIP/index.html","fd70a3deecb602756e06f14cab7325f9"],["/tags/Scala/index.html","c96ea3dfae88ee92a67086cd6ce55891"],["/tags/Shell/index.html","5d5f26716bd14ab1beadbe4efd8f3782"],["/tags/Spark/index.html","3a1fed514b5d0ba18a8da112101fe4f5"],["/tags/Streaming/index.html","36a3ed0ff18995067c5546267805a84b"],["/tags/Verilog/index.html","9b49007dd995f89be8493851465a498d"],["/tags/first/index.html","eee17b355ac748cd617e5ef1f2d24d2d"],["/tags/index.html","518369f7a619054ded3d97d86bb6b96f"],["/tags/习题/index.html","d4494af18aaa2d2ba24b6855231f1390"],["/tags/决策树/index.html","cde38f133931301c9c4016a7c5bb1171"],["/tags/分治/index.html","22630dacaf482ea4f4bfa9a1b9abf5e7"],["/tags/分类/index.html","43823ba22a9ea89f0924dc47f1591d9e"],["/tags/动态规划/index.html","adc317933d06fb8b6d76cc0af03ec02b"],["/tags/华为云/index.html","f29263de6456d1c26179d6212e00f204"],["/tags/同步互斥/index.html","00c0d75de82d11a0bb84dba86b1a7838"],["/tags/大数据/index.html","720c36de65f7f358ac24129d31471c99"],["/tags/实验/index.html","7d6fc7b87e5c7d3d08bfe16d0ad15a3e"],["/tags/小游戏/index.html","593bfd490132db197ba0c0c64adbca1a"],["/tags/操作系统/index.html","7a09cbb49034e3c878e30cf9a4c0ad07"],["/tags/日志/index.html","c19efbd53d4b70cb8895411fba3286d8"],["/tags/易错点/index.html","97eef1ab17ba6eeb72eb8198e7be4341"],["/tags/机器学习/index.html","05768b5afcc916d43e852cdc887278f9"],["/tags/正则表达式/index.html","22f356a926b58591a4f048eb9dd1d2e6"],["/tags/汇编/index.html","9100061d56e6d4b959439918d83854e0"],["/tags/流计算/index.html","c510a22e966b5acaad167a18768a3361"],["/tags/爬虫/index.html","710337feed6b4239ca6736ebc1f47d89"],["/tags/现代交换原理/index.html","57e8249b74032af7743d629710f38a15"],["/tags/生产者消费者/index.html","f248e4ae98c85a48d0398b6144fb5be3"],["/tags/算法设计/index.html","fcd12e6308f1a46e4a847b1d19ee813b"],["/tags/线程/index.html","f3842128e12677b10a2d302420f34a04"],["/tags/编译原理/index.html","4301f73e4218c8868eadea9a7d446718"],["/tags/网课/index.html","24d40602ef8723d24d1d2b84896e96b2"],["/tags/聚类/index.html","74601d334cefde1afc940b7740b9c1c7"],["/tags/计算机系统结构/index.html","856f2baf6c7694a348f1ddecfb783779"],["/tags/计算机组成原理/index.html","c8f33b46608aec727a96bc4f9bfb6b80"],["/tags/计算机网络/index.html","18ed23cf1998c0c420dacef0ca3b8af8"],["/tags/词法分析/index.html","3c247675885b1274cc0f57aa3e6660d5"],["/tags/语法分析/index.html","a01df21d7a8900328c3beb2f46b18e92"],["/tags/读者写者/index.html","ae3a0dc983bda023182fa9f39d36ace7"],["/tags/软件工程/index.html","4c672f8a39d125c06d30b2a656cd0db9"],["/tags/进程/index.html","8c256d299d06275434c8daa4e05c4834"],["/tags/难点/index.html","c77c7cc50d2062ae8f0e684edd1964c7"],["/tags/集锦/index.html","6e3677d946223c364523359b241f7530"]];
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
