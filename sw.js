/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","3866d447edd8a8231b6f292a4eb12e22"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","47c86e6b14aff162df8ed9fe03a3dea1"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","95ea26b78f9c0381933b101ad3f64a38"],["/2020/03/26/计算机系统结构-实验1和2-遇到的问题/index.html","da95b7fdaae6948219d5f716816d093b"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","1d5de55284ce754f5e1b43dc98e762b9"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","3a208b7b7a5ece17bd76018d8b197986"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","9af5bc7af751f9874a08dd83210aa235"],["/2020/04/18/机器学习-知识拓展-条件熵/index.html","0b456eb6928e54a278caaf3680f0e044"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","d9ce39ba241c2db74779991fb947a412"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","fc1327ea8d11ea479eca7d0afa802b58"],["/2020/04/26/机器学习-实验-决策树/index.html","d3862eed0feb9f1f05bf53f8db639146"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","2b2b0114bf38cbb487c7b2a27e466922"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","a8c38d11261c5f48acf16a2895ec3cde"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","9d0dddefa815af4110560ea34909af53"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","12a562fa7c347926a7a505373a42f1e7"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","53ab1813b71dd877658537c2ed0a71d9"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","2139a1ee84702be5bca5b87541b3dc3c"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","9078454bfb0a2afc44fa09328d184c06"],["/2020/06/11/机器学习-实验-DNN-手写识别/index.html","81c62334ce1e57e8dab0dc0979adc63f"],["/2020/06/18/大数据-习题/index.html","86290802be93eca6bf8ff04038e60a4d"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","4063743fe7f629d99ce1925de5dbe1dc"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","57d0ee7ecdfe737248d24955fda7d2ab"],["/2020/06/24/Linux-拓展学习/index.html","aafe77852ea1b8df34fd2b01da7741e1"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","9d72427decc6575bff123fd8ac4d7b61"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","7388d34fd75155706bbfcab0fae9ad61"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","dbeec35d050fb09d1c08bd0d9bf94848"],["/2020/07/15/C和C++的struct使用总结/index.html","ebba7ea9686002d84bf136cf87f0f6ee"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","306f8086537251cc392cb01fae047bb5"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","834a70580fb38feb2b43247768e7811e"],["/2020/08/10/机器学习-实验-花卉识别/index.html","f506bea9959919916bbd519871741974"],["/2020/08/15/Python-项目集锦/index.html","eb7450c95b6d121aebc6d4387cebebeb"],["/2020/09/01/编译原理-词法分析/index.html","f84bd6ec544592a4aee227b8c61743a8"],["/2020/09/02/编译原理-语法分析-LL1/index.html","f52741641c3d017707d3de6f977cb6d6"],["/2020/09/02/编译原理-语法分析-LR/index.html","3b25d1dd6941fe89c3af2eeb0c5ffe7a"],["/2020/09/03/操作系统-内存管理/index.html","e3dddbfc999fedc30dca9be89dc0c2f5"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","7f93bfe869041c72ffcce2cf301ffbd5"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","5965d44e865fab84a8e8ced85869ded4"],["/2020/09/04/CSAPP-实验集锦/index.html","8a911a5bf43c13915c4c312fd9f016a4"],["/2020/09/10/计算机网络-实验集锦/index.html","1eced9dac0b44fd94baac50c4b8333bc"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","0b4f5cdf24e4a9d4d42f34ed1608f846"],["/2020/09/30/C++工程项目-JobShop/index.html","aa25b432c8a645f7a10c929072c49803"],["/2020/10/09/交换原理-实验1-时间表调度实验/index.html","1f3c01f2691d08efdf1fa756a2b0bebb"],["/2020/10/09/交换原理-实验2-摘挂机检测实验/index.html","34cc5a09b9896f80b98e16213b83ef30"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","0fb49bf2ef10bca169af70ab678dcfe7"],["/2020/10/09/交换原理-实验4-拨打SIP电话/index.html","20c6a9c6bad0f11c9845d7f72ae2e49a"],["/2021/01/04/Android-项目集锦/index.html","ac94b23c102e8e565f5dc4629034b0b1"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","a1360d2693c53bc263bf16a8a66e396e"],["/2021/01/04/C++工程项目-travel/index.html","6adfde4781f80877baedc1a7f28f7793"],["/2021/01/04/算法设计-分治-最接近点对/index.html","2dde67723303e701f280390a1c1223f6"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","860a0052dc29a161fdd7f0e9f0c3975f"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","6a41a57df50212c2ab1988132140a577"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","a33b43277c110a47cace485dd25f0242"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","864fa36d3b6eefb340725eb1a72b3604"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","6fec6cfbc2ff16bd2359a6a20c28e9b6"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","e0240692a2dd9fd7722b0e996ecdba5d"],["/404.html","42fe758af4169c3588c1f2843aacc4b5"],["/about/index.html","5f2773955c43485c1c397067521c5353"],["/archives/2020/02/index.html","aa0c181b44c0d127a982677aa483997d"],["/archives/2020/03/index.html","4490f7d7c6341643a67caae88e233bcb"],["/archives/2020/04/index.html","540ea66a46bca7b5285c4840e1c0aaf7"],["/archives/2020/05/index.html","89e8c595921d542e1e4034d9311096af"],["/archives/2020/06/index.html","02a6ea264c65deee5118e2df6af6b9af"],["/archives/2020/07/index.html","036ed79f1b0d3e713338c296b754e48a"],["/archives/2020/08/index.html","a57ca217fd06f0b9384723c574f3e596"],["/archives/2020/09/index.html","2b57c99f8da4469a34b97c6f13a04292"],["/archives/2020/10/index.html","5ecd8fb00c963b33b4434dae3b47800b"],["/archives/2020/index.html","63a9a829d0fd8301cba1620e55cb771f"],["/archives/2020/page/2/index.html","aa46545fa9fe007593f63cb38ad49483"],["/archives/2020/page/3/index.html","f805af9da709c07fa0d4e633ba51b7d5"],["/archives/2020/page/4/index.html","5e1645acf367c9c2daa7ce0dae98ca74"],["/archives/2020/page/5/index.html","70877b22559a3abfff6f366b994508a5"],["/archives/2021/01/index.html","184b11aa5569e857439949cf9b2b4814"],["/archives/2021/index.html","977c414e746148cf8c554e48573968fc"],["/archives/index.html","04177e77fb60d10e24e5d147d8c3383e"],["/archives/page/2/index.html","04177e77fb60d10e24e5d147d8c3383e"],["/archives/page/3/index.html","04177e77fb60d10e24e5d147d8c3383e"],["/archives/page/4/index.html","04177e77fb60d10e24e5d147d8c3383e"],["/archives/page/5/index.html","04177e77fb60d10e24e5d147d8c3383e"],["/archives/page/6/index.html","04177e77fb60d10e24e5d147d8c3383e"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/categories/C-C/index.html","289bffaef80fae907f939b0910c9b925"],["/categories/C-C/page/2/index.html","b6de28fbfd47de4660f0ec4ca66c6522"],["/categories/C-C/拓展学习/index.html","d140c35230a2bb271d10a288c91f1ec3"],["/categories/C-C/操作系统/index.html","d6d80614e176b0b2c7ea8d1d8013ff7b"],["/categories/C-C/算法设计/index.html","03448f62659f852c0eb237e4ed8104b2"],["/categories/C-C/编译原理/index.html","c10b869bdfc9edc279d56e483724ff0c"],["/categories/C-C/软件工程/index.html","06e740584fa9cb8cc583b035040ad479"],["/categories/C-C/项目/index.html","ea2f343938b10a12e1e879304256da37"],["/categories/Java/Android项目/index.html","251973e183949812825d7eceedba4fe6"],["/categories/Java/index.html","8822d1065dee8623f887c71f18962474"],["/categories/Linux/index.html","3bb164e06a235a90c3ef54e54bd8b7f1"],["/categories/Linux/上机实战/index.html","08b1301edd29855f7e87f5c6722b4daa"],["/categories/Linux/习题/index.html","75f72a9795c811de4029229ea2c73cbd"],["/categories/Linux/拓展学习/index.html","55ead05154e63a3743056feb637e2e7b"],["/categories/Python/index.html","736c9ac56ae07f5bbbc7f8fa7cd72edb"],["/categories/Python/爬虫/index.html","91a3118f5a70f364a5e3ee128b9c9509"],["/categories/index.html","59f9377be35fa60d8f814c5df1b0339d"],["/categories/交换原理/index.html","ae69ca093a506e4679044032964d1262"],["/categories/交换原理/实验/index.html","854c6236198a5dd555943e5348ff6ebc"],["/categories/其他/index.html","17b2ec03c83775120dcd9bf4f163d131"],["/categories/大数据/index.html","5714a50278e66a9b36dc55bc1170c679"],["/categories/大数据/习题/index.html","ca34689fc460b2d0066ba4730b339f0a"],["/categories/大数据/实战/index.html","f72801c294171002cbd19860a5bcc1e8"],["/categories/机器学习/index.html","053f1c50be655ad8e2660d92a84c4745"],["/categories/机器学习/实验/index.html","d61bd2c3dab4a5a29df43fd0c72228c6"],["/categories/机器学习/知识拓展/index.html","0e84f704c041f54a2f2392539bee3ff1"],["/categories/现代交换原理/index.html","1586ece5888f12554ca904b601937f25"],["/categories/现代交换原理/习题/index.html","09e1eb6843826113c409acb5c5a5ee2f"],["/categories/计算机系统结构/index.html","b5bd5e84f2159f0195b59e42703dc237"],["/categories/计算机系统结构/实验/index.html","c01846cdba876045545d1242e908c409"],["/categories/计算机组成原理/index.html","024f105c4861a5b74cd1da2397542334"],["/categories/计算机组成原理/实验/index.html","f569478cf23e171cb6c8978fb42bf494"],["/categories/计算机网络/index.html","c635f1f7920c30d55edc31b9970f0a9b"],["/categories/计算机网络/实验/index.html","dc3ac9dba0358c2b9cceb42402c2a759"],["/categories/集锦/Android/index.html","58ed10c72868344d4895f94930e691e8"],["/categories/集锦/CSAPP/index.html","0ce7931b9d17f90490b804017378dbf4"],["/categories/集锦/Python/index.html","2e89f04a6fd2300120b443e6c46920d0"],["/categories/集锦/index.html","f580330e2cebf4b8a2aabccd8a27afc0"],["/css/first.css","01a90baf99fa8f190becabd973782198"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/style.css","29bd14d027343cdf06b66cce6bf66453"],["/friends/index.html","8fb60d1cf44ef10f58ce54e75eefacad"],["/gallery/index.html","63f4bc7639ebb10460b077618443184f"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/games/tank/index.html","a4a2448b8b53e14bf7bad5c1f71e614a"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","78cafbd4c5a8c34094d7c2e3337c1ff5"],["/js/aplayer.js","6e605f0855251e101d3024646f3eac60"],["/js/app.js","1948329f2fd7e750ade4bdc49138c09b"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","d6176b0afb87a4a2b1bba11e95c3bc74"],["/page/2/index.html","280cf50e9cc7327893b4d0faa7f76f44"],["/page/3/index.html","7c598dc15b307113f6b0e3a56ea76009"],["/page/4/index.html","b03d254858d4d4f3cfde792386f519f2"],["/page/5/index.html","1467bc1ec31957a094a123c6d8433300"],["/page/6/index.html","e444664b5f5896af3697df8eec080092"],["/shuoshuo/index.html","333c14857f3e28adcec2e871e9ec68f1"],["/sw-register.js","adb4ed3fb0f229936cf461e295803398"],["/tags/AI/index.html","5f82c3cb25c057daa73dab2d6682e614"],["/tags/Android/index.html","75b0ea87ab045d9965ccfe99d16b254f"],["/tags/C/index.html","fd8ea6fa525349a8e53f762d516ec7d8"],["/tags/C/page/2/index.html","026c206f82269480d895f3daa6ea5ffa"],["/tags/C99/index.html","c852d938638d33d515fc7b981bae318c"],["/tags/CSAPP/index.html","17b21a80e55f8a45398b54d78486c31b"],["/tags/DNN/index.html","caca400dda9feca5b8cafd6ebac5e928"],["/tags/DNS/index.html","8bb6daf64f45c1eda4c4e8ba1023002f"],["/tags/FPGA/index.html","fba7b9637e7b391f4995725e1dcea0ba"],["/tags/HDFS/index.html","4651f452fe1b78de155d11f09d1e25c1"],["/tags/Java/index.html","81352e59b91bd2490d12c4d8d2e87eff"],["/tags/JobShop/index.html","9449300e1df289722698e7864c3da1b1"],["/tags/K-Means/index.html","8ab3e047dffa201082912c45bb01afda"],["/tags/Kafka/index.html","ce03c20ad7f3c107ab8162628c9d51b9"],["/tags/LL1/index.html","e5c79b1ffe69f2813b58c196a09b8839"],["/tags/LR/index.html","627f982e408ca91d5594f9f9c628cd51"],["/tags/Linux/index.html","61c1ee473bce2ffd014bf4090f8fab55"],["/tags/MIPS/index.html","e664b24c3ff25faef2618c3025950c3f"],["/tags/MOOC/index.html","4536ba9e48e8a8225f3276b879b3ac9e"],["/tags/MPLS/index.html","f8f9ed149e2fa4a4de5d3694d6546b10"],["/tags/MapReduce/index.html","7cd7cefc853962f56d8f889649255d87"],["/tags/Matplotlib/index.html","c03beb550d06b6e06ed6acd200268800"],["/tags/MiniSYS/index.html","306f962a147bc0bb25dbbfc9f4f03921"],["/tags/Python/index.html","ea33fd37567676546b8e489632661aee"],["/tags/QT/index.html","69193df96c7fffb1c64f128630b65e4a"],["/tags/RNN/index.html","6277bd20aa81f798befa37f1e8e265b6"],["/tags/SIP/index.html","d85ac58aaf81d0c2dabe96432de20cde"],["/tags/Scala/index.html","5d2b67abc79a7c46f8568baef25b977c"],["/tags/Shell/index.html","ac78c6183aaac89bfa4d8a36c1ff4ad9"],["/tags/Spark/index.html","90f1a5dc7fb8c9b8954d7dd86881e6d4"],["/tags/Streaming/index.html","5036f1d405023d833f8ae1bdbc62976b"],["/tags/Struct/index.html","f9662ffcb40f89dfc1b162de4d6aaba6"],["/tags/Verilog/index.html","eae26e25e4d41be0ab31c12571bb1b65"],["/tags/first/index.html","b8627236c37366381d30c6cf023ef78e"],["/tags/iPython/index.html","4258a8bbcd6e7d5f91fcf4982174574c"],["/tags/index.html","eb212cb2b4bd1220bbd2c273855f4099"],["/tags/ls/index.html","f2c4c122a1a981ce5c0e8b82f828c75a"],["/tags/习题/index.html","1d92a7213e0a4853a5cf963e4e06a65f"],["/tags/交换原理/index.html","6dda93807fb4014369dc2b1c5ee78d9a"],["/tags/人工智能/index.html","e23f1089cbe4448f07344e97f37721be"],["/tags/信号量/index.html","5e6c6f817edbdc465532703aaf1689a0"],["/tags/内存管理/index.html","8b4b00ec4717d98103114ae8e9800912"],["/tags/决策树/index.html","bf170ba01f0caacd22dc800371cb49c0"],["/tags/分治/index.html","ddc909ca50ad72c3d2b11a7fa360ba69"],["/tags/分类/index.html","7f6136caaaaffe07429b42627b20ee38"],["/tags/动态规划/index.html","b3ede53c36a6f85ee14e954f6ae2e144"],["/tags/华为云/index.html","4b95b13918edad98096ef8f8675a4652"],["/tags/单词计数/index.html","3046b5bae34956bd3cd73955972e1b2b"],["/tags/可视化/index.html","31b13ef9ed886cad0c6cb60f9759e432"],["/tags/同步互斥/index.html","99038970bcd8487a8e9522b7cf104de7"],["/tags/大数据/index.html","5a245dd88928940c2688e98f1ec83036"],["/tags/学堂在线/index.html","7b7498beda1de48fec09cd1ba045816a"],["/tags/实战/index.html","fff5104079e682e6a10b4d034341b31f"],["/tags/实验/index.html","160e86fe5a0a3a5888b9b7f2dfe4a4b8"],["/tags/实验/page/2/index.html","cf147a2b8cb0eedc12a2edf26cce2f31"],["/tags/小游戏/index.html","0c35fae268efe79aeaad782f2a289b98"],["/tags/工程/index.html","f18aa9d2dbc51dfd7a787393b1f32324"],["/tags/工程/page/2/index.html","c01955da54871beba9724d73a931f50c"],["/tags/手写识别/index.html","49e9f79ee1841018aecdda3e653628fd"],["/tags/拓展/index.html","891a0fc5248570ccce056b673cc8eda4"],["/tags/操作系统/index.html","6c69703881a77bfc97159b46048e597c"],["/tags/数据处理/index.html","f920a342efb6097c6bf914c76ca1a1a4"],["/tags/日志分析/index.html","e107f825aa47b7a26d412cb0ba93a6a3"],["/tags/易错点/index.html","0f42530ac60fb6c746bce0cc76eedc42"],["/tags/机器学习/index.html","760eea8875cdae31cdc22a4ed0faeedf"],["/tags/条件熵/index.html","d8da65c95ecae29ae5832b0eeac7838f"],["/tags/正则表达式/index.html","020ffc4d7fb6fa230159661585ed53aa"],["/tags/汇编/index.html","6d105f5713e6a81c39a38369f23f2a57"],["/tags/流计算/index.html","ede434415753b02ed0b9142bb1a79a22"],["/tags/爬虫/index.html","bf8dae5a0778cdccf6cd02722d3b0aa4"],["/tags/现代交换原理/index.html","f2aaaae622c58c0244b04b48c2088a4f"],["/tags/生产者消费者/index.html","2e2b3d61643d40742ed2542ed8338341"],["/tags/知识/index.html","093bec79f3a1f17a2ad5ce517743ec4e"],["/tags/算法设计/index.html","453de00725abe0d7ef9a601f96bc1946"],["/tags/线程/index.html","403d58b1f97f8cb0d9d266c784102ceb"],["/tags/编译原理/index.html","97b3db241f889f7b84611ca01e1d39b6"],["/tags/网课/index.html","2c8fa11654f82e1892668583057f759f"],["/tags/聚类/index.html","c12906cadf52ca0f85079131b8d7bf4b"],["/tags/脚本/index.html","1de28b3074971f4ff04a8c7ededc4b67"],["/tags/计算机系统结构/index.html","5ef3007695801b026c731c2b5dd09efb"],["/tags/计算机组成原理/index.html","f0ab9d5f87738cb327c32283c40cff18"],["/tags/计算机网络/index.html","0265cebfb52fdc13be67c491f7531431"],["/tags/词法分析/index.html","ed6f881a58c1fee7dd6673a933392659"],["/tags/语法分析/index.html","beb4666c4ffcaa756d8a1552abf9a491"],["/tags/读者写者/index.html","8b82f825d61d88f8983070534dab4519"],["/tags/课程/index.html","434f6304adb46668abfd6b2c9aa0b3a6"],["/tags/起名字/index.html","91984b60725e74805a8b09fd63b30421"],["/tags/软件工程/index.html","eb8c10df7bc83aa4eb74262c37a0ad94"],["/tags/进程/index.html","4815ed16ebe2a623a036b3e4c4170b0b"],["/tags/通信/index.html","7b060791787b7ccf3104e762d5dbf258"],["/tags/遍历目录/index.html","b58aa9a736df6bc10e1508b24a5b435f"],["/tags/难点/index.html","e265216c7a5393b0fed7df123b715e3a"],["/tags/项目/index.html","ea4300e706a234074a99e6eb2cf09b00"]];
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
