/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","639844b24be9a85b5e4a15c135e06630"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","b191e7076d1ec7d5f42368d3fac67ec9"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","b6109ce213a508fcaf68a1dc0018eab7"],["/2020/03/26/计算机系统结构-实验1和2-遇到的问题/index.html","f0b417d53cdeb1d6432788b6f7f24607"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","493424937975b7e4686f0f8dfbe678e0"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","13ba430d5f771c52de8ea0fd5f89e995"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","c506cb48b91aee69843d3669133c352d"],["/2020/04/18/机器学习-知识拓展-条件熵/index.html","bfda15eb55aa5d1abe2c1f990ba544f5"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","7f156ef79fc69c0b335087c16afcbc4d"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","751ce2ba4d32111975fb2a8e4b8567d5"],["/2020/04/26/机器学习-实验-决策树/index.html","d672cc0bda8b05aa17cd76b435e2dff3"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","521db25b193cf3617781919d093d91b1"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","3e6557af9cccef3df734dea55e9d8492"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","37eca4b89d050ac86fe7fb98e17c10be"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","d18546d6cca259ba4efb52bf631186dc"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","6940047ea38225f4865cd8372db09008"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","27b00abad3ef6def3c6000eb455b17ee"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","0c2799c6e601c257059e6058a6a9a350"],["/2020/06/11/机器学习-实验-DNN-手写识别/index.html","c9d9ac3b4fa046eeaff70aee68bc40a7"],["/2020/06/18/大数据-习题/index.html","04f429d2053c9c5083b2877465b614bd"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","31e83b8ff8594cf18ce6da6d684ff4dd"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","c245860bb36fb1bb34a1be91b6bd4db3"],["/2020/06/24/Linux-拓展学习/index.html","336cb2aab31192ac6c9aaade53cbc1c8"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","ffdbed6d9a3785e88ed4b5bda6d55de3"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","5e3069682436b1fb136c55dece3171ac"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","bbaeaeda142c18fb7a3bb9f58f3a2aff"],["/2020/07/15/C和C++的struct使用总结/index.html","39fb9f2d2d67c2aa1f879e6daa1d0b07"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","d7442acd344a299b9c9170f09ccb87b6"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","4596c6ec094c6b36fe12f98f8c9c0bac"],["/2020/08/10/机器学习-实验-花卉识别/index.html","a9c0c1e827ea9eecfc737f4e8e5de86a"],["/2020/08/15/Python-项目集锦/index.html","6e0eb6ee899c64db2da29d1ea2ef2212"],["/2020/09/01/编译原理-词法分析/index.html","977263022d8f2de653523e9d1a5b1ec0"],["/2020/09/02/编译原理-语法分析-LL1/index.html","ad8bca15a01f60d2302b4ad7a8d4000f"],["/2020/09/02/编译原理-语法分析-LR/index.html","097e5bca8eaa4e270ca1c395f0977397"],["/2020/09/03/操作系统-内存管理/index.html","2a11819a941b2eee53d1e84d1dcb4adf"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","e155581faafc2998db6a51543e4f07ef"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","d04ea018a231a953c0ead6b02e75c75b"],["/2020/09/04/CSAPP-实验集锦/index.html","2a9daadc95081af374e0e0fac0894d32"],["/2020/09/10/计算机网络-实验集锦/index.html","ec8bee6a5bf06f8dbd709c80e70b60e5"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","494dfa2ddac1032ea0776cee151df0cf"],["/2020/09/30/C++工程项目-JobShop/index.html","3eb2948be41277ac4b85baf3a349f058"],["/2020/10/09/交换原理-实验1-时间表调度实验/index.html","9b056ed947dc9cbe824e183f065bc8bf"],["/2020/10/09/交换原理-实验2-摘挂机检测实验/index.html","68e8b16fe3c5110521a9c49c5dab06b3"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","7df55a38691909851cc2ec477779af6c"],["/2020/10/09/交换原理-实验4-拨打SIP电话/index.html","264d0bdd3848baa10ed5f28759160236"],["/2021/01/04/Android-项目集锦/index.html","d041b73ffd50c73caf1f23763f717590"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","7ce8a0aebaf54ce272bc1773fa8eadb8"],["/2021/01/04/C++工程项目-travel/index.html","21c904078667907dc99b6d5ff55ff39a"],["/2021/01/04/算法设计-分治-最接近点对/index.html","0a1e6ada8983347991e14e13a014588c"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","93bf19bb0032592f8019ea98dcc25db8"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","5af69a2b9779645b7cdc9f25b18c728d"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","a52a0eaad9ab505db6da3d7a44014e5e"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","1f6ead97e5a324441f10d54545f02485"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","b39139d58c3d1834cace71b480f3a899"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","c51735c695b5fb1da41b86ebc4cfe341"],["/404.html","d1020562f884c92a3b80d4e26d3af81d"],["/about/index.html","f8e011ad4ef8b882e989189c095928a7"],["/archives/2020/02/index.html","59781f1abdc0ad26370de0295231bf4c"],["/archives/2020/03/index.html","ac8e27131a7180b00ccb502424ff18a5"],["/archives/2020/04/index.html","035b3371a215826561dec70ee6c724b0"],["/archives/2020/05/index.html","77f74210cb0e1021c411b9be5abcbc93"],["/archives/2020/06/index.html","02234d43ee28b764cab9a1ffdae6fe1b"],["/archives/2020/07/index.html","62fcb0ce51769dbe47e2231c8d0eaa33"],["/archives/2020/08/index.html","546953b3bf6c9c366cb54c6654d3b6c5"],["/archives/2020/09/index.html","93b331bcc47bee6ddcdadfa4f72ec188"],["/archives/2020/10/index.html","9705068fb8749ba717aaaf6d70be1a44"],["/archives/2020/index.html","725c1e33046e85a0fa6b5569770832ac"],["/archives/2020/page/2/index.html","9023444519559ac9ac85b0462dcd5126"],["/archives/2020/page/3/index.html","53b95dd2e005c18db0552c7baa508615"],["/archives/2020/page/4/index.html","4153e3aa06555cc32ed04e6b3f177350"],["/archives/2020/page/5/index.html","274ee2d09454a671229f1901aaaf16dd"],["/archives/2021/01/index.html","758d447ea7f33bb61090d293c0f5570a"],["/archives/2021/index.html","3a5119ab8814b1b4c73a3ac295296012"],["/archives/index.html","e81f60b5e60905a97a011443692420bb"],["/archives/page/2/index.html","e81f60b5e60905a97a011443692420bb"],["/archives/page/3/index.html","e81f60b5e60905a97a011443692420bb"],["/archives/page/4/index.html","e81f60b5e60905a97a011443692420bb"],["/archives/page/5/index.html","577754e7103b3eaacd538c547e06902c"],["/archives/page/6/index.html","577754e7103b3eaacd538c547e06902c"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/bb/index.html","11a3f0741d207d8556476e19b09903f6"],["/categories/C-C/index.html","963aba6da8901d1c555e4e29e43361ff"],["/categories/C-C/page/2/index.html","22a55bff3896a3f3faf49d654e6fc17f"],["/categories/C-C/拓展学习/index.html","544776e38cde51a92bf97a8136cb5237"],["/categories/C-C/操作系统/index.html","561502ab405ecabb5f187e4396790dda"],["/categories/C-C/算法设计/index.html","2981f6fad441130c2a38e2a6cd2fccfd"],["/categories/C-C/编译原理/index.html","b25c21476323fa0cd9ef5b65b1fd968f"],["/categories/C-C/软件工程/index.html","9dcf6040418fcc29ea664c7e1bc615ab"],["/categories/C-C/项目/index.html","4570f4cebd4e1bbc8d9819acef2597ac"],["/categories/Java/Android项目/index.html","fedebbfd250d3b84fed7e7f29b0fbd88"],["/categories/Java/index.html","39d9af01228bd15dc26db12f9e5d7023"],["/categories/Linux/index.html","9022691d553108501759cdc5a9820d00"],["/categories/Linux/上机实战/index.html","b521697eca4b553697c0ff2975758776"],["/categories/Linux/习题/index.html","d8ecc5614e897c20f0075eaf8d8ed100"],["/categories/Linux/拓展学习/index.html","4acfc2687172dcb89a3d383a2a8fe340"],["/categories/Python/index.html","c5fa1133aa9480fa32a9709b8950a539"],["/categories/Python/爬虫/index.html","c5989c9f8c0d51774334c5461e88577a"],["/categories/index.html","d22bfb4a0f2804e50e9c596900085a18"],["/categories/交换原理/index.html","7c0c29ba5d3534d36dd69f242b5acc35"],["/categories/交换原理/实验/index.html","879a4ac7ff4d096672541371ca90ccaf"],["/categories/其他/index.html","545c05056b6bf322f034717213ca21f0"],["/categories/大数据/index.html","53f9d71f22aaf72d04b3ac0eb0558584"],["/categories/大数据/习题/index.html","758bb45aad771370481ba62284170bf3"],["/categories/大数据/实战/index.html","1ef3e389ff1b2668e0b17d699d28e504"],["/categories/机器学习/index.html","14b3b4bcfee5bed45d506da8064e9a3c"],["/categories/机器学习/实验/index.html","51502db9446fdee8b47a5ee53cf020ea"],["/categories/机器学习/知识拓展/index.html","e8b21c453bba6b2e078600698f936ee1"],["/categories/现代交换原理/index.html","a1d0d52161d671a228fc4ca19701aaab"],["/categories/现代交换原理/习题/index.html","faa8e5dc14f1cd0b73fef1e11045b131"],["/categories/计算机系统结构/index.html","b9394a433703eb75ccb42c4305aa2d69"],["/categories/计算机系统结构/实验/index.html","11cd6e1d10a8594b1127ce221ac8bf99"],["/categories/计算机组成原理/index.html","fe1272b6d41ec57f9d0569a8ef6eb0a0"],["/categories/计算机组成原理/实验/index.html","6b9163d2985e07fc876769d46a58c862"],["/categories/计算机网络/index.html","7d00ad4aeb6a23f7509c6b4f283fa06d"],["/categories/计算机网络/实验/index.html","a5a3cff289bc63f48a0edcece3896bd5"],["/categories/集锦/Android/index.html","4edd7be326aa365f335a1203f8d177fe"],["/categories/集锦/CSAPP/index.html","5029b28aff575f52666f49b78d3963cc"],["/categories/集锦/Python/index.html","869501ecb56697e047e1a051118faafa"],["/categories/集锦/index.html","3dbd66363aa9b23b54bfaf0b73b4e118"],["/css/first.css","b6d087a1c859f2a9e183897e37ac7fd2"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/message.css","b0ce3ca232f809c8d7a85c79bf1f7ff8"],["/css/style.css","7c02d5a26902ac4da5d2d0131ed08853"],["/friends/index.html","e38a34de8a98f9526c597398d8096a5f"],["/gallery/index.html","63f4bc7639ebb10460b077618443184f"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","9ae9d023524c5fe0406910b077e2eff6"],["/js/aplayer.js","f10ee7aff4ce278045da925ac6510d29"],["/js/app.js","2fb5381b84811b7d10a6c591d3896727"],["/js/jquery.parallax.min.js","38cf4791e24aeaa8101bd2c816400718"],["/js/message.js","38da736cdf513c9a15a0a2a16a34eeae"],["/js/plugins/contributors.js","23ba3efa08d9fb1aae753ceaa6df2711"],["/js/plugins/friends.js","239cf9c648af390f866ed00cead3e23d"],["/js/plugins/sites.js","15bb31fc27abc888b17cc5d822808604"],["/js/rightMenu.js","19b2a577c30a04732f02b86bda62e0b9"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","432b92718a88756785f3b4a5279b9bdf"],["/page/2/index.html","ebb47b525305f921e2e6a6202cfddea9"],["/page/3/index.html","453ac1d921f089b0fa034b92dd5b321a"],["/page/4/index.html","905561bb9dd2ce78d7c762bf5d3c26f1"],["/page/5/index.html","32a3bd6225ded56307a4fc3dddb7c78e"],["/page/6/index.html","58d6b25ee50578950b85e602daa8749f"],["/shuoshuo/index.html","ce19a0062a8adb9cea0c8765b1e55c79"],["/sw-register.js","4603748021a259a18cadc49760ab78f4"],["/tags/AI/index.html","00dd189af1b2d635c30239f57f59b6ce"],["/tags/Android/index.html","b2ce80e39f06378bc159268ff3827be0"],["/tags/C/index.html","52900e7be8ffdb90edaf4f03e12eb96b"],["/tags/C/page/2/index.html","7aa9587c88651cd55bb762c03fa9980e"],["/tags/C99/index.html","6e363528aee41bdca2640f6e0a58fcbe"],["/tags/CSAPP/index.html","9cbcc8c03093515f9a09f614c3d6df23"],["/tags/DNN/index.html","ae03658e1ca47f5cb2a6cccc78f12937"],["/tags/DNS/index.html","550e2171e6d4faa24da7a79454b08788"],["/tags/FPGA/index.html","a737346242bedae2eea69b49effb0a30"],["/tags/HDFS/index.html","1985fc7665e9c74cd4554948af0f9067"],["/tags/Java/index.html","cf1feab7a871cafe3be6dd1b9794b636"],["/tags/JobShop/index.html","31c79d1aa45d8e6e3fa6569170c2e828"],["/tags/K-Means/index.html","c31e4e0d5435d743834b96f09f1d0978"],["/tags/Kafka/index.html","865be42ed4f27c733514d8f64e775b0a"],["/tags/LL1/index.html","0027dbf9cc248f73c9abcf1877d63486"],["/tags/LR/index.html","247977f10ae491e810b60d3016364a53"],["/tags/Linux/index.html","0a94eacc993adc5ef4d379afde6ae8d7"],["/tags/MIPS/index.html","83c3e9323dd5ae98387cca505c53d9d9"],["/tags/MOOC/index.html","de585bc1a855bba54554c5ca32f3332e"],["/tags/MPLS/index.html","160ae169db778309cd659ebf3ccc6fbe"],["/tags/MapReduce/index.html","96a5595fc45bfe6829556af5cb354230"],["/tags/Matplotlib/index.html","2f25a1bd3895a7968feb648741e43111"],["/tags/MiniSYS/index.html","a1979db7e2e16f6ba483c843b51f9111"],["/tags/Python/index.html","27e5c10832975c6998883dcbae741404"],["/tags/QT/index.html","b8898058d4eac4cc31557de8fd5b2929"],["/tags/RNN/index.html","b114bc131651b73f67660559a1d1e835"],["/tags/SIP/index.html","78e55b007302c8d0ced2b93b21017d8a"],["/tags/Scala/index.html","b494c00b9a5eab4d6e7adf7d138e119a"],["/tags/Shell/index.html","0c9da39bd4d7ab46d914c9f18f549e34"],["/tags/Spark/index.html","80585b1bcd6a9395d8f3c0e3a6000052"],["/tags/Streaming/index.html","04b8c2627c9373485f5666232f352ca2"],["/tags/Struct/index.html","7f105c84cfe733990529ca592f89cf50"],["/tags/Verilog/index.html","162e3c961943bc39a8a9f8bd621caa2f"],["/tags/first/index.html","29055c23642d1cfa831331377d4d6f73"],["/tags/iPython/index.html","ad1746cf045c47dc9c10c9eb478fe4be"],["/tags/index.html","7afa9be560b850a5dc0381edef295113"],["/tags/ls/index.html","230bcbb695b67f843177b4ca651b0ab0"],["/tags/习题/index.html","c63ec7387c103468f42ba4fe737e55bb"],["/tags/交换原理/index.html","0070228dd404a39da4dc000f685eced0"],["/tags/人工智能/index.html","2c2b60d2b10ee6c2ecf6e4b1cc88e416"],["/tags/信号量/index.html","a7ec9fb0960073e6c395f9c6a645f9a8"],["/tags/内存管理/index.html","29b7471f3bb9958d629bee40df451a92"],["/tags/决策树/index.html","b82a9d7d486052177c4ec015b81021d8"],["/tags/分治/index.html","df13ed23cbf374b8896d1806894366ff"],["/tags/分类/index.html","55a7f171fcd144dcf3b819261d7fb0bb"],["/tags/动态规划/index.html","b9c4cfbea84a44a1cae2bc796acb7867"],["/tags/华为云/index.html","a9165bc64902d5ea6385464f71de6476"],["/tags/单词计数/index.html","cbae290073a20a0ed975fe9b84bb4062"],["/tags/可视化/index.html","c29dc538b1906fd0f449f90eddc9c6f2"],["/tags/同步互斥/index.html","e772edce058a48950918c1ed23dd9697"],["/tags/大数据/index.html","e2762d5ddaab5914a28834d2f5738ae0"],["/tags/学堂在线/index.html","f94d7010d6122e8dd51dcb5d6949ec91"],["/tags/实战/index.html","c8fd5be3846c147b2245779ad1854e6b"],["/tags/实验/index.html","aae1c606ef643c6d518de7460cb826e1"],["/tags/实验/page/2/index.html","0e1a13849d8d05f7f96ad712dde8b9ce"],["/tags/小游戏/index.html","27c34ef44c814cd4589fd20dac027c7c"],["/tags/工程/index.html","363238f61221fabaff502581e13ff30c"],["/tags/工程/page/2/index.html","7488fcc6c26af6d239bc50ab5922db77"],["/tags/手写识别/index.html","6192bd10aa85fd3c41071d72455549cd"],["/tags/拓展/index.html","b1993de726ffd9c38da3e2ed92aee17c"],["/tags/操作系统/index.html","209a0a44dc37c2d283cc31d558b7b3cd"],["/tags/数据处理/index.html","9f4f96e1c70ea50601723eabcd22a24b"],["/tags/日志分析/index.html","6d6b0108806d4c03bbb45f94c45e36b9"],["/tags/易错点/index.html","91b274cda42cba8da3102ab7b9f6ad86"],["/tags/机器学习/index.html","e050e043cc88874ac67efe73eddd3fdc"],["/tags/条件熵/index.html","a009422f8a30c934c5758160c996ff07"],["/tags/正则表达式/index.html","81dff31bfd80d19c79e03bfa696aeddd"],["/tags/汇编/index.html","0cf19f7edee1a777f67bbf97555c1217"],["/tags/流计算/index.html","e9687ab351f458845013c4d657824c4b"],["/tags/爬虫/index.html","af70b065b257a8896612b3d16710237e"],["/tags/现代交换原理/index.html","aae65cd6dfa3768811814af22642f364"],["/tags/生产者消费者/index.html","1e1d53981b52a91f70a331515bc7c28a"],["/tags/知识/index.html","574cc0c4adae478adddeda1d21193a66"],["/tags/算法设计/index.html","aebc3a45010f1afa39f989f70556e356"],["/tags/线程/index.html","38ba8cc87d85f7c36eedefc8f2ded0dc"],["/tags/编译原理/index.html","3e7c46e3d17bfed568660d0872dc92ba"],["/tags/网课/index.html","18f7d92e05e7919f879a5fdd76c9790f"],["/tags/聚类/index.html","cdd16dadb88306aa698d4b453daef94f"],["/tags/脚本/index.html","bd048ba11805035f637a245e64a4aa36"],["/tags/计算机系统结构/index.html","e3f67f3941a7526b85ebed83ea2a839d"],["/tags/计算机组成原理/index.html","4b0b579a0bdc1a7d33c927f2cc71184a"],["/tags/计算机网络/index.html","a84263e6e71ba6a8e1f2b55288b44a03"],["/tags/词法分析/index.html","0b03bc64efee81b2d0dbd9945f8ee406"],["/tags/语法分析/index.html","801e5929b54887a35fbb11ed5cbe6b50"],["/tags/读者写者/index.html","62cdb41b23717cc8d3c286028c62d7f2"],["/tags/课程/index.html","68aad2282d33835414f3caca53650df5"],["/tags/起名字/index.html","73e278bebc57992373b60e82d696cb20"],["/tags/软件工程/index.html","c2b15e691d3399ead6bc9c8a20388a60"],["/tags/进程/index.html","3771e6b9a35acabe993a18aa54506f5d"],["/tags/通信/index.html","d1bff5370920cc55b4fe7df8222061fd"],["/tags/遍历目录/index.html","3c8c160740abe29111641d9b8b3c2585"],["/tags/难点/index.html","543f63a71507ad2435934217e693b055"],["/tags/项目/index.html","d2bbcf12512ef5e10c8a48201ec1d60f"]];
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
