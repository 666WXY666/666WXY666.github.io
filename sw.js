/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","2cfc6aa4531852f2f72dc9cdf04486ae"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","670e388a2e6e774cb1244eebe18864b7"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","23fe33df4856e8e170d3940228420016"],["/2020/03/26/计算机系统结构-实验1&2-遇到的问题/index.html","180883923ce91dfb2934624b3040fd19"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","4bc4e92bdcb95235ece474385f2a2c75"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","541629fdb58f6a767f5ebe2c631be249"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","e96da46372de03ffa1da36009dfed7ea"],["/2020/04/18/机器学习-知识拓展-条件熵/index.html","f6e2699c032dc4e27f4480c3b2b47b12"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","4856149313f5d92fecbaced930aed6ba"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","c833cc36d5246929bab3b1a062ecc536"],["/2020/04/26/机器学习-实验-决策树/index.html","c32ad54e3ddc09b71bf223541b1bb630"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","7c74da9b4e7b6f014624b5a83ff78b51"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","9af25cfc00e20164aafe217007f0539d"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","88d43554013335aed2d950ce17c38897"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","7aac14b9b1733db18eaa3ddfd5098ed3"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","f6c5a8d5aa18ba2b4a475019ac8cfd49"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","a56244a76aa94c127f53a7d23100eaf7"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","91bf6b4e416c635491ddd7b7da27241e"],["/2020/06/11/机器学习-实验-DNN-手写识别/index.html","d80b5391303fbfb05d46312c43081ea5"],["/2020/06/18/大数据-习题/index.html","83d9c878c00844690f9bf0ac9ac165b5"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","83edb66cc5782714c71ec4202462b4ce"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","42edc41677bb691e1a7bdba072f7735d"],["/2020/06/24/Linux-拓展学习/index.html","5c57c25e328cc44ecb60e5095d697c81"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","6692a4e7eab17650095b3a43d8e04b54"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","68712ac48c77e364705d22fd49aea3c6"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","2de290fdd5b99c8d331b447b7e6c196d"],["/2020/07/15/C和C++的struct使用总结/index.html","8ba64660835cdcab51ff83a3c6901a4b"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","c6979cc82154df74c902396a886d0447"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","2b61a8d43e3c168579f11be8d9c363aa"],["/2020/08/10/机器学习-实验-花卉识别/index.html","42505fd77bb8eab5336e31c0a43000b2"],["/2020/08/15/Python-项目集锦/index.html","2b55de00e3ef5ba86f160f25b54f795f"],["/2020/09/01/编译原理-词法分析/index.html","684a2e6d53cf2b9a69ace135a49c8034"],["/2020/09/02/编译原理-语法分析-LL1/index.html","00c669a743f499cc5485b357ad43ff45"],["/2020/09/02/编译原理-语法分析-LR/index.html","205e50200d1a6b87eb13a46f1f86d17a"],["/2020/09/03/操作系统-内存管理/index.html","0c7ca6935a9287be3fbd2e3bff45bafb"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","91f63e387e8d2fa8505b02483520c8ae"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","407da9750677268277290b99966b5dfc"],["/2020/09/04/CSAPP-实验集锦/index.html","f809313b819377daebff2619360bed90"],["/2020/09/10/计算机网络-实验集锦/index.html","02367e764a9a7367362768b6ea344be1"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","a4c33ae32ee75149c49bc2b5c83f2a5d"],["/2020/09/30/C++工程项目-JobShop/index.html","cf5d9ad9f4888dc09f29e2a15f2c81b4"],["/2020/10/09/交换原理-实验1-时间表调度实验/index.html","1c8c6c8ef1cd10745a44cc2bbce5e341"],["/2020/10/09/交换原理-实验2-摘挂机检测实验/index.html","c027bb1f414fce22e88abcb98070033f"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","54bff8424e27714c5b8f4b51f7681848"],["/2020/10/09/交换原理-实验4-拨打SIP电话/index.html","4434be436165888970fd78fd2eed3d68"],["/2021/01/04/Android-项目集锦/index.html","209d100ecebc71ea25465d9429558a20"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","e46b922fa7b9aca9994be4e03693efbf"],["/2021/01/04/C++工程项目-travel/index.html","9885c2bb8240794c36c863819214854d"],["/2021/01/04/算法设计-分治-最接近点对/index.html","69c069cb5a8ea2ea2a547b12094cbe36"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","73999074e3b34aac5debf5b85a0608c2"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","50b4adb25845a0a8ac330f0a01d2b839"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","e2b29c5fa808d7555aaa08906af9805b"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","482aca0a29aeba93db66de29bbf72cc3"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","7bfe8edfd9d0007291303105f0be11d1"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","0b3d96ec2e03704b4ea9a547a3a652bd"],["/404.html","63f1f317db5d982d0c064ab25b96a3ac"],["/about/index.html","ff54d1203db47111f1d4c4d919375004"],["/archives/2020/02/index.html","9457450a69c07ff539ed4ad760b90585"],["/archives/2020/03/index.html","d32c17cd675c202254cc94989a1797be"],["/archives/2020/04/index.html","e7676001d14e82387d2118769d3b0a01"],["/archives/2020/05/index.html","805b903b12c686316d4dde9dece7bc97"],["/archives/2020/06/index.html","019f90e0cadc4fde39265396f9e83610"],["/archives/2020/07/index.html","88e98dd7e787d80aac9e28cb69728083"],["/archives/2020/08/index.html","0d5774166401fbf0286bb957d339cce4"],["/archives/2020/09/index.html","bde07478c8532fdddac9986352ce79cb"],["/archives/2020/10/index.html","dce1deb2920756bc2c1639cd8b2f28cf"],["/archives/2020/index.html","b0be90708d854d32f13b3b0c444e8cd7"],["/archives/2020/page/2/index.html","0a273eb70defd0d21b753e041d48439d"],["/archives/2020/page/3/index.html","5912f214f0706bd828612b38acf40e59"],["/archives/2020/page/4/index.html","d610a13b9fece5b4bb5d30cfbff88f20"],["/archives/2020/page/5/index.html","f7f2f694f3b0fcbc2e6b9600ae9f3394"],["/archives/2021/01/index.html","2e4e62857134ca6fc204de7f178f0125"],["/archives/2021/index.html","7fb31b9e03c78c1af9c8cc29a32ca4ee"],["/archives/index.html","0567cb370580c4ce4f977b0495393fcf"],["/archives/page/2/index.html","0567cb370580c4ce4f977b0495393fcf"],["/archives/page/3/index.html","cea10ebc90bf4196903b039f3f0626c0"],["/archives/page/4/index.html","cea10ebc90bf4196903b039f3f0626c0"],["/archives/page/5/index.html","cea10ebc90bf4196903b039f3f0626c0"],["/archives/page/6/index.html","cea10ebc90bf4196903b039f3f0626c0"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/categories/C-C/index.html","8921f5df37d2e133811689cdf530a7ef"],["/categories/C-C/page/2/index.html","fdd4874d428158a178fd8cec1821e45a"],["/categories/C-C/拓展学习/index.html","9b25b7c0dbcb760e7edd7e04bb2c6ab7"],["/categories/C-C/操作系统/index.html","c86a58344d10d2278d856ff131cd94a8"],["/categories/C-C/算法设计/index.html","0498c0001f3e5dc45879b292bda69d1b"],["/categories/C-C/编译原理/index.html","3a7186d71c5a41410e2691ac1815c2aa"],["/categories/C-C/软件工程/index.html","caa1936e176c905fffc52787ff156b7e"],["/categories/C-C/项目/index.html","e00fac48f16974bcf3b8f67b82f5436a"],["/categories/Java/Android项目/index.html","7d7b9d694e8ae3642f2daacbbc8d9578"],["/categories/Java/index.html","6f30dcac2771afdb0cac7f741ba54be2"],["/categories/Linux/index.html","0d872c83a469103534e30cb8ba061c55"],["/categories/Linux/上机实战/index.html","c2ab0d681e520e4dc71e5395052b1053"],["/categories/Linux/习题/index.html","3965b971c5b421ed9c742458237fb7ca"],["/categories/Linux/拓展学习/index.html","e19fa23b212d9234c87148c85816baac"],["/categories/Python/index.html","ecba35b1eaed540337538b535fec412f"],["/categories/Python/爬虫/index.html","05d153f392eadf0acbb6db7926ac8cb1"],["/categories/index.html","a081dc6efb7b742f1e5b4fd612ee5559"],["/categories/交换原理/index.html","54c6db78edd011bfcde326cd2563c218"],["/categories/交换原理/实验/index.html","dd6e81cec61134d1bc64ddaacba25f47"],["/categories/其他/index.html","e120467b1e69b4b58e6d1e9c01374ae6"],["/categories/大数据/index.html","9fd94f487998ed468c61f47221bbac25"],["/categories/大数据/习题/index.html","79b90d0dc376f737f8dd5d6e3fbe225d"],["/categories/大数据/实战/index.html","41133be901c9a120adc40ee5a38defce"],["/categories/机器学习/index.html","091ccb856900c3a189bdcc06ae791782"],["/categories/机器学习/实验/index.html","0ff6c08e1070de625d0cb509606f568a"],["/categories/机器学习/知识拓展/index.html","60ae76d23382ee8abdb3c08c46bbaba2"],["/categories/现代交换原理/index.html","570a8c4defc19cecb9c37f28dd9ae4a1"],["/categories/现代交换原理/习题/index.html","ad54de3c4065fee7b3a2b7fb0eba54ea"],["/categories/计算机系统结构/index.html","6f6b8457f53001c75b4678d9c7a223ff"],["/categories/计算机系统结构/实验/index.html","16bfa0e441a9126b7b953cff81d70dbb"],["/categories/计算机组成原理/index.html","05b144ac7abc9b5838f5962daf53fee9"],["/categories/计算机组成原理/实验/index.html","49567fa3bb2b6583f7afeb8af2dc5283"],["/categories/计算机网络/index.html","e0a55d2098cdb196ffe5805a03ff8fdc"],["/categories/计算机网络/实验/index.html","3f3e4eefc95313a39d461c6e5a42c498"],["/categories/集锦/Android/index.html","1420119716d7ad8dd4387c6e11418dc0"],["/categories/集锦/CSAPP/index.html","d9fa4a2503a93bdd56c1d89323aa1d33"],["/categories/集锦/Python/index.html","a0a7f54caa52d1ab34b1b53521cc5180"],["/categories/集锦/index.html","f787f6f73d232b021882f2cf2430f402"],["/css/first.css","01a90baf99fa8f190becabd973782198"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/style.css","29bd14d027343cdf06b66cce6bf66453"],["/friends/index.html","8d8a126fd24aaf58349cb95623164b0f"],["/gallery/index.html","63f4bc7639ebb10460b077618443184f"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/games/tank/index.html","a4a2448b8b53e14bf7bad5c1f71e614a"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","b6a7d78fb4778dd6a986e74131f00a4d"],["/js/aplayer.js","6e605f0855251e101d3024646f3eac60"],["/js/app.js","1948329f2fd7e750ade4bdc49138c09b"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","c658712ec63d419484f894755b9eadd1"],["/page/2/index.html","f1710cf3b0aa1df6e249655b8e14b9bf"],["/page/3/index.html","338dc17def888ddb58d596cb4d7c819c"],["/page/4/index.html","5629cf213a5c3b9bb734ac3b3b259ab1"],["/page/5/index.html","e2bc1a19e4c4975794a24f2daef57444"],["/page/6/index.html","e7cb7bb4d4b86ad930a8bed59afd96b5"],["/shuoshuo/index.html","9a19f0899a506c8cda61aef6d5ab4493"],["/sw-register.js","37fa12cf6b9dfcfe09900d54dc5c8636"],["/tags/AI/index.html","b6e4cf8593e2674f0cb6e686539b289c"],["/tags/Android/index.html","bc222f6889dcb46e83b8f27559af68a3"],["/tags/C/index.html","1a008a25eb12623e2fcf877d15372c71"],["/tags/C/page/2/index.html","00f8999aa9ded08097c895191246ff38"],["/tags/C99/index.html","553a76b8cd7e4bcd988dbb40e22bae12"],["/tags/CSAPP/index.html","f85b8f6212c5fb45ed20477ed63d3138"],["/tags/DNN/index.html","d2ccf480e1da0fb574cf13f7594bcfbc"],["/tags/DNS/index.html","2a504593a3be5ac537235f95b8ad6576"],["/tags/FPGA/index.html","7081a1a2d22caac9a2190ff5fdd09daa"],["/tags/HDFS/index.html","d633e437f2752f89f404d683d42b4692"],["/tags/Java/index.html","41e9df702f47038d34f864c9197d9cfd"],["/tags/JobShop/index.html","cb2f389ba8d6b98c8b4dd09bba84033d"],["/tags/K-Means/index.html","d53bd5307fd3db83b5a482de0c37a3b5"],["/tags/Kafka/index.html","841198629c9e57726b4a2576ff0b4b6c"],["/tags/LL1/index.html","3cb9f4941af15d9a2c2524e32917f6b4"],["/tags/LR/index.html","03ea5e871f29c6d81673aa110634796e"],["/tags/Linux/index.html","26b2d335456587c86932c5d89e83b807"],["/tags/MIPS/index.html","71ea02e34f6645e4ca2b078597d39b9e"],["/tags/MOOC/index.html","8af9669ac4d09d8ca4a6c2615b341611"],["/tags/MPLS/index.html","9cc7bca86f9ae737c4d2c61741852537"],["/tags/MapReduce/index.html","cfa4b732815a403a0555eb8e332cd05d"],["/tags/Matplotlib/index.html","132f5c1a1491ec5dfe6de955db0cb2e1"],["/tags/MiniSYS/index.html","254ee450d35f5e5a2510f4a63e06d98d"],["/tags/Python/index.html","73c7cd52b38686b2d761d498ad9ed791"],["/tags/QT/index.html","0c3c85a7c86f8b881a66ec7312a91c49"],["/tags/RNN/index.html","001d0d6bc6cb4c531da872299dd75474"],["/tags/SIP/index.html","25a954bea743a189d60a25177dd1ddbe"],["/tags/Scala/index.html","1f67062245b1df72afc6ea54f64fe3a0"],["/tags/Shell/index.html","edc248bf74311e284cb924bec7efef04"],["/tags/Spark/index.html","50d374a3fd9b51b46413009737cc7ccf"],["/tags/Streaming/index.html","5265595e88cd3917535bea7582455e40"],["/tags/Struct/index.html","0e7be4676056643d34b3a2f90656a81c"],["/tags/Verilog/index.html","fa2c74c0889645a9770677cad87b0ec3"],["/tags/first/index.html","170eacf7f67c6413c41342ffb6feecb9"],["/tags/iPython/index.html","f3bb804557cbe5a3c409aa18609b3a68"],["/tags/index.html","3054d102ad0706d2635105a1c1bb17b7"],["/tags/ls/index.html","e6bb96398f6a2801f5eb977602424e4c"],["/tags/习题/index.html","3131b2cb887509ca520d82ba89ad5278"],["/tags/交换原理/index.html","205e49e5144734cea65bd3f49fa7bf74"],["/tags/人工智能/index.html","bc140c506959b94317711df78e1af11f"],["/tags/信号量/index.html","f4b4a72a1b95655c29e00018bd76a862"],["/tags/内存管理/index.html","03682a381dd04167b2baa0b221c1fcf5"],["/tags/决策树/index.html","2d08df64b65a7e45ab1779036bdd80be"],["/tags/分治/index.html","cf1e50afb5024ccd3f331044542a2cff"],["/tags/分类/index.html","1c5f723281fb024adb55c84f1af51657"],["/tags/动态规划/index.html","7b3c9ce7f627276a5d393fdf0dc9e8bf"],["/tags/华为云/index.html","d21d487d96636642c30fc4ba9fc056a5"],["/tags/单词计数/index.html","1d0bd0c5c17164bb63664937e6c306a1"],["/tags/可视化/index.html","1fcb21b21546ef0694f11793ef57640e"],["/tags/同步互斥/index.html","67d50f5dbcbdeeab2c071e22ec5f607d"],["/tags/大数据/index.html","9598643c9ddfe7f8335154024c2f7f04"],["/tags/学堂在线/index.html","ef86ab2847f278bccab66064e04fcb64"],["/tags/实战/index.html","23e3fe4dd8cb8a7235f8f4f77e04b3a2"],["/tags/实验/index.html","342ce2c8fd8054d12155803e447e7868"],["/tags/实验/page/2/index.html","6971f2b1417663cf0b0a6298acb8971a"],["/tags/小游戏/index.html","28c56a88c287113d40ce739017a1f802"],["/tags/工程/index.html","c42444b067c9d6dd589c69ce9103d146"],["/tags/工程/page/2/index.html","9e128455f360115b808aa90a18e49346"],["/tags/手写识别/index.html","cd85892dfd7900351806740e5525d125"],["/tags/拓展/index.html","73b2e55c43b81abd751f123f2c85993a"],["/tags/操作系统/index.html","a3d062ecd8f7faa983aead44b0e0ce54"],["/tags/数据处理/index.html","3d76a3d69ba4f463e09fdb10e3238c25"],["/tags/日志分析/index.html","e437023f304a936be6c8907e6033d1a4"],["/tags/易错点/index.html","12e3a34d76652d9cda9f282e5365fdb8"],["/tags/机器学习/index.html","f19baf914b1656a4292b90496d9d9dff"],["/tags/条件熵/index.html","90ccb35f6a342752b521a5f042d82b31"],["/tags/正则表达式/index.html","606e40f3c415269be69032ffc6924e2f"],["/tags/汇编/index.html","f8e92358386e6c59f4cc4caed9013ba7"],["/tags/流计算/index.html","d1b027a26eba85f3a6861da020b616d4"],["/tags/爬虫/index.html","4972e730b77ac6b30879e0c1f7c0fd31"],["/tags/现代交换原理/index.html","0a4545abd43e0b9b445d4d4fbc8b1111"],["/tags/生产者消费者/index.html","c8336070f7a9a6d5b7bc82de3abbe19d"],["/tags/知识/index.html","161ce27ecdcb2ba5672ad64d7b1f115d"],["/tags/算法设计/index.html","f893e0a123c81cec725bcd17c238e13d"],["/tags/线程/index.html","1634bd5a8d92dcdd8174142437df56a5"],["/tags/编译原理/index.html","8d8702f3e230a7b64b3221824744a348"],["/tags/网课/index.html","1786cfbef9f3bb2a846e9e209ecf4e29"],["/tags/聚类/index.html","766fafd33eefca00607c59418cf704c1"],["/tags/脚本/index.html","b37c2080437b23ed5f84904c3bdc6a5d"],["/tags/计算机系统结构/index.html","7490a4f827678847c638ed376c8ffad7"],["/tags/计算机组成原理/index.html","f70488ac5d05a9903e82c8e2d3b0fc11"],["/tags/计算机网络/index.html","22191fa3ca7218c108a5299530631bdd"],["/tags/词法分析/index.html","ece3444fac26c5559ddbd1c0635b03f1"],["/tags/语法分析/index.html","26e675728ee25025cb9b80315fb6382a"],["/tags/读者写者/index.html","9bc7491b7f60fc990e8dd64c3222eec9"],["/tags/课程/index.html","b655f04674489593d195f21f1b9cc68e"],["/tags/起名字/index.html","9268b98bd7b55424e09279a70262dfb5"],["/tags/软件工程/index.html","e068ccf25db27c6a9c068cf784c387d0"],["/tags/进程/index.html","a56282869eb016351940a4e94b26eda0"],["/tags/通信/index.html","589d8060a0af252d465e91c7504a2fea"],["/tags/遍历目录/index.html","2868c5144e6c2de2d5f11f5eac5adf4d"],["/tags/难点/index.html","cb21c3cc2615404e35629f0393d3fff1"],["/tags/项目/index.html","5300bd800ae3921684cfe0774194652e"]];
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
