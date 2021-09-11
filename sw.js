/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","d4e2a9e211cf38537b5e6a59960052cb"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","d4ba06985cca50ca214215647ac2d53c"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","ada0e99d0157fb77d01c7535b69104f9"],["/2020/03/26/计算机系统结构-实验1&2/index.html","104f908d743d596215a1a61563301c82"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","57cb99b8ee63b861734767ae1955a7ce"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","94a104f9621c1d5d4f89e2567f4d207b"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","5d59045308d8e2e0ad156f6b3e7c4969"],["/2020/04/18/机器学习-条件熵/index.html","bc7294c2cc991351f6dc5770615607a8"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","a0f7d15ee87275b36664b1389cdf543a"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","4ec05bd9ec030353ccf024aea3f80c12"],["/2020/04/26/机器学习-实验-决策树/index.html","8e0d9e724b6fdcf75e36d74b9c212c75"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","65b55da899781241c19e83b28bc4fe79"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","66f42add2bf92b207e6228c96fb95955"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","73a6676721f2df686277f8d6d66641b8"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","d66bf2cc3f66cedde2a2646d0c842c9d"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","dce45b8430cd9fbe235b007bb0da9968"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","d1be3c1cf69f7c4170519f43c45a1d88"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","8b97e23019da7674d0fcc0b42da9566a"],["/2020/06/11/机器学习-DNN-手写识别/index.html","81dc2b104f6cdaceeccbb51a7242b694"],["/2020/06/18/大数据-习题/index.html","d5a981e9512a0dd7d5d47415532f0fb8"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","1e62367cb95d1ea7d2590e3694034a45"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","e5aeea1837ae480d1b0798d324b2540d"],["/2020/06/24/Linux-拓展学习/index.html","7bb2afc3f405ec304da1032a065e3ecc"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","5871f6ce4b15e476d61537477cf4b823"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","8c10b7ef11a462c4222b82cc7c652d47"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","ad37df42a258734272b2f16e4be2ccdd"],["/2020/07/15/C和C++的struct使用总结/index.html","52ad48e09345297e525a75cd5c955ebc"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","89a91248933ed6e5b157b2b005fe8ef5"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","6f591937a8aa25e59d0cd94c2b48247e"],["/2020/08/10/机器学习-实验-花卉识别/index.html","fd1c447f64eebdefb57add96776e260f"],["/2020/08/15/Python-项目集锦/index.html","ccb5ff05597b248d79eafc885d9803d3"],["/2020/09/01/编译原理-词法分析/index.html","964d2e0cbf329fb5503001e28fe9c589"],["/2020/09/02/编译原理-语法分析-LL1/index.html","02c54cd841aafc422eceb0edfed4bdee"],["/2020/09/02/编译原理-语法分析-LR/index.html","b67d8ec4e7f1315da30dfb066c56d10e"],["/2020/09/03/操作系统-内存管理/index.html","810f0bb524011c3c48fc6163137e195c"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","ba8c584a78a763601f195dc8b6d9d2c4"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","ebb885f85b8f9c3f7742f7afd70e0b94"],["/2020/09/04/CSAPP-实验集锦/index.html","c1fbad64177a69b58852fd80227f9e8c"],["/2020/09/10/计算机网络-实验集锦/index.html","8d5a503db7fbcf0f75b58e205b882178"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","0802157b7dabe5d2c47b0767a0529f02"],["/2020/09/30/C++工程项目-JobShop/index.html","c8ecca269b7283ac1ab7e259c4f9a1e5"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","8cd4a328a197f5cf4c0c74c8f6814615"],["/2020/10/09/现代交换原理-实验1-时间表调度实验/index.html","f4c228b24452c1466765f7cbc1e8bcc9"],["/2020/10/09/现代交换原理-实验2-摘挂机检测实验/index.html","58ef04e5074e03d7d5781993285a19db"],["/2020/10/09/现代交换原理-实验4-拨打SIP电话/index.html","461d7f37d0c2557c2989246e72812fb7"],["/2021/01/04/Android-项目集锦/index.html","cdc126be22824fa21ebf9648344b046f"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","36de0c082240eba8033dea56f7b35bb8"],["/2021/01/04/C++工程项目-travel/index.html","4af3cbf86124d0cbd5a3d25553be35d5"],["/2021/01/04/算法设计-分治-最接近点对/index.html","ef318caae673db705f2b2cf343317b48"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","8e532d188291af8548874709bccff633"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","788587597468d2f2b933257b74368516"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","79d50b2effc502795728de4236cb8af2"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","d5e7b0c3f637131d4da657977ad38ebf"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","d212f8a9e06cf663c0b827a0f6869f68"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","eff64fff66c2a415b85592bd689dd292"],["/404.html","2394b59b860bfc1b2a641e2bc2300ffb"],["/about/index.html","43598c96fe386c73532eda649c669677"],["/archives/2020/02/index.html","d48e9d7d5d369f52ccd7a7e79e01e018"],["/archives/2020/03/index.html","9dc2bac8c5a1813e056e3f5a1fbb3e1f"],["/archives/2020/04/index.html","ecc4a419c2a20251386518e6669b27f4"],["/archives/2020/05/index.html","5ac5a2fb883a81ec99b359294ab87481"],["/archives/2020/06/index.html","e95360ae361c28da2aeaf393bfa97f6b"],["/archives/2020/07/index.html","4cce063eb64b357c18c0c0d755f58a20"],["/archives/2020/08/index.html","cba6811c0e0139ac7bd353408ff75e73"],["/archives/2020/09/index.html","0bfca1e43796e197c0befaa84dff3ea7"],["/archives/2020/10/index.html","5eb4ad136038978b6c93fc5a2006d523"],["/archives/2020/index.html","5373b872de24202b1c6473a12cda9b4f"],["/archives/2020/page/2/index.html","16df4734bef30f183f8560583a4228f2"],["/archives/2020/page/3/index.html","6c2bdcf31ac8e9e81629cb328e6a4209"],["/archives/2020/page/4/index.html","adb539b9f15cbce91cd54b29a5096146"],["/archives/2020/page/5/index.html","54ceda049289fcec5a23266746e457d8"],["/archives/2021/01/index.html","3588df3cc52c6e95330c1e9d70ad0143"],["/archives/2021/index.html","c4e29468b1a77d6656303bd9bb4961ac"],["/archives/index.html","e8704913f3e1f863b87a05fb86362b9f"],["/archives/page/2/index.html","e8704913f3e1f863b87a05fb86362b9f"],["/archives/page/3/index.html","e8704913f3e1f863b87a05fb86362b9f"],["/archives/page/4/index.html","125e0355e2a1216d2686c68a9f5fd4d8"],["/archives/page/5/index.html","125e0355e2a1216d2686c68a9f5fd4d8"],["/archives/page/6/index.html","125e0355e2a1216d2686c68a9f5fd4d8"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/bb/index.html","9a92f450c0469a430b8dc53f60b49e22"],["/categories/C-C/index.html","9568655c3e4df7856583377e6d345ed0"],["/categories/C-C/page/2/index.html","4d7dd679097fb9d0d9e926e5464d59e1"],["/categories/C-C/拓展学习/index.html","4fbcc201a05f8233ef4ee7dae63685d4"],["/categories/C-C/操作系统/index.html","31a782822e34a04df16845d3b830251f"],["/categories/C-C/算法设计/index.html","f2933dd7a135ff2b9b44e31691ccc2f4"],["/categories/C-C/编译原理/index.html","a2f25a56a2d48558804a64e17fa40fec"],["/categories/C-C/软件工程/index.html","2f4b18a7cb6119d6dc66fcfc959dcc8c"],["/categories/C-C/项目/index.html","76eaf0babe348ebda327180bda598918"],["/categories/Java/Android项目/index.html","77729a159a6e3efb55ca36f23b6391df"],["/categories/Java/index.html","03474409455e5f7c381cb9095a08a516"],["/categories/Linux/index.html","a7614f2d87abaa95de073d863a36d5b3"],["/categories/Linux/上机实战/index.html","3f7aa6db85055bf23812c3b28443e0d7"],["/categories/Linux/习题/index.html","4ddaaafd4517736944e55c9fdc66db9a"],["/categories/Linux/拓展学习/index.html","54381111c14deb6d72f1d1e9fa2d6976"],["/categories/Python/index.html","533903889cff77be7fbffea5362f23ed"],["/categories/Python/爬虫/index.html","65c5b81038745afe2a1bcb34002c15b8"],["/categories/index.html","620337a2dd8e555ba1fffbed28cf6e31"],["/categories/其他/index.html","f4e1c3af9751b00045be31cc0bf30a5a"],["/categories/大数据/index.html","c6bb63eeeea0c4a8840fcf953ca59e5e"],["/categories/大数据/习题/index.html","6924f51b35c4d43a52e70f2a052cab08"],["/categories/大数据/实战/index.html","1db9d92cf97421c8b1d101b1268fc409"],["/categories/机器学习/index.html","cf716afe96cb021489244729283e80f9"],["/categories/机器学习/实验/index.html","42b098a1c71db7b4900a8d2ede22339e"],["/categories/现代交换原理/index.html","a240e46fe8198b68dc581263680074be"],["/categories/现代交换原理/习题/index.html","18a759884a1f77c63f3eccfd2dc124db"],["/categories/现代交换原理/实验/index.html","a528aef9175806353280f3b19f620f55"],["/categories/计算机系统结构/index.html","49110440317e879577ca416cc45f02b2"],["/categories/计算机系统结构/实验/index.html","9c39569f10b04806d581c76ed17e926c"],["/categories/计算机组成原理/index.html","cc578008431e73ff1a0fcc47781e1912"],["/categories/计算机组成原理/实验/index.html","a0ad978fa5d5286b4b16a8ef6378dcfc"],["/categories/计算机网络/index.html","5bd36a0cb27d69ea8643a64fc8fc047b"],["/categories/计算机网络/实验/index.html","1a308e27f0e0a6f408fb62decb3ca9e3"],["/categories/集锦/Android/index.html","ee1bd0fb96d6a5db535286944609a745"],["/categories/集锦/CSAPP/index.html","53368702dd489a6590c638843a90525c"],["/categories/集锦/Python/index.html","7fe63f6f554b74b1b3ec8d7e419df098"],["/categories/集锦/index.html","1049089649a2bd2999230fb4df569ad1"],["/color/index.html","3f627143356419f7f54e1443b3536f0d"],["/css/first.css","20cec2c5648279914a874a853c32346e"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/style.css","cf189480f008c1c26ba16974551ff367"],["/friends/index.html","c74c90e7877c8b7646c927cb5ad4761f"],["/gallery/index.html","cac0a9f9094373909cca2398b08a7aa4"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/periodic-table/index.html","4c31220b3c8c1d35b1128df43b2c9dc3"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","97dfbf2f170d6d4271df4fa9fccb708a"],["/js/aplayer.js","6e605f0855251e101d3024646f3eac60"],["/js/app.js","1948329f2fd7e750ade4bdc49138c09b"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","505ee24a31c45f9432e3e87d8edc3bf0"],["/page/2/index.html","4724ebb5b47d5a9448729ac7fc656b38"],["/page/3/index.html","8cfd52c068956d8ea8ff04bd9e237fa8"],["/page/4/index.html","ed4602f05e85b2da3fa451b611cf9946"],["/page/5/index.html","bd65b3d6c10629c0c09532df78008623"],["/page/6/index.html","fcce1039043b77b30c0e9f78ac5f4887"],["/shuoshuo/index.html","56f435542e94179ef712e73089a1d375"],["/sw-register.js","8c598cd8297446b3596890e69beb4b60"],["/tags/Android/index.html","41cf141a7e2ddef76577c23729bdaf76"],["/tags/C/index.html","d0f18cbc9ef200811eeee6b9f3a4b299"],["/tags/C/page/2/index.html","52745e6fa2b7f828e714cb3d0eadb891"],["/tags/CSAPP/index.html","b44f6596700d014c0b697b5fcb089958"],["/tags/DNN/index.html","976aa269c8dace4a1ec096c7e54842ad"],["/tags/DNS/index.html","5bd1361421d3e826dd0434492008e1ff"],["/tags/FPGA/index.html","4e3814eb13540a9417648523a7ee56b4"],["/tags/HDFS/index.html","d9ef3eceac2f51d48e01dd27eb04d1c5"],["/tags/Java/index.html","f7d846700bbc738a72a8e182e481292d"],["/tags/JobShop/index.html","114c4b079903aeedac14d743ac507479"],["/tags/K-Means/index.html","d8c199ec6e966ed436f67c6e87f0abfc"],["/tags/Kafka/index.html","cf183fe310083e03006322d263f89652"],["/tags/Linux/index.html","d443bba0d1563c7e37414aa3f3c61d28"],["/tags/MIPS/index.html","6037c043e5b524b26d380e3376001bcf"],["/tags/MOOC/index.html","413ff3ca2a8bb3c068f2196a36f9656c"],["/tags/MPLS/index.html","d53502720d6671e1647720ac69a7d6fe"],["/tags/MapReduce/index.html","dd6f6506e6359f4c4811a25e4afd7921"],["/tags/Matplotlib/index.html","56e2fe9248d6aa1ffc80ff4fee34e6bf"],["/tags/MiniSYS/index.html","72dd1d4b4de7d54cf09bd8d363f311bf"],["/tags/Python/index.html","bba48d505326e40ccba003f4f7aab4a3"],["/tags/QT/index.html","15897d638c03b71e902168b0a4877bd2"],["/tags/RNN/index.html","97eedf9abd38c59fa10c837caecde9b5"],["/tags/SIP/index.html","15e538aafb701e2c4aeda960d5791ed2"],["/tags/Scala/index.html","a6cb2aef3058944b2b84b8ae712e8bff"],["/tags/Shell/index.html","6399d43f22a0a03d6afca5d6608cb762"],["/tags/Spark/index.html","c152e0f12d51b2c7a2e017675c69b978"],["/tags/Streaming/index.html","5085520910efad98513147984380aea1"],["/tags/Verilog/index.html","34b8c62308b6aa972bea5d1a73545a88"],["/tags/first/index.html","b9157624b593a2d81c953901566cb0fd"],["/tags/index.html","d3f6d6797ba1b09f78f5220805468eb1"],["/tags/习题/index.html","77ad3ead33cfa04081a72b2342500937"],["/tags/决策树/index.html","60a5e077238f5da6db82b83b85276f8c"],["/tags/分治/index.html","10b65e9b0cf04f7dcb344379aae789eb"],["/tags/分类/index.html","673ade2a0ffa243ba9de97041a95181e"],["/tags/动态规划/index.html","2170a60ef4c0edee074936174ff9fccd"],["/tags/华为云/index.html","45da62cca0a268f2889f529685588f9a"],["/tags/同步互斥/index.html","81a3e4877ce69854affcd130f6fe1d2a"],["/tags/大数据/index.html","01d76b107b936fb3b800d036752a3c1a"],["/tags/实验/index.html","c8b9ccae2e5a8d7d09c772b473509ca4"],["/tags/小游戏/index.html","fe41469ce0d3d35d061eb1f6d0415333"],["/tags/操作系统/index.html","a9f5157db44a69235c3b0181730cd5c8"],["/tags/日志/index.html","8575731bfc47bcfa0a0bc19fef05c816"],["/tags/易错点/index.html","3548842508eae0933c5423a32e0493f1"],["/tags/机器学习/index.html","c747b0a530a9a12cf166afc53fe768bb"],["/tags/正则表达式/index.html","3db41a0b615bf145a222d48f0763269e"],["/tags/汇编/index.html","61c4c268dc01def0493f4d486c79c413"],["/tags/流计算/index.html","c5aa3d6faac89ccecf3b692058735902"],["/tags/爬虫/index.html","60e1e482610b83857a128e33c81e750b"],["/tags/现代交换原理/index.html","7769537273afb1384bc30be5d9532f93"],["/tags/生产者消费者/index.html","c82d78a42516bdf391cc76bef63638c7"],["/tags/算法设计/index.html","8071feac137aa5ac895213e0e563026c"],["/tags/线程/index.html","23811a177f74c3a6d2c736007e71725e"],["/tags/编译原理/index.html","6635b02893d79c671f83d9ce669f60f0"],["/tags/网课/index.html","d60bebb94be1d45a093d95fd0670741e"],["/tags/聚类/index.html","a114a0c98f75b2e6d6231e612d7b021a"],["/tags/计算机系统结构/index.html","9ac53d5c0ea8373cac8434e05b59065d"],["/tags/计算机组成原理/index.html","a49cb5d6182bdf7d7af94c740a0641a7"],["/tags/计算机网络/index.html","f4db0f2cdf8d39314a556fcf8140d449"],["/tags/词法分析/index.html","0d69fadbf334827e7c38d6859f4034e0"],["/tags/语法分析/index.html","1b321de50c55e0e8cdb816b07c95037d"],["/tags/读者写者/index.html","60b0ad02a272c0b1ae0ec9fccc9e014b"],["/tags/软件工程/index.html","a595cd5fdfd6131aa711811eaca0b4ca"],["/tags/进程/index.html","29bd884869e8a91e2ad59a92988810aa"],["/tags/难点/index.html","293c3d99fbcb03bbbb0476f31e78344a"],["/tags/集锦/index.html","51238db610431820a3cf4de85ef83cd5"]];
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
