/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","1d303e871d36f912a36e8442d13d23ab"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","311ab44ea57a0f7fa9e9cb357394ffb3"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","01c52d9cedcc1c3cd6e926d061900b03"],["/2020/03/26/计算机系统结构-实验1和2-遇到的问题/index.html","107af61ee9861f59b17affb3e00adfe3"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","e82b1b68d0c51b86a3d2a37314bfdef1"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","0a5bbbad066229a86e7c96ae8f51470f"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","0ef9b6c54ec6a043baa21a99be0d1ece"],["/2020/04/18/机器学习-知识拓展-条件熵/index.html","c82407d552d39756cefaf48c2c46ba6b"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","b16b90d996575c359047986035b2c57c"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","39da98d11f994f25b05a76bf53e0f687"],["/2020/04/26/机器学习-实验-决策树/index.html","003c5735f20774cee97adf533a6104bc"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","0be23a5e84a1b883d0c1372183d61263"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","09f1c653d1ce80a39add63aacd7c05e3"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","9790bbc6aac577d8df08a8f005724cfc"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","4ce9fdc2737e5ae8210dcce4c473555f"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","c012bd7407bd36b41a87b37223eceb82"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","5c9532dfde320ec3599672d6b22090d0"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","4a0ace3001ee2657491abff8498d8e22"],["/2020/06/11/机器学习-实验-DNN-手写识别/index.html","ab7c54575dd6d6f303328bd741f22797"],["/2020/06/18/大数据-习题/index.html","c94e2af0a703c6ce4a5bde83fb88cfd1"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","7001f54be364c4b6d41e919f64125185"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","0f26af25acf4abf5b4429a42aa443bb1"],["/2020/06/24/Linux-拓展学习/index.html","f5ef1150ecb0bf3c9b091e427adde3d3"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","97edd382e1385d7c61efeaa28864a935"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","6f7d0c389c148cef6b5bf3913d3de9a1"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","da8dd976d8fcd86e20dc30f99129afbd"],["/2020/07/15/C和C++的struct使用总结/index.html","c0ce3ba60e22cff148e7f887f5cc6645"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","7b67d79cb3f42e34eb4d89e3f9894199"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","70a1fe9cc20bb78658c73baec819265c"],["/2020/08/10/机器学习-实验-花卉识别/index.html","2073e497a516505726ba0e248a73e8fe"],["/2020/08/15/Python-项目集锦/index.html","4f4fd9d0a4197cb80fc60b6435bd1296"],["/2020/09/01/编译原理-词法分析/index.html","bca12113db475edbebc3a773627c646c"],["/2020/09/02/编译原理-语法分析-LL1/index.html","ac6c77715599d6ca0243f018179e42e7"],["/2020/09/02/编译原理-语法分析-LR/index.html","d2fbea5ff9f50de368b508f0905883d8"],["/2020/09/03/操作系统-内存管理/index.html","afdc309af531ff0e455998eaf6c475d7"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","1c93f52ef0fd8eb5564185cec96d888c"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","3f16a076585419591cd964c4676e7f6a"],["/2020/09/04/CSAPP-实验集锦/index.html","b49b64cc499f7b5bdfa446454246e1f2"],["/2020/09/10/计算机网络-实验集锦/index.html","a7fa9054387301db44185236ad56c36c"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","380f986c4e3d77851aa8f9093f6f0964"],["/2020/09/30/C++工程项目-JobShop/index.html","e68a101d60f7c996e5807112b5df295e"],["/2020/10/09/交换原理-实验1-时间表调度实验/index.html","ffa9868d41d202aa985220f7390e7f79"],["/2020/10/09/交换原理-实验2-摘挂机检测实验/index.html","310340a891ac8a5521d3b6a898cc9847"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","094901e9b5209bbff86578a9e360e1ec"],["/2020/10/09/交换原理-实验4-拨打SIP电话/index.html","baa9bdb1e3fa2364144dc0c998a17b04"],["/2021/01/04/Android-项目集锦/index.html","320015fa56c2c6851bcde79a191a5cc0"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","47792a309260bdaadd705703d8dc3bce"],["/2021/01/04/C++工程项目-travel/index.html","5c0bd70c0072741eb3fe284416426fa1"],["/2021/01/04/算法设计-分治-最接近点对/index.html","e463204b6184dc0af16cc37870715d43"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","6908ae906536448af97645b55b8dc9ff"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","17ccf8b60dd052e9fe12fbd596ac2133"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","54501dbf2fd99fbecd08b30f4f55245d"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","690e5c6996e8095dbf9a873cb4fb3317"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","7d4cf33a6b30a6635aaa333cf1afbd45"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","b30dc796b55fdd386cbc649f7517fcb2"],["/404.html","9ca27b2dbffd5146605b43c8a4c81259"],["/about/index.html","15579be5130a768519e764f1116183d8"],["/archives/2020/02/index.html","13ba047415663988b1b3bca18b617084"],["/archives/2020/03/index.html","5c0ee9801a1ec13e04d971c787cba021"],["/archives/2020/04/index.html","287668ac275e46d1a03af76f54f9112d"],["/archives/2020/05/index.html","8fb04548446a6c6a57008e68627d5740"],["/archives/2020/06/index.html","f3191f5d08475c6585cbcb34418d9324"],["/archives/2020/07/index.html","621380ae4c16121ba7081372d10c1148"],["/archives/2020/08/index.html","d4e6d2fe4899fe5763fadeeb871d531d"],["/archives/2020/09/index.html","b7e8b8e5f5d5d33af790f0870c954a6b"],["/archives/2020/10/index.html","5587d877704e51e24b33bf47f8352d6b"],["/archives/2020/index.html","d667d4e3c6a5809eb8afd2e0391b1050"],["/archives/2020/page/2/index.html","8b03198babb69fcdffb95eabd5a8a5aa"],["/archives/2020/page/3/index.html","f41f14cac90f9c159a210cae3869137b"],["/archives/2020/page/4/index.html","5d878acf87aefd628a95959689d90806"],["/archives/2020/page/5/index.html","7bd2a91a122ec10ed92626b346ae378f"],["/archives/2021/01/index.html","5c6ba1764baf232023dc9f5fe24c26ef"],["/archives/2021/index.html","e2ffb097b0134c25df0ce9dbf98f53b6"],["/archives/index.html","bfe10fbbdf24bbd04b2875f1042b013c"],["/archives/page/2/index.html","610c7cff59208c23387f36f11689a575"],["/archives/page/3/index.html","610c7cff59208c23387f36f11689a575"],["/archives/page/4/index.html","610c7cff59208c23387f36f11689a575"],["/archives/page/5/index.html","610c7cff59208c23387f36f11689a575"],["/archives/page/6/index.html","610c7cff59208c23387f36f11689a575"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/categories/C-C/index.html","04bdfb836619166ef47d8ad61cc746df"],["/categories/C-C/page/2/index.html","deb518e29d2b5a0e7411f86da0915e48"],["/categories/C-C/拓展学习/index.html","00c9c306ec3362792c2838cc84b4b816"],["/categories/C-C/操作系统/index.html","5cd4cc2e5d04eb9f7911f7bf0e0c0238"],["/categories/C-C/算法设计/index.html","8f055b0a5c92651a39a4d0853c808fae"],["/categories/C-C/编译原理/index.html","66b39661bbb2c6e5fb8596e58b632d19"],["/categories/C-C/软件工程/index.html","85673f322ccc92518341c1e15af130ee"],["/categories/C-C/项目/index.html","05240e19945e6125dee18926afc42a31"],["/categories/Java/Android项目/index.html","e7711503d23354db5f741d28aa64d5f6"],["/categories/Java/index.html","27b07953c84511ec341b0078f0b57b6f"],["/categories/Linux/index.html","58d94c220d9dc3e893edd4b8e16e70a0"],["/categories/Linux/上机实战/index.html","902323b72d1018f21079a2065e1e0fac"],["/categories/Linux/习题/index.html","fe305b2aedb948ce81d14fb92cac40cc"],["/categories/Linux/拓展学习/index.html","24362c9ff82bb9cd104cb708b645985d"],["/categories/Python/index.html","3f9b333e9aea62a380dbc9ba12f86ca7"],["/categories/Python/爬虫/index.html","50f7b8af1d3a7d525459617b9eca5e65"],["/categories/index.html","4b5ce7a390a82f84b329d57e578a2719"],["/categories/交换原理/index.html","a784c5b5dc26e5861c601180fbcae4de"],["/categories/交换原理/实验/index.html","660ba84efacc26fb252a9d262e624675"],["/categories/其他/index.html","153690cc45b4f5738a89e1f445ae810b"],["/categories/大数据/index.html","162687cb34482cf5916362d2ac5b6a8c"],["/categories/大数据/习题/index.html","897cb28be5b4fa3b5e89dce97fa45abc"],["/categories/大数据/实战/index.html","94cbb44631ee8067035a04f46f1cc60f"],["/categories/机器学习/index.html","4697033e778396968896e220d157cabd"],["/categories/机器学习/实验/index.html","f9aa2eb3f1325233210c4a546e1e088c"],["/categories/机器学习/知识拓展/index.html","ac11f0e4c93e2692811d6ffd7cca5a6d"],["/categories/现代交换原理/index.html","a3c323cd8b1508f70e10469f9e2b453a"],["/categories/现代交换原理/习题/index.html","ec0ab74b2ca176d6427f7e4fd93be85e"],["/categories/计算机系统结构/index.html","ad37f431d0c1ae8d08593542e1a4bf0c"],["/categories/计算机系统结构/实验/index.html","343d4d88c3355f0c08923f63c4395ac0"],["/categories/计算机组成原理/index.html","01cf657a7d8bcd72114e60386c5f535e"],["/categories/计算机组成原理/实验/index.html","b3cf3c630ed631bc16a626e6cac1a4d0"],["/categories/计算机网络/index.html","82caf38225dbd4873824d505f1702a36"],["/categories/计算机网络/实验/index.html","4d5bb2e1c3299dbeabdb9203211b9a67"],["/categories/集锦/Android/index.html","d7746aec8d7908debad83c335e55e531"],["/categories/集锦/CSAPP/index.html","0eb6dc82aa85ba37f5eb6de5d416f6a5"],["/categories/集锦/Python/index.html","2d9c15c0e96b4419d7ee3507a136170d"],["/categories/集锦/index.html","6c594e837017da69eccee4b9b3ac3189"],["/css/first.css","01a90baf99fa8f190becabd973782198"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/style.css","29bd14d027343cdf06b66cce6bf66453"],["/friends/index.html","128f74c90891550c9e2ffe75ac233495"],["/gallery/index.html","63f4bc7639ebb10460b077618443184f"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/games/tank/index.html","a4a2448b8b53e14bf7bad5c1f71e614a"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","6f2657448c98c0c4cc14d2e7a81836eb"],["/js/aplayer.js","6e605f0855251e101d3024646f3eac60"],["/js/app.js","1948329f2fd7e750ade4bdc49138c09b"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","80733ab18bb3b609b31139ab0f73c95a"],["/page/2/index.html","44d857437525d80ad8ec522ec63fa2ff"],["/page/3/index.html","11e46c7f2f5b38ca5f063b27566a9f1e"],["/page/4/index.html","ff2aa164cd7501ee35bed63ff7afef91"],["/page/5/index.html","7e7393e3747d0f0d1b9f5a5abbad7601"],["/page/6/index.html","68fc2999b77d34cf0107a01d86972563"],["/shuoshuo/index.html","62c0d8b87185cc7e630d13d6d27ac9f2"],["/sw-register.js","d0e196bb19d73831e7381c3b729d3168"],["/tags/AI/index.html","ca228ff917e0388018ed1f6027e730da"],["/tags/Android/index.html","d3ee032d954ef139233650e7e52e2b88"],["/tags/C/index.html","e428279c3628a4d3b99f87cd4db47b52"],["/tags/C/page/2/index.html","89eab1ccf73beb80d27b976acea6bbff"],["/tags/C99/index.html","a540f267da0b7e196a480b24303d6cbd"],["/tags/CSAPP/index.html","95c416ac52e94e627a4b4a917f7bdae7"],["/tags/DNN/index.html","1684e958a35098ec47dc21327f21bae8"],["/tags/DNS/index.html","0ad9e489b74b8a40c14356559aaaf755"],["/tags/FPGA/index.html","4dfd66b5d9b0916818eef251b4ed4228"],["/tags/HDFS/index.html","62023b9aa81bcd212698586e3da8db1c"],["/tags/Java/index.html","a2a2a1a734a8e1da241b9af617fbb474"],["/tags/JobShop/index.html","308f5edd948686095bb770c8359257c5"],["/tags/K-Means/index.html","5ad93731dcda053972f17faad85677f3"],["/tags/Kafka/index.html","7f09c6a97d0e5441caa142f75bd48d9e"],["/tags/LL1/index.html","99e35e9598a211ef7f8b4573a1c26396"],["/tags/LR/index.html","06b35970a384bf45ceaeb3873348d33d"],["/tags/Linux/index.html","95bb0e10d8fec43be5b32baca41bef0f"],["/tags/MIPS/index.html","b01d5cc59dc04c36ab92d0bcb9a4e495"],["/tags/MOOC/index.html","8c833d78e6170d1430371ecda7fe972c"],["/tags/MPLS/index.html","8aad385f34957b4b7afdb33cc5ffb9cd"],["/tags/MapReduce/index.html","0e9f63ce1633b52c48532a06061016d8"],["/tags/Matplotlib/index.html","eb19b34d07e821b4f4f60d821d95d710"],["/tags/MiniSYS/index.html","33c9f5a0b2c2bc2c4313a79f5fbb962b"],["/tags/Python/index.html","c12b591b0b8d1cf7a74ac70b444b7716"],["/tags/QT/index.html","d05846cc29f3d5b03154f0a1b2a65c34"],["/tags/RNN/index.html","895a7e4b14f1a5194415401448c9a3f4"],["/tags/SIP/index.html","fc41bb48fdac906574cef5615084d579"],["/tags/Scala/index.html","e988521575dcb3f82537a4febc131753"],["/tags/Shell/index.html","10245690aea482c54893d1f4ee5fd056"],["/tags/Spark/index.html","1c7453d2ea5227f443e1b9b81479b381"],["/tags/Streaming/index.html","fe1060e2e52040ebb8139160f82a5d49"],["/tags/Struct/index.html","65d8e9e2dc6e560486bb9232a9390299"],["/tags/Verilog/index.html","7523cb93874877801f994e6cc53a2393"],["/tags/first/index.html","5a7b02b310ea044ff04ea175850ffbec"],["/tags/iPython/index.html","4a2c9a8538a116a7a5d02e24e1d57c97"],["/tags/index.html","3e5f7dca1fe7778c273f6c4f0ed7fd15"],["/tags/ls/index.html","114e07a05f572020b313397d9f88fe08"],["/tags/习题/index.html","2b406df6e04c22a4894a997248790b73"],["/tags/交换原理/index.html","32afc80e34a8b821a9fae550e51e75a5"],["/tags/人工智能/index.html","a68b9c1e95dfd8d6105fa69cf6c424bc"],["/tags/信号量/index.html","b3c6e590c538c2b7c5893e4750737f97"],["/tags/内存管理/index.html","24d736c5e10d1e438f8b24fc474e0c9f"],["/tags/决策树/index.html","b4cfb7194888d028cba2daa55044fc37"],["/tags/分治/index.html","ce20dbf259c5f517ca50f04a208c1a71"],["/tags/分类/index.html","8fbbb320e22459b3a77e47831aed48bd"],["/tags/动态规划/index.html","67ee249d46e3e95e45567fc890242f55"],["/tags/华为云/index.html","064d19ae1d84619a4eda25f682ba82c3"],["/tags/单词计数/index.html","ef90c10a2ed384ca26111d3fa11768b8"],["/tags/可视化/index.html","fac23dd874984d8062a9c1098d89468f"],["/tags/同步互斥/index.html","cdbb1624bc70333572982692451e8bf5"],["/tags/大数据/index.html","c2f227aa68a55a0ab917fbcddc739001"],["/tags/学堂在线/index.html","74e79ac5dc94f111cf3ab30841941b7b"],["/tags/实战/index.html","187a0cc23bb91d30a70457bfc20512d3"],["/tags/实验/index.html","3f0e815a6f8da6ee97742c7f5f68b4f0"],["/tags/实验/page/2/index.html","93ea793f52abd4574efec5280055ac76"],["/tags/小游戏/index.html","0f694af6d4bb39d934be66ea7040f368"],["/tags/工程/index.html","0199f093b8708888a4b0f90461c6ba0e"],["/tags/工程/page/2/index.html","1ad39ace5e18e789bb48516a93d1e0b4"],["/tags/手写识别/index.html","fc1aebca0534830a6bad24252e926645"],["/tags/拓展/index.html","12fe879df10315df4306829ba1bece96"],["/tags/操作系统/index.html","2cef97be58fd6db630e683bf0b1d559b"],["/tags/数据处理/index.html","7c05d1612fc4dc9c025466cec98f6f62"],["/tags/日志分析/index.html","0b66d7a1c7cba498b22791c3ffe8e62e"],["/tags/易错点/index.html","9faf7d73cbf16d066550c9e7bbce9f1f"],["/tags/机器学习/index.html","21c7a712f17db70579700c0da82a2f9b"],["/tags/条件熵/index.html","fc426f79c10e619fa3643a3e36156689"],["/tags/正则表达式/index.html","db6ddc45173baa62dac1d059b6411086"],["/tags/汇编/index.html","0825dd70d986aca3a0a0224b0d7d17cf"],["/tags/流计算/index.html","c28ae09c012652eef4b99cfe4eeabb8c"],["/tags/爬虫/index.html","3ca217c4e7b1cd2e26188cf4d0a9d2d0"],["/tags/现代交换原理/index.html","b5903c401bd0cf64a255283745708619"],["/tags/生产者消费者/index.html","2630e95d2cc8139a59df5c8c1d34e996"],["/tags/知识/index.html","6f1c1e5fd835843c79906092d4565d3b"],["/tags/算法设计/index.html","16b50b525f9fdd13344596f27204fa6a"],["/tags/线程/index.html","02be66b13a0ee90f8e02fbf557424133"],["/tags/编译原理/index.html","a12e2fde5bcc907ec572dda6e0dbcd97"],["/tags/网课/index.html","8e8a5c4967d96d780fc0657630f88333"],["/tags/聚类/index.html","420b175aed996da1f9c97f89fd7539bc"],["/tags/脚本/index.html","b1d31374274747a3b198a0e81dbde61c"],["/tags/计算机系统结构/index.html","43486f3f3f00a8e50d6463d24524f22e"],["/tags/计算机组成原理/index.html","c35052bda54b1066aa487fc98893b440"],["/tags/计算机网络/index.html","25e7c44a49c3800697457b8a088cea75"],["/tags/词法分析/index.html","88b041bb8bbef0113e7dd1aa93cb51ac"],["/tags/语法分析/index.html","5988d196ffb1c35299bb7477bcfb19f3"],["/tags/读者写者/index.html","06d576897d34e80d49a0a8eb04794bae"],["/tags/课程/index.html","88a069920d29618714a1b03124f4573b"],["/tags/起名字/index.html","8df6594ba06da4f3296f2e8c4dd70f87"],["/tags/软件工程/index.html","f22ad2e784fd13995248c133a5ffbd6e"],["/tags/进程/index.html","813a0ca835841d268e0ba1473c6083fa"],["/tags/通信/index.html","383f37a0c3c85d007c17e405a3c8d790"],["/tags/遍历目录/index.html","cee4f575f75d464bab70a0244d46a593"],["/tags/难点/index.html","713706f78937387b40b938c7beec4208"],["/tags/项目/index.html","7a143f6ce6e358de3162dab7777850c3"]];
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
