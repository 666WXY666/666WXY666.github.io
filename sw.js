/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","8864f0468006d960a8958671e35f4bfe"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","5027e2889354e8d3656748e78441987f"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","3fe0a3b1d5f175131b27a0b2a8e1e143"],["/2020/03/26/计算机系统结构-实验1&2-遇到的问题/index.html","41fde2a2a6087797be440b2ccf8b8a32"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","c176672ec2241dd30f832424cfef2936"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","16097b972c1f9d5da97fd0705d65de46"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","6f03bfd0b6b5da1bcb1aded3486a137a"],["/2020/04/18/机器学习-知识拓展-条件熵/index.html","b09900710dabcbc145445c0706aabd4e"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","ae4d77a8ac4399f5d373b432f4ff5d07"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","fd5260292e4796352587fb2fd76b582d"],["/2020/04/26/机器学习-实验-决策树/index.html","78555e5aa3dac5ff9064095e633eea12"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","1b98b33a3404b46cadd0141997570cb1"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","5a2e46e888ad4468a28d9c8b54ac5bf6"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","12cf3066661e69e787e88c63be2942b2"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","7cda9acee5bbcb105565f6ac661503dd"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","0fd9d90ded2400d9a1c5fbfd308b814a"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","c99ddfd594a1b61d182fcf52e996cde9"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","39814b60d6ae28b6e4f52faa91b684e8"],["/2020/06/11/机器学习-实验-DNN-手写识别/index.html","89f77de0957562f93b1589aedfaae650"],["/2020/06/18/大数据-习题/index.html","a3239953b3a53c481a44748dbe081527"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","a005e3ac968252c149595e49adc2e4e2"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","9ce105a2d043a5b70ba832d89d66a749"],["/2020/06/24/Linux-拓展学习/index.html","f5c6cfb5ace0654772272cb923dfb8b1"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","30253d25e504f68983bee2cd567a83f9"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","1a6a1e8e08e7405617a3c3099681d562"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","f852d2c1ae0a06711b5d8e56d1c6326a"],["/2020/07/15/C和C++的struct使用总结/index.html","a8fcee371d3293beea1d348cb8d86d54"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","e48b04d0536facf90ff1a74bcb8b3a5e"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","8db5979b8b67d6254f5e75ebcd7bf749"],["/2020/08/10/机器学习-实验-花卉识别/index.html","f80b474006fc5990c88af0e15c6e422b"],["/2020/08/15/Python-项目集锦/index.html","96ce7c795e20f0bb6278bcffa396899b"],["/2020/09/01/编译原理-词法分析/index.html","bda6a7d6d43033d1543af58d65c38629"],["/2020/09/02/编译原理-语法分析-LL1/index.html","6c967989a0fc07822ef8c09a2e84ce14"],["/2020/09/02/编译原理-语法分析-LR/index.html","f80bffe662aa7ae774c74edfe6e5a1fc"],["/2020/09/03/操作系统-内存管理/index.html","655519e7d8053fb068c25ccb6796a9a5"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","e7de0e83242906952a6e6cc8f5f0dd5e"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","10f00680649346e3b459316386b0a21d"],["/2020/09/04/CSAPP-实验集锦/index.html","81f3de4d6883f99bfe2233e2df7ec216"],["/2020/09/10/计算机网络-实验集锦/index.html","2db4815a9317efe1584af265d874fe8f"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","2313f1afe22791a4b3c6a6769273b615"],["/2020/09/30/C++工程项目-JobShop/index.html","820332c9adb30bed31e20e2b4b1d0aab"],["/2020/10/09/交换原理-实验1-时间表调度实验/index.html","d0c36e542d39ca3d98934394b6ff0b12"],["/2020/10/09/交换原理-实验2-摘挂机检测实验/index.html","72620287705b28901b034c2575d85d6a"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","275cc1d05501f5764fb7d65f21dc8686"],["/2020/10/09/交换原理-实验4-拨打SIP电话/index.html","f74efe8b6672043ba6783fa828b93b00"],["/2021/01/04/Android-项目集锦/index.html","610f4bafc8aed18f537dbbeb9fac2d1f"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","5b385766e46e609e1e52c88821714116"],["/2021/01/04/C++工程项目-travel/index.html","271b3145fea227dd7b0213733e596b52"],["/2021/01/04/算法设计-分治-最接近点对/index.html","9bb570f7ad0264c14e89b1d1d69b734d"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","25d92eaf037193fca98a0fa28c29d948"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","3d72ce56f3493c95198c1a49a7bec663"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","70cccc2ffa8dc89745b8bfc21a77ac35"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","36df0c8663407a1870b5944ae9920d0a"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","37000f8281d7c16636895ebe110051c2"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","e0342947898f950acbd19c36b4061dbc"],["/404.html","2176cd23a2b35f1da70e08340988cbb7"],["/about/index.html","cbcbf312f43c4a46ab0f32704daa1191"],["/archives/2020/02/index.html","30fc6bb2f33ee4e3a44560ae74989c11"],["/archives/2020/03/index.html","6c8a9afd604194aa55560ff07031438b"],["/archives/2020/04/index.html","d0ed47d78d0a1ecbfc3166b8bfd2e122"],["/archives/2020/05/index.html","dac0cda2d619903552775f9c1d351361"],["/archives/2020/06/index.html","3418b73db59425e7e73bfcb74551863c"],["/archives/2020/07/index.html","365fca0e8cd61d1eb8986441082638ba"],["/archives/2020/08/index.html","61149f37d66e8bc9fb75d8b624339a7b"],["/archives/2020/09/index.html","8e696eb39bf3b6d3e2a131b3dd7ee28e"],["/archives/2020/10/index.html","27ee85249cb415e85fbf22196ca71d61"],["/archives/2020/index.html","93845ac8b0687eb6ab84847616247dce"],["/archives/2020/page/2/index.html","26a570907b4bcf5d28d8065bec94fb5f"],["/archives/2020/page/3/index.html","0f4073e840fbdb5686fadbc03eda02b8"],["/archives/2020/page/4/index.html","bb3232b05687a3ba39c00616398c825b"],["/archives/2020/page/5/index.html","b786347a1ba823331b18377e94e10a84"],["/archives/2021/01/index.html","2161c288716256db28363638892ba937"],["/archives/2021/index.html","acabd3807803af191762819b6506d351"],["/archives/index.html","1aa7c926b1323b80be79395474dc5de9"],["/archives/page/2/index.html","1aa7c926b1323b80be79395474dc5de9"],["/archives/page/3/index.html","1aa7c926b1323b80be79395474dc5de9"],["/archives/page/4/index.html","1aa7c926b1323b80be79395474dc5de9"],["/archives/page/5/index.html","1aa7c926b1323b80be79395474dc5de9"],["/archives/page/6/index.html","40cb6de1da2b002ef4a5543551b78f3a"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/categories/C-C/index.html","834a364ce19c46b36771a6ec6a190635"],["/categories/C-C/page/2/index.html","7add23bd771fd4c8f4a043345dcbc5e5"],["/categories/C-C/拓展学习/index.html","38e3350a43998ff5c5228f3b0de3fb9e"],["/categories/C-C/操作系统/index.html","9ab7572292d2adf66241eb17e2767e8b"],["/categories/C-C/算法设计/index.html","b20430260a6b4f1d9f49302d9c46f04f"],["/categories/C-C/编译原理/index.html","985a5fa255b157cb149bcfd6a0990940"],["/categories/C-C/软件工程/index.html","1008cc5139ac94c08fe15901d67f2bf5"],["/categories/C-C/项目/index.html","c957b5750d8d7e4ee43cb55fb49c8f0c"],["/categories/Java/Android项目/index.html","53afc10f63959f766f93421fd4c5fab5"],["/categories/Java/index.html","28f3a8aa8afdacd483e1e60c3fcb7d53"],["/categories/Linux/index.html","97739c31e53d3d31863d17314b4e3b20"],["/categories/Linux/上机实战/index.html","67bc86a95239397701f9b7ca1e958bb6"],["/categories/Linux/习题/index.html","588069fd2a08bbed9927874672423a5a"],["/categories/Linux/拓展学习/index.html","0fffeba51342498b2ff3a1b7de2dc40a"],["/categories/Python/index.html","7671721b9871ac983f56fef9adcc36a7"],["/categories/Python/爬虫/index.html","62983ce0338937faaa3b3da0b97937e1"],["/categories/index.html","48ae1beb800086e91469e1f07242d428"],["/categories/交换原理/index.html","9145f23e2ecdbd6c64bc4bc48910a85d"],["/categories/交换原理/实验/index.html","7b10df3cd805eebea71221ac1d64851e"],["/categories/其他/index.html","ed1c1078f2dd6f340fa66c6c5ca1da24"],["/categories/大数据/index.html","f33e776103b2af9e7905c22bf6994bbd"],["/categories/大数据/习题/index.html","262f74bfe247322007c01a0d9e56af86"],["/categories/大数据/实战/index.html","c0018dd0585aec7955818f2b5eb814dc"],["/categories/机器学习/index.html","fcc03baebb6b29d1c6e64e0655a396bf"],["/categories/机器学习/实验/index.html","07a5e98c3966831664c181ec2f67ef03"],["/categories/机器学习/知识拓展/index.html","b4b78d72c23d0968a57efa65c6f084c3"],["/categories/现代交换原理/index.html","40cd81fb343b0e894d15e2cce9e53fb2"],["/categories/现代交换原理/习题/index.html","2d7454f7723ab82e9c26cfd0d42ae1d6"],["/categories/计算机系统结构/index.html","cfcc1b1d9d5d60288b5d4dc01d1bdbb2"],["/categories/计算机系统结构/实验/index.html","278c112d711e75c7d34e9b37cace89c1"],["/categories/计算机组成原理/index.html","d0cbcebbdcc9c69c90c3fe5e8b7537ad"],["/categories/计算机组成原理/实验/index.html","c9ed14e12c7161ca57a83b6287771553"],["/categories/计算机网络/index.html","68e00ca825c214f65e493f86ad7b4ef7"],["/categories/计算机网络/实验/index.html","c5c53c62cc2ca243bae8370911d5f7b8"],["/categories/集锦/Android/index.html","4e9a31e63461bc2de652d67be67da239"],["/categories/集锦/CSAPP/index.html","f32fda5fe1d42e98a27e8c155c4d1ce9"],["/categories/集锦/Python/index.html","3f66ae908fa67f6b80297b5955dec904"],["/categories/集锦/index.html","62b8f9d39543ec31cd963ddc9063c6da"],["/css/first.css","01a90baf99fa8f190becabd973782198"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/style.css","d6b605a251a052e3c03a515d025edd45"],["/friends/index.html","0855879c8a021a56a428ca6a4a4d10d9"],["/gallery/index.html","63f4bc7639ebb10460b077618443184f"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/games/tank/index.html","a4a2448b8b53e14bf7bad5c1f71e614a"],["/index.html","6cebd4279ff05b5683ad6152b2c180b9"],["/js/aplayer.js","a0a8f225cab4df42a6e0164b45d7641a"],["/js/app.js","1948329f2fd7e750ade4bdc49138c09b"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","343afcb9a06ebed899b491b66437031d"],["/page/2/index.html","a98de5379d759ef213b9298f0a45988a"],["/page/3/index.html","591ac749e75bcd75cd4ebfc78643f6e4"],["/page/4/index.html","d65aa793d7ad09665957dccbd420355f"],["/page/5/index.html","40e77c69d2533fffd63bfe2055aec174"],["/page/6/index.html","bac3fa1f3d97a4937081392eb1e4c259"],["/shuoshuo/index.html","10281d8f8773e05e4aec83fcc6ac207f"],["/sw-register.js","f46ba7c7bd31ce1e7020c0d1e43bf525"],["/tags/AI/index.html","4ac6bfdbb98c92c80868d4b18d49c384"],["/tags/Android/index.html","413124de426d1d7b45c2ad5a7963c808"],["/tags/C/index.html","c8743d0bc28b6a1df4e58c7ba967ba96"],["/tags/C/page/2/index.html","886b2a20ddba3f5de8b7b08bdd7458fc"],["/tags/C99/index.html","4305de941cc133c517abde77674bceb7"],["/tags/CSAPP/index.html","dda0fcb80aa8f05a3a0774a4e187a28f"],["/tags/DNN/index.html","0103cf88cb02e42d4e09760007b74bf8"],["/tags/DNS/index.html","5d87830e7a2bb08e5e5e151240880c50"],["/tags/FPGA/index.html","fb5f0efc4b5fd006aab1cb9ee1eee5f9"],["/tags/HDFS/index.html","fa1e66b1eda488c7b456921d3c005f3e"],["/tags/Java/index.html","a436de7bc4fcf53c6e0b3f6ec23971b9"],["/tags/JobShop/index.html","79b53f410b92c16041270420292d6de6"],["/tags/K-Means/index.html","309caeaf90f914b77e20ef76e54a3fde"],["/tags/Kafka/index.html","7dd18d07069b2c0be1ba997552269a6a"],["/tags/LL1/index.html","d595c93950d0c486d5b0c146eb689d7a"],["/tags/LR/index.html","c77b5518d5c46b78c476e2999dd11599"],["/tags/Linux/index.html","d5c9abeedb89d4cf3d1915ec1fa7d7e7"],["/tags/MIPS/index.html","891192f9df993821247d8a8109bf1ce9"],["/tags/MOOC/index.html","5ea218089f9efe6f4bc74e059f1fb4f2"],["/tags/MPLS/index.html","c28b72c45b6f90dbcbbf35d1f1c52c5d"],["/tags/MapReduce/index.html","e1021a28c2fe5abb0a7817884f5a0bce"],["/tags/Matplotlib/index.html","5c2a7d1cd67a72ccb78530ddec4933c5"],["/tags/MiniSYS/index.html","414a44ffa5070e442ea6f9ce2f2b9587"],["/tags/Python/index.html","669695df4a4baaf3b3db0f2b27bba981"],["/tags/QT/index.html","0fa6119a4e3dc8941691ec78412f4d6a"],["/tags/RNN/index.html","8c39e1ffb2473c3ed1662604880946fe"],["/tags/SIP/index.html","515e09bd762fd6e1fbdce661edd1992e"],["/tags/Scala/index.html","91e9e45b6bc769dd59816e76c6d577a0"],["/tags/Shell/index.html","83e4d6c1a41795d14e1d0fdd39961427"],["/tags/Spark/index.html","cb64fdebc556bd7b9d1edfab77a882e3"],["/tags/Streaming/index.html","30928068d4fd39a0f5a19a06b5d18c7b"],["/tags/Struct/index.html","fe7f39357315978bb51aa2a21e661f81"],["/tags/Verilog/index.html","bfa34e74970e50aa80239bc28401c4cc"],["/tags/first/index.html","fef4e775206402af7d09caf7a6220f70"],["/tags/iPython/index.html","f7d39dd3b995e9462ea20f1bb88c4b29"],["/tags/index.html","aef778363ab12fdf84cc16be22897383"],["/tags/ls/index.html","f0e00b3ae424993fd4fc1781f4a00f2e"],["/tags/习题/index.html","e2279ea52a068b3a1fef5c40362c92cf"],["/tags/交换原理/index.html","a3a87de250df7ab6055e1f61ecb080ff"],["/tags/人工智能/index.html","edab658d2120a0ab516c0866caca4e77"],["/tags/信号量/index.html","83d0cc73c70330b746639eac4b6d516f"],["/tags/内存管理/index.html","8aa1ef70c3ba53da94968cc21ca7a7b7"],["/tags/决策树/index.html","8295561d9479bed2053b7c22cf6df449"],["/tags/分治/index.html","7a97debc67a338e30b56a3140de4506b"],["/tags/分类/index.html","21f88f6eaed85b52d003574e24fe6cbb"],["/tags/动态规划/index.html","686da5d1b51e4d85ef071a84cb695f90"],["/tags/华为云/index.html","a6be00c1172767acb2a6b04db1469378"],["/tags/单词计数/index.html","24a918bc960a57299da2d9fc563e2139"],["/tags/可视化/index.html","404e681d4da56bc34c8ad06dca32e557"],["/tags/同步互斥/index.html","da7b9e53abf48ea2f4d837fe842ede40"],["/tags/大数据/index.html","7115204e3d24bdeb425352177dc46047"],["/tags/学堂在线/index.html","6c62a4a1c5f367d9130c81a52487c263"],["/tags/实战/index.html","c2775c043f3cc4d01aaa42670f62a958"],["/tags/实验/index.html","f0f2726e854f8047f2fd5bcb4afcfb55"],["/tags/实验/page/2/index.html","01a10d48fbf44df9e8008a2f227273be"],["/tags/小游戏/index.html","a1c2d42369340af5dbbf74f481b560bc"],["/tags/工程/index.html","989cdaf4cc563bdafa1bcd31ae255181"],["/tags/工程/page/2/index.html","c1a7fdad468dae1c799595fe18100aa5"],["/tags/手写识别/index.html","b4b36c6024e9e33ad4a402dba45d15c2"],["/tags/拓展/index.html","1592863d58475b26ff8a7f32d2be1f76"],["/tags/操作系统/index.html","e45d0eec8d6acda2fc97a3a127bf7f7a"],["/tags/数据处理/index.html","137c4e66cf40c6a49c5ae8ca1b76dcd4"],["/tags/日志分析/index.html","451910736094d89690f715fdd9a1da16"],["/tags/易错点/index.html","9a84007e0875e8b58bd314937230009e"],["/tags/机器学习/index.html","f3a6a32c22b5678aa74ff7d09f2b2296"],["/tags/条件熵/index.html","f84c066882dd1b1f30e0faef767da1a3"],["/tags/正则表达式/index.html","0b393fc3ed6b07a7bf4688f78ae63502"],["/tags/汇编/index.html","f54b9c7163f4ec8868433a530d46c23b"],["/tags/流计算/index.html","5c506eb00db0060d9908e59e9964c9be"],["/tags/爬虫/index.html","67569e608130e1252765d9336d1b8b32"],["/tags/现代交换原理/index.html","af80bf084507696bc4180e1ceb673602"],["/tags/生产者消费者/index.html","cf5c6ffc2537e81b5348387a1085bfb1"],["/tags/知识/index.html","5044f4d0c5381a99d6e948d05c4f2afa"],["/tags/算法设计/index.html","72c612d39ba4347b9deb4519bf37b459"],["/tags/线程/index.html","a48a212acf513821acfa761ee653a2ce"],["/tags/编译原理/index.html","968fba1c21ef9e1cc418a8ce2a8865c2"],["/tags/网课/index.html","f08086081273f81339188e2041903df8"],["/tags/聚类/index.html","c556a39f07aa43d1c06f044763794a8a"],["/tags/脚本/index.html","dc38df3ff43c73882764d55dce6a4cf7"],["/tags/计算机系统结构/index.html","08ac6aedac72392bca901ddccf59d683"],["/tags/计算机组成原理/index.html","2982ca37c4195467d70d4c60b9454370"],["/tags/计算机网络/index.html","35b0adb3b3c6cf0a4b07190afd872c85"],["/tags/词法分析/index.html","c63ce3f14dc1041be7b5d2fa7f69ee59"],["/tags/语法分析/index.html","fc49bf1fe2bb6cb36cd73c1fd17169f3"],["/tags/读者写者/index.html","a6959dbe6a354edee4e1874c741b3c46"],["/tags/课程/index.html","d9e2e38958402d1a3a7bbd2e6a896381"],["/tags/起名字/index.html","1393e6007d1ac1baacf497477ae42f1a"],["/tags/软件工程/index.html","a5422f4e66ac3a42886c48e3a4eea2ee"],["/tags/进程/index.html","48b0053008199dc9400e6d22ca13753a"],["/tags/通信/index.html","b7820f9c7a263bb6569bf415b4b318cf"],["/tags/遍历目录/index.html","5399123b8ba3ea1b8ee4f043da0884e4"],["/tags/难点/index.html","e7b1af0472fdfa1d117e4fefe850d2ae"],["/tags/项目/index.html","a746ff1b7376c1c68e6be05b2e2b9e3a"]];
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
