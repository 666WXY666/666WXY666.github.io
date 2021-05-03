/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","c26148a3ae0c3cfcf005870c2807d9f4"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","525cea50641b672189c035dfcf076c1d"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","334d96c6b504c2bdfec568fec87a6827"],["/2020/03/26/计算机系统结构-实验1和2-遇到的问题/index.html","3cee65d85b938f72d71782fab2391611"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","789399bb347ef9a6b63438c80f302e7a"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","dca144f0d0fd5cdeebd15613f9d599c5"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","0c5facf46fd744b89f1939781a6e5d1f"],["/2020/04/18/机器学习-知识拓展-条件熵/index.html","3a426a4ec3bdf542e801fbee5e088dd0"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","58b38a2f804692cc6b9f08b5a1d5f5f5"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","3070924fc9515f41af558e03087b99de"],["/2020/04/26/机器学习-实验-决策树/index.html","55a43fd07ebd38541af6ef4665cba2df"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","ac630933c6df4b4038ded1de0357f0b8"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","a4de9441a0fd3095884fff8c11a58a58"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","2e96c55927dc960bb4b8fa8ff1b03dd2"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","f8bb7d7cc2b50d41fa6f9992c19a3912"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","d335377ecdb40b414d11cbb1e070436d"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","fcd6616bfed39924821eca70b6a3371e"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","2bfde7d05b84f1d0a9241b960d3bcb98"],["/2020/06/11/机器学习-实验-DNN-手写识别/index.html","6680f3acef0c202f93b6f7cb5419082f"],["/2020/06/18/大数据-习题/index.html","2d8d81c9b09c083fdf6175595acb8cdf"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","1460ce5e939726667d4a92b06ec53308"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","d9bbe3489833aba424a9ff90dfb0e67a"],["/2020/06/24/Linux-拓展学习/index.html","a71b86a24c93f4c1b5db4af8175a4975"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","93a43397bc4a4967b67d79d6acf380ca"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","dad693198cecca995fc3c1e50259113b"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","f84a98554610e6302d55aa20c9b17d0f"],["/2020/07/15/C和C++的struct使用总结/index.html","29340ecb4379763718b77faa40aa69ed"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","94807a98992aa87505165227ed366641"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","638f2e6bde102d35f38a8e2f95c8b25d"],["/2020/08/10/机器学习-实验-花卉识别/index.html","0a8be6660888020518a15d46584b8b24"],["/2020/08/15/Python-项目集锦/index.html","cf6e09511a173c6aef933930420e16f1"],["/2020/09/01/编译原理-词法分析/index.html","98b5dcd88817ea3b64cdbb103d708c12"],["/2020/09/02/编译原理-语法分析-LL1/index.html","29111e865baa450ba1f0ec6da0448c26"],["/2020/09/02/编译原理-语法分析-LR/index.html","fdb2682d028f2d6b5c281bb5ef485210"],["/2020/09/03/操作系统-内存管理/index.html","9ba10d8ea788b2b90996271c00f54396"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","3ac2845c960b3ccd827aa7c2d0abba83"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","c59a42d64aa181bf0fafd5e7cdbe1fdd"],["/2020/09/04/CSAPP-实验集锦/index.html","17ab451d5137adea0a12df9a0cfa3a84"],["/2020/09/10/计算机网络-实验集锦/index.html","4bf4e1879f712c8c87bb8dfd40ea6a29"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","23e2959bdc1e98666c26086e5b6c2fbc"],["/2020/09/30/C++工程项目-JobShop/index.html","2da9ad42364a1dd863b4c0b9156605de"],["/2020/10/09/交换原理-实验1-时间表调度实验/index.html","45e1a44801290cab2462b7469fb5a63d"],["/2020/10/09/交换原理-实验2-摘挂机检测实验/index.html","064b595c34fd35aa248d557643b90e06"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","412acb821659c15f9161d82168c804fd"],["/2020/10/09/交换原理-实验4-拨打SIP电话/index.html","68c13f1baf6211555db9bc697d472721"],["/2021/01/04/Android-项目集锦/index.html","250f561a775c98ed1476a737611073e2"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","b17368d5acc1b95494a51551d76678a7"],["/2021/01/04/C++工程项目-travel/index.html","fac2765171f4df318af4eb0a363da9d4"],["/2021/01/04/算法设计-分治-最接近点对/index.html","a6827884da9a78cdd65e62c8ea883fd8"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","049d70d47f371d3c0efe4b7b8bb8bc29"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","bd35abca82baf8db13d26a7822d27de1"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","635957454bf6c4c46921f11dcede6632"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","a4749154f36811e68ec1cd1370b7b650"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","2710251d7b1fe0c48641b7dbf23de8eb"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","f3158e047464a55a74b04d283e74ec76"],["/404.html","59bbfffc149812452e854a9c18db92bb"],["/about/index.html","7cd44f7233848036d62db663ae13d4b4"],["/archives/2020/02/index.html","7d4236519cd3a8155d7b93d60b181680"],["/archives/2020/03/index.html","084e2d1f3a01cf9e66348a7739747800"],["/archives/2020/04/index.html","d68c090a4c1e6faa1f565548a105e10d"],["/archives/2020/05/index.html","a2f6707114b34893d40ff90ca0519588"],["/archives/2020/06/index.html","3ec12d98d5b57eb4747316d0cc6477b7"],["/archives/2020/07/index.html","24a3c2b17f2ac64301bf719440192c93"],["/archives/2020/08/index.html","d59f41898c0b2e85e8be59080746da9b"],["/archives/2020/09/index.html","2510558abe1c9173ed15138b217b1256"],["/archives/2020/10/index.html","95debc7c79a39c8d69db7ce82a536931"],["/archives/2020/index.html","cb16145fa84dfd25f5c7c64fccf318c9"],["/archives/2020/page/2/index.html","b5ea7ac2bca485f9e1e7c97cbb1828d7"],["/archives/2020/page/3/index.html","6f519b0b4dfd03627aa98143518259c9"],["/archives/2020/page/4/index.html","de8aedfe730dea66dab16e642943d22d"],["/archives/2020/page/5/index.html","996167c1f9f137c38354c96c30a60974"],["/archives/2021/01/index.html","5c302710e6e69f9d41d44cb93dacb1fe"],["/archives/2021/index.html","e78b3ce0b878636e8babfecf63a059a0"],["/archives/index.html","d4e63c753fd5725fbda82afb2135f1ac"],["/archives/page/2/index.html","40f19c57fb90a3533f8b4290f7f51e3e"],["/archives/page/3/index.html","40f19c57fb90a3533f8b4290f7f51e3e"],["/archives/page/4/index.html","40f19c57fb90a3533f8b4290f7f51e3e"],["/archives/page/5/index.html","40f19c57fb90a3533f8b4290f7f51e3e"],["/archives/page/6/index.html","40f19c57fb90a3533f8b4290f7f51e3e"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/bb/index.html","26dfdaa0000c8fbaf357dc4adddd05a7"],["/categories/C-C/index.html","7a796b1d4a1a7a72d5346e01a7047d71"],["/categories/C-C/page/2/index.html","c99632faaa4cbc65c6c4ba7411d52c85"],["/categories/C-C/拓展学习/index.html","99194e92ecd633feb5ec816b8a199f41"],["/categories/C-C/操作系统/index.html","a38481f959b0cab08ade1ea04190c3d9"],["/categories/C-C/算法设计/index.html","58876fe7120ca314c8388ee29097b2da"],["/categories/C-C/编译原理/index.html","33e35988157dee7b2ce6dd90869f2f82"],["/categories/C-C/软件工程/index.html","57961f441f7d6b7b2f3488f7a8640d6c"],["/categories/C-C/项目/index.html","e9c5cf2fb1b811c07a1d8cd75948077a"],["/categories/Java/Android项目/index.html","21f62982be1c91665c02a67399fac940"],["/categories/Java/index.html","9fc81dc8ff7b1c0c3a3a9f7a23718687"],["/categories/Linux/index.html","11fe5a7c7cefd836014ec0e5d1b406be"],["/categories/Linux/上机实战/index.html","437bd58cad0e5dadd8b7a23e05577aab"],["/categories/Linux/习题/index.html","c40444a58701bea4a9609831498a27fc"],["/categories/Linux/拓展学习/index.html","fb827a01627658449a6a0729679d3872"],["/categories/Python/index.html","fde5cb3746499c4df513f1585ec6a542"],["/categories/Python/爬虫/index.html","21f08e79e9ae5af3948f24e5cf15140f"],["/categories/index.html","fdbe83583f8e62a7fa193db52295323c"],["/categories/交换原理/index.html","f090c9cc0f4ef825b83de8c1766e0092"],["/categories/交换原理/实验/index.html","117fe1efb98301f2fb90d99d58d3197b"],["/categories/其他/index.html","061a627ad538f8e29db14af9c4a29cac"],["/categories/大数据/index.html","5368148d48ffd610338d26547400eecb"],["/categories/大数据/习题/index.html","caea5e22a1398d2dfc723b5faef9afe5"],["/categories/大数据/实战/index.html","a00db64bb2a05c6fd888d2a8cfcf3451"],["/categories/机器学习/index.html","7d0d5cbe765cf525231341244630302f"],["/categories/机器学习/实验/index.html","349e45f256e78f8f554472857f1eac3b"],["/categories/机器学习/知识拓展/index.html","ac52dbc73f508af43834851f32c24e2b"],["/categories/现代交换原理/index.html","1319e705ac5616eaa3cfe7ecbc54ecda"],["/categories/现代交换原理/习题/index.html","49434a26581e41f0fe57dcc8fd515e6e"],["/categories/计算机系统结构/index.html","e316b2a85b10ff65799097b4eed6cb32"],["/categories/计算机系统结构/实验/index.html","b97b9cacb2a4f189e25c061e89cab209"],["/categories/计算机组成原理/index.html","12375885b36632a5a6738203c3637a36"],["/categories/计算机组成原理/实验/index.html","716d22ba26e90df6adcc9f503a5d2dbb"],["/categories/计算机网络/index.html","6cc520c4f4f1d01c537439f9acab8664"],["/categories/计算机网络/实验/index.html","f33ef4b58429c136c467e2c6d0873d92"],["/categories/集锦/Android/index.html","74ce528653d6c9e12a7a206c4d157ee5"],["/categories/集锦/CSAPP/index.html","59c01e60f670e96938110b078bbf124c"],["/categories/集锦/Python/index.html","41d41bbba63244b7d27b6d968bb0004d"],["/categories/集锦/index.html","542deee27fc6932ff2269180faa29970"],["/css/first.css","ac2d0010102d22ded3aa536d16e52b73"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/message.css","b0ce3ca232f809c8d7a85c79bf1f7ff8"],["/css/style.css","f33cadc59019a1af1d898b222bf512f6"],["/friends/index.html","98fbe135812aeef450807c708d8fce29"],["/gallery/index.html","63f4bc7639ebb10460b077618443184f"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","ab5e056dd1d3f66058158846f7c2f1c5"],["/js/aplayer.js","f10ee7aff4ce278045da925ac6510d29"],["/js/app.js","d14976ee97145aa14568c13c6554dcc4"],["/js/jquery.parallax.min.js","38cf4791e24aeaa8101bd2c816400718"],["/js/message.js","38da736cdf513c9a15a0a2a16a34eeae"],["/js/plugins/contributors.js","23ba3efa08d9fb1aae753ceaa6df2711"],["/js/plugins/friends.js","239cf9c648af390f866ed00cead3e23d"],["/js/plugins/sites.js","15bb31fc27abc888b17cc5d822808604"],["/js/rightMenu.js","19b2a577c30a04732f02b86bda62e0b9"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","9e4e3077d495b921090ac6a82ac408f9"],["/page/2/index.html","0ae72676a9bb1f45831becc42b1988db"],["/page/3/index.html","4e95e85685f8f82c3e23e962707f26d1"],["/page/4/index.html","bb244c2703d31b690fd6db6694211f86"],["/page/5/index.html","68775cc19b195e468a746c670c4e7098"],["/page/6/index.html","8b85590bbfd9d39c83b593c99fd68c8e"],["/shuoshuo/index.html","3e8be994ed99870eccc98f492584cf79"],["/sw-register.js","96a7e26936ac7b1f0a0fc2f5155c1962"],["/tags/AI/index.html","2c9922da8273c9bdc0dcbd394779277f"],["/tags/Android/index.html","1865ce57058cc9fba655f6915b0c17ea"],["/tags/C/index.html","c629a07e863ad2a1c4bf1b99d22b8c11"],["/tags/C/page/2/index.html","41696265e1edc09204547f98ec2df1a3"],["/tags/C99/index.html","3b2ae2105c93d08adf273c67120a6890"],["/tags/CSAPP/index.html","06df3780f1b4a19d01bc2e43c03ca0b9"],["/tags/DNN/index.html","d3beb7def5332bca65a08ed4c11e1db7"],["/tags/DNS/index.html","c8803bb02a2229f6e68088cc1efb8e82"],["/tags/FPGA/index.html","8e5889c6f54188cf8ddd4b0bda07c893"],["/tags/HDFS/index.html","023396393dd8ba11cf3fbfdaa376dcca"],["/tags/Java/index.html","661416c1101072e8676f25235bda0ee9"],["/tags/JobShop/index.html","9ab69ad1e5448ce2f2e5b3fd13f8cef7"],["/tags/K-Means/index.html","687fdc1a31ed7c65d90f8f7e0963d826"],["/tags/Kafka/index.html","5e2e238d0d9ceb0013ce707576035797"],["/tags/LL1/index.html","d794a916259e358100960cdc02e6c4f8"],["/tags/LR/index.html","95fac3c51dfc10957c14931f874ed4da"],["/tags/Linux/index.html","0eedb597c845380e88868e32fab34f3b"],["/tags/MIPS/index.html","1a3910ef1415431a23dfb038e31e1215"],["/tags/MOOC/index.html","e03229e0b7379ccb8f450d798edacb49"],["/tags/MPLS/index.html","c329086c48c8276a97ce48d1882c7c95"],["/tags/MapReduce/index.html","947e1f8f7851e86c4cede5c1a9145301"],["/tags/Matplotlib/index.html","1fe601ca0b1101ad666dac5c5813f316"],["/tags/MiniSYS/index.html","0f77017b14678225dbc200873841a9f5"],["/tags/Python/index.html","6543659869401b4ec19e4cfcff7f09d3"],["/tags/QT/index.html","395a3878b24f1b28cece10a1a806548d"],["/tags/RNN/index.html","26b45019124f2f00d6437fc809b4b800"],["/tags/SIP/index.html","58e474ebb38a0b8f1d1eafba5607713b"],["/tags/Scala/index.html","e6c80cdc31b54adbfadb10c26bd52518"],["/tags/Shell/index.html","c6ea70f597273f02c659409b03b116b2"],["/tags/Spark/index.html","faa3d3bc5c6e32b9f658086e23382b19"],["/tags/Streaming/index.html","5180da64656e1bf574f24b7cb484934c"],["/tags/Struct/index.html","5469e772a76b842af297cb5886737ffa"],["/tags/Verilog/index.html","ad30a9beed082bb2595f37cd6c51ca30"],["/tags/first/index.html","3c10b4fd22c7f68fdd5f7a023c33258f"],["/tags/iPython/index.html","ee5c2abbebc26fcd5b041bf60295d193"],["/tags/index.html","6fc87acebf9c9c75e3ce5c3455124918"],["/tags/ls/index.html","85e52753ff188d0662d19aba32fdfa96"],["/tags/习题/index.html","9549aab1c9a1e0d9cc863325b72d5138"],["/tags/交换原理/index.html","8319ab93cf01a5cf5810137048516edb"],["/tags/人工智能/index.html","22a9d353382aafa2dc5e1d723afdcf3f"],["/tags/信号量/index.html","73ea39d33d602455c1e42b5d632f5812"],["/tags/内存管理/index.html","6f28489c0a899ae77e169aed22a2d022"],["/tags/决策树/index.html","22d7c4f8815913e0a438e213f44e3980"],["/tags/分治/index.html","4c6173d92ba2ed051ef8b220a3833628"],["/tags/分类/index.html","5868b6fa03fd55e4f079bbcabd43b79d"],["/tags/动态规划/index.html","31aefaa5c48f71cd3d61de2970ec86e3"],["/tags/华为云/index.html","4d3143bbf3dfa7ba2a7857ac2f26a325"],["/tags/单词计数/index.html","7d0b3b384dca181e773aca3d6f3f3ac1"],["/tags/可视化/index.html","e8618b17f01e29088277860b57ce39a6"],["/tags/同步互斥/index.html","7c60354031be4ee59f3408d2159f6630"],["/tags/大数据/index.html","8ad4610f97f11ba38077c03ec5ee249a"],["/tags/学堂在线/index.html","31b62ae6b9fc65ccc0992ab257fe3af5"],["/tags/实战/index.html","014bc0da92128e7f9e40c1ff411f251e"],["/tags/实验/index.html","eeea81310ebc4e2322ecb64a72468f9c"],["/tags/实验/page/2/index.html","c8f09002463be2df85e71041fe07a846"],["/tags/小游戏/index.html","2f5754430fe640b4f83d3c50e726c3d7"],["/tags/工程/index.html","c0631f4795a31412dfcd220b5118c5b9"],["/tags/工程/page/2/index.html","75b320e54f3c361a34a6807f775dab8e"],["/tags/手写识别/index.html","881c398eb7f912b4e63c86624faf56c8"],["/tags/拓展/index.html","0c4ffdfc1083d12b70b3dec264cfeece"],["/tags/操作系统/index.html","4a92cd5b957424b217e7a9d89e4db8a8"],["/tags/数据处理/index.html","dc07377d58265cc0710dbce86c410b5f"],["/tags/日志分析/index.html","ee02b7d8b4bd87eb588225309cff8f7f"],["/tags/易错点/index.html","531f41e70f0ccfc3baf6a218982b8721"],["/tags/机器学习/index.html","063e35314730c0b6867ef8c9e3658dcf"],["/tags/条件熵/index.html","3e99f83799ac192f8ab508882047f6c2"],["/tags/正则表达式/index.html","d5f896382c08d36648256ff5dd4a81d4"],["/tags/汇编/index.html","77bcc71ce58cf5aca9b87b3726dd1705"],["/tags/流计算/index.html","a14b3752d0d3f4e7135100f61bee0f05"],["/tags/爬虫/index.html","9347ac41f364efd7b00002dbbed65414"],["/tags/现代交换原理/index.html","6a22ef7561c8a3df4ec479d3b99ffb5a"],["/tags/生产者消费者/index.html","59dbb99bd6cc773d4e040ec759b5c581"],["/tags/知识/index.html","4049a2adab5b178faac5529b88d223eb"],["/tags/算法设计/index.html","2f5b668dcbb62cc1de66c18c11fa6ca9"],["/tags/线程/index.html","9302a5d045bdc8e5d8b7d6ce18b4edfa"],["/tags/编译原理/index.html","6b2684819568bd7cb12976ca22c6bf03"],["/tags/网课/index.html","455a5335f449380df5ebe65c1dfcd5e3"],["/tags/聚类/index.html","5f1329023c2540898ce4b1d11e2c4847"],["/tags/脚本/index.html","9d242e7285b0bc4447d4fe8e5d6cffbc"],["/tags/计算机系统结构/index.html","6751317fe3c0f43877541b3468959bf7"],["/tags/计算机组成原理/index.html","b49b576542cc0691d2dc1d68c394fee0"],["/tags/计算机网络/index.html","c8d509702d7ddbeb800edbdbb40f3823"],["/tags/词法分析/index.html","a70eadcb92534f8194ea6c943c119a22"],["/tags/语法分析/index.html","8ba38a1ea52a6816d6eec6da6475041c"],["/tags/读者写者/index.html","ae788ddc5e77376c516b7bd74b9d2e23"],["/tags/课程/index.html","36ed12184a68a00a12c47fbc99e96adb"],["/tags/起名字/index.html","c62eac4453e431f5bc3fbecef853b0fb"],["/tags/软件工程/index.html","87304c35130b6008aa9ab156136a73df"],["/tags/进程/index.html","9d80ee52c20320c1b54425d49f8f4ada"],["/tags/通信/index.html","a1330bb0bfbce1b440811d8a03ab27d3"],["/tags/遍历目录/index.html","a5bd1e86aeb88861c9cb9adf535ee3ff"],["/tags/难点/index.html","e8c0ed7983a9b73c3ef1057f98b15301"],["/tags/项目/index.html","14de19c0ed015d60354671499e6fe3d0"]];
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
