/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","8e4e81a28dd01e469506aee1ba501047"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","634ef63e457668a72ced014d3a44d75e"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","9824b826f797f4f2e3ca36f7fac6908a"],["/2020/03/26/计算机系统结构-实验1&2-遇到的问题/index.html","2a2982783612346ff8dee4d9dea2eb8b"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","65597b78a0aebf452980a9ac6cbf2cd9"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","b5bc3e5b299e19b8fd9d2ae9a890ca01"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","1b400fce471a3611b79f6d4c3b9a2a47"],["/2020/04/18/机器学习-知识拓展-条件熵/index.html","4d2121f034167c5bf5768a3cdab9086d"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","ab5d1658080b0e8e146b897fef98da8d"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","869260a04cacc3218ee0810949f217e7"],["/2020/04/26/机器学习-实验-决策树/index.html","a9ab4d24ddca9670387f6cde006169f5"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","94b43764f57c378372269e5b5a1def94"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","d3bee1c459cd87940f890309c2927225"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","a5e85a7feef4619a1b302e6156661e8d"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","31c4af79c88ccc23683320a0207e2ff3"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","252683c1dff5c8060ac06b3644b83d17"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","fa7bce5695015d357fd5e70551a7d5da"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","4f7b752ab71c95e339f3c5f714948609"],["/2020/06/11/机器学习-实验-DNN-手写识别/index.html","aafd07b6e13090e5b211bd65be284c8f"],["/2020/06/18/大数据-习题/index.html","c8a5df40a8fc6e7cb9f0df4fbb906cba"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","efa8c2ddb8ffc7b59c32055bcea4b85f"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","99574101f49d2ac5aa0811a2da867b06"],["/2020/06/24/Linux-拓展学习/index.html","4dd9e3019bca549001b4688f36f9e78f"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","130a114ab68dba0c9e2b367213bf3895"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","3ee89656346e6ec4e44997237999ffda"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","4f9c28d99058e04b0a8604e4454f91ce"],["/2020/07/15/C和C++的struct使用总结/index.html","2f704f258b51569c29bcf71f74768166"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","5f4f07b327cf0bc90fd094c920bedff0"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","d39bc26cea6027a73cb629f4c286d1e1"],["/2020/08/10/机器学习-实验-花卉识别/index.html","c5184266409ca7e7757e41c57dfa519a"],["/2020/08/15/Python-项目集锦/index.html","312458ccf89fe1f3aa3d4e65f92dd854"],["/2020/09/01/编译原理-词法分析/index.html","78ae69f5858d0828f0c589a78176e4a7"],["/2020/09/02/编译原理-语法分析-LL1/index.html","b0a4411f1af18473284ca7e4f445f603"],["/2020/09/02/编译原理-语法分析-LR/index.html","94e09ceb62997a1efe82517ccfae64cf"],["/2020/09/03/操作系统-内存管理/index.html","7427592b489e3597601379eba709f7e8"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","be74411a3e72aba9494a188ff6e1ea01"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","87bcb17120ec956f481022ba1a37b129"],["/2020/09/04/CSAPP-实验集锦/index.html","f0a8e91d317df51fc0643ac5fc119cb9"],["/2020/09/10/计算机网络-实验集锦/index.html","14ac4d0cee37105bde7cf0372b0a5a2b"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","1f7cdd4275558ab62236117f7293185b"],["/2020/09/30/C++工程项目-JobShop/index.html","0bb6487cef948d205546dcbb264620e6"],["/2020/10/09/交换原理-实验1-时间表调度实验/index.html","a21e0a688d61229617de1e27189b9403"],["/2020/10/09/交换原理-实验2-摘挂机检测实验/index.html","8cfc68a74f90ebb05fd89c1d1dcc5511"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","d60c6278db6711717e25e9a650b77f15"],["/2020/10/09/交换原理-实验4-拨打SIP电话/index.html","e245a1c5ada01f43acbb5c7a5af8192f"],["/2021/01/04/Android-项目集锦/index.html","6ddffe39e0594e42105b61d3eeb245b1"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","934eef32b558301fb5266cf11f4320d5"],["/2021/01/04/C++工程项目-travel/index.html","4491c29fe0d151223d58d74bb64912a1"],["/2021/01/04/算法设计-分治-最接近点对/index.html","393eadb0140987215cc72aace44fd305"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","c980b3dc39dccb53a18111c87d3267dc"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","4b19345930c91d954719f5644a1415ff"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","48508c9d315cfd85656fe42ec1963336"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","182d2eefc44267e7e7bc24504257f9f4"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","5bbb1fe47f5bb0c8f9479464f536748e"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","dcc33872960d3f678043c7b017fb30cb"],["/404.html","2176cd23a2b35f1da70e08340988cbb7"],["/about/index.html","cbcbf312f43c4a46ab0f32704daa1191"],["/archives/2020/02/index.html","1271a3eb2bcabf13f4e5d5a35fd961a4"],["/archives/2020/03/index.html","b913a274ce9882391ac0ad08f475c42e"],["/archives/2020/04/index.html","a663d18a9741289cacda8af81483ebdc"],["/archives/2020/05/index.html","686362cc8de5d483b00405cb7d57e668"],["/archives/2020/06/index.html","7076ef535c8ce1c5b637923800b588a1"],["/archives/2020/07/index.html","88ce12f7785aa7b8376338cc4c1b7758"],["/archives/2020/08/index.html","e88657f183205218a078c201a6d2ae92"],["/archives/2020/09/index.html","ce5904229065a2e38b30635cad9373e5"],["/archives/2020/10/index.html","232b83fadfe9056984b09587a836730c"],["/archives/2020/index.html","120dea181166da036e8d2101ae44100c"],["/archives/2020/page/2/index.html","ce59d6bd5df9f2c52b4db597dde1d1f3"],["/archives/2020/page/3/index.html","6cdcdf8d26a1cac3cc494f7284f7a529"],["/archives/2020/page/4/index.html","7fcbf26358f86e8654e007d8bda71c8b"],["/archives/2020/page/5/index.html","9092931d550542cd911868750410d73a"],["/archives/2021/01/index.html","796329c9c58349fb3df79a914d927f98"],["/archives/2021/index.html","ebfa72e3d76e53a125a5c6cd0f6507f7"],["/archives/index.html","4c2857cc82bd924dee715f16e7adaf6b"],["/archives/page/2/index.html","4c2857cc82bd924dee715f16e7adaf6b"],["/archives/page/3/index.html","4c2857cc82bd924dee715f16e7adaf6b"],["/archives/page/4/index.html","4c2857cc82bd924dee715f16e7adaf6b"],["/archives/page/5/index.html","50c381686fe7d2c58dabb625365e81dc"],["/archives/page/6/index.html","50c381686fe7d2c58dabb625365e81dc"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/categories/C-C/index.html","a4448f2632c05b8d65846ac1d40cdf03"],["/categories/C-C/page/2/index.html","9cc26d2e963a93e8371e98c94964aa9b"],["/categories/C-C/拓展学习/index.html","513c76976a4f20351c46b311d54455ac"],["/categories/C-C/操作系统/index.html","dd065b3f6df287ec03ead0837fd27e89"],["/categories/C-C/算法设计/index.html","56fca0112020b3d5bbee35cc459aeff3"],["/categories/C-C/编译原理/index.html","023b3da64317d5f121622aa9a7cd9bb4"],["/categories/C-C/软件工程/index.html","e7ab9a07d9eccffa24728b4d280ea214"],["/categories/C-C/项目/index.html","1dca38055df7506034abb61cd2b9a3f9"],["/categories/Java/Android项目/index.html","c089b1f28cb2385b3c14d7bc182a60db"],["/categories/Java/index.html","00ce48fe6cb011cc1f96489df9772f21"],["/categories/Linux/index.html","0241f6266cc9510b7ee46b8302cf74b5"],["/categories/Linux/上机实战/index.html","652738167bb5fa13942a7098f3545fcb"],["/categories/Linux/习题/index.html","dc59af3d2e3083a4bf5fffef0b2b57d8"],["/categories/Linux/拓展学习/index.html","6fecca4e185fd914683813ceb621cc7b"],["/categories/Python/index.html","32281ff8eb49a10413a91106ef48f012"],["/categories/Python/爬虫/index.html","ff534f9c7dbbcc1f081e10f746b4ed76"],["/categories/index.html","48ae1beb800086e91469e1f07242d428"],["/categories/交换原理/index.html","e149fb9a57432d9d1182a429d1b1b8b8"],["/categories/交换原理/实验/index.html","6deb128b56f170f9a62812a1f1b9697f"],["/categories/其他/index.html","b79ac182517c9a03fab08eebc7b0b125"],["/categories/大数据/index.html","7edbaf197f49334d3e56ae79f8fec2dd"],["/categories/大数据/习题/index.html","462357491e6680bbfd4282f61d8cad09"],["/categories/大数据/实战/index.html","3e35e6c0cba1915f5eff45ca657910ab"],["/categories/机器学习/index.html","207fd7039e638f8345feb47cd33a04a7"],["/categories/机器学习/实验/index.html","918143580397be90f3d5d2387049c8e7"],["/categories/机器学习/知识拓展/index.html","4add84aab282612b2b4e292d718af623"],["/categories/现代交换原理/index.html","37e45eeda3f0bb5498ce1d00b0d287c8"],["/categories/现代交换原理/习题/index.html","5d9e599b39f0e12f62a67f0395fddf4b"],["/categories/计算机系统结构/index.html","34415de08ae74a3863722e8e1519bdec"],["/categories/计算机系统结构/实验/index.html","dd623cb3c5d2d38c5cd2e67f37cfd0ec"],["/categories/计算机组成原理/index.html","ca55de937092f23e82eaf341c07def76"],["/categories/计算机组成原理/实验/index.html","eb1ccb15e19b5229f554849ac9c35492"],["/categories/计算机网络/index.html","790497283ec557aa0512dfc5b6c3f14c"],["/categories/计算机网络/实验/index.html","d789ddab7e46a9f9dfd96dd77409b090"],["/categories/集锦/Android/index.html","f88f98f1557c733f87d1483cceeb56cc"],["/categories/集锦/CSAPP/index.html","c69bdae3016bef40bb626d6d6e9f6c5f"],["/categories/集锦/Python/index.html","6bcd5ca82a252525dbd878696e7aad0f"],["/categories/集锦/index.html","e1ae283c4a4b342d1ed858ee2f026c26"],["/css/first.css","01a90baf99fa8f190becabd973782198"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/style.css","d6b605a251a052e3c03a515d025edd45"],["/faqs/index.html","9b49689c8c4a32d9fabca0ac498f57c4"],["/friends/index.html","1ba733a3eb08d71253f8345a14e0c2ab"],["/gallery/index.html","63f4bc7639ebb10460b077618443184f"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/games/tank/index.html","a4a2448b8b53e14bf7bad5c1f71e614a"],["/index.html","b9681e42bee4298268ac629080df988a"],["/js/aplayer.js","a0a8f225cab4df42a6e0164b45d7641a"],["/js/app.js","1948329f2fd7e750ade4bdc49138c09b"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","bffce87cc52a9f8476b618968f86fced"],["/page/2/index.html","794437b84c2437e0873fab82910787c4"],["/page/3/index.html","e88587b8afc878deb648c9f0b541976e"],["/page/4/index.html","934d2eb8185550298ff00539f6c67730"],["/page/5/index.html","02c7c1a0af591fc9ec86b353ab03b44b"],["/page/6/index.html","4b0427a69b3df811a0b02afdd6c93f05"],["/shuoshuo/index.html","10281d8f8773e05e4aec83fcc6ac207f"],["/sw-register.js","1df7cb8a3aeee49d3d28d2cf7a5708f8"],["/tags/AI/index.html","25e7d5724c942fd8008da14232e10df1"],["/tags/Android/index.html","a2d32a5b39298195e09c7aff522487cc"],["/tags/C/index.html","3100d7eb30d3cb4e75a3d58ece2f304a"],["/tags/C/page/2/index.html","aad9224a2ef459f67678ee09a6b79433"],["/tags/C99/index.html","0277ad3d7e6c7830ead00bfce0c97af4"],["/tags/CSAPP/index.html","d4dc7acba23f914f21d29e34e3aca483"],["/tags/DNN/index.html","010edda0cf49dfab50ceb91a66fcb305"],["/tags/DNS/index.html","1af37d2336b6e661d9ac95bd94ab29ed"],["/tags/FPGA/index.html","09db522ce6003e5ef841fdf520658e40"],["/tags/HDFS/index.html","50f308532d5808a7e137461b527c16f9"],["/tags/Java/index.html","02907e11f2fe15d6d337ef663fa29c3e"],["/tags/JobShop/index.html","07449f0ad6d5e3e03963f8ee09c4cd31"],["/tags/K-Means/index.html","bd1795356e681edf8f5ba882d258aa0e"],["/tags/Kafka/index.html","24bad7bb8f4ba8b089592f931e2c1ded"],["/tags/LL1/index.html","c1fad02fa76f432d66726035364c8904"],["/tags/LR/index.html","f4979503177e413951636d68ffed3c2b"],["/tags/Linux/index.html","4c1edd0646eb73091a1356fe1fedaa85"],["/tags/MIPS/index.html","b792c89716107797fb37ccae36370d5e"],["/tags/MOOC/index.html","dfeb5d0011854665eea0a58ee2ef9887"],["/tags/MPLS/index.html","466f1650d2494da09d34addeb7e729d2"],["/tags/MapReduce/index.html","78ca00a665e0114f7b2ba727bb22c2a3"],["/tags/Matplotlib/index.html","ee621e1aae033d13acc02f8688af7e01"],["/tags/MiniSYS/index.html","0d5c2ea5d1e771c5e50efb6f029f7f52"],["/tags/Python/index.html","dabdc1ebaff3cc68e9c210c8d9a8c732"],["/tags/QT/index.html","7c83f0f2aa5251264eb4fe87ec642a0e"],["/tags/RNN/index.html","a9cfdc24d2b3a68f2d213eaa41ed5157"],["/tags/SIP/index.html","1f8baed921fe72f808daacc9e50ef922"],["/tags/Scala/index.html","86c97edc7c19bda36d2dcca5a9409117"],["/tags/Shell/index.html","232667ea957bfaf0716ba5010ec69b6b"],["/tags/Spark/index.html","0f49ad1aa2dd39dbdd2b088930f2faef"],["/tags/Streaming/index.html","bd525caba65077a6c93942b36fed55e4"],["/tags/Struct/index.html","3a2c6eb1c00df3a02a7b4c1fbf9e9327"],["/tags/Verilog/index.html","b9c25704df69aba3c92ca4df7c7453a5"],["/tags/first/index.html","088997843aceb49a8f0d69a8624899cd"],["/tags/iPython/index.html","947c3f8b72c991c31c28b14369600e92"],["/tags/index.html","aef778363ab12fdf84cc16be22897383"],["/tags/ls/index.html","0d6d2e0da65c28b09e07c80fb77bdb5b"],["/tags/习题/index.html","a09c0d491058fd2971496b2172b1bf9f"],["/tags/交换原理/index.html","e52e69a3aab39e9b8f4e47467ef32d17"],["/tags/人工智能/index.html","937fdd513eba9eaba347327465e5c5de"],["/tags/信号量/index.html","f999e6721ffd96335647150daa44fd87"],["/tags/内存管理/index.html","983472792fbdd746e9ca138afb773f7b"],["/tags/决策树/index.html","6dfa272a7c8fc0415881b81f57790205"],["/tags/分治/index.html","5fc62a47b596603f758d3b6a91e82ce4"],["/tags/分类/index.html","6a9b448dee52c27a180d892cbaa6288e"],["/tags/动态规划/index.html","649d29d786cd9f18ffab73b264eea3b6"],["/tags/华为云/index.html","8c6dfdbc0258c9b532de1016887a901a"],["/tags/单词计数/index.html","e948220e8a2a245a3257eb4e2d2f9d35"],["/tags/可视化/index.html","e3c3143438bfc29b92bdacb792d2af51"],["/tags/同步互斥/index.html","1b8a6a5b9046c89cdd60ea21914910b7"],["/tags/大数据/index.html","195745197a7c6050a5aaf46d7282363a"],["/tags/学堂在线/index.html","5854ce138ad42f746047c9076756bdbc"],["/tags/实战/index.html","4d100f42db56c80a9eaa6c9412b46d07"],["/tags/实验/index.html","1bb770ab64cd992ad3765661a2478a54"],["/tags/实验/page/2/index.html","cd487ff65961b196ed4fc11f3d89eb36"],["/tags/小游戏/index.html","1036f4b50314b5267281b6406f040d1d"],["/tags/工程/index.html","30905dc6105aea7b2b818d27f7e5145f"],["/tags/工程/page/2/index.html","c8b3b284372123124cd76fe3498a51d0"],["/tags/手写识别/index.html","35e593bb46808c8b21f7fbee8b92f22c"],["/tags/拓展/index.html","d2ea8a32d09b167835ab3f468737d553"],["/tags/操作系统/index.html","a25df0fc340c4eb064eeb0f7ff0e7ce6"],["/tags/数据处理/index.html","08767c7414c93d2013365a0117be1250"],["/tags/日志分析/index.html","9dc40d763b2315957998b21c19053aa3"],["/tags/易错点/index.html","e29431f5400dd96c392a7da4d72e396e"],["/tags/机器学习/index.html","9990fbac80eb0134ecc0a6ee340d2a4d"],["/tags/条件熵/index.html","759e83cf841b0ab2ae0d192a5db2b9f0"],["/tags/正则表达式/index.html","911fb4c80ef2b9881f405ef7b0a3c077"],["/tags/汇编/index.html","d93b8e3398037b1845869569c446fcc0"],["/tags/流计算/index.html","0993d2bde09777c9fbed2425b65cd006"],["/tags/爬虫/index.html","d9fcc3f0b537cfb79755eb06492d3041"],["/tags/现代交换原理/index.html","7231cc8c367fdd71925498fbb7d42239"],["/tags/生产者消费者/index.html","0ae1011b710b31bba48eba08b30dc097"],["/tags/知识/index.html","314476e4dda5bc1a39763a729fd46ea8"],["/tags/算法设计/index.html","65c9e98077f79c53ae9d7dec12140dbb"],["/tags/线程/index.html","9d2469922d0a43e8827eb7ca62cf3132"],["/tags/编译原理/index.html","f7bb31950f74c2cbf9af62a34f049046"],["/tags/网课/index.html","c28f9abcffadbca57201f4173c189f2e"],["/tags/聚类/index.html","3bd3e4a3cf5bc47034d50f97af0588ce"],["/tags/脚本/index.html","876627a100d82567cdb9efe5963893a8"],["/tags/计算机系统结构/index.html","b7d0b7c35a31fc79fbb138e46936c68a"],["/tags/计算机组成原理/index.html","2657ecf72ff6f981248af0ce9cd7f0ee"],["/tags/计算机网络/index.html","2455693ecb55fdc80329c0d4ee10c142"],["/tags/词法分析/index.html","ad710ad35df2d558cfb2ae094e6c1454"],["/tags/语法分析/index.html","7ec11c53239446c53a77afdc8592247a"],["/tags/读者写者/index.html","12baf5678a25f42a45ab155eaea6a77f"],["/tags/课程/index.html","4df33b3d567677242d2c3819e2388949"],["/tags/起名字/index.html","70efa7af4e45193aac97d7249a2268c2"],["/tags/软件工程/index.html","9e96d8384ef1a8a7d8b8c3d3485365d7"],["/tags/进程/index.html","dfb6a3f0391920ef8a84f75b2b464f63"],["/tags/通信/index.html","509e503b24421bdad20564d0a2dee8a1"],["/tags/遍历目录/index.html","2c4084090cfb697f6b0421d1d2d29782"],["/tags/难点/index.html","1088bb0bef48c4cd3bb29fef69f1f8b6"],["/tags/项目/index.html","513b9a3f9c5983fb703b4686d4caa2ed"]];
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
