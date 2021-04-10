# Read

---

**介绍**

    读取内存  从Memory cell方块中读取值
        val:
            可以为任意变量
        index:
            接受:int
            Memory cell:0~31
            Memory bank:0~511

**语法**

游戏内部
```
    read val = cell at index
```
Mindustry
```
    read val cell index
```
java
```java
    public class start{
    public static void main(String[] args){
        int index = 1;
        cell cell=new cell();//读取在这里
        int val = cell.readCell(index);
    }
}

class cell{//模拟Memory cell
    //32个地址
    private final int[] num = new int[32];

    public cell(){
    }

    public int readCell(int index){//读
        try {
            return this.num[index];
        }catch(Exception IndexOutOfRangeException){
            System.out.print("越界");
            return 0;
        }
    }

    public void writeCell(int val, int index){//写
        try {
            this.num[index] = val;
        }catch(Exception IndexOutOfRangeException){
            System.out.print("越界");
        }
    }
}
```
p.s.赋值String时要加""否则为null

[返回](https://lanluz.github.io/Mindustry-guide/)