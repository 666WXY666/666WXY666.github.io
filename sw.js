/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","93f051fb5e056bdf21669a9a825cba51"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","340374231016c190b677543928341c9b"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","11498e3d2e77e1d7d00b721f4b140244"],["/2020/03/26/计算机系统结构-实验1和2-遇到的问题/index.html","cae5a4bcd668711f05f6665a905acb2c"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","23ee3a1fbff89ed8d9e5eafe39dee1ee"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","7405604c140deee9d05a26ecd58276fb"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","445a2f77e8a45c5c18386fd52040c964"],["/2020/04/18/机器学习-知识拓展-条件熵/index.html","d135719473b93ab505ff46fbdd142dde"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","dbf2913a0747117b8a21ea2bd1fe18a5"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","08fc46edc131438559cd7e6f4b43ce58"],["/2020/04/26/机器学习-实验-决策树/index.html","6e8b4af07e6b2347e6842bfec066fb6e"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","71ffe83b28ae89d89e0eaef9da4c8a61"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","f51da03658696d172a955116f50cf425"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","3353e039d13acaaa0a7960977dab6d71"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","ce85ad70ce8e576dfff3dbcdb9ef80a4"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","bfce997fef7faaec11c5f0d3270a5191"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","e7ba6037d8fb29ff5daeec2a59271866"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","6f1166a375aa50b2c58dfe36bb16f083"],["/2020/06/11/机器学习-实验-DNN-手写识别/index.html","b6f864543e59e2306cdb059ffb9c4a79"],["/2020/06/18/大数据-习题/index.html","a5385781a59008444f5b1f9fafa1a2f9"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","148f790aff2cec9cbf3dee621263d3b4"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","a0d85a150a39b82a885915dc7bc50342"],["/2020/06/24/Linux-拓展学习/index.html","6956b9d70b60e46221c29a3cc8b69b74"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","f9208bba677eff2fa598c3bdd27b1af4"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","4c4fbe946a409f1c7b81f12fd8485271"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","fc6d92565e4fbf6c9e8442cc3b9b33e8"],["/2020/07/15/C和C++的struct使用总结/index.html","a378a641aa80949c5fdfd8c1bea76dd7"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","41a415d4614b7d09dff44582b5a8201a"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","b7096f4c13c0d4e70bea5a174cb9a93d"],["/2020/08/10/机器学习-实验-花卉识别/index.html","ad6e05a3f795b3fde1e6dfecd25e2f4a"],["/2020/08/15/Python-项目集锦/index.html","a323b2ac70a3fb7ffa7d7837d74319dd"],["/2020/09/01/编译原理-词法分析/index.html","cbffe1a5cd35a887533aaee88abd9f23"],["/2020/09/02/编译原理-语法分析-LL1/index.html","02677d0d7bf3a9cbb8ad41594b7e67ad"],["/2020/09/02/编译原理-语法分析-LR/index.html","e08cb92a13538e518dad14113e36069c"],["/2020/09/03/操作系统-内存管理/index.html","a6651986610b733811efe77828ec3430"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","7d4101fcbba73639618a4d24d2b86a9e"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","b38802c770aa958d5624708b9493a656"],["/2020/09/04/CSAPP-实验集锦/index.html","9674041b26856e541b8b566124a3bb9e"],["/2020/09/10/计算机网络-实验集锦/index.html","b60a5c192d99b44ce679eddcf7fcd661"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","7c6d7f0976e151a60c87f0dd5b0c02b1"],["/2020/09/30/C++工程项目-JobShop/index.html","5a0ab99a9eded7f39a16c3c227706b99"],["/2020/10/09/交换原理-实验1-时间表调度实验/index.html","70ef1e3c66df4e3f57da4cac26554e15"],["/2020/10/09/交换原理-实验2-摘挂机检测实验/index.html","2a23341932d0f4ab16c5e7b59ca76b3f"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","ba506da20611e1ffb58d60cb199366f1"],["/2020/10/09/交换原理-实验4-拨打SIP电话/index.html","4277bcf1f9decf33ca8f56d96dd31cc2"],["/2021/01/04/Android-项目集锦/index.html","724d327f1a02f664fb5f54618cc48e2e"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","8215a8c69acdef88a3903948a03fff7b"],["/2021/01/04/C++工程项目-travel/index.html","86272e252aa7d887cb540c2e9ef7376e"],["/2021/01/04/算法设计-分治-最接近点对/index.html","acd3e83091d4174b54353927e075ca1a"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","1351fb944836e114038475138282dd66"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","121e5df96505ff9c3879cb406239c02d"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","b4afc0c532c30a6b664280cde232a4ea"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","5a55e3d1cf45a8cdb9558dc1d7b1686c"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","1513c2c3ff6c1614575058c1f84945be"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","0fd663c213f4ab8b029337766aa8dbc7"],["/404.html","4edd841a179f11b56610ad3cd62ca307"],["/about/index.html","f4fdc90036b668f6e46944fc7be847e8"],["/archives/2020/02/index.html","86a3474a89963e9ac87d37390d1e203c"],["/archives/2020/03/index.html","e8cfc25ba9459259ce95ec4bb7408aa7"],["/archives/2020/04/index.html","b229b0f93bcc2576d776e4f8456ddced"],["/archives/2020/05/index.html","830e4ed421c59e264e2589b1422e66d1"],["/archives/2020/06/index.html","aa92e7383d43346248a0781bcc079522"],["/archives/2020/07/index.html","0162d37e68c50c55b811fa7ab1359f07"],["/archives/2020/08/index.html","6a0509da54495caaeb6422cdfe1eed3a"],["/archives/2020/09/index.html","3e09cb666107abbcafc081216bafad07"],["/archives/2020/10/index.html","10752ced28630e2f44a1dcd16b8dbfa5"],["/archives/2020/index.html","f3e1b82110db11059b9bd04d5dca720e"],["/archives/2020/page/2/index.html","a011380ede7338a306c784cf8f28b549"],["/archives/2020/page/3/index.html","954eae1b7859439e0983171c86d642ba"],["/archives/2020/page/4/index.html","3220bb4119d1187cbb4a10f8361934b1"],["/archives/2020/page/5/index.html","a180ffa605cc3e61e4f444afc9ac8a88"],["/archives/2021/01/index.html","7dd33aff4087bb9ea90c36235ac4de45"],["/archives/2021/index.html","33fba963f5c3bdcc4365440c774c3f13"],["/archives/index.html","4742ef561c767fe9a7c839a2a5cddbd2"],["/archives/page/2/index.html","4742ef561c767fe9a7c839a2a5cddbd2"],["/archives/page/3/index.html","4742ef561c767fe9a7c839a2a5cddbd2"],["/archives/page/4/index.html","4742ef561c767fe9a7c839a2a5cddbd2"],["/archives/page/5/index.html","b8f3347dfe6e57e5bdf560311de04476"],["/archives/page/6/index.html","b8f3347dfe6e57e5bdf560311de04476"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/bb/index.html","a8d53852586a028d5f397a514c31ddea"],["/categories/C-C/index.html","35b2f661210d473b5112f9b8405ab1d9"],["/categories/C-C/page/2/index.html","07df630c7d3a0a3248126df47e96b1be"],["/categories/C-C/拓展学习/index.html","04daf74a374dcb51272d4d3c09b7b856"],["/categories/C-C/操作系统/index.html","5f747d698df6338030602ff2031d438f"],["/categories/C-C/算法设计/index.html","78feacd2e7f10f91503dfbef358f7aa1"],["/categories/C-C/编译原理/index.html","13666a9b860a850674fedd8493686370"],["/categories/C-C/软件工程/index.html","fd394e5dd83a9c316f02d8d8aada91e9"],["/categories/C-C/项目/index.html","b29384a16de3034ddaf8ad3ec5a6c301"],["/categories/Java/Android项目/index.html","6750fdfc502d494ff922d7cf899fb0fe"],["/categories/Java/index.html","656ec2f67873ba74a260dc6317d8619c"],["/categories/Linux/index.html","a2f20466c4240564cbc763691815c355"],["/categories/Linux/上机实战/index.html","da424aa75efc928821b20af850440b02"],["/categories/Linux/习题/index.html","76af9eab9aa687cd4b9726acb9aead04"],["/categories/Linux/拓展学习/index.html","c6031ed27273a27cc7ee0634ca930e6b"],["/categories/Python/index.html","71031aec0fd44b6d6e859b1704ad491d"],["/categories/Python/爬虫/index.html","860b3c9268f254121e63bc3c1fa79d89"],["/categories/index.html","5d301f3484d3df3745b20db911e164cd"],["/categories/交换原理/index.html","3e92f580bbdac92e2dbe2ab9ed910bed"],["/categories/交换原理/实验/index.html","c14a7e17a7633586263e380fe11566ad"],["/categories/其他/index.html","2b73cd956831f455b0726db81b085e11"],["/categories/大数据/index.html","7ad6fa64e7abe501b3b5688ed35af1a9"],["/categories/大数据/习题/index.html","7606c846533ca8cc2145340a24488e48"],["/categories/大数据/实战/index.html","9f1a99d5c73e512c936b10636ab08589"],["/categories/机器学习/index.html","2a0bd77187cecfac036c7c295573a532"],["/categories/机器学习/实验/index.html","b46d3d052720f730ab77d1be09e1465e"],["/categories/机器学习/知识拓展/index.html","49764426d59c6f657a11aacd95e1fe2a"],["/categories/现代交换原理/index.html","8d32d4934b6c0cf6cf38cc2e3f406ecd"],["/categories/现代交换原理/习题/index.html","8a43b04d32ac561d0f29fd024207ea6c"],["/categories/计算机系统结构/index.html","d7daa3c9098d6ca2da13b58a64a59a4b"],["/categories/计算机系统结构/实验/index.html","873bbd290e27ab91c049bbce100c0de2"],["/categories/计算机组成原理/index.html","d79c021261165068fa2ec2d31f66534c"],["/categories/计算机组成原理/实验/index.html","3fd4810746268f8914fd6af8b8bdbd8f"],["/categories/计算机网络/index.html","212597f87296fc21dcbca23e2178eee6"],["/categories/计算机网络/实验/index.html","f1bfabbd5fd1caf2969176c50f2312b2"],["/categories/集锦/Android/index.html","ab4122442ebcb2f99289ab2a7c05f52b"],["/categories/集锦/CSAPP/index.html","c09ee31c8346d0b245d347ab74064814"],["/categories/集锦/Python/index.html","43a482effd7fe88501e5ce424b542b37"],["/categories/集锦/index.html","57d2bf9c30d5129703668e8cee718f90"],["/css/first.css","ea01aa1635810499a5ade558f4f81d56"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/style.css","6bb0e006bcdf6e96b6708cbc5b8f868a"],["/friends/index.html","c0d755dc5ab3f0661ae04a8546dd62f2"],["/gallery/index.html","63f4bc7639ebb10460b077618443184f"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","c0a6ce1ce2885221ced9d98c2ad01834"],["/js/aplayer.js","6e605f0855251e101d3024646f3eac60"],["/js/app.js","1948329f2fd7e750ade4bdc49138c09b"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","efc94796e8007ec451a58bed66dd142b"],["/page/2/index.html","192039699d6b59dc2dc494ebc8d405b3"],["/page/3/index.html","72206dd389ac12b44422bd1dfbaa31a7"],["/page/4/index.html","4d63ed7e543d2eed71878cc07e203d9d"],["/page/5/index.html","274b8c57dcb0f204dc8798f50560bd4b"],["/page/6/index.html","bf936b025f1e52f3ad377f617c921a10"],["/shuoshuo/index.html","58591598dda08f312820344f5c5b839c"],["/sw-register.js","7a9e57cf9e1abedac26ac20530d01827"],["/tags/AI/index.html","2aa40a33fdb3eb7bb525c551da8a634c"],["/tags/Android/index.html","7c3deadeb6dfe69909e07cddc03d0dc7"],["/tags/C/index.html","e8ac22fa5f8c537e2c46627fee3ebec0"],["/tags/C/page/2/index.html","ae4dcfd7616aeb19c73eb3793cc72cf8"],["/tags/C99/index.html","9b6765382dfeff31c36d0beb280b6d19"],["/tags/CSAPP/index.html","a18c9483c51103e735a58547cb4509cd"],["/tags/DNN/index.html","f1553329783f3da6b52a653f3e210e82"],["/tags/DNS/index.html","a646c09c94aee337be60534481152014"],["/tags/FPGA/index.html","c843ec1e079e1cfc513285d70a1293c3"],["/tags/HDFS/index.html","2dcd91bee245e8d414141241d910c3e0"],["/tags/Java/index.html","6325bd2569faac9eb66e083b2c4d1f87"],["/tags/JobShop/index.html","d53ffc7dfe17b24977a5a76dc6af7394"],["/tags/K-Means/index.html","064c18a88c1ae02aaddba4c2a5130ef4"],["/tags/Kafka/index.html","af702c79216ceeed6a65844ab4b9e740"],["/tags/LL1/index.html","b3d36875beedafbdefdf14b3396d5050"],["/tags/LR/index.html","b028440299fea9ec115b5c124dde48ac"],["/tags/Linux/index.html","6def87320ac7e4144c8504e237a544cf"],["/tags/MIPS/index.html","403d70660d27cee57cef22c152a59ca9"],["/tags/MOOC/index.html","296554be40f37bca0d351965637a660f"],["/tags/MPLS/index.html","8cbf1f57c3d7ef6926a5f91d0c464241"],["/tags/MapReduce/index.html","59fddb28a0d18f1756ff0113ad3382a9"],["/tags/Matplotlib/index.html","6552b0f58b87b1b27d570dfac42266c5"],["/tags/MiniSYS/index.html","cb2a31e009d682a1f8436f9473f581f1"],["/tags/Python/index.html","763326f08d52d0a55f76bf9ab99ad406"],["/tags/QT/index.html","175b7c1b652fee297f1271862a75dd7b"],["/tags/RNN/index.html","a6c2088b9c61a4b7bba9b8b7c6d576bd"],["/tags/SIP/index.html","c809c90d22c0da98661eb4cbc3290d11"],["/tags/Scala/index.html","399722f35a66ab4c0fc4c8eb303802e7"],["/tags/Shell/index.html","1dad1eecd0cc991c1828e5ccb5ebd5f8"],["/tags/Spark/index.html","5213f06dd654cefab97a15ad522bf8cb"],["/tags/Streaming/index.html","c0ca5d4ee4ec5796426c87e2cc47bf32"],["/tags/Struct/index.html","d11bed4f4decc8f5e6ce6520e63baf7e"],["/tags/Verilog/index.html","e8fc9f73d4d2d79b76178f52ff589415"],["/tags/first/index.html","fc30d692739cdb0cd34b7ce2455c3ce9"],["/tags/iPython/index.html","28e5f3a68c9f8c0df5f4c813a9aa5dac"],["/tags/index.html","76f048ab46b0b4d7c0859aeb6418e12a"],["/tags/ls/index.html","d5af03152f69b5a310c1c5ca2a8820c5"],["/tags/习题/index.html","03b7192e97345b59b0522cad43b634a2"],["/tags/交换原理/index.html","3c4ecfa0903045be779563eb10a1b533"],["/tags/人工智能/index.html","fc0e25e3150d4b1581514215aa48b32d"],["/tags/信号量/index.html","b0a7019f0ad679f4cbf428cf2a8f264c"],["/tags/内存管理/index.html","3a23766dc9218345d38cf41def1100d3"],["/tags/决策树/index.html","46d5bb827b676f6af7c918c8106579d5"],["/tags/分治/index.html","234974c3c93e4f4233f75dea27e71612"],["/tags/分类/index.html","18a2b2d843d10e65c8e56030faa0c77d"],["/tags/动态规划/index.html","2a440052c9bcf5942b446bc1fa0502ad"],["/tags/华为云/index.html","c3ab97ae954d1b83620cb4c89291b664"],["/tags/单词计数/index.html","63ac20f102c8ffd0cc79400963975bea"],["/tags/可视化/index.html","dd956a6e861af671a1b1ba60c27f7024"],["/tags/同步互斥/index.html","cfb5c4efd64cbfedafd3105a19485267"],["/tags/大数据/index.html","d89cf6a662f4108977df486d5c8937a5"],["/tags/学堂在线/index.html","7de485f02e2eb881b560c681c1a993a2"],["/tags/实战/index.html","f19ea145cf38ff5ee478a1e07661cd65"],["/tags/实验/index.html","d95d6c3bdade2804e2fc851116dabf6a"],["/tags/实验/page/2/index.html","593782c9b6bbe866ef2882218f98af6b"],["/tags/小游戏/index.html","15ca509255fadb925d3299d74d19695d"],["/tags/工程/index.html","e807cb2bcd751c618cef50312cc3c335"],["/tags/工程/page/2/index.html","30acf7af0763cae29f3e7ecfb76934a0"],["/tags/手写识别/index.html","f2a6b3f2d6f0eb01f6d0a4fd8c67b345"],["/tags/拓展/index.html","6c0c18afd7e1f86d3f7b047eed2ba4d9"],["/tags/操作系统/index.html","e7ed561185adc798035ebec3cd5b6184"],["/tags/数据处理/index.html","6aa56716eeec28b7ef340c8319e25633"],["/tags/日志分析/index.html","4175f34b4f599c5a314c0502fdbdb6c2"],["/tags/易错点/index.html","3ae502b7c892638a415d90593c034236"],["/tags/机器学习/index.html","abebb3b18f8dd8ab0839222a4a36f553"],["/tags/条件熵/index.html","8c0e2e8e73ec9c77fa3bc749039b22c5"],["/tags/正则表达式/index.html","501c3c0f931e26fe2ee7e9de6f964729"],["/tags/汇编/index.html","886b3b1a79be7fd19f36dd1fd7918c1d"],["/tags/流计算/index.html","911ed2f7be419b5c94e2a9f39c4b9a55"],["/tags/爬虫/index.html","85509ebf32f8cbbdd80f89fc340674d2"],["/tags/现代交换原理/index.html","291f9329477b5231b40b00bdd5cd157a"],["/tags/生产者消费者/index.html","84072fbda86157cf90894fc8e330ed9a"],["/tags/知识/index.html","59c020281802233689d3ed66227bc79d"],["/tags/算法设计/index.html","f0b121530f328277aaa32a1ba81e90df"],["/tags/线程/index.html","1f145b777ca61f874b7434de693d8cfa"],["/tags/编译原理/index.html","f5d2ecd27657ee734cd62be8fa025f40"],["/tags/网课/index.html","a7691452d422587d96acd2a83e521a45"],["/tags/聚类/index.html","45593e80eed54de701098bc5392dacee"],["/tags/脚本/index.html","6b15beb0e0203e376e47558469569e95"],["/tags/计算机系统结构/index.html","b29a85bbd343f39589d52ebd8924abb7"],["/tags/计算机组成原理/index.html","99a5bc841af9f93309c655f326a4dcee"],["/tags/计算机网络/index.html","8a9ea5b5cb8131ed7609061e8cfa1dfd"],["/tags/词法分析/index.html","e2a0ad91a6204f723aba3fdbd4d65bae"],["/tags/语法分析/index.html","009959e22c892713753e34a8ebf9b3c4"],["/tags/读者写者/index.html","f6b9df6a9a300bddafe0fbfaded0ec7f"],["/tags/课程/index.html","ac96058f8a3f3e6fc9234a49cc49343d"],["/tags/起名字/index.html","7b4f37fa6e600a3efac5e2638d45704b"],["/tags/软件工程/index.html","1909bf0ffc26bebe65ac9d9f91441e27"],["/tags/进程/index.html","a3e40d28edf7aaa1e0c5bd80309993dc"],["/tags/通信/index.html","bc19d7e5c5c0e0a2492783e88ea1a2c9"],["/tags/遍历目录/index.html","623d1ec9b3ad850ed65ddfdd09c98477"],["/tags/难点/index.html","924f9e90814efe0068ccc6b2a73597f6"],["/tags/项目/index.html","62d95b4542e64deb6b0eb5fe45c68633"]];
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
