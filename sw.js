/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","ab38c75b979f0e42a3965738c4598709"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","ecda68be297ff4c4e34599b0b244ed71"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","38a6280584fc5835b44f1037ba6c17eb"],["/2020/03/26/计算机系统结构-实验1和2-遇到的问题/index.html","5580217e87fa3f9a28eb0f5bc49d0408"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","20fd3df52822e4a271babdf2e2986bdb"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","90d2876625c7621e240978bd35724759"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","90b4250d036b679691285646da59ccb6"],["/2020/04/18/机器学习-知识拓展-条件熵/index.html","13de31fc1437f6916dc3417ec725e44f"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","55e42cc606769f5fa3c8ba1c16e33bf4"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","7fd483fb913e613a07c04b33a07d31f4"],["/2020/04/26/机器学习-实验-决策树/index.html","1b79da993f636279fb27ccb17457035a"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","bc57634a4d413b162c9d2d256d52015a"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","bc1ccb21d3655bc4c53be460e5ac5442"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","9ec9b7443e0f56fc43fd4e8e0097c606"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","4021babd819e41ec52bf2b4aeb9ce765"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","6cd644ad4624681afa923cae4350dcd9"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","fd1ae91facde3de732eab25f2cbeba95"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","cda41adae17bc9c451f60865641cddf7"],["/2020/06/11/机器学习-实验-DNN-手写识别/index.html","af211d578ac4435a278b1bc4f27d5f56"],["/2020/06/18/大数据-习题/index.html","f9a279100285a72a0063f7037281c772"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","34652d8f36110d9c0c55caad25cf6402"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","1c00e778194507b09db1e30e5b931ec0"],["/2020/06/24/Linux-拓展学习/index.html","2dd0f5fab0f9dbc4f923ddb4e5b90a0b"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","9d913f6e06184a93f4e17273edfd78c0"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","a822c5a03f52a8d46bd2c24bfc9efc6e"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","9f6098d693e26f004d9227d067d57075"],["/2020/07/15/C和C++的struct使用总结/index.html","8652f432a64bfd6aa4cebd1cd7c43a4d"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","df09ff89618eccb204f7adcaa18f129b"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","17de08ac39a9282de91b95c42e8f6147"],["/2020/08/10/机器学习-实验-花卉识别/index.html","a3f8d2d39a496832d9b3d8ffc69d974e"],["/2020/08/15/Python-项目集锦/index.html","603426db8f73dc29feeb5399444f5e21"],["/2020/09/01/编译原理-词法分析/index.html","02781540c1db8c3593ab717f80b187d9"],["/2020/09/02/编译原理-语法分析-LL1/index.html","0e4981555c0249dcbcc126d83a2f5664"],["/2020/09/02/编译原理-语法分析-LR/index.html","1a34ffb06ff83aedd8e878cf1607b237"],["/2020/09/03/操作系统-内存管理/index.html","6372284d8ab27bb20b2187a913c70cc6"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","79cf604be78a6715cc1502155ad57a94"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","4687d38456b6b5f5bf043e7d748f1421"],["/2020/09/04/CSAPP-实验集锦/index.html","f1ed5a3f03ca4e4f0d60382b8f265931"],["/2020/09/10/计算机网络-实验集锦/index.html","4d476a55f9ef06701be22a0b1554920c"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","cc05fe227aae3fb44263961189cde4d4"],["/2020/09/30/C++工程项目-JobShop/index.html","740b51584452fcedd5c1ebbc208ae9d7"],["/2020/10/09/交换原理-实验1-时间表调度实验/index.html","76cdf2128ccc4ddd944b2509bec80064"],["/2020/10/09/交换原理-实验2-摘挂机检测实验/index.html","44b4b84be55e3b2619adcf23eab95b57"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","62894779b7eb4a44b881148df05a3c4b"],["/2020/10/09/交换原理-实验4-拨打SIP电话/index.html","5c091a8263095e582cf0712d83a8901a"],["/2021/01/04/Android-项目集锦/index.html","3368fb5d8ee9245d3b4a4664ac7e1d83"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","52cce47d8e89892e7dc9ebfe3634ff7d"],["/2021/01/04/C++工程项目-travel/index.html","0188f69b889c269cfe1fa33825f39e99"],["/2021/01/04/算法设计-分治-最接近点对/index.html","ec13e86e57b278af272bc9dda2048fa5"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","6805af0a118d0d3d9f7ad6fbc9dc83bd"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","915daae869be18c4212aa494fdc18bda"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","1e4f3e21f205cbbe0618bdfd05ad3a4f"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","b26ed27a5a789ae52e6bd27a5193d89e"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","e752932ea60f3b9277a47c9a21f89ef2"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","2c966ca46e959f2148242813be95fe63"],["/404.html","e0e9eb071f5b866f116e301672f3f170"],["/about/index.html","af6c428676a236d5544e3087b93d0cb1"],["/archives/2020/02/index.html","1fd2251147e387ecea0484280a59ab72"],["/archives/2020/03/index.html","d373fa11bdf2a97afc295d6dad0b2c77"],["/archives/2020/04/index.html","7fbf119a1fb7008213b3d1db0eb290f3"],["/archives/2020/05/index.html","89fc99e9875a54e966fdcc82957702fb"],["/archives/2020/06/index.html","1c4cbd11bfef39a89943ab845d771c04"],["/archives/2020/07/index.html","c7be85d0c3b51e48bca30ec253528c15"],["/archives/2020/08/index.html","ba9fa6b74f433b4ac537a820692ca296"],["/archives/2020/09/index.html","c58cf2874cc20bc58d6e83725cdf1197"],["/archives/2020/10/index.html","7551daa3a6916b777e895249c84758b9"],["/archives/2020/index.html","8670d04e6cd159083ad6d94980ed7044"],["/archives/2020/page/2/index.html","fe5db0fc96df38037fccb96dc01dbdc2"],["/archives/2020/page/3/index.html","99197dc6553ffc93582fb3280ea703e0"],["/archives/2020/page/4/index.html","fd1bea9b5bbcc5fb35acb67684d0ff3a"],["/archives/2020/page/5/index.html","00283ffc0f3adf857ddc06d394757416"],["/archives/2021/01/index.html","9553034a7a8a142126221d76468ebf1e"],["/archives/2021/index.html","acca3cac73972da0b36b73dbb2118d35"],["/archives/index.html","52344ccf51997764931a02db2c99778d"],["/archives/page/2/index.html","52344ccf51997764931a02db2c99778d"],["/archives/page/3/index.html","52344ccf51997764931a02db2c99778d"],["/archives/page/4/index.html","4f445cedbd1724a452928139a27baf90"],["/archives/page/5/index.html","4f445cedbd1724a452928139a27baf90"],["/archives/page/6/index.html","4f445cedbd1724a452928139a27baf90"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/bb/index.html","7fd7ca81abfa512ee1bae744777aad84"],["/categories/C-C/index.html","f1c7815a306317b78e635ec5ef95245a"],["/categories/C-C/page/2/index.html","9c57b1e79011a78649d8d3e54ff8a775"],["/categories/C-C/拓展学习/index.html","c312048d44e9c79c03798e6da93eae03"],["/categories/C-C/操作系统/index.html","e047c9518497d6307759d3cfdd6fb9a8"],["/categories/C-C/算法设计/index.html","a88cc55cfccc585f553ecfa4d78589fa"],["/categories/C-C/编译原理/index.html","98c8dd79544ffe49a50ba9a695c92c09"],["/categories/C-C/软件工程/index.html","500ac5978eb1679ca5b4238763f5ec9f"],["/categories/C-C/项目/index.html","1cd299e02e0d8d87c934df7fc9efadaf"],["/categories/Java/Android项目/index.html","3557fd66e57ea315487bf2279832deac"],["/categories/Java/index.html","1e7bdba469ed9400de8926aa9c3ff609"],["/categories/Linux/index.html","6e615ccb84a41d963beb79373b213b89"],["/categories/Linux/上机实战/index.html","444cd58eff54a5b7de4b3133f2ea26ee"],["/categories/Linux/习题/index.html","91f6eadc46cb6f2701b0b4dbfc67bd8c"],["/categories/Linux/拓展学习/index.html","bab5f7c04e12edb2ca3b4e2f59f1eb04"],["/categories/Python/index.html","1cfae6d467c9b3825112f5a1f90321ed"],["/categories/Python/爬虫/index.html","42f72d5863572390fe3574335aeae63d"],["/categories/index.html","bdbdb31448271b011571bfa37c031846"],["/categories/交换原理/index.html","ffc6117fab071779660b7376d686bedf"],["/categories/交换原理/实验/index.html","e21631164f0817538b42577bd66b6125"],["/categories/其他/index.html","7682a214227235e5100851988a130120"],["/categories/大数据/index.html","f0c511d3344e5776be9773a55530c9cb"],["/categories/大数据/习题/index.html","fcbe717843943e43bfd048ef8e481271"],["/categories/大数据/实战/index.html","2945d8cdb41b48b83c0f9368e6db231e"],["/categories/机器学习/index.html","1a910f337a0aa2e0f4bd77d44f42b9f0"],["/categories/机器学习/实验/index.html","4996522df47bf5a4228eae133d91bb91"],["/categories/机器学习/知识拓展/index.html","4c503def8bd5ec1bac5fbbd4043442e6"],["/categories/现代交换原理/index.html","9edfb935aee10333df4b285c480a8ede"],["/categories/现代交换原理/习题/index.html","72d64c67baeebed936c9f9c76f4ba30b"],["/categories/计算机系统结构/index.html","3b4bb980d75d639e92d06533f63b35d5"],["/categories/计算机系统结构/实验/index.html","2464097c10f25542e7349f2873ad1f2f"],["/categories/计算机组成原理/index.html","5a475cbb86e9299c1cc107dfd8fb3f1f"],["/categories/计算机组成原理/实验/index.html","d1291240d431258fd056b782894764b9"],["/categories/计算机网络/index.html","bc1c8b124a1f4f05916964642133c2f6"],["/categories/计算机网络/实验/index.html","a95d9caab0443c44e3b3f11f4cd671e0"],["/categories/集锦/Android/index.html","dc8a557ec960f9a7c32e2eb4060326fb"],["/categories/集锦/CSAPP/index.html","b5bb827e7fdc42cd491fa801f0c43678"],["/categories/集锦/Python/index.html","e9a17f8b2dedf268782a904b84addb6f"],["/categories/集锦/index.html","60803aa0d9f4fa90f8a9b7b8403b3040"],["/css/first.css","ac2d0010102d22ded3aa536d16e52b73"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/message.css","b0ce3ca232f809c8d7a85c79bf1f7ff8"],["/css/style.css","f33cadc59019a1af1d898b222bf512f6"],["/friends/index.html","afb40ddc6dea071e6ee929111d3fcf59"],["/gallery/index.html","63f4bc7639ebb10460b077618443184f"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","9d0968af9a98a8286b6e4edc9b1a2ec6"],["/js/aplayer.js","f10ee7aff4ce278045da925ac6510d29"],["/js/app.js","d14976ee97145aa14568c13c6554dcc4"],["/js/jquery.parallax.min.js","38cf4791e24aeaa8101bd2c816400718"],["/js/message.js","38da736cdf513c9a15a0a2a16a34eeae"],["/js/plugins/contributors.js","23ba3efa08d9fb1aae753ceaa6df2711"],["/js/plugins/friends.js","239cf9c648af390f866ed00cead3e23d"],["/js/plugins/sites.js","15bb31fc27abc888b17cc5d822808604"],["/js/rightMenu.js","19b2a577c30a04732f02b86bda62e0b9"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","9b40ea050f5ac55167e35ee56dbf21cb"],["/page/2/index.html","15b7bf2c943ff1467b9f0206155bd6a3"],["/page/3/index.html","aee28e1226794fb19ede0fdd1ec42eb9"],["/page/4/index.html","b5ee5b7a59e73d79cad474b0a7da94c4"],["/page/5/index.html","8bbea405ebf302bf3f12974450491dae"],["/page/6/index.html","100b2b5e71427ea70f18bcf83ad4b3da"],["/shuoshuo/index.html","31169df6089c1ff98f2fd0c1dc8513e2"],["/sw-register.js","2e3750f24711c203c9eb0666a4a9175f"],["/tags/AI/index.html","f0aeb2fe1190fa2df2c92186b01b0ae5"],["/tags/Android/index.html","efeae58a50e0c0053aa8abef4df61d9c"],["/tags/C/index.html","3975f5589bed93aabd23b0f17d2b509d"],["/tags/C/page/2/index.html","8a72e3d95d0ad9fe53f262b699b1a39e"],["/tags/C99/index.html","c90a4d8b30a33695daecba42a8d46061"],["/tags/CSAPP/index.html","b2f9e83aa646ecf972b3f5d09e7cff3c"],["/tags/DNN/index.html","bcd9d765f400bc54a7c6a7dd20a8b075"],["/tags/DNS/index.html","a99a5ca774a34c933d7e3c7c66cab56c"],["/tags/FPGA/index.html","3a5d6844fea078e29e0feb000643aa88"],["/tags/HDFS/index.html","735a0c068f7d551786f53718c1c23c3a"],["/tags/Java/index.html","6486c89b4ec8d65a79ae786cfc0a5832"],["/tags/JobShop/index.html","5a444b4acce98ee8ec6192c7ddd2a8e4"],["/tags/K-Means/index.html","73eb67e8d7a8871b6a94d7c441ff4d7e"],["/tags/Kafka/index.html","1d9cce031436305bab513f15265b26ad"],["/tags/LL1/index.html","1d1a50c3d4fbe7464ec0f9ff33c5f5b8"],["/tags/LR/index.html","a3fd94e3a3ffd1f12fb531c00a4b661c"],["/tags/Linux/index.html","5f80d2763aeced387c1f4851ac42bf93"],["/tags/MIPS/index.html","0095f768e3931a10d756d245d1578eb2"],["/tags/MOOC/index.html","d024c499efec500743b69f94f16c25eb"],["/tags/MPLS/index.html","c8562850a04a9d4114888dd791317c36"],["/tags/MapReduce/index.html","31b9b96e38b3e0fea1b59b977369fc29"],["/tags/Matplotlib/index.html","ad6fce836c6aa71c96059df15bb3986f"],["/tags/MiniSYS/index.html","77138c91b3c1b7450ccd92e41d842b47"],["/tags/Python/index.html","2b3dcfefd9209b51339830a2de9ac77f"],["/tags/QT/index.html","c49c89db6db82530298689a6255cb8b2"],["/tags/RNN/index.html","f3f81bb8f9ff4818cef849e2a63f1515"],["/tags/SIP/index.html","74c809cceae3938f0b4df92d05f67dc5"],["/tags/Scala/index.html","8826f15e2025205616cf1cf5a57df58a"],["/tags/Shell/index.html","deb7af5679dcb89650fda43604c33b20"],["/tags/Spark/index.html","73ae45a740db26a4bdc8c04700d5c8e1"],["/tags/Streaming/index.html","7d6bd888363626a9e3b18bc6b399beba"],["/tags/Struct/index.html","ae197f33eb0180a10a98fce4a61cfbcf"],["/tags/Verilog/index.html","99beff5f535c4bd2dac02bce88082e54"],["/tags/first/index.html","6fdbd21ea575b650669b6134570fd895"],["/tags/iPython/index.html","47cf46f1f9c7353c67adb83b8e84fad2"],["/tags/index.html","611fb82efe99625a2f2099d39c0c7f7b"],["/tags/ls/index.html","9aaafa9502bf3e9056c538f999340880"],["/tags/习题/index.html","9c62edce8078b0de5e3c27cea69d90b8"],["/tags/交换原理/index.html","93f659b3476ca02f41b625b48e3029e1"],["/tags/人工智能/index.html","ded569107f42ed231f4206dcb28c1aca"],["/tags/信号量/index.html","d51f34fb170a757077c0f7d3932f50e2"],["/tags/内存管理/index.html","de1145830e648d15bf5333f123911a45"],["/tags/决策树/index.html","9fbba76dfacd0ae59323242992db78c3"],["/tags/分治/index.html","d135936c7c2d0472b342b632ac057ca9"],["/tags/分类/index.html","e5af8c6ba5b69bac589e4f447a18073a"],["/tags/动态规划/index.html","446d51957b26d30389ecea0cb01daef9"],["/tags/华为云/index.html","7e6eca60ddafa764e550686056cd33e4"],["/tags/单词计数/index.html","e4a8cc2c80643e0323e1bd447fcb401f"],["/tags/可视化/index.html","41320d81ae27c97bb4750b2acbe698e2"],["/tags/同步互斥/index.html","85369210c64a20321186d5364c96b4cb"],["/tags/大数据/index.html","320e57b3d5e56144c8fc38f99a05f27d"],["/tags/学堂在线/index.html","e010e823e31245519b88c0a38233df54"],["/tags/实战/index.html","d91299f2da7a3ef6f131956fd98511f2"],["/tags/实验/index.html","5ac591b87fda7ddca2cb6f8455d7c65a"],["/tags/实验/page/2/index.html","f48d81d9f6dbc778de5b2bd2d334903f"],["/tags/小游戏/index.html","1d353eb8c1eb7355dd5456612e2c7269"],["/tags/工程/index.html","9675cd49207389b47167715bc250261a"],["/tags/工程/page/2/index.html","2f6adf365e86bb6c9baf01dd036bb3d5"],["/tags/手写识别/index.html","9435fd457b88c694443f5cfbb06e1711"],["/tags/拓展/index.html","92e4fd327c3f2425747c07c61454c9d7"],["/tags/操作系统/index.html","ae2a5155e05e9671c2bf20063ee59387"],["/tags/数据处理/index.html","72e679252a77195ebb1074ed1e226424"],["/tags/日志分析/index.html","d09cbca59dc0f080e3952182e2e422b0"],["/tags/易错点/index.html","33206f1c3b6b49a8d59b04e100eb7c9a"],["/tags/机器学习/index.html","68413caada74d17ac69ae3f343325bdd"],["/tags/条件熵/index.html","ec0a8d0fffeb29addf15acffc05de208"],["/tags/正则表达式/index.html","5cbc3a8295672cba5d380eb5af35bd0c"],["/tags/汇编/index.html","d1615fc857ebe729f878f77e2eb927d5"],["/tags/流计算/index.html","e159a3cebbd9cda31511b470f2d63c1a"],["/tags/爬虫/index.html","30f9d587f20fb17091e7c89e46d09231"],["/tags/现代交换原理/index.html","164c36c8363cffafb241e8af689bb410"],["/tags/生产者消费者/index.html","eaec237b82079558608982447c22275c"],["/tags/知识/index.html","bbf5a6ec599db7ad5aa5d654c83127b8"],["/tags/算法设计/index.html","d002d1dd7244a96937777473a349acf6"],["/tags/线程/index.html","da613e60912ad4f1332603a5dedb244a"],["/tags/编译原理/index.html","80de2e020dfa96103e64a77f34f875e9"],["/tags/网课/index.html","19f0738a20253121c1b3fac1e12ce82c"],["/tags/聚类/index.html","efc0fb404a119286ca6ab6d0ef1c4f70"],["/tags/脚本/index.html","bb77593887e0935408b4a5e3d640ed7e"],["/tags/计算机系统结构/index.html","d228f246d609c089185a7d437eebd2cb"],["/tags/计算机组成原理/index.html","7fdac439efab8df2fe16c8048c750f06"],["/tags/计算机网络/index.html","d83573203b18a1b0489025fc3dd67bfe"],["/tags/词法分析/index.html","7256b3f5ebfbbc637fd10e9c4792cd7a"],["/tags/语法分析/index.html","ab0d06a1b0783e9168913d6b43ba08ca"],["/tags/读者写者/index.html","68506ec22e69c96d84ca03e5811f0e36"],["/tags/课程/index.html","227c58efc6d2464f0d7907953d561d39"],["/tags/起名字/index.html","1210d4ae66bbe22275d6ca02b39edaa0"],["/tags/软件工程/index.html","b9be309e71f5642357f3bf36686b0ae9"],["/tags/进程/index.html","bb17984267cbe715d364df14716275b1"],["/tags/通信/index.html","5f67f97a681a7e3d0bb10a7af1c7ccd9"],["/tags/遍历目录/index.html","87613740c51d38badd68ea33f909d5ad"],["/tags/难点/index.html","9d3ab453da2865131e7361f17a3d4d84"],["/tags/项目/index.html","b358abf36fe4048ce3a2409468990dfc"]];
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
