/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","fe16657c397d9b630288ea4d55484078"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","be2853716b861c520f09d95de8fe7b3d"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","60130eb81a6bc399849651faa0f08b60"],["/2020/03/26/计算机系统结构-实验1和2-遇到的问题/index.html","fbc69a4a018842aa7824a682ad364808"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","101ca3449e5e43a32c433d7eb9a2daa6"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","d720a0463623de6de1e738b40cc3d678"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","8c61b0c6b2f8367da621f5ba741aa587"],["/2020/04/18/机器学习-知识拓展-条件熵/index.html","4f81e0dc14479e05e2e7b8ac02764f50"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","4649cdb66f51ce37efd754a02341b0b6"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","64a02675399579824e8bc5a0de82852f"],["/2020/04/26/机器学习-实验-决策树/index.html","337d4f979de25725ce881084eb77825d"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","dc344a18b9d2c16348fdb753edb97244"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","d9e85a0088b32be63b8c2a11cfdfd15c"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","338592bb9e1b7720a50d394812d84b07"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","2b8c122c603376b936d15dcdf95f09fe"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","6c9e5f70cbe57090812b834599edbe4d"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","e0b4bd8d22435e64dca39ec80e131e61"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","46c34822ec14e978cda921306967909c"],["/2020/06/11/机器学习-实验-DNN-手写识别/index.html","2e844b1466a9abd1690e51dc19c67d49"],["/2020/06/18/大数据-习题/index.html","060bda8019df3d765a9d894ff6b37cff"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","86c4850f6b05a0bdbe1103c57b2f644e"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","102dd98a9c7b27ca720a77bf2214c734"],["/2020/06/24/Linux-拓展学习/index.html","9f397addb1cfb66db2ebe308f31555b7"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","e0e99b51bad8e60559503dbf1e255749"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","2a40d633179ac071eca0023eacefa90f"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","81ef120397c070592d2f1e4bc5fcc52e"],["/2020/07/15/C和C++的struct使用总结/index.html","14c23349739a5cc381e7d8f885524db2"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","6abbe056796954eaf4e718250ba936f0"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","dc464582025cef6b8f5e5adcd5cb2549"],["/2020/08/10/机器学习-实验-花卉识别/index.html","0f597f67b2a4e1f807c14f451138e4c5"],["/2020/08/15/Python-项目集锦/index.html","76274fe0057171fa74db3a9735734d72"],["/2020/09/01/编译原理-词法分析/index.html","93889bdda74f3fc2f48fe4c9821f313b"],["/2020/09/02/编译原理-语法分析-LL1/index.html","b9a438e8be69aec83a7cfebe05d1582d"],["/2020/09/02/编译原理-语法分析-LR/index.html","bc68b1a0763202e8bbaf0b1b63499ff9"],["/2020/09/03/操作系统-内存管理/index.html","fbff753ca0cc15799a4655f3736ffca5"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","eb2a6dc5a86c9b044cc1b9c3081df37d"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","4d89105f67f4b3f3a182bf0770265a91"],["/2020/09/04/CSAPP-实验集锦/index.html","fffc081c05bf315ddbaf16f02626274b"],["/2020/09/10/计算机网络-实验集锦/index.html","2feacd4efb4aa812ed28df2a0e1e9ea2"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","b54519631c34fcf034426f80d670ec6d"],["/2020/09/30/C++工程项目-JobShop/index.html","9621f4c69d5b26fb71e09e69799f20eb"],["/2020/10/09/交换原理-实验1-时间表调度实验/index.html","6adb222e95f096df3fe269a1038e25da"],["/2020/10/09/交换原理-实验2-摘挂机检测实验/index.html","b7da9b1314f722bc12a725c2be236798"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","b79cd393010dc0db94e2c6b78f338001"],["/2020/10/09/交换原理-实验4-拨打SIP电话/index.html","3b96440b86a670037949428be6e84b01"],["/2021/01/04/Android-项目集锦/index.html","20bede441b0766f9f8f73d06cc2fad15"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","c3e6ccd9446b9c15370da90d5119a1de"],["/2021/01/04/C++工程项目-travel/index.html","c6080182500f166e8234bbc53b95b696"],["/2021/01/04/算法设计-分治-最接近点对/index.html","26a93748a113b53dec152f164cc87bec"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","b5e2efd8e5958c285341e7c1a66472ee"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","d2df4eee69dfa3a4768fc0cb684ef02b"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","102bab85a5356b09271bd8935bb4d83d"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","e3acb7dda285dac8c9a7c6fd1873156a"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","56603087394c6b35e93dd49274a12587"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","bf7167937adf625a4b9c41d9e8145b8d"],["/404.html","f4549c760fd9695ee9c5a57646a6d28f"],["/about/index.html","9026c2838b6527ebd1326cc48d50d04b"],["/archives/2020/02/index.html","41a3e1a5db6888f4071295cc14e61657"],["/archives/2020/03/index.html","1b98dca1b084194ee72202b64e6bb8c4"],["/archives/2020/04/index.html","375fec7cec9d39a5cf7140796fcc6afe"],["/archives/2020/05/index.html","c7090da203f56360387106b4c50fa0f9"],["/archives/2020/06/index.html","d1858f08887b752df6afc1e92880255f"],["/archives/2020/07/index.html","7b4e0bbeec4d5acfa0dc4c852d5cac24"],["/archives/2020/08/index.html","093edaf97e4c0b0a7f1f119475607059"],["/archives/2020/09/index.html","cb257f183989143c7c9e31eebda9c793"],["/archives/2020/10/index.html","7ae5589a31b7a77005c8ec52eed6c7c1"],["/archives/2020/index.html","5792180f9ce71ab6f2ee66c840e7cd81"],["/archives/2020/page/2/index.html","8798081fd25d9aab95cb50ce7a8d7725"],["/archives/2020/page/3/index.html","caadfdcbb11354ad5a943fcbd7d1cb9a"],["/archives/2020/page/4/index.html","90090ef5a8e1f6229558a94fd1c67c9c"],["/archives/2020/page/5/index.html","7730eb1bbbd60392ee491db10e4c4269"],["/archives/2021/01/index.html","82f833d8d6a0f982603afee6819eccd9"],["/archives/2021/index.html","3287d15a20b23044b2fe61166ad3cb22"],["/archives/index.html","4723c443cd1a24effb5b7686bd696071"],["/archives/page/2/index.html","4723c443cd1a24effb5b7686bd696071"],["/archives/page/3/index.html","4723c443cd1a24effb5b7686bd696071"],["/archives/page/4/index.html","4723c443cd1a24effb5b7686bd696071"],["/archives/page/5/index.html","4723c443cd1a24effb5b7686bd696071"],["/archives/page/6/index.html","4723c443cd1a24effb5b7686bd696071"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/bb/index.html","9321075a49af1ac0439f0a7273e9072f"],["/categories/C-C/index.html","03df34a1820b2b4bbce93ff9c7427950"],["/categories/C-C/page/2/index.html","cb32727686f1bee888f6fc9cf0cdb971"],["/categories/C-C/拓展学习/index.html","bb5c883e919acf458d26cbe6e5fc5575"],["/categories/C-C/操作系统/index.html","ff2433771bcd6d3ef7579c1ab1c9b02f"],["/categories/C-C/算法设计/index.html","3ae230af78729af2274dd79a14c75ff2"],["/categories/C-C/编译原理/index.html","7543c7a152df4b319a7b97f8e65094af"],["/categories/C-C/软件工程/index.html","609442e1c84278f7fc49972457215b42"],["/categories/C-C/项目/index.html","1b842e0ed818263e9570c5c7f5b8d95b"],["/categories/Java/Android项目/index.html","f9827762859a87a075545ddd54f98d9e"],["/categories/Java/index.html","c647c1773cc19bed8b51cb38589ab1cb"],["/categories/Linux/index.html","259ba0847a556c08466010143cbd655c"],["/categories/Linux/上机实战/index.html","ea34ab9f6e55e4c6521203125951902e"],["/categories/Linux/习题/index.html","eae953d4790ac8cb4f10f931523dd866"],["/categories/Linux/拓展学习/index.html","9038e09ebda7601650d44387cd668000"],["/categories/Python/index.html","9d2eaabf24ddbbd94b8c879f6f5025f4"],["/categories/Python/爬虫/index.html","4cbd7a7208026769c4d2245d9e86c906"],["/categories/index.html","5a1da5586180121ff7357d5329fbc5c3"],["/categories/交换原理/index.html","27634535269f1af1ddbe477a5ade6211"],["/categories/交换原理/实验/index.html","29faa175157c153ce5e4a740779cc3e6"],["/categories/其他/index.html","d623d90c37c85fc29242076d3b914bf1"],["/categories/大数据/index.html","f8ec7a3d2cf205c95972ab1a6d9242e9"],["/categories/大数据/习题/index.html","1c00fb4cb4129b1d14e699f9a64266e2"],["/categories/大数据/实战/index.html","8a5ccfc07288636941286caec8f06d5b"],["/categories/机器学习/index.html","a6d64c5eeabc317676f6bcbedfd91ef0"],["/categories/机器学习/实验/index.html","7eca70f6e819dfb57922e6eddf40be30"],["/categories/机器学习/知识拓展/index.html","b42002dd235baac766dcf192c596a462"],["/categories/现代交换原理/index.html","f643aefaaae636cc78910b69005df358"],["/categories/现代交换原理/习题/index.html","56b4fdfaef4dc9d6fdc504efb854bf1d"],["/categories/计算机系统结构/index.html","8d3d86fb39997c570b7845ca7620153f"],["/categories/计算机系统结构/实验/index.html","45ee36afa62d49525b35080473abb3e8"],["/categories/计算机组成原理/index.html","e3423062200b3049a7db4bd287f1f9f1"],["/categories/计算机组成原理/实验/index.html","70f59412365bda09be740d7e35960ba8"],["/categories/计算机网络/index.html","5413169030e99943d80f63a1d1721413"],["/categories/计算机网络/实验/index.html","26348cf6b54902eb15dedc12520554cb"],["/categories/集锦/Android/index.html","c8aa06572c1875820cd0adc3efc4480b"],["/categories/集锦/CSAPP/index.html","435cca8048be475038cdf141369a87ea"],["/categories/集锦/Python/index.html","0bd06b60f3e0cf88363d222cab8fe438"],["/categories/集锦/index.html","1a64e2e505089e225f9ff46ba4173344"],["/css/first.css","b6d087a1c859f2a9e183897e37ac7fd2"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/message.css","b0ce3ca232f809c8d7a85c79bf1f7ff8"],["/css/style.css","7c02d5a26902ac4da5d2d0131ed08853"],["/friends/index.html","5c7861cbff47378b835f6415392890b9"],["/gallery/index.html","63f4bc7639ebb10460b077618443184f"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","9703283b17e3bb99b3bf2e27ad578b84"],["/js/aplayer.js","f10ee7aff4ce278045da925ac6510d29"],["/js/app.js","2fb5381b84811b7d10a6c591d3896727"],["/js/jquery.parallax.min.js","38cf4791e24aeaa8101bd2c816400718"],["/js/message.js","38da736cdf513c9a15a0a2a16a34eeae"],["/js/plugins/contributors.js","23ba3efa08d9fb1aae753ceaa6df2711"],["/js/plugins/friends.js","239cf9c648af390f866ed00cead3e23d"],["/js/plugins/sites.js","15bb31fc27abc888b17cc5d822808604"],["/js/rightMenu.js","19b2a577c30a04732f02b86bda62e0b9"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","3b7fa3c3947f3c21d5966e060524c7ed"],["/page/2/index.html","ff0dda3ce6e82ef42569d7eda091ae7c"],["/page/3/index.html","c0f0e4b0d335053cbddc510a55c27da4"],["/page/4/index.html","cf9144cf9248a3997740d03ac7a460d5"],["/page/5/index.html","53dbca25c4e807475355d56349873825"],["/page/6/index.html","2b9c12a53a92d7086875efa67d3720a0"],["/shuoshuo/index.html","fb8ba94192bdcee0b5be3da0424bf949"],["/sw-register.js","1065769bc3a1a7d6d966f936a71a6481"],["/tags/AI/index.html","b366836581e3b7fbccad35905faf0e86"],["/tags/Android/index.html","7f4e375efd62340d142ebad4db2d77ed"],["/tags/C/index.html","35fecfd0ac1a4e33173cc905f0ca0625"],["/tags/C/page/2/index.html","383e75925c8ccf7cbe8798a739a9b68f"],["/tags/C99/index.html","3b22148bf534c2e075e60e4228534b74"],["/tags/CSAPP/index.html","63fc1d9536af0d14fc8b9caa238751c1"],["/tags/DNN/index.html","93632dde2c386a37487fdd9ded4ca9e7"],["/tags/DNS/index.html","18749794a20eba4f75b7f91bba4689b1"],["/tags/FPGA/index.html","39bba45b0ceff0049b83ab6da063a10c"],["/tags/HDFS/index.html","f35cc7bc5f05cd4b55dbd02489c3e541"],["/tags/Java/index.html","e3ee118f1ecc87b8ed7c70dc39a43027"],["/tags/JobShop/index.html","32e8c83740ed8be5623f43d45654e22f"],["/tags/K-Means/index.html","cdb31524d85d8a9fa27d5f09bbdbc143"],["/tags/Kafka/index.html","ce866a012dbbb10fdc7d7c5ab8e25535"],["/tags/LL1/index.html","ecc4178ad73b0980c282a2bd54c5dd65"],["/tags/LR/index.html","6fb66514a24717c2ba057cb570c7bfb0"],["/tags/Linux/index.html","6bb5e10128aba69aa65ad899da5fa1cd"],["/tags/MIPS/index.html","71977459c76aa54653a83f862b460203"],["/tags/MOOC/index.html","28f46fdade890a9e6c3f1ae57088e5bd"],["/tags/MPLS/index.html","2819a3c8de7d58efb30b5d389c6b60bb"],["/tags/MapReduce/index.html","dfd0aec388ed068c8a8874b3e9772731"],["/tags/Matplotlib/index.html","323d315f0fc051e381406be051a17cc9"],["/tags/MiniSYS/index.html","8bc33881457f6329e4fdf96c4caab063"],["/tags/Python/index.html","d55d88fe8b9c7a6226c1389347e702bd"],["/tags/QT/index.html","6ef038427fc4e26b8d5490688e1c252e"],["/tags/RNN/index.html","9fe1ec8fea40cfa0177217b89f2db56b"],["/tags/SIP/index.html","c8e0390d4db56f2ab4da68cb0ad5dab3"],["/tags/Scala/index.html","e667abe201db5877f3002d6cfa6039aa"],["/tags/Shell/index.html","7dd01d804dd97f7b0c6f476d98c1a6e1"],["/tags/Spark/index.html","f0ef8eb9eef56c3a9866f37605543ddf"],["/tags/Streaming/index.html","d513fabc524635f72f0bf59dd3c12dfd"],["/tags/Struct/index.html","b101fb19680314a43e6506c089c134e9"],["/tags/Verilog/index.html","d120459cba8dbd6f1f383a0fc49136f7"],["/tags/first/index.html","0429bc93661d18131b4257f907189f61"],["/tags/iPython/index.html","bad09e1f9b35bae3ff58bb8c761a5b8b"],["/tags/index.html","c2ea30e35af2452839313972608f30de"],["/tags/ls/index.html","741e57c545151d66af10b364adb60609"],["/tags/习题/index.html","962f0ee951a203dc09287cdd529cbbf6"],["/tags/交换原理/index.html","1895ee6ae3d6702815b285fc5abe4698"],["/tags/人工智能/index.html","23df87f8fa9866c85e3f4fed0a6a694e"],["/tags/信号量/index.html","5ae59efaec1085881f8b48172f6679b3"],["/tags/内存管理/index.html","9a06a63c9d2f30b0d12af092a086e204"],["/tags/决策树/index.html","374244aa6a9b5e566b177529b3c666cf"],["/tags/分治/index.html","a4aec02f6b537c788e049dfd2a39234a"],["/tags/分类/index.html","c9ffd7889697cb2704fa2e36d23af2c2"],["/tags/动态规划/index.html","45e823a6b6c650c85eeee8c84ec76853"],["/tags/华为云/index.html","f3f17b6924cc681f6c9bdf8c56a4fb35"],["/tags/单词计数/index.html","8868e1c3b584900aa3f29f9eaad60581"],["/tags/可视化/index.html","aac110d76a520729746e59f7faa102a1"],["/tags/同步互斥/index.html","71d5126f5ae4fb78f5959147368d1644"],["/tags/大数据/index.html","d7969ea988177925a214f98de99a9a98"],["/tags/学堂在线/index.html","641b15efdb952ab203526bf5226138a4"],["/tags/实战/index.html","58965413b1eb01b4eb93e0111f6b4af9"],["/tags/实验/index.html","71c88090b39f5e63a36c613bfb8f7c36"],["/tags/实验/page/2/index.html","f926c0f4eaa71fe7c23ae7442417e72d"],["/tags/小游戏/index.html","7ddf9e4de16177fa16b6b6d6b686bc0d"],["/tags/工程/index.html","827690be86d874a2d6dedf4341ebe2a7"],["/tags/工程/page/2/index.html","9ba7686f16e844c6fd0d5b23fbd1ec8e"],["/tags/手写识别/index.html","938133236cc21994a7b90c8dc5d1cf28"],["/tags/拓展/index.html","05319d434b28fd65a6b9a4061f9b250e"],["/tags/操作系统/index.html","6abf78badd3d607bd3844c94bba46a15"],["/tags/数据处理/index.html","8010288c467f33ba96be8daf41a2ae27"],["/tags/日志分析/index.html","ad4ab6be018576916b010ad9d44e8931"],["/tags/易错点/index.html","e698441f0a595029af3ad3cd356a4176"],["/tags/机器学习/index.html","23efe2f54bb110d521f03ee71af9f8fb"],["/tags/条件熵/index.html","7e3438ecdacb788916a8d1c54255525d"],["/tags/正则表达式/index.html","c4c09d67ae03d4550f0fa2323d5eec88"],["/tags/汇编/index.html","67c5ad528a5a01669d5e632da714ba54"],["/tags/流计算/index.html","ca11438de65cf3747a201521f02fa9ee"],["/tags/爬虫/index.html","c2deb978c3a44b17b43b3127fc2e9f54"],["/tags/现代交换原理/index.html","61dfcbcd9084be6fa4ffb81b4548869a"],["/tags/生产者消费者/index.html","46d458247d4fbdfe15feefdeb42dec48"],["/tags/知识/index.html","23aecf6d27a6bb7ceb457f56820f1833"],["/tags/算法设计/index.html","5267d3699d1df5174c8a4833a41d0bfa"],["/tags/线程/index.html","bf48b2c04d93c0a136ffa55169159b4c"],["/tags/编译原理/index.html","ed09243ed72f5888a67063b9268b90a5"],["/tags/网课/index.html","8d8458879560df6dd3ff099f1ad6e949"],["/tags/聚类/index.html","6c25f8cb8332e46a8a205468e24d3049"],["/tags/脚本/index.html","5e01955221671ccd3ce98ce41c991a83"],["/tags/计算机系统结构/index.html","e7e2dff6b619f44019e1342750179d4d"],["/tags/计算机组成原理/index.html","78d93a3e69c9c0578f37393bffb34353"],["/tags/计算机网络/index.html","c41ddb5bd27dc6673db9e3856826777e"],["/tags/词法分析/index.html","2d6e9a1ceca4d50a35c638c885c62999"],["/tags/语法分析/index.html","6dd6f5eaabb241a95daaa879096be581"],["/tags/读者写者/index.html","22bb2c1db5e3be47dd13a3588dac307e"],["/tags/课程/index.html","d4e3a797e9d1b8db3393111e622adccd"],["/tags/起名字/index.html","d07a913caa80219b3017e84e5d76acae"],["/tags/软件工程/index.html","f94c911f439134c27d2769b930d7de14"],["/tags/进程/index.html","151a09a8ff3e7d73e64d0db6affd60fa"],["/tags/通信/index.html","f3a34b28ec2ead77df9c388744449236"],["/tags/遍历目录/index.html","745e62b25cd169134837144fd546a7b9"],["/tags/难点/index.html","c740c82b22b1e8d1944c21297fa32bcb"],["/tags/项目/index.html","32190bde051167eaea3bf3ead3e8c728"]];
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
