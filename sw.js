/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","5661a98579b19489489a5912651b8b91"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","d829a253a8a17905c9df4cda69f556db"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","0472125e93ab5d3d76e25a81ad9f9baf"],["/2020/03/26/计算机系统结构-实验1和2-遇到的问题/index.html","982063215edebd8d95e703ec758c360e"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","d97b456f5f26e6ccff71a170ea265a56"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","eb08a436191a86538120bc4e5897c9e9"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","04e1a668d4b512f3f205eeaf6548c36a"],["/2020/04/18/机器学习-知识拓展-条件熵/index.html","96b320f176bd1c2aeb91f6b95c45a3f8"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","a0b3709def75401adfc438b62a32c0d8"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","471a2b8081ab6764a7e7f0b6faaa4ed3"],["/2020/04/26/机器学习-实验-决策树/index.html","a0bd55cb8f90a08799071345a020f938"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","f5e78da60abaa7fc13faf7c1e4efe865"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","75865036870ce0fc97432b3587c66a2d"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","8b56b2b0c18a9a812e0850da8a9e74f0"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","b11d290c16570f9fe183543308a6fbce"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","2943c2c87c19f26fdef4cc1cf37d881d"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","ff8b3841edc3635c69f42aabd4a1de6f"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","f80c151e58fd52010c7292dc05d12bf6"],["/2020/06/11/机器学习-实验-DNN-手写识别/index.html","2fb060718518d4277f1390b31787d57c"],["/2020/06/18/大数据-习题/index.html","0ffde1b6a664a353dab288093d277de7"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","24b8826a0ea216576a06d46ad897e3bd"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","e6e835a7316b9e57873bcb81380f24b4"],["/2020/06/24/Linux-拓展学习/index.html","9361e99f7c301be67721d7471f197c06"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","d8d8036d99843d12605db27b865a2472"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","4f0dbead04696e94114e0935f6bb5669"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","f8d0a2231534074446b9ba3049eb94b9"],["/2020/07/15/C和C++的struct使用总结/index.html","98cfc6ce8ae6ce7d3b72490cea398a1a"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","b590fbfc585657b74e6dd2b064a7a1ee"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","53ae4a09e8f037460fedb273de7110f9"],["/2020/08/10/机器学习-实验-花卉识别/index.html","490444a7f8cbc6f54c36ef8174ce6c74"],["/2020/08/15/Python-项目集锦/index.html","69f250f5ff8d30336043f176079ef853"],["/2020/09/01/编译原理-词法分析/index.html","af0799b4af3184b7d1b5be518eb82ae0"],["/2020/09/02/编译原理-语法分析-LL1/index.html","6c37b7f5d33a93a927eda0fe789c5fbe"],["/2020/09/02/编译原理-语法分析-LR/index.html","f35d2177825cd519dcae8a2831e8920e"],["/2020/09/03/操作系统-内存管理/index.html","d9f63db4306e1de94a9717a8bb24b3cb"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","88157f2e4e538be362a798cd651f2852"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","4e6ed77525ea93af325f8c2bed488454"],["/2020/09/04/CSAPP-实验集锦/index.html","0598ec54610ad797dac87f1b7b9439c0"],["/2020/09/10/计算机网络-实验集锦/index.html","ac9df86e98678a3fd4c6bf3bb216a237"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","49f3d170d6fd2b81fb0cddb5dcb993da"],["/2020/09/30/C++工程项目-JobShop/index.html","75678318a6b3e73bcf01f1ae35632d77"],["/2020/10/09/交换原理-实验1-时间表调度实验/index.html","f53c44a2b4edad3b26ca368397c40a1f"],["/2020/10/09/交换原理-实验2-摘挂机检测实验/index.html","b0ac2cf47ede134f86a70ba88f185ddc"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","18db906cca9077a169ce7755d888dc42"],["/2020/10/09/交换原理-实验4-拨打SIP电话/index.html","ef850e3f743498720cc1401e722a968c"],["/2021/01/04/Android-项目集锦/index.html","1da4da96f967da91226e363dc9cfff2d"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","4a1a0b1e164d7229ed4e0140377a1c05"],["/2021/01/04/C++工程项目-travel/index.html","0e44729a24351eb9b6f0d74a65892628"],["/2021/01/04/算法设计-分治-最接近点对/index.html","d0ed9cc830f2eb108ebfd67efbf86dd2"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","94da08e6d90aa1dce46ceba08482a9fc"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","bd8b4dba18b28bc159a820e2825430c9"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","c21a7fa9d6a6e366473b301f7cb123e2"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","ef4ead3f25e11c4cb1fa5f86b141d1f0"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","a37670c86fcaba8668955ec066df37e4"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","c1e9796f92304bc8328ce5d2df3eb756"],["/404.html","6c98cc1c431ad8deaa96f21019477e98"],["/about/index.html","05332a3c5ee4686fa786d0c66e92b65e"],["/archives/2020/02/index.html","4988da55b00f2daae6546209c231c789"],["/archives/2020/03/index.html","b64f263a4b63424d462505d5ee705913"],["/archives/2020/04/index.html","21716846b86fbeb1cbe1ac43a61f92ec"],["/archives/2020/05/index.html","880fe671ff33b22e04ca19b09921a191"],["/archives/2020/06/index.html","a95a506cb08c82046459164e623da00b"],["/archives/2020/07/index.html","7c5f8685d51fb24c21fc13e7ae0e7aa6"],["/archives/2020/08/index.html","a14fa7b99edd711cb0d7364e1c6d3b99"],["/archives/2020/09/index.html","4cfba72c3dca4e6e4c294466ffd61f87"],["/archives/2020/10/index.html","bcb841850b732d79e1351db7ebb1a309"],["/archives/2020/index.html","7003707edac7e432550286a5e8ef8098"],["/archives/2020/page/2/index.html","b19a8ba5fe3d17b643c79a1fd8a7cd26"],["/archives/2020/page/3/index.html","b4560c559137277aba31d87eb8e015ee"],["/archives/2020/page/4/index.html","2d19c57d5079e88231c8e01fba288e23"],["/archives/2020/page/5/index.html","841617b63f3e7d5383fab0af03c055d8"],["/archives/2021/01/index.html","ec4a31cf483a6aa2915da09bea2e11e0"],["/archives/2021/index.html","9f566649f0c263c3f70130e22d96f69e"],["/archives/index.html","897c0f79fc98afa9db021d6a4bfd8620"],["/archives/page/2/index.html","bedb408729088498efd9c6b8ea629e5b"],["/archives/page/3/index.html","bedb408729088498efd9c6b8ea629e5b"],["/archives/page/4/index.html","bedb408729088498efd9c6b8ea629e5b"],["/archives/page/5/index.html","bedb408729088498efd9c6b8ea629e5b"],["/archives/page/6/index.html","bedb408729088498efd9c6b8ea629e5b"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/bb/index.html","fdbd3560a7dd066b8d4d41450c3f59b7"],["/categories/C-C/index.html","ed4cebe19d6dc8be80d326c25b2fced5"],["/categories/C-C/page/2/index.html","b4c335b0b2d8d7b254185056564dd562"],["/categories/C-C/拓展学习/index.html","7fa20dee3d5ddc3dc2f507eb3999ea6f"],["/categories/C-C/操作系统/index.html","3c2bc466f7451ef6ed24c589d94b96c0"],["/categories/C-C/算法设计/index.html","e23f6a03dd07d4d941c0fa52c1c777eb"],["/categories/C-C/编译原理/index.html","b50c1265a8ce9ca57cf37faab5fb3ef4"],["/categories/C-C/软件工程/index.html","6d6b4a42a5689bb37ebef6aa7d57db63"],["/categories/C-C/项目/index.html","150f279ecd4560a8e8f38156101fd7c3"],["/categories/Java/Android项目/index.html","6be03d3b1fa6a8cb53f898fbdb465af1"],["/categories/Java/index.html","594b093863ede3d69a660ba6705f0146"],["/categories/Linux/index.html","332168ad51e6c4a3362b950c4110405f"],["/categories/Linux/上机实战/index.html","32274dbe96fdd9fa49807a2d423085db"],["/categories/Linux/习题/index.html","c4eb8be1bc296e3d54f6be2ade5c3764"],["/categories/Linux/拓展学习/index.html","282af0c2f1cda5e253445deb57af6e2c"],["/categories/Python/index.html","2f2281af8a42858ce09d918ce90e4cbc"],["/categories/Python/爬虫/index.html","0a456b85cf1b991b502611e07839b3bf"],["/categories/index.html","bd74e1ae9a43c7b975acac1a4b1b243a"],["/categories/交换原理/index.html","50b08e8ef83fbc6334a95fe2dc0262e6"],["/categories/交换原理/实验/index.html","fc369acc0398499e27fe3b96fe21f538"],["/categories/其他/index.html","226fdaf04eb5127efd5fed96cb5c675d"],["/categories/大数据/index.html","066d5414c604545905a55e96fc1a94a5"],["/categories/大数据/习题/index.html","f55747a87fc4293de2f0262f0d29b67f"],["/categories/大数据/实战/index.html","c26874f1ecf3060ff51bbdf9ae70886f"],["/categories/机器学习/index.html","d7f0ad0be886148a84089b33504fe397"],["/categories/机器学习/实验/index.html","e5aeb2984b81d68b1f2c218348f9979f"],["/categories/机器学习/知识拓展/index.html","8bdb607849d1ea7c34216f36ba06db55"],["/categories/现代交换原理/index.html","82c9a67aa711b5cac7d1ff241b7fa5c7"],["/categories/现代交换原理/习题/index.html","9c75c50c7314fbaf81d64814b8da98ae"],["/categories/计算机系统结构/index.html","71002b7f64c345d938db879bddc06f56"],["/categories/计算机系统结构/实验/index.html","647efb0621de9f0bc5c4ab66a79f9ee0"],["/categories/计算机组成原理/index.html","fe47d42311462e35e58cbfa6b48ba9a0"],["/categories/计算机组成原理/实验/index.html","08303a76939c5ac23b5861013342e323"],["/categories/计算机网络/index.html","d0cc94a4686525ae862e6f74ced08a2d"],["/categories/计算机网络/实验/index.html","c8033a17481b721d602f9421703c68e0"],["/categories/集锦/Android/index.html","e8618552d14f60ce01114b7f90005cf6"],["/categories/集锦/CSAPP/index.html","8a0b613b216c933ea9a13f6cac360f30"],["/categories/集锦/Python/index.html","41115b6f6aee10c95192589b931c791a"],["/categories/集锦/index.html","1ceead758905d4068ff7d1bafdcb22c7"],["/css/first.css","ac2d0010102d22ded3aa536d16e52b73"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/message.css","b0ce3ca232f809c8d7a85c79bf1f7ff8"],["/css/style.css","f33cadc59019a1af1d898b222bf512f6"],["/friends/index.html","879d26bdda88412abe6868fec3061ae1"],["/gallery/index.html","63f4bc7639ebb10460b077618443184f"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","1975a8f31ed6d29420479270a5ef4a9b"],["/js/aplayer.js","f10ee7aff4ce278045da925ac6510d29"],["/js/app.js","d14976ee97145aa14568c13c6554dcc4"],["/js/jquery.parallax.min.js","38cf4791e24aeaa8101bd2c816400718"],["/js/message.js","38da736cdf513c9a15a0a2a16a34eeae"],["/js/plugins/contributors.js","23ba3efa08d9fb1aae753ceaa6df2711"],["/js/plugins/friends.js","239cf9c648af390f866ed00cead3e23d"],["/js/plugins/sites.js","15bb31fc27abc888b17cc5d822808604"],["/js/rightMenu.js","19b2a577c30a04732f02b86bda62e0b9"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","c4d9d99052c5e70952df812c8ee72e6d"],["/page/2/index.html","8e0e5e2222a80f26a371ec2eed22ad42"],["/page/3/index.html","856925a92fa40065892379be72ac6ad1"],["/page/4/index.html","d44d8ae8f2450bd576ce6172758ef89c"],["/page/5/index.html","30705e81c8818ac3f7fcbfb33650cf28"],["/page/6/index.html","d6b6bf78e95cae79e2d36bd99ad1206b"],["/shuoshuo/index.html","aa01ae8858ff92008623e771c183d602"],["/sw-register.js","5877caee92c1ccd10626d8a48668f0c8"],["/tags/AI/index.html","0c6e10cea8f414b82f6ecf4b34f8bf9e"],["/tags/Android/index.html","458d30d461be84c61114679df8bf24b8"],["/tags/C/index.html","0cde2d7fd90072bf416b89dca9b02b16"],["/tags/C/page/2/index.html","e72495d2fa0830128fb54595c38bd702"],["/tags/C99/index.html","7367e9f9c73da39b56796a68c46181bb"],["/tags/CSAPP/index.html","2004f802e21d78936686ae8d028191ac"],["/tags/DNN/index.html","bb83b3eb17cea271c5af6084791d0d52"],["/tags/DNS/index.html","2a32b1cc18adf6e8662b5bbbafa0515a"],["/tags/FPGA/index.html","40ffc1e9fe536d888e346c54ee9905c9"],["/tags/HDFS/index.html","fe1c106f4b63c5d373e9eae9b1cc4a35"],["/tags/Java/index.html","203851a127f445d3fee0660760a853ab"],["/tags/JobShop/index.html","64776923bd6e5eb118802ae143e2ab2d"],["/tags/K-Means/index.html","7b696f66370c890f12edd5aedc2a8ae2"],["/tags/Kafka/index.html","9707f827b29caf9743169d240353a470"],["/tags/LL1/index.html","0c3851f1becbe9684e2fa96890587b4c"],["/tags/LR/index.html","522968e2105cc836d78bf2dab0688ff3"],["/tags/Linux/index.html","3cb37f12bcad6a1f53935204418ff4c2"],["/tags/MIPS/index.html","552e3ec340fe26e06ea302abf5a6814c"],["/tags/MOOC/index.html","092dbaabe4c6a8e289693013ff97a33b"],["/tags/MPLS/index.html","b837b227b74bcec6fc2f6d00b0943957"],["/tags/MapReduce/index.html","3114441527ab0b918f4f1a859996fc87"],["/tags/Matplotlib/index.html","0aff9fd1942558e49bef3e645106487f"],["/tags/MiniSYS/index.html","6f7fdb54ca3220484a42cc6771d1701e"],["/tags/Python/index.html","1f566e32e8ae3727d9ac396b0a0358b9"],["/tags/QT/index.html","7a2e9ded81586ff39825ca123943b161"],["/tags/RNN/index.html","f29212d7e41eef2cee34f6a62b800cb7"],["/tags/SIP/index.html","3fb3e3438cf75eeadbe009089c15ebd4"],["/tags/Scala/index.html","37765cdc16716cac61a96985f2ea4c70"],["/tags/Shell/index.html","18eb8bb506a2d05bea40c7df1cc4686a"],["/tags/Spark/index.html","dad1ee9b42eb233ab1e63361babda288"],["/tags/Streaming/index.html","5ed29c76e3aedf85004cf7d5d1b73204"],["/tags/Struct/index.html","6ecc5f3dea350f3b06e76cece8d091c3"],["/tags/Verilog/index.html","d63aafd8c618f2a2707849354edea2b1"],["/tags/first/index.html","2b3113af9c2f3f6b135fe897309a1f72"],["/tags/iPython/index.html","405b7eaf3034d6cd7d578051619a54f0"],["/tags/index.html","305c52c5afaf8baf189d3f1090a4f86f"],["/tags/ls/index.html","9a72863ed25c2de996f1d36c4fd41736"],["/tags/习题/index.html","c2ef868c963a6a58bdad4b15f25344ab"],["/tags/交换原理/index.html","aa12bba532374da1b12aa0794855367c"],["/tags/人工智能/index.html","4f0ad0f170fa319c3b5ac64114860081"],["/tags/信号量/index.html","a1bbd298b8e90c5fe22538b258225118"],["/tags/内存管理/index.html","cdc939c536c7226737f6230d69f9aa94"],["/tags/决策树/index.html","2c74ae91a5c3ee19f036d9d5be55bb71"],["/tags/分治/index.html","65252f18c45d160b66d92901962a9a25"],["/tags/分类/index.html","4d7c3decc588833854a8e38dc309c0ae"],["/tags/动态规划/index.html","38695ac5dca2c1f8cc85386791f54b91"],["/tags/华为云/index.html","a7b4a2f64921b7da2e7af17c89a8bb95"],["/tags/单词计数/index.html","ac6e97603e96992f3337e3dcb71df9a7"],["/tags/可视化/index.html","bee87f81c179389393a9fc8a5626c6db"],["/tags/同步互斥/index.html","b34a3eac9704f59f20adb0e7087f28a4"],["/tags/大数据/index.html","e29dd5b102f9ce2cfe9bfd94ec74b6c3"],["/tags/学堂在线/index.html","bce252f4ab2a33c6b0b7354308ac64b3"],["/tags/实战/index.html","cd93849db76063680949d7bd845b1915"],["/tags/实验/index.html","3cd1280d74ae8c4a488d0ad7bcfb1edc"],["/tags/实验/page/2/index.html","4867063cd1c23a8366c3a7bf45a92b66"],["/tags/小游戏/index.html","e3d16a04e6676070921a741c6198f779"],["/tags/工程/index.html","eed8627bcb42d57b352519dc09140353"],["/tags/工程/page/2/index.html","62ddaff114cc3c4c9c69e7ea9c552472"],["/tags/手写识别/index.html","9071b6ca09d224d087cdc1369a4194a7"],["/tags/拓展/index.html","e9219acccf49bc10a0988b094ff6c656"],["/tags/操作系统/index.html","1465fcb4bffeadbdf23627519470cda1"],["/tags/数据处理/index.html","7bc124cc80de1d94a41d3f3e0a908a1e"],["/tags/日志分析/index.html","2201bbebc81afc543b55a261263681c1"],["/tags/易错点/index.html","72c0f8bbd5acd7a2118526548ab59999"],["/tags/机器学习/index.html","6adb54052ea6866e34b51181a4a83f35"],["/tags/条件熵/index.html","626662332dcf464a5bbf7ce96eb8b3c2"],["/tags/正则表达式/index.html","ef62cc9f85a26e06522cae4757167014"],["/tags/汇编/index.html","47e5f175cf6732a11a12ece0c9ce705f"],["/tags/流计算/index.html","97750ff743945597e97c683e4dfc24a4"],["/tags/爬虫/index.html","f53ce45b5eeb277e485d06e0c89c6729"],["/tags/现代交换原理/index.html","f5fb05748951e93fdf87dbbdaed87120"],["/tags/生产者消费者/index.html","389f789199e29771df5acb3784526e89"],["/tags/知识/index.html","f687560ab73fa1659d08620e5033d003"],["/tags/算法设计/index.html","2b19c237fe6181e9f6f690153e9962b9"],["/tags/线程/index.html","5c26b6d7062bd681b847c324f864acdd"],["/tags/编译原理/index.html","609876ecead0a1a1bd00a3fb34092c82"],["/tags/网课/index.html","9ff9feb9f93cd1eb768df27776798c70"],["/tags/聚类/index.html","e5191af9ec19cace62d10566ee78e90f"],["/tags/脚本/index.html","69759fb153acbdd0faece9771b49c290"],["/tags/计算机系统结构/index.html","85f7679a52a478080b93839d134e9123"],["/tags/计算机组成原理/index.html","ac7943af501ec3076e8dd8bd10a1674f"],["/tags/计算机网络/index.html","7a33534666cdc024f30f9053799279e2"],["/tags/词法分析/index.html","9fb78328f7a2f2a2376dc14730cb4686"],["/tags/语法分析/index.html","793a8f283eef597979b06668e5e88479"],["/tags/读者写者/index.html","88754af136fecde0a6e4beff051ef1db"],["/tags/课程/index.html","476f4e91b638af30fe888495af1e8316"],["/tags/起名字/index.html","27eb05b6fa5846011efdcd9127010281"],["/tags/软件工程/index.html","eb420f64d55f2df8ac4b9aa28f07244e"],["/tags/进程/index.html","cf7a04a6f6a3a0f5a151f0ebfc53e88b"],["/tags/通信/index.html","85c86de11667e688c392ce04ec2c2674"],["/tags/遍历目录/index.html","2e428564a4978469234da99f59dcd626"],["/tags/难点/index.html","00aef9cddd9e7f7c9542d9d2c9edad9f"],["/tags/项目/index.html","78b6c2bfae7fee26a5c91473688f5a51"]];
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
