/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","1551e59710ec1832b58dd902cf749ce8"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","4988e7deb3df9087776d77142f817b1a"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","b5a9d5c53059bf3c7f1e7ba749f6bf0f"],["/2020/03/26/计算机系统结构-实验1和2-遇到的问题/index.html","ca425465e49c18d28aa75b34f3b6f4dc"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","417b0d7bead572504f8d4799c513a448"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","22561a3ec0780b06ca4b7d0a72e2724c"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","0f5540cfbf07ebd8a4ae9fb939b8a1b2"],["/2020/04/18/机器学习-知识拓展-条件熵/index.html","a1f59c2e5b0dcdd5f781498ab6323889"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","ad0b5eb977edbd97a6053c8064f9c401"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","9c92d294690cc55426aedd3f6549efa6"],["/2020/04/26/机器学习-实验-决策树/index.html","e3ec8001fd1ae7ecf3e1d783d4cc4550"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","b04045ddbd7fdc3f38374a9d83f05ec0"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","7983c51c4052779076d8eb7b1d8d9aae"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","216e9d91785bb6ac45f7ab2b6d2bac29"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","312e8f732d62f4bb2af6e140c20378ed"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","e59bad9335123911df4bd606761f947b"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","0f6b8f9620c0e26c8962c319233a1caa"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","9648e08240ad5aa51a7771385ce17a7d"],["/2020/06/11/机器学习-实验-DNN-手写识别/index.html","26214be67882f0c4ebf491f2526f30cb"],["/2020/06/18/大数据-习题/index.html","a696a9ba5402262f3ffdce06c9fb66b0"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","d7badc390cf4c9366c7aaceab568b8a1"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","9ba061a4f3ddced102ad8239679363ee"],["/2020/06/24/Linux-拓展学习/index.html","07927bf99627882cd91847617928125a"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","23f3b360d1d1c9cb04124165dc354c49"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","a45e535f518592623332b2a390259e25"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","4db22c70b805663049053a971a6f54ea"],["/2020/07/15/C和C++的struct使用总结/index.html","16d615acb9fc2ab43d0e2f417c67ff6b"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","5da907e9dcbede651fdc2b67c5a1ca0c"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","03c1e91cc04d95ec48e5085d00d7b3e3"],["/2020/08/10/机器学习-实验-花卉识别/index.html","bdadaf4bc19adeb7e7b1190cf7594bf7"],["/2020/08/15/Python-项目集锦/index.html","02dbee675f6cf2501ae25bf6d0a5b541"],["/2020/09/01/编译原理-词法分析/index.html","e7f0e0c1c1964f68e72f7a5842c5fc18"],["/2020/09/02/编译原理-语法分析-LL1/index.html","432d2626891128cb72300d80b9962a2c"],["/2020/09/02/编译原理-语法分析-LR/index.html","7a2d8303d182642c52d32c70c82f483e"],["/2020/09/03/操作系统-内存管理/index.html","10f8615b37b2f89a3f2df1fef58c8774"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","a634e56e6f67db78f2f368a8264db58f"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","9ccf7ec69bc9dca1aabb2bb2dc5fbe97"],["/2020/09/04/CSAPP-实验集锦/index.html","0d8264acf0482d92baad747bb32f6164"],["/2020/09/10/计算机网络-实验集锦/index.html","49767a65fb7080e8051431edb64416b7"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","bd79fa0952b3b59e9683773e8d9df9c9"],["/2020/09/30/C++工程项目-JobShop/index.html","c1a872dbad24d5cdcd266085962a12bb"],["/2020/10/09/交换原理-实验1-时间表调度实验/index.html","0dbee3ef0a78fe644489e976825f4266"],["/2020/10/09/交换原理-实验2-摘挂机检测实验/index.html","5fab1cefc66f01d81662e020bc42b53b"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","93e834c3146de32cb6f86223d84ca8f0"],["/2020/10/09/交换原理-实验4-拨打SIP电话/index.html","aa9a51177e25ec48d87b8bff92828b7c"],["/2021/01/04/Android-项目集锦/index.html","cec19c4f2c13e97924083e45c9735e0d"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","74dc4748cf10414e144a96247f09b897"],["/2021/01/04/C++工程项目-travel/index.html","75b0b8428d15ce0dbede269813c46a0f"],["/2021/01/04/算法设计-分治-最接近点对/index.html","c6b0475a67981482ba1e97a3a77e7c94"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","99fe2207d555a3417008f68df7ce0ea5"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","e5c2971cfa61a1e233ad578e5b838721"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","12a84f488d962a8a7eeff93c952b5a81"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","ccde78a35b0f1a728befee2b0dc6f2a8"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","c43b911d9864ded05fcd2e6d2ddbe7ee"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","8d5be04a4d1207288637ec6167e89047"],["/404.html","5da1ad94b183e15cc970d1f5b1a4e590"],["/about/index.html","9ef197f2a4004ebe90189e2e6e869d6b"],["/archives/2020/02/index.html","f16864c58670094f8940eebef59cfcb7"],["/archives/2020/03/index.html","5f0f79c215a73d2dcfb3969551f971c8"],["/archives/2020/04/index.html","377619af6328c2fde5f91ca5206d220c"],["/archives/2020/05/index.html","21ba155da581dc591aee5a7f19bf3a0f"],["/archives/2020/06/index.html","65713b72d0ac695b681fc48ae6cb99c5"],["/archives/2020/07/index.html","256a679124e4e812f9c78a801ef4f822"],["/archives/2020/08/index.html","f5cbc65c8dc5ffe136daf7fb03839e00"],["/archives/2020/09/index.html","46af92dd840795d00621842331fe3f13"],["/archives/2020/10/index.html","77faaaa4de5661d66538c405f449fd33"],["/archives/2020/index.html","2f0bc98cf789915cf0535fd299571d29"],["/archives/2020/page/2/index.html","84108d55a4c743dda95d5bd671533b34"],["/archives/2020/page/3/index.html","b19eb56468a321f2455ce399d005b24c"],["/archives/2020/page/4/index.html","d7e73c54f0699d2e0fb0f6d8b44f54f1"],["/archives/2020/page/5/index.html","82f4cffebf1bf781e36587136b42e867"],["/archives/2021/01/index.html","c0bb189231a1356d1a1407d68b325684"],["/archives/2021/index.html","b3a63aaff28c3ad6081ddde3fcbd255a"],["/archives/index.html","aa549192566981f17e8dd3cf588bd22a"],["/archives/page/2/index.html","aa549192566981f17e8dd3cf588bd22a"],["/archives/page/3/index.html","b5cead8152b7ddb79c929a6710ee6829"],["/archives/page/4/index.html","b5cead8152b7ddb79c929a6710ee6829"],["/archives/page/5/index.html","b5cead8152b7ddb79c929a6710ee6829"],["/archives/page/6/index.html","b5cead8152b7ddb79c929a6710ee6829"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/bb/index.html","d68a6e584e80f7bf0fa653b2eb3536ca"],["/categories/C-C/index.html","3d2510d7ad4c676857baaa8d00b6806e"],["/categories/C-C/page/2/index.html","28e46252a5a7e560f7bd3a74080434b5"],["/categories/C-C/拓展学习/index.html","7a37568c0e576ac265315588021ee9c3"],["/categories/C-C/操作系统/index.html","0a3773ed40bedc24d7c49d9a34191429"],["/categories/C-C/算法设计/index.html","ca5b960cd6ce8acf9594601c3c2c1a45"],["/categories/C-C/编译原理/index.html","0d3b86f826a01019e9215c7c972be4b8"],["/categories/C-C/软件工程/index.html","d94f3e7c00f351ca04f255f0fd5440a7"],["/categories/C-C/项目/index.html","808dd3258340d9ca023816866735a41f"],["/categories/Java/Android项目/index.html","19f8992080c16e198b84fa1583ca27e3"],["/categories/Java/index.html","647b8854e20d3e45f0023010fb6e16a1"],["/categories/Linux/index.html","58ec54ec289fe4965d1d5eecb762c984"],["/categories/Linux/上机实战/index.html","87308aba90d68453a2dd6ae49dae265f"],["/categories/Linux/习题/index.html","29f040f2cb28a6acf4bb29995ac58399"],["/categories/Linux/拓展学习/index.html","7b3149a062d63bcdf9a9a4b23877fa31"],["/categories/Python/index.html","afb98e05624665d74c4d66d6456ebe67"],["/categories/Python/爬虫/index.html","7dfbb52546c5ff7df3e979664fee2de3"],["/categories/index.html","77cbecca9e2b255be20e6c4a990af829"],["/categories/交换原理/index.html","18f08cecdb8cfa561e228b3fea65b395"],["/categories/交换原理/实验/index.html","7e48b651d078c2756583f87f7772fe0c"],["/categories/其他/index.html","93b49f7997a61bd2b9b12155c002583e"],["/categories/大数据/index.html","37e67a47b7313f47ce8ff08ade85bc8f"],["/categories/大数据/习题/index.html","fd9b1bdbe7bd9c5ec41ea44f547ed455"],["/categories/大数据/实战/index.html","5bd99e3e6d46aea3b105539a40a9aa82"],["/categories/机器学习/index.html","7b49f555dbab381d79411140defdc86d"],["/categories/机器学习/实验/index.html","07f9f50e9af8bbdbd56d4adf55cc64a6"],["/categories/机器学习/知识拓展/index.html","97703fb5925aeb255b48cb7c5a67c19c"],["/categories/现代交换原理/index.html","27c74c638f8b8ba438a2d7119519a205"],["/categories/现代交换原理/习题/index.html","82116d35aa7be7b5d863882e68445372"],["/categories/计算机系统结构/index.html","7558ad06a5c1f985efe78cb2e0404b6a"],["/categories/计算机系统结构/实验/index.html","0d2ef378467c3eb3695f693e0a21b4ee"],["/categories/计算机组成原理/index.html","44f3095c5d7991759f3ebe81d98805ba"],["/categories/计算机组成原理/实验/index.html","54ca391cc5514b829088c48c01dc51d0"],["/categories/计算机网络/index.html","ba60fed813aec216a8be57e965cd139f"],["/categories/计算机网络/实验/index.html","4cb7f48f015e9f608a8d339c00e536d3"],["/categories/集锦/Android/index.html","de763a70aaef4fd3cd77c2a8b0c45b19"],["/categories/集锦/CSAPP/index.html","a00791085f8cad4206ddcf75b7c7ace3"],["/categories/集锦/Python/index.html","20da7440b58bc0205e0509972d264ac3"],["/categories/集锦/index.html","e323270ead264b6fddc88b7fad637822"],["/css/first.css","ea01aa1635810499a5ade558f4f81d56"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/style.css","6bb0e006bcdf6e96b6708cbc5b8f868a"],["/friends/index.html","ee857a159098582633376119c09a640f"],["/gallery/index.html","63f4bc7639ebb10460b077618443184f"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","f7263a4da34920d3325f0201a59772d4"],["/js/aplayer.js","6e605f0855251e101d3024646f3eac60"],["/js/app.js","1948329f2fd7e750ade4bdc49138c09b"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","cb71cc059fb34e719afc80228a950e30"],["/page/2/index.html","b6433b78f9a3f301866b21ca76425814"],["/page/3/index.html","e256bfa96b43751cb6201f9a92403b21"],["/page/4/index.html","ac565e06b184caee76c4d05a65cba641"],["/page/5/index.html","d2262ed9afd92652d8566f8f35fc209f"],["/page/6/index.html","511af467be0d9503e8fff7f3103e9390"],["/shuoshuo/index.html","e1232ad85918387e2de354eb4cf85510"],["/sw-register.js","66c21e7b03871341e9bd9329298540ae"],["/tags/AI/index.html","4e57b91bc68abbe75e942adcf1fecca4"],["/tags/Android/index.html","29a0dd1289ae5893a5f072a076c8fdd9"],["/tags/C/index.html","d0df85728acb2a12d9849a04c7e2a6e0"],["/tags/C/page/2/index.html","47f81e014ff382c7c0d789b9e0f79e8b"],["/tags/C99/index.html","bbdf463369cadd01b4f992e8fdeeb5de"],["/tags/CSAPP/index.html","1598aebc74ec6f4e67efede9c1e3ac49"],["/tags/DNN/index.html","6f914191853fd745c78edac6bd890acd"],["/tags/DNS/index.html","edf8478b4d51e6c1bc3e37a09c827073"],["/tags/FPGA/index.html","308e9316350e7d0213f595247bb244ff"],["/tags/HDFS/index.html","c7f390218259d7f6570ea262d267cfb8"],["/tags/Java/index.html","29e1392bb8850bf8f67380ec8e586f91"],["/tags/JobShop/index.html","b10f7f71c54caf2e3602d440b9c2126c"],["/tags/K-Means/index.html","e5fc2e44b92139ec30c2e8d34ac3da76"],["/tags/Kafka/index.html","f538ebd4a0b92128c4095dc7a93d98d0"],["/tags/LL1/index.html","b2fb3f2a6423b721b4f83c11d93f2a21"],["/tags/LR/index.html","308c03714ac28c1e814d4b869812f55c"],["/tags/Linux/index.html","47c79c38f4327786d94bdcf4f001c633"],["/tags/MIPS/index.html","b412d90707bd1fc4d67de058b2581ae8"],["/tags/MOOC/index.html","354daed0bf806e75c355166c2ac989e7"],["/tags/MPLS/index.html","042c85af09a7904a54de968a87b38c84"],["/tags/MapReduce/index.html","b8a762f5b850908aa6a2a2ac75b5bc4a"],["/tags/Matplotlib/index.html","0bf350b7cbeb9ffd2b8654e94987ef27"],["/tags/MiniSYS/index.html","d31f58b86041c397cf2c0db396691eff"],["/tags/Python/index.html","e2ddee915b35e6cc3bb2867d3c204af4"],["/tags/QT/index.html","c754f842571d0e412cf06e793d4f56a2"],["/tags/RNN/index.html","bb2a8183708d419cf68de6f3fb7516d1"],["/tags/SIP/index.html","38b35257507d81e0477ae64977e90555"],["/tags/Scala/index.html","f73cafadabf6695e0a76a6723e19cfa5"],["/tags/Shell/index.html","1b81e9e439ac545b28f42c04b7827d49"],["/tags/Spark/index.html","a26227f7476e337e9d9f05cf37b976d1"],["/tags/Streaming/index.html","bc438e2fbab3af86faaecb507848f198"],["/tags/Struct/index.html","8acfef08a9211bc75b62daf02555366c"],["/tags/Verilog/index.html","5b2462d9fa760c8fc51d7f1bc90401c4"],["/tags/first/index.html","3fd436c57ed7047b797cb5015d423af4"],["/tags/iPython/index.html","2f658b7f8980a1df4b39387856edc2fd"],["/tags/index.html","af38c23cc78cb5aafdf204bdf4053481"],["/tags/ls/index.html","d72de3df9efe49c9e0d47d14b3598666"],["/tags/习题/index.html","3f9f191ee15a3a2a0324301f142f7027"],["/tags/交换原理/index.html","a773fe19b4ee3afc4892cc1b85a06ce9"],["/tags/人工智能/index.html","6e4fc01e5ecdabdae4b004538d906aec"],["/tags/信号量/index.html","d5863f59e50a82e771efcd3c44aa92fb"],["/tags/内存管理/index.html","12a1887f075acaf37dfeb74f5ee79e26"],["/tags/决策树/index.html","2798d4726eb2ef8e5d24e642bf6802c7"],["/tags/分治/index.html","1c95c1e1bc4e4bd56fdc638b1773361c"],["/tags/分类/index.html","8e38d80005a4fbd186e6228fe012c1a0"],["/tags/动态规划/index.html","04849a99ed50683346b984d3d029277a"],["/tags/华为云/index.html","bacc8012a562d6dfa117c56195ea4931"],["/tags/单词计数/index.html","e10310850114f5a1ed8158f542f2a4e6"],["/tags/可视化/index.html","151072db952cdac56dd047c9e1a40b66"],["/tags/同步互斥/index.html","4dbd07e0bbf7ee25da26af45aecc2cca"],["/tags/大数据/index.html","d247ab2fd4261af5f675041f092f7183"],["/tags/学堂在线/index.html","2e4e30fdce6bcf70df1d55bb761634d7"],["/tags/实战/index.html","184bf6c141c9d5867eb78f3d4e2dccb1"],["/tags/实验/index.html","755c615728da02a7a14a5b1c0a9b5ae6"],["/tags/实验/page/2/index.html","2ca1908123f5b840e77a30f93f5a62bc"],["/tags/小游戏/index.html","1393b1f9eda148594f4e0e33a916b06c"],["/tags/工程/index.html","1f25b70a46e6e61b225b47e3c84d6aa5"],["/tags/工程/page/2/index.html","0e2ef48a4c15f9153920353eaeaaa05f"],["/tags/手写识别/index.html","cc610286b8a1181cf821d9a7302ef33d"],["/tags/拓展/index.html","7755203c8ff018b524a55a9a3cb1b2f5"],["/tags/操作系统/index.html","d9818e80aaa4ba202f9c8b5245b95965"],["/tags/数据处理/index.html","77cca278eceb9215a1b4f298076d3f3f"],["/tags/日志分析/index.html","9400e8fa49172ff42cc2fe1df552cd62"],["/tags/易错点/index.html","bd3b79cfdeb7b6dfb37ffe49c997a1a9"],["/tags/机器学习/index.html","e356512e603c8429474a994b50384258"],["/tags/条件熵/index.html","bc662129140167e5d0af4932ffeb2bfd"],["/tags/正则表达式/index.html","662e4a17dbbe00cbea627921bc93f962"],["/tags/汇编/index.html","66f46f5fbe3605c7ee825ec3452f35ab"],["/tags/流计算/index.html","bf5dffb2496052937b9f36d65980892a"],["/tags/爬虫/index.html","3c700820414ae035bd59881ff65e05e5"],["/tags/现代交换原理/index.html","fffd2c19b418625d7e32994542843d04"],["/tags/生产者消费者/index.html","e11d3454fb8bb607d5baf00f1dbdc101"],["/tags/知识/index.html","467e5785776349efe248c148e5ce6f22"],["/tags/算法设计/index.html","1d1ed5350d8cbd355972415d3cf2122c"],["/tags/线程/index.html","38796d02e7efe011bb293b4ebec0fc5e"],["/tags/编译原理/index.html","b5901d36c3d02b1f3ffde7e99fb8591e"],["/tags/网课/index.html","1e3440ccd6c52b42771502c19411f4cb"],["/tags/聚类/index.html","57338b52b751ce7cc65e1c8f39ee84e7"],["/tags/脚本/index.html","128971a8f1c425e44e4ba8fe52e45aeb"],["/tags/计算机系统结构/index.html","62505837ab089796de45f67870163ab6"],["/tags/计算机组成原理/index.html","d418ba43cb1957ec7a2c48f88aff6ea1"],["/tags/计算机网络/index.html","9dce2e11c1ff478080430103ed43d26b"],["/tags/词法分析/index.html","a6ced6f3d01ecfb7ea68548dae34541d"],["/tags/语法分析/index.html","5a6dcd326676b82c22caf06e84f1d911"],["/tags/读者写者/index.html","e4dcdfe4742677dfafb0a8f4cff57b30"],["/tags/课程/index.html","efc135181ab570ef1e52cbfb63bcbbb7"],["/tags/起名字/index.html","39d04f404048e2ce9c64320ae05f673c"],["/tags/软件工程/index.html","f35a75df9b6311840b69d4d1550fc39b"],["/tags/进程/index.html","010a83158f94e6a88dda2c773bbdacde"],["/tags/通信/index.html","ccbbb216c9dd0f4b684311215b24b463"],["/tags/遍历目录/index.html","f49b33265d3b61406026f7c9d9550918"],["/tags/难点/index.html","5e3574f8829f3d047e4e04a005ff8b2f"],["/tags/项目/index.html","21ee030fa5510b96c28fc26da8336ebb"]];
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
