/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","40a012073a0f620e99553d9ec3530935"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","74183f0e35386d10c0532ddc2bb22033"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","61adfa2451778bfc58ebe1782d2f897c"],["/2020/03/26/计算机系统结构-实验1和2-遇到的问题/index.html","e8e4778805f924078edc4b9ff90689db"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","e45992055e51cd80b62ae40897dfb255"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","3653763bbce6b44f9c30e319ab34366d"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","875af4b8dd1177ad1d108e5f66919675"],["/2020/04/18/机器学习-知识拓展-条件熵/index.html","350ab318b1a557bea494558ab69d3191"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","bcc297c5d9fa2be2c0a7cd997da273b3"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","edaf7be8e7be3ced7ac01e253a1090eb"],["/2020/04/26/机器学习-实验-决策树/index.html","116de0d66f76cff3b2124c501ab0ceb4"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","6f25e14b52bd82906dc11777582cad8f"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","719239dd1345bc65a4031112967e62cf"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","e2b808ae492d18fa2daa468c84c624f2"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","37cc1a5dd3b2136d34d4f21ff3b8fb90"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","fc7d5e33896bbd97046018f6beda54a6"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","ec560d3f9ac96f36673707f1751fb98c"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","3c6cb8a2caa980b3927ac0a4e019e087"],["/2020/06/11/机器学习-实验-DNN-手写识别/index.html","5b329b32731b7a682ec2bf1bcbd18aae"],["/2020/06/18/大数据-习题/index.html","b14209a1fe7edaba8d9994d1d7d7b078"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","4b74302a6e1a2df65cdf6ecde7a2cfec"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","947b8250fd38a05714e368f385be36b0"],["/2020/06/24/Linux-拓展学习/index.html","82c44b3d2199da2f22de310bb8455721"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","ac81bc1ff171b7a5750927fadc4d6320"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","3b11b7a746c6df5ae0742d16eb967f7f"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","11b163844e1d87af69fe05f4e747c500"],["/2020/07/15/C和C++的struct使用总结/index.html","91eb3d7b745d25ad2daef9d1446e5daf"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","833432e2be05a3b2c4ac898de7946048"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","d94e2a93ce77a15042b682d9ef2a5cfc"],["/2020/08/10/机器学习-实验-花卉识别/index.html","ab6394547904c3a9386f8279597f36fe"],["/2020/08/15/Python-项目集锦/index.html","2a57c5bef5f653fed0f334faf508a96f"],["/2020/09/01/编译原理-词法分析/index.html","f1ef8170763b4f70227ce83c4328cd66"],["/2020/09/02/编译原理-语法分析-LL1/index.html","3cce72fbfb8825bbd878e097d8ae1b49"],["/2020/09/02/编译原理-语法分析-LR/index.html","80ed5e0a23c0f8e307a75f590afda29a"],["/2020/09/03/操作系统-内存管理/index.html","7d3f33a29345d6e9823303749731ade1"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","3305cab90d3d7dce10c1c09ad4876f0e"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","0754e5d8661ad6a6926ee5efb5b928fb"],["/2020/09/04/CSAPP-实验集锦/index.html","b4cba16fba25a0cb2946d9ef95e75ef1"],["/2020/09/10/计算机网络-实验集锦/index.html","8e7e4a75f663a0b10d3e68b9f27364e9"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","20bf9f4fe6f07048b49105a8ce6eed06"],["/2020/09/30/C++工程项目-JobShop/index.html","f7656583fc64562ac78dc29bcdf4f2bd"],["/2020/10/09/交换原理-实验1-时间表调度实验/index.html","f542455b31360b38908a8e6a71a8063c"],["/2020/10/09/交换原理-实验2-摘挂机检测实验/index.html","074a3371f7bb0cf1ad566282aefbda86"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","c903cb9578c3620d951573c734e8207e"],["/2020/10/09/交换原理-实验4-拨打SIP电话/index.html","b2277adb08cbf7b14a601bd2f15d146c"],["/2021/01/04/Android-项目集锦/index.html","88d25ab51dbf300f46c3b4c9da38a64f"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","dde211309c7ef02096cd04929c76bea5"],["/2021/01/04/C++工程项目-travel/index.html","04c4608ff45d7b90066c6cacc1f69baf"],["/2021/01/04/算法设计-分治-最接近点对/index.html","463565668141347661d06b8cb45d8a45"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","74e12e5f140627568b6c9229c24773cc"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","206f22e1e77093cef13836028f1e7bd2"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","de3ac94e135c8c511dfe7aad238ba0f1"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","23af096607fa97655307b860e3e3f37a"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","153c38e904dca36992b8e71d8498da76"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","1bd380021d564ff2faeabf0dd9ed3f9f"],["/404.html","b7aef567478522e2ae8c6f0703aa9124"],["/about/index.html","bcb7de57582ec641120f090e95e9dce0"],["/archives/2020/02/index.html","ab8795d51ceaa480f9435ff235e36fc1"],["/archives/2020/03/index.html","f78f155c4afac15929ff057c885df7be"],["/archives/2020/04/index.html","8f61e1e241cc51d94c7e9755bbac19c0"],["/archives/2020/05/index.html","60c6a0d7100fc259538e9caed2ac7367"],["/archives/2020/06/index.html","393501177145216d649a0b4763822ace"],["/archives/2020/07/index.html","2967dce80baa6951ab9ddf7985152ca6"],["/archives/2020/08/index.html","c1d725f2389ee692698139de252f1477"],["/archives/2020/09/index.html","3657ee91d001eebc36c3112425eabffd"],["/archives/2020/10/index.html","f73f9dbabe4f26542005372a42d9909f"],["/archives/2020/index.html","d23c332f17ee9354e54df525d89035c6"],["/archives/2020/page/2/index.html","84189025c57423956d6d4d36d9660371"],["/archives/2020/page/3/index.html","200c376ed833913def9eeda91f30ae8d"],["/archives/2020/page/4/index.html","a347af1623aa071b8cf4c7ce032e90a5"],["/archives/2020/page/5/index.html","6fecf852ecf3bc708d272015048d56c9"],["/archives/2021/01/index.html","a13e9b20bae2126bcb6d1bad76b10a74"],["/archives/2021/index.html","29f6fb29b2e67a6b8282e8b581fffbe5"],["/archives/index.html","fd71c07fc10fa1084f111c218623217c"],["/archives/page/2/index.html","fd71c07fc10fa1084f111c218623217c"],["/archives/page/3/index.html","fd71c07fc10fa1084f111c218623217c"],["/archives/page/4/index.html","fd71c07fc10fa1084f111c218623217c"],["/archives/page/5/index.html","fd71c07fc10fa1084f111c218623217c"],["/archives/page/6/index.html","13978f1ed7379aeffdcaf15a570e31e5"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/bb/index.html","98e908718917a67b7bf88f9f0ca30f83"],["/categories/C-C/index.html","92d08032becb07b8fe879eec3625d8fa"],["/categories/C-C/page/2/index.html","2c709847ec05b2a3e2ded38b4027e277"],["/categories/C-C/拓展学习/index.html","933bd13bcbd588548195f491ca9a3f0d"],["/categories/C-C/操作系统/index.html","3eb0a2804dadd69e59f22a96c843eb95"],["/categories/C-C/算法设计/index.html","7a51b4584f99a99e276c80f8374bf1cc"],["/categories/C-C/编译原理/index.html","9b1202bd477393c7d1cc32e5615846eb"],["/categories/C-C/软件工程/index.html","eefe625dc92c9f34e2720999845b974c"],["/categories/C-C/项目/index.html","74ff7a5e8fa394125b127e0b11bc6b07"],["/categories/Java/Android项目/index.html","71467bb2815d4955f890654bfe48690c"],["/categories/Java/index.html","91399d0306941f2077deba68e52a0a4a"],["/categories/Linux/index.html","45ae69e695f4238f275e99cc12e2a3b9"],["/categories/Linux/上机实战/index.html","89d1b1aaa1ca0d5229f270ce28b68a61"],["/categories/Linux/习题/index.html","755f7c8e8d91f986da9e4eb5d7ef642a"],["/categories/Linux/拓展学习/index.html","8ff8244e77a2cc23ee8705ec2dec52b1"],["/categories/Python/index.html","49cf74df020bc8e4d9a55e7359a0841b"],["/categories/Python/爬虫/index.html","b85e797184959aaacb8c5f11d678ea1c"],["/categories/index.html","419d76802cd4b98f6b38c6757a9ce266"],["/categories/交换原理/index.html","7f3ad38187187ebf9699f498bcd055a8"],["/categories/交换原理/实验/index.html","bebef10064a5a81ab262d92c76a63b9f"],["/categories/其他/index.html","3f47c1f4484aa812a460834c85415e4a"],["/categories/大数据/index.html","f10031dbc26087216d371491e1a424ae"],["/categories/大数据/习题/index.html","a3477e4b0247db1a2d2e048e7801c6aa"],["/categories/大数据/实战/index.html","738a8bb96896e895ef9814fdbd9fc3a2"],["/categories/机器学习/index.html","d4be092d33c1708d8d025ebed8c5f078"],["/categories/机器学习/实验/index.html","d42ab817a6bbe50dd17717b4c81561e6"],["/categories/机器学习/知识拓展/index.html","77c8b8bb2c1c77d300dbd7ed4d7ab293"],["/categories/现代交换原理/index.html","b82075b6fa8c0ce91f9077eaa421b2c7"],["/categories/现代交换原理/习题/index.html","34969b6d64a56e1f2c62ebef13fcd6b7"],["/categories/计算机系统结构/index.html","043cc4cf45ed33905a6e1893f91c606b"],["/categories/计算机系统结构/实验/index.html","10b70dd36488bb9bfa159f9f08b1ff19"],["/categories/计算机组成原理/index.html","a70f3b56a8bebafa48cd4063cf00aa99"],["/categories/计算机组成原理/实验/index.html","bcab74ea04c720de72e3689e797a1ccd"],["/categories/计算机网络/index.html","73f5677aae2547592f38ef6cfc4b94e0"],["/categories/计算机网络/实验/index.html","f07a7c37526dc4c414222dff7bc36a58"],["/categories/集锦/Android/index.html","0ba8cd3695e26f73e916b90daa5b601f"],["/categories/集锦/CSAPP/index.html","df824ea212eae86f32073a011960ba8a"],["/categories/集锦/Python/index.html","d14ab2a9f9a7de24cea401452c522c6e"],["/categories/集锦/index.html","583209f1b1d6d88b3e35ba3cfd1b480a"],["/css/first.css","ac2d0010102d22ded3aa536d16e52b73"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/message.css","b0ce3ca232f809c8d7a85c79bf1f7ff8"],["/css/style.css","f33cadc59019a1af1d898b222bf512f6"],["/friends/index.html","d4da0f9b49f3d7b8be7a25bc335f74d1"],["/gallery/index.html","63f4bc7639ebb10460b077618443184f"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","9b372c2d1b6adc322cb31416b63e8aa5"],["/js/aplayer.js","f10ee7aff4ce278045da925ac6510d29"],["/js/app.js","d14976ee97145aa14568c13c6554dcc4"],["/js/jquery.parallax.min.js","38cf4791e24aeaa8101bd2c816400718"],["/js/message.js","38da736cdf513c9a15a0a2a16a34eeae"],["/js/plugins/contributors.js","23ba3efa08d9fb1aae753ceaa6df2711"],["/js/plugins/friends.js","239cf9c648af390f866ed00cead3e23d"],["/js/plugins/sites.js","15bb31fc27abc888b17cc5d822808604"],["/js/rightMenu.js","19b2a577c30a04732f02b86bda62e0b9"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","28e45e36d2ec1875ce7876c949aaafe5"],["/page/2/index.html","235b1ff2722fe7a26f7a3ae850874328"],["/page/3/index.html","2c54159bb6ce115131f01b47ebb54604"],["/page/4/index.html","01b8c694a962a70c9a7331c3ff053619"],["/page/5/index.html","11b0dc37eb99e78717194d1600fcaade"],["/page/6/index.html","0a96354de791ec7cfab167f2c362429c"],["/shuoshuo/index.html","522c419081ca5f20e3cb4856a66ff508"],["/sw-register.js","7155d08bd503eeb0e44b34e84a88637b"],["/tags/AI/index.html","77ac89acb5b0b2faa8b5e8cb638a7dfe"],["/tags/Android/index.html","53cdae9108c7cbdc375c2fa96230dd1a"],["/tags/C/index.html","51f1ad43bff154987c270765bfb81347"],["/tags/C/page/2/index.html","6639f2d838e620666dce632fa02482df"],["/tags/C99/index.html","1619d513721837b71a042b62bee0818a"],["/tags/CSAPP/index.html","2319a414f6ddb4e6ce20f1e473fa5669"],["/tags/DNN/index.html","5f89d4327b9f3422084ad40a60a0c193"],["/tags/DNS/index.html","e019095c8efe9c5c14efb5194aead693"],["/tags/FPGA/index.html","90c118d43031a5d9d64ef967c86b1d45"],["/tags/HDFS/index.html","2ce1d5e16251f273b30a8b2567a27a43"],["/tags/Java/index.html","fba0aff2f4eb0c9a264f771a6f5830a8"],["/tags/JobShop/index.html","45d4fbefd89b7f18646aeb86c9aeacfd"],["/tags/K-Means/index.html","4ea4225fbe7fa0d0c5e395029b742d11"],["/tags/Kafka/index.html","f7b3010c9f9a8817fa909929938d77a9"],["/tags/LL1/index.html","3c71099e0ec61449c06cc9637ddf037f"],["/tags/LR/index.html","d6bf9c2e15bdc5297d571d7131bb5cfa"],["/tags/Linux/index.html","dc6c3bc302dc03b0fa58e78b84894cc5"],["/tags/MIPS/index.html","2e280d442cc70f4d2fb543649b3d2f26"],["/tags/MOOC/index.html","6affccfd1b3fef02a81f288b6b21b140"],["/tags/MPLS/index.html","602408613c5d9101df275df4f8ddac10"],["/tags/MapReduce/index.html","1b49b8c7e53900de46d9aa82d99e230f"],["/tags/Matplotlib/index.html","0e8a7c1daf4a53add788e7c33c7d0d49"],["/tags/MiniSYS/index.html","ef5497f55684a30e630f0420e47d83a8"],["/tags/Python/index.html","7c92845359a1777a4e5ebb3fd2921480"],["/tags/QT/index.html","f211b03eed9c04f466779ef5e0800837"],["/tags/RNN/index.html","822176c4358498f19dbd022fe2cf6c12"],["/tags/SIP/index.html","c3ca50b94988652e89289ab264e4ec66"],["/tags/Scala/index.html","e3eca327aada430bb86d3413c92f23ab"],["/tags/Shell/index.html","259964f7a22a1bc4563532a0a70ab435"],["/tags/Spark/index.html","e9ccaa250bd12a4cabeb5cd2a1f745f8"],["/tags/Streaming/index.html","96bd5ddffccfebf46b2ac310d96b6cd8"],["/tags/Struct/index.html","f9e1b26bc52bf51c5c55e60d5667a6bf"],["/tags/Verilog/index.html","3db2476d505f402abbd7293a5ee36667"],["/tags/first/index.html","340bc9c89c3605162f6db71de689a910"],["/tags/iPython/index.html","1c8ccdec9336657a537b987464e3cbf1"],["/tags/index.html","04b4d190d0bcbbbe0fb8e64f12d8377c"],["/tags/ls/index.html","6de1891fcbdf8ce623a690e75f720991"],["/tags/习题/index.html","95ad3d7fdc2e9839b47261fc85761f10"],["/tags/交换原理/index.html","9518fbd1b073291134d8fdc612e58cf7"],["/tags/人工智能/index.html","2d96c8364d0ca6094a9b5491c93f6d6c"],["/tags/信号量/index.html","94fe47681cb9a1b07b9e67b7ef2d6072"],["/tags/内存管理/index.html","d04b544f75a733d1f16be2f8bcdad76b"],["/tags/决策树/index.html","1c3b1f4e642ce1b7304b4dc395501f74"],["/tags/分治/index.html","0a3e1e2e0b6573a96089fd513a384415"],["/tags/分类/index.html","ed4360ab32b5a046a5a534d97e0bf32b"],["/tags/动态规划/index.html","abe74757030747bd2b4871e8ed4effef"],["/tags/华为云/index.html","dd51c3eaffff46ceb4f2748a5f345989"],["/tags/单词计数/index.html","22e3fcea64a90f01756718c7e083c8db"],["/tags/可视化/index.html","2c0090ef8d8d5b7f04e689ccceae6477"],["/tags/同步互斥/index.html","345f3b7ac3d1f8934a92b9e5da60faae"],["/tags/大数据/index.html","6443b7eaefbf67d82a3d0f4419379d87"],["/tags/学堂在线/index.html","1be0a22f24ce6fbce231c962d6cc5baa"],["/tags/实战/index.html","8366470a94dce15372513801a31dbf40"],["/tags/实验/index.html","516a9db6222fa4cdebc755bbcb0bc4f2"],["/tags/实验/page/2/index.html","f189d5522d586ac03866a25676d2ab10"],["/tags/小游戏/index.html","bae740cf2818bc6c59fd472251294e4e"],["/tags/工程/index.html","cdca42ada5a2dd29805f8a6cd77d1346"],["/tags/工程/page/2/index.html","9d00bb44f826940b142df2f7e2656ff0"],["/tags/手写识别/index.html","9b759b7dbe54c92e35e1c9bc5a8a33b0"],["/tags/拓展/index.html","fc17b52551cba5532671376b2a76c62e"],["/tags/操作系统/index.html","d94a98a4b1207cb5d93a5af959698576"],["/tags/数据处理/index.html","174bfb3c1713f51c686279a42166fa6d"],["/tags/日志分析/index.html","313bd758cd2115745449e4da15577b2a"],["/tags/易错点/index.html","1258187e423a84ab8c8f6087461fa531"],["/tags/机器学习/index.html","618a17500da094999f00943a462c1acc"],["/tags/条件熵/index.html","0d405da233bbed813c2b3c57fec5652a"],["/tags/正则表达式/index.html","31103fa24b02a1849098ca77a28a0682"],["/tags/汇编/index.html","0666f4a0133e71fce6982cce752e7849"],["/tags/流计算/index.html","db146dafd1b28e6ad08c0f005ed7f553"],["/tags/爬虫/index.html","0abfd1a7557710f07bf3c3a0a4342709"],["/tags/现代交换原理/index.html","54ec043831486127cb8788efeac8c58e"],["/tags/生产者消费者/index.html","48608ba7259f19f8be489ce106d12d49"],["/tags/知识/index.html","632f1ac827db65a6a72441c9ccaee569"],["/tags/算法设计/index.html","94f515126880c1064f7ae96b9becc5ba"],["/tags/线程/index.html","e343908afb4d9fe282e1ffb891a080c6"],["/tags/编译原理/index.html","88f30d25f01afb94c6649d433ed8582d"],["/tags/网课/index.html","2acce2ed41b8d07e105d36c55ccdb1a0"],["/tags/聚类/index.html","95b7acdbd4a75d2c49d7d16d88c101b6"],["/tags/脚本/index.html","35b746e91b3da0715fa6cb5c77698104"],["/tags/计算机系统结构/index.html","5ec376136207a5aba5f398cd250a3d7d"],["/tags/计算机组成原理/index.html","2454cbf2bb2a2f2a289ed23f1181d810"],["/tags/计算机网络/index.html","372f6347f1ae24177d51d740b9537435"],["/tags/词法分析/index.html","5bb58652fb00050cec27095a539b8be1"],["/tags/语法分析/index.html","80762a6e134ab11a4abd2893912aa174"],["/tags/读者写者/index.html","3f1e2f5a332371ecf78dbae23fbe3271"],["/tags/课程/index.html","237fe78bd9bc701a0c59c09ba5f7dcaf"],["/tags/起名字/index.html","e22b69aebdc56e54bd2a5a47043aca9f"],["/tags/软件工程/index.html","b9ccba4809fb9d703d86054a65815619"],["/tags/进程/index.html","77ca7deeb0523208119c216e0dc6029c"],["/tags/通信/index.html","01293c946d5e28c12a99e06b65ff8a42"],["/tags/遍历目录/index.html","90f81ae692b478b647fd60febc12e35c"],["/tags/难点/index.html","cd8f3c49c499117c288ff54b8f55bb2f"],["/tags/项目/index.html","6ff1eaca87f72f89c5caed7f32a67348"]];
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
