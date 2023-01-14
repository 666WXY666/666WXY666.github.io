/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","8886b5901b45f3f7312bce483d175df3"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","065f66b5e27cb1682cdc296828f0095a"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","f44711f7f7261aec912c12c95581a898"],["/2020/03/26/计算机系统结构-实验1&2/index.html","8b5ce9e37e912966cef54e79a925081b"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","b90023d83a92d416ec17b8c1efa48c0c"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","6aec66fb207b5d334659478563229988"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","ebdd26fcea577094493e520f4e2bcc9c"],["/2020/04/18/机器学习-条件熵/index.html","cf0cdffd70443b80aacaed353d85a3ca"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","1bffd1e10c7fed38e3e9ad5bd22e533a"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","a9a3c16e2711f3834bfa4c1f9a37de3c"],["/2020/04/26/机器学习-实验-决策树/index.html","5c027c5c90cb7e67e7ef6df32dddbb05"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","e860f60218ee3655c2dfa2c528f2b800"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","d9020953f8b8566115f6360e2fa5955c"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","c899dafa5c511294224839d5fa2a6527"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","9638f7b71f71d7a882561a140f0d8711"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","a1bbdf88bd46dbca930f293d0c1373c6"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","a7f0b194fae14d3ab263c1dbf3af160c"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","1f790188d2fb9d6b2655cbbc4de2e7e2"],["/2020/06/11/机器学习-DNN-手写识别/index.html","03f6a9f3a44b85441b2ce1bd1e38345a"],["/2020/06/18/大数据-习题/index.html","570f752a54d876d1a470438082aa1780"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","a25e09193f8b27a7bb30921c56e30efd"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","773b8b6b0a04bd46a2d318186f3c19ee"],["/2020/06/24/Linux-拓展学习/index.html","5ffb2e972d512572bc8d211f2eb12196"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","936457c47aef934df315e004fdf58980"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","b8bd094d7d86a9bd5839f3639bf8f439"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","9560a485d535eac11cdcd85d77a30150"],["/2020/07/15/C和C++的struct使用总结/index.html","041151acc8faf36754d84599e16915a0"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","1291987b0cff3653dcb67721b88cf1f6"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","a4c1e0bf0fd93c7300231b9ba8c4163e"],["/2020/08/10/机器学习-实验-花卉识别/index.html","94034b4032c5becc76ee5cded74c5004"],["/2020/08/15/Python-项目集锦/index.html","385e38c3da3642059050d83a8c658f79"],["/2020/09/01/编译原理-词法分析/index.html","3bcf802a7070391f5593f7f1b6e358cf"],["/2020/09/02/编译原理-语法分析-LL1/index.html","52748499c8aaf14632241d56c6b5d9e4"],["/2020/09/02/编译原理-语法分析-LR/index.html","e79e2dad4c7cc40175a15168119b9d4e"],["/2020/09/03/操作系统-内存管理/index.html","0313e741bfd8cb685b153efaf5a8fd56"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","89d81f2fd7c82add620db2450a99f3b6"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","cea2f074c3377f5f64c53846f741cfc6"],["/2020/09/04/CSAPP-实验集锦/index.html","cf5b670a3d0a3316e59ff03c21992951"],["/2020/09/10/计算机网络-实验集锦/index.html","59273bc14b208ac3355dce719d331897"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","8395747b9fcf4ff1a63b74d03f478007"],["/2020/09/30/C++工程项目-JobShop/index.html","b0e4ee1e9a014a5e014968104e9c3b58"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","bf227d25371bc7513443dee9d403d38b"],["/2020/10/09/现代交换原理-实验1-时间表调度实验/index.html","76df2a664fce8d87e4c1ab2f13b7c77c"],["/2020/10/09/现代交换原理-实验2-摘挂机检测实验/index.html","51194fff5d14c05a2f91978e96ea1c8c"],["/2020/10/09/现代交换原理-实验4-拨打SIP电话/index.html","c2161b19454b07836a0946f33ce53bcf"],["/2021/01/04/Android-项目集锦/index.html","8bc4c7e462168dfdd0be996ad5e36ead"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","5211a15831b60f379ee15fc84e5299fc"],["/2021/01/04/C++工程项目-travel/index.html","4fc16f9eca742af28ce522070b6f9ab1"],["/2021/01/04/算法设计-分治-最接近点对/index.html","0058f6c709af997ac71a64f46374718f"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","00d727f07f6eb14ae3f729a59f36c57f"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","5a1f0dc6cd5c876e25a3a531ddc82142"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","500e715812c7d5d5e789a2b1d0b684b5"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","f5a30be3745016bc1c9ca90aa9451ce6"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","2139f5ab312d239e409ea3e788f930e2"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","5e80684de20e6b16f806bb9c0b0a289f"],["/404.html","2394b59b860bfc1b2a641e2bc2300ffb"],["/about/index.html","b38fc146147e9df2322a0b1dd6ef626d"],["/archives/2020/02/index.html","ad18de777e63113efb17240c871cd937"],["/archives/2020/03/index.html","0dd444b94cacb2752ac29a39451d7f21"],["/archives/2020/04/index.html","edf51e8597067d9357112cac0ffeb8d6"],["/archives/2020/05/index.html","0d87fc267e6afc17ddb241253e65fb48"],["/archives/2020/06/index.html","d9542bef6313d92ebac6c08e72a5d8a1"],["/archives/2020/07/index.html","874b83e97266ae497deeb4420f9c1b95"],["/archives/2020/08/index.html","4254281f78e2023d9f35ace217bebc9b"],["/archives/2020/09/index.html","5afb47446fd4344fa3898190a4f269aa"],["/archives/2020/10/index.html","ce2d2c598ab74d20df3e3cccd7b648dd"],["/archives/2020/index.html","18b0ad0031dd59cc0887151c0d980cb2"],["/archives/2020/page/2/index.html","fbf9453f9e93c4f274f88254ba702c62"],["/archives/2020/page/3/index.html","e48e405b19c3386783550d0bd66edd57"],["/archives/2020/page/4/index.html","71cd12fc124aaa1b292dc3990b1f9a27"],["/archives/2020/page/5/index.html","ec75093fb6426d442236b116544ed543"],["/archives/2021/01/index.html","595bb7cdd472e0a2691b3ea3d1241f54"],["/archives/2021/index.html","968e56ef1b489ab5afa3019d396bf204"],["/archives/index.html","e49e445da519646cc2d6ea8faf1ffd0c"],["/archives/page/2/index.html","e49e445da519646cc2d6ea8faf1ffd0c"],["/archives/page/3/index.html","e49e445da519646cc2d6ea8faf1ffd0c"],["/archives/page/4/index.html","e49e445da519646cc2d6ea8faf1ffd0c"],["/archives/page/5/index.html","e49e445da519646cc2d6ea8faf1ffd0c"],["/archives/page/6/index.html","e49e445da519646cc2d6ea8faf1ffd0c"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/bb/index.html","9fadc8f326f929d644351dc4202686b5"],["/categories/C-C/index.html","e040b2133b6b7f2369cbc7fd55452dac"],["/categories/C-C/page/2/index.html","7de08e47edbd0364b48b469795dfcfc7"],["/categories/C-C/拓展学习/index.html","a9d42f85f102d8fc87e4fd9137bee3bb"],["/categories/C-C/操作系统/index.html","c96c8fa507d83002bd83cdaf5255b4e7"],["/categories/C-C/算法设计/index.html","232666983a7bc26b38e18bfb88898455"],["/categories/C-C/编译原理/index.html","b94ba5efc7bed3e628dc432ef8676eb3"],["/categories/C-C/软件工程/index.html","c5991e79b05e8f220524ed242bfbabe1"],["/categories/C-C/项目/index.html","3dfc8f119d7f1bab62f354470d38a5b6"],["/categories/Java/Android项目/index.html","4ddbc331e08d54c38ca14991ebfd3ee7"],["/categories/Java/index.html","9ec6218975dedf0efb29499305e6176c"],["/categories/Linux/index.html","49abdebcc08f9f1bb53e93fc5a72513d"],["/categories/Linux/上机实战/index.html","0cfa73715e1b182e29a433940868ac27"],["/categories/Linux/习题/index.html","2264d804e76801b7f9357f21fa2515c5"],["/categories/Linux/拓展学习/index.html","d81b8222d48db5c25408d4d17cf15be3"],["/categories/Python/index.html","9da4e3f0ef3bc5f383283836a7e244fd"],["/categories/Python/爬虫/index.html","c66c501b7eb5cb09795214fe8793db75"],["/categories/index.html","7973a0e2e46d5724998f1e51b8371816"],["/categories/其他/index.html","830b8f383d550d8c5aaef75f517ddf18"],["/categories/大数据/index.html","17989d369567bdc002544b681ed90e77"],["/categories/大数据/习题/index.html","800eeea77396980c6a711b1072989976"],["/categories/大数据/实战/index.html","088d397d8bc45b843d060d32947a3005"],["/categories/机器学习/index.html","df93c3915f04a864e811b738c1e1505c"],["/categories/机器学习/实验/index.html","935763d96c291b83543cfb1703b40a04"],["/categories/现代交换原理/index.html","5780bb0bb5985810b7dfc593af44d8f2"],["/categories/现代交换原理/习题/index.html","05fb590974f2a29465979cbda7ba5277"],["/categories/现代交换原理/实验/index.html","3dff9c8a22c953bb9e475dfe4d198e38"],["/categories/计算机系统结构/index.html","ab54b00dd9ccfa00cf1704de1ba4c264"],["/categories/计算机系统结构/实验/index.html","5421e6b363c4d53f6c5df86ae5df4f52"],["/categories/计算机组成原理/index.html","e2082ff0d4dcb8b9b4433bbf171f3d35"],["/categories/计算机组成原理/实验/index.html","3500cefc58a63a8242cf30d6f24de33e"],["/categories/计算机网络/index.html","4675c916ead1448362463dabc01115af"],["/categories/计算机网络/实验/index.html","9ebc6f68aa789b80c1a3fecc2b683533"],["/categories/集锦/Android/index.html","c4a738cdf278e27a815c543250aa4e57"],["/categories/集锦/CSAPP/index.html","0b94f9395de20047bdf9836385a4eb1c"],["/categories/集锦/Python/index.html","0845bcdc02e6aaeb722a0577bd554c67"],["/categories/集锦/index.html","93426a65123f485d155e93910bec5f86"],["/color/index.html","3f627143356419f7f54e1443b3536f0d"],["/css/first.css","ea01aa1635810499a5ade558f4f81d56"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/style.css","4b6ce514c846132c606ce76da7e1c124"],["/friends/index.html","eac3a1eab91c2b769f7396388c2ce8c6"],["/gallery/index.html","cac0a9f9094373909cca2398b08a7aa4"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/periodic-table/index.html","4c31220b3c8c1d35b1128df43b2c9dc3"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","12def3e20ab01ba93b6a2c70562b7cbd"],["/js/aplayer.js","6e605f0855251e101d3024646f3eac60"],["/js/app.js","1948329f2fd7e750ade4bdc49138c09b"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","9b5722276fa8f75b58d93e3a37a73178"],["/page/2/index.html","6d62d490a92ff025f9157735c88d209b"],["/page/3/index.html","b9c38e64a13abf940bc8c2acff1159d8"],["/page/4/index.html","85e618da882dde846e9b0775bf8098e3"],["/page/5/index.html","ffde00120d8855d03f3fe85297f72846"],["/page/6/index.html","d63a5272e88df5a802d8df3e05220b28"],["/shuoshuo/index.html","b455f99c8b90b6e0dd62808a0baeb2a3"],["/sw-register.js","c4c6cb7f8e2fbf9d34f7b8df6abbc0b5"],["/tags/Android/index.html","c85bbdfb806003c1cbc6344007459b1b"],["/tags/C/index.html","145606ea65200cc40a647029017bc828"],["/tags/C/page/2/index.html","42b0ef8cb087d1cfaa724024bbafdba7"],["/tags/CSAPP/index.html","c1e8cfd3c7f0d7573685321a2c4abe22"],["/tags/DNN/index.html","f141316423f1a43c095bd52f650e3882"],["/tags/DNS/index.html","ba0de1b8708b4e6e144e40bc291a0771"],["/tags/FPGA/index.html","160b8f7471d2a5af26eecca9432b8123"],["/tags/HDFS/index.html","a184a74107bebcc7a71f9962ac089e96"],["/tags/Java/index.html","4e0e28ff663078f948c49ecac038dfe5"],["/tags/JobShop/index.html","2eff6c46492730ea7662592169899bf3"],["/tags/K-Means/index.html","7a8a184a5990aeeaa8c3693f408869b2"],["/tags/Kafka/index.html","7c135e62d99b3dff8192fa1ec1fc9f1a"],["/tags/Linux/index.html","e4a5d2d983fa66cb5ea3011a044a771b"],["/tags/MIPS/index.html","ced0d09cf342e1897671218090679ff7"],["/tags/MOOC/index.html","882c0f0151b233714e78c903e8fdd1a6"],["/tags/MPLS/index.html","4b4be32c121abae270d6cb2e8eb69a8a"],["/tags/MapReduce/index.html","aeda08fa4272d72cf63647d5148d8ecb"],["/tags/Matplotlib/index.html","7ca7372732b1787e3a0dbf1f11b29a87"],["/tags/MiniSYS/index.html","fc3e41b0f0f07667ffd3e31ada4b4f78"],["/tags/Python/index.html","8349374095391d5655726f04ddfee788"],["/tags/QT/index.html","c3e01d9064a57051e4461ce42e3e6a0c"],["/tags/RNN/index.html","330f6308a080a3db846702b60d8e26ae"],["/tags/SIP/index.html","4a879224fadf213c5da138c747f31317"],["/tags/Scala/index.html","2a879b459ecb7991b6a26d9779848478"],["/tags/Shell/index.html","d1fa62ed0ae68e1aa51d5253918f4855"],["/tags/Spark/index.html","cfa7be349d61fbeea13eaf5b896912d8"],["/tags/Streaming/index.html","8c512a1a7037edd4155a99d219221b23"],["/tags/Verilog/index.html","ddfabfcb8424b62e4bb8c57ed36e5516"],["/tags/first/index.html","1bb7e5a32112f35b28d93490f6558dda"],["/tags/index.html","90e97139eee5c946ad0964c41225d305"],["/tags/习题/index.html","d20937e1fd134d2c101852aa37e5e732"],["/tags/决策树/index.html","e8866eb71e67fae304e8c76d34817794"],["/tags/分治/index.html","a4b29424e478a544da3b6178a784bf7d"],["/tags/分类/index.html","b56fa483095003f441562efffbfedbb3"],["/tags/动态规划/index.html","bd2fd6ed5e46df2d1c3338d15dfc8291"],["/tags/华为云/index.html","048d0a92c008f0f66016697811638427"],["/tags/同步互斥/index.html","0ff3c67bb800264ef1ad2ca591f8428b"],["/tags/大数据/index.html","c67bb9902de490acae145b9ef39f5411"],["/tags/实验/index.html","15ae60ae89d3b0bf3d356e61260cc98b"],["/tags/小游戏/index.html","fae63e2c8ed0c773d84d7f13d23d3a98"],["/tags/操作系统/index.html","64dbd13bc60b43337a5cbe5cfb18f228"],["/tags/日志/index.html","7b8315be20f24da01c2b09f1ac3ec336"],["/tags/易错点/index.html","7283f6eb43dfeb565a922888cc1b09e5"],["/tags/机器学习/index.html","45ce59088c2309af8e895ddaf480814f"],["/tags/正则表达式/index.html","446f5691361680d7a64fc679d829ce54"],["/tags/汇编/index.html","d907f75aa4f4d477ccd5985388008522"],["/tags/流计算/index.html","61650ff76bbbb2588f5926cb12bfb827"],["/tags/爬虫/index.html","58ffeeee7ca0aefbf6049bc3d5669222"],["/tags/现代交换原理/index.html","0045d34ced2fff6d94ea1be35e559172"],["/tags/生产者消费者/index.html","8ff4dffffd0a56cb0d5f20d6024e999a"],["/tags/算法设计/index.html","65453c4916f390eb6a772dc5584b77a2"],["/tags/线程/index.html","b5f301db6dc516674b88a48fd5958da2"],["/tags/编译原理/index.html","ff1eac7e613d282ef5310f4c37ad4f90"],["/tags/网课/index.html","a3c6c57f7cb849e3a8feba161d1718c0"],["/tags/聚类/index.html","f32af414a4736314bdebe1884f37d12c"],["/tags/计算机系统结构/index.html","4be0958ae5a85efac6b85b4e1d00743a"],["/tags/计算机组成原理/index.html","3dadc78a376befc7db8a372690e06888"],["/tags/计算机网络/index.html","c49b13693ff850d9da5808c25e796502"],["/tags/词法分析/index.html","7da4c136273b713b640b366b3cf91ddc"],["/tags/语法分析/index.html","412079a0ae7061c3bc2adfffb05c4d61"],["/tags/读者写者/index.html","d595c947d4071790afdf9431c65fbfd9"],["/tags/软件工程/index.html","5e1a26c43d26e059418a069791bff58e"],["/tags/进程/index.html","f652af21ccf204f4ede264e55b665183"],["/tags/难点/index.html","92bdefa67f37eb1e5e87749ba612de66"],["/tags/集锦/index.html","15901d78b5e375ab51204fcafcac828a"]];
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
