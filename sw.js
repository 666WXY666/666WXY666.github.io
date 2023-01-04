/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","7f3b15c1c4007c9a80f87b84c7f48777"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","a18669409541cc0799d20a42e8fc4a6c"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","974872e675128cea683b48771d873e51"],["/2020/03/26/计算机系统结构-实验1&2/index.html","a3a2f607a98e4784fb2de3b94e6b50c1"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","e08872adc30d97d7106c79dc4b02b97f"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","ed2ec1d26a0ba52b8105bd699ea6c8b9"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","9d35931bd3721a1aef015bb563c5e639"],["/2020/04/18/机器学习-条件熵/index.html","f15afca05da1d2d222cae153864a1e78"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","65ac3be8daa2b7b69313420ab0740932"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","3c08efa42b19a3cbb6939fad5cccd648"],["/2020/04/26/机器学习-实验-决策树/index.html","d7a0f3e7f8b66dac5ddddf5c4e0e7f6e"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","2c422b01a92489d558c833e7be75d219"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","9a053afe2996d6c07cbc05517e73031f"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","277e40330e32cca1395b93122944d5b3"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","fb9a625f25a8c11bbf882eca573a3ff7"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","5dbee0f8ff907639a805928d3c82bd16"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","e32ccfbe8772f47e5428a21298b69e53"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","daf91dff600516cc009a67a1359f87f3"],["/2020/06/11/机器学习-DNN-手写识别/index.html","d879e3cd6b788cdb5b16570296ea81fe"],["/2020/06/18/大数据-习题/index.html","17617154e3212d9e10aac47ee9806c3c"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","5a9c3ba645d24479eb85c8ecb7f1ff35"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","96903bb1f367e76c33ba51f0ead250bc"],["/2020/06/24/Linux-拓展学习/index.html","09322e125b96fa19d6f169d5fb56556a"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","5e2301598dc4f98dbc8e2851fb0ecbb7"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","fdc40c2060541a206a165b956e3e5d31"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","8f0d4a5d32c0b8b29bf1dde73500bc04"],["/2020/07/15/C和C++的struct使用总结/index.html","72115c7b66d2202b80e9c9768646a714"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","a7810033801c0244cfb56fad2850bb9e"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","350c061da4a58fc17bf9c1e72ae879da"],["/2020/08/10/机器学习-实验-花卉识别/index.html","7fbbced5ba15abcb421b53fe5c2f8343"],["/2020/08/15/Python-项目集锦/index.html","9c7871e32ff002536d100576ecd5bf81"],["/2020/09/01/编译原理-词法分析/index.html","6fd1cecc1d61bb81b30d933c9dbd3145"],["/2020/09/02/编译原理-语法分析-LL1/index.html","610cf423e66dbea124cf9787663eeef1"],["/2020/09/02/编译原理-语法分析-LR/index.html","ead3524624f7b5ae3d4b051fd533a849"],["/2020/09/03/操作系统-内存管理/index.html","1f105a84c5491351733a28734fa496db"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","682a568bd1f07ffa255c8d412dd7acef"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","22444712b265eb7150f2bf845efa25e1"],["/2020/09/04/CSAPP-实验集锦/index.html","4eba4f7293d6887d7f9d18859d0fb999"],["/2020/09/10/计算机网络-实验集锦/index.html","962443eb52ab449f89350c77dd52265e"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","d669e736f3c0613f870848744f4e76bc"],["/2020/09/30/C++工程项目-JobShop/index.html","ed53d2ac466bfe1b39677e6c48dea455"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","bde2651cf454cb6958bd89df3138d09f"],["/2020/10/09/现代交换原理-实验1-时间表调度实验/index.html","6d1163b54f960f534a14d97b5a250f27"],["/2020/10/09/现代交换原理-实验2-摘挂机检测实验/index.html","763dee6144eedc689dabca4e79c2bdf6"],["/2020/10/09/现代交换原理-实验4-拨打SIP电话/index.html","3586fc481986848d209e2512df8ae813"],["/2021/01/04/Android-项目集锦/index.html","0babb9015922e416816512530332ce12"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","4d4e5fa6228293f39c0dd7b4efa42a45"],["/2021/01/04/C++工程项目-travel/index.html","e623e13d819a444890ce07d6daf0d9e4"],["/2021/01/04/算法设计-分治-最接近点对/index.html","e688940e2a326fed5d675755c2400c44"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","504c8749ca54ecae367aaa11cd812599"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","3a8fde87a6f9bf870759e1bff2ada33b"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","4d1e055f74c9e09ef008ffe83d994897"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","87c88b0463c75d1113a83510c1ea00cc"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","48f982615ace46bc50c37e97b4d9ad57"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","9d403bd7b939003f4a4a6fed21bb4b19"],["/404.html","2394b59b860bfc1b2a641e2bc2300ffb"],["/about/index.html","cb96c6b70d29fa64534203c2ce9c092c"],["/archives/2020/02/index.html","5c7c18687280deba2e614a1096a93e1d"],["/archives/2020/03/index.html","48b43a2bb8acf57f5e64398f3b2dff54"],["/archives/2020/04/index.html","9d9d47cb127e3d4b93ec40456a41c943"],["/archives/2020/05/index.html","4c74cbfa34c113383bd0ad8e79cafbdc"],["/archives/2020/06/index.html","b66f871a54cc384f7cc7a695a67b9c51"],["/archives/2020/07/index.html","2a03b561c1ca9107ca04eaf2db2d456f"],["/archives/2020/08/index.html","64ad9c7410174a9b4fb831a2d4b693a5"],["/archives/2020/09/index.html","2ae91647f1b3f8aa4107aebda30d62c7"],["/archives/2020/10/index.html","937acbbdd26c0a0a9bafc1219636d147"],["/archives/2020/index.html","62112a2c747ccf73cdff7838aa58b0c1"],["/archives/2020/page/2/index.html","b2275dca114e98646cda5469b2da571f"],["/archives/2020/page/3/index.html","3620ecb8da33fb4f8b8d5cbd38d28307"],["/archives/2020/page/4/index.html","87a5635ecce36b1a3b6f441ec937c0e2"],["/archives/2020/page/5/index.html","968ea0bc4565bd9bfb510fe9fc27b726"],["/archives/2021/01/index.html","904f9eacf9b00fe496a895c413392a21"],["/archives/2021/index.html","9f4a9eb49fc50d5b6ccc32a51d2c7996"],["/archives/index.html","6bdd037aa5e8565a2ee431f968687890"],["/archives/page/2/index.html","6bdd037aa5e8565a2ee431f968687890"],["/archives/page/3/index.html","6bdd037aa5e8565a2ee431f968687890"],["/archives/page/4/index.html","6bdd037aa5e8565a2ee431f968687890"],["/archives/page/5/index.html","6bdd037aa5e8565a2ee431f968687890"],["/archives/page/6/index.html","6bdd037aa5e8565a2ee431f968687890"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/bb/index.html","af4876f0fe3ba45fc6566fcc339c2e49"],["/categories/C-C/index.html","2370e4e22bb5e834743e25a0ca8c72a4"],["/categories/C-C/page/2/index.html","5958c154e6414601fdee7e0972c5684a"],["/categories/C-C/拓展学习/index.html","6980c79b4b42aa0e5ed8807c61725bb1"],["/categories/C-C/操作系统/index.html","ff9872a68e272854ea46cd2b0da86257"],["/categories/C-C/算法设计/index.html","d247f5297f4f835dc393c086f08e3315"],["/categories/C-C/编译原理/index.html","6853f96cb485bebb6a83c06733489635"],["/categories/C-C/软件工程/index.html","7cc4bcd1aee02546ba9537cfc0b9bb34"],["/categories/C-C/项目/index.html","9ae2596a4d41b0cc861ea168ef12e515"],["/categories/Java/Android项目/index.html","e3ab435312eaf37421040820321f61bd"],["/categories/Java/index.html","285bee7297c049cb7ba926c9d8fd7bfa"],["/categories/Linux/index.html","baaa22b9197c09455ee4f8bcf164327e"],["/categories/Linux/上机实战/index.html","a672e3636d2b914f3f5e96944df137a5"],["/categories/Linux/习题/index.html","ddbf951cd0ff8a27767297780cf2cf43"],["/categories/Linux/拓展学习/index.html","637a19236d0247b08abf490deb01b038"],["/categories/Python/index.html","7999b26b25b8e8ef17af521d8ecb6fc6"],["/categories/Python/爬虫/index.html","fe6bbdc35263fb46bc52990870bbfdcf"],["/categories/index.html","221076c5f6edc3efccc216d9b116b22e"],["/categories/其他/index.html","c9c8a3d1f59c61ee522e84517df7bb37"],["/categories/大数据/index.html","e4217bf6adfe532d3262a8fdea2b3463"],["/categories/大数据/习题/index.html","b42891bbcea05411620171198e2d138e"],["/categories/大数据/实战/index.html","6ab7345ea645dcb84c6ab5b25ef47c91"],["/categories/机器学习/index.html","2e9da166a3e1cd0c9926264cb8cb8c63"],["/categories/机器学习/实验/index.html","3afbb746c319aa08d2aea89dd76ad722"],["/categories/现代交换原理/index.html","981444bddae6bb1b803d84dc7f6e9af2"],["/categories/现代交换原理/习题/index.html","9192a7c6aad97825bf3d59eaccc3588c"],["/categories/现代交换原理/实验/index.html","5cb292a2a58eae014ae591ae81178570"],["/categories/计算机系统结构/index.html","338fc7e8e552f6c2f7bcc010c5053ac9"],["/categories/计算机系统结构/实验/index.html","6a8f1f48d3f6b21cdd0d97fbca7f9ce3"],["/categories/计算机组成原理/index.html","5014e49a17640d48c457561429c0957f"],["/categories/计算机组成原理/实验/index.html","e235a2e22ef37638776964ec78a05276"],["/categories/计算机网络/index.html","c46eee246f3056b0443a682ea7d45ba6"],["/categories/计算机网络/实验/index.html","d6ac70b3a5f93cc43812d36d9e62f5e7"],["/categories/集锦/Android/index.html","4401be447fdfaab40a0fba366418afcb"],["/categories/集锦/CSAPP/index.html","c81ba993664cfa4be4f2026083e381c5"],["/categories/集锦/Python/index.html","27f49643a2c2897944da6ef837fb5725"],["/categories/集锦/index.html","5d8fc6a2e35508c3396c89b5b4002c38"],["/color/index.html","3f627143356419f7f54e1443b3536f0d"],["/css/first.css","ea01aa1635810499a5ade558f4f81d56"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/style.css","4b6ce514c846132c606ce76da7e1c124"],["/friends/index.html","d2ccee0d97c4d209b40171d2fdae5a75"],["/gallery/index.html","cac0a9f9094373909cca2398b08a7aa4"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/periodic-table/index.html","4c31220b3c8c1d35b1128df43b2c9dc3"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","493d2e5e445c5c1f9dcb98bdca5438b8"],["/js/aplayer.js","6e605f0855251e101d3024646f3eac60"],["/js/app.js","1948329f2fd7e750ade4bdc49138c09b"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","e6cce1036abc95f3abcb45cce129a4e0"],["/page/2/index.html","7c6bd4f57db612cafa14247744686098"],["/page/3/index.html","d41a56616446fb2aef7ec9cc34aed047"],["/page/4/index.html","eba95220f9e9a1021c685f2662601a97"],["/page/5/index.html","2d01cc39bf430e5149a77113d698fad9"],["/page/6/index.html","c412e4edf818d1f7cc02fc5b31e327cf"],["/shuoshuo/index.html","bbc3deeeb1004e869dfbbacbe3a0dcca"],["/sw-register.js","74230b20bce876eea3f169a94b78547d"],["/tags/Android/index.html","a0afdb22304587afd70155eb4342acbf"],["/tags/C/index.html","8267242dd669e16c3330e5513a69c0fd"],["/tags/C/page/2/index.html","968d05e4012c4f1fbb5e0698e3b2371e"],["/tags/CSAPP/index.html","2dd7e2328e1294ad838b5d0154063a76"],["/tags/DNN/index.html","1251fce290b0fefa2a1858ecb257dc01"],["/tags/DNS/index.html","d7735c7cd47593a6e4f750c907d0cb8d"],["/tags/FPGA/index.html","d885ec6f5cf826cb8cdc785b400f46ff"],["/tags/HDFS/index.html","6f742a2330993f160662169f286b3717"],["/tags/Java/index.html","5dfb3543d6019b455021737616b7e1f3"],["/tags/JobShop/index.html","1cdc50e50f742bd378b2bb0fc5aacfeb"],["/tags/K-Means/index.html","87eedd184c473ab96c3ec4500d6fb78a"],["/tags/Kafka/index.html","821f2d01df252a52ad7de2f4f10bce41"],["/tags/Linux/index.html","9c67ec426223ee388cf13423dd226da7"],["/tags/MIPS/index.html","76ff9b16e4461e00b3143a6f5f2fa9f1"],["/tags/MOOC/index.html","695c97f9c828946ef0fe1f67cb94beea"],["/tags/MPLS/index.html","3102742fee5b79d1e27fab3e33c649d1"],["/tags/MapReduce/index.html","b1491ece9c600b044e7ba196ae9f229b"],["/tags/Matplotlib/index.html","37be4abfb57cccf06f03d16efcbc8321"],["/tags/MiniSYS/index.html","8077e247e6c8faa20b1330ffc8ee3af5"],["/tags/Python/index.html","5038202bc719a6aabe006a18ad7369f3"],["/tags/QT/index.html","14f29ab9c535282d57ec9c87fe9d5531"],["/tags/RNN/index.html","8b3cffcbaffa3adaf862864635350068"],["/tags/SIP/index.html","3a3dd3e31c26ab942af929b41997a60b"],["/tags/Scala/index.html","c9264cef9322ced9e999ed05b80d03ea"],["/tags/Shell/index.html","e7e8d3b2fe807ca4ca787ac7a7f4adb2"],["/tags/Spark/index.html","b51fe619504af3483130969af209e193"],["/tags/Streaming/index.html","24cf4489ee7797da7d805548742c8b18"],["/tags/Verilog/index.html","9c034a97acd074012e766f746208e6ed"],["/tags/first/index.html","e08ab150d4511c53311a60908bbfadf4"],["/tags/index.html","0cdcae6751b630f4bc1dddbf67f4ac85"],["/tags/习题/index.html","cbc988a0cb1fc1f4ce38c76e19185848"],["/tags/决策树/index.html","921e67eb4959756db1eb7cc5cf4e4ab1"],["/tags/分治/index.html","cde94b5bf65a8fe3b690109faef0ece0"],["/tags/分类/index.html","306ad76388412fd1524480057ba1d44e"],["/tags/动态规划/index.html","3386b95a6eb4bb05bb64c0a8deb905cd"],["/tags/华为云/index.html","2f221d3291fc2f42b3863dfe8011b02c"],["/tags/同步互斥/index.html","54f8bce2965d22c42148c851ef492caf"],["/tags/大数据/index.html","048d0c1ad73f1570bcb333d023e2e300"],["/tags/实验/index.html","b8632ee118c093676202134ea7901c28"],["/tags/小游戏/index.html","4caab5c4739283b346ca513da5745000"],["/tags/操作系统/index.html","c2c103cfda2c5d24f57538e5746bb5ce"],["/tags/日志/index.html","8061d6ed8241985b8ec3f2a7cbfd0a4a"],["/tags/易错点/index.html","30d99a8d8f4da533afcef3c49fa60dfb"],["/tags/机器学习/index.html","25573e8980254b6b176b9c65046f3f9a"],["/tags/正则表达式/index.html","d8e8e60d5789746dbad52a06963362ae"],["/tags/汇编/index.html","fc9c5c6e6b3d335a2076eeb60a69dd02"],["/tags/流计算/index.html","5d82afc53e89a28e74293e13a655c9cb"],["/tags/爬虫/index.html","c0ef760f8f74c7a9a98ae51e0052853a"],["/tags/现代交换原理/index.html","c27ed905e5d38ce4cf22114c21113d45"],["/tags/生产者消费者/index.html","7828433de485f5dd4cc3ebedad6da9c7"],["/tags/算法设计/index.html","b69ef4be2d046b6154a305cb6b482084"],["/tags/线程/index.html","82b0b7edc46365b8b1f9f852c7bafc3f"],["/tags/编译原理/index.html","12824b744d70c28715c1ad34666df526"],["/tags/网课/index.html","a502087ad86aa4415e9ffdc14d91b075"],["/tags/聚类/index.html","a9d3ab3725922efa235b34def0f2515d"],["/tags/计算机系统结构/index.html","cb4eacad12efaf34ec7019f1f744e017"],["/tags/计算机组成原理/index.html","875893278a19a078c983559aa97175f8"],["/tags/计算机网络/index.html","e6aced4611e20dc58dc000857d366718"],["/tags/词法分析/index.html","7aef88b181f47da5c9b1fb0015777c31"],["/tags/语法分析/index.html","92e3e4132f61de20a1bd63096dd9903c"],["/tags/读者写者/index.html","f2924e6064a4d1bdfd44c6a5f2a6c07c"],["/tags/软件工程/index.html","d8ba7b09992b123315969768b36f8232"],["/tags/进程/index.html","3d9ebdd77a1f7e77ca2455016a016df2"],["/tags/难点/index.html","8947248a475187100085fd7be857103e"],["/tags/集锦/index.html","488928b805c543017a6d932a5fcc6af0"]];
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
