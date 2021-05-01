/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","831e22617c98abe7986bea157f2f72fc"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","e01f2a1f75bd020e06d53e62c4018a53"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","b72a1052408762c78644a8c053a63390"],["/2020/03/26/计算机系统结构-实验1和2-遇到的问题/index.html","7fafc67aa9363eabe1a5dccae2f196c3"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","a1cca721c49289e3ad2822e8129583f9"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","702b69d898c1881c62396fba9899f1b2"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","805f2305ec547126b3af46b02be0a535"],["/2020/04/18/机器学习-知识拓展-条件熵/index.html","eda7e4f774d07d2d021ec0637f694f75"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","eb19d82996cb79f322d44537882416ea"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","b88230b45f9578e5ba9b521a0ae7cd32"],["/2020/04/26/机器学习-实验-决策树/index.html","1073de7ce8de43215ba6baf97e955b30"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","5e03c38204cd9fa417acaffa40fb6366"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","9f566606c62d3957f07cd53976b3db11"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","a9c4646c25a37a1a206344cab9d845a7"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","91bad7189377ce61fb14f567222397d2"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","5e380b461fc61ae7876896f14b122507"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","6bf8cff5ac23ead9941f0bcd43ff5511"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","a259b901651cd84ec9cfb117eb272de1"],["/2020/06/11/机器学习-实验-DNN-手写识别/index.html","8c5ba21cc4d13d02d72ffbcb517109b1"],["/2020/06/18/大数据-习题/index.html","66d3200cd68cd796ac87fbc17dc7e43b"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","3d8a713de5f73f336e6216e615e15bd3"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","9a082645161f76598dd3a50843395dd9"],["/2020/06/24/Linux-拓展学习/index.html","fed2b1dcc6fdca4fb3e391ee6f24cecb"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","c2ad43d17d6b5fa511d8bc28a32756c9"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","700d184b9a40c5f8281748d8dd981aa0"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","6ef188ef177c8017a3d7954287363de2"],["/2020/07/15/C和C++的struct使用总结/index.html","95ee47d7a864a633de9224ad9622648c"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","4d6f652eeca4b34a196d3d5a20f8b639"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","1c70e0b7b972adf72974ac6e81873451"],["/2020/08/10/机器学习-实验-花卉识别/index.html","5fa6abde84eaa69dee2a0f4888f6d197"],["/2020/08/15/Python-项目集锦/index.html","81c4f04f559df33b78f79e7640ad689a"],["/2020/09/01/编译原理-词法分析/index.html","23e97e7d2f20d16f3ed4b43dabbf5a5c"],["/2020/09/02/编译原理-语法分析-LL1/index.html","7ae60801df9a0bc076cadce2dc064078"],["/2020/09/02/编译原理-语法分析-LR/index.html","58cabffa285de15726e3c9ce81facfeb"],["/2020/09/03/操作系统-内存管理/index.html","e075117cc92a14d7d2524438fcd9be95"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","06fbe3ed87c79c623aab0733d9662a0f"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","5254a4b43045d3f26a64cdc2061d83fc"],["/2020/09/04/CSAPP-实验集锦/index.html","ab477128460e62dd1960d5ae77bff3c8"],["/2020/09/10/计算机网络-实验集锦/index.html","687a89702a3b2df3644dbaf821edbd01"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","2336b8ea7f5eeb22416979da3fe0809d"],["/2020/09/30/C++工程项目-JobShop/index.html","7c582908c092904319c7e1c309352935"],["/2020/10/09/交换原理-实验1-时间表调度实验/index.html","c703f545e06a05a8d5c8b49c4c65263c"],["/2020/10/09/交换原理-实验2-摘挂机检测实验/index.html","dbbc0678ce24003e9ef22c04577878f3"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","8aaa4df725b94e94cb9ab2cf71ed22b2"],["/2020/10/09/交换原理-实验4-拨打SIP电话/index.html","826b11b34f656c0d6a034a2a0767bdcd"],["/2021/01/04/Android-项目集锦/index.html","3df30ffa94d7cd43f1ff029df387b62a"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","1c5fe7c666b8d81e468d305e32a7f12b"],["/2021/01/04/C++工程项目-travel/index.html","28e9b8ff64bca80f42671ef84b018b99"],["/2021/01/04/算法设计-分治-最接近点对/index.html","3ba41a7237f4ec8a9c88d77b1d9a5b8b"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","a6ded2fd49781ca0bf617e2ceabccc2b"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","9127ab7126053a42966289180acfb287"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","9f9f2eb8ee3c702be955ed9d8ca7db66"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","822ff55cbd7cbc7578f1f42ceb8ff5fe"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","ea49fed1cf42c3838befeddb97e55cbb"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","3b2329bd1ca779aec6405219394c0847"],["/404.html","dc6177f9175eee6945b535bf2dede22a"],["/about/index.html","509a46c95b88e0ab7441417bf940562b"],["/archives/2020/02/index.html","fd969d6602fadfe8735af7da65e42655"],["/archives/2020/03/index.html","28a6d3f6c0aee0686aa1714ab12ae458"],["/archives/2020/04/index.html","b50bbbc53ac032b8bad241cb74ce6b5f"],["/archives/2020/05/index.html","8ada86f6f7f7c3d81fd9eed88a6aa715"],["/archives/2020/06/index.html","a320fac9338c7549176e5badb8a054f1"],["/archives/2020/07/index.html","4195fed3fe43045abc1a7694cee59a07"],["/archives/2020/08/index.html","07a4e65d257c0d1bdfc872a8152f2e5d"],["/archives/2020/09/index.html","f0c0e8782d490f361a902e22c4fdb44c"],["/archives/2020/10/index.html","f49706f83727bf3ab815547c7e5ca5c6"],["/archives/2020/index.html","b4757ed0904193a73554c465bd710c51"],["/archives/2020/page/2/index.html","ff9bf7a6d66ea57cf9b74fdd7878c3be"],["/archives/2020/page/3/index.html","f1e1417d163db7845a0c6d9bef5f28c7"],["/archives/2020/page/4/index.html","aa9fcf897b79d2149b5a0ad2631a590a"],["/archives/2020/page/5/index.html","afa35940d266620d2a1f48af47ebef55"],["/archives/2021/01/index.html","714cc39356cd3586f83d963e56040a5d"],["/archives/2021/index.html","691f10c378a0fc8b8afee2f13e57366e"],["/archives/index.html","0f66491e9d7fd9c90fca60e761f484bd"],["/archives/page/2/index.html","0f66491e9d7fd9c90fca60e761f484bd"],["/archives/page/3/index.html","0f66491e9d7fd9c90fca60e761f484bd"],["/archives/page/4/index.html","df6749e5c50e0d625ef016e222077956"],["/archives/page/5/index.html","df6749e5c50e0d625ef016e222077956"],["/archives/page/6/index.html","df6749e5c50e0d625ef016e222077956"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/bb/index.html","4d75a1912f768b4b97926bb604e586bc"],["/categories/C-C/index.html","9da18d4a631ffc69d31f724e46d24106"],["/categories/C-C/page/2/index.html","705f08a9754dc11654cb8e98653977ba"],["/categories/C-C/拓展学习/index.html","a1178c8582d3de93e72f9f3923ddb0f6"],["/categories/C-C/操作系统/index.html","6d9f6c15dfd05e64f60bc377b3064122"],["/categories/C-C/算法设计/index.html","a108baf1edd8d76fda4f92fd4ca645ac"],["/categories/C-C/编译原理/index.html","ad585c8297746fb04ce5906db377ec5f"],["/categories/C-C/软件工程/index.html","3d4732e68dc88c04e921f59a557840f5"],["/categories/C-C/项目/index.html","c3352611b2d53f5b54fbfc729e4ded58"],["/categories/Java/Android项目/index.html","7991357236e4a0a2b1ab9d0abde8dcf5"],["/categories/Java/index.html","cbfcd7627340ba7a059d61b7b49f19ce"],["/categories/Linux/index.html","4d8689159b93c91facdb9426579b0ced"],["/categories/Linux/上机实战/index.html","cdbd872f8a695c9085d7ddb2243fd47c"],["/categories/Linux/习题/index.html","6d866762ab3505ee8de7c21a1a1db4dd"],["/categories/Linux/拓展学习/index.html","d2ffc5c11926531003b2237cf6d89b3e"],["/categories/Python/index.html","bffa2b00be4353ba28ca60100878b3cd"],["/categories/Python/爬虫/index.html","08d19b3fa4a370fab277360e819636fa"],["/categories/index.html","1a21c9d015d466d7b9497e56946dccba"],["/categories/交换原理/index.html","36d0bdd368efd2b4d853296cfca46121"],["/categories/交换原理/实验/index.html","235eb7ec2c643844d47459a411439c1f"],["/categories/其他/index.html","fc952bc3d591bc6dcde8c8fd5e4e084a"],["/categories/大数据/index.html","cb7099134fb56ebc44f5b5956c7a9b3e"],["/categories/大数据/习题/index.html","b6422d630b7b7cd671d532d1a119de8f"],["/categories/大数据/实战/index.html","83c5ce49ae5ec6d2a3b9ef142c2062bc"],["/categories/机器学习/index.html","9cbd5a103925620e54b95faada9e605a"],["/categories/机器学习/实验/index.html","634034ddd2731649c17539d0c55a795b"],["/categories/机器学习/知识拓展/index.html","ab8c584bc66627faea8d8a13e4bce011"],["/categories/现代交换原理/index.html","165a390d605659aaa79e22470a9f839b"],["/categories/现代交换原理/习题/index.html","9377c7832d398272ec47dfc02fbf06c9"],["/categories/计算机系统结构/index.html","5affa9c244f064bb00050d18707c6680"],["/categories/计算机系统结构/实验/index.html","d4dfa18f6bd7270b5eb47109db69beac"],["/categories/计算机组成原理/index.html","7897d2282830f4eb4b4c2a002985c12a"],["/categories/计算机组成原理/实验/index.html","97334d2a6e977b10aa3da8c575b426e8"],["/categories/计算机网络/index.html","433614674c0030c56a342743430900f4"],["/categories/计算机网络/实验/index.html","6381d9ab431a0d64dcc027ab5c029070"],["/categories/集锦/Android/index.html","d8ef6fac60e6c3acbd6b8981430ce2bf"],["/categories/集锦/CSAPP/index.html","79aebe346558ae8815062dcab4aade63"],["/categories/集锦/Python/index.html","0eed05e13aa2b02cbba84adc7d9b5b77"],["/categories/集锦/index.html","c63114f0a4ca61ba6d4eac3b8b9003f0"],["/css/first.css","ea01aa1635810499a5ade558f4f81d56"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/style.css","6bb0e006bcdf6e96b6708cbc5b8f868a"],["/friends/index.html","284eb5f5aebfa913223a076cc23e0a63"],["/gallery/index.html","63f4bc7639ebb10460b077618443184f"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","4342765b720fba5f5569a447233eea21"],["/js/aplayer.js","6e605f0855251e101d3024646f3eac60"],["/js/app.js","1948329f2fd7e750ade4bdc49138c09b"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","5913ac5da4b8d985d814fdab369c4015"],["/page/2/index.html","3503acf59a450004b42975c63985a5b5"],["/page/3/index.html","125887d55699e74f93471d83b26ec906"],["/page/4/index.html","e5e2d18d8d19e90729ea3397a61ef8be"],["/page/5/index.html","9ba6def46c86d8131d7fd4ebf926db32"],["/page/6/index.html","7dfadd629275f72fcf1676a65d3d52a8"],["/shuoshuo/index.html","87f766d2826e6a48844c50ecdacc3361"],["/sw-register.js","3700f3955ed847f2a6d1f4e4ef8dce35"],["/tags/AI/index.html","49ca3879cf4ce47616539af2763d9e76"],["/tags/Android/index.html","50985740c514430b4b9b447b40c7362e"],["/tags/C/index.html","2019d6eda4c804567deeea158096446a"],["/tags/C/page/2/index.html","363284386a09fa8249cda3657adaa633"],["/tags/C99/index.html","d6fce102a78514eccedae2d32423e4c0"],["/tags/CSAPP/index.html","4d66cb0d2e859285fd8fb556637f0ea8"],["/tags/DNN/index.html","a045b18e11d08fd131adea01d3906d74"],["/tags/DNS/index.html","8b25d3d18fbf78b259ef01afeeb83eee"],["/tags/FPGA/index.html","0d980df16e3ee07f6cb234c0d4d4cb40"],["/tags/HDFS/index.html","e6d9e6bb3e82cf0f3b16cab1e481cae1"],["/tags/Java/index.html","41fde1dbcc427449359944f15a8ce84d"],["/tags/JobShop/index.html","df07271c5fa0af4ca778ef8c7efff7d3"],["/tags/K-Means/index.html","76ef88d57d31dc4107c01e8499a43ac3"],["/tags/Kafka/index.html","4d528de6bef9e1936cecf07ca5b00578"],["/tags/LL1/index.html","eebe2eb5c310e58802cb348aa50ea41b"],["/tags/LR/index.html","22bd955174c30ce0929141680092be8a"],["/tags/Linux/index.html","683960461593fe0a2c45f677d9fbe966"],["/tags/MIPS/index.html","c5e1560b35b0f65de992c71529ec4d27"],["/tags/MOOC/index.html","101ddbaa2bef73d86754b7cb7e900e6f"],["/tags/MPLS/index.html","0af49dd77ab7d871d8e685b15871404f"],["/tags/MapReduce/index.html","ebfedb7c3fe4f933f8c6133c27496950"],["/tags/Matplotlib/index.html","e93352066aedacb4f8b92ca3343e0a51"],["/tags/MiniSYS/index.html","39355fe46e899fb76f4aa10d7ce78f03"],["/tags/Python/index.html","dc49c2274cc151ee51e28c0e7297d513"],["/tags/QT/index.html","b9bee1ecbaa7deff4e714bfe14689f8f"],["/tags/RNN/index.html","c348622263dcd77a544e35838f2dcddd"],["/tags/SIP/index.html","6a69e20edf29dfa74269f38667911a9f"],["/tags/Scala/index.html","658f14ab90175e9d4d4321bb4c994eda"],["/tags/Shell/index.html","bce1a95cd33953e46fccf0710a4eb751"],["/tags/Spark/index.html","b12b90e76f88a44a9e63c13b78537c0c"],["/tags/Streaming/index.html","f93560450e847936218d3d7ced4ffd37"],["/tags/Struct/index.html","daf10cf724cf86fdbf04053ec8570a48"],["/tags/Verilog/index.html","a351eab9b7bec63b51a10e75eb60ad15"],["/tags/first/index.html","499dc7d8be1fb6a8fc9d9ab8975fcb95"],["/tags/iPython/index.html","21d9abef2ef2d46e94da630cb674e4a0"],["/tags/index.html","1b4048c3ede0cc3432380ed4898b5c7d"],["/tags/ls/index.html","7116555b55224d323f3dc7f9cb14607d"],["/tags/习题/index.html","e7fdf05e2a157d42d444f5cd6a4fd4e9"],["/tags/交换原理/index.html","2b5a14d01a35a6cb0643d28f20b21e0a"],["/tags/人工智能/index.html","415d01bc29aac2d499d1fae600aff899"],["/tags/信号量/index.html","de963257bb60097e8778b5a192e1a714"],["/tags/内存管理/index.html","dbbe4374f6218d5fa44b1a4f0e1c0b3e"],["/tags/决策树/index.html","1ff4852f5f2b35e72e877d2b5a8a1f47"],["/tags/分治/index.html","575f5525ac7e766d7f45c048a7018be9"],["/tags/分类/index.html","f38ee7df7170731262984a99c77e3000"],["/tags/动态规划/index.html","69eb5bfd87b6b862ed54d9fcb826e7df"],["/tags/华为云/index.html","b5d947e30ebc6aaea22dbf6e2cc4f04d"],["/tags/单词计数/index.html","5a2b98c5c7ac9a66c2487d8746c31885"],["/tags/可视化/index.html","749453b0cd50b6b2d9a09862e251aa9b"],["/tags/同步互斥/index.html","87e33fcd65c2becfb087f9ac6165f2e9"],["/tags/大数据/index.html","ea82a0e46d06af379e1ca308913ce852"],["/tags/学堂在线/index.html","b5e7e7a17136298d8eb6eaa4a82f52d8"],["/tags/实战/index.html","2ca2ed371b120337b3f17b44845142eb"],["/tags/实验/index.html","a316b27974ffae9c052917c07ec8e0e3"],["/tags/实验/page/2/index.html","8d610b68540b022211664baba512dee1"],["/tags/小游戏/index.html","666ce7e5fabfa0c291c5b565402a6cc2"],["/tags/工程/index.html","acecac209609b2bfa175b094545d9eec"],["/tags/工程/page/2/index.html","a0b5c5939a56b70c839d96026f5e954a"],["/tags/手写识别/index.html","7e2666a7d4e9ceaf6672a791abe6a371"],["/tags/拓展/index.html","1b224284a14ce4dc0f0a8fe71d80ad10"],["/tags/操作系统/index.html","5137f3a6a040447bb10d4ab9ebdb6c7c"],["/tags/数据处理/index.html","c68cc81c1a804f4821b39530a58f462c"],["/tags/日志分析/index.html","d89d4ab69c762f0eb512a10c1d7aa91c"],["/tags/易错点/index.html","626a225b064aae02bf71862ba3599682"],["/tags/机器学习/index.html","4b5f5e475ac3edef1648314c4eede7dd"],["/tags/条件熵/index.html","4504464fd497a1a05064006737c60de4"],["/tags/正则表达式/index.html","0708060e5611f61bebd08057ba6e72d6"],["/tags/汇编/index.html","e40a04b0a8766deaf21c1938cc0c9f32"],["/tags/流计算/index.html","8b64278c91f61ed340790dcce4423998"],["/tags/爬虫/index.html","428723e78c958b428c700483196e935e"],["/tags/现代交换原理/index.html","b03f162561fb64fbad87bbe07d4cf812"],["/tags/生产者消费者/index.html","d7458ec455aa6c94a09edc1eb368b7e2"],["/tags/知识/index.html","d94378d06307fa7aa5662e03b7fa1730"],["/tags/算法设计/index.html","d7db06a6619b53f23ef0995dc4d2abb3"],["/tags/线程/index.html","3c093580f23a060dd5cb1eccdb250449"],["/tags/编译原理/index.html","a06acca142707ebbb3ce92a7d9619dec"],["/tags/网课/index.html","64cd33ae953cb07f8eae25f5f5f8cb09"],["/tags/聚类/index.html","6b1e261ef3e1a02d3f959384209ec767"],["/tags/脚本/index.html","58a8be488ebad384c103380dcd4e2d70"],["/tags/计算机系统结构/index.html","6a2d369f90304b967d790555e4551fb9"],["/tags/计算机组成原理/index.html","177657dce78442cb7b7b0e264247d78a"],["/tags/计算机网络/index.html","7ef035e1690654f7a4ca3fe444169e5d"],["/tags/词法分析/index.html","43d4665b3765a477523bb98e75653f7c"],["/tags/语法分析/index.html","076f4036b6ae057d3030ec429468d64b"],["/tags/读者写者/index.html","520657f9df7ab3c10d5ad4de33297927"],["/tags/课程/index.html","706b3a70a93e1f0aecd4cc05dc7266ae"],["/tags/起名字/index.html","550f0faddd2ce07a15f2a137a861a97b"],["/tags/软件工程/index.html","d74b6b0b370d41062dcce6f848e0b075"],["/tags/进程/index.html","b9f42f78c3fecc856f559b9f3863e799"],["/tags/通信/index.html","18a0fa382c326f6e849e88254f5957c0"],["/tags/遍历目录/index.html","ca02750b0eb10c11c9e1d5ae425bfe42"],["/tags/难点/index.html","05e3dd28a1f3f08e4e36896438920837"],["/tags/项目/index.html","5abbf2027b2ddb0f89ca4aa04f0f46fc"]];
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
