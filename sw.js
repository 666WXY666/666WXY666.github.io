/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","14232b6b1702fbe79fd95ff7729dc729"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","f1c9731281df126bbe9e24d1b9dc3791"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","0c8ee7759f01c4567bff12b94c75c5b4"],["/2020/03/26/计算机系统结构-实验1&2/index.html","90f328955f836d42f568044ab9368d8f"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","3767504e9de678c2ae8f4ac74cdd9354"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","4383d184f72f98b9e6db7904da1d1a2c"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","d48df33e7cd73cfa1987eef61cdd703f"],["/2020/04/18/机器学习-条件熵/index.html","9f612a46e2e61ebc5db564949b0b06ce"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","2edf7612ba8f341354548f5280efc8a0"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","0120e179b03c9be2f7583d543fd58f7d"],["/2020/04/26/机器学习-实验-决策树/index.html","6a89a18426d5976e57bf672a70020646"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","768c33d5525bf9617c3485a229421eb6"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","39761f01b58f411543469282b799b53c"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","76b096538f0053b41945cb2e862a5b77"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","813c12428a04ed1037f454275ddde128"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","2e44dc58397803128065b48c93f216c2"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","b9d3e43479eb34fb48aa97aef92a69b3"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","bbd151281cbff1334c6708a822ad83e4"],["/2020/06/11/机器学习-DNN-手写识别/index.html","12075748043cbd4a458fb80a3eaf17d9"],["/2020/06/18/大数据-习题/index.html","c65e998ea3d98e54c98cd8d3ec5ed521"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","8d2b3dc7a4af1bd1f11a1a3390c5aaf8"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","f8f51f647f3a385a5a6e3019b526e822"],["/2020/06/24/Linux-拓展学习/index.html","0960610e0208764548e6be08decb2ebf"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","61ea219e84a56beeda6b36c177692009"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","b37b673f3f14ab3de3866a2b8e4c6ab1"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","6ee00d5d727f90da6bd078bad01f0669"],["/2020/07/15/C和C++的struct使用总结/index.html","71590c9d6e98f808703750cdf728b73f"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","3f0a772fb9e326eb2bbbd9b035f4b644"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","7bc4b1ffc9aa3ac3e4656648f72f10cf"],["/2020/08/10/机器学习-实验-花卉识别/index.html","5f75c157089c7c92be1af5effc04b76c"],["/2020/08/15/Python-项目集锦/index.html","7dad1741e2c482307f58776e5eb90991"],["/2020/09/01/编译原理-词法分析/index.html","96308a0c23694ebe7d5d21496c84e676"],["/2020/09/02/编译原理-语法分析-LL1/index.html","ed34abcbeb145bf15e2ea9541d454026"],["/2020/09/02/编译原理-语法分析-LR/index.html","c35991681361671c58e343eabf5d6e3b"],["/2020/09/03/操作系统-内存管理/index.html","a0b2aced4d3cb58027f6ccc2ddd87cde"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","d3a5a8e6e3d2d7ab709e5277ae9d7168"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","cf057327478d257cd477d10c8ef2d415"],["/2020/09/04/CSAPP-实验集锦/index.html","0ac3917f11aafe2fb4427fbcad798b3b"],["/2020/09/10/计算机网络-实验集锦/index.html","650193f07d950284558574fa7d443635"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","7233228b1170f0672cf5de69649bb405"],["/2020/09/30/C++工程项目-JobShop/index.html","c33075fea2e586961e34074a2926a773"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","11b886405c9dbf3d3a8d78e261f88a70"],["/2020/10/09/现代交换原理-实验1-时间表调度实验/index.html","ec2786e9e30030952853b3550231c53e"],["/2020/10/09/现代交换原理-实验2-摘挂机检测实验/index.html","ab75d64c3fa7aedde243540a925e9e34"],["/2020/10/09/现代交换原理-实验4-拨打SIP电话/index.html","1ad36bc7975ce673a2d2b4521e139194"],["/2021/01/04/Android-项目集锦/index.html","818a5d0af38dff424625ffd45554655f"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","bc5e55b4a2c84dbb4e8ed21f24577343"],["/2021/01/04/C++工程项目-travel/index.html","e5ed24e9cc2f693a367e4e0a9e92e73d"],["/2021/01/04/算法设计-分治-最接近点对/index.html","ba04975341bf8aa6a04a1c528a921c3a"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","1f7ed6214a3375e319580312ac10d318"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","cb558619f76e29a72d9e7be13a60ea67"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","b99f67da4d62b4b0ef4de8a137dc314b"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","c48492597c5dd3026046acf623ac8802"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","61e491f17a1fa88a3d3eb723067f088f"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","c7ed6952e0abbf3c7b3f7b1f0ea3a145"],["/404.html","2394b59b860bfc1b2a641e2bc2300ffb"],["/about/index.html","6e450ae2bdfc3ed2b38a581e08ed5cb9"],["/archives/2020/02/index.html","deae7f968bac583dfde5f87dbe85c98a"],["/archives/2020/03/index.html","c407c4b952b4e1423900a4da5c464e6f"],["/archives/2020/04/index.html","417ba8b2b78c41d54d1b1e30d6034a1f"],["/archives/2020/05/index.html","13e96a4c30e6dc3bb44eb73e04d14228"],["/archives/2020/06/index.html","8277adb992ddd7184586c96b237a7bca"],["/archives/2020/07/index.html","6244655dddaad7c9c448ec9e3f376dbb"],["/archives/2020/08/index.html","09d4454ec62473ffc741902e55e467f6"],["/archives/2020/09/index.html","cc0dbe340221c76c8813cc69eccddd53"],["/archives/2020/10/index.html","51a0003d8f8a536c3cb571da2e21b195"],["/archives/2020/index.html","b38270d87495e1be642303395162e8cc"],["/archives/2020/page/2/index.html","9c290162a3eb201f354d36c9afbfbe33"],["/archives/2020/page/3/index.html","c2e1b0183ad6350dab2c9ccd2cf2a34f"],["/archives/2020/page/4/index.html","7b306ce387edbfb69f285458ea5c5681"],["/archives/2020/page/5/index.html","bf117d14f6956a5c184983e03507b1e9"],["/archives/2021/01/index.html","a40b8e7daa5afe607c383d5cab291d47"],["/archives/2021/index.html","9ee3162fcba2429431a6cd794f4aae61"],["/archives/index.html","fbebc5f1441eb1e01902f272d654c28e"],["/archives/page/2/index.html","fbebc5f1441eb1e01902f272d654c28e"],["/archives/page/3/index.html","fbebc5f1441eb1e01902f272d654c28e"],["/archives/page/4/index.html","b6ca4e51f40b1ea0ac9b4e06a70c9179"],["/archives/page/5/index.html","b6ca4e51f40b1ea0ac9b4e06a70c9179"],["/archives/page/6/index.html","b6ca4e51f40b1ea0ac9b4e06a70c9179"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/bb/index.html","9be5d3ec25dfafeb0bbef0c41c0ae038"],["/categories/C-C/index.html","88d330647c190a9e08b2a2cade26d4bc"],["/categories/C-C/page/2/index.html","db7a694124475d6a896a329af3437f6c"],["/categories/C-C/拓展学习/index.html","a562d98fdd327249cbc7a64d4b51560e"],["/categories/C-C/操作系统/index.html","956b71ea4ac34588782ccd3b0169cf71"],["/categories/C-C/算法设计/index.html","1ee38bc1d757708c5814490a05b46e36"],["/categories/C-C/编译原理/index.html","1aebd965ac5136b04d2c718c80b0b413"],["/categories/C-C/软件工程/index.html","42e11bfa9a7ca2bb954c33e9b3175c72"],["/categories/C-C/项目/index.html","fa0f11208f94c168710f97fdd7845f69"],["/categories/Java/Android项目/index.html","cea9d33b85fa41d1f566dbaf7f88c5f5"],["/categories/Java/index.html","0e8a286af85ecf34975b25695cf42133"],["/categories/Linux/index.html","3519ba38b987dfde7069e08c6cb1b739"],["/categories/Linux/上机实战/index.html","e7e1c67d2c20d1f622bb9c86ed3e008c"],["/categories/Linux/习题/index.html","5dc37ea8cc8fef92c1ec2109bf55c769"],["/categories/Linux/拓展学习/index.html","e10c611dba33e0038b7e54151caf01c2"],["/categories/Python/index.html","be6402ed8d29c5a4a88cd7be640109ff"],["/categories/Python/爬虫/index.html","15c998a61236aa8bfd5791500a4fa48f"],["/categories/index.html","fcc22e26d715d9e6e31bbe2442b0f16d"],["/categories/其他/index.html","2e6c39190bc19024ddd2e39827d7b024"],["/categories/大数据/index.html","4251145706a6b158415a6d1eb2661d3e"],["/categories/大数据/习题/index.html","fc7c53d15768ad7e1121108348945526"],["/categories/大数据/实战/index.html","1998369ce6bb1df78d57ad6b0122b140"],["/categories/机器学习/index.html","aff12446457a1537f23e4a24c48399db"],["/categories/机器学习/实验/index.html","f124e0788d81645d93da2d0f3630956d"],["/categories/现代交换原理/index.html","e4826ce9e4c6f7936d385221502ee3c2"],["/categories/现代交换原理/习题/index.html","55fa682c70d1da26b203a43a007f40fe"],["/categories/现代交换原理/实验/index.html","ec5b642336311bf9c4fa2123cbfe8fbc"],["/categories/计算机系统结构/index.html","f5cf4865c682e035e45d4f6cccab8210"],["/categories/计算机系统结构/实验/index.html","a4753dbab001d6cd5ee2cd5bb66e0929"],["/categories/计算机组成原理/index.html","4c6dc0f059a9615bf2088aeb881f58ec"],["/categories/计算机组成原理/实验/index.html","7d497ab5117bbeb4555d03f0485241a6"],["/categories/计算机网络/index.html","06614cf1e1a7a8d6be40631fe1af54a8"],["/categories/计算机网络/实验/index.html","5642cd6df2f168646681b8c5bdae0438"],["/categories/集锦/Android/index.html","7b51e4d014855521ea854d466d714512"],["/categories/集锦/CSAPP/index.html","91cc2c6d4bdf61b77a7a4d928d39be1c"],["/categories/集锦/Python/index.html","1139a77df56c949e4c6c13f24374233d"],["/categories/集锦/index.html","ea0e96eeb0e90e3f728f0092f699eccf"],["/color/index.html","3f627143356419f7f54e1443b3536f0d"],["/css/first.css","ea01aa1635810499a5ade558f4f81d56"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/style.css","e26c8d6dd933874a82b95958df895833"],["/friends/index.html","a8f0fa6d0174bb8dfa83ab2184473dcc"],["/gallery/index.html","cac0a9f9094373909cca2398b08a7aa4"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/periodic-table/index.html","4c31220b3c8c1d35b1128df43b2c9dc3"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","a5c089e556ab08cff00db8a721d4b229"],["/js/aplayer.js","6e605f0855251e101d3024646f3eac60"],["/js/app.js","1948329f2fd7e750ade4bdc49138c09b"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","19977512f0156517485c41bcd2b63452"],["/page/2/index.html","4df1f953129079a99e8224e777f88df9"],["/page/3/index.html","11fb5ea2630f49ad990d2627ceb70d17"],["/page/4/index.html","e00ec39e799fd076c8c9571c2e0b36fb"],["/page/5/index.html","7802c88f9c0e7ada1d2eebedc1289ce1"],["/page/6/index.html","0ed032b1e01a4e568d8c220c433c7cdb"],["/shuoshuo/index.html","cd41550f52e68947430407d5d62e4814"],["/sw-register.js","747efe7e23bdbb73572d56759b17538b"],["/tags/Android/index.html","cf4ee295ba154b39659249647b0c1cd0"],["/tags/C/index.html","104eb531240fe698c9b886360b9f1770"],["/tags/C/page/2/index.html","dd31d1516f01648ba04763a8dcf3d185"],["/tags/CSAPP/index.html","1c69f57e3ecee847a3a3f9445bc996c4"],["/tags/DNN/index.html","5a8ca843caef0dc3c7e51df01cd365f7"],["/tags/DNS/index.html","01c2f180960ec60ebb73b27193af0df0"],["/tags/FPGA/index.html","e3a24d23de8e86c37f37b5d568c518c0"],["/tags/HDFS/index.html","696f05a6178e257f485d28d70fac7389"],["/tags/Java/index.html","6a90cf3408855353e5ae6ea1111c1599"],["/tags/JobShop/index.html","8445866067abfc47b1eec15c11f95992"],["/tags/K-Means/index.html","1df072930f39b4aeece04b00728acec6"],["/tags/Kafka/index.html","3806dc3d06422cad678e4b883adfefc1"],["/tags/Linux/index.html","8800198c71ea4a245dc2ec4b7619a81b"],["/tags/MIPS/index.html","40482ed77b683d3f98ab3e3c64f29a13"],["/tags/MOOC/index.html","069d3602bc3be190e7ca91a12eb004f2"],["/tags/MPLS/index.html","6bcd36ff01127f1b0b3580aba0e0e180"],["/tags/MapReduce/index.html","d25900ac04732f41cead1648eb9e67c0"],["/tags/Matplotlib/index.html","4e16d59c18300c4b4d1ff1cb4eefe5d6"],["/tags/MiniSYS/index.html","d8c7153a7658333eee8a5c27e6fd81d9"],["/tags/Python/index.html","a85bdad86fd75a1177cddbb338d2f40c"],["/tags/QT/index.html","706baaf72a2b58618bfd91137f183f61"],["/tags/RNN/index.html","d48ec41248526cbdf3b8f5387cfc7905"],["/tags/SIP/index.html","b12ffbf7909ab9157800f9caabd5ef72"],["/tags/Scala/index.html","1c3dfad5e1a0a82850dd53432350ced2"],["/tags/Shell/index.html","079cd033bd611a8a035757be95a76ceb"],["/tags/Spark/index.html","3da421e516807c055731e526c9216c01"],["/tags/Streaming/index.html","017628e85cb39e9096997ed1300dfcd1"],["/tags/Verilog/index.html","94b931ab0ed3c45e3f9213ce83075db2"],["/tags/first/index.html","7977c2c7f457186a84eb834d39926eee"],["/tags/index.html","f47968cc121e7f375120a0f9b037ff11"],["/tags/习题/index.html","6c3b6753155d471cd96f19119ee9e8c6"],["/tags/决策树/index.html","6f1bfbccdca6f1fb1db4c3aa3f0043d5"],["/tags/分治/index.html","6e38a6204585cd7e3928e0f7ab35f675"],["/tags/分类/index.html","822e9203be60f8d7c3ee18326098075b"],["/tags/动态规划/index.html","1b8fd9b7a453574ef8490553f4d125dc"],["/tags/华为云/index.html","34ad721ea76d4175522b9cbda3622db3"],["/tags/同步互斥/index.html","4796f81b3f40eaa6e4ce4fc229821c61"],["/tags/大数据/index.html","3a84ee09c11acb0949bbb67cd0f9fce1"],["/tags/实验/index.html","df83f8822cccf69a79361b27a5d809e0"],["/tags/小游戏/index.html","b8cfa8e5c17e80c9159c0a1390a36a42"],["/tags/操作系统/index.html","ad071756c5d7588502836983fe8b290c"],["/tags/日志/index.html","cd791367e3b2efa459fc5363eb74bfd6"],["/tags/易错点/index.html","b9e4f7047517f2405fa6ca6e34f768f0"],["/tags/机器学习/index.html","39e10d39f550fafff59c4f9ddaa2bea8"],["/tags/正则表达式/index.html","7dae39ff8c0bb8dcedcc2d20cbfa5008"],["/tags/汇编/index.html","b2751548960fcf71ea888e414b32aeaf"],["/tags/流计算/index.html","d250d74457bfa0c3cca97eb3d82cf29f"],["/tags/爬虫/index.html","4233088cbe4240bf46f945ec915c2e0d"],["/tags/现代交换原理/index.html","ee6d38ef110f42b18b741c0dde1d9175"],["/tags/生产者消费者/index.html","28800246736d2f55e951e98eb29e1c6b"],["/tags/算法设计/index.html","f3611ff14d41c292e778078ae61ea9d2"],["/tags/线程/index.html","854cf29ffc8664cd2325aaf21d6495eb"],["/tags/编译原理/index.html","fae9dfffce107cd920e374d650f06c52"],["/tags/网课/index.html","7b9a777ca73587e55dc3c602fa61a514"],["/tags/聚类/index.html","1a20412ef0d70a902125e028b7f6d5bb"],["/tags/计算机系统结构/index.html","76d3c280cdf322cca958d698de40f9b9"],["/tags/计算机组成原理/index.html","94e8f05e5622489e843f22987787770c"],["/tags/计算机网络/index.html","927a7990b4d3f72248672609c0c2cb30"],["/tags/词法分析/index.html","a521257a32f73940442fbd3c028181b2"],["/tags/语法分析/index.html","d428de1e04939ab1fcbacae814bc68c7"],["/tags/读者写者/index.html","8ec9de2aa725030f4bfce454f8caaaf1"],["/tags/软件工程/index.html","33d5d848d5f8f9a770972438d71faedc"],["/tags/进程/index.html","4dd63b731e9387299ba7f70b53a4da92"],["/tags/难点/index.html","4917536ce77e941f191b7018d6eb38da"],["/tags/集锦/index.html","da221f7780efb367d76095b956812d6d"]];
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
