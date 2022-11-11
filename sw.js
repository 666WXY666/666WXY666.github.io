/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","c94ad916f2915d9c93740d9a916ed5d7"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","2b129becfa33b7d45c748e69ed8a713a"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","d0664ae6e15e47ae7686c4d775b87c22"],["/2020/03/26/计算机系统结构-实验1&2/index.html","26aabc6355170fd4c3232462527c0543"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","a9fe61105273638e0587d69c5a5accbe"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","3a105aa034571e81e78f7e26907016c8"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","a76685c199fc40855681993d0233016b"],["/2020/04/18/机器学习-条件熵/index.html","3a250495ab5f5356a05e4270adf8eeaf"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","03bdf28320258cfd46dae55b1325e683"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","499215f2e54ffabb641d7b64ae0527f1"],["/2020/04/26/机器学习-实验-决策树/index.html","4fbd09f5022c8d4e8a60a2d7004b9834"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","ddc55a6dd4858b151adc46be660a27b7"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","d7508c8a62fc6c604dd2014a29dd52fb"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","1b819ecbfb0e48ead5cb6181ecc30053"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","ad52ba8fac1bfbafcbe6da4662fd634d"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","6d5c75e0abf361993b9ee0d1dd0cf574"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","390f73569faf6442fda66d67bc9035fe"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","829a0262413fc31fcb345cfb27e762ac"],["/2020/06/11/机器学习-DNN-手写识别/index.html","515da95a963c5910c811c49b64e3d9f2"],["/2020/06/18/大数据-习题/index.html","9f47be6cb9f8ab4d7acef6dee08a5aaa"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","92fc9be4396b6b0d6320d7413f132550"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","f54eca39e64ff9da2754756d21fa8fd6"],["/2020/06/24/Linux-拓展学习/index.html","b3f4500f10a512eb088df0581b364da5"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","fe9c136add94ae6d414ac963ec3608f9"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","3ae5ee45a48b35550ecff839aab09fb0"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","f0894f4326c234b06bbf6b6b89258090"],["/2020/07/15/C和C++的struct使用总结/index.html","b31be6438ad0ba4eeb4ddb1b4db6dd12"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","b1824625a6800a0ea0d796cd0ecfa434"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","ef6fdd7e69067afe0898635e28ebcba5"],["/2020/08/10/机器学习-实验-花卉识别/index.html","5ec5ab0ad287f33729387676f45b67e6"],["/2020/08/15/Python-项目集锦/index.html","cd755e780d72be3bb517f904fe9cf3ac"],["/2020/09/01/编译原理-词法分析/index.html","5bc7ae349711b8f0b530e40f76fb28b0"],["/2020/09/02/编译原理-语法分析-LL1/index.html","f057ef58cd112f95ff67bbaf4e307c73"],["/2020/09/02/编译原理-语法分析-LR/index.html","f10b596db3b8356f8a659c481f5e1d99"],["/2020/09/03/操作系统-内存管理/index.html","d6b229e82db9ae6765f028c26ea9e050"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","32ec875d206fdd71f6fa9f44493ee0ba"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","dcc5c74661485100dbd86d37f5cd33b5"],["/2020/09/04/CSAPP-实验集锦/index.html","619a149fbb7b001f2e127f1e3d310dd4"],["/2020/09/10/计算机网络-实验集锦/index.html","cb5560230bc2a30d2c19d570d7e3fed0"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","adba0c6ba3ff29d432a7a1891b24ecfc"],["/2020/09/30/C++工程项目-JobShop/index.html","f570e827ca6dafa03aaf0c961d2b9d50"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","e470fbba023aafe5da8dbe9e67ac4466"],["/2020/10/09/现代交换原理-实验1-时间表调度实验/index.html","ffe9144a0b88b1131b3c801e63241dd5"],["/2020/10/09/现代交换原理-实验2-摘挂机检测实验/index.html","3d6b7cfc4732daf31ee2f8b9a8602efc"],["/2020/10/09/现代交换原理-实验4-拨打SIP电话/index.html","b43b72b2979ee0e659ae4df25479c4ca"],["/2021/01/04/Android-项目集锦/index.html","1f3a78fd5c7efcac59d6f51a64314012"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","55dfc104afbd0868429265ffceaea3b2"],["/2021/01/04/C++工程项目-travel/index.html","357fd57e939d1ee7bf093e8ad842ab0a"],["/2021/01/04/算法设计-分治-最接近点对/index.html","19fa0c2198ee6d53a908c7cf097ce555"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","ded6365a230a95d4c88d80ae1af90514"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","2f8964328d29d031ee03676092391653"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","176c1c96556f7d71324be68794bb9ee9"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","d577761b0522d7c177fee8add66e027f"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","a5c8024f18d8fc6952e533be5b819c1c"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","4dbed673968b8f2f138285a23ac000f8"],["/404.html","2394b59b860bfc1b2a641e2bc2300ffb"],["/about/index.html","e0ea2c8993d02f10808449164d25cc3c"],["/archives/2020/02/index.html","6db69ea4e02f1f2044a9dbbc5f45bb4f"],["/archives/2020/03/index.html","93dcdd45da645dd4f3df0c4b22acfdb8"],["/archives/2020/04/index.html","1ad6cac48afede9fb08a5e80646f6380"],["/archives/2020/05/index.html","5074187ccc517df81e0e624dd905a56b"],["/archives/2020/06/index.html","08b6d7f0508cca702875180f8c870e91"],["/archives/2020/07/index.html","a6ef2d2deab768e3830aabdfc79f093f"],["/archives/2020/08/index.html","fb1a86c03d6515903e71fc6a74837316"],["/archives/2020/09/index.html","52dc56e6ddfc3e600e6d4869b859a785"],["/archives/2020/10/index.html","b27ec325f50b635ab6c494a10a7a0b17"],["/archives/2020/index.html","780766e4213714f7c1922d696cf24fde"],["/archives/2020/page/2/index.html","ea2ee272ea0e827030e6d663b065fb07"],["/archives/2020/page/3/index.html","8f3c6b02a3dafb302f2a334a1dc0a96f"],["/archives/2020/page/4/index.html","3a51af15c1f9bffbd14c6a44cf661bff"],["/archives/2020/page/5/index.html","f539f372e269448ef6e23695d4461679"],["/archives/2021/01/index.html","cd8d5a0bb1177c4b8e5f0af57d11f2e1"],["/archives/2021/index.html","6f60c3da51725607f8b83a523b41a324"],["/archives/index.html","a9dd99e91e34dc5709dca78da90ec1ec"],["/archives/page/2/index.html","a9dd99e91e34dc5709dca78da90ec1ec"],["/archives/page/3/index.html","0afec2041e3a828db50a3ac3886d7c63"],["/archives/page/4/index.html","0afec2041e3a828db50a3ac3886d7c63"],["/archives/page/5/index.html","0afec2041e3a828db50a3ac3886d7c63"],["/archives/page/6/index.html","0afec2041e3a828db50a3ac3886d7c63"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/bb/index.html","c7a4b9d91f350738637dabb9de581427"],["/categories/C-C/index.html","9858dc4b75f4b3342bdfe71c5ae4ac17"],["/categories/C-C/page/2/index.html","bf116a3c33d35e082006d71c6df89fcf"],["/categories/C-C/拓展学习/index.html","94de2c5cec44121dc9f61846dc0b6a97"],["/categories/C-C/操作系统/index.html","47461b9acfcecb49cff9d717c65b8e86"],["/categories/C-C/算法设计/index.html","ae994d3ae504358efcf19d4c8eeecb3f"],["/categories/C-C/编译原理/index.html","0371dd92e4ef9e8b9fcafe8efa4d2126"],["/categories/C-C/软件工程/index.html","ec87501310e9af3188b9e8209cf264b8"],["/categories/C-C/项目/index.html","53c7e6dfd13c43f1ef44f0345ffdd914"],["/categories/Java/Android项目/index.html","674e1e2340f06dba8cbe94e4cc5b44cf"],["/categories/Java/index.html","195b0279ddbba2c6775f429eed7705dd"],["/categories/Linux/index.html","8413e9c698b97f31c45a64ca780d4b56"],["/categories/Linux/上机实战/index.html","e4b1b5713305c75bc3e80662e9c60f16"],["/categories/Linux/习题/index.html","1bcbc86aa79f6224ff1e32731345fec6"],["/categories/Linux/拓展学习/index.html","3a86797818e9252abcdfdab681e5bab7"],["/categories/Python/index.html","889d017af557de2f82ac79717a2965af"],["/categories/Python/爬虫/index.html","1677a64b4449f864c09d4fa9272ab117"],["/categories/index.html","f0ec796cb99105b7022532a64e3d6da7"],["/categories/其他/index.html","394d46938e21ae3cfd9a9ce287d5936e"],["/categories/大数据/index.html","0209e354547c7e843f9450c0919e693c"],["/categories/大数据/习题/index.html","8bd294f3b3b39b538b4cbafe8c88392a"],["/categories/大数据/实战/index.html","74e728fe6bc78e0a2467fe357551bc0e"],["/categories/机器学习/index.html","4e3fe1693b3d6fd6d8b4abe4a3bec39f"],["/categories/机器学习/实验/index.html","7f140b2acbd88287166cffa14eaf9864"],["/categories/现代交换原理/index.html","46c7da9b3d64164f08e5f4d85088f24e"],["/categories/现代交换原理/习题/index.html","b0766d77c52adfc1b5d68cc7ea5282a4"],["/categories/现代交换原理/实验/index.html","e6faeccce022a870dc835dbb660af89e"],["/categories/计算机系统结构/index.html","f84ab3b9eea2e3ac6c5af90c4bc400fc"],["/categories/计算机系统结构/实验/index.html","0bdf9b4cacfaae816559bfbf46e90cdf"],["/categories/计算机组成原理/index.html","3ac9c3ae77876eb8a3cca74a56ef509b"],["/categories/计算机组成原理/实验/index.html","08312dae2644aa79a5e9cf4ab10dfc96"],["/categories/计算机网络/index.html","0bf838a1df15a3dd0ac4933b164fd31f"],["/categories/计算机网络/实验/index.html","aa577c454f5792356a445332d8254f42"],["/categories/集锦/Android/index.html","21062f51a63b3a83fad92b62a1996168"],["/categories/集锦/CSAPP/index.html","6d8607a64b7aac737e1a1c7dec22e3d1"],["/categories/集锦/Python/index.html","c7594d331198eacacae88187b0b424cc"],["/categories/集锦/index.html","a01f93646a1128c0f82fbf66e98cc5da"],["/color/index.html","3f627143356419f7f54e1443b3536f0d"],["/css/first.css","ea01aa1635810499a5ade558f4f81d56"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/style.css","4b6ce514c846132c606ce76da7e1c124"],["/friends/index.html","1dc83e54f48e245529da97b45c82cbd0"],["/gallery/index.html","cac0a9f9094373909cca2398b08a7aa4"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/periodic-table/index.html","4c31220b3c8c1d35b1128df43b2c9dc3"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","82323586adbea5ce69a088710f485f8f"],["/js/aplayer.js","6e605f0855251e101d3024646f3eac60"],["/js/app.js","1948329f2fd7e750ade4bdc49138c09b"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","37d8521863d9a3b7dbc335d90da17dff"],["/page/2/index.html","7977324cc1a47cdf1ce005d17cdf0fb1"],["/page/3/index.html","d3cd2ab4f37d982e12fd01d91ad43051"],["/page/4/index.html","72f876053578997d0271cda4394e2a52"],["/page/5/index.html","08f72b46f9272c9ce7f09efdb4f5c228"],["/page/6/index.html","61345e90fcda87efd691841c833ba071"],["/shuoshuo/index.html","a99326477facf046eef81e48562aa6ad"],["/sw-register.js","5170b925b6fad4f03d528d63d427c71d"],["/tags/Android/index.html","91007daec490779f18982cc8fcd25e56"],["/tags/C/index.html","564e0d800fc74814c5e1a63c25de8fe2"],["/tags/C/page/2/index.html","b838c65a599204fbcd365dea9d2fb754"],["/tags/CSAPP/index.html","83de9f5872729f54afb6fed1cbe2fd39"],["/tags/DNN/index.html","1b711206f10bb46f7c67582d37be9223"],["/tags/DNS/index.html","7940816e97037041cb84c796c7779463"],["/tags/FPGA/index.html","ce24ef63c8b17dcfbaaa34e984cacbc5"],["/tags/HDFS/index.html","36ffaa912e9f81a3c7b76aeeee7ad7ed"],["/tags/Java/index.html","5bbe9ae6367b5b98d8769c2e0beedbc7"],["/tags/JobShop/index.html","8ce999c1cb7b82947267d74e7041f667"],["/tags/K-Means/index.html","31ba9e9ccca1ef66d701ef470eae4e4b"],["/tags/Kafka/index.html","dafa7b13b6fe51d7441ce74edf77a3f9"],["/tags/Linux/index.html","9e82aa0dab6ad6bdc75abb617a0410f9"],["/tags/MIPS/index.html","9121236d720e5362f6b5718c8341c38c"],["/tags/MOOC/index.html","e321bd37138741c2f7c7c564d0434fb8"],["/tags/MPLS/index.html","e43da3d0e8382dfbc2f2a1ab6c3b8c81"],["/tags/MapReduce/index.html","e009cd2fbeef644c8a22e16fec3267b2"],["/tags/Matplotlib/index.html","4583f6af1d582a7b8581295fc8a80225"],["/tags/MiniSYS/index.html","e6b404d77a7f3c4c1af49ad2882a232e"],["/tags/Python/index.html","14da422b07f1b32fb2905593b82fed5d"],["/tags/QT/index.html","f283943d5d64ed82310621f40a7b0baa"],["/tags/RNN/index.html","d8b503457a5fa88bae8913be10a6880f"],["/tags/SIP/index.html","59ecf00cb9c3300a2d304a88d88a4a23"],["/tags/Scala/index.html","baf3cf780912ef79177081b7bafd781c"],["/tags/Shell/index.html","cfa888c56063ed077c2580c1ab26223b"],["/tags/Spark/index.html","21a9ff2e5b1454e92b6c27d8b8330346"],["/tags/Streaming/index.html","92411457adfc858982b90f8adb0806e5"],["/tags/Verilog/index.html","06172433828ece9cafc70172c9f955f9"],["/tags/first/index.html","3fb087a82458e74e43277cc83604e083"],["/tags/index.html","518369f7a619054ded3d97d86bb6b96f"],["/tags/习题/index.html","568cc4d33b33280b8f774442113fe60d"],["/tags/决策树/index.html","cbd4d24f6e7c16ccd90838972a6fc4cd"],["/tags/分治/index.html","c3429a4a68d5ba227f01781dd03ebab1"],["/tags/分类/index.html","449e2c3ea57445c8e5da886c1ec8d1bf"],["/tags/动态规划/index.html","9116f8f0936b1bd7e2109aa81c5ba75e"],["/tags/华为云/index.html","d52e1ade05579058f1056f117b729163"],["/tags/同步互斥/index.html","7825659033eae7810d43452319bf022c"],["/tags/大数据/index.html","459f9f0cb76fcc72642876bc55882c36"],["/tags/实验/index.html","9f6e149e9b441e657aeaf2f0b01833c9"],["/tags/小游戏/index.html","bd0d08f9ec0678bd2c5ef89018b1cbb1"],["/tags/操作系统/index.html","0933af0bb755068a4cd88d24c98ed294"],["/tags/日志/index.html","ffcd91af9629212ba1c058e2cbf9987f"],["/tags/易错点/index.html","14843b07dcf12a421627df47f08fabc5"],["/tags/机器学习/index.html","3036b2e90ead4c12689d90b77dfd900e"],["/tags/正则表达式/index.html","e3bff8b0530ba3c13583b8be3137fe4b"],["/tags/汇编/index.html","2ade676155880bdc053808951f554390"],["/tags/流计算/index.html","27a900e9719b866bff9d7a7dc3e9cc1a"],["/tags/爬虫/index.html","ea11c6e76d5b8e4ee49b4873e1cf442d"],["/tags/现代交换原理/index.html","07976cbb4c21399080276b06c10acc08"],["/tags/生产者消费者/index.html","8c3a7fcecae2de36de8358a1060a3ee9"],["/tags/算法设计/index.html","4745ece204406fdb61f23a3c8a06b9e8"],["/tags/线程/index.html","3ee95f012db8911033e464ebb63aa1f8"],["/tags/编译原理/index.html","86f7ee6e34ee7749bf4ef33fae9d31c1"],["/tags/网课/index.html","e104fc9b6099fc0d6f61499fa47e5c22"],["/tags/聚类/index.html","655c544d956242ca2c8a49de581c6926"],["/tags/计算机系统结构/index.html","955abdc39eab745b4cbfd6116c8f9564"],["/tags/计算机组成原理/index.html","1599eca03ce316cdc22a8695a095c8a7"],["/tags/计算机网络/index.html","c5259993a7f4ede337acca9a09d1cca3"],["/tags/词法分析/index.html","3ffb88c74b9706f87756bc407e3aa45c"],["/tags/语法分析/index.html","95ab4dc54c90dc950ca064e408c96c39"],["/tags/读者写者/index.html","10f7adb3b785699d910cae61ccac39d1"],["/tags/软件工程/index.html","3b52ad61a259f8032a3082ed42ada5bb"],["/tags/进程/index.html","acd9f0a3f9fcdf82907af8513ef6464b"],["/tags/难点/index.html","bd84ef309bebf74ce4463e7066af1e7c"],["/tags/集锦/index.html","8e431a32648ce905f84d1fa1231ae333"]];
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
