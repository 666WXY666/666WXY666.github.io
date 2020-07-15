---
title:  C和C++的struct使用总结
categories:
  - [C/C++,拓展学习]
tags: [C,C++,难点,C99,Struct]

---

简单的写了一下关于C语言和C++中的Struct结构体的定义的疑惑点和C99新增的柔性数组的使用和理解。



<!-- more -->



## 一、关于C语言和C++中的Struct结构体的定义

### 1、C语言

对于C语言，结构体的定义可以是以下的标准定义法：

```c
/*
 * @Copyright: Copyright (c) 2020 苇名一心 All Rights Reserved.
 * @Description: 
 * @Version: 
 * @Author: 苇名一心
 * @Date: 2020-07-15 08:17:32
 * @LastEditors: 苇名一心
 * @LastEditTime: 2020-07-15 11:29:00
 */
#include <stdio.h>
#include <stdlib.h>
struct TEST
{
    int a;
};

int main(int argc, char const *argv[])
{
    struct TEST test;
    test.a = 1;
    printf("%d\n", test.a);
    return 0;
}
```

像这样就定义了一个结构体TEST，在声明新结构体变量时，需要使用“struct TEST test”，“struct”必须有，不写会报错，“struct TEST”就相当于是“int”。

直接在结构体里赋初值是不允许的，例如：

```c
/*
 * @Copyright: Copyright (c) 2020 苇名一心 All Rights Reserved.
 * @Description: 
 * @Version: 
 * @Author: 苇名一心
 * @Date: 2020-07-15 08:17:32
 * @LastEditors: 苇名一心
 * @LastEditTime: 2020-07-15 11:32:27
 */
#include <stdio.h>
#include <stdlib.h>
struct TEST
{
    int a = 1;
};

int main(int argc, char const *argv[])
{
    struct TEST test;
    printf("%d\n", test.a);
    return 0;
}
```

会产生如下错误：

<img src="https://gitee.com/wxy_666/images/raw/master/20200715113328.jpg" alt="2020-07-15_113313" style="zoom:80%;" />

另外，除了标准定义法，C语言还支持直接在定义结构体的时候声明变量，以及给结构体重命名：

```c
/*
 * @Copyright: Copyright (c) 2020 苇名一心 All Rights Reserved.
 * @Description: 
 * @Version: 
 * @Author: 苇名一心
 * @Date: 2020-07-15 08:17:32
 * @LastEditors: 苇名一心
 * @LastEditTime: 2020-07-15 11:37:59
 */
#include <stdio.h>
#include <stdlib.h>
struct TEST1
{
    int a;
} test1;

typedef struct TEST2
{
    int a;
} TEST2;

int main(int argc, char const *argv[])
{
    struct TEST1 test11;
    TEST2 test2;
    struct TEST2 test22;
    test1.a = 1;
    test2.a = 2;
    test11.a = 11;
    test22.a = 22;
    printf("%d,%d,%d,%d\n", test1.a, test2.a, test11.a, test22.a);
    return 0;
}
```

<img src="https://gitee.com/wxy_666/images/raw/master/20200715113946.jpg" alt="2020-07-15_113933" style="zoom: 80%;" />

可以看出，TEST1是直接在定义结构体时就声明了一个变量test1，在下面可以直接使用test1访问结构体成员a，另外你仍然可以在后面使用标准方法定义新的TEST1结构体。

而对于TEST2，则是使用“typedef”将“struct TEST2”起了个别名叫“TEST2”，因此后面既可以使用struct TEST2”也可以使用“TEST2”声明TEST2结构体变量。

在定义结构体的时候，你也可以省略TEST1或者TEST2不写，但是这样对于没有起别名的TEST1就只能在定义结构体的时候声明结构体变量，在后面不能定义（因为没有名字，很好理解），相当于是一次性的结构体。但是对于起了别名的TEST2，在后面就只能使用TEST2来声明结构体变量，而不能再使用标准的“struct TEST2”。

```c
/*
 * @Copyright: Copyright (c) 2020 苇名一心 All Rights Reserved.
 * @Description: 
 * @Version: 
 * @Author: 苇名一心
 * @Date: 2020-07-15 08:17:32
 * @LastEditors: 苇名一心
 * @LastEditTime: 2020-07-15 11:52:58
 */
#include <stdio.h>
#include <stdlib.h>
struct
{
    int a;
} test1;

typedef struct
{
    int a;
} TEST2;

int main(int argc, char const *argv[])
{
    TEST2 test2;
    test1.a = 1;
    test2.a = 2;
    printf("%d,%d\n", test1.a, test2.a);
    return 0;
}
```

<img src="https://gitee.com/wxy_666/images/raw/master/20200715115648.jpg" alt="2020-07-15_115639" style="zoom:80%;" />

### 2、C++

对于C++，因为C++是面向对象的程序设计语言，结构体struct就相当于是C++的类class，只是默认继承访问权限不同，class默认的是private，strcut默认的是public。你甚至可以在结构体定义函数，这是在C语言里不允许的，并且C++也允许声明结构体变量时省略“struct”，这个在C语言里也不允许，除非使用typedef起别名。

```c++
/*
 * @Copyright: Copyright (c) 2020 苇名一心 All Rights Reserved.
 * @Description: 
 * @Version: 
 * @Author: 苇名一心
 * @Date: 2020-07-15 08:28:24
 * @LastEditors: 苇名一心
 * @LastEditTime: 2020-07-15 11:48:50
 */
#include <iostream>
using namespace std;
struct TEST
{
    int a = 1;
    void hello()
    {
        cout << "hello world" << endl;
    };
};

int main(int argc, char const *argv[])
{
    struct TEST test1;
    TEST test2;
    cout << test1.a << endl;
    test2.hello();
    return 0;
}
```

<img src="https://gitee.com/wxy_666/images/raw/master/20200715115111.jpg" alt="2020-07-15_115102" style="zoom:80%;" />

当然，C++也允许对类或者结构体起别名：

```c++
/*
 * @Copyright: Copyright (c) 2020 苇名一心 All Rights Reserved.
 * @Description: 
 * @Version: 
 * @Author: 苇名一心
 * @Date: 2020-07-15 08:28:24
 * @LastEditors: 苇名一心
 * @LastEditTime: 2020-07-15 11:58:18
 */
#include <iostream>
using namespace std;
typedef struct TEST
{
    int a = 1;
    void hello()
    {
        cout << "hello world" << endl;
    };
} T;

int main(int argc, char const *argv[])
{
    struct TEST test1;
    TEST test2;
    T test3;
    cout << test1.a << endl;
    test2.hello();
    test3.hello();
    return 0;
}
```

<img src="https://gitee.com/wxy_666/images/raw/master/20200715120041.jpg" alt="2020-07-15_120016" style="zoom:80%;" />

直接在定义结构体的时候声明变量也可以：

```c++
/*
 * @Copyright: Copyright (c) 2020 苇名一心 All Rights Reserved.
 * @Description: 
 * @Version: 
 * @Author: 苇名一心
 * @Date: 2020-07-15 08:28:24
 * @LastEditors: 苇名一心
 * @LastEditTime: 2020-07-15 11:59:23
 */
#include <iostream>
using namespace std;
struct TEST
{
    int a = 1;
    void hello()
    {
        cout << "hello world" << endl;
    };
} test3;

int main(int argc, char const *argv[])
{
    struct TEST test1;
    TEST test2;
    cout << test1.a << endl;
    test2.hello();
    test3.hello();
    return 0;
}
```

<img src="https://gitee.com/wxy_666/images/raw/master/20200715120047.jpg" alt="2020-07-15_120029" style="zoom:80%;" />

## 二、关于C99新增的柔性数组

在C99中，结构中的最后一个元素允许是未知大小的数组，这就叫做柔性数组成员，但结构中的柔性数组成员前面必须至少一个其他成员。柔性数组成员允许结构中包含一个大小可变的数组。sizeof返回的这种结构大小不包括柔性数组的内存。包含柔性数组成员的结构用malloc函数进行内存的动态分配，并且分配的内存应该大于结构的大小，以适应柔性数组的预期大小。

例如：

```c
/*
 * @Copyright: Copyright (c) 2020 苇名一心 All Rights Reserved.
 * @Description: 
 * @Version: 
 * @Author: 苇名一心
 * @Date: 2020-07-15 08:17:32
 * @LastEditors: 苇名一心
 * @LastEditTime: 2020-07-15 12:12:45
 */
#include <stdio.h>
#include <stdlib.h>
typedef struct TEST
{
    int a;
    char b[];
} T;

int main(int argc, char const *argv[])
{
    T test;
    T *test_ptr;
    test.a = 1;
    printf("%d,%d,%d,%d\n", test.a, sizeof(T), sizeof(test), sizeof(*test_ptr));
    return 0;
}
```

<img src="https://gitee.com/wxy_666/images/raw/master/20200715121026.jpg" alt="2020-07-15_121020" style="zoom: 80%;" />

我们可以发现，结构体的大小确实等于一个整型的大小4字节，也就是a的大小，b数组是没有占空间的。对于编译器来说，此时长度为0的数组并不占用空间，因为数组名本身不占空间，它只是一个偏移量，数组名这个符号本身代表了一个不可修改的地址常量 ，但对于这个数组的大小，我们可以进行动态分配。当我们对结构体指针test_ptr进行malloc分配内存空间，分配的空间减去sizeof\(T\)就是柔性数组b的空间，我们就可以对b操作了。其实，b就是柔性数组，或者叫动态数组。这个操作常用于缓冲区或者网络通信中构造不定长数据包。

例如：

```c
/*
 * @Copyright: Copyright (c) 2020 苇名一心 All Rights Reserved.
 * @Description:
 * @Version:
 * @Author: 苇名一心
 * @Date: 2020-07-15 08:17:32
 * @LastEditors: 苇名一心
 * @LastEditTime: 2020-07-15 12:20:33
 */
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
typedef struct TEST
{
    int a;
    char b[];
} T;

int main(int argc, char const* argv[])
{
    T* test_ptr;
    test_ptr = (T*)malloc(sizeof(T) + 10 * sizeof(char));
    test_ptr->a = 10;
    strcpy(test_ptr->b, "aaaaaaaaa");
    printf("%d,%d,%s\n", sizeof(*test_ptr), test_ptr->a, test_ptr->b);
    free(test_ptr);
    return 0;
}
```

<img src="https://gitee.com/wxy_666/images/raw/master/20200715122752.jpg" alt="2020-07-15_122744" style="zoom:80%;" />

可以发现T的大小依然是4字节，因此b明确来说不算是结构体成员。但是我们却可以使用长度为10的数组b。但为什么我只能复制9个a到数组b呢，其实9个a的字符串长度就是10，因为常量字符串最后一个字符是‘\\0’，用于标志字符串而结束，因此实际上b\[9\]是‘\\0’。那如果我们此时强制访问越界会怎么样呢？

```c
/*
 * @Copyright: Copyright (c) 2020 苇名一心 All Rights Reserved.
 * @Description:
 * @Version:
 * @Author: 苇名一心
 * @Date: 2020-07-15 08:17:32
 * @LastEditors: 苇名一心
 * @LastEditTime: 2020-07-15 12:20:33
 */
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
typedef struct TEST
{
    int a;
    char b[];
} T;

int main(int argc, char const* argv[])
{
    T* test_ptr;
    test_ptr = (T*)malloc(sizeof(T) + 10 * sizeof(char));
    test_ptr->a = 10;
    strcpy(test_ptr->b, "aaaaaaaaabbbbbbbbbb");
    printf("%d,%d,%s\n", sizeof(*test_ptr), test_ptr->a, test_ptr->b);
    free(test_ptr);
    return 0;
}
```

<img src="https://gitee.com/wxy_666/images/raw/master/20200715130032.jpg" alt="2020-07-15_130000" style="zoom:80%;" />

可以发现产生了异常，但是后面的b却被成功打印了出来。经过调试，发现是free语句产生的异常，如果我们把free语句注释掉，就能正常跑了，但是显然不应该这么做，原因是什么呢？

```c
/*
 * @Copyright: Copyright (c) 2020 苇名一心 All Rights Reserved.
 * @Description:
 * @Version:
 * @Author: 苇名一心
 * @Date: 2020-07-15 08:17:32
 * @LastEditors: 苇名一心
 * @LastEditTime: 2020-07-15 12:20:33
 */
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
typedef struct TEST
{
    int a;
    char b[];
} T;

int main(int argc, char const* argv[])
{
    T* test_ptr;
    test_ptr = (T*)malloc(sizeof(T) + 10 * sizeof(char));
    test_ptr->a = 10;
    strcpy(test_ptr->b, "aaaaaaaaabbbbbbbbbb");
    printf("%d,%d,%s\n", sizeof(*test_ptr), test_ptr->a, test_ptr->b);
    // free(test_ptr);
    return 0;
}
```

<img src="https://gitee.com/wxy_666/images/raw/master/20200715130305.jpg" alt="2020-07-15_130244" style="zoom:80%;" />

其实，在动态分配的时候，会在数组界限外加一个用来标识数组范围的标志，例如b数组，就会在b[-1]和b[10]有两个标志，如果我们在这两个位置赋值，赋值和调用时并不会出错，而是在freed掉b申请的内存时出错，错误的名称就是“before Normal block”或“after Normal block”，一般是后者居多。

那么这个柔性数组相比与在结构体里的动态数组有什么优势呢？从上面的代码也能看出，如果使用普通的动态数组，需要分配两块内存，即动态数组的内存和结构体的内存，在释放时也要先释放b的内存，再释放test_ptr的内存，比较麻烦。但是柔性数组就完全不需要，直接申请结构体的内存即可，释放时也只需要释放结构体申请的内存，非常方便。

还有一点要说明的是：在C99之前是不支持灵活数组成员（Fleible Array Member，int a\[\]）的，C99把它作为一种特例加入了标准。但是，C99所支持的是Incomplete Type（int a\[\]），而不是Zero Array（int a\[0\]）。也就是说类似“int a\[0\];”这种形式是非法的，只不过有些编译器把“int a\[0\];”作为非标准扩展来支持，而且在C99发布之前已经有了这种非标准扩展了，C99发布之后，有些编译器把两者合而为一了而已。 