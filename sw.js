/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/02/10/我的第一篇博客/index.html","4e15fe282f9d28f14a22db2f7b331e5a"],["/2020/03/10/Linux-MOOC习题-1~5章/index.html","1473f49b7362e40c8cb95c1b81ca000a"],["/2020/03/15/大数据实战-Spark-Java单词计数/index.html","c4868ccb7b901206b23eb509f7d6025a"],["/2020/03/26/计算机系统结构-实验1&2/index.html","e60ef101db82df0d7564af9aa3fed119"],["/2020/03/28/Linux-上机实战1-正则表达式/index.html","d951e00727697ce06379b00906eb9cfe"],["/2020/04/16/计算机系统结构-实验4-使用MIPS指令实现冒泡排序法/index.html","f79c1a2f5f5a0bc7c1e69131c09152e5"],["/2020/04/17/现代交换原理-MOOC习题-1~4章/index.html","3d9fb31bf20e6fb945b453e7b1362df3"],["/2020/04/18/机器学习-条件熵/index.html","d6e80e57ebb64ca29dbc5668d667671b"],["/2020/04/20/Linux-上机实战2-遍历目录/index.html","5beef8a8777cd75814de75d4626563de"],["/2020/04/25/计算机系统结构-实验3-使用MIPS指令实现求两个数组的点积/index.html","b115d22d1d7e01475f26da51a37cd029"],["/2020/04/26/机器学习-实验-决策树/index.html","d39af96c8e79cff18d022c6ace02fba6"],["/2020/05/10/Linux-上机实战3-shell脚本程序设计/index.html","f168bdb6c21aa6d2a236ee14660a7826"],["/2020/05/11/计算机系统结构-实验5-指令调度与延迟分支/index.html","1638e63c962cc65a800f5aae60275bed"],["/2020/05/12/Linux-MOOC习题-6~10章/index.html","7e86f084c6624dd0bf36083c694f8620"],["/2020/05/14/大数据实战-Spark-Streaming-实时计算Kafka数据/index.html","02be055932ebf529926152eb99250d58"],["/2020/05/17/机器学习-实验-K-Means聚类/index.html","c3cb109d6875c12eb9d361ca02b7f39f"],["/2020/06/01/Linux-上机实战4-SimpleShell/index.html","e253ac34b2ef2065c469673bfef0c8c8"],["/2020/06/10/大数据实战-Python可视化-Matplotlib可视化/index.html","7d48f9521ac67f785ee3de447104f7b1"],["/2020/06/11/机器学习-DNN-手写识别/index.html","a3e93b40674f98bdb072dc755d9090fd"],["/2020/06/18/大数据-习题/index.html","449cef1fbfff514ffd5c60d857279499"],["/2020/06/20/Linux-MOOC习题-11~15章/index.html","6f0e4c0a3610a6d12ef5a1ac4afbb608"],["/2020/06/20/现代交换原理-MOOC习题-5~6章/index.html","d70791f7b5b7306ebdb70562ada44e77"],["/2020/06/24/Linux-拓展学习/index.html","74d30c7d868ed9e9f65d22d79d725035"],["/2020/07/03/机器学习-实验-RNN-为baby起名字/index.html","3884b63fa746554ac66d2e22fb477ae2"],["/2020/07/05/Python-爬虫小Demo-学堂在线课程/index.html","b0922c78a3bd7638bf4f5c82566f388b"],["/2020/07/12/C++工程项目-单词消除游戏/index.html","3f1e9aa24361c383b3075d9fad1c9217"],["/2020/07/15/C和C++的struct使用总结/index.html","62323428fe80e148c08ddf4eb0b7a13d"],["/2020/07/20/大数据实战-Spark-分析流量日志/index.html","7b6df908441975f6a4862867e52527d3"],["/2020/07/21/大数据实战-Spark-自选日志分析/index.html","95b5b58664191676315e9c0e523a3a70"],["/2020/08/10/机器学习-实验-花卉识别/index.html","399576ef53c59701e7abd897aa9a56f7"],["/2020/08/15/Python-项目集锦/index.html","b955a249bab27adb7bc070429d85c619"],["/2020/09/01/编译原理-词法分析/index.html","8a05bc9d84585010079daade130f5c59"],["/2020/09/02/编译原理-语法分析-LL1/index.html","0c515ca2fb9ae11bd1604253e5e1017b"],["/2020/09/02/编译原理-语法分析-LR/index.html","fdaf02ac692223befb95e32c5392404b"],["/2020/09/03/操作系统-内存管理/index.html","0205b2a61a34b3aabf74de0ff17a20c2"],["/2020/09/03/操作系统-读者写者(生产者消费者)/index.html","064cd9c405a88c995295582e7577af4b"],["/2020/09/03/操作系统-进程线程管理通信与同步互斥/index.html","4e4f490df47b5a590971618574151256"],["/2020/09/04/CSAPP-实验集锦/index.html","e09be9ed5a2350d6516f06761fbe0843"],["/2020/09/10/计算机网络-实验集锦/index.html","2da5ffe6f1b16917aef6e43ce94780f1"],["/2020/09/13/计算机组成原理-FPGA编程实验/index.html","23063b23e3dce364cfda184abbf48646"],["/2020/09/30/C++工程项目-JobShop/index.html","64472438ecda0d2e2501ab72cb644545"],["/2020/10/09/交换原理-实验3-MPLS编程实验/index.html","061f94b830cd9ef431b8cb30e6043e6f"],["/2020/10/09/现代交换原理-实验1-时间表调度实验/index.html","1f3c99ea2320804d4b21cc47e5072058"],["/2020/10/09/现代交换原理-实验2-摘挂机检测实验/index.html","42cf5cb6ae70f179a12cd01d44b4f952"],["/2020/10/09/现代交换原理-实验4-拨打SIP电话/index.html","60aa689199a2a4a2118d104d1a6c12fd"],["/2021/01/04/Android-项目集锦/index.html","928a77d1c554ce9e9b379b14c120dbe8"],["/2021/01/04/Android项目-类抖音视频播放器/index.html","b97376b5a198c5f8d606119b02eeac97"],["/2021/01/04/C++工程项目-travel/index.html","b6dcea63594528b5de204755ef289baa"],["/2021/01/04/算法设计-分治-最接近点对/index.html","e263b4bfe9ce06a79f7801f0fbd22d40"],["/2021/01/04/算法设计-动态规划-最优二叉搜索树/index.html","ac6b2966c30647d062f92501a0bdfd92"],["/2021/01/04/软件工程-自助计费温控系统-动态模型/index.html","bcccb00b508c7677a78cc69614f5804d"],["/2021/01/04/软件工程-自助计费温控系统-用例模型/index.html","1d2b4aaca540e4c458a9f225b244f2e6"],["/2021/01/04/软件工程-自助计费温控系统-用户需求说明书/index.html","6cc2717699f9420c13384d917b3c674f"],["/2021/01/04/软件工程-自助计费温控系统-系统解决方案/index.html","b3633c654dc1b16a67a905602efa4ab9"],["/2021/01/04/软件工程-自助计费温控系统-静态模型/index.html","213db34ebc05be1cd161af9154552110"],["/404.html","2394b59b860bfc1b2a641e2bc2300ffb"],["/about/index.html","ff0d24f3ab744a738a89d221609cc2f0"],["/archives/2020/02/index.html","1461f6b54135ba50a1a296b63b111a99"],["/archives/2020/03/index.html","bd0ff8006e15d9c6ba1c61d1f553d520"],["/archives/2020/04/index.html","3593179373f9e373cb992a904f6b0ef2"],["/archives/2020/05/index.html","d3ed669fdf419f6520b5550928b2ddb1"],["/archives/2020/06/index.html","fb42eda02eef381d1956a771d76ec4dc"],["/archives/2020/07/index.html","93bced35953387de9937a70d09c7aca8"],["/archives/2020/08/index.html","211518d82b045e3b43d5a9b4f10470bf"],["/archives/2020/09/index.html","8d49353ab7bbf6774640fb60478443b3"],["/archives/2020/10/index.html","464e0796ecb203b613ffa11dbe918895"],["/archives/2020/index.html","3acea6e155688602848600e8650cd2dc"],["/archives/2020/page/2/index.html","3f59226717237885913e3603ad94084b"],["/archives/2020/page/3/index.html","bacd2b8015d5a59fb53ccc969486f3f9"],["/archives/2020/page/4/index.html","3731974ee5fb0f70d844894696a7dd1e"],["/archives/2020/page/5/index.html","01b83d66d60ad8faaa778e16a89d1dfc"],["/archives/2021/01/index.html","c5f7bb6512698f97ed050544938cd99d"],["/archives/2021/index.html","a85aa3f9954f7f4601e4eb6a277e5138"],["/archives/index.html","12e6660cb83ae155d63dcaf29a5c0c92"],["/archives/page/2/index.html","b96c2ae8a9b92eea95f7d801578555fa"],["/archives/page/3/index.html","16af3d2392e290603d3d5fc49dad6955"],["/archives/page/4/index.html","c99cc722a4e3a6e62dab8fd70ddc8619"],["/archives/page/5/index.html","a1530cbc3b378ab365a114fb909a3f5b"],["/archives/page/6/index.html","308436c6e391d73004e5dc0d202ff7b5"],["/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/baidu_verify_97Gzg6Ff3I.html","0bc65e8b49f51d54ffc4d786b1fa5803"],["/baidu_verify_IqjfdcaHAu.html","3751c675b56b54796aae451e3c905ee1"],["/bb/index.html","cbfc851ae630edc2ecbb493494f98696"],["/categories/C-C/index.html","967fc6faa1f63e6d9119912faab01099"],["/categories/C-C/page/2/index.html","5cb3d40538353471c5b87647f7565477"],["/categories/C-C/拓展学习/index.html","0d5fd5641355dc3d90b522654ab965a1"],["/categories/C-C/操作系统/index.html","f5a76df7b188bcf2ab6e25d74e3675a7"],["/categories/C-C/算法设计/index.html","f01ec60d4709bb3348a854d85a79a2f2"],["/categories/C-C/编译原理/index.html","dc9dad9e1cb1754b2b594bae5c44a679"],["/categories/C-C/软件工程/index.html","9670b0bf0f00f9d2c76c0cac207c16da"],["/categories/C-C/项目/index.html","54f469b8e54618a9b4e77960efe58fbd"],["/categories/Java/Android项目/index.html","caef282b3d9ce1eaec7a5e9ab8edbec1"],["/categories/Java/index.html","11b48b416e57254f9949f1edcb967797"],["/categories/Linux/index.html","26063e6095971dee6b2c9bf845a27948"],["/categories/Linux/上机实战/index.html","4327bee065666b941c6eefca365e4573"],["/categories/Linux/习题/index.html","b1491b46a781649755c88e4c56214ce7"],["/categories/Linux/拓展学习/index.html","ba84d9b639eae7992d8815eac63ca234"],["/categories/Python/index.html","5cfd175662449aab058d9f07dfa0f031"],["/categories/Python/爬虫/index.html","47cf87b56bb74513d707acbeb626accb"],["/categories/index.html","fb718fc2376929938f570178dfb19c5f"],["/categories/其他/index.html","e6e282bd66e9ad4a945c2875d66ee13b"],["/categories/大数据/index.html","af148e8708b3dac4ad593c171e60916c"],["/categories/大数据/习题/index.html","e3a6b199a57402ecb55ddd29e278866d"],["/categories/大数据/实战/index.html","78e7d77b39db286bf63a0e6559c27a84"],["/categories/机器学习/index.html","580c31b304370ce988e60491a939b011"],["/categories/机器学习/实验/index.html","50fec9756a8096fb8aa8cd9be203a4d2"],["/categories/现代交换原理/index.html","aefe05a50a50c692ba8c3946f5ad8abc"],["/categories/现代交换原理/习题/index.html","5675e1d69ed9aca5674f0cb0335030c6"],["/categories/现代交换原理/实验/index.html","cde9de68b8c98b9d8011f8d14f21c332"],["/categories/计算机系统结构/index.html","6a41a4f5b70ed14c0f052e27ded132da"],["/categories/计算机系统结构/实验/index.html","aac7d65191fd4c0a57b111d5144f3ac8"],["/categories/计算机组成原理/index.html","f99a3a8253b2fa9b3ed8ac7b46705f19"],["/categories/计算机组成原理/实验/index.html","8a004a9cac3926050960daa83979b853"],["/categories/计算机网络/index.html","dc0366a2acd637c9024c65da81322da0"],["/categories/计算机网络/实验/index.html","ac69f29e2e7fb40692fbd136de27e174"],["/categories/集锦/Android/index.html","8cbc27bb4fffa75623fb2ffacd59eeb3"],["/categories/集锦/CSAPP/index.html","119eaa0fa65c562884f6e09bfd6ba640"],["/categories/集锦/Python/index.html","60455fccd6fecc2ba2727023c68a224b"],["/categories/集锦/index.html","d949fe252304f3ae7a6a0ee473012c01"],["/color/index.html","3f627143356419f7f54e1443b3536f0d"],["/css/Readme.html","4bc3fb2cafc0c4c35b4e56559c87d909"],["/css/first.css","fac9d8c41ed1687a81bf2ac7dcd1ba30"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/style.css","0e35d2161024d9ad0bc6f16ba0eba6aa"],["/friends/index.html","dd0e27bf29de986383fba1488b46a2de"],["/gallery/index.html","cac0a9f9094373909cca2398b08a7aa4"],["/games/2048/index.html","eb9ef19cfcfdbf5f2fa055942e03c1ee"],["/games/cat/index.html","a79ca21c7e606abdd649ff1b5276a56b"],["/games/gomoku/index.html","2b41f4205baffc4ff20bc5b728c649e6"],["/games/mf/index.html","8d8e029884c3af87a97fc4ebb93321b8"],["/games/periodic-table/index.html","4c31220b3c8c1d35b1128df43b2c9dc3"],["/games/plane/index.html","65433a1893a0e61a8c4a2f14b233bcb0"],["/games/snake/index.html","bf8e753df050f958483d376a79b1e3e0"],["/googlefdc36b0b38650f18.html","a36310561b71904be3b07a8a67b549c1"],["/index.html","e7ed50f5685de17357cb68b2da0410d4"],["/js/app.js","aa80cf51d3f304b2c56cc43cd4d75fe6"],["/js/plugins/aplayer.js","dbe5eea968969672c52022ed895192a0"],["/js/plugins/parallax.js","8bf0ab10d50243ae87016af576642cdc"],["/js/plugins/rightMenus.js","d280cefa875e65c8e078cd45badf4dd1"],["/js/plugins/tags/contributors.js","aec8045335d2753a39a48c34fb019662"],["/js/plugins/tags/friends.js","f372da57b83083859f60ce19b736a695"],["/js/plugins/tags/sites.js","76bf19b80414fbce774acddabf6b1d3e"],["/js/search/algolia.js","6edbbd91cb2b7e175c1e912798f3552e"],["/js/search/hexo.js","0ca9f8dadce94caef20d50d9e2e33ec8"],["/js/search/meilisearch.js","caba7692a9dba1b0a4af8ae1d268e589"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/mylist/index.html","a1afb170b31f6be819305f4b25a93da9"],["/page/2/index.html","028799277914f96b16cdb433e1853152"],["/page/3/index.html","1fc4d2e6b17d750fd579cacceff3dcb1"],["/page/4/index.html","abf23e37ed287647eafba87865ed854d"],["/page/5/index.html","09f41825def5d72b6f326a6e3f9ab610"],["/page/6/index.html","baf613d3a3f99457997fe2b2e6431322"],["/shuoshuo/index.html","45110473e4f98c820f810720eb414ec0"],["/sw-register.js","69f984511397c31edb0905aba12fdf09"],["/tags/Android/index.html","df6e0b144928ef35eec33c91b12d7e9f"],["/tags/C/index.html","46754e7f0513ce2de59410871fb50322"],["/tags/C/page/2/index.html","9e623f6a2c8863c4bb6264eb5ecb4693"],["/tags/CSAPP/index.html","4405349c2519baab752b74c9b38c383c"],["/tags/DNN/index.html","f979d14eb8175f3966051424c2a6224b"],["/tags/DNS/index.html","58bfcb9ca6159b127f62283f7c60e339"],["/tags/FPGA/index.html","8a9aefce82c722037a32f299d7201813"],["/tags/HDFS/index.html","90ba06f94a1a9a493d79b7a07cd773f2"],["/tags/Java/index.html","4714b8cb98b227e3bfee69dc1e949cd1"],["/tags/JobShop/index.html","4b7f64357f7f080cd2d105f4aa8d028e"],["/tags/K-Means/index.html","1d668a1057c7a8388e0a7dbfa7b8c0db"],["/tags/Kafka/index.html","a48457197198dca6ced3a3a54fb86024"],["/tags/Linux/index.html","2b7718162d60806c0a5d81f47a10bb6b"],["/tags/MIPS/index.html","752f0f95604df49c69ccb6fabd3d0f9a"],["/tags/MOOC/index.html","8e27bb02573d54ba4732a618d8325611"],["/tags/MPLS/index.html","7c64c83526ee427f9c8b4bb475d36668"],["/tags/MapReduce/index.html","dc83cc8ef950dcca51e6d106293a14fc"],["/tags/Matplotlib/index.html","e2e2779fb400fc7d1ebaed592450fa23"],["/tags/MiniSYS/index.html","cd3f00bbf13ca006d4d30ba5773957f2"],["/tags/Python/index.html","4d21c650a1c8dda8d7831722baebe227"],["/tags/QT/index.html","7625598f96ee79b3366c43d65a849e3a"],["/tags/RNN/index.html","cd727651794a25aca9f37945fde6ac27"],["/tags/SIP/index.html","7f53c5584d5df1b7223633ad8951f75a"],["/tags/Scala/index.html","bcc5b42409e0be0248f05d94ce8e9c76"],["/tags/Shell/index.html","e867b09d6d9cbe89e0ec531e61a96eea"],["/tags/Spark/index.html","5c43001e337b100beb714fb12e58c069"],["/tags/Streaming/index.html","f8734371094480cf65a2f9e870cf7677"],["/tags/Verilog/index.html","d674fe2560113db48cbf8ce84f1e628f"],["/tags/first/index.html","7698088902a484268765bc6f489b560b"],["/tags/index.html","9d436a4b09aed92ad033c8f1a4d09ad7"],["/tags/习题/index.html","81a17e63dfb230e5abb2b202c9f54e11"],["/tags/决策树/index.html","e440c0edba122578d2e1977f2362203d"],["/tags/分治/index.html","52da6ddbbe8ee29f534da84d386d7be3"],["/tags/分类/index.html","8f6f6e0e4f7307fea0333e7a7ef33ef7"],["/tags/动态规划/index.html","7ce7920c45df424c60c13b537528ab8f"],["/tags/华为云/index.html","ecc4252960c15fd7627f6d3243d8a7f1"],["/tags/同步互斥/index.html","39aaaffceeacc72467d9309071e78156"],["/tags/大数据/index.html","ae5889229905172a3a5898be137d5b0c"],["/tags/实验/index.html","51a4045aff5cafc303c5647a9b3cc0d3"],["/tags/小游戏/index.html","77ee138fe2ab8ce806897b3f2d3fc09f"],["/tags/操作系统/index.html","d76354efd086932210dfe4fa5e578046"],["/tags/日志/index.html","d78ec635226e0c8448bac7055a4054bf"],["/tags/易错点/index.html","c7f999c2481a17f01204f11dbe2ed8c8"],["/tags/机器学习/index.html","45ecb434086d86963114b259873ffc8b"],["/tags/正则表达式/index.html","e43c744d832b0d48f5ce00371eb98489"],["/tags/汇编/index.html","33be02fb05c21fce7e534dc536c1f0b6"],["/tags/流计算/index.html","254d4d1c2792106fc542d244b261026f"],["/tags/爬虫/index.html","eaf43498d1d42bf0efdb6514b28f22b4"],["/tags/现代交换原理/index.html","f3248a0b86d605c5e6a6666973084f1f"],["/tags/生产者消费者/index.html","f89def57546ca4b6791d7a2ed35152f7"],["/tags/算法设计/index.html","64e2e03192eb8df251d599a66a76844b"],["/tags/线程/index.html","8855e16e4df2aa09305ab1c43a2a804c"],["/tags/编译原理/index.html","dddc4aef0eca81c44c09809681630a07"],["/tags/网课/index.html","fc10be333454a67a30b2f79fff14efec"],["/tags/聚类/index.html","1e97441824409abc8495dfccfe86f1ab"],["/tags/计算机系统结构/index.html","4904da7d74e9a6e03bf9a1c7d3ae57b2"],["/tags/计算机组成原理/index.html","a84b9037bba7ff86510e9ec5f772520b"],["/tags/计算机网络/index.html","ffccd92b34f3bc0c84c86bfff78e4dfb"],["/tags/词法分析/index.html","b0d2672caf7a7b9c1b8cb178d4a2e9ff"],["/tags/语法分析/index.html","f814317a3d2b5c7ab875caae0f6b9bee"],["/tags/读者写者/index.html","2d369e759e59df0a4ec27c2a2d826443"],["/tags/软件工程/index.html","ce5eea6745c2ed263f6e9feea7b53a00"],["/tags/进程/index.html","75b9197dda2d347f1ba9b20f08858220"],["/tags/难点/index.html","d3bafc0b5e1516f10a7c0189d17c9d41"],["/tags/集锦/index.html","1e71bc504ac2e8c3c1b2c9c4d0c53bc2"]];
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
