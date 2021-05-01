/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","89a9d93ae61439306f86af4fb492819d"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","59f0bfe28549ebee74877e944af18827"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","ecd467fe487245ffb2d9e026c754fe69"],["/2020/03/26/计算机系统结构-实验1和2-遇到的问题/index.html","354ab366806077839848045ac5989862"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","621ee47ae58147c2c3dbe43c878901db"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","b2b051970d57ef920beac7b9a0dcccba"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","42e3afa79ae99b27cedb139b4283c9fe"],["/2020/04/18/机器学习-知识拓展-条件熵/index.html","c48628617e2fbc28bb19b003eb1f37a9"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","a3e3896d3fbb644cc99c0a39ae409990"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","5fae7df9f2e762de56d56293c8c342d8"],["/2020/04/26/机器学习-实验-决策树/index.html","2376bfc90fc30a61da5c249a62b9d341"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","e0862115fe1869b2b99f08f5e8b4a7d2"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","b209adc163b46c4f749a317a724964aa"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","3de47704157fe1145882ee9a82910a40"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","06fdc415aa6554ea1636ffb023475395"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","b37b7261f98618b328476fdafbcb4119"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","d6cf3676cfa9ce558d7869be8fd23a9f"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","8c8e576439b742a1891783bc90b1f740"],["/2020/06/11/机器学习-实验-DNN-手写识别/index.html","ef8cda9778a4ad769a4b8f3d024e1679"],["/2020/06/18/大数据-习题/index.html","c110f3695b0f9ad8a22ab4d665c78fb2"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","ad0b2bd3916577b5a50842d38c189f0b"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","042af00ade461037bbef6083566b6a42"],["/2020/06/24/Linux-拓展学习/index.html","d9e4e3e86a3aed0e8f8781ffce846a9a"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","4b457308deab0e791c979b251d06f0aa"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","e0ccee872df6f9ece0e5047fc624c3c1"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","ce3b0f6b9d5a26ba0a7556f83ced8668"],["/2020/07/15/C和C++的struct使用总结/index.html","30f8ea15780e9ee84dd85128eedb8657"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","1284d9352c75deb2e3b740e310548593"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","1d65d83ec3e5b1026d6cdc888570bd2c"],["/2020/08/10/机器学习-实验-花卉识别/index.html","a816b0aec5820867625cb6e9e41ec01b"],["/2020/08/15/Python-项目集锦/index.html","0cf24155c7dcbc0e57ae1de5fe906e12"],["/2020/09/01/编译原理-词法分析/index.html","10edea2671f4d57f357713ed8abd3b17"],["/2020/09/02/编译原理-语法分析-LL1/index.html","1f9979bbf16ce9975a70453f58862506"],["/2020/09/02/编译原理-语法分析-LR/index.html","179beecb472ff9327a2de4a7b768303d"],["/2020/09/03/操作系统-内存管理/index.html","1dcbeb05401071200580082cdfedbdc4"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","943ac266192454fd809fea7fd23f380e"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","d49a97f5fc63a3073ef9f2cfd9c4c434"],["/2020/09/04/CSAPP-实验集锦/index.html","d8c5c0f95e0691293608c31cdc184642"],["/2020/09/10/计算机网络-实验集锦/index.html","5acf43bc9362ca622f329892255fda12"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","760ce090f093d6fbd92df62ecfac5c16"],["/2020/09/30/C++工程项目-JobShop/index.html","1cb64be68754b48f6e8fd5d19191e122"],["/2020/10/09/交换原理-实验1-时间表调度实验/index.html","b515b9221a0b7bf372750fb23e7b68d1"],["/2020/10/09/交换原理-实验2-摘挂机检测实验/index.html","644dea0a8d3accc6b9ad660ab10d0f5b"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","56176d82b877242e26516d90514e8416"],["/2020/10/09/交换原理-实验4-拨打SIP电话/index.html","e7cd70e50ccf165d3b45274ffe202227"],["/2021/01/04/Android-项目集锦/index.html","6890f848b6f630eec5a29d30236dc477"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","df9b78f8a54d5595654d722a8ea8222f"],["/2021/01/04/C++工程项目-travel/index.html","96e1f53c9e54ee87c7c0ae6218584dda"],["/2021/01/04/算法设计-分治-最接近点对/index.html","85c7ade39635f6626a12d5cc43d6f334"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","65c5ad122398f6c927196300b539ae21"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","51da2861587616082bf6a0488e7a5f51"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","1c18d35e2537293df9ac4a08ca63468d"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","976aba9a65d05f2aa39d9a6b1e13631d"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","c3dc3cc3d76d0de6897f3086440b45c9"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","bb25ba20794853d6e6d5551573ee1003"],["/404.html","b38a7caa5049f2a7647d5a69230acd8a"],["/about/index.html","53239d494c636c7993dd104cf0001380"],["/archives/2020/02/index.html","e356115eeda40cfe7ce1ad70fef7bba1"],["/archives/2020/03/index.html","a4b5dd24db63c3a294bdd95544c3aea2"],["/archives/2020/04/index.html","fb113d464c8b9120711b7586fe363d21"],["/archives/2020/05/index.html","e20b50e3ca9126a03b2c4938b62739d0"],["/archives/2020/06/index.html","1ba7200bb3da6a8429af1e93e38777f2"],["/archives/2020/07/index.html","23e1f43bf95f52ebc7072edf1582ba8c"],["/archives/2020/08/index.html","4b9bc14e52cd448dbf04009823e9b7d4"],["/archives/2020/09/index.html","ed3fa5192a58f25ece8f784f76610000"],["/archives/2020/10/index.html","280b0545e5b0103205782d74e7d1256f"],["/archives/2020/index.html","9090f2817abd2ba62dc856a7c13a49a7"],["/archives/2020/page/2/index.html","594356b63b5dce5f6e4dfa313820f7b6"],["/archives/2020/page/3/index.html","897f0b0e8ab171e3d4337dce5976a075"],["/archives/2020/page/4/index.html","fd813bcc8715f15763f3e09f374c2d5c"],["/archives/2020/page/5/index.html","78f4fab7553e4737b81acc467482ac1c"],["/archives/2021/01/index.html","8b6a82825e1191f6fdb2a19eff1cd0ad"],["/archives/2021/index.html","26e9687e522285100dfa0cb25f1cd96c"],["/archives/index.html","19836b896cc01d6c692daf4a94ae0bca"],["/archives/page/2/index.html","b43d6c3628e1c92362bd07fd49a61a2a"],["/archives/page/3/index.html","b43d6c3628e1c92362bd07fd49a61a2a"],["/archives/page/4/index.html","b43d6c3628e1c92362bd07fd49a61a2a"],["/archives/page/5/index.html","b43d6c3628e1c92362bd07fd49a61a2a"],["/archives/page/6/index.html","b43d6c3628e1c92362bd07fd49a61a2a"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/bb/index.html","56dd5320ae3af67c20ab1e948fa1c702"],["/categories/C-C/index.html","c6f3a7c48a8f52d91ae5857aeb735185"],["/categories/C-C/page/2/index.html","421b3bf90773545f3659ee3c0a87a19a"],["/categories/C-C/拓展学习/index.html","b40bc1c5482d68cf9b00ad5329428ab4"],["/categories/C-C/操作系统/index.html","817d10fd8ff9840fc5b5a612b1c1e215"],["/categories/C-C/算法设计/index.html","bd7c2e8bc6113a54d661f22db9a89010"],["/categories/C-C/编译原理/index.html","f0df7a92974b3d5361ebacac6f33c900"],["/categories/C-C/软件工程/index.html","6dc8f5cc77b7e510f9dfe7a8affbecdb"],["/categories/C-C/项目/index.html","8d6b4b6f5a9beb15c2549c6aaa7babb7"],["/categories/Java/Android项目/index.html","9c198263e6265f963c5eae5673a3c8e4"],["/categories/Java/index.html","d9bff04d824b3587f644a968296bd6b2"],["/categories/Linux/index.html","e8301d91f15b04ecf960c9b3882913f8"],["/categories/Linux/上机实战/index.html","879b081f18c579010d917d51f87e35a7"],["/categories/Linux/习题/index.html","1ffb8c1fa38ef8b9ceadffbee687af1f"],["/categories/Linux/拓展学习/index.html","f0a720adef69f35839516c2c45b11464"],["/categories/Python/index.html","f3a83f7da75ed215bfbb5ac9045b45c9"],["/categories/Python/爬虫/index.html","dba8c7801890c484d525de3d8ada780f"],["/categories/index.html","6723c3d067abdc49734ef51856616c7d"],["/categories/交换原理/index.html","b28764ebf079cc8cc35eaf76571684d0"],["/categories/交换原理/实验/index.html","f87d521c34ebf5abc65ce22477c5217f"],["/categories/其他/index.html","05fab165c32605ae5a1c0cc38395331d"],["/categories/大数据/index.html","9a1bf7ee1af67f9e0f3beeac69970f5d"],["/categories/大数据/习题/index.html","224f4d3f77bc5c87c14175be7722ba9a"],["/categories/大数据/实战/index.html","44e035f7f473e19fbd9d5b130b5d0699"],["/categories/机器学习/index.html","e56630053b84e15db3b3aca6befb4d6d"],["/categories/机器学习/实验/index.html","a45fe0022b5ba562aeea70e17c928851"],["/categories/机器学习/知识拓展/index.html","d655d1a4764c44a638642e01ad629083"],["/categories/现代交换原理/index.html","35a781131f19c99cefdb1199391e1e28"],["/categories/现代交换原理/习题/index.html","53636079409de74fb5c81e63d7fac289"],["/categories/计算机系统结构/index.html","af0e47b4b65647026cbf3b962a2f0842"],["/categories/计算机系统结构/实验/index.html","89dcf0d11a44c2fed01e1c5a87d1984a"],["/categories/计算机组成原理/index.html","5d27999daf45a0002ebe7f8658371c55"],["/categories/计算机组成原理/实验/index.html","bc3fbfa2e3b6f8fa4c90797af21e0b4c"],["/categories/计算机网络/index.html","52198da52ee552bf880362b79b269ad1"],["/categories/计算机网络/实验/index.html","78af39e03de88566fb43e724003e361e"],["/categories/集锦/Android/index.html","7a92d757718fb719becd5924dd2028cd"],["/categories/集锦/CSAPP/index.html","cc98be9551859bd8eab86faf858ac525"],["/categories/集锦/Python/index.html","1a02503a465f9252433f60099f6f1894"],["/categories/集锦/index.html","4e46fd38a4603281be3899b81fd3d797"],["/css/first.css","b6d087a1c859f2a9e183897e37ac7fd2"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/message.css","b0ce3ca232f809c8d7a85c79bf1f7ff8"],["/css/style.css","7c02d5a26902ac4da5d2d0131ed08853"],["/friends/index.html","d015117686f72b68b3ce59faee64fbbe"],["/gallery/index.html","63f4bc7639ebb10460b077618443184f"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","22e547bac34d6fbcb6ccefa064049bfb"],["/js/aplayer.js","f10ee7aff4ce278045da925ac6510d29"],["/js/app.js","2fb5381b84811b7d10a6c591d3896727"],["/js/jquery.parallax.min.js","38cf4791e24aeaa8101bd2c816400718"],["/js/message.js","38da736cdf513c9a15a0a2a16a34eeae"],["/js/plugins/contributors.js","23ba3efa08d9fb1aae753ceaa6df2711"],["/js/plugins/friends.js","239cf9c648af390f866ed00cead3e23d"],["/js/plugins/sites.js","15bb31fc27abc888b17cc5d822808604"],["/js/rightMenu.js","19b2a577c30a04732f02b86bda62e0b9"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","360b94b2a4e9a48798ccde2bfbfe84a3"],["/page/2/index.html","c2931c2dd2e9afd2fbacd9342fcea120"],["/page/3/index.html","5c5382742be2639f3f4a6f7e5c11d24d"],["/page/4/index.html","fdc81608dbd416c9e4450900692e8c24"],["/page/5/index.html","568a2c42dcc0d9348c2c8cc3f8f02f8c"],["/page/6/index.html","675d942424d2de847b461502cd213731"],["/shuoshuo/index.html","ddd8e719c37156ea96aabdc6f219fec2"],["/sw-register.js","f16e6e7d9b2f80f86e0989a92c712b12"],["/tags/AI/index.html","5ee415279d8fde3ab36ba42baf4a3537"],["/tags/Android/index.html","da950e73e14677688781f06d57a5c112"],["/tags/C/index.html","98f7d82bbae2953375f72d6e7f74c17e"],["/tags/C/page/2/index.html","1ef8af7fa22d1a9b4300ba776d9785bf"],["/tags/C99/index.html","93f4caabbeb7d3053e06a9eba8e49b3c"],["/tags/CSAPP/index.html","f8ba1f42aee2fe9bbd8259726aa22bd4"],["/tags/DNN/index.html","70a76df722bf6d345f19c1ee468b73c3"],["/tags/DNS/index.html","f1a205c3c3f2e0963be34e210a8eaecb"],["/tags/FPGA/index.html","90af277d12b91a6c800bbee4ac8759ff"],["/tags/HDFS/index.html","447fdd287cfd1bd969bd8b5632a5036a"],["/tags/Java/index.html","96fcb72d9ca8a1c0098517a37b150a0f"],["/tags/JobShop/index.html","5c6bdae863014d55e1d70abcda4b20bc"],["/tags/K-Means/index.html","35f0da82730b97387ee7551de957056b"],["/tags/Kafka/index.html","39b21628642124a720529061172153d7"],["/tags/LL1/index.html","e5bdf4809066ae18c1b7d20eef6d573c"],["/tags/LR/index.html","b6983ba0aad08ff904a1ed0fdac7730d"],["/tags/Linux/index.html","7d632b13167963b943be2be142527323"],["/tags/MIPS/index.html","2928ac55305098fc141f3642dc4c874f"],["/tags/MOOC/index.html","71e0cf0d4577795e0d2b40767bfdcb62"],["/tags/MPLS/index.html","c0c7b0f41d45b60900b200377180b668"],["/tags/MapReduce/index.html","3f69b413b3c4ae2210b8330866c3861f"],["/tags/Matplotlib/index.html","532ecfff23ca89e878028a2e9e4d5b42"],["/tags/MiniSYS/index.html","3e231af56c3838870aa6a0ad890ab61d"],["/tags/Python/index.html","d548d17f686c40d5d1b8efcf82d97d07"],["/tags/QT/index.html","ce55e060662ea51909fed7d765401b8e"],["/tags/RNN/index.html","d71f6b059ac52f9310c9facd0e12da9c"],["/tags/SIP/index.html","fbc54b3ca70250a0de6cae58b5135cba"],["/tags/Scala/index.html","fa81607092ac085aff1e93f985f847b4"],["/tags/Shell/index.html","9568068b18525b55d0d2b16a54cd4f7e"],["/tags/Spark/index.html","e4dc44ecad14de7e368332cfe55bd220"],["/tags/Streaming/index.html","fa9ca75f2d0667ea664b0ea7647e9371"],["/tags/Struct/index.html","36d14a4b7216f38d5677064666a18a28"],["/tags/Verilog/index.html","db1df29b3b8f91674e6bb9f689010a6e"],["/tags/first/index.html","c4f9a265c11968737605155899d2e975"],["/tags/iPython/index.html","11106458e4c8517804c954539dc1d665"],["/tags/index.html","2732794a882bbef3121ae0fc0079b3a9"],["/tags/ls/index.html","e608b9dff197b57654b29efe121364e3"],["/tags/习题/index.html","defaca5b4d1ee30a8cba93f143b485bc"],["/tags/交换原理/index.html","503d7a046991d3d7c255d82621daa771"],["/tags/人工智能/index.html","2865a1aa7b8b7a564f9fec4123263099"],["/tags/信号量/index.html","f4376a74f6c7f1904c0f9ca84ebad0d1"],["/tags/内存管理/index.html","6abaa8473d62924ab72733390912a15d"],["/tags/决策树/index.html","2bc1ef9d63904656225ae52ff4d087f8"],["/tags/分治/index.html","639282e4d62152ac967bbd341760c7b4"],["/tags/分类/index.html","ad0072cd6bee1fe84e9fe0a6d90f7e57"],["/tags/动态规划/index.html","854ffb007931e95aaec3b95e6586679e"],["/tags/华为云/index.html","1be05648d64b3464ef123779fc1bcf68"],["/tags/单词计数/index.html","f580226f2551d5b714c17eab7ed7b064"],["/tags/可视化/index.html","dbe6c4446ab41325a2f0f3dae394a101"],["/tags/同步互斥/index.html","b7eb84866e4ca45e1e885201f8e60366"],["/tags/大数据/index.html","52f5d50dc41615e2c640724942c2db95"],["/tags/学堂在线/index.html","5e5cdad410c47c8760d6281d50d621be"],["/tags/实战/index.html","9990a1f230b31596bef2d5e4fc8ccc86"],["/tags/实验/index.html","414160ead97ea5fea7a50078356ab2f7"],["/tags/实验/page/2/index.html","b29529c8b24ef573b05394d541550f27"],["/tags/小游戏/index.html","3a8321665f5843839cee8ca951fe96fe"],["/tags/工程/index.html","bf0ef234ee8b7f6cf97c533d1ee7edbf"],["/tags/工程/page/2/index.html","713b0281fa9ba176993c63bd9168f974"],["/tags/手写识别/index.html","8a78d2494f0a6b67038dc0bd4b0c51bf"],["/tags/拓展/index.html","b96fe002c70fbbc8bd4ec3cb50495fb3"],["/tags/操作系统/index.html","c6882cea1bb2ef01fb862bd6d1bea911"],["/tags/数据处理/index.html","2c4317af864c3022a74a53a0e09efe47"],["/tags/日志分析/index.html","ee22e878d9e3b9bdd6184d06354f54c8"],["/tags/易错点/index.html","45a85886b39740553c54b18e800165d9"],["/tags/机器学习/index.html","6abfa6179bc6334f883313c9d597a4b9"],["/tags/条件熵/index.html","a8949fd92c395b1306bb3ba109df0c1b"],["/tags/正则表达式/index.html","d8c223ea7ee89ca1e18ae2e1bc9fcafd"],["/tags/汇编/index.html","50757f80e9d18db85434e4fba80398c5"],["/tags/流计算/index.html","cfe437f7b9abef40286affa6f778f736"],["/tags/爬虫/index.html","87e843b572eda4c023e4d83ce55747d1"],["/tags/现代交换原理/index.html","01849d7d8e014b493a31a4450d5c8539"],["/tags/生产者消费者/index.html","185f2042ee99b98a644b56eec1b14fca"],["/tags/知识/index.html","9678d65f176faad33f30fd308ae5d4c2"],["/tags/算法设计/index.html","7f2d2245ca8c6566873d039ed13eb263"],["/tags/线程/index.html","3ec3838e73c31525a5c7e52c6c6f5842"],["/tags/编译原理/index.html","450e0a5ee04c2c52033f9a019a319b93"],["/tags/网课/index.html","19b361c78e3d1a772b3d726800fe4728"],["/tags/聚类/index.html","1c92b3e90c6019189370d655c30c8d4d"],["/tags/脚本/index.html","bda8359096486cf62bc8cb0fb7b1353b"],["/tags/计算机系统结构/index.html","23d0490876ebd44bb3b24a66edfe7987"],["/tags/计算机组成原理/index.html","86ef3dc74b700afbefc092bec31e95ab"],["/tags/计算机网络/index.html","8a7e0afc482a79eb61a7c90903eed518"],["/tags/词法分析/index.html","ecfaa9677384c3d4e1f4ba68b79f4db5"],["/tags/语法分析/index.html","80b762c981bb349d8c812a210bb92456"],["/tags/读者写者/index.html","18100c30abb166316b1499558eeb22ef"],["/tags/课程/index.html","bb4614e27a8dce85c5196818e084de2d"],["/tags/起名字/index.html","ec0f801810d51fe974cb553755afe245"],["/tags/软件工程/index.html","3d330467202efc52abcd17def12aa2c3"],["/tags/进程/index.html","9a28300d5f3b2dc427127a6dd24c48db"],["/tags/通信/index.html","81be37a4ba5bc4c695c6f58177d182f6"],["/tags/遍历目录/index.html","f706b52454aa2e38360a35ab4b0e498d"],["/tags/难点/index.html","94a64ef21909917f7b74d98f1e6e8e3f"],["/tags/项目/index.html","d1720769376722e601bbd2f546cb05b5"]];
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
