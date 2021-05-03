/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","344b32fbaa283d4ced9b7b6511d994b1"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","031bf27692bb022f64c7e88bcff23af4"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","5d108955faaf9f81d76042d021d7db41"],["/2020/03/26/计算机系统结构-实验1和2-遇到的问题/index.html","84bde41371eb905fcd641cfc92aafc3e"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","3be8b90af12e8c1c1e6f6ed90bfc7562"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","c9b380abce3c88ca6c6a7e65949be894"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","781bf7c63b4521d8d425a33926401705"],["/2020/04/18/机器学习-知识拓展-条件熵/index.html","88583868592956efc295c334fa5b78a1"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","fc62c125ea569d20d9c5b600827c9d68"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","435ee0a1c21a27b53bb1573738ee07c6"],["/2020/04/26/机器学习-实验-决策树/index.html","2ca64b737672b1796c05ae37a5e7f5b8"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","465b45a062a2a0a614c684682e720bb1"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","235128e5824057695a018dff4c0814fe"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","eeb56f3b50a94d6b1fad767541c28d88"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","a9f2e7159523d06421820cde623839d3"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","6b759c4d0a870dd4633a242d6265d7ed"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","1711770ca84d4e3fd25edfd7011305e7"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","cbcadf2170c007edcff539e27be21b89"],["/2020/06/11/机器学习-实验-DNN-手写识别/index.html","b6b9d4b8a37a9a4299ee2b5455ed42cf"],["/2020/06/18/大数据-习题/index.html","57eecb3cab575a1eda61839223a88fb1"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","26ba6b5b0840b485924854834d6c9097"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","0371f2a6df243de26c3fd6559b1c3322"],["/2020/06/24/Linux-拓展学习/index.html","f43824941b3d97e44070987c4e4022f1"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","629a8fcd3c52ca435b5f1ffb0b06a914"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","c93970e3d07dbb055a6d955124382ebf"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","fdbfecef7dd7c96e2f89aa74be6c2f21"],["/2020/07/15/C和C++的struct使用总结/index.html","204469942eb021addbd57a54bd58992a"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","e2e6b640a302927727cc26e0ea27b612"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","83de5c59b5eac3ed95cf10efbe518fbc"],["/2020/08/10/机器学习-实验-花卉识别/index.html","f52d56b8dfb8506609dbee5475fb89c5"],["/2020/08/15/Python-项目集锦/index.html","92d7800f48e621fce20f7d616618eb6c"],["/2020/09/01/编译原理-词法分析/index.html","2a7cb23d43e91a9e24e3988450b9339f"],["/2020/09/02/编译原理-语法分析-LL1/index.html","7491567c4cd64cc6021bffa937679c8f"],["/2020/09/02/编译原理-语法分析-LR/index.html","583bd586996cf9563b8f953b7eb82eea"],["/2020/09/03/操作系统-内存管理/index.html","555ffeae200ba3f66fe7dd984f19be98"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","38339259792927099c3081dc71557eb8"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","bfa142ecf1dea018cf13e7bfd0df7018"],["/2020/09/04/CSAPP-实验集锦/index.html","22d468c785bd7daf597a2e136acd5926"],["/2020/09/10/计算机网络-实验集锦/index.html","51a1a05f5d2418b7581752c04b79e324"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","306c10ea4de6bcbcafb43cb84c3e424a"],["/2020/09/30/C++工程项目-JobShop/index.html","b015df1a3fe6e5a5539edcb154ddaced"],["/2020/10/09/交换原理-实验1-时间表调度实验/index.html","4947bb313dfdca3ab6937e73cbb283d1"],["/2020/10/09/交换原理-实验2-摘挂机检测实验/index.html","ab2d0c3a62823dd01a1418234ef89e2f"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","df7ae3b83d7386acddda18d84e2582a1"],["/2020/10/09/交换原理-实验4-拨打SIP电话/index.html","88461da3b29f13a10f0e9814a946dfd0"],["/2021/01/04/Android-项目集锦/index.html","b4bc2291f12cb3400ec942b672a08b02"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","93e80e5a941acd7391558300ae611d4a"],["/2021/01/04/C++工程项目-travel/index.html","fd7c475892c911b28eb81cdcb3cfaf8e"],["/2021/01/04/算法设计-分治-最接近点对/index.html","e3f12df41124ecd2842b4640d5dead6b"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","d9d07f14cd1dc460d735a06c27516ac7"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","824c7c4d2107f048862899f4eb385587"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","8b98ba13ae69fc4812b29e2ea2c07225"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","04a78dd7cd84e0f5ca12cc42e655a8f4"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","ee6df4c4fa1fc4f98487b52ff0b0ed4a"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","c736d33d611ab776e9cb60fbc5a8db87"],["/404.html","fa8046913d8ca634a8da830c9c7b2c88"],["/about/index.html","36a034d9c46c1578dfec990dc6bff4ae"],["/archives/2020/02/index.html","49800e072e84178914fd7f5e3b6e360f"],["/archives/2020/03/index.html","3da1aa26d7a66fda27717a12b180ac54"],["/archives/2020/04/index.html","df1a9284edcd1b02ad774ab92fc8e136"],["/archives/2020/05/index.html","ee467ea7ba3175c9842ccb33ffa5cd2f"],["/archives/2020/06/index.html","4467b951776580d9e215974916c09777"],["/archives/2020/07/index.html","53402b341cffec4eab6bebf88aa79934"],["/archives/2020/08/index.html","f04cde3286d2aed17b7588ea081f45e3"],["/archives/2020/09/index.html","38273fd0a7ba62a00fe86049d1a22d8d"],["/archives/2020/10/index.html","a51e779e8a2d8d1e7fd2e29668eef121"],["/archives/2020/index.html","66d446a1b067058c8030911228a80dac"],["/archives/2020/page/2/index.html","c02d6ae62bb6ccce1c873d12b972fef2"],["/archives/2020/page/3/index.html","7c07aa02a9d42f1b4932238ff0dd40de"],["/archives/2020/page/4/index.html","254390654babc32d6d8c188c3965263a"],["/archives/2020/page/5/index.html","f2c19325321d8631c6035aa5efd31234"],["/archives/2021/01/index.html","7c962cebf5dea1420c95766f91dfa5bc"],["/archives/2021/index.html","4c116c85d581737fac2ffc51dd956caf"],["/archives/index.html","010d76f3fad1b3699b26f27a9955f7b7"],["/archives/page/2/index.html","010d76f3fad1b3699b26f27a9955f7b7"],["/archives/page/3/index.html","7a336ed043ba118528f253ae7d055a7a"],["/archives/page/4/index.html","7a336ed043ba118528f253ae7d055a7a"],["/archives/page/5/index.html","7a336ed043ba118528f253ae7d055a7a"],["/archives/page/6/index.html","7a336ed043ba118528f253ae7d055a7a"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/bb/index.html","619e2958c521a0008abc24e0f27fa39f"],["/categories/C-C/index.html","9e854b0c72c2e861ff90504a7c4369a9"],["/categories/C-C/page/2/index.html","ec8c03b851bce92e1ca2cccd062491a3"],["/categories/C-C/拓展学习/index.html","ea28f33e42cb7046da4fd4e0e6a6eb6e"],["/categories/C-C/操作系统/index.html","33f7ab2e2977fc66906c4a4ade137972"],["/categories/C-C/算法设计/index.html","9702e7e0d871f228612c98dcd134cd2f"],["/categories/C-C/编译原理/index.html","1c204ceb09cee0c75cf9afbf621e2cbb"],["/categories/C-C/软件工程/index.html","37827ae0130990f47966d22160971e1e"],["/categories/C-C/项目/index.html","12d2584252bd9c8b0daaae7f4e638701"],["/categories/Java/Android项目/index.html","3b85e585e3a191017d6719ed996ecc15"],["/categories/Java/index.html","48152b688d42a68984d040a1ab883c16"],["/categories/Linux/index.html","423350d90eed71f4c75c24d749b90c1e"],["/categories/Linux/上机实战/index.html","ec98785d2eef3246c45881df5ffe8ebf"],["/categories/Linux/习题/index.html","421359b6b753d188fad235eac7a4872d"],["/categories/Linux/拓展学习/index.html","4aec2632ddbde796205f8f768b525603"],["/categories/Python/index.html","55e95f4fc09dedcc804e42a86cfb70b3"],["/categories/Python/爬虫/index.html","42fd7ad851d2045e22e52865a1c525b7"],["/categories/index.html","0ee79d2a88d02996c37824655f2d7950"],["/categories/交换原理/index.html","7ca2cefc644febe073710356d0d8f8d1"],["/categories/交换原理/实验/index.html","56a493f07fb3d4be6e7a0b63161fe779"],["/categories/其他/index.html","759f01c45a9e84aed92cebfea6f9f3e7"],["/categories/大数据/index.html","2e436b4fb09ccea768734c65f97a67fb"],["/categories/大数据/习题/index.html","717e501396560b724203dadebf3fe558"],["/categories/大数据/实战/index.html","011a7c9d82fcaf35eb13dfc975d6c3e0"],["/categories/机器学习/index.html","5c01fed1b50005bad7145aa26b0795b4"],["/categories/机器学习/实验/index.html","fdd199f44460bc419a49906e2b518c27"],["/categories/机器学习/知识拓展/index.html","7b25cd66e71e4539b7b9a9771d78944b"],["/categories/现代交换原理/index.html","1e7446def4a468bede3ac1ade045a56f"],["/categories/现代交换原理/习题/index.html","68ca1f05bbdaff7be2f829ed50b0bf1c"],["/categories/计算机系统结构/index.html","93bdef5e2b76f68b24770ebbe8a6f5e0"],["/categories/计算机系统结构/实验/index.html","a04cc431b0896da91fe747d4c640a22b"],["/categories/计算机组成原理/index.html","243da60c0635929543abdcadbeb177f3"],["/categories/计算机组成原理/实验/index.html","9171555aca09898ff5c35a5d16793e31"],["/categories/计算机网络/index.html","7c291f53668ab82a4b07d21086894630"],["/categories/计算机网络/实验/index.html","30f952bce2da059917d5d649b47867e5"],["/categories/集锦/Android/index.html","f5d69130eb5f70b849b133b6bb03b6c5"],["/categories/集锦/CSAPP/index.html","cfde1503bf8ebe2c6a6c2c9e5b41a538"],["/categories/集锦/Python/index.html","ba6095028e79feeb9db4bade447c7705"],["/categories/集锦/index.html","1e1fd1ab7330fa814e4a6986a540c37d"],["/css/first.css","ac2d0010102d22ded3aa536d16e52b73"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/message.css","b0ce3ca232f809c8d7a85c79bf1f7ff8"],["/css/style.css","279d77f2d867d56844ab41aef7b6975b"],["/friends/index.html","d3c9114d95aa61461bfab9b67ce7e8b2"],["/gallery/index.html","63f4bc7639ebb10460b077618443184f"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","b158d6cee097bc127805203b6faee265"],["/js/aplayer.js","f10ee7aff4ce278045da925ac6510d29"],["/js/app.js","d14976ee97145aa14568c13c6554dcc4"],["/js/jquery.parallax.min.js","38cf4791e24aeaa8101bd2c816400718"],["/js/message.js","38da736cdf513c9a15a0a2a16a34eeae"],["/js/plugins/contributors.js","23ba3efa08d9fb1aae753ceaa6df2711"],["/js/plugins/friends.js","239cf9c648af390f866ed00cead3e23d"],["/js/plugins/sites.js","15bb31fc27abc888b17cc5d822808604"],["/js/rightMenu.js","19b2a577c30a04732f02b86bda62e0b9"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","e656ef08d7f170000ffc28232f7e6171"],["/page/2/index.html","56d6e4e66ecbfccf121c963f6171a545"],["/page/3/index.html","df8792354807f3682efbe6e1cd527087"],["/page/4/index.html","bc6e23f4d9f2ffc3333e5bd3e8d18444"],["/page/5/index.html","eba042ad1eaad88c4e200e41a443747d"],["/page/6/index.html","c2c48470ce119a0b8572e4f211aeb148"],["/shuoshuo/index.html","0c10620fde7056e95a446c21fe906d7d"],["/sw-register.js","2960d14f040f1eb1bc72b409b798dba6"],["/tags/AI/index.html","84a9d469f61ce2407268a9ba2ea8b3b9"],["/tags/Android/index.html","5fd72f75d393fa6768822433f9a6f33a"],["/tags/C/index.html","e729d3a60d81ce1688919b432d084edf"],["/tags/C/page/2/index.html","d917ce40912268d8139fbc28e268f338"],["/tags/C99/index.html","283fd902279c151a09c9a573095f8f5e"],["/tags/CSAPP/index.html","8a73dde7dc5ee287fbb9560db00c08d0"],["/tags/DNN/index.html","5d8f77ff28be873aa4f783dab632c454"],["/tags/DNS/index.html","6dc872e6b96745b59a56be7ff3ed6731"],["/tags/FPGA/index.html","877bdf057d1c14a72a79ad0edf9c8e20"],["/tags/HDFS/index.html","0caf3e985f6e2fc7f3b8836ca446d1cb"],["/tags/Java/index.html","dab2b277f82ac51534e29c1a98823be0"],["/tags/JobShop/index.html","02456c8ac369e8e7a3789c81dcfb45ea"],["/tags/K-Means/index.html","72f52ab227be929f0aabceb83f228762"],["/tags/Kafka/index.html","b0c1690651a9bf8557e3ad5ba44b7a18"],["/tags/LL1/index.html","8637f44c6664e31b009d6ee9151da38f"],["/tags/LR/index.html","376373c7c51f58726f04f111c48262b2"],["/tags/Linux/index.html","144d8350ad79706708c3f5cf042524f9"],["/tags/MIPS/index.html","1712b9bd9cac3d4f0a1985c913b3ad95"],["/tags/MOOC/index.html","d222220f618b5566bc10764f1a1bd41c"],["/tags/MPLS/index.html","749caa94c961e37448acddcdbde7ac1b"],["/tags/MapReduce/index.html","8bda563c826874af0249ce50bd236194"],["/tags/Matplotlib/index.html","16784d74d4e565469ea5028bd7986c95"],["/tags/MiniSYS/index.html","dfb30efbcc608c0c0a203f20e2f5bd79"],["/tags/Python/index.html","1f1cedd6d0a4635078e096b936197b9d"],["/tags/QT/index.html","4630e345bd3e4724832892b437f4fe61"],["/tags/RNN/index.html","0ef34be9c432520c8dee4b29cd15e8ea"],["/tags/SIP/index.html","7c041df51903f558b3fda846f286d89c"],["/tags/Scala/index.html","d3b728b472f3210855dc4f05e0a0f059"],["/tags/Shell/index.html","a85e5d4d9ed104850bf27b03621e3a76"],["/tags/Spark/index.html","541af860c998cf3135336efdd6be3f47"],["/tags/Streaming/index.html","5be08f86592951ee9a1323bed9a1d15b"],["/tags/Struct/index.html","4f7030159a6b3e40de86d725d8e60506"],["/tags/Verilog/index.html","c5a9a5e9574413275dee56a52420c8a8"],["/tags/first/index.html","4829cc9a7051025623d9509ef91787f5"],["/tags/iPython/index.html","6e1e8cb436d5b9b3d204e79ef582acd9"],["/tags/index.html","f88256d64016876f81c961e57b62a4a1"],["/tags/ls/index.html","67db360720554a5a63d136c04be53ff7"],["/tags/习题/index.html","d4de92bd703eb10903bdbad20050afa1"],["/tags/交换原理/index.html","699435137482a08cbdf7b9de475d2e0c"],["/tags/人工智能/index.html","227b0477c00f308f1629232652702e05"],["/tags/信号量/index.html","f95f2b2ca27c2161ad044908dd2d4500"],["/tags/内存管理/index.html","1c9872398c9c765cb60a2e9e45d27c10"],["/tags/决策树/index.html","651ff3b6849d8f583cb59cb1f1d6a079"],["/tags/分治/index.html","f27d75fcf526a4659123f720a37fd772"],["/tags/分类/index.html","2da8b2d5edb20647b114f007ffac69e4"],["/tags/动态规划/index.html","56756e39cb9808c605a8bd6d743d7606"],["/tags/华为云/index.html","c57f704ef2743e118384e76e1221be7e"],["/tags/单词计数/index.html","464ca42115b72e9d3f5071fee89694a5"],["/tags/可视化/index.html","1a0059b343a830761322bc879fc5d6b3"],["/tags/同步互斥/index.html","a8c8e3317c68d10a0c62e26a56e666d7"],["/tags/大数据/index.html","3e7857abec3ad2d6a59ce12033f8bed4"],["/tags/学堂在线/index.html","a27300b7faebfa2b9df3b9440af578b9"],["/tags/实战/index.html","c414805790bcdb713617eee8010c0c47"],["/tags/实验/index.html","5ee7c08f36a14e03f20c334983cfc15e"],["/tags/实验/page/2/index.html","03529034cc89b088aee7a4cd41bf003f"],["/tags/小游戏/index.html","7235a12636f58117e9bff3bb20ba54e9"],["/tags/工程/index.html","383b8aa8e1353cb7e8c8e0ab80fd4c02"],["/tags/工程/page/2/index.html","b6e18765ada5440705889cb255dc5fac"],["/tags/手写识别/index.html","b1f4c838b950351529e28d13e9658695"],["/tags/拓展/index.html","b9c85c274b4c635bf86075540de07ae3"],["/tags/操作系统/index.html","b258a61c388db7b8758c2465bfecdc11"],["/tags/数据处理/index.html","5b99529398ed65b107526284914ec503"],["/tags/日志分析/index.html","22502836ededeef430c5c4d09eefde8f"],["/tags/易错点/index.html","c076ef35fbabd4e68dfcc367e5e9616a"],["/tags/机器学习/index.html","8aa36cce57149b7f24d9f50fca3e1735"],["/tags/条件熵/index.html","6b73321c00dfed3de37b837f71fb68c1"],["/tags/正则表达式/index.html","f050196864bf712612a3279750bafd1c"],["/tags/汇编/index.html","4993a0b0e8955daca9024f463b027bda"],["/tags/流计算/index.html","dcdabf41d790bc9936ae964987a79fde"],["/tags/爬虫/index.html","436a59fbda3000635a419bd10d956ed0"],["/tags/现代交换原理/index.html","5e09b1dba20f9a6148aa14398ba1b511"],["/tags/生产者消费者/index.html","c3a4e497d2f5574afa91ababe5252d2e"],["/tags/知识/index.html","bb5b995211fc8e6725e8a03199b8ee6c"],["/tags/算法设计/index.html","df2361ec60ec7e16adc588aed57cf8bd"],["/tags/线程/index.html","80545ae77c7d15e721d938d118759980"],["/tags/编译原理/index.html","07f0afe39657b7516748eea91c955cbf"],["/tags/网课/index.html","06304fdcca423fb012c7bb6a863913a1"],["/tags/聚类/index.html","4b819f873cd672e80f3a988d3589994e"],["/tags/脚本/index.html","32d564980ccea4d659d4b602d5767b63"],["/tags/计算机系统结构/index.html","f988446c79275a4ca8e337952461436d"],["/tags/计算机组成原理/index.html","7fed199d92b8ad810fc0f69a8660f565"],["/tags/计算机网络/index.html","ed83b1add931cc093dc6d647141fb74b"],["/tags/词法分析/index.html","4b3b1d58a5a767cb4854ddd67c5b869b"],["/tags/语法分析/index.html","b91ea418abd07b4150d214fc5cdf6239"],["/tags/读者写者/index.html","a33bee80221e66e25ef2105a7364a031"],["/tags/课程/index.html","ca81d124722d585c038efdd36dce0965"],["/tags/起名字/index.html","28aa36a11f65f8618db1931d87f7187d"],["/tags/软件工程/index.html","35bf29e8fa9e4dc292e7a3038311f0d8"],["/tags/进程/index.html","eb5f415c4e59b1794730e47831650bc9"],["/tags/通信/index.html","eaf6e287312dd7b4a763a3561d5b3078"],["/tags/遍历目录/index.html","c4f45727e6f91decdebb0019a5638612"],["/tags/难点/index.html","7d85c1cb264bbf8d94185c178f39dbc3"],["/tags/项目/index.html","e2a1dfea78b3f11074e6fcce3f7e4088"]];
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
