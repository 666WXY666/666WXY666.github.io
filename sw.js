/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","5e0713db9d59265e41f0bfc1686dea85"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","5f3e9b56cb6f6d9d7ebace22bceacd59"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","f5a505b734398b778fb3214b24815506"],["/2020/03/26/计算机系统结构-实验1和2-遇到的问题/index.html","c511b187b40c1ddf6b4b4c401b66435d"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","6f44c899a0fd8f974462d3fb406c8d43"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","42a38724121a1a9e6dd5339870b34016"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","e0fe6d6e8c48faa32434a4a0799f0dd9"],["/2020/04/18/机器学习-知识拓展-条件熵/index.html","2507f69f0701e1379a4f07c5c356ca48"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","7faf82861db421179798c4f147794a77"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","a39b8a8d4e149500e42eb7b59678b9df"],["/2020/04/26/机器学习-实验-决策树/index.html","be372e865536647e3a8534532b971626"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","cccc1bd3dafd53df2cc34f637a43237a"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","74b5d6fb96841d6360558f874f275fd4"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","0271b85c75f050f4f4de15ffedb40247"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","77bc95a76a64ef008d3503fb2f0053ee"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","165139c40d8a0508c2a0d60a1c872498"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","60711f8cd471a3d129e84f535b32f958"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","5082f30a5c56689c93f998adde5a9db4"],["/2020/06/11/机器学习-实验-DNN-手写识别/index.html","62ca361bbeaada84ed823fe9ed5aa1c3"],["/2020/06/18/大数据-习题/index.html","53aa2ffb16c9a3d2982ca8305e44a4ea"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","96fa6977866269babc3993b52e7a16f5"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","b9ecb4644320e4cdc1b0d98875323098"],["/2020/06/24/Linux-拓展学习/index.html","e38f52ea13fa46767c13fed984a8d862"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","ae751c3a0eb952ee9501358417374243"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","75e9873f53811b3f9423a04364912f11"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","0f3a97b72407364924c09c4a252ad78e"],["/2020/07/15/C和C++的struct使用总结/index.html","a913136a2b98a42768d4ce1cb57398d1"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","26629d2df344e6d642cc17bd4ed071b2"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","4194507517a6b6a4e38af2b7b7450e6e"],["/2020/08/10/机器学习-实验-花卉识别/index.html","a9d92365e4d0021523d304440cb680ef"],["/2020/08/15/Python-项目集锦/index.html","035168941c6e29dcfd85f4569b13bbee"],["/2020/09/01/编译原理-词法分析/index.html","a1fc1e4a7710c6239059beb4f731098d"],["/2020/09/02/编译原理-语法分析-LL1/index.html","2e06127894679afd56651cec95c90724"],["/2020/09/02/编译原理-语法分析-LR/index.html","4c0e3c03c561bc5abcc1984f856e426e"],["/2020/09/03/操作系统-内存管理/index.html","abe217525026202a0c7a338728870ea3"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","1944a86e86ba375766fb0ee3d204ae87"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","0eea5b709ee679909c547b451456a231"],["/2020/09/04/CSAPP-实验集锦/index.html","f3ad37fd1ad811e324a6346ecef49f62"],["/2020/09/10/计算机网络-实验集锦/index.html","005c8df1eb1526ea6196e9a15f9b0fcc"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","2d055e5c1539e078605ed23dddcf5879"],["/2020/09/30/C++工程项目-JobShop/index.html","5586356734a4b077eeede00b3651eddd"],["/2020/10/09/交换原理-实验1-时间表调度实验/index.html","834706c35a6e26edd5f29ac04a129a9b"],["/2020/10/09/交换原理-实验2-摘挂机检测实验/index.html","0e1629f66b105016ad414610c58fc361"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","2746494bcfe83fc22a8826bf8d093d7d"],["/2020/10/09/交换原理-实验4-拨打SIP电话/index.html","4364c9a71b094efa31df03488dd63b84"],["/2021/01/04/Android-项目集锦/index.html","f5eef1843eee9829052a28e89c41d999"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","8d158c14d0f547e4a290f57029fefe67"],["/2021/01/04/C++工程项目-travel/index.html","61f21fe3bdf3611cd93231ff469f7d6b"],["/2021/01/04/算法设计-分治-最接近点对/index.html","7a017846d8e9c1a13c5e77c7ab2bffd0"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","c811494f76088160cdfa0bf7666650ff"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","edee7a837e1394310787be83fd7a7092"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","9eb4150c14f75a15c946545aa330d48a"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","d5e4d5c9d92809210c41968146732ae4"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","41dd710067dabb243b58a26748a168e4"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","79fb0762a8361a935842bbf4b5b20395"],["/404.html","2394b59b860bfc1b2a641e2bc2300ffb"],["/about/index.html","1c1060068a4b0e3695f1d2db450ca605"],["/archives/2020/02/index.html","ea1a2d74557db748f55b08b2a3428374"],["/archives/2020/03/index.html","50d5ddf64945f40adbeb3e05f6149d80"],["/archives/2020/04/index.html","afe9285d59194b7d09b67ca2ffead163"],["/archives/2020/05/index.html","dbbf34cf4c7d1207ffbea4834c533fc1"],["/archives/2020/06/index.html","4c22f7923aadeedb74b5af6cb23330fa"],["/archives/2020/07/index.html","c4b766760ef4aa3164cf43872144af88"],["/archives/2020/08/index.html","5f3482dc9e7a8cbccc65157479144adc"],["/archives/2020/09/index.html","68dcf1e4493cf56eec75f4a3703d4b3d"],["/archives/2020/10/index.html","147281d5b447aca7808950249f91f112"],["/archives/2020/index.html","fdc1d9f3d41ad53ac19a1ccf57e1ff9e"],["/archives/2020/page/2/index.html","67cde14b8695117c1f2e059bbefb3bc0"],["/archives/2020/page/3/index.html","2f04900e19f33e87e2aa8588ab4381cc"],["/archives/2020/page/4/index.html","bb02b1dc73f39b3922539486e71e327a"],["/archives/2020/page/5/index.html","11d9d26847160e116506cf640987a0a9"],["/archives/2021/01/index.html","7cb2b855219b62d8b7346aa1f94b607f"],["/archives/2021/index.html","0d286fcdff3c3bd9abf9d66ece48903c"],["/archives/index.html","023dd129f37e1a79424de451470f55a0"],["/archives/page/2/index.html","023dd129f37e1a79424de451470f55a0"],["/archives/page/3/index.html","023dd129f37e1a79424de451470f55a0"],["/archives/page/4/index.html","023dd129f37e1a79424de451470f55a0"],["/archives/page/5/index.html","023dd129f37e1a79424de451470f55a0"],["/archives/page/6/index.html","c8dafa72717786543232551533f1e331"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/bb/index.html","4609e9616f286aae9c1cec2ffc9576bc"],["/categories/C-C/index.html","0cbe574cff87ee02e88037e48cef68dc"],["/categories/C-C/page/2/index.html","250a7310e5bcac4f9375823cc2fa58ac"],["/categories/C-C/拓展学习/index.html","8d3282c49c8b8ce01fbb99753bbfbedf"],["/categories/C-C/操作系统/index.html","64fbdf993de49f8246bf84eaf71112ae"],["/categories/C-C/算法设计/index.html","743e49a1c3802350b14245cdaf485141"],["/categories/C-C/编译原理/index.html","b9c7d3b1858587ac511a384a8f879727"],["/categories/C-C/软件工程/index.html","6db77ed6137d8a71aaf315f4efc5823f"],["/categories/C-C/项目/index.html","5777a202ce409ff360343580eb7ad684"],["/categories/Java/Android项目/index.html","e4bde35e361d839133fab267c0119a10"],["/categories/Java/index.html","b590b25306312a48bb165c465e9a108b"],["/categories/Linux/index.html","ef54dff0cb6507667d556982aa69481d"],["/categories/Linux/上机实战/index.html","5245da21868938b7544a86832ae242a1"],["/categories/Linux/习题/index.html","1d7919fdbf7132d570c951d9e1d59dbd"],["/categories/Linux/拓展学习/index.html","41a1ffc2e2bd95222da3e4fd31f3367e"],["/categories/Python/index.html","341b6581d12421b6f0cf25ef1045792e"],["/categories/Python/爬虫/index.html","272041676e7fbbdd6f91206f5b5dd839"],["/categories/index.html","c971469312f5c18c13e67a1d0ce5ee94"],["/categories/交换原理/index.html","2ebacb757a72563c5e8feef22a218ee7"],["/categories/交换原理/实验/index.html","1e27534dc2284ea8721d7afc207a7108"],["/categories/其他/index.html","b15e49597ad7033d9d53f84f1e563eae"],["/categories/大数据/index.html","3c8d06e97d18663caa06c336ac003ad4"],["/categories/大数据/习题/index.html","7b4c87192d7f37634e60534d0bfe58c3"],["/categories/大数据/实战/index.html","c350581aed576f7fc879d53f9dfd0522"],["/categories/机器学习/index.html","3bac45642bd6dc6ad4dbf71a5c6aec86"],["/categories/机器学习/实验/index.html","54a1a282815be4eaa3d7553870435a87"],["/categories/机器学习/知识拓展/index.html","1cc793aae73738f74101d3e8c16e7e31"],["/categories/现代交换原理/index.html","e6d72a17e52d62702e5fe6b11a576859"],["/categories/现代交换原理/习题/index.html","546c738a50840e0df2544c060e66ca3d"],["/categories/计算机系统结构/index.html","0752ce9c86df2481bfdd69503eb96372"],["/categories/计算机系统结构/实验/index.html","b181e413d95daead49fefe317bed0a92"],["/categories/计算机组成原理/index.html","5e69b18cafc276e64f014f9a52c032ac"],["/categories/计算机组成原理/实验/index.html","bc072892515ce38f8cae4e73f5574775"],["/categories/计算机网络/index.html","28a47e34bf98fd9279868ca28a6f2d9f"],["/categories/计算机网络/实验/index.html","8019cfd8ea8af7857dda75cb662a2774"],["/categories/集锦/Android/index.html","47c7a37ebff76cd686997e815ac148e0"],["/categories/集锦/CSAPP/index.html","eaa5929e92614f2343ab3d49e8b22ec3"],["/categories/集锦/Python/index.html","93c2a51422bb54eb938072d27a691127"],["/categories/集锦/index.html","ae0f0dc90bcdd1db18dc2d1b503b390d"],["/color/index.html","3f627143356419f7f54e1443b3536f0d"],["/css/first.css","ac2d0010102d22ded3aa536d16e52b73"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/message.css","b0ce3ca232f809c8d7a85c79bf1f7ff8"],["/css/style.css","9b2d721a6582f4ffccfc6925277b733d"],["/friends/index.html","87b679e2ab67c8dd3ee927ed4f157ca3"],["/gallery/index.html","9a739cd2977cec9a92830c2c34a7a995"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/periodic-table/index.html","4c31220b3c8c1d35b1128df43b2c9dc3"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","67b892d9ef6f901b62edefcee784e23e"],["/js/aplayer.js","f10ee7aff4ce278045da925ac6510d29"],["/js/app.js","d14976ee97145aa14568c13c6554dcc4"],["/js/jquery.parallax.min.js","38cf4791e24aeaa8101bd2c816400718"],["/js/message.js","38da736cdf513c9a15a0a2a16a34eeae"],["/js/plugins/contributors.js","23ba3efa08d9fb1aae753ceaa6df2711"],["/js/plugins/friends.js","239cf9c648af390f866ed00cead3e23d"],["/js/plugins/sites.js","15bb31fc27abc888b17cc5d822808604"],["/js/rightMenu.js","19b2a577c30a04732f02b86bda62e0b9"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","015e21ab726eda7c8e0f7190e9037799"],["/page/2/index.html","ec4a5b12167e842395ee35130aedf325"],["/page/3/index.html","fcb8f6881960ba2c50f445e54d85c81e"],["/page/4/index.html","f3df4712e0ba348c149519baa0541756"],["/page/5/index.html","65559bd1f5e29a1af5add5349422e9aa"],["/page/6/index.html","cae74ec0f688e2287013d6becf744f80"],["/shuoshuo/index.html","96cfabc3c232465c99133352a4fc7a8d"],["/sw-register.js","f9808f0e8d037042fc7339b6f34df97e"],["/tags/AI/index.html","d7e4c63b20ab199d5f1e9e0b8a835eb2"],["/tags/Android/index.html","501cd735eec8f7e44c7053e90cbb1804"],["/tags/C/index.html","08cda165b39fceca451f7ed89a3f44ca"],["/tags/C/page/2/index.html","9fec5ea994a966d7ab25919368ffb301"],["/tags/C99/index.html","64cd4c19278d287cedf39adeea65fe4f"],["/tags/CSAPP/index.html","7ca429854bb07ee066bb981d3a874162"],["/tags/DNN/index.html","2f6119cd72b425e75be08b7127e75399"],["/tags/DNS/index.html","0deb57619166c68a1ff87edbdad6b7ba"],["/tags/FPGA/index.html","162c49a8944392761a06ebe49f5dccb2"],["/tags/HDFS/index.html","f7f6ecbcf5156e23569a28e346b978cf"],["/tags/Java/index.html","6deba0ad193d3650739a580097318d41"],["/tags/JobShop/index.html","85160533b429c149711d9c60d8f776d2"],["/tags/K-Means/index.html","57312c80fe2ee0e32f667673aa05583c"],["/tags/Kafka/index.html","a278a14451768f5084328b24bd39c6f8"],["/tags/LL1/index.html","e69357254a5047d464690d5d114ac960"],["/tags/LR/index.html","747deba15a70919155a1b3e8e0207b1c"],["/tags/Linux/index.html","5f97da2cdccf13fa88730fec6970eb26"],["/tags/MIPS/index.html","3e9351dad8d8b5cd091b868071347075"],["/tags/MOOC/index.html","b195a092248a35c7b6a732864d631e8e"],["/tags/MPLS/index.html","397d7e3b1b468ae289fd497f0b5d4834"],["/tags/MapReduce/index.html","fe44557dab54cbaba959bbd64cd10885"],["/tags/Matplotlib/index.html","d42f83a6e4bbe159fa03758ed01cf4af"],["/tags/MiniSYS/index.html","5c3c0e1312e527415621a402ce1a7fb7"],["/tags/Python/index.html","7fa97dc3286d6e8548c2aebb46e3eca4"],["/tags/QT/index.html","da301ef8a90a3f69ea43b8d34ae3f5e7"],["/tags/RNN/index.html","18a31659f08894366f3cf332e0914226"],["/tags/SIP/index.html","4a4276b558719e6722cd12de3e9e05fa"],["/tags/Scala/index.html","9a69fc7a770f96a071d710c1c5db5e8f"],["/tags/Shell/index.html","45ffddfe7750358263c5db2f73b93482"],["/tags/Spark/index.html","2130e2b7dcfa525b08fbfd7d8fe407ce"],["/tags/Streaming/index.html","916d3ceb7550c28113586fb462d2065d"],["/tags/Struct/index.html","a6005133229eec4c3e3571a39e00d086"],["/tags/Verilog/index.html","2787afc1ac0d7dddb43e85f49f11c5da"],["/tags/first/index.html","633078444a8aa5d3c3ddef9778ea36f8"],["/tags/iPython/index.html","923e38a8de369b43b9d078e321ae549d"],["/tags/index.html","0b93f88742d26dae568fa5af1202266f"],["/tags/ls/index.html","7310af8542d7697265031c405a385e8c"],["/tags/习题/index.html","312f02290f65eddd319de290cc87f475"],["/tags/交换原理/index.html","0ed6c75905b18c7413e4d4b6ea177034"],["/tags/人工智能/index.html","e1bacd7dca18cddfd9633ed7fc1519e0"],["/tags/信号量/index.html","6dca90a4c54b7064b57deb14e23b128a"],["/tags/内存管理/index.html","f9a75735419c3a5203fa2a0ca85488a1"],["/tags/决策树/index.html","fcd3468756de4763b837e0931db8c7e6"],["/tags/分治/index.html","2f4ab08290032248890bcabda64508df"],["/tags/分类/index.html","3b48e912fac497023a7029c52ac62e8e"],["/tags/动态规划/index.html","f4bc038a94a6340cc92c5f0242d6c89f"],["/tags/华为云/index.html","7a36d0d66fcef3474e3f7cd873551e5a"],["/tags/单词计数/index.html","62bae1122c1b47a59c505463ef77ed37"],["/tags/可视化/index.html","d05df08708c41b348d8e9ce1f205c906"],["/tags/同步互斥/index.html","8be28e3c4241aed73ed3b083a7af8371"],["/tags/大数据/index.html","9121e9877bac163480ea43b4e4e766f5"],["/tags/学堂在线/index.html","c66ad455509d1cd1e9c1ee7173ac6c43"],["/tags/实战/index.html","31509d71bc3e59ada3dff3a8c03e7589"],["/tags/实验/index.html","dbc0a0f23be24af83b5ce14583453dfc"],["/tags/实验/page/2/index.html","3042231877cf6dd7118f20d238afa77b"],["/tags/小游戏/index.html","53906b7280c3c2b4e5914ba73fac3980"],["/tags/工程/index.html","97775fd750572f096dcbd8aad5d9c21f"],["/tags/工程/page/2/index.html","c3b3c9287f2edca09895f00001803406"],["/tags/手写识别/index.html","1248463863976abc48316b973def175b"],["/tags/拓展/index.html","fdcee2dcf87cf9488fc741f16a6d3fc8"],["/tags/操作系统/index.html","d6cada7057c016515d46046e2e653705"],["/tags/数据处理/index.html","89adfb642c99cd56676877cfa6ba5820"],["/tags/日志分析/index.html","6f7a7f6de3252fe61203e65edae7995d"],["/tags/易错点/index.html","53bc1494271bb4116123af61b56b8a42"],["/tags/机器学习/index.html","97563e6d8ec4e440e5ffc7713cb8cf7c"],["/tags/条件熵/index.html","a0bb69b2d4d15d28c6af7e2480d12adb"],["/tags/正则表达式/index.html","c4c2f2e666ef3bb009da369f2f0b5ddf"],["/tags/汇编/index.html","38497c4eaa923f8a2661a38ff05f4448"],["/tags/流计算/index.html","836dd575a293bbb77c799016214e8d62"],["/tags/爬虫/index.html","57419c834476cb4766cfe4e712114ff3"],["/tags/现代交换原理/index.html","4b9b7819e1e68f239d9ca05361c1b404"],["/tags/生产者消费者/index.html","645146bc1a95258af6b17cd430fdf3f4"],["/tags/知识/index.html","367f31a1d703a3a286a683d62584e099"],["/tags/算法设计/index.html","b124d3cb43dec941b14bb500bab049a0"],["/tags/线程/index.html","126ed6b17fd20ac063e033e7df267c87"],["/tags/编译原理/index.html","b3cfaaa8b194280b541ce98d5814930d"],["/tags/网课/index.html","213a13fba9f53de7d71b05b69348479f"],["/tags/聚类/index.html","0d3c6cf3bf0e35f400e8e84fc6633672"],["/tags/脚本/index.html","92891c4b158b10e5c44c7f761d8f0db6"],["/tags/计算机系统结构/index.html","b5a675dd7f7fa5e89814d0502c9ab79d"],["/tags/计算机组成原理/index.html","065c1bd277bdac85115f2db7ed6d617e"],["/tags/计算机网络/index.html","86238006d0ee3848af516cd7159a32a8"],["/tags/词法分析/index.html","e7b827f716473505f3d4f03287a7b7d9"],["/tags/语法分析/index.html","524d387cf3ed9b1a2d58c543b9dd17f9"],["/tags/读者写者/index.html","3504869dff98809016d5686b05c6a891"],["/tags/课程/index.html","7b72d72fcc7410eb1603c154e9cee974"],["/tags/起名字/index.html","f13729ade0b5348942ed7ffce923b35e"],["/tags/软件工程/index.html","f091740e893f96e459f86075d9483ec1"],["/tags/进程/index.html","41f3b6592ca29c8d73f15999af6c802d"],["/tags/通信/index.html","dd873feb506edb6ac80d2856916fa523"],["/tags/遍历目录/index.html","df87c24ea3dcdbd2b2e3f51bde351664"],["/tags/难点/index.html","3d614c50055764143eab271af864f5d1"],["/tags/项目/index.html","63c124c1f0fb4e55451345f463d67aeb"]];
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
