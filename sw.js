/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","a61b12d0c83a49deb094f2db3bf1c0d9"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","d6ec1f8bb4f35ff3825b173a136755dc"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","cd0eebe2a8bdd4b6083068341764b56a"],["/2020/03/26/计算机系统结构-实验1和2-遇到的问题/index.html","3436ba3dc456dbf9a7403591672da37b"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","781e3b303b80de2ba823d6f09763c5f6"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","a129bb8dfa4dfac8ce35e31ba34df577"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","08ec080d9a24a658af678546661e7719"],["/2020/04/18/机器学习-知识拓展-条件熵/index.html","f5fefd1d05e177ae01e2f841ab127514"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","94e52569fc81ef1b8c2d64ad4001fc74"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","e9ec12d5ccf0236e7dd970d97b2e4d92"],["/2020/04/26/机器学习-实验-决策树/index.html","a0a4d6e29235e3d06a359a19176ba06a"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","0c4703e92bb76b64a2e4fae7d7e6e19e"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","53fce8dffcd3d00f090d2d7ffb0c158b"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","aafe8188a907ebe4c404750181f38600"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","a237131871ec13ac28e5c7774ff141c8"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","a1b2fb74595913d176822f8a125f145d"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","f6488092c05d9944ab2fbe184796e0a5"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","fa7985c0910941971cc58710175beec0"],["/2020/06/11/机器学习-实验-DNN-手写识别/index.html","a1620c3c87233299fbb19bac41d11474"],["/2020/06/18/大数据-习题/index.html","fa071640cde54171c0777595b87272b3"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","8c3c9cca34800e4bb3e1a74979cdac3a"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","dab56ecf02db69e1616b33ace4c2149c"],["/2020/06/24/Linux-拓展学习/index.html","a51f98eb833a9a4bc040283d3777566e"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","b29e1482e2b6cc987dc3f7888307d10f"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","ecc33547e4e31400c6311ae85ca232dd"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","dd0eb175b4c195a7cefe8e05f8a46e62"],["/2020/07/15/C和C++的struct使用总结/index.html","75a9861c3b02dbe210655410738c7f81"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","92d67047ae539442f90e1fb450a6386a"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","8b72baa6f3b83fe23a7d1cb3bbfaf026"],["/2020/08/10/机器学习-实验-花卉识别/index.html","12e5026c61b3d8d45f58153ab7843a5f"],["/2020/08/15/Python-项目集锦/index.html","a31ce6e23bb94fb9ab4cd25efffb7410"],["/2020/09/01/编译原理-词法分析/index.html","12d73397ba11588f2892a64fbdb626f6"],["/2020/09/02/编译原理-语法分析-LL1/index.html","04e8e9b991aef49861fa06eb953dd262"],["/2020/09/02/编译原理-语法分析-LR/index.html","f5548edbd91de6b65f833eea09d5d6df"],["/2020/09/03/操作系统-内存管理/index.html","092567c3d6325fb66aac049993e87019"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","c1708f8120627a958fbcb721b8044b2c"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","95c0a878ff483c66d4f3d064d2d5dc5b"],["/2020/09/04/CSAPP-实验集锦/index.html","b7fbc8759182c108f84c05ec4e573657"],["/2020/09/10/计算机网络-实验集锦/index.html","4fc94aaf9d1506818f5a8d573361bfc2"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","ae44e7a8b2c10502e70b01e4604a9e51"],["/2020/09/30/C++工程项目-JobShop/index.html","0a6d800a5576fa655ddc403c8bc329a8"],["/2020/10/09/交换原理-实验1-时间表调度实验/index.html","68742de3545c34381db12a30e66ea30a"],["/2020/10/09/交换原理-实验2-摘挂机检测实验/index.html","917a1f929ef1d1272316ec3de2fde99b"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","2e388db18350c89053a0826d09d75a09"],["/2020/10/09/交换原理-实验4-拨打SIP电话/index.html","0525509f8cdbdbfb1a061d72ff3e5b16"],["/2021/01/04/Android-项目集锦/index.html","507bf858f8f43931170874dd4823ad60"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","82bb90e2af68293bcb4cf78904e75d57"],["/2021/01/04/C++工程项目-travel/index.html","8eff57cca0cde4ec82567c4189494342"],["/2021/01/04/算法设计-分治-最接近点对/index.html","f7ffe3dd0ba9ba2c1bc0f0e57085a276"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","cdffcb512cbef605b9303b4b583dc0e8"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","9089d6025ef1847536161c0c020ece7a"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","23efece6c3078f49abdbf6f8cf78d909"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","a06a0540c826928f835ce244f3469f54"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","35420f752caa2aa5d469b9531ba96748"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","306897c0dbf7b00d6c7f30d3323c5c16"],["/404.html","bf42595b011f3973471c8521f6e62f00"],["/about/index.html","35d958fc182ed79c7424bab182d3a2c1"],["/archives/2020/02/index.html","6955065777478565c7d0fb64832a6ce4"],["/archives/2020/03/index.html","6e78eeac49b9dcf8ed03fb9c2e75508e"],["/archives/2020/04/index.html","f9643876fad053b970373125510924a9"],["/archives/2020/05/index.html","ff0b343a2284239f34a896d31deb5d98"],["/archives/2020/06/index.html","89903f4237bc5931577ba274c601a83c"],["/archives/2020/07/index.html","21e1995c8074bb4593a5d803d802eba5"],["/archives/2020/08/index.html","59936acf82f91107499e36368f701566"],["/archives/2020/09/index.html","c23efb6612a0c2c2c5964ffbaac5addb"],["/archives/2020/10/index.html","c95c2c0742511fa7e301b2917cd08353"],["/archives/2020/index.html","bca000c010fea34141c0e1ddc8741245"],["/archives/2020/page/2/index.html","a9aade4ad00db364f0872fa0a1e483a6"],["/archives/2020/page/3/index.html","7dec4cb6e4cac47f8548017021196855"],["/archives/2020/page/4/index.html","017c46a65a9433e888d8dde2f26b2ab1"],["/archives/2020/page/5/index.html","5ce824828cb499b1fe4706deae911039"],["/archives/2021/01/index.html","0bc2f0a24c0f84e7a00fb371a5569639"],["/archives/2021/index.html","0082d2ad9db5c0b4eb09784b280d4924"],["/archives/index.html","b5de38885853e6f384a42227fb59a052"],["/archives/page/2/index.html","b5de38885853e6f384a42227fb59a052"],["/archives/page/3/index.html","b5de38885853e6f384a42227fb59a052"],["/archives/page/4/index.html","b5de38885853e6f384a42227fb59a052"],["/archives/page/5/index.html","b5de38885853e6f384a42227fb59a052"],["/archives/page/6/index.html","b5de38885853e6f384a42227fb59a052"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/bb/index.html","6f55090b760a42fa504d774c29597aa3"],["/categories/C-C/index.html","1c17f8f186f88b6cd595b87466b2e7d6"],["/categories/C-C/page/2/index.html","a21540b051e0170f9ac2a48fa64ed737"],["/categories/C-C/拓展学习/index.html","3d63b5a9c73f1b6f9bfc2d39d14d3162"],["/categories/C-C/操作系统/index.html","430eef257723c584fcd06c8e23ec07f9"],["/categories/C-C/算法设计/index.html","abb1a4032770e37eadf52fbf03e3af99"],["/categories/C-C/编译原理/index.html","b45b6ab1d5e4bd3a677a2caa70f02561"],["/categories/C-C/软件工程/index.html","8d223281408056a6e6d78b921e76cd5f"],["/categories/C-C/项目/index.html","9f14131cd57e3b69c8c43cc2c490ef42"],["/categories/Java/Android项目/index.html","5bf87681363df5f6b1cb943edf730715"],["/categories/Java/index.html","eba69a783520c6815cc4d82cb1fbd61f"],["/categories/Linux/index.html","c25fa18ed1b8e0ea4c23b43c3392d63e"],["/categories/Linux/上机实战/index.html","fe11ed3959ae61c4f4fa009a26d257ed"],["/categories/Linux/习题/index.html","6af3c221d10b3da078e94ae2af38b7fb"],["/categories/Linux/拓展学习/index.html","21be8d7cf49088cb8de8921af54064e5"],["/categories/Python/index.html","f6c49c40f2409b05ddce81f2feb9711a"],["/categories/Python/爬虫/index.html","b4e306e893f41e91474d6b0e342fad0c"],["/categories/index.html","77aff22334e18bcf3f061598ae125c00"],["/categories/交换原理/index.html","db0df35098c6004945ed58cfe283f462"],["/categories/交换原理/实验/index.html","9db084b736e16b2653ba866bc4524e92"],["/categories/其他/index.html","cbff5a32a6adc6ce12c31f629c4f465d"],["/categories/大数据/index.html","0ef99b2b36ea62f5376ca8224812d1a6"],["/categories/大数据/习题/index.html","ab322bf9b27dd13bf6597bbdfcffb007"],["/categories/大数据/实战/index.html","6eabcb094e51b9defae227bafbfb399d"],["/categories/机器学习/index.html","c81d66cc0f7ea533ae055674496a7bcb"],["/categories/机器学习/实验/index.html","d7acc69b71c963c710d4fa93c1782ede"],["/categories/机器学习/知识拓展/index.html","24991559daaff79c15e9cf9494f57d06"],["/categories/现代交换原理/index.html","fa1db9e7574790f504e249d2846b7fbb"],["/categories/现代交换原理/习题/index.html","840d7f762cd37812d7684f02ce7b2d3d"],["/categories/计算机系统结构/index.html","486a54935fb3aad1ee97d019c6be6926"],["/categories/计算机系统结构/实验/index.html","2a952eaa3dbab5dbbf3ccd50cfa952db"],["/categories/计算机组成原理/index.html","c96de2c9aac2bf7c6975413edf5fa00b"],["/categories/计算机组成原理/实验/index.html","d70098da16846561b5bc073c332b826d"],["/categories/计算机网络/index.html","21d3e68795ebfcab37222cd39e3c8a3b"],["/categories/计算机网络/实验/index.html","2d8a42a794dd8b37c7170e48d4c847a7"],["/categories/集锦/Android/index.html","4d580093c0e8d37a06b53eab8df4c383"],["/categories/集锦/CSAPP/index.html","12b612ca79d84d2159a97847b32ef2c2"],["/categories/集锦/Python/index.html","8883fc4ee6ee173d51815abd1f0205ab"],["/categories/集锦/index.html","38762c68311a3d8c819e8b93383c20e2"],["/css/first.css","01a90baf99fa8f190becabd973782198"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/style.css","ea27919e2de6612a3e5cd178fe81c25d"],["/friends/index.html","dc1f17d722008f39b6bc1a4916c3f620"],["/gallery/index.html","63f4bc7639ebb10460b077618443184f"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/games/tank/index.html","a4a2448b8b53e14bf7bad5c1f71e614a"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","caa3c9a525ecaa69c1a9152297257c7f"],["/js/aplayer.js","6e605f0855251e101d3024646f3eac60"],["/js/app.js","1948329f2fd7e750ade4bdc49138c09b"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","b619e8b405eb284b934c5f3d0ff8fa37"],["/page/2/index.html","24a7e9d31507507033758745b241cd68"],["/page/3/index.html","225370c847c3cf99e822b0fcf62ab413"],["/page/4/index.html","947be4c21b171bdd968def0a13e6a14d"],["/page/5/index.html","6d77566b3923e5e02d32c85e7092adae"],["/page/6/index.html","c7b53fbd75a8ed8b067468641ffab1ad"],["/shuoshuo/index.html","422f7ca85dbaa0bbe82970c780ed9bd4"],["/sw-register.js","eaf7f44d2f2feef5a3e5027a93669802"],["/tags/AI/index.html","04288cab148103129ece83efebde653f"],["/tags/Android/index.html","1e3c6a0ff98acd94584841269adc6721"],["/tags/C/index.html","16934f319b18565ee4f3175a5c43d625"],["/tags/C/page/2/index.html","a97c264a84faf4d65cd82f90a9de3aa0"],["/tags/C99/index.html","0e8c71262bc537a72703e577e052229a"],["/tags/CSAPP/index.html","6c7a0e9c965d9bb9150ab3fb7fb4ae8f"],["/tags/DNN/index.html","783a9d367b5a79666469806682bad66b"],["/tags/DNS/index.html","7adf8dde24329ce7dfc90d2328fbf7da"],["/tags/FPGA/index.html","1945fb8b65b45ec1ceac0e6187558fc5"],["/tags/HDFS/index.html","6337e36d6aef7c057965eb7116d8c047"],["/tags/Java/index.html","742e88c64156d33935077bebe3df8360"],["/tags/JobShop/index.html","1a587a3a364ecb56d41bdc36a234932a"],["/tags/K-Means/index.html","26503b7e3a29ff342f8bc5f1f37d25e5"],["/tags/Kafka/index.html","cbd564fe7da903475a044a5c4e075a26"],["/tags/LL1/index.html","30c01c92841273ff26ae870888bdd199"],["/tags/LR/index.html","110204cb86128951605949affc0705ee"],["/tags/Linux/index.html","90c313054b2fc7213c780fdf097c8826"],["/tags/MIPS/index.html","68956bea48b64cc3afa3c800ef04bed8"],["/tags/MOOC/index.html","e5a0193fe1f7a0057d4da24353d59ad8"],["/tags/MPLS/index.html","20de15815817849fb19eded4a0b153b2"],["/tags/MapReduce/index.html","54a0e540cb3974b27b5d1ea82fd3308a"],["/tags/Matplotlib/index.html","91758cea7f39df0ad9206c6d8fcea719"],["/tags/MiniSYS/index.html","4a3b4a3fd148610f2936092eaa007b09"],["/tags/Python/index.html","153b2772faa0113a19540d11c645ecad"],["/tags/QT/index.html","3115a5ab6ee10c852719aa09590378fe"],["/tags/RNN/index.html","6abed965ad55e0a05d5fbe4421fa34fd"],["/tags/SIP/index.html","453b218e6cb566735aff0c6bf3448f9d"],["/tags/Scala/index.html","ebe4a00835b5a9b1b6bd54bf040373b5"],["/tags/Shell/index.html","248684d50cb9e13091510ab0c46a4aed"],["/tags/Spark/index.html","af047ca65e2eb29905a448d52651cda2"],["/tags/Streaming/index.html","3e086ca6a27bb72efd2d037a990ba571"],["/tags/Struct/index.html","85600eb4268047faea89e5128a834479"],["/tags/Verilog/index.html","ad11a25071ea15e78204d79416b69788"],["/tags/first/index.html","37734530702b5e979d4d373024c4f314"],["/tags/iPython/index.html","9009b319e896e61d1d1d017f80685824"],["/tags/index.html","05cab08810988a75a744cefdbb22167d"],["/tags/ls/index.html","be4d90bb26e7d52b1836a0a264f12de6"],["/tags/习题/index.html","eb5365b293350ee06ae8804b7d978e11"],["/tags/交换原理/index.html","edcdc90cf2e3b99732354c8332998edd"],["/tags/人工智能/index.html","1ab7c2f5d8febaef915288fcbf27e2ad"],["/tags/信号量/index.html","8a4e5c9f90ccae78d715ab89f1e77233"],["/tags/内存管理/index.html","cecbdeb3749514542e6deee633ac1112"],["/tags/决策树/index.html","b2a5ea6494e4d7852c8836a11e93af51"],["/tags/分治/index.html","44de3ea197a02437c63f1f348601cef2"],["/tags/分类/index.html","38c7367a64ba535fefd966d1a8726745"],["/tags/动态规划/index.html","a17c3a4e7a60dc5f4fc0df8b44876229"],["/tags/华为云/index.html","f39a88ec559e0d3cbaaa9fd417d56026"],["/tags/单词计数/index.html","f3eb1711cdaf836301e9419c98605bd3"],["/tags/可视化/index.html","e992069e43c05d49279cb891c4839dab"],["/tags/同步互斥/index.html","0a702eca28e163e2a3aaea8981b434cb"],["/tags/大数据/index.html","af6195989fea6b9b6e97c066b756176d"],["/tags/学堂在线/index.html","58d968dcf6a5aa4ef79c678f12924d11"],["/tags/实战/index.html","c1b3288bcded14b08d826a5646824625"],["/tags/实验/index.html","b93c7a2fd3f2f3ad25561d983dc1b83a"],["/tags/实验/page/2/index.html","1c59c1ecdd9bee119c73c559839034ca"],["/tags/小游戏/index.html","211fa4cc91d6e2a53980ccd5f1280828"],["/tags/工程/index.html","53c730cd8ebb70403de5e6d013cbb504"],["/tags/工程/page/2/index.html","04a3b13df570e0c7cc5ba6d20c083ed5"],["/tags/手写识别/index.html","3e35f35fc7d360cfaf332a46c55a7c6b"],["/tags/拓展/index.html","b52ecf1923d56db528157e2d0aceda12"],["/tags/操作系统/index.html","d11d17e7969ffdf08c178235bbe865ea"],["/tags/数据处理/index.html","c29a867a8d010dc62c44ed77494a27d3"],["/tags/日志分析/index.html","20b48216709a01a1ef13a1b5f4290b81"],["/tags/易错点/index.html","69071f585086ff8819b2e9ea6923f630"],["/tags/机器学习/index.html","5ed6e7f0f288a9919879b03da192c517"],["/tags/条件熵/index.html","e3143d7121e6e2800d37bf1ae48339cb"],["/tags/正则表达式/index.html","c6e5a2bdab24a6e00fbfa14ba8710bf5"],["/tags/汇编/index.html","fa8ff91125cad83f2ad1cd1fab9646a1"],["/tags/流计算/index.html","0c9c5b07cbde97bc794ae30345f181b8"],["/tags/爬虫/index.html","c10ef80746229edc259114f070a3c97c"],["/tags/现代交换原理/index.html","24f3b1061f075d16f409e00d9bdaee8c"],["/tags/生产者消费者/index.html","11c170b5cd1cb8f79e8af5927f0eb974"],["/tags/知识/index.html","485b95268fcc899e5b5667156472f001"],["/tags/算法设计/index.html","d194a4e68f94e1eca7f7c06ace5b88f3"],["/tags/线程/index.html","81a69e60b72df223a3fc4475c2b960c6"],["/tags/编译原理/index.html","7b9f1a69609d73fd2445dcc64847b87f"],["/tags/网课/index.html","873d8e59db5e9b00f29d018030ca2fde"],["/tags/聚类/index.html","5af14343b2738953ca5cc994b573b13f"],["/tags/脚本/index.html","cb41d4d8cce72ac2b170388aa9a248ea"],["/tags/计算机系统结构/index.html","72568e060754317b187f6b565843be5c"],["/tags/计算机组成原理/index.html","501c4fcd411ae6ccd2b1393f1c3d69ec"],["/tags/计算机网络/index.html","9a14a77036a5151f87e710a99cd09b4a"],["/tags/词法分析/index.html","368cb4615644f86ba318ec1b383b960e"],["/tags/语法分析/index.html","9f788d2a7fb8e0cbcfe39086c207d592"],["/tags/读者写者/index.html","5b1a44b4bc3cf92416e32b1f8352b8f7"],["/tags/课程/index.html","a4201af16964c5eb67a807a209dd0f4d"],["/tags/起名字/index.html","6130e5584170130b35366fe4b6baee8a"],["/tags/软件工程/index.html","231282b0dedce40f8737ee4b576e9b67"],["/tags/进程/index.html","2a9d42911f103c2d8476c84c08cc5c6a"],["/tags/通信/index.html","f55bc12a66a44f3c0a8a451b064fff26"],["/tags/遍历目录/index.html","f98ac2720eb957482e307454be82a3a8"],["/tags/难点/index.html","dcb280c22692452c973f02713385028e"],["/tags/项目/index.html","c8cc6d9291fc989a29b98c10c256f8a1"]];
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
