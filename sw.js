/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","8524ceefd717021bd33baec6baa77738"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","741d3a798e523ee787c2d16101a93385"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","7774071a2754cee8f5f521210c58add4"],["/2020/03/26/计算机系统结构-实验1和2-遇到的问题/index.html","bd28f02755119e66d7d2f474bc253da5"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","7ab22456a16b4654421c4e2d051b3067"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","e62ce3a2e5b07f6073e98150969e2e21"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","17f70343d2235e4fed4f5171f04d888c"],["/2020/04/18/机器学习-知识拓展-条件熵/index.html","e2ba7be1aa63ac0503b9170701ab4485"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","d2d623404c9d26b09068fae5bbfabae9"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","6660fa391bbb1df09f695bec20ae062f"],["/2020/04/26/机器学习-实验-决策树/index.html","71ae447733d605c6ab11af697863d2e2"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","a336e29e732818c6b2897020e32cb7b5"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","86393b2800132ce2616c531b14e28cc5"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","760c1468201076fca2163680fc892e1a"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","b02a6ae1e8739a4149c77878d42cb0b3"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","dff7c0e9a57b9ebc12a27c2b725b7786"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","70884a7a55d8ce6c1c2ba5178a6dca51"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","fbc0cec9e078bb75b5c324e91940068c"],["/2020/06/11/机器学习-实验-DNN-手写识别/index.html","a15182f904b3b6a86ff2bd65a88a9e96"],["/2020/06/18/大数据-习题/index.html","a3ef168df1573aee249e29947e30626d"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","b9c14105e6c494608995e016fbdb1465"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","13e2a2dc30faf8076965b127589a94b8"],["/2020/06/24/Linux-拓展学习/index.html","124dcb2aad24f9e8f07c0b97e2a08227"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","9370cd247534939f2fb084ec876bbd32"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","01bee03538c33978512432bfd448d3b9"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","22ae27ffa5b5e15ad4bb2280152e248b"],["/2020/07/15/C和C++的struct使用总结/index.html","6974c29df368a55ca18752c62bb9ddf1"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","253c409c2401167e89878932eaba6486"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","b8d9d5c13160dd27d6ae3f8481f26e05"],["/2020/08/10/机器学习-实验-花卉识别/index.html","24c91f7ee659350bd0e2cba70e2cd998"],["/2020/08/15/Python-项目集锦/index.html","881528bfbe8c3c48eaf1f5fe176cd873"],["/2020/09/01/编译原理-词法分析/index.html","670b9d987dfecccf65f964072cfd8862"],["/2020/09/02/编译原理-语法分析-LL1/index.html","8f434b14ef5c4874d2d605a1462c85cc"],["/2020/09/02/编译原理-语法分析-LR/index.html","a9d4c0fe7aff526f5ddab1766e1fb7be"],["/2020/09/03/操作系统-内存管理/index.html","34f3e21f856ce1dc58be1037c002b67b"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","68d03e5d803a8160023383c8fde2803b"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","cdc7259746d6d0b3d4c642da2c119aa2"],["/2020/09/04/CSAPP-实验集锦/index.html","b3d640b5e6a97fea1e166804cfcd2c5b"],["/2020/09/10/计算机网络-实验集锦/index.html","49f2290a61ca39c803e35b3404cbc87d"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","a6c752058fe361db8f4386916e9473b2"],["/2020/09/30/C++工程项目-JobShop/index.html","85314ab1c9c06a38ac28c4af00ccfc1d"],["/2020/10/09/交换原理-实验1-时间表调度实验/index.html","44311b23511989552ed9052344bd1054"],["/2020/10/09/交换原理-实验2-摘挂机检测实验/index.html","dbc03231ec3b9f881238ba6f15b4249b"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","0abd063167c223549216701c740b8b78"],["/2020/10/09/交换原理-实验4-拨打SIP电话/index.html","ac39851c4268972ef2aa962aaaf86741"],["/2021/01/04/Android-项目集锦/index.html","9ccf5c5ed4e0f8c66ed074b403f62cd9"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","b00c2719126fb3f1dbbc4327ec247a23"],["/2021/01/04/C++工程项目-travel/index.html","3defcd1067a85db8c10c02ae39c7d2d7"],["/2021/01/04/算法设计-分治-最接近点对/index.html","4e0c15b88d6044fff066230b3c7d4b01"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","afc470679d2460e255170f842e7ef027"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","ea51289de57aee3ec35c994f11916372"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","eaaa8093bd6fef6e75a68bdd18b0a217"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","55f51d6bfdf0458aad3da70684b7fb52"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","1da3e40a44852843c62aba5e66f8d997"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","82d897c795011744d98ba89e83e6930f"],["/404.html","79ac41c95fc1f19c230353c291c63da3"],["/about/index.html","2ea0c47d8ae3938e7311e17ddc4c8109"],["/archives/2020/02/index.html","9e1150d7fc5e991ab97ec167418e2cc8"],["/archives/2020/03/index.html","b70107ccc8fef248f9a390fa59a38f95"],["/archives/2020/04/index.html","193a2fcbc5ac82b51db2fdc4f7fc154f"],["/archives/2020/05/index.html","01ecac7365d6f7cbf61b3ed7ddeb9fd6"],["/archives/2020/06/index.html","f705cd63a9b6ac44c7056626e8b21668"],["/archives/2020/07/index.html","7ea6df4062fb4b79a4fdbf997c2d78d0"],["/archives/2020/08/index.html","be5521b7ef767d19e4aa581a60a686a0"],["/archives/2020/09/index.html","2c9a0eb9fdf3d3caaa85167fe0a50342"],["/archives/2020/10/index.html","ecdb2508ae4f8242d581ac0638a5486d"],["/archives/2020/index.html","05797e84780f731c6ec127da667aa785"],["/archives/2020/page/2/index.html","0692c6935adbf52897a1f85cf2250602"],["/archives/2020/page/3/index.html","bd93b5d273f4fd53165451c7350487a0"],["/archives/2020/page/4/index.html","c81d79660b4d5255b003e953ac8d6c84"],["/archives/2020/page/5/index.html","fb3c3df02eef92bdbbf9839063ccb680"],["/archives/2021/01/index.html","68ea327db565cb29723de64e7456376e"],["/archives/2021/index.html","9502d9173c0cf6f6869f11897d194cdc"],["/archives/index.html","a1dfafb39a0f69f0041e741e9e029f7a"],["/archives/page/2/index.html","a1dfafb39a0f69f0041e741e9e029f7a"],["/archives/page/3/index.html","a1dfafb39a0f69f0041e741e9e029f7a"],["/archives/page/4/index.html","d0450e05aa02aea123b6bc30615fbd44"],["/archives/page/5/index.html","d0450e05aa02aea123b6bc30615fbd44"],["/archives/page/6/index.html","d0450e05aa02aea123b6bc30615fbd44"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/bb/index.html","0f44cc054731b5a185c02c99c0ceafc1"],["/categories/C-C/index.html","9cea1fc3af520100f268d931d898e20d"],["/categories/C-C/page/2/index.html","923b442589b603ca82dbe11338f039b3"],["/categories/C-C/拓展学习/index.html","8b899b1ecaf093c50d7b644dbe04b35d"],["/categories/C-C/操作系统/index.html","0117d6626223bd03bb12e3875952a081"],["/categories/C-C/算法设计/index.html","9f0fe0d63e5d19a50261dc3163bdf11f"],["/categories/C-C/编译原理/index.html","f18adf202536f475b55190dfb6fbd365"],["/categories/C-C/软件工程/index.html","1479668802a38878955df6f753ab879d"],["/categories/C-C/项目/index.html","a6b69f266433e1a23e8b11dceb9e2dc6"],["/categories/Java/Android项目/index.html","c2406a8db348c33c71343c1c040eebb2"],["/categories/Java/index.html","582fd536e8713d1291238c1293ca03d4"],["/categories/Linux/index.html","4287a5874f3cb6d30ed87ae8949a0611"],["/categories/Linux/上机实战/index.html","06073268ef9be4b2280e318c209a81d3"],["/categories/Linux/习题/index.html","d333e0b1d874f35dc9474b947ca90f26"],["/categories/Linux/拓展学习/index.html","a2297384401ea1cf8613939a23aa92eb"],["/categories/Python/index.html","deb4ae1131744d8be65e9c0998b2bd17"],["/categories/Python/爬虫/index.html","e25477cbb8168eafe3e551d78cc04b45"],["/categories/index.html","e6a5d6074c2a150f93a9b82b6e3537c5"],["/categories/交换原理/index.html","7dc2fcba24d3f14fb4d9f3db83667ed2"],["/categories/交换原理/实验/index.html","d0add900ed839433be5ca34840a211c1"],["/categories/其他/index.html","91bbdc817ca8acd2b5b4660f88a6eb9b"],["/categories/大数据/index.html","38172919bdce41ebe3d3e344f65ee7c5"],["/categories/大数据/习题/index.html","0070c6930267a770e41553748e379b8f"],["/categories/大数据/实战/index.html","7b8edf08fcf3af01c7e43772cf2f9b67"],["/categories/机器学习/index.html","bd20327566b36914cbc0863750812538"],["/categories/机器学习/实验/index.html","10056dc076bcda355f21aa546fe1aedb"],["/categories/机器学习/知识拓展/index.html","a27cf1ca0865d2866f7ac249edc6674b"],["/categories/现代交换原理/index.html","ca4e5a0109a1058e5b422031b08d2585"],["/categories/现代交换原理/习题/index.html","cb907cf002729901827aa544c3b4b604"],["/categories/计算机系统结构/index.html","888972be75952fa3058e157aa5eb1c94"],["/categories/计算机系统结构/实验/index.html","21874475d715b8dd944b82ee0378af05"],["/categories/计算机组成原理/index.html","242d42393b92680c6702811d22aa8578"],["/categories/计算机组成原理/实验/index.html","05add550ec193e805d13e5ae2a10fea4"],["/categories/计算机网络/index.html","a0915855d3a768148277e849ba419635"],["/categories/计算机网络/实验/index.html","d67e2053f207864fbb55cb46b9cc5b19"],["/categories/集锦/Android/index.html","d63460da95435b125436b81de1ce1dc9"],["/categories/集锦/CSAPP/index.html","6bdec6edfa9356660ab1b204f9f0366c"],["/categories/集锦/Python/index.html","323a0021a2590be8181cf0ad0d665d17"],["/categories/集锦/index.html","debfb2bfc83b13ffac1244bfca651ea2"],["/css/first.css","ac2d0010102d22ded3aa536d16e52b73"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/message.css","b0ce3ca232f809c8d7a85c79bf1f7ff8"],["/css/style.css","f33cadc59019a1af1d898b222bf512f6"],["/friends/index.html","91f11782459a9bf25c7e0ac4c06cc633"],["/gallery/index.html","63f4bc7639ebb10460b077618443184f"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","9a4c4206328a5c7a73e4da0e802d1adb"],["/js/aplayer.js","f10ee7aff4ce278045da925ac6510d29"],["/js/app.js","d14976ee97145aa14568c13c6554dcc4"],["/js/jquery.parallax.min.js","38cf4791e24aeaa8101bd2c816400718"],["/js/message.js","38da736cdf513c9a15a0a2a16a34eeae"],["/js/plugins/contributors.js","23ba3efa08d9fb1aae753ceaa6df2711"],["/js/plugins/friends.js","239cf9c648af390f866ed00cead3e23d"],["/js/plugins/sites.js","15bb31fc27abc888b17cc5d822808604"],["/js/rightMenu.js","19b2a577c30a04732f02b86bda62e0b9"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","42f951bdfe18109574ae40a0d7198855"],["/page/2/index.html","17ed7c3fa1f3d130a0503894e6365368"],["/page/3/index.html","52fc0849ac95ace42157e3e4e982eabf"],["/page/4/index.html","e2bf6744d4c51771b200c27cb6668813"],["/page/5/index.html","54ff3699991578bdab5f9fae42eeee2e"],["/page/6/index.html","a89d247c98433c9213e49d15a8106596"],["/shuoshuo/index.html","78154638cf726a756f100a6466993870"],["/sw-register.js","cf0647eed4aed41dcde2e5b55331ed04"],["/tags/AI/index.html","3dae5688d2c28b08dfad3b046942c905"],["/tags/Android/index.html","4b65da76850a61ebde22b2e0a64fa0d0"],["/tags/C/index.html","9ab560bd5b97053762451bfdb688e5ab"],["/tags/C/page/2/index.html","4643acd7e0712fdf073707d9f4a629ee"],["/tags/C99/index.html","a70b15de53364ead6f8a1b4a9914bcdc"],["/tags/CSAPP/index.html","fd1a3761dc449361aacd4c1d11d3e13a"],["/tags/DNN/index.html","e41e81285e92ac9c6c1874ecf2c611f3"],["/tags/DNS/index.html","f977cc4edfa539926c7fc63ae271a03c"],["/tags/FPGA/index.html","c72c2734a6bff466bfb354aa8285034c"],["/tags/HDFS/index.html","680880524ec53ffa3e7543bb9a478370"],["/tags/Java/index.html","af5504d9c77a0d6406ec66d6c2ac775b"],["/tags/JobShop/index.html","0f35c8302024df010ec29a9d16f3e7d9"],["/tags/K-Means/index.html","f3565a00faa1fd20c93dfa1fea0c2794"],["/tags/Kafka/index.html","774da62fa885dc55502c64d0273dcbb9"],["/tags/LL1/index.html","795f637c8ea4538823b5a10149974967"],["/tags/LR/index.html","0c87f75be18c0751f7e01a2f7566752d"],["/tags/Linux/index.html","ec136da573aa854badb48e4bdf760740"],["/tags/MIPS/index.html","a8fc59b77f7fb06249a7eba4a13298a3"],["/tags/MOOC/index.html","bd312e3c3171a7ec47ff09641d606eeb"],["/tags/MPLS/index.html","645b25fd5a9e4045ed80f0d3207c9443"],["/tags/MapReduce/index.html","af121bdbf38a7afeed6c90761714a3e7"],["/tags/Matplotlib/index.html","a0022112e94cf9238c10d4ff4b68b401"],["/tags/MiniSYS/index.html","fddd4bab1c5ecf5febe2b5cafda64deb"],["/tags/Python/index.html","7dbfc687ba7ae36d3cb861c83b4c62c8"],["/tags/QT/index.html","71ff6046e2bc176a2ccf3f02ace85595"],["/tags/RNN/index.html","dbc56a4a871e41816b3dcf923731c7fa"],["/tags/SIP/index.html","1deb947de66c36dcd0255b87c80fcff3"],["/tags/Scala/index.html","f0fd37bd256abac918ad417cd37a8c41"],["/tags/Shell/index.html","bf3f8f017b09ade88d8994b89599394b"],["/tags/Spark/index.html","c11bc328735cd36153ddf2b12412c100"],["/tags/Streaming/index.html","50b582cb8690db7b2336e323a1f7d835"],["/tags/Struct/index.html","dd8a7049a9ecc145a7a1346927f5b095"],["/tags/Verilog/index.html","d410dca22dbdc68b42d459f4d93a9fb6"],["/tags/first/index.html","0c468ee35c25bf39b6100c64b558ca30"],["/tags/iPython/index.html","b6b3e15c080a9afde9d2755c2a28ffba"],["/tags/index.html","51beaeae437bb3009f93d7eeb71c6368"],["/tags/ls/index.html","4e752744905e26bbe9dfb50898aa2184"],["/tags/习题/index.html","26714c0a363f7ef0cd44e69a738c9b96"],["/tags/交换原理/index.html","f487a08699bb604560cf460a442bbff0"],["/tags/人工智能/index.html","ae63779b3a5089a40aa0c955d3db86c3"],["/tags/信号量/index.html","6893d4ba5874418ca5fe201112200614"],["/tags/内存管理/index.html","a00e19d119da9aa520c0c0e62b7811cd"],["/tags/决策树/index.html","7554c3eea25b2dd28937ec1a13c51dd7"],["/tags/分治/index.html","8a1e1b4f098ad026ff7405d455e8cdc1"],["/tags/分类/index.html","414dc307a8628d0eb7cae9522f4d8357"],["/tags/动态规划/index.html","a27b8ed1ec7cb3ddfd8f45655cfaf06a"],["/tags/华为云/index.html","b2a1b41405d8115652e26fe3bf9f6378"],["/tags/单词计数/index.html","1f6bb3df98240aa0268b8ea443ecb699"],["/tags/可视化/index.html","137dbb0d143ef95b9686b18ac8e6f4af"],["/tags/同步互斥/index.html","3e09e3cd358cc956398355e2daac631b"],["/tags/大数据/index.html","8263bf1fe2a9e798428ccb8d3fb4e540"],["/tags/学堂在线/index.html","22f0ccd7248d79eea52701d552afa51a"],["/tags/实战/index.html","8285321006a62e4238710c4dec8906c7"],["/tags/实验/index.html","3078df042367dea61e8e9a0bee64623d"],["/tags/实验/page/2/index.html","529f2f12678534aab7d8ee1b1af45b82"],["/tags/小游戏/index.html","c64a87f85b64edeb4d9315021300d3d4"],["/tags/工程/index.html","bfee744e4ee4ecda8c4d687ba86b06a3"],["/tags/工程/page/2/index.html","3b184d4305c4afc15c18abdf1fb8d96f"],["/tags/手写识别/index.html","512405a539dca5779f306dc97c801625"],["/tags/拓展/index.html","e8a98f5d1161b74233d20aa21182c5c4"],["/tags/操作系统/index.html","cdc2a63504288defb4767fa8673307de"],["/tags/数据处理/index.html","83334dca883ca02c699faf0b8c616101"],["/tags/日志分析/index.html","cdcfc48fc9c42ab55270987d1abfc581"],["/tags/易错点/index.html","57219121cd36516944856e693c4158ad"],["/tags/机器学习/index.html","ea485844d3590c5cfcf0805225ce306a"],["/tags/条件熵/index.html","be2384bd0ae51174cb2d04b9ebfc8400"],["/tags/正则表达式/index.html","6edbcd93b9a42dcd7632520952cbc917"],["/tags/汇编/index.html","5a5f890dc74f3ee04af99e7243125fbe"],["/tags/流计算/index.html","515da88ad518a7f9b9f9b1cc71b7ed28"],["/tags/爬虫/index.html","1481f4dc3d88b30badfc0054e8112b81"],["/tags/现代交换原理/index.html","51d6118ba27220261fe3cbd88a5854c9"],["/tags/生产者消费者/index.html","291b758cd801e8633a1ebf854251dbb0"],["/tags/知识/index.html","f48851bd46fe0badf9836ca4c16b1e6d"],["/tags/算法设计/index.html","3116dbb268f603b9b694f93f0127d7d2"],["/tags/线程/index.html","0de869caeb31fd7eb49b0e8c51e50721"],["/tags/编译原理/index.html","985a0ea71798daee7bf328c236cd4080"],["/tags/网课/index.html","ce2fcb45a4d2e4474b8ae3585783ec2b"],["/tags/聚类/index.html","756be41eea30e09c333305f7508a1b59"],["/tags/脚本/index.html","5e36be661a60f87d99a1881c3628e734"],["/tags/计算机系统结构/index.html","c704d8abb9b3e8e2866535d0f5b62fae"],["/tags/计算机组成原理/index.html","ad500889d4d45102f13a3745917ef793"],["/tags/计算机网络/index.html","1e25b618e20eebb52bcb2e356d6d5a1e"],["/tags/词法分析/index.html","26ea49de28e5793875366cdd4b0df310"],["/tags/语法分析/index.html","bcb593d52b5fe28a5418e5e82f7c5d48"],["/tags/读者写者/index.html","64803fb684bcb1b42d38462e4fe8f56b"],["/tags/课程/index.html","07633be133a70aa67eba1640560cff66"],["/tags/起名字/index.html","9172d316a5feb3cc93483231fac01afb"],["/tags/软件工程/index.html","0657f92800c32735b35d4cf6e3792785"],["/tags/进程/index.html","068ff3514a0579decb064b13071f2320"],["/tags/通信/index.html","6a4553538817ab6e6450b9e488880659"],["/tags/遍历目录/index.html","3bdd629c771d9f172c2d4513703de99f"],["/tags/难点/index.html","ce8de304679a5808ea9a8bb1385aa098"],["/tags/项目/index.html","8e76bb09ad1c10087ed5aef8b8171a61"]];
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
