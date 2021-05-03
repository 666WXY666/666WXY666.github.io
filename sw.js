/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","4de647efa0c2e209791435a437706f00"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","01a83658f21da52508fd44adecffd262"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","7764ceb11961981d7850a881fab45905"],["/2020/03/26/计算机系统结构-实验1和2-遇到的问题/index.html","3834dbd8d3fc94462ef70bceb45f02f5"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","08a62bdc81f873852c8142b83a220c99"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","f821b35a72d3caa2ed999ae05cb77283"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","ec3b7706022ab52d29d8d8dc4ff9126c"],["/2020/04/18/机器学习-知识拓展-条件熵/index.html","eec41d011bf2d593625778b6dec77f0f"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","b08c69b3b65d1846414af3085992671f"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","ca832c044be07e05669d910a667c7256"],["/2020/04/26/机器学习-实验-决策树/index.html","64f962d0be5201636adace45902b1580"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","8c7c51a0ea069d9d6180adfebb669114"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","d7461b1539537eb69796a762b9ff0fad"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","857ee8db4afc85bf6b113d5b7a7a33df"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","e0026cef8ad6de031a13e64ac5a0c87d"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","0c8cc2ac0fceb3ee1fab0752ecfe3d64"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","89863cb3f7f0a188daec34e60e55fb31"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","90156ece92ddaefa7e9db3d1ef4fda8b"],["/2020/06/11/机器学习-实验-DNN-手写识别/index.html","43358b0bcd3fa832e335c0559b31e5c5"],["/2020/06/18/大数据-习题/index.html","2298b34d0698d6fc2b2356fe9af395ea"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","d362ce56f80924261bad93fb26eb96be"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","8d3a77bfefeda1fc8a6deddcaef5389f"],["/2020/06/24/Linux-拓展学习/index.html","2fa643bbe01d60dd9b352cc52adb2790"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","95025eae2851c8d605f19a726d749fa6"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","ec52e87a412a982ca00b96c96c18ec98"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","46b9f8f6843f8c3168f37c83b33bdc7b"],["/2020/07/15/C和C++的struct使用总结/index.html","7421c00270eeb2160a5d9980057c8688"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","c0f062d373a39a67bf29bb03f2db12a1"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","17db05709671b42a955a2299be0b08e1"],["/2020/08/10/机器学习-实验-花卉识别/index.html","024e7acb8462c970f1121f3217c4232b"],["/2020/08/15/Python-项目集锦/index.html","489581a497f4a2da0fc94d09cb1c09aa"],["/2020/09/01/编译原理-词法分析/index.html","942215bb9b9432979a6aebc1f8f7c339"],["/2020/09/02/编译原理-语法分析-LL1/index.html","37fa2bd3af0981a054a6f3ab6b33f4ec"],["/2020/09/02/编译原理-语法分析-LR/index.html","2a5ef47ceaf3b4a294d387a00932fc94"],["/2020/09/03/操作系统-内存管理/index.html","cd48583164ed8417d532c09487be0999"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","103a8e098f9b1b7fc41cfbfde3165913"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","451a0ecff966259e4f560e32aea22c10"],["/2020/09/04/CSAPP-实验集锦/index.html","a8c0dcc2ff9a9884fe954c3a512a05e4"],["/2020/09/10/计算机网络-实验集锦/index.html","3d41bf98e3f2d74a9d9ad5fe0f80f430"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","c11f71afb4d61f1ee57f854313823e50"],["/2020/09/30/C++工程项目-JobShop/index.html","086f636aa17caf694fe4c62e6f54f115"],["/2020/10/09/交换原理-实验1-时间表调度实验/index.html","a3801a08ab894d936ad6df12bba386bc"],["/2020/10/09/交换原理-实验2-摘挂机检测实验/index.html","4fb0f16898dce3c6e3b8aedd54a7d8c5"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","dc916a577c5ff7d04b40ad191ff9019b"],["/2020/10/09/交换原理-实验4-拨打SIP电话/index.html","8b45fdb534470e0a8776b48c2e3b72c8"],["/2021/01/04/Android-项目集锦/index.html","5840e58cb570459e8401f69f79b172ed"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","955f2011671a8d1a29e20c03fb25b1f2"],["/2021/01/04/C++工程项目-travel/index.html","718cec5c0b479fc99a813d7d7ab5ba49"],["/2021/01/04/算法设计-分治-最接近点对/index.html","a90326a37bb13c530421f66f881a33cd"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","72478a175d4a03b094d1f3e30976de1f"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","3e8728be4ed83098d5d5545921bcc189"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","441c56bceeb1ad38a1c5cf4006c0dee8"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","da3a2258b71460ecd8d00224ee6da5da"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","26e695dc2390f8590eb4f0bed24bf920"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","d903d8ef6cddef14aeca0e23bb26ceb2"],["/404.html","e9eb65504d5d4b245aafbe3a24120ff3"],["/about/index.html","6ec6c3b8a1c4a00784a1adcdb8a85e0d"],["/archives/2020/02/index.html","770567ce201845019311fb4fd2971561"],["/archives/2020/03/index.html","c85539da634df2d2fb98eea87f2f013e"],["/archives/2020/04/index.html","e0ddcbb9be4b7102b216c80289c9971c"],["/archives/2020/05/index.html","938cb081694562dc2e6db38af14230ae"],["/archives/2020/06/index.html","fbb41eaa50b85ac8a7ff86ee1a2f32d5"],["/archives/2020/07/index.html","5ae1ff2877e97636c3cce0a21fd40174"],["/archives/2020/08/index.html","a098abeee97c7a16936fb1ccfbdb6a62"],["/archives/2020/09/index.html","168696366b3bfca292ce7260981f3297"],["/archives/2020/10/index.html","56e478f8ce921b92974ec8ec9b1e1efe"],["/archives/2020/index.html","2277f6b4a15131a27812d75a31080ac6"],["/archives/2020/page/2/index.html","179151da4aa21fc8a87db3501e786f72"],["/archives/2020/page/3/index.html","14047db8a9bd28ebf0a71c4e6a406a1f"],["/archives/2020/page/4/index.html","689638b0482e14bf68ceaae3d078c185"],["/archives/2020/page/5/index.html","ae025db424307745cd5f2c388333f3de"],["/archives/2021/01/index.html","984a41474ab376d576bb7625b4d5af3b"],["/archives/2021/index.html","e2780fc0af67d4b2cfcd9e06c0565397"],["/archives/index.html","2166ae033e1425d3cc3c2a3aecc6be2d"],["/archives/page/2/index.html","2166ae033e1425d3cc3c2a3aecc6be2d"],["/archives/page/3/index.html","2166ae033e1425d3cc3c2a3aecc6be2d"],["/archives/page/4/index.html","2166ae033e1425d3cc3c2a3aecc6be2d"],["/archives/page/5/index.html","2166ae033e1425d3cc3c2a3aecc6be2d"],["/archives/page/6/index.html","2166ae033e1425d3cc3c2a3aecc6be2d"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/bb/index.html","a69516ef3dae9fbfc5b63f03c95d1339"],["/categories/C-C/index.html","99bfa3a1bcef1f1ae0b818705540a32d"],["/categories/C-C/page/2/index.html","10b8b2e6b40b263fc6cf29b89a4be81f"],["/categories/C-C/拓展学习/index.html","a88e31a666ea826cf2778dfa36a2094b"],["/categories/C-C/操作系统/index.html","89043d5a852ba93b3c1565093c5e8afa"],["/categories/C-C/算法设计/index.html","220d3e1350263f5d011fb0a86ad541c6"],["/categories/C-C/编译原理/index.html","acfbe4bf38e648eba1742362762a158c"],["/categories/C-C/软件工程/index.html","d05e7e35a3718f03e66052a5c01ad1d6"],["/categories/C-C/项目/index.html","4e1f3aabccbab4d88839cd2adb579621"],["/categories/Java/Android项目/index.html","d2ea8e5eee571e532fec982d9005e3ce"],["/categories/Java/index.html","3260dcc8e3b3570b80a0772cf77c031f"],["/categories/Linux/index.html","d8c0358d16c74e14415f12fdb044c325"],["/categories/Linux/上机实战/index.html","9e1f65236146d9f892a66275dd4d7cdf"],["/categories/Linux/习题/index.html","424d3ad0775b640e764acaa1d82158a4"],["/categories/Linux/拓展学习/index.html","25c0732ece60f651f51bfed6b4a25f04"],["/categories/Python/index.html","f2770601f1963e713240d2b470abec0d"],["/categories/Python/爬虫/index.html","55be61c9e1707da019626a537a1e7c6a"],["/categories/index.html","710f6b70d497c46e406b2381b0e74971"],["/categories/交换原理/index.html","41e22971928a01a5b001192f4f001374"],["/categories/交换原理/实验/index.html","51be431ed001b02631e5bbb910ecb66a"],["/categories/其他/index.html","0bbf443b8375085a6591737cec1ed3cd"],["/categories/大数据/index.html","72048ef681d032f04e2150c18f16c470"],["/categories/大数据/习题/index.html","881a0664fe2d293a12100a0209d432ef"],["/categories/大数据/实战/index.html","7b3c621bf39b4fc8697c6f46bc47ae77"],["/categories/机器学习/index.html","a047369643dcfebb888c9ddf76d9de3f"],["/categories/机器学习/实验/index.html","4b1c8862dadd4ec5b9dffe7f2861efcb"],["/categories/机器学习/知识拓展/index.html","d379573a1d93cc9c551bbfc04e1a59e9"],["/categories/现代交换原理/index.html","eeae9666749aceb3f285a26962227fbe"],["/categories/现代交换原理/习题/index.html","d993b2d4b879730aac9692287bfc4cff"],["/categories/计算机系统结构/index.html","f37e5a32d1bf1270e2a2d744bacf88fc"],["/categories/计算机系统结构/实验/index.html","4f5107008e142019df373a97c859ca94"],["/categories/计算机组成原理/index.html","c1913e8edf16d8c1069f6ad9a1a66b7c"],["/categories/计算机组成原理/实验/index.html","dd3091de499b3ae1924e28ffbcb94c2f"],["/categories/计算机网络/index.html","3aae0d648f6425b37cbff56ac859e566"],["/categories/计算机网络/实验/index.html","d7059125c08dd09d45d51b0f134c40e3"],["/categories/集锦/Android/index.html","58b4cdc823d0e8da4d2b33ddad7bf2dd"],["/categories/集锦/CSAPP/index.html","b84fa26a1f26beeb061f13a7845b2a72"],["/categories/集锦/Python/index.html","a944401aad85d39e23cac2518ae78c61"],["/categories/集锦/index.html","241cc603ebe86bbe8e5cb23e1b227c52"],["/css/first.css","ac2d0010102d22ded3aa536d16e52b73"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/message.css","b0ce3ca232f809c8d7a85c79bf1f7ff8"],["/css/style.css","f33cadc59019a1af1d898b222bf512f6"],["/friends/index.html","d356938d3d345b916695c5458b8b0b1d"],["/gallery/index.html","63f4bc7639ebb10460b077618443184f"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","7447275c7c9b64a8abcf401b80f382b7"],["/js/aplayer.js","f10ee7aff4ce278045da925ac6510d29"],["/js/app.js","d14976ee97145aa14568c13c6554dcc4"],["/js/jquery.parallax.min.js","38cf4791e24aeaa8101bd2c816400718"],["/js/message.js","38da736cdf513c9a15a0a2a16a34eeae"],["/js/plugins/contributors.js","23ba3efa08d9fb1aae753ceaa6df2711"],["/js/plugins/friends.js","239cf9c648af390f866ed00cead3e23d"],["/js/plugins/sites.js","15bb31fc27abc888b17cc5d822808604"],["/js/rightMenu.js","19b2a577c30a04732f02b86bda62e0b9"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","cb984a05a16a2e66d080fb5287485c57"],["/page/2/index.html","363351368d88e8d5f6bf57f1afb3207b"],["/page/3/index.html","0e0a2e801850ecc2a334649f635268c7"],["/page/4/index.html","64b2c74823f54d94955fb7be54f576d9"],["/page/5/index.html","79181fd5b7fd8c9072cd4a9fb31257df"],["/page/6/index.html","50dd668ae4fd564a3fe0fa8c53f312b8"],["/shuoshuo/index.html","d1d48e46548451a2e1834ac567a22ca8"],["/sw-register.js","640124b18f953c51ae89312ae5c77b5f"],["/tags/AI/index.html","a6552092fed8a400080a632afcebec45"],["/tags/Android/index.html","001e876b959f17e8422e8d77cc050c63"],["/tags/C/index.html","691cedfec268187f33205556d0c092bb"],["/tags/C/page/2/index.html","bc423aea34ad59d22dd598ca0f9281ed"],["/tags/C99/index.html","873a1aee23b8f0f0550330a2d037107d"],["/tags/CSAPP/index.html","3d24e8fc1e2df3682b5c83afb2895326"],["/tags/DNN/index.html","39fe50d53e38fc655bd1ca6d85fbbe4e"],["/tags/DNS/index.html","283cf9f3492e6d0c02575d6283d8e180"],["/tags/FPGA/index.html","49a0a40b59aa464ef78684e39e3bf0b9"],["/tags/HDFS/index.html","fae3bdf54b486eda4a77dd14da351af1"],["/tags/Java/index.html","6829dc2141dce68def7ecca0c1b933ac"],["/tags/JobShop/index.html","9ec838c7c03e29ce122e27027c2dde69"],["/tags/K-Means/index.html","c38e6a1be7cbc065046bfccb7b3e1555"],["/tags/Kafka/index.html","8450b6168dd410b5b14581c15e7e6bfe"],["/tags/LL1/index.html","0a369197167d6230613c033aa24f406e"],["/tags/LR/index.html","4f476deacf3538d61d4683825a576e6e"],["/tags/Linux/index.html","d402eb4642c9a0ec44c5890c4e789ddd"],["/tags/MIPS/index.html","6ad4b9fd722b92a77e9f46ff06f75114"],["/tags/MOOC/index.html","b021aea4a333fd3d36069e794dc65744"],["/tags/MPLS/index.html","a318893a71214677b5552aab2363f7b0"],["/tags/MapReduce/index.html","f1fca0f1cc790e5348c9c9c17144e17d"],["/tags/Matplotlib/index.html","18a2d8eef47cf9fdf94fa81207148c4a"],["/tags/MiniSYS/index.html","299e2ddcca31c11f8626c6a728a21362"],["/tags/Python/index.html","912b10e118489c77d40f1108b58e8552"],["/tags/QT/index.html","efe80913928ade025506f8fb7cefdf9b"],["/tags/RNN/index.html","8e007ab74254064fbc35acff70177af3"],["/tags/SIP/index.html","65ecd8a92b6fb11d0b71195f4e720de1"],["/tags/Scala/index.html","0b088bd844e2adc4707ae2b0befd79ed"],["/tags/Shell/index.html","52e74be4dc3ee2e71ed958b7c82bd6f0"],["/tags/Spark/index.html","3d60d6c14239c4690750920f10c374f7"],["/tags/Streaming/index.html","bbf6b392d1cd1258728ea08b2316e21c"],["/tags/Struct/index.html","76c1f18163e844dc8f546514407adb34"],["/tags/Verilog/index.html","c58d9e5a680a7f9f06e914524761def7"],["/tags/first/index.html","a627adfaf02bd4215d3144f222eac6bd"],["/tags/iPython/index.html","0fccd8fc3a78daa5958d0cca6be75fd4"],["/tags/index.html","7add86c007ecdcf3d0ef408fe55ca759"],["/tags/ls/index.html","a59c25d45e985f5f36c80edd3fc3ed49"],["/tags/习题/index.html","d06d643720102e9ed60018e17b6cbd53"],["/tags/交换原理/index.html","355a5e5a4705c0d2b8dee79c55a77242"],["/tags/人工智能/index.html","af394365b49fdfe57b5aec4979bcfe48"],["/tags/信号量/index.html","9d958d8220004fdc20c276a98196f318"],["/tags/内存管理/index.html","70761fa45284a9b4e603aa52a40c7857"],["/tags/决策树/index.html","295649a55c311d4c5486768ce0da7518"],["/tags/分治/index.html","02eb41019a6add27fcc2a5458043ea4b"],["/tags/分类/index.html","bceb6f9180dd6c3c12c0d013dd2c6ff5"],["/tags/动态规划/index.html","1defadfd5cf96b3faf02f31c12fbe386"],["/tags/华为云/index.html","5cfb5b2cd56ba653f8c546efe7d6538f"],["/tags/单词计数/index.html","49d2b8ed74b8859e37165fab041bf4b3"],["/tags/可视化/index.html","dea7c4049e87121c8e026318ec1bf5f9"],["/tags/同步互斥/index.html","79f61611b8387c5541a2de0c7e866ce1"],["/tags/大数据/index.html","e817657e8a7a8a34a403b7c862cd91a9"],["/tags/学堂在线/index.html","927a4d17e9dbc97b4d39258336c7cfaf"],["/tags/实战/index.html","6971c705eaa3023d6889ef507120825d"],["/tags/实验/index.html","4d2b036ae9b579a1335d67e717465524"],["/tags/实验/page/2/index.html","c29bdb69241415454149adab940688ad"],["/tags/小游戏/index.html","2ab49226e81028d70276f674b59ca411"],["/tags/工程/index.html","816feaa0ba088a868d77ecb3aa5ce798"],["/tags/工程/page/2/index.html","2220a4e56ece6a6e3db13948d7940126"],["/tags/手写识别/index.html","e739e98a78aa435c0d5a6577cb48f29d"],["/tags/拓展/index.html","5d94ffce0a22b5b4d9b1badc4ab11ba8"],["/tags/操作系统/index.html","5516f6fef17859142af9e8583d8a6f5f"],["/tags/数据处理/index.html","e344c11607a20842b5ceea142b1c4b38"],["/tags/日志分析/index.html","62525e5682e073684a42e8bfb69431dd"],["/tags/易错点/index.html","6ce3c1e99ba804e43c1b694bdf140cac"],["/tags/机器学习/index.html","2093ee8cc23ef725f55f5cb721d44648"],["/tags/条件熵/index.html","06687df21692548a8315bac1b12ed3ef"],["/tags/正则表达式/index.html","e7c2c49c0242514f161fe318680133c3"],["/tags/汇编/index.html","28f6480d827d980fb9e8e1c9674be0e0"],["/tags/流计算/index.html","78928a54c32df8999011d36f97eeaa5a"],["/tags/爬虫/index.html","15197aa4146534c1c3ec9762c4e638cf"],["/tags/现代交换原理/index.html","8f06a0f95b9964c7ded1c29f257b95b5"],["/tags/生产者消费者/index.html","7f2660071a27531d5283c07830a01d51"],["/tags/知识/index.html","a93368ea3f6b170d5fca0c8cf357f5d2"],["/tags/算法设计/index.html","54ae002e9affbf09da3e157ec9980899"],["/tags/线程/index.html","006e15aad85ffa8abb6f8835c61b03fc"],["/tags/编译原理/index.html","0090545489a7fe2076cb94bc3d6a7f53"],["/tags/网课/index.html","249693e5cb8a06b2ff7a2f919ff30ccc"],["/tags/聚类/index.html","0a9bebcc6ecb36659b2342b4f100d5a5"],["/tags/脚本/index.html","b4cff15590b33414c73c87a9b1f3af72"],["/tags/计算机系统结构/index.html","00f2c6060ff466f81829430c96acd7bc"],["/tags/计算机组成原理/index.html","7d83dc1d6035563eb8f71c00c2ed07fb"],["/tags/计算机网络/index.html","c8539db708d1a5720dec2d88ba03cac6"],["/tags/词法分析/index.html","c8051fded81f28e45441b80c04295a55"],["/tags/语法分析/index.html","878857e722ebc867d6d7fe31d0d44de1"],["/tags/读者写者/index.html","0aa5165fc84ca45648147a05e7228075"],["/tags/课程/index.html","72c987fbec298f5f74be40ce8c7b49ef"],["/tags/起名字/index.html","f82a1e3b35c58b8b8f661d27ed0e7af7"],["/tags/软件工程/index.html","5844894db333a557d2f27423cbf7fc99"],["/tags/进程/index.html","adf7bf7d2346d26b70063ada11113145"],["/tags/通信/index.html","4094cc9d1334f1a0fd4a9a363cc9071a"],["/tags/遍历目录/index.html","788f7850b6f0e4a1853d185ec5bccc34"],["/tags/难点/index.html","0d239a3ed2c547df4b65da26ae39b50c"],["/tags/项目/index.html","acf2a594f668acff23ac9ce20b693f07"]];
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
