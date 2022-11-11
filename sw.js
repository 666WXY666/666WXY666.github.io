/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","d13777814cf5909ed3e76595ad98af5d"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","a59a18691b0851a4e54c073f06ac21e4"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","24b8c4b4f7bdbf774cdbd1b493e0c913"],["/2020/03/26/计算机系统结构-实验1&2/index.html","b297a9a0054523dbd499e3b636f19b97"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","a674ccae0ef65554acb72e991b57c08e"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","3b145183cf7c09487994cb7d425efb7d"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","3283b21eb2d4f1c189aa80f31fbde807"],["/2020/04/18/机器学习-条件熵/index.html","e10d559304a98e5053ec4088ce1d7ee7"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","93d97f51b953f58a58fb31587e668c16"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","e10db4472fac378c347e6896316373f1"],["/2020/04/26/机器学习-实验-决策树/index.html","c72aa3dd5fe7543e3bcff257fd84b8f8"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","792490b147282fbfbe9db8975d838058"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","149b26b9a0cbfe17122c11bb87e84a60"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","2da1eff5a079198bff404cdd71de4e0d"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","09bac65629097d1b3870343c2abd3ea2"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","a407a300a9a63afea0ead1883472ca37"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","713dceea0ce96e926573b5d382b99344"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","4d156beac9a753d55066cac90723e932"],["/2020/06/11/机器学习-DNN-手写识别/index.html","a5bae775f50bbc0bd56e47c5ef918dea"],["/2020/06/18/大数据-习题/index.html","614ae41ad7ef84a8f9e1178a8bb51f6a"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","608ca8ac42039c4886bfd5e0a796dd80"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","dcefafa3570fe193a749480e0518b09d"],["/2020/06/24/Linux-拓展学习/index.html","eddfe962a8bebb2310fb4e8212081e4d"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","183f33bd18be46e6483d61d60b2160c2"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","83695f33e4f2128886ac71aaa2a56ac2"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","346e1e3a83701d0718892a7fc3d275d1"],["/2020/07/15/C和C++的struct使用总结/index.html","12338133f4be656b943ef6edbbb3ea35"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","68351ef86d84b7e7dff4ab940debe416"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","bf6faad08100b44c44d8180662840b54"],["/2020/08/10/机器学习-实验-花卉识别/index.html","746071aac166021fcc5da8dbcece06bc"],["/2020/08/15/Python-项目集锦/index.html","3afda970ce2ff4f26a039a57f597a2bd"],["/2020/09/01/编译原理-词法分析/index.html","d917490ad003fc2d00205e1b19a50d67"],["/2020/09/02/编译原理-语法分析-LL1/index.html","80bacf574815f3efe8057d40daac4134"],["/2020/09/02/编译原理-语法分析-LR/index.html","735db841af9d239c449b7973febbff82"],["/2020/09/03/操作系统-内存管理/index.html","fef72fc5053da419014c2c95d21a1c08"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","14f52b03170d41f661be0d8c0d185cce"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","17cb412069c1da136fe7bcb7a9bc367e"],["/2020/09/04/CSAPP-实验集锦/index.html","4337599e0e79b511466263959efcb77d"],["/2020/09/10/计算机网络-实验集锦/index.html","6c4d29be71926e82e29c78bca64fbaa1"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","d1a4562559bb67f39360f76987be0c7c"],["/2020/09/30/C++工程项目-JobShop/index.html","a9421ffce4df88f456880c9a09dd77ec"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","f2c77cf74c2b5db42386b89c9a42696d"],["/2020/10/09/现代交换原理-实验1-时间表调度实验/index.html","73b23b12d35dab22b05367ceeca79d5d"],["/2020/10/09/现代交换原理-实验2-摘挂机检测实验/index.html","103c982f3b130d5a6dbbd10469d19daf"],["/2020/10/09/现代交换原理-实验4-拨打SIP电话/index.html","c1015f186cbcbe49559cc6cb46fe8bb5"],["/2021/01/04/Android-项目集锦/index.html","c0fccfd29a11cdef446f9f0631c25f94"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","ba635c4284a055a1f3dce412e68f3aa5"],["/2021/01/04/C++工程项目-travel/index.html","fafb322131aa36ec69abdcdb0050a81b"],["/2021/01/04/算法设计-分治-最接近点对/index.html","6470cc68520300ef2f2cf64ced2a5163"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","97c593018cb4900d3fdfaa240fa0dff4"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","9d9b1aa21d979240b7db9f7c9ce7a481"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","dd585acf9e711da1610e5e18af2350c0"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","32e9af1d4db1d39a1c4306cd71a7fd26"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","8991bc3e693b4f6fec2d34f2bc74f8a4"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","9fbb34664f691e354d1cced7d081b0eb"],["/404.html","2394b59b860bfc1b2a641e2bc2300ffb"],["/about/index.html","84b8572031a66afddd509d92cec737ac"],["/archives/2020/02/index.html","8d7dc36e00ac42d31d995679fc8bf4a8"],["/archives/2020/03/index.html","4a5a58dde55f1ff1048b0af7f921449c"],["/archives/2020/04/index.html","b1609c6ecf5ef1c378d7d0da4a27edfb"],["/archives/2020/05/index.html","d5aa806a75d5c7572694f9e581788d12"],["/archives/2020/06/index.html","86abfbc0546d58322b40e393f8d7f5cb"],["/archives/2020/07/index.html","0696182f821deaec2a6b318c3f60697b"],["/archives/2020/08/index.html","00fe78d7b3a40c16880b4bf88b23045d"],["/archives/2020/09/index.html","09e36992a786d32a5249cacea6f47f58"],["/archives/2020/10/index.html","10a3b9da1e93523953cb196a0ad5f5bc"],["/archives/2020/index.html","f2178240e5106a14e7e453a0bdf7ce85"],["/archives/2020/page/2/index.html","337e8fe5f561cdc74d98f39ea5dab884"],["/archives/2020/page/3/index.html","8868bf1f6001cb6b4835d3796211f660"],["/archives/2020/page/4/index.html","12be154f3875ded2f19693f301a64749"],["/archives/2020/page/5/index.html","d6096be520e5981affbb3df5cf7ab8a6"],["/archives/2021/01/index.html","2c59ab75bc5d0e490d8b772da6fee8db"],["/archives/2021/index.html","5e64ce401df143ffc463fb891ebf8664"],["/archives/index.html","df907ecea7736bc82f6a76694d7bd9b1"],["/archives/page/2/index.html","a5d8dd001639b8e62e8b07d93695dfd0"],["/archives/page/3/index.html","a5d8dd001639b8e62e8b07d93695dfd0"],["/archives/page/4/index.html","a5d8dd001639b8e62e8b07d93695dfd0"],["/archives/page/5/index.html","a5d8dd001639b8e62e8b07d93695dfd0"],["/archives/page/6/index.html","a5d8dd001639b8e62e8b07d93695dfd0"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/bb/index.html","5673664e201006c04eb0226f4da96d1a"],["/categories/C-C/index.html","cf543799c338e3ec7198945f50dd21aa"],["/categories/C-C/page/2/index.html","573935369aed1d984a8768e804fdad3f"],["/categories/C-C/拓展学习/index.html","705d06d66d8bb5d02ce4b82abbf0a6f2"],["/categories/C-C/操作系统/index.html","86d67e9989431ae0eb96b50d8bca64f6"],["/categories/C-C/算法设计/index.html","5848852aecc1333b2f6fd91b2002dc16"],["/categories/C-C/编译原理/index.html","e105f0654b880cba2ddaab498f601346"],["/categories/C-C/软件工程/index.html","a392a6a9bf1a31a09024d788466bc882"],["/categories/C-C/项目/index.html","7bf27cd695b032aad64e422ee79b3310"],["/categories/Java/Android项目/index.html","4c03e4312912983adf93e4bb1ab38cca"],["/categories/Java/index.html","6e13cf34d44b99b2a362d28391468e9e"],["/categories/Linux/index.html","ec47c5857c730ccdb94184c5a3d6f304"],["/categories/Linux/上机实战/index.html","a2044b1ff26825e50fce097c2c954da0"],["/categories/Linux/习题/index.html","8051cd26cda5fdac865c5b50a10d406d"],["/categories/Linux/拓展学习/index.html","83fa3eb20332758844924e4224ae07bc"],["/categories/Python/index.html","7ae4668a0e346f3737ec9e528d653b9a"],["/categories/Python/爬虫/index.html","2afc1afefec85a39d2fbdb5cf5ad8716"],["/categories/index.html","c966a925f714d5ce2f73c3563d58effb"],["/categories/其他/index.html","378b9799b89930d8b6f2c6113ceb64b7"],["/categories/大数据/index.html","70941546cf1245f4d4f1f530b66ef1ac"],["/categories/大数据/习题/index.html","5f7afbe964712ca0251bae82a7288970"],["/categories/大数据/实战/index.html","707fe8cfbea655a232114f0e34a659c1"],["/categories/机器学习/index.html","e5fb1b9d4e74a4d3d3bba24c6428f3be"],["/categories/机器学习/实验/index.html","e7c7db59c1a47e1ef78379f034f0f3f6"],["/categories/现代交换原理/index.html","b8bbe16b11a2f5dd87e254c5f337097b"],["/categories/现代交换原理/习题/index.html","499755bddba08fd1a7680b2819e54de9"],["/categories/现代交换原理/实验/index.html","5a53f7bcafe00fc04137967ec78547f2"],["/categories/计算机系统结构/index.html","37d7dc114777ee7e0c041df480acb13e"],["/categories/计算机系统结构/实验/index.html","c971f0f44167adec397d5016e6c4b124"],["/categories/计算机组成原理/index.html","e72c5729edc3c730d30e96b293badf2f"],["/categories/计算机组成原理/实验/index.html","8b6ef1b38fe7c23f7099d950b3281a69"],["/categories/计算机网络/index.html","87581647a910ef4bb5c62766a013a8cf"],["/categories/计算机网络/实验/index.html","4734d4b12849064d93d5a23ac1c8bd5c"],["/categories/集锦/Android/index.html","b79182db21ed97fdf8c480ff6104048a"],["/categories/集锦/CSAPP/index.html","c91caf3dff70d7e816dcfb5383ec3f64"],["/categories/集锦/Python/index.html","ee3043ca7c6359998dcfead5ac981b19"],["/categories/集锦/index.html","f184c612d864d6d00b29161a03e08697"],["/color/index.html","3f627143356419f7f54e1443b3536f0d"],["/css/first.css","ea01aa1635810499a5ade558f4f81d56"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/style.css","4b6ce514c846132c606ce76da7e1c124"],["/friends/index.html","578aa723052fc9065234023c3254021d"],["/gallery/index.html","cac0a9f9094373909cca2398b08a7aa4"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/periodic-table/index.html","4c31220b3c8c1d35b1128df43b2c9dc3"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","350dccabfebf8417f1d1a6650da55d77"],["/js/aplayer.js","6e605f0855251e101d3024646f3eac60"],["/js/app.js","1948329f2fd7e750ade4bdc49138c09b"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","16550f255da4627141c7208f9fe4407b"],["/page/2/index.html","2f6f5f6cebffb53f83df0e5d32920499"],["/page/3/index.html","e7505e1b87d28735779429b5a77670c8"],["/page/4/index.html","701e33e1728eb7f5da0a40f0a521aa46"],["/page/5/index.html","8ec182593e9525cd87340e7c8239abd3"],["/page/6/index.html","ae0f51fb0520acebf734091c25c939f0"],["/shuoshuo/index.html","5d91f823ff08b3729bbc9389ab0b7a92"],["/sw-register.js","70d1a39ec819ed4b074b63c678fb5b60"],["/tags/Android/index.html","f5fce787d0e03825f44a2fb3d49b8219"],["/tags/C/index.html","dede63329f166c1b362500622ecbf26c"],["/tags/C/page/2/index.html","42a2d9718172c6d043518749e0581229"],["/tags/CSAPP/index.html","8f4d549be378e8e1b65bd3eb476a256f"],["/tags/DNN/index.html","f40fe596b54a1aa07759673087e49f46"],["/tags/DNS/index.html","075b2ec38424963e138ca5ed145aeda8"],["/tags/FPGA/index.html","e14d3bf3befb2f07787e60d8d6934d0a"],["/tags/HDFS/index.html","78babec79402c2180eac3d19e2c6925f"],["/tags/Java/index.html","c0a74ffada0e14fd1e036b70a7723650"],["/tags/JobShop/index.html","96865a1cbbb22978c6dc6645be3b6758"],["/tags/K-Means/index.html","719b5a664467777370b60437d1c4d786"],["/tags/Kafka/index.html","9862c16d0966877cfe70bff7b7bc51f0"],["/tags/Linux/index.html","709aa2ea139a187ed2e6fc088c3df4cd"],["/tags/MIPS/index.html","8fc6c97c26517b3961d7f25afe9970c4"],["/tags/MOOC/index.html","6d3c4b034ae0558cce50c04b9e92c2c1"],["/tags/MPLS/index.html","20faa9b25525b125eb66f17807ad47f7"],["/tags/MapReduce/index.html","3b1ad28659fad0dd5b280bf7bcce7c36"],["/tags/Matplotlib/index.html","713404c9756ca25fcd45cbc2e45bdfc8"],["/tags/MiniSYS/index.html","365a35445862f82e25f80e2d543912eb"],["/tags/Python/index.html","c8328d41e81ca9567afefb157c29d1e9"],["/tags/QT/index.html","14d80bdd85305da40a9380c1d5ef829a"],["/tags/RNN/index.html","5e63078fb7dc09e1bfb4cbb1ca920ca8"],["/tags/SIP/index.html","90f7fb738fc84bca0a06e0aafc8e6521"],["/tags/Scala/index.html","11530b3be0a9d6f14899abbfd63d99af"],["/tags/Shell/index.html","31caba2d566d255fcfb5d5884f4aa5a4"],["/tags/Spark/index.html","7605e4cd4b41f91bb8cd4837d7285603"],["/tags/Streaming/index.html","cf4e403b84e0019025d4f954739b4bb0"],["/tags/Verilog/index.html","6de691b0e9d9eb1164ab392f8ef3932e"],["/tags/first/index.html","a9a313c8feaa1ed54c5d72618e3e9c19"],["/tags/index.html","4113400c9b67256e96fc722c4e99f197"],["/tags/习题/index.html","cf87e349fc3a8f54b41ca7c3dbe18b02"],["/tags/决策树/index.html","e09004418a1c19cec2f155e9919deded"],["/tags/分治/index.html","783edcffcdb2c38271eb220a7a4e53c7"],["/tags/分类/index.html","9949fe58d35b417c954a34e0e4137e16"],["/tags/动态规划/index.html","1e2ee95dd505992bc3bfcae31f42ddfb"],["/tags/华为云/index.html","da293869d51655b44c521b872eee787d"],["/tags/同步互斥/index.html","53bccaaa9ec4301dd85d55a585d78a87"],["/tags/大数据/index.html","a58946d9f76937b4d9c80cb02c8a2a0b"],["/tags/实验/index.html","09c0824d1efc031a7dc227af80cd466b"],["/tags/小游戏/index.html","44a3b8f07b8ac8e24ac72ca64c64b48d"],["/tags/操作系统/index.html","256432c20d4b47266eb3d02538237590"],["/tags/日志/index.html","77da6807299a2c73a3cc9470cc2642ef"],["/tags/易错点/index.html","36f314377b87c4fac241184e74c4b992"],["/tags/机器学习/index.html","937c8a03e3e3bdc9390e60afd89fd4b8"],["/tags/正则表达式/index.html","714fd6360b20f49078390890a0affaef"],["/tags/汇编/index.html","37cddce3b178f9d4f7cd10755b215eeb"],["/tags/流计算/index.html","5f2c88df032cac14079b607643da9fff"],["/tags/爬虫/index.html","48529e002f193b9edc50868735313e58"],["/tags/现代交换原理/index.html","f2a5e5e5cfc529a3422dfe4c43187a70"],["/tags/生产者消费者/index.html","caf33bba38f14c3e75a103267e006be1"],["/tags/算法设计/index.html","5edcc58e9edd23cbd5005fa4c480a6ed"],["/tags/线程/index.html","b405cf40c2441dcd0fe511b8adfa30b1"],["/tags/编译原理/index.html","6cebfc447241c06806dcc6ab6c886323"],["/tags/网课/index.html","14fb6b32f71cba976c5fad164198c8a8"],["/tags/聚类/index.html","4baf62dbbea7616af8e6ecd29e1b7b4c"],["/tags/计算机系统结构/index.html","828cf5e08a9a070442756f20a8a57240"],["/tags/计算机组成原理/index.html","f277d110857289ba86a80ac6e89df621"],["/tags/计算机网络/index.html","770714c75308332723137607597869dc"],["/tags/词法分析/index.html","0c5cb43d346bdcd0e56a7b3a7d4cb404"],["/tags/语法分析/index.html","c1b231d27cebce5e650df690563148a3"],["/tags/读者写者/index.html","f737858da57365737de0b8b3bd54b3fc"],["/tags/软件工程/index.html","5064407a26ea4b74711a659b3104c7d5"],["/tags/进程/index.html","8f0d60c161d7892896abb1b007d98556"],["/tags/难点/index.html","4e05a609e94a31efb63fe6f2b933ccb8"],["/tags/集锦/index.html","acec5c916610a3066136f3987f2b1f1a"]];
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
