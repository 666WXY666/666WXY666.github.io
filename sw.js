/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","4395f302f341c9de9ecf459ce29a308f"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","1718b9fbb81ae0a2aa0354f570e801ba"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","3130880ab1723af20909e55f7ed53e02"],["/2020/03/26/计算机系统结构-实验1&2/index.html","7a41945a94e01d282d5bf5f51587436a"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","813571382cda89861da1c9515b119131"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","8f42730db94e76b978c9e16dbd685735"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","e6ee12833fd635dd8d79fc7207d407b8"],["/2020/04/18/机器学习-条件熵/index.html","d6d6e5e7a1a5fc7f15cca85f63baff50"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","25ac8492d439ac12556634874bb3d932"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","3c888557934dfa9e7ad919e4af85adea"],["/2020/04/26/机器学习-实验-决策树/index.html","41fd781152636e8b5739a8a0df8b390e"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","5b9833155d851d7824ba847a6add88af"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","8e481983931fd1c6e7ef3355ee33918b"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","42ac41e818a47e16864492ed9a5e981e"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","ce0015eaf148ecf644024f150ea58144"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","00361e30fa8c2003d921d783a7368e93"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","b13968df081ba49279e29f762f9b5626"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","a0e981b54106aad0029425394b61b2de"],["/2020/06/11/机器学习-DNN-手写识别/index.html","dc64a81ad18c4e710020d37dd4217c87"],["/2020/06/18/大数据-习题/index.html","867d495c12a3848d461e3bb79761c75d"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","b084b8e22a69833fcd45c132e6479785"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","06c1e0f159c40647b1d70b55bbd0bd70"],["/2020/06/24/Linux-拓展学习/index.html","e06fde52522e5ff28e2b2983ad4d89f0"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","7b90bb19b93f7d17323e65f6ca404108"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","f4152fbeaca141014ef329476ffdc287"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","c4140c3c3a0d6857381e8661f910a0a0"],["/2020/07/15/C和C++的struct使用总结/index.html","b110028d4cd117fb22b6ebabf25c917d"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","68666d89c8ab632e25eed2670f8cbb81"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","a42856ce18fd41daffcd12b2eb568946"],["/2020/08/10/机器学习-实验-花卉识别/index.html","7e8ccf9aac0a081cce762be9ee08210f"],["/2020/08/15/Python-项目集锦/index.html","fd61ccb4b75da59914b6e0a9317939a5"],["/2020/09/01/编译原理-词法分析/index.html","c489e46552650b84806149df9ee2caa7"],["/2020/09/02/编译原理-语法分析-LL1/index.html","dca3797807eea9912a20382c0b96b6a9"],["/2020/09/02/编译原理-语法分析-LR/index.html","338fb334d076d3f7066810e6c436d3ea"],["/2020/09/03/操作系统-内存管理/index.html","68552688491e3207be0eeef799d4b4b6"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","b606ebf79a99154972bc641301a5fd66"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","3b38a51dc7b82d339dc8570aff8629c6"],["/2020/09/04/CSAPP-实验集锦/index.html","2951a55f8df45ee939234e788a915d34"],["/2020/09/10/计算机网络-实验集锦/index.html","294b5cbbcdaeb1bc5cd54c5a9c642564"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","4e82c6b4dc8cd4558a309b96ab7fef4e"],["/2020/09/30/C++工程项目-JobShop/index.html","529bd6a93f1534eb28bd25a9baaadecb"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","6a1bec5bf94e927fdf0192ef56f554c9"],["/2020/10/09/现代交换原理-实验1-时间表调度实验/index.html","f24f9acd927d80b9d9521394a04c549b"],["/2020/10/09/现代交换原理-实验2-摘挂机检测实验/index.html","1fbf50a926419b6d45a7455bf5d84a3a"],["/2020/10/09/现代交换原理-实验4-拨打SIP电话/index.html","c9aef0454552aadb65e2151599bf7ef1"],["/2021/01/04/Android-项目集锦/index.html","f1fb2f90162952af513def2f726f8b15"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","912dda031645f8db1ef9abe9ed12fd39"],["/2021/01/04/C++工程项目-travel/index.html","92f8feda0e1b0ef1f3c9ea354d2a1ec0"],["/2021/01/04/算法设计-分治-最接近点对/index.html","19c791016462456fe28be537a9bc0a7f"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","8e400dfad7c2a786bdfe2e3ef595bc7b"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","69ed1be4c815638b6eb2825acf14f23f"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","f2b2ed39303d802784f3b8a0865c4566"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","8b981231007e97fd331b5af97f94ec9c"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","d1249aeec2c99ab5c6ea620ed3d439b4"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","7936e8a5d99578b85f8f1d70a672a35b"],["/404.html","2394b59b860bfc1b2a641e2bc2300ffb"],["/about/index.html","37268e5da3838567ee862909f76d7227"],["/archives/2020/02/index.html","37c08b329b7441979f0d4c7c499641ab"],["/archives/2020/03/index.html","d14f69b1576235630f447fd829505831"],["/archives/2020/04/index.html","3cf9c4fec7df4828ae5190609e21d459"],["/archives/2020/05/index.html","b1e2979aba6bb5d7193915ad5024cdee"],["/archives/2020/06/index.html","ea6006aa049583127228b793403004d3"],["/archives/2020/07/index.html","9d4b313f1f4ca7f2113a14ad7ec70559"],["/archives/2020/08/index.html","158cf265d4aef1b4bc3a6994642fa342"],["/archives/2020/09/index.html","8247ccbf32ddb6db589e9978c1eafb10"],["/archives/2020/10/index.html","93b11b5fa1e1165a726915e82e063b72"],["/archives/2020/index.html","73d823354b0e0600afbdd59ebd439a5d"],["/archives/2020/page/2/index.html","5134e2e3dd6f654852cc3c1411ecf919"],["/archives/2020/page/3/index.html","bb9f4a8bb31646b9e313db9743555ea1"],["/archives/2020/page/4/index.html","7fd62b8ac4aa6b6865516c2a0e3bd233"],["/archives/2020/page/5/index.html","1d82694fe51fecdba7406b6ff8aa2617"],["/archives/2021/01/index.html","0cae19a0d62c00c8111b814e1659470b"],["/archives/2021/index.html","b27866f7cc6c67f1a4a0543d73024396"],["/archives/index.html","17f102a89aa3ca6f9974f6a49020acb2"],["/archives/page/2/index.html","17f102a89aa3ca6f9974f6a49020acb2"],["/archives/page/3/index.html","9296e5d9151dddc2403c6fa18ddf6f26"],["/archives/page/4/index.html","9296e5d9151dddc2403c6fa18ddf6f26"],["/archives/page/5/index.html","9296e5d9151dddc2403c6fa18ddf6f26"],["/archives/page/6/index.html","9296e5d9151dddc2403c6fa18ddf6f26"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/bb/index.html","7f66678a0780cf2858f94472bcec1d5a"],["/categories/C-C/index.html","dbd478e7fa2d405199a96ce24618d3a4"],["/categories/C-C/page/2/index.html","b71587116c047d397dc78f4c9bd6f2b5"],["/categories/C-C/拓展学习/index.html","59ec5252bd220ff5fc9ca8e7e0d74e0c"],["/categories/C-C/操作系统/index.html","eb630c27cc84a5bc6ad7f2f878943eb1"],["/categories/C-C/算法设计/index.html","14e5513b10f4fe34f5c0f868f559b36b"],["/categories/C-C/编译原理/index.html","bfeaff320561b864fb5e375ce3ae8690"],["/categories/C-C/软件工程/index.html","b7a889f52ee3b8a7d9663a05e48604a3"],["/categories/C-C/项目/index.html","46dfaa59d1f032ccc9ad0728bbc250c9"],["/categories/Java/Android项目/index.html","4637fbecacb4cc4bdf9888355af2d816"],["/categories/Java/index.html","b521b10f56aaf460ea6a055677f5e155"],["/categories/Linux/index.html","becead43c3a9f50676177c3ed23f5589"],["/categories/Linux/上机实战/index.html","6e4825afc569a2272e00ee4c45b56c56"],["/categories/Linux/习题/index.html","f5d4fcac272f8f4be08fb9943b6089e9"],["/categories/Linux/拓展学习/index.html","b0ae00c9495e560f962f38e153f81d7e"],["/categories/Python/index.html","4315628cb658f0a61520fe1350e87641"],["/categories/Python/爬虫/index.html","a91b5e84ffb3b4b635fb67475ff9a87b"],["/categories/index.html","8a34a76898c642ff2ff0ef1863bed113"],["/categories/其他/index.html","3da3f20a1a5015178a87c356d44c540e"],["/categories/大数据/index.html","7a3a86f6f823f442f9a2808fc9d558ba"],["/categories/大数据/习题/index.html","50096c086dd717c740f882213429cc8d"],["/categories/大数据/实战/index.html","7af7db51d4a8d49d6c59f84c5420273a"],["/categories/机器学习/index.html","f0059610d7c8576fbc9ad0ff2bc3de94"],["/categories/机器学习/实验/index.html","b3cbc0c47c482c420c165fb5a0c21662"],["/categories/现代交换原理/index.html","55a8c5ddc4f9cd89d15561f473eb9c7c"],["/categories/现代交换原理/习题/index.html","24525c6523fb408b55246c10da8024e3"],["/categories/现代交换原理/实验/index.html","cbdec8696acb39037e25ed5742d4c9a6"],["/categories/计算机系统结构/index.html","9dac5c338eb44f12c40d418de8bc22a2"],["/categories/计算机系统结构/实验/index.html","1e551a0c16836a6678796b5e1ebddce5"],["/categories/计算机组成原理/index.html","179a20c416ed2f008efa7a0a3abb1891"],["/categories/计算机组成原理/实验/index.html","7a93c89fa83042b63ae182ee1f8d4f61"],["/categories/计算机网络/index.html","2db7f012edb60beefcd4a17d86df37b4"],["/categories/计算机网络/实验/index.html","103eceacc395ed6373f75f4cf6871fde"],["/categories/集锦/Android/index.html","97286b4fa56ae1bd910f47351d1f2900"],["/categories/集锦/CSAPP/index.html","48e5a1a085f558d999f416cba8ae4004"],["/categories/集锦/Python/index.html","c59495d1b6e5a39c7cfc99954b631a8f"],["/categories/集锦/index.html","2d9da48a9404c77c201799895e2e6766"],["/color/index.html","3f627143356419f7f54e1443b3536f0d"],["/css/first.css","ea01aa1635810499a5ade558f4f81d56"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/style.css","4b6ce514c846132c606ce76da7e1c124"],["/friends/index.html","2be5c5712271f9e2508e1c07ab65d5e8"],["/gallery/index.html","cac0a9f9094373909cca2398b08a7aa4"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/periodic-table/index.html","4c31220b3c8c1d35b1128df43b2c9dc3"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","22e9e3d3a73519b164feb46b0bf5fac0"],["/js/aplayer.js","6e605f0855251e101d3024646f3eac60"],["/js/app.js","1948329f2fd7e750ade4bdc49138c09b"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","05d11290fc4e08af6eb9028b9da84229"],["/page/2/index.html","3c1d3885c65d025ad851205b3f323bc7"],["/page/3/index.html","0d514b9d8bf67c125b524175579fa986"],["/page/4/index.html","9dd32c6292e3bf06dc4f3259b1288ca5"],["/page/5/index.html","1611c94cb231ed60af5d8d133d71a115"],["/page/6/index.html","8c58babd42a1f12b179ffa1ccdd773a6"],["/shuoshuo/index.html","7c1252d1dd173ecd8c91683b57d7c131"],["/sw-register.js","eae819de950ae6df548f6c26a731f0bc"],["/tags/Android/index.html","7c26440022df37e718c11c5f5a281738"],["/tags/C/index.html","f041015a0a41363d7899d8571d5f6179"],["/tags/C/page/2/index.html","1fbcbd323b247149d6f818eb94627386"],["/tags/CSAPP/index.html","3eadab2b8888422f3ec5310487e557cb"],["/tags/DNN/index.html","910c2c172bb11ace02ba7987a622b9cc"],["/tags/DNS/index.html","c6438f986093e66716839e6130dba1ff"],["/tags/FPGA/index.html","e7f189d72b1157d0272406d0ee0dfcb0"],["/tags/HDFS/index.html","c567797f6495c9e6f8000f42f0b3ad3a"],["/tags/Java/index.html","4fd6bba585dbce872922941c1b69ea34"],["/tags/JobShop/index.html","1ed2d6189a0a314e7a5d49c8f3cce578"],["/tags/K-Means/index.html","c9c687cfe8ba66b98a2181a1c23d221d"],["/tags/Kafka/index.html","8666ab82513e6224a97c39aaaf1da468"],["/tags/Linux/index.html","16963d48cd8ef3092096034a91390f8b"],["/tags/MIPS/index.html","5a4a7106e6c4021cda1a04c12653403e"],["/tags/MOOC/index.html","8d72210efe4c4f4963e51be826214ef6"],["/tags/MPLS/index.html","731b896d9221437147b478917250e3aa"],["/tags/MapReduce/index.html","78ebc5d4e624a1a60868523b9b7f9492"],["/tags/Matplotlib/index.html","3bc9d16799b4e01ab5a95f0ff1656b5f"],["/tags/MiniSYS/index.html","372dbb755f59c5bfde7b4f8d471ee6f3"],["/tags/Python/index.html","cf3ec50fe21e031c36a5d3502746c29e"],["/tags/QT/index.html","1fedf93c2df1ab94decf6861c3fcd864"],["/tags/RNN/index.html","38b90189d345613d474ceecddbdc23ad"],["/tags/SIP/index.html","b16361d210006f3ffb5b9ce656b74031"],["/tags/Scala/index.html","78d631a5c4da22e74cc30e0acd4682ae"],["/tags/Shell/index.html","44862e63265ad0ae7d8df46e3cac5a7a"],["/tags/Spark/index.html","96142cca4ff3e9802546737a4c286c81"],["/tags/Streaming/index.html","f295dec3a52862978ef52479983e065c"],["/tags/Verilog/index.html","2ba9f573eb6c80fae72e18a15d7969eb"],["/tags/first/index.html","f6afac55699ea8c2365c653cffbd6689"],["/tags/index.html","afd40f84e1deaa2bc00c0b3bde3df12f"],["/tags/习题/index.html","8042c3a4532ab27a08c53725782a9f9b"],["/tags/决策树/index.html","d7212090ea1e5c98ae19a980def2fad4"],["/tags/分治/index.html","0dc98fe872ead88bf9deca45518b3c2d"],["/tags/分类/index.html","02a73e64c08444e1c7334fa54c24f518"],["/tags/动态规划/index.html","b9bd8a31143134f62f5137c19393f449"],["/tags/华为云/index.html","2857ca96198ec48c83db26c6f0c72676"],["/tags/同步互斥/index.html","4b24736dd81b360cd440ee856f4f0436"],["/tags/大数据/index.html","a9837941488119109d52ec58b4c75f54"],["/tags/实验/index.html","f263cfd499b87ef73ba4b777817be66f"],["/tags/小游戏/index.html","636acecec8ed9f18d9838c7bc8b2035c"],["/tags/操作系统/index.html","44fd6c012e3333ecc8396d3cdcc7829f"],["/tags/日志/index.html","72191f044bbbdcc6b6484353b3b6bc1b"],["/tags/易错点/index.html","9646f0cfb8b75a94d271fec7b834fc1c"],["/tags/机器学习/index.html","0f4e6d45a78780858e36e9c1a6baf0a0"],["/tags/正则表达式/index.html","d02b0a99041e53da4d3eb541486388d3"],["/tags/汇编/index.html","9d66aa47d8a295627d0b0e28dd8e743e"],["/tags/流计算/index.html","c1ba60ff50a20fbbf7313aea1635a3ca"],["/tags/爬虫/index.html","d78b60a6279bfa5c1d19567718ef6616"],["/tags/现代交换原理/index.html","40e11b65e780a087db8b1ddbddb48d48"],["/tags/生产者消费者/index.html","e6e8228dc66607f4af187b9deec242d1"],["/tags/算法设计/index.html","e9fb5183f187d82baf08f78243bf83e9"],["/tags/线程/index.html","b816cdc89a315c6677d11625e17bf2bb"],["/tags/编译原理/index.html","5c7869499dfecddae1af6211b54966a8"],["/tags/网课/index.html","f5827c5f1ee65c4730724f8c6020d519"],["/tags/聚类/index.html","eb6490983975182c76ae67b3a96985b9"],["/tags/计算机系统结构/index.html","16c9a7bc5bbc693fbfaa76e9c3829aba"],["/tags/计算机组成原理/index.html","669ace7039403b61430fe03ffc948bb8"],["/tags/计算机网络/index.html","ef2fb840189db0cf03bd10c785d572c7"],["/tags/词法分析/index.html","42a2cb36fe3d5639baf8d9a25a4b5d04"],["/tags/语法分析/index.html","f7cf71fe19607456781ba40ee2bd1c10"],["/tags/读者写者/index.html","4d4e53561f8fb20df191fe87dc24db06"],["/tags/软件工程/index.html","d75b5b4da20afdf2544d6675a648595d"],["/tags/进程/index.html","9c1e404a4a7901336cb36ab287f3fc90"],["/tags/难点/index.html","f284281b4e1bf20d034c8c31ecec3e2b"],["/tags/集锦/index.html","590bfb03fdbb19afc679b73b13853dac"]];
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
