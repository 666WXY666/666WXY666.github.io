/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","7dbc4eeb744d50bde88c69d879909795"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","5a1d35628bd01a308bd079d43b78068d"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","1a2b284a4831d2d6d4c7cac531f9563f"],["/2020/03/26/计算机系统结构-实验1和2-遇到的问题/index.html","2e80f51e1a5227dc6496c82f2b296d23"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","51d83d6330c32462d711dbc98643e62e"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","881b49e5ff8275e87f134e0a2524deef"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","790638cff5a6fc2f7a64de469d7a0232"],["/2020/04/18/机器学习-知识拓展-条件熵/index.html","3e188aa309ba9e3b8330a984d171fa36"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","61c4ad62fe77fd95251b53d992f7d79e"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","22997f01210dfd412a08f00cac1f911b"],["/2020/04/26/机器学习-实验-决策树/index.html","9638dae09d689a018c08d7ce1a9c83af"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","241c00acbf7f8e633cff621dff0ead1f"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","1081efdfdc72f4e717cdb5fb44f4e450"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","e2a6505302bba4790b288a2abfdae9ed"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","c6e1e64c959b8c77ccaabc77fc4449b4"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","13e7744dc695b19f422b0f116bc5c120"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","83ace92b931c2c500c8823f1b4e4735b"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","08f0ad2fc797b796dc08b74b07ef2071"],["/2020/06/11/机器学习-实验-DNN-手写识别/index.html","5806be5e5108ada218577e459f3990ba"],["/2020/06/18/大数据-习题/index.html","2728e7ba51018acb478fc68d930f793e"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","106cd20a9ae399183ff61ac3b4a3a47f"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","98bc0c6f9121117f7f3a0168f4768a1b"],["/2020/06/24/Linux-拓展学习/index.html","91ef42e7546e6492a8f22857339fb56c"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","c2947e3dcba0fac9cf9e2e4451692013"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","3b1c9db237ebef653b9a039286d0396a"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","0854e2dfb53bdff9705f99d307775a93"],["/2020/07/15/C和C++的struct使用总结/index.html","741ff639c029b807fb6ba22f87b2f27c"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","b12f75f2618c8fc0a2a512c4d989bb22"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","44d99a58205d80fcd30210c30fd4317a"],["/2020/08/10/机器学习-实验-花卉识别/index.html","10969e9222699f4bb9cc67a8125641ef"],["/2020/08/15/Python-项目集锦/index.html","0db55996b90edf02af8877df32956eba"],["/2020/09/01/编译原理-词法分析/index.html","aa47926d59e464a8c97f3cec18340b22"],["/2020/09/02/编译原理-语法分析-LL1/index.html","733b105dd7fe9b17ac2fea3bf84df542"],["/2020/09/02/编译原理-语法分析-LR/index.html","066e37c1a1ade2731ea2ab53b28dc98c"],["/2020/09/03/操作系统-内存管理/index.html","435491a74a236a7f27853fd82d090c14"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","ad5b321a8e9049a6a9af49294ac16562"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","48dd56d824e9809425165171af8067e4"],["/2020/09/04/CSAPP-实验集锦/index.html","27879b35ac54e62bf70bdec49ceea471"],["/2020/09/10/计算机网络-实验集锦/index.html","9952dcb196e8a9a0784b469d390da5e4"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","40f1cb0e143b18496b1d1ab87577080e"],["/2020/09/30/C++工程项目-JobShop/index.html","cfad7ef46cf99e1a18e905a9beddf319"],["/2020/10/09/交换原理-实验1-时间表调度实验/index.html","571c1ae0c920d67a41051010d96f4dad"],["/2020/10/09/交换原理-实验2-摘挂机检测实验/index.html","e114b712f0fcfb511ca8102d4d498cf4"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","eddced7e1a9e005af3dafcc441c239c3"],["/2020/10/09/交换原理-实验4-拨打SIP电话/index.html","e3f5cc8ea92fda4390667d4263b307c0"],["/2021/01/04/Android-项目集锦/index.html","e284b1eb529d1d76e12dd7a731146815"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","cd4128364a90709796a556e2edeb87b4"],["/2021/01/04/C++工程项目-travel/index.html","7de00bd51d7bde45c730bbbd0f428943"],["/2021/01/04/算法设计-分治-最接近点对/index.html","04b25e40116df1dbd68df0573b83bedd"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","a27d2a54b82acc0dd3efdaa4022a3af3"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","0b7f9c44580517cb1546f726925e86b6"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","824af11415cd65c883fe67143974b7d6"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","ca7367c25a9b0443882a757509e25284"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","0bf973df6d392fe32b0821b6f74fdf4a"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","bd8212cc967d2fa5177e93f82c9598b8"],["/404.html","2037421afd9bd6df60b1aff190217c94"],["/about/index.html","505dcd636b2ba668b3bcd1be0c6f6056"],["/archives/2020/02/index.html","8c42d57bf4ee9956d64cab8f406769c3"],["/archives/2020/03/index.html","3eec16ad5d7fa6e7ef8c8093d347d1f2"],["/archives/2020/04/index.html","e33f49eeb3925292bc2ed09c2594ca90"],["/archives/2020/05/index.html","2819efdff462ef1550230381349689d1"],["/archives/2020/06/index.html","e6f958cdd78f410661db3cb5d71ba4bd"],["/archives/2020/07/index.html","c3b599c8fd065be423aa3dc174a5ffa8"],["/archives/2020/08/index.html","2f4b60423683df02eede4bf788cdd454"],["/archives/2020/09/index.html","a8fbc02ca567e72d4bb91f6bf09b5f9c"],["/archives/2020/10/index.html","f37f3f2d628f46b819bf85874459e8e3"],["/archives/2020/index.html","5ff9098c709fc7325c09b6db56b909d1"],["/archives/2020/page/2/index.html","5462febaf3364f46c60dcb9607e40e72"],["/archives/2020/page/3/index.html","c6175e1d79c90ebe540b8f0e6c3e7fb0"],["/archives/2020/page/4/index.html","37193ac392acfc47e63dd60c6e3d85d6"],["/archives/2020/page/5/index.html","f04bc636e59ce94ca3e6115973fbfdf7"],["/archives/2021/01/index.html","65e4db3bc9c34fba25dc0838c531fb64"],["/archives/2021/index.html","a95c8f67253c8d2227b33de702318189"],["/archives/index.html","b0a8d0cd7837f2e861b44a66c5a07f53"],["/archives/page/2/index.html","6d16eb55be0bfed996956fb840f4acd2"],["/archives/page/3/index.html","6d16eb55be0bfed996956fb840f4acd2"],["/archives/page/4/index.html","6d16eb55be0bfed996956fb840f4acd2"],["/archives/page/5/index.html","6d16eb55be0bfed996956fb840f4acd2"],["/archives/page/6/index.html","6d16eb55be0bfed996956fb840f4acd2"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/bb/index.html","aa81aa701cc09dca695ab1095abed515"],["/categories/C-C/index.html","ab84b7c966869bdefc765d30ff11c0d2"],["/categories/C-C/page/2/index.html","435687223cd21edc7d58016c5dd76834"],["/categories/C-C/拓展学习/index.html","f8288e1cecb8a3d1e1c77005c53c2f46"],["/categories/C-C/操作系统/index.html","6209b546c681cc4320627c393d91e462"],["/categories/C-C/算法设计/index.html","119d0976705895a2aea8f580cef0dd3c"],["/categories/C-C/编译原理/index.html","d46591acf7a8326df68b79a32633e9b7"],["/categories/C-C/软件工程/index.html","ce99da1cbce804e43bc9a0a888426d88"],["/categories/C-C/项目/index.html","cbceb7181424e8d48b88a04101a0169b"],["/categories/Java/Android项目/index.html","5a364b509e09ae33ea3b8d2629cc5656"],["/categories/Java/index.html","6985921a69b12a662a0c64b559578b5d"],["/categories/Linux/index.html","cc995ffe0dd8bcebe9a40c7face1c253"],["/categories/Linux/上机实战/index.html","2967bc2f6d276941484fe38559df52d1"],["/categories/Linux/习题/index.html","81199a5a295f2f8cd99acb2e5b3181a2"],["/categories/Linux/拓展学习/index.html","e6f098a60fb102cba849c47a97ad00c4"],["/categories/Python/index.html","de00aa0a7a5c61404aaba14a4e22fc79"],["/categories/Python/爬虫/index.html","bdbbc298277292c6181748e80137d874"],["/categories/index.html","0283bd0a648edad0da8b617e679657d5"],["/categories/交换原理/index.html","0e5eca1c732cb3fe8b53d9f8cea8cc50"],["/categories/交换原理/实验/index.html","991ad68bcd80384884c91857e8f7dd21"],["/categories/其他/index.html","3f2389c55c233a0b53c6a6a67f5f8ca8"],["/categories/大数据/index.html","31ecd03936ebedbebcffa1efa05d5f14"],["/categories/大数据/习题/index.html","a2c8f79aa8c9ff34d2c5f24cfa70e3a1"],["/categories/大数据/实战/index.html","721efa6726333fe46928eb56ac4fa7ba"],["/categories/机器学习/index.html","66cbf8a3567c219f911416f7b30e07e1"],["/categories/机器学习/实验/index.html","289e10bffeb266fa56316ff7322eeaec"],["/categories/机器学习/知识拓展/index.html","04cb5023cf45eeb8666d51100a945218"],["/categories/现代交换原理/index.html","36872c131739bd345f9f0af77a25ac43"],["/categories/现代交换原理/习题/index.html","55fba4b192f16837454f65ad4854b81f"],["/categories/计算机系统结构/index.html","616fd4b4ea4ef8d0135f67e974902f1f"],["/categories/计算机系统结构/实验/index.html","f6aaeaea15a364882892ca8ab6c2b61b"],["/categories/计算机组成原理/index.html","7b38b6737fcd4d09d133b0f405afdc95"],["/categories/计算机组成原理/实验/index.html","d2b1911d9f9a00722257ffbc5ef79c46"],["/categories/计算机网络/index.html","8204d46980914ccc941f79e1dd593494"],["/categories/计算机网络/实验/index.html","f9823b4c6473956ed75f1ab3730fe9e1"],["/categories/集锦/Android/index.html","5fd9dcf81be3323c59c5f28adc62a34a"],["/categories/集锦/CSAPP/index.html","fe9967f737ab40901d78281217a47ace"],["/categories/集锦/Python/index.html","36d756e5ec83a860d9aefcf3b55e91d3"],["/categories/集锦/index.html","f6627fdeb3fd16327196098138163fb9"],["/css/first.css","ac2d0010102d22ded3aa536d16e52b73"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/message.css","b0ce3ca232f809c8d7a85c79bf1f7ff8"],["/css/style.css","f33cadc59019a1af1d898b222bf512f6"],["/friends/index.html","2d96fd88807d8c1d36f815bf15db5f90"],["/gallery/index.html","63f4bc7639ebb10460b077618443184f"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","e0ad405d125f42b58151b465574426f2"],["/js/aplayer.js","f10ee7aff4ce278045da925ac6510d29"],["/js/app.js","d14976ee97145aa14568c13c6554dcc4"],["/js/jquery.parallax.min.js","38cf4791e24aeaa8101bd2c816400718"],["/js/message.js","38da736cdf513c9a15a0a2a16a34eeae"],["/js/plugins/contributors.js","23ba3efa08d9fb1aae753ceaa6df2711"],["/js/plugins/friends.js","239cf9c648af390f866ed00cead3e23d"],["/js/plugins/sites.js","15bb31fc27abc888b17cc5d822808604"],["/js/rightMenu.js","19b2a577c30a04732f02b86bda62e0b9"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","2596a8630c0801002b3dff127b50518b"],["/live2d/demo/demo2.html","9b0e5d7e1eafcf8df03a97894b7af959"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","ecba35e3eb45ed06dc5b019a3a4c8d8e"],["/page/2/index.html","684acad33487002356b9a615bc965dd9"],["/page/3/index.html","9c43de0c4eda0ed3af58c3791bed44a5"],["/page/4/index.html","b30558d5208677c03443ee761107039e"],["/page/5/index.html","2941194843e2a746bd307bc2907a60f9"],["/page/6/index.html","8771beab6cf559dbce4bf028d0046d58"],["/shuoshuo/index.html","88d94a9a6ec70f2d1ba0c1c4da7076b3"],["/sw-register.js","7aa663a75a693be1f1637a6419f66890"],["/tags/AI/index.html","de937dba341a27f4892b6656c0677000"],["/tags/Android/index.html","92281f4604508e21c3ee1ddf21d125ce"],["/tags/C/index.html","482d2c68056febda7e58a652dfc40ace"],["/tags/C/page/2/index.html","545fcfeef2fc0c3eaec9a3685d1b82a2"],["/tags/C99/index.html","3a85f5437bc5d93fb4e36e018263f118"],["/tags/CSAPP/index.html","d16a244318088d3cfe52b51006a312a0"],["/tags/DNN/index.html","08a9133f881e56ebe0eadd012c88f282"],["/tags/DNS/index.html","5c4d9cf0bc0588cfed0d0cb1ae624ed0"],["/tags/FPGA/index.html","33f7b10dd421155bcce4585786598c3f"],["/tags/HDFS/index.html","711249c09149adf77e2ce17afb6db955"],["/tags/Java/index.html","a6ba2711b376d363d7b8077529a7a64b"],["/tags/JobShop/index.html","a685870c1d7624fd9ffd2aa5a43ac8c4"],["/tags/K-Means/index.html","d4eb37759bd96354afd929b49e4ce54b"],["/tags/Kafka/index.html","db365fc9daabb98f3b36fc11376e32cb"],["/tags/LL1/index.html","3be446b317caf30aa2c59a2ca45cbc25"],["/tags/LR/index.html","1e68b34292a40ba9dc3d6421de02d64a"],["/tags/Linux/index.html","5cd3c01aea4ab0d1876e0a343f5f2079"],["/tags/MIPS/index.html","0114dd5bd3511a0a2668dabf1f5e6423"],["/tags/MOOC/index.html","0de345d8a9dd2b253863cdde4ffdb4be"],["/tags/MPLS/index.html","665f22c9fbde44d4b98ea224815d1496"],["/tags/MapReduce/index.html","1a6eef83420db7df439d367bd91df15c"],["/tags/Matplotlib/index.html","622f0ef7c0f5aea386347dd2df4b6903"],["/tags/MiniSYS/index.html","58d9da34c11ea48e90f0472dfd8c9997"],["/tags/Python/index.html","3e8b3e630897c5ca824ddc85bf8cea17"],["/tags/QT/index.html","472fad0fd3d4f48dc92d9c5ed8405f0b"],["/tags/RNN/index.html","d80d93836f4ab5c4f82902363c92a5a2"],["/tags/SIP/index.html","d6ea029a68d82b19d0389166dc1c2496"],["/tags/Scala/index.html","abe70b9ce6aebeedeeba5529ad335f6e"],["/tags/Shell/index.html","7e9125f1c412d0abc0df30321a5dec1d"],["/tags/Spark/index.html","e2b6c7c3cc98a774403374a8744256f0"],["/tags/Streaming/index.html","a57d9ec5e9195806101c500a96db70c0"],["/tags/Struct/index.html","04004c4c34f2f9f76a3926e622986a77"],["/tags/Verilog/index.html","9fd38a3b52d100b794130651b4a7ecd8"],["/tags/first/index.html","6abcc8e3b36782dcb8bb29f1f774b7a4"],["/tags/iPython/index.html","1911acbb19e14d25c0e402a43da99a2a"],["/tags/index.html","5e3a195eab15d70a755f5e70fe132a96"],["/tags/ls/index.html","e3cf09cff90f9df06de48859e2cfd7a7"],["/tags/习题/index.html","74b4e607cc9ce9808a839060125d762e"],["/tags/交换原理/index.html","6ada829903705b5dd0d78865c13a327f"],["/tags/人工智能/index.html","b4fd76d324dff6f3fa9d809278745b70"],["/tags/信号量/index.html","d365486705395b8316e28bb116c52aa2"],["/tags/内存管理/index.html","50c4873d26d320c7c6a2ece0dcb7f34c"],["/tags/决策树/index.html","467c8d2aa185cb7ba843dd8eb3609098"],["/tags/分治/index.html","e52ffc245e139f3b5458ed371f1d3e42"],["/tags/分类/index.html","5ffa9d4f8d65896ba1e10e3189ef3b46"],["/tags/动态规划/index.html","a2836fa5d7d691e7fd0ec6bc0a5d832d"],["/tags/华为云/index.html","02979e43d4aa898abbc4ab28fd1d1902"],["/tags/单词计数/index.html","9a8f0e3a3496ab07b016c90e97026734"],["/tags/可视化/index.html","180b8b70a4ed6ba8c393f192c4b758f8"],["/tags/同步互斥/index.html","064fd253df416ca2184cdd989a4f9450"],["/tags/大数据/index.html","f643037d731688dd28bd9019ae06a04d"],["/tags/学堂在线/index.html","49aaf7f1e29def0c7dcc4a00ef53721f"],["/tags/实战/index.html","8adb20af78a24854a5d38a1e833e156e"],["/tags/实验/index.html","6a07261323e889a618a632739cd4ddec"],["/tags/实验/page/2/index.html","e4f883d2e65b451f20c63805629859f6"],["/tags/小游戏/index.html","c346089d84db77dccc6731d750aa8742"],["/tags/工程/index.html","460b5afde63289d70af6916c3b0941c2"],["/tags/工程/page/2/index.html","5e287a614ff201e7ce483ea6ff0f7896"],["/tags/手写识别/index.html","015c7b7bc9dc65792d1b418f09b55f1c"],["/tags/拓展/index.html","ca92b3f824203a32ee06120fd79ae855"],["/tags/操作系统/index.html","96c6ed2e15975839159137d306aef9a4"],["/tags/数据处理/index.html","34dd9cfbbc3a2dbbdbb43b300eaf4bac"],["/tags/日志分析/index.html","b7299ee8c5c3e6da61861d4f7e274f64"],["/tags/易错点/index.html","fcd24bca460fa622880215d8ddfe6619"],["/tags/机器学习/index.html","4dad3826260a2783688153be4ae856f5"],["/tags/条件熵/index.html","705e090d0d43738a744e4a5b98bad07a"],["/tags/正则表达式/index.html","ab9ae21ef7159148cc59056e5b5f753c"],["/tags/汇编/index.html","c25b4a0e8d755c4f000d49b97c2eea56"],["/tags/流计算/index.html","30fe7950393d4182baa1d1b97901845e"],["/tags/爬虫/index.html","d95427cf2005973a0c3ea84aa9ec6083"],["/tags/现代交换原理/index.html","495a02e18d9ce093143564bb81d7dbba"],["/tags/生产者消费者/index.html","a4e500693718fdb419000a0a49d932f8"],["/tags/知识/index.html","070dedbe3758104cfaa8bd532cdd7e42"],["/tags/算法设计/index.html","00e642dba3597478985d330d2ae54f4f"],["/tags/线程/index.html","190cd01f0b145072cc154c5efa74cf27"],["/tags/编译原理/index.html","1bd37e814645db1743f01093076faa0f"],["/tags/网课/index.html","bc4347ff4135ac8912c7d08114dc9088"],["/tags/聚类/index.html","addab3ea71cac2ea2ce0632ba8a1dc91"],["/tags/脚本/index.html","3ff6e1dccb157652f6900e21fd44451f"],["/tags/计算机系统结构/index.html","80d170f47fde1a8ec526f0b09a0b429d"],["/tags/计算机组成原理/index.html","64b3ea07c7931a5b4b17c33f6ee89d41"],["/tags/计算机网络/index.html","ac41a9153d864c2b954bfded57afc95d"],["/tags/词法分析/index.html","c2c3416906ef61cf543985468161737b"],["/tags/语法分析/index.html","1dff2761451c733e5f438caf254e2f5d"],["/tags/读者写者/index.html","d6e2219c8f07b4cd67d9d269f350db96"],["/tags/课程/index.html","54ec0748c50602f4a3b8c02c6e1459bc"],["/tags/起名字/index.html","98f08e93e7a419c976cb0c36240bed79"],["/tags/软件工程/index.html","96c094a942e986b8ba8606e1febb0938"],["/tags/进程/index.html","51b7d83477d827cb0f201ac41deff134"],["/tags/通信/index.html","c40b871afe946628206efa83e62518d8"],["/tags/遍历目录/index.html","c0cab6369ff8aaf1c58927968f36acc6"],["/tags/难点/index.html","02a20aee36ace71563a5a8a2fa03fc8e"],["/tags/项目/index.html","cd42f14b0ee9236e67c12fb79a7680b5"]];
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
