/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","b5329981c9364cdac64b2971bbeaec22"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","fd079d83f9ccb3c3458a9d9004de6f4e"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","1444ddfffdb07d081e1c8db1c6c15e93"],["/2020/03/26/计算机系统结构-实验1&2-遇到的问题/index.html","9aa6f1e04daac6aadcccbeef8ddb5f7d"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","f8106e667fb5f72ee7635887e579cb85"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","fb0b0ac57a388270132e023b58ad595d"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","02fd6e794d247a084530e9e4118c54ad"],["/2020/04/18/机器学习-知识拓展-条件熵/index.html","0ab25e4dcb0ada67004ce798956afe44"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","616215226af536b003e0a00ee7408ff2"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","86bc8e4fec9a7a336b51ebb75b3ce588"],["/2020/04/26/机器学习-实验-决策树/index.html","e20c50bfceab633069ec93d7f1e7fba0"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","97b961b9debb3bb6a2120ef4456b0233"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","677644d9cd9b18621fab8ae460e2abb7"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","e0efddc5fa8bbda7903bae06a59f129f"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","2555f17355906132a3693b7b99b50400"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","e490c73734e99cb2a9da52c2cfb5769a"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","31d38986c2e4e30139f3aa2fd09a026b"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","4b9a55d64c3f3f6b6570165b7d06dc75"],["/2020/06/11/机器学习-实验-DNN-手写识别/index.html","05f5d39016afc7bd3b32f1c7b9a7881f"],["/2020/06/18/大数据-习题/index.html","ce10f53a1f387a9ce49d8ac9a6e86318"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","332307c8476a38dc2620e7be85b92401"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","765c349c1988c138c300190e560e8795"],["/2020/06/24/Linux-拓展学习/index.html","1c66742c3ebac0c240bf04a1c819990c"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","9f920b68aa2fb5f6fc6c45861bf78103"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","ab552587582a364b992796307bf6c83e"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","d9046eedf93395d745d5467af17320dd"],["/2020/07/15/C和C++的struct使用总结/index.html","db0a79b69c280cb349b51154a796ed7e"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","a0ab65368387671da3d2ea250f432443"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","bf4ab53a3408170c2966ac0001a1c1e8"],["/2020/08/10/机器学习-实验-花卉识别/index.html","57aa217f5ff03263f4b86b8000200c48"],["/2020/08/15/Python-项目集锦/index.html","0c8312013706160552aa8b793a47cc9e"],["/2020/09/01/编译原理-词法分析/index.html","1ffc093f570837fb1a230e8d6a8ce818"],["/2020/09/02/编译原理-语法分析-LL1/index.html","ea90b5951ecec7a5cfac244a1ca82c79"],["/2020/09/02/编译原理-语法分析-LR/index.html","8c192eca47abd7c762c1689850b7ec11"],["/2020/09/03/操作系统-内存管理/index.html","7d3dde7f431d90f34bf8b8d73f84381b"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","f48613165a38b5efc67e2227e9bd05dd"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","6595780b3303e1499d54fd0a26a14fda"],["/2020/09/04/CSAPP-实验集锦/index.html","4f61dc0cee3733efe2850662a1d04af5"],["/2020/09/10/计算机网络-实验集锦/index.html","7fa37501a20d86312cfa7e8422786250"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","5df7219d51df9e98f18359723e4f6c43"],["/2020/09/30/C++工程项目-JobShop/index.html","3eaeb84ba2ae5d89e3fee611ed5337dd"],["/2020/10/09/交换原理-实验1-时间表调度实验/index.html","2aae15eff02ed7c45ffaf979caeb0c87"],["/2020/10/09/交换原理-实验2-摘挂机检测实验/index.html","ef11e6b0168731ec58e7ba33778ca90a"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","335a42588b5b290653569447da7572af"],["/2020/10/09/交换原理-实验4-拨打SIP电话/index.html","7da3b5892180de6641285ec7c31a77c5"],["/2021/01/04/Android-项目集锦/index.html","bfe7f0bb7370e61d70dfe6578d46c4bb"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","c6d85d89345eeb082a05a4e139896010"],["/2021/01/04/C++工程项目-travel/index.html","60ab3a40f500ea460418b2c789e9d459"],["/2021/01/04/将博客搬至CSDN/index.html","9af230be45549d46f0e8cfb54daeebe5"],["/2021/01/04/算法设计-分治-最接近点对/index.html","999418a018140a9301f9b95d910cbcc1"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","125b52b88f12556312c7cf1fe2698002"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","d91dc6a06e6aefa5182cc4645a8057fc"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","bbd3f69abd482c5539f76d0ecb98a79e"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","032f67a0725873a1aaecbd402c2f14ad"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","51b53bbc7e9423c9a05dba3af173a523"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","0262fffd1ea0f1359cdbe27ea4d0cb47"],["/404.html","572adbe17ae6e441163a140f8a0eb966"],["/about/index.html","3921470f6814e53a85e7a9f41738d779"],["/archives/2020/02/index.html","b5a2307a848d262f3f362c79cee38d4c"],["/archives/2020/03/index.html","8e7154dd11a42cfc7e86b7de01c2795d"],["/archives/2020/04/index.html","1544ddd1bda1831c4cb765ee86ed0dbc"],["/archives/2020/05/index.html","192dfb7ca4ba4683a959790f5c9d5f42"],["/archives/2020/06/index.html","4f18504973ffa3b71e39af75e8bc3dcd"],["/archives/2020/07/index.html","2e150f5594fbf446e01ffcedfb91b773"],["/archives/2020/08/index.html","218b3e58703f8a456d7ddaf4c95eb30e"],["/archives/2020/09/index.html","4355a74f6e61255f22bb1b4cbff36bc1"],["/archives/2020/10/index.html","7d85269f4721a2459af15fb78e44a609"],["/archives/2020/index.html","bed525c7d59b573f18769249248556de"],["/archives/2020/page/2/index.html","2d398e3e64a508b4620b98ff7ba18be1"],["/archives/2020/page/3/index.html","0c3b7b96fc36b4122b2b13c6af6a29bf"],["/archives/2020/page/4/index.html","a4208b5be17a90132049eb1dec98740f"],["/archives/2020/page/5/index.html","66f0158ec0ee88cc0e219086351c9197"],["/archives/2021/01/index.html","e2bb3779ede562f619639e95c8d290e4"],["/archives/2021/01/page/2/index.html","4a720953657e9731510ee233ee7d3979"],["/archives/2021/index.html","3a780929e3c749975888681ede14f73b"],["/archives/2021/page/2/index.html","57ac9fb940d37647c551cbbc6f9117ea"],["/archives/index.html","250c2e9a41a9d32653cb35812029e327"],["/archives/page/2/index.html","250c2e9a41a9d32653cb35812029e327"],["/archives/page/3/index.html","250c2e9a41a9d32653cb35812029e327"],["/archives/page/4/index.html","250c2e9a41a9d32653cb35812029e327"],["/archives/page/5/index.html","250c2e9a41a9d32653cb35812029e327"],["/archives/page/6/index.html","2954fa38c2340cd0761ab2e4e184407b"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/categories/C-C/index.html","47cccc23c05b83c13a5eb2dd535aed1e"],["/categories/C-C/page/2/index.html","d459c28debdb49eb1a2c12c37420645b"],["/categories/C-C/拓展学习/index.html","dfb08cdfa3510d1aa254178dc916f602"],["/categories/C-C/操作系统/index.html","7c866d92909ecaf23d4ca040de93fbfd"],["/categories/C-C/算法设计/index.html","43eb66d75f4af40482553b02fdf941e7"],["/categories/C-C/编译原理/index.html","6ee7bb42ba94bc99a4287dec3dda1a53"],["/categories/C-C/软件工程/index.html","85ab313ed63b45a70c9a7e5a07513e14"],["/categories/C-C/项目/index.html","41ce836f76d4f2f0d0392a0b2dc1487d"],["/categories/Java/Android项目/index.html","f96772dcf47aafbe1a183cdc8dd39f5b"],["/categories/Java/index.html","fc2585c5689b9b82a14959d2287b0c98"],["/categories/Linux/index.html","d172cfd5b3083c0c974fbb6cc7bbe11c"],["/categories/Linux/上机实战/index.html","64ff83a8342fd8517905743235c926e1"],["/categories/Linux/习题/index.html","578fad2662c408b073ac1335a1f1bef2"],["/categories/Linux/拓展学习/index.html","736baa54c6e8cae8c88d71d756dee01f"],["/categories/Python/index.html","f4c1125751a014cb4eb7a43aadb63c59"],["/categories/Python/爬虫/index.html","c4c5d006a20954b0d76bfedb9f6d5d7d"],["/categories/index.html","6af785de5f6ef47a0bd54ec59e7587d9"],["/categories/交换原理/index.html","17481308551e0d760b92fe6400d544df"],["/categories/交换原理/实验/index.html","21c98c0fb84243427875f4355d3084f9"],["/categories/其他/index.html","9bf5fbac65baf3436b1871cd9d3bee34"],["/categories/大数据/index.html","c4bf552b91b82f16b9f6b5174ec10cbe"],["/categories/大数据/习题/index.html","f146bebedf030753e44c366fd4e3dde9"],["/categories/大数据/实战/index.html","638adf68b881709afc45a2577d05da8e"],["/categories/机器学习/index.html","26a6fdbaf09c1e691dfa1f296dd2ee40"],["/categories/机器学习/实验/index.html","af791e398645a87b1ffbc437e65983b8"],["/categories/机器学习/知识拓展/index.html","c8f9424e518fd072422682f994ea2c26"],["/categories/现代交换原理/index.html","afe02f09ab0ec1d645d3e93da51e9eb8"],["/categories/现代交换原理/习题/index.html","76435390d10e65610ea21c33dd36daa0"],["/categories/计算机系统结构/index.html","26110ed82b8e698383a61a8aad50ecdb"],["/categories/计算机系统结构/实验/index.html","07ed38f5dc0a1b0822870857ec309d49"],["/categories/计算机组成原理/index.html","1e070fe7d7616e8e02eaa69e30cd0e91"],["/categories/计算机组成原理/实验/index.html","05fdcb5bf3062a5b0f84afa05b97ea0f"],["/categories/计算机网络/index.html","d12aa538ab40dba2f09ea5bfe1234905"],["/categories/计算机网络/实验/index.html","6c67c5be046885d15422557e356081c2"],["/categories/集锦/Android/index.html","e048426b19a0f0ac7e0838646fc75473"],["/categories/集锦/CSAPP/index.html","95c033118de12ccafd8661459d29a945"],["/categories/集锦/Python/index.html","7a62376359b1a6102dc68452b356d034"],["/categories/集锦/index.html","48609a2258dc2e82711e46ce9b30212b"],["/css/first.css","880233a3d683a1c63bb8455e42deed41"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/style.css","15b71a0103630e784e568ec15bd35d12"],["/faqs/index.html","9897069d5e4fcc9d34b92b6313596dda"],["/friends/index.html","c4681781da4e6f9bb3e6ce0303197c46"],["/games/gomoku.html","3f9883510d3cce5092bdff2b091e8ecc"],["/games/mf.html","b616632e075d22163287241ac9e5e1bc"],["/games/mikutap.html","a4dd3337906fed31e900e2f10dec2d0d"],["/games/plane.html","6e67b9ebfcdd67174bcef496f5ffb6d5"],["/games/snake.html","08ce6c3dee8704e5d1c74d84f9ea52d6"],["/games/tank.html","14a86140b44d7d6e26e4c9ff926dee14"],["/index.html","e817f0763d7fbfd4b56d78030412eadb"],["/js/aplayer.js","9b130c167aaa26645b6026f5852f902c"],["/js/app.js","04596a7dc24b204061bd4fc766cc8e77"],["/js/issues.js","d450701b133a092543f48ffc22ce966e"],["/js/search/algolia.js","3a8dc835cb0dbe9ceea9e4f83237a799"],["/js/search/azure.js","1e73788c42d8a55e4b26b32470c4deb2"],["/js/search/baidu.js","4247fb05f942bf561a59975ece561cb2"],["/js/search/google.js","ea57d9d8604b92e062162ccca76b7f5e"],["/js/search/hexo.js","9e1783dc56f7541ea906411167cca5f9"],["/js/valine.js","15d0f1f9d975de124ef5389385961992"],["/lib/hbe.js","b5012c5bb408583c96a32031da7b9809"],["/live2d/README.html","c44261983a1942e07a4ce12fe94a633e"],["/live2d/assets/browserstack.svg","900ae3880857aa3eb041e566096ed9e2"],["/live2d/assets/screenshot-1.png","30b70e6cd9be9812adcb347536f0da85"],["/live2d/assets/screenshot-2.png","cca95d7c3ce89495691acc300f63aef0"],["/live2d/assets/screenshot-3.png","637681525dd86db9d1ed20e397498c30"],["/live2d/autoload.js","4e4193b77cecde67e2ed8cc8b1460f8f"],["/live2d/demo/demo1.html","8f4281df7112a31e3aed1a2684aa610d"],["/live2d/demo/demo2.html","9a264074ef7eea855d39b2efdea998d7"],["/live2d/live2d.min.js","534ec2f0d86be7f7b5f187e77e9001c0"],["/live2d/waifu-tips.js","f4e27f3ed967a832f5f7c5362590d63d"],["/live2d/waifu.css","09294b6757a753a0d492c522db5454d8"],["/mylist/index.html","374376ccd292382c8cc6adb6a723535a"],["/page/2/index.html","6ad3e5503d2a1244e33afdc2b3d2eea7"],["/page/3/index.html","96bb707a8f4e8a88941b0a90b3dc183f"],["/page/4/index.html","1d6a2e765fa6de9d89819f626d667e2c"],["/page/5/index.html","8324dfc3e57054db25eb3ecf2a0d60f9"],["/page/6/index.html","120f8507fc7e45c8a071535558f6b1e7"],["/shuoshuo/index.html","d7f7c27d5ac21095760f73fe1c406154"],["/sw-register.js","ca18cc890ae054474c9177d2b8dd40b9"],["/tags/AI/index.html","be5fcea53b376f595839d0d19d52d8d5"],["/tags/Android/index.html","4f7783f44c20cf88b4686224d5e06e9c"],["/tags/C/index.html","47eec3faa6f6ff3910875936c96f169d"],["/tags/C/page/2/index.html","a28addee406fae6af46e977abb467dec"],["/tags/C99/index.html","87807724b71cf845ffaa459157cbed2f"],["/tags/CSAPP/index.html","8078a8ec859e46f416530b53123fdc5f"],["/tags/CSDN/index.html","711a07bdbb7a9deea333ec354b1a95c1"],["/tags/DNN/index.html","7d41cf7acc6f41aeba8b09491907fa81"],["/tags/DNS/index.html","a2bb969ad8a79c0db794760fee238f20"],["/tags/FPGA/index.html","c39f26e531ed89c81d179b862ff92184"],["/tags/HDFS/index.html","a8f77919d4a04ab26788a679d36938ac"],["/tags/Java/index.html","0810e731636f7aa4ad3bfec7eaff8e23"],["/tags/JobShop/index.html","bee8e187fe1e4169d7ba7e97197c21d7"],["/tags/K-Means/index.html","b4a2aa169686b24c82a220e2bfdb154f"],["/tags/Kafka/index.html","4b1da00e91b90ace3fb00747ce768f28"],["/tags/LL1/index.html","bdfb903ec69bfd4f25fca8002cf00761"],["/tags/LR/index.html","1d52c15670334f561472fdd705965439"],["/tags/Linux/index.html","8725bda3761a0a037b019c89744dcb10"],["/tags/MIPS/index.html","215885553a1f4f59239d25eabe9ab5f7"],["/tags/MOOC/index.html","2b92585175357b2f4cc4c7e8fb93be10"],["/tags/MPLS/index.html","177a149f9401a33d91911b751a3ad888"],["/tags/MapReduce/index.html","5d625cfaf44b0a9c87c8af6bf1fc1f47"],["/tags/Matplotlib/index.html","0284246b9b816d0ac538c131e61b9580"],["/tags/MiniSYS/index.html","3cb36184f9e40319d9139f11e1545965"],["/tags/Python/index.html","af1e67b335036fee042b1aaf19fc41c4"],["/tags/QT/index.html","0c66e46b6bc0e4a3dc0909c123d92731"],["/tags/RNN/index.html","1491fc1d99236ef68cfb0c26ab6b1199"],["/tags/SIP/index.html","d6bd36f6ad9581b5c78681ce2563ea72"],["/tags/Scala/index.html","45cbb1f41623eee9d616d17428606493"],["/tags/Shell/index.html","e7c47902d2ae850fbc756d7ea7dcaf30"],["/tags/Spark/index.html","c317c01a327f2df039dc083532f09fbe"],["/tags/Streaming/index.html","7e68ae00d2d23a55353b267689322f41"],["/tags/Struct/index.html","8a5a16db3b3eb26f849319345b9be9c2"],["/tags/Verilog/index.html","26fbdbd062d036618442bdf075a55d0c"],["/tags/first/index.html","1047b102995e1fd08d09519031c07219"],["/tags/iPython/index.html","258636072fafb63596575a204cdf3198"],["/tags/index.html","6a459cef550eda1e98b0a0050cf7c7a6"],["/tags/ls/index.html","8b03e789fb0869e527b35552baeee752"],["/tags/习题/index.html","83c7afd259c8c3f217fa4a3c41395864"],["/tags/交换原理/index.html","9e145932d67ecd28f4ca42090ea8c2aa"],["/tags/人工智能/index.html","449de0e24ef8c03e967966a0b5281bd5"],["/tags/信号量/index.html","7e122708bd54520dab9e246f4f740c16"],["/tags/内存管理/index.html","3c47b5697c2457998a72342136761b2a"],["/tags/决策树/index.html","6a2a52c6a04327f46b57e6622a451e46"],["/tags/分治/index.html","e07a211d965a90bc4adf4773fcd7265b"],["/tags/分类/index.html","793ad4cfc69005ccedf66c1ea34cb33b"],["/tags/动态规划/index.html","73b19fa762c8668d8012f36eb26aa67f"],["/tags/华为云/index.html","10bc11476b3142e46328617d939a5d80"],["/tags/单词计数/index.html","dbd46ec7122d65024b6f331f83f2f08a"],["/tags/可视化/index.html","f38c015081d714490c16ab5c3aa7679a"],["/tags/同步互斥/index.html","c347e750d3044b5bfa68ac08bd8479af"],["/tags/大数据/index.html","035ebb1fc6dfee33f7d4289313f916cd"],["/tags/学堂在线/index.html","e56d63f5f1fda8f094b3e963d39368f9"],["/tags/实战/index.html","1ace7ef03f334b6f7c0e49d53abff46b"],["/tags/实验/index.html","391df6092eb4ab297d114181e1696a66"],["/tags/实验/page/2/index.html","fb0e358e6b5aec49dafcfe81255f90b2"],["/tags/小游戏/index.html","86b6897d6ffd39edf78fbc8df9546e69"],["/tags/工程/index.html","8fb120112813680ea443e366528acdd6"],["/tags/工程/page/2/index.html","75cf2c677034dfa02d71d33a73299d11"],["/tags/手写识别/index.html","014b2d13b4c33100a209789945079211"],["/tags/拓展/index.html","0da01fad03175c83b1091d30bf0fa7f3"],["/tags/操作系统/index.html","535e6e4317fd3cd843686e482cc6fba9"],["/tags/数据处理/index.html","842d1303b642c4d8fea7a13c9b41037c"],["/tags/日志分析/index.html","0858becd9de5d64f42ee46c8d03925a7"],["/tags/易错点/index.html","dab516a87d2cecdadd8f3e197860ad2d"],["/tags/机器学习/index.html","d71fdd3cf162d3f8ed6bec9e0c70a677"],["/tags/条件熵/index.html","7905c73bd11f693b56020a115dcd9abd"],["/tags/正则表达式/index.html","e75b7089e1a8a99c9faf208a1e3a86f8"],["/tags/汇编/index.html","03e352172ef4c315ba68f9a4d860caeb"],["/tags/流计算/index.html","670030bfb539c09d4c18bdc6d5552b89"],["/tags/爬虫/index.html","f1b932d69fe3c8d635f275042d3a1ede"],["/tags/现代交换原理/index.html","1c41ef6848ccf34f629c32b04b77524a"],["/tags/生产者消费者/index.html","c083af7698ed58f6b08fb10eb12db6f8"],["/tags/知识/index.html","3c4388e40de85bad712d7d254124aff6"],["/tags/算法设计/index.html","2dd59fd622704ebb66b053534bd881d7"],["/tags/线程/index.html","0fc5f3cb1d90ef1dc529941646b9954f"],["/tags/编译原理/index.html","9002f32943968fae4947c3af75bbc4fb"],["/tags/网课/index.html","4fd23c14c201db2f30eed21a9b5b9884"],["/tags/聚类/index.html","c4bf63daa39ecb7329950bc94bd0cec0"],["/tags/脚本/index.html","77394c6824316d2d166c81252f1170b0"],["/tags/计算机系统结构/index.html","2700182a93644bd8904fa74797e928a5"],["/tags/计算机组成原理/index.html","8048bc236dad7ee0baeff6d7bd1174cb"],["/tags/计算机网络/index.html","69519dc46519679d8323af330aa54a96"],["/tags/词法分析/index.html","b169bbca04200e68b9ebede679a6fda8"],["/tags/语法分析/index.html","1546b1c9f6eb84c26d5ce462f67d87bc"],["/tags/读者写者/index.html","4cc08b0b07fd6eeb056e8f105519674c"],["/tags/课程/index.html","34f9569b903f581a5ab5ae45d5eeb987"],["/tags/起名字/index.html","d9959b3114f43d88a6c2eb80a3b46640"],["/tags/软件工程/index.html","b697f65ac8875b707cfc333bf0c4a2b8"],["/tags/进程/index.html","45ea81dd3c3344aaf0f68c9e6be59f4b"],["/tags/通信/index.html","02152b6f3c34fe426e29ad7e8c2f9041"],["/tags/遍历目录/index.html","e1d9ddc498f296cae9c563b4bf767e4c"],["/tags/难点/index.html","837c138002c5495bf45602aa595a089a"],["/tags/项目/index.html","b073c335434d545f76d4810d8ef6d887"]];
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
