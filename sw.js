/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","56c3810782b2f262ec92d4f30e2b0730"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","f1c6716805bec72ab86bcd758d4c0d67"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","5ca7f4d5c5de2fd52c5a37ac54efff9b"],["/2020/03/26/计算机系统结构-实验1和2-遇到的问题/index.html","476376910f1e2b95ebf4bdf0f35f7130"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","70d94b3a4d1bc3461b6b7942ebd7df5f"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","5e21a5ad313ef485ce1ebd1d72f03726"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","54a726fb7d9701418b0db018bead530d"],["/2020/04/18/机器学习-知识拓展-条件熵/index.html","7f02d02e994c3982952bc1330d6ba066"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","df87505710ce11f20f9eab19c10bc495"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","62b81210c19345390afe8bfb0c970ba6"],["/2020/04/26/机器学习-实验-决策树/index.html","79e8d26a6f9ff55a9d1213f5fc7f9077"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","298e091fc41c9dfbc933b7eba62344e0"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","b77a17f870d38b65a12605e3681532ab"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","9df08aadeefb954d780f1ccc2e0d3df3"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","c6ab708d6b61b6c8fce9ab5100082c44"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","71136a2e56f188dda29cd2e949608748"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","cd4b184cee59fc0af766b0707c7f4637"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","e84214844b4e154e0670f02f9206df56"],["/2020/06/11/机器学习-实验-DNN-手写识别/index.html","363a6127946ac512061d71628f501d91"],["/2020/06/18/大数据-习题/index.html","68a2193cd8c1b91b8b4c3812dfa9cad4"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","0c381749e341337e77a613c06a906aa8"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","014e4ce88b39e087330593b1d8eed85f"],["/2020/06/24/Linux-拓展学习/index.html","02fc2134a1adf64cb2e1eadf0fa4975d"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","30c70837e0f451f05dc7e0506740aafa"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","6a3c07bf064b687c1040272f8ff6d249"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","629187d4571f26f942cd1a5ca9b2c225"],["/2020/07/15/C和C++的struct使用总结/index.html","ceb9d8d78cc1707b230c249d4e962c99"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","d2a1596ea550b7bd0a9121f0a437fb00"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","f615755afc7e3cf97a152d2e1ae5cf76"],["/2020/08/10/机器学习-实验-花卉识别/index.html","3cc74a031265cde1e05a0f941d89b8c6"],["/2020/08/15/Python-项目集锦/index.html","324322a89f30b21abe85ab35214f422a"],["/2020/09/01/编译原理-词法分析/index.html","bab855553d0edcfd80a9559e04aa3c3b"],["/2020/09/02/编译原理-语法分析-LL1/index.html","d91316693c792f6948c63c0cf3337615"],["/2020/09/02/编译原理-语法分析-LR/index.html","6ba46577f27ecfdaad385872958d390d"],["/2020/09/03/操作系统-内存管理/index.html","4c95171b57c25865e37217e3c54f904f"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","85ed1b832f9c3d05ef53237b8aaef61a"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","e099ada68d60a9bf167acb55104720aa"],["/2020/09/04/CSAPP-实验集锦/index.html","f4acb42bbd54dbd1d519167610cd05a0"],["/2020/09/10/计算机网络-实验集锦/index.html","33262cff7f9c2d12bd6808bad72bdd74"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","0825b998b3dcc9e6cc6ac557417b450b"],["/2020/09/30/C++工程项目-JobShop/index.html","eb3117bfa9d6a3d95bfc89459d962a75"],["/2020/10/09/交换原理-实验1-时间表调度实验/index.html","3695ee43ea4946870d350e41ef2d41a9"],["/2020/10/09/交换原理-实验2-摘挂机检测实验/index.html","0262d0ad5e0536bd45ad3b7cfda75778"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","9e7eb1e324e5057c5e6944376b9ce427"],["/2020/10/09/交换原理-实验4-拨打SIP电话/index.html","50e68998c6060bf654eedb06508dd396"],["/2021/01/04/Android-项目集锦/index.html","4efca73ff2ea12c493e088905599fe72"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","dfef86dd8281ed937cbc54a7f4015e12"],["/2021/01/04/C++工程项目-travel/index.html","bd94bf666b67740aafe607313799add5"],["/2021/01/04/算法设计-分治-最接近点对/index.html","5051581fb76584775d192de7b67add25"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","28aa7c2fff7473ecd46a2295ecd986c6"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","eff0bb52270fd361674cdea194a055c4"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","3c614b131263517e6182dda912cc2ed7"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","5d7eb1c8f8842cc8d894ad9ca6e98569"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","3abd0324907cf52fc4a274119d459726"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","b224e014dfebe0c653accc96d04e6171"],["/404.html","2394b59b860bfc1b2a641e2bc2300ffb"],["/about/index.html","1c1060068a4b0e3695f1d2db450ca605"],["/archives/2020/02/index.html","a2aae1964fd1d972cace29841bdeb90e"],["/archives/2020/03/index.html","ef27ee36422c809fbde305af8d229843"],["/archives/2020/04/index.html","3efc691a1aae0a08c1a088fc6eaf9eb9"],["/archives/2020/05/index.html","918f25c5a3ec4bcb002efaba0e0612e2"],["/archives/2020/06/index.html","35699c08c00be58b3625ffe9906b9c20"],["/archives/2020/07/index.html","db2edbf175cf9b27f6c8d7a0222036c5"],["/archives/2020/08/index.html","3553dfd62e71af0134cd8ef0596e7b92"],["/archives/2020/09/index.html","65142e7aafec9a9c167e9c92f2dfbae3"],["/archives/2020/10/index.html","33bda50a6432d75acc93ee63ebebc384"],["/archives/2020/index.html","2856acacca18cb45c72307ccb286fd62"],["/archives/2020/page/2/index.html","540ff8d82b81306e7c451106aa2cefc7"],["/archives/2020/page/3/index.html","b4a33711200754cf9f8455ddbc2ffcb6"],["/archives/2020/page/4/index.html","85f0b1bae02366e00278213c3d8d39d4"],["/archives/2020/page/5/index.html","ef66fd96ac9e4049fb2517a739deadc1"],["/archives/2021/01/index.html","1f930d68cf5015379afc90362d97cd53"],["/archives/2021/index.html","78654d60dc78eab383c12c56299d7bc4"],["/archives/index.html","9a90b07efc916ffafa4875c2eca3d7b4"],["/archives/page/2/index.html","9a90b07efc916ffafa4875c2eca3d7b4"],["/archives/page/3/index.html","9a90b07efc916ffafa4875c2eca3d7b4"],["/archives/page/4/index.html","9a90b07efc916ffafa4875c2eca3d7b4"],["/archives/page/5/index.html","9a90b07efc916ffafa4875c2eca3d7b4"],["/archives/page/6/index.html","d2e61991b4fac37940b38cb8e8405a9f"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/bb/index.html","4609e9616f286aae9c1cec2ffc9576bc"],["/categories/C-C/index.html","e8fbe66df2c3dca7b70585a08da737e8"],["/categories/C-C/page/2/index.html","911c8d13d3c2ef69b769b7e1bdb9beb5"],["/categories/C-C/拓展学习/index.html","8c5358203c3456e158c19ee0bd262d3d"],["/categories/C-C/操作系统/index.html","98c7042baae09917ef4b41a8bcca13be"],["/categories/C-C/算法设计/index.html","87f895a32a4e3b03c93712bcc31e2877"],["/categories/C-C/编译原理/index.html","b0f0de48cdc8f3c060aa06d503dd4e11"],["/categories/C-C/软件工程/index.html","350cea7fe73d0859df8c7ba50ada49d9"],["/categories/C-C/项目/index.html","30f990048c0cb778d753d40259508236"],["/categories/Java/Android项目/index.html","8afdadbe5a80465e58d8390d2df29c1b"],["/categories/Java/index.html","503b7332a7cd2fa87943e96143ccd69f"],["/categories/Linux/index.html","704045112df305f09352254bddc1ca10"],["/categories/Linux/上机实战/index.html","d45196e2897733be1e6a49bbe56cf310"],["/categories/Linux/习题/index.html","86aa2668de210e2c37a767e66c9d49ee"],["/categories/Linux/拓展学习/index.html","e1bee9a08198a67a0bd324ed97c2e030"],["/categories/Python/index.html","f869a6900e6f53474fd128a409236788"],["/categories/Python/爬虫/index.html","1a5012dbf94effb6b82bad22d7623f0c"],["/categories/index.html","c971469312f5c18c13e67a1d0ce5ee94"],["/categories/交换原理/index.html","dfa7481599d36e982eab5bbcf2dcacb7"],["/categories/交换原理/实验/index.html","03da54256e5bd200956f1c30b53d994b"],["/categories/其他/index.html","6a267507689ae9eb3ee7e91ad9007e72"],["/categories/大数据/index.html","5e21ba6c5f6112781039b236fdeffeb8"],["/categories/大数据/习题/index.html","146554d3885403109eb3125f0aa1e12f"],["/categories/大数据/实战/index.html","6f1a757716d1ff924ccd2c9d0805de92"],["/categories/机器学习/index.html","692113b36f60a0ee40de6067ce6e0792"],["/categories/机器学习/实验/index.html","51cdf2b9a624e5e0b5669f0ed4479626"],["/categories/机器学习/知识拓展/index.html","48b2fa8e4a7f6103f360ed7adbe20cfd"],["/categories/现代交换原理/index.html","4324c355ff54eac0c6f3f4d343a9c46d"],["/categories/现代交换原理/习题/index.html","8d85c56e54c84f22402352494e7d9699"],["/categories/计算机系统结构/index.html","870f8fac34d8ed41181428ab544513c1"],["/categories/计算机系统结构/实验/index.html","956f11569474b9d8978da62975f8a0cf"],["/categories/计算机组成原理/index.html","3618ce0a8c4ccde8a507d2a0bdd52b5c"],["/categories/计算机组成原理/实验/index.html","e48101e2b9ab00c7634d910d478576cb"],["/categories/计算机网络/index.html","f5452fcc279871c732b927071208d7b6"],["/categories/计算机网络/实验/index.html","da202a4b212a556bda28abcec34b43c8"],["/categories/集锦/Android/index.html","04215077ac5302b04b18de013d9c01b6"],["/categories/集锦/CSAPP/index.html","361de7cce4a7ce079d0d6228f353a96f"],["/categories/集锦/Python/index.html","ecedf329315b3a05e42ae5cd48e4880d"],["/categories/集锦/index.html","8e5d46265a51f9b85edf96894105696e"],["/color/index.html","3f627143356419f7f54e1443b3536f0d"],["/css/first.css","ac2d0010102d22ded3aa536d16e52b73"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/message.css","b0ce3ca232f809c8d7a85c79bf1f7ff8"],["/css/style.css","f33cadc59019a1af1d898b222bf512f6"],["/friends/index.html","94addc7f658d2707bdbdd6f353f00ba6"],["/gallery/index.html","6896ea89f597ac35b1a3ec2cd116c380"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/periodic-table/index.html","4c31220b3c8c1d35b1128df43b2c9dc3"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","d1f0e98a762357636fa0c43086eb364f"],["/js/aplayer.js","f10ee7aff4ce278045da925ac6510d29"],["/js/app.js","d14976ee97145aa14568c13c6554dcc4"],["/js/jquery.parallax.min.js","38cf4791e24aeaa8101bd2c816400718"],["/js/message.js","38da736cdf513c9a15a0a2a16a34eeae"],["/js/plugins/contributors.js","23ba3efa08d9fb1aae753ceaa6df2711"],["/js/plugins/friends.js","239cf9c648af390f866ed00cead3e23d"],["/js/plugins/sites.js","15bb31fc27abc888b17cc5d822808604"],["/js/rightMenu.js","19b2a577c30a04732f02b86bda62e0b9"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","ce893ee1d8b50f4143a4c134c97b16b5"],["/page/2/index.html","376fff1a2fad3fe6363a2e9384bee1f0"],["/page/3/index.html","fd8990defa34def4e05db907930ee217"],["/page/4/index.html","8d47b6345f2251bb3e904333b5f5a99c"],["/page/5/index.html","b9e0133c24156f70a5a1f17b3bc86bd4"],["/page/6/index.html","a4a56d509cb1a61ecd4228c5f56b397e"],["/shuoshuo/index.html","96cfabc3c232465c99133352a4fc7a8d"],["/sw-register.js","b2de5f538fd6a9adc898b31b7bde1141"],["/tags/AI/index.html","232804923acbdb541dbfdfe7fad4dfcb"],["/tags/Android/index.html","7c85779a241b9f0bcd8f22639d036431"],["/tags/C/index.html","80e1f596f09b1bca24efa7aafcb8d30d"],["/tags/C/page/2/index.html","35af9b68a8b75952fbb148ff39be3aa4"],["/tags/C99/index.html","b1df562402e09fda51ebc9e6949f4ab5"],["/tags/CSAPP/index.html","00a8c6304459fb51e1cd7881610ae762"],["/tags/DNN/index.html","fb4c7bde7c6193b125cb6619a17390b2"],["/tags/DNS/index.html","ed1164956d8759b8565db85993f33451"],["/tags/FPGA/index.html","28a347d1e833b2e1d39ee65fbbd99d68"],["/tags/HDFS/index.html","f4fd9e7f966bb2b5361651e482f2654d"],["/tags/Java/index.html","7cff0fc78636d3948e2a77e2704112c3"],["/tags/JobShop/index.html","86562fd585b8566afbfe8a91916395a6"],["/tags/K-Means/index.html","ac23cdf6d8bcc75af8d5e65e985a6331"],["/tags/Kafka/index.html","a78854bf7250f704368c1d90598ee391"],["/tags/LL1/index.html","47fc7ed9c45513700e60001f29413871"],["/tags/LR/index.html","9bbb870e1f319ae7cfd89f5490b223ec"],["/tags/Linux/index.html","ce182a43c7a20e01da056bfb0006dc1f"],["/tags/MIPS/index.html","4b074cbb44e81581cfda34ce0be2a273"],["/tags/MOOC/index.html","df95bfc32e8949bd7dcf906c521056b2"],["/tags/MPLS/index.html","8159824c03245621b17f537530753c3f"],["/tags/MapReduce/index.html","cce9219674d369f0032b270ca4aa95e9"],["/tags/Matplotlib/index.html","2977774ff4002ec4c77a503e6443b856"],["/tags/MiniSYS/index.html","5e2a56f6db398551f4992d42413bbe65"],["/tags/Python/index.html","9bd5da901d07971433eb1804e93ad6f9"],["/tags/QT/index.html","4b77ee8c59e35901a524297f48ec7602"],["/tags/RNN/index.html","c853823faab3d9438c0e70f661a7bc57"],["/tags/SIP/index.html","18d94642ac8c07ab2169ed6c57390a32"],["/tags/Scala/index.html","e7c9cf4eb4c8cf505bdd48290ab5d544"],["/tags/Shell/index.html","1b1c038d303946738b466881ccfd5616"],["/tags/Spark/index.html","46ecba9c6847d14e2e0a59d47c06a890"],["/tags/Streaming/index.html","70f16f34ec9b304ee473afc3c4ade474"],["/tags/Struct/index.html","15e0b80f0b092d5b6f35512ae2178be5"],["/tags/Verilog/index.html","f9e0e1494f106e6e6e75a0ecb78dcb06"],["/tags/first/index.html","8bebc3e1c503f11c1fd811d94761e1c1"],["/tags/iPython/index.html","cdf7313d09715506c696a886e99d4efd"],["/tags/index.html","0b93f88742d26dae568fa5af1202266f"],["/tags/ls/index.html","175f7942157e173781b0b763f90f8a48"],["/tags/习题/index.html","c26823f123d5fb5bcdb051873ab62fba"],["/tags/交换原理/index.html","568242ee68e928e14cf5be1f121ba16b"],["/tags/人工智能/index.html","9b99d47d65e168c2040c0baf7a5e0923"],["/tags/信号量/index.html","850db010019e69262e65b11221e67d78"],["/tags/内存管理/index.html","099cbfb6d8bddb95faba29a18ca7e253"],["/tags/决策树/index.html","e29b4e70502e7eaaa83b81baea459ace"],["/tags/分治/index.html","edd42ff103b57ca62b53924c2f49c420"],["/tags/分类/index.html","8956cf48408826c1b6dfa8829c535318"],["/tags/动态规划/index.html","77f75e7f39abb3fb481952db36c18978"],["/tags/华为云/index.html","7c865d3beb41a872bac816b2ff4767e8"],["/tags/单词计数/index.html","d980ae41d7c92536b4431f3eb95b83ec"],["/tags/可视化/index.html","863e7d396445c76a939f9d52f9d2087a"],["/tags/同步互斥/index.html","08016a66ab52820ca0f8198dc5bce1dc"],["/tags/大数据/index.html","c5d0513fb7e6226a15bf1d731f4804d4"],["/tags/学堂在线/index.html","a037a7dfa478c91b4fb2e5fa9db3d1b0"],["/tags/实战/index.html","bbd0d6f42174d4bd462d9edfe0a6f26f"],["/tags/实验/index.html","64a96440b58e6ded67ee8d437d1571e9"],["/tags/实验/page/2/index.html","985392c0502d113abc477994420bac7c"],["/tags/小游戏/index.html","0bd793ca34b66f8d97f6af0ec758e219"],["/tags/工程/index.html","48a973fd45f6e65e136c719a7375cd23"],["/tags/工程/page/2/index.html","37d426abc11dad3974cea72e57e04438"],["/tags/手写识别/index.html","9e3a81e7b9992e49d5db33b117a25510"],["/tags/拓展/index.html","e360cc6ccfed0da5795e42ae4dae74da"],["/tags/操作系统/index.html","79dcbac3d47fc573e346ae81459bca9f"],["/tags/数据处理/index.html","e05c36446965c355f64aacd830dbf2a9"],["/tags/日志分析/index.html","cabefdd0232b7504f7ca90711ac25aa0"],["/tags/易错点/index.html","740acd81516aaf2ea8639609f0262693"],["/tags/机器学习/index.html","7100c2617b9ad2a29ada4eddb3d9b4ec"],["/tags/条件熵/index.html","8eca6798a81d87295520682e57469af4"],["/tags/正则表达式/index.html","7574081e80b486b725748ab4df86ce11"],["/tags/汇编/index.html","52d5bb9dcc2b18bc583f0a61b01f2970"],["/tags/流计算/index.html","7450f76cc24bff3611664606aabec897"],["/tags/爬虫/index.html","1557e94658699d9f245afddbd245cc96"],["/tags/现代交换原理/index.html","3894f37ba7dfd8304126a2bcbf7d1ac8"],["/tags/生产者消费者/index.html","91fd3d669398a66b15522423eb3ce920"],["/tags/知识/index.html","55956d314e2b052a79db3b238dcf6327"],["/tags/算法设计/index.html","4a3ef106ab2a0370c564e6d67cff8bcf"],["/tags/线程/index.html","12f3eaf67b979638b311d705ed78f57d"],["/tags/编译原理/index.html","42db1cc2629d32947269a5bc50b43182"],["/tags/网课/index.html","6bde707f9d8073cb742cb8f7cc3800c0"],["/tags/聚类/index.html","89d3c873d22d29971386acebd5ceb2bc"],["/tags/脚本/index.html","c7aa0b4ddad643b12e7c99c69579fab3"],["/tags/计算机系统结构/index.html","2838c8da88a62062816ded8bd405e392"],["/tags/计算机组成原理/index.html","ce8fc855c08b6117416484c0f8567146"],["/tags/计算机网络/index.html","bbe72e6d7deb34d9d6894f94f6c54595"],["/tags/词法分析/index.html","209d9a09f6c1e003d362e6298950efa0"],["/tags/语法分析/index.html","1dfcbcdb0d0db817e6d4b1672e7bae41"],["/tags/读者写者/index.html","3e125f495a05b77d411b0357c61ac2d3"],["/tags/课程/index.html","bc5b618e5b15e65b9ed8fff83d61d235"],["/tags/起名字/index.html","ea7085d11b5af9fb94f65d7cbd751763"],["/tags/软件工程/index.html","e6b13bb700db34445690fa4770a6525b"],["/tags/进程/index.html","c4885a782bc81073666b8bcce500bb1e"],["/tags/通信/index.html","c48cbe9a19675a907af5bbe5e69ee587"],["/tags/遍历目录/index.html","d064611bc651492210266e34c3e36317"],["/tags/难点/index.html","2d99fdad2a8016aafad07b1cf66b5e7a"],["/tags/项目/index.html","25b928fd562a084e6fa33524d3d4de33"]];
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
