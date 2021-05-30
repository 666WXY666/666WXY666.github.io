/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","35b7eb152e672580e2d0fccc1b4ced29"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","62ec219155798a67ce7ae2385e6c1689"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","b5c04d9e5b7ef7a5433dba196962f60e"],["/2020/03/26/计算机系统结构-实验1&2/index.html","c0dc1a4f2b3f49dc9dd2e0ee42f6bdf9"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","655d2b2e6dd3efee6632d9fbe20313ad"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","5528528f93780b35f41292fa3af4573c"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","6aec6e86e072305bc471a9b2a44234c6"],["/2020/04/18/机器学习-条件熵/index.html","80eb3a96186f90fff5a9484e42f2d3ae"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","d01a0384ffdcc60c36b59052233df14d"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","972fe7dfcd2adadd4c6fe7b93b8153a6"],["/2020/04/26/机器学习-实验-决策树/index.html","e5abaa7595ded12c3c05d8481dc1aee5"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","16fa4b5a85c21bc7ab8aa2e5ad30362d"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","b998774261e4ffb102bcc06944dbe816"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","779dae0cb985c5926e31eee3da0aacd6"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","14723330fb9c374a5873d77ea2472dd8"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","64a27f419adebae5e8d97c779244e23f"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","3d6d1c7f04e9ee550843f3e7dd192c13"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","d685f0b2c462642f2bcd0d4f1d0d68c4"],["/2020/06/11/机器学习-DNN-手写识别/index.html","c3ddfbb325eb1b8a24dad3fa9e524265"],["/2020/06/18/大数据-习题/index.html","73dcfa03f59a1ab911fb133caceccce0"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","32df082e57edcb5161e7b3b278c1fd17"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","36f245371614de03256908a035ed9336"],["/2020/06/24/Linux-拓展学习/index.html","37217b31777fb599f4f24e51d74a3558"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","d499ed95302e9e3db462131bbc7c4b76"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","c26a5b8c427db7f205ab1c495460893d"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","668546f08a19159456f40256f6b31cd7"],["/2020/07/15/C和C++的struct使用总结/index.html","f9be8ef0a1fcc0395caea2253ea506ee"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","d167f217fe2e035dbb78a16909bfe388"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","5b9e0042c64d5706a58a8bd0d4a1be9c"],["/2020/08/10/机器学习-实验-花卉识别/index.html","5d3ee34e3b7433a4de663fa853e908ed"],["/2020/08/15/Python-项目集锦/index.html","aed06e9ca535075eaa3e4b5f43f9a366"],["/2020/09/01/编译原理-词法分析/index.html","0f6353915a3d45c7cdae52a4444116ec"],["/2020/09/02/编译原理-语法分析-LL1/index.html","786290a81e1a3d1504013edf29ae2b5f"],["/2020/09/02/编译原理-语法分析-LR/index.html","629d507809d6dce154dfe493201fc78a"],["/2020/09/03/操作系统-内存管理/index.html","8cb9af50e6dbeb1d8434d4c543d9699b"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","f61d6535c2e78bba695379ede4e6cfa7"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","bfa448170dbd95ba18d5638dcdcedde6"],["/2020/09/04/CSAPP-实验集锦/index.html","fe8c15d2a3a558da7d49dd28e6d3e5c4"],["/2020/09/10/计算机网络-实验集锦/index.html","952db4dde4fa7cea92a2b0e99016bd8f"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","31d79631f2c18d96b2a5c58b256e46c5"],["/2020/09/30/C++工程项目-JobShop/index.html","6093a35f49c1d656bde3463d6e979866"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","fbe37b734d95c7515d1250367909e428"],["/2020/10/09/现代交换原理-实验1-时间表调度实验/index.html","46a9db81958bbc60b9b69b3b7b152073"],["/2020/10/09/现代交换原理-实验2-摘挂机检测实验/index.html","0e2c455397a7eef831ca98d2d482dafd"],["/2020/10/09/现代交换原理-实验4-拨打SIP电话/index.html","e8d79eca19c926f47d0c2480fea4c669"],["/2021/01/04/Android-项目集锦/index.html","d1196f219e88fe51a1ab147be193d91e"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","e390b13746be18e450be6e51c4e783e0"],["/2021/01/04/C++工程项目-travel/index.html","e1bfa2e271ab541806eeec24dd196b03"],["/2021/01/04/算法设计-分治-最接近点对/index.html","77ba231667fd93888537967e214f8f36"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","ff577bd7bfe323de3945a5e733a6c85b"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","f0c552613dc24557154ac306e04865a3"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","3f2f1bcda8d123b190a007afd3165948"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","ec611d1677921fa0614d25dfd20b5c7d"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","848b13e23d7fef8bdbcc11297ba9aef6"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","522e452d56a05df708bfe9366e09d50f"],["/404.html","2394b59b860bfc1b2a641e2bc2300ffb"],["/about/index.html","b24f8e7844e637c73485b04487286e73"],["/archives/2020/02/index.html","9c049b5d9d68c8cb943cf5e1b861fd11"],["/archives/2020/03/index.html","7337f1e356c4a2b76271fd70cbf316ac"],["/archives/2020/04/index.html","f49d757acac1e836486b5f0c2cc46aeb"],["/archives/2020/05/index.html","e69af37d9be6f1d3bf0c67ecb64c2bd6"],["/archives/2020/06/index.html","45660255003bcdc89452a205f32464e5"],["/archives/2020/07/index.html","31cff4dcd0f74da00b94c591ac6289a7"],["/archives/2020/08/index.html","a8d66a47001d3d7600b3d05ad14bd8cc"],["/archives/2020/09/index.html","9927d97530796d5db6a44f1fd2df99a9"],["/archives/2020/10/index.html","827776c54c1698438c99f99172f78032"],["/archives/2020/index.html","313abfe42045226d4aba2dd053826105"],["/archives/2020/page/2/index.html","1569eea2900065c86cfce56bfe9467e5"],["/archives/2020/page/3/index.html","1ce863894b2bcb35bc3ec0a019e5db56"],["/archives/2020/page/4/index.html","bacd9bd3c9177ea389b87b55e9db0ab7"],["/archives/2020/page/5/index.html","12d96521034e4fcbbbf2bac61a2dfc9b"],["/archives/2021/01/index.html","112a0b2a0221d93f49f0b085f94c10a5"],["/archives/2021/index.html","e37cae43edba2bf254041e862f97b3da"],["/archives/index.html","a969f5d59aa323077685d671ea1f28e9"],["/archives/page/2/index.html","a969f5d59aa323077685d671ea1f28e9"],["/archives/page/3/index.html","a969f5d59aa323077685d671ea1f28e9"],["/archives/page/4/index.html","17d91355d5c117bc5ed969fb091d9fcc"],["/archives/page/5/index.html","17d91355d5c117bc5ed969fb091d9fcc"],["/archives/page/6/index.html","17d91355d5c117bc5ed969fb091d9fcc"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/bb/index.html","ddb9f23619348e18029dc62032a44d5b"],["/categories/C-C/index.html","22a74e21430abad61cf1db3bca4d124e"],["/categories/C-C/page/2/index.html","41fdac4946da1cd7611ec2c8c6289ea5"],["/categories/C-C/拓展学习/index.html","3785d631c822471cbabee45cf1d616c8"],["/categories/C-C/操作系统/index.html","81ded3c1e9d42c7560cb3d033790a484"],["/categories/C-C/算法设计/index.html","aea2386810b27a0736868d4491b9646b"],["/categories/C-C/编译原理/index.html","cd0d7c5b15e3ecc27b6b1b957c7e1986"],["/categories/C-C/软件工程/index.html","b8479256d76632ead0d0482d509e663c"],["/categories/C-C/项目/index.html","4c2a7b3df6bc6c903f6a99a64151a22e"],["/categories/Java/Android项目/index.html","0f2630b4aca895cf4e49fa357b894bc9"],["/categories/Java/index.html","d43d77453117b9884360073071a159d4"],["/categories/Linux/index.html","617ff5376e7804c269a5f5bf52a86846"],["/categories/Linux/上机实战/index.html","202733ebb52568483824802314d55bc2"],["/categories/Linux/习题/index.html","5c12c36b9b440b4a377e19d5727c2763"],["/categories/Linux/拓展学习/index.html","60234d8681d84f760f94a3f6ca4c9b17"],["/categories/Python/index.html","4819c5db6d507d489ff1194982272f4e"],["/categories/Python/爬虫/index.html","6527c6341939b4903aa57847cae160a1"],["/categories/index.html","fcc22e26d715d9e6e31bbe2442b0f16d"],["/categories/其他/index.html","cd725a224827ac0e97ce2cad87309373"],["/categories/大数据/index.html","37fe93e4462b54d80ed3ca36640af97c"],["/categories/大数据/习题/index.html","9cf10a9c73449f2161ad6de40389c180"],["/categories/大数据/实战/index.html","30a65f56a64b66717f4ff7607f447d0a"],["/categories/机器学习/index.html","fd56ad9f13af24804f3f84d249eb52da"],["/categories/机器学习/实验/index.html","23e73f5d5fe1b5ac2e9f436d14a94844"],["/categories/现代交换原理/index.html","8c94159ad7b6b3e5efa45ca4b5e0b3d2"],["/categories/现代交换原理/习题/index.html","44b6a3e2f6736848000b0a05637ce248"],["/categories/现代交换原理/实验/index.html","affc0ff72a84d191600cc1830cba2554"],["/categories/计算机系统结构/index.html","8ed71098fa3fb18c2fc7b1bb4bf83a7c"],["/categories/计算机系统结构/实验/index.html","59e9f40bd0b69868a337aa033689b425"],["/categories/计算机组成原理/index.html","c16161842fa13cac41233dea8bca5634"],["/categories/计算机组成原理/实验/index.html","20ca373698b90cb545251f5c17b3eecf"],["/categories/计算机网络/index.html","466aeeeca3944401f88fbfc7a418ced6"],["/categories/计算机网络/实验/index.html","c0f620ea5d6ae782e1011fd5e3230c8a"],["/categories/集锦/Android/index.html","36eed2fb29e3f209a09646627a4dd9ae"],["/categories/集锦/CSAPP/index.html","fd251a5aa89ed28740a8532d1d49f0bc"],["/categories/集锦/Python/index.html","8b6a7baec827be3b376c770c4399b363"],["/categories/集锦/index.html","fccea65ed15b5c79fed2e36cbae2a989"],["/color/index.html","3f627143356419f7f54e1443b3536f0d"],["/css/first.css","ea01aa1635810499a5ade558f4f81d56"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/style.css","6bb0e006bcdf6e96b6708cbc5b8f868a"],["/friends/index.html","0d0c30b6c155d23f2165f9201e60e3ea"],["/gallery/index.html","cac0a9f9094373909cca2398b08a7aa4"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/periodic-table/index.html","4c31220b3c8c1d35b1128df43b2c9dc3"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","990af1e017f2482ee4428e60231bf40e"],["/js/aplayer.js","6e605f0855251e101d3024646f3eac60"],["/js/app.js","1948329f2fd7e750ade4bdc49138c09b"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","b3130f87aa59fefb43da34a22afff5b2"],["/page/2/index.html","047952e3a867b6626e52e6fa702d94a9"],["/page/3/index.html","ec62e8d5f33cb64f3fff604a05112382"],["/page/4/index.html","e1b0b767d0a24ce3f1ef0acf491a6ca4"],["/page/5/index.html","3b09de16e6e119b53aa78fa664ec94e1"],["/page/6/index.html","0eadb7e3f0d0ec9413d79a41fecf1814"],["/shuoshuo/index.html","ed0938f5741afc74fbef5bec0861cdfd"],["/sw-register.js","d98a09062e76458386bbced732a536e3"],["/tags/Android/index.html","f8c616512bc379529fc6179b1c648dbb"],["/tags/C/index.html","3efcdb06e41d08d82125c3954ea93067"],["/tags/C/page/2/index.html","b91ea4f81deb07fc0989d506a55d8ad0"],["/tags/CSAPP/index.html","37ca765d324fe735af9eca251b5b9bcc"],["/tags/DNN/index.html","743b8951ec990d325a4ae1d375f81932"],["/tags/DNS/index.html","f3903f64e37603fcf7c9703b3173d4e6"],["/tags/FPGA/index.html","ed9fa801e1e9d9fb53754d29142e2f06"],["/tags/HDFS/index.html","6a147deeb71fa136ad19ca60d82b4c90"],["/tags/Java/index.html","4066685963f495f504a71819c3bfe80a"],["/tags/JobShop/index.html","b019a81190551c496df33a5bb5fa3a73"],["/tags/K-Means/index.html","aaba762a207cf433781ae9cc06281211"],["/tags/Kafka/index.html","a04d0b7b48f4a3cc2f904977e69fc362"],["/tags/Linux/index.html","2ce1cd0c07ceca50767ec19d2672c43e"],["/tags/MIPS/index.html","9028bbfeb3b8e347ec510906111e734e"],["/tags/MOOC/index.html","aa4a3ce1bbfdbf634e85648f24ab2193"],["/tags/MPLS/index.html","92ceac36ba3579bc2ea54d15e01f70ad"],["/tags/MapReduce/index.html","b390c0b53f05fc93d554619ca6e8ea0d"],["/tags/Matplotlib/index.html","584f9ac35096c378534430dc4b6411d8"],["/tags/MiniSYS/index.html","05ce5561b6460eb83eba3ba7457f87fb"],["/tags/Python/index.html","ed1b5f2511d27bd1f90a2ca0fc61e478"],["/tags/QT/index.html","2358047367ed2ffba9d60fcfdd7e6295"],["/tags/RNN/index.html","e754a8954de2f99299daa0e74bfb00f6"],["/tags/SIP/index.html","0c2acbf8a48b47de69b37da9fa54865d"],["/tags/Scala/index.html","536070ac47c7686d36bb3f09eeff5d80"],["/tags/Shell/index.html","1eb68bbb510a6f6cc2a1964c85ed7cb4"],["/tags/Spark/index.html","bcb972baa6828916a2365281a1b836ae"],["/tags/Streaming/index.html","8c405e1c6b51a48eefcb079d311ee195"],["/tags/Verilog/index.html","868e3e868701f652a5bc6c5edfad5643"],["/tags/first/index.html","e409de6bff8ec8546237504c48498dc1"],["/tags/index.html","f47968cc121e7f375120a0f9b037ff11"],["/tags/习题/index.html","af696da9b619eaf8e151691da6645920"],["/tags/决策树/index.html","0fe4e32aded14055a6b70a689a9bd419"],["/tags/分治/index.html","2ee5b9c7d5d354f0ee9c30f411ccaf16"],["/tags/分类/index.html","df20f22713c3fccb4c4793f069a2e622"],["/tags/动态规划/index.html","5534057556d35d932e97e238033ae2ba"],["/tags/华为云/index.html","06e67b75b76332d18a8656553a368929"],["/tags/同步互斥/index.html","f1fde38aebd147f15b30db247acdb319"],["/tags/大数据/index.html","02627c42d32f431115912058d8ac7197"],["/tags/实验/index.html","b084333fe3107b7e04269989c7e2fa6e"],["/tags/小游戏/index.html","fc01fc781aa2ac38db1409450e6a9c32"],["/tags/操作系统/index.html","b6007eb1dc12196756d4018e63e46b31"],["/tags/日志/index.html","b87f2e0bf265b85e362f7d7d1db099eb"],["/tags/易错点/index.html","d5285d3b3fb79afe046f515854dd6446"],["/tags/机器学习/index.html","aa2cd04d9fa4c3ec563c9a6a08bcacd3"],["/tags/正则表达式/index.html","85c65316a60a71c49965722b9c2011a6"],["/tags/汇编/index.html","92cd5fc9034fb4f536ea91ce42a0e4f2"],["/tags/流计算/index.html","46f6427cfb82a4e92742593d7a53fe18"],["/tags/爬虫/index.html","01b106c472f8c4b258c16c890ad30b2b"],["/tags/现代交换原理/index.html","3c41cd9ecf564098db9112583a8ab218"],["/tags/生产者消费者/index.html","07f9e7e851601908a18f9721624971d7"],["/tags/算法设计/index.html","2b3dd3577210380825240069d9c73747"],["/tags/线程/index.html","9243366febaa42124e04e4ba2a66c502"],["/tags/编译原理/index.html","4b76c480d219cb0063ad70e322f6ad44"],["/tags/网课/index.html","c5d85ce64bae3acca861c9466a720146"],["/tags/聚类/index.html","e3e333d745090b959d983f448e832cf6"],["/tags/计算机系统结构/index.html","d5d59e0650deb0de464c99495108b41b"],["/tags/计算机组成原理/index.html","4ebcf910d4d9af9c6177584943dfa62e"],["/tags/计算机网络/index.html","ef130a21e6177efdd6f58e5ebd1e02d2"],["/tags/词法分析/index.html","0a5f23fbba5aba9bc4972b6081f8b16f"],["/tags/语法分析/index.html","d4ed2b7875de0796e5328ea343d3319b"],["/tags/读者写者/index.html","4fd0de32d0ef9f47d859ff41f5986ca4"],["/tags/软件工程/index.html","62ab7215b7eac913eea998b8e9267fb7"],["/tags/进程/index.html","50f3e1d50b5a2577b1ffeb247cb72d53"],["/tags/难点/index.html","270370abcda1ae3238f9ed4a3bae4564"],["/tags/集锦/index.html","1788e00cb55c5931299c18b16e10b65b"]];
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
