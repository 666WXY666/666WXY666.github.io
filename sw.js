/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","b70729df8a9786cf56f3611fd259fa48"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","d51d68af3e682a0671199c0d381e3989"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","b974c9a0c7b445b767ee4965184ab1af"],["/2020/03/26/计算机系统结构-实验1和2-遇到的问题/index.html","5c1fac1fd2e87ff87c3811efe8ff32a5"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","d7f8da9c26aa1113cddb6214a5cd9a6b"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","8765d530fe42b98b3410e3405a2c6096"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","29ab20437f4d415be7ace2b5bfcb6ba3"],["/2020/04/18/机器学习-知识拓展-条件熵/index.html","4c82b78b374fc16cf5c5a23dde95fe87"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","4db8b7bfc9b11568502af0a49ccb8fc8"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","18846ce69f1eddce705531c43accb813"],["/2020/04/26/机器学习-实验-决策树/index.html","2123788569d1b9690cd305ab18e1b9fa"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","485a46d088a9e06f71a4d8d103d755d7"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","a99dd34bff7095e7d44d379246eedd5d"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","a2d6beaf11384f2e0fe744443e0b4759"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","e4ece017d9352c9d40ea7cdb2ea91b5e"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","4b93260dd4d6b70cdde0d18a04d94708"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","e874dfc53ca70631666ccdb9ffa134d7"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","61a5318dc5f6d0c50345e53531955aaa"],["/2020/06/11/机器学习-实验-DNN-手写识别/index.html","764f637ef741cfc01f2a450f4f080d7a"],["/2020/06/18/大数据-习题/index.html","802c5e4d884dbda944c714bbf3087660"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","70705730c184c67219ab9ed387239edf"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","133714bb2926311ec385b6444f4b88c2"],["/2020/06/24/Linux-拓展学习/index.html","24f771d3b0a75e697c6d94b0e55d4168"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","e9a98b00b8352799bbd13c1fdc58be1e"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","17acb5a0246c3224cfd750330202d12b"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","802fb3e1e912749273c5d91cf5cad714"],["/2020/07/15/C和C++的struct使用总结/index.html","c5151ebd48ff217ceb7a08bec59922e6"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","0d428b586a1f39f95695b89258f1a142"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","851d630db14fef0b771c2ba89a420d14"],["/2020/08/10/机器学习-实验-花卉识别/index.html","f277027d69c99269f391b7334fb42155"],["/2020/08/15/Python-项目集锦/index.html","5acdd34a725d535d53c6d406dac4259a"],["/2020/09/01/编译原理-词法分析/index.html","27e1f68a7ccc5c708c3180463d274011"],["/2020/09/02/编译原理-语法分析-LL1/index.html","a089040ef0fdc7341f8c1661e0d81e5e"],["/2020/09/02/编译原理-语法分析-LR/index.html","71f1178c8e9e4945b23738bad887f35e"],["/2020/09/03/操作系统-内存管理/index.html","ba3617e1d0dd691d42689d1fa2892963"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","91b6e7f1fbbb3d2242480bb21cb2c4a9"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","46bc8d97e264d87bb5cdf38d375235bc"],["/2020/09/04/CSAPP-实验集锦/index.html","71aac5910f50a5d0db038a2e0515eaad"],["/2020/09/10/计算机网络-实验集锦/index.html","1672e80025d146fa8a9eea350e399350"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","612d7e9fc069fa8293d15a3d54ad1141"],["/2020/09/30/C++工程项目-JobShop/index.html","a4a3d654c60369411c192f2575c7a28d"],["/2020/10/09/交换原理-实验1-时间表调度实验/index.html","6876be6bc40d77797e4bf1e4c752caf0"],["/2020/10/09/交换原理-实验2-摘挂机检测实验/index.html","9924f2a3179c7846243c0895151d5e1f"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","fa5dc53a86ce72127947514e5df7fb88"],["/2020/10/09/交换原理-实验4-拨打SIP电话/index.html","135ffe6b3534262cc17757eb70e40fb9"],["/2021/01/04/Android-项目集锦/index.html","3de2eb94cc7ff49f12c7102c1ab36207"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","f04f32bc4040c99744dc799ec9e068c7"],["/2021/01/04/C++工程项目-travel/index.html","eb34d8a9f5365d20c93e586ab66a396a"],["/2021/01/04/算法设计-分治-最接近点对/index.html","060e41a5f5c4f992d69859ebea7c09d4"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","f659674f5f2e0bc83a00f195d8e5049f"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","e5115b9f9c071cc5b79152b7a68239bd"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","9f37e0a45954f421a5f96128694d8ee1"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","4b899098d6bd372c35579c122d61326e"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","8c3b038800c9a1a92971e07d09ada6af"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","89c9916d3b37b321e2bb5da09f4bbd22"],["/404.html","2394b59b860bfc1b2a641e2bc2300ffb"],["/about/index.html","528c7662fad601960d79abf97d8f9d72"],["/archives/2020/02/index.html","2a79fec7beefb97e762a37addb9f14fd"],["/archives/2020/03/index.html","b97eb3c646768f671e4f7ef4196e16af"],["/archives/2020/04/index.html","93fd9f4985065b51a30426bf98be7f0a"],["/archives/2020/05/index.html","e67dabf0201da02984cfe52da11eb777"],["/archives/2020/06/index.html","23b41f451e0c6a93a52252ac84d97190"],["/archives/2020/07/index.html","f1291eb5f891ab574847bc7fd6080104"],["/archives/2020/08/index.html","24e0ee2e8145c62d204a927e20adbfa0"],["/archives/2020/09/index.html","46137b6bcc620bbbdd96b6fb2e4f4d5f"],["/archives/2020/10/index.html","0b20c488360f94b889be90c579a5fd74"],["/archives/2020/index.html","1702a7859943428b0dee65a99d9ac42b"],["/archives/2020/page/2/index.html","1197099fec6bf7664f70b1ac53d504a9"],["/archives/2020/page/3/index.html","91076981609b4a12213bb2001f2cf243"],["/archives/2020/page/4/index.html","9dd2c4ed2f63ce8cfb89425842975762"],["/archives/2020/page/5/index.html","1d6a2ee940c5b3705f3d347ac83f5ec0"],["/archives/2021/01/index.html","1cfba17be094581047a95ae471ac26c5"],["/archives/2021/index.html","0d9c2e254a645900d1867ad3525e531e"],["/archives/index.html","b2c809fe51ca0f34c1b761796c404110"],["/archives/page/2/index.html","b2c809fe51ca0f34c1b761796c404110"],["/archives/page/3/index.html","b2c809fe51ca0f34c1b761796c404110"],["/archives/page/4/index.html","b2c809fe51ca0f34c1b761796c404110"],["/archives/page/5/index.html","b2c809fe51ca0f34c1b761796c404110"],["/archives/page/6/index.html","b2c809fe51ca0f34c1b761796c404110"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/bb/index.html","18bb2a95c24d65e671a6fbc9a3d79852"],["/categories/C-C/index.html","b3af74c095834623d09105ac8e454503"],["/categories/C-C/page/2/index.html","7f101b4ed778397ec34a675be646c850"],["/categories/C-C/拓展学习/index.html","661b13301663a5e5797162fec36073dd"],["/categories/C-C/操作系统/index.html","aa0053855f52a4036433ee2f25d934af"],["/categories/C-C/算法设计/index.html","dd68b2fc6c5f843a8fd06cf247fc416d"],["/categories/C-C/编译原理/index.html","2bbb2ff68b260a994196ec6acf0dcf9e"],["/categories/C-C/软件工程/index.html","22bbf23cbf9e482fee4f50db8f43db4f"],["/categories/C-C/项目/index.html","3966bbb0a7333f53b996c7b271d1b8e0"],["/categories/Java/Android项目/index.html","930bfaaa203843ac1bbc1ac1722c66fc"],["/categories/Java/index.html","f830c341d96c90d34a15d78629fdae6b"],["/categories/Linux/index.html","8b86999269a5a43d183af2c8e36bead6"],["/categories/Linux/上机实战/index.html","27c6ef002b4c4f0908c3a055c5620412"],["/categories/Linux/习题/index.html","41b4304cf0388e796a44ae5cc6b9a069"],["/categories/Linux/拓展学习/index.html","e85a10a14330b373daa3f0ee2632c3d0"],["/categories/Python/index.html","a6cc17f567593827b65ae36dcfc025d2"],["/categories/Python/爬虫/index.html","0b9c75f5c62e59244fdf7aa86db62e54"],["/categories/index.html","de4ef8c747d71c60abaa020d02929735"],["/categories/交换原理/index.html","896d15995ab873585655d750c53b639c"],["/categories/交换原理/实验/index.html","551dc1699d256cdd303ae11e05a84280"],["/categories/其他/index.html","696d743c1551922c9d0d17b0f4835639"],["/categories/大数据/index.html","159d6a0dfd9087e0a860eeaff56bccc7"],["/categories/大数据/习题/index.html","a7db85d7d03af4e38de544178c281dd5"],["/categories/大数据/实战/index.html","b0a02d2a58102f73b2d3a4e5c1da1b44"],["/categories/机器学习/index.html","07221fe082967fc2a6468e0651942709"],["/categories/机器学习/实验/index.html","36c6ba8aadfd73a108898a2a51296871"],["/categories/机器学习/知识拓展/index.html","64644864d819d3990df238591b718bb1"],["/categories/现代交换原理/index.html","a3db5146e34549a6eafb7336ffd8070b"],["/categories/现代交换原理/习题/index.html","f33c1249e5f37bf05179b191730314aa"],["/categories/计算机系统结构/index.html","7a410580523c020c0e7801d753706856"],["/categories/计算机系统结构/实验/index.html","a460a7da54bdad15aa9e43b6fae639b3"],["/categories/计算机组成原理/index.html","46b5b92e1519e8b549e8086aa8f8a84a"],["/categories/计算机组成原理/实验/index.html","5ca868e0d77fc23cfb377962b3159bd6"],["/categories/计算机网络/index.html","9273457754f982326e6795a5f00dc0d6"],["/categories/计算机网络/实验/index.html","faf0cd2430f9865dc57a70e072007e55"],["/categories/集锦/Android/index.html","f4b0dcdd2871ac99dd4b53d88fb1079b"],["/categories/集锦/CSAPP/index.html","7dba8458e03e286cdde19e640f99b6d4"],["/categories/集锦/Python/index.html","a5129033179c6fff6615cb2f607c001c"],["/categories/集锦/index.html","b3bae238528ea29a89e4e76a2a53f3ab"],["/color/index.html","3f627143356419f7f54e1443b3536f0d"],["/css/first.css","ea01aa1635810499a5ade558f4f81d56"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/style.css","6bb0e006bcdf6e96b6708cbc5b8f868a"],["/friends/index.html","4581848e9bc396d6ee6e979179b672b1"],["/gallery/index.html","cac0a9f9094373909cca2398b08a7aa4"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/periodic-table/index.html","4c31220b3c8c1d35b1128df43b2c9dc3"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","d0251ccbe42479f1be9074328b8449df"],["/js/aplayer.js","6e605f0855251e101d3024646f3eac60"],["/js/app.js","1948329f2fd7e750ade4bdc49138c09b"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","c00c8ba06af2faac369f34fbcae591a4"],["/page/2/index.html","0d385e2c1afa5514bb7ec105c8ad5df6"],["/page/3/index.html","58aa6f8c9bceddf830c1287f17ce3f55"],["/page/4/index.html","fbb0386e5070d27e1813a0f573ed2e79"],["/page/5/index.html","fdb8b848527fa91df1ac5f435ad63be3"],["/page/6/index.html","dab3ab98e8694a356235f079a45e6393"],["/shuoshuo/index.html","84b6c7610c8531d11c5e0f9e46c4f977"],["/sw-register.js","20337fd9f889de257b4085973be18f54"],["/tags/AI/index.html","5fb4ff6e0c7237692928940a1f27f14a"],["/tags/Android/index.html","93f2463fdbb06790cb1218bbf5f7528d"],["/tags/C/index.html","8d785283d5deced691f22520d7584fad"],["/tags/C/page/2/index.html","4bb84de2457cc7a7ceafd7dc626a0317"],["/tags/C99/index.html","5010b780a4c69edc9fa71f3162501e5e"],["/tags/CSAPP/index.html","7d9c3636dd5c4627ea3bfd534d47c6b1"],["/tags/DNN/index.html","d8e0952bc06c0f719e92c6d9c6734e29"],["/tags/DNS/index.html","92bd8d8e40bf6c7c363d53656aa94a8a"],["/tags/FPGA/index.html","212d7fc35dd17282963f2e1424c4612c"],["/tags/HDFS/index.html","9a1a11ea0383ffb1109d859952e2c521"],["/tags/Java/index.html","ada9340628182d95fd6788d5ae546a20"],["/tags/JobShop/index.html","c2da33a4e63a3587d6e2d9fb61ebacff"],["/tags/K-Means/index.html","2648f3919a98c64e005b727dcae14d00"],["/tags/Kafka/index.html","49ad8f67cad96eea88d061425516b686"],["/tags/LL1/index.html","6f6594a1c12c80b44e104e215f13b79c"],["/tags/LR/index.html","8c3f7ae189d5648ba545dbffc11dd7bb"],["/tags/Linux/index.html","07ef0b4509d5b343610baf7fe504049f"],["/tags/MIPS/index.html","8535374e37641415a5a608624ff82b7f"],["/tags/MOOC/index.html","e06550c87f8c8ecfb2a2f386c8f2ffcf"],["/tags/MPLS/index.html","69c40e09cdfcd143f681a12756f373c7"],["/tags/MapReduce/index.html","98457813e91184a43b94bffa29ab4007"],["/tags/Matplotlib/index.html","23be72bc857cb707ee61fcd72a79d019"],["/tags/MiniSYS/index.html","842911829c1539893d1b645b8b9c9e12"],["/tags/Python/index.html","dff25d4c9f9f6051d62104f428d128d5"],["/tags/QT/index.html","08a25087f3feb7fd165d88b6889de768"],["/tags/RNN/index.html","a09b9a4c0369e786adf2c9014670bacb"],["/tags/SIP/index.html","59a3a15404a7a490d3feaa68d9cdea8e"],["/tags/Scala/index.html","0f211003b00b4a6a92776dd38bf1f7b7"],["/tags/Shell/index.html","08e43318c99b72508520971485d51f16"],["/tags/Spark/index.html","3368fb671fd831924305e430f898f39d"],["/tags/Streaming/index.html","a74ffb55539b4c68d0f1e232c6f67ddc"],["/tags/Struct/index.html","aaf4dad32298ae559320e0ab281b8a22"],["/tags/Verilog/index.html","b253d2db6bf32c5a273aaf5a799c242e"],["/tags/first/index.html","06539c75028e9720c0b80e2f2f0b0284"],["/tags/iPython/index.html","388d550e814cec93ea0dc18c4a495bb4"],["/tags/index.html","18a9cd37bd16b26dc8813b349c67344f"],["/tags/ls/index.html","b9c6b8e6ff9f8c7276599f840dcb8bc0"],["/tags/习题/index.html","4d9d47cf5140f9a366ad428474c1637b"],["/tags/交换原理/index.html","93dff992c6fbc2a13a55faec6ec6d2aa"],["/tags/人工智能/index.html","185025ea37e0ec81f9cda209bbe2147e"],["/tags/信号量/index.html","506cf50f770282d7a971b0dd5571c03b"],["/tags/内存管理/index.html","265587e1715086c45e522efaed2c4f9e"],["/tags/决策树/index.html","c83b80582e1580db4eda0b2a508147ea"],["/tags/分治/index.html","6856eb71e652817c236efe756b16109e"],["/tags/分类/index.html","633623a62460373dfe85f215aaee0394"],["/tags/动态规划/index.html","b15c0649f04f9d97a518ebed880cc25e"],["/tags/华为云/index.html","41cc3964c44f64e9d843798a487c680a"],["/tags/单词计数/index.html","5aecd4ac6b60af38ab2676fe68cf828d"],["/tags/可视化/index.html","c5746709e92c5da5f3a89a70fdbc80f7"],["/tags/同步互斥/index.html","1f5e054d2f8679751fefefedc94437a4"],["/tags/大数据/index.html","533897145fd57042505917d73fa3eb7d"],["/tags/学堂在线/index.html","3d780987d6274bd610e21326565946f1"],["/tags/实战/index.html","de0f26a3d322b151ccd3a0e51d317000"],["/tags/实验/index.html","98b42c4380ea9f194e2e9a09062762e6"],["/tags/实验/page/2/index.html","8294b979d33bdf148f31a46c826fa541"],["/tags/小游戏/index.html","5d5cfaa165ad5541f2aff591900c0553"],["/tags/工程/index.html","fad8a6002c1a575d96ed022dcb2c4a3f"],["/tags/工程/page/2/index.html","c9df2207386ed829e33b5f623aaf9d44"],["/tags/手写识别/index.html","165ebf969f80cd611985b55b1177120b"],["/tags/拓展/index.html","e0e73327f637bfc7c6e1123456626ff5"],["/tags/操作系统/index.html","184b4fb497fc264760a3e920151f6188"],["/tags/数据处理/index.html","cf7fc8225bd8a94058b05613bdab0c85"],["/tags/日志分析/index.html","c2f5caca3f418f1e7f1679731054b146"],["/tags/易错点/index.html","d2c3b313d064bd6bccfb72690b706ecc"],["/tags/机器学习/index.html","2229406c9f0722da2527bb03b9b42d53"],["/tags/条件熵/index.html","14f08bc6f30d7105b8e12c06f5686df6"],["/tags/正则表达式/index.html","cad302323aaa8452c654826607884a08"],["/tags/汇编/index.html","7e3edae1639fe42827ca454943808ab5"],["/tags/流计算/index.html","bc30fa05344b13a2da37d5a0d7c66f77"],["/tags/爬虫/index.html","ceebf58da77b82e7092b309e35d8a8aa"],["/tags/现代交换原理/index.html","82b0edbaec263ef59976d7831d5a227b"],["/tags/生产者消费者/index.html","5f287bfce5e3a3b15b8025e0a811b110"],["/tags/知识/index.html","fc2b4f25171f7832849e97218133621c"],["/tags/算法设计/index.html","c189175a26661efe9115c3a10f0ec1da"],["/tags/线程/index.html","a0418ddf124fd0da39485be519bd3bd9"],["/tags/编译原理/index.html","0ec929b4a9b0e814c582d302b6db573a"],["/tags/网课/index.html","49c712d85d587b9f4d62315812397ed5"],["/tags/聚类/index.html","fac89ec92889f8b471d93a9712478766"],["/tags/脚本/index.html","11cc1bc8fddb07e65c4cd6692ea32e7d"],["/tags/计算机系统结构/index.html","38c694f82add7bc3aeba06567fb4efe3"],["/tags/计算机组成原理/index.html","cc2821d9210d8e41ee92df0c5e166645"],["/tags/计算机网络/index.html","d4e06dd6193daf60cf1560b848da7589"],["/tags/词法分析/index.html","d56ce43ea8a3796690bf30f13a16e0db"],["/tags/语法分析/index.html","9c7b5b1d4124cc6bc364c34b63a3652f"],["/tags/读者写者/index.html","3845bade6d41639bd5f5970a7b18e37b"],["/tags/课程/index.html","b5b5cb5b38900d1bdc1365123ea64594"],["/tags/起名字/index.html","790f6d0ec788a011f480e595b3c41d22"],["/tags/软件工程/index.html","66316266d847b354ffdda59fa893421d"],["/tags/进程/index.html","87b933a19e15b275b2ad22e181ade54d"],["/tags/通信/index.html","224aa528b767553ed4ddbda9178762a4"],["/tags/遍历目录/index.html","e5fffa1f44727e22927505574d5e62e5"],["/tags/难点/index.html","e190d99784c96ec939b9b826b6e65753"],["/tags/项目/index.html","6894efb47fb05443d3c412c8ed7c61c3"]];
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
